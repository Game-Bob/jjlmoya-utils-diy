import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'excavation-volume-soil-swell-calculator';
const title = '掘削土量計算機・土のほぐれ率見積もり';
const description = '掘削前の地山土量（地山積）を計算し、砂、表土、粘土、砂利のほぐれ率（膨張率）を考慮したほぐれ土量を推定します。';

const faq = [
  {
    question: '地山土量（地山積）とほgeneric/ほぐれ土量の違いは何ですか？',
    answer: '地山土量は掘削前の締まった状態の土量です。ほぐれ土量は掘削によって土がほぐれ、空気を含んで体積が増加した後の想定土量です。',
  },
  {
    question: '掘削土量はどのように計算されますか？',
    answer: '長さ、幅、深さを掛け合わせて計算します。例えば長さ4m、幅3m、深さ0.5mの掘削では、地山土量は6立方メートルになります。',
  },
  {
    question: 'なぜ粘土はほぐれ率の幅が広いのですか？',
    answer: '粘土は水分量、密度、土質構造によって体積変化が大きく変わるため、計画値として広めの変動幅を設定しています。',
  },
  {
    question: 'この計算機は地盤調査の代わりになりますか？',
    answer: 'いいえ。搬出ダンプ台数や仮置き場の目安となる計画用計算です。構造物基礎や擁壁、汚染土壌の処理には専門の地盤調査が必要です。',
  },
];

const howTo = [
  { name: '掘削寸法を入力する', text: '掘削予定の長さ、幅、深さを入力します。必要に応じてメートル法とヤード・ポンド法を切り替えます。' },
  { name: '土質を選択する', text: '砂、表土、粘土、砂利から対象の土質を選択し、想定されるほぐれ率を適用します。' },
  { name: '搬出・仮置き計画を立てる', text: '地山土量から穴の容積を、ほgeneric/ほぐれ土量範囲からトラック手配や仮置き面積を検討します。' },
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq,
  bibliographyTitle: '参考文献と技術ノート',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '現場の2つの疑問に答える2つの土量指標', level: 2 },
    { type: 'paragraph', html: '<strong>地山土量</strong>は掘削前の原位置における土の体積（縦×横×深さ）です。<strong>ほぐれ土量</strong>は掘削搬出後に発生する土の占有体積です。両者を区別することでダンプ手配やダンプ台数の計算違いを防ぎます。' },
    { type: 'title', text: '搬出計画におけるほぐれ土量範囲の活用', level: 3 },
    { type: 'paragraph', html: '土質を選択し、算出されたほぐれ土量の最小値・最大値をダンプカー積載量や仮置きスペースと比較検討してください。' },
    { type: 'tip', title: '一般的なほ generic 率と土質試験の違い', html: '地下水や粘土の含有量により実際の増加率は変化します。擁壁工事や基礎工事では必ず専門の土質試験結果を使用してください。' },
    { type: 'title', text: 'ダンプ手配前の安全側評価', level: 3 },
    { type: 'paragraph', html: '土質判断に迷う場合は、大きめの膨張率を示す条件で試算し、余裕を持った搬出計画を立てることを推奨します。' },
  ],
  ui: {
    unitSystemLabel: '単位系',
    unitMetric: 'メートル法',
    unitImperial: 'ヤード・ポンド法',
    onboarding: '掘削寸法を入力し、土質を選択して地山土量とほぐれ土量の両方を算出します。',
    dimensionLabel: '掘削寸法',
    lengthLabel: '長さ',
    widthLabel: '幅',
    depthLabel: '深さ',
    soilLabel: '土質区分',
    soilSand: '砂',
    soilTopsoil: '表土・園芸土',
    soilClay: '粘土・粘性土',
    soilGravel: '砂利・礫',
    soilSandBand: 'ほぐれ率 10〜15%',
    soilTopsoilBand: 'ほぐれ率 15〜25%',
    soilClayBand: 'ほぐれ率 25〜40%',
    soilGravelBand: 'ほぐれ率 15〜25%',
    bankVolumeLabel: '地山土量（地山積）',
    bankVolumeHelp: '掘削前の締まった原位置土量',
    looseVolumeLabel: 'ほぐれ土量（ほぐれ積）',
    looseVolumeHelp: '掘削後の想定体積範囲',
    expansionLabel: '適用ほぐれ率',
    expansionHelp: '選択した土質に基づく体積変化率',
    sceneTitle: '掘削から仮置き・搬出まで',
    sceneBank: '地山状態',
    sceneLoose: 'ほぐれ状態',
    sceneGround: '地表面',
    sceneCut: '掘削断面',
    interpretationTitle: '結果の活用方法',
    interpretationText: '最初の数値は掘削箇所の穴の容積を示します。範囲数値は搬出・仮置きに必要な土の体積を示します。',
    warning: '搬出・仮置き計画用の推定値です。含水量や掘削方法により実際の体積は変化します。地盤調査の代用とはなりません。',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: '低いほぐれ率',
    soilStatusMedium: '標準的なほぐれ率',
    soilStatusHigh: '高いほぐれ率',
    soilStatusLabel: '計画基準区分',
  },
};
