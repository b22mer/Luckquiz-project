import React from 'react';
import styles from './GuestQuizRanking.module.css'
import crown from 'assets/images/pngwing.png'
import rank from 'assets/images/rank.png'
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GuestResult, HostResult } from 'models/quiz';
import img1 from "assets/profile/profile1.png";
import img2 from "assets/profile/profile2.png";
import img3 from "assets/profile/profile3.png";
import img4 from "assets/profile/profile4.png";
import img5 from "assets/profile/profile5.png";
import img6 from "assets/profile/profile6.png";
import img7 from "assets/profile/profile7.png";
import img8 from "assets/profile/profile8.png";
import img9 from "assets/profile/profile9.png";
import img10 from "assets/profile/profile10.png";
import img11 from "assets/profile/profile11.png";
import img12 from "assets/profile/profile12.png";
import img13 from "assets/profile/profile13.png";
import img14 from "assets/profile/profile14.png";
import img15 from "assets/profile/profile15.png";
import img16 from "assets/profile/profile16.png";
import { Icon } from '@iconify/react';
interface GuestQuizRankingProps {
    result:GuestResult;
}

const GuestQuizRanking = ({ result }: GuestQuizRankingProps) => {
    const quizGameType = useSelector((state: RootState) => state.socket.quizItem)
    const IMAGES = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
    ];

    return (
        <div className={styles.QuizRanking}>

            <div className={styles.rank_logo}>

                <div className={styles.logos}>
                    <img src={rank} alt="logo" />
                </div>

            </div>
            <section className={styles.rank_box}>


                <main className={styles.crown}>
                    <img src={crown} alt='crown' className={styles.crown_img} />
                </main>

                <div className={styles.real_rank} >
                    <div className={styles.real_num}>{result.rankDiff}위</div>
                </div>

                <div className={styles.diff_box} >
                    <div className={styles.diff_number}>{result.rankDiff}</div>
                    <div className={styles.diff_updown}>
                        {
                            result.isUp==="true" ? <Icon icon="mdi:arrow-down-bold" color="green" rotate={2} />:
                            result.isUp==="false"? <Icon icon="mdi:arrow-down-bold" color="red" />:  <Icon icon="mdi:menu-swap" color="gray" />
                        }
                 </div>
                </div>

                <div className={styles.score_box} >
                    <div className={styles.score_number}>+2240</div>
                </div>

      


           

            </section>
        </div>
    );
};

export default GuestQuizRanking;