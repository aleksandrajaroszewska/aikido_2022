import React, { Fragment } from "react";
import { StyledTopInfo, StyledDojoIframe } from "./TopInfo.styled";

import logo from "../../src/Images/logo-wca.png";

const TopInfo = () => {
  return (
    <Fragment>
      <StyledTopInfo>
        <div className="welcome">
          <h1>
            Aikido<span> dojo Pruszków</span>
          </h1>
          <div className="training-plan">
            <h2>zaczynamy nowy sezon 2021/2022 ! </h2>
            <h3> wtorek czwartek</h3>
            <h3>
              <span>dzieci młodsze:</span> 18.00 - 18.45
            </h3>
            <h3>
              <span>dzieci starsze:</span> 18.50 - 19.35
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
      <StyledDojoIframe>
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.211746774777!2d20.801957415794345!3d52.16684347974883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193592ee49e835%3A0x4162d19b75dd9327!2sTadeusza+Ko%C5%9Bciuszki+38%2C+Pruszk%C3%B3w!5e0!3m2!1spl!2spl!4v1484760905308"
          title="mapa"
        ></iframe>
      </StyledDojoIframe>
    </Fragment>
  );
};

export default TopInfo;
