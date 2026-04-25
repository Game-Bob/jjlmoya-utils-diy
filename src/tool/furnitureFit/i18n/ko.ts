import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'furniture-fit-calculator';
const title = '이사 및 가구 공간 계산기';
const description = '소파, 옷장 또는 테이블이 엘리베이터나 문을 통과할 수 있는지 확인하세요. 3D 피타고라스 정리를 사용하여 기울였을 때의 크기를 계산하고 이사 실수를 방지합니다.';

const faqData = [
  {
    question: '문보다 작은데 소파가 들어가지 않을 수 있는 이유는 무엇인가요?',
    answer: '회전 각도 때문입니다. 복도가 좁은 경우 소파를 옆으로 눕히거나 기울여서 넣어야 합니다. 제한 요인은 문 너비뿐만 아니라 방에서 회전할 수 있는 반경도 포함됩니다.',
  },
  {
    question: '가구의 대각선이란 무엇이며 왜 중요한가요?',
    answer: '서로 마주 보는 두 모서리 사이의 가장 긴 거리입니다. 바닥에서 조립한 키 큰 가구를 천장이 낮은 방에서 다시 세울 수 있는지 확인하는 데 필수적입니다.',
  },
  {
    question: '엘리베이터를 올바르게 측정하는 방법은 무엇인가요?',
    answer: '바닥만 측정하지 마세요. 열린 문 너비, 유효 깊이, 전체 높이를 측정하십시오. 문 바닥에서 후면 상단 모서리까지의 대각선이 가장 중요한 데이터입니다.',
  },
  {
    question: '어떤 부품을 먼저 분해해야 하나요?',
    answer: '소파 다리, 옷장 손잡이, 냉장고 문 등은 종종 5~10cm의 중요한 여유 공간을 만들어 가구가 들어갈 수 있는지 여부를 결정짓습니다.',
  },
];

const howToData = [
  { name: '가구 측정 (길이, 너비, 높이)', text: '팔걸이나 손잡이 등 돌출된 부분을 포함하여 물체의 최대 치수를 측정합니다.' },
  { name: '주요 통로 측정', text: '문 통과 유효 너비(프레임 사이), 엘리베이터 내부, 복도 너비를 측정합니다.' },
  { name: '시뮬레이터에 데이터 입력', text: '도구에 치수를 입력하여 가구 부피가 통로 공간과 호환되는지 확인합니다.' },
  { name: '기울기 계산', text: '가구가 매우 높을 경우, 계산된 대각선을 사용하여 계단참이나 엘리베이터 내부에서 회전할 수 있는지 확인합니다.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '이사의 과학과 피타고라스 정리', level: 2 },
    { type: 'paragraph', html: '이사는 단순히 체력 테스트가 아닙니다. 복잡한 기하학적 퍼즐입니다. 방이나 엘리베이터의 겉보기 공간은 특히 3차원을 무시할 때 사람의 눈을 속입니다. 수학을 활용하면 반품이나 운송 실패로 인한 막대한 비용 손실을 막을 수 있습니다.' },
    { type: 'title', text: '3D 대각선의 요령', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: '황금률', html: '<p>가구만 측정하지 마세요. 항상 <strong>주요 접근 포인트</strong>를 측정하십시오: 문틀 너비(문이 180도 열리지 않는다면 문 두께를 뺄 것), 계단참의 가장 낮은 천장 지점, 문을 닫았을 때의 엘리베이터 실제 깊이입니다. 공식 <code>d = √(w² + h² + z²)</code>가 기울였을 때 들어가는지 알려줍니다.</p>' },
    { type: 'title', text: '복도의 소파 문제', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: '조작 여유 공간', html: '<p>가구가 80cm이고 입구가 80cm라면 들어갈 것이라고 생각하는 것은 흔한 실수입니다. 그렇지 않습니다. 작업자의 손, 원단의 탄성, 벽의 미세한 굴곡 등을 고려하면 최소 <strong>2~5cm</strong>의 여유가 필요합니다. 이 여유가 없으면 가구가 긁히거나 끼어버릴 수 있습니다.</p>' },
    { type: 'title', text: '이사를 망치는 3가지 실수', level: 3 },
    { type: 'paragraph', html: '치수를 정확히 쟀더라도 이러한 보이지 않는 요인이 종종 문제를 일으킵니다: <strong>천장 조명</strong> — 대각선 회전 중에 잊어버리기 쉽습니다. <strong>가구의 회전 반경</strong> — 딱딱한 가구는 구부러지지 않습니다. <strong>포장</strong> — 뽁뽁이(에어캡)나 보호용 박스는 각 면에 1~3cm를 추가합니다.' },
  ],
  ui: {
    conTitle: '공간 치수',
    conHint: '예: 표준 엘리베이터, 문틀 또는 트럭.',
    objTitle: '가구 치수',
    labelWidth: '너비 (cm)',
    labelHeight: '높이 (cm)',
    labelDepth: '깊이 (cm)',
    labelLength: '길이 (cm)',
    labelMargin: '허용 오차 (cm)',
    vizLabel: '단순화된 공간 뷰',
    verdictDefault: '들어갈까요?',
    verdictHint: '공간 호환성을 확인하려면 치수를 입력하세요.',
    verdictYes: '네, 들어갑니다!',
    verdictNo: '안 들어갑니다',
    fitDirect: '가구가 그대로 완벽하게 들어갑니다.',
    fitDiagonal3d: '대각선으로 기울이면 들어갑니다 (3D 피타고라스).',
    fitDiagonalPlane: '측면 평면 중 하나로 기울이면 들어갑니다.',
    fitNope: '가구가 너무 커서 대각선으로도 들어가지 않습니다.',
    diagLabel: '최대 대각선 (3D 피타고라스):',
    objLabel: '가구',
  },
};
