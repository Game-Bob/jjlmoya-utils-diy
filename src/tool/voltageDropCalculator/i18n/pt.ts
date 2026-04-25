import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-queda-tensao';
const title = 'Calculadora de Queda de Tensão e Secção de Cabo';
const description = 'Ferramenta técnica para evitar cabos queimados. Calcule a secção necessária para instalações de 12V, 24V e 230V segundo distância e potência.';

const faqData = [
  {
    question: 'O que é a queda de tensão e porque é importante?',
    answer: 'É a perda de voltagem que ocorre quando a eletricidade viaja por um cabo. Se o cabo for muito fino ou muito longo, perde voltagem. Resultado: luzes fracas, motores que não arrancam ou cabos que aquecem perigosamente.',
  },
  {
    question: 'Que secção de cabo preciso para 12V a 10 metros?',
    answer: 'Depende da potência. Para 12V e 10A a 10m, precisa no mínimo de 2.5mm². Para 20A, precisa de 6mm². A baixa voltagem (12V/24V), a queda é muito mais crítica do que a 230V.',
  },
  {
    question: 'Posso usar cabo de 1.5mm² para toda a minha instalação?',
    answer: 'Não. 1.5mm² é para circuitos de iluminação (máx 10A). Para tomadas precisa de 2.5mm². Para cozinha ou máquina de lavar precisa de 4mm² ou 6mm². Usar cabo fino é perigoso e pode causar incêndios.',
  },
  {
    question: 'Qual é a queda de tensão máxima permitida?',
    answer: 'Em instalações domésticas (230V): máximo 3% para iluminação, 5% para outros usos. Em 12V/24V (autocaravanas, solar): não mais do 3% total. Mais queda significa perda de eficiência e risco de sobreaquecimento.',
  },
];

const howToData = [
  { name: 'Definir a voltagem do sistema', text: 'Selecione se a sua instalação é de 12V, 24V (solar/camper) ou 230V (doméstica).' },
  { name: 'Introduzir a intensidade de corrente', text: 'Escreva os Amperes (A) ou Watts (W) que consumirá o aparelho no final do cabo.' },
  { name: 'Medir a distância do cabo', text: 'Introduza o comprimento de ida do cabo em metros desde a fonte de energia até ao recetor.' },
  { name: 'Escolher o material do condutor', text: 'Selecione cobre (padrão) ou alumínio para obter o cálculo exato de resistividade.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guia Completo de Queda de Tensão', level: 2 },
    { type: 'paragraph', html: 'Se está a construir uma autocaravana, a desenhar uma instalação solar ou a passar cabos para o jardim, há um inimigo invisível: a <strong>queda de tensão</strong>. Não é apenas uma questão técnica; é a diferença entre um frigorífico que arrefece e um que se desliga, ou entre uma instalação segura e um risco de incêndio.' },
    { type: 'title', text: 'A Fórmula da Queda de Tensão', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Cálculo Exato com a Lei de Ohm', html: '<p>A fórmula é <strong>ΔV = (2 × L × I × ρ) / S</strong>, onde L é o comprimento de ida, I a corrente, ρ a resistividade (0,0178 para cobre) e S a secção do cabo.</p>' },
  ],
  ui: {
    heroDropLabel: 'Queda de Tensão Total',
    heroVoltsUnit: 'Volts',
    heroPctLoss: '% perda',
    heroEffLabel: 'Eficiência',
    statusExcellent: 'Excelente',
    statusAcceptable: 'Aceitável',
    statusCritical: 'Crítico',
    fieldVoltage: 'Voltagem',
    fieldMaterial: 'Material',
    materialCopper: 'Cobre',
    materialAlum: 'Alum.',
    fieldLoad: 'Carga',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watts',
    unitAmps: 'Amperes',
    fieldLength: 'Comprimento do Cabo (Ida)',
    unitMeters: 'metros',
    fieldSection: 'Secção do Cabo',
    sectionInfo: 'Recomendado',
  },
};
