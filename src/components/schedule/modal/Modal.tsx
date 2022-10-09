import InstagramIcon from "@components/_ui/instagramicon/InstagramIcon";
import LinkedinIcon from "@components/_ui/linkedinicon/LinkedinIcon";
import TwitterIcon from "@components/_ui/twittericon/TwitterIcon";
import Image from "next/image";
import type { Talk } from "../card/Card";

import styles from "./Modal.module.scss";

type Props = {
    isOpen: boolean;
    talk?: Talk;
    closeModal: () => void;
};

export default function Modal(props: Props) {
    if (!props.isOpen) return null;
    if (!props.talk) return null;

    return (
        <div className={styles.bg} onClick={props.closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <header className={styles.header}>
                    <span className={styles.type}>{props.talk?.type}</span>
                    <span className={styles.close} onClick={props.closeModal}>
                        <img src="/img/close.svg" />
                    </span>
                </header>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <strong>{props.talk.hour}</strong> {props.talk.room}
                    </div>
                    <h2>{props.talk.title}</h2>

                    <span className={styles.description}>{props.talk.description}</span>
                </div>
                <footer className={styles.footer}>
                    {props.talk.speakers.map((speaker, index) => (
                        <div className={styles.speaker} key={index}>
                            <div className={styles.photo}>
                                <Image
                                    src={speaker.photo}
                                    objectFit="cover"
                                    layout="fill"
                                    alt={speaker.name}
                                />
                            </div>

                            <span className={styles.name}>
                                <h3>{speaker.name}</h3>
                                <h4>{speaker.subtitle}</h4>
                            </span>
                            <span className={styles.social}>
                                {speaker.twitter && (
                                    <a
                                        href={speaker.twitter}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <TwitterIcon />
                                    </a>
                                )}
                                {speaker.instagram && (
                                    <a
                                        href={speaker.instagram}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <InstagramIcon />
                                    </a>
                                )}
                                {speaker.linkedin && (
                                    <a
                                        href={speaker.linkedin}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <LinkedinIcon />
                                    </a>
                                )}
                            </span>
                        </div>
                    ))}
                </footer>
            </div>
        </div>
    );
}
