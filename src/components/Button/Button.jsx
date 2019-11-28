import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = props => {
  const btnStyle = `
  button
  ${props.btnStyle === "primary" && "button--primary"}
  ${props.btnStyle === "white" && "button--white"}
  ${props.btnSize === "md" && "button--md"}
  ${props.startHidden && "button--hidden"}
  ${props.addClass && props.addClass}
  `;

  const btnElement = (
    <button className={btnStyle} onClick={props.onClick}>
      {props.btnText}
    </button>
  );

  if (props.linkTo) {
    return <Link to={{ pathname: props.linkTo, state: { prev: true } }}>{btnElement}</Link>;
  }

  return btnElement;
};

export default Button;
