import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'afiamento-mestre-brocas';
const title = 'Afiamento Mestre de Brocas: Bitola de Precisão';
const description = 'Guia interativo para afiar brocas HSS. Bitola digital no ecrã para verificar ângulos de 118° e 135°. Calcula RPM e diagnostica erros de corte.';

const faqData = [
  {
    question: 'Posso colocar a broca diretamente sobre o ecrã?',
    answer: 'Sim, a ferramenta foi concebida para que possa apoiar o eixo da broca sobre a linha central da bitola digital e verificar a simetria dos gumes diretamente.',
  },
  {
    question: 'Como sei se o ângulo de incidência está correto?',
    answer: 'Ao rodar a broca, a parte traseira do gume deve ficar visivelmente mais baixa. Se vir que o metal brilha por igual em toda a ponta, é porque falta destalonar.',
  },
  {
    question: 'Que rotações devo usar após afiar?',
    answer: 'Depende do diâmetro; a nossa calculadora integrada dar-lhe-á o dado exato segundo o material que tenha selecionado no primeiro passo.',
  },
  {
    question: 'Qual é a diferença entre HSS e Metal Duro?',
    answer: 'O HSS (Aço Rápido) é mais económico e resistente a impactos. O Metal Duro suporta maiores velocidades mas é mais frágil. Para afiamento manual, o HSS é o padrão.',
  },
  {
    question: 'Necessito de equipamento especial para afiar?',
    answer: 'Uma pedra de esmeril rotativa de grão médio (120-150) é suficiente. O importante é manter a pedra equilibrada e plana para conseguir resultados consistentes.',
  },
];

const howToData = [
  { name: 'Selecionar Material', text: 'Escolha o metal ou material que vai furar para fixar o ângulo alvo e velocidade de corte.' },
  { name: 'Verificar Simetria', text: 'Apoie a broca no ecrã e certifique-se de que ambos os gumes coincidem com as linhas azuis.' },
  { name: 'Verificar o Calcanhar', text: 'Reveja visualmente que a parte traseira do gume não roça na peça de trabalho (ângulo de incidência).' },
  { name: 'Calcular RPM', text: 'Introduza o diâmetro e ajuste o seu berbequim à velocidade recomendada para o material selecionado.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Afiamento Mestre de Brocas: Técnica Profissional', level: 2 },
    { type: 'paragraph', html: 'O afiamento de brocas é uma das competências mais valiosas em qualquer oficina. Uma broca corretamente afiada melhora a qualidade do orifício, protege a vida útil das suas ferramentas elétricas e garante a segurança do operador.' },
    { type: 'title', text: 'Os Pilares do Afiamento: Ângulo de Ponta', level: 3 },
    { type: 'paragraph', html: 'O ângulo de ponta define como a broca ataca o material. Os ângulos padrão são 118° para aços macios, 135° para inoxidável e 140° para aços duros. Cada material requer um ângulo diferente para maximizar a penetração sem comprometer a resistência.' },
    { type: 'title', text: 'O Grande Esquecido: Ângulo de Incidência', level: 3 },
    { type: 'paragraph', html: 'O erro mais comum é ignorar o ângulo de incidência ou destalinhamento. Se a face traseira do gume estiver plana, a broca simplesmente roçará gerando calor extremo. A solução é rebentar ligeiramente a parte traseira do gume.' },
  ],
  ui: {
    labelMaterial: 'Material do trabalho',
    matSteel: 'Aço',
    matInox: 'Inox',
    matHard: 'Duros',
    matBrass: 'Latão',
    matPlastic: 'Plástico',
    matWood: 'Madeira',
    labelDiameter: 'Diâmetro da broca (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Velocidade',
    unitRpm: 'RPM',
    labelCooling: 'Corte',
    btnDiagnosis: 'Não corta bem? Diagnóstico',
    diagTitle: 'Diagnóstico de Falhas',
    diagClose: 'Fechar',
    diagIssue1: '1. Deita fumo e não atravessa',
    diagIssue1Desc: 'Falta Ângulo de Incidência. O metal atrás do gume roça na peça. Rebaixe a parte traseira para que o gume seja o ponto mais alto.',
    diagIssue2: '2. Furo excêntrico ou maior',
    diagIssue2Desc: 'A Ponta não está centrada. Os gumes têm comprimentos diferentes. Assegure que a ponta toca no centro exato da bitola.',
    diagIssue3: '3. Gumes queimados (Azuis)',
    diagIssue3Desc: 'Velocidade excessiva. Reveja o cálculo de RPM da ferramenta para este diâmetro e material.',
    gaugeInstruction: 'APOIE O EIXO NA LINHA VERTICAL',
  },
};
