import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'workshop-fraction-converter';
const title = 'Workshop Fraction to Metric Converter';
const description = 'Convert fractional inch measurements to millimeters instantly. Find the closest standard fasteners, bolts, and sockets for your workshop. Designed for dirty hands and gloved fingers.';

const faqData = [
  {
    question: 'Why do I need to convert fractions to millimeters?',
    answer: 'Most modern tools and fasteners use metric measurements, but many vintage tools and specs use fractional inches. This converter bridges that gap, helping you find the right metric equivalent or the closest standard fastener size.',
  },
  {
    question: 'What is the difference between 1/2 inch and 12.7 mm?',
    answer: '1/2 inch equals exactly 12.7 millimeters (0.5 × 25.4 = 12.7). Metric tools and imperial tools are often interchangeable at standard sizes because manufacturers align common fastener sizes across both systems.',
  },
  {
    question: 'Why does the tool show "closest fastener"?',
    answer: 'Because exact conversions often land between standard fastener sizes. The tool finds the commercial bolt or socket closest to your measurement, so you can use what is available in your workshop.',
  },
  {
    question: 'What is the difference between carpentry and metal precision?',
    answer: 'In carpentry, 0.5 mm differences are negligible. In metalwork and machining, 0.1 mm matters. The precision mode hints at acceptable tolerance ranges for your material.',
  },
  {
    question: 'Can I measure with this tool offline?',
    answer: 'Yes. All calculations happen in your browser. The tool works completely offline after the first load, perfect for use in the workshop without WiFi.',
  },
  {
    question: 'Why does the tool include history?',
    answer: 'When working on a disassembly or a project with multiple parts, history lets you reference measurements without re-entering them, and lets you build a parts list as you work.',
  },
];

const howToData = [
  {
    name: 'Select your measurement type',
    text: 'Choose "Forward" to convert a fraction to millimeters, or "Reverse" to find a fraction for a measurement you took with calipers.',
  },
  {
    name: 'Enter the measurement',
    text: 'Use the three-column input (whole, numerator, denominator) or tap a quick preset button. Stepper buttons let you adjust without typing.',
  },
  {
    name: 'Review the results',
    text: 'The result shows the exact conversion plus the closest standard fastener and socket sizes. Visual scale gives you a sense of proportion.',
  },
  {
    name: 'Save to history',
    text: 'Click "Save to History" to keep measurements for later reference. History persists in your browser, even after closing.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'How to use', type: 'howto', schema: howToSchema },
    { title: 'Application', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: 'Measurement Type',
    labelWhole: 'Whole',
    labelNumerator: 'Numerator',
    labelDenominator: 'Denominator',
    labelInches: 'Inches',
    labelMillimeters: 'Millimeters',
    resultTitle: 'Conversion Result',
    resultFraction: 'Fraction',
    resultInches: 'Inches',
    resultMillimeters: 'Millimeters',
    matchTitle: 'Closest Fastener Match',
    matchClosestFastener: 'Standard bolt or fastener size',
    matchClosestSocket: 'Standard socket size',
    matchDifference: 'Difference from your measurement',
    matchRecommendation: 'Use this size if available',
    reverseSearchTitle: 'Reverse Search',
    reverseSearchLabel: 'Measured Size (mm)',
    reverseSearchButton: 'Find Fraction',
    reverseSearchHint: 'Measure with calipers, enter the value',
    unitMm: 'mm',
    unitInch: 'in',
    modeForward: 'Fraction → Metric',
    modeReverse: 'Metric → Fraction',
    precisionLabel: 'Precision Mode',
    precisionCarpentry: 'Carpentry',
    precisionMetal: 'Metalworking',
    buttonConvert: 'Convert',
    buttonClear: 'Clear',
    buttonCopyResult: 'Copy Result',
    buttonSaveToHistory: 'Save to History',
    historyTitle: 'History',
    historyEmpty: 'No measurements yet',
    historyRemove: 'Remove',
    helpText: 'Select a measurement or enter a fraction to get started.',
    toolOverline: 'Workshop Converter',
    labelVisualReference: 'Visual Reference (1 inch = 96px)',
  },
};
