import React, { useEffect, useState, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./Navbar.scss";

import { ScrollContext } from "../../context/ScrollContext";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = props => {
  //Determine rather to show navbar or not..
  const [scrollHeight] = useContext(ScrollContext);
  const [renderNav, setRenderNav] = useState(false);
  const [animated, setAnimated] = useState(false);
  let path = props.location.pathname;
  const fiftyVh = window.innerHeight / 2;

  const unmountNav = () => {
    if (!animated) setRenderNav(false);
  };

  useEffect(() => {
    if (path === "/") {
      setAnimated(false);
    }

    if (path !== "/") {
      setRenderNav(true);
      setAnimated(true);
    }
  }, [path]);

  useEffect(() => {
    if (path === "/") {
      if (scrollHeight > fiftyVh) {
        setRenderNav(true);
        setAnimated(true);
      }

      if (scrollHeight < fiftyVh) {
        setAnimated(false);
      }
    }
  }, [path, scrollHeight, animated, fiftyVh]);

  return (
    renderNav && (
      <header className={`navbar ${animated ? "navbar--animated" : "navbar--hidden"}`} onAnimationEnd={unmountNav}>
        <div className="container">
          <div className="navbar__logo">
            <NavLink exact to={{ pathname: "/", state: { prev: false } }}>
              Peerless Instrument
            </NavLink>
          </div>
          <DesktopNav />
          <MobileNav />
        </div>
      </header>
    )
  );
};

export default withRouter(Navbar);
