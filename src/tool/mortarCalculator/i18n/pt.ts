import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-argamassas';
const title = 'Proporções Argamassas de Cal Tradicionais: Emboço e Reboco';
const description = 'Calculadora gratuita para argamassas de cal e areia. Obtenha as proporções exatas para emboço, reboco e acabamento segundo métodos tradicionais (Vitrúvio).';

const faqData = [
  {
    question: 'Porquê usar cal em vez de cimento?',
    answer: 'A cal é um material "vivo" e respirável que permite a evacuação do vapor de água, evitando humidades por condensação. Além disso, é mais flexível que o cimento, o que reduz o aparecimento de fissuras em muros antigos.',
  },
  {
    question: 'Qual é a proporção ideal para um emboço?',
    answer: 'Segundo a tradição vitruviana, para areia de rio limpa usa-se uma proporção de 1:3 (uma parte de cal para três de areia). Para areia de mina, recomenda-se 1:2 para assegurar a coesão da argamassa.',
  },
  {
    question: 'O que é o reboco fino ou acabamento?',
    answer: 'É a última camada do muro. Usa-se uma areia muito mais fina (por vezes pó de mármore) e uma maior proporção de cal para obter um acabamento liso e sedoso que pode ser pintado ou deixado ao natural.',
  },
  {
    question: 'Quanto tempo demora a endurecer a argamassa de cal?',
    answer: 'A cal aérea endurece por carbonatação (absorvendo CO2 do ar). O processo inicial de presa é de alguns dias, mas a dureza máxima é atingida meses depois, ganhando resistência com o passar dos anos.',
  },
];

const howToData = [
  { name: 'Identificar o tipo de suporte', text: 'Verifique se vai trabalhar sobre pedra, tijolo antigo ou bloco. O suporte deve estar limpo e ligeiramente húmido.' },
  { name: 'Escolher a granulometria da areia', text: 'Use areia grossa para a camada de ligação e areia fina para o acabamento cosmético. A pureza da areia define a qualidade da argamassa.' },
  { name: 'Mistura de componentes', text: 'Misture a cal e a areia a seco antes de adicionar água. A consistência deve ser plástica, não líquida.' },
  { name: 'Aplicação e afagamento', text: 'Estenda a argamassa com talocha e use um boneco para igualar a superfície quando a argamassa começar a puxar (endurecer superficialmente).' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Tratado das Argamassas: A Sabedoria de Vitrúvio', level: 2 },
    { type: 'paragraph', html: 'Marco Vitrúvio Polião, no Livro VII do seu <em>De Architectura</em>, não descreveu apenas técnicas, mas uma filosofia. Entendia que a eternidade de um edifício reside nas suas uniões. A argamassa não é mero colante; é o tecido conjuntivo. As suas proporções (1:3, 1:2, 1:1) são o legado de séculos de observação empírica romana, procurando o equilíbrio perfeito entre resistência e flexibilidade.' },
    { type: 'title', text: 'Granulometria do Árido: A Chave da Qualidade', level: 3 },
    { type: 'paragraph', html: 'A qualidade de uma argamassa de cal depende em grande medida da granulometria do árido. Para o <strong>Trullissatio</strong> (emboço base), usa-se areia grossa de rio de 2-5 mm. Para o <strong>Arenato</strong> (camada intermédia), areia média lavada de 0,5-2 mm. Para o <strong>Marmorato</strong> (acabamento fino), pó de mármore menor de 0,5 mm.' },
    { type: 'title', text: 'O Mistério da Aderência Mecânica', level: 3 },
    { type: 'paragraph', html: 'A aderência não é química, é <strong>mecânica</strong>. Imagine milhões de raízes microscópicas. A argamassa deve penetrar nos poros do tijolo para criar uma "chave" física. Sem porosidade, não há ancoragem.' },
  ],
  ui: {
    leftTitle: 'Sistema Vitruviano',
    centerTitle: 'Materiais Disponíveis',
    rightTitle: 'Cobertura Estimada',
    btnCal: 'Cal',
    btnArena: 'Areia',
    labelCalPasta: 'Pasta (1.30 kg/L)',
    labelCalPolvo: 'Pó NHL (0.65 kg/L)',
    labelQuantity: 'Quantidade disponível:',
    labelNeedsAlso: 'Irá necessitar também:',
    labelProportion: 'Proporção: ',
    labelCoverage: 'Cobertura:',
    labelThickness: 'Espessura total:',
    labelLayers: 'Camadas:',
    labelWasteFactor: 'Factor de quebra: 20%',
    layersSingular: 'demão',
    layersPlural: 'demãos',
    layersSingularShort: 'demão',
    layersPluralShort: 'demãos',
    materialCal: 'Cal',
    materialArena: 'Areia',
    materialMarmol: 'Mármore',
    phaseDescTrullissatio: 'Camada base rugosa. 2 demãos de 15mm. Proporção 1:3 (Cal:Areia de rio).',
    phaseDescArenato: 'Camada intermédia. 2 demãos de 8mm. Proporção 1:2 (Cal:Areia lavada).',
    phaseDescMarmorato: 'Acabamento fino. 1 demão dupla de 4mm. Proporção 1:1 (Cal:Pó de mármore).',
    granulometryTitle: 'Granulometria do Árido',
    grainTitleCoarse: 'Areia Grossa',
    grainSubtitleCoarse: 'Areia de Rio',
    grainUsageCoarse: 'Emboço base',
    grainTitleMedium: 'Areia Média',
    grainSubtitleMedium: 'Areia Lavada',
    grainUsageMedium: 'Camada intermédia',
    grainTitleFine: 'Pó Fino',
    grainSubtitleFine: 'Pó de Mármore',
    grainUsageFine: 'Acabamento fino',
    specSize: 'Tamanho:',
    specUse: 'Uso:',
    specDensity: 'Densidade:',
  },
};
