import React from "react";

import { StyledZone, StyledZoneRow, StyledPrices } from "./Zones.styled";

const Prices = () => {
  return (
    <StyledZone className="prices">
      <StyledZoneRow>
        <div className="textBox">
          <h3>Cennik</h3>
          <p>
            Podstawowa składka wynosi: <h3>200zł miesięcznie za osobę.</h3>
          </p>
          <p>
            Możesz uczestniczyć we wszystkich treningach w WCA, w dowolnej
            lokalizacji
          </p>
          <StyledPrices>
            <div>
              <p>płatność kwartalna/roczna</p> <h4>540zł/1700</h4> rabat
              20zł/30zł miesięcznie
            </div>
            <div>
              <p>znika rodzinna</p> <h4> 2osoby - 180zł </h4>{" "}
              <h4> 3osoby - 160zł </h4> za miesiąc za osobę{" "}
            </div>
            <div>
              program rabatowy <h4>do 30% rabatu</h4>{" "}
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.aikido.warszawa.pl/rabaty.html"
                >
                  zasady
                </a>
              </h4>
            </div>
          </StyledPrices>
          <span>* zniżki nie łączą się</span>
        </div>
      </StyledZoneRow>
    </StyledZone>
  );
};

export default Prices;
