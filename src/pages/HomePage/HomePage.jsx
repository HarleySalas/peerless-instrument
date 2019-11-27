import React from "react";
import Page from "../../layout/Page";

import "./HomePage.scss";

import HomeHero from "./HomeHero/HomeHero";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeFocus from "./HomeFocus/HomeFocus";
import HomeClients from "./HomeClients/HomeClients";

import PageCTA from "../../components/PageCTA/PageCTA";

const HomePage = () => {
  return (
    <Page>
      <HomeHero />
      <HomeAbout />
      <HomeFocus />
      <HomeClients />
      <PageCTA text="Contact us now" link="/contact" />
    </Page>
  );
};

export default HomePage;
