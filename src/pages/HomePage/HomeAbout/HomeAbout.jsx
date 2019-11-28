import React, { useEffect, useContext, useRef, useState } from "react";
import "./HomeAbout.scss";

import AS9100D from "./assets/as9100d-logo.svg";
import ISO9001 from "./assets/iso9001-logo.svg";

import Button from "../../../components/Button/Button";
import { ScrollContext } from "../../../context/ScrollContext";

const HomeAbout = () => {
  const scrollHeight = useContext(ScrollContext);
  const leftRef = useRef(null);
  const [animateLeft, setAnimateLeft] = useState(false);
  const rightRef = useRef(null);
  const [animateRight, setAnimateRight] = useState(false);

  const animatePosition = ref => {
    return ref.current.offsetTop - window.innerHeight * 0.9;
  };

  useEffect(() => {
    if (!animateLeft) {
      if (scrollHeight[0] > animatePosition(leftRef)) {
        setAnimateLeft(true);
      }
    }

    if (!animateRight) {
      if (scrollHeight[0] > animatePosition(rightRef)) {
        setAnimateRight(true);
      }
    }
  }, [scrollHeight, animateLeft, animateRight]);

  return (
    <section className="homeabout">
      <div className="container container__flex">
        <div className={`homeabout__wrapper homeabout__wrapper--1 ${animateLeft && "homeabout__wrapper--animated"}`} ref={leftRef}>
          <div className="homeabout__heading-wrapper">
            <div className={`homeabout__subtier`}>Sub-tier</div>
            <h2 className={`homeabout__certified`}>Certified Supplier</h2>
          </div>

          <div className={`homeabout__icon-wrapper`}>
            <object className="homeabout__icon">
              <embed src={AS9100D} />
            </object>
            <object className="homeabout__icon">
              <embed src={ISO9001} />
            </object>
          </div>
        </div>
        <div className={`homeabout__wrapper homeabout__wrapper--2 ${animateRight && "homeabout__wrapper--animated"}`} ref={rightRef}>
          <p className={`homeabout__content`}>
            <strong>Peerless Instrument</strong> is a sub-tier <em>AS9100D</em> and <em>ISO 9001:2015</em> Certified Supplier serving the
            space, aerospace, government, and industrial sectors. You will find the products we manufacture in flight control systems, radar
            units, countermeasures, actuators, and robotics, along with many other systems. <strong>Peerless</strong> is driven by the
            requirements of our customers and is presently involved in programs such as Supplier Managed Inventory, Kanban, and Long-Term
            Contracts.
          </p>
          <Button btnText="More About Us" btnStyle="primary" btnSize="md" linkTo="/about" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
