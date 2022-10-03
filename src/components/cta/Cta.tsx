import ArrowIcon from "@components/arrowicon/ArrowIcon";
import styles from "./Cta.module.scss";

type Props = {
    color: "yellow"
}

export default function Cta(props: Props) {
    return (
        <button className={[styles.cta, styles[props.color]].join(" ")}>
            <div className={styles.unhovered}>
                <b>Garanta sua vaga</b>
            </div>

            <div className={styles.hovered}>
                <span>Passaporte <data value="119.00">R$ 119</data></span>
                <ArrowIcon color="red" />
            </div>
        </button>
    )
}
