import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'drywall-calculator';
const title = '석고보드 및 경량철골 소요량 계산기';
const description = '스터드, 러너, 석고보드, 피스, 조인트 테이프, 줄눈 퍼티 소요량을 정확하게 산출하는 전문 건식벽체 자재 소요량 계산기입니다.';

const faqData = [
  {
    question: '칸막이 벽체에 필요한 석고보드 수량은 어떻게 계산하나요?',
    answer: '벽체 길이와 천장 높이를 곱하여 전체 벽 면적을 구합니다. 양면 시공 시 2배, 양면 2겹 시공 시 4배를 곱합니다. 보드 1장 면적(1200x2400mm 기준 2.88m2)으로 나눈 뒤 절단 로스율 10%를 가산합니다.',
  },
  {
    question: '스터드 간격은 40cm와 60cm 중 어느 것을 선택해야 하나요?',
    answer: '일반 건식 칸막이벽은 60cm 간격이 표준입니다. 타일 마감 벽체, 습기 노출 구역(욕실, 주방), 차음 벽체 또는 벽체 높이가 3m를 초과하는 경우에는 40cm 간격을 적용합니다.',
  },
  {
    question: '용도별로 어떤 석고보드를 사용해야 하나요?',
    answer: '일반 거실 및 침실에는 일반 석고보드(Type A), 욕실 및 주방에는 방수 석고보드(Type H1), 보일러실 주변에는 방화 석고보드(Type F), 차음 공간에는 고밀도 차음 석고보드를 사용합니다.',
  },
  {
    question: '석고보드 1장당 피스는 몇 개가 필요한가요?',
    answer: '1200x2400mm 보드 1장당 외곽 테두리 25cm 간격, 중앙 스터드 30cm 간격으로 시공 시 약 30개의 석고 피스가 소요됩니다.',
  },
  {
    question: '러너 하부에 차음 테이프를 붙이는 이유는 무엇인가요?',
    answer: '폴리에틸렌 차음 테이프는 바닥 및 천장 구조체와 금속 러너 간의 진동 전달을 차단하여 층간소음 및 틈새 음향 누출을 방지합니다.',
  },
];

const howToData = [
  { name: '벽체 치수 입력', text: '칸막이벽의 길이와 높이를 미터 또는 피트 단위로 입력합니다.' },
  { name: '골조 및 석고 겹수 설정', text: '스터드 간격(40cm/60cm), 1겹/2겹 시공, 단면/양면 여부를 선택합니다.' },
  { name: '자재 산출 및 CAD 도면 확인', text: '스터드, 러너, 보드, 피스, 퍼티 산출 결과와 골조 배치 도면을 확인합니다.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '경량철골 건식 벽체 구조 설계 원리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '경량철골 아연도금 강재 스터드(C형) 및 러너(U형) 설치 시 규격에 맞는 간격과 보드 지그재그 시공법을 적용해야 벽체 휨과 줄눈 균열을 방지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '스터드 간격 기준: 40cm vs 60cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>60cm 간격</strong>은 일반 석고보드 시공의 표준입니다. 무거운 타일 마감이나 3m 이상의 고천장 구조에는 <strong>40cm 간격</strong> 보강 시공이 필수적입니다.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '보드 엇갈림 시공 및 피스 체결 간격',
      html: '<p>보드 이음매가 십자형으로 겹치지 않도록 최소 40cm 이상 엇갈리게 배치합니다. 피스는 테두리 <strong>25cm 간격</strong>, 중앙부 <strong>30cm 간격</strong>으로 체결합니다.</p>',
    },
    {
      type: 'title',
      text: '자재 할증률 및 줄눈 퍼티 소요량',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '문틀 및 창호 개구부 절단 자재 손실을 고려하여 <strong>10% 자재 할증률</strong>을 반영합니다. 줄눈 퍼티는 m2당 약 0.8kg이 소요됩니다.',
    },
  ],
  ui: {
    unitSystemLabel: '측정 단위계',
    unitMetric: '미터법 (m, cm, kg)',
    unitImperial: '야드포인트법 (ft, in, lb)',

    paramLengthLabel: '벽체 길이',
    paramHeightLabel: '벽체 높이',
    paramSpacingLabel: '스터드 간격',
    paramSpacing40Metric: '40 cm (고하중)',
    paramSpacing60Metric: '60 cm (표준)',
    paramSpacing40Imperial: '16 in (고하중)',
    paramSpacing60Imperial: '24 in (표준)',
    paramLayersLabel: '석고보드 겹수',
    paramSingleLayer: '1겹 시공 (Single)',
    paramDoubleLayer: '2겹 시공 (Double)',
    paramSidesLabel: '시공 면수',
    paramDoubleSided: '양면 시공 (칸막이)',
    paramSingleSided: '단면 시공 (벽붙임)',
    paramBoardTypeLabel: '석고보드 종류',
    boardTypeStandard: '일반 석고보드 (Type A)',
    boardTypeMoisture: '방수 석고보드 (Type H1)',
    boardTypeFire: '방화 석고보드 (Type F)',
    boardTypeAcoustic: '차음 석고보드 (Type A)',
    paramWasteLabel: '자재 손실 할증률',

    summaryWallArea: '벽체 순면적',
    summaryBoardArea: '전체 석고보드 면적',

    resBoardsLabel: '석고보드 필요 수량',
    resBoardsUnit: '장',
    resStudsLabel: '수직 스터드 (C형)',
    resStudsUnit: '개',
    resTracksLabel: '수평 러너 (U형)',
    resTracksUnit: '개',
    resDrywallScrewsLabel: '석고보드 피스',
    resDrywallScrewsUnit: '개',
    resFramingScrewsLabel: '골조 체결 피스',
    resFramingScrewsUnit: '개',
    resJointTapeLabel: '조인트 테이프',
    resJointTapeUnit: '길이',
    resJointCompoundLabel: '줄눈 퍼티 (마감재)',
    resJointCompoundUnit: '중량',
    resAcousticBandLabel: '차음 절연 테이프',
    resAcousticBandUnit: '길이',

    diagramWallTitle: 'CAD 경량골조 입면도',
    diagramStudLegend: 'C형 스터드',
    diagramTrackLegend: 'U형 러너',
    diagramBoardLegend: '석고보드 엇갈림 배치',
    diagramModeStructure: '골조 상태',
    diagramModeBoard: '보드 마감 상태',
  },
};
