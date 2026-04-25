import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'otimizador-corte';
const title = 'Otimizador de Cortes de Ripas e Painéis';
const description =
  'Calculadora gratuita para otimizar cortes em madeira, metal ou tubagens. Minimize o desperdício com o algoritmo Bin Packing 1D e 2D. Ideal para carpintaria, serralharia e reformas.';

const faqData = [
  {
    question: 'O que é um otimizador de corte 1D?',
    answer:
      'É uma ferramenta que utiliza algoritmos matemáticos (como o Bin Packing Problem) para determinar como cortar peças mais pequenas de uma peça longa padrão (ripa, perfil, tubo) com o mínimo desperdício possível.',
  },
  {
    question: 'Por que incluir a espessura do corte (Kerf)?',
    answer:
      'Cada vez que a serra corta o material, são consumidos alguns milímetros (normalmente entre 2mm e 4mm conforme o disco). Se não calcular este espaço, as últimas peças da sua lista ficarão mais curtas do que o planeado.',
  },
  {
    question: 'Posso misturar peças de diferentes comprimentos?',
    answer:
      'Sim, a nossa calculadora aceita qualquer combinação de comprimentos e quantidades. O algoritmo avaliará todas as combinações possíveis e priorizará o aproveitamento máximo do material de stock.',
  },
  {
    question: 'Como guardo o meu plano de corte?',
    answer:
      'Uma vez otimizado, pode imprimir a página ou fazer uma captura de ecrã do esquema visual. Isto servirá de guia físico na oficina para não confundir a ordem dos cortes.',
  },
];

const howToData = [
  {
    name: 'Definir o material base (Stock)',
    text: 'Introduza o comprimento total da ripa ou perfil disponível (ex. 2400mm ou 6000mm).',
  },
  {
    name: 'Configurar a espessura do disco (Kerf)',
    text: 'Ajuste os milímetros que a serra remove em cada passo para que o cálculo seja milimétrico.',
  },
  {
    name: 'Listar as peças desejadas',
    text: 'Escreva o comprimento e quantidade de cada peça de que necessita para o seu projeto.',
  },
  {
    name: 'Executar a otimização',
    text: 'Obtenha o esquema de corte mais eficiente e a percentagem exata de desperdício gerado.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
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
      text: 'Guia Definitiva de Otimização de Corte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La otimização de corte, conhecida tecnicamente como o <strong>Problema de Corte de Stock</strong>, é um dos desafios logísticos mais fascinantes na engenharia industrial. Para um projeto com 20 peças e 5 barras de stock, existem milhões de combinações possíveis. Um algoritmo computacional pode encontrar a solução ótima em milisegundos, reduzindo o desperdício habitual de 15% para menos de 5%.',
    },
    {
      type: 'title',
      text: 'Corte Linear 1D e Corte de Painel 2D',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Corte Linear para Ripas e Perfis',
      html: '<p>No <strong>corte linear (1D)</strong>, a otimização ocorre apenas numa dimensão: o comprimento. A largura do material é assumida constante. É ideal para madeira dimensional (ripas, vigas), perfis metálicos e de alumínio, tubagens de PVC ou cobre, e varões roscados.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Corte de Painel para Placas e Chapas',
      html: '<p>No <strong>corte de painel (2D)</strong>, gerem-se duas dimensões: largura e comprimento. A ferramenta utiliza algoritmos tipo guilhotina, onde cada corte vai de borda a borda. Ideal para painéis derivados (MDF, aglomerado), contraplacado, vidro, metacrilato e chapas metálicas.</p>',
    },
    {
      type: 'title',
      text: 'O Factor Crítico: A Espessura do Corte (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O <strong>Kerf</strong> é o material que se remove em cada corte. Um disco de serra padrão de mesa consome entre 3,0mm e 3,2mm por corte. Uma serra circular de mão consome 1,5 a 2,5mm. Um corte laser em metacrilato apenas 0,1 a 0,3mm. Ignorar o kerf num projeto com 10 cortes em ripas de 2400mm pode fazer com que perca entre 30mm e 32mm de material útil.',
    },
    {
      type: 'title',
      text: 'O Algoritmo Best Fit Decreasing',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Como Funciona o Otimizador por Dentro',
      html: '<p>O núcleo do otimizador usa a estratégia <strong>Best Fit Decreasing (BFD)</strong>: primeiro ordena todas as peças do maior ao menor comprimento (as grandes são mais difíceis de encaixar). Depois, para cada peça, procura a sobra existente onde caiba deixando o menor excedente possível. Só se não couber em nenhuma, abre uma nova barra virgem. Este processo reduz o desperdício numa ordem de magnitude em relação à seleção aleatória.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Linear (Barras)',
    modePanelLabel: 'Painel (Placas)',
    configTitle: 'Configuração Material',
    labelStockLength: 'Comprimento do Material (mm)',
    labelStockWidth: 'Largura do Material (mm)',
    labelKerf: 'Espessura da Folha / Kerf (mm)',
    cutsTitle: 'Lista de Cortes',
    placeholderLength: 'Compr.',
    placeholderWidth: 'Largura',
    placeholderQty: 'Quant.',
    btnRemoveTitle: 'Remover',
    statStockUsed: 'Material Usado',
    statTotalCuts: 'Cortes Totais',
    statWaste: 'Desperdício Total',
    statEfficiency: 'Eficiência',
    vizTitle: 'Visualização de Corte',
    emptyState: 'Adicione cortes e prima calcular para ver o plano de corte.',
    noValidCuts: 'Não foi possível gerar cortes válidos. Verifique as medidas.',
    noValidPanels: 'Não foi possível gerar painéis válidos. Verifique se as peças cabem na placa.',
    stockLabel: 'Material',
    panelLabel: 'Painel',
    wasteLabel: 'Desperdício:',
    effLabel: 'Efic:',
  },
};
