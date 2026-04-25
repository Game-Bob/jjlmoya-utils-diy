import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conversor-fracciones-pulgadas-milimetros';
const title = 'Conversor de Fracciones a Milímetros para Taller';
const description = 'Convierte medidas de pulgadas fraccionales a milímetros al instante. Encuentra los tornillos, pernos y llaves estándar más cercanos para tu taller. Diseñado para manos sucias y dedos con guantes.';

const faqData = [
  {
    question: '¿Por qué necesito convertir fracciones a milímetros?',
    answer: 'La mayoría de las herramientas y tornillería modernas usan el sistema métrico, pero muchas herramientas antiguas y especificaciones siguen usando pulgadas fraccionales. Este conversor cierra esa brecha, ayudándote a encontrar el equivalente métrico exacto o el tamaño de tornillería estándar más cercano.',
  },
  {
    question: '¿Cuál es la diferencia entre 1/2 pulgada y 12.7 mm?',
    answer: '1/2 pulgada equivale exactamente a 12.7 milímetros (0.5 × 25.4 = 12.7). Las herramientas métricas e imperiales a menudo son intercambiables en tamaños estándar porque los fabricantes alinean los tamaños de tornillería comunes en ambos sistemas.',
  },
  {
    question: '¿Por qué la herramienta muestra el "sujetador más cercano"?',
    answer: 'Porque las conversiones exactas a menudo caen entre los tamaños estándar de tornillería. La herramienta encuentra el perno o la llave comercial más cercana a tu medida, para que puedas usar lo que tienes disponible en tu taller.',
  },
  {
    question: '¿Qué diferencia hay entre la precisión para carpintería y para metal?',
    answer: 'En carpintería, diferencias de 0.5 mm suelen ser insignificantes. En metalmecánica y mecanizado, 0.1 mm importa. El modo de precisión indica rangos de tolerancia aceptables según el material con el que trabajes.',
  },
  {
    question: '¿Puedo usar esta herramienta sin conexión?',
    answer: 'Sí. Todos los cálculos se realizan en tu navegador. La herramienta funciona completamente fuera de línea tras la primera carga, ideal para usarla en el taller sin WiFi.',
  },
  {
    question: '¿Por qué la herramienta incluye un historial?',
    answer: 'Al trabajar en un desmontaje o en un proyecto con múltiples piezas, el historial te permite consultar medidas anteriores sin tener que volver a introducirlas, ayudándote a crear una lista de piezas sobre la marcha.',
  },
];

const howToData = [
  {
    name: 'Selecciona el tipo de medida',
    text: 'Elige "Directa" para convertir una fracción a milímetros, o "Inversa" para encontrar la fracción de una medida que hayas tomado con un calibre.',
  },
  {
    name: 'Introduce la medida',
    text: 'Usa la entrada de tres columnas (entero, numerador, denominador) o pulsa un botón de preajuste rápido. Los botones de ajuste te permiten cambiar el valor sin necesidad de escribir.',
  },
  {
    name: 'Revisa los resultados',
    text: 'El resultado muestra la conversión exacta además del tamaño de tornillo y llave estándar más cercanos. La escala visual te ayuda a percibir la proporción.',
  },
  {
    name: 'Guarda en el historial',
    text: 'Haz clic en "Guardar en historial" para conservar las medidas para futuras consultas. El historial se mantiene en tu navegador, incluso después de cerrarlo.',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Por qué es Vital la Precisión en la Conversión de Fracciones en el Taller', level: 2 },
    { type: 'paragraph', html: 'En un taller profesional o de bricolaje avanzado, un "más o menos" suele acabar en tornillos pasados, juntas inestables o montajes fallidos. Esta herramienta cierra la brecha entre las medidas imperiales tradicionales y la precisión del sistema métrico, asegurando que tus proyectos mantengan un estándar profesional.' },
    { type: 'title', text: 'La Conversión Estándar: 1/2" frente a 12,7 mm', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: '¿Son intercambiables el sistema métrico e imperial?', html: '<p>Muchos dan por hecho que sí. Aunque 1/2" son exactamente 12,7 mm, la llave métrica más cercana es de 13 mm. Usar la herramienta incorrecta puede redondear las cabezas de los tornillos. Nuestro conversor identifica el <strong>ajuste de herramienta estándar más cercano</strong> para que nunca dañes tus piezas.</p>' },
    { type: 'title', text: 'Tolerancia en Carpintería vs. Metalmecánica', level: 3 },
    { type: 'paragraph', html: 'Los requisitos de tolerancia varían enormemente según el oficio. En <strong>carpintería</strong>, una tolerancia de 1/64" (0,4 mm) suele ser aceptable. En <strong>mecanizado y metalistería</strong>, importa cada 0,1 mm o incluso 0,01 mm. Nuestra herramienta incluye un modo de precisión para ayudarte a decidir qué medida estándar es la más segura para tu material.' },
    { type: 'title', text: '3 Consejos Esenciales para Mediciones Precisas', level: 3 },
    { type: 'paragraph', html: '<strong>1. Usa Calibres:</strong> Para búsquedas inversas, utiliza siempre un calibre digital para obtener la entrada de milímetros más precisa. <strong>2. Revisa el Desgaste:</strong> Los vasos y tornillos viejos pueden tener bordes desgastados, lo que hace que el "ajuste más cercano" sea aún más crítico. <strong>3. Verifica el Paso de Rosca:</strong> Recuerda que aunque el tamaño de la cabeza coincida, el paso de rosca (métrico vs. imperial) siempre será diferente.' },
  ],
  ui: {
    labelFraction: 'Tipo de Medida',
    labelWhole: 'Entero',
    labelNumerator: 'Numerador',
    labelDenominator: 'Denominador',
    labelInches: 'Pulgadas',
    labelMillimeters: 'Milímetros',
    resultTitle: 'Resultado de la Conversión',
    resultFraction: 'Fracción',
    resultInches: 'Pulgadas',
    resultMillimeters: 'Milímetros',
    matchTitle: 'Sujetador Estándar más Cercano',
    matchClosestFastener: 'Tamaño de perno o tornillo estándar',
    matchClosestSocket: 'Tamaño de llave o vaso estándar',
    matchDifference: 'Diferencia con tu medida',
    matchRecommendation: 'Usa este tamaño si está disponible',
    reverseSearchTitle: 'Búsqueda Inversa',
    reverseSearchLabel: 'Medida Tomada (mm)',
    reverseSearchButton: 'Buscar Fracción',
    reverseSearchHint: 'Mide con un calibre e introduce el valor',
    unitMm: 'mm',
    unitInch: 'pulg',
    modeForward: 'Fracción → Métrico',
    modeReverse: 'Métrico → Fracción',
    precisionLabel: 'Modo de Precisión',
    precisionCarpentry: 'Carpintería',
    precisionMetal: 'Mecanizado',
    buttonConvert: 'Convertir',
    buttonClear: 'Limpiar',
    buttonCopyResult: 'Copiar Resultado',
    buttonSaveToHistory: 'Guardar en Historial',
    historyTitle: 'Historial',
    historyEmpty: 'Aún no hay medidas',
    historyRemove: 'Eliminar',
    helpText: 'Selecciona una medida o introduce una fracción para empezar.',
    toolOverline: 'Herramientas de Taller',
    labelVisualReference: 'Referencia Visual (1 pulgada = 96px)',
  },
};
