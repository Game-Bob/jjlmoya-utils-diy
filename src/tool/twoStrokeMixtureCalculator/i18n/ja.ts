import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'two-stroke-fuel-mixture-calculator';
const title = '2サイクル混合油計算機：正確なオイル混合比率を算出';
const description = '2サイクルエンジン用の正確な混合比を瞬時に計算。チェーンソー、原付、バイク、小型エンジンに必須のツール。1:25、1:33、1:40、1:50の比率に対応。';

const faqData = [
  {
    question: '2サイクルエンジンとは何ですか？',
    answer: '2サイクルエンジンは、ピストンの2往復で吸気と燃焼を行う仕組みで、4サイクルよりも構造が単純で軽量です。チェーンソーや草刈機、原付、一部のバイクに使用されます。潤滑のために燃料にオイルを混ぜる必要があります。',
  },
  {
    question: '一般的な混合比率はどのくらいですか？',
    answer: '一般的な比率は1:25（濃いめ、保護優先）、1:33（古い機械）、1:40（標準）、1:50（薄め、現代のエンジン）です。必ずエンジンの取扱説明書を確認してください。比率を間違えるとエンジン故障の原因になります。',
  },
  {
    question: '混合比を間違えるとどうなりますか？',
    answer: 'オイルが多すぎる（濃い）と、煙が多くなり、プラグの汚れや性能低下を招きます。オイルが少なすぎる（薄い）と、焼き付きやピストン損傷、エンジンの再起不能な故障につながります。',
  },
  {
    question: 'どのようなオイルを使えばよいですか？',
    answer: 'お使いの機械に適合した2サイクル専用オイルを使用してください。高性能な化学合成油は、鉱物油よりも保護性能が高く、燃焼もクリーンです。4サイクル用オイルは絶対に使用しないでください。',
  },
  {
    question: '燃料とオイルを混ぜる方法は？',
    answer: '清潔な容器にガソリンの一部を入れ、計算された量のオイルを加え、残りのガソリンを足します。1〜2分間しっかりと振って完全に混ぜ合わせてください。容器には混合日を明記しておきましょう。',
  },
];

const howToData = [
  { name: '比率を確認する', text: '取扱説明書や機械の表示を確認します。一般的例：チェーンソー（1:40または1:50）、古いバイク（1:25）。間違った比率はエンジンを壊します。' },
  { name: 'ガソリン量を測る', text: '必要なガソリンの量を決めます。このツールはリットル単位で計算可能です。正確な計量が正確なオイル量につながります。' },
  { name: 'オイル量を計算する', text: 'ガソリン量と比率を入力します。計算機が完璧な混合油を作るために必要なオイル量（mlまたはL）を正確に表示します。' },
  { name: '丁寧に混ぜる', text: '清潔な容器にガソリンとオイルを入れ、1〜2分間よく振ります。完全に混ざり合うことが潤滑には不可欠です。' },
  { name: 'ラベルを貼って使用', text: '容器に日付と比率を記入します。混合燃料は劣化しやすいため、30日以内に使い切るようにしてください（特に合成油の場合）。' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '2サイクル混合燃料計算機：チェーンソーや原付のための正確な混合比算出', level: 2 },
    { type: 'paragraph', html: '2サイクルエンジンを長く使うためには、正確な混合燃料が不可欠です。比率を間違えると、わずか数分でエンジンを破壊してしまう可能性があります。この計算機は、燃料量とエンジンタイプに応じた正確なオイル量を瞬時に算出し、作業場での勘に頼った作業を排除します。' },

    { type: 'title', text: 'なぜ2サイクルエンジンには燃料にオイルが必要なのか', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: '決定的な違い', html: 'オイルタンクが独立している4サイクルエンジンとは異なり、2サイクルエンジンは燃料に直接オイルを混ぜます。燃焼のたびに、混合油がエネルギーを生むと同時に潤滑も行います。オイルポンプがないため、この混合燃料だけがピストンの寿命を守っています。' },

    { type: 'title', text: '2サイクル混合比クイックリファレンス', level: 3 },
    { type: 'table', headers: ['比率', 'オイル%', '用途', 'エンジンタイプ', '特徴'], rows: [
      ['1:25', '3.85%', '最大保護', '1980年代以前の機械、高負荷使用、旧車バイク', '濃い混合比：煙とカーボンは増えるが、焼き付きに対する保護性能は最大'],
      ['1:33', '2.94%', 'クラシック機材', '80〜90年代の小型エンジン、古いチェーンソー', '適度な濃度：保護と効率のバランスが良い'],
      ['1:40', '2.44%', '業界標準', 'ほとんどの現代的なチェーンソー、原付、小型エンジン', '標準的な推奨比率：現代の化学合成油向けに設計'],
      ['1:50', '1.96%', '現代的な効率', '最新のチェーンソー、高性能バイク', '薄い混合比：煙が少なく燃焼がクリーン。高品質な合成油専用']
    ] },

    { type: 'title', text: '間違った比率がもたらす結果', level: 3 },
    { type: 'proscons', items: [
      { pro: 'オイル過多（濃い混合比）', con: '白い煙が大量に出る、プラグが被る、カーボンが蓄積する、加速が悪くなる、故障の原因' },
      { pro: 'オイル不足（薄い混合比）', con: '数秒でピストンが焼き付く、シリンダー壁の損傷、致命的なエンジン故障' },
      { pro: '正しい比率', con: 'スムーズな動作、適切な潤滑、最適な燃焼、エンジン寿命の延長、確実な始動' }
    ] },

    { type: 'title', text: '主な機器の混合比', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'チェーンソー', html: '<strong>スチール、ハスクバーナ、共立：</strong> 現代のモデルは通常1:40または1:50を推奨しています。必ずマニュアルを確認してください。現代機に1:25を使うとプラグ被りや性能低下を招きます。90年代以前の古い機械は1:25や1:33を指定している場合があります。' },
    { type: 'card', icon: 'mdi:motorcycle', title: '原付・バイク', html: '<strong>ベスパ、ホンダ、ヤマハ：</strong> 古いモデルは1:33、現代版は1:40〜1:50が多いです。高性能なスポーツモデルは1:50を指定することが一般的です。サービスマニュアルが唯一の正解です。' },
    { type: 'card', icon: 'mdi:tools', title: 'ブロワー・刈払機', html: '<strong>マキタ、ゼノア：</strong> 通常は1:50（現代機）または1:40です。これらは季節的な使用が多いため、薄めの比率にすることで信頼性を損なわず煙を抑える設計になっています。' },

    { type: 'title', text: 'オイルの種類も比率と同じくらい重要', level: 3 },
    { type: 'comparative', items: [
      { title: '鉱物油（2サイクル用）', description: '時々使用する場合の安価な選択肢。灰分が多く、煙も多め。標準的な比率では十分な保護性能。', icon: 'mdi:beaker', points: ['低コスト', '煙が目立つ', 'カーボンの蓄積が多い', '1:40比率に適する'] },
      { title: '化学合成油（2サイクル用）', description: '頻繁に使用する場合のプレミアムな選択。燃焼がクリーンで保護性能が高く、薄い比率も可能。', icon: 'mdi:flame', points: ['煙が非常に少ない', '最高のエンジン保護', '1:50比率でも安全', '保管時の安定性が高い'], highlight: true },
      { title: '半合成油（部分合成油）', description: '鉱物油と合成油の中間。手頃な価格で良好な保護性能。多くのメーカーが推奨。', icon: 'mdi:beaker-outline', points: ['バランスの取れた性能', '中程度のコスト', '1:40比率に最適', '鉱物油より煙が少ない'] }
    ], columns: 3 },

    { type: 'title', text: '混合手順ステップバイステップ', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: '正しい混ぜ方', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>混合専用の容器を使用する</strong>：燃料混合専用の清潔で乾燥したもの。</li><li><strong>まずガソリンの半分を入れる</strong>：容器にガソリンを先に入れます。</li><li><strong>計算されたオイル量を加える</strong>：この計算機で正確な量を確認してください。</li><li><strong>残りのガソリンを加える</strong>：目標の総量までガソリンを足します。</li><li><strong>1〜2分間激しく振る</strong>：色が均一になるまで。均質な混合が均一な潤滑を生みます。</li><li><strong>ラベルを貼る</strong>：日付、比率、燃料の種類を明記します。</li><li><strong>30日以内に使い切る</strong>：合成油でも最大60日程度が目安です。</li></ol>' },

    { type: 'title', text: 'マニュアルの比率に疑問を感じたら', level: 3 },
    { type: 'tip', html: '<strong>常に、機械の取扱説明書の比率を最優先してください。</strong> 見当たらない場合は、メーカーのサイトで確認するかサポートに問い合わせてください。勘で混ぜることは絶対にやめてください。間違った比率は保証対象外となり、エンジン焼き付きのリスクを高めます。' },

    { type: 'title', text: '用語解説：2サイクルの専門用語', level: 3 },
    { type: 'glossary', items: [
      { term: '薄い混合比（リーン）', definition: 'オイルが少なすぎる状態（1:50など）。潤滑不足による焼き付きのリスクがあります。' },
      { term: '濃い混合比（リッチ）', definition: 'オイルが多すぎる状態（1:25など）。煙が多くなり、プラグの汚れやカーボン蓄積を招きます。' },
      { term: '均質な混合', definition: '燃料とオイルが全体にムラなく混ざった状態。しっかり振ることで達成され、均一な潤滑に不可欠です。' },
      { term: '焼き付き（Seizure）', definition: '潤滑不足と摩擦熱により、ピストンがシリンダー内で固着すること。エンジンの致命的な故障です。' },
      { term: '化学合成油', description: 'ラボで配合された高性能オイル。鉱物油よりも保護性能、燃焼のクリーンさ、温度安定性に優れます。' },
      { term: '2サイクルエンジン', definition: 'ピストンの1往復（2動作）で1回の燃焼を行うエンジン。軽量で単純な構造が特徴。' },
      { term: '4サイクルエンジン', definition: '独立したオイル回路を持つエンジン。オイルは燃料に混ぜず、エンジン内を循環します。' }
    ] },

    { type: 'title', text: 'この計算機が役立つ理由', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: '正確な計算、計量ミスなし', icon: 'mdi:check-circle' },
      { value: '一瞬', label: '暗算不要、数秒で正確な量を確認', icon: 'mdi:flash' },
      { value: '4つの比率', label: '1:25から1:50まで主要比率を網羅', icon: 'mdi:counter', trend: { value: 'カスタム比率も可能', positive: true } },
      { value: '共有可能', label: '混合設定をURLでコピーして共有', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'エンジンを壊すよくある間違い', level: 3 },
    { type: 'diagnostic', variant: 'error', title: '4サイクル用オイルの使用', icon: 'mdi:alert', badge: 'エンジン故障確定', html: '4サイクルオイルは循環用であり、燃焼を前提としていません。2サイクル機で使うと大量のカーボンが発生し、数時間でエンジンを破壊します。' },
    { type: 'diagnostic', variant: 'warning', title: '混ぜ方が不十分', icon: 'mdi:alert', badge: '焼き付きリスク', html: '混合が不完全で分離してしまうと、エンジンの一部が潤滑なしで作動してしまいます。使用前に必ず1〜2分は振りましょう。' },
    { type: 'diagnostic', variant: 'warning', title: '古い燃料の使用（60日以上経過）', icon: 'mdi:alert', badge: '詰まりの原因', html: 'ガソリンは時間とともに劣化します。古い混合燃料はキャブレター内にガム状の残留物を作り、故障の原因になります。30日以内に使う分だけ作りましょう。' },

    { type: 'title', text: 'まとめ', level: 3 },
    { type: 'summary', title: '混ぜる前に確認', items: [
      '取扱説明書で、メーカー指定の正確な比率を確認する。',
      '必ず2サイクル専用オイルを使用する（4サイクル用は不可）。',
      '燃料専用の清潔な容器を使用する。',
      '新しいガソリンと適合するオイルを使用する。',
      'しっかりと混ぜ、容器に日付と比率を記入する。',
      '作った混合燃料は30日以内に使い切る。'
    ] },
  ],
  ui: {
    titleMain: '2サイクル混合油計算機',
    labelFuelVolume: 'ガソリン量',
    labelRatio: '混合比率',
    labelOilRequired: '必要なオイル量',
    labelTotalMixture: '合計混合量',
    labelRichness: '混合の濃度',
    labelPresets: '主な比率',
    labelCustomRatio: 'カスタム比率 (1:X)',
    btnClear: 'クリア',
    btnCopyResults: '結果をコピー',
    btnSwitchMode: 'モード切替',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: '薄い（オイル少なめ、焼き付きリスクあり）',
    richBalanced: 'バランス（標準的な混合）',
    richRich: '濃い（オイル多め、煙増加、エンジン保護）',
    msgReady: '準備完了',
    msgMixtureReady: '計算完了',
    tooltipFuelVolume: 'ガソリンの量をリットルで入力',
    tooltipRatio: '比率の数字（25、50など）を入力',
    recipientLabel: '混合容器',
    oilPercentage: 'オイル%',
    labelVolume: '容量',
    labelRatioShort: '比率',
    labelOilTip: '2%オイル混合 ＝ 1:50比率',
    labelMixingTips: '混ぜ方のコツ',
    labelMixingTipsDesc: '清潔な容器で混ぜる：まずガソリン、次にオイル、最後に残りのガソリンの順。1-2分よく振って均一にします。日付と比率を忘れずに記入。',
    recipePrefix: '条件：',
    recipeAt: 'のガソリンに対し',
    recipeAdd: 'オイルを正確に',
    recipeOfOil: '加えてください。',
    copyTextPrefix: '2サイクル混合',
    copyTextFuel: 'ガソリン',
    copyTextOil: 'オイル',
  },
};
