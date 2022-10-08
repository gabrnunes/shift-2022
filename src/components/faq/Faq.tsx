import styles from "./Faq.module.scss";
import questionList from "./FaqQuestionList.json";
import FaqQuestion from "./question/FaqQuestion";

export default function Faq() {
    return (
        <section className={styles.faq}>
            <h2 className={styles.heading} title="Meu pau no teu ouvido 😎">
                Duvida? Duvido!
            </h2>

            <div className={styles.questionsWrapper}>
                {questionList.map(item => <FaqQuestion question={item.question} answer={item.answer} />)}
            </div>
        </section>
    )
}
