import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';

const slug = 'lime-mortar-calculator';
const title = '伝統的な石灰モルタル配合：下地と仕上げ';
const description = '石灰と砂のモルタル用無料計算機。伝統的な手法（ヴィトルウィウス）に基づき、下地、中塗り、上塗りの正確な配合を算出します。';

const faqData = [
  {
    question: 'なぜセメントではなく石灰を使うのですか？',
    answer: '石灰は「生きた」通気性のある素材で、水蒸気の排出を可能にし、結露による湿気を防ぎます。また、セメントよりも柔軟性があるため、古い壁のひび割れを軽減します。',
  },
  {
    question: '下地塗りの理想的な配合は？',
    answer: 'ヴィトルウィウスの伝統によれば、きれいな川砂の場合、1:3（石灰1：砂3）の割合が使用されます。山砂の場合は、モルタルの結合を確実にするために1:2が推奨されます。',
  },
  {
    question: '仕上げ塗り（プラスター）とは何ですか？',
    answer: '壁の最終層です。より細かい砂（場合によっては大理石粉）と高い割合の石灰を使用して、塗装も可能な滑らかで絹のような仕上がりを実現します。',
  },
  {
    question: '石灰モルタルが硬化するのにどれくらい時間がかかりますか？',
    answer: '空気石灰は炭酸化（空気中のCO2を吸収）によって硬化します。初期の硬化には数日かかりますが、最大硬度に達するのは数ヶ月後であり、年月を経て強度を増していきます。',
  },
];

const howToData = [
  { name: '下地の種類を確認する', text: '石、古いレンガ、ブロックのどれを作業するか確認します。下地は清潔で少し湿っている必要があります。' },
  { name: '砂の粒度を選ぶ', text: '接着層には荒い砂を、仕上げには細かい砂を使用します。砂の純度がモルタルの品質を左右します。' },
  { name: '成分の混合', text: '水を加える前に石灰と砂を乾燥状態で混ぜます。硬さは液体ではなく、塑性（成形できる硬さ）である必要があります。' },
  { name: '塗布と平滑化', text: 'コテでモルタルを広げ、表面が乾き始めたら木ゴテを使用して表面を整えます。' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    { name: 'ヴィトルウィウス - 建築十書 第7巻', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:2007.01.0072' },
    { name: 'EN 459規格 - 建築用石灰', url: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0053796' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'モルタル論：ヴィトルウィウスの知恵', level: 2 },
    { type: 'paragraph', html: 'マルクス・ヴィトルウィウス・ポリオは、その著書『建築十書』第7巻において、単なる技術ではなく哲学を述べました。彼は建物の永続性は接合部にあると理解していました。モルタルは単なる接着剤ではなく、結合組織なのです。その配合（1:3, 1:2, 1:1）は、強度と柔軟性の完璧なバランスを求めたローマ時代の何世紀にもわたる経験的観察の遺産です。' },
    { type: 'title', text: '骨材の粒度：品質の鍵', level: 3 },
    { type: 'paragraph', html: '石灰モルタルの品質は、骨材の粒度に大きく依存します。<strong>Trullissatio</strong>（下地）には、2-5mmの粗い川砂が使用されます。<strong>Arenato</strong>（中塗り）には、0.5-2mmの洗浄された中砂。<strong>Marmorato</strong>（仕上げ）には、0.5mm以下の大理石粉が使用されます。' },
    { type: 'title', text: '機械的接着の謎', level: 3 },
    { type: 'paragraph', html: '接着は化学的ではなく、<strong>機械的</strong>なものです。何百万もの微細な根を想像してください。モルタルはレンガの孔に浸透して、物理的な「鍵」を作る必要があります。多孔性がなければ、定着は望めません。' },
  ],
  ui: {
    leftTitle: 'ヴィトルウィウス方式',
    centerTitle: '利用可能な材料',
    rightTitle: '推定カバレッジ',
    btnCal: '石灰',
    btnArena: '砂',
    labelCalPasta: '消石灰ペースト (1.30 kg/L)',
    labelCalPolvo: 'NHL粉末 (0.65 kg/L)',
    labelQuantity: '利用可能な量:',
    labelNeedsAlso: 'こちらも必要です:',
    labelProportion: '配合比: ',
    labelCoverage: 'カバレッジ:',
    labelThickness: '総厚み:',
    labelLayers: '層数:',
    labelWasteFactor: 'ロス率: 20%',
    layersSingular: '回塗り',
    layersPlural: '回塗り',
    layersSingularShort: '回',
    layersPluralShort: '回',
    materialCal: '石灰',
    materialArena: '砂',
    materialMarmol: '大理石',
    phaseDescTrullissatio: '粗い下地層。15mm厚を2回塗り。配合1:3（石灰：川砂）。',
    phaseDescArenato: '中間層。8mm厚を2回塗り。配合1:2（石灰：洗浄砂）。',
    phaseDescMarmorato: '仕上げ。4mm厚を1回（2度塗り）。配合1:1（石灰：大理石粉）。',
    granulometryTitle: '骨材の粒度',
    grainTitleCoarse: '粗目砂',
    grainSubtitleCoarse: '川砂',
    grainUsageCoarse: '下地塗り',
    grainTitleMedium: '中目砂',
    grainSubtitleMedium: '洗浄砂',
    grainUsageMedium: '中塗り',
    grainTitleFine: '細目粉末',
    grainSubtitleFine: '大理石粉',
    grainUsageFine: '仕上げ塗り',
    specSize: 'サイズ:',
    specUse: '用途:',
    specDensity: '密度:',
  },
};
