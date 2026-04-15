import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'kalkulator-betonu-zaprawy';
const title = 'Kalkulator Betonu i Zaprawy: Dokładne Ilości Cementu, Piasku i Wody';
const description =
  'Oblicz ile worków cementu, łopat piasku i litrów wody potrzebujesz na 1 m³. Do fundamentów, wylewek, murów i szlichty. Przewodnik dozowania technicznego.';

const faqData = [
  {
    question: 'Ile worków cementu 25kg wchodzi w metr sześcienny?',
    answer:
      'Dla standardowego betonu (klasa wytrzymałości C20/25) potrzeba około 14 worków po 25kg (350kg) do przygotowania jednego metra sześciennego zagęszczonej mieszanki.',
  },
  {
    question: 'Co jest mocniejsze, beton czy zaprawa?',
    answer:
      'Beton (z żwirem) jest mocniejszy strukturalnie i służy do przenoszenia dużych obciążeń. Zaprawa (tylko piasek) jest idealna do łączenia elementów lub tynkowania powierzchni.',
  },
  {
    question: 'Ile łopat to jeden metr sześcienny?',
    answer:
      'Zależy to od rozmiaru łopaty, ale zazwyczaj przyjmuje się 180-200 łopat piasku na m³. Nasz kalkulator przelicza m³ na sugerowaną liczbę łopat.',
  },
  {
    question: 'Czy mogę przygotować mieszankę ręcznie bez betoniarki?',
    answer:
      'Tak, choć wymaga to znacznie większego wysiłku fizycznego. Najlepiej robić to na czystej i szczelnej powierzchni (blacha lub kastra), aby nie stracić wody.',
  },
  {
    question: 'Dlaczego beton pęka podczas wysychania?',
    answer:
      'Często wynika to z braku wilgoci podczas wiązania (zbyt szybkie parowanie wody) lub nadmiaru wody w mieszance. Zaleca się podlewanie betonu w kolejnych dniach.',
  },
];

const howToData = [
  {
    name: 'Wybierz typ mieszanki',
    text: 'Wybierz, czy przygotowujesz beton na fundamenty czy zaprawę do murowania.',
  },
  {
    name: 'Podaj objętość w m³',
    text: 'Wprowadź całkowitą objętość. Pomnóż długość x szerokość x grubość.',
  },
  {
    name: 'Sprawdź ilości',
    text: 'Zobacz ile worków, łopat i litrów musisz kupić.',
  },
  {
    name: 'Zastosuj proporcje',
    text: 'Postępuj zgodnie z wizualnym przewodnikiem dotyczącym cementu, piasku i żwiru.',
  },
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

const howToSchema: WithContext<HowToThing> = {
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    {
      name: 'Norma PN-EN 206: Beton – Wymagania, właściwości, produkcja i zgodność',
      url: 'https://www.pkn.pl/',
    },
    {
      name: 'Concrete Mix Proportioning Standards (ASTM)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: 'Przewodnik po dozowaniu zapraw cementowych',
      url: 'https://pl.wikipedia.org/wiki/Zaprawa_murarska',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Przewodnik po dozowaniu betonu i zaprawy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podczas remontu lub budowy jednym z najczęstszych pytań jest <strong>ile worków cementu potrzebuję na metr sześcienny betonu?</strong>. To nie tylko kwestia zmieszania składników; końcowa wytrzymałość konstrukcji zależy bezpośrednio od precyzji proporcji cementu, piasku, żwiru i wody. Nasz kalkulator przelicza wymiary przemysłowe na praktyczne jednostki budowlane: worki 25kg, łopaty i litry.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'Nadmiar wody osłabia beton',
      html: '<p>Częstym błędem jest dodawanie zbyt dużej ilości wody, aby beton lepiej płynął. Nadmiar wody tworzy pory podczas parowania w trakcie wiązania, co drastycznie zmniejsza wytrzymałość końcową. Idealna konsystencja powinna przypominać <strong>gęstą pastę, a nie ciecz</strong>. Używaj minimalnej możliwej ilości wody.</p>',
    },
    {
      type: 'title',
      text: 'Standardowe proporcje według zastosowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Dozowanie betonu</strong> różni się w zależności od zastosowania. Dla <strong>Betonu C20/25</strong> (fundamenty i wylewki) proporcja to 1 część cementu, 2.5 części piasku i 3 części żwiru. Dla <strong>Zaprawy Murarskiej</strong> (mury) to 1 część cementu i 4 części piasku. Dla <strong>Zaprawy do Szlichty</strong> to 1 część cementu i 3 części piasku. Beton ze żwirem wytrzymuje większe obciążenia; zaprawa z samym piaskiem idealnie nadaje się do spoinowania i tynkowania.',
    },
    {
      type: 'title',
      text: 'Jak obliczyć m³ których potrzebujesz',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Przykład obliczenia dla wylewki',
      html: '<p>Dla wylewki ogrodowej o długości 4m, szerokości 3m i grubości 15cm: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. Nasz kalkulator wykonuje tę operację automatycznie po wprowadzeniu wymiarów w sekcji "Według Wymiarów".</p><p>Pamiętaj, aby zawsze <strong>kupić o 10% więcej materiału</strong>, aby zrekompensować straty przez rozlanie lub nierówności terenu.</p>',
    },
    {
      type: 'title',
      text: 'Kolejność mieszania i dozowanie na worki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na budowach często mówi się o <strong>"mieszance na 300 kilo"</strong>: 300kg cementu na każdy metr sześcienny gotowego betonu. Dla poprawnego wymieszania w betoniarce: najpierw woda, potem żwir i piasek (aby rozbić grudki), a na końcu cement dodawany stopniowo.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'Zasada 10% aby uniknąć braku materiału',
      html: '<p>Zawsze kupuj <strong>o 10% więcej materiału</strong> niż wyliczono, aby zrekompensować straty, nierówności terenu lub różnice w rzeczywistej objętości wilgotnych kruszyw. Jest to znacznie tańsze niż konieczność składania drugiego zamówienia przy wstrzymanych pracach.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Beton Standardowy',
    mixH200Hint: 'Idealny do fundamentów i wylewek',
    mixM40Label: 'Zaprawa Murarska',
    mixM40Hint: 'Do murów i ścianek działowych',
    mixM80Label: 'Mocna Szlichta',
    mixM80Hint: 'Do podłóg i mocnych tynków',
    modeDimsLabel: 'Według Wymiarów',
    modeDirectLabel: 'm³ Bezpośrednio',
    labelLength: 'Długość',
    labelWidth: 'Szerokość',
    labelThickness: 'Grubość',
    labelVolume: 'Całkowita Objętość (m³)',
    binderCementLabel: 'Cement',
    binderLimeLabel: 'Wapno',
    summaryLabel: 'Razem do wypełnienia:',
    resUnitSacks: 'Worki (25kg)',
    resUnitShovels: 'Łopaty',
    resUnitLitres: 'Litry',
    resLabelCement: 'Cement Portlandzki',
    resLabelLime: 'Wapno Hydrauliczne',
    resLabelSand: 'Piasek / Kruszywo',
    resLabelWater: 'Woda Pitna',
    proportionsTitle: 'Proporcje wybranej mieszanki',
    propLabelSand: 'Piasek',
    propLabelGravel: 'Żwir',
    adviceH200: 'Idealny do słupów, wylewek i konstrukcji nośnych.',
    adviceM40: 'Doskonały do wznoszenia murów z cegły lub bloczków.',
    adviceM80: 'Użyj tego do bardzo wytrzymałych szlicht podłogowych.',
    adviceLimeH200: 'Beton wapienny jest bardziej elastyczny, ale wiąże dłużej.',
    priceTotalLabel: 'Szacowany budżet',
    priceSackLabel: 'Worek',
    priceSandLabel: 'Piasek (m³)',
    priceDisclaimer: 'Orientacyjne ceny rynkowe. Dostosuj według lokalnego dostawcy.',
  },
};
