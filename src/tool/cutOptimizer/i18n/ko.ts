import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'cut-optimizer';
const title = '목재 및 판재 절단 최적화 계산기';
const description =
  '목재, 금속 또는 파이프 절단을 최적화하는 무료 계산기입니다. 1D 및 2D 빈 패킹 알고리즘으로 폐기물을 최소화합니다. 목공, 금속 가공 및 DIY 리모델링에 이상적입니다.';

const faqData = [
  {
    question: '1D 절단 최적화란 무엇인가요?',
    answer:
      '수학적 알고리즘(빈 패킹 문제 등)을 사용하여 표준 길이의 재료(각재, 프로파일, 파이프)에서 최소한의 손실로 더 작은 부품을 어떻게 절단할지 결정하는 도구입니다.',
  },
  {
    question: '톱날 두께(Kerf)를 포함해야 하는 이유는 무엇인가요?',
    answer:
      '톱으로 재료를 자를 때마다 몇 밀리미터(톱날에 따라 보통 2mm~4mm)가 깎여 나갑니다. 이 공간을 계산하지 않으면 리스트의 마지막 부품은 계획보다 짧아지게 됩니다.',
  },
  {
    question: '다양한 길이의 부품을 혼합할 수 있나요?',
    answer:
      '네, 저희 계산기는 어떠한 길이와 수량의 조합도 지원합니다. 알고리즘이 가능한 모든 조합을 평가하여 재고 자재의 활용을 극대화하는 방향으로 우선순위를 정합니다.',
  },
  {
    question: '절단 계획을 어떻게 저장하나요?',
    answer:
      '최적화가 완료되면 페이지를 인쇄하거나 시각적 도면을 스크린샷으로 찍을 수 있습니다. 이는 작업장에서 절단 순서를 헷갈리지 않게 도와주는 물리적 가이드 역할을 합니다.',
  },
];

const howToData = [
  {
    name: '기본 재료(Stock) 정의',
    text: '사용 가능한 각재나 프로파일의 전체 길이를 입력합니다(예: 2400mm 또는 6000mm).',
  },
  {
    name: '톱날 두께(Kerf) 설정',
    text: '톱이 한 번 절단할 때마다 제거되는 밀리미터 수를 설정하여 밀리미터 단위로 정확하게 계산합니다.',
  },
  {
    name: '필요한 부품 나열',
    text: '프로젝트에 필요한 각 부품의 길이와 수량을 입력합니다.',
  },
  {
    name: '최적화 실행',
    text: '가장 효율적인 절단 도면과 생성된 폐기물의 정확한 비율을 확인합니다.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '절단 최적화 결정판 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '기술적으로 <strong>「절단 재고 문제(Cutting Stock Problem)」</strong>로 알려진 절단 최적화는 산업 공학에서 가장 매력적인 물류 과제 중 하나입니다. 20개의 부품과 5개의 재고 재료가 있는 프로젝트의 경우 수백만 가지의 조합이 존재합니다. 컴퓨터 알고리즘은 수 밀리초 만에 최적의 솔루션을 찾아내어 일반적인 15%의 폐기물을 5% 미만으로 줄일 수 있습니다.',
    },
    {
      type: 'title',
      text: '1D 선형 절단 및 2D 판재 절단',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: '각재 및 프로파일용 선형 절단',
      html: '<p><strong>선형 절단(1D)</strong>에서는 최적화가 길이라는 한 가지 차원에서만 발생합니다. 자재의 너비는 일정하다고 가정합니다. 각재, 대들보, 금속 및 알루미늄 프로파일, PVC 또는 구리 파이프, 나사 봉 등에 이상적입니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: '보드 및 시트용 판재 절단',
      html: '<p><strong>판재 절단(2D)</strong>에서는 너비와 길이의 두 가지 차원을 관리합니다. 이 도구는 각 절단이 끝에서 끝까지 이어지는 길로틴 방식의 알고리즘을 사용합니다. MDF, 파티클 보드, 합판, 유리, 아크릴, 금속판 등에 적합합니다.</p>',
    },
    {
      type: 'title',
      text: '핵심 요소: 톱날 두께(Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kerf</strong>는 절단할 때마다 사라지는 자재를 의미합니다. 표준 테이블 톱날은 한 번 절단할 때 3.0mm에서 3.2mm를 소모합니다. 휴대용 원형 톱은 1.5mm에서 2.5mm를 소모합니다. 아크릴 레이저 절단은 0.1mm에서 0.3mm에 불과합니다. 2400mm 각재에서 10번 절단하는 프로젝트에서 Kerf를 무시하면 30mm에서 32mm의 유효한 자재를 잃게 됩니다.',
    },
    {
      type: 'title',
      text: 'Best Fit Decreasing 알고리즘',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: '최적화 프로그램의 내부 작동 방식',
      html: '<p>최적화 프로그램의 핵심은 <strong>Best Fit Decreasing (BFD)</strong> 전략을 사용합니다. 먼저 모든 부품을 길이가 긴 순서대로 정렬합니다(큰 부품일수록 배치하기 어렵기 때문입니다). 그런 다음 각 부품에 대해 나머지 잔재 중에서 가장 잘 맞는(여백이 최소화되는) 곳을 찾습니다. 기존 자재에 들어가지 않는 경우에만 새 자재를 사용합니다. 이 과정은 무작위 배치와 비교하여 폐기물을 획기적으로 줄여줍니다.</p>',
    },
  ],
  ui: {
    modeLinearLabel: '선형 (각재)',
    modePanelLabel: '판재 (보드)',
    configTitle: '자재 설정',
    labelStockLength: '자재 길이 (mm)',
    labelStockWidth: '자재 너비 (mm)',
    labelKerf: '톱날 두께 / Kerf (mm)',
    cutsTitle: '절단 리스트',
    placeholderLength: '길이',
    placeholderWidth: '너비',
    placeholderQty: '수량',
    btnRemoveTitle: '삭제',
    statStockUsed: '사용 자재',
    statTotalCuts: '전체 절단 수',
    statWaste: '전체 폐기물',
    statEfficiency: '효율',
    vizTitle: '절단 시각화',
    emptyState: '절단 부품을 추가하고 계산을 누르면 절단 계획이 표시됩니다.',
    noValidCuts: '유효한 절단 도면을 생성할 수 없습니다. 치수를 확인하세요.',
    noValidPanels: '유효한 판재 배치를 생성할 수 없습니다. 부품이 보드 크기에 맞는지 확인하세요.',
    stockLabel: '자재',
    panelLabel: '판재',
    wasteLabel: '폐기물:',
    effLabel: '효율:',
  },
};
