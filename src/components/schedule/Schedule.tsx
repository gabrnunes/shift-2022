import { useState } from "react";

import Rolante from "@components/_ui/rolante/Rolante";

import Modal from "./modal/Modal";
import Card, { Talk } from "./card/Card";
import scheduleList from "./Schedule.json";
import styles from "./Schedule.module.scss";

export default function Schedule() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<Talk>();

    const handleClick = (talk: Talk) => {
        setModalData(talk);

        setTimeout(() => {
            setIsModalOpen(true);
        }, 300);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} talk={modalData} closeModal={() => setIsModalOpen(false)} />
            <section className={styles.section}>
                <Rolante
                    bigger
                    icon="/img/asteristico.svg"
                    text="Programação"
                    joke="Procastinação"
                />

                <div className={styles.container}>
                    {scheduleList[0].map((item, index) => (
                        <Card key={index} talk={item} handleClick={handleClick} />
                    ))}
                </div>

                <div className={styles.container}>
                    {scheduleList[1].map((item, index) => (
                        <Card key={index} talk={item} handleClick={handleClick} />
                    ))}
                </div>

                <Rolante
                    icon="/img/pause.svg"
                    text="Pausa para o almoço"
                    joke="Pausa para o tremoço"
                />

                <div className={styles.container}>
                    {scheduleList[2].map((item, index) => (
                        <Card key={index} talk={item} handleClick={handleClick} />
                    ))}
                </div>

                <div className={styles.container}>
                    {scheduleList[3].map((item, index) => (
                        <Card key={index} talk={item} handleClick={handleClick} />
                    ))}
                </div>

                <div className={styles.container}>
                    {scheduleList[4].map((item, index) => (
                        <Card key={index} talk={item} handleClick={handleClick} />
                    ))}
                </div>

                <Rolante icon="/img/chopp.svg" text="Happy hour" joke="Hora feliz" />
            </section>
        </>
    );
}
