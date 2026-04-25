import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'two-stroke-fuel-mixture-calculator';
const title = '2행정 연료 혼합 계산기: 정확한 오일 혼합 비율 산출';
const description = '2행정 엔진용 정확한 연료 혼합 비율을 즉시 계산하세요. 전기톱, 예초기, 오토바이 및 소형 엔진 필수 도구. 1:25, 1:33, 1:40, 1:50 비율 지원.';

const faqData = [
  {
    question: '2행정 엔진이란 무엇인가요?',
    answer: '2행정 엔진은 피스톤의 2회 움직임으로 흡기와 폭발을 완료하는 방식으로, 4행정보다 단순하고 가볍습니다. 전기톱, 예초기, 소형 오토바이 등에 사용되며 윤활을 위해 연료에 오일을 직접 섞어야 합니다.',
  },
  {
    question: '일반적인 연료와 오일 혼합 비율은 얼마인가요?',
    answer: '일반적인 비율은 1:25(진함, 보호 우선), 1:33(구형 기기), 1:40(표준), 1:50(연함, 현대적 엔진)입니다. 반드시 기기 매뉴얼을 확인하세요. 잘못된 비율은 엔진 고장의 원인이 됩니다.',
  },
  {
    question: '혼합 비율을 틀리면 어떻게 되나요?',
    answer: '오일이 너무 많으면(진함) 연기가 많이 나고 점화 플러그가 오염되어 성능이 떨어집니다. 오일이 너무 적으면(연함) 엔진 내부가 마찰로 눌러붙는 \'焼き付き\'(소치) 현상이 발생하여 엔진이 영구적으로 손상됩니다.',
  },
  {
    question: '어떤 오일을 사용해야 하나요?',
    answer: '기기에 적합한 2행정 전용 엔진 오일을 사용하세요. 고성능 합성유는 일반 광유보다 보호 성능이 뛰어나고 연소 시 찌꺼기가 적습니다. 4행정 엔진 오일은 절대 사용하지 마세요.',
  },
  {
    question: '연료와 오일을 어떻게 섞나요?',
    answer: '깨끗한 용기에 휘발유를 일부 넣고 계산된 양의 오일을 추가한 뒤, 남은 휘발유를 채웁니다. 1~2분간 충분히 흔들어 완전히 섞어주세요. 용기에는 혼합한 날짜를 기록해 두는 것이 좋습니다.',
  },
];

const howToData = [
  { name: '비율 확인', text: '기기 매뉴얼이나 기계 본체의 표시를 확인하세요. 예: 전기톱(1:40 또는 1:50), 예초기(1:50). 잘못된 비율은 엔진을 파괴합니다.' },
  { name: '휘발유 양 측정', text: '필요한 휘발유 양을 결정합니다. 이 도구는 리터 단위로 정확하게 계산합니다. 정확한 휘발유 양 측정이 정확한 오일량 계산의 핵심입니다.' },
  { name: '필요 오일량 계산', text: '휘발유 양과 비율을 입력하세요. 계산기가 완벽한 혼합유를 위해 필요한 정확한 오일량(ml 또는 L)을 표시합니다.' },
  { name: '충분히 섞기', text: '용기에 연료와 오일을 넣고 1~2분간 강하게 흔들어 줍니다. 완전히 균일하게 섞여야 엔진 내부가 골고루 윤활됩니다.' },
  { name: '기록 및 사용', text: '용기에 날짜와 비율을 적어둡니다. 혼합유는 변질되기 쉬우므로 최상의 결과를 위해 30일 이내에 사용하는 것이 좋습니다.' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '2행정 엔진 혼합유 계산기: 전기톱 및 예초기를 위한 정확한 오일 비율 산출', level: 2 },
    { type: 'paragraph', html: '2행정 엔진의 수명을 유지하려면 정확한 연료 혼합이 필수적입니다. 비율이 틀리면 단 몇 분 만에 엔진이 망가질 수 있습니다. 이 계산기는 연료량과 엔진 타입에 따른 정확한 오일량을 즉시 산출하여, 작업장에서의 짐작에 의한 실수를 방지합니다.' },

    { type: 'title', text: '왜 2행정 엔진은 연료에 오일을 섞어야 할까요?', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: '결정적인 차이', html: '오일 탱크가 따로 있는 4행정 엔진과 달리, 2행정 엔진은 오일을 연료에 직접 섞습니다. 폭발 시마다 혼합유가 연소되면서 동시에 윤활 작용도 수행합니다. 별도의 오일 펌프가 없으므로 오직 이 혼합 연료만이 피스톤의 생명을 지켜줍니다.' },

    { type: 'title', text: '2행정 비율 퀵 레퍼런스', level: 3 },
    { type: 'table', headers: ['비율', '오일 %', '용도', '엔진 타입', '특징'], rows: [
      ['1:25', '3.85%', '최대 보호', '1980년대 이전 기기, 고부하 작업, 올드 바이크', '진한 혼합비: 연기와 카본은 늘어나지만, 엔진 눌러붙음 방지 성능은 최대'],
      ['1:33', '2.94%', '클래식 장비', '80~90년대 소형 엔진, 구형 전기톱', '적당한 농도: 보호 성능과 효율성 사이의 균형'],
      ['1:40', '2.44%', '업계 표준', '대부분의 현대식 전기톱, 예초기, 소형 엔진', '표준 권장 비율: 최신 합성유 사용에 최적화'],
      ['1:50', '1.96%', '현대적 효율성', '최신형 전기톱, 고성능 오토바이', '연한 혼합비: 연기가 적고 연소가 깔끔함. 고급 합성유 전용']
    ] },

    { type: 'title', text: '잘못된 혼합 비율의 결과', level: 3 },
    { type: 'proscons', items: [
      { pro: '오일 과다 (진한 혼합)', con: '흰 연기 과다 발생, 점화 플러그 오염, 엔진 내부 카본 축적, 가속 성능 저하' },
      { pro: '오일 부족 (연한 혼합)', con: '수 초 내에 피스톤 눌러붙음 발생, 실린더 벽 손상, 엔진 복구 불능 상태' },
      { pro: '정확한 비율', con: '부드러운 작동, 적절한 윤활, 최적의 연소, 엔진 수명 연장, 안정적인 시동' }
    ] },

    { type: 'title', text: '장비별 일반적인 비율', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: '전기톱', html: '<strong>스틸, 허스크바나, 에코:</strong> 현대식 모델은 보통 1:40 또는 1:50을 권장합니다. 반드시 매뉴얼을 확인하세요. 최신 기기에 1:25를 쓰면 플러그가 오염될 수 있습니다. 90년대 이전 구형 기계는 1:25나 1:33을 지정할 수 있습니다.' },
    { type: 'card', icon: 'mdi:motorcycle', title: '소형 오토바이 및 스쿠터', html: '<strong>베스파, 혼다, 야마하:</strong> 구형 모델은 1:33, 현대식은 1:40~1:50이 많습니다. 고성능 모델은 보통 1:50을 지정합니다. 서비스 매뉴얼이 가장 정확한 정보원입니다.' },
    { type: 'card', icon: 'mdi:tools', title: '예초기 및 송풍기', html: '<strong>스틸, 마키타, 계양:</strong> 일반적으로 1:50(현대식) 또는 1:40입니다. 이 기기들은 시즌별로 사용되므로 연한 비율을 통해 성능 저하 없이 연기를 줄이도록 설계되었습니다.' },

    { type: 'title', text: '비율만큼 중요한 오일의 종류', level: 3 },
    { type: 'comparative', items: [
      { title: '광유계 2행정 오일', description: '가끔 사용할 때 경제적인 선택. 재 성분이 많고 연기가 발생하나 표준 비율에서 충분한 보호.', icon: 'mdi:beaker', points: ['낮은 가격', '눈에 띄는 연기', '카본 축적 높음', '1:40 비율에 적합'] },
      { title: '합성 2행정 오일', description: '자주 사용하는 유저를 위한 프리미엄 선택. 깔끔한 연소, 뛰어난 보호, 더 연한 비율 가능.', icon: 'mdi:flame', points: ['연기 발생 적음', '최고의 엔진 보호', '1:50 비율도 안전하게 지원', '장기 보관 시 안정성 높음'], highlight: true },
      { title: '반합성유 (Semi synthetic)', description: '광유와 합성유의 중간. 적절한 가격에 우수한 보호 성능. 많은 제조사 권장 사항.', icon: 'mdi:beaker-outline', points: ['균형 잡힌 성능', '합리적인 가격', '1:40 비율에 최적', '광유보다 연기 적음'] }
    ], columns: 3 },

    { type: 'title', text: '단계별 혼합 과정', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: '올바르게 섞는 방법', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>전용 용기 사용</strong>: 연료 혼합만을 위한 깨끗하고 건조한 전용 용기를 사용하세요.</li><li><strong>먼저 휘발유 절반 넣기</strong>: 용기에 휘발유를 먼저 채웁니다.</li><li><strong>계산된 오일량 추가</strong>: 이 계산기를 통해 정확한 용량을 확인하세요.</li><li><strong>나머지 휘발유 추가</strong>: 목표 총량까지 휘발유를 채웁니다.</li><li><strong>1~2분간 강하게 흔들기</strong>: 색상이 균일해질 때까지 섞습니다. 균일한 혼합이 균일한 윤활을 보장합니다.</li><li><strong>용기에 라벨 부착</strong>: 날짜, 비율, 연료 종류를 적어둡니다.</li><li><strong>30일 이내 사용</strong>: 합성유의 경우 최대 60일까지도 가능하나 신선할수록 좋습니다.</li></ol>' },

    { type: 'title', text: '매뉴얼의 비율이 의심될 때', level: 3 },
    { type: 'tip', html: '<strong>항상 기기 매뉴얼의 비율을 최우선으로 하세요.</strong> 찾을 수 없다면 제조사 홈페이지를 방문하거나 지원팀에 문의하세요. 짐작으로 섞지 마세요. 잘못된 비율은 보증을 무효화하고 엔진 고장 위험을 높입니다.' },

    { type: 'title', text: '용어 설명: 2행정 주요 용어', level: 3 },
    { type: 'glossary', items: [
      { term: '연한 혼합 (Lean)', definition: '오일이 너무 적은 상태(1:50 등). 윤활 부족으로 엔진 눌러붙음 위험이 큼.' },
      { term: '진한 혼합 (Rich)', definition: '오일이 너무 많은 상태(1:25 등). 연기 발생, 플러그 오염, 카본 축적 유발.' },
      { term: '균일한 혼합', definition: '연료와 오일이 전체적으로 고르게 섞인 상태. 충분히 흔들어야 하며 균등한 윤활에 필수.' },
      { term: '눌러붙음 (Seizure)', definition: '윤활 부족과 마찰열로 인해 피스톤이 실린더 내부에서 굳어버리는 치명적 고장.' },
      { term: '합성유', definition: '광유보다 뛰어난 보호, 청정 연소, 온도 안정성을 위해 실험실에서 제조된 고성능 오일.' },
      { term: '2행정 엔진', definition: '피스톤의 1왕복(2단계)으로 한 번의 연소 주기를 완료하는 단순하고 가벼운 엔진.' },
      { term: '4행정 엔진', definition: '별도의 오일 순환 계통을 가진 엔진. 오일은 연료와 섞이지 않고 내부를 순환함.' }
    ] },

    { type: 'title', text: '이 계산기가 유용한 이유', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: '정확한 계산, 계량 실수 방지', icon: 'mdi:check-circle' },
      { value: '즉시', label: '암산 없이 수 초 만에 정확한 양 확인', icon: 'mdi:flash' },
      { value: '4가지 비율', label: '1:25부터 1:50까지 주요 비율 완벽 지원', icon: 'mdi:counter', trend: { value: '커스텀 비율 지원', positive: true } },
      { value: '공유 가능', label: '혼합 설정을 URL로 복사하여 쉽게 공유', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: '엔진을 망치는 흔한 실수', level: 3 },
    { type: 'diagnostic', variant: 'error', title: '2행정 엔진에 4행정 오일 사용', icon: 'mdi:alert', badge: '엔진 고장 확정', html: '4행정 오일은 순환용이며 연소 시 찌꺼기가 많이 남습니다. 2행정 기기에 쓰면 수 시간 내에 엔진을 망가뜨립니다.' },
    { type: 'diagnostic', variant: 'warning', title: '충분히 섞지 않음', icon: 'mdi:alert', badge: '엔진 손상 위험', html: '혼합이 불완전하여 오일이 분리되면 엔진 일부가 윤활 없이 작동하게 됩니다. 반드시 1~2분간 충분히 흔드세요.' },
    { type: 'diagnostic', variant: 'warning', title: '오래된 연료 사용 (60일 경과)', icon: 'mdi:alert', badge: '카뷰레터 막힘', html: '휘발유는 시간이 지나면 변질됩니다. 오래된 혼합유는 카뷰레터 내부에 끈적한 잔여물을 남겨 고장을 일으킵니다.' },

    { type: 'title', text: '요약', level: 3 },
    { type: 'summary', title: '섞기 전에 확인하세요', items: [
      '매뉴얼에서 제조사가 지정한 정확한 비율을 확인합니다.',
      '반드시 2행정 전용 오일을 사용하세요(4행정용 불가).',
      '연료 전용의 깨끗한 용기를 사용하세요.',
      '신선한 휘발유와 호환되는 오일을 사용하세요.',
      '충분히 섞고 용기에 날짜와 비율을 적어둡니다.',
      '혼합한 연료는 30일 이내에 사용하세요.'
    ] },
  ],
  ui: {
    titleMain: '2행정 엔진 혼합유 계산기',
    labelFuelVolume: '휘발유 양',
    labelRatio: '혼합 비율',
    labelOilRequired: '필요 오일량',
    labelTotalMixture: '총 혼합량',
    labelRichness: '혼합 농도',
    labelPresets: '주요 비율',
    labelCustomRatio: '직접 입력 (1:X)',
    btnClear: '초기화',
    btnCopyResults: '결과 복사',
    btnSwitchMode: '모드 전환',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: '연함 (오일 적음, 소치 위험)',
    richBalanced: '균형 (표준 혼합)',
    richRich: '진함 (오일 많음, 연기 증가, 엔진 보호)',
    msgReady: '준비됨',
    msgMixtureReady: '계산 완료',
    tooltipFuelVolume: '휘발유 양을 리터 단위로 입력하세요',
    tooltipRatio: '비율 숫자(25, 50 등)를 입력하세요',
    recipientLabel: '혼합 용기',
    oilPercentage: '오일 %',
    labelVolume: '용량',
    labelRatioShort: '비율',
    labelOilTip: '2% 오일 혼합 = 1:50 비율',
    labelMixingTips: '혼합 팁',
    labelMixingTipsDesc: '깨끗한 용기에 휘발유 먼저, 그다음 오일, 마지막으로 남은 휘발유 순으로 넣으세요. 1-2분 잘 흔들어 균일하게 섞고 날짜와 비율을 적어두세요.',
    recipePrefix: '조건:',
    recipeAt: '휘발유에',
    recipeAdd: '오일을 정확히',
    recipeOfOil: '추가하세요.',
    copyTextPrefix: '2행정 혼합유',
    copyTextFuel: '휘발유',
    copyTextOil: '오일',
  },
};
