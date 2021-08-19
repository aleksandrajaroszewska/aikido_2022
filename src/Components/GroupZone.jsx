import React from "react";

import { Adults, Kids, Young } from "../Images/import";
import Slider from "../Atoms/Slider";
import { StyledZone, StyledZoneRow } from "./Zones.styled";

const GroupZone = () => {
  return (
    <StyledZone className="groups">
      <StyledZoneRow>
        <Slider images={Kids} />
        <div className="textBox">
          <h3>Dzieci</h3>
          <p>
            Treningi tej grupy to przede wszystkim zabawy ruchowe przeplecione
            ćwiczeniami ogólnorozwojowymi oraz podstawowymi elementami aikido.
          </p>
          <p>
            Instruktorzy starają się by zajęcia ruchowe kojarzyły się dziecku z
            przyjemnie spędzonym czasem a zarazem podniosły jego ogólną
            sprawność fizyczną.
          </p>
          <p>
            Dzieci poznają podstawowe zasady obowiązujące w sztukach walki,
            liczą po japońsku, zaprzyjaźniają się z innymi dziećmi, uczą się
            dyscypliny, wytrwałości w dążeniu do celu, pracy w parach i w
            grupie. Poprawiają koordynację ruchową, budują pewność siebie,
            przełamują strach przed starszymi.{" "}
          </p>
          <p>
            Trening najmłodszych prowadzi Sensei Aleksandra Jaroszewska (2 dan).
            Zapraszamy od 6-ciu lat.
          </p>
        </div>
      </StyledZoneRow>
      <StyledZoneRow>
        <div className="textBox ">
          <h3>Młodzież</h3>
          <p>
            W grupie dzieci starszych ciągle znaczącą część treningu stanowią
            ćwiczenia poprawiające ogólną sprawność fizyczną. Zajęcia są
            uzupełnione większą ilością technik aikido oraz wybranymi elementami
            samoobrony.{" "}
          </p>
          <p>
            {" "}
            Treningi są bardziej wymagające i zróżnicowane. Dzieci mają okazje
            poznać podstawowe ćwiczenia z wykorzystaniem „jo” (drewniana broń).
            Treningi pomagają rozwinąć szybkość, poprawić sprawność,
            wytrzymałość i koordynację ruchową.{" "}
          </p>
          <p>
            {" "}
            Dzieci uczą się osiągać cel własnym wysiłkiem i systematyczną pracą
            . Sprężynka, gwiazda czy stanie na rękach przestają być
            nieosiągalne.
          </p>
          <p>
            {" "}
            Dzieci mogą brać udział w obozach aikido gdzie trenują pod okiem
            doświadczonej kadry, rozwijają samodzielność, nawiązują przyjaźnie.
          </p>
          <p> Trening tej grupy prowadzi Sensei Rafał Jaroszewski (4 dan).</p>
        </div>
        <Slider images={Young} />
      </StyledZoneRow>
      <StyledZoneRow>
        <Slider images={Adults} />
        <div className="textBox">
          <h3>Dorośli</h3>

          <p>
            Grupa dorosłych to przede wszystkim rozwój umiejętności
            technicznych, polegających na wykorzystaniu różnych dźwigni, rzutów
            i uderzeń do odparcia ataku przeciwnika. Trening dorosłych pozwala
            nie tylko poprawić sprawność ale również oderwać się od rutyny dnia
            codziennego, odpocząć psychicznie, obniżyć poziom stresu, podnieść
            poziom serotoniny, rozwinąć inteligencję ruchową i poprawić
            świadomość własnego ciała.{" "}
          </p>

          <p>
            Aikido to dyscyplina która cieszy się dużą popularnością wśród
            kobiet i mężczyzn niezależnie od wieku, siły, sprawności czy
            postury. W aikido nie ma rywalizacji , każdy nosi białe kimono,
            panuje przyjazna atmosfera, zaawansowani pomagają początkującym,
            każdy ma własny treningowy cel.{" "}
          </p>

          <p>
            Elementy aikido są często wykorzystywane na różnych kursach
            samoobrony, lecz aikido to nie tylko samoobrona i może okazać się
            użyteczne również na wielu płaszczyznach życia codziennego. Jest
            chętnie wybierane przez osoby stawiające sobie niebanalne i
            wymagające cele.{" "}
          </p>
          <p>
            {" "}
            Może to również Twoja dyscyplina. Przyjdź, spróbuj i sam się
            przekonaj. Trening tej grupy prowadzi Sensei Rafał Jaroszewski (4
            dan).
          </p>
        </div>
      </StyledZoneRow>
    </StyledZone>
  );
};

export default GroupZone;
