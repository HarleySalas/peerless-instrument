import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import throttle from "lodash/fp/throttle";
import { ScrollContext } from "../context/ScrollContext";
import { LockScrollContext } from "../context/LockScrollContext";

import Footer from "./Footer/Footer";

function Page({ children, location: { state }, match }) {
  const [lockScroll] = useContext(LockScrollContext);
  const cx = classNames({
    page: true,
    "page--prev": state && state.prev,
    lockScroll: lockScroll
  });

  //Track page's scrollHeight
  const [, setScrollHeight] = useContext(ScrollContext);
  let pageEl = useRef(null);

  const trackScrollPos = useRef(
    throttle(172, () => {
      if (pageEl.current) {
        setScrollHeight(pageEl.current.scrollTop);
      }
    })
  ).current;

  //when page changes, reset scrollHeight to 0
  useEffect(() => {
    setScrollHeight(0);
  }, [setScrollHeight]);

  // useEffect(() => {}, [state.locked]);

  return (
    <section className={cx} ref={pageEl} onScroll={() => trackScrollPos()}>
      <div className="page__inner">
        {children}
        <Footer />
      </div>
    </section>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default withRouter(Page);
