import styles from "./LogIn.module.css";
import Link from "next/link";


const Arrow = <svg  className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0
    8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1
    11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>

export const LogIn = () => (
    <div className={styles._}>
        <div className={styles.login}>
            <div className={styles.loginTop}>
                <div>
                    <Link href="/for-clients">Частным клиентам</Link>
                </div>
                <div>
                    <Link href="/for-clients">Корпоративным клиентам</Link>
                </div>
            </div>
            <div className={styles.slogan}>
                Наши клиенты самые довольные!!!
            </div>
            <div className={styles.lk}>
                <a href="http://lk.mosobl-telecom.ru/" target="_blank">
                    <div>{Arrow}</div>
                    Личный кабинет
                </a>
            </div>
        </div>

        <div className={styles.contact}>
            <a href="tel:84997043491" className={styles.phone}>
                8 (499) 704 34 91
            </a>
            <div className={styles.sloganTwo}>
                Интернет
            </div>
            <div className={styles.sloganTwo}>
                в каждый
            </div>
            <div className={styles.sloganTwo}>
                дом
            </div>
        </div>
    </div>
)