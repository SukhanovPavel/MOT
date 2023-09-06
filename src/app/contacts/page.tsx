import React from 'react';
import {PageLayout} from "@/shared/PageLayout/PageLayout";
import {ContactMap} from "@/Components/ContactMap/ContactMap";
import {Contacts} from "@/Components/Contacts/Contacts";
import {CheckAddress} from "@/Components/CheckAddress/CheckAddress";
import {ConnectButton} from "@/Components/ConnectButton/ConnectButton";

const Page = () => {
    return (
        <PageLayout>
            <Contacts />
            <ContactMap />
            <ConnectButton />
        </PageLayout>
    );
};

export default Page;