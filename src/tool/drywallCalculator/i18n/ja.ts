import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'drywall-calculator';
const title = '石膏ボード枚数・軽鉄下地計算ツール';
const description = '間仕切り壁や張り付け壁に必要な石膏ボード枚数、スタッド（C形鋼）、ランナー（U形鋼）、ビス、目地 tape、パテの必要量を正確に算出するプロ仕様の計算ツールです。';

const faqData = [
  {
    question: '間仕切り壁に必要な石膏ボードの枚数はどのように計算しますか？',
    answer: '壁の長さと天井の高さを掛け合わせて壁面積を算出します。両面仕上げの場合は面積を2倍、両面2枚張りの場合は4倍にします。1枚あたりのボード面積（910x1820mmで約1.65m2）で割り、切断ロス分として10%を加算します。',
  },
  {
    question: 'スタッド間隔は40cmと60cmのどちらを選ぶべきですか？',
    answer: '一般的な住宅のドライウォール間仕切りでは60cmピッチが標準です。タイル仕上げを施す壁、浴室やキッチンなどの湿気エリア、遮音壁、または壁高が3メートルを超える場合は40cmピッチ（高耐荷重）を選択してください。',
  },
  {
    question: '用途に応じた石膏ボードの選定基準は何ですか？',
    answer: '一般居室には標準ボード（タイプA）、浴室・厨房には耐水ボード（タイプH1）、厨房・ボイラー室周辺には強化耐火ボード（タイプF）、防音居室には高密度遮音ボードを使用します。',
  },
  {
    question: '石膏ボード1枚あたり必要なビスの枚数は何本ですか？',
    answer: 'サブロク板（910x1820mm）1枚あたり約30本の軽鉄用軽天ビス（3.5x25mm）が必要です。外周部は25cm間隔、中央スタッド部は30cm間隔で固定します。',
  },
  {
    question: '上下ランナーの下に遮音テープを貼る理由は何ですか？',
    answer: 'ポリエチレン製の自粘着遮音テープを施工することで、床・天井のスラブと金属下地間の固体伝播音や vibration の伝達を遮断し、気密性と防音性能を確保します。',
  },
];

const howToData = [
  { name: '壁の寸法を入力', text: '間仕切り壁の長さと Ceiling Height をメートルまたはフィートで入力します。' },
  { name: '下地ピッチと張り枚数を設定', text: 'スタッドピッチ（40cm/60cm）、単層・複層張り、片面・両面施工を選択します。' },
  { name: '拾い出し結果とCAD図面を確認', text: '材料一覧（スタッド、ランナー、ビス、パテ）と軽鉄下地割り図面を確認します。' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '軽量鉄骨下地（LGS）と石膏ボード割付の構造計算説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '軽量鉄骨間仕切り壁の施工では、亜鉛めっき鋼鈑スタッド（C形）およびランナー（U形）の部材割付とボード継ぎ目の目地振りが重要です。規格に基づき適切な間隔で下地を配することで、たわみやひび割れを防ぎます。',
    },
    {
      type: 'title',
      text: 'スタッド間隔の規定: 40cmピッチ vs 60cmピッチ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>60cmピッチ</strong>は幅広ボード施工の標準です。タイル貼りや3mを超える高天井には、より剛性の高い<strong>40cmピッチ</strong>の補強施工が必須となります。',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '目地振りとビス留めパターン',
      html: '<p>隣り合うボードの継ぎ目が一直線（十字目地）にならないよう、最低40cm以上ずらして張ります。ビスは端部<strong>25cm間隔</strong>、中間部<strong>30cm間隔</strong>で打ち込みます。</p>',
    },
    {
      type: 'title',
      text: 'ロス率の考慮と目地パテ必要量',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '開口部や端部の切りしろとして<strong>10%のロス分</strong>を見込みます。目地処理には1平米あたり約0.8kgの目地パテとジョイントテープを使用します。',
    },
  ],
  ui: {
    unitSystemLabel: '測定単位系',
    unitMetric: 'メートル法 (m, cm, kg)',
    unitImperial: 'ヤード・ポンド法 (ft, in, lb)',

    paramLengthLabel: '壁の長さ',
    paramHeightLabel: '壁の高さ',
    paramSpacingLabel: 'スタッド間隔',
    paramSpacing40Metric: '40 cm (高耐荷重)',
    paramSpacing60Metric: '60 cm (標準)',
    paramSpacing40Imperial: '16 in (高耐荷重)',
    paramSpacing60Imperial: '24 in (標準)',
    paramLayersLabel: 'ボード張り層数',
    paramSingleLayer: '単層張り (1枚張り)',
    paramDoubleLayer: '複層張り (2枚張り)',
    paramSidesLabel: '施工面',
    paramDoubleSided: '両面施工 (間仕切り壁)',
    paramSingleSided: '片面施工 (張り付け壁)',
    paramBoardTypeLabel: '石膏ボード種類',
    boardTypeStandard: '標準ボード (タイプA)',
    boardTypeMoisture: '耐水ボード (タイプH1)',
    boardTypeFire: '強化耐火ボード (タイプF)',
    boardTypeAcoustic: '遮音ボード (タイプA)',
    paramWasteLabel: 'ロス率・余剰分',

    summaryWallArea: '壁純面積',
    summaryBoardArea: '合計ボード施工面積',

    resBoardsLabel: '石膏ボード必要枚数',
    resBoardsUnit: '枚',
    resStudsLabel: 'スタッド (縦枠C形)',
    resStudsUnit: '本',
    resTracksLabel: 'ランナー (上下枠U形)',
    resTracksUnit: '本',
    resDrywallScrewsLabel: '軽鉄用ボードビス',
    resDrywallScrewsUnit: '本',
    resFramingScrewsLabel: '下地接合ビス',
    resFramingScrewsUnit: '本',
    resJointTapeLabel: 'ジョイントテープ',
    resJointTapeUnit: '長さ',
    resJointCompoundLabel: '目地処理パテ',
    resJointCompoundUnit: '重量',
    resAcousticBandLabel: '遮音・気密パッキン',
    resAcousticBandUnit: '長さ',

    diagramWallTitle: 'CAD下地割りエレベーション',
    diagramStudLegend: 'C形スタッド',
    diagramTrackLegend: 'U形ランナー',
    diagramBoardLegend: 'ボード千鳥張り割付',
    diagramModeStructure: '軽鉄下地のみ',
    diagramModeBoard: 'ボード張り状態',
  },
};
