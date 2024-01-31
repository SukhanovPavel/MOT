import React from "react";
import {Header} from "@/Components/Header/Header";
import cx from "classnames";

import styles from "./PageLayout.module.css";

type Props = {
    children: React.PropsWithChildren<{}>;
    noGrid: boolean;
}


interface PageLayoutProps extends React.PropsWithChildren<{}> {
    noGrid?: boolean;
}


export const PageLayout: React.FC<PageLayoutProps> = ({children, noGrid}) => {

    const styleGrid = cx( {[styles.main]: true}, {[styles.dFlex]: noGrid})

    return (
        <div className={styles._}>
            <main className={styleGrid}>
                {children}
            </main>
        </div>
    )
}