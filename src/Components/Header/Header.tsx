import Link from "next/link";

import styles from "./Header.module.css";

export const Header = () => (
    <header className={styles.header}>
        <Link className={styles.logo} href="/">МосОблТелеком</Link>
        <Link className={styles.headerLinks} href="/">О компании</Link>
        <Link className={styles.headerLinks} href="/for-clients">Услуги и цены</Link>
        <Link className={styles.headerLinks} href="/">Как оплатить</Link>
        <Link className={styles.headerLinks} href="/">Клиенту сети</Link>
        <Link className={styles.headerLinks} href="/">Контакты</Link>
        <Link className={styles.headerLinks} href="/">Новости</Link>
        <Link className={styles.headerLinks} href="/">Зона охвата</Link>
    </header>
)