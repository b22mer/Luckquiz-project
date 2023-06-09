package com.luckquiz.quizroom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TemplateInfoResponse {
    private Integer id;
    private QuizType quizType;
    private String quiz;
    private String quizUrl;
    private String answer;
    private String one;
    private String two;
    private String three;
    private String four;
    private String[] answerList;
    private String game;
    private Integer timer;
    private String hostNickName;

    public void setId(Integer id) {
        this.id = id;
    }

    public void setQuizType(QuizType quizType) {
        this.quizType = quizType;
    }

    public void setQuiz(String quiz) {
        this.quiz = quiz;
    }

    public void setQuizUrl(String quizUrl) {
        this.quizUrl = quizUrl;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public void setOne(String one) {
        this.one = one;
    }

    public void setTwo(String two) {
        this.two = two;
    }

    public void setThree(String three) {
        this.three = three;
    }

    public void setFour(String four) {
        this.four = four;
    }

    public void setAnswerList(String[] answerList) {
        this.answerList = answerList;
    }

    public void setTimer(Integer timer) {
        this.timer = timer;
    }

    public void setGame(String game) {
        this.game = game;
    }
}
