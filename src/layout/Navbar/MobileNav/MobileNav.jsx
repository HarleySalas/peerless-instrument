import React from "react";
import "./MobileNav.scss";

import { useToggle } from "../../../utils";

import MobileMenu from "./MobileMenu/MobileMenu";

const MobileNav = () => {
  const [openMenu, toggleMenu] = useToggle(false);

  return (
    <>
      <button className="mobile" onClick={toggleMenu}>
        <div className="mobile__line"></div>
        <div className="mobile__line"></div>
        <div className="mobile__line"></div>
      </button>
      {openMenu && <MobileMenu toggle={toggleMenu} />}
    </>
  );
};

export default MobileNav;
