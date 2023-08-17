import React from "react";
import {Header} from "@/Components/Header/Header";

import styles from "./PageLayout.module.css";


export const PageLayout = ({children}: React.ReactNode | React.ReactElement | React.ReactElement[]) => (
    <div className={styles._}>

        <Header />

        <main className={styles.main}>
            {children}
        </main>
    </div>
)