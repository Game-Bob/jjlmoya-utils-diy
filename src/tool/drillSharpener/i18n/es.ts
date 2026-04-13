import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';

const slug = 'afilador-maestro-brocas';
const title = 'Afilador Maestro de Brocas: Galga de Precisión';
const description = 'Guía interactiva para afilar brocas HSS. Galga digital en pantalla para verificar ángulos de 118° y 135°. Calcula RPM y diagnostica errores de corte.';

const faqData = [
  {
    question: '¿Puedo poner la broca directamente sobre la pantalla?',
    answer: 'Sí, la herramienta está diseñada para que apoyes el eje de la broca sobre la línea central de la galga digital y verifiques la simetría de los labios directamente.',
  },
  {
    question: '¿Cómo sé si el ángulo de incidencia es correcto?',
    answer: 'Al girar la broca, la parte trasera del filo debe quedar visiblemente más baja. Si ves que el metal brilla por igual en toda la punta, es que te falta destalonar.',
  },
  {
    question: '¿Qué revoluciones debo usar tras afilar?',
    answer: 'Depende del diámetro; nuestra calculadora integrada te dará el dato exacto según el material que hayas seleccionado en el primer paso.',
  },
  {
    question: '¿Cuál es la diferencia entre HSS y Metal Duro?',
    answer: 'El HSS (Acero Rápido) es más económico y resistente a golpes. El Metal Duro soporta mayores velocidades pero es más frágil. Para afilado manual, HSS es lo estándar.',
  },
  {
    question: '¿Necesito equipo especial para afilar?',
    answer: 'Una piedra de esmeril rotatoria de grano medio (120-150) es suficiente. Lo importante es mantener la piedra equilibrada y plana para conseguir resultados consistentes.',
  },
];

const howToData = [
  { name: 'Seleccionar Material', text: 'Elige el metal o material que vas a taladrar para fijar el ángulo objetivo y velocidad de corte.' },
  { name: 'Verificar Simetría', text: 'Apoya la broca en la pantalla y asegúrate de que ambos labios coincidan con las líneas azules.' },
  { name: 'Comprobar el Talón', text: 'Revisa visualmente que la parte trasera del filo no roce la pieza de trabajo (ángulo de incidencia).' },
  { name: 'Calcular RPM', text: 'Introduce el diámetro y ajusta tu taladro a la velocidad recomendada para el material seleccionado.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    { name: 'Manual de Taller - Afilado de Brocas (PDF)', url: 'https://www.scribd.com/document/486692441/Afilado-Manual-de-Brocas' },
    { name: 'Tecnología de los Metales - Ángulos de Broca', url: 'https://es.wikipedia.org/wiki/Broca' },
    { name: 'Normas de Afilado en Taller Mecánico', url: 'https://www.inem.es/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Afilado Maestro de Brocas: Técnica Profesional', level: 2 },
    { type: 'paragraph', html: 'El afilado de brocas es una de las habilidades más valiosas en cualquier taller. Una broca correctamente afilada mejora la calidad del orificio, protege la vida útil de tus herramientas eléctricas y garantiza la seguridad del operario.' },
    { type: 'title', text: 'Los Pilares del Afilado: Ángulo de Punta', level: 3 },
    { type: 'paragraph', html: 'El ángulo de punta define cómo la broca ataca el material. Los ángulos estándar son 118° para aceros suave, 135° para inoxidable y 140° para aceros duros. Cada material requiere un ángulo diferente para maximizar penetración sin comprometer resistencia.' },
    { type: 'title', text: 'El Gran Olvidado: Ángulo de Incidencia', level: 3 },
    { type: 'paragraph', html: 'El error más común es ignorar el ángulo de incidencia o destalonado. Si la cara trasera del filo está plana, la broca simplemente rozará generando calor extremo. La solución es rebajar ligeramente la parte trasera del labio.' },
  ],
  ui: {
    labelMaterial: 'Material del trabajo',
    matSteel: 'Acero',
    matInox: 'Inox',
    matHard: 'Duros',
    matBrass: 'Latón',
    matPlastic: 'Plástico',
    matWood: 'Madera',
    labelDiameter: 'Diámetro de broca (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Velocidad',
    unitRpm: 'RPM',
    labelCooling: 'Corte',
    btnDiagnosis: '¿No corta bien? Diagnóstico',
    diagTitle: 'Diagnóstico de Fallos',
    diagClose: 'Cerrar',
    diagIssue1: '1. Saca humo y no atraviesa',
    diagIssue1Desc: 'Falta Ángulo de Incidencia. El metal detrás del filo roza la pieza. Rebaja la parte trasera para que el labio sea lo más alto.',
    diagIssue2: '2. Agujero excéntrico o mayor',
    diagIssue2Desc: 'La Punta no está centrada. Los labios tienen longitudes diferentes. Asegura que la punta toque el centro exacto de la galga.',
    diagIssue3: '3. Filos quemados (Azules)',
    diagIssue3Desc: 'Velocidad excesiva. Revisa el cálculo de RPM de la herramienta para este diámetro y material.',
    gaugeInstruction: 'APOYA EL EJE EN LA LÍNEA VERTICAL',
  },
};
