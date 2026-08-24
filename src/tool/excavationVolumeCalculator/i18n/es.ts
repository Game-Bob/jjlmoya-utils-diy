import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'calculadora-volumen-excavacion-esponjamiento-terreno';
const title = 'Calculadora de Volumen de Excavación y Esponjamiento del Terreno';
const description = 'Calcula el volumen en banco de una excavación y estima el volumen esponjado del terreno tras excavar con un rango visual para arena, tierra vegetal, arcilla y grava.';

const faq = [
  {
    question: '¿Cuál es la diferencia entre volumen en banco y volumen suelto o esponjado?',
    answer: 'El volumen en banco es el volumen del terreno in situ antes de ser excavado, calculado a partir de longitud, anchura y profundidad. El volumen suelto o esponjado es el espacio estimado que ocupará la tierra tras la excavación, incluyendo el coeficiente de esponjamiento del tipo de suelo.',
  },
  {
    question: '¿Cómo se calcula el volumen de excavación?',
    answer: 'Multiplica la longitud de la excavación por la anchura y la profundidad. Por ejemplo, una zanja de 4 metros de largo por 3 metros de ancho y 0,5 metros de profundidad tiene un volumen en banco de 6 metros cúbicos antes de aplicar el esponjamiento.',
  },
  {
    question: '¿Por qué la arcilla requiere un rango de esponjamiento más amplio?',
    answer: 'El comportamiento de la arcilla depende fuertemente de la mineralogía, la humedad, la densidad y la historia de tensiones del suelo. Esta calculadora utiliza una banda de planificación más ancha para la arcilla porque su expansión volumétrica es más variable que una simple corte geométrico.',
  },
  {
    question: '¿Puede esta calculadora sustituir a un estudio geotécnico?',
    answer: 'No. El resultado es una estimación orientativa para la gestión de materiales, transporte y contenedores. Consulta a un profesional técnico titulado para mediciones geotécnicas precisas en cimentaciones, muros de contención o suelos contaminados.',
  },
];

const howTo = [
  { name: 'Introducir las dimensiones de la excavación', text: 'Introduce la longitud, anchura y profundidad del vaciado. Cambia entre sistema métrico e imperial si es necesario.' },
  { name: 'Seleccionar el perfil de suelo más cercano', text: 'Elige arena, tierra vegetal, arcilla o grava para aplicar un rango visual estimado de esponjamiento.' },
  { name: 'Planificar la logística de material', text: 'Utiliza el volumen en banco para el vaciado in situ y el rango de volumen suelto para camiones, contenedores o acopios temporales.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq,
  bibliographyTitle: 'Fuentes y notas técnicas',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dos volúmenes responden a dos preguntas de obra', level: 2 },
    { type: 'paragraph', html: 'El <strong>volumen en banco</strong> representa la geometría del terreno in situ sin alterar: longitud multiplicada por anchura y profundidad. El <strong>volumen suelto</strong> es el espacio que ocupará el material excavado una vez extraído. Mantenerlos diferenciados evita calcular contenedores o transporte con el estado de suelo equivocado.' },
    { type: 'title', text: 'Usar el rango suelto para planificar el transporte', level: 3 },
    { type: 'paragraph', html: 'Selecciona el perfil de suelo más representativo y compara los valores inferior y superior de volumen suelto con la capacidad de camiones, tamaño de contenedores y superficie de acopio temporal. El rango se muestra de forma visible porque el método de excavación y la humedad alteran el resultado final.' },
    { type: 'tip', title: 'El coeficiente de esponjamiento no sustituye al ensayo geotécnico', html: 'La mineralogía de la arcilla, el nivel freático y la humedad pueden provocar variaciones fuera de los rangos genéricos. Para cimentaciones, muros de contención y gestión de residuos se requiere informe geotécnico oficial.' },
    { type: 'title', text: 'Verificar hipótesis antes de contratar maquinaria', level: 3 },
    { type: 'paragraph', html: 'Si el tipo de tierra genera dudas, calcula la excavación con dos perfiles plausibles y dimensiona la logística con el resultado más conservador hasta disponer de ensayos de campo. Esto aporta mayor seguridad operativa.' },
  ],
  ui: {
    unitSystemLabel: 'Sistema de medida',
    unitMetric: 'Métrico',
    unitImperial: 'Imperial',
    onboarding: 'Introduce las dimensiones del vaciado, selecciona el perfil de suelo y utiliza los dos resultados para planificar la excavación y el transporte.',
    dimensionLabel: 'Dimensiones de la excavación',
    lengthLabel: 'Longitud',
    widthLabel: 'Anchura',
    depthLabel: 'Profundidad',
    soilLabel: 'Perfil de suelo',
    soilSand: 'Arena',
    soilTopsoil: 'Tierra vegetal',
    soilClay: 'Arcilla',
    soilGravel: 'Grava',
    soilSandBand: '10 a 15% esponjamiento',
    soilTopsoilBand: '15 a 25% esponjamiento',
    soilClayBand: '25 a 40% esponjamiento',
    soilGravelBand: '15 a 25% esponjamiento',
    bankVolumeLabel: 'Volumen en banco',
    bankVolumeHelp: 'Terreno in situ no alterado',
    looseVolumeLabel: 'Volumen suelto',
    looseVolumeHelp: 'Rango estimado tras excavar',
    expansionLabel: 'Esponjamiento aplicado',
    expansionHelp: 'Rango utilizado según el perfil',
    sceneTitle: 'Del terreno al acopio',
    sceneBank: 'en terreno',
    sceneLoose: 'material suelto',
    sceneGround: 'línea de rasante',
    sceneCut: 'vaciado excavado',
    interpretationTitle: 'Cómo interpretar el resultado.',
    interpretationText: 'El primer número indica el volumen del hueco. El rango suelto indica el volumen extra que ocupará la tierra extraída.',
    warning: 'Estimación orientativa para logística. La humedad, densidad y método de excavación modifican el volumen suelto real. No sustituye a un estudio geotécnico.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'esponjamiento bajo',
    soilStatusMedium: 'esponjamiento moderado',
    soilStatusHigh: 'esponjamiento alto',
    soilStatusLabel: 'Banda de planificación',
  },
};
