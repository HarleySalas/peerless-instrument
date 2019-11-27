import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import { ScrollProvider } from "../context/ScrollContext";
import { LockScrollProvider } from "../context/LockScrollContext";
import AnimatedSwitch from "./AnimatedSwitch/AnimatedSwitch";

import Navbar from "./Navbar/Navbar";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import FacilitiesPage from "../pages/FacilitiesPage/FacilitiesPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const App = () => {
  return (
    <div className="app">
      <main>
        <LockScrollProvider>
          <ScrollProvider>
            <Navbar />
            <AnimatedSwitch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/facilities" component={FacilitiesPage} />
              <Route exact path="/contact" component={ContactPage} />
            </AnimatedSwitch>
          </ScrollProvider>
        </LockScrollProvider>
      </main>
    </div>
  );
};

export default App;
