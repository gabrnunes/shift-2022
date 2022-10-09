import styles from "./Faq.module.scss";
import questionList from "./FaqQuestionList.json";
import FaqQuestion from "./question/FaqQuestion";

export default function Faq() {
    return (
        <section className={styles.faq}>
            <h2 className={styles.heading}>
                Duvida? Duvido!
            </h2>

            <div className={styles.questionsWrapper}>
                {questionList.map((item, index) => <FaqQuestion question={item.question} answer={item.answer} key={index} />)}
            </div>
        </section>
    )
}
