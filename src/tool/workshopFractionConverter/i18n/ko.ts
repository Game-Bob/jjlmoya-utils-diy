import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'workshop-fraction-converter';
const title = '워크숍용 분수 미리 변환기';
const description = '분수 단위 인치를 즉시 밀리미터로 변환하세요. 워크숍에 적합한 표준 규격 볼트, 나사, 소켓을 찾아줍니다. 기름진 손이나 장갑을 낀 상태에서도 사용하기 편리하도록 설계되었습니다.';

const faqData = [
  {
    question: '왜 분수를 밀리미터로 변환해야 하나요?',
    answer: '대부분의 현대식 공구와 부품은 미터법을 사용하지만, 오래된 공구나 사양서에는 여전히 분수 단위 인치가 사용됩니다. 이 변환기는 그 차이를 메워 정확한 미터법 환산값이나 가장 가까운 표준 규격 사이즈를 찾도록 도와줍니다.',
  },
  {
    question: '1/2인치와 12.7mm의 차이는 무엇인가요?',
    answer: '1/2인치는 정확히 12.7밀리미터입니다 (0.5 × 25.4 = 12.7). 표준 규격에서는 제조사들이 공통 부품 사이즈를 양쪽 시스템에 맞추기 때문에 미터법 공구와 인치법 공구가 서로 호환되는 경우가 많습니다.',
  },
  {
    question: '왜 "가장 가까운 부품"이 표시되나요?',
    answer: '정확한 변환값이 표준 부품 사이즈 사이에 위치하는 경우가 많기 때문입니다. 이 도구는 사용자의 측정값과 가장 가까운 시판 볼트나 소켓을 찾아주어 워크숍에 있는 것을 활용할 수 있게 합니다.',
  },
  {
    question: '목공 정밀도와 금속 정밀도의 차이는 무엇인가요?',
    answer: '목공에서는 0.5mm 정도의 차이는 무시되는 경우가 많지만, 금속 가공이나 정밀 기계 작업에서는 0.1mm가 매우 중요합니다. 정밀 모드는 재료에 따른 허용 오차 범위를 안내합니다.',
  },
  {
    question: '오프라인에서도 사용할 수 있나요?',
    answer: '네. 모든 계산은 브라우저에서 수행됩니다. 첫 로딩 후에는 완전히 오프라인으로 작동하므로 WiFi가 없는 워크숍에서도 사용하기에 적합합니다.',
  },
  {
    question: '히스토리 기능이 있는 이유는 무엇인가요?',
    answer: '분해 작업이나 부품이 많은 프로젝트를 수행할 때, 히스토리 기능을 통해 다시 입력할 필요 없이 측정값을 참조할 수 있으며 작업 중에 부품 리스트를 작성하는 데 도움이 됩니다.',
  },
];

const howToData = [
  {
    name: '측정 유형 선택',
    text: '분수를 밀리미터로 변환하려면 "순방향"을, 캘리퍼스로 측정한 값에서 분수를 찾으려면 "역방향"을 선택하세요.',
  },
  {
    name: '값 입력',
    text: '3열 입력란(정수, 분자, 분모)을 사용하거나 퀵 프리셋 버튼을 누르세요. 스텝 버튼을 사용하면 타이핑 없이 조정할 수 있습니다.',
  },
  {
    name: '결과 확인',
    text: '정확한 환산값과 함께 가장 가까운 표준 볼트 및 소켓 사이즈가 표시됩니다. 시각적 스케일을 통해 비례를 파악할 수 있습니다.',
  },
  {
    name: '히스토리에 저장',
    text: '"히스토리에 저장"을 클릭하여 측정값을 기록하세요. 히스토리는 브라우저를 닫아도 유지됩니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: '사용 방법', type: 'howto', schema: howToSchema },
    { title: '애플리케이션', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: '측정 유형',
    labelWhole: '정수',
    labelNumerator: '분자',
    labelDenominator: '분모',
    labelInches: '인치',
    labelMillimeters: '밀리미터',
    resultTitle: '변환 결과',
    resultFraction: '분수',
    resultInches: '인치',
    resultMillimeters: '밀리미터',
    matchTitle: '가장 가까운 규격',
    matchClosestFastener: '표준 볼트 또는 부품 사이즈',
    matchClosestSocket: '표준 소켓 또는 렌치 사이즈',
    matchDifference: '측정값과의 차이',
    matchRecommendation: '재고가 있는 경우 이 사이즈를 사용하세요',
    reverseSearchTitle: '역방향 검색',
    reverseSearchLabel: '측정값 (mm)',
    reverseSearchButton: '분수 찾기',
    reverseSearchHint: '캘리퍼스로 측정한 값을 입력하세요',
    unitMm: 'mm',
    unitInch: 'in',
    modeForward: '분수 → 미리',
    modeReverse: '미리 → 분수',
    precisionLabel: '정밀 모드',
    precisionCarpentry: '목공',
    precisionMetal: '금속 가공',
    buttonConvert: '변환',
    buttonClear: '지우기',
    buttonCopyResult: '결과 복사',
    buttonSaveToHistory: '히스토리에 저장',
    historyTitle: '히스토리',
    historyEmpty: '저장된 측정값이 없습니다',
    historyRemove: '삭제',
    helpText: '측정값을 선택하거나 분수를 입력하여 시작하세요.',
    toolOverline: '워크숍 툴',
    labelVisualReference: '시각적 참조 (1인치 = 96px)',
  },
};
