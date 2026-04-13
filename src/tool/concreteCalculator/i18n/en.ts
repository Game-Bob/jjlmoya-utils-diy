import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'concrete-mortar-calculator';
const title = 'Concrete and Mortar Calculator: Bags of Cement per Cubic Metre';
const description =
  'Calculate exactly how many 25kg cement bags, sand shovels and litres of water you need per m³. Mix ratios for H200 concrete, M40 masonry mortar and M80 floor screeds.';

const faqData = [
  {
    question: 'How many 25kg bags of cement are needed per cubic metre of concrete?',
    answer:
      'For standard H-200 structural concrete, you need approximately 14 bags of 25kg (350kg total) per cubic metre of compacted mix. Weaker mixes like M-40 masonry mortar require around 11 bags per m³.',
  },
  {
    question: 'What is the difference between concrete and mortar?',
    answer:
      'Concrete contains coarse aggregate (gravel) in addition to cement and sand, making it structurally stronger for load-bearing applications like foundations. Mortar uses only fine sand and is used for laying bricks, pointing, and rendering surfaces.',
  },
  {
    question: 'How many shovels of sand per cubic metre?',
    answer:
      'For H-200 concrete, approximately 180 shovels of sand plus 240 shovels of gravel per m³ are needed. For M-40 masonry mortar, around 400 shovels of sand (no gravel). A standard shovel holds roughly 3-4 litres of material.',
  },
  {
    question: 'Can I mix concrete by hand without a cement mixer?',
    answer:
      'Yes, but it requires significant physical effort and becomes impractical above 0.5 m³. Mix on a clean, watertight surface. Add water sparingly, as excess water dramatically weakens the final strength.',
  },
  {
    question: 'Why does concrete crack as it dries?',
    answer:
      'Cracking is usually caused by rapid moisture loss during curing or excess water in the mix. Keep the concrete damp for several days after pouring by covering it with wet hessian or plastic sheeting.',
  },
];

const howToData = [
  {
    name: 'Choose the Mix Type',
    text: 'Select whether you need structural concrete for foundations or masonry mortar for walls.',
  },
  {
    name: 'Enter the Volume in m³',
    text: 'Input the total volume or use the dimension helper: multiply length × width × thickness.',
  },
  {
    name: 'Read the Quantities',
    text: 'Check how many cement bags, sand shovels and litres of water you need to purchase.',
  },
  {
    name: 'Follow the Proportion Guide',
    text: 'Use the visual proportion bar to prepare a correctly balanced mix every time.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    {
      name: 'Concrete Mix Proportioning Standards (ASTM C94)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: 'BS EN 197: Cement Composition and Conformity Criteria',
      url: 'https://www.bsigroup.com/en-GB/standards/',
    },
    {
      name: 'The Concrete Centre: Mix Design Guide',
      url: 'https://www.concretecentre.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Science of Concrete and Mortar Mix Ratios',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Whether you are laying a garden slab, building a block wall, or pouring a floor screed, getting the <strong>concrete mix ratio</strong> right is the single most important factor for structural integrity. This calculator converts professional engineering dosages — expressed in kg per cubic metre — into the practical units you actually work with on site: <strong>25kg bags, shovelfuls, and litres</strong>.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'Why Water Ratio Determines Concrete Strength',
      html: '<p>The water-to-cement ratio (w/c ratio) is the key variable controlling concrete strength. Every extra litre of water you add beyond the minimum makes the mix more workable — but permanently weakens the cured concrete by leaving voids as it evaporates.</p><p>The correct consistency resembles a <strong>stiff, cohesive paste</strong>, not a pourable liquid. If your mix slumps off a trowel too easily, you have added too much water.</p>',
    },
    {
      type: 'title',
      text: 'Standard Mix Proportions by Application',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The three mixes in this calculator cover the most common DIY and trade applications. <strong>H-200 concrete</strong> (1:2.5:3 ratio) is suitable for foundations, slabs, and structural elements. <strong>M-40 masonry mortar</strong> (1:4 ratio) is ideal for laying bricks and blocks. <strong>M-80 screed mortar</strong> (1:3 ratio) gives a strong, dense finish for floor levelling and external rendering. Always choose the mix appropriate to the load the structure will bear.',
    },
    {
      type: 'title',
      text: 'Calculating Cubic Metres for Your Project',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Worked Example for a Garden Slab',
      html: '<p>For a garden patio 4m long, 3m wide and 15cm deep: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. Enter these dimensions directly into the calculator and it handles the rest automatically.</p><p>Always order <strong>10% more material</strong> than the calculated figure to account for spillage, uneven sub-base and the fact that wet aggregates contain less dry material by volume than you expect.</p>',
    },
    {
      type: 'title',
      text: 'Mixing Order and the Bag Dosage System',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In professional construction, mixes are specified as <strong>"300kg concrete"</strong>, meaning 300kg of cement per finished cubic metre. To achieve this with a mixer: add water first, then coarse aggregate (gravel and sand), and finally add cement gradually to prevent it balling on the drum walls. This sequence ensures even distribution throughout the mix.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'Always Buy 10% Extra to Cover Wastage',
      html: '<p>Material waste on a concrete job is not optional — it is unavoidable. Sub-base irregularities, form overfill, mixer residue and the compaction factor all consume material beyond the theoretical volume. A <strong>10% surplus</strong> prevents the costly and time-critical problem of running short mid-pour with no way to restart the job.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Standard Concrete',
    mixH200Hint: 'For foundations and slabs',
    mixM40Label: 'Masonry Mortar',
    mixM40Hint: 'For walls and blockwork',
    mixM80Label: 'Floor Screed',
    mixM80Hint: 'For floors and renderings',
    modeDimsLabel: 'By Dimensions',
    modeDirectLabel: 'Direct m³',
    labelLength: 'Length',
    labelWidth: 'Width',
    labelThickness: 'Depth',
    labelVolume: 'Total Volume (m³)',
    binderCementLabel: 'Cement',
    binderLimeLabel: 'Lime',
    summaryLabel: 'Total to fill:',
    resUnitSacks: 'Bags (25kg)',
    resUnitShovels: 'Shovels',
    resUnitLitres: 'Litres',
    resLabelCement: 'Portland Cement',
    resLabelLime: 'Hydraulic Lime',
    resLabelSand: 'Sand / Aggregate',
    resLabelWater: 'Clean Water',
    proportionsTitle: 'Proportions for Selected Mix',
    propLabelSand: 'Sand',
    propLabelGravel: 'Gravel',
    adviceH200: 'Ideal for columns, slabs and load-bearing structures.',
    adviceM40: 'Perfect for laying brick or block walls.',
    adviceM80: 'Use this for highly resistant floor screeds.',
    adviceLimeH200: 'Lime concrete is more flexible but takes longer to set.',
    priceTotalLabel: 'Estimated Budget',
    priceSackLabel: 'Bag',
    priceSandLabel: 'Sand (m³)',
    priceDisclaimer: 'Indicative market prices. Adjust to your local supplier.',
  },
};
