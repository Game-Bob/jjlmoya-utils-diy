import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'trockenbau-rechner';
const title = 'Trockenbau Rechner: Gipsplatten, Ständer und Profile';
const description = 'Professioneller Trockenbau-Materialrechner für Trennwände und Vorsatzschalen. Berechnen Sie exakt Gipsplatten, CW-Ständer, UW-Profile, Schrauben, Fugenband und Spachtelmasse.';

const faqData = [
  {
    question: 'Wie berechne ich die Anzahl der benötigten Gipsplatten?',
    answer: 'Berechnen Sie die Wandfläche durch Multiplikation von Wandlänge und Deckenhöhe. Bei beidseitiger Beplankung multiplizieren Sie die Fläche mit 2, bei doppelter beidseitiger Beplankung mit 4. Teilen Sie die Gesamtbeplankungsfläche durch die Nutzfläche einer Platte (2,4 m² bei 120x200 cm) und schlagen Sie 10% Verschnitt hinzu.',
  },
  {
    question: 'Wann wähle ich 40 cm oder 60 cm Ständerabstand?',
    answer: 'Der Standard-Achsabstand von 60 cm eignet sich für gewöhnliche Trennwände bis 3,0 m Höhe. Ein 40 cm Achsabstand ist zwingend erforderlich bei Fliesenbelag, Feuchträumen (Bad, Küche), hoher mechanischer Beanspruchung oder Wandhöhen über 3,0 Meter.',
  },
  {
    question: 'Welche Gipsplatte eignet sich für welchen Raum?',
    answer: 'Standard Weiß (Typ A) für Wohn- und Schlafräume; Imprägniert Grün (Typ H1) für Bad und Küche; Feuerschutz Rosa (Typ F) für Kamine und Heizräume; Schallschutz Blau (Typ A) mit hoher Rohdichte für effektive Schalldämmung.',
  },
  {
    question: 'Wie viele Schrauben werden pro Gipsplatte benötigt?',
    answer: 'Rechnen Sie mit ca. 30 Schnellbauschrauben (3,5x25 mm) pro 120x200 cm Platte bei einlagiger Beplankung. Schraubenabstand 25 cm an den Rändern und 30 cm auf den mittleren Ständern.',
  },
  {
    question: 'Warum ist ein Dichtungsband unter den Boden- und Deckenprofilen nötig?',
    answer: 'Das selbstklebende PE-Dichtungsband entkoppelt das Metallprofil von Boden und Decke. Es verhindert Trittschallübertragung und sorgt für luftdichte Anschlüsse.',
  },
];

const howToData = [
  { name: 'Wandmaße eingeben', text: 'Geben Sie Gesamtlänge und Höhe der Trennwand in Metern ein.' },
  { name: 'Ständerabstand & Beplankung wählen', text: 'Wählen Sie 40 cm oder 60 cm Abstand, einfache oder doppelte Beplankung sowie einseitig oder beidseitig.' },
  { name: 'Materialliste & CAD-Skizze prüfen', text: 'Überprüfen Sie Stückzahlen für Profile, Schrauben, Fugenband, Spachtelmasse und die visuelle Ansicht.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Technische Bemessung von Trockenbauwänden und Metallprofilen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Erstellung leichter Trennwände aus Gipsplatten erfordert eine exakte Berechnung der verzinkten Stahlprofile (CW-Ständer und UW-Riegelschienen) sowie des Plattenlayouts. Nach DIN EN 520 verhindert eine präzise Profilauslegung Wanddurchbiegung und Rissbildung an den Fugen.',
    },
    {
      type: 'title',
      text: 'Profilabstand: Regeln für 40 cm und 60 cm Achsmaß',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Ständerabstand bestimmt die statische Belastbarkeit der Wand. Der Standard-Achsabstand von <strong>60 cm</strong> passt ideal zu 120 cm breiten Gipsplatten. Ein <strong>40 cm Achsabstand</strong> ist erforderlich bei Keramikfliesenbelag, Wandhöhen über 3,00 Meter sowie erhöhten Schallschutzanforderungen.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Plattenversatz und Verschraubungsmuster',
      html: '<p>Vermeiden Sie Kreuzfugen unbedingt. Versetzen Sie die Plattenstöße um mindestens 40 cm. Verschrauben Sie die Platten mit Schnellbauschrauben 3,5x25 mm im Abstand von <strong>25 cm an den Rändern</strong> und <strong>30 cm auf Zwischenprofilen</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Verschnittreserve und Fugenverspachtelung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Planen Sie stets <strong>10% Verschnittreserve</strong> für Profile und Platten ein. Für die Fugenverspachtelung werden ca. 0,8 kg Spachtelmasse pro Quadratmeter Plattenfläche zusammen mit Fugendeckstreifen benötigt.',
    },
  ],
  ui: {
    unitSystemLabel: 'Maßsystem',
    unitMetric: 'Metrisch (m, cm, kg)',
    unitImperial: 'Imperial (ft, in, lb)',

    paramLengthLabel: 'Wandlänge',
    paramHeightLabel: 'Wandhöhe',
    paramSpacingLabel: 'Ständerabstand',
    paramSpacing40Metric: '40 cm (Hohe Last)',
    paramSpacing60Metric: '60 cm (Standard)',
    paramSpacing40Imperial: '16 in (Hohe Last)',
    paramSpacing60Imperial: '24 in (Standard)',
    paramLayersLabel: 'Beplankung',
    paramSingleLayer: 'Einfach beplankt',
    paramDoubleLayer: 'Doppelt beplankt',
    paramSidesLabel: 'Wandseiten',
    paramDoubleSided: 'Beidseitig (Trennwand)',
    paramSingleSided: 'Einseitig (Vorsatzschale)',
    paramBoardTypeLabel: 'Gipsplattentyp',
    boardTypeStandard: 'Standard (Typ A)',
    boardTypeMoisture: 'Imprägniert (Typ H1)',
    boardTypeFire: 'Feuerschutz (Typ F)',
    boardTypeAcoustic: 'Schallschutz (Typ A)',
    paramWasteLabel: 'Verschnittzuschlag',

    summaryWallArea: 'Nettowandfläche',
    summaryBoardArea: 'Gesamtplattenfläche',

    resBoardsLabel: 'Gipsplatten',
    resBoardsUnit: 'Stück',
    resStudsLabel: 'CW-Ständerprofile',
    resStudsUnit: 'Stück',
    resTracksLabel: 'UW-Wandprofile',
    resTracksUnit: 'Stangen',
    resDrywallScrewsLabel: 'Schnellbauschrauben',
    resDrywallScrewsUnit: 'Stück',
    resFramingScrewsLabel: 'Profilschrauben',
    resFramingScrewsUnit: 'Stück',
    resJointTapeLabel: 'Fugenband',
    resJointTapeUnit: 'Länge',
    resJointCompoundLabel: 'Spachtelmasse',
    resJointCompoundUnit: 'Gewicht',
    resAcousticBandLabel: 'Trennwandband',
    resAcousticBandUnit: 'Länge',

    diagramWallTitle: 'CAD-Wandansicht',
    diagramStudLegend: 'CW-Ständer',
    diagramTrackLegend: 'UW-Profile',
    diagramBoardLegend: 'Plattenversatz',
    diagramModeStructure: 'Ständerwerk',
    diagramModeBoard: 'Beplankung',
  },
};
