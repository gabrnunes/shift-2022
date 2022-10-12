import Rolante from "@components/_ui/rolante/Rolante";
import styles from "./Intro.module.scss";

export default function Intro() {
    return (
        <>
            <section className={styles.introWrapper}>
                <h1 className={styles.headline}>
                    Um <em className={styles.circled}>festival</em> de
                    <br />
                    <em className={styles.glowed}>criatividade</em>, inovação,
                    <br />
                    futuro e <em className={styles.underlined}>sociedade</em>
                </h1>

                <p className={styles.textBlock}>
                    Um lugar onde reunimos pessoas incríveis para discutir ideias que impactam a
                    forma como vivemos.
                </p>

                <p className={styles.textBlock}>
                    Descubra futuros possíveis, conheça histórias mais humanas, amplie seus
                    horizontes, faça parte de um grande movimento.
                </p>
            </section>
        </>
    );
}
