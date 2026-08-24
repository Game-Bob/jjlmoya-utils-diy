import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'excavation-volume-soil-swell-calculator';
const title = '굴착 토량 계산기 및 흙의 팽창률(느슨함) 추정';
const description = '굴착 전 원땅 상태의 토량(다짐 토량)을 계산하고 모래, 표토, 점토, 자갈의 팽창률을 반영한 느슨한 상태의 토량을 추정합니다.';

const faq = [
  {
    question: '원땅 토량(다짐 토량)과 느슨한 토량의 차이는 무엇인가요?',
    answer: '원땅 토량은 굴착 전 자연 상태의 땅 용적입니다. 느슨한 토량은 흙을 파낸 후 입자 사이에 공극이 생겨 부피가 늘어난 상태의 용적입니다.',
  },
  {
    question: '굴착 토량은 어떻게 계산하나요?',
    answer: '굴착 가로, 세로, 깊이를 곱하여 계산합니다. 예를 들어 가로 4m, 세로 3m, 깊이 0.5m 굴착 시 원땅 토량은 6세제곱미터가 됩니다.',
  },
  {
    question: '점토는 왜 팽창률 범위를 넓게 설정하나요?',
    answer: '점토는 함수율, 밀도, 응력 이력에 따라 부피 변화 폭이 크기 때문에 계획 시 넓은 예측 범위를 적용합니다.',
  },
  {
    question: '이 계산기로 지반조사를 대체할 수 있나요?',
    answer: '아닙니다. 본 계산기는 토사 운반 및 사토장 계획용 참고 수치입니다. 구조물 기초나 흙막이 공사 시에는 정식 지반조사를 수행해야 합니다.',
  },
];

const howTo = [
  { name: '굴착 규격 입력', text: '굴착할 가로, 세로, 깊이를 입력합니다. 필요 시 미터법과 야드-파운드법을 전환합니다.' },
  { name: '토질 유형 선택', text: '모래, 표토, 점토, 자갈 중 해당 토질을 선택하여 팽창률 범위를 적용합니다.' },
  { name: '토사 운반 계획 수립', text: '원땅 토량으로 굴착 양을 확인하고 느슨한 토량 범위로 덤프트럭 및 적재 공간을 계획합니다.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq,
  bibliographyTitle: '출처 및 기술 노트',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '현장 용도에 맞는 두 가지 토량 지표', level: 2 },
    { type: 'paragraph', html: '<strong>원땅 토량</strong>은 굴착 구덩이 자체의 기하학적 부피(가로×세로×깊이)입니다. <strong>느슨한 토량</strong>은 파낸 흙이 적재장이나 운반 차량에서 차지하는 부피입니다.' },
    { type: 'title', text: '운반 및 사토 계획 시 느슨한 토량 활용', level: 3 },
    { type: 'paragraph', html: '토질을 선택하고 느슨한 토량의 최소·최대 범위를 덤프트럭 용량 및 임시 적재 공간과 비교하여 계획을 수립하세요.' },
    { type: 'tip', title: '토사 팽창률은 지반조사 시험을 대신할 수 없습니다', html: '지하수위나 점토 함량에 따라 실제 부피 증가율이 달라질 수 있습니다. 옹벽 및 기초 공사에는 지반조사 보고서가 필요합니다.' },
    { type: 'title', text: '장비 투입 전 유동적 수치 확인', level: 3 },
    { type: 'paragraph', html: '토질이 불확실한 경우 두 가지 유사 토질로 시험 계산하여 보수적인 수치로 운반 차량을 준비하는 것이 안전합니다.' },
  ],
  ui: {
    unitSystemLabel: '단위계',
    unitMetric: '미터법',
    unitImperial: '야드-파운드법',
    onboarding: '굴착 규격을 입력하고 토질을 선택하여 원땅 토량과 느슨한 토량을 계산하세요.',
    dimensionLabel: '굴착 규격',
    lengthLabel: '가로 (길이)',
    widthLabel: '세로 (너비)',
    depthLabel: '깊이',
    soilLabel: '토질 유형',
    soilSand: '모래',
    soilTopsoil: '표토',
    soilClay: '점토',
    soilGravel: '자갈',
    soilSandBand: '팽창률 10 ~ 15%',
    soilTopsoilBand: '팽창률 15 ~ 25%',
    soilClayBand: '팽창률 25 ~ 40%',
    soilGravelBand: '팽창률 15 ~ 25%',
    bankVolumeLabel: '원땅 토량 (다짐 상태)',
    bankVolumeHelp: '굴착 전 자연 상태의 땅 부피',
    looseVolumeLabel: '느슨한 토량 (파낸 상태)',
    looseVolumeHelp: '굴착 후 예상되는 부피 범위',
    expansionLabel: '적용된 흙 팽창률',
    expansionHelp: '선택한 토질의 부피 증가 범위',
    sceneTitle: '굴착에서 임시 적재까지',
    sceneBank: '원땅 상태',
    sceneLoose: '느슨한 상태',
    sceneGround: '지표면',
    sceneCut: '굴착 구덩이',
    interpretationTitle: '결과 활용 방법',
    interpretationText: '첫 번째 수치는 굴착할 구덩이 용적이며, 범위 수치는 파낸 흙을 운반·적재할 때 필요한 부피입니다.',
    warning: '토사 운반 계획용 추정치입니다. 습도 및 굴착 방식에 따라 실제 부피가 달라질 수 있습니다. 정식 지반조사를 대체하지 않습니다.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: '낮은 팽창률',
    soilStatusMedium: '보통 팽창률',
    soilStatusHigh: '높은 팽창률',
    soilStatusLabel: '계획 적용 범위',
  },
};
