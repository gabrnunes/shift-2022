import ArrowIcon from "@components/_ui/arrowicon/ArrowIcon";
import { useEffect, useState } from "react";
import styles from "./Cta.module.scss";

type Props = {
    color: "yellow" | "red";
};

function getRefQueryParam(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export default function Cta(props: Props) {
    const [utmParams, setUtmParams] = useState("");

    useEffect(() => {
        const utm_source = getRefQueryParam("utm_source");
        const utm_medium = getRefQueryParam("utm_medium");
        const utm_content = getRefQueryParam("utm_content");
        const utm_campaign = getRefQueryParam("utm_campaign");
        const utm_term = getRefQueryParam("utm_term");
        let utmParamQueryString = "";

        if (utm_source) {
            utmParamQueryString += "&utm_source=" + utm_source;
        }
        if (utm_medium) {
            utmParamQueryString += "&utm_medium=" + utm_medium;
        }
        if (utm_content) {
            utmParamQueryString += "&utm_content=" + utm_content;
        }
        if (utm_campaign) {
            utmParamQueryString += "&utm_campaign=" + utm_campaign;
        }
        if (utm_term) {
            utmParamQueryString += "&utm_term=" + utm_term;
        }

        setUtmParams(utmParamQueryString);
    }, []);

    return (
        <a
            href={`https://www.sympla.com.br/evento/shft-festival-2022/1746253?${utmParams}`}
            className={[styles.cta, styles[props.color]].join(" ")}
        >
            <div className={styles.unhovered}>
                <b>Garanta sua vaga</b>
            </div>

            <div className={styles.hovered}>
                <span>
                    2º lote <data value="139.00">R$ 139</data>
                </span>

                {props.color == "yellow" && <ArrowIcon color="red" />}

                {props.color == "red" && <ArrowIcon color="green" />}
            </div>
        </a>
    );
}
