import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'drill-sharpening-master';
const title = 'Drill Sharpening Master: Precision Gauge';
const description = 'Interactive guide to sharpen HSS drill bits. Digital gauge on screen to verify 118° and 135° angles. Calculate RPM and diagnose cutting errors.';

const faqData = [
  {
    question: 'Can I place the drill bit directly on the screen?',
    answer: 'Yes, the tool is designed for you to rest the drill bit axis on the center line of the digital gauge and verify the symmetry of the lips directly.',
  },
  {
    question: 'How do I know if the clearance angle is correct?',
    answer: 'When you rotate the drill bit, the back of the cutting edge should visibly drop lower. If the metal shines equally across the tip, you need more clearance.',
  },
  {
    question: 'What RPM should I use after sharpening?',
    answer: 'It depends on the diameter. Our integrated calculator will give you the exact value based on the material you selected.',
  },
  {
    question: 'What is the difference between HSS and Carbide?',
    answer: 'HSS (High Speed Steel) is more economical and impact-resistant. Carbide supports higher speeds but is more brittle. For manual sharpening, HSS is standard.',
  },
  {
    question: 'Do I need special equipment to sharpen?',
    answer: 'A rotating grinding stone with medium grit (120-150) is sufficient. The important thing is to keep the stone balanced and flat for consistent results.',
  },
];

const howToData = [
  { name: 'Select Material', text: 'Choose the metal or material you will drill to set the target angle and cutting speed.' },
  { name: 'Verify Symmetry', text: 'Place the drill bit on the screen and ensure both cutting edges align with the blue guide lines.' },
  { name: 'Check Clearance', text: 'Visually verify that the back of the cutting edge does not contact the workpiece (clearance angle).' },
  { name: 'Calculate RPM', text: 'Enter the diameter and set your drill to the recommended speed for the selected material.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Drill Sharpening Master: Professional Technique', level: 2 },
    { type: 'paragraph', html: 'Drill bit sharpening is one of the most valuable skills in any workshop. A properly sharpened drill bit improves hole quality, extends tool life, and ensures operator safety.' },
    { type: 'title', text: 'The Fundamentals: Point Angle', level: 3 },
    { type: 'paragraph', html: 'The point angle defines how the drill attacks the material. Standard angles are 118° for mild steel, 135° for stainless steel, and 140° for hard steels. Each material requires a different angle to maximize penetration without compromising edge strength.' },
    { type: 'title', text: 'The Overlooked Factor: Clearance Angle', level: 3 },
    { type: 'paragraph', html: 'The most common mistake is ignoring the clearance angle. If the surface behind the cutting edge is flat, the drill will simply rub, generating extreme heat. The solution is to slightly reduce the back of the cutting edge.' },
  ],
  ui: {
    labelMaterial: 'Work Material',
    matSteel: 'Steel',
    matInox: 'Stainless',
    matHard: 'Hard',
    matBrass: 'Brass',
    matPlastic: 'Plastic',
    matWood: 'Wood',
    labelDiameter: 'Drill Diameter (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Speed',
    unitRpm: 'RPM',
    labelCooling: 'Cooling',
    btnDiagnosis: 'Not cutting well? Diagnose',
    diagTitle: 'Failure Diagnosis',
    diagClose: 'Close',
    diagIssue1: '1. Smokes but does not penetrate',
    diagIssue1Desc: 'Missing clearance angle. The metal behind the edge rubs the workpiece. Reduce the back of the edge so the lip is highest.',
    diagIssue2: '2. Hole is eccentric or oversized',
    diagIssue2Desc: 'The tip is not centered. The cutting edges have different lengths. Ensure the tip touches the exact center of the gauge.',
    diagIssue3: '3. Burned edges (Blue)',
    diagIssue3Desc: 'Excessive speed. Check the RPM calculation for this diameter and material.',
    gaugeInstruction: 'REST THE AXIS ON THE VERTICAL LINE',
  },
};
