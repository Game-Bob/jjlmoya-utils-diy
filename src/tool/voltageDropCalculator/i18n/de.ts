import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'spannungsabfall-rechner';
const title = 'Spannungsabfall Rechner und Kabelquerschnitt Rechner';
const description = 'Technisches Werkzeug zur Vermeidung von Kabelbränden. Berechnen Sie den erforderlichen Querschnitt für 12V, 24V und 230V Installationen nach Entfernung und Leistung.';

const faqData = [
  {
    question: 'Was ist Spannungsabfall und warum ist er wichtig?',
    answer: 'Es ist der Spannungsverlust, der auftritt, wenn Strom durch ein Kabel fließt. Wenn das Kabel zu dünn oder zu lang ist, verliert man Spannung. Die Folge: schwaches Licht, Motoren, die nicht starten, oder Kabel, die gefährlich heiß werden.',
  },
  {
    question: 'Welchen Kabelquerschnitt benötige ich für 12V bei 10 Metern?',
    answer: 'Das hängt von der Leistung ab. Für 12V und 10A bei 10m benötigen Sie mindestens 2,5mm². Für 20A benötigen Sie 6mm². Bei niedriger Spannung (12V/24V) ist der Abfall viel kritischer als bei 230V.',
  },
  {
    question: 'Kann ich 1,5mm² Kabel für meine gesamte Installation verwenden?',
    answer: 'Nein. 1,5mm² ist für Beleuchtungskreise (max. 10A). Für Steckdosen benötigen Sie 2,5mm². Für Küche oder Waschmaschine benötigen Sie 4mm² oder 6mm². Zu dünne Kabel sind gefährlich und können Brände verursachen.',
  },
  {
    question: 'Was ist der maximal zulässige Spannungsabfall?',
    answer: 'In Hausinstallationen (230V): max. 3% für Beleuchtung, 5% für andere Zwecke. Bei 12V/24V (Wohnmobile, Solar): nicht mehr als 3% insgesamt. Mehr Abfall bedeutet Effizienzverlust und Überhitzungsgefahr.',
  },
];

const howToData = [
  { name: 'Systemspannung definieren', text: 'Wählen Sie, ob Ihre Installation mit 12V, 24V (Solar/Camper) oder 230V (Haus) betrieben wird.' },
  { name: 'Stromstärke eingeben', text: 'Geben Sie die Ampere (A) oder Watt (W) ein, die das Gerät am Ende des Kabels verbrauchen wird.' },
  { name: 'Kabellänge messen', text: 'Geben Sie die einfache Länge des Kabels in Metern von der Stromquelle zum Verbraucher ein.' },
  { name: 'Leitermaterial wählen', text: 'Wählen Sie Kupfer (Standard) oder Aluminium, um die exakte Berechnung des Widerstands zu erhalten.' },
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    { name: 'DIN VDE 0100: Errichten von Niederspannungsanlagen', url: 'https://www.vde-verlag.de/normen/vde-0100.html' },
    { name: 'Ohmsches Gesetz und Widerstand: Wikipedia', url: 'https://de.wikipedia.org/wiki/Ohmsches_Gesetz' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vollständiger Leitfaden zum Spannungsabfall', level: 2 },
    { type: 'paragraph', html: 'Egal ob Sie einen Camper ausbauen, eine Solaranlage planen oder Kabel für Ihren Garten verlegen, es gibt einen unsichtbaren Feind: den <strong>Spannungsabfall</strong>. Dies ist nicht nur eine technische Frage; es ist der Unterschied zwischen einem Kühlschrank, der kühlt, und einem, der sich ausschaltet, oder zwischen einer sicheren Installation und einer Brandgefahr.' },
    { type: 'title', text: 'Die Formel für den Spannungsabfall', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Exakte Berechnung mit dem Ohmschen Gesetz', html: '<p>Die Formel lautet <strong>ΔV = (2 × L × I × ρ) / S</strong>, wobei L die einfache Länge in Metern, I der Strom in Ampere, ρ der spezifische Widerstand (0,0178 Ω·mm²/m für Kupfer) und S der Kabelquerschnitt in mm² ist.</p>' },
    { type: 'title', text: 'Das Paradoxon der niedrigen Spannung', level: 3 },
    { type: 'card', icon: 'mdi:alert-circle-outline', title: 'Warum 12V dickere Kabel benötigt als 230V', html: '<p>Um die gleiche Leistung (1000W) zu übertragen, benötigen Sie bei 230V nur 4,3A und ein 1,5mm² Kabel. Bei 12V benötigen Sie 83,3A und ein 25mm² Kabel. Je niedriger die Spannung, <strong>desto dicker muss das Kabel sein</strong>.</p>' },
  ],
  ui: {
    heroDropLabel: 'Gesamter Spannungsabfall',
    heroVoltsUnit: 'Volt',
    heroPctLoss: '% Verlust',
    heroEffLabel: 'Effizienz',
    statusExcellent: 'Exzellent',
    statusAcceptable: 'Akzeptabel',
    statusCritical: 'Kritisch',
    fieldVoltage: 'Spannung',
    fieldMaterial: 'Material',
    materialCopper: 'Kupfer',
    materialAlum: 'Alum.',
    fieldLoad: 'Last',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watt',
    unitAmps: 'Ampere',
    fieldLength: 'Kabellänge (einfach)',
    unitMeters: 'Meter',
    fieldSection: 'Kabelquerschnitt',
    sectionInfo: 'Empfohlen',
  },
};
