import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-usinagem-furo';
const title = 'Calculadora RPM de Usinagem e Furação';
const description = 'Calcule as rotações por minuto ideais para o seu berbequim ou fresadora de acordo com o material e o diâmetro da broca. Evite queimar as suas ferramentas.';

const faqData = [
  {
    question: 'Por que as brocas queimam ao furar?',
    answer: 'Principalmente devido a um excesso de rotações (RPM). Quando a broca gira mais depressa do que o material permite dissipar o calor, o atrito eleva a temperatura acima do limite de têmpera do aço, fazendo com que o gume amoleça e deixe de cortar.',
  },
  {
    question: 'O que é a velocidade de corte (Vc)?',
    answer: 'É a velocidade linear em metros por minuto à qual o gume da ferramenta percorre a superfície do material. Cada material tem uma Vc recomendada que não depende do diâmetro da broca.',
  },
  {
    question: 'Quando devo usar uma ferramenta de Metal Duro (Widia)?',
    answer: 'Deve usar metal duro quando necessitar de trabalhar a velocidades muito mais elevadas, em produções industriais ou quando o material a furar for extremamente duro. Para o bricolage comum, o HSS é suficiente e mais resistente a quebras por flexão.',
  },
  {
    question: 'É necessário usar lubrificante sempre?',
    answer: 'Em metais, é quase sempre recomendável. No alumínio evita que o material adira à broca, e nos aços reduz o calor. Em madeiras e plásticos é melhor trabalhar a seco com extrações frequentes da broca.',
  },
  {
    question: 'Como calculo o avanço se não tiver uma fresadora CNC?',
    answer: 'Num berbequim manual, o avanço sente-se pela pressão. Deve ver que sai uma apara constante e limpa. Se sair pó, está a pressionar pouco ou as RPM são excessivas. Se a apara for muito grossa e o berbequim sofrer, está a pressionar demasiado.',
  },
];

const howToData = [
  { name: 'Selecione o material', text: 'Indique que material vai furar ou fresar (aço, alumínio, madeira, etc.). Cada um tem uma dureza e capacidade térmica distinta.' },
  { name: 'Introduza o diâmetro', text: 'Escreva o diâmetro exato da sua broca ou fresa em milímetros. Lembre-se que quanto maior o diâmetro, menor deve ser a velocidade de rotação.' },
  { name: 'Escolha o tipo de ferramenta', text: 'Determine se a sua broca é de aço rápido (HSS) ou de metal duro (Carbureto/Widia). As de metal duro suportam muito mais velocidade.' },
  { name: 'Ajuste as RPM na sua máquina', text: 'Configure o seu berbequim ou fresadora com o valor calculado. Se a sua máquina tiver posições fixas, use a nossa ferramenta de velocidade próxima para escolher a posição da polia mais segura.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'A importância das Rotações por Minuto na usinagem', level: 2 },
    { type: 'paragraph', html: 'O cálculo correto das rotações por minuto é a diferença entre um trabalho perfeito e um desastre dispendioso. Não se trata de fazer girar uma broca o mais rápido possível, mas de respeitar as leis da física aplicadas ao atrito e à resistência dos materiais. A nossa calculadora foi concebida para otimizar o desempenho das suas ferramentas e a qualidade dos seus acabamentos.' },
    { type: 'title', text: 'Entendendo a Velocidade de Corte', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Fórmula de Cálculo de RPM', html: '<p>A velocidade de corte é um valor em metros por minuto que indica a velocidade ideal à qual o gume deve passar pelo material. A fórmula que usamos é: <code>RPM = (Vc × 1000) / (π × D)</code> onde D é o diâmetro em milímetros. Este cálculo é independente do diâmetro do material que cortamos.' },
    { type: 'title', text: 'HSS vs Metal Duro', level: 3 },
    { type: 'paragraph', html: 'As ferramentas de <strong>Aço Rápido (HSS)</strong> são económicas e resistentes a impactos, mas têm resistência térmica limitada. O <strong>Metal Duro (Carbureto)</strong> permite velocidades de corte 3 a 5 vezes superiores, mas são mais frágeis. A calculadora ajusta automaticamente os parâmetros de acordo com o tipo de ferramenta.' },
    { type: 'title', text: '3 Erros Comuns ao Furar', level: 3 },
    { type: 'paragraph', html: '<strong>RPM demasiado altas:</strong> Causa sobreaquecimento e perda de têmpera do aço. <strong>RPM demasiado baixas:</strong> A broca vibra e pode partir-se por fadiga. <strong>Sem refrigeração:</strong> O calor reduz significativamente a vida útil da ferramenta.' },
  ],
  ui: {
    labelMaterial: 'Material da peça',
    matSteel: 'Aço Suave',
    matInox: 'Inoxidável',
    matAlu: 'Alumínio',
    matBrass: 'Latão',
    matCastIron: 'Fundição',
    matWood: 'Madeiras',
    matPlastic: 'Plásticos',
    coolSteel: 'Fluido de corte ou Óleo',
    coolInox: 'Óleo de Corte EP',
    coolAlu: 'Álcool / Parafina',
    coolBrass: 'A seco / Ar',
    coolCastIron: 'A seco',
    coolWood: 'Apenas Aspiração',
    coolPlastic: 'Jato de Ar',
    labelTool: 'Tipo de Ferramenta',
    typeHss: 'Aços (HSS)',
    typeWidia: 'Metal Duro (Widia)',
    labelDiameter: 'Diâmetro',
    unitMm: 'mm',
    unitInch: 'pol',
    modeColumnDrill: 'Modo Berbequim de Coluna',
    labelAdvanced: 'Parâmetros de Avanço',
    labelLips: 'Nº de Gumes (z)',
    labelFz: 'Avanço/dente (Fz)',
    labelMachine: 'Velocidades da sua Máquina',
    presetStandard: 'Padrão',
    presetCnc: 'CNC',
    addRpmManual: 'Adicionar RPM manual...',
    addButton: '+',
    resultRpm: 'Velocidade Ideal',
    resultCooling: 'Refrigeração',
    resultFeed: 'Avanço Resultante',
    resultClosest: 'Ajuste recomendado',
    rpmUnit: 'Rotações / Minuto',
    recommendedLabel: 'Ajuste recomendado',
    recommendedHint: 'Configure o seletor da sua máquina para esta posição',
    statusLimitActive: 'Limite de máquina ativo',
    statusOutOfRange: 'Gama fora do padrão comercial',
  },
};
