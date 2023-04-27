export interface getQuizItem {
    id: number,
    quizType: string,
    quiz: string,
    quizUrl: string,
    answer: string,
    one: string,
    two: string,
    three: string,
    four: string,
    answerList: string[],
    game: string,
    timer: number,
}

export interface setQuizItem {
    quizType: string,
    quiz: string,
    quizUrl: string,
    answer: string,
    one: string,
    two: string,
    three: string,
    four: string,
    answerList: string[],
    game: string,
    timer: number,
}


export interface getQuizSet {
    id: number,
    name: string,
    hostId: number,
    quizList: getQuizItem[];
}

export interface setQuizSet {
    name: string,
    hostId: number,
    quizList: setQuizItem[];
}