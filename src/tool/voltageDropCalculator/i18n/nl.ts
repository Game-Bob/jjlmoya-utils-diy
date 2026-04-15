import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'spanningsverlies-calculator';
const title = 'Spanningsverlies Calculator en Kabeldikte Berekenen';
const description = 'Technisch hulpmiddel om verbrande kabels te voorkomen. Bereken de benodigde kabeldikte voor 12V, 24V en 230V installaties op basis van afstand en vermogen.';

const faqData = [
  {
    question: 'Wat is spanningsverlies (voltage drop) en waarom is het belangrijk?',
    answer: 'Het is het verlies aan spanning dat optreedt wanneer elektriciteit door een kabel reist. Als de kabel te dun of te lang is, verlies je spanning. Resultaat: zwak licht, motoren die niet starten, of kabels die gevaarlijk warm worden.',
  },
  {
    question: 'Welke kabeldikte heb ik nodig voor 12V op 10 meter?',
    answer: 'Dat hangt af van het vermogen. Voor 12V en 10A op 10m heb je minimaal 2,5mm² nodig. Voor 20A heb je 6mm² nodig. Bij lage spanning (12V/24V) is het verlies veel kritischer dan bij 230V.',
  },
  {
    question: 'Kan ik 1,5mm² kabel gebruiken voor mijn hele installatie?',
    answer: 'Nee. 1,5mm² is voor verlichtingscircuits (max 10A). Voor stopcontacten heb je 2,5mm² nodig. Voor de keuken of wasmachine heb je 4mm² atau 6mm² nodig. Te dunne kabels zijn gevaarlijk en kunnen brand veroorzaken.',
  },
  {
    question: 'Wat is het maximaal toegestane spanningsverlies?',
    answer: 'In huisinstallaties (230V): maximaal 3% voor verlichting, 5% voor andere toepassingen. Bij 12V/24V (campers, solar): niet meer dan 3% totaal. Meer verlies betekent verlies aan efficiëntie en risico op oververhitting.',
  },
];

const howToData = [
  { name: 'Systeemspanning definiëren', text: 'Kies of je installatie 12V, 24V (solar/camper) of 230V (huis) is.' },
  { name: 'Stroomsterkte invoeren', text: 'Voer het aantal Ampère (A) of Watt (W) in dat het apparaat aan het einde van de kabel verbruikt.' },
  { name: 'Kabelafstand meten', text: 'Voer de lengte van de kabel (enkele reis) in meters in vanaf de energiebron tot de verbruiker.' },
  { name: 'Geleidermateriaal kiezen', text: 'Kies koper (standaard) of aluminium voor een nauwkeurige berekening van de weerstand.' },
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    { name: 'IEC 60364: Elektrische installaties voor laagspanning', url: 'https://www.iec.ch/' },
    { name: 'Wet van Ohm en Weerstand: Wikipedia', url: 'https://nl.wikipedia.org/wiki/Wet_van_Ohm' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Volledige Gids voor Spanningsverlies', level: 2 },
    { type: 'paragraph', html: 'Of je nu een camper bouwt, een zonnesysteem ontwerpt of kabels trekt voor je tuin, er is een onzichtbare vijand: <strong>spanningsverlies</strong>. Dit is niet alleen een technisch dingetje; het is het verschil tussen een koelkast die koelt en een die uitgaat, of tussen een veilige installatie en een brandrisico.' },
    { type: 'title', text: 'De Formule voor Spanningsverlies', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Nauwkeurige Berekening met de Wet van Ohm', html: '<p>De formule is <strong>ΔV = (2 × L × I × ρ) / S</strong>, waarbij L de enkele lengte is, I de stroom, ρ de resistiviteit (0,0178 voor koper) en S de kabeldoorsnede.</p>' },
  ],
  ui: {
    heroDropLabel: 'Totaal Spanningsverlies',
    heroVoltsUnit: 'Volt',
    heroPctLoss: '% verlies',
    heroEffLabel: 'Efficiëntie',
    statusExcellent: 'Uitstekend',
    statusAcceptable: 'Acceptabel',
    statusCritical: 'Kritiek',
    fieldVoltage: 'Spanning',
    fieldMaterial: 'Materiaal',
    materialCopper: 'Koper',
    materialAlum: 'Alum.',
    fieldLoad: 'Belasting',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watt',
    unitAmps: 'Ampère',
    fieldLength: 'Kabellengte (Enkele Reis)',
    unitMeters: 'meter',
    fieldSection: 'Kabeldoorsnede',
    sectionInfo: 'Aanbevolen',
  },
};
