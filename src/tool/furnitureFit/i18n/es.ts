import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';

const slug = 'calculadora-espacio-muebles';
const title = 'Calculadora de Espacio para Mudanzas y Muebles';
const description =
  'Comprueba si tu sofá, armario o mesa cabe en el ascensor o por la puerta. Usa el teorema de Pitágoras 3D para calcular inclinaciones y evitar desastres en tu mudanza.';

const faqData = [
  {
    question: '¿Por qué un sofá puede no caber aunque sea más pequeño que la puerta?',
    answer:
      'Debido al ángulo de giro. Si el pasillo es estrecho, el sofá debe entrar de lado o inclinado. El factor limitante no es solo el ancho de la puerta, sino el radio de giro disponible en el recibidor.',
  },
  {
    question: '¿Qué es la diagonal de un mueble y por qué importa?',
    answer:
      'Es la distancia más larga entre dos esquinas opuestas. Es vital para saber si un mueble alto puede ser levantado en una habitación con techo bajo después de haber sido montado en el suelo.',
  },
  {
    question: '¿Cómo medir un ascensor correctamente?',
    answer:
      'No midas solo el suelo. Mide el ancho de la puerta abierta, la profundidad libre y la altura total. La diagonal desde la base de la puerta hasta la esquina superior trasera es el dato más importante.',
  },
  {
    question: '¿Qué piezas se deben desmontar primero?',
    answer:
      'Patas de sofás, tiradores de armarios y puertas de neveras suelen ganar entre 5 y 10 cm críticos que marcan la diferencia entre que un mueble quepa o se quede en la calle.',
  },
];

const howToData = [
  {
    name: 'Medir el mueble (Largo, Ancho, Alto)',
    text: 'Toma las medidas máximas del objeto, incluyendo cualquier saliente como reposabrazos o tiradores.',
  },
  {
    name: 'Medir los pasos críticos',
    text: 'Mide el hueco libre de la puerta (de marco a marco), el interior del ascensor y el ancho de los pasillos.',
  },
  {
    name: 'Introducir datos en el simulador',
    text: 'Escribe las dimensiones en la herramienta para ver si el volumen del mueble es compatible con el espacio de paso.',
  },
  {
    name: 'Calcular inclinaciones',
    text: 'Si el mueble es muy alto, usa la diagonal calculada para verificar si podrás girarlo en el descanso de la escalera o dentro del ascensor.',
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    { name: 'Geometric Fit in Confined Spaces (MDPI Buildings)', url: 'https://www.mdpi.com/2075-5309/15/2/157' },
    { name: 'Moving Sofa Problem: Wolfram MathWorld', url: 'https://mathworld.wolfram.com/MovingSofaProblem.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'La Ciencia de las Mudanzas y el Teorema de Pitágoras', level: 2 },
    {
      type: 'paragraph',
      html: 'Las mudanzas no son solo una prueba de fuerza física; son un complejo puzzle geométrico. El espacio aparente de una habitación o un ascensor engaña al ojo humano, especialmente cuando ignoramos la tercera dimensión. La matemática puede ahorrarte cientos de euros en devoluciones y transportes fallidos.',
    },
    { type: 'title', text: 'El Truco de la Diagonal 3D', level: 3 },
    {
      type: 'card',
      icon: 'mdi:math-log',
      title: 'Regla de Oro',
      html: '<p>Nunca midas solo el mueble. Mide siempre los <strong>puntos críticos de acceso</strong>: el ancho del marco de la puerta (restando el grosor de la propia puerta si no abre 180°), el punto más bajo del techo en el rellano y la profundidad real del ascensor con las puertas cerradas. La fórmula <code>d = √(w² + h² + z²)</code> te revela si cabe inclinado.</p>',
    },
    { type: 'title', text: 'El Problema del Sofá en el Pasillo', level: 3 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Margen de Maniobra',
      html: '<p>Un error común es asumir que si el mueble mide 80cm y el hueco 80cm, pasará. No es así. Las manos de los transportistas, la elasticidad del tejido y las imperfecciones de las paredes requieren un margen mínimo de <strong>2 a 5 cm</strong>. Sin este margen, el mueble se rayará o quedará encajado por presión.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Desmontar es Ganar',
      html: '<p>Antes de rendirte porque el mueble no cabe, verifica las patas. Muchas veces, quitar las patas de un sofá reduce su altura crítica en 10 a 15cm, lo que marca la diferencia entre entrar triunfalmente o quedarse en el portal. Las puertas de nevera y los tiradores de armario también suman centímetros críticos.</p>',
    },
    { type: 'title', text: 'Los 3 Errores que Arruinan una Mudanza', level: 3 },
    {
      type: 'paragraph',
      html: 'Incluso con medidas correctas, estos factores invisibles suelen causar desastres: <strong>La Lámpara del Techo</strong> — olvidada durante el giro diagonal, puede ser golpeada y destruida. <strong>El Radio de Giro del Mueble</strong> — un mueble rígido no se dobla; si el pasillo es estrecho y el mueble largo, aunque quepa de ancho, no podrá realizar el giro de esquina. <strong>El Embalaje</strong> — el papel burbuja y el cartón protector pueden añadir de 1 a 3 cm a cada lado.',
    },
  ],
  ui: {
    conTitle: 'Dimensiones del Espacio',
    conHint: 'Ej: Ascensor estándar, marco de puerta o furgoneta.',
    objTitle: 'Dimensiones del Mueble',
    labelWidth: 'Ancho (cm)',
    labelHeight: 'Alto (cm)',
    labelDepth: 'Fondo (cm)',
    labelLength: 'Largo (cm)',
    labelMargin: 'Margen de Error (cm)',
    vizLabel: 'Vista Espacial Simplificada',
    verdictDefault: '¿Cabe?',
    verdictHint: 'Introduce las medidas para comprobar la compatibilidad espacial.',
    verdictYes: '¡SÍ, CABE!',
    verdictNo: 'NO CABE',
    fitDirect: 'El mueble cabe perfectamente de forma directa.',
    fitDiagonal3d: 'Cabe inclinado diagonalmente (Pitágoras 3D).',
    fitDiagonalPlane: 'Cabe inclinado en uno de los planos laterales.',
    fitNope: 'El mueble es demasiado grande incluso para entrar en diagonal.',
    diagLabel: 'Diagonal Máxima (Pitágoras 3D):',
    objLabel: 'Mueble',
  },
};
