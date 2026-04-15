import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'drill-rpm-calculator';
const title = '가공 및 드릴 회전수 계산기';
const description = '재질과 드릴의 직경에 따라 드릴 또는 밀링 머신의 이상적인 분당 회전수(RPM)를 계산합니다. 공구가 타버리는 것을 방지하세요.';

const faqData = [
  {
    question: '드릴링 중에 왜 드릴 날이 타버리나요?',
    answer: '주로 과도한 회전수(RPM) 때문입니다. 드릴이 재료가 열을 방출할 수 있는 속도보다 빠르게 회전하면, 마찰로 인해 온도가 강철의 뜨임 한계 이상으로 올라가 날끝이 부드러워지고 절삭력을 잃게 됩니다.',
  },
  {
    question: '절삭 속도(Vc)란 무엇인가요?',
    answer: '공구의 날끝이 재료 표면을 지나가는 분당 선속도(미터 단위)를 말합니다. 각 재료에는 드릴의 직경과 관계없이 권장되는 절삭 속도가 있습니다.',
  },
  {
    question: '초경(Widia) 공구는 언제 사용해야 하나요?',
    answer: '산업 생산 등 훨씬 더 높은 속도로 작업해야 하거나, 뚫어야 할 재료가 극도로 단단한 경우에 사용합니다. 일반적인 DIY의 경우 HSS(고속도강)로 충분하며, 굽힘으로 인한 파손에도 더 강합니다.',
  },
  {
    question: '윤활제는 항상 필요한가요?',
    answer: '금속의 경우 거의 항상 권장됩니다. 알루미늄에서는 재료가 드릴에 달라붙는 것을 방지하고, 철강에서는 열을 줄여줍니다. 목재나 플라스틱에서는 드릴을 자주 뺐다 끼웠다 하며 칩을 배출하며 건식으로 작업하는 것이 좋습니다.',
  },
  {
    question: 'CNC 머신이 없는 경우 이송 속도(Feed)를 어떻게 판단하나요?',
    answer: '수동 드릴링 머신에서는 압력으로 이송을 느낍니다. 일정하고 깨끗한 칩(가루가 아닌)이 나오는 것을 확인해야 합니다. 가루만 나온다면 압력이 부족하거나 RPM이 너무 높은 것입니다. 칩이 너무 두껍고 드릴이 힘겨워 보인다면 압력이 너무 강한 것입니다.',
  },
];

const howToData = [
  { name: '재질 선택', text: '드릴링 또는 밀링할 재료(강철, 알루미늄, 목재 등)를 선택합니다. 각 재료마다 경도와 열용량이 다릅니다.' },
  { name: '직경 입력', text: '드릴 또는 엔드밀의 정확한 직경을 밀리미터 단위로 입력합니다. 직경이 클수록 회전수는 낮아야 함을 기억하세요.' },
  { name: '공구 유형 선택', text: '드릴이 고속도강(HSS)인지 초경(Widia)인지 선택합니다. 초경 공구는 훨씬 더 높은 속도를 견딜 수 있습니다.' },
  { name: '머신의 RPM 조정', text: '계산된 값을 드릴이나 밀링 머신에 설정합니다. 수동 변속 머신의 경우, 가장 안전한 풀리 위치를 선택하기 위해 당사의 "권장 설정" 도구를 사용하세요.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    { name: 'Sandvik Coromant: Cutting Speed and Feed Rate Formulae', url: 'https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: '기계 공작법 계산표 — A.L. Casillas', url: 'https://www.google.com/search?q=Casillas+Maquinas+Calculos+de+taller' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '가공 시 분당 회전수(RPM)의 중요성', level: 2 },
    { type: 'paragraph', html: '정확한 RPM 계산은 완벽한 작업과 값비싼 실패를 가르는 차이입니다. 드릴을 가능한 한 빨리 돌리는 것이 중요한 것이 아니라, 마찰 및 재료 강도에 적용되는 물리 법칙을 따르는 것이 중요합니다. 당사의 계산기는 공구의 성능과 마감 품질을 최적화하도록 설계되었습니다.' },
    { type: 'title', text: '절삭 속도의 이해', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'RPM 계산 공식', html: '<p>절삭 속도는 날끝이 재료를 통과해야 하는 이상적인 속도를 분당 미터로 나타낸 값입니다. 사용하는 공식은 다음과 같습니다: <code>RPM = (Vc × 1000) / (π × D)</code> (D는 밀리미터 단위 직경). 이 계산은 절단하는 재료의 직경과는 관계가 없습니다.' },
    { type: 'title', text: 'HSS vs 초경(Widia)', level: 3 },
    { type: 'paragraph', html: '<strong>고속도강(HSS)</strong> 공구는 경제적이고 충격에 강하지만 열 내구성이 제한적입니다. <strong>초경(Carbide/Widia)</strong>은 절삭 속도를 3~5배 더 높일 수 있지만 더 무릅니다. 계산기는 공구 유형에 따라 매개변수를 자동으로 조정합니다.' },
    { type: 'title', text: '드릴링 시 흔히 하는 3가지 실수', level: 3 },
    { type: 'paragraph', html: '<strong>너무 높은 RPM:</strong> 과열을 유발하고 강철의 강도를 잃게 합니다. <strong>너무 낮은 RPM:</strong> 드릴이 진동하여 피로 파손을 일으킬 수 있습니다. <strong>냉각 부족:</strong> 열은 공구 수명을 현저히 단축시킵니다.' },
  ],
  ui: {
    labelMaterial: '가공물 재질',
    matSteel: '연강',
    matInox: '스테인리스',
    matAlu: '알루미늄',
    matBrass: '황동',
    matCastIron: '주철',
    matWood: '목재',
    matPlastic: '플라스틱',
    coolSteel: '절삭유 또는 오일',
    coolInox: '고압 절삭유 (EP)',
    coolAlu: '알코올 / 파라핀',
    coolBrass: '건식 / 공기',
    coolCastIron: '건식',
    coolWood: '집진 전용',
    coolPlastic: '공기 분사',
    labelTool: '공구 유형',
    typeHss: '강철 (HSS)',
    typeWidia: '초경 (Widia)',
    labelDiameter: '직경',
    unitMm: 'mm',
    unitInch: '인치',
    modeColumnDrill: '탁상 드릴 모드',
    labelAdvanced: '이송 매개변수',
    labelLips: '날수 (z)',
    labelFz: '날당 이송량 (Fz)',
    labelMachine: '보유 머신의 회전수',
    presetStandard: '표준',
    presetCnc: 'CNC',
    addRpmManual: 'RPM 수동 추가...',
    addButton: '+',
    resultRpm: '최적 회전수',
    resultCooling: '냉각 및 윤활',
    resultFeed: '결과 이송 속도',
    resultClosest: '권장 설정',
    rpmUnit: '분당 회전수',
    recommendedLabel: '권장 설정',
    recommendedHint: '머신의 변속 레버를 이 위치로 설정하십시오',
    statusLimitActive: '머신 한계 속도 작동 중',
    statusOutOfRange: '상용 표준 범위를 벗어남',
  },
};
