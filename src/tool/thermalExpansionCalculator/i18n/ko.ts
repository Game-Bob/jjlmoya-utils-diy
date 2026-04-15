import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'thermal-expansion-calculator';
const title = '보 및 구조물 열팽창 계산기';
const description = '온도 변화에 따라 보나 구조물이 얼마나 팽창하는지 계산합니다. 엔지니어 및 DIY를 위한 기술 도구입니다. 재료별 팽창 계수를 포함합니다.';

const faqData = [
  {
    question: '선팽창 계수란 무엇인가요?',
    answer: '온도가 1도 상승할 때마다 재료가 얼마나 팽창하는지를 나타내는 물리적 특성입니다. 단위는 1/℃ 또는 ℃⁻¹를 사용합니다.',
  },
  {
    question: '보의 열팽창을 계산하는 것이 왜 중요한가요?',
    answer: '보에 팽창할 공간(신축 이음)이 없으면 구조물을 변형시키거나 콘크리트를 균열시키고 심지어 붕괴를 일으킬 수 있는 거대한 내부 응력이 발생하기 때문입니다.',
  },
  {
    question: '나무는 모든 방향으로 동일하게 팽창하나요?',
    answer: '아니요. 나무는 이방성 재료입니다. 결 방향으로는 거의 팽창하지 않지만, 결의 직각 방향(너비 및 두께)으로는 상당히 팽창합니다.',
  },
  {
    question: '초기 온도로는 어떤 값을 사용해야 하나요?',
    answer: '설치 또는 시공 시점의 온도를 사용해야 합니다. 최종 온도는 해당 구조물의 수명 동안 예상되는 최고 온도를 사용해야 합니다.',
  },
];

const howToData = [
  { name: '원래 길이 측정', text: '보 또는 재료의 길이를 미터 단위로 입력합니다.' },
  { name: '재료 선택', text: '금속, 건축 자재 또는 목재 중에서 선택하여 특정 계수를 적용합니다.' },
  { name: '온도 범위 정의', text: '열 차이를 계산하기 위해 초기 온도와 예상 최고 온도를 지정합니다.' },
  { name: '팽창 분석', text: '밀리미터 단위의 총 팽창량과 결과적인 최종 길이를 확인하여 적절한 이음매를 계획합니다.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 자료',
  bibliography: [
    { name: '열팽창 계수 — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: '열팽창과 온도 — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: '선열팽창 — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '열팽창이란 무엇이며 구조물에 어떤 영향을 미치는가', level: 2 },
    { type: 'paragraph', html: '<strong>열팽창</strong>은 온도가 상승함에 따라 재료의 길이가 증가하는 물리적 과정입니다. 미세한 수준에서 입자들은 더 많은 에너지로 진동하며 입자 사이에 더 큰 평균 공간을 필요로 합니다. 건설에서 이 현상은 단순한 흥밋거리가 아닙니다. 이는 콘크리트를 부수고, 강철 보를 변형시키며, 기차 선로를 뒤틀 수 있는 힘입니다.' },
    { type: 'title', text: '선팽창 공식', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: '선팽창 계산식', html: '<p>구조성분의 팽창은 다음과 같이 계산됩니다: <code>ΔL = L₀ · α · ΔT</code>. 여기서 <strong>ΔL</strong>은 총 증가량, <strong>L₀</strong>은 원래 길이, <strong>α</strong>는 재료의 팽창 계수(단위: ℃⁻¹), <strong>ΔT</strong>는 온도 차이입니다.</p>' },
  ],
  ui: {
    configTitle: '설정',
    labelMaterial: '재료',
    groupMetals: '금속',
    groupConstruction: '건설',
    groupWood: '목재 및 폴리머',
    matSteel: '강철 (12 ppm/°C)',
    matAluminum: '알루미늄 (23 ppm/°C)',
    matCopper: '구리 (17 ppm/°C)',
    matIron: '철 (11 ppm/°C)',
    matConcrete: '콘크리트 (12 ppm/°C)',
    matBrick: '벽돌 (9 ppm/°C)',
    matGlass: '유리 (9 ppm/°C)',
    matWoodFiber: '목재 결 방향 (5 ppm/°C)',
    matWoodTransversal: '목재 직각 방향 (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: '금속공학',
    catConstruction: '건설',
    catWood: '목재 및 폴리머',
    labelLength: '초기 길이 (m)',
    labelTempStart: '초기 온도 (°C)',
    labelTempEnd: '최고 온도 (°C)',
    deltaLabel: '온도 차이 (ΔT)',
    vizTitle: '팽창 시뮬레이션',
    resultGrowthLabel: '총 팽창량 (ΔL)',
    resultFinalLabel: '최종 길이',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: '좌굴 위험',
    jointTitle: '최소 이음매',
    riskLow: '낮음',
    riskModerate: '보통',
    riskCritical: '심각',
    tipDefault: '특수 합금의 정확한 계수는 제조업체 매뉴얼을 참조하세요.',
    tipSteel: '강철과 콘크리트는 거의 동일한 팽창 계수를 가지고 있어 철근 콘크리트 구조가 내부 균열 없이 작동할 수 있습니다.',
    tipAluminum: '알루미늄은 강철보다 거의 두 배 더 많이 팽창합니다. 금속 프레임 제작 시 탄성 실란트 사용이 필수적입니다.',
    tipGlass: '유리와 강철은 거의 동일하게 팽창하며, 이는 대형 유리 파사드 설계의 핵심입니다.',
    tipConcrete: '콘크리트의 계수는 강철과 매우 유사하여 혼합 구조가 매우 안정적입니다.',
    tipWood: '목재는 열에 의한 팽창은 적지만 습기에 의한 팽창이 큽니다. 긴 구조물에서 결 방향은 매우 안정적입니다.',
    tipPvc: 'PVC는 매우 높은 팽창률을 가집니다. 파손 없이 움직임을 흡수하기 위해 특수 이음매가 필요합니다.',
  },
};
