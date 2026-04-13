import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'calculadora-escaleras';
const title = 'Calculadora de Escaleras: Diseño y Ejecución';
const description = 'Calcula las medidas exactas de tu escalera: huella, contrahuella, ángulo y materiales. Respeta la Ley de Blondel y evita errores de obra.';

const faqData = [
  {
    question: '¿Qué es la Ley de Blondel?',
    answer: 'Es una fórmula que establece que para que una escalera sea cómoda, la suma de dos contrahuellas y una huella debe estar entre 62 y 64 cm (2CH + H = 63). Esta ley se basa en la longitud media del paso humano y garantiza que subir o bajar la escalera sea seguro y cómodo.',
  },
  {
    question: '¿Cuál es la altura máxima de un peldaño?',
    answer: 'En viviendas se recomienda no superar los 18-19 cm. Para espacios públicos, el máximo suele ser 17.5 cm según normativa. Contrahuellas mayores cansan más y pueden ser peligrosas, especialmente para niños y personas mayores.',
  },
  {
    question: '¿Cómo calculo si tengo poco espacio?',
    answer: 'Si el avance horizontal es limitado, deberás aumentar el número de peldaños (reduciendo la contrahuella) o aceptar una pendiente mayor, aunque sea menos cómoda. La calculadora te ayuda a encontrar el equilibrio óptimo.',
  },
  {
    question: '¿Qué incluye la cubicación de hormigón?',
    answer: 'Se calcula el volumen total de hormigón considerando los peldaños más la losa inclinada (el plano inclinado que soporta los escalones). Ignorar este volumen resultaría en un pedido de hormigón insuficiente.',
  },
  {
    question: '¿Por qué es importante el replanteo acumulado?',
    answer: 'Medir cada escalón por separado genera errores acumulados. El replanteo acumulado garantiza que todos los peldaños tengan exactamente la misma altura, evitando riesgos y mejorando la comodidad de uso.',
  },
];

const howToData = [
  { name: 'Medir el desnivel', text: 'Mide el desnivel total (H) desde el suelo terminado inferior al suelo terminado superior. Este es el dato fundamental para toda la calculadora.' },
  { name: 'Introduce la longitud disponible', text: 'Opcional: Si tienes restricciones de espacio, introduce la longitud horizontal disponible. Usa 0 para cálculo libre sin limitaciones.' },
  { name: 'Ajusta el número de peldaños', text: 'La calculadora propone un número inicial, pero puedes ajustarlo. Observa el indicador de Blondel: debe estar en verde (62-64 cm) para máxima comodidad.' },
  { name: 'Define parámetros de obra', text: 'Especifica el espesor de la losa, acabados finales, resistencia del hormigón y ancho de la escalera. Estos datos afectan a la cubicación final.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Normativa',
  bibliography: [
    { name: 'CTE DB SUA Seguridad de Utilización y Accesibilidad', url: 'https://www.codigotecnico.org/' },
    { name: 'Ley de Blondel - Wikipedia', url: 'https://es.wikipedia.org/wiki/Escalera#Geometr%C3%ADa_de_la_escalera' },
    { name: 'Instrucción para la Recepción de Cementos (RC-16)', url: 'https://www.fomento.gob.es/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Diseño Geométrico de Escaleras: La Ley de Blondel', level: 2 },
    { type: 'paragraph', html: 'El confort de una escalera depende de la longitud del paso humano. Cuando subes o bajas escaleras, tu cuerpo espera un ritmo predecible. La Ley de Blondel establece que 2 contrahuellas + 1 huella = 62-64 cm es el estándar que garantiza máxima comodidad y seguridad.' },
    { type: 'title', text: 'Control de Estructura y Materiales', level: 3 },
    { type: 'paragraph', html: 'Para una ejecución profesional, es vital considerar la losa de hormigón (el plano inclinado que sostiene los escalones). Ignorar este volumen resultaría en un pedido de hormigón insuficiente y ejecución defectuosa. La calculadora integra automáticamente este cálculo.' },
    { type: 'title', text: 'Replanteo y Trazado: El Error Acumulado', level: 3 },
    { type: 'paragraph', html: 'En construcción, el mayor enemigo es el error milimétrico. Si mides cada escalón por separado, la suma de pequeños errores puede dejar el último peldaño 5 cm más alto o más bajo que el primero. El replanteo acumulado evita este problema.' },
    { type: 'title', text: 'Previsión de Acabados Finales', level: 3 },
    { type: 'paragraph', html: 'Un detalle crítico: ¿vas a instalar peldaños de granito de 3 cm? Este dato es fundamental. Si no se prevé correctamente, el primer peldaño quedará 3 cm más alto y el último 3 cm más bajo, creando un riesgo de seguridad real.' },
  ],
  ui: {
    labelGeometry: 'Geometría y Hueco',
    labelTotalHeight: 'Desnivel Total (H)',
    labelAvailableLength: 'Longitud Disponible (L)',
    labelAvailableLengthHint: 'Usa 0 para cálculo libre.',
    labelNumSteps: 'Nº Peldaños',
    labelOptimize: 'Optimizar (18cm)',
    labelWork: 'Obra e Instalación',
    labelSlabThickness: 'Losa (e)',
    labelFinishThickness: 'Acabado',
    labelCeilingHeight: 'Altura Techo (Opción)',
    labelStairWidth: 'Ancho Escalera',
    labelConcreteStrength: 'Resistencia Hormigón',
    optionH150: 'H-150 (Limpieza)',
    optionH200: 'H-200 (Vivienda)',
    optionH250: 'H-250 (Estructural)',
    labelRiser: 'Contrahuella',
    labelTread: 'Huella',
    labelSlope: 'Pendiente',
    labelRealAdvance: 'Avance Real',
    labelLayoutTable: 'Replanteo y Ejecución',
    colStep: 'Peldaño',
    colConcreteHeight: 'H. Hormigón',
    colFinishedHeight: 'H. Terminada',
    colAdvance: 'Avance',
    adjustedNote: 'Ajustado',
    labelMaterials: 'Cubicación y Pedido',
    labelTotalConcrete: 'Hormigón Total:',
    labelCement: 'Cemento (sacos/25kg):',
    labelSand: 'Arena necesaria:',
    unitM3: 'm³',
    unitBags: 'sacos',
    unitLiters: 'L',
    btnShare: 'Compartir',
    btnPrint: 'Imprimir PDF',
    statusOptimalComfort: 'Confort Óptimo',
    statusMarginLimit: 'Margen Límite',
    statusCriticalDesign: 'Diseño Crítico',
    statusRiserError: 'Error de Huella',

    msgInvalidValues: 'Valores inválidos',
    msgInsufficientSpace: 'ESPACIO INSUFICIENTE',
    msgDangerousTread: 'La huella de {val}cm es peligrosa.',
    msgBlondelValue: 'Blondel: {val}cm.',
    msgOptimalStep: 'Paso cómodo: {val}cm.',
    msgLowCeiling: 'CABECEO BAJO (<2m)',
    msgCalculating: 'Calculando...',
    msgEnterMeasurements: 'Ingresa medidas',

    shareTitle: 'Resumen Obra',
    shareMessage: 'Escalera: H={h}cm, N={n}, CH={ch}cm, Vol={vol}m3',
  },
};
