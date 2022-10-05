import styles from "./Cta.module.scss";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Cta(props: Props) {
    return (
        <button className={styles.cta}>
            {props.children}
        </button>
    )
}
