import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'calculadora-mecanizado-taladro';
const title = 'Calculadora RPM Mecanizado y Taladro';
const description = 'Calcula las revoluciones por minuto ideales para tu taladro o fresadora según el material y diámetro de la broca. Evita quemar tus herramientas.';

const faqData = [
  {
    question: '¿Por qué se queman las brocas al taladrar?',
    answer: 'Principalmente por un exceso de revoluciones (RPM). Cuando la broca gira más rápido de lo que el material permite disipar el calor, la fricción eleva la temperatura por encima del límite del temple del acero, haciendo que el filo se ablande y deje de cortar.',
  },
  {
    question: '¿Qué es la velocidad de corte (Vc)?',
    answer: 'Es la velocidad lineal en metros por minuto a la que el filo de la herramienta recorre la superficie del material. Cada material tiene una Vc recomendada que no depende del diámetro de la broca.',
  },
  {
    question: '¿Cuándo debo usar una herramienta de Metal Duro (Widia)?',
    answer: 'Debes usar metal duro cuando necesites trabajar a velocidades mucho más altas, en producciones industriales o cuando el material a taladrar sea extremadamente duro. Para el bricolaje común, el HSS es suficiente y más resistente a roturas por flexión.',
  },
  {
    question: '¿Es necesario usar lubricante siempre?',
    answer: 'En metales, casi siempre es recomendable. En aluminio evita que el material se pegue a la broca, y en aceros reduce el calor. En maderas y plásticos es mejor trabajar en seco con extracciones frecuentes de la broca.',
  },
  {
    question: '¿Cómo calculo el avance si no tengo una fresadora CNC?',
    answer: 'En un taladro manual, el avance se siente por la presión. Debes ver que sale una viruta constante y limpia. Si sale polvo, estás presionando poco o las RPM son excesivas. Si la viruta es muy gruesa y el taladro sufre, estás presionando demasiado.',
  },
];

const howToData = [
  { name: 'Selecciona el material', text: 'Indica qué material vas a taladrar o fresar (acero, aluminio, madera, etc.). Cada uno tiene una dureza y capacidad térmica distinta.' },
  { name: 'Introduce el diámetro', text: 'Escribe el diámetro exacto de tu broca o fresa en milímetros. Recuerda que a mayor diámetro, menor debe ser la velocidad de giro.' },
  { name: 'Elige el tipo de herramienta', text: 'Determina si tu broca es de acero rápido (HSS) o de metal duro (Carburo/Widia). Las de metal duro soportan mucha más velocidad.' },
  { name: 'Ajusta las RPM en tu máquina', text: 'Configura tu taladro o fresadora con el valor calculado. Si tu máquina tiene posiciones fijas, usa nuestra herramienta de velocidad cercana para elegir la posición de polea más segura.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    { name: 'Sandvik Coromant: Cutting Speed and Feed Rate Formulae', url: 'https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: 'Máquinas. Cálculos de taller — A.L. Casillas', url: 'https://www.google.com/search?q=Casillas+Maquinas+Calculos+de+taller' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'La importancia de las Revoluciones por Minuto en el mecanizado', level: 2 },
    { type: 'paragraph', html: 'El cálculo correcto de las revoluciones por minuto es la diferencia entre un trabajo perfecto y un desastre costoso. No se trata de hacer girar una broca lo más rápido posible, sino de respetar las leyes de la física aplicadas a la fricción y resistencia de materiales. Nuestra calculadora está diseñada para optimizar el rendimiento de tus herramientas y la calidad de tus acabados.' },
    { type: 'title', text: 'Entendiendo la Velocidad de Corte', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Fórmula de Cálculo de RPM', html: '<p>La velocidad de corte es un valor en metros por minuto que indica la velocidad ideal a la que el filo debe pasar por el material. La fórmula que usamos es: <code>RPM = (Vc × 1000) / (π × D)</code> donde D es el diámetro en milímetros. Este cálculo es independiente del diámetro del material que cortamos.' },
    { type: 'title', text: 'HSS vs Metal Duro', level: 3 },
    { type: 'paragraph', html: 'Las herramientas de <strong>Acero Rápido (HSS)</strong> son económicas y resistentes a impactos, pero tienen resistencia térmica limitada. El <strong>Metal Duro (Carburo)</strong> permite velocidades de corte 3 a 5 veces superiores, pero son más frágiles. La calculadora ajusta automáticamente los parámetros según el tipo de herramienta.' },
    { type: 'title', text: '3 Errores Comunes al Taladrar', level: 3 },
    { type: 'paragraph', html: '<strong>RPM demasiadas altas:</strong> Causa recalentamiento y pérdida de temple del acero. <strong>RPM demasiadas bajas:</strong> La broca vibra y se puede romper por fatiga. <strong>Sin refrigeración:</strong> El calor reduce la vida útil de la herramienta significativamente.' },
  ],
  ui: {
    labelMaterial: 'Material de la pieza',
    matSteel: 'Acero Suave',
    matInox: 'Inoxidable',
    matAlu: 'Aluminio',
    matBrass: 'Latón',
    matCastIron: 'Fundición',
    matWood: 'Maderas',
    matPlastic: 'Plásticos',
    coolSteel: 'Taladrina o Aceite',
    coolInox: 'Aceite de Corte EP',
    coolAlu: 'Alcohol / Parafina',
    coolBrass: 'En seco / Aire',
    coolCastIron: 'En seco',
    coolWood: 'Solo Aspiración',
    coolPlastic: 'Chorro de Aire',
    labelTool: 'Tipo de Herramienta',
    typeHss: 'Aceros (HSS)',
    typeWidia: 'Metal Duro (Widia)',
    labelDiameter: 'Diámetro',
    unitMm: 'mm',
    unitInch: 'pulg',
    modeColumnDrill: 'Modo Taladro Columna',
    labelAdvanced: 'Parámetros de Avance',
    labelLips: 'Nº de Filos (z)',
    labelFz: 'Avance/diente (Fz)',
    labelMachine: 'Velocidades de tu Máquina',
    presetStandard: 'Estándar',
    presetCnc: 'CNC',
    addRpmManual: 'Añadir RPM manual...',
    addButton: '+',
    resultRpm: 'Velocidad Óptima',
    resultCooling: 'Refrigeración',
    resultFeed: 'Avance Resultante',
    resultClosest: 'Ajuste recomendado',
    rpmUnit: 'Revoluciones / Minuto',
    recommendedLabel: 'Ajuste recomendado',
    recommendedHint: 'Configura el selector de tu máquina a esta posición',
    statusLimitActive: 'Límite de máquina activo',
    statusOutOfRange: 'Rango fuera de estándar comercial',
  },
};
