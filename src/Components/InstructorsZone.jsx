import React from "react";

import { StyledZone, StyledZoneRow } from "./Zones.styled";
import Ola from "../../src/assets/inst_Ola.jpg";
import Rafal from "../../src/assets/inst_rafal.jpeg";
import Adam from "../../src/assets/inst_Adam.jpeg";

const InstructorsZone = () => {
  return (
    <StyledZone className="instructors">
      <StyledZoneRow>
        <img src={Rafal} alt="Rafał Jaroszewski" />
        <div className="textBox ">
          <h3 className="instTitle"> Rafał Jaroszewski 4 dan</h3>
          <p>
            Swoją drogę Aikido rozpoczął w 1995 r. pod okiem instruktorów
            Ireneusza Kołodziejak i Piotra Rafała w Bialskiej Sekcji Aikido.
          </p>
          <p>
            Na przestrzeni lat trenował w kilku warszawskich klubach aikido pod
            okiem różnych nauczycieli.
          </p>
          <p>
            Z klubem Warszawskie Centrum Aikido jest związany od początku
            powstania klubu w 2001 roku. Od 2004 roku jest instruktorem aikido.
            Do 2010 roku prowadził treningi w dojo na Pradze Południe, a
            następnie w Pruszkowie.
          </p>
          <p>
            Egzamin na stopień mistrzowski 1 dan zdał w 2003 roku przed komisją
            Polskiej Unii Aikido (Jacek Wysocki Shihan, Ireneusz Kołodziejak
            Shihan, Wiesław Chmieliński Sensei, Marcin Velinov Sensei). Egzaminy
            na kolejne stopnie mistrzowskie 2, 3 i 4 dan zdawał przed mistrzem
            Etienne Leman Shihan.
          </p>
          <p>
            Rafał uczestniczy regularnie w stażach prowadzonych przez różnych
            nauczycieli szkoły Aikido Kobayashi jak i innych linii Aikido. Od
            wielu lat bierze udział w obozach prowadzonych przez mistrza Etienne
            Leman, klubowych szkoleniach instruktorskich oraz dla
            zaawansowanych.
          </p>
          <span>
            Instruktor rekreacji ruchowej - samoobrona leg. nr 14932/2005.
          </span>
        </div>
      </StyledZoneRow>
      <StyledZoneRow>
        <img src={Ola} alt="Aleksandra Jaroszewska" />
        <div className="textBox">
          <h3 className="instTitle">Aleksandra Jaroszewska 2 dan</h3>
          <p>
            Trenuje Aikido od 1999r. Pierwsze kroki na macie stawiała w
            Bialskiej Sekcji Aikido pod okiem Piotra Rafała i Ireneusza
            Kołodziejak.
          </p>
          <p>
            W Warszawie trafiła do Warszawskiego Centrum Aikido
            dojo Niecała a następnie dojo Osiecka.{" "}
          </p>
          <p>W latach 2005 - 2010 drugi instruktor w dojo Osiecka WCA.</p>
          <p>
            Stopnie mistrzowskie 1 i 2 dan uzyskała u Etienne Leman shihan.
          </p>
          <p>Intruktor grupy dziecięcej.</p>
          <span>
            Instruktor rekreacji ruchowej samoobrona-aikido leg. nr 72/04
          </span>
        </div>
      </StyledZoneRow>
      <StyledZoneRow>
        <img src={Adam} alt="Adam Marcinowski" />
        <div className="textBox">
          <h3 className="instTitle"> Adam Marcinowski 3 dan</h3>
          <p>Swoją przygodę z aikido rozpoczął w 1992 r. w Grudziądzu.</p>
          <p>
            W 2012 dołączył do sekcji pruszkowskiej Warszawskiego Centrum
            Aikido.
          </p>
          <p>
            Od tego czasu regularnie trenuje i wspiera w rozwoju grupę dorosłych
            w Pruszkowie.{" "}
          </p>
          <p>
            Egzaminy mistrzowskie na 1, 2 i 3 Dan zdał u Etienne Leman shihan
            (7DAN).
          </p>
          <p>
            Uczestniczy regularnie w stażach prowadzonych przez różnych mistrzów
            zarówno szkoły Kobayashi jak i innych linii Aikido jak i w obozach i
            treningach instruktorskich organizowanych w ramach WCA.{" "}
          </p>
          <span>
           Instruktor rekreacji ruchowej - samoobrona leg.
            nr 02/ATIS/IR-S/2019
          </span>
        </div>
      </StyledZoneRow>
    </StyledZone>
  );
};

export default InstructorsZone;
