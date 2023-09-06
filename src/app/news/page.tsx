import React from 'react';
import {Header} from "@/Components/Header/Header";
import styles from "@/app/for-pay/page.module.css";
import {PageLayout} from "@/shared/PageLayout/PageLayout";
import {LogIn} from "@/Components/LogIn/LogIn";
import {News} from "@/Components/News/News";
import {CheckAddress} from "@/Components/CheckAddress/CheckAddress";

const Page = () => {
    return (
        <div>
            <PageLayout>
                <CheckAddress/>
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
            </PageLayout>
        </div>
    );
};

export default Page;