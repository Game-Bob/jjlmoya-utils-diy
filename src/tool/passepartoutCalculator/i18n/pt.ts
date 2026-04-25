import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-de-passepartout';
const title = 'Calculadora Passepartout: Margens com Correção Ótica para Emolduramento';
const description = 'Ferramenta para calcular margens de passepartout com correção ótica (bottom weighting). Emoldure as suas fotografias e arte com proporções de galeria.';

const faqData = [
  {
    question: 'O que é a correção de centro ótico (Bottom Weighting)?',
    answer: 'É um princípio de design e emolduramento onde a margem inferior é ligeiramente mais larga que as outras. Isto corrige a ilusão ótica que faz com que o centro geométrico pareça estar "caído" quando se olha para uma obra pendurada.',
  },
  {
    question: 'De que material deve ser o passepartout?',
    answer: 'Para conservação artística, deve ser cartão livre de ácido ou de pH neutro (alfa-celulose ou algodão). Os cartões baratos amarelecem com o tempo e podem danificar a obra devido à lenhina.',
  },
  {
    question: 'Como escolho a cor da margem?',
    answer: 'O branco sujo ou creme suave são os padrões que não distraem da obra. Uma margem escura pode realçar os brancos de uma fotografia, enquanto uma margem colorida deve ser usada com cuidado para não competir com os tons da peça.',
  },
  {
    question: 'Qual é a largura de margem ideal?',
    answer: 'Um padrão profissional é entre 5 e 8 cm. Se a margem for demasiado estreita, a obra parece "asfixiada". Se for muito larga, pode dar um ar heroico e minimalista a obras pequenas.',
  },
];

const howToData = [
  { name: 'Medir a obra de arte', text: 'Meça a largura e altura exata do papel ou tela que vai emoldurar. Desconte uns milímetros se quiser que o passepartout monte um pouco sobre a imagem.' },
  { name: 'Medir o interior da moldura', text: 'Tome as dimensões internas da moldura ou rebaixo onde encaixará o cartão do passepartout.' },
  { name: 'Ativar correção ótica', text: 'Marque a opção na nossa calculadora se quiser que a margem inferior seja automaticamente maior para um acabamento profissional.' },
  { name: 'Cortar o cartão', text: 'Use as medidas resultantes para cortar o buraco (janela) e o exterior do cartão, preferencialmente com um x-ato de 45 graus para um bisel limpo.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'A Ciência do Emolduramento Perfeito', level: 2 },
    { type: 'paragraph', html: 'Um <strong>Passepartout</strong> não é apenas um cartão decorativo; é o pulmão que permite respirar à sua obra de arte. Esta calculadora ajuda-o a determinar as dimensões exatas para cortar o seu cartão, assegurando que a obra fique perfeitamente centrada ou equilibrada oticamente dentro da moldura.' },
    { type: 'title', text: 'Porquê o "Peso Inferior" ou Bottom Weighting?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'A ilusão ótica do centro geométrico', html: '<p>O olho humano tende a perceber o centro vertical geométrico como se estivesse ligeiramente mais baixo do que realmente está. Se emoldurar uma obra exatamente no centro, parecerá que se está "a cair".</p><p>O <strong>Bottom Weighting</strong> corrige esta ilusão ótica deixando uma margem inferior ligeiramente maior, elevando a obra visualmente para que pareça perfeitamente centrada.</p>' },
    { type: 'title', text: 'Materiais de Conservação para Passepartout', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'O cartão sem ácido para conservação', html: '<p>Ao escolher o seu cartão, procure sempre termos como <strong>"Acid-Free"</strong> ou <strong>"Museum Quality"</strong>. Os cartões baratos de polpa de madeira podem amarelecer com o tempo e libertar ácidos que queimarão a sua obra de arte (foxing), arruinando-a irreversivelmente.</p>' },
  ],
  ui: {
    sectionTitle: 'Dimensões',
    sectionDesc: 'Introduza as medidas em centímetros.',
    frameSizeTitle: 'Tamanho da Moldura',
    artSizeTitle: 'Tamanho da Obra',
    labelWidth: 'Largura (cm)',
    labelHeight: 'Altura (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Aplique mais margem inferior para equilíbrio visual',
    labelOffset: 'Deslocamento (%)',
    errorMsg: 'O tamanho da obra deve ser menor que a moldura.',
    labelTop: 'Sup',
    labelBottom: 'Inf',
    labelLeft: 'Esq',
    labelRight: 'Dir',
    artPlaceholder: 'A Sua Obra',
  },
};
