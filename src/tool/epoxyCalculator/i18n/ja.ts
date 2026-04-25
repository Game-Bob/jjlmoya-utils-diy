import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'epoxy-resin-calculator';
const title = 'エポキシ樹脂計算機：正確な配合と体積';
const description = 'プロジェクトに必要なエポキシ樹脂と硬化剤の正確な量を計算します。リバーテーブル、ジュエリー、型取りでの無駄を防ぎます。';

const faqData = [
  {
    question: 'なぜ樹脂において正確な比率がそれほど重要なのですか？',
    answer: '他の混合物とは異なり、エポキシ樹脂は蒸発によって乾くのではなく、化学反応（重合）によって硬化します。樹脂または硬化剤が多すぎると反応が不完全になり、作品がベタついたり、柔らかくなったり、永久的な気泡が残ったりします。',
  },
  {
    question: '重量比と容量比の違いは何ですか？',
    answer: '多くの樹脂は容量比2:1で混合されますが、硬化剤の方が密度が高いことが多いため、重量比では100:45になることがあります。常にメーカーの指定する基準を使用し、可能であれば最大限の精度のためにデジタル秤を使用してください。',
  },
  {
    question: '混ぜる時に気泡を防ぐにはどうすればいいですか？',
    answer: 'カップの壁面をしっかり削りながら、一定の円運動で少なくとも3分間ゆっくりとかき混ぜます。注ぐ前に数分間混合物を休ませることで、気泡が表面に浮き上がってきます。',
  },
  {
    question: '可使時間（ポットライフ）とは何ですか？',
    answer: '混合物が硬化（ゲル化）し始めるまでに作業できる時間のことです。夏場や大量に混ぜる場合は、放熱反応（熱の発生）により、この時間は大幅に短縮されます。',
  },
];

const howToData = [
  { name: '型の寸法を測る', text: '樹脂を流し込みたい箇所の長さ、幅、深さ（厚み）を測ります。' },
  { name: '混合比を入力する', text: '製品のラベルを確認し、混合比が1:1、2:1、または3:1のどれであるか、またそれが重量基準か容量基準かを確認します。' },
  { name: '成分を計量する', text: 'デジタル秤の上で、清潔な容器にまず主剤（A液）、次に硬化剤（B液）を注ぎます。' },
  { name: 'テクニカルミキシング', text: '混合液が完全に透明になり、密度の異なる線が見えなくなるまで、優しくかき混ぜます。' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'エポキシ樹脂の計算と混合ガイド', level: 2 },
    { type: 'paragraph', html: 'エポキシ樹脂は蒸発して乾く塗料ではありません。複雑な<strong>放熱化学反応</strong>です。エポキシ分子がポリアミン分子と連鎖し、結晶状の固体熱硬化性ポリマーを形成する時に魔法が起こります。' },
    { type: 'paragraph', html: '耐久性のある芸術作品とベタベタの失敗作の分かれ目は、<strong>正確な化学量論</strong>にあります。混合比がわずか5%狂っただけで、完全な硬化が永続的に妨げられることがあります。このツールは数学的な推測を排除し、あなたが創造に集中できるようにします。' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: '容量か重量か？', html: '<p>初心者の最大の失敗は、100mlが100gであると仮定することです。<strong>樹脂は硬化剤よりも密度が高いです。</strong></p><p>製品データシートに「重量比 100:50」とある場合、それは「容量比 2:1」と同じではありません。この計算機は、型を満たすための標準である<strong>体積（容量）</strong> (V = L × W × H) で計算します。</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: '一般的な比率', html: '<ul><li><strong>1:1</strong> — コーティング、ニス、速乾性接着剤。</li><li><strong>2:1</strong> — 標準。リバーテーブル、ジュエリー、中規模の型取り。</li><li><strong>3:1</strong> — 工業用床材や高硬度の構造用積層板。</li></ul>' },
    ]},
    { type: 'title', text: '安全プロトコルとベストプラクティス', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: '重要な温度', html: '<p>常に <strong>21°C から 25°C</strong> の間で作業してください。寒さは反応を止め、作品を白濁させることがあります。過度の熱は放熱反応を危険なほど加速させます（フラッシュキュア）。</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'ダブルカップ法', html: '<p>一度の混合を過信しないでください。カップの側面と底をよく削り、混合物を<strong>2つ目の清潔なカップ</strong>に移して再度混ぜます。これにより、未反応の材料が残るのを防ぎます。</p>' },
    ]},
  ],
  ui: {
    shapeRect: '長方形',
    shapeCylinder: '円柱形',
    shapeSphere: '球形',
    labelLength: '長さ (cm)',
    labelWidth: '幅 (cm)',
    labelDiameter: '直径 (cm)',
    labelDepth: '深さ (cm)',
    labelRatio: '混合比（重量/容量）',
    labelCustomRatio: 'カスタム比率を使用 (A:B)',
    labelResinA: '主剤 (A)',
    labelHardenerB: '硬化剤 (B)',
    labelWasteTitle: '安全マージン',
    labelWasteDesc: '損失分として5%追加',
    labelTotalVolume: '総体積',
    labelPartA: 'A液（主剤）',
    labelPartB: 'B液（硬化剤）',
    labelVisualization: '視覚化',
    shapeRectLabel: '長方形ブロック',
    shapeCylinderLabel: '円柱 / 円形の型',
    shapeSphereLabel: '完全な球体',
  },
};
