import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'clay-shrinkage-calculator';
const title = '점토 수축 계산기: 도예를 위한 정확한 치수 설계';
const description =
  '건조 및 소성 시 점토의 수축을 계산합니다. 최종 치수를 정확하게 예측하여 도자기 작품을 설계하세요.';

const faqData = [
  {
    question: '점토는 왜 수축하나요?',
    answer:
      '점토는 주로 수분 손실로 인해 수축합니다. 먼저 건조(입자 사이의 수분 증발)가 일어나고, 그 다음 소성(화학적으로 결합된 수분 제거 및 입자의 소결)이 일어납니다.',
  },
  {
    question: '일반적인 수축률은 어느 정도인가요?',
    answer:
      '점토의 종류에 따라 다릅니다. 도기는 보통 5-10% 수축하는 반면, 석기나 자기는 유리화 정도가 높기 때문에 12-15%까지 수축할 수 있습니다.',
  },
  {
    question: '내가 사용하는 점토의 수축률을 어떻게 측정하나요?',
    answer:
      '정확히 10cm 길이의 테스트 시편을 만듭니다. 그것을 건조시킨 후 측정하고(건조 수축), 최종 온도에서 소성한 후 다시 측정합니다(전체 수축). 그 차이를 통해 정확한 퍼센트를 구할 수 있습니다.',
  },
  {
    question: '건조 중에 작품이 갈라지는 이유는 무엇인가요?',
    answer:
      '보통 건조가 너무 빠르거나 불균일할 때 발생합니다. 얇은 부분은 두꺼운 부분보다 수분을 더 빨리 잃어 응력이 발생합니다. 건조 과정을 늦추기 위해 비닐 등으로 작품을 덮어주세요.',
  },
];

const howToData = [
  {
    name: '성형 직후 치수 측정',
    text: '물레 작업이나 성형 직후, 점토가 아직 수분을 머금고 있을 때 작품의 정확한 치수를 측정합니다.',
  },
  {
    name: '수축 계수 입력',
    text: '사용한 점토 패키지에 표시된 제조업체의 전체 수축률(건조+소성)을 확인하여 입력합니다.',
  },
  {
    name: '예상 최종 치수 확인',
    text: '계산기를 사용하여 소성 후 작품의 크기를 파악하고, 이에 맞춰 뚜껑이나 맞물리는 부분을 계획합니다.',
  },
  {
    name: '목표 치수를 위한 역계산',
    text: '최종적으로 원하는 크기가 있다면, 역계산을 통해 성형 시 어느 정도 크기로 만들어야 하는지 확인합니다.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    {
      name: 'The Potter\'s Dictionary - Clay Shrinkage',
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '점토의 물리학: 수축과 팽창',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '점토는 모든 제작 과정 중에 크기가 변하는 살아있는 재료입니다. 젖은 상태에서 성형한 순간부터 가마에서 나올 때까지 원래 크기의 8%에서 15%를 잃을 수 있습니다. 필요한 정확한 치수의 작품을 만들기 위해서는 이러한 수축을 계산하는 것이 필수적입니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '수축 단계',
          html: '<p><strong>1. 건조 (젖은 점토 → 건조 점토):</strong> 수분을 잃으면서 점토 입자들이 서로 가까워집니다. 이것이 가장 큰 수축(4-8%) 단계입니다. 두꺼운 작품은 너무 빨리 건조되면 갈라질 수 있습니다.</p><p><strong>2. 소성 (건조 점토 → 초벌구이):</strong> 900-1000°C 사이에서 점토는 되돌릴 수 없는 화학적 변화를 겪습니다. 2-4%의 추가 수축이 발생하며, 작품은 다공성이지만 튼튼해집니다.</p><p><strong>3. 유리화 (고온 소성):</strong> 1200-1300°C에서 점토가 유리화됩니다. 최종적으로 1-3% 수축하며, 석기와 자기는 이 단계에서 최대 밀도에 도달합니다.</p>',
        },
        {
          type: 'card',
          title: '영향을 미치는 변수들',
          html: '<ul><li><strong>점토 유형:</strong> 적토는 자기(12-15%)보다 수축이 적은 편(8-10%)입니다.</li><li><strong>벽 두께:</strong> 얇은 벽이 두꺼운 벽보다 더 균일하게 수축합니다.</li><li><strong>소성 온도:</strong> 온도가 높을수록 수축과 유리화 정도가 커집니다.</li><li><strong>그로그 함량:</strong> 그로그(이미 구운 점토 가루)를 추가하면 수축이 줄어듭니다.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '실제 활용',
      level: 2,
    },
    {
      type: 'title',
      text: '몰드 설계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '최종 지름이 8cm인 컵이 필요하고 점토 수축률이 12%라면, 몰드는 <strong>9.1cm</strong>로 제작해야 합니다. 이러한 역계산은 대량 생산에서 매우 중요합니다.',
    },
    {
      type: 'title',
      text: '뚜껑 및 조립',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '맞물려야 하는 작품(주전자+뚜껑, 단지+뚜껑 등)을 만들 때는 동일하게 수축하도록 같은 점토로 만들고 함께 구워야 합니다. 1%의 차이만으로도 조립이 불가능해질 수 있습니다.',
    },
    {
      type: 'title',
      text: '대형 조각품',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '큰 작품에서는 두꺼운 부분과 얇은 부분 사이의 수축 차이가 균열을 유발할 수 있습니다. 숙련된 도예가는 수축이 더 많이 일어날 것을 예상되는 부분의 벽을 더 두껍게 남겨 보정합니다.',
    },
  ],
  ui: {
    labelInitialSize: '초기 크기 (mm)',
    labelShrinkage: '수축률 (%)',
    labelLow: '낮음 (테라코타)',
    labelMedium: '중간 (석기)',
    labelHigh: '높음 (자기)',
    presetTerracota: '테라코타 (8%)',
    presetGres: '석기 (12%)',
    presetPorcelana: '자기 (15%)',
    labelResult: '결과',
    labelFinalSize: '최종 크기:',
    labelLoss: '전체 수축량:',
    tipText:
      '특정 최종 크기를 얻기 위해 필요한 초기 크기를 계산하려면, 원하는 크기를 (1 - 수축률/100)으로 나누십시오.',
    labelInitialBadge: '초기:',
    labelFinalBadge: 'mm 최종',
    labelLossBadge: '수축량:',
    labelInitialArea: '초기 면적',
    labelFinalArea: '최종 면적',
  },
};
