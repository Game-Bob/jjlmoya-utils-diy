import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conversor-fracoes-polegadas-milimetros';
const title = 'Conversor de Frações para Milímetros para Oficina';
const description = 'Converta medidas de polegadas fracionárias em milímetros instantaneamente. Encontre os parafusos, porcas e chaves padrão mais próximos para sua oficina. Projetado para mãos sujas e dedos com luvas.';

const faqData = [
  {
    question: 'Por que preciso converter frações em milímetros?',
    answer: 'A maioria das ferramentas e fixadores modernos usa o sistema métrico, mas muitas ferramentas antigas e especificações ainda usam polegadas fracionárias. Este conversor preenche essa lacuna, ajudando você a encontrar o equivalente métrico exato ou o tamanho de fixador padrão mais próximo.',
  },
  {
    question: 'Qual é a diferença entre 1/2 polegada e 12,7 mm?',
    answer: '1/2 polegada equivale exatamente a 12,7 milímetros (0,5 × 25,4 = 12,7). Ferramentas métricas e imperiais são frequentemente intercambiáveis em tamanhos padrão porque os fabricantes alinham os tamanhos comuns de parafusos em ambos os sistemas.',
  },
  {
    question: 'Por que a ferramenta mostra o "fixador mais próximo"?',
    answer: 'Porque as conversões exatas muitas vezes caem entre os tamanhos padrão de fixadores. A ferramenta encontra o parafuso ou chave comercial mais próximo da sua medida, para que você possa usar o que estiver disponível na sua oficina.',
  },
  {
    question: 'Qual é a diferença entre a precisão para carpintaria e metalurgia?',
    answer: 'Na carpintaria, diferenças de 0,5 mm são frequentemente insignificantes. Na metalurgia e usinagem, 0,1 mm faz diferença. O modo de precisão indica faixas de tolerância aceitáveis para o seu material.',
  },
  {
    question: 'Posso usar esta ferramenta offline?',
    answer: 'Sim. Todos os cálculos acontecem no seu navegador. A ferramenta funciona completamente offline após o primeiro carregamento, perfeita para uso na oficina sem WiFi.',
  },
  {
    question: 'Por que a ferramenta inclui um histórico?',
    answer: 'Ao trabalhar em uma desmontagem ou em um projeto com várias peças, o histórico permite consultar medidas sem digitá-las novamente e ajuda a construir uma lista de peças enquanto você trabalha.',
  },
];

const howToData = [
  {
    name: 'Selecione o tipo de medição',
    text: 'Escolha "Direta" para converter uma fração em milímetros, ou "Inversa" para encontrar a fração de uma medida que você tirou com um paquímetro.',
  },
  {
    name: 'Insira a medida',
    text: 'Use a entrada de três colunas (inteiro, numerador, denominador) ou toque em um botão de ajuste rápido. Os botões de ajuste permitem alterar os valores sem digitar.',
  },
  {
    name: 'Analise os resultados',
    text: 'O resultado mostra a conversão exata, além dos tamanhos de parafusos e chaves padrão mais próximos. A escala visual ajuda a ter uma noção de proporção.',
  },
  {
    name: 'Salve no histórico',
    text: 'Clique em "Salvar no Histórico" para guardar as medições para referência futura. O histórico permanece no seu navegador, mesmo depois de fechá-lo.',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'Como usar', type: 'howto', schema: howToSchema },
    { title: 'Aplicação', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: 'Tipo de Medição',
    labelWhole: 'Inteiro',
    labelNumerator: 'Numerador',
    labelDenominator: 'Denominador',
    labelInches: 'Polegadas',
    labelMillimeters: 'Milímetros',
    resultTitle: 'Resultado da Conversão',
    resultFraction: 'Fração',
    resultInches: 'Polegadas',
    resultMillimeters: 'Milímetros',
    matchTitle: 'Fixador Padrão mais Próximo',
    matchClosestFastener: 'Tamanho de parafuso ou porca padrão',
    matchClosestSocket: 'Tamanho de chave ou soquete padrão',
    matchDifference: 'Diferença para sua medição',
    matchRecommendation: 'Use este tamanho se disponível',
    reverseSearchTitle: 'Busca Inversa',
    reverseSearchLabel: 'Medida Tirada (mm)',
    reverseSearchButton: 'Encontrar Fração',
    reverseSearchHint: 'Meça com um paquímetro e insira o valor',
    unitMm: 'mm',
    unitInch: 'pol',
    modeForward: 'Fração → Métrico',
    modeReverse: 'Métrico → Fração',
    precisionLabel: 'Modo de Precisão',
    precisionCarpentry: 'Carpintaria',
    precisionMetal: 'Metalurgia',
    buttonConvert: 'Converter',
    buttonClear: 'Limpar',
    buttonCopyResult: 'Copiar Resultado',
    buttonSaveToHistory: 'Salvar no Histórico',
    historyTitle: 'Histórico',
    historyEmpty: 'Nenhuma medição ainda',
    historyRemove: 'Remover',
    helpText: 'Selecione uma medida ou insira uma fração para começar.',
    toolOverline: 'Ferramentas de Oficina',
    labelVisualReference: 'Referência Visual (1 polegada = 96px)',
  },
};
