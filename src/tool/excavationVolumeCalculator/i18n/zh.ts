import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'excavation-volume-soil-swell-calculator';
const title = '土方开挖量计算器与土方松散膨胀率估算';
const description = '计算开挖前的天然密实土方量（天然体方），并根据砂土、表土、粘土和碎石的松散膨胀系数，估算开挖后的松方体积范围。';

const faq = [
  {
    question: '天然体方（Bank Volume）与松方（Loose Volume）有什么区别？',
    answer: '天然体方是指开挖前未受扰动状态下的土壤体积，由开挖长度、宽度和深度直接相乘计算。松方是指开挖后土壤受到扰动、孔隙率增加后的预计堆积体积。',
  },
  {
    question: '如何计算土方开挖量？',
    answer: '将开挖长度乘以宽度和深度。例如，长4米、宽3米、深0.5米的基坑开挖，在未考虑土壤松散膨胀时的天然体方为6立方米。',
  },
  {
    question: '为什么粘土需要设置更宽的松散膨胀率范围？',
    answer: '粘土的物理特性受含水量、密实度和矿物成分影响极大。因此本工具为粘土设置了更宽的规划区间，以适应其多变的体积膨胀响应。',
  },
  {
    question: '本计算器可以替代岩土工程勘察报告吗？',
    answer: '不能。本计算器结果仅作为土方运输、渣土车安排和临时堆场规划的参考估算。涉及到建筑物基础、挡土墙或污染土方处置时，必须进行专业的岩土工程勘察。',
  },
];

const howTo = [
  { name: '输入开挖尺寸', text: '输入基坑或沟槽的长度、宽度和深度。可根据需要切换公制或英制单位。' },
  { name: '选择最接近的土壤类型', text: '选择砂土、表土、粘土或碎石，以应用对应的松散膨胀系数区间。' },
  { name: '规划土方运输与堆放', text: '使用天然体方评估开挖工作量，使用松方体积区间安排渣土车车次、清运容器或临时堆场面积。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  faq,
  bibliographyTitle: '参考来源与技术说明',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '两个体积指标解决施工现场的两大核心问题', level: 2 },
    { type: 'paragraph', html: '<strong>天然体方</strong>代表未扰动地基的开挖几何体积：长度乘以宽度再乘以深度。<strong>松方体积</strong>则代表挖掘出来的土方在装车或堆放时所占据的空间。区分这两个概念可以防止按错误状态估算渣土车车次或堆场面积。' },
    { type: 'title', text: '利用松方区间合理规划物流与运输', level: 3 },
    { type: 'paragraph', html: '选择最符合现场的土壤类型，并将估算的松方区间上下限与渣土车载重、容器容量及临时堆场面积进行对比。显示区间范围是因为开挖方式和土壤含水量都会改变实际松散率。' },
    { type: 'tip', title: '经验膨胀系数不能替代土工试验', html: '粘土矿物、地下水和含水量可能会导致实际膨胀率超出经验范围。基础工程、挡土结构和受污染土方必须经过正式的岩土工程检测。' },
    { type: 'title', text: '在安排运力前核对估算假设', level: 3 },
    { type: 'paragraph', html: '如果土质不够明确，建议使用两种可能的土壤类型分别计算，并在现场实测前按较大估算值准备运输能力，以确保施工安全。' },
  ],
  ui: {
    unitSystemLabel: '计量单位体系',
    unitMetric: '公制',
    unitImperial: '英制',
    onboarding: '请输入开挖尺寸并选择土壤类型，利用天然体方和松方体积结果规划施工与清运。',
    dimensionLabel: '开挖几何尺寸',
    lengthLabel: '长度',
    widthLabel: '宽度',
    depthLabel: '深度',
    soilLabel: '土壤类型',
    soilSand: '砂土',
    soilTopsoil: '表土 / 耕作土',
    soilClay: '粘土 / 粘性土',
    soilGravel: '碎石 / 砾石',
    soilSandBand: '膨胀率 10% 至 15%',
    soilTopsoilBand: '膨胀率 15% 至 25%',
    soilClayBand: '膨胀率 25% 至 40%',
    soilGravelBand: '膨胀率 15% 至 25%',
    bankVolumeLabel: '天然体方 (天然密实)',
    bankVolumeHelp: '开挖前地基未扰动土方量',
    looseVolumeLabel: '松方体积 (开挖后)',
    looseVolumeHelp: '开挖后堆积或运输预计体积',
    expansionLabel: '应用土壤膨胀率',
    expansionHelp: '针对所选土壤类型的系数范围',
    sceneTitle: '从地基开挖到堆场运输',
    sceneBank: '天然地基',
    sceneLoose: '松散土方',
    sceneGround: '地面标高',
    sceneCut: '开挖基坑断面',
    interpretationTitle: '如何解读计算结果',
    interpretationText: '第一个数值代表挖出基坑的尺寸。范围数值代表挖出的松散土方所占用的空间。',
    warning: '本结果仅用于施工物流规划估算。含水量、密实度和挖掘方式均会改变实际松散体积，不能替代岩土工程勘察报告。',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: '低膨胀率区间',
    soilStatusMedium: '中度膨胀率区间',
    soilStatusHigh: '高膨胀率区间',
    soilStatusLabel: '规划参考区间',
  },
};
