import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'drill-rpm-calculator';
const title = '穴あけ・切削回転数計算機';
const description = '被削材とドリル径に基づいて、ドリルやフライスマシンの理想的な回転数（RPM）を計算します。工具の焼き付きを防ぎます。';

const faqData = [
  {
    question: 'なぜ穴あけ中にドリルが焼けてしまうのですか？',
    answer: '主に過剰な回転数（RPM）が原因です。被削材が熱を放散できる速度よりも、ドリルが速く回転して摩擦熱が発生すると、鋼の焼き戻し限界を超えて温度が昇り、刃先が柔らかくなって切れなくなってしまいます。',
  },
  {
    question: '切削速度（Vc）とは何ですか？',
    answer: '工具の刃先が被削材の表面を移動する1分あたりの線速度（メートル単位）のことです。各被削材には推奨される切削速度があり、これはドリルの直径には依存しません。',
  },
  {
    question: '超硬工具（Widia）はいつ使用すべきですか？',
    answer: '工業生産などで非常に高い速度での加工が必要な場合や、被削材が極めて硬い場合に使用します。一般的なDIYでは、HSS（高速度鋼）で十分であり、かつ曲げによる破損にも強いです。',
  },
  {
    question: '潤滑剤は常に必要ですか？',
    answer: '金属の場合はほぼ常に推奨されます。アルミではドリルへの溶着を防ぎ、鋼では熱を抑えます。木材やプラスチックでは、頻繁にドリルを引き抜いて切り屑を排出しながら、乾式で加工するのが一般的です。',
  },
  {
    question: 'CNCマシンがない場合、送り速度はどう判断すればよいですか？',
    answer: '卓上ボール盤などでは、圧力で送りを感じ取ります。一定で綺麗な切り屑が出ていることを確認してください。粉状のものしか出ない場合は圧力が足りないかRPMが速すぎます。切り屑が厚すぎてドリルが苦しそうな場合は圧力が強すぎます。',
  },
];

const howToData = [
  { name: '被削材を選択', text: '加工する材料（鋼、アルミ、木材など）を選択します。材料ごとに硬度や熱容量が異なります。' },
  { name: '直径を入力', text: 'ドリルやエンドミルの正確な直径をミリメートルで入力します。直径が大きいほど、回転数は低くする必要があります。' },
  { name: '工具の種類を選択', text: 'ドリルがHSS（高速度鋼）か超硬（Widia）かを選択します。超硬工具はより高い速度に耐えられます。' },
  { name: 'マシンのRPMを調整', text: '計算された値をマシンに設定します。段階的な変速機を持つマシンの場合は、当ツールの「推奨設定」を参考に、最も安全なプーリー位置を選択してください。' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: 'サンドビック・コロマント：切削速度・送り計算式', url: 'https://www.sandvik.coromant.com/ja-jp/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: '機械工作計算表', url: 'https://www.google.com/search?q=機械工作計算表+Casillas' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '切削における回転数（RPM）の重要性', level: 2 },
    { type: 'paragraph', html: '正確な回転数の計算は、完璧な仕上がりか、高価な失敗かの分かれ目となります。単にドリルを速く回せばいいわけではなく、摩擦と材料の耐性に関する物理法則に従う必要があります。当計算機は工具の性能を最大限に引き出し、美しい仕上げ品質を実現するために設計されています。' },
    { type: 'title', text: '切削速度の理解', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'RPMの計算式', html: '<p>切削速度は、刃先が材料を通過する際の理想的な速度を1分あたりのメートル数で示した値です。計算式は <code>RPM = (Vc × 1000) / (π × D)</code> です（Dはミリ単位の直径）。この計算は、削る材料自体の直径には影響されません。' },
    { type: 'title', text: 'HSS vs 超硬（Widia）', level: 3 },
    { type: 'paragraph', html: '<strong>高速度鋼（HSS）</strong>工具は安価で衝撃に強いですが、耐熱性には限界があります。<strong>超硬（Widia）</strong>は、切削速度を3〜5倍速めることができますが、脆いため衝撃には弱いです。計算機は工具の種類に応じてパラメータを自動的に調整します。' },
    { type: 'title', text: '穴あけにおける3つのよくある間違い', level: 3 },
    { type: 'paragraph', html: '<strong>回転数が速すぎる：</strong> オーバーヒートの原因となり、鋼の焼きがなまってしまいます。 <strong>回転数が遅すぎる：</strong> ドリルが振動し、疲労による破損のリスクがあります。 <strong>冷却不足：</strong> 熱によって工具寿命が著しく短くなります。' },
  ],
  ui: {
    labelMaterial: '被削材の材質',
    matSteel: '軟鋼',
    matInox: 'ステンレス',
    matAlu: 'アルミ',
    matBrass: '真鍮',
    matCastIron: '鋳鉄',
    matWood: '木材',
    matPlastic: 'プラスチック',
    coolSteel: '切削液またはオイル',
    coolInox: '不水溶性切削油',
    coolAlu: 'アルコール / パラフィン',
    coolBrass: '乾式 / エア',
    coolCastIron: '乾式',
    coolWood: '集塵のみ',
    coolPlastic: 'エアジェット',
    labelTool: '工具の種類',
    typeHss: '高速度鋼 (HSS)',
    typeWidia: '超硬 (Widia)',
    labelDiameter: '直径',
    unitMm: 'mm',
    unitInch: 'インチ',
    modeColumnDrill: 'ボール盤モード',
    labelAdvanced: '送りパラメータ',
    labelLips: '刃数 (z)',
    labelFz: '1刃あたりの送り量 (Fz)',
    labelMachine: 'お手持ちのマシンの回転数',
    presetStandard: '標準',
    presetCnc: 'CNC',
    addRpmManual: 'RPMを手動で追加...',
    addButton: '+',
    resultRpm: '最適な回転数',
    resultCooling: '冷却・潤滑',
    resultFeed: '計算された送り',
    resultClosest: '推奨設定',
    rpmUnit: '回転 / 分',
    recommendedLabel: '推奨設定',
    recommendedHint: 'マシンの変速レバーやベルトをこの位置に設定してください',
    statusLimitActive: 'マシンの限界速度で作動中',
    statusOutOfRange: '一般的な規格範囲外です',
  },
};
