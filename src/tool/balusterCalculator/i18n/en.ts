import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';

const slug = 'baluster-calculator';
const title = 'Baluster Calculator: Exact Railing Spacing';
const description =
  'Calculate the exact spacing between balusters or pickets for railings, complying with the 4-inch (10 cm) safety rule. Automatic layout plans.';

const faqData = [
  {
    question: 'What is the maximum legal distance between balusters?',
    answer:
      'In most international building codes (IRC in the US, CTE in Spain), the clear space between railing elements must not allow the passage of a 4-inch (10 cm) sphere to prevent childhood accidents.',
  },
  {
    question: 'How is spacing measured: on center or clear span?',
    answer:
      "Our calculator provides both. 'Clear span' is the actual gap between balusters (critical for safety), while 'on-center' distance is used to mark where to drill or fasten each baluster.",
  },
  {
    question: 'What if the spacing does not come out even?',
    answer:
      'The calculator automatically adjusts the number of balusters so the first and last gap are identical, ensuring visual symmetry and strict compliance with the maximum allowed gap.',
  },
  {
    question: 'Is welding or screwing better for balusters?',
    answer:
      'It depends on the material. For steel, welding offers maximum structural rigidity. For wood or aluminum, mechanical anchors or through-bolts are used. The railing must withstand a horizontal load of at least 0.8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Measure the total length',
    text: 'Measure the exact distance between the first and last post where the railing will be installed.',
  },
  {
    name: 'Define the baluster thickness',
    text: 'Measure the width of a single baluster (e.g. 2x2 cm for square tube, or diameter if round).',
  },
  {
    name: 'Set the maximum gap',
    text: 'Enter the desired maximum spacing (10 cm recommended to comply with safety codes).',
  },
  {
    name: 'Get installation marks',
    text: 'Review the list of exact positions for drilling to ensure a symmetric and safe layout.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    {
      name: 'IRC - International Residential Code (USA)',
      url: 'https://codes.iccsafe.org/content/IRC2021',
    },
    {
      name: 'IBC - International Building Code',
      url: 'https://codes.iccsafe.org/content/IBC2021',
    },
    {
      name: 'CTE - Código Técnico de la Edificación (Spain)',
      url: 'https://www.codigotecnico.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Definitive Guide: How to Calculate Baluster Spacing for Railings',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Designing a safe and aesthetically perfect railing is an art that combines mathematical precision with building code compliance. Whether for a terrace, balcony, or interior staircase, correctly calculating balusters (or pickets) is the most critical step of the project. A calculation error not only ruins the visual symmetry but can make your structure illegal and unsafe.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Why is this calculation so important?',
      html: '<p>It\'s not just about "filling the gap." It\'s about complying with the <strong>4-Inch Sphere Rule (10 cm)</strong>, an international safety standard designed to prevent childhood accidents.</p>',
    },
    {
      type: 'title',
      text: '1. Safety Code: The 10 cm Sphere Rule',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Before cutting the first piece of wood or metal, you must understand the "why" behind the math. The International Residential Code (IRC) in the United States, as well as the CTE (Código Técnico de la Edificación) in Spain, establishes a clear rule: <em>"The clear space between vertical elements must not allow passage of a sphere 4 inches (10 cm) in diameter."</em>',
    },
    {
      type: 'paragraph',
      html: "This measurement is not arbitrary. It is the average diameter of a young child's head (generally under 1 year old). If a child can fit their body through but their head gets stuck, the risk of suffocation is extremely high. If they can fit their head through, they can fall into the void. Therefore, the goal of our <strong>Baluster Calculator</strong> is not just aesthetic — it saves lives.",
    },
    {
      type: 'title',
      text: '2. The Math Problem: The Fencepost Error',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In programming and construction, there is a classic problem called the <em>"Fencepost Error"</em>. If you want to build a 10-meter fence with posts every meter, how many posts do you need? The intuitive answer is 10, but the correct answer is 11.',
    },
    {
      type: 'paragraph',
      html: 'With balusters something similar occurs, but more complex, because the width of the baluster itself occupies space. The formula used by our tool solves this system of equations for you:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Step A: Count Gaps',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>First we determine how many balusters theoretically fit using the maximum allowed space. We round this number up to ensure the resulting gaps are <em>smaller</em> than the maximum.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Step B: Recalculate Exact Gap',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Once we know the exact number of balusters (n), we calculate how much space "remains" after subtracting all the wood width, and divide it equally among the gaps (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Step-by-Step Installation Guide',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Having the numbers is only half the battle. Here we explain how to transfer those figures from paper (or screen) to the reality of your project.',
    },
    {
      type: 'title',
      text: 'Step 1: Precision Measurement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Measure the <strong>internal</strong> distance between post and post. Do not measure from the center of the post. You need to know the exact clear span you will fill (L). If your railing has several sections, measure each one individually; buildings are rarely perfectly square and a 0.5 cm error can ruin the symmetry.',
    },
    {
      type: 'title',
      text: 'Step 2: Find the Center',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The number one beginner mistake is starting to place balusters from one end toward the other. This almost always results in a final gap of an odd size, breaking visual harmony.<ul><li>Mark the <strong>exact center</strong> of the railing (L / 2).</li><li>Decide whether you want a <em>baluster</em> or a <em>gap</em> at the center.</li><li>If you want a baluster at center: mark half the baluster width on each side of your center mark.</li><li>If you want a gap at center: mark half the gap distance (g / 2) on each side.</li></ul>',
    },
    {
      type: 'title',
      text: 'Step 3: Make a Spacer Block',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Do not use the tape measure for each baluster. Cumulative human error will cause the last baluster to be off by several centimeters. The professional approach is to cut a block of wood with the exact gap measurement (g) from our calculator.',
    },
    {
      type: 'paragraph',
      html: 'Use this block as a physical template. Place a baluster, put the block, place the next baluster tight against the block, and fasten it. This guarantees millimeter-level consistency.',
    },
    {
      type: 'title',
      text: '4. Materials and Tools Needed',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Equipment for a professional finish',
      html: '<ul><li>High-precision tape measure</li><li>Carpenter pencil</li><li>Bubble level (for verticality)</li><li>Miter saw (for clean cuts)</li><li>Drill and wood screws</li><li>Spacer blocks (made to measure)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Additional Technical Questions',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'What if the last gap does not fit?',
      html: "<p>If you've used our calculator, this shouldn't happen. However, in the real world, wood warps and posts aren't always straight. If at the end you're off by 1-2 mm, it's imperceptible. If you're off by 1 cm, check your spacer blocks — you've probably been losing mm at each step.</p>",
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Can I space balusters further apart if I have no children?',
      html: '<p>Legally, no. Building codes apply to the dwelling, not the current occupants. If you ever sell the house, a non-compliant railing will be a problem during inspection. Also, visitors (nephews, grandchildren) may be at risk.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Wood, Metal or Glass?',
      html: '<p>This calculator works for <strong>any repetitive vertical element</strong>. If you use horizontal steel cables, different regulations apply (they typically must not allow climbing, "ladder effect"). For glass, it is considered a continuous panel and spacing does not apply — impact resistance does.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"Architecture is the will of an epoch translated into space."</em></p><p>We hope this tool helps you build safer and more beautiful spaces. Always consult your local building code, as there may be specific variations on minimum height (typically 36-42 inches) or force loads.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensions',
    sectionDesc: 'Enter your railing measurements',
    labelRailLength: 'Total Length (L)',
    labelBalusterWidth: 'Baluster Width (w)',
    labelMaxGap: 'Maximum Gap (g)',
    blueprintTitle: 'Assembly Plan',
    blueprintRef: 'REF: BAL-001 // SCALE: AUTO',
    labelRequired: 'Balusters Required',
    labelExactGap: 'Exact Gap',
    labelOnCenter: 'On Center',
    labelTotalSpaces: 'Total Spaces',
    labelCoveredLength: 'Covered Length',
    labelDisclaimer: '* Dimensions shown are approximate for visualization.',
  },
};
