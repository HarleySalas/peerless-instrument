import React, { useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LockScrollContext } from "../../../../context/LockScrollContext";
import "./MobileMenu.scss";

import { useOnClickOutside } from "../../../../utils";

const MobileMenu = ({ toggle }) => {
  const ref = useRef(null);
  const [, lockScroll] = useContext(LockScrollContext);

  useOnClickOutside(ref, () => toggle());

  useEffect(() => {
    lockScroll(true);

    return () => lockScroll(false);
  }, []);

  return (
    <>
      <div className="mobile__menu__foreground"></div>
      <div className="mobile__menu" ref={ref}>
        <button className="mobile__menu__close" onClick={toggle}>
          <div className="mobile__menu__close__line"></div>
        </button>
        <ul className="mobile__menu__ul">
          <NavLink exact to={{ pathname: "/", state: { prev: false } }} onClick={toggle}>
            <li className="mobile__menu__li">Home</li>
          </NavLink>
          <NavLink to={{ pathname: "/about", state: { prev: true } }} onClick={toggle}>
            <li className="mobile__menu__li">About</li>
          </NavLink>
          <NavLink to={{ pathname: "/products", state: { prev: true } }} onClick={toggle}>
            <li className="mobile__menu__li">Products</li>
          </NavLink>
          <NavLink to={{ pathname: "/facilities", state: { prev: true } }} onClick={toggle}>
            <li className="mobile__menu__li">Facilities</li>
          </NavLink>
          <NavLink to={{ pathname: "/contact", state: { prev: true } }} onClick={toggle}>
            <li className="mobile__menu__li">Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
