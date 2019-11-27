import React from "react";
import Lottie from "react-lottie";
import timelineData from "../assets/about-timeline-data.json";

import "./AboutTimeline.scss";

const AboutTimeline = () => {
  const defaultLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: timelineData,
    renderer: "svg",
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="abouttimeline__wrapper">
      <div className="container">
        <div className="abouttimeline">
          {/* <div className="container"> */}
          <Lottie options={defaultLottieOptions} height={"100%"} width={"100%"} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
