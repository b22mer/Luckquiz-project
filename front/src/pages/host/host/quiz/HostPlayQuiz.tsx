import ButtonWithLogo from "components/common/ButtonWithLogo";
import QuizShortContent from "components/quiz/QuizShortContent";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";
import styles from "./HostPlayQuiz.module.css";
import QuizOxContent from "components/quiz/QuizOxContent";
import QuizFourContent from "components/quiz/QuizFourContent";
import "chart.js/auto";
// import { Doughnut } from "react-chartjs-2";
import TimerBar from "components/common/TimerBar";
import CountdownAni from "components/common/CountdownAni";
import SubmitChart from "components/host/quiz/SubmitChart";
import { socketActions } from "store/webSocket";
import StartFinishText from "components/common/StartFinishText";
import ReadyGame from "components/common/ReadyGame";
import QuizShortAnswer from "components/quiz/QuizShortAnswer";
import QuizOxAnswer from "components/quiz/QuizOxAnswer";
import QuizFourAnswer from "components/quiz/QuizFourAnswer";
import HostQuizRanking from "components/quiz/HostQuizRanking";
import HostGameRanking from "components/quiz/HostGameRanking";
import pngwing from "assets/images/pngwing.png";

const HostPlayQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quiz_id } = useParams();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const quizItem = useSelector((state: RootState) => state.socket.quizItem);
  const hostResult = useSelector((state: RootState) => state.socket.getHostResult);
  const finalResult = useSelector((state: RootState) => state.socket.getFinalResultList);
  const submitAnswerResult = useSelector((state: RootState) => state.socket.getSubmitAnswerResult);

  const [modalOn, SetModalOn] = useState(quizItem?.quiz ? false : true);
  const ref = useRef<HTMLDivElement>(null);

  // 하나의 퀴즈에서 보여지는 컴포넌트 순서
  // -1: 게임일때 카운트다운 이전에 설명 화면, 0: 카운트다운, 1: 퀴즈/게임 시작, 2: 채점중, 3: 정답 및 랭킹 발표
  const [order, setOrder] = useState(0);

  // 퀴즈 다음문제 새로 가져오면 0부터 다시 진행
  // 게임이면 -1부터 진행
  useEffect(() => {
    quizItem?.quiz ? setOrder(0) : setOrder(-1);
  }, [quizItem]);

  // 퀴즈 채점결과가 들어오면 결과컴포넌트
  useEffect(() => {
    hostResult && setOrder(3);
  }, [hostResult]);

  // 최종결과가 들어오면 어워즈페이지로 이동
  useEffect(() => {
    finalResult && navigate(`/host/quiz/${quiz_id}/awards`);
  }, [finalResult]);

  // 결과 랭킹 모달 밖에 클릭시, 모달닫기
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        SetModalOn(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 호스트 기준 퀴즈시간이 끝나면 quizgameend publish
  const quizGameEnd = () => {
    dispatch(
      socketActions.sendAnswerMessage({
        destination: "/app/turnEnd", // 퀴즈 끝났다는 end publish 출제자가 직접 컨트롤 or 시간 다 가면 자동으로 전송
        body: { hostId: userId, roomId: quiz_id },
      }),
    );
  };

  return (
    quizItem && (
      <div className={styles.container}>
        {order === -1 && <ReadyGame handleOrder={setOrder} />}
        {order === 0 && <CountdownAni handleOrder={setOrder} order={order} />}
        {order === 1 && (
          <>
            <div className={styles.header}>
              <TimerBar handleOrder={setOrder} handleSubmit={quizGameEnd} />
              <div className={styles.quizNum}>
                {quizItem?.quizNum + 1}/{quizItem?.quizSize}
              </div>
            </div>
            {quizItem?.game ? (
              <ReadyGame />
            ) : (
              <>
                {quizItem?.quiz === "text" && <QuizShortContent />}
                {quizItem?.quiz === "ox" && <QuizOxContent />}
                {quizItem?.quiz === "four" && <QuizFourContent />}
              </>
            )}
            <>
              {/*               
                <div className={styles.currenSubmitChart}>
                  <Doughnut data={chartConfig} />
                </div> 
              */}

              {quizItem.quiz && (
                <div className={styles.nextBtn}>
                  <ButtonWithLogo
                    name="채점하기"
                    fontSize="18px"
                    height="45px"
                    onClick={() => {
                      dispatch(
                        socketActions.sendAnswerMessage({
                          destination: "/app/turnEnd", // 퀴즈 끝났다는 end publish 출제자가 직접 컨트롤 or 시간 다 가면 자동으로 전송
                          body: { hostId: userId, roomId: quiz_id },
                        }),
                      );
                      setOrder(2);
                    }}
                  />
                </div>
              )}
            </>
          </>
        )}
        {order === 2 && (
          <>
            <StartFinishText title="채점중인뎁숑" />
          </>
        )}
        {order === 3 && (
          // 제출현황 차트 & 랭킹 컴포넌트(모달)
          <>
            {quizItem?.quiz && (
              <>
                <div className={styles.flexend} onClick={() => SetModalOn((pre) => !pre)}>
                  <div ref={ref} className={styles.open_btn}>
                    <img src={pngwing} alt="" />
                    <div className={styles.text}>전체 랭킹</div>
                  </div>
                </div>
                <div className={styles.submitChart}>
                  <SubmitChart />
                </div>
                <div ref={ref}>
                  {quizItem?.quiz === "text" && <QuizShortAnswer />}
                  {quizItem?.quiz === "ox" && <QuizOxAnswer />}
                  {quizItem?.quiz === "four" && <QuizFourAnswer />}
                </div>
              </>
            )}
            {quizItem.game && hostResult && <HostGameRanking />}
            {quizItem.quiz && modalOn && hostResult ? (
              <>
                <HostQuizRanking />
              </>
            ) : (
              <></>
            )}

            {/* 마지막 문제이면 최종결과 버튼*/}
            {/* 아니면 다음퀴즈 버튼*/}
            {quizItem.quizSize - quizItem.quizNum === 1 ? (
              <ButtonWithLogo
                name="최종 결과보기"
                fontSize="18px"
                height="45px"
                onClick={() =>
                  dispatch(
                    socketActions.sendAnswerMessage({
                      destination: "/app/finalEnd",
                      body: { hostId: userId, roomId: quiz_id },
                    }),
                  )
                }
              />
            ) : (
              <div className={styles.nextBtn}>
                <ButtonWithLogo
                  name="건너뛰기"
                  fontSize="18px"
                  height="45px"
                  onClick={() =>
                    dispatch(
                      socketActions.sendAnswerMessage({
                        destination: "/app/quiz/rollback",
                        body: { hostId: userId, roomId: quiz_id },
                      }),
                    )
                  }
                />
                <ButtonWithLogo
                  name="다음 퀴즈"
                  fontSize="18px"
                  height="45px"
                  onClick={() =>
                    dispatch(
                      socketActions.sendAnswerMessage({
                        destination: "/app/quiz/next",
                        body: { hostId: userId, roomId: quiz_id },
                      }),
                    )
                  }
                />
              </div>
            )}
          </>
        )}
      </div>
    )
  );
};
export default HostPlayQuiz;
