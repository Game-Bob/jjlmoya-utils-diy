import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'epoxy-resin-calculator';
const title = 'Epoxy Resin Calculator: Exact Mix and Volume';
const description =
  'Calculate the exact amount of epoxy resin and hardener for your projects. Avoid waste on river tables, jewelry and molds.';

const faqData = [
  {
    question: 'Why is the exact ratio so important with resin?',
    answer:
      'Unlike other mixtures, epoxy resin does not cure by evaporation but through a chemical reaction (polymerization). If there is excess resin or hardener, the reaction will be incomplete, leaving the piece sticky, soft or with permanent bubbles.',
  },
  {
    question: 'What is the difference between weight and volume ratio?',
    answer:
      'Many resins mix 2:1 by volume but 100:45 by weight because the hardener is usually denser. Always use the scale specified by the manufacturer and, if possible, use a digital scale for maximum precision.',
  },
  {
    question: 'How do I avoid bubbles when mixing?',
    answer:
      'Mix slowly with constant circular movements for at least 3 minutes, scraping the sides of the cup well. Let the mixture rest for a couple of minutes before pouring so bubbles rise to the surface.',
  },
  {
    question: 'What is Pot Life?',
    answer:
      'It is the time you have to work with the mixture before it starts to harden (gel). In summer or with large volumes, this time is drastically reduced due to the exothermic reaction (generates heat).',
  },
];

const howToData = [
  {
    name: 'Measure the mold dimensions',
    text: 'Measure the length, width and depth (thickness) of the area you want to fill with resin.',
  },
  {
    name: 'Enter the mixing ratio',
    text: 'Check on your product label whether the mix is 1:1, 2:1 or 3:1 and whether it is based on weight or volume.',
  },
  {
    name: 'Weigh the components',
    text: 'Pour component A (resin) first, then B (hardener) into a clean container on a digital scale.',
  },
  {
    name: 'Technical mixing',
    text: "Stir gently until the mixture is completely transparent and no 'threads' of different density are visible.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Epoxy Resin Calculation and Mixing Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Epoxy resin is not a paint that dries by evaporation; it is a complex <strong>exothermic chemical reaction</strong>. The magic happens when epoxide molecules chain with polyamine molecules to form a solid crystalline thermosetting polymer.",
    },
    {
      type: 'paragraph',
      html: 'The difference between a lasting piece of art and a sticky disaster lies in <strong>exact stoichiometry</strong>. An error of just 5% in the mixing ratio can permanently inhibit curing. This tool eliminates the mathematical guesswork, letting you focus on creation.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:scale-balance',
          title: 'Volume vs Weight?',
          html: '<p>The #1 beginner mistake is assuming 100ml weighs 100g. <strong>Resin is denser than hardener.</strong></p><p>If your product data sheet says "100:50 by weight", it is NOT the same as "2:1 by volume". This calculator works with <strong>Volume</strong> (V = L × W × H), the standard for filling molds.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:water-percent',
          title: 'Common Ratios',
          html: '<ul><li><strong>1:1</strong> — Coatings, varnishes and quick adhesives.</li><li><strong>2:1</strong> — Standard. River tables, jewelry and medium molds.</li><li><strong>3:1</strong> — Industrial floors and high-strength structural laminates.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Safety Protocol and Best Practices',
      level: 2,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:thermometer',
          title: 'Critical Temperature',
          html: '<p>Always work between <strong>21°C and 25°C</strong>. Cold can stop the reaction, leaving the piece cloudy. Excessive heat dangerously accelerates the exothermic reaction ("flash cure").</p>',
        },
        {
          type: 'card',
          icon: 'mdi:cup-outline',
          title: 'Double Cup Technique',
          html: '<p>Do not trust a single mix. Scrape the sides and bottom thoroughly, pour the mixture into a <strong>second clean cup</strong> and mix again. This ensures no uncatalyzed material remains.</p>',
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:weather-windy',
      title: 'Ventilation',
      html: "<p>Although many modern resins are low odor, isocyanate and amine vapors require cross ventilation or an activated carbon mask. Always wear nitrile gloves.</p>",
    },
  ],
  ui: {
    shapeRect: 'Rectangular',
    shapeCylinder: 'Cylindrical',
    shapeSphere: 'Spherical',
    labelLength: 'Length (cm)',
    labelWidth: 'Width (cm)',
    labelDiameter: 'Diameter (cm)',
    labelDepth: 'Depth (cm)',
    labelRatio: 'Mix Ratio (Weight/Volume)',
    labelCustomRatio: 'Use custom ratio (A:B)',
    labelResinA: 'Resin (A)',
    labelHardenerB: 'Hardener (B)',
    labelWasteTitle: 'Safety Margin',
    labelWasteDesc: 'Add 5% extra for losses',
    labelTotalVolume: 'Total Volume',
    labelPartA: 'Part A (Resin)',
    labelPartB: 'Part B (Hardener)',
    labelVisualization: 'Visualization',
    shapeRectLabel: 'Rectangular Block',
    shapeCylinderLabel: 'Cylinder / Round Mold',
    shapeSphereLabel: 'Full Sphere',
  },
};
