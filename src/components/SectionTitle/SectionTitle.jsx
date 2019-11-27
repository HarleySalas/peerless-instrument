import React from "react";
import "./SectionTitle.scss";

const SectionTitle = props => {
  return (
    <div className={`sectiontitle ${props.center && "sectiontitle--center"} ${props.mb2 && "sectiontitle--mb2"} ${props.mb11 && "sectiontitle--mb11"}`}>
      {props.center && (
        <div
          className={`sectiontitle__line sectiontitle__line--center ${
            props.white ? "sectiontitle__line--white" : "sectiontitle__line--primary"
          }`}
        ></div>
      )}
      {props.left && (
        <div
          className={`sectiontitle__line sectiontitle__line--left1 ${
            props.white ? "sectiontitle__line--white" : "sectiontitle__line--primary"
          }`}
        ></div>
      )}
      <h2
        className={`sectiontitle__title ${props.white ? "sectiontitle__title--white" : "sectiontitle__title--primary"} ${props.lh0 &&
          "sectiontitle__title--lh0"}`}
      >
        {props.title}
      </h2>
      {props.center && (
        <div
          className={`sectiontitle__line sectiontitle__line--center ${
            props.white ? "sectiontitle__line--white" : "sectiontitle__line--primary"
          }`}
        ></div>
      )}
      {props.left && (
        <div
          className={`sectiontitle__line sectiontitle__line--left2 ${
            props.white ? "sectiontitle__line--white" : "sectiontitle__line--primary"
          }`}
        ></div>
      )}
    </div>
  );
};

export default SectionTitle;
