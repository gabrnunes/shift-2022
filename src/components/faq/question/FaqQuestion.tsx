import styles from "./FaqQuestion.module.scss"

type Props = {
    question: string
    answer: string
}

export default function FaqQuestion(props: Props) {
    return (
        <details className={styles.faqQuestion}>
            <summary className={styles.question}>{props.question}</summary>
            <p className={styles.answer}>{props.answer}</p>
        </details>
    )
}
