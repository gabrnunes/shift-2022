import InstagramIcon from "@components/_ui/instagramicon/InstagramIcon";
import LinkedinIcon from "@components/_ui/linkedinicon/LinkedinIcon";
import TwitterIcon from "@components/_ui/twittericon/TwitterIcon";
import Image from "next/image";
import type { Workshop } from "../card/Card";

import styles from "./Modal.module.scss";

type Props = {
    isOpen: boolean;
    workshop?: Workshop;
    closeModal: () => void;
};

export default function Modal(props: Props) {
    if (!props.isOpen) return null;
    if (!props.workshop) return null;

    return (
        <div className={styles.bg} onClick={props.closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <header className={styles.header}>
                    <span className={styles.type}>Extras</span>
                    <span className={styles.close} onClick={props.closeModal}>
                        <img src="/img/close.svg" />
                    </span>
                </header>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <strong>{props.workshop.hour}</strong> {props.workshop.room}
                    </div>
                    <h2>{props.workshop.title}</h2>

                    <span className={styles.description}>{props.workshop.description}</span>
                </div>
                <footer className={styles.footer}>
                    <div className={styles.speaker}>
                        <div className={styles.photo}>
                            <Image
                                src={props.workshop.speaker.photo}
                                objectFit="cover"
                                layout="fill"
                                alt={props.workshop.speaker.name}
                            />
                        </div>

                        <span className={styles.name}>
                            <h3>{props.workshop.speaker.name}</h3>
                            <h4>{props.workshop.speaker.subtitle}</h4>
                        </span>
                        <span className={styles.social}>
                            {props.workshop.speaker.twitter && (
                                <a
                                    href={props.workshop.speaker.twitter}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <TwitterIcon />
                                </a>
                            )}
                            {props.workshop.speaker.instagram && (
                                <a
                                    href={props.workshop.speaker.instagram}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <InstagramIcon />
                                </a>
                            )}
                            {props.workshop.speaker.linkedin && (
                                <a
                                    href={props.workshop.speaker.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <LinkedinIcon />
                                </a>
                            )}
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
