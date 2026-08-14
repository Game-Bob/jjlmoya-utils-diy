import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'calculadora-gesso-acartonado';
const title = 'Calculadora de Gesso Acartonado (Drywall) e Estrutura';
const description = 'Calculadora profissional de quantitativo de materiais para paredes divisórias e forros de gesso acartonado (Drywall). Calcule placas, montantes C, guias U, parafusos, fita e massa.';

const faqData = [
  {
    question: 'Como calcular quantas placas de drywall preciso para uma parede divisória?',
    answer: 'Multiplique a extensão da parede pela altura do pé-direito para obter a área total. Para paredes com revestimento em ambos os lados, multiplique por 2. Divida pela área útil de uma placa (2.88 m2 para placa 120x240 cm) e adicione 10% de margem de perda para cortes.',
  },
  {
    question: 'Quando usar espaçamento de montantes a 40 cm ou 60 cm?',
    answer: 'O espaçamento padrão de 60 cm entre eixos de montantes C é recomendado para paredes secas internas até 3,0 m de altura. Utilize 40 cm em paredes com revestimento cerâmico pesado, áreas úmidas (banheiros e cozinhas) ou alturas superiores a 3 metros.',
  },
  {
    question: 'Qual placa de gesso acartonado escolher para cada ambiente?',
    answer: 'Utilize Placa Standard Branca (ST) para quartos e salas; Placa Resistente à Umidade Verde (RU) para banheiros e cozinhas; Placa Resistente ao Fogo Rosa (RF) para áreas com exigência de estanqueidade ao fogo; e Placa Acústica Azul para isolamento sonoro.',
  },
  {
    question: 'Quantos parafusos são necessários por placa de drywall?',
    answer: 'Calcule cerca de 30 parafusos para drywall (3.5x25 mm) por placa de 120x240 cm em camada simples, mantendo espaçamento de 25 cm no perímetro e 30 cm nos montantes centrais.',
  },
  {
    question: 'Por que a fita de isolamento acústico é obrigatória sob as guias?',
    answer: 'A fita banda acústica em espuma de polietileno desolidariza as guias U da laje de piso e teto, interrompendo a transmissão de vibrações e ruídos de impacto.',
  },
];

const howToData = [
  { name: 'Inserir Dimensões da Parede', text: 'Informe o comprimento e a altura do pé-direito em metros ou pés.' },
  { name: 'Configurar Estrutura e Camadas', text: 'Escolha o espaçamento dos montantes (40 cm ou 60 cm) e o número de camadas de placas.' },
  { name: 'Verificar Quantitativo e Elevação CAD', text: 'Confira a lista completa de materiais (montantes, guias, parafusos, fita, massa) e o desenho técnico.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dimensionamento Técnico de Estruturas de Drywall',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A construção de vedações verticais leves em drywall exige o dimensionamento correto dos perfis metálicos em aço galvanizado (montantes C e guias U) e o amarramento das juntas segundo a norma EN 520.',
    },
    {
      type: 'title',
      text: 'Regras de Espaçamento dos Montantes: 40 cm vs 60 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O <strong>espaçamento padrão de 60 cm</strong> atende placas de 120 cm de largura. O <strong>espaçamento de 40 cm</strong> é obrigatório sob revestimentos cerâmicos e alturas superiores a 3,00 metros.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Amarramento de Juntas e Padrão de Fixação',
      html: '<p>Evite juntas cruzadas. Mantenha desencontro mínimo de 40 cm entre bordas. Fixe com parafusos 3.5x25 mm espaçados em <strong>25 cm nas bordas</strong> e <strong>30 cm nos montantes internos</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Margem de Perda e Consumo de Massa de Rejunte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Considere <strong>10% de margem de perda</strong> para cortes em esquadrias. O tratamento de juntas consome cerca de 0,8 kg de massa por metro quadrado de superfície.',
    },
  ],
  ui: {
    unitSystemLabel: 'Sistema de Medição',
    unitMetric: 'Métrico (m, cm, kg)',
    unitImperial: 'Imperial (ft, in, lb)',

    paramLengthLabel: 'Comprimento da Parede',
    paramHeightLabel: 'Altura do Pé-Direito',
    paramSpacingLabel: 'Espaçamento dos Montantes',
    paramSpacing40Metric: '40 cm (Carga Alta)',
    paramSpacing60Metric: '60 cm (Padrão)',
    paramSpacing40Imperial: '16 in (Carga Alta)',
    paramSpacing60Imperial: '24 in (Padrão)',
    paramLayersLabel: 'Camadas de Placas',
    paramSingleLayer: 'Camada Simples',
    paramDoubleLayer: 'Camada Dupla',
    paramSidesLabel: 'Faces Revestidas',
    paramDoubleSided: '2 Faces (Divisória)',
    paramSingleSided: '1 Face (Revestimento)',
    paramBoardTypeLabel: 'Tipo de Placa Drywall',
    boardTypeStandard: 'Standard ST (Tipo A)',
    boardTypeMoisture: 'Resistente à Umidade RU (Tipo H1)',
    boardTypeFire: 'Resistente ao Fogo RF (Tipo F)',
    boardTypeAcoustic: 'Acústica (Tipo A)',
    paramWasteLabel: 'Margem de Perda',

    summaryWallArea: 'Área Líquida da Parede',
    summaryBoardArea: 'Área Total de Placas',

    resBoardsLabel: 'Placas de Drywall',
    resBoardsUnit: 'unidades',
    resStudsLabel: 'Montantes Verticais C',
    resStudsUnit: 'peças',
    resTracksLabel: 'Guias Horizontais U',
    resTracksUnit: 'barras',
    resDrywallScrewsLabel: 'Parafusos para Drywall',
    resDrywallScrewsUnit: 'unidades',
    resFramingScrewsLabel: 'Parafusos Metal-Metal',
    resFramingScrewsUnit: 'unidades',
    resJointTapeLabel: 'Fita de Juntas',
    resJointTapeUnit: 'comprimento',
    resJointCompoundLabel: 'Massa para Rejunte',
    resJointCompoundUnit: 'peso',
    resAcousticBandLabel: 'Fita Banda Acústica',
    resAcousticBandUnit: 'comprimento',

    diagramWallTitle: 'Elevação Técnica CAD',
    diagramStudLegend: 'Montantes C',
    diagramTrackLegend: 'Guias U',
    diagramBoardLegend: 'Desencontro de Placas',
    diagramModeStructure: 'Estrutura Metálica',
    diagramModeBoard: 'Placas Fixadas',
  },
};
