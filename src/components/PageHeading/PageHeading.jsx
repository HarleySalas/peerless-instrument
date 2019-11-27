import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./PageHeading.scss";

const PageHeading = props => {
  return (
    <div className="pageheading">
      <div className="pageheading__wrapper">
        <img className={`pageheading__img`} src={props.headingImg} alt={props.alt} />
        <div className={`pageheading__overlay`}>
          <div className="container pageheading__container">
            <div className={`pageheading__line pageheading__line--short`}></div>
            <h1 className={`pageheading__text`}>{props.text}</h1>
            <div className={`pageheading__line pageheading__line--long`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PageHeading);
