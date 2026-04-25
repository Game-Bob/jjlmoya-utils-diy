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
    { type: 'title', text: '2-Stroke Fuel Mixture Calculator: Precise Oil-to-Fuel Ratios for Chainsaws, Mopeds & Small Engines', level: 2 },
    { type: 'paragraph', html: 'Two-stroke engines require a precise fuel-oil mixture for survival. Mix wrong and destroy your engine in minutes. This calculator instantly determines the exact amount of oil needed for your fuel volume and engine type—eliminating guesswork from the workshop.' },

    { type: 'title', text: 'Why 2-Stroke Engines Require Oil in Fuel', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'The Critical Difference', html: 'Unlike 4-stroke engines with separate oil reservoirs, 2-stroke engines mix oil directly into fuel. On each power stroke, the engine burns the fuel-oil mixture for both energy and lubrication. There is no sump, no separate oil pump—only the mixed fuel keeping pistons alive.' },

    { type: 'title', text: '2-Stroke Ratio Quick Reference', level: 3 },
    { type: 'table', headers: ['Ratio', 'Oil %', 'Use Case', 'Engine Type', 'Characteristics'], rows: [
      ['1:25', '3.85%', 'Maximum Protection', 'Pre-1980s equipment, high-load use, vintage motorcycles', 'Rich mixture: more smoke, more carbon buildup, maximum protection against seizure'],
      ['1:33', '2.94%', 'Classic Equipment', '1980s–1990s small engines, older chainsaws', 'Moderate richness: balanced protection and efficiency'],
      ['1:40', '2.44%', 'Industry Standard', 'Most modern chainsaws, mopeds, modern small engines', 'Standard recommendation: designed for today\'s synthetic oils'],
      ['1:50', '1.96%', 'Modern Efficiency', 'Latest chainsaws, high-performance mopeds, new motorcycles', 'Lean mixture: less smoke, cleaner burning, designed for premium synthetic oils']
    ] },

    { type: 'title', text: 'Consequences of Wrong Ratios', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Too Much Oil (Rich Mixture)', con: 'Excessive white smoke, fouled spark plugs, carbon buildup, poor acceleration, engine failure' },
      { pro: 'Too Little Oil (Lean Mixture)', con: 'Piston seizes within seconds, scored cylinder walls, catastrophic engine damage, total failure' },
      { pro: 'Correct Ratio', con: 'Smooth operation, proper lubrication, optimal burn, extended engine life, reliable starting' }
    ] },

    { type: 'title', text: 'Common Equipment Ratios', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Chainsaws', html: '<strong>Stihl, Husqvarna, Echo:</strong> Modern models typically require 1:40 or 1:50. Always check your manual—using 1:25 on a modern chainsaw risks fouled plugs and poor performance. Older Stihl machines (1990s and earlier) may specify 1:25 or 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Mopeds & Motorcycles', html: '<strong>Vespa, Honda, Yamaha:</strong> Most require 1:33 for older models, 1:40–1:50 for modern versions. High-performance mopeds and street bikes often specify 1:50 ratios. Check your service manual—it\'s the source of truth.' },
    { type: 'card', icon: 'mdi:tools', title: 'Leaf Blowers & Trimmers', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Typically 1:50 (modern) or 1:40 (slightly older). These tools are designed for quick seasonal use, so lean ratios save on smoke and cost without sacrificing reliability.' },

    { type: 'title', text: 'Oil Type Matters as Much as Ratio', level: 3 },
    { type: 'comparative', items: [
      { title: 'Conventional 2-Stroke Oil', description: 'Budget option for occasional use. Higher ash content, more smoke, adequate protection for standard ratios.', icon: 'mdi:beaker', points: ['Lower cost', 'More visible smoke', 'Higher ash buildup', 'Works for 1:40 ratios'] },
      { title: 'Synthetic 2-Stroke Oil', description: 'Premium choice for frequent users. Cleaner burn, better protection, enables leaner ratios. Temperature-stable.', icon: 'mdi:flame', points: ['Lower smoke output', 'Better engine protection', 'Enables 1:50 ratios safely', 'Longer storage stability'], highlight: true },
      { title: 'Synthetic Blend (Semi-Synthetic)', description: 'Middle ground between conventional and full synthetic. Good protection at moderate cost. Common OEM recommendation.', icon: 'mdi:beaker-outline', points: ['Balanced performance', 'Moderate cost', 'Good for 1:40 ratios', 'Reduced smoke vs conventional'] }
    ], columns: 3 },

    { type: 'title', text: 'Step-by-Step Mixing Process', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'The Right Way to Mix', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Use a dedicated container</strong> reserved for fuel mixing only. Clean, dry, marked for fuel.</li><li><strong>Pour half your fuel</strong> into the container first.</li><li><strong>Add the calculated oil amount</strong> (use this calculator for precision).</li><li><strong>Add remaining fuel</strong> to reach target volume.</li><li><strong>Shake vigorously for 1–2 minutes</strong> until color is uniform. A homogeneous mixture = even lubrication.</li><li><strong>Label the container</strong> with date, ratio, and fuel type.</li><li><strong>Use within 30 days</strong> (synthetic oils extend this to 60 days).</li></ol>' },

    { type: 'title', text: 'When to Question Your Equipment Manual', level: 3 },
    { type: 'tip', html: '<strong>Always verify the ratio in your equipment manual first.</strong> If you can\'t locate it, visit the manufacturer\'s website or contact their support. Never assume—a wrong ratio voids warranties and risks engine seizure. If your equipment is vintage and the manual is lost, search online for the model number. The cost of a replacement manual is far less than rebuilding an engine.' },

    { type: 'title', text: 'Glossary: 2-Stroke Terms Explained', level: 3 },
    { type: 'glossary', items: [
      { term: 'Lean Mixture', definition: 'Fuel with too little oil (high ratio like 1:50). Risks piston seizure due to insufficient lubrication.' },
      { term: 'Rich Mixture', definition: 'Fuel with too much oil (low ratio like 1:25). Causes excessive smoke, spark plug fouling, and carbon buildup.' },
      { term: 'Homogeneous Mixture', definition: 'Uniform blend of fuel and oil throughout, achieved by thorough shaking. Essential for even lubrication and combustion.' },
      { term: 'Seizure', definition: 'When a piston freezes inside the cylinder due to insufficient lubrication and friction. Results in complete engine failure.' },
      { term: 'Synthetic Oil', definition: 'Lab-formulated oil offering superior protection, cleaner burn, and temperature stability compared to conventional mineral oils.' },
      { term: '2-Stroke Engine', definition: 'Engine completing full combustion cycle in two piston movements (intake/power on stroke 1, exhaust/compression on stroke 2). Lighter and simpler than 4-stroke engines.' },
      { term: '4-Stroke Engine', definition: 'Engine with separate oil sump and four-stage cycle. Oil circulates through passages, not mixed into fuel. Heavier but more efficient.' }
    ] },

    { type: 'title', text: 'How This Calculator Saves Time & Money', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Accurate calculations, no measuring errors', icon: 'mdi:check-circle' },
      { value: 'Instant', label: 'Get exact amounts in seconds, not guesswork', icon: 'mdi:flash' },
      { value: '4 Ratios', label: '1:25, 1:33, 1:40, 1:50 covered', icon: 'mdi:counter', trend: { value: 'Plus custom ratios', positive: true } },
      { value: 'Shareable', label: 'Copy and share your exact mixture setup via URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Common Mistakes That Kill Engines', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Using 4-Stroke Oil in 2-Stroke Engines', icon: 'mdi:alert', badge: 'Engine Death', html: '4-stroke oils are designed for circulation through an engine block. In a 2-stroke fuel tank, they don\'t burn cleanly and will destroy your engine in hours.' },
    { type: 'diagnostic', variant: 'warning', title: 'Forgetting to Mix Thoroughly', icon: 'mdi:alert', badge: 'Seizure Risk', html: 'If oil and fuel separate due to incomplete mixing, parts of your engine will burn without lubrication. Shake for at least 1–2 minutes until the mixture is uniform.' },
    { type: 'diagnostic', variant: 'warning', title: 'Using Old Fuel (Over 60 Days Old)', icon: 'mdi:alert', badge: 'Gum Buildup', html: 'Ethanol-blend fuel separates over time. Old fuel mixture leaves gum deposits in carburetors and fuel injectors. Mix only what you\'ll use within 30 days.' },

    { type: 'title', text: 'FAQ Summary', level: 3 },
    { type: 'summary', title: 'Before You Mix', items: [
      'Check your equipment manual for the exact ratio—this is the manufacturer\'s tested specification.',
      'Verify you\'re using 2-stroke oil, not 4-stroke or other oils.',
      'Use a clean, dedicated container reserved only for fuel mixing.',
      'Use fresh gasoline (not stored for months) and compatible 2-stroke oil.',
      'Mix thoroughly and label with date, ratio, and fuel type.',
      'Use the mixture within 30 days for best results.'
    ] },
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
