import Image from "next/image";

import styles from "./Card.module.scss";

type Speaker = {
    name: string;
    subtitle: string;
    photo: string;
    twitter: string | null;
    linkedin: string | null;
    instagram: string | null;
};

export type Workshop = {
    hour: string;
    room: string;
    title: string;
    description: React.ReactNode;
    speaker: Speaker;
};

type Props = {
    workshop: Workshop;
    handleClick: (workshop: Workshop) => void;
};

export default function Card(props: Props) {
    return (
        <article className={styles.card} onClick={() => props.handleClick(props.workshop)}>
            <div className={styles.image}>
                <Image
                    src={props.workshop.speaker.photo}
                    alt={props.workshop.speaker.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className={styles.data}>
                <div className={styles.info}>
                    <strong>{props.workshop.hour}</strong> {props.workshop.room}
                </div>

                <h2 className={styles.title}>{props.workshop.title}</h2>
                <span className={styles.speaker}>{props.workshop.speaker.name}</span>
            </div>
        </article>
    );
}
