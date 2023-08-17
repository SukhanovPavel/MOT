import React from "react";
import {Header} from "@/Components/Header/Header";

import styles from "./PageLayout.module.css";


export const PageLayout = ({children}: React.PropsWithChildren<{}>) => (
    <div className={styles._}>

        <Header />

        <main className={styles.main}>
            {children}
        </main>
    </div>
)