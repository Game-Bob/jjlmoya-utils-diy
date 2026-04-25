import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'trapp-kalkylator';
const title = 'Trappkalkylator: Planering och Utförande';
const description = 'Beräkna exakta mått för din trappa: steghöjd, stegdjup, vinkel och materialåtgång. Följ Blondels lag för maximal komfort.';

const faqData = [
  {
    question: 'Vad är Blondels lag (stegmåttsregeln)?',
    answer: 'Det är en formel som säger att för att en trappa ska vara bekväm bör summan av två steghöjder och ett stegdjup ligga mellan 62 och 64 cm (2h + s = 63 cm). Denna regel är baserad på en genomsnittlig mänsklig steglängd.',
  },
  {
    question: 'Vad är den maximala höjden för ett trappsteg?',
    answer: 'I bostäder rekommenderas att man inte överskrider 18-19 cm. För offentliga lokaler är maxhöjden enligt reglerna oftast 17,5 cm. Högre steghöjder är mer ansträngande och kan vara farliga.',
  },
  {
    question: 'Hur beräknar jag vid begränsat utrymme?',
    answer: 'Om det horisontella utrymmet är begränsat måste du antingen öka antalet steg (minska steghöjden) eller acceptera en brantare lutning. Kalkylatorn hjälper dig att hitta den optimala balansen.',
  },
  {
    question: 'Vad ingår i betongberäkningen?',
    answer: 'Den totala betongvolymen beräknas genom att inkludera trappstegen samt den underliggande snedställda plattan (den yta som bär upp stegen). Om man bortser från denna platta blir beställningen felaktig.',
  },
  {
    question: 'Varför är kumulativ utsättning viktig?',
    answer: 'Att mäta varje steg för sig leder till kumulativa fel. Kumulativ utsättning garanterar att alla steg får exakt samma höjd, vilket minskar olycksrisker och ökar komforten.',
  },
];

const howToData = [
  { name: 'Mät höjdskillnaden', text: 'Mät den totala nivåskillnaden (H) från färdigt golv nere till färdigt golv uppe. Detta är basdata för hela beräkningen.' },
  { name: 'Ange tillgänglig längd', text: 'Valfritt: Om du har utrymmebegränsningar, ange den tillgängliga horisontella längden. Använd 0 för fri beräkning.' },
  { name: 'Justera antalet steg', text: 'Kalkylatorn föreslår ett antal steg, men du kan ändra det. Håll koll på Blondels indikator: den bör vara grön (62-64 cm) för bästa komfort.' },
  { name: 'Definiera byggparametrar', text: 'Ange plattans tjocklek, ytmaterial, betongstyrka och trappbredd. Dessa uppgifter påverkar materialåtgången.' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Geometrisk planering av trappor: Blondels lag', level: 2 },
    { type: 'paragraph', html: 'Komforten i en trappa beror på människans steglängd. Kroppen förväntar sig en förutsägbar rytm. Blondels lag (2 steghöjder + 1 stegdjup = 62-64 cm) är standarden som garanterar maximal komfort och säkerhet.' },
    { type: 'title', text: 'Kontroll av struktur och material', level: 3 },
    { type: 'paragraph', html: 'För ett professionellt utförande är det viktigt att räkna med betongplattan (den sneda ytan som bär upp stegen). Om den volymen glöms bort blir betongbeställningen för liten.' },
    { type: 'title', text: 'Utsättning och kumulativa fel', level: 3 },
    { type: 'paragraph', html: 'I byggbranschen är millimeterfel den största fienden. Om man mäter varje steg separat kan småfel summeras så att sista steget blir 5 cm för högt eller för lågt.' },
  ],
  ui: {
    labelGeometry: 'Geometri och utrymme',
    labelTotalHeight: 'Total höjdskillnad (H)',
    labelAvailableLength: 'Tillgänglig längd (L)',
    labelAvailableLengthHint: 'Använd 0 för fri beräkning.',
    labelNumSteps: 'Antal steg',
    labelOptimize: 'Optimera (18cm)',
    labelWork: 'Bygge och installation',
    labelSlabThickness: 'Platttjocklek (e)',
    labelFinishThickness: 'Ytskikt',
    labelCeilingHeight: 'Takhöjd (frihöjd)',
    labelStairWidth: 'Trappbredd',
    labelConcreteStrength: 'Betongstyrka',
    optionH150: 'C12/15 (Grovbetong)',
    optionH200: 'C16/20 (Bostad)',
    optionH250: 'C20/25 (Konstruktion)',
    labelRiser: 'Steghöjd',
    labelTread: 'Stegdjup',
    labelSlope: 'Lutning',
    labelRealAdvance: 'Verklig längd',
    labelLayoutTable: 'Utsättning och utförande',
    colStep: 'Steg',
    colConcreteHeight: 'H. Betong',
    colFinishedHeight: 'H. Färdig',
    colAdvance: 'Framfart',
    adjustedNote: 'Justerad',
    labelMaterials: 'Materialberäkning',
    labelTotalConcrete: 'Betong totalt:',
    labelCement: 'Cement (säck/25kg):',
    labelSand: 'Sandbehov:',
    unitM3: 'm³',
    unitBags: 'säckar',
    unitLiters: 'L',
    btnShare: 'Dela',
    btnPrint: 'Skriv ut PDF',
    statusOptimalComfort: 'Optimal komfort',
    statusMarginLimit: 'Gränsvärde',
    statusCriticalDesign: 'Kritisk design',
    statusRiserError: 'Stegdjupsfel',
    msgInvalidValues: 'Ogiltiga värden',
    msgInsufficientSpace: 'UTRYMME SAKNAS',
    msgDangerousTread: 'Ett stegdjup på {val}cm är farligt.',
    msgBlondelValue: 'Blondel-värde: {val}cm.',
    msgOptimalStep: 'Bekvämt steg: {val}cm.',
    msgLowCeiling: 'LÅG TAKHÖJD (<2m)',
    msgCalculating: 'Beräknar...',
    msgEnterMeasurements: 'Ange mått',
    shareTitle: 'Byggsammanfattning',
    shareMessage: 'Trappa: H={h}cm, N={n}, h={ch}cm, Vol={vol}m3',
  },
};
