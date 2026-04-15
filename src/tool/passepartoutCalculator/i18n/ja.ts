import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'passepartout-calculator';
const title = 'マット紙計算機：額装用視覚補正マージン';
const description = '視覚補正（ボトムウェイティング）を考慮したマット紙（パスパルトゥー）のマージン計算ツール。写真やアートをギャラリーのようなプロポーションで額装しましょう。';

const faqData = [
  {
    question: '視覚中心補正（ボトムウェイティング）とは何ですか？',
    answer: '額装において、下のマージンを他のマージンよりもわずかに広くするデザイン原則です。これにより、作品を掛けた時に幾何学的な中心が「下がって」見える視覚的な錯覚を補正します。',
  },
  {
    question: 'マット紙はどのような素材が良いですか？',
    answer: 'アートの保存を考慮する場合、中性紙または無酸（アシッドフリー）のボード（アルファセルロースやコットン素材）を使用してください。安価なボードは時間の経過とともに黄変し、リグニンによって作品を傷める可能性があります。',
  },
  {
    question: 'マージンの色の選び方は？',
    answer: '作品を邪魔しないオフホワイトやソフトなクリーム色が標準的です。暗い色のマージンは写真の白を強調し、色のついたマージンは作品の色調と競合しないよう注意深く選ぶ必要があります。',
  },
  {
    question: '理想的なマージンの幅は？',
    answer: 'プロフェッショナルな基準は5〜8cmです。マージンが狭すぎると作品が「窒息」しているように見え、非常に広いと小さな作品に英雄的でミニマリズムな印象を与えることができます。',
  },
];

const howToData = [
  { name: '作品を測る', text: '額装する紙やキャンバスの正確な幅と高さを測ります。マット紙を画像に少し重ねたい場合は、数ミリメートル差し引いてください。' },
  { name: '額の内寸を測る', text: '額の内部、またはマットボードが収まる溝の寸法を測ります。' },
  { name: '視覚補正を有効にする', text: 'プロフェッショナルな仕上がりにするために、下のマージンを自動的に大きくしたい場合は、計算機のオプションを選択してください。' },
  { name: 'ボードをカットする', text: '算出された寸法を使用して、ボードの窓（開口部）と外寸をカットします。斜めの断面をきれいにするために、45度カッターの使用をお勧めします。' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: 'ISO 9706: 文書用長期保存紙', url: 'https://www.iso.org/standard/22495.html' },
    { name: 'PPFA: Professional Picture Framers Association', url: 'https://ppfa.com/' },
    { name: 'Fine Art Trade Guild: 額装基準', url: 'https://www.fineart.co.uk/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '完璧な額装の科学', level: 2 },
    { type: 'paragraph', html: '<strong>マット紙</strong>（パスパルトゥー）は単なる装飾ではありません。作品が呼吸するための肺のような役割を果たします。この計算機は、ボードをカットするための正確な寸法を算出するのに役立ち、作品が額の中で完璧に中央に配置され、視覚的にバランスが取れるようにします。' },
    { type: 'title', text: 'なぜ「ボトムウェイティング」が必要なのですか？', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: '幾何学的中心の視覚的錯覚', html: '<p>人間の目は、垂直方向の幾何学的中心を実際よりもわずかに低い位置にあると知覚する傾向があります。作品を正確な中央に額装すると、下に「落ちて」見えることがあります。</p><p><strong>ボトムウェイティング</strong>は、下のマージンをわずかに大きく残すことでこの錯覚を補正し、作品を視覚的に持ち上げて完璧な中央に見えるようにします。</p>' },
    { type: 'title', text: 'マット紙の保存素材', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: '保存用の中性紙・アシッドフリーボード', html: '<p>ボードを選ぶ際は、必ず<strong>「Acid-Free（アシッドフリー）」</strong>や<strong>「Museum Quality（ミュージアムクオリティ）」</strong>という言葉を探してください。安価な木材パルプのボードは時間が経つと黄変し、作品を台無しにする酸を放出する可能性があります。</p>' },
  ],
  ui: {
    sectionTitle: '寸法',
    sectionDesc: '寸法をセンチメートルで入力してください。',
    frameSizeTitle: '額のサイズ',
    artSizeTitle: '作品のサイズ',
    labelWidth: '幅 (cm)',
    labelHeight: '高さ (cm)',
    labelBottomWeighting: 'ボトムウェイティング',
    descBottomWeighting: '視覚的バランスのために下のマージンを広くする',
    labelOffset: 'オフセット (%)',
    errorMsg: '作品サイズは額のサイズより小さくする必要があります。',
    labelTop: '上',
    labelBottom: '下',
    labelLeft: '左',
    labelRight: '右',
    artPlaceholder: 'あなたの作品',
  },
};
