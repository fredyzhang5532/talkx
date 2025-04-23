package org.bigmouth.gpt.ai.service;

import com.alibaba.dashscope.app.*;
import com.bxm.warcar.integration.eventbus.EventPark;
import com.bxm.warcar.utils.StringHelper;
import com.google.common.collect.Lists;
import com.google.gson.JsonObject;
import io.reactivex.Flowable;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.bigmouth.gpt.ApplicationConfig;
import org.bigmouth.gpt.ai.ChatService;
import org.bigmouth.gpt.ai.entity.*;
import org.bigmouth.gpt.entity.AttachVo;
import org.bigmouth.gpt.entity.ChatRequest;
import org.bigmouth.gpt.entity.Friend;
import org.bigmouth.gpt.event.ChatCompletionEvent;
import org.bigmouth.gpt.event.ChatRequestEvent;
import org.bigmouth.gpt.exceptions.AiAccountException;
import org.bigmouth.gpt.utils.Constants;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * @author Allen Hu
 * @date 2025/4/22
 */
@Slf4j
@Configuration
public class AliyunDashscopeAppChatServiceImpl implements ChatService {

    private final ApplicationConfig applicationConfig;
    private final EventPark eventPark;
    private final Application application = new Application();

    public AliyunDashscopeAppChatServiceImpl(ApplicationConfig applicationConfig, EventPark eventPark) {
        this.applicationConfig = applicationConfig;
        this.eventPark = eventPark;
    }

    @Override
    public Integer platformType() {
        return Constants.AiPlatform.PLATFORM_TYPE_ALIYUN_DASHSCOPE;
    }

    @Override
    public void chat(ChatServiceArgument argument) {
        ChatRequest chatRequest = argument.getChatRequest();
        Friend friend = argument.getFriend();

        List<Message> messages = chatRequest.getMessages();
        Message last = messages.get(messages.size() - 1);
        List<AttachVo> attachments = last.getAttachments();
        List<String> images = Lists.newArrayList();
        if (attachments != null && !attachments.isEmpty()) {
            for (AttachVo attachment : attachments) {
                String url = attachment.getUrl();
                images.add(url);
            }
        }
        final StringBuilder msgBuilder = new StringBuilder();
        final FlowableState state = new FlowableState();
        Usage usage = new Usage();

        JsonObject jsonObject = new JsonObject();

        ApplicationParam param = ApplicationParam.builder()
                .apiKey(Optional.ofNullable(friend.getAliyunDashscopeApiKey()).filter(StringUtils::isNotBlank).orElse(applicationConfig.getAliyunDashscopeApiKey()))
                .appId(friend.getAliyunDashscopeAppId())
                .workspace(friend.getAliyunDashscopeWorkspaceId())
                .sessionId(chatRequest.getSessionId())
                .prompt(last.getContent())
                .images(images)
                .incrementalOutput(true)
                .hasThoughts(true)
                .bizParams(jsonObject)
                .build();

        try {
            AtomicBoolean firstPacket = new AtomicBoolean(true);
            Flowable<ApplicationResult> result = application.streamCall(param);
            result.blockingForEach(data -> {
                if (firstPacket.compareAndSet(true, false)) {
                    state.initFirstByteTimeInNanoTime();
                    // 发送请求成功的事件
                    eventPark.post(new ChatRequestEvent(this, chatRequest, null, argument.getUser()));
                }
                ApplicationOutput output = data.getOutput();
                ApplicationUsage appUsage = data.getUsage();
                String text = output.getText();
                String sessionId = output.getSessionId();
                if (StringUtils.isNotEmpty(text)) {
                    msgBuilder.append(text);
                    argument.getWriteConsumer().handle(StringHelper.convert(text));
                    argument.getFlushRunnable().handle();
                }
                if (Objects.nonNull(appUsage)) {
                    List<ApplicationUsage.ModelUsage> models = appUsage.getModels();
                    for (ApplicationUsage.ModelUsage model : models) {
                        Integer inputTokens = model.getInputTokens();
                        Integer outputTokens = model.getOutputTokens();
                        usage.setPromptTokens(usage.getPromptTokens() + inputTokens);
                        usage.setCompletionTokens(usage.getCompletionTokens() + outputTokens);
                        usage.setTotalTokens(usage.getTotalTokens() + (inputTokens + outputTokens));
                    }
                }
            });
        } catch (Exception e) {
            log.error("call aliyun dashscope app error: {}", e.getMessage());

            state.setThrowable(e);

            throw new AiAccountException(e);
        } finally {
            Handler4 complete = argument.getComplete();
            if (Objects.nonNull(complete)) {
                String systemPrompt = null;
                Message message = chatRequest.getMessages().get(0);
                if (StringUtils.equals(message.getRole(), GptRole.SYSTEM.getName())) {
                    systemPrompt = message.getContent();
                }
                complete.handle(systemPrompt, msgBuilder.toString());
            }

            // 发送请求完成的事件
            ChatCompletionEvent.Parameter parameter = ChatCompletionEvent.Parameter.builder()
                    .user(argument.getUser())
                    .prompt(argument.getPrompt())
                    .aiModel(argument.getAiModel())
                    .apiKey(argument.getApiKey())
                    .completion(msgBuilder.toString())
                    .startNanoTime(state.getFirstByteTimeInNanoTime())
                    .usage(usage)
                    .build();
            eventPark.post(new ChatCompletionEvent(this, parameter));
            if (log.isDebugEnabled()) {
                log.debug("Post ChatCompletionEvent!");
            }
        }
    }

    @Override
    public String getDefaultRequestUri() {
        return null;
    }

    @Override
    public int getOrder() {
        return 0;
    }
}
