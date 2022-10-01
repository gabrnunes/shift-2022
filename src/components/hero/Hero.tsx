import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.logo}>
                <Image src="/img/logo-shift.svg" alt="Logotipo do Shift Festival" layout="fill" objectFit="contain" />
            </div>
        </section>
    )
}
