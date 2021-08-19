import React from "react";
import { StyledRodo } from "./Rodo.styled";

const Rodo = () => {
  return (
    <StyledRodo>
      <a href="/">
        <i className="fas fa-arrow-left"></i> powrót do strony głównej{" "}
      </a>
      <h2>Informacja o przetwarzaniu danych:</h2>
      <p>
        Informujemy, że od 25 maja 2018 r. w Polsce rozpoczyna się stosowanie
        przepisów Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
        dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
        przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
        danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
        ochronie danych, zwane także RODO).
      </p>
      <h3>
        Celem wypełnienia obowiązku informacyjnego określonego art. 13 RODO
        informujemy, że:
      </h3>
      <ol>
        <li>
          {" "}
          Administratorem danych osobowych jest Warszawskie Centrum Aikido Rafał
          Jaroszewski ul. Koksowa 13/2 05-802 Pruszków NIP 5372072263{" "}
        </li>
        <li>
          {" "}
          Współadministratorami danych osobowych są:
          <p>
            - Warszawskie Centrum Aikido Bis Michał Kaźmierczak, ul. Stawy 2d,
            05-822 Milanówek, NIP 8522254100
          </p>
          <p>
            - Warszawskie Centrum Aikido Marcin Ziółkowski ul. Pasłęcka 14c/55
            03-137 Warszawa NIP 7661241282
          </p>
        </li>
        <li>
          Z Administratorem można się kontaktować:
          <p>
            {" "}
            - pisemnie za pomocą poczty tradycyjnej na adres: Warszawskie
            Centrum Aikido Rafał Jaroszewski, Koksowa 13/2 05-802 Pruszków{" "}
          </p>
          <p>
            {" "}
            - za pomocą poczty elektronicznej, na adres: rodo@aikido.pruszkow.pl
          </p>
        </li>
        <li>
          Pani/Pana dane osobowe są przetwarzane w celu świadczenia usług
          związanych z zajęciami sportowymi, organizowaniem wyjazdów
          kolonii/obozów, organizowaniem dodatkowych/specjalnych zajęć
          sportowych, udzielania rabatów, zapewnienia prawidłowej obsługi
          klienta, prezentacji reklam i przesyłania informacji handlowych,
          obsługi księgowo – rachunkowej,
        </li>
        <li>
          Podstawą prawną przetwarzania danych osobowych może być wyrażona przez
          Pana/Panią zgoda (art. 6 ust. 1 lit. a RODO), konieczność podjęcia
          działań na Pana/Pani żądanie osoby (art. 6 ust. 1 lit. b RODO) lub też
          cele związane z prawnie uzasadnionym interesem realizowanym przez
          administratora lub przez stronę trzecią (art. 6 ust. 1 lit. F RODO).
          Prawnie uzasadnionym interesem administratora jest konieczność
          oferowania klientom możliwie najlepszej jakości obsługi, dopasowania
          oferty do potrzeb i oczekiwań kupujących/zamawiających, a także
          prowadzenie działań marketingowych, promocyjnych i reklamowych,
        </li>
        <li>
          {" "}
          Odbiorcami Pana/Pani danych osobowych mogą być podmioty współpracujące
          z Administratorem/Współadministratorem w wykonywaniu zadań określonych
          w pkt 3, w szczególności usługodawcy świadczący usługi reklamowe i
          marketingowe, a także w zakresie rozliczeń należności, organizatorzy
          wyjazdów, imprez i zajęć sportowych,
        </li>
        <li>
          {" "}
          Pana/Pani dane osobowe mogą być przekazywane do państw trzecich, tj.
          poza Europejski Obszar Gospodarczy (EOG) lub do organizacji
          międzynarodowych, jednak wyłącznie do podmiotów, które zapewniają
          odpowiednie zabezpieczenia oraz gwarantują prawa osób, których dane
          dotyczą, i skuteczne środki ochrony prawnej. W szczególności obejmuje
          to korzystanie przez Administratora z usług świadczonych przez Google
          oraz Facebook, w takim zakresie, w jakim jest to niezbędne dla
          realizacji celów wskazanych w pkt 3,
        </li>
        <li>
          Pani/Pana dane osobowe będą przetwarzane przez Administratora przez
          okres niezbędny do świadczenia usług lub w innych celach wskazanych w
          pkt 3 powyżej,
        </li>
        <li>
          Państwa dane osobowe nie będą przetwarzane w procesie
          zautomatyzowanego podejmowania decyzji, w tym profilowania,
        </li>
        <li>
          W związku z przetwarzaniem Państwa danych osobowych przez
          Administratora przysługują Państwu następujące prawa:
          <p>– żądania dostępu do danych osobowych,</p>
          <p>– żądania sprostowania danych osobowych,</p>
          <p>– żądania usunięcia danych osobowych,</p>
          <p>– żądania ograniczenia przetwarzania danych osobowych,</p>
          <p>– przenoszenia danych osobowych,</p>
        </li>
        <li>
          Informujemy, że nie ma Pan/Pani ustawowego obowiązku podania danych
          osobowych, jednakże obowiązek ten może wynikać z przepisów
          szczególnych. Konsekwencją niepodania danych osobowych może być w
          szczególności brak możliwości świadczenia usług na Pana/Pani rzecz,
        </li>
        <li>Administrator nie wyznaczył Inspektora Ochrony Danych,</li>
        <li>
          Administrator dokłada wszelkich starań, aby zapewnić wszelkie środki
          fizyczne, techniczne i organizacyjne ochrony danych osobowych przed
          ich przypadkowym czy umyślnym zniszczeniem, przypadkową utratą,
          zmianą, nieuprawnionym ujawnieniem, wykorzystaniem czy dostępem,
          zgodnie ze wszystkimi obowiązującymi przepisami.
        </li>
      </ol>
    </StyledRodo>
  );
};

export default Rodo;
