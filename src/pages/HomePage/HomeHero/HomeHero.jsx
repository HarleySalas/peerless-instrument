import React from "react";

import "./HomeHero.scss";

import HomeHeroNav from "./HomeHeroNav/HomeHeroNav";

import heroVideo from "./assets/hero-video.mp4";

import { usePageLoaded } from "../../../utils";

const HomeHero = () => {
  const loaded = usePageLoaded();
  return (
    <section className="homehero">
      <div className={`homehero__wrapper ${loaded && "homehero__wrapper--animated"}`}>
        <HomeHeroNav />
        <video src={heroVideo} type="video/mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
        <div className={`homehero__overlay ${loaded && "homehero__overlay--animated"}`}>
          <div className="container homehero__container">
            <h1 className={`homehero__heading ${loaded && "homehero__heading--animated"}`}>Peerless Instrument</h1>
            <h2 className={`homehero__subheading ${loaded && "homehero__subheading--animated"}`}>
              Proudly Serving the Space, Aerospace, Government and Industrial Sectors Since 1968.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
