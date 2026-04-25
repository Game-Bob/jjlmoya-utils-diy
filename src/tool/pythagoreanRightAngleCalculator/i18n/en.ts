import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pythagorean-right-angle-calculator-3-4-5-rule';
const title = 'Pythagorean Right Angle Calculator: 3 4 5 Rule for Perfect Squares';
const description = 'Verify if structures are perfectly squared at 90° using the Pythagorean theorem and 3-4-5 rule. Essential tool for construction, carpentry, and DIY projects.';

const faqData = [
  {
    question: 'What is the 3-4-5 rule?',
    answer: 'The 3-4-5 rule is a simple Pythagorean triple. If a right triangle has sides of 3, 4, and 5 units in any scale, the angle between the shorter sides is exactly 90 degrees. This field-tested method has been used in construction for centuries.',
  },
  {
    question: 'How do I use this calculator?',
    answer: 'Enter the lengths of the two walls (sides A and B) that form the corner. The calculator shows what the diagonal should be for a perfect 90-degree angle. Then measure your actual diagonal and enter it to verify if your corner is truly square.',
  },
  {
    question: 'What if my diagonal is different?',
    answer: 'If your measured diagonal differs from the ideal, the calculator shows the deviation. Green means perfect, yellow means acceptable, red means out of square. It also tells you whether to open or close the angle.',
  },
  {
    question: 'Is this accurate enough for construction?',
    answer: 'Yes. The Pythagorean theorem is mathematically exact. With a tape measure, you can achieve construction-grade accuracy without specialized tools or skill.',
  },
  {
    question: 'Can I switch between inches and feet?',
    answer: 'Yes. Choose inches for small projects or feet for larger structures. All values convert instantly without losing data.',
  },
];

const howToData = [
  { name: 'Select your unit', text: 'Choose inches for detailed work or feet for larger structures. You can switch anytime without losing data.' },
  { name: 'Measure both sides', text: 'Measure the length of the two walls (sides A and B) that form the corner you want to check.' },
  { name: 'Check the ideal diagonal', text: 'The calculator shows you what the diagonal must be for a perfect 90-degree angle.' },
  { name: 'Measure your diagonal', text: 'Use a tape measure to measure your actual diagonal. Enter it in the optional field.' },
  { name: 'Read the status', text: 'Green = perfect square. Yellow = acceptable. Red = out of square. Adjust as suggested.' },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'The Pythagorean Theorem in Practice', level: 2 },
    { type: 'paragraph', html: 'A perfect 90-degree angle is fundamental to quality construction. Walls must be perpendicular, foundations must be square, and frames must be true. The Pythagorean theorem provides a mathematically guaranteed method: a² + b² = c².' },
    { type: 'title', text: 'Why the 3-4-5 Rule Works', level: 3 },
    { type: 'paragraph', html: 'The 3-4-5 rule is the simplest Pythagorean triple. Whether you measure in inches, feet, or any other unit, sides of 3, 4, and 5 units guarantee a 90-degree angle. This has been proven mathematically and tested in construction for centuries.' },
    { type: 'title', text: 'Precision Without Specialized Tools', level: 3 },
    { type: 'paragraph', html: 'Unlike levels or squares that can break or fall out of adjustment, the Pythagorean theorem is immutable. With only a tape measure, you can verify any corner at any scale. This calculator eliminates mental math and ensures accuracy.' },
    { type: 'title', text: 'From Theory to Actionable Guidance', level: 3 },
    { type: 'paragraph', html: 'This calculator converts abstract mathematics into practical field instructions. If your diagonal is off, it tells you exactly how much and which direction to adjust. Transform theory into on-site results.' },
  ],
  ui: {
    titleMain: 'Pythagorean Right Angle Calculator',
    labelInputData: 'Measurements',
    labelUnitSelection: 'Unit',
    btnUnitInches: 'inches',
    btnUnitFeet: 'feet',
    btnUnitCentimeters: 'centimeters',
    labelSideA: 'Side A',
    labelSideB: 'Side B',
    labelMeasuredDiagonal: 'Measured diagonal (optional)',
    labelResults: 'Results',
    labelIdealDiagonal: 'Ideal diagonal',
    labelDeviation: 'Deviation',
    labelStatus: 'Status',
    labelVerification: 'Square verification',
    btnClear: 'Clear',
    btnCopyResults: 'Copy results',
    labelPresets: 'Quick presets',
    unitInches: 'in',
    unitFeet: 'ft',
    unitCentimeters: 'cm',
    tooltipOptional: 'Enter your measured diagonal to verify perfect 90 degrees',
    tooltipPresets: '3-4-5 rule in different scales',
    statusPerfect: 'Perfect 90 degree angle',
    statusAcceptable: 'Acceptable deviation',
    statusWarning: 'Minor deviation',
    statusError: 'Out of square',
    statusReady: 'Ready',
    msgIdealCalculated: 'Diagonal ideal calculated',
    actionOpen: 'Open',
    actionClose: 'Close',
    descLarger: 'larger',
    descSmaller: 'smaller',
    descCorrection: 'Correction needed',
  },
};
