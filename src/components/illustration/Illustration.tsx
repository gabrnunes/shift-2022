import styles from "./Illustration.module.scss";

export default function Illustration() {
    return (
        <section className={styles.illustrationContainer}>
            <img
                src="/img/illustration.png"
                alt="Mulher subindo escada para colar um cartaz e um homem sentado em uma cadeira com formato de mão"
                className={styles.illustration}
            />
        </section>
    )
}
