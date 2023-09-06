'use client'

import React, {useState} from 'react';
import styles from "./ConnectButton.module.css";
import {Modal} from "@/Components/Modal/Modal";

type Props = {
    sendData?: () => void;
}

export const ConnectButton = ({sendData}: Props) => {

    const [modalSend, setModalSend] = useState(false);

    return (
        <>
            <button
                className={styles.connectButton}
                onClick={sendData ? sendData : () => setModalSend(true)}
            >
                Подключиться к сети
            </button>
            {modalSend && <Modal openModal={() => setModalSend(false)} />}
        </>
    );
};