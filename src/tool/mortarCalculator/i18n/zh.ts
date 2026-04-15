import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';

const slug = 'lime-mortar-calculator';
const title = '传统石灰砂浆比例：粉刷与抹灰';
const description = '石灰和砂浆免费计算器。根据传统方法（维特鲁威）获取粗抹灰、中抹灰和精抹灰的精确比例。';

const faqData = [
  {
    question: '为什么要使用石灰而不是水泥？',
    answer: '石灰是一种“活的”透气材料，允许水蒸汽排出，防止因冷凝产生的湿气。此外，它比水泥更具柔韧性，可以减少旧墙体裂缝的出现。',
  },
  {
    question: '粗抹灰的理想比例是多少？',
    answer: '根据维特鲁威传统，对于干净的河沙，使用 1:3 的比例（一份石灰对三份沙子）。对于矿砂，建议使用 1:2 以确保砂浆的凝聚力。',
  },
  {
    question: '什么是精抹灰或面层抹灰？',
    answer: '这是墙壁的最后一层。使用更细的沙子（有时是石灰石粉/大理石粉）和更高比例的石灰，以获得光滑、如丝般平整的效果，可以喷漆或保持自然状态。',
  },
  {
    question: '石灰砂浆需要多长时间硬化？',
    answer: '气硬性石灰通过碳化（吸收空气中的二氧化碳）硬化。初始凝固过程需要几天时间，但最大硬度要在数月后达到，并随着时间的推移不断增强强度。',
  },
];

const howToData = [
  { name: '识别基层类型', text: '检查是在石头、旧砖还是砌块上作业。基层必须清洁且略微湿润。' },
  { name: '选择沙子的粒径', text: '接着层使用粗沙，装饰面层使用细沙。沙子的纯度决定了砂浆的质量。' },
  { name: '组分混合', text: '在加水前先将石灰和沙子干混。稠度应具有塑性，而不是液体。' },
  { name: '涂抹与找平', text: '用抹刀铺开砂浆，并在砂浆开始收干（表面变硬）时使用木抹子进行找平。' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    { name: '维特鲁威 - 建筑十书，第七卷', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:2007.01.0072' },
    { name: 'EN 459 标准 - 建筑石灰', url: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0053796' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '砂浆论：维特鲁威的智慧', level: 2 },
    { type: 'paragraph', html: '马库斯·维特鲁威·波利奥在其《建筑十书》第七卷中，不仅描述了技术，还阐述了一种哲学。他理解建筑的永恒在于其结合部。砂浆不仅仅是粘合剂；它是结缔组织。其比例（1:3, 1:2, 1:1）是长达数世纪的罗马经验观察的遗产，追求强度与柔韧性之间的完美平衡。' },
    { type: 'title', text: '骨料粒径：质量的关键', level: 3 },
    { type: 'paragraph', html: '石灰砂浆的质量在很大程度上取决于骨料的粒径。对于 <strong>Trullissatio</strong>（基层粉刷），使用 2-5 毫米的粗河沙。对于 <strong>Arenato</strong>（中层抹灰），使用 0.5-2 毫米的洗净中沙。对于 <strong>Marmorato</strong>（精抹灰），使用小于 0.5 毫米的石灰石粉。' },
    { type: 'title', text: '机械嵌锁的奥秘', level: 3 },
    { type: 'paragraph', html: '这种结合不是化学性的，而是<strong>机械性</strong>的。想象一下数以百万计的微观根须。砂浆必须渗透到砖块的孔隙中，创造一个物理“锁扣”。没有孔隙，就没有锚固。' },
  ],
  ui: {
    leftTitle: '维特鲁威系统',
    centerTitle: '可用材料',
    rightTitle: '估计覆盖面积',
    btnCal: '石灰',
    btnArena: '沙子',
    labelCalPasta: '消石灰膏 (1.30 kg/L)',
    labelCalPolvo: 'NHL粉末 (0.65 kg/L)',
    labelQuantity: '现有数量:',
    labelNeedsAlso: '您还需要:',
    labelProportion: '比例：',
    labelCoverage: '覆盖面积:',
    labelThickness: '总厚度:',
    labelLayers: '层数:',
    labelWasteFactor: '损耗系数: 20%',
    layersSingular: '遍',
    layersPlural: '遍',
    layersSingularShort: '遍',
    layersPluralShort: '遍',
    materialCal: '石灰',
    materialArena: '沙子',
    materialMarmol: '大理石',
    phaseDescTrullissatio: '粗糙基层。刷2遍，厚度15mm。比例 1:3（石灰:河沙）。',
    phaseDescArenato: '中间层。刷2遍，厚度8mm。比例 1:2（石灰:洗净沙）。',
    phaseDescMarmorato: '精细面层。刷1双遍，厚度4mm。比例 1:1（石灰:石灰石粉/大理石粉）。',
    granulometryTitle: '骨料粒径',
    grainTitleCoarse: '粗沙',
    grainSubtitleCoarse: '河沙',
    grainUsageCoarse: '基层粉刷',
    grainTitleMedium: '中沙',
    grainSubtitleMedium: '洗净沙',
    grainUsageMedium: '中层抹灰',
    grainTitleFine: '细粉',
    grainSubtitleFine: '石灰石粉/大理石粉',
    grainUsageFine: '精抹灰',
    specSize: '尺寸:',
    specUse: '用途:',
    specDensity: '密度:',
  },
};
