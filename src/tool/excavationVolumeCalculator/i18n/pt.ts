import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'calculadora-volume-escavacao-empolamento-solo';
const title = 'Calculadora de Volume de Escavação e Empolamento do Solo';
const description = 'Calcule o volume no banco (em estado natural) de uma escavação e estime o volume solto após escavar com uma faixa para areia, terra vegetal, argila e cascalho.';

const faq = [
  {
    question: 'Qual é a diferença entre volume no banco (in situ) e volume solto?',
    answer: 'O volume no banco é o volume do solo em estado natural antes de ser escavado. O volume solto é o espaço estimado que a terra ocupará após a escavação considerando o empolamento.',
  },
  {
    question: 'Como se calcula o volume de uma escavação?',
    answer: 'Multiplique o comprimento pela largura e pela profundidade. Por exemplo, uma vala de 4m por 3m com 0,5m de profundidade tem um volume no banco de 6 metros cúbicos.',
  },
  {
    question: 'Por que a argila exige uma faixa de empolamento maior?',
    answer: 'O comportamento da argila varia muito conforme a humidade e a densidade. A calculadora aplica uma faixa mais ampla para refletir essa variação volumétrica.',
  },
  {
    question: 'Esta calculadora substitui um estudo geotécnico?',
    answer: 'Não. O resultado é uma estimativa para planeamento de transporte e caçambas. Para fundações ou muros de suporte, consulte um engenheiro geotécnico.',
  },
];

const howTo = [
  { name: 'Inserir as dimensões da escavação', text: 'Insira o comprimento, a largura e a profundidade da escavação.' },
  { name: 'Selecionar o tipo de solo', text: 'Escolha areia, terra vegetal, argila ou cascalho para aplicar a taxa de empolamento correspondente.' },
  { name: 'Planear a logística de transporte', text: 'Utilize o volume no banco para a escavação e a faixa de volume solto para dimensionar camiões e caçambas.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq,
  bibliographyTitle: 'Fontes e notas técnicas',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dois volumes para duas necessidades de obra', level: 2 },
    { type: 'paragraph', html: 'O <strong>volume no banco</strong> (em estado in situ) representa a geometria exata da escavação em solo não alterado: comprimento multiplicado pela largura e pela profundidade. O <strong>volume solto</strong> representa o espaço real que o material escavado ocupará nos camiões, caçambas ou acopios temporários. Manter estes dois valores estritamente separados evita erros no planeamento de transporte e remoção de terras.' },
    { type: 'title', text: 'Usar a faixa solta para o planeamento de transporte', level: 3 },
    { type: 'paragraph', html: 'Selecione o perfil do solo mais representativo na calculadora e compare os limites inferior e superior do volume solto com a capacidade útil dos camiões e caçambas disponíveis. A faixa de valores é exibida intencionalmente porque o método de escavação, a humidade e a densidade do terreno alteram significativamente o resultado.' },
    { type: 'tip', title: 'O fator de empolamento não substitui o ensaio geotécnico', html: 'A humidade, o nível freático e o grau de compactação alteram o empolamento real do solo. Para obras de fundação, muros de suporte e gestão de terras contaminadas exige-se estudo de solos oficial.' },
    { type: 'title', text: 'Verificar hipóteses antes da contratação', level: 3 },
    { type: 'paragraph', html: 'Em solos heterogéneos ou incertos, faça a simulação com dois perfis plausíveis e dimensione a logística pelo valor mais conservador até dispor de medições no local.' },
  ],
  ui: {
    unitSystemLabel: 'Sistema de medição',
    unitMetric: 'Métrico',
    unitImperial: 'Imperial',
    onboarding: 'Insira as dimensões da escavação, selecione o solo e use os dois volumes para planear a obra e o transporte.',
    dimensionLabel: 'Dimensões da escavação',
    lengthLabel: 'Comprimento',
    widthLabel: 'Largura',
    depthLabel: 'Profundidade',
    soilLabel: 'Perfil do solo',
    soilSand: 'Areia',
    soilTopsoil: 'Terra vegetal',
    soilClay: 'Argila',
    soilGravel: 'Cascalho / Brita',
    soilSandBand: 'Empolamento de 10 a 15%',
    soilTopsoilBand: 'Empolamento de 15 a 25%',
    soilClayBand: 'Empolamento de 25 a 40%',
    soilGravelBand: 'Empolamento de 15 a 25%',
    bankVolumeLabel: 'Volume no banco',
    bankVolumeHelp: 'Solo in situ em estado natural',
    looseVolumeLabel: 'Volume solto',
    looseVolumeHelp: 'Faixa estimada após escavação',
    expansionLabel: 'Empolamento aplicado',
    expansionHelp: 'Faixa utilizada para o solo',
    sceneTitle: 'Da escavação ao bota-fora',
    sceneBank: 'no banco',
    sceneLoose: 'material solto',
    sceneGround: 'cota do terreno',
    sceneCut: 'vala escavada',
    interpretationTitle: 'Como interpretar os números.',
    interpretationText: 'O primeiro valor indica o volume da vala. A faixa solta indica o volume extra que a terra ocupará no transporte.',
    warning: 'Estimativa para planeamento logístico. Humidade e método de escavação alteram o volume solto real.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'empolamento baixo',
    soilStatusMedium: 'empolamento moderado',
    soilStatusHigh: 'empolamento elevado',
    soilStatusLabel: 'Faixa de planeamento',
  },
};
