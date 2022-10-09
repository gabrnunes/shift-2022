import { useState } from "react";

import Modal from "./modal/Modal";
import Card, { Workshop } from "./card/Card";
import workshopsList from "./Workshops.json";
import styles from "./Workshops.module.scss";

export default function Workshops() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<Workshop>();

    const handleClick = (talk: Workshop) => {
        setModalData(talk);

        setTimeout(() => {
            setIsModalOpen(true);
        }, 300);
    };

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                workshop={modalData}
                closeModal={() => setIsModalOpen(false)}
            />
            <section className={styles.section}>
                <h2 className={styles.title}>Workshops</h2>
                <div className={styles.container}>
                    {workshopsList.map((item, index) => (
                        <Card key={index} workshop={item} handleClick={handleClick} />
                    ))}

                    <div className={styles.subscribe}>
                        <img src="/img/sparkles.png" width={100} />
                        Chegue cedo e faça sua inscrição no credenciamento
                    </div>
                </div>
            </section>
        </>
    );
}
