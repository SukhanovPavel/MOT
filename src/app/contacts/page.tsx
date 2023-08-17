import React from 'react';
import {PageLayout} from "@/shared/PageLayout/PageLayout";
import {ContactMap} from "@/Components/ContactMap/ContactMap";

import styles from "./page.module.css";
import {Contacts} from "@/Components/Contacts/Contacts";

const Page = () => {
    return (
        <PageLayout>
            <Contacts />
            <ContactMap />
        </PageLayout>
    );
};

export default Page;