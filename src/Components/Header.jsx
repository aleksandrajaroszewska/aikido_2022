import React from "react";
import NavItem from "../Atoms/NavItem";
import kanji from "../../src/assets/kanji_white.png";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <a href="http://aikido.pruszkow.pl/" className="homepage-link">
        <img src={kanji} className="aiki-logo" alt="kanji" />
        </a>
        <div className="header buttons ">
          <NavItem section="groups" name="grupy" />
          <NavItem section="instructors" name="instruktorzy" />
          <NavItem section="dojo" name="klub" />
          <NavItem section="prices" name="cennik" />
          <NavItem section="footer" name="kontakt" />
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;