import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'drill-rpm-calculator';
const title = '钻孔与切削转速计算器';
const description = '根据材料和钻头直径计算钻床或铣床的理想每分钟转速 (RPM)。避免烧坏您的工具。';

const faqData = [
  {
    question: '为什么钻孔时钻头会烧坏？',
    answer: '主要是由于转速 (RPM) 过高。当钻头转速超过材料排热能力时，摩擦产生的热量会使温度超过钢材的回火极限，导致刃口软化并失去切削能力。',
  },
  {
    question: '什么是切削速度 (Vc)？',
    answer: '它是工具刃口在材料表面移动的线速度，单位为米每分钟。每种材料都有推荐的 Vc，这与钻头直径无关。',
  },
  {
    question: '什么时候应该使用硬质合金工具 (Widia)？',
    answer: '当您需要以极高的速度加工、进行工业生产或被加工材料极其坚硬时，应使用硬质合金（钨钢）。对于普通 DIY，HSS（高速钢）已经足够，且更耐折断。',
  },
  {
    question: '是否总是需要使用润滑剂？',
    answer: '对于金属加工，几乎总是推荐使用润滑剂。铝材加工时可防止材料粘连钻头，钢材加工时可减少热量。木材和塑料加工建议干切，并频繁抬刀排屑。',
  },
  {
    question: '如果没有 CNC 铣床，如何判断进给量？',
    answer: '在台钻上，通过压力感应进给。您应该看到连续且干净的切屑排出。如果排出的是粉末，说明压力太小或转速太高。如果切屑非常厚且钻床发出吃力的声音，说明压力太大。',
  },
];

const howToData = [
  { name: '选择材料', text: '指定您要钻孔或铣削的材料（钢、铝、木材等）。每种材料的硬度和热容量都不同。' },
  { name: '输入直径', text: '输入钻头或铣刀的准确直径（毫米）。请记住，直径越大，转速应越低。' },
  { name: '选择工具类型', text: '确定您的钻头是高速钢 (HSS) 还是硬质合金 (Widia)。硬质合金工具可承受更高的转速。' },
  { name: '调整机器 RPM', text: '根据计算值配置您的钻床或铣床。如果您的机器是档位变速，请参考我们的“推荐设定”选择最安全的皮带轮位置。' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '机械加工中每分钟转速 (RPM) 的重要性', level: 2 },
    { type: 'paragraph', html: '正确计算 RPM 是完美作业与代价昂贵的失败之间的分水岭。这不仅仅是让钻头尽可能快地转动，而是要遵循摩擦和材料抗力的物理定律。我们的计算器旨在优化工具性能和成品质量。' },
    { type: 'title', text: '理解切削速度', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'RPM 计算公式', html: '<p>切削速度是以米每分钟为单位的值，表示刃口通过材料的理想速度。我们使用的公式是：<code>RPM = (Vc × 1000) / (π × D)</code>，其中 D 是以毫米为单位的直径。此计算与所切削材料本身的直径无关。' },
    { type: 'title', text: 'HSS 与硬质合金', level: 3 },
    { type: 'paragraph', html: '<strong>高速钢 (HSS)</strong> 工具价格低廉且耐冲击，但耐热性有限。<strong>硬质合金 (Widia)</strong> 允许高出 3 到 5 倍的切削速度，但质地较脆。计算器会针对工具类型自动调整参数。' },
    { type: 'title', text: '钻孔时的 3 个常见错误', level: 3 },
    { type: 'paragraph', html: '<strong>转速太高：</strong> 导致过热和钢材回火。<strong>转速太低：</strong> 钻头会产生震动，可能因疲劳而折断。<strong>没有冷却：</strong> 热量会显著缩短工具的使用寿命。' },
  ],
  ui: {
    labelMaterial: '工件材料',
    matSteel: '低碳钢',
    matInox: '不锈钢',
    matAlu: '铝材',
    matBrass: '黄铜',
    matCastIron: '铸铁',
    matWood: '木材',
    matPlastic: '塑料',
    coolSteel: '切削液或油',
    coolInox: '切削油 EP',
    coolAlu: '酒精 / 石蜡',
    coolBrass: '干切 / 空气',
    coolCastIron: '干切',
    coolWood: '仅吸尘',
    coolPlastic: '喷气',
    labelTool: '工具类型',
    typeHss: '高速钢 (HSS)',
    typeWidia: '硬质合金 (Widia)',
    labelDiameter: '直径',
    unitMm: 'mm',
    unitInch: '英寸',
    modeColumnDrill: '台钻模式',
    labelAdvanced: '进给参数',
    labelLips: '刃数 (z)',
    labelFz: '每刃进给量 (Fz)',
    labelMachine: '您的机器转速',
    presetStandard: '标准',
    presetCnc: 'CNC',
    addRpmManual: '手动添加 RPM...',
    addButton: '+',
    resultRpm: '最佳转速',
    resultCooling: '冷却方式',
    resultFeed: '进给量计算结果',
    resultClosest: '推荐设定',
    rpmUnit: '转 / 分钟',
    recommendedLabel: '推荐设定',
    recommendedHint: '请将机器的选择开关或皮带设置到此位置',
    statusLimitActive: '机器极限激活',
    statusOutOfRange: '超出商用标准范围',
  },
};
