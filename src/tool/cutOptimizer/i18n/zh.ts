import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'cut-optimizer';
const title = '木材与板材切割优化计算器';
const description =
  '免费的木材、金属或管道切割优化计算器。通过 1D 和 2D 装箱算法最小化损耗。木工、金工及 DIY 装修的理想选择。';

const faqData = [
  {
    question: '什么是 1D 切割优化？',
    answer:
      '这是一种使用数学算法（如装箱问题 - Bin Packing Problem）来确定如何从标准长度的原材料（方木、型材、管道）中切割出较小零件，并使损耗降至最低的工具。',
  },
  {
    question: '为什么要包含锯缝宽度 (Kerf)？',
    answer:
      '锯子每次切割材料时，都会损耗几毫米（通常根据锯片不同在 2mm 到 4mm 之间）。如果不计算这个空间，您列表中的最后几个零件将会比计划的要短。',
  },
  {
    question: '我可以混合不同长度的零件吗？',
    answer:
      '可以，我们的计算器接受任何长度和数量的组合。算法将评估所有可能的组合，并优先考虑原材料的最大化利用。',
  },
  {
    question: '如何保存我的切割计划？',
    answer:
      '优化完成后，您可以打印该页面或对可视化图表进行截图。这将在车间作业时作为物理指南，以免搞乱切割顺序。',
  },
];

const howToData = [
  {
    name: '定义原材料 (Stock)',
    text: '输入可用方木或型材的总长度（例如 2400mm 或 6000mm）。',
  },
  {
    name: '设置锯缝宽度 (Kerf)',
    text: '设置锯片每次切割时移除的毫米数，以确保计算达到毫米级精度。',
  },
  {
    name: '列出所需零件',
    text: '输入项目中每个所需零件的长度和数量。',
  },
  {
    name: '执行优化计算',
    text: '获取最高效的切割图表以及产生的确切损耗百分比。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
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
      text: '切割优化终极指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '切割优化（技术上称为<strong>原材料切割问题 - Cutting Stock Problem</strong>）是工业工程中最引人入胜的物流挑战之一。对于包含 20 个零件和 5 个库存排样的项目，存在数百万种可能的组合。计算机算法可以在几毫秒内找到最佳解决方案，将通常 15% 的损耗降至 5% 以下。',
    },
    {
      type: 'title',
      text: '1D 线性切割与 2D 板材切割',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: '方木与型材的线性切割',
      html: '<p>在<strong>线性切割 (1D)</strong> 中，优化仅在长度这单一维度上进行。材料的宽度被视为常数。它是方木、梁材、金属和铝型材、PVC 或铜管以及丝杆的理想选择。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: '板材与薄板的板材切割',
      html: '<p>在<strong>板材切割 (2D)</strong> 中，管理宽度和长度两个维度。该工具有基于断截式切削算法，每次切割都贯穿边缘。非常适合各种人造板（MDF、刨花板）、胶合板、玻璃、亚克力和金属板材。</p>',
    },
    {
      type: 'title',
      text: '关键因素：锯缝宽度 (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kerf</strong> 是每次切割时移除的材料。标准的台锯锯片每次切割消耗 3.0mm 到 3.2mm。手持圆锯消耗 1.5 到 2.5mm。亚克力的激光切割仅消耗 0.1 到 0.3mm。在 2400mm 的方木上进行 10 次切割的项目中，忽略锯缝宽度可能会导致您损失 30mm 到 32mm 的可用材料。',
    },
    {
      type: 'title',
      text: 'Best Fit Decreasing 算法',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: '优化计算器的内部运作原理',
      html: '<p>优化器的核心使用 <strong>Best Fit Decreasing (BFD)</strong> 策略：首先将所有零件按长度从大到小排序（较大的零件更难安置）。然后，针对每个零件，寻找现有的余料中能够容纳它并留下最少剩余空间的合适位置。只有当任何余料都无法容纳时，才会启用新的原材料。与随机选择相比，这一过程能显著降低损耗。',
    },
  ],
  ui: {
    modeLinearLabel: '线性 (排条)',
    modePanelLabel: '板材 (排版)',
    configTitle: '材料配置',
    labelStockLength: '材料长度 (mm)',
    labelStockWidth: '材料宽度 (mm)',
    labelKerf: '锯片厚度 / 锯缝 (mm)',
    cutsTitle: '切割列表',
    placeholderLength: '长',
    placeholderWidth: '宽',
    placeholderQty: '数量',
    btnRemoveTitle: '删除',
    statStockUsed: '使用材料',
    statTotalCuts: '总切割数',
    statWaste: '总损耗',
    statEfficiency: '效率',
    vizTitle: '切割可视化',
    emptyState: '添加零件并点击计算以查看切割计划。',
    noValidCuts: '无法生成有效的切割。请检查尺寸。',
    noValidPanels: '无法生成有效的排版。请检查零件是否超出板材尺寸。',
    stockLabel: '材料',
    panelLabel: '板材',
    wasteLabel: '损耗：',
    effLabel: '效率：',
  },
};
