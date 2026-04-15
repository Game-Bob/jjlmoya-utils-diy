import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';

const slug = 'drill-sharpening-master';
const title = 'ドリル研磨マスター：精密ゲージ';
const description = 'HSSドリルの研磨用インタラクティブガイド。画面上のデジタルゲージで118°および135°の角度を確認。回転数を計算し、切削エラーを診断します。';

const faqData = [
  {
    question: 'ドリルを直接画面の上に置いてもいいですか？',
    answer: 'はい、ドリルの軸をデジタルゲージの中心線に合わせて置き、刃先の対称性を直接確認できるように設計されています。',
  },
  {
    question: '逃げ角（逃げ）が正しいかどうかはどうすればわかりますか？',
    answer: 'ドリルを回転させたとき、切刃の背面が目に見えて低くなっている必要があります。先端全体が均一に光って見える場合は、逃げ（デスタロナール）が不足しています。',
  },
  {
    question: '研磨後はどのくらいの回転数で使用すべきですか？',
    answer: '直径によります。内蔵の計算機が、最初のステップで選択した材質に基づいて正確な数値を提供します。',
  },
  {
    question: 'HSSと超硬の違いは何ですか？',
    answer: 'HSS（高速度鋼）は安価で衝撃に強いです。超硬はより高速での使用に耐えますが、脆いです。手研ぎではHSSが標準的です。',
  },
  {
    question: '研磨に特別な設備は必要ですか？',
    answer: '中目（120-150番）の回転砥石があれば十分です。重要なのは、安定した結果を得るために、砥石がバランスよく平らであることを保つことです。',
  },
];

const howToData = [
  { name: '材質を選択', text: '加工する金属や材料を選択して、目標の角度と切削速度を設定します。' },
  { name: '対称性を確認', text: 'ドリルを画面に合わせ、両方の切れ刃が青い線と一致していることを確認します。' },
  { name: 'かかと部を確認', text: '切刃の背面がワークに接触していないか目視で確認します（逃げ角）。' },
  { name: '回転数を計算', text: '直径を入力し、選択した材質に推奨される速度にドリルを調整します。' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: 'ワークショップマニュアル - ドリル研磨 (PDF)', url: 'https://ja.wikipedia.org/wiki/ツイストドリル#研磨' },
    { name: '金属技術 - ドリルの角度', url: 'https://www.google.com/search?q=ドリル+研磨+角度' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'ドリル研磨マスター：プロのテクニック', level: 2 },
    { type: 'paragraph', html: 'ドリルの研磨は、あらゆるワークショップにおいて最も価値のあるスキルの一つです。正しく研磨されたドリルは、穴の品質を向上させ、電動工具の寿命を延ばし、作業者の安全を確保します。' },
    { type: 'title', text: '研磨の柱：先端角', level: 3 },
    { type: 'paragraph', html: '先端角は、ドリルがどのように材料に食い込むかを決定します。標準的な角度は、軟鋼用が118°、ステンレス用が135°、硬鋼用が140°です。強度を損なうことなく貫通力を最大化するために、材質ごとに異なる角度が必要です。' },
    { type: 'title', text: '忘れられがちな要素：逃げ角', level: 3 },
    { type: 'paragraph', html: '最も一般的な間違いは、逃げ角（背面のリリーフ）を無視することです。切刃の背面が平らだと、ドリルは単に摩擦して極端な熱を発生させるだけになります。解決策は、刃先の背面をわずかに削り落とすことです。' },
  ],
  ui: {
    labelMaterial: '加工材質',
    matSteel: '鋼',
    matInox: 'ステンレス',
    matHard: '硬質材',
    matBrass: '真鍮',
    matPlastic: 'プラスチック',
    matWood: '木材',
    labelDiameter: 'ドリル径 (mm)',
    unitMm: 'mm',
    btnMinus: '－',
    btnPlus: '＋',
    labelVelocity: '速度',
    unitRpm: 'RPM',
    labelCooling: '切削',
    btnDiagnosis: '切れ味が悪い？診断',
    diagTitle: '故障診断',
    diagClose: '閉じる',
    diagIssue1: '1. 煙が出て貫通しない',
    diagIssue1Desc: '逃げ角が不足しています。切刃の背後の金属がワークをこすっています。切れ刃が一番高くなるように背面を削ってください。',
    diagIssue2: '2. 穴が偏心している、または大きい',
    diagIssue2Desc: '先端が中心にありません。左右の刃の長さが異なります。先端がゲージの正確な中心に触れるようにしてください。',
    diagIssue3: '3. 刃先が焼けた（青変）',
    diagIssue3Desc: '回転数が速すぎます。この直径と材質に対するツールのRPM計算を確認してください。',
    gaugeInstruction: '軸を垂直線に合わせて置いてください',
  },
};
