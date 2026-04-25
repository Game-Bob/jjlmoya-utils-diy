import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lime-mortar-calculator';
const title = '전통 석회 모르타르 배합 비율: 초벌 및 정벌 바름';
const description = '석회 및 모래 모르타르를 위한 무료 계산기입니다. 전통 방식(비트루비우스)에 따른 초벌, 중벌, 정벌 바름의 정확한 배합 비율을 확인하세요.';

const faqData = [
  {
    question: '왜 시멘트 대신 석회를 사용하나요?',
    answer: '석회는 통기성이 있는 "살아있는" 재료로, 수증기 배출을 가능하게 하여 결로로 인한 습기를 방지합니다. 또한 시멘트보다 유연하여 오래된 벽의 균열 발생을 줄여줍니다.',
  },
  {
    question: '초벌 바름의 이상적인 배합 비율은 무엇인가요?',
    answer: '비트루비우스의 전통에 따르면, 깨끗한 강모래의 경우 1:3(석회 1:모래 3)의 비율을 사용합니다. 산모래의 경우 모르타르의 결합력을 보장하기 위해 1:2 비율을 권장합니다.',
  },
  {
    question: '고운 정벌 바름(플라스터)이란 무엇인가요?',
    answer: '벽의 마지막 층입니다. 훨씬 고운 모래(때로는 대리석 가루)와 더 높은 비율의 석회를 사용하여 도장이 가능하거나 자연스러운 상태로 둘 수 있는 매끄럽고 부드러운 마감을 구현합니다.',
  },
  {
    question: '석회 모르타르가 굳는 데 얼마나 걸리나요?',
    answer: '기경성 석회는 탄산화(공기 중의 CO2 흡수)를 통해 굳습니다. 초기 경화 과정은 며칠이 걸리지만, 최대 경도는 몇 달 후에 도달하며 시간이 흐를수록 강도가 높아집니다.',
  },
];

const howToData = [
  { name: '바탕면 종류 확인', text: '돌, 오래된 벽돌 또는 블록 중 어디에 작업할지 확인합니다. 바탕면은 깨끗하고 약간 습기가 있어야 합니다.' },
  { name: '모래 입도 선택', text: '접착층에는 굵은 모래를, 화장 마감에는 고운 모래를 사용합니다. 모래의 순도가 모르타르의 품질을 결정합니다.' },
  { name: '구성 요소 혼합', text: '물을 붓기 전에 석회와 모래를 건식 상태에서 먼저 섞습니다. 점도는 액체가 아닌 가소성(모양을 만들 수 있는 정도)이 있어야 합니다.' },
  { name: '도포 및 평탄화', text: '흙손으로 모르타르를 펴 바르고, 모르타르 겉면이 마르기 시작할 때 나무 흙손을 사용하여 표면을 고르게 정리합니다.' },
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '모르타르 논고: 비트루비우스의 지혜', level: 2 },
    { type: 'paragraph', html: '마르쿠스 비트루비우스 폴리오는 그의 저서 『건축십서』 제7권에서 단순한 기술이 아닌 철학을 기술했습니다. 그는 건물의 영구성이 결합부에 있다는 것을 이해했습니다. 모르타르는 단순한 접착제가 아니라 결합 조직입니다. 그 배합 비율(1:3, 1:2, 1:1)은 강도와 유연성의 완벽한 균형을 찾기 위한 로마 시대의 수 세기에 걸친 경험적 관찰의 유산입니다.' },
    { type: 'title', text: '골재 입도: 품질의 핵심', level: 3 },
    { type: 'paragraph', html: '석회 모르타르의 품질은 골재의 입도에 크게 좌우됩니다. <strong>Trullissatio</strong>(초벌)에는 2-5mm의 굵은 강모래가 사용됩니다. <strong>Arenato</strong>(중벌)에는 세척된 0.5-2mm의 중간 모래가 사용됩니다. <strong>Marmorato</strong>(정벌)에는 0.5mm 이하의 대리석 가루가 사용됩니다.' },
    { type: 'title', text: '기계적 접착의 신비', level: 3 },
    { type: 'paragraph', html: '접착은 화학적인 것이 아니라 <strong>기계적</strong>인 것입니다. 수백만 개의 미세한 뿌리를 상상해 보세요. 모르타르는 벽돌의 기공으로 침투하여 물리적인 "열쇠" 역할을 해야 합니다. 다공성이 없으면 정착이 불가능합니다.' },
  ],
  ui: {
    leftTitle: '비트루비우스 시스템',
    centerTitle: '사용 가능한 재료',
    rightTitle: '예상 피복량',
    btnCal: '석회',
    btnArena: '모래',
    labelCalPasta: '석회 반죽 (1.30 kg/L)',
    labelCalPolvo: 'NHL 분말 (0.65 kg/L)',
    labelQuantity: '사용 가능한 양:',
    labelNeedsAlso: '필요한 추가 재료:',
    labelProportion: '배합 비율: ',
    labelCoverage: '피복량:',
    labelThickness: '총 두께:',
    labelLayers: '층수:',
    labelWasteFactor: '할증률: 20%',
    layersSingular: '회 도포',
    layersPlural: '회 도포',
    layersSingularShort: '회',
    layersPluralShort: '회',
    materialCal: '석회',
    materialArena: '모래',
    materialMarmol: '대리석',
    phaseDescTrullissatio: '거친 초벌층. 15mm 두께로 2회 도포. 비율 1:3 (석회:강모래).',
    phaseDescArenato: '중간층. 8mm 두께로 2회 도포. 비율 1:2 (석회:세척 모래).',
    phaseDescMarmorato: '정벌 마감. 4mm 두께로 1회(2중 도포). 비율 1:1 (석회:대리석 가루).',
    granulometryTitle: '골재 입도',
    grainTitleCoarse: '굵은 모래',
    grainSubtitleCoarse: '강모래',
    grainUsageCoarse: '초벌 바름',
    grainTitleMedium: '중간 모래',
    grainSubtitleMedium: '세척 모래',
    grainUsageMedium: '중벌 바름',
    grainTitleFine: '고운 가루',
    grainSubtitleFine: '대리석 가루',
    grainUsageFine: '정벌 바름',
    specSize: '크기:',
    specUse: '용도:',
    specDensity: '밀도:',
  },
};
