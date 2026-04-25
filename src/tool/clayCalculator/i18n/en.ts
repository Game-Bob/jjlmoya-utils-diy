import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'clay-shrinkage-calculator';
const title = 'Clay Shrinkage Calculator: Exact Dimensions for Ceramics';
const description =
  'Calculate clay shrinkage during drying and firing. Design ceramic pieces with the exact final dimensions you need.';

const faqData = [
  {
    question: 'Why does clay shrink?',
    answer:
      'Clay shrinks primarily due to water loss. First comes drying (evaporation of water between particles) and then firing (removal of chemically combined water and particle sintering).',
  },
  {
    question: 'What is the normal shrinkage percentage?',
    answer:
      'It depends on the clay body. Earthenware typically shrinks 5-10%, while stoneware and porcelain can reach 12-15% due to greater vitrification.',
  },
  {
    question: 'How do I measure the shrinkage of my own clay?',
    answer:
      'Create a test tile exactly 10cm long. Let it dry and measure it (drying shrinkage). Fire it to the final temperature and measure again (total shrinkage). The difference gives you the exact percentage.',
  },
  {
    question: 'What happens if my piece cracks while drying?',
    answer:
      'This usually indicates drying too fast or unevenly. Thin areas lose water before thick ones, creating tension. Cover pieces with plastic to slow the process.',
  },
];

const howToData = [
  {
    name: 'Measure the piece when wet',
    text: 'Take the exact dimensions of your piece right after throwing or hand-building, while it still retains all its moisture.',
  },
  {
    name: 'Enter the shrinkage coefficient',
    text: 'Check your clay packaging for the total shrinkage percentage (drying + firing) provided by the manufacturer.',
  },
  {
    name: 'Get the expected final dimensions',
    text: 'Use the calculator to know how much your piece will measure after firing and plan your fits or lids accordingly.',
  },
  {
    name: 'Reverse calculation for targets',
    text: 'If you need your piece to measure exactly X cm when finished, use the reverse calculation to find what size it should be on the wheel.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
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
      text: 'The Physics of Clay: Shrinkage and Expansion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Clay is a living material that changes size throughout the ceramic process. From the moment you shape a wet piece to when it comes out of the kiln, it can lose between 8% and 15% of its original size. Calculating this shrinkage is essential for creating pieces with the exact dimensions you need.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Shrinkage Phases',
          html: '<p><strong>1. Drying (Wet → Dry):</strong> As water is lost, clay particles draw together. This is the largest shrinkage phase (4-8%). Thick pieces can crack if they dry too quickly.</p><p><strong>2. Firing (Dry → Bisque):</strong> Between 900-1000°C, clay undergoes irreversible chemical changes. Additional shrinkage of 2-4%. The piece becomes porous but strong.</p><p><strong>3. Vitrification (High Temperature):</strong> At 1200-1300°C, the clay vitrifies. Final shrinkage of 1-3%. Stoneware and porcelain reach maximum density.</p>',
        },
        {
          type: 'card',
          title: 'Influencing Variables',
          html: '<ul><li><strong>Clay type:</strong> Red clays shrink less (8-10%) than porcelains (12-15%).</li><li><strong>Wall thickness:</strong> Thin walls shrink more uniformly than thick ones.</li><li><strong>Firing temperature:</strong> Higher temperatures mean greater shrinkage and vitrification.</li><li><strong>Grog content:</strong> Adding grog (pre-fired ground clay) reduces shrinkage.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Practical Applications',
      level: 2,
    },
    {
      type: 'title',
      text: 'Mold Design',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If you need a mug with an 8cm final diameter, and your clay shrinks 12%, you must make the mold <strong>9.1cm</strong>. This reverse calculation is critical in production runs.',
    },
    {
      type: 'title',
      text: 'Lids and Assemblies',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When creating pieces that must fit together (teapot + lid, jar + lid), both must be made with the same clay and fired together to ensure equal shrinkage. A 1% difference can ruin the fit.',
    },
    {
      type: 'title',
      text: 'Monumental Sculpture',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In large pieces, differential shrinkage between thick and thin sections can cause cracks. Experienced potters compensate by leaving thicker walls in areas they know will shrink more.',
    },
  ],
  ui: {
    labelInitialSize: 'Initial Size (mm)',
    labelShrinkage: 'Shrinkage Percentage (%)',
    labelLow: 'Low (Earthenware)',
    labelMedium: 'Medium (Stoneware)',
    labelHigh: 'High (Porcelain)',
    presetTerracota: 'Earthenware (8%)',
    presetGres: 'Stoneware (12%)',
    presetPorcelana: 'Porcelain (15%)',
    labelResult: 'Result',
    labelFinalSize: 'Final Size:',
    labelLoss: 'Total Loss:',
    tipText:
      'To calculate the initial size needed to achieve a specific final size, divide the desired size by (1 - shrinkage/100).',
    labelInitialBadge: 'Initial:',
    labelFinalBadge: 'mm final',
    labelLossBadge: 'Loss:',
    labelInitialArea: 'Initial Area',
    labelFinalArea: 'Final Area',
  },
};
