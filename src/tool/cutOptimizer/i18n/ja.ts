import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cut-optimizer';
const title = '木材・板材カット最適化計算機';
const description =
  '木材、金属、パイプのカットを最適化する無料計算機。1Dおよび2Dのビンパッキングアルゴリズムで端材を最小限に抑えます。木工、金工、DIYリフォームに最適。';

const faqData = [
  {
    question: '1Dカット最適化とは何ですか？',
    answer:
      '数学的アルゴリズム（ビンパッキング問題など）を使用して、標準的な長さの材料（角材、プロファイル、パイプ）から、端材を最小限に抑えつつ必要なパーツをどのように切り出すかを決定するツールです。',
  },
  {
    question: 'なぜ刃の厚み（カーフ）を含める必要があるのですか？',
    answer:
      '鋸で材料を切るたびに、数ミリメートル（刃によりますが通常2mm〜4mm）が削り取られて消失します。このスペースを計算に入れないと、リストの最後のパーツが予定より短くなってしまいます。',
  },
  {
    question: '異なる長さのパーツを混ぜることはできますか？',
    answer:
      'はい。当計算機は、長さと数量のどのような組み合わせでも受け付けます。アルゴリズムが可能なすべての組み合わせを評価し、在庫材料の最大限の活用を優先します。',
  },
  {
    question: 'カットプランを保存するにはどうすればよいですか？',
    answer:
      '最適化後、ページを印刷するか、視覚的な図面のスクリーンショットを撮ることができます。これは、作業場でのカットの順番を間違えないための物理的なガイドとして役立ちます。',
  },
];

const howToData = [
  {
    name: 'ベース材料（在庫）の定義',
    text: '使用可能な角材やプロファイルの全長を入力します（例：2400mmや6000mm）。',
  },
  {
    name: '刃の厚み（カーフ）の設定',
    text: '鋸が一度のカットで削り取るミリメートル数を設定し、ミリ単位で正確な計算を行います。',
  },
  {
    name: '必要なパーツのリストアップ',
    text: 'プロジェクトに必要な各パーツの長さと数量を入力します。',
  },
  {
    name: '最適化の実行',
    text: '最も効率的なカット図面と、発生する端材の正確な割合を取得します。',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'カット最適化の究極ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '技術的に<strong>「切り出し問題（Cutting Stock Problem）」</strong>として知られるカット最適化は、産業工学における最も魅力的なロジスティックな課題の一つです。20個のパーツと5本の在庫材料があるプロジェクトでは、数百万通りの組み合わせが存在します。コンピュータアルゴリズムは数ミリ秒で最適解を見つけ出し、通常の15％の端材を5％未満に削減できます。',
    },
    {
      type: 'title',
      text: '1D線形カットと2Dパネルカット',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: '角材・プロファイル用の線形カット',
      html: '<p><strong>線形カット（1D）</strong>では、最適化は長さという一方向のみで行われます。材料の幅は一定であると想定されます。寸法材（角材、梁）、金属やアルミニウムのプロファイル、PVCや銅のパイプ、全ネジなどに理想的です。 </p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: '板材・シート用のパネルカット',
      html: '<p><strong>パネルカット（2D）</strong>では、幅と長さの二方向を管理します。このツールでは、各カットが端から端まで通るギロチン型アルゴリズムを使用します。中密度繊維板（MDF）、パーティクルボード、合板、ガラス、アクリル板、金属シートに最適です。</p>',
    },
    {
      type: 'title',
      text: '重要な要素：刃の厚み（カーフ）',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>カーフ（Kerf）</strong>とは、カットのたびに消失する材料のことです。標準的なテーブルソーの刃は一回のカットで3.0mmから3.2mmを消費します。手持ちの丸鋸は1.5mmから2.5mm程度です。アクリルへのレーザーカットはわずか0.1mmから0.3mmです。2400mmの角材で10回のカットを行うプロジェクトでカーフを無視すると、30mmから32mmの有効な材料を失うことになります。',
    },
    {
      type: 'title',
      text: 'Best Fit Decreasingアルゴリズム',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: '最適化計算の仕組み',
      html: '<p>最適化計算の核心には<strong>「Best Fit Decreasing (BFD)」</strong>戦略が使われています。まず、すべてのパーツを長い順に並べ替えます（大きいパーツほど配置が難しいため）。次に、各パーツについて、残りの端材の中で最もぴったり収まる（余りが最小になる）場所を探します。既存の材料に収まらない場合にのみ、新しい材料を使用します。このプロセスにより、ランダムに配置する場合と比較して端材を劇的に削減できます。</p>',
    },
  ],
  ui: {
    modeLinearLabel: '線形（角材）',
    modePanelLabel: 'パネル（板材）',
    configTitle: '材料設定',
    labelStockLength: '材料の長さ (mm)',
    labelStockWidth: '材料の幅 (mm)',
    labelKerf: '刃の厚さ / カーフ (mm)',
    cutsTitle: 'カットリスト',
    placeholderLength: '長さ',
    placeholderWidth: '幅',
    placeholderQty: '数量',
    btnRemoveTitle: '削除',
    statStockUsed: '使用材料',
    statTotalCuts: '合計カット数',
    statWaste: '合計端材',
    statEfficiency: '効率',
    vizTitle: 'カット図面',
    emptyState: 'パーツを追加して「計算」を押すと、カットプランが表示されます。',
    noValidCuts: '有効なカットを生成できませんでした。寸法を確認してください。',
    noValidPanels: '有効なパネルを生成できませんでした。パーツが板材のサイズに収まっているか確認してください。',
    stockLabel: '材料',
    panelLabel: 'パネル',
    wasteLabel: '端材：',
    effLabel: '効率：',
  },
};
