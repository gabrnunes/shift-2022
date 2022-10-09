import { ReactNode } from "react";
import Marquee from "react-fast-marquee";
import classNames from "classnames";

import styles from "./Rolante.module.scss";

type Props = {
    text: string;
    joke: string;
    icon: string;
    bigger?: boolean;
};

export default function Rolante(props: Props) {
    return (
        <div
            className={classNames(styles.container, {
                [styles.bigger]: props.bigger,
            })}
        >
            <img src={props.icon} className={styles.icon} />
            <Marquee className={styles.marquee} gradient={false} speed={40}>
                &nbsp;
                {props.text}&nbsp;{props.joke}&nbsp;
                {Array(10)
                    .fill(1)
                    .map((c, index) => (
                        <>
                            <span key={index}>&nbsp;{props.text}&nbsp;</span>
                        </>
                    ))}
            </Marquee>
        </div>
    );
}
