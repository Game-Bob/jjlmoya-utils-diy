import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stelling-van-pythagoras-rechte-hoek-calculator-3-4-5-regel';
const title = 'Pythagoras Rechte Hoek Calculator: 3-4-5-regel voor perfecte hoeken';
const description = 'Controleer of structuren perfect haaks (90°) zijn met de stelling van Pythagoras en de 3-4-5-regel. Essentieel gereedschap voor de bouw, houtbewerking en doe-het-zelfprojecten.';

const faqData = [
  {
    question: 'Wat is de 3-4-5-regel?',
    answer: 'De 3-4-5-regel is een eenvoudig pythagoreïsch drietal. Als een rechthoekige driehoek zijden heeft van 3, 4 en 5 eenheden op elke schaal, is de hoek tussen de kortere zijden precies 90 graden. Deze beproefde methode wordt al eeuwenlang in de bouw gebruikt.',
  },
  {
    question: 'Hoe gebruik ik deze calculator?',
    answer: 'Voer de lengtes in van de twee muren (zijden A and B) die de hoek vormen. De calculator laat zien wat de diagonaal moet zijn voor een perfecte hoek van 90 graden. Meet vervolgens je werkelijke diagonaal en voer deze in om te controleren of je hoek echt haaks is.',
  },
  {
    question: 'Wat als mijn diagonaal anders is?',
    answer: 'Als je gemeten diagonaal afwijkt van de ideale, toont de calculator de afwijking. Groen betekent perfect, geel betekent acceptabel, rood betekent niet haaks. Het geeft ook aan of je de hoek moet openen of sluiten.',
  },
  {
    question: 'Is dit nauwkeurig genoeg voor de bouw?',
    answer: 'Ja. De stelling van Pythagoras is mathematisch exact. Met een rolmaat kun je bouwkwaliteit-nauwkeurigheid bereiken zonder gespecialiseerd gereedschap of geavanceerde vaardigheden.',
  },
  {
    question: 'Kan ik schakelen tussen inches en feet?',
    answer: 'Ja. Kies inches voor kleine projecten of feet voor grotere structuren. Alle waarden worden direct omgezet zonder gegevensverlies.',
  },
];

const howToData = [
  { name: 'Selecteer je eenheid', text: 'Kies inches voor gedetailleerd werk of feet for grotere structuren. Je kunt op elk moment wisselen.' },
  { name: 'Meet beide zijden', text: 'Meet de lengte van de twee muren (zijden A en B) die de hoek vormen die je wilt controleren.' },
  { name: 'Controleer de ideale diagonaal', text: 'De calculator laat je zien wat de diagonaal moet zijn voor een perfecte hoek van 90 graden.' },
  { name: 'Meet je diagonaal', text: 'Gebruik een rolmaat om je werkelijke diagonaal te meten. Voer deze in het optionele veld in.' },
  { name: 'Lees de status', text: 'Groen = perfect haaks. Geel = acceptabel. Rood = niet haaks. Pas aan zoals gesuggereerd.' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'De stelling van Pythagoras in de praktijk', level: 2 },
    { type: 'paragraph', html: 'Een perfecte hoek van 90 graden is de basis voor kwaliteitsbouw. Muren moeten loodrecht staan, funderingen moeten haaks zijn en frames moeten recht zijn. De stelling van Pythagoras biedt een mathematisch gegarandeerde methode: a² + b² = c².' },
    { type: 'title', text: 'Waarom de 3-4-5-regel werkt', level: 3 },
    { type: 'paragraph', html: 'De 3-4-5-regel is het eenvoudigste pythagoreïsche drietal. Of je nu meet in inches, feet of een andere eenheid: zijden van 3, 4 en 5 eenheden garanderen een hoek van 90 graden. Dit is mathematisch bewezen en al eeuwenlang in de bouw getest.' },
    { type: 'title', text: 'Precisie zonder gespecialiseerd gereedschap', level: 3 },
    { type: 'paragraph', html: 'In tegenstelling tot waterpassen of winkelhaken die kunnen breken of ontregeld kunnen raken, is de stelling van Pythagoras onveranderlijk. Met alleen een rolmaat kun je elke hoek op elke schaal controleren. Deze calculator maakt hoofdrekenen overbodig en zorgt voor nauwkeurigheid.' },
    { type: 'title', text: 'Van theorie naar praktische handleiding', level: 3 },
    { type: 'paragraph', html: 'Deze calculator vertaalt abstracte wiskunde naar praktische instructies voor op de bouwplaats. Als je diagonaal niet klopt, vertelt het je precies hoeveel en in welke richting je moet aanpassen. Zet theorie om in echte resultaten op de bouw.' },
  ],
  ui: {
    titleMain: 'Haaksheid Calculator (Pythagoras)',
    labelInputData: 'Metingen',
    labelUnitSelection: 'Eenheid',
    btnUnitInches: 'inches',
    btnUnitFeet: 'feet',
    labelSideA: 'Zijde A',
    labelSideB: 'Zijde B',
    labelMeasuredDiagonal: 'Gemeten diagonaal (optioneel)',
    labelResults: 'Resultaten',
    labelIdealDiagonal: 'Ideale diagonaal',
    labelDeviation: 'Afwijking',
    labelStatus: 'Status',
    labelVerification: 'Haaksheid controle',
    btnClear: 'Wissen',
    btnCopyResults: 'Resultaten kopiëren',
    labelPresets: 'Snelkeuzes',
    unitInches: 'in',
    unitFeet: 'ft',
    tooltipOptional: 'Voer je gemeten diagonaal in om de 90 graden hoek te controleren',
    tooltipPresets: '3-4-5-regel op verschillende schalen',
    statusPerfect: 'Perfecte 90 graden hoek',
    statusAcceptable: 'Acceptabele afwijking',
    statusWarning: 'Kleine afwijking',
    statusError: 'Niet haaks',
    statusReady: 'Gereed',
    msgIdealCalculated: 'Ideale diagonaal berekend',
    actionOpen: 'Openen',
    actionClose: 'Sluiten',
    descLarger: 'groter',
    descSmaller: 'kleiner',
    descCorrection: 'Correctie nodig',
  },
};
