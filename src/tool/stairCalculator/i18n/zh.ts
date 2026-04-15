import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'stair-calculator';
const title = '楼梯计算器：设计与施工';
const description = '计算楼梯的精确尺寸：踏步高度、踏步深度、倾斜角度及所需材料。遵循布隆德尔法则（Blondel Law），避免施工错误。';

const faqData = [
  {
    question: '什么是布隆德尔法则（Blondel Law）？',
    answer: '这是一种确保楼梯舒适度的公式，即两个踏步高度（踢面）加上一个踏步深度（踏面）的和宜在 62 至 64 厘米之间（2H + W = 63）。该法则是基于人类平均步长制定的。',
  },
  {
    question: '踏步高度的最大限制是多少？',
    answer: '住宅建筑建议不要超过 18-19 厘米。公共空间根据规范，最大高度通常限制在 17.5 厘米。过高的踏步容易疲劳且存在安全隐患。',
  },
  {
    question: '空间有限时如何计算？',
    answer: '如果水平空间有限，您需要增加踏步数量（从而降低踏步高度）或接受较大的坡度（舒适度会降低）。计算器可协助您找到最佳平衡点。',
  },
  {
    question: '混凝土体积计算包括哪些部分？',
    answer: '计算总混凝土体积时会考虑踏步部分以及斜支撑板（支撑踏步的倾斜平面）。忽略这部分体积会导致订购的混凝土量不足。',
  },
  {
    question: '为什么累积放样很重要？',
    answer: '单独测量每个踏步会产生累积误差。累积放样法可确保所有踏步的高度完全一致，从而避免风险并提高使用舒适度。',
  },
];

const howToData = [
  { name: '测量落差', text: '测量下层完成面到上层完成面的总垂直落差 (H)。这是所有计算的核心数据。' },
  { name: '输入可用长度', text: '可选：如果有空间限制，请输入可用的水平长度。无限制则输入 0。' },
  { name: '调整踏步数量', text: '计算器会给出一个建议数量，您可以根据需要进行调整。观察布隆德尔指标：显示绿色 (62-64 cm) 表示最舒适。' },
  { name: '定义施工参数', text: '指定斜板厚度、面层厚度、混凝土强度和楼梯宽度。这些数据直接影响最终的物料估算。' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与规范',
  bibliography: [
    { name: 'CTE 建筑安全与无障碍性规范', url: 'https://www.codigotecnico.org/' },
    { name: '布隆德尔法则 - 维基百科', url: 'https://en.wikipedia.org/wiki/Stairs#Blondel\'s_Rule' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '楼梯几何设计：布隆德尔法则', level: 2 },
    { type: 'paragraph', html: '楼梯的舒适度取决于人类步幅。行走时，人体需要一种可预测的节奏。布隆德尔法则规定 2 个高度 + 1 个深度 = 62-64 cm 是确保最高舒适度与安全的标准。' },
    { type: 'title', text: '结构与材料控制', level: 3 },
    { type: 'paragraph', html: '对于专业施工，考虑混凝土斜板（支撑台阶的斜面）至关重要。忽略这部分体积会导致混凝土订购不足。计算器已自动整合此项计算。' },
    { type: 'title', text: '放样与累积误差', level: 3 },
    { type: 'paragraph', html: '在建筑施工中，最大的敌人是毫米级的误差。如果分开测量每个台阶，微小误差的累积可能会导致最后一步比第一步高或低 5 厘米。' },
  ],
  ui: {
    labelGeometry: '几何形状与空间',
    labelTotalHeight: '总落差 (H)',
    labelAvailableLength: '可用长度 (L)',
    labelAvailableLengthHint: '输入 0 以进行无限制计算。',
    labelNumSteps: '踏步数量',
    labelOptimize: '优化 (18cm)',
    labelWork: '工程与安装',
    labelSlabThickness: '斜板厚度 (e)',
    labelFinishThickness: '面层厚度',
    labelCeilingHeight: '净空高度',
    labelStairWidth: '楼梯宽度',
    labelConcreteStrength: '混凝土强度',
    optionH150: 'C15 (垫层)',
    optionH200: 'C20 (普通住宅)',
    optionH250: 'C25 (结构用)',
    labelRiser: '踏步高度 (H)',
    labelTread: '踏步深度 (W)',
    labelSlope: '坡度',
    labelRealAdvance: '实际水平长度',
    labelLayoutTable: '放样与施工',
    colStep: '踏步',
    colConcreteHeight: '混凝土高度',
    colFinishedHeight: '完成面高度',
    colAdvance: '水平进深',
    adjustedNote: '已调整',
    labelMaterials: '物料估算与物料量',
    labelTotalConcrete: '混凝土总量:',
    labelCement: '水泥 (25kg/袋):',
    labelSand: '所需沙子:',
    unitM3: 'm³',
    unitBags: '袋',
    unitLiters: '升',
    btnShare: '分享',
    btnPrint: '打印 PDF',
    statusOptimalComfort: '绝佳舒适',
    statusMarginLimit: '极限边缘',
    statusCriticalDesign: '设计临界',
    statusRiserError: '尺寸错误',
    msgInvalidValues: '无效数值',
    msgInsufficientSpace: '空间不足',
    msgDangerousTread: '{val}cm 的深度非常危险。',
    msgBlondelValue: '布隆德尔值：{val}cm。',
    msgOptimalStep: '舒适步距：{val}cm。',
    msgLowCeiling: '碰头风险 (<2m)',
    msgCalculating: '计算中...',
    msgEnterMeasurements: '请输入尺寸',
    shareTitle: '工程摘要',
    shareMessage: '楼梯：落差={h}cm, 段数={n}, 高度={ch}cm, 体积={vol}m3',
  },
};
