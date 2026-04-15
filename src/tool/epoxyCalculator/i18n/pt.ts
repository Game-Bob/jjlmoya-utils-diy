import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'calculadora-resina-epoxica';
const title = 'Calculadora de Resina Epóxica: Mistura e Volume Exato';
const description = 'Calcule a quantidade exata de resina epóxica e endurecedor necessária para os seus projetos. Evite desperdícios em mesas rio, joalharia e moldes.';

const faqData = [
  {
    question: 'Porque é que a proporção exata é tão importante na resina?',
    answer: 'Ao contrário de outras misturas, a resina epóxica não seca por evaporação, mas por uma reação química (polimerização). Se sobrar resina ou endurecedor, a reação será incompleta, deixando a peça pegajosa, mole ou com bolhas permanentes.',
  },
  {
    question: 'O que é a proporção em peso vs volume?',
    answer: 'Muitas resinas misturam-se 2:1 em volume mas 100:45 em peso devido ao facto de o endurecedor ser habitualmente mais denso. Use sempre a escala indicada pelo fabricante e, se possível, use uma balança digital para máxima precisão.',
  },
  {
    question: 'Como evito as bolhas ao misturar?',
    answer: 'Misture lentamente com movimentos circulares constantes durante pelo menos 3 minutos, raspando bem as paredes do copo. Deixe repousar a mistura um par de minutos antes de verter para que as bolhas subam à superfície.',
  },
  {
    question: 'O que é o tempo de vida (Pot Life)?',
    answer: 'É o tempo que tem para trabalhar com a mistura antes de esta começar a endurecer (gelificar). No verão ou em grandes volumes, este tempo reduz-se drasticamente devido à reação exotérmica (gera calor).',
  },
];

const howToData = [
  { name: 'Medir as dimensões do molde', text: 'Meça o comprimento, largura e a profundidade (espessura) da zona que quer preencher com resina.' },
  { name: 'Introduzir a relação de mistura', text: 'Consulte o rótulo do seu produto para verificar se a mistura é 1:1, 2:1 ou 3:1 e se se baseia em peso ou volume.' },
  { name: 'Pesar os componentes', text: 'Verta primeiro o componente A (resina) e depois o B (endurecedor) num recipiente limpo sobre uma balança digital.' },
  { name: 'Mistura técnica', text: 'Mexa suavemente até que a mistura esteja totalmente transparente e não se vejam "fios" de diferente densidade.' },
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas',
  bibliography: [
    { name: 'TotalBoat - Centro de Suporte e Guias Técnicos', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - Perguntas Frequentes e Guia de Uso', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guia de Cálculo e Mistura de Resina Epóxica', level: 2 },
    { type: 'paragraph', html: 'A resina epóxica não é uma tinta que seca por evaporação; é uma <strong>reação química exotérmica</strong> complexa. A magia acontece quando as moléculas de epóxido se encadeiam com as de poliamina para formar um polímero termoendurecível sólido cristalino.' },
    { type: 'paragraph', html: 'A diferença entre uma peça de arte duradoura e um desastre pegajoso reside na <strong>estequiometria exata</strong>. Um erro de apenas 5% na proporção de mistura pode inibir a cura permanentemente. Esta ferramenta elimina as suposições matemáticas, permitindo-lhe focar-se na criação.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Volume ou Peso?', html: '<p>O erro nº 1 dos principiantes é assumir que 100ml pesam 100g. <strong>A resina é mais densa que o endurecedor.</strong></p><p>Se a ficha técnica do seu produto diz "100:50 por peso", NÃO é o mesmo que "2:1 por volume". Esta calculadora trabalha com <strong>Volume</strong> (V = L × W × H), que é o padrão para preencher moldes.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Proporções Comuns', html: '<ul><li><strong>1:1</strong> — Revestimentos, vernizes e adesivos rápidos.</li><li><strong>2:1</strong> — Padrão. River tables, joalharia e moldes médios.</li><li><strong>3:1</strong> — Pavimentos industriais e laminados estruturais de alta dureza.</li></ul>' },
    ]},
    { type: 'title', text: 'Protocolo de Segurança e Boas Práticas', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Temperatura Vital', html: '<p>Trabalhe sempre entre <strong>21°C e 25°C</strong>. O frio pode parar a reação, deixando a peça turva. O calor excessivo acelera a reação exotérmica perigosamente ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Técnica do Copo Duplo', html: '<p>Não confie numa única mistura. Raspe bem os lados e o fundo, verta a mistura num <strong>segundo copo limpo</strong> e volte a misturar. Isto assegura que não resta material sem catalisar.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Retangular',
    shapeCylinder: 'Cilíndrico',
    shapeSphere: 'Esférico',
    labelLength: 'Comprimento (cm)',
    labelWidth: 'Largura (cm)',
    labelDiameter: 'Diâmetro (cm)',
    labelDepth: 'Profundidade (cm)',
    labelRatio: 'Proporção de Mistura (Peso/Volume)',
    labelCustomRatio: 'Usar proporção personalizada (A:B)',
    labelResinA: 'Resina (A)',
    labelHardenerB: 'Endurecedor (B)',
    labelWasteTitle: 'Margem de Segurança',
    labelWasteDesc: 'Adicione 5% extra para perdas',
    labelTotalVolume: 'Volume Total',
    labelPartA: 'Parte A (Resina)',
    labelPartB: 'Parte B (Endurecedor)',
    labelVisualization: 'Visualização',
    shapeRectLabel: 'Bloco Retangular',
    shapeCylinderLabel: 'Cilindro / Molde Redondo',
    shapeSphereLabel: 'Esfera Completa',
  },
};
