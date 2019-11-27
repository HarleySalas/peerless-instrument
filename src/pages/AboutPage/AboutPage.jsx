import React from "react";
import Page from "../../layout/Page";

import "./AboutPage.scss";

import AboutImg from "./assets/about-img.jpg";
import MeasuringImg from "./assets/hands-measuring.jpg";
import { ReactComponent as PeerlessLogo } from "./assets/solid-logo-03.svg";
import { ReactComponent as FloridaOutline } from "./assets/florida-outline.svg";
import { ReactComponent as AS9100D } from "./assets/as9100d-logo.svg";
import { ReactComponent as ISO9001 } from "./assets/iso9001-logo.svg";

import PageHeading from "../../components/PageHeading/PageHeading";
import Button from "../../components/Button/Button";
import PageCTA from "../../components/PageCTA/PageCTA";

import { usePageLoaded } from "../../utils";

import AboutTimeline from "./AboutTimeline/AboutTimeline";

const AboutPage = () => {
  const loaded = usePageLoaded();

  return (
    <Page>
      <PageHeading headingImg={AboutImg} alt="employees working" text="About" />
      <div className="container container__flex">
        <div className="aboutpage__logo-container">
          <PeerlessLogo className={`aboutpage__logo ${loaded && "aboutpage__logo--animated"}`} />
          <div className="aboutpage__state-wrapper">
            <FloridaOutline className={`aboutpage__state ${loaded && "aboutpage__state--animated"}`} />
          </div>
        </div>
        <p className={`aboutpage__paragraph ${loaded && "aboutpage__paragraph--animated--up aboutpage__paragraph--delay-1s"}`}>
          Incorporated in the state of Florida in 1968, Peerless Instrument Co., Inc. set out to be a leading supplier of precision gears and
          machined components. It is our commitment to supply a quality, cost effective product to our customers on time! From prototypes to
          production runs, we invite you to see how Peerless Instrument Co., Inc. will make a difference when it comes to your manufacturing
          needs.
        </p>
      </div>
      <AboutTimeline />

      <div className="container aboutpage__cert-container">
        <div className="aboutpage__cert-content">
          <p className="aboutpage__paragraph aboutpage__paragraph--animated--up">
            We are a sub-tier ISO 9001:2015 Certified supplier serving the space, aerospace, government, and industrial sector. You will find
            the products we manufacture in flight control systems, radar units, countermeasures, actuators, and robotics, along with many
            other systems. Peerless is driven by the requirements of our customers and is presently involved in programs such as Supplier
            Managed Inventory, Kanban, and Long-Term Contracts.
          </p>
          <Button btnText="See Certificates" linkTo="/certificates" btnStyle="primary" btnSize="md" addClass="aboutpage__cert-link" />
        </div>
        <div className="aboutpage__cert-icons">
          <AS9100D className="aboutpage__cert-icon" />
          <ISO9001 className="aboutpage__cert-icon" />
        </div>
      </div>
      <div className="aboutpage__skilled__wrapper">
        <div className="container aboutpage__skilled__container">
          <div className="aboutpage__skilled__half">
            <div className="aboutpage__skilled__img-wrapper">
              <img src={MeasuringImg} alt="hands measuring product" className="aboutpage__skilled__img" />
            </div>
          </div>
          <div className="aboutpage__skilled__half">
            <p className="aboutpage__skilled__paragraph">
              With our highly skilled staff, outsourcing of your product can be available for mechanical and electro-mechanical assemblies,
              saving your company time and money.
            </p>
            <p className="aboutpage__skilled__paragraph">
              Please take the time to view our website, as we are very proud of our manufacturing capability. We would also like to extend an
              invitation to have you visit our facility at any time.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container container__flex aboutpage__container-img-section">
        <div className="aboutpage__img-section-left">
          <div className="aboutpage__img-wrapper">
            <img src={MeasuringImg} alt="hands measuring product" className="aboutpage__img" />
          </div>
          <div className="aboutpage__img-rect"></div>
        </div>
        <div className="aboutpage__img-section-right">
          <p className="aboutpage__paragraph aboutpage__paragraph-two aboutpage__paragraph--animated--up">
            With our highly skilled staff, outsourcing of your product can be available for mechanical and electro-mechanical assemblies,
            saving your company time and money.
          </p>
          <p className="aboutpage__paragraph aboutpage__paragraph--animated--up">
            Please take the time to view our website, as we are very proud of our manufacturing capability. We would also like to extend an
            invitation to have you visit our facility at any time.
          </p>
        </div>
      </div> */}
      <PageCTA text="See our Products" link="/products" />
    </Page>
  );
};

export default AboutPage;
