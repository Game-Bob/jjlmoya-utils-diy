import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'voltage-drop-calculator';
const title = '電圧降下・配線サイズ計算機';
const description = '配線の焼損を防ぐためのテクニカルツール。距離と電力に基づいて12V、24V、230Vの設置に必要な配線断面積を計算します。';

const faqData = [
  {
    question: '電圧降下とは何ですか？なぜ重要なのですか？',
    answer: '電気が配線を流れる際に発生する電圧の損失のことです。配線が細すぎたり長すぎたりすると、電圧が低下します。その結果、照明が暗くなったり、モーターが動かなかったり、配線が危険なほど熱くなったりします。',
  },
  {
    question: '12Vで10メートルの距離に必要な配線サイズは？',
    answer: '電力によります。12V・10Aを10mの距離で流す場合、最低でも2.5mm²以上が必要です。20Aなら6mm²が必要です。低電圧（12V/24V）では、230Vよりも電圧降下が非常に深刻な問題となります。',
  },
  {
    question: 'すべての設置に1.5mm²の配線を使用できますか？',
    answer: 'いいえ。1.5mm²は照明回路（最大10A）用です。コンセントには2.5mm²が必要です。キッチンや洗濯機には4mm²または6mm²が必要です。細すぎる配線の使用は危険で、火災の原因になります。',
  },
  {
    question: '許容される最大電圧降下はどれくらいですか？',
    answer: '一般家庭（230V）では、照明は最大3%、その他は5%です。12V/24V（キャンピングカー、ソーラー）では、全体で3%を超えないようにします。それ以上の降下は効率の低下や過熱のリスクを意味します。',
  },
];

const howToData = [
  { name: 'システム電圧を定義する', text: '12V、24V（ソーラー/キャンピングカー）、または230V（一般家庭）から選択します。' },
  { name: '電流の強さを入力する', text: '配線の先にある機器が消費する電流（A）または電力（W）を入力します。' },
  { name: '配線の距離を測る', text: '電源から機器までの配線の片道の長さをメートル単位で入力します。' },
  { name: '導体材料を選択する', text: '標準的な銅（Copper）またはアルミニウムを選択して、正確な抵抗率で計算します。' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: 'IEC 60364: 低圧電気設備', url: 'https://www.iec.ch/' },
    { name: 'オームの法則と抵抗率：Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E9%9B%BB%E6%B0%97%E6%B5%B5%E6%8A%B5%E6%8E%87' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '電圧降下に関する完全ガイド', level: 2 },
    { type: 'paragraph', html: '車中泊仕様のバンを製作したり、ソーラー設置を設計したり、庭に照明を引いたりする場合、あなたのプロジェクトを台無しにする可能性のある見えない敵がいます。それが<strong>電圧降下</strong>です。これは単なる技術的な問題ではありません。冷蔵庫が冷えるか止まってしまうか、安全な設置か火災のリスクかの違いです。' },
    { type: 'title', text: '電圧降下の計算式', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'オームの法則による正確な計算', html: '<p>式は <strong>ΔV = (2 × L × I × ρ) / S</strong> です。ここで L は片道の長さ、I は電流、ρ は抵抗率（銅は 0.0178）、S は断面積です。2をかけるのは電気が往復するためです。</p>' },
  ],
  ui: {
    heroDropLabel: '総電圧降下',
    heroVoltsUnit: 'ボルト',
    heroPctLoss: '% 損失',
    heroEffLabel: '効率',
    statusExcellent: '最高',
    statusAcceptable: '許容範囲',
    statusCritical: '危険',
    fieldVoltage: '電圧',
    fieldMaterial: '材料',
    materialCopper: '銅',
    materialAlum: 'アルミ',
    fieldLoad: '負荷',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'ワット',
    unitAmps: 'アンペア',
    fieldLength: '配線の長さ (片道)',
    unitMeters: 'メートル',
    fieldSection: '配線断面積',
    sectionInfo: '推奨',
  },
};
