import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'drill-rpm-calculator';
const title = 'Drill and Machining RPM Calculator';
const description = 'Calculate the ideal revolutions per minute for your drill or milling machine based on material and bit diameter. Prevent tool burnout and achieve better results.';

const faqData = [
  {
    question: 'Why do drill bits burn out?',
    answer: 'Primarily due to excessive RPM. When the bit rotates faster than the material can dissipate heat, friction raises the temperature above the steel hardness limit, causing the cutting edge to soften and lose effectiveness.',
  },
  {
    question: 'What is cutting speed (Vc)?',
    answer: 'Cutting speed is the linear velocity in metres per minute at which the tool edge travels across the material surface. Each material has a recommended Vc that is independent of the drill diameter.',
  },
  {
    question: 'When should I use carbide (Widia) tools?',
    answer: 'Use carbide when you need much higher speeds, in industrial production, or when machining extremely hard materials. For hobby work, HSS is sufficient and more resistant to flexural breakage.',
  },
  {
    question: 'Is lubrication always necessary?',
    answer: 'In metals, it is almost always recommended. In aluminium it prevents material adhesion to the bit. In steels it reduces heat. For wood and plastics, dry drilling with frequent retraction is better.',
  },
  {
    question: 'How do I calculate feed rate without a CNC machine?',
    answer: 'On a manual drill, feed is controlled by hand pressure. You should see a steady, clean chip. If you see dust, you are either pressing too lightly or RPM is too high. If chips are very thick and the machine struggles, you are pressing too hard.',
  },
];

const howToData = [
  { name: 'Select the material', text: 'Choose what material you will be drilling or milling (steel, aluminium, wood, etc.). Each has different hardness and thermal properties.' },
  { name: 'Enter the diameter', text: 'Input the exact diameter of your drill or end mill in millimetres. Remember that larger diameters require lower rotation speeds.' },
  { name: 'Choose tool type', text: 'Determine whether your bit is high speed steel (HSS) or carbide (Widia). Carbide tools support much higher speeds.' },
  { name: 'Set RPM on your machine', text: 'Configure your drill or milling machine with the calculated value. If your machine has fixed speed positions, use our closest speed finder to select the safest pulley position.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    { name: 'Sandvik Coromant: Cutting Speed and Feed Rate Formulae', url: 'https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: 'Machine Calculations and Workshop Tables — Machinery Handbook', url: 'https://www.google.com/search?q=machinery+handbook+cutting+speeds' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'The Importance of Correct RPM in Machining', level: 2 },
    { type: 'paragraph', html: 'Calculating the correct revolutions per minute is the difference between a perfect result and costly failure. It is not about spinning a bit as fast as possible, but respecting the physics of friction and material resistance. Our calculator optimises tool performance and surface finish quality.' },
    { type: 'title', text: 'Understanding Cutting Speed', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'RPM Calculation Formula', html: '<p>Cutting speed is a value in metres per minute indicating the ideal speed at which the edge should traverse the material. The formula we use is: <code>RPM = (Vc × 1000) / (π × D)</code> where D is the diameter in millimetres. This calculation is independent of the workpiece diameter.' },
    { type: 'title', text: 'HSS vs Carbide Tools', level: 3 },
    { type: 'paragraph', html: '<strong>High Speed Steel (HSS)</strong> is economical and impact-resistant, but has limited heat resistance. <strong>Carbide</strong> allows cutting speeds 3 to 5 times higher, but is more brittle. The calculator automatically adjusts parameters based on tool type.' },
    { type: 'title', text: '3 Common Drilling Mistakes', level: 3 },
    { type: 'paragraph', html: '<strong>Too high RPM:</strong> Causes overheating and loss of steel hardness. <strong>Too low RPM:</strong> Causes vibration and fatigue fracture. <strong>No coolant:</strong> Dramatically reduces tool life due to excessive heat buildup.' },
  ],
  ui: {
    labelMaterial: 'Work Material',
    matSteel: 'Mild Steel',
    matInox: 'Stainless Steel',
    matAlu: 'Aluminium',
    matBrass: 'Brass',
    matCastIron: 'Cast Iron',
    matWood: 'Wood',
    matPlastic: 'Plastics',
    coolSteel: 'Cutting Oil',
    coolInox: 'EP Cutting Oil',
    coolAlu: 'Solvent / Paraffin',
    coolBrass: 'Dry / Air Blast',
    coolCastIron: 'Dry',
    coolWood: 'Suction Only',
    coolPlastic: 'Air Jet',
    labelTool: 'Tool Type',
    typeHss: 'High Speed Steel',
    typeWidia: 'Carbide (Widia)',
    labelDiameter: 'Diameter',
    unitMm: 'mm',
    unitInch: 'inch',
    modeColumnDrill: 'Column Drill Mode',
    labelAdvanced: 'Feed Parameters',
    labelLips: 'Number of Flutes (z)',
    labelFz: 'Feed per Tooth (Fz)',
    labelMachine: 'Your Machine Speeds',
    presetStandard: 'Standard',
    presetCnc: 'CNC',
    addRpmManual: 'Add RPM manually...',
    addButton: '+',
    resultRpm: 'Optimal Speed',
    resultCooling: 'Coolant Type',
    resultFeed: 'Resulting Feed Rate',
    resultClosest: 'Recommended Setting',
    rpmUnit: 'Revolutions / Minute',
    recommendedLabel: 'Recommended Setting',
    recommendedHint: 'Set your machine selector to this position',
    statusLimitActive: 'Machine limit active',
    statusOutOfRange: 'Out of commercial standard range',
  },
};
