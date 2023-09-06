import React from 'react';
import styles from "./AddressModal.module.css";

type Props = {
    text: string;
    openModal: () => void;
    sendData: () => void;
}

export const AddressModal = ({text, openModal, sendData}: Props) => {
    return (
        <div
            className={styles.modal}
            onClick={(event) => {
                event.target === event.currentTarget && openModal()
            }}
        >
            <div className={styles.modalWindow}>
                <div className={styles.text}>{text}</div>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        sendData();
                    }}
                    className={styles.button}
                >
                    Подать заявку на подключение
                </button>
            </div>
        </div>
    );
};