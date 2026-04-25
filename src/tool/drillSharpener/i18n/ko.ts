import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'drill-sharpening-master';
const title = '드릴 연마 마스터: 정밀 게이지';
const description = 'HSS 드릴 연마를 위한 대화형 가이드입니다. 화면상의 디지털 게이지로 118° 및 135° 각도를 확인하세요. RPM을 계산하고 절삭 오류를 진단합니다.';

const faqData = [
  {
    question: '드릴을 화면 위에 직접 올려두어도 되나요?',
    answer: '네, 드릴의 축을 디지털 게이지의 중심선에 맞추어 올려두고 날끝의 대칭성을 직접 확인할 수 있도록 설계되었습니다.',
  },
  {
    question: '도피각(여유각)이 정확한지 어떻게 알 수 있나요?',
    answer: '드릴을 돌렸을 때 절삭날 뒷부분이 눈에 띄게 낮게 보여야 합니다. 금속 끝부분 전체가 균일하게 빛난다면 도피각(destalonar)이 부족한 것입니다.',
  },
  {
    question: '연마 후에는 어떤 회전수를 사용해야 하나요?',
    answer: '직경에 따라 다릅니다. 통합 계산기가 첫 번째 단계에서 선택한 재질에 따른 정확한 값을 제공합니다.',
  },
  {
    question: 'HSS와 초경의 차이점은 무엇인가요?',
    answer: 'HSS(고속도강)는 경제적이고 충격에 강합니다. 초경(Metal Duro)은 더 높은 속도를 견디지만 더 잘 부러집니다. 수동 연마의 경우 HSS가 표준입니다.',
  },
  {
    question: '연마를 위해 특별한 장비가 필요한가요?',
    answer: '중간 입도(120-150)의 회전 연삭기면 충분합니다. 중요한 것은 일관된 결과를 얻기 위해 연삭기가 균형 잡히고 평평한 상태를 유지하는 것입니다.',
  },
];

const howToData = [
  { name: '재질 선택', text: '가공할 금속이나 재료를 선택하여 목표 각도와 절삭 속도를 설정합니다.' },
  { name: '대칭 확인', text: '드릴을 화면에 대고 양쪽 절삭날이 파란색 선과 일치하는지 확인합니다.' },
  { name: '뒷날 확인', text: '절삭날 뒷부분이 작업물에 닿지 않는지 육안으로 확인합니다(도피각).' },
  { name: 'RPM 계산', text: '직경을 입력하고 선택한 재질에 권장되는 속도로 드릴을 조정합니다.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '드릴 연마 마스터: 전문 기술', level: 2 },
    { type: 'paragraph', html: '드릴 연마는 모든 워크숍에서 가장 가치 있는 기술 중 하나입니다. 올바르게 연마된 드릴은 구멍의 품질을 높이고, 전동 공구의 수명을 보호하며 작업자의 안전을 보장합니다.' },
    { type: 'title', text: '연마의 핵심: 선단각', level: 3 },
    { type: 'paragraph', html: '선단각은 드릴이 재료를 어떻게 깎을지 결정합니다. 표준 각도는 연강용 118°, 스테인리스용 135°, 경강용 140°입니다. 재료마다 강도를 해치지 않으면서 관통력을 극대화하기 위해 서로 다른 각도가 필요합니다.' },
    { type: 'title', text: '놓치기 쉬운 부분: 도피각', level: 3 },
    { type: 'paragraph', html: '가장 흔한 실수는 도피각 또는 뒷날 깎기를 무시하는 것입니다. 절삭날 뒷면이 평평하면 드릴이 단순히 마찰만 일으켜 극심한 열을 발생시킵니다. 해결책은 절삭날 뒷부분을 약간 깎아내는 것입니다.' },
  ],
  ui: {
    labelMaterial: '작업 재질',
    matSteel: '강철',
    matInox: '스테인리스',
    matHard: '고경도',
    matBrass: '황동',
    matPlastic: '플라스틱',
    matWood: '목재',
    labelDiameter: '드릴 직경 (mm)',
    unitMm: 'mm',
    btnMinus: '－',
    btnPlus: '＋',
    labelVelocity: '속도',
    unitRpm: 'RPM',
    labelCooling: '절삭',
    btnDiagnosis: '제대로 깎이지 않나요? 진단',
    diagTitle: '고장 진단',
    diagClose: '닫기',
    diagIssue1: '1. 연기가 나고 관통하지 못함',
    diagIssue1Desc: '도피각이 부족합니다. 절삭날 뒤의 금속이 작업물에 문질러지고 있습니다. 절삭날이 가장 높도록 뒷부분을 깎아주세요.',
    diagIssue2: '2. 구멍이 편심되거나 크게 뚫림',
    diagIssue2Desc: '끝부분이 중심에 있지 않습니다. 절삭날의 길이가 서로 다릅니다. 끝부분이 게이지의 정확한 중심에 닿도록 하세요.',
    diagIssue3: '3. 가공 날이 타버림 (파란색)',
    diagIssue3Desc: '회전수가 너무 높습니다. 해당 직경과 재질에 대한 툴의 RPM 계산을 확인하세요.',
    gaugeInstruction: '축을 수직선에 맞춰 올려두세요',
  },
};
