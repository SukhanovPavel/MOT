import React from "react";
import {Header} from "@/Components/Header/Header";
import Head from "next/head";

import styles from "./PageLayout.module.css";


export const PageLayout = ({children}: React.PropsWithChildren<{}>) => (
    <div className={styles._}>
        <Head>
            <title>MocОблТелеком. Интернет в ваш дом</title>
            <meta name="description" content="Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/motFavicon.png" type="image/png"/>
        </Head>
        <Header />

        <main className={styles.main}>
            {children}
        </main>
    </div>
)