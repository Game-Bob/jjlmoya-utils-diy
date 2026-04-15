import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'passepartout-calculator';
const title = '매트지 계산기: 액자 제작을 위한 시각 보정 여백';
const description = '시각 보정(보텀 웨이팅)을 적용한 매트지(파스파르투) 여백 계산 도구입니다. 사진과 예술 작품을 갤러리 비율로 액자에 담아보세요.';

const faqData = [
  {
    question: '시각 중심 보정(Bottom Weighting)이란 무엇인가요?',
    answer: '액자 제작 시 하단 여백을 다른 여백보다 약간 넓게 만드는 디자인 원칙입니다. 이는 작품을 걸었을 때 기하학적 중심이 실제보다 아래로 처져 보이는 시각적 착시를 보정합니다.',
  },
  {
    question: '매트지는 어떤 소재로 된 것이 좋은가요?',
    answer: '예술 작품의 보존을 위해서는 무산성(Acid-free) 또는 중성 pH 보드(알파 셀룰로오스 또는 면 소재)를 사용해야 합니다. 저렴한 보드는 시간이 지나면 황변하며 리그닌 성분으로 인해 작품을 손상시킬 수 있습니다.',
  },
  {
    question: '여백의 색상은 어떻게 선택하나요?',
    answer: '제품을 방해하지 않는 오프 화이트나 부드러운 크림색이 표준입니다. 어두운 여백은 사진의 흰색을 강조할 수 있으며, 색상이 있는 여백은 작품의 톤과 충돌하지 않도록 주의해서 사용해야 합니다.',
  },
  {
    question: '이상적인 여백 너비는 얼마인가요?',
    answer: '전문적인 기준은 5~8cm 사이입니다. 여백이 너무 좁으면 작품이 답답해 보이고, 매우 넓으면 작은 작품에 웅장하고 미니멀한 느낌을 줄 수 있습니다.',
  },
];

const howToData = [
  { name: '예술 작품 측정', text: '액자에 넣을 종이나 캔버스의 정확한 너비와 높이를 측정합니다. 매트지가 이미지에 약간 겹치게 하려면 몇 밀리미터를 뺍니다.' },
  { name: '액자 내측 측정', text: '액자 내부 또는 매트 보드가 끼워질 홈의 치수를 측정합니다.' },
  { name: '시각 보정 활성화', text: '전문적인 마감을 위해 하단 여백을 자동으로 더 크게 하려면 계산기 옵션을 선택하세요.' },
  { name: '보드 절단', text: '산출된 치수를 사용하여 보드의 창(개구부)과 외부를 절단합니다. 단면을 깨끗하게 하기 위해 45도 커터를 사용하는 것이 좋습니다.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    { name: 'ISO 9706: 문서용 보존지 표준', url: 'https://www.iso.org/standard/22495.html' },
    { name: 'PPFA: 전문 액자 제작자 협회', url: 'https://ppfa.com/' },
    { name: 'Fine Art Trade Guild: 액자 제작 표준', url: 'https://www.fineart.co.uk/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '완벽한 액자 제작의 과학', level: 2 },
    { type: 'paragraph', html: '<strong>매트지</strong>(파스파르투)는 단순한 장식용 보드가 아닙니다. 예술 작품이 숨을 쉴 수 있게 해주는 폐와 같은 역할을 합니다. 이 계산기는 보드를 절단하기 위한 정확한 치수를 결정하는 데 도움을 주어, 작품이 액자 안에서 완벽하게 중앙에 배치되거나 시각적으로 균형을 이룰 수 있게 합니다.' },
    { type: 'title', text: '왜 "보텀 웨이팅"이 필요한가요?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: '기하학적 중심의 시각적 착시', html: '<p>사람의 눈은 수직 기하학적 중심을 실제보다 약간 낮은 위치에 있는 것으로 인식하는 경향이 있습니다. 작품을 정확한 중앙에 배치하면 아래로 처져 보일 수 있습니다.</p><p><strong>보텀 웨이팅</strong>은 하단 여백을 약간 더 크게 두어 이 착시를 보정함으로써, 작품을 시각적으로 들어 올려 완벽한 중앙에 있는 것처럼 보이게 합니다.</p>' },
    { type: 'title', text: '보존용 매트지 소재', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: '보존용 무산성 보드', html: '<p>보드를 선택할 때는 항상 <strong>"Acid-Free"</strong> 또는 <strong>"Museum Quality"</strong>라는 용어를 확인하세요. 저렴한 목재 펄프 보드는 시간이 지나면 황변하고 산성을 방출하여 작품을 영구적으로 손상시킬 수 있습니다.</p>' },
  ],
  ui: {
    sectionTitle: '치수',
    sectionDesc: '치수를 센티미터 단위로 입력하세요.',
    frameSizeTitle: '액자 크기',
    artSizeTitle: '작품 크기',
    labelWidth: '너비 (cm)',
    labelHeight: '높이 (cm)',
    labelBottomWeighting: '보텀 웨이팅',
    descBottomWeighting: '시각적 균형을 위해 하단 여백 추가 적용',
    labelOffset: '오프셋 (%)',
    errorMsg: '작품 크기는 액자 크기보다 작아야 합니다.',
    labelTop: '상단',
    labelBottom: '하단',
    labelLeft: '왼쪽',
    labelRight: '오른쪽',
    artPlaceholder: '작품',
  },
};
