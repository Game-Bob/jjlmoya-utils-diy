import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'thermische-expansie-calculator';
const title = 'Thermische Expansie Calculator voor Balken en Structuren';
const description = 'Bereken hoeveel een balk of structuur uitzet door temperatuurveranderingen. Technisch hulpmiddel voor ingenieurs en DIY. Inclusief uitzettingscoëfficiënten per materiaal.';

const faqData = [
  {
    question: 'Wat is de lineaire uitzettingscoëfficiënt?',
    answer: 'Het is een fysieke eigenschap van materialen die aangeeft hoeveel het materiaal uitzet per graad Celsius temperatuurstijging. Het wordt gemeten in 1/°C of °C⁻¹.',
  },
  {
    question: 'Waarom is het berekenen van uitzetting bij balken belangrijk?',
    answer: 'Als een balk geen ruimte heeft om uit te zetten (dilatatievoegen), ontstaan er enorme interne spanningen die de structuur kunnen vervormen, beton kunnen laten barsten of zelfs tot instorting kunnen leiden.',
  },
  {
    question: 'Zet hout in alle richtingen evenveel uit?',
    answer: 'Nee. Hout is een anisotroop materiaal. Het zet heel weinig uit in de lengte van de vezels, maar aanzienlijk in de dwarsrichting (breedte en dikte).',
  },
  {
    question: 'Welke temperatuur moet ik als Begintemperatuur gebruiken?',
    answer: 'Je moet de temperatuur gebruiken op het moment van installatie of constructie. De Eindtemperatuur moet de maximaal verwachte temperatuur tijdens de levensduur zijn.',
  },
];

const howToData = [
  { name: 'Meet de oorspronkelijke lengte', text: 'Voer de lengte van de balk of het materiaal in meters in.' },
  { name: 'Selecteer het materiaal', text: 'Kies uit metalen, bouwmaterialen of houtsoorten om de specifieke coëfficiënt toe te passen.' },
  { name: 'Definieer het thermisch bereik', text: 'Geef de begintemperatuur en de verwachte maximale temperatuur op om het temperatuurverschil te berekenen.' },
  { name: 'Analyseer de groei', text: 'Bekijk de totale rek in millimeters en de resulterende eindlengte om voor geschikte voegen te zorgen.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Wat is Thermische Expansie en waarom beïnvloedt het Structuren', level: 2 },
    { type: 'paragraph', html: '<strong>Thermische expansie</strong> is het fysieke proces waarbij een materiaal langer wordt als reactie op een temperatuurstijging. In de bouw is dit fenomeen geen curiositeit: het is een kracht die beton kan breken, stalen balken kan vervormen en treinrails kan doen verbuigen.' },
    { type: 'title', text: 'De Formule voor Lineaire Uitzetting', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formule voor Lineaire Uitzetting', html: '<p>De uitzetting van een structureel element wordt berekend met: <code>ΔL = L₀ · α · ΔT</code>. Waar <strong>ΔL</strong> de totale groei is, <strong>L₀</strong> de oorspronkelijke lengte, <strong>α</strong> de uitzettingscoëfficiënt van het materiaal (in °C⁻¹) en <strong>ΔT</strong> het temperatuurverschil.</p>' },
  ],
  ui: {
    configTitle: 'Configuratie',
    labelMaterial: 'Materiaal',
    groupMetals: 'Metalen',
    groupConstruction: 'Bouw',
    groupWood: 'Hout en Polymeren',
    matSteel: 'Staal (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Koper (17 ppm/°C)',
    matIron: 'IJzer (11 ppm/°C)',
    matConcrete: 'Beton (12 ppm/°C)',
    matBrick: 'Baksteen (9 ppm/°C)',
    matGlass: 'Glas (9 ppm/°C)',
    matWoodFiber: 'Houtvezel (5 ppm/°C)',
    matWoodTransversal: 'Hout Dwars (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metallurgie',
    catConstruction: 'Bouw',
    catWood: 'Hout en Polymeren',
    labelLength: 'Beginlengte (m)',
    labelTempStart: 'Begintemp. (°C)',
    labelTempEnd: 'Max. Temp. (°C)',
    deltaLabel: 'Temperatuurverschil (ΔT)',
    vizTitle: 'Simulatie van Expansie',
    resultGrowthLabel: 'Totale Groei (ΔL)',
    resultFinalLabel: 'Eindlengte',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Risico op Knik',
    jointTitle: 'Minimale Voeg',
    riskLow: 'Laag',
    riskModerate: 'Gemiddeld',
    riskCritical: 'Kritiek',
    tipDefault: 'Raadpleeg de handleiding van de fabrikant voor exacte coëfficiënten van speciale legeringen.',
    tipSteel: 'Staal en beton hebben bijna identieke coëfficiënten, waardoor gewapend beton kan functioneren zonder interne barsten.',
    tipAluminum: 'Aluminium zet bijna twee keer zoveel uit als staal. Bij metalen kozijnen dwingt dit tot het gebruik van elastische kitten.',
    tipGlass: 'Glas en staal zetten bijna hetzelfde uit, wat essentieel is voor het ontwerp van grote glasgevels.',
    tipConcrete: 'De coëfficiënt van beton is zeer vergelijkbaar met die van staal, de reden waarom gemengde structuren zo stabiel zijn.',
    tipWood: 'Hout zet weinig uit door warmte, maar veel door vocht. In lange structuren is de vezelrichting zeer stabiel.',
    tipPvc: 'PVC heeft een zeer hoge uitzettingsgraad. Het vereist speciale voegen om beweging op te vangen zonder te breken.',
  },
};
