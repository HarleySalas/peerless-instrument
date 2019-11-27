import React, { useState, useEffect, useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./ProductSliderButtons";
import useInterval from "./useInterval";
import "./ProductsSlider.scss";

//Product Images
import Differential from "../assets/product-images/01-differential.jpg";
import FaceGear from "../assets/product-images/02-face-gear.jpg";
import CrownedGear from "../assets/product-images/03-crowned-gear.jpg";
import SectorGear from "../assets/product-images/04-sector-gear.jpg";
import WormGear from "../assets/product-images/05-worm-gear.jpg";
import SpurGear from "../assets/product-images/06-spur-gear.jpg";
import InternalGear from "../assets/product-images/07-internal-gear.jpg";
import HelicalGear from "../assets/product-images/08-helical-gear.jpg";
import ClusterGear from "../assets/product-images/09-cluster-gear.jpg";
import BevelGear from "../assets/product-images/10-bevel-gear.jpg";
import BevelGearTwo from "../assets/product-images/11-bevel-gear-2.jpg";
import HelicalGearTwo from "../assets/product-images/12-helical-gear-2.jpg";
import RingGear from "../assets/product-images/13-ring-gear.jpg";
import AntiBacklash from "../assets/product-images/14-anti-backlash-gear.jpg";

const ProductsSlider = ({ autoplay, delayLength }) => {
  const [render, setRender] = useState(false);
  const [embla, setEmbla] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [isRunning, setIsRunning] = useState(autoplay);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const delay = delayLength;

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  //required, or page transition will break
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 100);
  });

  useInterval(
    () => {
      if (selectedIndex === scrollSnaps.length - 1) {
        scrollTo(0);
      } else {
        scrollNext();
      }
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    };

    const onDragStart = () => {
      setIsRunning(false);
    };

    const onDragEnd = () => {
      setIsRunning(autoplay);
    };

    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
      embla.on("dragStart", onDragStart);
      embla.on("dragEnd", onDragEnd);
    }

    return () => embla && embla.destroy();
  }, [embla, autoplay]);

  return (
    <div className="productsslider">
      {render && (
        <>
          <div className="productsslider__primary-block"></div>
          <div className="container productsslider__container">
            <EmblaCarouselReact className="productsSlider__viewport" emblaRef={setEmbla} options={{ loop: true }}>
              <div className="productsslider__slide-container">
                <div className="productsslider__slide">
                  <img src={Differential} alt="differential gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={FaceGear} alt="face gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={CrownedGear} alt="crowned gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={SectorGear} alt="Sector gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={WormGear} alt="worm gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={SpurGear} alt="spur gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={InternalGear} alt="internal gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={HelicalGear} alt="Helical gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={ClusterGear} alt="Cluster gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={BevelGear} alt="bevel gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={BevelGearTwo} alt="bevel gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={HelicalGearTwo} alt="helical gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={RingGear} alt="ring gear" className="productsslider__slide-img" />
                </div>
                <div className="productsslider__slide">
                  <img src={AntiBacklash} alt="Anti-backlash gear" className="productsslider__slide-img" />
                </div>
              </div>
            </EmblaCarouselReact>
            <div className="productsslider__dots">
              {scrollSnaps.map((snap, index) => (
                <DotButton selected={index === selectedIndex} onClick={() => scrollTo(index)} key={index} />
              ))}
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            {/* <button onClick={() => embla.scrollNext()}>Next</button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsSlider;
