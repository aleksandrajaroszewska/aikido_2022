import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <div className="box contact-Box">
        <h4>dojo Pruszków </h4>
        <p>Rafał Jaroszewski</p>
        <p>tel. 530 145 350</p>
        <a href="mailto:aleksandra.jaroszewska@aikido.pruszkow.pl">
          aleksandra.jaroszewska@aikido.pruszkow.pl
        </a>
        <a href="mailto:rafal.jaroszewski@aikido.pruszkow.pl">
          rafal.jaroszewski@aikido.pruszkow.pl
        </a>
        <a
          href="https://www.facebook.com/aikidowpruszkowie/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-facebook-f"></i> - sprawdź by być na bieżąco
        </a>
      </div>
      <div className="box wcaBox">
        <h4>Pozostałe sekcje Warszawskiego Centrum Aikido </h4>
        <div className="list">
          <ul>
            <a
              href="https://aikido.warszawa.pl/dojo-warszawa-centrum-niecala.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li> Dojo Centrum </li>
            </a>
            <a
              href="https://aikido.warszawa.pl/dojo-warszawa-brodno-krasiczynska.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li> Dojo Bródno </li>
            </a>
            <a
              href="https://aikido.warszawa.pl/dojo-milanowek.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Dojo Milanówek </li>
            </a>
            <a
              href="https://aikido.warszawa.pl/dojo-warszawa-praga-poludnie-osiecka.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Dojo Praga Południe - Osiecka</li>
            </a>
          </ul>
          <ul>
            <a
              href="https://aikido.warszawa.pl/dojo-kobylka.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Dojo Kobyłka </li>
            </a>
            <a
              href="https://aikido.warszawa.pl/dojo-ozarow-mazowiecki.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Dojo Ożarów Mazowiecki</li>
            </a>
            <a
              href="https://aikido.warszawa.pl/dojo-nieporet.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Dojo Nieporęt/Stanisławów</li>
            </a>
            <a
              href="https://aikido.warszawa.pl/dojo-jablonna.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Dojo Jabłonna </li>
            </a>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
