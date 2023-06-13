import styles from "./News.module.css";

export const News = () => (
    <div>
        <p className={styles.title}>Новости:</p>
        <div className={styles.news}>
            <p>
                {`${(new Date()).getDate()}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}г.`}
            </p>
            <p className={styles.bold}>Здесь будут новости компании</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis ipsam itaque modi repellendus? Amet, commodi
                consequuntur culpa cum ea, eos facilis harum maiores natus
                quod repellat, sequi sint soluta voluptate?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur dicta exercitationem harum inventore ipsum,
                iure nemo voluptas? Aspernatur consequuntur cum eveniet
                impedit placeat qui, vero. Ab consequuntur deserunt maxime unde.
            </p>
        </div>
    </div>
)