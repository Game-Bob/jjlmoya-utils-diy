import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-angulos-rectos-pitagoras-regla-3-4-5';
const title = 'Calculadora de Ángulos Rectos (Teorema de Pitágoras): Regla 3 4 5 para Escuadras Perfectas';
const description = 'Verifica si las estructuras están perfectamente a escuadra (90°) usando el teorema de Pitágoras y la regla 3-4-5. Herramienta esencial para construcción, carpintería y proyectos DIY.';

const faqData = [
  {
    question: '¿Qué es la regla 3-4-5?',
    answer: 'La regla 3-4-5 es una terna pitagórica simple. Si un triángulo rectángulo tiene lados de 3, 4 y 5 unidades en cualquier escala, el ángulo entre los lados más cortos es exactamente de 90 grados. Este método probado se ha utilizado en la construcción durante siglos.',
  },
  {
    question: '¿Cómo uso esta calculadora?',
    answer: 'Introduce las longitudes de las dos paredes (lados A y B) que forman la esquina. La calculadora muestra cuál debería ser la diagonal para un ángulo perfecto de 90 grados. Luego mide tu diagonal real e introdúcela para verificar si tu esquina está realmente a escuadra.',
  },
  {
    question: '¿Qué pasa si mi diagonal es diferente?',
    answer: 'Si tu diagonal medida difiere de la ideal, la calculadora muestra la desviación. Verde significa perfecto, amarillo significa aceptable, rojo significa fuera de escuadra. También indica si debes abrir o cerrar el ángulo.',
  },
  {
    question: '¿Es esto lo suficientemente preciso para la construcción?',
    answer: 'Sí. El teorema de Pitágoras es matemáticamente exacto. Con una cinta métrica, puedes lograr una precisión de grado de construcción sin herramientas especializadas ni habilidades avanzadas.',
  },
  {
    question: '¿Puedo cambiar entre pulgadas y pies?',
    answer: 'Sí. Elige pulgadas para proyectos pequeños o pies para estructuras más grandes. Todos los valores se convierten al instante sin perder datos.',
  },
];

const howToData = [
  { name: 'Selecciona tu unidad', text: 'Elige pulgadas para trabajos detallados o pies para estructuras más grandes. Puedes cambiar en cualquier momento.' },
  { name: 'Mide ambos lados', text: 'Mide la longitud de las dos paredes (lados A y B) que forman la esquina que quieres comprobar.' },
  { name: 'Comprueba la diagonal ideal', text: 'La calculadora te muestra cuál debe ser la diagonal para un ángulo perfecto de 90 grados.' },
  { name: 'Mide tu diagonal', text: 'Usa una cinta métrica para medir tu diagonal real. Introdúcela en el campo opcional.' },
  { name: 'Lee el estado', text: 'Verde = escuadra perfecta. Amarillo = aceptable. Rojo = fuera de escuadra. Ajusta según lo sugerido.' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'El Teorema de Pitágoras en la Práctica', level: 2 },
    { type: 'paragraph', html: 'Un ángulo perfecto de 90 grados es fundamental para una construcción de calidad. Las paredes deben ser perpendiculares, los cimientos deben estar a escuadra y los marcos deben estar alineados. El teorema de Pitágoras proporciona un método matemáticamente garantizado: a² + b² = c².' },
    { type: 'title', text: 'Por qué funciona la regla 3-4-5', level: 3 },
    { type: 'paragraph', html: 'La regla 3-4-5 es la terna pitagórica más simple. Ya sea que midas en pulgadas, pies o cualquier otra unidad, los lados de 3, 4 y 5 unidades garantizan un ángulo de 90 grados. Esto ha sido probado matemáticamente y testado en la construcción durante siglos.' },
    { type: 'title', text: 'Precisión sin herramientas especializadas', level: 3 },
    { type: 'paragraph', html: 'A diferencia de los niveles o escuadras que pueden romperse o desajustarse, el teorema de Pitágoras es inmutable. Con solo una cinta métrica, puedes verificar cualquier esquina a cualquier escala. Esta calculadora elimina el cálculo mental y asegura la precisión.' },
    { type: 'title', text: 'De la teoría a la guía práctica', level: 3 },
    { type: 'paragraph', html: 'Esta calculadora convierte las matemáticas abstractas en instrucciones prácticas de campo. Si tu diagonal no coincide, te indica exactamente cuánto y en qué dirección ajustar. Transforma la teoría en resultados reales en la obra.' },
  ],
  ui: {
    titleMain: 'Calculadora de Escuadras (Pitágoras)',
    labelInputData: 'Mediciones',
    labelUnitSelection: 'Unidad',
    btnUnitInches: 'pulgadas',
    btnUnitFeet: 'pies',
    labelSideA: 'Lado A',
    labelSideB: 'Lado B',
    labelMeasuredDiagonal: 'Diagonal medida (opcional)',
    labelResults: 'Resultados',
    labelIdealDiagonal: 'Diagonal ideal',
    labelDeviation: 'Desviación',
    labelStatus: 'Estado',
    labelVerification: 'Verificación de escuadra',
    btnClear: 'Limpiar',
    btnCopyResults: 'Copiar resultados',
    labelPresets: 'Ajustes rápidos',
    unitInches: 'pul',
    unitFeet: 'pie',
    tooltipOptional: 'Introduce tu diagonal medida para verificar los 90 grados',
    tooltipPresets: 'Regla 3-4-5 en diferentes escalas',
    statusPerfect: 'Ángulo de 90 grados perfecto',
    statusAcceptable: 'Desviación aceptable',
    statusWarning: 'Desviación menor',
    statusError: 'Fuera de escuadra',
    statusReady: 'Listo',
    msgIdealCalculated: 'Diagonal ideal calculada',
    actionOpen: 'Abrir',
    actionClose: 'Cerrar',
    descLarger: 'más grande',
    descSmaller: 'más pequeña',
    descCorrection: 'Corrección necesaria',
  },
};
