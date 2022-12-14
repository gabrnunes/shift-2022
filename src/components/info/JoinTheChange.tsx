import Cta from "@components/_ui/cta/Cta";
import Image from "next/image";
import styles from "./JoinTheChange.module.scss";

export default function JoinTheChange() {
    return (
        <section className={styles.info}>
            <div className={styles.text}>
                <h2 className={styles.headline}>
                    Participe da <em>mudança</em>
                </h2>

                <p className={styles.textBlock}>
                    A terceira edição do Sh*ft Festival acontece no dia 03 de dezembro de 2022, no{" "}
                    <strong>Ágora Tech Park</strong>, em Joinville.
                </p>

                <p className={styles.textBlock}>
                    Os 3º lote sai por R$ 159 e, com você, nosso evento será ainda mais incrível!
                </p>
            </div>

            <div className={styles.photo}>
                <Image
                    src="/img/photo-of-last-edition.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                />
                <a
                    href="https://g.page/agoratechpark?share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.hovered}
                >
                    <Image src="/img/icons/map.png" width={56} height={85} />
                    <span>
                        Veja
                        <br />
                        no mapa
                    </span>
                </a>
            </div>

            <Cta color="red" />
        </section>
    );
}
