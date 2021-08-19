import React from "react";
import Header from "../Components/Header";
import { StyledMain } from "./Main.styled";
import Footer from "../Components/Footer";
import TopInfo  from "../Components/TopInfo";

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <TopInfo />
      <Footer />
    </StyledMain>
  );
};

export default Main;
