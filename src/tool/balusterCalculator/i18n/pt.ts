import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-balaustres';
const title = 'Calculadora de Balaústres: Espaçamento Exato para Guardas';
const description =
  'Calcule o espaço exato entre barras ou balaústres para guardas de proteção cumprindo a norma dos 10 cm. Planos automáticos.';

const faqData = [
  {
    question: 'Qual é a distância máxima legal entre balaústres?',
    answer:
      'Na maioria das normas internacionais, o espaço livre entre os elementos de uma guarda não deve permitir a passagem de uma esfera de 10 cm de diâmetro para evitar acidentes com crianças.',
  },
  {
    question: 'Como se mede o espaçamento: entre centros ou vãos?',
    answer:
      "A nossa calculadora fornece ambos. O 'espaçamento livre' é o vão real entre barras (vital por segurança), enquanto a 'distância entre centros' (on-center) é a que marca onde furar ou fixar cada balaústre.",
  },
  {
    question: 'O que acontece se a distribuição não for exata?',
    answer:
      'A calculadora ajusta automaticamente o número de barras para que o primeiro e o último vão sejam idênticos, garantindo a simetria visual e o cumprimento estrito do vão máximo permitido.',
  },
  {
    question: 'É melhor soldar ou aparafusar os balaústres?',
    answer:
      'Depende do material. Em aço, a soldadura oferece máxima rigidez estrutural. Em madeira ou alumínio, usam-se fixações mecânicas ou parafusos passantes. O importante é que a guarda suporte uma força horizontal de pelo menos 0.8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Medir a largura total',
    text: 'Meça a distância exata entre o primeiro e o último poste onde será instalada a guarda.',
  },
  {
    name: 'Definir a espessura do balaústre',
    text: 'Meça a largura de uma barra individual (ex: 2x2 cm para tubo quadrado ou o diâmetro se for redondo).',
  },
  {
    name: 'Estabelecer o vão máximo',
    text: 'Indique a separação máxima desejada (recomendado 10 cm para cumprir a norma).',
  },
  {
    name: 'Obter marcas de instalação',
    text: 'Reveja a lista de posições exatas para realizar as furações e assegurar uma distribuição simétrica e segura.',
  },
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guia Definitivo: Como Calcular o Espaçamento de Balaústres para Guardas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Projetar uma guarda segura e esteticamente perfeita é uma arte que combina a precisão matemática com as normas de construção. Seja para um terraço, uma varanda ou uma escada interior, o cálculo correto dos balaústres (ou barras) é o passo mais crítico do projeto. Um erro de cálculo não só arruína a simetria visual, como pode tornar a sua estrutura ilegal e insegura.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Por que é que este cálculo é tão importante?',
      html: '<p>Não se trata apenas de "preencher o vazio". Trata-se de cumprir a <strong>Regra da Esfera de 4 Polegadas (10 cm)</strong>, uma norma internacional de segurança desenhada para evitar acidentes infantis.</p>',
    },
    {
      type: 'title',
      text: '1. A Normativa de Segurança: A Regra dos 10 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de cortar a primeira peça de madeira ou metal, deve entender o "porquê" da matemática. O Regulamento Geral das Edificações Urbanas (RGEU) em Portugal, assim como o IRC (International Residential Code) nos Estados Unidos, estabelecem uma norma clara: <em>"O espaço livre entre os elementos verticais não deve permitir a passagem de uma esfera de 10 cm (4 polegadas) de diâmetro."</em>',
    },
    {
      type: 'paragraph',
      html: 'Esta medida não é arbitrária. É o diâmetro médio da cabeça de uma criança pequena (geralmente com menos de 1 ano). Se uma criança consegue passar o corpo mas a cabeça fica presa, o risco de asfixia é altíssimo. Se conseguir passar a cabeça, pode cair no vazio. Portanto, o objetivo da nossa <strong>Calculadora de Balaústres</strong> não é apenas estético, é salvar vidas.',
    },
    {
      type: 'title',
      text: '2. O Problema Matemático: O Erro do Poste da Cerca',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Em programação e construção, existe um problema clássico chamado <em>"Fencepost Error"</em> (Erro do Poste da Cerca). Se quer construir uma vedação de 10 metros com postes a cada metro, quantos postes precisa? A resposta intuitiva é 10, mas a correta é 11.',
    },
    {
      type: 'paragraph',
      html: 'Com os balaústres ocorre algo semelhante, mas mais complexo, porque a largura do próprio balaústre ocupa espaço. A fórmula que utiliza a nossa ferramenta resolve este sistema de equações por si:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Passo A: Calcular Vãos',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Primeiro determinamos quantos balaústres cabem teoricamente se usássemos o espaço máximo permitido. Arredondamos este número para cima para assegurar que os vãos resultantes sejam <em>menores</em> que o máximo.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Passo B: Recalcular Espaço Exato',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Assim que sabemos o número exato de balaústres (n), calculamos quanto espaço "sobra" se subtrairmos a largura de todo o material, e dividimo-lo equitativamente entre os vãos (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Guia Passo a Passo para a Instalação Perfeita',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ter os números é apenas metade da batalha. Aqui explicamos como trasladar esses valores do papel (ou do ecrã) para a realidade da sua obra.',
    },
    {
      type: 'title',
      text: 'Passo 1: Medição de Precisão',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Meça a distância <strong>interna</strong> entre poste e poste. Não meça a partir do centro do poste. Precisa de saber o espaço luz exato que vai preencher (L). Se a sua guarda tem vários lances, meça cada um individualmente; as construções raramente são perfeitamente esquadriadas e um erro de 0.5 cm pode arruinar a simetria.',
    },
    {
      type: 'title',
      text: 'Passo 2: Encontrar o Centro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O erro de principiante número um é começar a colocar balaústres de uma extremidade para a outra. Isto quase sempre resulta num último vão de tamanho estranho, quebrando a harmonia visual.<ul><li>Marque o <strong>centro exato</strong> da guarda (L / 2).</li><li>Decida se quer que no centro haja um <em>balaústre</em> ou um <em>vão</em>.</li><li>Se quer um balaústre no centro: marque metade da largura do balaústre para cada lado da sua marca central.</li><li>Se quer um vão no centro: marque metade da distância do vão (g / 2) para cada lado.</li></ul>',
    },
    {
      type: 'title',
      text: 'Passo 3: Fabricar um Separador (Spacers)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Não use a fita métrica para cada balaústre. O erro humano acumulado fará com que o último balaústre esteja desviado vários centímetros. O profissional é cortar um bloco de madeira (ou dois) com a medida exata do vão (g) que lhe foi dada pela nossa calculadora.',
    },
    {
      type: 'paragraph',
      html: 'Use este bloco como molde físico. Coloque um balaústre, ponha o bloco, coloque o seguinte balaústre apertado contra o bloco, e fixe-o. Isto garante uma consistência milimétrica.',
    },
    {
      type: 'title',
      text: '4. Materiais e Ferramentas Necessárias',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Equipamento para um acabamento profissional',
      html: '<ul><li>Fita métrica de alta precisão</li><li>Lápis de carpinteiro</li><li>Nível de bolha (para a verticalidade)</li><li>Serra de meia esquadria (para cortes limpos)</li><li>Berbequim e parafusos para madeira</li><li>Blocos separadores (feitos à medida)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Perguntas Técnicas Adicionais',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'O que acontece se o último vão não encaixar?',
      html: '<p>Se usou a nossa calculadora, isto não deveria acontecer. No entanto, no mundo real, a madeira curva e os postes não estão sempre direitos. Se ao chegar ao fim lhe sobrar ou faltar 1-2 mm, é impercetível. Se lhe faltar 1 cm, reveja os seus blocos separadores, provavelmente foi acumulando erros em cada passo.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Posso colocar os balaústres mais separados se não tiver crianças?',
      html: '<p>Legalmente, não. O código de construção aplica-se à habitação, não aos habitantes atuais. Se algum dia vender a casa, uma guarda fora da norma será um problema na inspeção. Além disso, as visitas (sobrinhos, netos) podem estar em perigo.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Madeira, Metal ou Vidro?',
      html: '<p>Esta calculadora funciona para <strong>qualquer elemento vertical repetitivo</strong>. Se usar cabos de aço horizontais, a normativa é diferente (normalmente não devem permitir escalar, "efeito escada"). Para vidro, é considerado um painel contínuo e não se aplica espaçamento, mas sim resistência ao impacto.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"A arquitetura é a vontade da época traduzida em espaço."</em></p><p>Esperamos que esta ferramenta o ajude a construir espaços mais seguros e belos. Lembre-se sempre de consultar o código de construção local do seu município, já que pode haver variações específicas sobre a altura mínima (geralmente 90-110 cm) ou cargas de força.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensões',
    sectionDesc: 'Insira as medidas da sua guarda',
    labelRailLength: 'Comprimento Total (L)',
    labelBalusterWidth: 'Largura Balaústre (w)',
    labelMaxGap: 'Vão Máximo (g)',
    blueprintTitle: 'Plano de Montagem',
    blueprintRef: 'REF: BAL-001 // ESCALA: AUTO',
    labelRequired: 'Balaústres Necessários',
    labelExactGap: 'Vão Exato',
    labelOnCenter: 'Centro a Centro',
    labelTotalSpaces: 'Espaços Totais',
    labelCoveredLength: 'Comprimento Coberto',
    labelDisclaimer: '* As dimensões mostradas são aproximadas para visualização.',
  },
};
