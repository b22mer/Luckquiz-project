package com.luckquiz.quizroom.message;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GuestTurnEndSignalResponse {
    private String type;
    private String turnEndResponse;
}
