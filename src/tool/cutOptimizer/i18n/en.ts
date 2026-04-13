import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'cut-optimizer';
const title = '1D and 2D Cut Optimizer: Minimize Material Waste for Wood and Metal';
const description =
  'Free cut optimizer for wood, metal, and pipes. Calculate the most efficient cutting plan using the Best Fit Decreasing algorithm. Supports 1D linear and 2D panel optimization with kerf compensation.';

const faqData = [
  {
    question: 'What is a 1D cut optimizer?',
    answer:
      'A 1D cut optimizer uses the Bin Packing algorithm to determine how to cut smaller pieces from standard-length stock material (timber, metal profiles, pipes) with minimum waste. It solves the Cutting Stock Problem computationally in milliseconds.',
  },
  {
    question: 'Why does kerf width matter in cut planning?',
    answer:
      'Every saw cut consumes material equal to the blade thickness (kerf). A standard table saw removes 3mm per cut. On a project with 10 cuts, that is 30mm of lost material. Ignoring kerf means your last pieces will be shorter than planned.',
  },
  {
    question: 'What is the difference between 1D and 2D cut optimization?',
    answer:
      '1D optimization handles linear material (boards, bars, pipes) by optimizing length only. 2D optimization handles sheet material (plywood, MDF, glass) by fitting rectangular pieces onto a larger sheet, optimizing both dimensions simultaneously.',
  },
  {
    question: 'How do I save my cut plan?',
    answer:
      'Print the page or take a screenshot of the visual cut diagram to use as a physical guide in your workshop. Annotate each bar with its number to follow the sequence without mistakes.',
  },
];

const howToData = [
  {
    name: 'Define the stock material',
    text: 'Enter the total length (and width for panels) of the stock material you have available.',
  },
  {
    name: 'Set the kerf width',
    text: 'Adjust the blade thickness in millimetres so the calculation accounts for material lost per cut.',
  },
  {
    name: 'List the required pieces',
    text: 'Enter the length and quantity of each piece needed for your project.',
  },
  {
    name: 'Run the optimization',
    text: 'Get the most efficient cut layout and the exact waste percentage generated.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Complete Guide to Cut Optimization',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cut optimization — technically known as the <strong>Cutting Stock Problem</strong> — is one of the most practically useful problems in combinatorial mathematics. For a project with 20 pieces and 5 bars of stock, there are millions of possible arrangements. A computational algorithm finds the near-optimal solution in milliseconds, reducing typical 15% material waste to under 5%.',
    },
    {
      type: 'title',
      text: 'Linear 1D vs Panel 2D Optimization',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Linear Optimization for Bars and Profiles',
      html: '<p><strong>Linear (1D) optimization</strong> handles material that is optimized by length alone: timber, aluminium profiles, steel sections, copper pipe, and threaded rod. The algorithm packs all required pieces onto the minimum number of stock lengths, accounting for saw kerf at every cut.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Panel Optimization for Sheet Materials',
      html: '<p><strong>Panel (2D) optimization</strong> handles sheet materials such as plywood, MDF, chipboard, glass, acrylic, and sheet metal. It uses a guillotine-cut algorithm, meaning every cut runs edge to edge — matching how table saws and panel saws actually operate.</p>',
    },
    {
      type: 'title',
      text: 'Understanding Kerf: The Hidden Material Loss',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>kerf</strong> is the width of material removed by the blade per cut. A standard table saw blade removes 3.0 to 3.2mm per pass. A circular hand saw removes 1.5 to 2.5mm. A laser cutter removes just 0.1 to 0.3mm. On a project with 10 cuts from a 2400mm board, a 3mm kerf costs you 30mm of usable material — enough to lose a whole small piece.',
    },
    {
      type: 'title',
      text: 'The Best Fit Decreasing Algorithm',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'How the Optimizer Works Under the Hood',
      html: '<p>The core algorithm uses the <strong>Best Fit Decreasing (BFD)</strong> strategy: pieces are sorted from largest to smallest, since large pieces are hardest to fit. For each piece, the algorithm scans all existing offcuts and places it in the one that leaves the least remaining space. Only when no existing offcut can accommodate the piece is a new stock bar opened. This approach typically achieves 95% or better material efficiency.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Linear (Bars)',
    modePanelLabel: 'Panel (Sheets)',
    configTitle: 'Material Configuration',
    labelStockLength: 'Stock Length (mm)',
    labelStockWidth: 'Stock Width (mm)',
    labelKerf: 'Blade Kerf (mm)',
    cutsTitle: 'Cut List',
    placeholderLength: 'Length',
    placeholderWidth: 'Width',
    placeholderQty: 'Qty',
    btnRemoveTitle: 'Remove',
    statStockUsed: 'Stock Used',
    statTotalCuts: 'Total Cuts',
    statWaste: 'Total Waste',
    statEfficiency: 'Efficiency',
    vizTitle: 'Cut Visualization',
    emptyState: 'Add cuts and run the optimizer to see the cut plan.',
    noValidCuts: 'Could not generate valid cuts. Check your measurements.',
    noValidPanels: 'Could not generate valid panels. Check that pieces fit within the sheet.',
    stockLabel: 'Stock',
    panelLabel: 'Panel',
    wasteLabel: 'Waste:',
    effLabel: 'Eff:',
  },
};
