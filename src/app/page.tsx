import {Header} from "@/Components/Header/Header";
import {CheckAddress} from "@/Components/CheckAddress/CheckAddress";
import {LogIn} from "@/Components/LogIn/LogIn";
import {News} from "@/Components/News/News";
import {About} from "@/Components/About/About";

import styles from "../styles/home.module.css";
import {PageLayout} from "@/shared/PageLayout/PageLayout";
import {ContactMap} from "@/Components/ContactMap/ContactMap";
import React from "react";
import {Contacts} from "@/Components/Contacts/Contacts";

export default function Home() {
  return (
      <PageLayout>

          <CheckAddress />

          <LogIn />

          <News />

          <About />

          <Contacts />

          <ContactMap />

      </PageLayout>
  )
}