import React from 'react';

import styles from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h2>Контакты:</h2>
            <p>Московская область, г. Шатура, ул.Проспект Ильича дом 40</p>
            <p>Московская область, г. Рошаль, ул.Свердлова, дом 10</p>
            <p><a href="tel:+74997043491">+7 (499) 704 34 91</a></p>
            <p><a href="mailto:operator@mosobl-telecom.ru">operator@mosobl-telecom.ru</a></p>
        </div>
    );
};