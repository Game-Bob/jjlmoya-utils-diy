import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pythagorean-right-angle-calculator-3-4-5-rule';
const title = '直角计算器（勾股定理）：完美直角的 3 4 5 法则';
const description = '使用勾股定理和 3-4-5 法则验证结构是否完美垂直（90°）。建筑、木工和 DIY 项目的必备工具。';

const faqData = [
  {
    question: '什么是 3-4-5 法则？',
    answer: '3-4-5 法则是勾股数的一种。如果一个直角三角形的边在任何比例下分别为 3、4 和 5 个单位，则较短边之间的夹角正好是 90 度。这种经过现场验证的方法已在建筑行业使用了几个世纪。',
  },
  {
    question: '如何使用此计算器？',
    answer: '输入形成拐角的两面墙（边 A 和边 B）的长度。计算器将显示完美 90 度角所需的对角线长度。然后测量您的实际对角线并输入，以验证您的拐角是否真正垂直。',
  },
  {
    question: '如果我的对角线不同怎么办？',
    answer: '如果您的测量对角线与理想值不同，计算器会显示偏差。绿色表示完美，黄色表示可以接受，红色表示不垂直。它还会告诉您应该扩大还是缩小角度。',
  },
  {
    question: '这对于建筑工程来说足够精确吗？',
    answer: '是的。勾股定理在数学上是精确的。使用卷尺，您就可以达到建筑级的精度，而无需专业工具或高级技能。',
  },
  {
    question: '我可以在英寸和英尺之间切换吗？',
    answer: '是的。对于小型项目选择英寸，对于大型结构选择英尺。所有数值都会立即转换，不会丢失数据。',
  },
];

const howToData = [
  { name: '选择单位', text: '对于精细工作选择英寸，对于大型结构选择英尺。您可以随时切换。' },
  { name: '测量两边', text: '测量形成您要检查的拐角的两面墙（边 A 和边 B）的长度。' },
  { name: '检查理想对角线', text: '计算器会告诉您完美 90 度角所需的对角线长度。' },
  { name: '测量您的对角线', text: '使用卷尺测量您的实际对角线。将其输入到可选字段中。' },
  { name: '查看状态', text: '绿色 = 完美直角。黄色 = 可接受。红色 = 不垂直。根据建议进行调整。' },
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '勾股定理在实践中的应用', level: 2 },
    { type: 'paragraph', html: '完美的 90 度角是高质量建筑的基础。墙壁必须垂直，地基必须方正，框架必须平直。勾股定理提供了一种数学上保证的方法：a² + b² = c²。' },
    { type: 'title', text: '为什么 3-4-5 法则有效', level: 3 },
    { type: 'paragraph', html: '3-4-5 法则是最简单的勾股数。无论您使用英寸、英尺还是任何其他单位进行测量：边长为 3、4 和 5 个单位就能保证 90 度角。这已在数学上得到证明，并在建筑行业经过了几个世纪的测试。' },
    { type: 'title', text: '无需专业工具的精度', level: 3 },
    { type: 'paragraph', html: '与可能会损坏或失准的水准仪或直角尺不同，勾股定理是永恒不变的。只需一把卷尺，您就可以在任何比例下验证任何拐角。此计算器免去了心算，并确保了准确性。' },
    { type: 'title', text: '从理论到实践指导', level: 3 },
    { type: 'paragraph', html: '此计算器将抽象的数学转化为实用的现场操作说明。如果您的对角线有偏差，它会准确地告诉您调整多少以及调整的方向。将理论转化为工地的实际成果。' },
  ],
  ui: {
    titleMain: '直角计算器（勾股定理）',
    labelInputData: '测量值',
    labelUnitSelection: '单位',
    btnUnitInches: '英寸',
    btnUnitFeet: '英尺',
    btnUnitCentimeters: '厘米',
    labelSideA: '边 A',
    labelSideB: '边 B',
    labelMeasuredDiagonal: '测量对角线（可选）',
    labelResults: '结果',
    labelIdealDiagonal: '理想对角线',
    labelDeviation: '偏差',
    labelStatus: '状态',
    labelVerification: '直角验证',
    btnClear: '清除',
    btnCopyResults: '复制结果',
    labelPresets: '快速预设',
    unitInches: 'in',
    unitFeet: 'ft',
    unitCentimeters: 'cm',
    tooltipOptional: '输入测得的对角线以验证 90 度直角',
    tooltipPresets: '不同比例下的 3-4-5 法则',
    statusPerfect: '完美 90 度直角',
    statusAcceptable: '偏差在可接受范围内',
    statusWarning: '轻微偏差',
    statusError: '不垂直',
    statusReady: '就绪',
    msgIdealCalculated: '已计算理想对角线',
    actionOpen: '扩大角度',
    actionClose: '缩小角度',
    descLarger: '偏大',
    descSmaller: '偏小',
    descCorrection: '需要修正',
  },
};
