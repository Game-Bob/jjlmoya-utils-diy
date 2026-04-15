import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'stair-calculator';
const title = '階段計算機：設計と施工';
const description = '階段の正確な寸法（蹴上げ、踏み面、角度）と材料を計算します。ブロンデルの法則（勾配規則）を遵守し、施工ミスを防ぎます。';

const faqData = [
  {
    question: 'ブロンデルの法則（勾配規則）とは何ですか？',
    answer: '階段を快適にするために、「蹴上げの2倍 ＋ 踏み面 ＝ 62〜64cm（2蹴 ＋ 踏 ＝ 63）」という関係式です。この法則は人間の平均的な歩幅に基づいており、安全で快適な昇降を保証します。',
  },
  {
    question: '1段の高さの最大値は？',
    answer: '住宅用では18〜19cmを超えないことが推奨されます。公共スペースでは、規定により最大17.5cmとされるのが一般的です。これを超えると疲れやすく、また危険を伴う可能性があります。',
  },
  {
    question: '限られたスペースで計算するには？',
    answer: '水平距離が限られている場合は、段数を増やす（蹴上げを低くする）か、あるいは快適さは損なわれますが急な勾配を受け入れる必要があります。この計算機は最適なバランスを見つけるのに役立ちます。',
  },
  {
    question: 'コンクリートの体積計算には何が含まれますか？',
    answer: '階段の段部分に加え、段を支える斜めの底板（スラブ）を考慮した総体積を計算します。このスラブ部分を無視すると、コンクリートの発注量が不足してしまいます。',
  },
  {
    question: '累積墨出しが重要な理由は？',
    answer: '各段を個別に測ると、わずかな誤差が積み重なっていきます。累積墨出しを行うことで、すべての段が正確に同じ高さになり、事故を防ぎ快適性が向上します。',
  },
];

const howToData = [
  { name: '段差を測る', text: '下の仕上げ床から上の仕上げ床までの全高（H）を測ります。これがすべての計算の基本データとなります。' },
  { name: '利用可能な長さを入力', text: '任意：スペースに制約がある場合は、利用可能な水平距離（L）を入力します。制約がない場合は0を入力します。' },
  { name: '段数を調整する', text: '計算機が初期段数を提案しますが、調整可能です。ブロンデル指標が緑色（62-64cm）になるよう調整すると最も快適です。' },
  { name: '施工パラメータを定義', text: 'スラブの厚さ、仕上げ材の厚さ、コンクリート強度、階段幅を指定します。これらのデータが最終的な計算に反映されます。' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'リファレンスと規定',
  bibliography: [
    { name: '建築基準法（階段の規定）', url: 'https://ja.wikipedia.org/wiki/%E9%9A%8E%E6%AE%B5' },
    { name: 'ブロンデルの法則 - Wikipedia（英語）', url: 'https://en.wikipedia.org/wiki/Stairs#Blondel\'s_Rule' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '階段の幾何学設計：ブロンデルの法則', level: 2 },
    { type: 'paragraph', html: '階段の快適さは人間の歩幅に依存します。昇降時、体は予測可能なリズムを求めます。ブロンデルの法則（2蹴上げ ＋ 1踏み面 ＝ 62〜64cm）は、安全性と快適性を保証する標準規格です。' },
    { type: 'title', text: '構造と材料の管理', level: 3 },
    { type: 'paragraph', html: 'プロフェッショナルな施工には、コンクリートスラブ（段を支える斜面）の考慮が不可欠です。この体積を無視すると発注不足や施工不良を招きます。計算機はこの計算を自動で行います。' },
    { type: 'title', text: '墨出しと誤差の蓄積', level: 3 },
    { type: 'paragraph', html: '建設において最大の敵はミリ単位の誤差です。各段を個別に測ると、誤差が蓄積され、最後の段が最初より5cm高くなったり低くなったりすることがあります。' },
  ],
  ui: {
    labelGeometry: '幾何学とスペース',
    labelTotalHeight: '全高 (H)',
    labelAvailableLength: '利用可能な長さ (L)',
    labelAvailableLengthHint: '制約がない場合は0を入力。',
    labelNumSteps: '段数',
    labelOptimize: '最適化 (18cm)',
    labelWork: '施工と設置',
    labelSlabThickness: 'スラブ厚 (e)',
    labelFinishThickness: '仕上げ厚',
    labelCeilingHeight: '天井高',
    labelStairWidth: '階段幅',
    labelConcreteStrength: 'コンクリート強度',
    optionH150: '18N (捨てコン)',
    optionH200: '21N (一般建築)',
    optionH250: '24N (構造用)',
    labelRiser: '蹴上げ',
    labelTread: '踏み面',
    labelSlope: '勾配',
    labelRealAdvance: '実際の全長',
    labelLayoutTable: '墨出しと実行',
    colStep: '段',
    colConcreteHeight: 'H. コンクリート',
    colFinishedHeight: 'H. 仕上げ後',
    colAdvance: '水平距離',
    adjustedNote: '調整済み',
    labelMaterials: '体積と材料',
    labelTotalConcrete: 'コンクリート総量:',
    labelCement: 'セメント (25kg袋):',
    labelSand: '必要な砂量:',
    unitM3: 'm³',
    unitBags: '袋',
    unitLiters: 'L',
    btnShare: '共有',
    btnPrint: 'PDF印刷',
    statusOptimalComfort: '快適な勾配',
    statusMarginLimit: '許容範囲',
    statusCriticalDesign: '厳しい勾配',
    statusRiserError: '踏面エラー',
    msgInvalidValues: '無効な値です',
    msgInsufficientSpace: 'スペース不足',
    msgDangerousTread: '踏み面{val}cmは危険です。',
    msgBlondelValue: 'ブロンデル値: {val}cm。',
    msgOptimalStep: '快適な歩幅: {val}cm。',
    msgLowCeiling: '頭上注意 (<2m)',
    msgCalculating: '計算中...',
    msgEnterMeasurements: '寸法を入力してください',
    shareTitle: '施工概要',
    shareMessage: '階段: H={h}cm, 段数={n}, 蹴上げ={ch}cm, 体積={vol}m3',
  },
};
