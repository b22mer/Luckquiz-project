import lottie, { AnimationItem } from "lottie-web";
import animationData from "./Podium.json";
import styles from "./Podium.module.css";
import { useEffect, useRef, useState } from "react";
import profile1 from "assets/profile/profile1.png";
import profile2 from "assets/profile/profile2.png";
import profile3 from "assets/profile/profile3.png";
import confetti from "canvas-confetti";

const Podium = () => {
  const aniBox = useRef<HTMLDivElement>(null);
  const [showFirstProfile, setShowFirstProfile] = useState(false);
  const [showSecondProfile, setShowSecondProfile] = useState(false);
  const [showThirdProfile, setShowThirdProfile] = useState(false);

  useEffect(() => {
    // 시상대 json animation
    const animationParams: Parameters<typeof lottie.loadAnimation>[0] = {
      container: aniBox.current!,
      renderer: "svg",
      loop: false, // loop 옵션을 false로 설정
      autoplay: true,
      animationData: animationData,
    };

    const animationInstance: AnimationItem = lottie.loadAnimation(animationParams);

    // 시상대에 맞게 순위별 프로필 랜더링
    setTimeout(() => {
      setShowFirstProfile(true);
    }, 990);
    setTimeout(() => {
      setShowSecondProfile(true);
    }, 1415);
    setTimeout(() => {
      setShowThirdProfile(true);
    }, 1985);

    setTimeout(() => {
      confetti({
        particleCount: 250,
        spread: 200,
        origin: {
          x: 0.6,
          // since they fall down, start a bit higher than random
          y: 0.85,
        },
      });
    }, 1950);

    // 랜더링 후 비정상적인 종료시, animation 과 프로필 제거
    return () => {
      animationInstance.destroy();
      setShowFirstProfile(false);
      setShowSecondProfile(false);
      setShowThirdProfile(false);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showFirstProfile && (
        <div className={styles.profileBox} style={{ position: "absolute", left: "31%", bottom: "56.5%" }}>
          <img src={profile1} alt="" className={styles.profileImg} />
          <div className={styles.nameTag}>무지개꽃잎이</div>
        </div>
      )}
      {showSecondProfile && (
        <div className={styles.profileBox} style={{ position: "absolute", left: "-4%", bottom: "45%" }}>
          <img src={profile2} alt="" className={styles.profileImg} />
          <div className={styles.nameTag}>무지개꽃잎이</div>
        </div>
      )}
      {showThirdProfile && (
        <div className={styles.profileBox} style={{ position: "absolute", left: "66%", bottom: "35.5%" }}>
          <img src={profile3} alt="" className={styles.profileImg} />
          <div className={styles.nameTag}>무지개꽃잎이</div>
        </div>
      )}
      <div ref={aniBox}></div>
    </div>
  );
};

export default Podium;
