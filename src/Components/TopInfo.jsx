import React from "react";
import { StyledTopInfo } from "./TopInfo.styled";

import logo from "../../src/Images/logo-wca.png";

const TopInfo = () => {
  return (
    <StyledTopInfo>
      <div className="welcome">
        <h1>
          Aikido<span> dojo Pruszków</span>
        </h1>
        <div className="training-plan">
          <h2>zaczynamy nowy sezon 2021/2022 ! </h2>

          <h3> wtorek czwartek</h3>
          <h3>
            <span>dzieci młodsze:</span> 17.45 - 18.30
          </h3>
          <h3>
            <span>dzieci starsze:</span> 18.45 - 19.30
          </h3>
          <h3>
            <span>dorośli:</span> 19.45 - 21.15
          </h3>

          <h4>zapraszamy</h4>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://aikido.warszawa.pl/rabaty.html"
          >
            {" "}
            sprawdź rabaty
          </a>
        </div>
      </div>
      <a
        className="logo"
        href="https://aikido.warszawa.pl/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} alt="WCA logo" />
      </a>
    </StyledTopInfo>
  );
};

export default TopInfo;
