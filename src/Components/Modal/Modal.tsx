import React, {useState} from 'react';
import cx from "classnames";
import styles from "./Modal.module.css";

type Props = {
    clearSearchValue: () => void;
    openModal: () => void;
    address?: string;
}

export const Modal = ({clearSearchValue, openModal, address}: Props) => {

    const token = process.env.NEXT_PUBLIC_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_CHAT_ID;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");

    const finalText = `Заявка на подключение интернета:
    Имя: ${name} 
    Телефон: ${phone} 
    Адрес: ${street ? street : address}`;

    function sendMessage(text: string | any) {
        const url = `https://api.telegram.org/bot${token}/sendMessage`

        const obj = {
            chat_id: chatId,
            text: text
        };

        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
        setTimeout(() => {
            // setFormName("");
            // setFormNumber("");
            // lookPopUp(true);
            // setTimeout(() => lookPopUp(false), 3000);
        }, 0);
        openModal();
        clearSearchValue();
        alert("Заявка отправлена. В ближайшее время с вами свяжется наш специалист")
    };

    const [reg, setReg] = useState(false);

    const inputStyle = cx({[styles.setText]: reg});

    return (
        <div
            className={styles.modal}
            onClick={(event) => {
                event.target === event.currentTarget && openModal()
            }}
        >
            <div className={styles.modalWindow}>
                <div className={styles.text}>
                    <label>
                        Имя: <input
                            value={name}
                            onChange={ (event) => setName(event.target.value)}
                        />
                    </label>
                    <label className={inputStyle}>
                        Телефон: <input
                            value={phone}
                            onChange={ (event) => {
                                setPhone(event.target.value);
                                /^((\+7|7|8)+([0-9]){10})$/.test(event.target.value) || !event.target.value
                                    ? setReg(false) : setReg(true)
                            }}
                        />
                    </label>
                    <label>
                        Адрес: <input
                            defaultValue={address}
                            value={street ? street : address}
                            onChange={(event) => setStreet(event.target.value)}
                        />
                    </label>
                </div>
                <button
                    className={styles.button}
                    onClick={name && phone ?
                        () => {
                            reg ? alert("Заполните данные корректно") : sendMessage(finalText);
                        } : () => alert("Заполните данные")}
                >
                    Отправить
                </button>
            </div>
        </div>
    );
};