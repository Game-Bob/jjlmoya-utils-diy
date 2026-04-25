import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'varvtalskalkylator-borrning';
const title = 'Varvtalskalkylator för borrning och fräsning';
const description = 'Beräkna det ideala varvtalet per minut (RPM) för din borrmaskin eller fräs baserat på material och borrdiameter. Undvik att bränna dina verktyg.';

const faqData = [
  {
    question: 'Varför bränns borrar vid borrning?',
    answer: 'Huvudsakligen på grund av för högt varvtal (RPM). När borren roterar snabbare än materialet hinner leda bort värmen, höjer friktionen temperaturen över gränsen för stålets härdning, vilket gör att skäret blir mjukt och slutar skära.',
  },
  {
    question: 'Vad är skärhastighet (Vc)?',
    answer: 'Det är den linjära hastigheten i meter per minut med vilken verktygets egg rör sig över materialets yta. Varje material har en rekommenderad Vc som är oberoende av borrens diameter.',
  },
  {
    question: 'När ska jag använda hårdmetallverktyg (Widia)?',
    answer: 'Du bör använda hårdmetall när du behöver arbeta med mycket högre hastigheter, i industriell produktion eller när materialet som ska borras är extremt hårt. För vanlig DIY är HSS tillräckligt och mer motståndskraftigt mot brott vid böjning.',
  },
  {
    question: 'Är kylsmörjmedel alltid nödvändigt?',
    answer: 'Vid metallarbete är det nästan alltid rekommenderat. I aluminium förhindrar det att materialet klibbar fast på borren, och i stål reducerar det värmen. I trä och plast är det bättre att arbeta torrt och dra ut borren ofta för att rensa spån.',
  },
  {
    question: 'Hur beräknar jag matningen om jag inte har en CNC-fräs?',
    answer: 'I en manuell borrmaskin känns matningen genom trycket. Du ska se att det kommer ut jämna och rena spån. Om det bara kommer damm trycker du för lite eller så är varvtalet för högt. Om spånen är mycket tjocka och borrmaskinen går tungt trycker du för hårt.',
  },
];

const howToData = [
  { name: 'Välj material', text: 'Ange vilket material du ska borra eller fräsa i (stål, aluminium, trä etc.). Varje material har olika hårdhet och termisk kapacitet.' },
  { name: 'Ange diameter', text: 'Skriv in den exakta diametern på din borr eller fräs i millimeter. Kom ihåg att ju större diameter, desto lägre bör rotationshastigheten vara.' },
  { name: 'Välj verktygstyp', text: 'Bestäm om din borr är av snabbstål (HSS) eller hårdmetall (Widia). Hårdmetallverktyg tål betydligt högre hastigheter.' },
  { name: 'Ställ in RPM på din maskin', text: 'Ställ in din borrmaskin eller fräs på det beräknade värdet. Om din maskin har fasta steg, använd vårt verktyg för närmaste hastighet för att välja den säkraste rempositionen.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vikten av varvtal per minut vid maskinbearbetning', level: 2 },
    { type: 'paragraph', html: 'Korrekt beräkning av varvtal är skillnaden mellan ett perfekt arbete och en kostsam katastrof. Det handlar inte om att rotera en borr så snabbt som möjligt, utan om att respektera fysiska lagar för friktion och materialmotstånd. Vår kalkylator är utformad för att optimera dina verktygs prestanda och kvaliteten på din ytfinish.' },
    { type: 'title', text: 'Förstå skärhastighet', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formel för varvtalsberäkning', html: '<p>Skärhastighet är ett värde i meter per minut som anger den ideala hastigheten med vilken eggen bör passera materialet. Formeln vi använder är: <code>RPM = (Vc × 1000) / (π × D)</code> där D är diametern i millimeter. Denna beräkning är oberoende av diametern på materialet vi skär i.' },
    { type: 'title', text: 'HSS vs Hårdmetall', level: 3 },
    { type: 'paragraph', html: 'Verktyg av <strong>snabbstål (HSS)</strong> är prisvärda och slagtåliga, men har begränsad värmebeständighet. <strong>Hårdmetall (Widia)</strong> tillåter 3 till 5 gånger högre skärhastigheter, men är sprödare. Kalkylatorn justerar automatiskt parametrar efter verktygstyp.' },
    { type: 'title', text: '3 vanliga misstag vid borrning', level: 3 },
    { type: 'paragraph', html: '<strong>För högt varvtal:</strong> Orsakar överhettning och att stålet tappar sin härdning. <strong>För lågt varvtal:</strong> Borren vibrerar och kan gå av på grund av utmattning. <strong>Utan kylning:</strong> Värmen förkortar verktygets livslängd avsevärt.' },
  ],
  ui: {
    labelMaterial: 'Arbetsstyckets material',
    matSteel: 'Mjukstål',
    matInox: 'Rostfritt',
    matAlu: 'Aluminium',
    matBrass: 'Mässing',
    matCastIron: 'Gjutjärn',
    matWood: 'Träslag',
    matPlastic: 'Plaster',
    coolSteel: 'Skärvätska eller olja',
    coolInox: 'Skärolja EP',
    coolAlu: 'Sprit / Paraffin',
    coolBrass: 'Torrt / Luft',
    coolCastIron: 'Torrt',
    coolWood: 'Endast utsug',
    coolPlastic: 'Luftstråle',
    labelTool: 'Verktygstyp',
    typeHss: 'Stål (HSS)',
    typeWidia: 'Hårdmetall (Widia)',
    labelDiameter: 'Diameter',
    unitMm: 'mm',
    unitInch: 'tum',
    modeColumnDrill: 'Pelarborrmaskin-läge',
    labelAdvanced: 'Matningsparametrar',
    labelLips: 'Antal skär (z)',
    labelFz: 'Matning/tand (Fz)',
    labelMachine: 'Din maskins varvtal',
    presetStandard: 'Standard',
    presetCnc: 'CNC',
    addRpmManual: 'Lägg till RPM manuellt...',
    addButton: '+',
    resultRpm: 'Optimal hastighet',
    resultCooling: 'Kylning',
    resultFeed: 'Resulterande matning',
    resultClosest: 'Rekommenderad inställning',
    rpmUnit: 'Varv / Minut',
    recommendedLabel: 'Rekommenderad inställning',
    recommendedHint: 'Ställ in din maskins växelväljare i detta läge',
    statusLimitActive: 'Maskinbegränsning aktiv',
    statusOutOfRange: 'Utanför kommersiell standard',
  },
};
