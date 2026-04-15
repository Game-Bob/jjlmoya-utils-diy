import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'passepartout-calculator';
const title = '卡纸计算器：具有视觉偏差补偿的装裱边距';
const description = '用于计算具有视觉偏差补偿（底部加权）的卡纸边距的工具。以画廊比例装裱您的照片和艺术品。';

const faqData = [
  {
    question: '什么是视觉中心修正（底部加权）？',
    answer: '这是一种平面设计和装裱原则，即底部边距略宽于其他边距。这修正了当人观看挂起的作品时，几何中心看起来似乎“下掉”的视觉错觉。',
  },
  {
    question: '卡纸应该使用什么材料？',
    answer: '为了艺术保存，应使用无酸或 pH 中性的卡纸（阿尔法纤维素或棉质材料）。便宜的卡纸会随时间变黄，并可能因木质素而损坏作品。',
  },
  {
    question: '如何选择边距的颜色？',
    answer: '米白色或柔和的奶油色是不干扰作品视线的标准色。深色边距可以突出照片中的白色，而彩色边距应谨慎使用，以免抢了作品本身的色调。',
  },
  {
    question: '理想的边距宽度是多少？',
    answer: '专业标准在 5 到 8 厘米之间。如果边距太窄，作品看起来会像被“窒息”了。如果非常宽，可以赋予小作品一种英勇且极简的氛围。',
  },
];

const howToData = [
  { name: '测量艺术品', text: '精确测量要装裱的纸张或画布的宽度和高度。如果您希望卡纸稍微盖住图像一点，请减去几毫米。' },
  { name: '测量画框内径', text: '测量画框内部或卡纸将嵌入槽口的尺寸。' },
  { name: '启用视觉修正', text: '如果您希望底部边距自动加大以获得专业效果，请在我们的计算器中勾选该选项。' },
  { name: '裁切卡纸', text: '使用所得尺寸裁切卡纸窗口（开口）和外部尺寸，最好使用 45 度斜面裁刀以获得干净的斜边。' },
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    { name: 'ISO 9706：文档用永久性纸张', url: 'https://www.iso.org/standard/22495.html' },
    { name: 'PPFA：专业画框装裱师协会', url: 'https://ppfa.com/' },
    { name: '艺术贸易公会：装裱标准', url: 'https://www.fineart.co.uk/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '完美装嵌的科学', level: 2 },
    { type: 'paragraph', html: '<strong>卡纸</strong>不仅是一张装饰纸板；它是让您的艺术品呼吸的肺。此计算器可帮助您确定裁切卡纸的精确尺寸，确保作品在画框内完美居中或在视觉上达到平衡。' },
    { type: 'title', text: '为什么要进行“底部加权” (Bottom Weighting)？', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: '几何中心的视觉错觉', html: '<p>人类的眼睛往往会将垂直几何中心感知为比实际位置略低一点。如果您将作品完全放在正中心，它看起来会像是在“下坠”。</p><p><strong>底部加权</strong>通过多预留一点底部边距来修正这种错觉，从而在视觉上提升作品，使其看起来完美居中。</p>' },
    { type: 'title', text: '卡纸的保护材料', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: '用于保存的无酸卡纸', html: '<p>选择卡纸时，请始终寻找 <strong>“Acid-Free”</strong>（无酸）或 <strong>“Museum Quality”</strong>（博物馆品质）等术语。廉价的木浆卡纸会随时间变黄，并释放酸性物质，从而“烧坏”您的艺术品（产生狐斑），造成不可逆转的损坏。</p>' },
  ],
  ui: {
    sectionTitle: '尺寸',
    sectionDesc: '以厘米为单位输入尺寸。',
    frameSizeTitle: '画框尺寸',
    artSizeTitle: '作品尺寸',
    labelWidth: '宽度 (cm)',
    labelHeight: '高度 (cm)',
    labelBottomWeighting: '底部加权',
    descBottomWeighting: '应用更大的底部边距以实现视觉平衡',
    labelOffset: '偏差 (%)',
    errorMsg: '作品尺寸必须小于画框。',
    labelTop: '上',
    labelBottom: '下',
    labelLeft: '左',
    labelRight: '右',
    artPlaceholder: '您的作品',
  },
};
