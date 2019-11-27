import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import SQR from "./assets/PIC-SQR.pdf";

import PeerlessLogo from "./assets/peerless-logo-outline-01.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container__flex container__flex--start footer__container">
        <div className="footer__column">
          <object className="footer__column__logo">
            <embed src={PeerlessLogo} />
          </object>
        </div>
        <div className="footer__column">
          <div className="footer__column__wrapper">
            <div className="footer__column__title">Site Links</div>
            <ul className="footer__column__ul">
              <Link to={{ pathname: "/about", state: { prev: true } }}>
                <li className="footer__column__li">About</li>
              </Link>
              <Link to={{ pathname: "/products", state: { prev: true } }}>
                <li className="footer__column__li">Products</li>
              </Link>
              <Link to={{ pathname: "/facilities", state: { prev: true } }}>
                <li className="footer__column__li">Facilities</li>
              </Link>
              <Link to={{ pathname: "/contact", state: { prev: true } }}>
                <li className="footer__column__li">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column__wrapper">
            <div className="footer__column__title">Resources</div>
            <ul className="footer__column__ul">
              <Link to={{ pathname: "/certificates", state: { prev: true } }}>
                <li className="footer__column__li">Certificates</li>
              </Link>
              <a href={SQR} target="_blank" rel="noopener noreferrer">
                <li className="footer__column__li">SQR</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column__wrapper">
            <div className="footer__column__title">Location</div>
            <p className="footer__column__text">
              2030 Coolidge Street
              <br />
              Hollywood, FL 33020
              <br />
              United States
            </p>
          </div>
        </div>
      </div>
      <div className="container container__flex">
        <div className="footer__bottom">
          <div className="footer__bottom__line"></div>
          <div className="footer__bottom__copyright">
            &copy; {new Date().getFullYear()} Peerless Instrument - Website by{" "}
            <a href="http://harleysalas.com" target="_blank" rel="noopener noreferrer" className="footer__bottom__link">
              Harley Salas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
