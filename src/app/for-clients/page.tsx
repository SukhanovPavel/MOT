import {PageLayout} from "@/shared/PageLayout/PageLayout";
import styles from "./page.module.css";

export default function ForClients()  {
    return (
        <PageLayout>
            <div className={styles.title}>Страница клиента >></div>
            <div className={styles.login}>

                <div className={styles.loginTop}>
                    <div className={styles.topHeaders+" "+styles.left}>
                        Частным клиентам:
                    </div>
                    <div className={styles.topHeaders+" "+styles.right}>
                        Корпоративным клиентам:
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.lk}>Тариф частным клиентам</div>
                    <div className={styles.lk}>Тариф корпоративным клиентам</div>
                    <div className={styles.lk}>Тариф частным клиентам</div>
                    <div className={styles.lk}>Тариф корпоративным клиентам</div>
                    <div className={styles.lk}>Тариф частным клиентам</div>
                    <div className={styles.lk}>Тариф корпоративным клиентам</div>
                </div>


                <div className={styles.slogan}>
                    Наши клиенты самые довольные!!!
                </div>
            </div>
        </PageLayout>
    )
}