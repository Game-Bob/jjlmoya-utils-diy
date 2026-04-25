import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-mieszanki-paliwa-2t';
const title = 'Kalkulator Mieszanki Paliwa do Silników 2T: Precyzyjne Proporcje';
const description = 'Oblicz błyskawicznie dokładne proporcje mieszanki paliwowo-olejowej do silnika 2-suwowego. Niezbędnik dla właścicieli pił, mopędów i kosiarek. Obsługuje proporcje 1:25, 1:33, 1:40 i 1:50.';

const faqData = [
  {
    question: 'Co to jest silnik 2-suwowy (2T)?',
    answer: 'Silnik 2-suwowy realizuje cały cykl pracy w dwóch ruchach tłoka, co czyni go prostszym i lżejszym od silników 4 suwowych. Napędzają one piły spalinowe, dmuchawy, mopędy i niektóre motocykle. Wymagają mieszania oleju bezpośrednio z paliwem w celu smarowania.',
  },
  {
    question: 'Jakie są typowe proporcje mieszanki?',
    answer: 'Typowe proporcje to 1:25 (bogata, ochronna), 1:33 (starszy sprzęt), 1:40 (standardowa) i 1:50 (uboga, nowoczesne silniki). Zawsze sprawdzaj instrukcję silnika – błędna proporcja może go uszkodzić.',
  },
  {
    question: 'Co się stanie przy złej mieszance?',
    answer: 'Zbyt duża ilość oleju (bogata mieszanka) powoduje nadmierne dymienie, nagar na świecach i spadek mocy. Zbyt mało oleju (uboga mieszanka) prowadzi do zatarcia silnika i kosztownej awarii.',
  },
  {
    question: 'Jakiego oleju używać?',
    answer: 'Używaj wyłącznie olejów przeznaczonych do silników 2-suwowych (2T). Oleje syntetyczne premium zapewniają lepszą ochronę i czystsze spalanie niż oleje mineralne. Nigdy nie używaj oleju do silników 4 suwowych.',
  },
  {
    question: 'Jak prawidłowo wymieszać paliwo z olejem?',
    answer: 'Wlej połowę benzyny do czystego kanistra, dodaj odmierzoną ilość oleju, a następnie dolej resztę paliwa. Energicznie wstrząsaj przez 1-2 minuty. Oznacz kanister datą sporządzenia mieszanki.',
  },
];

const howToData = [
  { name: 'Sprawdź proporcję', text: 'Znajdź instrukcję obsługi swojego sprzętu. Typowe wartości: piły (1:40 lub 1:50), mopędy (1:33), stare motocykle (1:25). Zła proporcja niszczy silnik.' },
  { name: 'Odmierz benzynę', text: 'Zdecyduj, ile paliwa potrzebujesz. Kalkulator obsługuje litry i inne jednostki. Precyzyjny pomiar benzyny to gwarancja dobrej ilości oleju.' },
  { name: 'Oblicz ilość oleju', text: 'Wprowadź ilość paliwa i proporcję. Kalkulator pokaże dokładnie, ile ml lub litrów oleju musisz dodać.' },
  { name: 'Wymieszaj dokładnie', text: 'Wlej benzynę do czystego pojemnika, dodaj olej i resztę paliwa. Wstrząsaj przez 1-2 minuty, aby składniki dobrze się połączyły.' },
  { name: 'Oznacz i używaj', text: 'Opisz kanister datą i proporcją. Mieszankę zużyj w ciągu 30 dni (szczególnie przy paliwach z bio-dodatkami).' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<any> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Kalkulator Mieszanki Paliwa 2T: Precyzyjne Proporcje do Pił Spalinowych i Mopędów', level: 2 },
    { type: 'paragraph', html: 'Silniki dwusuwowe wymagają precyzyjnej mieszanki paliwowo-olejowej, aby działać poprawnie. Błąd w proporcjach może zniszczyć silnik w kilka minut. Ten kalkulator błyskawicznie wylicza dokładną ilość oleju potrzebną do danej objętości paliwa — koniec ze zgadywaniem w garażu.' },

    { type: 'title', text: 'Dlaczego silniki 2-suwowe wymagają oleju w paliwie?', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'Kluczowa różnica', html: 'W przeciwieństwie do silników 4 suwowych z oddzielną miską olejową, silniki 2T mieszają olej bezpośrednio z paliwem. Podczas każdego cyklu silnik spala mieszankę, która jednocześnie smaruje ruchome części. Brak smarowania to gwarantowane zatarcie tłoka.' },

    { type: 'title', text: 'Tabela proporcji 2T', level: 3 },
    { type: 'table', headers: ['Proporcja', 'Olej %', 'Zastosowanie', 'Typ silnika', 'Charakterystyka'], rows: [
      ['1:25', '3,85%', 'Maksymalna ochrona', 'Sprzęt sprzed lat 80., duże obciążenie, zabytki', 'Bogata mieszanka: więcej dymu, nagar, najwyższa ochrona przed zatarciem'],
      ['1:33', '2,94%', 'Sprzęt klasyczny', 'Małe silniki z lat 80-90, starsze piły', 'Umiarkowana bogatość: balans między ochroną a czystością'],
      ['1:40', '2,44%', 'Standard branżowy', 'Większość nowoczesnych pił i mopędów', 'Zalecenie standardowe: zoptymalizowane pod oleje syntetyczne'],
      ['1:50', '1,96%', 'Nowoczesna wydajność', 'Najnowsze piły, wyczynowe mopędy', 'Uboga mieszanka: mniej dymu, czystsze spalanie, tylko dla olejów premium']
    ] },

    { type: 'title', text: 'Konsekwencje błędnych proporcji', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Za dużo oleju (Bogata)', con: 'Gęsty dym, zarzucona świeca, spadek mocy, osady w układzie wydechowym' },
      { pro: 'Za mało oleju (Uboga)', con: 'Zatarcie tłoka w kilka sekund, zniszczenie gładzi cylindra, kosztowna naprawa' },
      { pro: 'Poprawna proporcja', con: 'Równa praca, optymalne smarowanie, dłuższa żywotność, łatwy rozruch' }
    ] },

    { type: 'title', text: 'Typowe proporcje dla urządzeń', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Piły spalinowe', html: '<strong>Stihl, Husqvarna, Echo:</strong> Nowoczesne modele wymagają zazwyczaj 1:40 lub 1:50. Zawsze sprawdź instrukcję — 1:25 w nowej pile to pewne problemy ze świecą. Starsze maszyny Stihl mogą wymagać 1:25 lub 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Mopędy i Motocykle', html: '<strong>Vespa, Romet, Simson:</strong> Zabytki wymagają zazwyczaj 1:33 lub 1:25. Nowsze konstrukcje 1:40-1:50. Instrukcja serwisowa to jedyne pewne źródło informacji.' },
    { type: 'card', icon: 'mdi:tools', title: 'Dmuchawy i Podkaszarki', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Zazwyczaj 1:50 (nowe) lub 1:40. Sprzęt ten pracuje sezonowo, więc ubogie mieszanki ograniczają dym bez utraty trwałości.' },

    { type: 'title', text: 'Rodzaj oleju ma znaczenie', level: 3 },
    { type: 'comparative', items: [
      { title: 'Olej mineralny 2T', description: 'Opcja budżetowa do rzadkiego użytku. Więcej dymu i popiołu, wystarczająca ochrona przy standardowych proporcjach.', icon: 'mdi:beaker', points: ['Niska cena', 'Widoczny dym', 'Większy nagar', 'Dobry do proporcji 1:40'] },
      { title: 'Olej syntetyczny 2T', description: 'Wybór premium. Czystsze spalanie, lepsza ochrona filmu olejowego, pozwala na proporcje 1:50. Stabilny termicznie.', icon: 'mdi:flame', points: ['Minimalne dymienie', 'Najlepsza ochrona silnika', 'Bezpieczne 1:50', 'Dłuższa trwałość mieszanki'], highlight: true },
      { title: 'Półsyntetyk (Semi synthetic)', description: 'Złoty środek. Dobra ochrona w rozsądnej cenie. Często zalecany przez producentów sprzętu.', icon: 'mdi:beaker-outline', points: ['Zrównoważone parametry', 'Umiarkowana cena', 'Idealny do 1:40', 'Mniej dymu niż minerał'] }
    ], columns: 3 },

    { type: 'title', text: 'Proces mieszania krok po kroku', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'Jak robić to poprawnie', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Używaj dedykowanego kanistra</strong> tylko do mieszanki. Czysty i szczelny.</li><li><strong>Wlej połowę paliwa</strong> jako pierwszą.</li><li><strong>Dodaj odmierzoną ilość oleju</strong> (użyj tego kalkulatora dla precyzji).</li><li><strong>Dolej resztę benzyny</strong> do pożądanej objętości.</li><li><strong>Wstrząsaj mocno przez 1-2 minuty</strong> aż kolor będzie jednolity. Jednorodna mieszanka = równe smarowanie.</li><li><strong>Opisz kanister</strong> datą i proporcją.</li><li><strong>Zużyj w ciągu 30 dni</strong> (syntetyki wytrzymają do 60 dni).</li></ol>' },

    { type: 'title', text: 'Kiedy nie ufać instrukcji?', level: 3 },
    { type: 'tip', html: '<strong>Zawsze najpierw sprawdź instrukcję producenta.</strong> Jeśli jej nie masz, odwiedź stronę producenta. Nigdy nie zgaduj „na oko” — zła mieszanka to utrata gwarancji i ryzyko zniszczenia silnika. W przypadku starych maszyn bez dokumentacji szukaj informacji na forach pasjonatów danej marki.' },

    { type: 'title', text: 'Słowniczek pojęć 2T', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mieszanka uboga', definition: 'Paliwo z małą ilością oleju (wysoka proporcja np. 1:50). Ryzyko zatarcia.' },
      { term: 'Mieszanka bogata', definition: 'Paliwo z dużą ilością oleju (niska proporcja np. 1:25). Powoduje dymienie i nagar.' },
      { term: 'Mieszanka jednorodna', definition: 'Dokładnie połączone paliwo z olejem. Uzyskuje się ją przez długie wstrząsanie.' },
      { term: 'Zatarcie (Seizure)', definition: 'Zablokowanie tłoka w cylindrze wskutek tarcia i temperatury. Oznacza śmierć silnika.' },
      { term: 'Olej syntetyczny', definition: 'Zaawansowany technologicznie olej o najwyższej ochronie i czystości spalania.' },
      { term: 'Silnik 2-suwowy', definition: 'Prosta konstrukcja, gdzie cykl pracy zamyka się w dwóch ruchach tłoka.' },
      { term: 'Silnik 4-suwowy', definition: 'Silnik z osobnym układem smarowania (olej w misce, nie w paliwie).' }
    ] },

    { type: 'title', text: 'Zalety tego kalkulatora', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Zero błędów w obliczeniach', icon: 'mdi:check-circle' },
      { value: 'Błyskawicznie', label: 'Wynik w sekundę, bez liczenia w pamięci', icon: 'mdi:flash' },
      { value: '4 Proporcje', label: '1:25, 1:33, 1:40, 1:50 w standardzie', icon: 'mdi:counter', trend: { value: 'Plus własne ustawienia', positive: true } },
      { value: 'Udostępnianie', label: 'Skopiuj i wyślij komuś swoje ustawienia przez URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Błędy, które zabijają silniki', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Używanie oleju do silników 4 suwowych', icon: 'mdi:alert', badge: 'Śmierć Silnika', html: 'Oleje 4T nie są przystosowane do spalania. W dwusuwie stworzą gęsty osad, który zniszczy gładź cylindra w kilka godzin.' },
    { type: 'diagnostic', variant: 'warning', title: 'Brak wymieszania paliwa', icon: 'mdi:alert', badge: 'Ryzyko Zatarcia', html: 'Jeśli olej i benzyna się rozwarstwią, silnik przez chwilę będzie pracował bez smarowania. Wstrząsaj kanistrem przed każdym tankowaniem.' },
    { type: 'diagnostic', variant: 'warning', title: 'Stare paliwo (ponad 60 dni)', icon: 'mdi:alert', badge: 'Zatory w gaźniku', html: 'Paliwo z czasem traci właściwości i „kwaśnieje”. Stara mieszanka zapycha dysze gaźnika i utrudnia rozruch.' },

    { type: 'title', text: 'Podsumowanie', level: 3 },
    { type: 'summary', title: 'Zanim zaczniesz mieszać', items: [
      'Sprawdź w instrukcji dokładną proporcję zalecaną przez producenta.',
      'Upewnij się, że masz olej 2T, a nie do kosiarki 4-suwowej.',
      'Używaj czystego kanistra przeznaczonego do paliw.',
      'Używaj świeżej benzyny i markowego oleju.',
      'Wymieszaj bardzo dokładnie i opisz kanister.',
      'Mieszanka powinna być zużyta w ciągu miesiąca.'
    ] },
  ],
  ui: {
    titleMain: 'Kalkulator Mieszanki Paliwa 2T',
    labelFuelVolume: 'Ilość Paliwa',
    labelRatio: 'Proporcja',
    labelOilRequired: 'Ilość Oleju',
    labelTotalMixture: 'Suma Mieszanki',
    labelRichness: 'Bogatość Mieszanki',
    labelPresets: 'Typowe Proporcje',
    labelCustomRatio: 'Inna Proporcja (1:X)',
    btnClear: 'Wyczyść',
    btnCopyResults: 'Kopiuj Wynik',
    btnSwitchMode: 'Zmień Tryb',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Uboga (mało oleju, ryzyko zatarcia)',
    richBalanced: 'Zrównoważona (standardowa)',
    richRich: 'Bogata (więcej oleju, ochrona silnika)',
    msgReady: 'Gotowy',
    msgMixtureReady: 'Mieszanka obliczona',
    tooltipFuelVolume: 'Wpisz ilość benzyny w litrach',
    tooltipRatio: 'Wpisz wartość: 25, 33, 40 lub 50 (dla 1:25, 1:33 itd.)',
    recipientLabel: 'Pojemnik na mieszankę',
    oilPercentage: '% Oleju',
    labelVolume: 'Objętość',
    labelRatioShort: 'Ratio',
    labelOilTip: 'Mieszanka 2% = proporcja 1:50',
    labelMixingTips: 'Wskazówki',
    labelMixingTipsDesc: 'Mieszaj w czystym kanistrze: najpierw benzyna, potem odmierzony olej, na koniec reszta benzyny. Wstrząsaj mocno 1-2 min. Oznacz datą i proporcją.',
    recipePrefix: 'Dla',
    recipeAt: 'benzyny przy',
    recipeAdd: 'dodaj dokładnie',
    recipeOfOil: 'oleju do silników 2T.',
    copyTextPrefix: 'Mieszanka 2T',
    copyTextFuel: 'paliwo',
    copyTextOil: 'olej',
  },
};
