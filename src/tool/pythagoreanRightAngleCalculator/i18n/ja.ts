import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pythagorean-right-angle-calculator-3-4-5-rule';
const title = '直角計算機（ピタゴラスの定理）：完璧な直角のための3 4 5の法則';
const description = 'ピタゴラスの定理と3-4-5の法則を使用して、構造物が完璧な直角（90°）であるかを確認します。建設、木工、DIYプロジェクトに不可欠なツールです。';

const faqData = [
  {
    question: '3-4-5の法則とは何ですか？',
    answer: '3-4-5の法則は、単純なピタゴラスの数です。直角三角形の辺がどのスケールでも3、4、5の単位である場合、短い辺の間の角度は正確に90度になります。この現場で実証された方法は、何世紀にもわたって建設現場で使用されてきました。',
  },
  {
    question: 'この計算機の使い方は？',
    answer: 'コーナーを形成する2つの壁（辺Aと辺B）の長さを入力します。計算機は、完璧な90度の角度にするために必要な対角線の長さを表示します。次に、実際の対角線を測定して入力し、コーナーが本当に直角かどうかを確認します。',
  },
  {
    question: '対角線が異なる場合はどうなりますか？',
    answer: '測定した対角線が理想値と異なる場合、計算機はその偏差を表示します。緑は完璧、黄色は許容範囲、赤は直角ではないことを意味します。また、角度を広げるべきか狭めるべきかも指示します。',
  },
  {
    question: '建設現場で使用できる精度ですか？',
    answer: 'はい。ピタゴラスの定理は数学的に正確です。巻尺があれば、特別な道具や高度なスキルがなくても、建設現場レベルの精度を達成できます。',
  },
  {
    question: 'インチとフィートを切り替えられますか？',
    answer: 'はい。小さなプロジェクトにはインチを、大きな構造物にはフィートを選択してください。すべての値はデータを失うことなく即座に変換されます。',
  },
];

const howToData = [
  { name: '単位を選択する', text: '詳細な作業にはインチ、大きな構造物にはフィートを選択します。いつでも切り替え可能です。' },
  { name: '両辺を測定する', text: '確認したいコーナーを形成する2つの壁（辺Aと辺B）の長さを測定します。' },
  { name: '理想的な対角線を確認する', text: '完璧な90度の角度にするために必要な対角線の長さを表示します。' },
  { name: '対角線を測定する', text: '巻尺を使用して実際の対角線を測定します。オプションフィールドに入力してください。' },
  { name: 'ステータスを確認する', text: '緑 = 完璧な直角。黄色 = 許容範囲。赤 = 直角ではない。提案に従って調整してください。' },
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

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '実践的なピタゴラスの定理', level: 2 },
    { type: 'paragraph', html: '完璧な90度の角度は、高品質な建設の基本です。壁は垂直でなければならず、土台は直角でなければならず、フレームは正確でなければなりません。ピタゴラスの定理は、数学的に保証された方法を提供します：a² + b² = c²。' },
    { type: 'title', text: '3-4-5の法則が機能する理由', level: 3 },
    { type: 'paragraph', html: '3-4-5の法則は、最も単純なピタゴラスの数です。インチ、フィート、その他の単位で測定しても、辺が3、4、5の単位であれば90度の角度が保証されます。これは数学的に証明されており、何世紀にもわたって建設現場でテストされてきました。' },
    { type: 'title', text: '特別な道具を使わない精度', level: 3 },
    { type: 'paragraph', html: '壊れたり調整が狂ったりする可能性のある水平器や差し金とは異なり、ピタゴラスの定理は不変です。巻尺一本で、どんなスケールでもコーナーを確認できます。この計算機は暗算を不要にし、正確さを保証します。' },
    { type: 'title', text: '理論から実践的なガイダンスへ', level: 3 },
    { type: 'paragraph', html: 'この計算機は、抽象的な数学を現場での具体的な指示に変換します。対角線がずれている場合、どの方向にどれだけ調整すべきかを正確に指示します。理論を現場での確かな結果に変えましょう。' },
  ],
  ui: {
    titleMain: '直角計算機（ピタゴラス）',
    labelInputData: '測定値',
    labelUnitSelection: '単位',
    btnUnitInches: 'インチ',
    btnUnitFeet: 'フィート',
    labelSideA: '辺 A',
    labelSideB: '辺 B',
    labelMeasuredDiagonal: '測定した対角線（任意）',
    labelResults: '結果',
    labelIdealDiagonal: '理想的な対角線',
    labelDeviation: '偏差',
    labelStatus: 'ステータス',
    labelVerification: '直角の確認',
    btnClear: 'クリア',
    btnCopyResults: '結果をコピー',
    labelPresets: 'クイックプリセット',
    unitInches: 'in',
    unitFeet: 'ft',
    tooltipOptional: '測定した対角線を入力して90度を確認します',
    tooltipPresets: '様々なスケールでの3-4-5の法則',
    statusPerfect: '完璧な90度の角度',
    statusAcceptable: '許容範囲内の偏差',
    statusWarning: '軽微な偏差',
    statusError: '直角ではありません',
    statusReady: '準備完了',
    msgIdealCalculated: '理想的な対角線を計算しました',
    actionOpen: '広げる',
    actionClose: '狭める',
    descLarger: 'より長い',
    descSmaller: 'より短い',
    descCorrection: '調整が必要です',
  },
};
