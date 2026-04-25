import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'workshop-fraction-converter';
const title = '车间分数转公制转换器';
const description = '瞬间将分数英寸转换为毫米。为您的车间寻找最接近的标准螺栓、螺钉和套筒。专为沾满油污的手和戴手套的手指设计。';

const faqData = [
  {
    question: '为什么我需要将分数转换为毫米？',
    answer: '大多数现代工具和紧固件使用公制，但许多老式工具和规格仍在使用分数英寸。此转换器弥合了这一差距，帮助您找到精确的公制对应值或最接近的标准紧固件尺寸。',
  },
  {
    question: '1/2 英寸和 12.7 毫米有什么区别？',
    answer: '1/2 英寸正好等于 12.7 毫米 (0.5 × 25.4 = 12.7)。在标准尺寸下，由于制造商在两个系统中统一了常见的紧固件尺寸，公制和英制工具通常可以互换使用。',
  },
  {
    question: '为什么工具显示“最接近的紧固件”？',
    answer: '因为精确转换的结果通常介于标准紧固件尺寸之间。该工具会找到与您的测量值最接近的市售螺栓或套筒，以便您可以使用车间中的现有材料。',
  },
  {
    question: '木工精度和金属精度有什么区别？',
    answer: '在木工中，0.5 毫米的差异通常可以忽略不计。在金属加工和机械加工中，0.1 毫米至关重要。精度模式会提示适合您材料的容差范围。',
  },
  {
    question: '我可以离线使用这个工具吗？',
    answer: '可以。所有计算都在您的浏览器中进行。初次加载后，该工具可完全离线运行，非常适合在没有 WiFi 的车间使用。',
  },
  {
    question: '为什么工具包含历史记录？',
    answer: '在拆卸或处理包含多个零件的项目时，历史记录让您可以查阅测量值而无需重新输入，并帮助您在工作时建立零件清单。',
  },
];

const howToData = [
  {
    name: '选择测量类型',
    text: '选择“正向”将分数转换为毫米，或选择“反向”为您用卡尺测得的数值寻找分数。',
  },
  {
    name: '输入数值',
    text: '使用三列输入（整数、分子、分母）或点击快速预设按钮。步进按钮让您无需键入即可进行调整。',
  },
  {
    name: '查看结果',
    text: '结果显示精确转换值以及最接近的标准螺栓和套筒尺寸。视觉比例尺让您对比例有直观感受。',
  },
  {
    name: '保存到历史记录',
    text: '点击“保存到历史记录”以保留测量值供以后参考。历史记录会保存在您的浏览器中，即使关闭后也是如此。',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '为什么车间中的精密分数转换至关重要', level: 2 },
    { type: 'paragraph', html: '在专业或高要求的 DIY 车间中，“大约”的测量值往往会导致螺栓滑丝、接头松动或组装失败。本工具旨在弥补传统英制测量与公制系统精度之间的差距，确保您的车间项目保持专业级标准。' },
    { type: 'title', text: '标准转换：1/2" 与 12.7mm 的对比', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: '公制和英制系统可以互换吗？', html: '<p>许多人认为可以。虽然 1/2" 恰好是 12.7mm，但最接近的标准公制套筒是 13mm。使用错误的工具可能会磨圆螺栓头。我们的转换器会识别<strong>最接近的标准工具匹配</strong>，确保您永远不会损坏硬件。</p>' },
    { type: 'title', text: '木工与金属加工的公差', level: 3 },
    { type: 'paragraph', html: '公差要求因行业而异。在<strong>木工</strong>中，1/64" (0.4mm) 的公差通常是可以接受的。在<strong>金属加工和机械加工</strong>中，0.1mm 甚至 0.01mm 都至关重要。我们的工具包含精度模式，帮助您决定哪种标准紧固件最适合您的特定材料。' },
    { type: 'title', text: '准确测量的 3 个基本技巧', level: 3 },
    { type: 'paragraph', html: '<strong>1. 使用卡尺：</strong> 进行反向查询时，务必使用数显卡尺以获得最准确的毫米输入。<strong>2. 检查磨损：</strong> 旧套筒和螺栓的边缘可能已经磨损，这使得“最接近匹配”变得更加关键。<strong>3. 核对螺距：</strong> 请记住，即使头部尺寸匹配，螺距（公制与英制）也总是不同的。' },
  ],
  ui: {
    labelFraction: '测量类型',
    labelWhole: '整数',
    labelNumerator: '分子',
    labelDenominator: '分母',
    labelInches: '英寸',
    labelMillimeters: '毫米',
    resultTitle: '转换结果',
    resultFraction: '分数',
    resultInches: '英寸',
    resultMillimeters: '毫米',
    matchTitle: '最接近的标准规格',
    matchClosestFastener: '标准螺栓或紧固件尺寸',
    matchClosestSocket: '标准套筒或扳手尺寸',
    matchDifference: '与测量值的差异',
    matchRecommendation: '如果有，请使用此尺寸',
    reverseSearchTitle: '反向搜索',
    reverseSearchLabel: '测量尺寸 (毫米)',
    reverseSearchButton: '寻找分数',
    reverseSearchHint: '用卡尺测量并输入数值',
    unitMm: '毫米',
    unitInch: '英寸',
    modeForward: '分数 → 公制',
    modeReverse: '公制 → 分数',
    precisionLabel: '精度模式',
    precisionCarpentry: '木工',
    precisionMetal: '金属加工',
    buttonConvert: '转换',
    buttonClear: '清除',
    buttonCopyResult: '复制结果',
    buttonSaveToHistory: '保存到历史记录',
    historyTitle: '历史记录',
    historyEmpty: '尚无测量记录',
    historyRemove: '移除',
    helpText: '选择测量值或输入分数以开始。',
    toolOverline: '车间工具',
    labelVisualReference: '视觉参考 (1 英寸 = 96 像素)',
  },
};
