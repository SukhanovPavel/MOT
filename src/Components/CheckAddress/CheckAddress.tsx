'use client'

import styles from "./CheckAddress.module.css";
import {address as defaultAddress} from "@/address/address";
import {useState} from "react";
import {AddressModal} from "@/Components/AddressModal/AddressModal";
import {ConnectButton} from "@/Components/ConnectButton/ConnectButton";
import {Modal} from "@/Components/Modal/Modal";

export const CheckAddress = () => {

    const [modal, setModal] = useState(false);
    const [modalSend, setModalSend] = useState(false);
    const [searchPanel, setSearchPanel] = useState(false);
    const [text, setText] = useState('');

    const addresses = defaultAddress.filter(item => item.address.toLowerCase().includes(text.toLowerCase()));

    return (
        <>
        <form className={styles.leftCol}>
            <span>Проверить адрес:</span>
            <span className={styles.inputWrap}>
              <label>Начните вводить город или улицу: </label>
              <input
                  value={text}
                  onChange={({target: {value}}) => {
                      addresses.length !== 0 && setSearchPanel(true);
                      setText(value);
                  }}
                  className={styles.input}
              />

                {searchPanel && text && addresses.length !== 0 && <div className={styles.searchPanel}>
                    {addresses.map((item, index) =>
                            index < 50 ?
                                <p
                                    onClick={() => {
                                        setText(item.address)
                                        setSearchPanel(false)
                                    }}
                                    key={item.id}
                                >
                                    {item.address}
                                </p>
                                : null)
                    }
                </div>}

            </span>
            <button
                className={styles.searchButton}
                onClick={(event) => {
                    event.preventDefault();
                    text && setModal(true);
                }}
            >
                Проверить
            </button>

            {text && modal && <AddressModal
                openModal={() => setModal(false)}
                sendData={() => {
                    setModal(false);
                    setModalSend(true);
                }}
                text={addresses.length !== 0 ?
                    "Такой адрес можно подключить" : "Такой адрес еще не подключен"}
            />}
        </form>
            {modalSend &&
                <Modal
                    clearSearchValue={() => setText("")}
                    openModal={() => setModalSend(false)}
                    address={text}
                />
            }
        <ConnectButton sendData={() => setModalSend(true)}/>
        </>
    )
}