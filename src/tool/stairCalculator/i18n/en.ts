import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'stair-calculator';
const title = 'Stair Calculator: Design and Execution';
const description = 'Calculate exact stair measurements: tread, riser, slope and materials. Apply Blondel\'s law and avoid construction errors.';

const faqData = [
  {
    question: 'What is Blondel\'s law?',
    answer: 'It is a formula that establishes that for a staircase to be comfortable, the sum of two risers and one tread should be between 62 and 64 cm (2R + T = 63). This law is based on average human step length and ensures that climbing or descending is safe and comfortable.',
  },
  {
    question: 'What is the maximum height of a step?',
    answer: 'In residential buildings, 18-19 cm is recommended. For public spaces, the maximum is typically 17.5 cm according to standards. Higher risers are tiring and potentially dangerous, especially for children and elderly people.',
  },
  {
    question: 'How do I calculate if space is limited?',
    answer: 'If horizontal space is limited, you must increase the number of steps (reducing riser height) or accept a steeper slope, though less comfortable. The calculator helps you find the optimal balance.',
  },
  {
    question: 'What does concrete volume calculation include?',
    answer: 'The total concrete volume is calculated considering the steps plus the inclined slab (the sloped plane supporting the steps). Ignoring this volume would result in insufficient concrete orders.',
  },
  {
    question: 'Why is cumulative layout important?',
    answer: 'Measuring each step separately generates cumulative errors. Cumulative layout ensures all steps have exactly the same height, avoiding hazards and improving usage comfort.',
  },
];

const howToData = [
  { name: 'Measure the height difference', text: 'Measure the total height difference (H) from finished floor to finished floor above. This is the fundamental value for the entire calculation.' },
  { name: 'Enter available length', text: 'Optional: If you have space constraints, enter available horizontal length. Use 0 for free calculation without limits.' },
  { name: 'Adjust number of steps', text: 'The calculator proposes an initial number, but you can adjust it. Watch the Blondel indicator: it should be green (62-64 cm) for maximum comfort.' },
  { name: 'Define construction parameters', text: 'Specify slab thickness, finishes, concrete strength and stair width. These values affect final material calculations.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Standards',
  bibliography: [
    { name: 'Building Code - Stair Design Standards', url: 'https://www.ibc.org/' },
    { name: 'Blondel\'s Law - Wikipedia', url: 'https://en.wikipedia.org/wiki/Staircase' },
    { name: 'ISO 12122-1: Building stairs - Performance requirements', url: 'https://www.iso.org/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Staircase Design Geometry: Blondel\'s Law', level: 2 },
    { type: 'paragraph', html: 'The comfort of a staircase depends on human step length. When you climb or descend stairs, your body expects a predictable rhythm. Blondel\'s law establishes that 2 risers + 1 tread = 62-64 cm is the standard ensuring maximum comfort and safety.' },
    { type: 'title', text: 'Structural Control and Materials', level: 3 },
    { type: 'paragraph', html: 'For professional execution, it is vital to account for the concrete slab (the inclined plane supporting the steps). Ignoring this volume would result in insufficient concrete orders and defective construction. The calculator automatically integrates this calculation.' },
    { type: 'title', text: 'Layout and Marking: Cumulative Error', level: 3 },
    { type: 'paragraph', html: 'In construction, the greatest enemy is millimetre-level error. If you measure each step separately, the sum of small errors can leave the last step 5 cm higher or lower than the first. Cumulative layout prevents this problem.' },
    { type: 'title', text: 'Final Finish Provisions', level: 3 },
    { type: 'paragraph', html: 'A critical detail: are you installing 3 cm granite steps? This data is fundamental. If not properly accounted for, the first step will be 3 cm higher and the last 3 cm lower, creating a real safety hazard.' },
  ],
  ui: {
    labelGeometry: 'Geometry and Opening',
    labelTotalHeight: 'Total Height Difference (H)',
    labelAvailableLength: 'Available Length (L)',
    labelAvailableLengthHint: 'Use 0 for free calculation.',
    labelNumSteps: 'Number of Steps',
    labelOptimize: 'Optimize (18cm)',
    labelWork: 'Construction Details',
    labelSlabThickness: 'Slab (e)',
    labelFinishThickness: 'Finish',
    labelCeilingHeight: 'Ceiling Height (Optional)',
    labelStairWidth: 'Stair Width',
    labelConcreteStrength: 'Concrete Strength',
    optionH150: 'H-150 (Lean)',
    optionH200: 'H-200 (Residential)',
    optionH250: 'H-250 (Structural)',
    labelRiser: 'Riser',
    labelTread: 'Tread',
    labelSlope: 'Slope',
    labelRealAdvance: 'Actual Run',
    labelLayoutTable: 'Layout and Execution',
    colStep: 'Step',
    colConcreteHeight: 'Concrete Height',
    colFinishedHeight: 'Finished Height',
    colAdvance: 'Run',
    adjustedNote: 'Adjusted',
    labelMaterials: 'Material Estimate',
    labelTotalConcrete: 'Total Concrete:',
    labelCement: 'Cement (bags/25kg):',
    labelSand: 'Sand Required:',
    unitM3: 'm³',
    unitBags: 'bags',
    unitLiters: 'L',
    btnShare: 'Share',
    btnPrint: 'Print PDF',
    statusOptimalComfort: 'Optimal Comfort',
    statusMarginLimit: 'Margin Limit',
    statusCriticalDesign: 'Critical Design',
    statusRiserError: 'Tread Error',

    msgInvalidValues: 'Invalid values',
    msgInsufficientSpace: 'INSUFFICIENT SPACE',
    msgDangerousTread: 'The {val}cm tread is dangerous.',
    msgBlondelValue: 'Blondel: {val}cm.',
    msgOptimalStep: 'Comfortable step: {val}cm.',
    msgLowCeiling: 'LOW HEADROOM (<2m)',
    msgCalculating: 'Calculating...',
    msgEnterMeasurements: 'Enter measurements',

    shareTitle: 'Construction Summary',
    shareMessage: 'Stairs: H={h}cm, N={n}, CH={ch}cm, Vol={vol}m3',
  },
};
