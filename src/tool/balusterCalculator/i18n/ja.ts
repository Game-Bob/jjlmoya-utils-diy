import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'baluster-calculator';
const title = 'バラスター計算機：手すりの正確な間隔計算';
const description =
  '10cm規則を遵守した、手すりの子柱（バラスター）間の正確な間隔を計算します。自動図面作成機能付き。';

const faqData = [
  {
    question: 'バラスター間の最大法定距離は？',
    answer:
      'ほとんどの国際的な建築基準では、子供の事故を防ぐため、手すりの要素間の隙間は直径10cmの球体を通過させてはならないと定められています。',
  },
  {
    question: '間隔の測定方法：中心間か隙間か？',
    answer:
      "当計算機では両方を提供します。「隙間（クリアランス）」は子柱間の実際の空間（安全上重要）であり、「中心間距離（オンセンター）」は各バラスターの穴あけや固定位置を示すものです。",
  },
  {
    question: '配分が正確でない場合はどうなりますか？',
    answer:
      '計算機は自動的に子柱の数を調整し、最初と最後の隙間が同一になるようにします。これにより、視覚的な対称性と最大許容隙間の厳格な遵守が保証されます。',
  },
  {
    question: 'バラスターは溶接とネジ止めのどちらが良いですか？',
    answer:
      '材質によります。鋼鉄製の場合、溶接が最大の構造剛性を提供します。木製やアルミ製の場合は、メカニカルアンカーや貫通ネジが使用されます。重要なのは、手すりが少なくとも0.8 kN/mの水平荷重に耐えられることです。',
  },
];

const howToData = [
  {
    name: '全長を測定する',
    text: '手すりを設置する最初と最後のポスト間の正確な距離を測定します。',
  },
  {
    name: 'バラスターの厚さを定義する',
    text: '個々の子柱の幅（例：角パイプなら2x2cm、丸棒なら直径）を測定します。',
  },
  {
    name: '最大隙間を設定する',
    text: '希望する最大間隔を指定します（規則遵守のため10cmを推奨）。',
  },
  {
    name: '設置マークを取得する',
    text: '対称的で安全な配分を確保するために、穴あけを行う正確な位置のリストを確認します。',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
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
      text: '完全ガイド：手すりのバラスター間隔の計算方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '安全で美的に完璧な手すりを設計することは、数学的な精度と建築基準を組み合わせる芸術です。テラス、バルコニー、あるいは屋内階段であっても、バラスター（子柱）の正しい計算はプロジェクトの最も重要なステップです。計算ミスは視覚的な対称性を損なうだけでなく、構造物を違法で危険なものにする可能性があります。',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'なぜこの計算がそれほど重要なのか？',
      html: '<p>単に「隙間を埋める」だけではありません。子供の事故を防ぐために設計された国際的な安全基準である<strong>「4インチ球体規則（10cm規則）」</strong>を遵守することが目的です。</p>',
    },
    {
      type: 'title',
      text: '1. 安全基準：10cm規則',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最初の一枚の木材や金属を切断する前に、数学の背後にある「なぜ」を理解する必要があります。多くの国の建築基準法、および米国のIRC（国際住宅基準）は明確な基準を設けています。それは、<em>「垂直要素間の隙間は、直径10cm（4インチ）の球体を通過させてはならない」</em>というものです。',
    },
    {
      type: 'paragraph',
      html: 'この数値は恣意的なものではありません。それは幼児（一般的に1歳未満）の平均的な頭の直径です。子供の体が通り抜けても頭が挟まってしまうと、窒息のリスクが極めて高くなります。頭が通り抜ければ、そのまま転落する可能性があります。したがって、私たちの<strong>バラスター計算機</strong>の目的は単なる美学ではなく、命を救うことにあるのです。',
    },
    {
      type: 'title',
      text: '2. 数学的な問題：フェンスポスト・エラー',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'プログラミングや建設の世界には、<em>「フェンスポスト・エラー（Fencepost Error）」</em>と呼ばれる古典的な問題があります。10メートルのフェンスを1メートルごとに支柱を立てて作りたい場合、支柱は何本必要でしょうか？直感的な答えは10ですが、正解は11です。',
    },
    {
      type: 'paragraph',
      html: 'バラスターでも同様のことが起こりますが、バラスター自体の幅もスペースを占めるため、より複雑になります。当ツールで使用されている数式は、この連立方程式をあなたに代わって解決します。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'ステップA：隙間の計算',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>まず、最大許容スペースを使用した場合、理論的に何本のバラスターが入るかを決定します。得られた隙間が最大値<em>未満</em>になるように、この数値を切り上げます。</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'ステップB：正確な間隔の再計算',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>正確なバラスターの数（n）がわかったら、全体の長さから資材すべての幅を引き、それを隙間の数（n+1）で均等に割ることで、どれだけの空間が「余る」かを計算します。</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. 完璧な設置のためのステップバイステップガイド',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '数値を得ることは戦いの半分に過ぎません。ここでは、その数値を紙（または画面）から実際の作業現場へとどのように移すかを説明します。',
    },
    {
      type: 'title',
      text: 'ステップ1：精密測定',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ポストとポストの間の<strong>内寸</strong>を測定します。ポストの中心から測らないでください。埋めるべき正確な空間（L）を知る必要があります。手すりに複数の区間がある場合は、それぞれ個別に測定してください。建物が完全に直角であることは稀で、0.5cmの誤差が対称性を損なうことがあります。',
    },
    {
      type: 'title',
      text: 'ステップ2：中心を見つける',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '初心者がやりがちな間違いの第一位は、端から順番にバラスターを配置していくことです。これは、ほぼ確実に最後の隙間が不自然なサイズになり、視覚的な調和を壊す結果となります。<ul><li>手すりの<strong>正確な中心</strong>（L / 2）をマークします。</li><li>中心に<em>バラスター</em>を置くか、<em>隙間</em>を置くかを決めます。</li><li>中心にバラスターを置く場合：中心のマークの両側にバラスター幅の半分をマークします。</li><li>中心に隙間を置く場合：両側に隙間距離の半分（g / 2）をマークします。</li></ul>',
    },
    {
      type: 'title',
      text: 'ステップ3：スペーサー（別名割り付け材）の製作',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'バラスターごとにメジャーを使わないでください。人間が測ることによる累積誤差で、最後のバラスターが数センチずれてしまいます。プロのやり方は、当計算機が出した正確な隙間の寸法（g）で木片（または2つ）をカットすることです。',
    },
    {
      type: 'paragraph',
      html: 'このブロックを物理的なテンプレートとして使用します。バラスターを1つ設置し、ブロックを置き、次のバラスターをブロックに押し当てて設置し、固定します。これにより、ミリ単位の一貫性が保証されます。',
    },
    {
      type: 'title',
      text: '4. 必要な材料と道具',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'プロフェッショナルな仕上げのための備え',
      html: '<ul><li>高精度メジャー</li><li>鉛筆</li><li>水平器（垂直確認用）</li><li>スライド丸ノコ（綺麗な切断面のため）</li><li>ドリルとビス</li><li>スペーサーブロック（オーダーメイド）</li></ul>',
    },
    {
      type: 'title',
      text: '5. 追加の技術的な質問',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: '最後の隙間が合わない場合は？',
      html: '<p>当計算機を使用していれば、これは起こらないはずです。しかし現実世界では、木材は曲がりますし、ポストも常に真っ直ぐとは限りません。最後に1-2mmの過不足があっても目立たないので許容範囲です。もし1cm足りない場合は、スペーサーを確認してください。各ステップで数ミリずつ誤差が蓄積された可能性があります。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '子供がいない場合、バラスターをより広く離せますか？',
      html: '<p>法律的には「いいえ」です。建築基準は現在の居住者ではなく、建物そのものに適用されます。将来家を売る際、基準外の手すりは検査で問題になります。また、訪問者（甥、姪、孫など）が危険にさらされる可能性があります。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: '木材、金属、それともガラス？',
      html: '<p>この計算機は、<strong>あらゆる垂直方向の繰り返し要素</strong>に使用できます。水平にワイヤーを張る場合は、基準が異なります（通常、足をかけて登れないようにする必要があります）。ガラスの場合は連続したパネルとみなされるため、間隔ではなく耐衝撃性が問われます。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'ミース・ファン・デル・ローエ',
      html: '<p><em>「建築とは、空間に翻訳された時代の意志である。」</em></p><p>このツールが、より安全で美しい空間づくりの助けとなることを願っています。最低の高さ（一般的に90〜110cm）や耐荷重などについては、自治体の建築基準を必ず確認してください。</p>',
    },
  ],
  ui: {
    sectionTitle: '寸法',
    sectionDesc: '手すりの寸法を入力してください',
    labelRailLength: '全長 (L)',
    labelBalusterWidth: '子柱の幅 (w)',
    labelMaxGap: '最大隙間 (g)',
    blueprintTitle: '設置計画',
    blueprintRef: 'REF: BAL-001 // SCALE: AUTO',
    labelRequired: '必要な子柱数',
    labelExactGap: '正確な隙間',
    labelOnCenter: '中心間距離',
    labelTotalSpaces: '隙間の総数',
    labelCoveredLength: 'カバーされる長さ',
    labelDisclaimer: '* 表示されている寸法は可視化のための近似値です。',
  },
};
