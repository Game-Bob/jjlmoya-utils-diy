import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';

const slug = 'baluster-calculator';
const title = '발러스터 계산기: 난간의 정확한 간격 계산';
const description =
  '10cm 규칙을 준수하여 난간의 동자(발러스터) 사이의 정확한 간격을 계산합니다. 자동 도면 생성 기능 포함.';

const faqData = [
  {
    question: '발러스터 사이의 법적 최대 간격은 얼마인가요?',
    answer:
      '대부분의 국제 건축 법규에서 난간 요소 사이의 빈 공간은 어린이 사고를 방지하기 위해 지름 10cm의 구체가 통과할 수 없어야 합니다.',
  },
  {
    question: '간격 측정 방법: 중심 간 거리인가요, 아니면 실제 공간인가요?',
    answer:
      "저희 계산기는 두 가지 모두 제공합니다. '실제 공간(Clearance)'은 동자 사이의 실제 빈 공간(안전에 필수적)이며, '중심 간 거리(On-center)'는 각 발러스터를 드릴로 뚫거나 고정할 위치를 표시하는 값입니다.",
  },
  {
    question: '배분이 정확하게 떨어지지 않으면 어떻게 되나요?',
    answer:
      '계산기가 자동으로 동자의 개수를 조정하여 첫 번째와 마지막 빈 공간이 동일하게 되도록 합니다. 이를 통해 시각적 대칭과 최대 허용 간격의 엄격한 준술을 보장합니다.',
  },
  {
    question: '발러스터는 용접과 나사 조임 중 어느 것이 더 좋나요?',
    answer:
      '재질에 따라 다릅니다. 강철의 경우 용접이 최고의 구조적 강성을 제공합니다. 목재나 알루미늄의 경우 기계적 앵커나 관통 나사를 사용합니다. 중요한 것은 난간이 최소 0.8 kN/m의 수평 하중을 견딜 수 있어야 한다는 점입니다.',
  },
];

const howToData = [
  {
    name: '전체 길이 측정',
    text: '난간이 설치될 첫 번째 기둥과 마지막 기둥 사이의 정확한 거리를 측정합니다.',
  },
  {
    name: '발러스터 두께 정의',
    text: '개별 동자의 너비(예: 사각 파이프의 경우 2x2 cm, 원형의 경우 지름)를 측정합니다.',
  },
  {
    name: '최대 간격 설정',
    text: '원하는 최대 간격을 입력합니다(규정 준수를 위해 10 cm 권장).',
  },
  {
    name: '설치 표시 확인',
    text: '대칭적이고 안전한 배분을 위해 드릴 작업을 할 정확한 위치 목록을 확인합니다.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 문헌',
  bibliography: [
    {
      name: '건축물의 피난·방화구조 등의 기준에 관한 규칙 (한국)',
      url: 'https://www.law.go.kr/',
    },
    {
      name: 'IRC - 국제 주택 기준 (미국)',
      url: 'https://codes.iccsafe.org/content/IRC2021',
    },
    {
      name: 'IBC - 국제 건축 기준',
      url: 'https://codes.iccsafe.org/content/IBC2021',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '완벽 가이드: 난간 발러스터 간격 계산 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '안전하고 시각적으로 완벽한 난간을 설계하는 것은 수학적 정밀도와 건축 규정을 결합하는 예술입니다. 테라스, 발코니 또는 실내 계단 등 발러스터(동자)의 정확한 계산은 프로젝트에서 가장 중요한 단계입니다. 계산 오류는 시각적 대칭을 망칠 뿐만 아니라 구조물을 불법적이고 위험하게 만들 수 있습니다.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: '왜 이 계산이 그토록 중요한가요?',
      html: '<p>단순히 "빈 공간을 채우는 것"이 아닙니다. 어린이 사고를 예방하기 위해 설계된 국제 안전 표준인 <strong>4인치 구체 규칙 (10cm)</strong>을 준수하는 것이 핵심입니다.</p>',
    },
    {
      type: 'title',
      text: '1. 안전 규정: 10cm 규칙',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '목재나 금속의 첫 번째 조각을 절단하기 전에 수학 뒤에 숨겨진 "이유"를 이해해야 합니다. 많은 국가의 건축 법규와 미국의 IRC(국제 주택 기준)는 명확한 표준을 제시합니다. <em>"수직 요소 사이의 빈 공간은 지름 10cm(4인치)의 구체가 통과할 수 없어야 한다."</em>는 것입니다.',
    },
    {
      type: 'paragraph',
      html: '이 수치는 임의적인 것이 아닙니다. 영유아(보통 1세 미만)의 평균 머리 지름입니다. 아이의 몸은 통과하지만 머리가 끼게 되면 질식 위험이 매우 높습니다. 머리가 통과하면 그대로 추락할 수 있습니다. 따라서 저희 <strong>발러스터 계산기</strong>의 목표는 미적인 면뿐만 아니라 생명을 구하는 데 있습니다.',
    },
    {
      type: 'title',
      text: '2. 수학적 문제: 울타리 기둥 오류',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '프로그래밍과 건설 현장에는 <em>"Fencepost Error"</em> (울타리 기둥 오류)라는 고전적인 문제가 있습니다. 10m 울타리에 1m마다 기둥을 세우려면 몇 개의 기둥이 필요할까요? 직관적인 답은 10개지만, 정답은 11개입니다.',
    },
    {
      type: 'paragraph',
      html: '발러스터에서도 유사하지만 더 복잡한 상황이 발생합니다. 발러스터 자체의 너비가 공간을 차지하기 때문입니다. 저희 도구에서 사용하는 공식은 이러한 연립 방정식을 자동으로 해결해 줍니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: '단계 A: 빈 공간 계산',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>먼저 허용된 최대 공간을 사용할 때 이론적으로 몇 개의 발러스터가 들어갈 수 있는지 결정합니다. 결과적으로 나오는 공간이 최대치보다 <em>작게</em> 되도록 이 숫자를 올림 처리합니다.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: '단계 B: 정확한 간격 재계산',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>정확한 발러스터 개수(n)를 알게 되면, 전체 길이에서 모든 자재의 너비를 뺀 후 이를 빈 공간의 수(n+1)로 균등하게 나누어 얼마나 많은 공간이 "남는지" 계산합니다.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. 완벽한 설치를 위한 단계별 안내',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '수치를 얻는 것은 시작에 불과합니다. 이제 그 수치를 종이(또는 화면)에서 실제 작업 현장으로 어떻게 옮기는지 설명해 드립니다.',
    },
    {
      type: 'title',
      text: '단계 1: 정밀 측정',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '기둥과 기둥 사이의 <strong>내부</strong> 거리를 측정하십시오. 기둥 중심에서 측정하지 마십시오. 채워야 할 정확한 공간(L)을 알아야 합니다. 난간이 여러 구간인 경우 각 구간을 개별적으로 측정하십시오. 건물은 완벽하게 직각인 경우가 드물며 0.5cm의 오차가 대칭을 망칠 수 있습니다.',
    },
    {
      type: 'title',
      text: '단계 2: 중심 찾기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '초보자가 저지르는 가장 큰 실수는 한쪽 끝에서 다른 쪽 끝으로 발러스터를 배치하기 시작하는 것입니다. 이는 거의 항상 마지막 빈 공간을 어색한 크기로 만들어 시각적 조화를 깨뜨립니다.<ul><li>난간의 <strong>정확한 중심</strong>(L / 2)을 표시하십시오.</li><li>중심에 <em>발러스터</em>를 둘지 <em>빈 공간</em>을 둘지 결정하십시오.</li><li>중심에 발러스터를 둘 경우: 중심 표시 양쪽에 발러스터 너비의 절반씩 표시하십시오.</li><li>중심에 빈 공간을 둘 경우: 양쪽에 빈 공간 거리의 절반(g / 2)씩 표시하십시오.</li></ul>',
    },
    {
      type: 'title',
      text: '단계 3: 간격재(Spacers) 제작',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '발러스터마다 줄자를 사용하지 마십시오. 누적되는 인간의 오차로 인해 마지막 발러스터가 몇 센티미터 어긋나게 됩니다. 전문가의 방법은 저희 계산기가 산출한 정확한 간격(g)에 맞춰 나무 블록(또는 두 개)을 절단하는 것입니다.',
    },
    {
      type: 'paragraph',
      html: '이 블록을 물리적 템플릿으로 사용하십시오. 한 발러스터를 설치하고 블록을 놓은 뒤 다음 발러스터를 블록에 밀착시켜 설치하고 고정하십시오. 이는 밀리미터 단위의 일관성을 보장합니다.',
    },
    {
      type: 'title',
      text: '4. 필요한 재료 및 도구',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: '전문적인 마감을 위한 장비',
      html: '<ul><li>고정밀 줄자</li><li>목수용 연필</li><li>수평계 (수직 정렬용)</li><li>각도 절단기 (깔끔한 절단면용)</li><li>드릴 및 목재용 나사</li><li>간격 블록 (맞춤 제작)</li></ul>',
    },
    {
      type: 'title',
      text: '5. 추가 기술 질문',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: '마지막 빈 공간이 맞지 않으면 어떻게 하나요?',
      html: '<p>저희 계산기를 사용했다면 이런 일은 발생하지 않아야 합니다. 하지만 현실에서는 목재가 휘거나 기둥이 항상 곧지 않을 수 있습니다. 마지막에 도달했을 때 1-2mm 정도 남거나 모자란 것은 눈에 띄지 않습니다. 만약 1cm가 차이 난다면 간격 블록을 확인해 보십시오. 아마도 각 단계에서 조금씩 오차가 쌓였을 것입니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '아이가 없다면 발러스터를 더 넓게 띄워도 되나요?',
      html: '<p>법적으로는 안 됩니다. 건축법은 현재 거주자가 아닌 주택 자체에 적용됩니다. 나중에 집을 팔 때 규정에 어긋나는 난간은 검사 시 문제가 됩니다. 또한 방문객(조카, 손주 등)이 위험에 처할 수 있습니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: '목재, 금속, 아니면 유리?',
      html: '<p>이 계산기는 <strong>반복되는 모든 수직 요소</strong>에 사용할 수 있습니다. 수평 와이어를 사용하는 경우 규정이 다릅니다(대개 타고 올라갈 수 없어야 함, "사다리 효과"). 유리의 경우 연속된 패널로 간주되어 간격이 아닌 충격 저항력이 적용됩니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: '미스 반 데어 로에',
      html: '<p><em>"건축은 공간으로 번역된 시대의 의지이다."</em></p><p>이 도구가 여러분이 더 안전하고 아름다운 공간을 만드는 데 도움이 되기를 바랍니다. 최소 높이(대개 90-110 cm)나 하중 지지력에 대해서는 항상 해당 지방자치단체의 건축 규정을 확인하십시오.</p>',
    },
  ],
  ui: {
    sectionTitle: '치수',
    sectionDesc: '난간의 치수를 입력하세요',
    labelRailLength: '전체 길이 (L)',
    labelBalusterWidth: '발러스터 너비 (w)',
    labelMaxGap: '최대 간격 (g)',
    blueprintTitle: '설치 계획',
    blueprintRef: 'REF: BAL-001 // SCALE: AUTO',
    labelRequired: '필요한 발러스터',
    labelExactGap: '정확한 간격',
    labelOnCenter: '중심 간 거리',
    labelTotalSpaces: '전체 빈 공간 수',
    labelCoveredLength: '커버된 길이',
    labelDisclaimer: '* 표시된 치수는 시각화를 위한 근사치입니다.',
  },
};
