import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'calculadora-argila';
const title = 'Calculadora de Contração de Argila: Dimensões Exatas para Cerâmica';
const description =
  'Calcule a contração da argila na secagem e cozedura. Desenhe peças cerâmicas com as dimensões finais exatas.';

const faqData = [
  {
    question: 'Por que é que a argila contrai?',
    answer:
      'A argila contrai principalmente devido à perda de água. Primeiro ocorre a secagem (evaporação da água entre as partículas) e depois a cozedura (eliminação da água quimicamente combinada e sinterização das partículas).',
  },
  {
    question: 'Qual é a percentagem de contração normal?',
    answer:
      'Depende da pasta cerâmica. O barro comum (faiança) costuma contrair entre 5-10%, enquanto o grés e a porcelana podem chegar aos 12-15% devido à sua maior vitrificação.',
  },
  {
    question: 'Como meço a contração da minha própria argila?',
    answer:
      'Crie uma placa de teste com exatamente 10 cm. Deixe-a secar e meça-a (contração de secagem). Coza-a à temperatura final e volte a medir (contração total). A diferença dar-lhe-á a percentagem exata.',
  },
  {
    question: 'O que acontece se a minha peça rachar ao secar?',
    answer:
      'Geralmente indica uma secagem demasiado rápida ou desigual. As zonas finas perdem água antes das grossas, gerando tensões. Cubra as peças com plástico para abrandar o processo.',
  },
];

const howToData = [
  {
    name: 'Medir a peça em húmido',
    text: 'Tome as dimensões exatas da sua peça logo após o trabalho no torno ou modelação, quando ainda tem toda a sua humidade.',
  },
  {
    name: 'Introduzir o coeficiente de contração',
    text: 'Procure na embalagem da sua argila a percentagem de contração total (secagem + cozedura) fornecida pelo fabricante.',
  },
  {
    name: 'Obter dimensões finais esperadas',
    text: 'Use a calculadora para saber quanto medirá a sua peça após passar pelo forno e planeie os seus encaixes ou tampas de acordo.',
  },
  {
    name: 'Cálculo inverso para objetivos',
    text: 'Se precisar que a sua peça meça exactamente X cm no final, use o cálculo inverso para saber que tamanho deve ter no torno.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'The Potter\'s Dictionary - Clay Shrinkage',
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Física da Argila: Contração e Expansão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A argila é um material vivo que muda de tamanho durante todo o processo cerâmico. Desde o momento em que molda uma peça húmida até que sai do forno, pode perder entre 8% e 15% do seu tamanho original. Calcular esta contração é fundamental para criar peças com as dimensões exatas de que necessita.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Fases de Contração',
          html: '<p><strong>1. Secagem (Húmido → Seco):</strong> Ao perder água, as partículas de argila aproximam-se. Esta é a maior contração (4-8%). As peças grossas podem rachar se secarem demasiado depressa.</p><p><strong>2. Cozedura (Seco → Chacota):</strong> Entre 900-1000°C, a argila sofre mudanças químicas irreversíveis. Contração adicional de 2-4%. A peça torna-se porosa mas resistente.</p><p><strong>3. Vitrificação (Alta Temperatura):</strong> A 1200-1300°C, a argila vitrifica. Contração final de 1-3%. O grés e a porcelana alcançam a sua densidade máxima.</p>',
        },
        {
          type: 'card',
          title: 'Variáveis que Afetam',
          html: '<ul><li><strong>Tipo de argila:</strong> As argilas vermelhas contraem menos (8-10%) que as porcelanas (12-15%).</li><li><strong>Espessura de parede:</strong> Paredes finas contraem de forma mais uniforme que as grossas.</li><li><strong>Temperatura de cozedura:</strong> Quanto maior a temperatura, maior a contração e vitrificação.</li><li><strong>Conteúdo de chamote:</strong> Adicionar chamote (argila já cozida moída) reduz a contração.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Aplicações Práticas',
      level: 2,
    },
    {
      type: 'title',
      text: 'Design de Moldes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se precisar de uma chávena com 8 cm de diâmetro final e a sua argila contrair 12%, deve fazer o molde com <strong>9,1 cm</strong>. Este cálculo inverso é crítico na produção em série.',
    },
    {
      type: 'title',
      text: 'Tampas e Assemblagens',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando cria peças que devem encaixar (bule + tampa, frasco + tampa), ambas devem ser feitas com a mesma argila e cozidas juntas para garantir que contraiam por igual. Uma diferença de 1% pode arruinar o ajuste.',
    },
    {
      type: 'title',
      text: 'Escultura Monumental',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Em peças grandes, a contração diferencial entre zonas grossas e finas pode causar fendas. Os ceramistas experientes compensam deixando as paredes mais grossas em zonas que sabem que irão contrair mais.',
    },
  ],
  ui: {
    labelInitialSize: 'Tamanho Inicial (mm)',
    labelShrinkage: 'Percentagem de Contração (%)',
    labelLow: 'Baixa (Terracota)',
    labelMedium: 'Média (Grés)',
    labelHigh: 'Alta (Porcelana)',
    presetTerracota: 'Terracota (8%)',
    presetGres: 'Grés (12%)',
    presetPorcelana: 'Porcelana (15%)',
    labelResult: 'Resultado',
    labelFinalSize: 'Tamanho Final:',
    labelLoss: 'Perda Total:',
    tipText:
      'Para calcular o tamanho inicial necessário para obter um tamanho final específico, divida o tamanho desejado por (1 - contração/100).',
    labelInitialBadge: 'Inicial:',
    labelFinalBadge: 'mm final',
    labelLossBadge: 'Perda:',
    labelInitialArea: 'Área Inicial',
    labelFinalArea: 'Área Final',
  },
};
