import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lime-mortar-calculator';
const title = 'Lime Mortar Mix Ratios: Proportions for Heritage Render and Plaster';
const description =
  'Calculate exact lime mortar mix ratios for traditional render, scratch coat and finish coat. Based on Vitruvian proportions used in heritage restoration.';

const faqData = [
  {
    question: 'What is the difference between NHL 2, NHL 3.5 and NHL 5 lime?',
    answer:
      'NHL stands for Natural Hydraulic Lime. The number indicates compressive strength (MPa). NHL 2 is the softest and most breathable, ideal for soft stone and historic render. NHL 3.5 is a versatile all-purpose lime mortar. NHL 5 is the strongest, used for exposed or below-ground work. For most heritage restoration, NHL 3.5 is the standard choice.',
  },
  {
    question: 'What is the correct lime mortar mix ratio for a scratch coat?',
    answer:
      'For a traditional scratch coat (trullissatio), the Vitruvian proportion is 1:3 (one part NHL lime to three parts coarse sand by volume). This creates a strong, slightly rough surface that keys the next coat. For mine sand, reduce to 1:2 to compensate for the irregular grain shape.',
  },
  {
    question: 'How long does NHL lime mortar take to cure?',
    answer:
      'NHL lime mortar begins to set hydraulically within hours, but full carbonation takes months or years. Initial hardening occurs in 3-7 days; protect from frost for at least 48 hours. Full strength and breathability are reached after several months of slow curing. Avoid painting or sealing the surface for at least 6 months.',
  },
  {
    question: 'Can I use lime mortar on a modern cement-rendered wall?',
    answer:
      'No. Lime mortar is more flexible and breathable than cement. Applying lime over cement traps moisture, causing spalling. For heritage restoration, the correct approach is to remove all cement render and rebuild using compatible lime mortars throughout all layers.',
  },
];

const howToData = [
  {
    name: 'Identify the substrate',
    text: 'Check whether you are working on limestone, old brick, or sandstone. The substrate must be clean, sound, and slightly damp before applying lime mortar.',
  },
  {
    name: 'Select aggregate grading',
    text: 'Use coarse sharp sand (2-5mm) for the scratch coat. Use washed building sand (0.5-2mm) for the float coat. Use marble dust or fine sand for the finish coat.',
  },
  {
    name: 'Mix dry before adding water',
    text: 'Combine NHL lime and aggregate dry first, then add water gradually. The mix should be plastic but not runny. For NHL 3.5, a 1:2.5 mix by volume is typical.',
  },
  {
    name: 'Apply and scratch back',
    text: 'Apply each coat with a steel float, then scratch back with a devil float to open the surface and key the next layer. Allow each coat to stiffen before applying the next.',
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
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
      text: 'Complete Guide to NHL Lime Mortar for Heritage Restoration',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Natural Hydraulic Lime (NHL) mortars are the material of choice for heritage restoration, conservation projects, and traditional masonry. Unlike cement, which traps moisture and damages old stone, NHL lime mortar is breathable, flexible, and compatible with historic substrates. This calculator uses the proportional system codified by the Roman architect Vitruvius in 25 BC — a system still valid today.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Why lime mortar compatibility matters',
      html: '<p>Using cement mortar in historic buildings causes severe damage. Cement is <strong>harder than the surrounding stone</strong>, meaning thermal movement cracks the stone instead of the joint. It also traps moisture behind impermeable render, causing spalling and frost damage. Lime mortar is always sacrificial: it crumbles before the stone does.</p>',
    },
    {
      type: 'title',
      text: 'The Three Vitruvian Layers: Trullissatio, Arenato, Marmorato',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vitruvius described a three-coat render system that remains the standard for lime plasterwork. Each coat has a specific function and aggregate size: <strong>Trullissatio</strong> (scratch coat, 1:3, 30mm) bonds to the substrate; <strong>Arenato</strong> (float coat, 1:2, 16mm) creates a flat, even surface; <strong>Marmorato</strong> (finish coat, 1:1, 4mm) provides the final texture, traditionally with marble dust.',
    },
    {
      type: 'title',
      text: 'NHL Grades and Their Applications',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:feather',
          title: 'NHL 2: Soft Masonry',
          html: '<p>Compressive strength: 2-7 MPa. Best for very soft stone (tufa, sandstone), interior work, and conservation of fragile historic fabric. The most breathable NHL grade.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:home-outline',
          title: 'NHL 3.5: General Heritage Use',
          html: '<p>Compressive strength: 3.5-10 MPa. The most versatile NHL grade, suitable for brick, medium limestone, exposed exterior render, and most heritage restoration work.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:shield-outline',
          title: 'NHL 5: Exposed and Hydraulic',
          html: '<p>Compressive strength: 5-15 MPa. Used for below-ground work, plinths, exposed copings, and areas subject to water saturation. Less breathable than NHL 2 or 3.5.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Aggregate Selection for Lime Mortar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The aggregate is not a filler — it is <strong>60-75% of your mortar by volume</strong>. Sand quality directly determines mortar quality. Sharp washed sand with angular grains creates stronger mechanical keying. Rounded river sand gives a more workable mix but lower strength. For heritage pointing, always try to match the colour and texture of the original mortar through petrographic analysis.',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Vitruvius, De Architectura Book VII, Ch. 2',
      html: '<p><em>"When the lime is slaked, let it be beaten with iron tools [...] if it stick to the tool and come away clean, it shows the lime is rich and well slaked; if it is soft and heavy, it is deficient in lime."</em></p><p>Two thousand years of empirical testing, condensed into a single field test that still works today.</p>',
    },
  ],
  ui: {
    leftTitle: 'Vitruvian System',
    centerTitle: 'Available Materials',
    rightTitle: 'Estimated Coverage',
    btnCal: 'Lime',
    btnArena: 'Sand',
    labelCalPasta: 'Putty (1.30 kg/L)',
    labelCalPolvo: 'NHL Powder (0.65 kg/L)',
    labelQuantity: 'Available quantity:',
    labelNeedsAlso: 'You will also need:',
    labelProportion: 'Ratio: ',
    labelCoverage: 'Coverage:',
    labelThickness: 'Total thickness:',
    labelLayers: 'Coats:',
    labelWasteFactor: 'Waste factor: 20%',
    layersSingular: 'coat',
    layersPlural: 'coats',
    materialCal: 'Lime',
    materialArena: 'Sand',
    materialMarmol: 'Marble',
    phaseDescTrullissatio: 'Rough scratch coat. 2 coats of 15mm. Mix ratio 1:3 (Lime:River sand).',
    phaseDescArenato: 'Float coat. 2 coats of 8mm. Mix ratio 1:2 (Lime:Washed sand).',
    phaseDescMarmorato: 'Fine finish coat. 1 double coat of 4mm. Mix ratio 1:1 (Lime:Marble dust).',
    granulometryTitle: 'Aggregate Grading',
    grainTitleCoarse: 'Coarse Sand',
    grainSubtitleCoarse: 'Sharp River Sand',
    grainUsageCoarse: 'Scratch coat',
    grainTitleMedium: 'Medium Sand',
    grainSubtitleMedium: 'Washed Building Sand',
    grainUsageMedium: 'Float coat',
    grainTitleFine: 'Fine Powder',
    grainSubtitleFine: 'Marble Dust (Marmolina)',
    grainUsageFine: 'Finish coat',
    specSize: 'Size:',
    specUse: 'Use:',
    specDensity: 'Density:',
  },
};
