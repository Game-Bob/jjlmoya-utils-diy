import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'calculadora-escadas';
const title = 'Calculadora de Escadas: Design e Execução';
const description = 'Calcule as medidas exatas da sua escada: piso, espelho, ângulo e materiais. Respeite a Lei de Blondel e evite erros de obra.';

const faqData = [
  {
    question: 'O que é a Lei de Blondel?',
    answer: 'É uma fórmula que estabelece que para uma escada ser confortável, a soma de dois espelhos e um piso deve estar entre 62 e 64 cm (2E + P = 63). Esta lei baseia-se no comprimento médio do passo humano.',
  },
  {
    question: 'Qual é a altura máxima de um degrau?',
    answer: 'Em habitações recomenda-se não superar os 18-19 cm. Para espaços públicos, o máximo costuma ser 17.5 cm segundo a normativa. Espelhos maiores cansam mais e podem ser perigosos.',
  },
  {
    question: 'Como calculo se tenho pouco espaço?',
    answer: 'Se o avanço horizontal for limitado, deverá aumentar o número de degraus (reduzindo o espelho) ou aceitar uma inclinação maior. A calculadora ajuda a encontrar o equilíbrio ideal.',
  },
  {
    question: 'O que inclui a cubagem de betão?',
    answer: 'Calcula-se o volume total de betão considerando os degraus mais a laje inclinada (o plano inclinado que suporta os degraus). Ignorar este volume resultaria num pedido de betão insuficiente.',
  },
  {
    question: 'Porque é importante a marcação acumulada?',
    answer: 'Medir cada degrau separadamente gera erros acumulados. A marcação acumulada garante que todos os degraus tenham exatamente a mesma altura, melhorando a segurança e o conforto.',
  },
];

const howToData = [
  { name: 'Medir o desnível', text: 'Meça o desnível total (H) desde o piso acabado inferior ao piso acabado superior. Este é o dado fundamental para todo o cálculo.' },
  { name: 'Introduzir o comprimento disponível', text: 'Opcional: Se tiver restrições de espaço, introduza o comprimento horizontal disponível. Use 0 para cálculo livre.' },
  { name: 'Ajustar o número de degraus', text: 'A calculadora propõe um número inicial, mas pode ajustá-lo. Observe o indicador de Blondel: deve estar em verde (62-64 cm) para máximo conforto.' },
  { name: 'Definir parâmetros de obra', text: 'Especifique a espessura da laje, acabamentos finais, resistência do betão e largura da escada. Estes dados afetam a cubagem final.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Normas',
  bibliography: [
    { name: 'Regras de Dimensionamento de Escadas', url: 'https://pt.wikipedia.org/wiki/Escada' },
    { name: 'Lei de Blondel - Wikipedia', url: 'https://pt.wikipedia.org/wiki/Escada#Dimensionamento' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Design Geométrico de Escadas: A Lei de Blondel', level: 2 },
    { type: 'paragraph', html: 'O conforto de uma escada depende do comprimento do passo humano. A Lei de Blondel estabelece que 2 espelhos + 1 piso = 62-64 cm é o padrão que garante máximo conforto e segurança.' },
    { type: 'title', text: 'Controlo de Estrutura e Materiais', level: 3 },
    { type: 'paragraph', html: 'Para uma execução profissional, é vital considerar a laje de betão. Ignorar este volume resultaria num pedido de betão insuficiente. A calculadora integra automaticamente este cálculo.' },
    { type: 'title', text: 'Marcação e Erro Acumulado', level: 3 },
    { type: 'paragraph', html: 'Na construção, o maior inimigo é o erro milimétrico. Se medir cada degrau separadamente, a soma de pequenos erros pode deixar o último degrau 5 cm mais alto ou mais baixo que o primeiro.' },
  ],
  ui: {
    labelGeometry: 'Geometria e Espaço',
    labelTotalHeight: 'Desnível Total (H)',
    labelAvailableLength: 'Comprimento Disponível (L)',
    labelAvailableLengthHint: 'Use 0 para cálculo livre.',
    labelNumSteps: 'Nº Degraus',
    labelOptimize: 'Otimizar (18cm)',
    labelWork: 'Obra e Instalação',
    labelSlabThickness: 'Laje (e)',
    labelFinishThickness: 'Acabamento',
    labelCeilingHeight: 'Altura Teto',
    labelStairWidth: 'Largura Escada',
    labelConcreteStrength: 'Resistência Betão',
    optionH150: 'C12/15 (Limpeza)',
    optionH200: 'C16/20 (Habitação)',
    optionH250: 'C20/25 (Estrutural)',
    labelRiser: 'Espelho',
    labelTread: 'Piso',
    labelSlope: 'Inclinação',
    labelRealAdvance: 'Avanço Real',
    labelLayoutTable: 'Marcação e Execução',
    colStep: 'Degrau',
    colConcreteHeight: 'H. Betão',
    colFinishedHeight: 'H. Terminada',
    colAdvance: 'Avanço',
    adjustedNote: 'Ajustado',
    labelMaterials: 'Cubagem e Pedido',
    labelTotalConcrete: 'Betão Total:',
    labelCement: 'Cimento (sacos/25kg):',
    labelSand: 'Areia necessária:',
    unitM3: 'm³',
    unitBags: 'sacos',
    unitLiters: 'L',
    btnShare: 'Partilhar',
    btnPrint: 'Imprimir PDF',
    statusOptimalComfort: 'Conforto Ideal',
    statusMarginLimit: 'Margem Limite',
    statusCriticalDesign: 'Design Crítico',
    statusRiserError: 'Erro de Piso',
    msgInvalidValues: 'Valores inválidos',
    msgInsufficientSpace: 'ESPAÇO INSUFICIENTE',
    msgDangerousTread: 'O piso de {val}cm é perigoso.',
    msgBlondelValue: 'Blondel: {val}cm.',
    msgOptimalStep: 'Passo confortável: {val}cm.',
    msgLowCeiling: 'PASSAGEM BAIXA (<2m)',
    msgCalculating: 'A calcular...',
    msgEnterMeasurements: 'Insira medidas',
    shareTitle: 'Resumo Obra',
    shareMessage: 'Escada: H={h}cm, N={n}, E={ch}cm, Vol={vol}m3',
  },
};
