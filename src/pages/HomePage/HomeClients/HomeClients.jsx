import React, { useState, useEffect, useRef, useContext } from "react";

import "./HomeClients.scss";

import clients from "./assets/clients.json";
import ClientLogo from "./ClientLogo/ClientLogo";

import { ScrollContext } from "../../../context/ScrollContext";

const HomeClients = () => {
  const scrollHeight = useContext(ScrollContext);
  const containerRef = useRef(null);
  const [containerAnimated, setContainerAnimated] = useState(false);
  const textRef = useRef(null);
  const [textAnimated, setTextAnimated] = useState(false);

  const animatePosition = ref => {
    return ref.current.offsetParent.offsetTop - window.innerHeight * 0.9;
  };

  const animatePosition2 = ref => {
    return ref.current.offsetParent.offsetTop - window.innerHeight;
  };

  const animatePosition3 = ref => {
    return ref.current.offsetTop - window.innerHeight * 0.9;
  };

  useEffect(() => {
    if (!containerAnimated && containerRef) {
      if (scrollHeight[0] > animatePosition(containerRef)) {
        setContainerAnimated(true);
      }
    }

    if (!textAnimated) {
      if (scrollHeight[0] > animatePosition3(textRef)) {
        setTextAnimated(true);
      }
    }
  }, [scrollHeight, containerAnimated, textAnimated]);

  return (
    <>
      <section className="homeclients">
        {/* <div className={`homeclients__blue ${blueAnimated && "homeclients__blue--animated"}`} ref={blueRef} /> */}
        {/* <div className="homeclients__container"> */}
        <div className={`container homeclients__container ${containerAnimated && "homeclients__container--animated"}`} ref={containerRef}>
          <h2 className="homeclients__heading">TRUSTED BY</h2>
          {clients.map((client, index) => (
            <React.Fragment key={index}>
              <a href={`${client.link}`} className="homeclients__logo-wrapper" target="_blank" rel="noopener noreferrer">
                <ClientLogo logo={client.component} className="homeclients__logo" />
              </a>
            </React.Fragment>
          ))}
        </div>
      </section>
      <p className={`homeclients__cta-text ${textAnimated && "homeclients__cta-text--animated"}`} ref={textRef}>
        We look forward to building new client relationships and hope you'll let us show you why these companies trust us.
      </p>
    </>
  );
};

export default HomeClients;
