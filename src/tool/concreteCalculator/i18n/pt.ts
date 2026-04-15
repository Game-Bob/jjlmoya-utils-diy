import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'calculadora-betao-argamassa';
const title = 'Calculadora de Betão e Argamassa: Quantidades Exatas de Cimento, Areia e Água';
const description =
  'Calcule quantos sacos de cimento, pás de areia e litros de água precisa por m³. Para alicerces, lajes, muros e betonilhas. Guia de dosagem técnica.';

const faqData = [
  {
    question: 'Quantos sacos de cimento de 25kg cabem num metro cúbico?',
    answer:
      'Para um betão padrão (resistência C20/25), são necessários aproximadamente 14 sacos de 25kg (350kg) para fabricar um metro cúbico de mistura compactada.',
  },
  {
    question: 'O que é mais forte, o betão ou a argamassa?',
    answer:
      'O betão (com brita/gravilha) é estruturalmente mais forte para suportar grandes cargas. A argamassa (apenas areia) é ideal para unir tijolos ou rebocar superfícies.',
  },
  {
    question: 'Quantas pás são um metro cúbico?',
    answer:
      'Depende do tamanho da pá, mas geralmente calculam-se 180-200 pás de areia por m³. A nossa calculadora traduz os m³ em pás sugeridas.',
  },
  {
    question: 'Posso fazer a mistura à mão sem betoneira?',
    answer:
      'Sim, embora exija muito mais esforço físico. O ideal é fazê-lo sobre uma superfície limpa e estanque (chapa metálica ou masseira) para não perder água.',
  },
  {
    question: 'Por que é que o betão racha ao secar?',
    answer:
      'Geralmente deve-se à falta de humidade durante a cura (perda rápida de água) ou excesso de água na mistura. Recomenda-se regar o betão nos dias posteriores.',
  },
];

const howToData = [
  {
    name: 'Escolha o Tipo de Mistura',
    text: 'Selecione se vai fazer betão para alicerces ou argamassa para muros.',
  },
  {
    name: 'Indique o Volume em m³',
    text: 'Introduza o volume total. Multiplique comprimento x largura x espessura.',
  },
  {
    name: 'Consulte as Quantidades',
    text: 'Veja quantos sacos, pás e litros precisa de comprar.',
  },
  {
    name: 'Aplique as Proporções',
    text: 'Siga o guia visual de cimento, areia e brita para uma mistura perfeita.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas',
  bibliography: [
    {
      name: 'Regulamento de Estruturas de Betão Armado e Pré-Esforçado (REBAP) - Portugal',
      url: 'http://www.lnec.pt/',
    },
    {
      name: 'Concrete Mix Proportioning Standards (ASTM)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: 'Guia de Dosagem de Argamassas de Cimento',
      url: 'https://pt.wikipedia.org/wiki/Argamassa',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guia de Dosagem para Betão e Argamassa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao enfrentar uma renovação ou construção, uma das perguntas mais recorrentes é <strong>quantos sacos de cimento preciso para um metro cúbico de betão?</strong>. Não se trata apenas de misturar ingredientes; a resistência final da estrutura depende diretamente da precisão nas proporções de cimento, areia, brita e água. A nossa calculadora traduz medidas industriais para unidades práticas de obra: sacos de 25kg, pás e litros.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'O Excesso de Água Enfraquece o Betão',
      html: '<p>Um erro muito comum é adicionar demasiada água para que o betão flua melhor. O excesso de água cria poros ao evaporar durante a cura, reduzindo drasticamente a resistência final. A consistência ideal deve ser como a de uma <strong>pasta espessa, não líquida</strong>. Use a mínima quantidade de água possível.</p>',
    },
    {
      type: 'title',
      text: 'Proporções Padrão segundo o Uso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A <strong>dosagem do betão</strong> varia segundo o uso. Para um <strong>Betão C20/25</strong> (alicerces e lajes) a proporção é 1 parte de cimento, 2.5 de areia e 3 de brita. Para a <strong>Argamassa de Alvenaria</strong> (muros e divisórias) é 1 parte de cimento e 4 de areia. Para a <strong>Betonilha</strong> (enchimentos de solo) é 1 parte de cimento e 3 de areia. O betão com brita suporta mais carga; a argamassa de apenas areia é ideal para unir e rebocar.',
    },
    {
      type: 'title',
      text: 'Como Calcular os m³ que Necessita',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Exemplo de Cálculo para uma Laje',
      html: '<p>Para uma laje de jardim com 4m de comprimento, 3m de largura e 15cm de espessura: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. A nossa calculadora realiza esta operação automaticamente se introduzir as dimensões na secção "Por Medidas".</p><p>Lembre-se sempre de <strong>comprar 10% adicional</strong> para compensar perdas por derramamento ou variações no terreno.</p>',
    },
    {
      type: 'title',
      text: 'Ordem de Mistura e Dosagem por Sacos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nas obras fala-se de <strong>"mistura a 300 quilos"</strong>: 300kg de cimento por cada metro cúbico de betão terminado. Para uma mistura correta em betoneira: primeiro a água, depois brita e areia (para desfazer grumos), e por último o cimento adicionado gradualmente.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'A Regra dos 10% para Evitar Faltas',
      html: '<p>Compre sempre <strong>10% mais de material</strong> do calculado para compensar perdas por derramamento, irregularidades no terreno ou variações no volume real dos inertes húmidos. É muito mais barato do que ter de fazer um segundo pedido com a obra parada.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Betão Padrão',
    mixH200Hint: 'Ideal para alicerces e lajes',
    mixM40Label: 'Argamassa de Alvenaria',
    mixM40Hint: 'Para muros e divisórias',
    mixM80Label: 'Betonilha Forte',
    mixM80Hint: 'Para solos e rebocos fortes',
    modeDimsLabel: 'Por Medidas',
    modeDirectLabel: 'm³ Diretos',
    labelLength: 'Comprimento',
    labelWidth: 'Largura',
    labelThickness: 'Espessura',
    labelVolume: 'Volume Total (m³)',
    binderCementLabel: 'Cimento',
    binderLimeLabel: 'Cal',
    summaryLabel: 'Total a preencher:',
    resUnitSacks: 'Sacos (25kg)',
    resUnitShovels: 'Pás',
    resUnitLitres: 'Litros',
    resLabelCement: 'Cimento Portland',
    resLabelLime: 'Cal Hidráulica',
    resLabelSand: 'Areia / Inertes',
    resLabelWater: 'Água Potável',
    proportionsTitle: 'Proporções da Mistura Selecionada',
    propLabelSand: 'Areia',
    propLabelGravel: 'Brita / Gravilha',
    adviceH200: 'Ideal para pilares, lajes e estruturas que suportam carga.',
    adviceM40: 'Perfeito para levantar muros de tijolo ou bloco.',
    adviceM80: 'Use isto para betonilhas de solo muito resistentes.',
    adviceLimeH200: 'O betão de cal é mais flexível mas demora mais tempo a secar.',
    priceTotalLabel: 'Orçamento Estimado',
    priceSackLabel: 'Saco',
    priceSandLabel: 'Areia (m³)',
    priceDisclaimer: 'Preços de mercado orientativos. Ajuste segundo o seu fornecedor local.',
  },
};
