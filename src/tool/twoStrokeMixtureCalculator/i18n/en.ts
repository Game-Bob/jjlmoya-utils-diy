import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'two-stroke-fuel-mixture-calculator';
const title = 'Two Stroke Fuel Mixture Calculator: Accurate Oil-to-Fuel Ratios';
const description = 'Calculate precise 2-stroke fuel mixture ratios instantly. Essential tool for chainsaws, mopeds, motorcycles, and small engines. Supports 1:25, 1:33, 1:40, and 1:50 ratios.';

const faqData = [
  {
    question: 'What is a 2-stroke engine?',
    answer: 'A 2-stroke engine combines intake and power in two piston strokes, making it simpler and lighter than 4-stroke engines. They power chainsaws, leaf blowers, mopeds, and some motorcycles. They require oil mixed into the fuel for lubrication.',
  },
  {
    question: 'What are common fuel oil mix ratios?',
    answer: 'Common ratios are 1:25 (rich, protective), 1:33 (older equipment), 1:40 (standard), and 1:50 (lean, modern engines). Check your engine manual for the exact ratio—using the wrong ratio can damage your engine.',
  },
  {
    question: 'What happens if I mix wrong?',
    answer: 'Too much oil (rich mixture) causes excessive smoke, fouled plugs, and poor performance. Too little oil (lean mixture) leads to seizure, piston damage, and engine failure. Always use the manufacturer\'s recommended ratio.',
  },
  {
    question: 'What type of oil do I use?',
    answer: 'Use 2-stroke motor oil rated for your equipment. Premium synthetic 2-stroke oils provide better protection and cleaner burning than conventional oils. Never use 4-stroke engine oil—it will cause engine damage.',
  },
  {
    question: 'How do I mix fuel and oil?',
    answer: 'Pour a portion of gasoline into a clean container, add the calculated amount of oil, then add the remaining gasoline. Mix thoroughly by shaking for 1-2 minutes. Label the container with the mixture date.',
  },
];

const howToData = [
  { name: 'Know your ratio', text: 'Find your engine manual or equipment documentation. Common ratios: chainsaws (1:40 or 1:50), mopeds (1:33), older motorcycles (1:25). Using the wrong ratio damages your engine.' },
  { name: 'Measure fuel volume', text: 'Decide how much gasoline you need. This tool handles liters, gallons, or any volume unit. Accurate fuel measurement = accurate oil amount.' },
  { name: 'Calculate oil needed', text: 'Enter fuel volume and ratio. This calculator shows exactly how much oil (in ml or liters) you need for a perfect mixture.' },
  { name: 'Mix carefully', text: 'Pour fuel into a clean container, add calculated oil, then add remaining fuel. Shake for 1-2 minutes to blend thoroughly.' },
  { name: 'Label and use', text: 'Mark the container with date and mixture ratio. Use the mixed fuel within 30 days for best results (especially synthetic oils).' },
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Getting 2-Stroke Fuel Mixture Right', level: 2 },
    { type: 'paragraph', html: 'Two-stroke engines power everything from chainsaws to mopeds. They operate on a precise balance: gasoline provides energy, oil provides lubrication. Get the ratio wrong and you risk catastrophic engine failure.' },
    { type: 'title', text: 'Why Precision Matters', level: 3 },
    { type: 'paragraph', html: 'A lean mixture (too little oil) causes the piston to seize within minutes. A rich mixture (too much oil) fouls spark plugs and wastes fuel. Your equipment manual specifies the exact ratio because that ratio was validated through real-world testing.' },
    { type: 'title', text: 'Common Ratios Explained', level: 3 },
    { type: 'paragraph', html: '1:25 is rich—used on older equipment, high-load situations, or when maximum protection matters. 1:40 is standard—suits most modern small engines. 1:50 is lean—for newer engines designed for efficiency. Always verify your specific equipment.' },
    { type: 'title', text: 'Mixing Technique', level: 3 },
    { type: 'paragraph', html: 'Never guess when mixing. Add oil to partially-filled fuel container, then top up with remaining fuel. Shake vigorously for at least one minute. Homogeneous mixture = even lubrication. This calculator removes all guesswork—enter volume and ratio, get exact oil amount.' },
  ],
  ui: {
    titleMain: 'Two Stroke Fuel Mixture Calculator',
    labelFuelVolume: 'Fuel Volume',
    labelRatio: 'Mix Ratio',
    labelOilRequired: 'Oil Required',
    labelTotalMixture: 'Total Mixture',
    labelRichness: 'Mixture Richness',
    labelPresets: 'Common Ratios',
    labelCustomRatio: 'Custom Ratio (1:X)',
    btnClear: 'Clear',
    btnCopyResults: 'Copy Results',
    btnSwitchMode: 'Switch Mode',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Lean (less oil, risk of seizure)',
    richBalanced: 'Balanced (standard mix)',
    richRich: 'Rich (more oil, more smoke, engine protection)',
    msgReady: 'Ready',
    msgMixtureReady: 'Mixture calculated',
    tooltipFuelVolume: 'Enter the amount of gasoline in liters',
    tooltipRatio: 'Enter ratio as 25, 33, 40, or 50 (for 1:25, 1:33, etc.)',
    recipientLabel: 'Mixture Container',
    oilPercentage: 'Oil %',
    labelVolume: 'Volume',
    labelRatioShort: 'Ratio',
    labelOilTip: '2% oil mix = 1:50 ratio',
    labelMixingTips: 'Mixing Tips',
    labelMixingTipsDesc: 'Mix in a clean container—gasoline first, add measured oil, then remaining fuel. Shake well (1-2 minutes) for homogeneous blend. Label with date and ratio.',
    recipePrefix: 'For',
    recipeAt: 'of fuel at',
    recipeAdd: 'add exactly',
    recipeOfOil: 'of 2-stroke oil.',
    copyTextPrefix: '2-Stroke Mix',
    copyTextFuel: 'fuel',
    copyTextOil: 'oil',
  },
};
