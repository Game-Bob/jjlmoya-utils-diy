import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pythagorean-theorem-right-angle-calculator-3-4-5-rule';
const title = '직각 계산기 (피타고라스의 정리): 완벽한 직각을 위한 3-4-5 법칙';
const description = '피타고라스의 정리와 3-4-5 법칙을 사용하여 구조물이 완벽한 직각(90°)인지 확인하세요. 건설, 목공 및 DIY 프로젝트에 필수적인 도구입니다.';

const faqData = [
  {
    question: '3-4-5 법칙이란 무엇인가요?',
    answer: '3-4-5 법칙은 간단한 피타고라스 수입니다. 직각삼각형의 변이 어떤 스케일에서든 3, 4, 5 단위라면 짧은 변 사이의 각도는 정확히 90도입니다. 이 현장에서 입증된 방법은 수세기 동안 건설 현장에서 사용되어 왔습니다.',
  },
  {
    question: '이 계산기는 어떻게 사용하나요?',
    answer: '모서리를 형성하는 두 벽(A면과 B면)의 길이를 입력하세요. 계산기는 완벽한 90도 각도를 위해 대각선이 얼마여야 하는지 보여줍니다. 그런 다음 실제 대각선을 측정하여 입력하고 모서리가 정말로 직각인지 확인하세요.',
  },
  {
    question: '대각선이 다르면 어떻게 하나요?',
    answer: '측정된 대각선이 이상적인 값과 다를 경우 계산기에 편차가 표시됩니다. 초록색은 완벽, 노란색은 허용 범위, 빨간색은 직각 아님을 의미합니다. 또한 각도를 벌려야 할지 좁혀야 할지도 알려줍니다.',
  },
  {
    question: '건설 현장에서 사용할 만큼 정확한가요?',
    answer: '네. 피타고라스의 정리는 수학적으로 정확합니다. 줄자만 있으면 전문적인 도구나 고급 기술 없이도 건설 현장 수준의 정확도를 얻을 수 있습니다.',
  },
  {
    question: '인치와 피트 사이를 전환할 수 있나요?',
    answer: '네. 작은 프로젝트에는 인치를, 큰 구조물에는 피트를 선택하세요. 모든 값은 데이터 손실 없이 즉시 변환됩니다.',
  },
];

const howToData = [
  { name: '단위 선택', text: '정밀한 작업에는 인치를, 큰 구조물에는 피트를 선택하세요. 언제든지 전환할 수 있습니다.' },
  { name: '양쪽 측정', text: '확인하려는 모서리를 형성하는 두 벽(A면과 B면)의 길이를 측정하세요.' },
  { name: '이상적인 대각선 확인', text: '완벽한 90도 각도를 위해 대각선이 얼마여야 하는지 계산기가 보여줍니다.' },
  { name: '대각선 측정', text: '줄자를 사용하여 실제 대각선을 측정하세요. 옵션 필드에 입력하세요.' },
  { name: '상태 확인', text: '초록색 = 완벽한 직각. 노란색 = 허용 가능. 빨간색 = 직각 아님. 제안된 대로 조정하세요.' },
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '실전 피타고라스의 정리', level: 2 },
    { type: 'paragraph', html: '완벽한 90도 각도는 고품질 건설의 기본입니다. 벽은 수직이어야 하고, 기초는 직각이어야 하며, 프레임은 정확해야 합니다. 피타고라스의 정리는 수학적으로 보장된 방법인 a² + b² = c²를 제공합니다.' },
    { type: 'title', text: '3-4-5 법칙이 작동하는 이유', level: 3 },
    { type: 'paragraph', html: '3-4-5 법칙은 가장 단순한 피타고라스 수입니다. 인치, 피트 또는 기타 어떤 단위로 측정하든 변이 3, 4, 5 단위라면 90도 각도가 보장됩니다. 이는 수학적으로 증명되었으며 수세기 동안 건설 현장에서 검증되었습니다.' },
    { type: 'title', text: '전문 도구 없는 정밀도', level: 3 },
    { type: 'paragraph', html: '고장 나거나 조정이 어긋날 수 있는 수평계나 직각자와 달리, 피타고라스의 정리는 불변합니다. 줄자 하나만 있으면 어떤 스케일에서든 모서리를 확인할 수 있습니다. 이 계산기는 암산을 없애고 정확성을 보장합니다.' },
    { type: 'title', text: '이론에서 실무 가이드까지', level: 3 },
    { type: 'paragraph', html: '이 계산기는 추상적인 수학을 실제 현장 지침으로 변환합니다. 대각선이 어긋난 경우 어느 방향으로 얼마나 조정해야 하는지 정확히 알려줍니다. 이론을 현장의 확실한 결과로 바꾸세요.' },
  ],
  ui: {
    titleMain: '직각 계산기 (피타고라스)',
    labelInputData: '측정치',
    labelUnitSelection: '단위',
    btnUnitInches: '인치',
    btnUnitFeet: '피트',
    labelSideA: 'A면',
    labelSideB: 'B면',
    labelMeasuredDiagonal: '측정된 대각선 (선택 사항)',
    labelResults: '결과',
    labelIdealDiagonal: '이상적인 대각선',
    labelDeviation: '편차',
    labelStatus: '상태',
    labelVerification: '직각 확인',
    btnClear: '지우기',
    btnCopyResults: '결과 복사',
    labelPresets: '빠른 프리셋',
    unitInches: 'in',
    unitFeet: 'ft',
    tooltipOptional: '측정된 대각선을 입력하여 90도 각도를 확인하세요',
    tooltipPresets: '다양한 스케일의 3-4-5 법칙',
    statusPerfect: '완벽한 90도 각도',
    statusAcceptable: '허용 가능한 편차',
    statusWarning: '경미한 편차',
    statusError: '직각 아님',
    statusReady: '준비됨',
    msgIdealCalculated: '이상적인 대각선 계산됨',
    actionOpen: '벌리기',
    actionClose: '좁히기',
    descLarger: '더 김',
    descSmaller: '더 짧음',
    descCorrection: '조정 필요',
  },
};
