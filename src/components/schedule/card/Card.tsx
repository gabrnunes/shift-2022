import Image from "next/image";
import classNames from "classnames";

import styles from "./Card.module.scss";

type Speaker = {
    name: string;
    subtitle: string;
    photo: string;
    twitter: string | null;
    linkedin: string | null;
    instagram: string | null;
};

export type Talk = {
    soon?: boolean;
    type: string;
    hour: string;
    room: string;
    title: string;
    description: React.ReactNode;
    speakers: Speaker[];
};

type Props = {
    talk: Talk;
    handleClick: (talk: Talk) => void;
};

export default function Card(props: Props) {
    const speakersLength = props.talk.speakers.length - 1;

    return (
        <article
            className={classNames(styles.card, { [styles.soon]: props.talk.soon })}
            onClick={!props.talk.soon ? () => props.handleClick(props.talk) : undefined}
        >
            <div className={styles.info}>
                <span>{props.talk.hour}</span>
                <span className={styles.room}>{props.talk.room}</span>
            </div>

            {props.talk.soon ? (
                <div className={styles.soonMessage}>
                    Em breve
                    <br />
                    Em breve
                    <br />
                    Em breve
                    <br />
                    Em breve
                    <br />
                    Em breve
                    <br />
                    Em breve
                </div>
            ) : (
                <>
                    <div className={styles.images}>
                        {props.talk.speakers.map((speaker, index) => (
                            <span className={styles.image} key={index}>
                                <Image
                                    key={index}
                                    src={speaker.photo}
                                    alt={speaker.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </span>
                        ))}
                    </div>
                    <header className={styles.title}>
                        <h2>{props.talk.title}</h2>
                    </header>
                    <footer className={styles.speakers}>
                        {props.talk.speakers.map((speaker, index) => {
                            let prefix = "";

                            if (index > 0 && index < speakersLength) {
                                prefix = ", ";
                            } else if (index > 0 && index == speakersLength) {
                                prefix = " e ";
                            }

                            return (
                                <>
                                    {prefix} <span key={index}>{speaker.name}</span>
                                </>
                            );
                        })}
                    </footer>
                </>
            )}
        </article>
    );
}
