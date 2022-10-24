import Cta from "@components/_ui/cta/Cta";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.logo}>
                <div className={styles.presents}>
                    <a href="https://kusama.network/" target="_blank" rel="noreferrer noopener">
                        <img src="/img/sponsors/kusama-1.svg" alt="Kusama" />
                    </a>
                    Apresenta
                </div>
                <img src="/img/logo-shift.svg" alt="Logotipo do Shift Festival" />
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

            <Cta color="yellow" />
        </section>
    );
}
