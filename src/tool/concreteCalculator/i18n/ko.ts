import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'concrete-mortar-calculator';
const title = '콘크리트 및 모르타르 계산기: 세먼트, 모래, 물의 정확한 배합량';
const description =
  '1m³당 필요한 세멘트 포대 수, 삽 분량, 리터 단위의 물 양을 계산합니다. 기초, 바닥, 벽, 미장 작업용. 기술 배합 가이드 제공.';

const faqData = [
  {
    question: '1세제곱미터(m³)당 25kg 세멘트는 몇 포대가 들어가나요?',
    answer:
      '표준 콘크리트(강도 C20/25 기준)의 경우, 다져진 상태의 1m³를 만들기 위해 약 14포대의 25kg 세멘트(350kg)가 필요합니다.',
  },
  {
    question: '콘크리트와 모르타르 중 어느 것이 더 강한가요?',
    answer:
      '자갈이 섞인 콘크리트가 구조적으로 더 강하며 큰 하중을 견딜 수 있습니다. 모래만 섞인 모르타르는 벽돌을 쌓거나 표면을 매끄럽게 마감(미장)하는 데 적합합니다.',
  },
  {
    question: '1세제곱미터는 삽으로 몇 번이나 되나요?',
    answer:
      '삽의 크기에 따라 다르지만, 일반적으로 1m³당 모래 180~200삽 정도로 계산합니다. 본 계산기는 m³를 권장 삽 횟수로 환산해 줍니다.',
  },
  {
    question: '믹서기 없이 손으로 배합할 수 있나요?',
    answer:
      '네, 가능하지만 육체적으로 훨씬 더 많은 노력이 필요합니다. 물이 빠져나가지 않도록 깨끗하고 방수가 되는 표면(철판이나 대야) 위에서 작업하는 것이 좋습니다.',
  },
  {
    question: '건조 시 콘크리트가 갈라지는 이유는 무엇인가요?',
    answer:
      '주로 경화 과정 중 수분 부족(급격한 증발)이나 배합 시 과도한 물 사용이 원인입니다. 타설 후 며칠 동안은 물을 뿌려주는(양생) 것이 좋습니다.',
  },
];

const howToData = [
  {
    name: '배합 유형 선택',
    text: '기초용 콘크리트인지 벽면용 모르타르인지 선택합니다.',
  },
  {
    name: '부피(m³) 지정',
    text: '전체 부피를 입력합니다. 가로 x 세로 x 두께를 곱하세요.',
  },
  {
    name: '필요 수량 확인',
    text: '구매해야 할 포대 수, 삽 횟수, 리터 양을 확인합니다.',
  },
  {
    name: '비율 적용',
    text: '완벽한 배합을 위해 세멘트, 모래, 자갈의 시각적 배합 가이드를 따르세요.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '콘크리트 및 모르타르 배합 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '리모델링이나 건축을 할 때 가장 많이 하시는 질문 중 하나가 <strong>"콘크리트 1루베(1m³)를 만드는 데 세멘트가 몇 포대 필요한가?"</strong>입니다. 단순히 재료를 섞는 것이 아니라, 구조물의 최종 강도는 세멘트, 모래, 자갈, 물의 정확한 비율에 달려 있습니다. 본 계산기는 산업 표준 측정치를 현장에서 사용하기 편한 25kg 포대, 삽 횟수, 리터 단위로 환산해 드립니다.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: '과도한 물 사용은 콘크리트를 약화시킵니다',
      html: '<p>사용하기 편하게 하려고 물을 너무 많이 섞는 것은 흔한 실수입니다. 과도한 물은 경화 과정에서 증발하며 기공을 만들어 최종 강도를 급격히 떨어뜨립니다. 이상적인 농도는 <strong>액체가 아닌 뻑뻑한 반죽 상태</strong>여야 합니다. 물은 가능한 최소한으로 사용하세요.</p>',
    },
    {
      type: 'title',
      text: '용도별 표준 배합 비율',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>콘크리트 배합량</strong>은 용도에 따라 달라집니다. <strong>표준 콘크리트</strong>(기초 및 바닥용)의 배합비는 세멘트 1 : 모래 2.5 : 자갈 3입니다. <strong>조적용 모르타르</strong>(벽체 및 칸막이)는 세멘트 1 : 모래 4입니다. <strong>강력 미장용 모르타르</strong>는 세멘트 1 : 모래 3입니다. 자갈이 섞인 콘크리트는 더 많은 하중을 견디고, 모래만 섞인 모르타르는 접착 및 미장에 적합합니다.',
    },
    {
      type: 'title',
      text: '필요한 부피(m³) 계산 방법',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: '바닥 타설 계산 예시',
      html: '<p>가로 4m, 세로 3m, 두께 15cm인 정원 바닥의 경우: <strong>4 × 3 × 0.15 = 1.80 m³</strong>가 됩니다. 본 계산기의 "치수 기준" 섹션에 입력하면 이 계산이 자동으로 수행됩니다.</p><p>유실되는 양이나 지면의 굴곡을 고려하여 항상 <strong>10% 정도 넉넉하게 구매</strong>하시는 것을 잊지 마세요.</p>',
    },
    {
      type: 'title',
      text: '혼합 순서 및 포대 단위 배합',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '현장에서는 흔히 <strong>"300kg 배합(1m³당 세멘트 300kg)"</strong>과 같은 표현을 사용합니다. 믹서기에서 올바르게 혼합하려면, 먼저 물을 넣고 그 다음 자갈과 모래를 넣어 덩어리를 푼 뒤, 마지막으로 세멘트를 조금씩 추가합니다.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: '모자라지 않게 준비하는 10% 법칙',
      html: '<p>흘리는 양, 지면의 불규칙함, 젖은 골재의 실제 부피 변화 등을 보상하기 위해 항상 계산된 양보다 <strong>10% 더 많은 재료를 구매</strong>하세요. 공사가 중단된 상태에서 추가 주문을 하는 것보다 훨씬 경제적입니다.</p>',
    },
  ],
  ui: {
    mixH200Label: '표준 콘크리트',
    mixH200Hint: '기초 및 바닥 타설에 적합',
    mixM40Label: '조적용 모르타르',
    mixM40Hint: '벽체 및 칸막이용',
    mixM80Label: '강력 미장/바닥',
    mixM80Hint: '바닥 마감 및 강력 미장용',
    modeDimsLabel: '치수 기준',
    modeDirectLabel: 'm³ 직접 입력',
    labelLength: '가로',
    labelWidth: '세로',
    labelThickness: '두께',
    labelVolume: '전체 부피 (m³)',
    binderCementLabel: '세먼트',
    binderLimeLabel: '석회',
    summaryLabel: '전체 타설량:',
    resUnitSacks: '포대 (25kg)',
    resUnitShovels: '삽 횟수',
    resUnitLitres: '리터',
    resLabelCement: '포틀랜드 세먼트',
    resLabelLime: '수경성 석회',
    resLabelSand: '모래 / 골재',
    resLabelWater: '깨끗한 물',
    proportionsTitle: '선택한 배합의 비율',
    propLabelSand: '모래',
    propLabelGravel: '자갈',
    adviceH200: '기둥, 기초 및 하중을 견디는 구조물에 적합합니다.',
    adviceM40: '벽돌이나 블록 벽을 쌓는 데 완벽합니다.',
    adviceM80: '매우 견고한 바닥 마감을 위해 이것을 사용하세요.',
    adviceLimeH200: '석회 콘크리트는 더 유연하지만 굳는 데 시간이 더 걸립니다.',
    priceTotalLabel: '예상 예산',
    priceSackLabel: '포대당',
    priceSandLabel: '모래 (m³)',
    priceDisclaimer: '참고용 시장 가격입니다. 현지 공급업체에 맞춰 조정하세요.',
  },
};
