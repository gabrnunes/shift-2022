import styles from "./Intro.module.scss"

export default function Intro() {
    return (
        <section className={styles.introWrapper}>
            <h1 className={styles.headline}>
                Um <em className={styles.circled}>festival</em> de<br />
                <em className={styles.glowed}>criatividade</em>, inovação,<br />
                futuro e <em className={styles.underlined}>sociedade</em>
            </h1>
        </section>
    )
}
