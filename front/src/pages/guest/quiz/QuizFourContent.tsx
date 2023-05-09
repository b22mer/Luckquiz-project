import React from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import logo from '../../../assets/images/timer1.png'


import styles from "./QuizFourContent.module.css"
import { setQuizItem } from 'models/quiz';
import QuizGameTitle from 'components/common/QuizGameTitle';

type QuizFourContentProps = {
    content: setQuizItem;
}


const QuizFourContent = ({ content }: QuizFourContentProps) => {
    const [item, setItem] = useState("");

    const answerHandler = (answer: string) => {
        setItem(answer);
    }
    return (
        <div className={styles.QuizFourContent}>


        {/* <QuizGameTitle title={"wsdddddddddddddddddd"}/> */}

            <div className={styles.content_title}>
                <input type="text" value={content.game} />
            </div>

            <div className={styles.content_images}>
                <img src={"https://image.hmall.com/static/0/0/32/88/2088320002_1.jpg?RS=600x600&AR=0"} alt='좋아' />
            </div>

            <div className={styles.content_answerbox}>
                <div className={styles.content_answer} onClick={() => answerHandler('one')} style={item === 'one' ? { opacity: "70%" } : {}}>
                    <div className={styles.content_color} style={{ backgroundColor: "var(--select-one)" }}><div><Icon icon="material-symbols:circle-outline" /></div></div>
                    <div className={styles.content_input}><input type="text" disabled value={content.one} /></div>
                </div>

                <div className={styles.content_answer} onClick={() => answerHandler('two')} style={item === 'two' ? { opacity: "70%" } : {}}>
                    <div className={styles.content_color} style={{ backgroundColor: "var( --select-two)" }}><div><Icon icon="ph:triangle-bold" /></div></div>
                    <div className={styles.content_input}><input type="text" disabled value={content.two} /></div>
                </div>

                <div className={styles.content_answer} onClick={() => answerHandler('three')} style={item === 'three' ? { opacity: "70%" } : {}}>
                    <div className={styles.content_color} style={{ backgroundColor: "var( --select-three)" }}><div><Icon icon="ph:x-bold" /></div></div>
                    <div className={styles.content_input}><input type="text" disabled value={content.three} /></div>
                </div>

                <div className={styles.content_answer} onClick={() => answerHandler('four')} style={item === 'four' ? { opacity: "70%" } : {}}>
                    <div className={styles.content_color} style={{ backgroundColor: "var(--select-four)" }}><div><Icon icon="material-symbols:square-outline-rounded" /></div></div>
                    <div className={styles.content_input}><input type="text" disabled value={content.four} /></div>
                </div>
            </div>


        </div>
    );
};

export default QuizFourContent;