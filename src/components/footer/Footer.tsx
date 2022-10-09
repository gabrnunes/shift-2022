import DiscordIcon from "@components/_ui/discordicon/DiscordIcon";
import InstagramIcon from "@components/_ui/instagramicon/InstagramIcon";
import TwitterIcon from "@components/_ui/twittericon/TwitterIcon";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <img src="/img/logo-shift-alternate.svg" alt="SH*FT Festival" />
                <div className={styles.text}>
                    03 de dezembro de 2022
                    <br />
                    9:00 - 18:00
                    <br />
                    Ágora Tech Park
                </div>
                <div className={styles.social}>
                    <a
                        href="https://twitter.com/shiftfestivalcc"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <TwitterIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/shiftfestival.cc/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://shiftfestival.cc/discord"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <DiscordIcon />
                    </a>
                </div>
            </section>
            <section className={styles.codeOfConduct}>
                Acreditamos em um evento diverso e inclusivo. Conheça nosso{" "}
                <a
                    href="https://shiftcollab.notion.site/C-digo-de-conduta-a59a15f1cf464858a281395cec4513f8"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    código de conduta
                </a>
                .
            </section>
        </>
    );
}
