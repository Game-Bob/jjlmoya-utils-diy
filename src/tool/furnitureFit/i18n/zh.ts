import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';

const slug = 'furniture-fit-calculator';
const title = '搬家与家具空间计算器';
const description = '检查您的沙发、衣柜或桌子是否能放入电梯或通过房门。使用 3D 勾股定理计算倾斜尺寸，避免搬家灾难。';

const faqData = [
  {
    question: '为什么沙发明明比门小却还是进不去？',
    answer: '这是因为旋转角度。如果走廊狭窄，沙发必须侧放或倾斜才能进入。限制因素不仅仅是门的宽度，还包括房间内可用的转弯半径。',
  },
  {
    question: '什么是家具的对角线，为什么它很重要？',
    answer: '它是两个对角顶点之间最长的距离。这对于了解一件高大的家具在地面组装后，是否能在低天花板的房间里立起来至关重要。',
  },
  {
    question: '如何正确测量电梯？',
    answer: '不要只量地面。要测量开门宽度、有效深度和总高度。从门底边到后上方顶角的对角线是最关键的数据。',
  },
  {
    question: '哪些部件应该首先拆卸？',
    answer: '沙发脚、衣柜把手和冰箱门通常能腾出 5 到 10 厘米的关键空间，这往往决定了家具是能进去还是只能留在门外。',
  },
];

const howToData = [
  { name: '测量家具（长、宽、高）', text: '测量物体的最大尺寸，包括扶手或把手等任何突出部分。' },
  { name: '测量关键通道', text: '测量门的净宽度（门框到门框）、电梯内部以及走廊的宽度。' },
  { name: '输入数据到模拟器', text: '在工具中输入尺寸，查看家具的体积是否与通道空间匹配。' },
  { name: '计算倾斜角度', text: '如果家具非常高，请使用计算出的对角线来确认您是否能在楼梯平台或电梯内旋转它。' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    { name: 'Geometric Fit in Confined Spaces (MDPI Buildings)', url: 'https://www.mdpi.com/2075-5309/15/2/157' },
    { name: 'Moving Sofa Problem: Wolfram MathWorld', url: 'https://mathworld.wolfram.com/MovingSofaProblem.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '搬家的科学与勾股定理', level: 2 },
    { type: 'paragraph', html: '搬家不仅仅是体力活；它是一个复杂的几何拼图。房间或电梯的视觉空间常会欺骗人类的眼睛，尤其是当我们忽略第三个维度时。数学可以帮您省去因退货和运输失败而造成的数百欧元损失。' },
    { type: 'title', text: '3D 对角线小技巧', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: '黄金法则', html: '<p>永远不要只量家具。一定要测量<strong>关键准入点</strong>：门框宽度（如果房门打不开 180 度，请减去房门自身的厚度）、楼梯平台的最低天花板高度以及关上门后电梯的实际深度。公式 <code>d = √(w² + h² + z²)</code> 会告诉你倾斜后是否能进去。</p>' },
    { type: 'title', text: '走廊沙发问题', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: '操作余量', html: '<p>一个常见的错误是假设如果家具宽 80 厘米，门洞宽 80 厘米，就能通过。并非如此。工人的手、织物的弹性以及墙面的不平整都需要至少 <strong>2 到 5 厘米</strong> 的余量。如果没有这个余量，家具会被刮花或被挤住。</p>' },
    { type: 'title', text: '毁掉搬家的 3 个错误', level: 3 },
    { type: 'paragraph', html: '即使尺寸正确，这些看不见的因素也常会导致灾难：<strong>吸顶灯</strong> —— 在对角线旋转期间常被遗忘；<strong>家具的转弯半径</strong> —— 硬家具不会弯曲；<strong>包装</strong> —— 气泡膜和保护纸板会在每边增加 1 到 3 厘米。' },
  ],
  ui: {
    conTitle: '空间尺寸',
    conHint: '例如：标准电梯、门框或货车。',
    objTitle: '家具尺寸',
    labelWidth: '宽度 (cm)',
    labelHeight: '高度 (cm)',
    labelDepth: '深度 (cm)',
    labelLength: '长度 (cm)',
    labelMargin: '误差余量 (cm)',
    vizLabel: '简化空间视图',
    verdictDefault: '能进去吗？',
    verdictHint: '输入尺寸以检查空间兼容性。',
    verdictYes: '是的，能进去！',
    verdictNo: '进不去',
    fitDirect: '家具可以直接完美进入。',
    fitDiagonal3d: '可以倾斜对角线进入 (3D 勾股定理)。',
    fitDiagonalPlane: '可以在其中一个侧平面倾斜进入。',
    fitNope: '家具太大，即使倾斜也无法进入。',
    diagLabel: '最大对角线 (3D 勾股定理):',
    objLabel: '家具',
  },
};
