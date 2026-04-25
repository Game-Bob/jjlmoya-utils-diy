import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-angulo-reto-pitagoras-regra-3-4-5';
const title = 'Calculadora de Ângulo Reto (Teorema de Pitágoras): Regra 3-4-5 para Esquadros Perfeitos';
const description = 'Verifique se as estruturas estão perfeitamente no esquadro (90°) usando o teorema de Pitágoras e a regra 3-4-5. Ferramenta essencial para construção, carpintaria e projetos DIY.';

const faqData = [
  {
    question: 'O que é a regra 3-4-5?',
    answer: 'A regra 3-4-5 é um terno pitagórico simples. Se um triângulo retângulo tem lados de 3, 4 e 5 unidades em qualquer escala, o ângulo entre os lados mais curtos é exatamente de 90 graus. Este método testado em campo tem sido usado na construção há séculos.',
  },
  {
    question: 'Como uso esta calculadora?',
    answer: 'Insira os comprimentos das duas paredes (lados A e B) que formam o canto. A calculadora mostra qual deve ser a diagonal para um ângulo perfeito de 90 graus. Em seguida, meça sua diagonal real e insira-a para verificar se o seu canto está realmente no esquadro.',
  },
  {
    question: 'E se a minha diagonal for diferente?',
    answer: 'Se a sua diagonal medida diferir da ideal, a calculadora mostra o desvio. Verde significa perfeito, amarelo significa aceitável, vermelho significa fora do esquadro. Ela também indica se deve abrir ou fechar o ângulo.',
  },
  {
    question: 'É suficientemente precisa para a construção?',
    answer: 'Sim. O teorema de Pitágoras é matematicamente exato. Com uma fita métrica, você pode alcançar uma precisão de nível de construção sem ferramentas especializadas ou habilidades avançadas.',
  },
  {
    question: 'Posso alternar entre polegadas e pés?',
    answer: 'Sim. Escolha polegadas para pequenos projetos ou pés para estruturas maiores. Todos os valores são convertidos instantaneamente sem perda de dados.',
  },
];

const howToData = [
  { name: 'Selecione a sua unidade', text: 'Escolha polegadas para trabalhos detalhados ou pés para estruturas maiores. Você pode mudar a qualquer momento.' },
  { name: 'Meça ambos os lados', text: 'Meça o comprimento das duas paredes (lados A e B) que formam o canto que você deseja verificar.' },
  { name: 'Verifique a diagonal ideal', text: 'A calculadora mostra qual deve ser a diagonal para um ângulo perfeito de 90 graus.' },
  { name: 'Meça a sua diagonal', text: 'Use uma fita métrica para medir a sua diagonal real. Insira-a no campo opcional.' },
  { name: 'Leia o status', text: 'Verde = esquadro perfeito. Amarelo = aceitável. Vermelho = fora do esquadro. Ajuste conforme sugerido.' },
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'O Teorema de Pitágoras na Prática', level: 2 },
    { type: 'paragraph', html: 'Um ângulo perfeito de 90 graus é fundamental para uma construção de qualidade. As paredes devem ser perpendiculares, os alicerces deben estar no esquadro e as estruturas deben estar alinhadas. O teorema de Pitágoras fornece um método matematicamente garantido: a² + b² = c².' },
    { type: 'title', text: 'Por que a regra 3-4-5 funciona', level: 3 },
    { type: 'paragraph', html: 'A regra 3-4-5 é o terno pitagórico mais simples. Quer meça em polegadas, pés ou qualquer outra unidade, lados de 3, 4 e 5 unidades garantem um ângulo de 90 graus. Isso foi provado matematicamente e testado na construção durante séculos.' },
    { type: 'title', text: 'Precisão sem ferramentas especializadas', level: 3 },
    { type: 'paragraph', html: 'Ao contrário de níveis ou esquadros que podem quebrar ou perder o ajuste, o teorema de Pitágoras é imutável. Com apenas uma fita métrica, você pode verificar qualquer canto em qualquer escala. Esta calculadora elimina o cálculo mental e garante a precisão.' },
    { type: 'title', text: 'Da teoria ao guia prático', level: 3 },
    { type: 'paragraph', html: 'Esta calculadora converte a matemática abstrata em instruções práticas de campo. Se a sua diagonal estiver errada, ela indica exatamente o quanto e em que direção ajustar. Transforme a teoria em resultados reais na obra.' },
  ],
  ui: {
    titleMain: 'Calculadora de Esquadro (Pitágoras)',
    labelInputData: 'Medições',
    labelUnitSelection: 'Unidade',
    btnUnitInches: 'polegadas',
    btnUnitFeet: 'pés',
    btnUnitCentimeters: 'centímetros',
    labelSideA: 'Lado A',
    labelSideB: 'Lado B',
    labelMeasuredDiagonal: 'Diagonal medida (opcional)',
    labelResults: 'Resultados',
    labelIdealDiagonal: 'Diagonal ideal',
    labelDeviation: 'Desvio',
    labelStatus: 'Status',
    labelVerification: 'Verificação de esquadro',
    btnClear: 'Limpar',
    btnCopyResults: 'Copiar resultados',
    labelPresets: 'Ajustes rápidos',
    unitInches: 'pol',
    unitFeet: 'pé',
    unitCentimeters: 'cm',
    tooltipOptional: 'Insira a sua diagonal medida para verificar os 90 graus',
    tooltipPresets: 'Regra 3-4-5 em diferentes escalas',
    statusPerfect: 'Ângulo de 90 graus perfeito',
    statusAcceptable: 'Desvio aceitável',
    statusWarning: 'Desvio menor',
    statusError: 'Fora do esquadro',
    statusReady: 'Pronto',
    msgIdealCalculated: 'Diagonal ideal calculada',
    actionOpen: 'Abrir',
    actionClose: 'Fechar',
    descLarger: 'maior',
    descSmaller: 'menor',
    descCorrection: 'Correção necessária',
  },
};
