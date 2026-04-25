import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'meubel-ruimte-calculator';
const title = 'Ruimte Calculator voor Verhuizingen en Meubels';
const description = 'Controleer of je bank, kast of tafel in de lift past of door de deur kan. Gebruik de 3D-stelling van Pythagoras om schuine hoeken te berekenen.';

const faqData = [
  {
    question: 'Waarom past een bank soms niet, ook al is hij kleiner dan de deur?',
    answer: 'Vanwege de draaihoek. Als de gang smal is, moet de bank zijwaarts of schuin naar binnen. De beperkende factor is niet alleen de deurbreedte, maar de beschikbare draaicirkel in de ruimte.',
  },
  {
    question: 'Wat is de diagonaal van een meubel en waarom is dat belangrijk?',
    answer: 'Het is de langste afstand tussen twee tegenover elkaar liggende hoeken. Het is essentieel om te weten of een hoog meubel rechtop gezet kan worden in een kamer met een laag plafond nadat het op de grond is gemonteerd.',
  },
  {
    question: 'Hoe meet je een lift correct op?',
    answer: 'Meet niet alleen de vloer. Meet de breedte van de open deur, de vrije diepte en de totale hoogte. De diagonaal van de onderkant van de deur tot de bovenste achterhoek is het belangrijkste gegeven.',
  },
  {
    question: 'Welke onderdelen moeten eerst worden gedemonteerd?',
    answer: 'Bankpoten, kasthandgrepen en koelkastdeuren leveren vaak die kritieke 5 tot 10 cm op die het verschil maken tussen een meubel dat past of buiten blijft staan.',
  },
];

const howToData = [
  { name: 'Meubel opmeten (Lengte, Breedte, Hoogte)', text: 'Neem de maximale maten van het object, inclusief eventuele uitsteeksels zoals armleuningen of handgrepen.' },
  { name: 'Kritieke doorgangen meten', text: 'Meet de vrije ruimte van de deur (van kozijn tot kozijn), de binnenkant van de lift en de breedte van de gangen.' },
  { name: 'Gegevens invoeren in de simulator', text: 'Voer de afmetingen in de tool in om te zien of het volume van het meubel compatibel is met de doorgangsruimte.' },
  { name: 'Schuine hoeken berekenen', text: 'Als het meubel erg hoog is, gebruik dan de berekende diagonaal om te verifiëren of je het op de overloop of in de lift kunt draaien.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'De Wetenschap van Verhuizen en de Stelling van Pythagoras', level: 2 },
    { type: 'paragraph', html: 'Verhuizen is niet alleen een test van fysieke kracht; het is een complex geometrisch puzzelstuk. De schijnbare ruimte van een kamer of een lift bedriegt het menselijk oog, vooral wanneer we de derde dimensie negeren. Wiskunde kan je honderden euro\'s besparen aan retourzendingen en mislukte transporten.' },
    { type: 'title', text: 'De Truc van de 3D-Diagonaal', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Gouden Regel', html: '<p>Meet nooit alleen het meubel. Meet altijd de <strong>kritieke toegangspunten</strong>: de breedte van het deurkozijn, het laagste punt van het plafond op de overloop en de werkelijke diepte van de lift met gesloten deuren. De formule <code>d = √(w² + h² + z²)</code> onthult of het schuin past.</p>' },
    { type: 'title', text: 'Het Bank-in-de-Gang Probleem', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Manoeuvreerruimte', html: '<p>Een veelvoorkomende fout is aan te nemen dat als het meubel 80cm breed is en de opening ook 80cm, het zal passen. Dat is niet zo. De handen van verhuizers, de elasticiteit van de stof en oneffenheden van de muren vereisen een minimale marge van <strong>2 tot 5 cm</strong>. Zonder deze marge wordt het meubel bekrast of raakt het klem.</p>' },
    { type: 'title', text: '3 Fouten die een Verhuizing Verpesten', level: 3 },
    { type: 'paragraph', html: 'Zelfs met de juiste maten veroorzaken deze onzichtbare factoren vaak rampen: <strong>De Plafondlamp</strong> — vaak vergeten tijdens het schuin draaien. <strong>De Draaicirkel van het Meubel</strong> — een stijf meubel buigt niet. <strong>De Verpakking</strong> — bubbeltjesplastic kan aan elke kant 1 tot 3 cm toevoegen.' },
  ],
  ui: {
    conTitle: 'Afmetingen van de Ruimte',
    conHint: 'Bijv: Standaard lift, deurkozijn of bestelbus.',
    objTitle: 'Afmetingen van het Meubel',
    labelWidth: 'Breedte (cm)',
    labelHeight: 'Hoogte (cm)',
    labelDepth: 'Diepte (cm)',
    labelLength: 'Lengte (cm)',
    labelMargin: 'Foutmarge (cm)',
    vizLabel: 'Vereenvoudigde Ruimtelijke Weergave',
    verdictDefault: 'Past het?',
    verdictHint: 'Voer de maten in om de ruimtelijke compatibiliteit te controleren.',
    verdictYes: 'JA, HET PAST!',
    verdictNo: 'PAST NIET',
    fitDirect: 'Het meubel past perfect op directe wijze.',
    fitDiagonal3d: 'Past schuin diagonaal (3D Pythagoras).',
    fitDiagonalPlane: 'Past schuin in een van de zijvlakken.',
    fitNope: 'Het meubel is te groot, zelfs om er diagonaal in te passen.',
    diagLabel: 'Maximale Diagonaal (3D Pythagoras):',
    objLabel: 'Meubel',
  },
};
