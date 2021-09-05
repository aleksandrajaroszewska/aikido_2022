import React from "react";

import { StyledZone, StyledZoneRow, StyledPrices } from "./Zones.styled";

const Prices = () => {
  return (
    <StyledZone className="prices">
      <StyledZoneRow>
        <div className="textBox">
          <h3>Cennik</h3>
         
          
          <StyledPrices>
          <div>
          <p>składka miesięczna</p> <h4>200 pln</h4>  obejmuje treningi w Warszawskim Centrum Aikido, w dowolnej
          lokalizacji
        </div>
            <div>
              <p>składka za 3 miesiące</p> <h4>540 pln</h4> oszczędzasz
              20 pln miesięcznie
            </div>
            <div>
            <p>składka za 10 miesięcy</p> <h4>1700 pln</h4> oszczędzasz
            30 pln miesięcznie
          </div>
            <div className="family">
              <p>składka rodzinna</p> <p> <h4> 360 pln</h4>za 2 osoby/miesiąc</p> 
              <p><h4> 480 pln  </h4> za 3 osoby/miesiąc </p>
            </div>
            <div>
               program rabatowy<h4>do 30% rabatu</h4>{" "}
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
