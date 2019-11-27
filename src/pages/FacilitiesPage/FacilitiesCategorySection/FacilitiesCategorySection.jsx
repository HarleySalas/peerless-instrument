import React from "react";
import "./FacilitiesCategorySection.scss";

import FacilitiesCategory from "../FacilitiesCategory/FacilitiesCategory";

import { ReactComponent as Turning } from "../assets/turning-icon.svg";
import { ReactComponent as Milling } from "../assets/milling-icon.svg";
import { ReactComponent as Grinding } from "../assets/grinding-icon.svg";
import { ReactComponent as Drilling } from "../assets/drilling-icon.svg";
import { ReactComponent as GearCutting } from "../assets/gear-cutting-icon.svg";
import { ReactComponent as Inspection } from "../assets/inspection-icon.svg";
import { ReactComponent as Misc } from "../assets/misc-icon.svg";

import TurningList from "../assets/equipment-lists/turning-equipment.json";
import MillingList from "../assets/equipment-lists/milling-equipment.json";
import GrindingList from "../assets/equipment-lists/grinding-equipment.json";
import DrillingList from "../assets/equipment-lists/drilling-equipment.json";
import GearCuttingList from "../assets/equipment-lists/gear-cutting-equipment.json";
import InspectionList from "../assets/equipment-lists/inspection-equipment.json";
import InspectionNotes from "../assets/equipment-lists/inspectionNotes.js";
import MiscList from "../assets/equipment-lists/misc-equipment.json";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FacilitiesCategorySection = () => {
  return (
    <div className="container">
      <div className="facilities-category-section">
        {/* <h2 className="facilities-category-section__title">Equipment List</h2> */}
        <SectionTitle center title="Equipment List" mb2 lh0 />
        <span className="facilities-category-section__hint">Click a category to view it's list.</span>
        <FacilitiesCategory title="Turning" list={TurningList}>
          <Turning className="facilitiescategory__icon" />
        </FacilitiesCategory>
        <FacilitiesCategory title="Milling" list={MillingList}>
          <Milling className="facilitiescategory__icon" />
        </FacilitiesCategory>
        <FacilitiesCategory title="Grinding" list={GrindingList}>
          <Grinding className="facilitiescategory__icon" />
        </FacilitiesCategory>
        <FacilitiesCategory title="Drilling & Tapping" list={DrillingList}>
          <Drilling className="facilitiescategory__icon" />
        </FacilitiesCategory>
        <FacilitiesCategory title="Gear Cutting" list={GearCuttingList}>
          <GearCutting className="facilitiescategory__icon" />
        </FacilitiesCategory>
        <FacilitiesCategory title="Inspection" list={InspectionList} note={InspectionNotes}>
          <Inspection className="facilitiescategory__icon" />
        </FacilitiesCategory>
        <FacilitiesCategory title="Misc." list={MiscList}>
          <Misc className="facilitiescategory__icon" />
        </FacilitiesCategory>
      </div>
    </div>
  );
};

export default FacilitiesCategorySection;
