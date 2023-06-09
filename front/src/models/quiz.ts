export interface getQuizItem {
    id: number,
    type: string,
    quiz: string,
    question: string,
    quizUrl: string,
    answer: string,
    answerList: string[],
    one: string,
    two: string,
    three: string,
    four: string,
    game: string,
    timer: number,
    quizNum: number,
    quizSize: number
}

export interface setQuizItem {
    id?:number,
    type: string,
    quiz: string,
    quizUrl: string,
    answer: string,
    one: string,
    two: string,
    three: string,
    four: string,
    question: string,
    answerList: string[],
    game: string,
    timer: number,
    isValid: boolean;
}


export interface getQuizSet {
    name: string,
    hostId: number,
    quizList: getQuizItem[]
}

export interface setQuizSet {
    id?:number,
    name?:string,
    hostId:string,
    templateId: number,
    isValid?: boolean,
    quizList: setQuizItem[]
}


export interface EmotionResult {
    roi: {x: number, y: number, width: number, height: number}
    emotion: {
        value: string,
        confidence: number
    }

}

export interface HostResult {
    count: number;
    playerImg: number;
    playerName: string;
    rankNow: number;
    rankPre: number;
    scoreGet: number;
    quizNum: number;
}

export interface GuestResult {
  isUp: string;
  rankDiff: number;
  scoreGet: number;
  quizNum: number;
  rankNow: number;
  totalRankNow: number;
  totalRankPre: number;
  totalScore: number;
}

export interface FinalResultList {
    sender: string,
    img: number,
    rank: number,
    score: number
}

export interface SubmitAnswerResult {
    answer?: string;
    count?: number
}