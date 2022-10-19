import { useState, useEffect } from "react";
import classNames from "classnames";

import Cta from "@components/_ui/cta/Cta";
import styles from "./Floating.module.scss";

export default function Floating() {
    const [scrollTop, setScrollTop] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = (e: any) => {
            setScrollTop(e.target.documentElement.scrollTop);
            const bottom =
                Math.ceil(window.innerHeight + window.scrollY) >=
                document.documentElement.scrollHeight - 200;

            if (scrollTop > window.innerHeight) {
                setVisible(true);
            } else {
                setVisible(false);
            }

            if (bottom) {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div
            className={classNames(styles.banner, {
                [styles.visible]: visible,
            })}
        >
            <p className={styles.testimonial}>
                {'"'}Evento realmente muito legal, com uma galera muito alto astral. Teve muito
                conteúdo muito bom em um ambiente ótimo e leve.{'"'}
            </p>
            <Cta color="red" />
        </div>
    );
}
