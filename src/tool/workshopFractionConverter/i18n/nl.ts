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
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'Handleiding', type: 'howto', schema: howToSchema },
    { title: 'Applicatie', type: 'app', schema: appSchema },
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
