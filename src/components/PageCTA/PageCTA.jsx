import React, { useState, useEffect, useRef, useContext } from "react";
import Button from "../Button/Button";
import { ScrollContext } from "../../context/ScrollContext";

import "./PageCTA.scss";

const PageCTA = props => {
  const scrollHeight = useContext(ScrollContext);
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  const animatePosition = ref => {
    return ref.current.offsetTop - window.innerHeight * 0.9;
  };

  useEffect(() => {
    if (!animated) {
      if (scrollHeight[0] > animatePosition(ref)) {
        setAnimated(true);
      }
    }
  }, [scrollHeight, animated]);

  return (
    <div className={`container container__flex pagecta__container ${animated && "pagecta__container--animated"}`} ref={ref}>
      <Button addClass="pagecta" btnText={props.text} linkTo={props.link} btnStyle="primary" btnSize="md" />
    </div>
  );
};

export default PageCTA;
