import React from "react";

import { StyledZone, StyledZoneRow } from "./Zones.styled";

const WcaZone = () => {
  return (
    <StyledZone className="dojo">
      <StyledZoneRow>
        <div className="textBox">
          <a
            href="https://aikido.warszawa.pl/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3>Warszawskie Centrum Aikido</h3>
          </a>
          <p>
            Warszawskie Centrum Aikido (WCA) powstało w listopadzie 2001 roku z
            inicjatywy Marcina Ziółkowskiego i Michała Kaźmierczaka i
            współpracuje z ‚”Aikido du Rhone” w Lyonie, gdzie zajęcia prowadzi
            Sensei Etienne Leman (7 Dan Aikido), który jest jednym z
            bezpośrednich uczniów mistrza Hirokazu Kobayashi. Aikido którego
            uczymy w naszym klubie, należy do linii Kobayashi, przywiązującej
            znaczącą uwagę również do umiejętności wykorzystania broni (jo,
            bokken, tanto). Sensei Leman prowadzi w Polsce kilka razy w roku
            staże treningowe oraz corocznie letni obóz aikido dla dzieci i
            dorosłych.
          </p>
          <p>
            {" "}
            Sekcja w Pruszkowie jest jedną z kilku wchodzących w skład klubu
            Warszawskie Centrum Aikido.
          </p>
          <p>
            Ponieważ cechą przewodnią naszej sekcji jest nieustanny rozwój osób
            trenujących, doskonalenie umiejętności i pogłębianie wiedzy, dlatego
            staramy się zapewnić naszym adeptom możliwość ciągłego rozwoju.
            Kilka razy w roku, klub organizuje staże dla zaawansowanych, aby jak
            najlepiej rozwinąć umiejętności każdego aikidoki niezależnie od
            poziomu zaawansowania.
          </p>
          <p>
            {" "}
            Nasi instruktorzy bezustannie pogłębiają swoje umiejętności i
            wiedzę, aby móc ją przekazywać swoim adeptom na jak najwyższym
            poziomie. Instruktorzy posiadają uprawnienia do prowadzenia zajęć
            rekreacji ruchowej o specjalności aikido, z dziećmi i dorosłymi, jak
            również posiadają przeszkolenie z zakresu udzielania pierwszej
            pomocy medycznej.
          </p>
        </div>
      </StyledZoneRow>
    </StyledZone>
  );
};

export default WcaZone;
