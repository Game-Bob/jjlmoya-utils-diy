import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pythagoras-sats-rat-vinkel-kalkylator-3-4-5-regeln';
const title = 'Pythagoras Rät Vinkel Kalkylator: 3-4-5-regeln för perfekta vinklar';
const description = 'Kontrollera om strukturer är perfekt rätvinkliga (90°) med Pythagoras sats och 3-4-5-regeln. Oumbärligt verktyg för bygg, snickeri och DIY-projekt.';

const faqData = [
  {
    question: 'Vad är 3-4-5-regeln?',
    answer: '3-4-5-regeln är en enkel pythagoreisk trippel. Om en rätvinklig triangel har sidor på 3, 4 och 5 enheter i vilken skala som helst, är vinkeln mellan de kortare sidorna exakt 90 grader. Denna beprövade metod har använts inom byggbranschen i århundraden.',
  },
  {
    question: 'Hur använder jag denna kalkylator?',
    answer: 'Ange längderna på de två väggarna (sidorna A och B) som bildar hörnet. Kalkylatorn visar vad diagonalen ska vara för en perfekt 90-graders vinkel. Mät sedan din faktiska diagonal och ange den för att kontrollera om ditt hörn verkligen är rätvinkligt.',
  },
  {
    question: 'Vad händer om min diagonal är annorlunda?',
    answer: 'Om din uppmätta diagonal skiljer sig från den ideala, visar kalkylatorn avvikelsen. Grönt betyder perfekt, gult betyder acceptabelt, rött betyder inte rätvinkligt. Den anger också om du ska öppna eller stänga vinkeln.',
  },
  {
    question: 'Är detta tillräckligt exakt för byggarbeten?',
    answer: 'Ja. Pythagoras sats är matematiskt exakt. Med ett måttband kan du uppnå byggnadsteknisk precision utan specialverktyg eller avancerade kunskaper.',
  },
  {
    question: 'Kan jag växla mellan tum och fot?',
    answer: 'Ja. Välj tum för små projekt eller fot för större strukturer. Alla värden omvandlas omedelbart utan att data går förlorad.',
  },
];

const howToData = [
  { name: 'Välj enhet', text: 'Välj tum för detaljarbeten eller fot för större strukturer. Du kan byta när som helst.' },
  { name: 'Mät båda sidor', text: 'Mät längden på de två väggarna (sidorna A och B) som bildar hörnet du vill kontrollera.' },
  { name: 'Kontrollera den ideala diagonalen', text: 'Kalkylatorn visar dig vad diagonalen måste vara för en perfekt 90-graders vinkel.' },
  { name: 'Mät din diagonal', text: 'Använd ett måttband för att mäta din faktiska diagonal. Ange den i det valfria fältet.' },
  { name: 'Läs av status', text: 'Grönt = perfekt rätvinkligt. Gult = acceptabelt. Rött = inte rätvinkligt. Justera enligt förslaget.' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pythagoras sats i praktiken', level: 2 },
    { type: 'paragraph', html: 'En perfekt 90-graders vinkel är grundläggande för kvalitetsbyggande. Väggar måste vara vinkelräta, fundament måste vara rätvinkliga och ramar måste vara raka. Pythagoras sats erbjuder en matematiskt garanterad metod: a² + b² = c².' },
    { type: 'title', text: 'Varför 3-4-5-regeln fungerar', level: 3 },
    { type: 'paragraph', html: '3-4-5-regeln är den enklaste pythagoreiska trippeln. Oavsett om du mäter i tum, fot eller någon annan enhet: sidor på 3, 4 och 5 enheter garanterar en 90-graders vinkel. Detta är matematiskt bevisat och har testats inom byggbranschen i århundraden.' },
    { type: 'title', text: 'Precision utan specialverktyg', level: 3 },
    { type: 'paragraph', html: 'Till skillnad från vattenpass eller vinkelhakar som kan gå sönder eller komma ur inställning, är Pythagoras sats oföränderlig. Med bara ett måttband kan du kontrollera vilket hörn som helst i vilken skala som helst. Denna kalkylator gör att du slipper huvudräkning och säkerställer noggrannhet.' },
    { type: 'title', text: 'Från teori till praktisk vägledning', level: 3 },
    { type: 'paragraph', html: 'Denna kalkylator omvandlar abstrakt matematik till praktiska instruktioner på plats. Om din diagonal inte stämmer, talar den om exakt hur mycket och i vilken riktning du ska justera. Förvandla teori till verkliga resultat på bygget.' },
  ],
  ui: {
    titleMain: 'Rätvinklighets-kalkylator (Pythagoras)',
    labelInputData: 'Mätningar',
    labelUnitSelection: 'Enhet',
    btnUnitInches: 'tum',
    btnUnitFeet: 'fot',
    labelSideA: 'Sida A',
    labelSideB: 'Sida B',
    labelMeasuredDiagonal: 'Uppmätt diagonal (valfritt)',
    labelResults: 'Resultat',
    labelIdealDiagonal: 'Ideal diagonal',
    labelDeviation: 'Avvikelse',
    labelStatus: 'Status',
    labelVerification: 'Rätvinklighets-kontroll',
    btnClear: 'Rensa',
    btnCopyResults: 'Kopiera resultat',
    labelPresets: 'Snabbval',
    unitInches: 'tum',
    unitFeet: 'fot',
    tooltipOptional: 'Ange din uppmätta diagonal för att kontrollera 90-graders vinkeln',
    tooltipPresets: '3-4-5-regeln i olika skalor',
    statusPerfect: 'Perfekt 90-graders vinkel',
    statusAcceptable: 'Acceptabel avvikelse',
    statusWarning: 'Mindre avvikelse',
    statusError: 'Inte rätvinkligt',
    statusReady: 'Klar',
    msgIdealCalculated: 'Ideal diagonal beräknad',
    actionOpen: 'Öppna',
    actionClose: 'Stäng',
    descLarger: 'större',
    descSmaller: 'mindre',
    descCorrection: 'Korrigering krävs',
  },
};
