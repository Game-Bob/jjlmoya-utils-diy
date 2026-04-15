import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'thermal-expansion-calculator';
const title = '梁と構造物の熱膨張計算機';
const description = '温度変化によって梁や構造物がどれくらい膨張するかを計算します。エンジニアやDIY向けのテクニカルツール。材料別の熱膨張係数を収録。';

const faqData = [
  {
    question: '線膨張係数とは何ですか？',
    answer: '材料の物理的特性の1つで、温度が1℃上昇するごとにどれくらい膨張するかを示します。単位は 1/℃ または ℃⁻¹ です。',
  },
  {
    question: 'なぜ梁の膨張を計算することが重要なのですか？',
    answer: '梁に膨張するためのスペース（伸縮継手）がない場合、巨大な内部応力が発生し、構造物の変形やコンクリートのひび割れ、最悪の場合は崩壊を招く可能性があるためです。',
  },
  {
    question: '木材はすべての方向に同じように膨張しますか？',
    answer: 'いいえ。木材は異方性材料です。繊維方向にはほとんど膨張しませんが、繊維と直交する方向（幅や厚み）には大きく膨張します。',
  },
  {
    question: '初期温度には何を使用すべきですか？',
    answer: '設置または施工時の温度を使用してください。最終温度は、その構造物の耐用年数中に予想される最高温度を使用する必要があります。',
  },
];

const howToData = [
  { name: '元の長さを測る', text: '梁や材料の長さをメートル単位で入力します。' },
  { name: '材料を選択する', text: '金属、建築材料、または木材から選択して、固有の係数を適用します。' },
  { name: '温度範囲を定義する', text: '初期温度と予想される最高温度を指定して、温度差を算出します。' },
  { name: '膨張を分析する', text: '総膨張量（ミリメートル）と最終的な長さを確認し、適切な継手を計画します。' },
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: '熱膨張係数 — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: '熱膨張と温度 — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: '線熱膨張 — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '熱膨張とは何か、なぜ構造物に影響を与えるのか', level: 2 },
    { type: 'paragraph', html: '<strong>熱膨張</strong>とは、温度の上昇に伴って材料の長さが増加する物理的なプロセスです。微視的なレベルでは、粒子がより大きなエネルギーで振動し、粒子間の平均的なスペースがより多く必要になります。建設において、この現象はコンクリートを破壊し、鋼梁を変形させ、鉄道のレールを歪ませる力となります。' },
    { type: 'title', text: '線膨張の公式', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: '線膨張の計算式', html: '<p>構造部材の膨張は次のように計算されます：<code>ΔL = L₀ · α · ΔT</code>。ここで、<strong>ΔL</strong>は総増加量、<strong>L₀</strong>は元の長さ、<strong>α</strong>は材料の膨張係数（単位：℃⁻¹）、<strong>ΔT</strong>は温度差です。この公式は、橋や屋根、外壁の伸縮継手設計の基本となります。</p>' },
  ],
  ui: {
    configTitle: '設定',
    labelMaterial: '材料',
    groupMetals: '金属',
    groupConstruction: '建築材料',
    groupWood: '木材・ポリマー',
    matSteel: '鋼鉄 (12 ppm/°C)',
    matAluminum: 'アルミニウム (23 ppm/°C)',
    matCopper: '銅 (17 ppm/°C)',
    matIron: '鉄 (11 ppm/°C)',
    matConcrete: 'コンクリート (12 ppm/°C)',
    matBrick: 'レンガ (9 ppm/°C)',
    matGlass: 'ガラス (9 ppm/°C)',
    matWoodFiber: '木材繊維方向 (5 ppm/°C)',
    matWoodTransversal: '木材直交方向 (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: '冶金',
    catConstruction: '施工',
    catWood: '木材・ポリマー',
    labelLength: '初期の長さ (m)',
    labelTempStart: '初期温度 (°C)',
    labelTempEnd: '最高温度 (°C)',
    deltaLabel: '温度差 (ΔT)',
    vizTitle: '膨張シミュレーション',
    resultGrowthLabel: '総膨張量 (ΔL)',
    resultFinalLabel: '最終的な長さ',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: '座屈リスク',
    jointTitle: '最小継手幅',
    riskLow: '低',
    riskModerate: '中',
    riskCritical: '高',
    tipDefault: '特殊な合金については、メーカーの仕様書で正確な係数を確認してください。',
    tipSteel: '鋼鉄とコンクリートはほぼ同じ膨張係数を持つため、鉄筋コンクリートは内部崩壊なしに機能します。',
    tipAluminum: 'アルミニウムは鋼鉄の約2倍膨張します。金属製のサッシなどでは弾性シーリング材の使用が必須です。',
    tipGlass: 'ガラスと鋼鉄はほぼ同じ膨張率であり、これは大型ガラスファサードの設計において鍵となります。',
    tipConcrete: 'コンクリートの係数は鋼鉄と非常に近く、混合構造が安定している理由です。',
    tipWood: '木材は熱による膨張は少ないですが、湿度による膨張が大きいです。長尺構造では繊維方向は非常に安定しています。',
    tipPvc: 'PVCは非常に膨張率が高いです。破損を防ぐために、動きを吸収する継手や工夫が必要です。',
  },
};
