import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'epoxy-resin-calculator';
const title = '에폭시 레진 계산기: 정확한 혼합 및 부피';
const description = '프로젝트에 필요한 에폭시 레진과 경화제의 정확한 양을 계산하세요. 리버 테이블, 주얼리 및 몰드 작업 시 낭비를 방지합니다.';

const faqData = [
  {
    question: '레진에서 정확한 혼합 비율이 왜 그렇게 중요한가요?',
    answer: '다른 혼합물과 달리 에폭시 레진은 증발에 의해 마르는 것이 아니라 화학 반응(중합)을 통해 경화됩니다. 레진이나 경화제가 너무 많으면 반응이 불완전해져서 결과물이 끈적이거나, 무르거나, 영구적인 기포가 남을 수 있습니다.',
  },
  {
    question: '중량 비율 vs 부피 비율이란 무엇인가요?',
    answer: '많은 레진이 부피 기준으로 2:1로 혼합되지만, 경화제의 밀도가 더 높은 경우가 많아 중량 기준으로는 100:45가 될 수 있습니다. 항상 제조업체의 지침을 따르고, 가능하다면 정밀한 측정을 위해 디지털 저울을 사용하세요.',
  },
  {
    question: '혼합 시 기포를 방지하려면 어떻게 해야 하나요?',
    answer: '컵 벽면을 잘 긁어내며 일정한 원을 그리듯 최소 3분 동안 천천히 섞어주세요. 붓기 전에 몇 분 정도 혼합물을 그대로 두면 기포가 표면으로 떠오릅니다.',
  },
  {
    question: '가용 시간(Pot Life)이란 무엇인가요?',
    answer: '혼합물이 굳기(겔화) 시작하기 전까지 작업할 수 있는 시간입니다. 여름철이나 대량으로 혼합할 경우 방열 반응(열 발생)으로 인해 이 시간이 급격히 줄어듭니다.',
  },
];

const howToData = [
  { name: '몰드 크기 측정', text: '레진을 채우려는 영역의 길이, 너비, 깊이(두께)를 측정합니다.' },
  { name: '혼합 비율 입력', text: '제품 라벨에서 혼합 비율이 1:1, 2:1 또는 3:1인지, 그리고 중량 기준인지 부피 기준인지 확인합니다.' },
  { name: '구성 요소 계량', text: '저울 위에 깨끗한 용기를 올리고 주제(A)를 먼저 부은 다음 경화제(B)를 붓습니다.' },
  { name: '기술적 혼합', text: '혼합물이 완전히 투명해지고 밀도가 다른 "줄무늬"가 보이지 않을 때까지 부드럽게 섞어줍니다.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    { name: 'TotalBoat - 지원 센터 및 기술 가이드', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - FAQ 및 사용 가이드', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '에폭시 레진 계산 및 혼합 가이드', level: 2 },
    { type: 'paragraph', html: '에폭시 레진은 증발을 통해 마르는 페인트가 아닙니다. 복잡한 <strong>방열 화학 반응</strong>입니다. 에폭시 분자가 폴리아민 분자와 사슬을 형성하여 결정질 고체 열경화성 폴리머를 만들 때 마법이 일어납니다.' },
    { type: 'paragraph', html: '내구성 있는 예술 작품과 끈적이는 실패작의 차이는 <strong>정확한 화학량론</strong>에 달려 있습니다. 혼합 비율이 단 5%만 틀려도 영구적으로 경화되지 않을 수 있습니다. 이 도구는 수학적 추측을 없애주어 당신이 창작에 집중할 수 있도록 돕습니다.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: '부피인가 중량인가?', html: '<p>보통 초보자들이 하는 가장 큰 실수는 100ml가 100g이라고 가정하는 것입니다. <strong>레진은 경화제보다 밀도가 높습니다.</strong></p><p>제품 데이터 시트에 "중량 기준 100:50"이라고 되어 있다면, 그것은 "부피 기준 2:1"과 같지 않습니다. 이 계산기는 몰드를 채우기 위한 표준인 <strong>부피</strong>(V = L × W × H)를 기준으로 작동합니다.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: '일반적인 비율', html: '<ul><li><strong>1:1</strong> — 코팅, 바니시 및 속건성 접착제.</li><li><strong>2:1</strong> — 표준. 리버 테이블, 주얼리 및 중간 크기 몰드.</li><li><strong>3:1</strong> — 산업용 바닥 및 고경도 구조용 적층판.</li></ul>' },
    ]},
    { type: 'title', text: '안전 프로토콜 및 베스트 프랙티스', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: '중요 온도', html: '<p>항상 <strong>21°C에서 25°C</strong> 사이에서 작업하세요. 추위는 반응을 멈추게 하여 결과물을 탁하게 만들 수 있습니다. 과도한 열은 방열 반응을 위험할 정도로 가속화합니다(플래시 큐어).</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: '더블 컵 기법', html: '<p>한 번의 혼합을 너무 믿지 마세요. 벽면과 바닥을 잘 긁어낸 뒤 혼합물을 <strong>두 번째 깨끗한 컵</strong>에 옮겨 닮아 다시 섞어주세요. 이렇게 하면 촉매가 섞이지 않은 재료가 남지 않습니다.</p>' },
    ]},
  ],
  ui: {
    shapeRect: '직사각형',
    shapeCylinder: '원기둥',
    shapeSphere: '구형',
    labelLength: '길이 (cm)',
    labelWidth: '너비 (cm)',
    labelDiameter: '지름 (cm)',
    labelDepth: '깊이 (cm)',
    labelRatio: '혼합 비율 (중량/부피)',
    labelCustomRatio: '사용자 정의 비율 사용 (A:B)',
    labelResinA: '레진 (A)',
    labelHardenerB: '경화제 (B)',
    labelWasteTitle: '여유량(Safety Margin)',
    labelWasteDesc: '손실 대비 5% 추가',
    labelTotalVolume: '총 부피',
    labelPartA: 'A부분 (레진)',
    labelPartB: 'B부분 (경화제)',
    labelVisualization: '시각화',
    shapeRectLabel: '직사각형 블록',
    shapeCylinderLabel: '실린더 / 원형 몰드',
    shapeSphereLabel: '완전한 구체',
  },
};
