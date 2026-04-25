import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-arcilla';
const title = 'Calculadora de Contracción de Arcilla: Dimensiones Exactas para Cerámica';
const description =
  'Calcula la contracción de arcilla en secado y cocción. Diseña piezas cerámicas con las dimensiones finales exactas.';

const faqData = [
  {
    question: '¿Por qué se contrae la arcilla?',
    answer:
      'La arcilla se contrae principalmente por la pérdida de agua. Primero ocurre el secado (evaporación del agua entre partículas) y luego la cocción (eliminación de agua químicamente combinada y sinterización de partículas).',
  },
  {
    question: '¿Cuál es el porcentaje de contracción normal?',
    answer:
      'Depende de la pasta cerámica. La loza suele contraerse entre un 5-10%, mientras que el gres y la porcelana pueden llegar al 12-15% debido a su mayor vitrificación.',
  },
  {
    question: '¿Cómo mido la contracción de mi propia arcilla?',
    answer:
      'Crea una placa de prueba de 10cm exactos. Déjala secar y mídela (contracción de secado). Cuécela a la temperatura final y vuelve a medirla (contracción total). La diferencia te dará el porcentaje exacto.',
  },
  {
    question: '¿Qué pasa si mi pieza se agrieta al secar?',
    answer:
      'Suele indicar un secado demasiado rápido o desigual. Las zonas finas pierden agua antes que las gruesas, generando tensiones. Cubre las piezas con plástico para ralentizar el proceso.',
  },
];

const howToData = [
  {
    name: 'Medir la pieza en húmedo',
    text: 'Toma las dimensiones exactas de tu pieza justo después de tornear o modelar, cuando todavía tiene toda su humedad.',
  },
  {
    name: 'Introducir el coeficiente de contracción',
    text: 'Busca en el paquete de tu arcilla el porcentaje de contracción total (secado + cocción) proporcionado por el fabricante.',
  },
  {
    name: 'Obtener dimensiones finales esperadas',
    text: 'Usa la calculadora para saber cuánto medirá tu pieza tras pasar por el horno y planifica tus encajes o tapas.',
  },
  {
    name: 'Cálculo inverso para objetivos',
    text: 'Si necesitas que tu pieza mida exactamente X cm al final, usa el cálculo inverso para saber qué tamaño debe tener en el torno.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
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
      text: 'La Física de la Arcilla: Contracción y Expansión',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La arcilla es un material vivo que cambia de tamaño durante todo el proceso cerámico. Desde el momento en que moldeas una pieza húmeda hasta que sale del horno, puede perder entre un 8% y un 15% de su tamaño original. Calcular esta contracción es fundamental para crear piezas con las dimensiones exactas que necesitas.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Fases de Contracción',
          html: '<p><strong>1. Secado (Húmedo → Seco):</strong> Al perder agua, las partículas de arcilla se acercan. Esta es la mayor contracción (4-8%). Las piezas gruesas pueden agrietarse si secan demasiado rápido.</p><p><strong>2. Cocción (Seco → Bizcocho):</strong> Entre 900-1000°C, la arcilla sufre cambios químicos irreversibles. Contracción adicional de 2-4%. La pieza se vuelve porosa pero resistente.</p><p><strong>3. Vitrificación (Alta Temperatura):</strong> A 1200-1300°C, la arcilla se vitrifica. Contracción final de 1-3%. El gres y la porcelana alcanzan su máxima densidad.</p>',
        },
        {
          type: 'card',
          title: 'Variables que Afectan',
          html: '<ul><li><strong>Tipo de arcilla:</strong> Las arcillas rojas contraen menos (8-10%) que las porcelanas (12-15%).</li><li><strong>Grosor de pared:</strong> Paredes finas contraen más uniformemente que las gruesas.</li><li><strong>Temperatura de cocción:</strong> A mayor temperatura, mayor contracción y vitrificación.</li><li><strong>Contenido de chamota:</strong> Añadir chamota (arcilla ya cocida molida) reduce la contracción.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Aplicaciones Prácticas',
      level: 2,
    },
    {
      type: 'title',
      text: 'Diseño de Moldes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si necesitas una taza de 8cm de diámetro final, y tu arcilla contrae un 12%, debes hacer el molde de <strong>9.1cm</strong>. Este cálculo inverso es crítico en producción en serie.',
    },
    {
      type: 'title',
      text: 'Tapas y Ensamblajes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando creas piezas que deben encajar (tetera + tapa, tarro + tapa), ambas deben hacerse con la misma arcilla y cocerse juntas para garantizar que contraigan por igual. Una diferencia del 1% puede arruinar el ajuste.',
    },
    {
      type: 'title',
      text: 'Escultura Monumental',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En piezas grandes, la contracción diferencial entre secciones gruesas y finas puede causar grietas. Los ceramistas experimentados compensan dejando paredes más gruesas en zonas que saben que contraerán más.',
    },
  ],
  ui: {
    labelInitialSize: 'Tamaño Inicial (mm)',
    labelShrinkage: 'Porcentaje de Contracción (%)',
    labelLow: 'Baja (Terracota)',
    labelMedium: 'Media (Gres)',
    labelHigh: 'Alta (Porcelana)',
    presetTerracota: 'Terracota (8%)',
    presetGres: 'Gres (12%)',
    presetPorcelana: 'Porcelana (15%)',
    labelResult: 'Resultado',
    labelFinalSize: 'Tamaño Final:',
    labelLoss: 'Pérdida Total:',
    tipText:
      'Para calcular el tamaño inicial necesario para obtener un tamaño final específico, divide el tamaño deseado entre (1 - contracción/100).',
    labelInitialBadge: 'Inicial:',
    labelFinalBadge: 'mm final',
    labelLossBadge: 'Pérdida:',
    labelInitialArea: 'Área Inicial',
    labelFinalArea: 'Área Final',
  },
};
