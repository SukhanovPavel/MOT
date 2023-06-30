import React from 'react';
import {Header} from "@/Components/Header/Header";
import styles from "@/app/for-pay/page.module.css";

const Page = () => {
    return (
        <div>
            <Header />
            <div className={styles._}>
                <p className={styles.title}>
                    Новости
                </p>
                <div className={styles.about}>
                    <h3>Здесь будут новости компании:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores at, deleniti
                        enim explicabo harum in mollitia nemo neque nihil quaerat quam qui repudiandae similique velit
                        vero voluptates voluptatibus.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;