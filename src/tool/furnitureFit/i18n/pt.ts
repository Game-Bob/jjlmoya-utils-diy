import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-espaco-moveis';
const title = 'Calculadora de Espaço para Mudanças e Móveis';
const description = 'Verifique se o seu sofá, armário ou mesa cabe no elevador ou pela porta. Use o teorema de Pitágoras 3D para calcular inclinações e evitar desastres na sua mudança.';

const faqData = [
  {
    question: 'Porque é que um sofá pode não caber apesar de ser mais pequeno que a porta?',
    answer: 'Devido ao ângulo de rotação. Se o corredor for estreito, o sofá deve entrar de lado ou inclinado. O fator limitante não é apenas a largura da porta, mas o raio de rotação disponível no local.',
  },
  {
    question: 'O que é a diagonal de um móvel e porque é importante?',
    answer: 'É a distância mais longa entre dois cantos opostos. É vital para saber se um móvel alto pode ser levantado numa divisão com teto baixo depois de ter sido montado no chão.',
  },
  {
    question: 'Como medir um elevador corretamente?',
    answer: 'Não meça apenas o chão. Meça a largura da porta aberta, a profundidade livre e a altura total. A diagonal desde a base da porta até ao canto superior traseiro é o dado mais importante.',
  },
  {
    question: 'Que peças devem ser desmontadas primeiro?',
    answer: 'Pés de sofás, puxadores de armários e portas de frigoríficos costumam ganhar entre 5 e 10 cm críticos que fazem a diferença entre um móvel caber ou ficar na rua.',
  },
];

const howToData = [
  { name: 'Medir o móvel (Comprimento, Largura, Altura)', text: 'Tome as medidas máximas do objeto, incluindo qualquer saliência como apoios de braços ou puxadores.' },
  { name: 'Medir as passagens críticas', text: 'Meça o vão livre da porta (de ombreira a ombreira), o interior do elevador e a largura dos corredores.' },
  { name: 'Introduzir dados no simulador', text: 'Escreva as dimensões na ferramenta para ver se o volume do móvel é compatível com o espaço de passagem.' },
  { name: 'Calcular inclinações', text: 'Se o móvel for muito alto, use a diagonal calculada para verificar se poderá rodá-lo no patamar da escada ou dentro do elevador.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'A Ciência das Mudanças e o Teorema de Pitágoras', level: 2 },
    { type: 'paragraph', html: 'As mudanças não são apenas um teste de força física; são um puzzle geométrico complexo. O espaço aparente de uma divisão ou um elevador engana o olho humano, especialmente quando ignoramos a terceira dimensão. A matemática pode poupar-lhe centenas de euros em devoluções e transportes falhados.' },
    { type: 'title', text: 'O Truque da Diagonal 3D', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Regra de Ouro', html: '<p>Nunca meça apenas o móvel. Meça sempre os <strong>pontos críticos de acesso</strong>: a largura da ombreira da porta (subtraindo a espessura da própria porta se não abrir 180º), o ponto mais baixo do teto no patamar e a profundidade real do elevador com as portas fechadas. A fórmula <code>d = √(w² + h² + z²)</code> revela se cabe inclinado.</p>' },
    { type: 'title', text: 'O Problema do Sofá no Corredor', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Margem de Manobra', html: '<p>Um erro comum é assumir que se o móvel mede 80cm e o vão 80cm, passará. Não é assim. As mãos dos transportadores, a elasticidade do tecido e as imperfeições das paredes requerem uma margem mínima de <strong>2 a 5 cm</strong>. Sem esta margem, o móvel ficará riscado ou encravado por pressão.</p>' },
    { type: 'title', text: 'Os 3 Erros que Arruínam uma Mudança', level: 3 },
    { type: 'paragraph', html: 'Mesmo com medidas corretas, estes fatores invisíveis costumam causar desastres: <strong>O Candeeiro do Teto</strong> — esquecido durante a rotação diagonal. <strong>O Raio de Rotação do Móvel</strong> — um móvel rígido não se dobra. <strong>A Embalagem</strong> — o plástico de bolhas pode adicionar de 1 a 3 cm a cada lado.' },
  ],
  ui: {
    conTitle: 'Dimensões do Espaço',
    conHint: 'Ex: Elevador padrão, ombreira de porta ou furgão.',
    objTitle: 'Dimensões do Móvel',
    labelWidth: 'Largura (cm)',
    labelHeight: 'Altura (cm)',
    labelDepth: 'Profundidade (cm)',
    labelLength: 'Comprimento (cm)',
    labelMargin: 'Margem de Erro (cm)',
    vizLabel: 'Vista Espacial Simplificada',
    verdictDefault: 'Cabe?',
    verdictHint: 'Introduza as medidas para verificar a compatibilidade espacial.',
    verdictYes: 'SIM, CABE!',
    verdictNo: 'NÃO CABE',
    fitDirect: 'O móvel cabe perfeitamente de forma direta.',
    fitDiagonal3d: 'Cabe inclinado diagonalmente (Pitágoras 3D).',
    fitDiagonalPlane: 'Cabe inclinado num dos planos laterais.',
    fitNope: 'O móvel é demasiado grande mesmo para entrar em diagonal.',
    diagLabel: 'Diagonal Máxima (Pitágoras 3D):',
    objLabel: 'Móvel',
  },
};
