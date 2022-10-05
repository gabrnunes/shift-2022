import styles from "./ArrowIcon.module.scss"

type Props = {
    color: "red"
}

export default function ArrowIcon(props: Props) {
    return (
        <svg width="170" height="27" viewBox="0 0 170 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={[styles.arrowIcon, styles[props.color]].join(" ")}>
            <path fillRule="evenodd" clipRule="evenodd" d="M167.455 14.1332L-1.86487e-07 14.1332L0 12L167.455 12L167.455 14.1332Z" />
            <rect x="156.414" width="18" height="2" transform="rotate(45 156.414 0)" />
            <rect x="155" y="24.7279" width="18" height="2" transform="rotate(-45 155 24.7279)" />
        </svg>
    )
}
