import React from "react";
import Button from "../Button/Button";

import "./PageCTA.scss";

const PageCTA = props => {
  return (
    <div className="container container__flex">
      <Button addClass="pagecta" btnText={props.text} linkTo={props.link} btnStyle="primary" btnSize="md" />
    </div>
  );
};

export default PageCTA;
