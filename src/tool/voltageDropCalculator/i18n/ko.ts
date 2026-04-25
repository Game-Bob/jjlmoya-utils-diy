import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'voltage-drop-calculator';
const title = '전압 강하 및 배선 굵기 계산기';
const description = '배선 화재를 방지하기 위한 기술 도구입니다. 거리와 전력에 따라 12V, 24V, 230V 설치에 필요한 배선 단면적을 계산합니다.';

const faqData = [
  {
    question: '전압 강하란 무엇이며 왜 중요한가요?',
    answer: '전기가 전선을 따라 흐를 때 발생하는 전압의 손실을 의미합니다. 전선이 너무 가늘거나 길면 전압이 떨어집니다. 결과적으로 조명이 어두워지거나, 모터가 돌아가지 않거나, 전선이 위험할 정도로 뜨거워질 수 있습니다.',
  },
  {
    question: '12V에서 10미터 거리에 필요한 배선 굵기는?',
    answer: '소비 전력에 따라 다릅니다. 12V·10A를 10m 거리에서 사용하는 경우 최소 2.5mm² 이상이 필요합니다. 20A라면 6mm²가 필요합니다. 저전압(12V/24V) 환경에서는 전압 강하가 230V보다 훨씬 더 심각한 문제가 됩니다.',
  },
  {
    question: '모든 설치에 1.5mm² 전선을 사용할 수 있나요?',
    answer: '아니요. 1.5mm²는 조명 회로(최대 10A)용입니다. 콘센트에는 2.5mm²가 필요합니다. 주방이나 세탁기에는 4mm² 또는 6mm²가 필요합니다. 너무 가는 전선을 사용하는 것은 위험하며 화재의 원인이 될 수 있습니다.',
  },
  {
    question: '허용되는 최대 전압 강하는 얼마입니까?',
    answer: '일반 가정용(230V)의 경우 조명은 최대 3%, 기타 용도는 5%입니다. 12V/24V(캠핑카, 태양광)의 경우 전체적으로 3%를 넘지 않는 것이 좋습니다. 그 이상의 강하는 효율 저하와 과열 위험을 의미합니다.',
  },
];

const howToData = [
  { name: '시스템 전압 정의', text: '12V, 24V(태양광/캠핑카) 또는 230V(가정용) 중에서 선택합니다.' },
  { name: '전류 강도 입력', text: '전선 끝에 연결된 기기가 소비하는 전류(A) 또는 전력(W)을 입력합니다.' },
  { name: '배선 거리 측정', text: '전원에서 기기까지의 배선 편도 길이를 미터 단위로 입력합니다.' },
  { name: '도체 재질 선택', text: '표준 구리(Copper) 또는 알루미늄을 선택하여 정확한 비저항 값으로 계산합니다.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '전압 강하에 대한 완전 가이드', level: 2 },
    { type: 'paragraph', html: '캠핑카를 제작하거나, 태양광 설비를 설계하거나, 정원에 조명을 설치할 때 당신의 프로젝트를 망칠 수 있는 보이지 않는 적이 있습니다. 바로 <strong>전압 강하</strong>입니다. 이는 단순한 기술적 문제가 아닙니다. 냉장고가 제대로 작동하느냐 꺼지느냐, 혹은 안전한 설치냐 화재 위험이냐의 차이입니다.' },
    { type: 'title', text: '전압 강하 계산 공식', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: '옴의 법칙을 통한 정확한 계산', html: '<p>공식은 <strong>ΔV = (2 × L × I × ρ) / S</strong>입니다. 여기서 L은 편도 길이, I는 전류, ρ는 비저항(구리는 0.0178), S는 단면적입니다. 2를 곱하는 이유는 전기가 왕복하기 때문입니다.</p>' },
  ],
  ui: {
    heroDropLabel: '총 전압 강하',
    heroVoltsUnit: '볼트',
    heroPctLoss: '% 손실',
    heroEffLabel: '효율',
    statusExcellent: '우수',
    statusAcceptable: '허용 범위',
    statusCritical: '위험',
    fieldVoltage: '전압',
    fieldMaterial: '재질',
    materialCopper: '구리',
    materialAlum: '알루미늄',
    fieldLoad: '부하',
    modeW: 'W',
    modeA: 'A',
    unitWatts: '와트',
    unitAmps: '암페어',
    fieldLength: '배선 길이 (편도)',
    unitMeters: '미터',
    fieldSection: '배선 단면적',
    sectionInfo: '권장',
  },
};
