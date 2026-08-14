import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'kalkulator-plyt-gipsowych';
const title = 'Kalkulator Plyt Gipsowych i Profilu Metalowego';
const description = 'Profesjonalny kalkulator zapotrzebowania na materialy do scianek dzialowych z plyt gipsowo-kartonowych (Nida/Rigips). Oblicz plyty, profile CW, UW, wkrety, tasme i mase szpachlowa.';

const faqData = [
  {
    question: 'Jak obliczyc ile plyt gipsowych potrzeba na scianke dzialowa?',
    answer: 'Pomnoz dlugosc sciany przez wysokosc pomieszczenia. W przypadku scian dwustronnych pomnoz powierzchnie przez 2, a dla podwojnego oplytowania dwustronnie przez 4. Podziel powierzchnie przez metraz jednej plyty (2.88 m2 dla plyty 120x240 cm) i dodaj 10% zapasu na dociecia.',
  },
  {
    question: 'Kiedy stosowac rozstaw profili CW co 40 cm a kiedy co 60 cm?',
    answer: 'Standardowy rozstaw profili CW co 60 cm nadaje sie do zwyklych scian dzialowych do 3,0 m wysokosci. Rozstaw co 40 cm jest obowiazkowy pod ciezkie plytki ceramiczne, w pomieszczeniach wilgotnych (lazienka, kuchnia), przy scianach akustycznych oraz wysokosciach powyzej 3 metrow.',
  },
  {
    question: 'Jaka plyte gipsowa wybrac do danego pomieszczenia?',
    answer: 'Uzywaj Plyty Standardowej Bialej (Typ A) do pokoi i korytarzy; Plyty Wodoodpornej Zielonej (Typ H1) do lazienek i kuchni; Plyty Ochronnej Oglowej Rózowej (Typ F) do kominkow i kotlowni; oraz Plyty Akustycznej Niebieskiej do wyguszenia.',
  },
  {
    question: 'Ile wkretow potrzeba na jedna plyte gipsowa?',
    answer: 'Przyjmij ok. 30 wkretow do gipsu (3.5x25 mm) na jedna plyte 120x240 cm przy pojedynczym oplytowaniu. Wkrety rozmieszczaj co 25 cm na krawedziach i co 30 cm na profilach wewnetrznych.',
  },
  {
    question: 'Dlaczego tasma akustyczna pod profile UW jest obowiazkowa?',
    answer: 'Samoprzylepna tasma piankowa z polietylenu izoluje mechanicznie profile obwodowe UW od podlogi i stropu, zapobiegajac przenoszeniu drgan i dzwiekow uderzeniowych.',
  },
];

const howToData = [
  { name: 'Wprowadz wymiary sciany', text: 'Podaj dlugosc i wysokosc sciany w metrach lub stopach.' },
  { name: 'Skonfiguruj stelasz i oplytowanie', text: 'Wybierz rozstaw profili (40 cm lub 60 cm), liczbe warstw i stron oplytowania.' },
  { name: 'Sprawdz zestawienie i schemat CAD', text: 'Przejrzyj liste materialow (profile, wkrety, tasmy, masa) oraz rysunek elewacyjny stelasza.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Czesciej Zadawane Pytania',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Zasady Wymiarowania Konstrukcji Scian Dzialowych G-K',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Budowa lekkich scian dzialowych w systemie suchej zabudowy wymaga dokladnego przeliczenia stelasza z profili stalowych (CW i UW) oraz mijankowego ukladu spoin zgodnie z norma PN-EN 520.',
    },
    {
      type: 'title',
      text: 'Rozstaw Profili CW: 40 cm vs 60 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Rozstaw 60 cm</strong> to standard pasujacy do plyt o szerokosci 120 cm. <strong>Rozstaw 40 cm</strong> jest wymagany pod glazure i przy wysokosciach scian powyzej 3,0 m.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Przesuniecie Spoin i Zasady Wkrecania',
      html: '<p>Unikaj spoin krzyzowych. Przesuwaj krawedzie plyt o minimum 40 cm. Mocuj plyty wkretami 3.5x25 mm co <strong>25 cm na obwodzie</strong> i co <strong>30 cm w srodku</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Wspolczynnik Odpadow i Zuzycie Masy Szpachlowej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dolicz <strong>10% zapasu na straty</strong> na dociecia przy drzwiach i oknach. Szpachlowanie spoin zuzywa ok. 0.8 kg masy na metr kwadratowy oplytowania.',
    },
  ],
  ui: {
    unitSystemLabel: 'System Miar',
    unitMetric: 'Metryczny (m, cm, kg)',
    unitImperial: 'Imperialny (ft, in, lb)',

    paramLengthLabel: 'Dlugosc Sciany',
    paramHeightLabel: 'Wysokosc Sciany',
    paramSpacingLabel: 'Rozstaw Profili CW',
    paramSpacing40Metric: '40 cm (Duze Obciazenie)',
    paramSpacing60Metric: '60 cm (Standard)',
    paramSpacing40Imperial: '16 in (Duze Obciazenie)',
    paramSpacing60Imperial: '24 in (Standard)',
    paramLayersLabel: 'Warstwy Plyt',
    paramSingleLayer: 'Pojedyncze Oplytowanie',
    paramDoubleLayer: 'Podwojne Oplytowanie',
    paramSidesLabel: 'Strony Oplytowania',
    paramDoubleSided: '2 Strony (Scianka Dzialowa)',
    paramSingleSided: '1 Strona (Przedscianka)',
    paramBoardTypeLabel: 'Typ Plyty G-K',
    boardTypeStandard: 'Standardowa (Typ A)',
    boardTypeMoisture: 'Wodoodporna (Typ H1)',
    boardTypeFire: 'Ogniochronna (Typ F)',
    boardTypeAcoustic: 'Akustyczna (Typ A)',
    paramWasteLabel: 'Zapas na Straty',

    summaryWallArea: 'Powierzchnia Sciany Netto',
    summaryBoardArea: 'Calkowita Powierzchnia Plyt',

    resBoardsLabel: 'Plyty Gipsowe G-K',
    resBoardsUnit: 'sztuki',
    resStudsLabel: 'Profile CW (Pionowe)',
    resStudsUnit: 'sztuki',
    resTracksLabel: 'Profile UW (Poziome)',
    resTracksUnit: 'sztuki',
    resDrywallScrewsLabel: 'Wkrety do Plyt G-K',
    resDrywallScrewsUnit: 'sztuki',
    resFramingScrewsLabel: 'Wkrety do Profilu (Pchelki)',
    resFramingScrewsUnit: 'sztuki',
    resJointTapeLabel: 'Tasma do Spoin',
    resJointTapeUnit: 'dlugosc',
    resJointCompoundLabel: 'Masa Szpachlowa',
    resJointCompoundUnit: 'waga',
    resAcousticBandLabel: 'Tasma Guszaca Akustyczna',
    resAcousticBandUnit: 'dlugosc',

    diagramWallTitle: 'Rysunek Elewacyjny CAD',
    diagramStudLegend: 'Profile CW',
    diagramTrackLegend: 'Profile UW',
    diagramBoardLegend: 'Mijankowy Uklad Spoin',
    diagramModeStructure: 'Stelasz Metalowy',
    diagramModeBoard: 'Uklad Plyt',
  },
};
