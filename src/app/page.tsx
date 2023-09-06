import React from "react";
import {CheckAddress} from "@/Components/CheckAddress/CheckAddress";
import {LogIn} from "@/Components/LogIn/LogIn";
import {News} from "@/Components/News/News";
import {About} from "@/Components/About/About";
import {PageLayout} from "@/shared/PageLayout/PageLayout";
import {ContactMap} from "@/Components/ContactMap/ContactMap";
import {Contacts} from "@/Components/Contacts/Contacts";
import Head from "next/head";

export default function Home() {
    return (
        <PageLayout>

            <CheckAddress/>

            <LogIn/>

            <News/>

            <About/>

            <Contacts/>

            <ContactMap/>

        </PageLayout>
    )
}