import React from 'react';
import styles from "./Modal.module.css";

type Props = {
    openModal: () => void;
    address?: string;
}

export const Modal = ({openModal, address}: Props) => {
    return (
        <div
            className={styles.modal}
            onClick={(event) => {
                event.target === event.currentTarget && openModal()
            }}
        >
            <div className={styles.modalWindow}>
                <div className={styles.text}>
                    <label>Имя: <input/></label>
                    <label>Телефон: <input/></label>
                    <label>Адрес: <input defaultValue={address}/></label>
                </div>
                <button className={styles.button}>Отправить</button>
            </div>
        </div>
    );
};