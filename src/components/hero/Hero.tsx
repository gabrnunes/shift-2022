import Cta from "@components/cta/Cta";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.logo}>
                <Image src="/img/logo-shift.svg" alt="Logotipo do Shift Festival" layout="fill" objectFit="contain" />
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <time dateTime="2022-12-03 09:00" className={styles.date}>
                        03.dezembro.2022
                    </time>
                    <address className={styles.location}>
                        <span>Joinville - SC</span>
                        <hr className={styles.separator} />
                        <span>Ágora Tech Park</span>
                    </address>
                </div>
            </div>

            <Cta>
                Garanta sua vaga
            </Cta>
        </section>
    )
}
