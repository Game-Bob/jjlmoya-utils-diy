import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'drill-sharpening-master';
const title = '钻头修磨大师：精密数字规';
const description = 'HSS 高速钢钻头修磨交互指南。屏幕数字规可校验 118° 和 135° 角度。计算 RPM 并诊断切削错误。';

const faqData = [
  {
    question: '我可以将钻头直接放在屏幕上吗？',
    answer: '可以，该工具设计用于让您将钻头轴线靠在数字规的中心线上，直接校验两个切削刃的对称性。',
  },
  {
    question: '如何知道后角（切削间隙）是否正确？',
    answer: '转动钻头时，切削刃的后部必须明显低于刃口。如果您看到整个尖端金属的光泽是一致的，说明缺少后角（未铲背）。',
  },
  {
    question: '修磨后应使用多大转速？',
    answer: '取决于直径；我们的内置计算器会根据您在第一步中选择的材料给出确切数据。',
  },
  {
    question: 'HSS 和硬质合金（钨钢）有什么区别？',
    answer: 'HSS（高速钢）更经济且耐冲击。硬质合金能承受更高速度但更脆。对于手工修磨，HSS 是标准选择。',
  },
  {
    question: '修磨需要特殊设备吗？',
    answer: '一台目数在中等（120-150 目）的旋转砂轮机就足够了。重要的是保持砂轮平衡且平整，以获得一致的效果。',
  },
];

const howToData = [
  { name: '选择材料', text: '选择您要钻孔的金属或材料，以确定目标角度和切削速度。' },
  { name: '校验对称性', text: '将钻头靠在屏幕上，确保两个切削刃都与蓝色线条重合。' },
  { name: '检查后角', text: '目测检查切削刃后部是否会摩擦工件（检查后角/铲背）。' },
  { name: '计算 RPM', text: '输入直径并将钻床调整至所选材料的推荐转速。' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '钻头修磨大师：专业技巧', level: 2 },
    { type: 'paragraph', html: '钻头修磨是任何车间中最有价值的技能之一。正确修磨的钻头可以提高孔的质量，保护电动工具的使用寿命，并确保操作人员的安全。' },
    { type: 'title', text: '修磨的核心：顶角', level: 3 },
    { type: 'paragraph', html: '顶角决定了钻头如何切入材料。标准角度为：软钢 118°，不锈钢 135°，硬钢 140°。每种材料需要不同的角度来最大化穿透力而不牺牲强度。' },
    { type: 'title', text: '最易遗忘的点：后角', level: 3 },
    { type: 'paragraph', html: '最常见的错误是忽略了后角或铲背。如果切削刃的背面是平的，钻头只会产生摩擦并产生极高的热量。解决方法是轻轻磨掉主切削刃背面的金属。' },
  ],
  ui: {
    labelMaterial: '加工材料',
    matSteel: '普通钢',
    matInox: '不锈钢',
    matHard: '硬钢',
    matBrass: '黄铜',
    matPlastic: '塑料',
    matWood: '木材',
    labelDiameter: '钻头直径 (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: '速度',
    unitRpm: 'RPM',
    labelCooling: '切削',
    btnDiagnosis: '切削不顺？诊断',
    diagTitle: '故障诊断',
    diagClose: '关闭',
    diagIssue1: '1. 冒烟且无法钻透',
    diagIssue1Desc: '缺少后角。主切削刃背面的金属摩擦工件。修磨背面，使切削刃成为最高点。',
    diagIssue2: '2. 偏心或孔径变大',
    diagIssue2Desc: '钻尖未居中。两侧切削刃长度不同。确保钻尖触及数字规的精确中心。',
    diagIssue3: '3. 刃口烧坏（发蓝）',
    diagIssue3Desc: '转速过高。请检查计算出的针对该直径和材料的 RPM。',
    gaugeInstruction: '将钻轴靠在垂直线上',
  },
};
