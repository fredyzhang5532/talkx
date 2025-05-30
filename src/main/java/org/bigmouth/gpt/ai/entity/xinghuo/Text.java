package org.bigmouth.gpt.ai.entity.xinghuo;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @author huxiao
 * @date 2023/10/13
 * @since 1.0.0
 */
@Data
@Accessors(chain = true)
public class Text {
    /**
     * Just response
     */
    private int index;
    private String role;
    private String content;
}
