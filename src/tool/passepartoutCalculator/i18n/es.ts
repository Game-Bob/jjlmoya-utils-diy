import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-passepartout';
const title = 'Calculadora Passepartout: Márgenes con Corrección Óptica para Enmarcado';
const description =
  'Herramienta para calcular márgenes de passepartout con corrección óptica (bottom weighting). Enmarca tus fotografías y arte con proporciones de galería.';

const faqData = [
  {
    question: '¿Qué es la corrección de centro óptico (Bottom Weighting)?',
    answer:
      "Es un principio de diseño gráfico y enmarcado donde el margen inferior se hace ligeramente más ancho que los demás. Esto corrige la ilusión óptica que hace que el centro geométrico parezca estar 'caído' cuando se mira una obra colgada.",
  },
  {
    question: '¿De qué material debe ser el passepartout?',
    answer:
      'Para conservación artística, debe ser cartón libre de ácido o de pH neutro (alfa-celulosa o algodón). Los cartones baratos amarillean con el tiempo y pueden dañar la obra debido a la lignina.',
  },
  {
    question: '¿Cómo elijo el color del margen?',
    answer:
      'El blanco roto o crema suave son los estándares que no distraen de la obra. Un margen oscuro puede resaltar los blancos de una fotografía, mientras que un margen de color debe usarse con cuidado para no competir con los tonos de la pieza.',
  },
  {
    question: '¿Cuál es el ancho de margen ideal?',
    answer:
      'Un estándar profesional es entre 5 y 8 cm. Si el margen es demasiado estrecho, la obra parece "asfixiada". Si es muy ancho, puede dar un aire heroico y minimalista a obras pequeñas.',
  },
];

const howToData = [
  {
    name: 'Medir la obra de arte',
    text: 'Mide el ancho y alto exacto del papel o lienzo que vas a enmarcar. Descuenta unos milímetros si quieres que el passepartout monte un poco sobre la imagen.',
  },
  {
    name: 'Medir el interior del marco',
    text: 'Toma las dimensiones internas del marco o rebaje donde encajará el cartón del passepartout.',
  },
  {
    name: 'Activar corrección óptica',
    text: 'Marca la opción en nuestra calculadora si quieres que el margen inferior sea automáticamente mayor para un acabado profesional.',
  },
  {
    name: 'Cortar el cartón',
    text: 'Usa las medidas resultantes para cortar el hueco (ventana) y el exterior del cartón, preferiblemente con un cúter de 45 grados para un bisel limpio.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Ciencia del Enmarcado Perfecto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un <strong>Passepartout</strong> (o marialuisa) no es solo un cartón decorativo; es el pulmón que permite respirar a tu obra de arte. Esta calculadora te ayuda a determinar las dimensiones exactas para cortar tu cartón, asegurando que la obra quede perfectamente centrada o equilibrada ópticamente dentro del marco.',
    },
    {
      type: 'title',
      text: '¿Por qué el "Peso Inferior" o Bottom Weighting?',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:eye-outline',
      title: 'La ilusión óptica del centro geométrico',
      html: '<p>El ojo humano tiende a percibir el centro vertical geométrico como si estuviera ligeramente más bajo de lo que realmente está. Si enmarcas una obra exactamente en el centro, parecerá que se está "cayendo".</p><p>El <strong>Bottom Weighting</strong> (peso inferior) corrige esta ilusión óptica dejando un margen inferior ligeramente mayor, elevando la obra visualmente para que parezca perfectamente centrada.</p>',
    },
    {
      type: 'title',
      text: 'Materiales de Conservación para Passepartout',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:palette-swatch-outline',
      title: 'El cartón sin ácido para conservación',
      html: '<p>Al elegir tu cartón, busca siempre términos como <strong>"Acid-Free"</strong> (libre de ácido) o <strong>"Museum Quality"</strong>. Los cartones baratos de pulpa de madera pueden amarillear con el tiempo y liberar ácidos que quemarán tu obra de arte (foxing), arruinándola irreversiblemente.</p>',
    },
    {
      type: 'title',
      text: 'Consejos de Medición Profesional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Mide la Ventana, no el Exterior:</strong> Si ya tienes el marco, mide el hueco interior (el "rebajo") por la parte trasera, no por el frente del cristal.',
    },
    {
      type: 'paragraph',
      html: '<strong>La Solapa de Seguridad:</strong> La ventana del passepartout debe ser un poco más pequeña que la obra (aprox. 5mm por lado) para que la imagen no se "cuele" por el agujero.',
    },
    {
      type: 'card',
      icon: 'mdi:ruler',
      title: 'Regla de Oro del enmarcado',
      html: '<p>Nunca dejes menos de 5cm de margen si quieres que la obra respire. Los márgenes generosos denotan elegancia y valor. Un margen ancho convierte una pequeña acuarela en una pieza de museo.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensiones',
    sectionDesc: 'Introduce las medidas en centímetros.',
    frameSizeTitle: 'Tamaño del Marco',
    artSizeTitle: 'Tamaño de la Obra',
    labelWidth: 'Ancho (cm)',
    labelHeight: 'Alto (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Aplica más margen inferior para equilibrio visual',
    labelOffset: 'Desplazamiento (%)',
    errorMsg: 'El tamaño de la obra debe ser menor que el marco.',
    labelTop: 'Superior',
    labelBottom: 'Inferior',
    labelLeft: 'Izq',
    labelRight: 'Der',
    artPlaceholder: 'Tu Obra',
  },
};
