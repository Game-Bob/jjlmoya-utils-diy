import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'thermal-expansion-calculator';
const title = '梁与结构热膨胀计算器';
const description = '计算梁或结构因温度变化而产生的膨胀量。面向工程师和 DIY 爱好者的技术工具。包含各材料的膨胀系数。';

const faqData = [
  {
    question: '什么是线膨胀系数？',
    answer: '它是材料的一种物理属性，表示温度每升高一摄氏度时材料膨胀的比例。测量单位为 1/°C 或 °C⁻¹。',
  },
  {
    question: '为什么计算梁的膨胀很重要？',
    answer: '如果梁没有膨胀空间（伸缩缝），会产生巨大的内应力，可能导致结构变形、混凝土开裂甚至倒塌。',
  },
  {
    question: '木材在所有方向上的膨胀都一样吗？',
    answer: '不。木材是一种各向异性材料。它沿纤维方向膨胀很小，但在横向（宽度和厚度）膨胀显著。',
  },
  {
    question: '我应该使用什么温度作为初始温度？',
    answer: '您应使用安装或施工时的温度。结束温度应为结构在其使用寿命内预计达到的最高温度。',
  },
];

const howToData = [
  { name: '测量原始长度', text: '输入梁或材料的长度（以米为单位）。' },
  { name: '选择材料', text: '在金属、建筑材料或木材中选择，以应用其特定的系数。' },
  { name: '定义热范围', text: '指定初始温度和预计最高温度，以计算温差。' },
  { name: '分析增长', text: '观察以毫米为单位的总伸长量和最终长度，以预留合适的伸缩缝。' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    { name: '热膨胀系数 — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: '热膨胀与温度 — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: '线热膨胀 — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '什么是热膨胀以及它如何影响结构', level: 2 },
    { type: 'paragraph', html: '<strong>热膨胀</strong>是材料因温度升高而增加长度的物理过程。在建筑中，这种现象是一种能够破坏混凝土、使钢梁变形甚至扭曲火车轨道的巨大力量。' },
    { type: 'title', text: '线膨胀公式', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: '线膨胀公式', html: '<p>结构元件的膨胀计算公式为：<code>ΔL = L₀ · α · ΔT</code>。其中 <strong>ΔL</strong> 是总增长量，<strong>L₀</strong> 是原始长度，<strong>α</strong> 是材料的膨胀系数（单位为 °C⁻¹），<strong>ΔT</strong> 是温差。</p>' },
  ],
  ui: {
    configTitle: '配置',
    labelMaterial: '材料',
    groupMetals: '金属',
    groupConstruction: '建筑',
    groupWood: '木材与聚合物',
    matSteel: '钢 (12 ppm/°C)',
    matAluminum: '铝 (23 ppm/°C)',
    matCopper: '铜 (17 ppm/°C)',
    matIron: '铁 (11 ppm/°C)',
    matConcrete: '混凝土 (12 ppm/°C)',
    matBrick: '砖 (9 ppm/°C)',
    matGlass: '玻璃 (9 ppm/°C)',
    matWoodFiber: '木材纤维方向 (5 ppm/°C)',
    matWoodTransversal: '木材横向 (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: '冶金',
    catConstruction: '建筑',
    catWood: '木材与聚合物',
    labelLength: '初始长度 (m)',
    labelTempStart: '初始温度 (°C)',
    labelTempEnd: '最高温度 (°C)',
    deltaLabel: '温差 (ΔT)',
    vizTitle: '膨胀模拟',
    resultGrowthLabel: '总增长量 (ΔL)',
    resultFinalLabel: '最终长度',
    unitMm: '毫米',
    unitM: '米',
    riskTitle: '变形风险',
    jointTitle: '最小缝隙',
    riskLow: '低',
    riskModerate: '中',
    riskCritical: '高',
    tipDefault: '请咨询制造商手册以获取特殊合金的精确系数。',
    tipSteel: '钢和混凝土的系数几乎相同，这使得钢筋混凝土结构在没有内部开裂的情况下正常工作。',
    tipAluminum: '铝的膨胀率几乎是钢的两倍。在金属框架中，这要求使用弹性密封剂。',
    tipGlass: '玻璃和钢的膨胀率几乎一致，这是设计大型玻璃幕墙的关键。',
    tipConcrete: '混凝土的系数与钢非常接近，这就是混合结构如此稳定的原因。',
    tipWood: '木材因受热膨胀较小，但因受潮膨胀较大。在长结构中，纵向纤维非常稳定。',
    tipPvc: 'PVC 的膨胀率极高。需要特殊接头来吸收运动而不至于破裂。',
  },
};
