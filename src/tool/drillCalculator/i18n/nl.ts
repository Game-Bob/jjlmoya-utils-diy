import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'toerental-rekenmachine-boren-frezen';
const title = 'RPM Toerental Calculator voor Boren en Frezen';
const description = 'Bereken de ideale omwentelingen per minuut (RPM) voor je boor- of freesmachine op basis van materiaal en boordiameter. Voorkom dat je gereedschap verbrandt.';

const faqData = [
  {
    question: 'Waarom verbranden boren tijdens het boren?',
    answer: 'Hoofdzakelijk door een te hoog toerental (RPM). Wanneer de boor sneller draait dan het materiaal de hitte kan afvoeren, verhoogt de wrijving de temperatuur tot boven de hardingsgrens van het staal, waardoor de snijkant zacht wordt en stopt met snijden.',
  },
  {
    question: 'Wat is de snijsnelheid (Vc)?',
    answer: 'Het is de lineaire snelheid in meters per minuut waarmee de snijkant van het gereedschap over het oppervlak van het materiaal beweegt. Elk materiaal heeft een aanbevolen Vc die onafhankelijk is van de boordiameter.',
  },
  {
    question: 'Wanneer moet ik Hardmetaal gereedschap (Widia) gebruiken?',
    answer: 'Je moet hardmetaal gebruiken wanneer je op veel hogere snelheden moet werken, bij industriële producties of wanneer het te boren materiaal extreem hard is. Voor gewone doe-het-zelf klussen is HSS voldoende en beter bestand tegen breuk door buiging.',
  },
  {
    question: 'Is smeermiddel altijd nodig?',
    answer: 'Bij metalen is het bijna altijd aan te raden. Bij aluminium voorkomt het dat het materiaal aan de boor gaat plakken, en bij staalsoorten vermindert het de hitte. Bij hout en kunststoffen is het beter om droog te werken met frequente lossingen van de boor.',
  },
  {
    question: 'Hoe bereken ik de aanzet als ik geen CNC-freesmachine heb?',
    answer: 'Bij een handmatige boor voel je de aanzet door de druk. Je moet zien dat er een constante en schone spaan uitkomt. Als er stof uitkomt, druk je te weinig of is het toerental te hoog. Als de spaan erg dik is en de boor moeite heeft, druk je te hard.',
  },
];

const howToData = [
  { name: 'Selecteer het materiaal', text: 'Geef aan welk materiaal je gaat boren of frezen (staal, aluminium, hout, etc.). Elk materiaal heeft een verschillende hardheid und thermische capaciteit.' },
  { name: 'Voer de diameter in', text: 'Voer de exacte diameter van je boor of frees in millimeters in. Onthoud dat hoe groter de diameter, hoe lager het toerental moet zijn.' },
  { name: 'Kies het type gereedschap', text: 'Bepaal of je boor van snelstaal (HSS) is of van hardmetaal (Carbide/Widia). Hardmetalen boren kunnen veel hogere snelheden aan.' },
  { name: 'Stel het toerental in op je machine', text: 'Stel je boor- of freesmachine in op de berekende waarde. Als je machine vaste standen heeft, gebruik dan onze hulpstool voor het dichtstbijzijnde toerental om de veiligste poeliepositie te kiezen.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    { name: 'Sandvik Coromant: Cutting Speed and Feed Rate Formulae', url: 'https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: 'Machines. Werkplaatsberekeningen — A.L. Casillas', url: 'https://www.google.com/search?q=Casillas+Maquinas+Calculos+de+taller' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Het belang van Omwentelingen per Minuut bij verspaning', level: 2 },
    { type: 'paragraph', html: 'De juiste berekening van het toerental is het verschil tussen een perfect resultaat en een kostbare mislukking. Het gaat er niet om een boor zo snel mogelijk te laten draaien, maar om het respecteren van de natuurwetten van wrijving en materiaalweerstand. Onze calculator is ontworpen om de prestaties van je gereedschap en de kwaliteit van je afwerking te optimaliseren.' },
    { type: 'title', text: 'Begrijp de Snijsnelheid', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formule voor RPM Berekening', html: '<p>De snijsnelheid is een waarde in meters per minuut die de ideale snelheid aangeeft waarmee de snijkant door het materiaal moet gaan. De formule die we gebruiken is: <code>RPM = (Vc × 1000) / (π × D)</code> waarbij D de diameter in millimeters is. Deze berekening is onafhankelijk van de diameter van het materiaal dat we snijden.' },
    { type: 'title', text: 'HSS vs Hardmetaal', level: 3 },
    { type: 'paragraph', html: '<strong>Snelstaal (HSS)</strong> gereedschappen zijn voordelig en slagvast, maar hebben een beperkte thermische weerstand. <strong>Hardmetaal (Carbide/Widia)</strong> staat 3 tot 5 keer hogere snijsnelheden toe, maar is brosser. De calculator past automatisch de parameters aan op basis van het type gereedschap.' },
    { type: 'title', text: '3 Veelgemaakte Fouten bij het Boren', level: 3 },
    { type: 'paragraph', html: '<strong>Te hoog toerental:</strong> Veroorzaakt oververhitting en verlies van hardheid van het staal. <strong>Te laag toerental:</strong> De boor trilt en kan breken door vermoeidheid. <strong>Zonder koeling:</strong> Hitte verkort de levensduur van het gereedschap aanzienlijk.' },
  ],
  ui: {
    labelMaterial: 'Materiaal van het werkstuk',
    matSteel: 'Zacht Staal',
    matInox: 'Roestvrij Staal',
    matAlu: 'Aluminium',
    matBrass: 'Messing',
    matCastIron: 'Gietijzer',
    matWood: 'Houtsoorten',
    matPlastic: 'Kunststoffen',
    coolSteel: 'Koelvloeistof of Olie',
    coolInox: 'Snijolie EP',
    coolAlu: 'Alcohol / Paraffine',
    coolBrass: 'Droog / Lucht',
    coolCastIron: 'Droog',
    coolWood: 'Alleen Afzuiging',
    coolPlastic: 'Luchtstraal',
    labelTool: 'Type Gereedschap',
    typeHss: 'Snelstaal (HSS)',
    typeWidia: 'Hardmetaal (Widia)',
    labelDiameter: 'Diameter',
    unitMm: 'mm',
    unitInch: 'inch',
    modeColumnDrill: 'Kolomboormachine Modus',
    labelAdvanced: 'Aanzet Parameters',
    labelLips: 'Aantal Snijkanten (z)',
    labelFz: 'Aanzet per tand (Fz)',
    labelMachine: 'Toerentallen van je Machine',
    presetStandard: 'Standaard',
    presetCnc: 'CNC',
    addRpmManual: 'RPM handmatig toevoegen...',
    addButton: '+',
    resultRpm: 'Optimaal Toerental',
    resultCooling: 'Koeling',
    resultFeed: 'Resulterende Aanzet',
    resultClosest: 'Aanbevolen instelling',
    rpmUnit: 'Omwentelingen / Minuut',
    recommendedLabel: 'Aanbevolen instelling',
    recommendedHint: 'Stel de keuzeschakelaar van je machine in op deze positie',
    statusLimitActive: 'Machinelimiet actief',
    statusOutOfRange: 'Bereik buiten commerciële standaard',
  },
};
