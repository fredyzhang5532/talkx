package org.bigmouth.gpt.ai.service;

import com.alibaba.dashscope.utils.JsonUtils;
import com.alibaba.fastjson.JSONObject;
import com.bxm.warcar.integration.eventbus.EventPark;
import com.coze.openapi.client.chat.CreateChatReq;
import com.coze.openapi.client.chat.model.ChatEvent;
import com.coze.openapi.client.connversations.message.model.MessageContentType;
import com.coze.openapi.client.connversations.message.model.MessageObjectString;
import com.coze.openapi.client.connversations.message.model.MessageRole;
import com.coze.openapi.service.auth.TokenAuth;
import com.coze.openapi.service.service.CozeAPI;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.gson.JsonObject;
import io.reactivex.functions.Action;
import io.reactivex.functions.Consumer;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.bigmouth.gpt.ApplicationConfig;
import org.bigmouth.gpt.ai.ChatService;
import org.bigmouth.gpt.ai.entity.ChatServiceArgument;
import org.bigmouth.gpt.ai.entity.Message;
import org.bigmouth.gpt.entity.AttachVo;
import org.bigmouth.gpt.entity.ChatRequest;
import org.bigmouth.gpt.entity.Friend;
import org.bigmouth.gpt.entity.Prompt;
import org.bigmouth.gpt.utils.Constants;
import org.jetbrains.annotations.NotNull;
import org.reactivestreams.Subscription;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.coze.openapi.service.config.Consts.COZE_CN_BASE_URL;

/**
 * @author Allen Hu
 * @date 2025/4/25
 */
@Slf4j
@Configuration
public class CozeCnChatServiceImpl implements ChatService {

    private final ApplicationConfig applicationConfig;
    private final EventPark eventPark;

    public CozeCnChatServiceImpl(ApplicationConfig applicationConfig, EventPark eventPark) {
        this.applicationConfig = applicationConfig;
        this.eventPark = eventPark;
    }

    @Override
    public Integer platformType() {
        return Constants.AiPlatform.PLATFORM_TYPE_COZE_CN;
    }

    @Override
    public void chat(ChatServiceArgument argument) {
        ChatRequest chatRequest = argument.getChatRequest();
        Friend friend = argument.getFriend();
        Prompt prompt = argument.getPrompt();

        List<Message> messages = chatRequest.getMessages();

        List<com.coze.openapi.client.connversations.message.model.Message> messageList = convert2Message(messages);
        int messageContextSize = prompt.getMessageContextSize();
        if (messageContextSize > 0 && messageList.size() > messageContextSize) {
            messageList = messageList.stream().skip(messageList.size() - messageContextSize).collect(Collectors.toList());
        }

        String token = friend.getCozeAccessKey();
        String botId = friend.getCozeBotId();
        String userId = "TALKX-" + argument.getUser().getId();

        TokenAuth tokenAuth = new TokenAuth(token);

        CozeAPI coze = new CozeAPI.Builder()
                .baseURL(COZE_CN_BASE_URL)
                .auth(tokenAuth)
                .readTimeout((int) Constants.DEFAULT_TIMEOUT.toMillis())
                .build();

        String variables = prompt.getVariables();
        Map<String, String> varMaps = convert2Map(variables);

        CreateChatReq chatReq = CreateChatReq.builder()
                .botID(botId)
                .userID(userId)
                .customVariables(varMaps)
                .messages(messageList)
                .build();
        coze.chat().stream(chatReq)
                .subscribe(new Consumer<ChatEvent>() {
                    @Override
                    public void accept(ChatEvent chatEvent) throws Exception {

                    }
                }, new Consumer<Throwable>() {
                    @Override
                    public void accept(Throwable throwable) throws Exception {

                    }
                }, new Action() {
                    @Override
                    public void run() throws Exception {

                    }
                }, new Consumer<Subscription>() {
                    @Override
                    public void accept(Subscription subscription) throws Exception {

                    }
                });
    }

    @NotNull
    private List<com.coze.openapi.client.connversations.message.model.Message> convert2Message(List<Message> messages) {
        return messages.stream().map(message -> {
            com.coze.openapi.client.connversations.message.model.Message e = new com.coze.openapi.client.connversations.message.model.Message();
            MessageRole messageRole = MessageRole.fromString(message.getRole());
            e.setRole(messageRole);

            String content = message.getContent();
            List<AttachVo> attachVos = message.getAttachments();
            if (CollectionUtils.isNotEmpty(attachVos)) {
                // 多模态内容
                List<MessageObjectString> contents = Lists.newArrayList();
                MessageObjectString text = MessageObjectString.buildText(content);
                contents.add(text);

                for (AttachVo attachVo : attachVos) {
                    MessageObjectString image = MessageObjectString.buildImageByURL(attachVo.getUrl());
                    contents.add(image);
                }

                e.setContentType(MessageContentType.OBJECT_STRING);
                e.setContent(JSONObject.toJSONString(contents));
            } else {
                // 纯文本
                e.setContentType(MessageContentType.TEXT);
                e.setContent(content);
            }
            return e;
        }).collect(Collectors.toList());
    }

    @Override
    public String getDefaultRequestUri() {
        return null;
    }

    @Override
    public int getOrder() {
        return 0;
    }

    static JsonObject convert2JsonObject(String variables) {
        return StringUtils.isBlank(variables) ? new JsonObject() : JsonUtils.parse(variables);
    }

    static Map<String, String> convert2Map(String variables) {
        Map<String, String> result = Maps.newHashMap();
        JsonObject jsonObject = convert2JsonObject(variables);
        jsonObject.entrySet().forEach(entry -> result.put(entry.getKey(), entry.getValue().getAsString()));
        return result;
    }
}
