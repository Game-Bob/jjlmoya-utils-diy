import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-dilatacao-termica';
const title = 'Calculadora de Dilatação Térmica de Vigas e Estruturas';
const description = 'Calcule quanto cresce uma viga ou estrutura por variações de temperatura. Ferramenta técnica para engenheiros e DIY. Inclui coeficientes de expansão por material.';

const faqData = [
  {
    question: 'O que é o coeficiente de dilatação linear?',
    answer: 'É uma propriedade física dos materiais que indica quanto se expande por cada grau Celsius que aumenta a sua temperatura. Mede-se em 1/°C ou °C⁻¹.',
  },
  {
    question: 'Porque é importante calcular a dilatação em vigas?',
    answer: 'Se uma viga não tiver espaço para expandir (juntas de dilatação), gerará tensões internas massivas que podem deformar a estrutura, rachar o betão ou até causar um colapso.',
  },
  {
    question: 'A madeira dilata igual em todas as direções?',
    answer: 'Não. A madeira é um material anisotrópico. Dilata muito pouco ao longo da fibra, mas significativamente no sentido transversal (largura e espessura).',
  },
  {
    question: 'Que temperatura devo usar como Inicial?',
    answer: 'Deve usar a temperatura no momento da instalação ou construção. A Final deve ser a temperatura máxima esperada durante a sua vida útil.',
  },
];

const howToData = [
  { name: 'Meça o comprimento original', text: 'Introduza o comprimento da viga ou material em metros.' },
  { name: 'Selecione o material', text: 'Escolha entre metais, materiais de construção ou madeiras para aplicar o seu coeficiente específico.' },
  { name: 'Defina o intervalo térmico', text: 'Especifique a temperatura inicial e a máxima esperada para calcular o diferencial térmico.' },
  { name: 'Analise o crescimento', text: 'Observe o estiramento total em milímetros e o comprimento final resultante para prever juntas adequadas.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'O que é a Dilatação Térmica e porque afeta as Estruturas', level: 2 },
    { type: 'paragraph', html: 'A <strong>dilatação térmica</strong> é o processo físico pelo qual um material aumenta o seu comprimento como resposta a um incremento na sua temperatura. Na construção, este fenómeno é uma força que pode quebrar o betão, deformar vigas de aço e retorcer as vias de um comboio.' },
    { type: 'title', text: 'A Fórmula da Dilatação Linear', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Fórmula da Dilatação Linear', html: '<p>A expansão de um elemento estrutural calcula-se com: <code>ΔL = L₀ · α · ΔT</code>. Onde <strong>ΔL</strong> é o crescimento total, <strong>L₀</strong> é o comprimento original, <strong>α</strong> é o coeficiente de expansão do material (em °C⁻¹) e <strong>ΔT</strong> é a diferença de temperatura.</p>' },
  ],
  ui: {
    configTitle: 'Configuração',
    labelMaterial: 'Material',
    groupMetals: 'Metais',
    groupConstruction: 'Construção',
    groupWood: 'Madeiras e Polímeros',
    matSteel: 'Aço (12 ppm/°C)',
    matAluminum: 'Alumínio (23 ppm/°C)',
    matCopper: 'Cobre (17 ppm/°C)',
    matIron: 'Ferro (11 ppm/°C)',
    matConcrete: 'Betão (12 ppm/°C)',
    matBrick: 'Tijolo (9 ppm/°C)',
    matGlass: 'Vidro (9 ppm/°C)',
    matWoodFiber: 'Madeira Fibra (5 ppm/°C)',
    matWoodTransversal: 'Madeira Transversal (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metalurgia',
    catConstruction: 'Construção',
    catWood: 'Madeiras e Polímeros',
    labelLength: 'Comprimento Inicial (m)',
    labelTempStart: 'T. Inicial (°C)',
    labelTempEnd: 'T. Máxima (°C)',
    deltaLabel: 'Diferencial Térmico (ΔT)',
    vizTitle: 'Simulação de Expansão',
    resultGrowthLabel: 'Crescimento Total (ΔL)',
    resultFinalLabel: 'Comprimento Final',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Risco Encurvadura',
    jointTitle: 'Junta Mínima',
    riskLow: 'Baixo',
    riskModerate: 'Moderado',
    riskCritical: 'Crítico',
    tipDefault: 'Consulte o manual do fabricante para coeficientes exatos de ligas especiais.',
    tipSteel: 'O aço e o betão têm coeficientes quase idênticos, permitindo que o betão armado funcione sem fissuras internas.',
    tipAluminum: 'O alumínio dilata quase o dobro do aço. Em caixilharias metálicas, isto obriga ao uso de selantes elásticos.',
    tipGlass: 'O vidro e o aço dilatam quase igual, o que é fundamental para o design de grandes fachadas envidraçadas.',
    tipConcrete: 'O coeficiente do betão é muito semelhante ao do aço, razão pela qual as estruturas mistas são tão estáveis.',
    tipWood: 'A madeira dilata pouco por calor, mas muito por humidade. Em estruturas longas, a fibra longitudinal é muito estável.',
    tipPvc: 'O PVC tem uma expansão altíssima. Requer juntas especiais para absorver o movimento sem se partir.',
  },
};
