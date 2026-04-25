import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'workshop-fraction-converter';
const title = 'ワークショップ用 分数・ミリ換算機';
const description = '分数表記のインチを瞬時にミリメートルへ変換。お使いのワークショップに最適な標準規格のボルト、ネジ、ソケットを検索。汚れや手袋をしたままでも使いやすい設計。';

const faqData = [
  {
    question: 'なぜ分数をミリメートルに変換する必要があるのですか？',
    answer: '現代の工具やファスナーの多くはメートル法を使用していますが、古い工具や仕様書では依然としてインチの分数表記が使われています。このコンバーターはそのギャップを埋め、正確なメートル換算値や最も近い標準サイズを見つけるのに役立ちます。',
  },
  {
    question: '1/2インチと12.7mmの違いは何ですか？',
    answer: '1/2インチは正確に12.7ミリメートルです（0.5 × 25.4 = 12.7）。標準サイズではメーカーが共通のファスナーサイズを両方のシステムで揃えているため、メートル工具とインチ工具が互換的に使用できることがよくあります。',
  },
  {
    question: 'なぜ「最も近いファスナー」が表示されるのですか？',
    answer: '正確な換算値が標準的なファスナーサイズの間に位置することが多いためです。このツールは、お使いのワークショップにあるものを利用できるよう、測定値に最も近い市販のボルトやソケットを提示します。',
  },
  {
    question: '木工精度と金属精度の違いは何ですか？',
    answer: '木工では0.5mmの差は無視できることが多いですが、金属加工や機械工作では0.1mmが重要になります。精度モードは、扱う材料に応じた許容誤差の範囲を示します。',
  },
  {
    question: 'オフラインでも使用できますか？',
    answer: 'はい。すべての計算はブラウザ上で行われます。初回の読み込み後は完全にオフラインで動作するため、WiFiのないワークショップでの使用に最適です。',
  },
  {
    question: '履歴機能があるのはなぜですか？',
    answer: '分解作業や複数の部品を扱うプロジェクトでは、履歴機能により入力を繰り返さずに測定値を参照でき、作業を進めながら部品リストを作成するのに役立ちます。',
  },
];

const howToData = [
  {
    name: '測定タイプを選択',
    text: '分数をミリに変換するには「順方向」を、ノギスで測った値から分数を探すには「逆方向」を選択します。',
  },
  {
    name: '数値を入力',
    text: '3列の入力欄（整数、分子、分母）を使用するか、クイックプリセットボタンをタップします。ステップボタンを使えば、入力せずに調整可能です。',
  },
  {
    name: '結果を確認',
    text: '正確な換算値に加えて、最も近い標準的なボルトとソケットのサイズが表示されます。視覚的なスケールで比率を把握できます。',
  },
  {
    name: '履歴に保存',
    text: '「履歴に保存」をクリックして測定値を記録します。履歴はブラウザを閉じても保存されます。',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: '使い方', type: 'howto', schema: howToSchema },
    { title: 'アプリケーション', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: '測定タイプ',
    labelWhole: '整数',
    labelNumerator: '分子',
    labelDenominator: '分母',
    labelInches: 'インチ',
    labelMillimeters: 'ミリメートル',
    resultTitle: '変換結果',
    resultFraction: '分数',
    resultInches: 'インチ',
    resultMillimeters: 'ミリメートル',
    matchTitle: '最も近い規格',
    matchClosestFastener: '標準ボルト・ファスナーサイズ',
    matchClosestSocket: '標準ソケットサイズ',
    matchDifference: '測定値との差',
    matchRecommendation: '在庫がある場合はこのサイズを使用',
    reverseSearchTitle: '逆引き検索',
    reverseSearchLabel: '測定値 (mm)',
    reverseSearchButton: '分数を探す',
    reverseSearchHint: 'ノギスで測定した値を入力',
    unitMm: 'mm',
    unitInch: 'in',
    modeForward: '分数 → ミリ',
    modeReverse: 'ミリ → 分数',
    precisionLabel: '精度モード',
    precisionCarpentry: '木工',
    precisionMetal: '金属加工',
    buttonConvert: '変換',
    buttonClear: 'クリア',
    buttonCopyResult: '結果をコピー',
    buttonSaveToHistory: '履歴に保存',
    historyTitle: '履歴',
    historyEmpty: '履歴はありません',
    historyRemove: '削除',
    helpText: '測定値を選択するか分数を入力して開始してください。',
    toolOverline: 'ワークショップ・ツール',
    labelVisualReference: '視覚的リファレンス (1インチ = 96px)',
  },
};
