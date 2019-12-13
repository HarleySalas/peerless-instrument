import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeHeroNav.scss";

import { usePageLoaded } from "../../../../utils";

import MobileNav from "../../../../layout/Navbar/MobileNav/MobileNav";

const HomeHeroNav = () => {
  const loaded = usePageLoaded();

  return (
    <>
      <div className="homeheronav__mobile-wrapper">
        <MobileNav />
      </div>
      <nav className="homeheronav">
        <ul className="homeheronav__ul">
          <NavLink
            exact
            to={{ pathname: "/about", state: { prev: true } }}
            className={`homeheronav__link ${loaded && "homeheronav__link--animated"}`}
          >
            <li className="homeheronav__li">About</li>
          </NavLink>
          <NavLink
            exact
            to={{ pathname: "/products", state: { prev: true } }}
            className={`homeheronav__link ${loaded && "homeheronav__link--animated"}`}
          >
            <li className="homeheronav__li">Products</li>
          </NavLink>
          <NavLink
            exact
            to={{ pathname: "/facilities", state: { prev: true } }}
            className={`homeheronav__link ${loaded && "homeheronav__link--animated"}`}
          >
            <li className="homeheronav__li">Facilities</li>
          </NavLink>
          <NavLink
            exact
            to={{ pathname: "/contact", state: { prev: true } }}
            className={`homeheronav__link ${loaded && "homeheronav__link--animated"}`}
          >
            <li className="homeheronav__li">Contact</li>
          </NavLink>
        </ul>
        <div className={`homeheronav__underline ${loaded && "homeheronav__underline--animated"}`}></div>
      </nav>
    </>
  );
};

export default HomeHeroNav;
