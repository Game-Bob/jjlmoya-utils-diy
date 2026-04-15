import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';

const slug = 'furniture-fit-calculator';
const title = '引越し・家具スペース計算機';
const description = 'ソファ、タンス、テーブルがエレベーターやドアを通るか確認します。3Dピタゴラスの定理を使用して、傾けた時のサイズを計算し、引越しの失敗を防ぎます。';

const faqData = [
  {
    question: 'ドアよりも小さいのにソファが入らないことがあるのはなぜですか？',
    answer: '回転角度のためです。廊下が狭い場合、ソファを横向きや斜めに入れる必要があります。制限要因はドアの幅だけでなく、部屋で利用可能な回転半径も含まれます。',
  },
  {
    question: '家具の対角線とは何ですか？なぜ重要なのですか？',
    answer: '2つの対極にある角の間の最も長い距離のことです。床で組み立てた後の背の高い家具を、天井の低い部屋で立て直すことができるかどうかを知るために不可欠です。',
  },
  {
    question: 'エレベーターの正しい測り方は？',
    answer: '床だけを測らないでください。開いたドアの幅、有効奥行き、全高を測ります。ドアの付け根から後方の天井の角までの対角線が最も重要なデータです。',
  },
  {
    question: 'まずどの部品を分解すべきですか？',
    answer: 'ソファの脚、タンスの取っ手、冷蔵庫のドアなどは、数センチから10センチほどの余裕を生むことが多く、家具が入るか入らないかの分かれ目になります。',
  },
];

const howToData = [
  { name: '家具を測る（長さ、幅、高さ）', text: '肘掛けや取っ手などの突起部を含めた、オブジェクトの最大寸法を測ります。' },
  { name: '重要箇所を測る', text: 'ドアの有効開口幅（枠から枠まで）、エレベーターの内部、廊下の幅を測ります。' },
  { name: 'シミュレーターにデータを入力', text: 'ツールに寸法を入力して、家具の体積が搬入経路のスペースと適合するか確認します。' },
  { name: '傾斜を計算する', text: '家具が非常に高い場合は、計算された対角線を使用して、階段の踊り場やエレベーター内で回転できるか確認します。' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: 'Geometric Fit in Confined Spaces (MDPI Buildings)', url: 'https://www.mdpi.com/2075-5309/15/2/157' },
    { name: 'Moving Sofa Problem: Wolfram MathWorld', url: 'https://mathworld.wolfram.com/MovingSofaProblem.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '引越しの科学とピタゴラスの定理', level: 2 },
    { type: 'paragraph', html: '引越しは単なる体力のテストではありません。複雑な幾何学的パズルです。部屋やエレベーターの見かけのスペースは、特に3次元を無視すると人の目を欺きます。数学を利用することで、返品や搬送の失敗による多額の損失を防ぐことができます。' },
    { type: 'title', text: '3D対角線のコツ', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: '黄金律', html: '<p>家具だけを測ってはいけません。常に<strong>重要なアクセスポイント</strong>を測ってください：ドア枠の幅（ドアが180度開かない場合はドアの厚みを引く）、踊り場の天井の最も低い地点、そしてドアを閉めた時のエレベーターの実際の奥行きです。公式 <code>d = √(w² + h² + z²)</code> が、斜めにして入るかどうかを教えてくれます。</p>' },
    { type: 'title', text: '廊下のソファ問題', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: '操作の余裕', html: '<p>家具が80cmで開口部が80cmなら通ると思い込むのはよくある間違いです。そうではありません。作業員の手、生地の弾力性、壁の凹凸などを考慮すると、最低 <strong>2〜5 cm</strong> の余裕が必要です。この余裕がないと、家具が傷ついたり圧迫されて動かなくなったりします。</p>' },
    { type: 'title', text: '引越しを台無しにする3つの間違い', level: 3 },
    { type: 'paragraph', html: '正しい採寸をしていても、これら見えない要因が災いをもたらすことがあります：<strong>天井の照明</strong> — 対角線回転中に忘れられがちです。<strong>家具の回転半径</strong> — 固い家具は曲がりません。<strong>梱包</strong> — プチプチや保護用ダンボールは各辺に1〜3cm加わります。' },
  ],
  ui: {
    conTitle: 'スペースの寸法',
    conHint: '例：標準エレベーター、ドア枠、トラックなど。',
    objTitle: '家具の寸法',
    labelWidth: '幅 (cm)',
    labelHeight: '高さ (cm)',
    labelDepth: '奥行き (cm)',
    labelLength: '長さ (cm)',
    labelMargin: '許容誤差 (cm)',
    vizLabel: '簡易スペースビュー',
    verdictDefault: '入る？',
    verdictHint: '寸法を入力してスペースの適合性を確認してください。',
    verdictYes: 'はい、入ります！',
    verdictNo: '入りません',
    fitDirect: '家具はそのまま完璧に入ります。',
    fitDiagonal3d: '対角線上に傾ければ入ります（3Dピタゴラス）。',
    fitDiagonalPlane: '側面のいずれかの平面で傾ければ入ります。',
    fitNope: '家具が大きすぎて、斜めにしても入りません。',
    diagLabel: '最大対角線（3Dピタゴラス）:',
    objLabel: '家具',
  },
};
