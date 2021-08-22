import React from "react";
import Header from "../Components/Header";
import { StyledMain, StyledParalax } from "./Main.styled";
import Footer from "../Components/Footer";
import TopInfo from "../Components/TopInfo";
import GroupZone from "../Components/GroupZone";
import InstructorsZone from "../Components/InstructorsZone";
import WcaZone from "../Components/WcaZone";
import Prices from "../Components/Prices"
import firstParalax from "../../src/assets/paralax/mlodsza_grupowe_desktop.jpeg";
import secondParalax from "../../src/assets/paralax/certyfikat.jpg";
import thirdParalax from "../../src/assets/paralax/mata.jpg";
import wozek from "../../src/assets/dzieci_mlodsze/wozek.jpeg";

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <TopInfo />
      <StyledParalax img={firstParalax} />
      <GroupZone />
      <StyledParalax img={secondParalax} />
      <InstructorsZone />
      <StyledParalax img={wozek} />
      <WcaZone />
      <StyledParalax img={thirdParalax} />
      <Prices/>
      <Footer />
    </StyledMain>
  );
};

export default Main;
