import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'kalkulator-spadku-napiecia';
const title = 'Kalkulator Spadku Napięcia i Doboru Przekroju Kabla';
const description = 'Narzędzie techniczne zapobiegające spaleniu kabli. Oblicz przekrój niezbędny dla instalacji 12V, 24V i 230V w zależności od odległości i mocy.';

const faqData = [
  {
    question: 'Co to jest spadek napięcia i dlaczego ma znaczenie?',
    answer: 'Jest to strata napięcia, która występuje, gdy prąd płynie przez kabel. Jeśli kabel jest zbyt cienki lub zbyt długi, tracisz napięcie. Rezultat: przygaszone światła, silniki, które nie startują, lub kable, które niebezpiecznie się nagrzewają.',
  },
  {
    question: 'Jaki przekrój kabla potrzebuję dla 12V na 10 metrów?',
    answer: 'To zależy od mocy. Dla 12V i 10A na 10m potrzebujesz minimum 2.5mm². Dla 20A potrzebujesz 6mm². Przy niskim napięciu (12V/24V) spadek jest znacznie bardziej krytyczny niż przy 230V.',
  },
  {
    question: 'Czy mogę użyć kabla 1.5mm² do całej mojej instalacji?',
    answer: 'Nie. 1.5mm² jest do obwodów oświetleniowych (max 10A). Do gniazdek potrzebujesz 2.5mm². Do kuchni lub pralki potrzebujesz 4mm² lub 6mm². Używanie zbyt cienkich kabli jest niebezpieczne i może spowodować pożar.',
  },
  {
    question: 'Jaki jest maksymalny dopuszczalny spadek napięcia?',
    answer: 'W instalacjach domowych (230V): maks. 3% dla oświetlenia, 5% dla innych zastosowań. W 12V/24V (kampery, fotowoltaika): nie więcej niż 3% łącznie. Większy spadek oznacza utratę wydajności i ryzyko przegrzania.',
  },
];

const howToData = [
  { name: 'Zdefiniuj napięcie systemu', text: 'Wybierz, czy Twoja instalacja to 12V, 24V (solar/kamper) czy 230V (domowa).' },
  { name: 'Wprowadź natężenie prądu', text: 'Wpisz Ampery (A) lub Waty (W), które będzie pobierać urządzenie na końcu kabla.' },
  { name: 'Zmierz długość kabla', text: 'Wprowadź długość kabla (w jedną stronę) w metrach od źródła energii do odbiornika.' },
  { name: 'Wybierz materiał przewodnika', text: 'Wybierz miedź (standard) lub aluminium, aby uzyskać dokładne obliczenia rezystywności.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    { name: 'IEC 60364: Instalacje elektryczne niskiego napięcia', url: 'https://www.iec.ch/' },
    { name: 'Prawo Ohma i Rezystywność: Wikipedia', url: 'https://pl.wikipedia.org/wiki/Rezystywno%C5%9B%C4%87' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Kompletny Przewodnik po Spadku Napięcia', level: 2 },
    { type: 'paragraph', html: 'Jeśli budujesz kampera, projektujesz instalację solarną lub kładziesz kable w ogrodzie, istnieje niewidzialny wróg: <strong>spadek napięcia</strong>. To nie tylko kwestia techniczna; to różnica między lodówką, która chłodzi, a taką, która się wyłącza, oraz między bezpieczną instalacją a ryzykiem pożaru.' },
    { type: 'title', text: 'Wzór na Spadek Napięcia', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Dokładne Obliczenia z Prawem Ohma', html: '<p>Wzór to <strong>ΔV = (2 × L × I × ρ) / S</strong>, gdzie L to długość w jedną stronę, I to prąd, ρ to rezystywność (0,0178 dla miedzi), a S to przekrój kabla.</p>' },
  ],
  ui: {
    heroDropLabel: 'Całkowity Spadek Napięcia',
    heroVoltsUnit: 'Wolty',
    heroPctLoss: '% straty',
    heroEffLabel: 'Wydajność',
    statusExcellent: 'Doskonała',
    statusAcceptable: 'Akceptowalna',
    statusCritical: 'Krytyczna',
    fieldVoltage: 'Napięcie',
    fieldMaterial: 'Materiał',
    materialCopper: 'Miedź',
    materialAlum: 'Alum.',
    fieldLoad: 'Obciążenie',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Waty',
    unitAmps: 'Ampery',
    fieldLength: 'Długość Kabla (w jedną stronę)',
    unitMeters: 'metry',
    fieldSection: 'Przekrój Kabla',
    sectionInfo: 'Zalecany',
  },
};
