'use client'

import styles from "./CheckAddress.module.css";
import {address as defaultAddress} from "@/address/address";
import {useState} from "react";
export const CheckAddress = () => {

    const [address, setAddress] = useState(defaultAddress);
    const [searchPanel, setSearchPanel] = useState(false);
    const [text, setText] = useState('');

    return (
        <form className={styles.leftCol}>
            <span>Проверить адрес:</span>
            <span className={styles.inputWrap}>
              <label>Начните вводить город или улицу: </label>
              <input
                  value={text}
                  onChange={({target: {value}}) => {
                      setSearchPanel(true);
                      setText(value);
                  }}
                  className={styles.input}
              />

              {searchPanel && text && <div className={styles.searchPanel}>
                {address.filter(item =>
                    item.address.toLowerCase().includes(text.toLowerCase())).map((item, index) =>
                    index < 50 ? <p key={item.id}>{item.address}</p> : null)}
              </div>}

            </span>
            <button
                className={styles.searchButton}
                onClick={(event) => {event.preventDefault()}}
            >
                Проверить
            </button>
        </form>
    )
}