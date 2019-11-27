import React from "react";

import ChemringGroup from "../assets/ChemringGroup";
import CollinsAerospace from "../assets/CollinsAerospace";
import CurtissWright from "../assets/CurtissWright";
import HoneybeeRobotics from "../assets/HoneybeeRobotics";
import Honeywell from "../assets/Honeywell";
import L3Harris from "../assets/L3Harris";
import MAS from "../assets/MAS";
import Moog from "../assets/Moog";
import NorthropGrumman from "../assets/NorthropGrumman";
import Safran from "../assets/Safran";

const ClientLogo = props => {
  const components = {
    ChemringGroup: ChemringGroup,
    CollinsAerospace: CollinsAerospace,
    CurtissWright: CurtissWright,
    HoneybeeRobotics: HoneybeeRobotics,
    Honeywell: Honeywell,
    L3Harris: L3Harris,
    MAS: MAS,
    Moog: Moog,
    NorthropGrumman: NorthropGrumman,
    Safran: Safran
  };

  const Logo = components[props.logo || "ChemringGroup"];

  return <Logo className={props.className} />;
};

export default ClientLogo;
