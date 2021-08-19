import React from "react";
import Header from "../Components/Header";
import { StyledMain, StyledParalax } from "./Main.styled";
import Footer from "../Components/Footer";
import TopInfo from "../Components/TopInfo";
import GroupZone from "../Components/GroupZone";
import InstructorsZone from "../Components/InstructorsZone";
import WcaZone from "../Components/WcaZone";
import firstParalax from "../../src/Images/best.JPG";
import secondParalax from "../../src/Images/boken2.JPG";
import thirdParalax from "../../src/Images/Adam.JPG";

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <TopInfo />
      <StyledParalax img={firstParalax} />
      <GroupZone />
      <StyledParalax img={secondParalax} />
      <InstructorsZone />
      <StyledParalax img={thirdParalax} />
      <WcaZone />
      <Footer />
    </StyledMain>
  );
};

export default Main;
