import styles from "./Cta.module.scss";

type Props = {
    color: "yellow"
}

export default function Cta(props: Props) {
    return (
        <button className={[styles.cta, styles[props.color]].join(" ")}>
        </button>
    )
}
