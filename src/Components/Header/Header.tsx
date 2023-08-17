'use client'

import Link from "next/link";

import styles from "./Header.module.css";
import {useState} from "react";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles._}>
            <header className={styles.header}>
                <Link className={styles.logo} href="/">МосОблТелеком</Link>
                <Link className={styles.headerLinks} href="/">О компании</Link>
                <Link className={styles.headerLinks} href="/for-clients">Услуги и цены</Link>
                <Link className={styles.headerLinks} href="/for-pay">Как оплатить</Link>
                <Link className={styles.headerLinks} href="/">Клиенту сети</Link>
                <Link className={styles.headerLinks} href="/contacts">Контакты</Link>
                <Link className={styles.headerLinks} href="/news">Новости</Link>
                <Link className={styles.headerLinks} href="/zone">Зона охвата</Link>
            </header>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.mobileButton}
            >
                Меню
            </button>

            {isOpen &&
                <div className={styles.mobileMenu}>
                    <Link className={styles.headerLinks} href="/">Главная</Link>
                    <Link className={styles.headerLinks} href="/for-clients">Услуги и цены</Link>
                    <Link className={styles.headerLinks} href="/for-pay">Как оплатить</Link>
                    <Link className={styles.headerLinks} href="/">Клиенту сети</Link>
                    <Link className={styles.headerLinks} href="/contacts">Контакты</Link>
                    <Link className={styles.headerLinks} href="/news">Новости</Link>
                    <Link className={styles.headerLinks} href="/zone">Зона охвата</Link>
                </div>}
        </div>
    )
}