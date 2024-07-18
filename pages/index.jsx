import Clients from "@/components/clients";
import Consulting from "@/components/consulting";
import Contact from "@/components/contact";
import Deliver from "@/components/deliver";
import Development from "@/components/development";
import Direction from "@/components/direction";
import Erp from "@/components/erp";
import Goodzone from "@/components/goodzone";
import Iman from "@/components/iman";
import Main from "@/components/main";
import Optimization from "@/components/optimization";
import Sms from "@/components/sms";
import Team from "@/components/team";
import Tools from "@/components/tools";
import Uiux from "@/components/uiux";
import Work from "@/components/work";
import { Loader } from "lucide-react";
import Head from "next/head";
import React from "react";

function Index() {
  return (
    <div className="center">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="" />
        <title>
          IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение
          ERP систем, разработка мобильных приложений, UI / UX дизайн,
          оптимизация инфраструктуры
        </title>
      </Head>
      <div className="loader">
        <img src="/loader_2.gif" alt="" />
        <img src="/logo.png" alt="" />
      </div>
      <Main />
      <Direction />
      <Team />
      <Development />
      <Erp />
      <Uiux />
      <Optimization />
      <Consulting />
      <Tools />
      <Clients />
      <Deliver />
      <Sms />
      <Goodzone />
      <Iman />
      <Work />
      <Contact />
    </div>
  );
}

export default Index;
