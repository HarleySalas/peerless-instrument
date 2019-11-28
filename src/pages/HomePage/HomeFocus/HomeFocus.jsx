import React, { useEffect, useContext, useState, useRef } from "react";

import "./HomeFocus.scss";

// import CaliperIcon from "./assets/CaliperIcon";
// import CalendarIcon from "./assets/CalendarIcon";
// import MachineIcon from "./assets/MachineIcon";

import { ReactComponent as CaliperIcon } from "./assets/caliper-icon.svg";
import { ReactComponent as CalendarIcon } from "./assets/calendar-icon.svg";
import { ReactComponent as MachineIcon } from "./assets/machine-icon.svg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";

import { ScrollContext } from "../../../context/ScrollContext";

const HomeFocus = () => {
  const scrollHeight = useContext(ScrollContext);
  const containerRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  const animatePosition = ref => {
    return ref.current.offsetTop - window.innerHeight * 0.9;
  };

  useEffect(() => {
    if (!animated) {
      if (scrollHeight[0] > animatePosition(containerRef)) {
        setAnimated(true);
      }
    }
  }, [scrollHeight, animated]);

  return (
    <section className={`homefocus ${animated && "homefocus--animated"}`} ref={containerRef}>
      <div className="homefocus__container">
        <div className="container container__flex">
          <SectionTitle title="Our Focus" center white />
          <div className="homefocus__column">
            <CaliperIcon className="homefocus__icon" />
            <h3 className="homefocus__focus">Precision</h3>
            <span className="homefocus__description">To the finest tolerances.</span>
          </div>
          <div className="homefocus__column">
            <MachineIcon className="homefocus__icon" />
            <h3 className="homefocus__focus">Modernization</h3>
            <span className="homefocus__description">Ensuring consistency.</span>
          </div>
          <div className="homefocus__column">
            <CalendarIcon className="homefocus__icon" />
            <h3 className="homefocus__focus">Dependability</h3>
            <span className="homefocus__description">Building trust since 1968.</span>
          </div>
        </div>
        <div className="container container__flex">
          <Button btnText="See Our Products" btnStyle="white" btnSize="md" addClass="homefocus__cta" />
          <Button btnText="View Facilities" btnStyle="white" btnSize="md" addClass="homefocus__cta" />
        </div>
      </div>
    </section>
  );
};

export default HomeFocus;
