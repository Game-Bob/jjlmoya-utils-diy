import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'concrete-mortar-calculator';
const title = '混凝土与砂浆计算器：水泥、沙子和水的精确用量';
const description =
  '计算每立方米所需的水泥袋数、沙铲数和升水。适用于地基、地坪、墙体和找平层。技术配比指南。';

const faqData = [
  {
    question: '一立方米混凝土需要多少袋25公斤的水泥？',
    answer:
      '对于标准混凝土（强度等级约 C20/25），制作一立方米密实混合料约需14袋25公斤的水泥（总计350公斤）。',
  },
  {
    question: '混凝土和砂浆哪个更强？',
    answer:
      '含有砂石（碎石）的「混凝土」在结构上更强，能承受巨大载荷。仅含沙子的「砂浆」则非常适合砌筑砖块或表面抹灰。',
  },
  {
    question: '一立方米相当于多少铲沙子？',
    answer:
      '这取决于铁铲的大小，但通常按每立方米180-200铲沙子计算。我们的计算器会将立方米换算为建议的小铁铲数。',
  },
  {
    question: '没有搅拌机可以人工手动搅拌吗？',
    answer:
      '可以，但这需要非常大的体力。理想做法是在清洁且不透水的表面（铁板或灰槽）上进行，以防止水分流失。',
  },
  {
    question: '为什么混凝土干燥时会开裂？',
    answer:
      '通常是由于硬化期间缺乏湿度（水分蒸发过快）或拌合时水灰比过大（水太多）。建议在施工后的几天内进行洒水养护。',
  },
];

const howToData = [
  {
    name: '选择混合类型',
    text: '选择您是要制作地基用的混凝土，还是砌墙用的砂浆。',
  },
  {
    name: '指定体积 (m³)',
    text: '输入总体积。计算公式：长 × 宽 × 厚。',
  },
  {
    name: '查阅用量',
    text: '查看需要购买的水泥袋数、沙铲数和水升数。',
  },
  {
    name: '应用配比',
    text: '遵循水泥、沙子和碎石的视觉指南进行完美配比。',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: 'GB 50204-2015 混凝土结构工程施工质量验收规范 (中国)',
      url: 'http://www.mohurd.gov.cn/',
    },
    {
      name: 'Concrete Mix Proportioning Standards (ASTM)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: '水泥砂浆配比百科',
      url: 'https://zh.wikipedia.org/wiki/砂浆',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '混凝土与砂浆配比指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在装修或施工时，最常遇到的问题之一就是<strong>一立方米混凝土需要多少袋水泥？</strong>。这不仅仅是混合材料那么简单；结构的最终强度直接取决于水泥、沙子、碎石和水的精确比例。我们的计算器将工业标准测量值转换为工地常用的单位：25公斤袋、铁铲数和升。',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: '水分过多会削弱混凝土强度',
      html: '<p>一个非常常见的错误是为了让混凝土流动性更好而添加过多的水。多余的水在硬化蒸发时会产生孔隙，从而剧烈降低最终强度。理想的稠度应当像<strong>粘稠的糊状，而不是液体</strong>。请尽可能少用水。</p>',
    },
    {
      type: 'title',
      text: '根据用途的标注配比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>混凝土配比</strong>因用途而异。对于<strong>标准混凝土</strong>（地基和地坪），比例为 1份水泥、2.5份沙子、3份碎石。对于<strong>砌筑砂浆</strong>（墙体），比例为 1份水泥和4份沙子。对于<strong>强力找平砂浆</strong>（地面），比例为 1份水泥和3份沙子。含碎石的混凝土承重能力更强；纯沙的砂浆则非常适合粘结和抹灰。',
    },
    {
      type: 'title',
      text: '如何计算所需的立方数 (m³)',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: '地坪计算示例',
      html: '<p>对于一个长4米、宽3米、厚15厘米的花园地坪：<strong>4 × 3 × 0.15 = 1.80 m³</strong>。如果您在「按尺寸计算」部分输入相关数值，计算器将自动完成此操作。</p><p>请记住始终<strong>多购买10%</strong>的材料，以弥补泼洒损失或地形不平带来的差额。</p>',
    },
    {
      type: 'title',
      text: '搅拌顺序与按袋配比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '工地上常说<strong>「300公斤配合比」</strong>：即每立方米成品混凝土含300公斤水泥。在搅拌机中的正确顺序是：先放水，随后放碎石和沙子（以打散团块），最后逐渐加入水泥。',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: '防止料不够的10%原则',
      html: '<p>请始终购买比计算值<strong>多10%的材料</strong>，以抵消遗洒损失、地形不规则或潮湿骨材实际体积的变化。这比施工停滞时再补订第二次要划算得多。</p>',
    },
  ],
  ui: {
    mixH200Label: '标准混凝土',
    mixH200Hint: '适用于地基和地坪',
    mixM40Label: '建筑砌筑砂浆',
    mixM40Hint: '适用于墙体和隔断',
    mixM80Label: '强力找平层',
    mixM80Hint: '适用于地面和强力抹灰',
    modeDimsLabel: '按尺寸计算',
    modeDirectLabel: '直填 m³',
    labelLength: '长度',
    labelWidth: '宽度',
    labelThickness: '厚度',
    labelVolume: '总体积 (m³)',
    binderCementLabel: '水泥',
    binderLimeLabel: '石灰',
    summaryLabel: '填补总量：',
    resUnitSacks: '袋 (25kg)',
    resUnitShovels: '铲',
    resUnitLitres: '升',
    resLabelCement: '波特兰水泥',
    resLabelLime: '水硬性石灰',
    resLabelSand: '沙子 / 骨料',
    resLabelWater: '饮用水',
    proportionsTitle: '选中混合类型的配比',
    propLabelSand: '沙子',
    propLabelGravel: '碎石/砂石',
    adviceH200: '适用于支柱、地坪和承重结构。',
    adviceM40: '非常适合砌筑砖墙或砌块墙。',
    adviceM80: '用于高耐受性的地面找平层。',
    adviceLimeH200: '石灰混凝土更具韧性，但硬化时间较长。',
    priceTotalLabel: '估计预算',
    priceSackLabel: '每袋单价',
    priceSandLabel: '沙子 (m³)',
    priceDisclaimer: '参考市场价格。请根据当地供应商进行调整。',
  },
};
