import React from "react";
import { NavLink } from "react-router-dom";

import "./DesktopNav.scss";

const DesktopNav = props => {
  return (
    <nav className="desktop">
      <ul className="desktop__ul">
        <NavLink to={{ pathname: "/about", state: { prev: true } }} className="nav__link">
          <li className="desktop__li">About</li>
        </NavLink>
        <NavLink exact to={{ pathname: "/products", state: { prev: true } }} className="nav__link">
          <li className="desktop__li">Products</li>
        </NavLink>
        <NavLink exact to={{ pathname: "/facilities", state: { prev: true } }} className="nav__link">
          <li className="desktop__li">Facilities</li>
        </NavLink>
        <NavLink exact to={{ pathname: "/contact", state: { prev: true } }} className="nav__link">
          <li className="desktop__li">Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default DesktopNav;
