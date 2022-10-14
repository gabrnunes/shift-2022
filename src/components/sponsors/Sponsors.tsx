import styles from "./Sponsors.module.scss";

export default function Sponsors() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.presents}></div>
                <div className={styles.sponsors}>
                    Patrocínio
                    <div className={styles.container}>
                        <a href="https://avell.com.br/" target="_blank" rel="noreferrer noopener">
                            <img src="/img/sponsors/avell.svg" alt="Avell" />
                        </a>
                        <a
                            href="https://www.fablabjoinville.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/fablab.svg" alt="FabLab Joinville" />
                        </a>
                        <a href="https://self.art.br/" target="_blank" rel="noreferrer noopener">
                            <img src="/img/sponsors/self.svg" alt="Self Design Studio" />
                        </a>
                        <a href="https://velev.com.br/" target="_blank" rel="noreferrer noopener">
                            <img src="/img/sponsors/velev.svg" alt="Velev Contabilidade" />
                        </a>
                        <a
                            href="https://soarcriativo.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/soar.svg" alt="Soar" />
                        </a>
                        <a
                            href="https://www.commagica.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/magica.svg" alt="Magica Comunicação" />
                        </a>
                        <a href="https://exit.ag/" target="_blank" rel="noreferrer noopener">
                            <img src="/img/sponsors/exit.svg" alt="Exit" />
                        </a>
                        <a
                            href="https://www.perfilimoveisjoinville.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/perfil-imoveis.svg" alt="Perfil Imóveis" />
                        </a>
                        <a
                            href="https://www.agoratechpark.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/agora.png" alt="Ágora Tech Park" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.partners}>
                    Apoio
                    <div className={styles.container}>
                        <a
                            href="https://www.anandayoga.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/ananda.png" alt="Ananda Yoga para Todos" />
                        </a>
                        <a
                            href="https://all.accor.com/hotel/5633/index.pt-br.shtml"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/ibis.svg" alt="Ibis Hotel" />
                        </a>
                        <a
                            href="https://www.gartenshopping.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/garten-shopping.png" alt="Garten Shopping" />
                        </a>
                        <a
                            href="https://www.facebook.com/EditalPaineis/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/edital.svg" alt="Edital Painéis" />
                        </a>
                        <a
                            href="https://www.ainglobal.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/ain-global.svg" alt="AinGlobal" />
                        </a>
                    </div>
                </div>
                <div className={styles.madeBy}>
                    Realização
                    <div className={styles.container}>
                        <a
                            href="https://www.onionrings.com.br/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="/img/sponsors/onion-rings.svg" alt="Onion Rings" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
