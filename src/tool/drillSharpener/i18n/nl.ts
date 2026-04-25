import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'boor-slijpen-master';
const title = 'Boor Slijpen Master: Precisiekaliber';
const description = 'Interactieve gids voor het slijpen van HSS boren. Digitaal kaliber op scherm voor controle van 118° en 135° hoeken. Berekent RPM en diagnosticeert snijfouten.';

const faqData = [
  {
    question: 'Kan ik de boor direct op het scherm leggen?',
    answer: 'Ja, de tool is zo ontworpen dat je de schacht van de boor op de centrale lijn van het digitale kaliber kunt leggen om de symmetrie van de snijkanten direct te controleren.',
  },
  {
    question: 'Hoe weet ik of de vrijloophoek correct is?',
    answer: 'Bij het draaien van de boor moet de achterkant van de snijkant zichtbaar lager liggen. Als je ziet dat het metaal over de hele punt gelijkmatig glanst, ontbreekt de vrijloop (destalonar).',
  },
  {
    question: 'Welk toerental moet ik gebruiken na het slijpen?',
    answer: 'Dat hangt af van de diameter; onze geïntegreerde calculator geeft je de exacte waarde op basis van het materiaal dat je in de eerste stap hebt geselecteerd.',
  },
  {
    question: 'Wat is het verschil tussen HSS en Hardmetaal?',
    answer: 'HSS (Snelstaal) is voordeliger en slagvast. Hardmetaal kan hogere snelheden aan maar is brosser. Voor handmatig slijpen is HSS de standaard.',
  },
  {
    question: 'Heb ik speciale apparatuur nodig om te slijpen?',
    answer: 'Een roterende slijpsteen met een gemiddelde korrel (120-150) is voldoende. Belangrijk is om de steen gebalanceerd en vlak te houden voor consistente resultaten.',
  },
];

const howToData = [
  { name: 'Materiaal Selecteren', text: 'Kies het metaal of materiaal waarin je gaat boren om de doelhoek en snijsnelheid in te stellen.' },
  { name: 'Symmetrie Controleren', text: 'Leg de boor op het scherm en zorg ervoor dat beide snijkanten overeenkomen met de blauwe lijnen.' },
  { name: 'De Hiel Controleren', text: 'Controleer visueel of de achterkant van de snijkant het werkstuk niet raakt (vrijloophoek).' },
  { name: 'RPM Berekenen', text: 'Voer de diameter in en stel je boor in op de aanbevolen snelheid voor het geselecteerde materiaal.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Boor Slijpen Master: Professionele Techniek', level: 2 },
    { type: 'paragraph', html: 'Het slijpen van boren is een van de meest waardevolle vaardigheden in elke werkplaats. Een correct geslepen boor verbetert de kwaliteit van het gat, beschermt de levensduur van je elektrische gereedschappen en garandeert de veiligheid van de gebruiker.' },
    { type: 'title', text: 'De Pijlers van het Slijpen: Punthoek', level: 3 },
    { type: 'paragraph', html: 'De punthoek bepaalt hoe de boor het materiaal aanvalt. Standaardhoeken zijn 118° voor zacht staal, 135° voor rvs en 140° voor hardere staalsoorten. Elk materiaal vereist een andere hoek om de penetratie te maximaliseren zonder de weerstand te benadelen.' },
    { type: 'title', text: 'De Grote Vergetene: Vrijloophoek', level: 3 },
    { type: 'paragraph', html: 'De meest gemaakte fout is het negeren van de vrijloophoek. Als de achterkant van de snijkant vlak is, zal de boor alleen maar wrijven en extreme hitte genereren. De oplossing is om de achterkant van de snijkant iets te verlagen.' },
  ],
  ui: {
    labelMaterial: 'Materiaal van het werk',
    matSteel: 'Staal',
    matInox: 'Inox',
    matHard: 'Hard',
    matBrass: 'Messing',
    matPlastic: 'Kunststof',
    matWood: 'Hout',
    labelDiameter: 'Boordiameter (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Snelheid',
    unitRpm: 'RPM',
    labelCooling: 'Snede',
    btnDiagnosis: 'Snijdt niet goed? Diagnose',
    diagTitle: 'Foutdiagnose',
    diagClose: 'Sluiten',
    diagIssue1: '1. Rookt en gaat er niet doorheen',
    diagIssue1Desc: 'Vrijloophoek ontbreekt. Het metaal achter de snijkant schuurt tegen het werkstuk. Slijp de achterkant weg zodat de snijkant het hoogste punt is.',
    diagIssue2: '2. Gat is excentrisch of groter',
    diagIssue2Desc: 'De punt is niet gecentreerd. De snijkanten hebben verschillende lengtes. Zorg ervoor dat de punt exact het midden van het kaliber raakt.',
    diagIssue3: '3. Snijkanten verbrand (Blauw)',
    diagIssue3Desc: 'Te hoge snelheid. Controleer de RPM-berekening van de tool voor deze diameter en dit materiaal.',
    gaugeInstruction: 'LEG DE SCHACHT OP DE VERTICALE LIJN',
  },
};
