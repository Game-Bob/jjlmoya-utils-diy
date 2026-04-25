import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'werkplaats-breuk-naar-millimeter-omzetter';
const title = 'Werkplaats Omzetter: Breuken naar Millimeters';
const description = 'Zet inch-breuken direct om in millimeters. Vind de dichtstbijzijnde standaard bouten, moeren en doppen voor je werkplaats. Ontworpen voor vuile handen en werkhandschoenen.';

const faqData = [
  {
    question: 'Waarom moet ik breuken omzetten naar millimeters?',
    answer: 'De meeste moderne gereedschappen en bevestigingsmiddelen gebruiken het metrische systeem, maar veel vintage gereedschap en specificaties gebruiken nog inch-breuken. Deze omzetter overbrugt die kloof en helpt je het exacte metrische equivalent of de dichtstbijzijnde standaardmaat te vinden.',
  },
  {
    question: 'Wat is het verschil tussen 1/2 inch en 12,7 mm?',
    answer: '1/2 inch is exact gelijk aan 12,7 millimeter (0,5 × 25,4 = 12,7). Metrisch en imperiaal gereedschap is vaak uitwisselbaar bij standaardmaten omdat fabrikanten gangbare maten in beide systemen op elkaar afstemmen.',
  },
  {
    question: 'Waarom toont de tool de "dichtstbijzijnde match"?',
    answer: 'Omdat exacte conversies vaak tussen de standaardmaten in vallen. De tool vindt de commercieel verkrijgbare bout of dop die het dichtst bij je meting ligt, zodat je kunt gebruiken wat er in je werkplaats ligt.',
  },
  {
    question: 'Wat is het verschil tussen houtbewerkings- en metaalprecisie?',
    answer: 'Bij houtbewerking zijn verschillen van 0,5 mm vaak verwaarloosbaar. Bij metaalbewerking en verspaning telt elke 0,1 mm. De precisiemodus geeft acceptabele toleranties aan voor jouw materiaal.',
  },
  {
    question: 'Kan ik deze tool offline gebruiken?',
    answer: 'Ja. Alle berekeningen gebeuren in je browser. De tool werkt volledig offline na de eerste keer laden, ideaal voor gebruik in de werkplaats zonder WiFi.',
  },
  {
    question: 'Waarom heeft de tool een geschiedenis?',
    answer: 'Bij demontage of projecten met veel onderdelen kun je in de geschiedenis metingen terugzoeken zonder ze opnieuw in te voeren, en zo tijdens het werk een onderdelenlijst opbouwen.',
  },
];

const howToData = [
  {
    name: 'Kies het type meting',
    text: 'Kies "Direct" om een breuk naar millimeters om te zetten, of "Omgekeerd" om de breuk te vinden voor een maat die je met een schuifmaat hebt genomen.',
  },
  {
    name: 'Voer de maat in',
    text: 'Gebruik de drie kolommen (geheel, teller, noemer) of tik op een snelkeuzeknop. Met de instelknoppen kun je waarden aanpassen zonder te typen.',
  },
  {
    name: 'Bekijk de resultaten',
    text: 'Het resultaat toont de exacte omzetting plus de dichtstbijzijnde standaard bout- en dopmaten. De visuele schaal geeft een goed gevoel voor verhoudingen.',
  },
  {
    name: 'Opslaan in geschiedenis',
    text: 'Klik op "Opslaan in geschiedenis" om metingen te bewaren. De geschiedenis blijft in je browser bewaard, ook na het afsluiten.',
  },
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Waarom Precisie bij het Omzetten van Breuken Cruciaal is in de Werkplaats', level: 2 },
    { type: 'paragraph', html: 'In een professionele werkplaats of bij geavanceerd doe-het-zelf-werk leidt een "ongeveer" vaak tot kapotte bouten, wankele verbindingen of mislukte constructies. Deze tool overbrugt de kloof tussen traditionele inch-maten en de precisie van het metrische systeem, zodat je projecten aan professionele standaarden blijven voldoen.' },
    { type: 'title', text: 'De Standaardomzetting: 1/2" versus 12,7 mm', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: 'Zijn metrische en imperiale systemen uitwisselbaar?', html: '<p>Velen gaan daarvan uit. Hoewel 1/2" exact 12,7 mm is, is de dichtstbijzijnde metrische dop 13 mm. Het gebruik van het verkeerde gereedschap kan boutkoppen ronddraaien. Onze omzetter identificeert de <strong>dichtstbijzijnde standaard gereedschapsmatch</strong> zodat je nooit je hardware beschadigt.</p>' },
    { type: 'title', text: 'Tolerantie in Houtbewerking versus Metaalbewerking', level: 3 },
    { type: 'paragraph', html: 'Tolerantie-eisen variëren enorm per vakgebied. Bij <strong>houtbewerking</strong> is een tolerantie van 1/64" (0,4 mm) meestal acceptabel. Bij <strong>metaalbewerking en verspaning</strong> telt elke 0,1 mm of zelfs 0,01 mm. Onze tool bevat een precisiemodus om je te helpen beslissen welke standaardmaat de veiligste gok is voor jouw specifieke materiaal.' },
    { type: 'title', text: '3 Essentiële Tips voor Nauwkeurige Metingen', level: 3 },
    { type: 'paragraph', html: '<strong>1. Gebruik Schuifmaten:</strong> Gebruik voor omgekeerd zoeken altijd een digitale schuifmaat voor de meest nauwkeurige millimeter-invoer. <strong>2. Controleer op Slijtage:</strong> Oude doppen en bouten kunnen versleten randen hebben, waardoor de "dichtstbijzijnde match" nog belangrijker wordt. <strong>3. Controleer de Spoed:</strong> Onthoud dat zelfs als de kopmaat overeenkomt, de schroefdraadspoed (metrisch vs. imperiaal) altijd anders zal zijn.' },
  ],
  ui: {
    labelFraction: 'Type meting',
    labelWhole: 'Heel getal',
    labelNumerator: 'Teller',
    labelDenominator: 'Noemer',
    labelInches: 'Inches',
    labelMillimeters: 'Millimeters',
    resultTitle: 'Omzettingsresultaat',
    resultFraction: 'Breuk',
    resultInches: 'Inches',
    resultMillimeters: 'Millimeters',
    matchTitle: 'Dichtstbijzijnde Match',
    matchClosestFastener: 'Standaard bout- of moermaat',
    matchClosestSocket: 'Standaard dop- of sleutelmaat',
    matchDifference: 'Verschil met je meting',
    matchRecommendation: 'Gebruik deze maat indien beschikbaar',
    reverseSearchTitle: 'Omgekeerd zoeken',
    reverseSearchLabel: 'Gemeten maat (mm)',
    reverseSearchButton: 'Breuk zoeken',
    reverseSearchHint: 'Meet met een schuifmaat en voer de waarde in',
    unitMm: 'mm',
    unitInch: 'in',
    modeForward: 'Breuk → Metrisch',
    modeReverse: 'Metrisch → Breuk',
    precisionLabel: 'Precisiemodus',
    precisionCarpentry: 'Houtbewerking',
    precisionMetal: 'Metaalbewerking',
    buttonConvert: 'Omzetten',
    buttonClear: 'Wissen',
    buttonCopyResult: 'Resultaat kopiëren',
    buttonSaveToHistory: 'Opslaan',
    historyTitle: 'Geschiedenis',
    historyEmpty: 'Nog geen metingen',
    historyRemove: 'Verwijderen',
    helpText: 'Kies een maat of voer een breuk in om te beginnen.',
    toolOverline: 'Werkplaats Tools',
    labelVisualReference: 'Visuele Referentie (1 inch = 96px)',
  },
};
