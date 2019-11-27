import React from "react";
import Page from "../../layout/Page";

import "./FacilitiesPage.scss";

import FacilitiesImg from "./assets/facilities-heading.jpg";

import PageHeading from "../../components/PageHeading/PageHeading";
import PageCTA from "../../components/PageCTA/PageCTA";

import { usePageLoaded } from "../../utils";

import { ReactComponent as BuildingOutline } from "./assets/building-outline.svg";

import FacilitiesCategorySection from "./FacilitiesCategorySection/FacilitiesCategorySection";

const FacilitiesPage = () => {
  const loaded = usePageLoaded();

  return (
    <Page>
      <PageHeading headingImg={FacilitiesImg} alt="facility interior" text="Facilities" />
      <div className="container container__flex facilitiespage__building-container">
        <p className={`facilitiespage__building-text ${loaded && "facilitiespage__building-text--animated"}`}>
          Our facilities consist of two adjacent, fully airconditioned buildings, totaling 16,000 sq. ft.
        </p>
        <div className={`facilitiespage__building-outline-wrapper ${loaded && "facilitiespage__building-outline-wrapper--animated"}`}>
          <BuildingOutline className={`facilitiespage__building-outline ${loaded && "facilitiespage__building-outline--animated"}`} />
        </div>
      </div>
      <FacilitiesCategorySection />
      <div className="container container__flex">
        <p className="facilitiespage__tour">We extend an invitation for you to tour our facilities at any time.</p>
      </div>
      <PageCTA text="Contact us" link="/contact" />
    </Page>
  );
};

export default FacilitiesPage;
