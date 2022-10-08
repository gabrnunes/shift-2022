import ArrowIcon from "@components/_ui/arrowicon/ArrowIcon";
import styles from "./Cta.module.scss";

type Props = {
    color: "yellow" | "red"
}

export default function Cta(props: Props) {
    return (
        <a href="#" className={[styles.cta, styles[props.color]].join(" ")}>
            <div className={styles.unhovered}>
                <b>Garanta sua vaga</b>
            </div>

            <div className={styles.hovered}>
                <span>Passaporte <data value="119.00">R$ 119</data></span>

                {props.color == "yellow" &&
                    <ArrowIcon color="red" />
                }

                {props.color == "red" &&
                    <ArrowIcon color="green" />
                }
            </div>
        </a>
    )
}
