import React from "react";
import Page from "../../layout/Page";

import "./ProductsPage.scss";

import ProductsHeadingImage from "./assets/products-heading.jpg";
import { ReactComponent as GearsOutline } from "./assets/gears-outline-2.svg";
import { ReactComponent as LatheOutline } from "./assets/lathe-outline.svg";

import ProductsSlider from "./ProductsSlider/ProductsSlider";

import PageHeading from "../../components/PageHeading/PageHeading";
import PageCTA from "../../components/PageCTA/PageCTA";

import { usePageLoaded } from "../../utils";

const ProductsPage = () => {
  const loaded = usePageLoaded();

  return (
    <Page>
      <PageHeading headingImg={ProductsHeadingImage} alt="gear grinding" text="Products" />
      <div className="container container__flex">
        <GearsOutline className="productspage__gears-outline" />
        <p className={`productspage__paragraph ${loaded && "productspage__paragraph--animated productspage__paragraph--delay-1"}`}>
          Peerless Instrument Co., Inc. is a completely modern machine shop specializing in custom gears manufactured to your tolerances and
          specifications. Our qualified staff can assist you in your final design of precision gears and machined components. When you are
          ready for either a prototype or production run, Peerless will be ready to meet your requirements.
        </p>
        <p className={`productspage__paragraph ${loaded && "productspage__paragraph--animated productspage__paragraph--delay-2"}`}>
          We have produced products under a wide spectrum of materials, including all grades of: aluminum, stainless steel, aircraft alloy
          steel, super alloys, brass, and plastic.
        </p>
        <p>
          Our gear cutting capabilities consist of hobbing, shaping, and generating. We specialize in diametrical pitches that range from 8 to
          150 with a maximum diameter of 7-1/2 inches. Peerless manufactures to Standard and Metric Systems and depending on the design can
          achieve AGMA Class 12.
        </p>
      </div>
      <div className="productspage__section">
        <div className="productspage__gear-types">
          <div className="container productspage__gear-types__container">
            <h2 className="productspage__gear-types__title">Types of gears manufactured</h2>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Spur Gear: Internal and External</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Worm and Worm Gears</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Straight Bevel Gears</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Face Clutches</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Crowned Gears</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Splines: Internal and External</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Sprockets</div>
            </div>
            <div className="productspage__gear-types__type-wrapper">
              <div className="productspage__gear-types__type">Rachets</div>
            </div>
          </div>
        </div>
        <ProductsSlider autoplay delayLength={4000} />
      </div>
      <div className="productspage__section productspage__section--last">
        <div className="container productspage__machine-container">
          <div className="productspage__machine-left">
            <p>
              Our machine shop capabilities include: turning, milling, grinding, jig boring, honing, drilling, and tapping. Turning to a
              maximum diameter of 2-1/8 inches with a maximum length of 12 inches can be accomplished on our bar fed machines. When using a
              chuck in our lathes, we can turn a maximum diameter of 10 inches. The milling centers are equipped with 4th axis, which gives us
              the flexibility to complete a milling operation in one set-up. Our grinding department includes CNC cylindrical grinders able to
              hold .0002 tolerances while grinding multiple diameters. Using secondary equipment to complete the manufacturing allows Peerless
              total control of the manufacturing process.
            </p>
          </div>
          <div className="productspage__machine-right">
            <LatheOutline className="productspage__machine-lathe" />
          </div>
        </div>
        <div className="container">
          <p className="productspage__last-paragraph">
            Our quality personnel work to AS 9100 standards, which ensures that the product we manufacture meets your requirements. This gives
            you, the customer, total confidence to put your trust in Peerless Instrument Co., Inc.
          </p>
        </div>
      </div>
      <PageCTA text="See Facilities" link="/facilities" />
    </Page>
  );
};

export default ProductsPage;
