import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'concrete-mortar-calculator';
const title = 'コンクリート・モルタル計算機：セメント、砂、水の正確な配合量';
const description =
  '1立方メートルあたりに必要なセメントの袋数、砂のシャベル数、水の量を計算します。基礎、土間、壁、モルタル仕上げに。配合技術ガイド。';

const faqData = [
  {
    question: '1立方メートルあたり、25kgのセメント袋は何袋必要ですか？',
    answer:
      '標準的なコンクリート（強度クラスC20/25相当）の場合、締固めた状態で1立方メートル作るには、約14袋の25kgセメント（350kg）が必要です。',
  },
  {
    question: 'コンクリートとモルタル、どちらが強いですか？',
    answer:
      '砂利を含む「コンクリート」の方が構造的に強く、大きな荷重に耐えられます。砂のみの「モルタル」は、レンガの接合や表面の仕上げ（塗り壁）に最適です。',
  },
  {
    question: '1立方メートルはシャベル何杯分ですか？',
    answer:
      'シャベルのサイズによりますが、一般的に1立方メートルあたり砂180〜200杯程度と計算されます。当計算機では立方メートルを推奨シャベル数に換算します。',
  },
  {
    question: 'ミキサーなしで手練りすることは可能ですか？',
    answer:
      'はい、可能ですが非常に体力が必要です。水が逃げないように、清潔で水を通さない表面（鉄板や練り樽）の上で行うのが理想的です。',
  },
  {
    question: '乾燥時にコンクリートにひびが入るのはなぜですか？',
    answer:
      '硬化中の水分不足（急激な水分の蒸発）や、配合時の水の多すぎが主な原因です。施工後の数日間は散水（養生）することをお勧めします。',
  },
];

const howToData = [
  {
    name: '配合のタイプを選択',
    text: '基礎用のコンクリートか、壁用のモルタルかを選択します。',
  },
  {
    name: '体積（m³）を入力',
    text: '全体の体積を入力します。長さ × 幅 × 厚さを計算してください。',
  },
  {
    name: '必要量を確認',
    text: '購入すべき袋数、シャベル数、リットル数を確認します。',
  },
  {
    name: '比率を適用',
    text: '完璧な配合のために、セメント、砂、砂利の視覚的な配合ガイドに従います。',
  },
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    {
      name: 'コンクリート標準示方書 - 公益社団法人 土木学会',
      url: 'https://www.jsce.or.jp/',
    },
    {
      name: 'Concrete Mix Proportioning Standards (ASTM)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: 'モルタルの配合と種類について',
      url: 'https://ja.wikipedia.org/wiki/モルタル',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'コンクリートとモルタルの配合量ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'リフォームや建設に直面したとき、最も多い質問の一つが<strong>「1立方メートルのコンクリートを作るのにセメントは何袋必要か？」</strong>というものです。単に材料を混ぜるだけではありません。構造物の最終的な強度は、セメント、砂、砂利、水の比率の正確さに直接左右されます。当計算機は、産業基準の測定値を、現場で使いやすい25kg袋、シャベル杯数、リットル単位に換算します。',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: '水の入れすぎはコンクリートを弱くします',
      html: '<p>コンクリートの流動性を良くしようとして水を入れすぎるのは非常によくある間違いです。過剰な水は硬化過程での蒸発時に気泡（ポア）を作り、最終的な強度を劇的に低下させます。理想的な硬さは、<strong>液体ではなく、硬いペースト状</strong>であるべきです。水は必要最小限に抑えてください。</p>',
    },
    {
      type: 'title',
      text: '用途別の標準配合比率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>コンクリートの配合量</strong>は用途によって異なります。<strong>標準コンクリート</strong>（基礎や土間用）の比率は、セメント1：砂2.5：砂利3です。<strong>レンガ積み用モルタル</strong>は、セメント1：砂4です。<strong>強力なモルタル仕上げ</strong>は、セメント1：砂3です。砂利を含むコンクリートはより大きな荷重に耐え、砂のみのモルタルは接着や塗り壁に最適です。',
    },
    {
      type: 'title',
      text: '必要な立方メートル（m³）の計算方法',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: '土間の計算例',
      html: '<p>長さ4m、幅3m、厚さ15cmの庭の土間の場合：<strong>4 × 3 × 0.15 = 1.80 m³</strong>となります。当計算機の「寸法から計算」セクションに入力すれば、この計算を自動で行います。</p><p>こぼれによる損失や地面の凹凸を考慮し、常に<strong>10％多く購入する</strong>ことを忘れないでください。</p>',
    },
    {
      type: 'title',
      text: '混ぜる順番と袋単位の配合',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '現場ではよく「300キロ配合（1立方メートルあたりセメント300kg）」といった言い方をします。コンクリートミキサーで正しく混ぜるには：まず水、次に砂利と砂（ダマをほぐすため）、そして最後にセメントを徐々に加えます。',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: '足りなくならないための「10％ルール」',
      html: '<p>こぼれ、地面の不規則性、湿った骨材の実際の体積変動を補うために、計算値より常に<strong>10％多く材料を購入</strong>してください。工事が止まった状態で二度目の注文をするよりも、はるかに安上がりです。</p>',
    },
  ],
  ui: {
    mixH200Label: '標準コンクリート',
    mixH200Hint: '基礎や土間に最適',
    mixM40Label: '左官・レンガ用モルタル',
    mixM40Hint: '壁や間仕切りに',
    mixM80Label: '強力モルタル仕上げ',
    mixM80Hint: '床仕上げや強力な塗り壁に',
    modeDimsLabel: '寸法から計算',
    modeDirectLabel: 'm³を直接入力',
    labelLength: '長さ',
    labelWidth: '幅',
    labelThickness: '厚さ',
    labelVolume: '合計体積 (m³)',
    binderCementLabel: 'セメント',
    binderLimeLabel: '石灰',
    summaryLabel: '合計充填量：',
    resUnitSacks: '袋 (25kg)',
    resUnitShovels: 'シャベル数',
    resUnitLitres: 'リットル',
    resLabelCement: 'ポルトランドセメント',
    resLabelLime: '水硬性石灰',
    resLabelSand: '砂 / 骨材',
    resLabelWater: '飲料水',
    proportionsTitle: '選択された配合の比率',
    propLabelSand: '砂',
    propLabelGravel: '砂利',
    adviceH200: '柱、基礎、荷重を受ける構造物に最適です。',
    adviceM40: 'レンガやブロックの壁を建てるのに最適です。',
    adviceM80: '非常に耐性の高い床仕上げに使用してください。',
    adviceLimeH200: '石灰コンクリートは柔軟性がありますが、硬化に時間がかかります。',
    priceTotalLabel: '予想予算',
    priceSackLabel: '1袋あたり',
    priceSandLabel: '砂 (m³)',
    priceDisclaimer: '参考市場価格です。地元の供給業者に合わせて調整してください。',
  },
};
