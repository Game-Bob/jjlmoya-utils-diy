import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'voltage-drop-calculator';
const title = '电压降与电缆线径计算器';
const description = '防止电缆烧毁的技术工具。根据距离和功率计算 12V、24V 和 230V 安装所需的电缆截面积。';

const faqData = [
  {
    question: '什么是电压降，为什么它很重要？',
    answer: '它是电流通过电缆时发生的电压损失。如果电缆太细或太长，就会损失电压。结果：灯光变暗、电机无法启动或电缆异常发热，甚至引发危险。',
  },
  {
    question: '12V 系统中 10 米距离需要多粗的电缆？',
    answer: '这取决于功率。对于 12V、10A、10 米的距离，至少需要 2.5mm² 的电缆。如果是 20A，则需要 6mm²。在低电压（12V/24V）系统中，电压降比在 230V 系统中要关键得多。',
  },
  {
    question: '我可以全屋使用 1.5mm² 的电缆吗？',
    answer: '不可以。1.5mm² 仅用于照明电路（最大 10A）。插座需要 2.5mm²。厨房或洗衣机需要 4mm² 或 6mm²。使用过细的电缆非常危险，可能引发火灾。',
  },
  {
    question: '允许的最大电压降是多少？',
    answer: '在住宅安装（230V）中：照明最大 3%，其他用途 5%。在 12V/24V 系统（房车、太阳能）中：总电压降不应超过 3%。更大的压降意味着效率损失和过热风险。',
  },
];

const howToData = [
  { name: '定义系统电压', text: '选择您的安装是 12V、24V（太阳能/房车）还是 230V（居家）。' },
  { name: '输入电流强度', text: '填入电缆末端设备的电流（A）或功率（W）。' },
  { name: '测量电缆距离', text: '输入从能源端到接收端的电缆单程长度（单位：米）。' },
  { name: '选择导体材料', text: '选择铜（标准）或铝，以获得精确的电阻率计算结果。' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    { name: 'IEC 60364：低压电气装置', url: 'https://www.iec.ch/' },
    { name: '欧姆定律与电阻率：维基百科', url: 'https://zh.wikipedia.org/wiki/%E7%94%B5%E9%98%BB%E7%8E%87' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '电压降完整指南', level: 2 },
    { type: 'paragraph', html: '如果您正在改装房车、设计太阳能系统或在花园里铺设电缆，有一个不可见的敌人可能会破坏您的项目：<strong>电压降</strong>。这不仅是一个技术问题；它关系到冰箱是能正常工作还是会自动断电，也关系到安装的系统是安全的还是存在火灾隐患。' },
    { type: 'title', text: '电压降计算公式', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: '基于欧姆定律的精确计算', html: '<p>公式为 <strong>ΔV = (2 × L × I × ρ) / S</strong>，其中 L 是单程长度，I 是电流，ρ 是电阻率（铜为 0.0178），S 是电缆截面积。乘以 2 是因为电流需要流经回路（来回）。</p>' },
  ],
  ui: {
    heroDropLabel: '总电压降',
    heroVoltsUnit: '伏特',
    heroPctLoss: '% 损失',
    heroEffLabel: '效率',
    statusExcellent: '极佳',
    statusAcceptable: '可接受',
    statusCritical: '危急',
    fieldVoltage: '电压',
    fieldMaterial: '材料',
    materialCopper: '铜',
    materialAlum: '铝',
    fieldLoad: '负载',
    modeW: '瓦',
    modeA: '安',
    unitWatts: '瓦特',
    unitAmps: '安培',
    fieldLength: '电缆长度 (单程)',
    unitMeters: '米',
    fieldSection: '电缆截面积',
    sectionInfo: '推荐',
  },
};
