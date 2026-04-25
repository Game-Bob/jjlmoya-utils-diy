import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-dilatacion-termica';
const title = 'Calculadora de Dilatación Térmica de Vigas y Estructuras';
const description =
  'Calcula cuánto crece una viga o estructura por cambios de temperatura. Herramienta técnica para ingenieros y DIY. Incluye coeficientes de expansión por material.';

const faqData = [
  {
    question: '¿Qué es el coeficiente de dilatación lineal?',
    answer:
      'Es una propiedad física de los materiales que indica cuánto se expande por cada grado Celsius que aumenta su temperatura. Se mide en 1/°C o °C⁻¹.',
  },
  {
    question: '¿Por qué es importante calcular la dilatación en vigas?',
    answer:
      'Si una viga no tiene espacio para expandirse (juntas de dilatación), generará tensiones internas masivas que pueden deformar la estructura, agrietar el hormigón o incluso causar un colapso.',
  },
  {
    question: '¿La madera dilata igual en todas direcciones?',
    answer:
      'No. La madera es un material anisotrópico. Dilata muy poco a lo largo de la fibra pero significativamente en sentido transversal (ancho y espesor).',
  },
  {
    question: '¿Qué temperatura debo usar como Inicial?',
    answer:
      'Debes usar la temperatura en el momento de la instalación o construcción. La Final debe ser la temperatura máxima esperada durante su vida útil.',
  },
];

const howToData = [
  {
    name: 'Mide la longitud original',
    text: 'Introduce la longitud de la viga o material en metros.',
  },
  {
    name: 'Selecciona el material',
    text: 'Elige entre metales, materiales de construcción o maderas para aplicar su coeficiente específico.',
  },
  {
    name: 'Define el rango térmico',
    text: 'Especifica la temperatura inicial y la máxima esperada para calcular el diferencial térmico.',
  },
  {
    name: 'Analiza el crecimiento',
    text: 'Observa el estiramiento total en milímetros y la longitud final resultante para prever juntas adecuadas.',
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Qué es la Dilatación Térmica y por qué afecta a las Estructuras', level: 2 },
    {
      type: 'paragraph',
      html: 'La <strong>dilatación térmica</strong> es el proceso físico por el cual un material aumenta su longitud como respuesta a un incremento en su temperatura. A nivel microscópico, las partículas vibran con más energía y necesitan mayor espacio promedio entre ellas. En construcción, este fenómeno no es una curiosidad: es una fuerza que puede romper el hormigón, deformar vigas de acero y retorcer las vías de un tren.',
    },
    { type: 'title', text: 'La Fórmula de la Dilatación Lineal', level: 3 },
    {
      type: 'card',
      icon: 'mdi:math-log',
      title: 'Fórmula de la Dilatación Lineal',
      html: '<p>La expansión de un elemento estructural se calcula con: <code>ΔL = L₀ · α · ΔT</code>. Donde <strong>ΔL</strong> es el crecimiento total, <strong>L₀</strong> es la longitud original, <strong>α</strong> es el coeficiente de expansión del material (en °C⁻¹) y <strong>ΔT</strong> es la diferencia de temperatura. Esta fórmula es la base del diseño de juntas de dilatación en puentes, techos y fachadas.</p>',
    },
    { type: 'title', text: 'Coeficientes de Dilatación por Material', level: 3 },
    {
      type: 'card',
      icon: 'mdi:table',
      title: 'Tabla de Coeficientes Comunes',
      html: '<p>No todos los materiales crecen igual. El <strong>aluminio</strong> (23 ppm/°C) se expande casi el doble que el <strong>acero</strong> (12 ppm/°C). El <strong>hormigón</strong> tiene un coeficiente casi idéntico al acero (12 ppm/°C), por eso el hormigón armado es estable. El <strong>PVC</strong> (30 ppm/°C) y la <strong>madera transversal</strong> (40 ppm/°C) presentan las expansiones más altas y requieren juntas especiales.</p>',
    },
    { type: 'title', text: 'La importancia de las Juntas de Dilatación', level: 3 },
    {
      type: 'card',
      icon: 'mdi:bridge',
      title: 'Juntas de Dilatación y Margen de Seguridad',
      html: '<p>Si has visto una ranura rellena de goma en el suelo de un puente, has visto una <strong>junta de dilatación</strong>. Sin ese espacio, la viga chocaría contra el siguiente elemento al calentarse en verano, generando presiones que pueden provocar el <strong>pandeo</strong> de columnas o grietas en muros de carga. La calculadora propone una junta mínima del 150% sobre el ΔL calculado para absorber variaciones extremas.</p>',
    },
    { type: 'title', text: 'Casos Reales: de los Raíles del Tren a la Torre Eiffel', level: 3 },
    {
      type: 'paragraph',
      html: 'Los ingenieros ferroviarios dejan huecos entre raíles para que no se doblen en verano. La estructura de hierro de la <strong>Torre Eiffel</strong> crece aproximadamente 15 cm en los días más calurosos de julio en París. En el entorno doméstico, los techos de policarbonato y los cerramientos de aluminio son los casos más habituales donde el cálculo térmico es determinante para evitar filtraciones y crujidos.',
    },
  ],
  ui: {
    configTitle: 'Configuración',
    labelMaterial: 'Material',
    groupMetals: 'Metales',
    groupConstruction: 'Construcción',
    groupWood: 'Maderas y Polímeros',
    matSteel: 'Acero (12 ppm/°C)',
    matAluminum: 'Aluminio (23 ppm/°C)',
    matCopper: 'Cobre (17 ppm/°C)',
    matIron: 'Hierro (11 ppm/°C)',
    matConcrete: 'Hormigón (12 ppm/°C)',
    matBrick: 'Ladrillo (9 ppm/°C)',
    matGlass: 'Vidrio (9 ppm/°C)',
    matWoodFiber: 'Madera Fibra (5 ppm/°C)',
    matWoodTransversal: 'Madera Transversal (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metalurgia',
    catConstruction: 'Construcción',
    catWood: 'Maderas y Polímeros',
    labelLength: 'Longitud Inicial (m)',
    labelTempStart: 'T. Inicial (°C)',
    labelTempEnd: 'T. Máxima (°C)',
    deltaLabel: 'Diferencial Térmico (ΔT)',
    vizTitle: 'Simulación de Expansión',
    resultGrowthLabel: 'Crecimiento Total (ΔL)',
    resultFinalLabel: 'Longitud Final',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Riesgo Pandeo',
    jointTitle: 'Junta Mínima',
    riskLow: 'Bajo',
    riskModerate: 'Moderado',
    riskCritical: 'Crítico',
    tipDefault: 'Consulta el manual del fabricante para coeficientes exactos de aleaciones especiales.',
    tipSteel: 'El acero y el hormigón tienen coeficientes casi idénticos, permitiendo que el hormigón armado funcione sin agrietarse internamente.',
    tipAluminum: 'El aluminio dilata casi el doble que el acero. En cerramientos metálicos, esto obliga a usar sellantes elásticos.',
    tipGlass: 'El vidrio y el acero dilatan casi igual, lo cual es clave para el diseño de grandes fachadas acristaladas.',
    tipConcrete: 'El coeficiente del hormigón es muy similar al del acero, razón por la cual las estructuras mixtas son tan estables.',
    tipWood: 'La madera dilata poco por calor, pero mucho por humedad. En estructuras largas, la fibra longitudinal es muy estable.',
    tipPvc: 'El PVC tiene una expansión altísima. Requiere juntas tóricas o curvas lira para absorber el movimiento sin romperse.',
  },
};
