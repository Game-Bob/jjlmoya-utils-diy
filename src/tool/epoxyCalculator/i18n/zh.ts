import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'epoxy-resin-calculator';
const title = '环氧树脂计算器：混合比例与精确体积';
const description = '为您的项目计算环氧树脂和固化剂的精确用量。避免在河流桌、首饰和模具制作中造成浪费。';

const faqData = [
  {
    question: '为什么树脂的精确比例如此重要？',
    answer: '与其他混合物不同，环氧树脂不是靠蒸发干燥的，而是通过化学反应（聚合）。如果树脂或固化剂过量，反应将不完全，导致作品粘手、变软或留下永久性气泡。',
  },
  {
    question: '重量比 vs 体积比有什么区别？',
    answer: '许多树脂的体积比是 2:1，但重量比通常是 100:45，因为固化剂通常密度更高。请始终使用制造商指定的比例，如果可能，请使用电子秤以获得最高精度。',
  },
  {
    question: '混合时如何避免产生气泡？',
    answer: '以恒定的圆周运动缓慢搅拌至少 3 分钟，同时刮净杯壁。浇注前让混合物静置几分钟，让气泡升到表面。',
  },
  {
    question: '什么是操作时间 (Pot Life)？',
    answer: '是指混合物开始硬化（凝胶化）前您可以进行操作的时间。在夏季或大规模混合时，由于放热反应（产生热量），这个时间会大幅缩短。',
  },
];

const howToData = [
  { name: '测量模具尺寸', text: '测量您想要填充树脂区域的长度、宽度和深度（厚度）。' },
  { name: '输入混合比例', text: '查看产品标签，确定混合比例是 1:1、2:1 还是 3:1，以及是基于重量还是体积。' },
  { name: '称重组件', text: '在电子秤上的干净容器中，先倒入 A 组分（树脂），然后倒入 B 组分（固化剂）。' },
  { name: '技术搅拌', text: '轻轻搅拌，直到混合物完全透明，看不见不同密度的“丝线”。' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '环氧树脂计算与混合指南', level: 2 },
    { type: 'paragraph', html: '环氧树脂不是靠蒸发干燥的油漆；它是一个复杂的<strong>放热化学反应</strong>。当环氧分子与多胺分子链结合形成固体结晶热固性聚合物时，魔法就发生了。' },
    { type: 'paragraph', html: '一件耐用的艺术品与一场粘糊糊的灾难之间的区别在于<strong>精确的化学计量</strong>。混合比例哪怕只有 5% 的误差，都可能永久性地抑制固化。本工具消除了数学上的猜测，让您专注于创作。' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: '体积还是重量？', html: '<p>初学者的一号错误是假设 100ml 重 100g。<strong>树脂的密度比固化剂大。</strong></p><p>如果您的产品说明书上写着“重量比 100:50”，这与“体积比 2:1”是不同的。此计算器使用<strong>体积</strong> (V = L × W × H) 进行工作，这是填充模具的标准。</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: '常见比例', html: '<ul><li><strong>1:1</strong> — 涂层、清漆和快干胶水。</li><li><strong>2:1</strong> — 标准。河流桌、首饰和中型模具。</li><li><strong>3:1</strong> — 工业地面和高硬度结构层压板。</li></ul>' },
    ]},
    { type: 'title', text: '安全协议与最佳实践', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: '关键温度', html: '<p>始终在 <strong>21°C 至 25°C</strong> 之间操作。寒冷会中止反应，使作品变得混浊。热量过高会危险地加速放热反应（爆聚）。</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: '双杯混合法', html: '<p>不要依赖单次混合。彻底刮净杯壁和杯底，将混合物倒入<strong>第二个干净的杯子</strong>中再次搅拌。这可以确保没有未反应的材料残留。</p>' },
    ]},
  ],
  ui: {
    shapeRect: '矩形',
    shapeCylinder: '圆柱形',
    shapeSphere: '球形',
    labelLength: '长度 (cm)',
    labelWidth: '宽度 (cm)',
    labelDiameter: '直径 (cm)',
    labelDepth: '深度 (cm)',
    labelRatio: '混合比例 (重量/体积)',
    labelCustomRatio: '使用自定义比例 (A:B)',
    labelResinA: '树脂 (A)',
    labelHardenerB: '固化剂 (B)',
    labelWasteTitle: '安全余量',
    labelWasteDesc: '额外增加 5% 以弥补损耗',
    labelTotalVolume: '总重量',
    labelPartA: 'A 组分 (树脂)',
    labelPartB: 'B 组分 (固化剂)',
    labelVisualization: '可视化',
    shapeRectLabel: '矩形块',
    shapeCylinderLabel: '圆柱体 / 圆形模具',
    shapeSphereLabel: '完整球体',
  },
};
