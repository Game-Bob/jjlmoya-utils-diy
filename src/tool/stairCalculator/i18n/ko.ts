import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stair-calculator';
const title = '계단 계산기: 설계 및 시공';
const description = '계단의 정확한 치수(챌면 높이, 디딤면 너비, 각도)와 자재량을 계산합니다. 블론델의 법칙을 준수하여 시공 오류를 방지하세요.';

const faqData = [
  {
    question: '블론델의 법칙(경사 법칙)이란 무엇인가요?',
    answer: '계단을 편안하게 만들기 위해 「챌면 높이 × 2 ＋ 디딤면 너비 ＝ 62~64cm (2H + W = 63)」라는 공식을 따르는 것입니다. 이 법칙은 인간의 평균 보폭을 바탕으로 설계되어 안전하고 편안한 보행을 보장합니다.',
  },
  {
    question: '계단 한 단의 최대 높이는 얼마인가요?',
    answer: '주거용 건물에서는 18~19cm를 넘지 않는 것을 권장합니다. 공공 장소의 경우 규정에 따라 보통 최대 17.5cm로 제한됩니다. 이보다 높으면 쉽게 피로해지고 위험할 수 있습니다.',
  },
  {
    question: '공간이 좁은 경우 어떻게 계산하나요?',
    answer: '수평 거리가 제한된 경우 단수를 늘려 챌면 높이를 낮추거나, 편안함은 다소 포기하더라도 더 가파른 경사를 선택해야 합니다. 이 계산기는 최적의 균형을 찾는 데 도움을 줍니다.',
  },
  {
    question: '콘크리트 부피 계산에는 무엇이 포함되나요?',
    answer: '계단 단 부분과 더불어 단을 지지하는 경사 슬래브(기울어진 바닥판)를 고려한 총 부피를 계산합니다. 슬래브 부분을 생략하면 콘크리트 주문량이 부족해질 수 있습니다.',
  },
  {
    question: '누적 먹매김이 중요한 이유는 무엇인가요?',
    answer: '각 단을 개별적으로 측정하면 오차가 누적됩니다. 누적 먹매김을 통해 모든 단의 높이를 정확히 같게 유지함으로써 사고를 예방하고 사용 편의성을 높일 수 있습니다.',
  },
];

const howToData = [
  { name: '높이 차이 측정', text: '아래층 마감 바닥부터 위층 마감 바닥까지의 전체 높이(H)를 측정합니다. 이는 모든 계산의 기본 데이터가 됩니다.' },
  { name: '사용 가능한 길이 입력', text: '선택 사항: 공간 제약이 있는 경우 사용 가능한 수평 거리(L)를 입력합니다. 제약이 없으면 0을 입력합니다.' },
  { name: '단수 조정', text: '계산기가 제안하는 기본 단수를 바탕으로 조정할 수 있습니다. 블론델 지표가 초록색(62-64cm)이 되도록 조정하는 것이 가장 편안합니다.' },
  { name: '시공 매개변수 설정', text: '슬래브 두께, 마감재 두께, 콘크리트 강도, 계단 너비를 지정합니다. 이 데이터는 최종 물량 산출에 반영됩니다.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '계단의 기하학적 설계: 블론델의 법칙', level: 2 },
    { type: 'paragraph', html: '계단의 편안함은 인간의 보폭에 달려 있습니다. 승하차 시 우리 몸은 예측 가능한 리듬을 원합니다. 블론델의 법칙(2챌면 높이 ＋ 1디딤면 너비 ＝ 62~64cm)은 안전과 편안함을 보장하는 표준 규격입니다.' },
    { type: 'title', text: '구조 및 자재 관리', level: 3 },
    { type: 'paragraph', html: '전문적인 시공을 위해서는 콘크리트 슬래브(단을 지지하는 경사면)를 반드시 고려해야 합니다. 이 부피를 무시하면 발주 부족이나 부실 시공의 원인이 됩니다. 계산기는 이 과정을 자동으로 처리합니다.' },
    { type: 'title', text: '먹매김과 오차 누적', level: 3 },
    { type: 'paragraph', html: '건설 현장에서 최대의 적은 밀리미터 단위의 오차입니다. 각 단을 따로 측정하면 오차가 쌓여 마지막 단이 처음보다 5cm 높거나 낮아질 수 있습니다.' },
  ],
  ui: {
    labelGeometry: '기하학 및 공간',
    labelTotalHeight: '전체 높이 (H)',
    labelAvailableLength: '사용 가능한 길이 (L)',
    labelAvailableLengthHint: '제약이 없는 경우 0 입력.',
    labelNumSteps: '단수',
    labelOptimize: '최적화 (18cm)',
    labelWork: '시공 및 설치',
    labelSlabThickness: '슬래브 두께 (e)',
    labelFinishThickness: '마감 두께',
    labelCeilingHeight: '천장 높이',
    labelStairWidth: '계단 너비',
    labelConcreteStrength: '콘크리트 강도',
    optionH150: '18MPa (버림용)',
    optionH200: '21MPa (일반건축)',
    optionH250: '24MPa (구조용)',
    labelRiser: '챌면 높이',
    labelTread: '디딤면 너비',
    labelSlope: '경사',
    labelRealAdvance: '실제 총 길이',
    labelLayoutTable: '먹매김 및 실행',
    colStep: '단',
    colConcreteHeight: '콘크리트 높이',
    colFinishedHeight: '마감 후 높이',
    colAdvance: '수평 거리',
    adjustedNote: '조정됨',
    labelMaterials: '부피 및 자재',
    labelTotalConcrete: '총 콘크리트량:',
    labelCement: '시멘트 (25kg 포대):',
    labelSand: '필요 모래량:',
    unitM3: 'm³',
    unitBags: '포대',
    unitLiters: 'L',
    btnShare: '공유',
    btnPrint: 'PDF 인쇄',
    statusOptimalComfort: '최적의 편안함',
    statusMarginLimit: '허용 범위',
    statusCriticalDesign: '가파른 설계',
    statusRiserError: '치수 오류',
    msgInvalidValues: '잘못된 값입니다',
    msgInsufficientSpace: '공간 부족',
    msgDangerousTread: '디딤면 너비 {val}cm은 위험합니다.',
    msgBlondelValue: '블론델 값: {val}cm.',
    msgOptimalStep: '편안한 보폭: {val}cm.',
    msgLowCeiling: '머리 주의 (<2m)',
    msgCalculating: '계산 중...',
    msgEnterMeasurements: '치수를 입력하세요',
    shareTitle: '시공 요약',
    shareMessage: '계단: H={h}cm, 단수={n}, 챌면={ch}cm, 부피={vol}m3',
  },
};
