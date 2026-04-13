import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'calculadora-resina';
const title = 'Calculadora de Resina Epoxi: Mezcla y Volumen Exacto';
const description =
  'Calcula la cantidad exacta de resina epoxi y catalizador necesaria para tus proyectos. Evita desperdicios en mesas río, joyería y moldes.';

const faqData = [
  {
    question: '¿Por qué es tan importante la proporción exacta en la resina?',
    answer:
      'A diferencia de otras mezclas, la resina epoxi no seca por evaporación, sino por una reacción química (polimerización). Si sobra resina o catalizador, la reacción será incompleta, dejando la pieza pegajosa, blanda o con burbujas permanentes.',
  },
  {
    question: '¿Qué es la proporción en peso vs volumen?',
    answer:
      'Muchas resinas se mezclan 2:1 en volumen pero 100:45 en peso debido a que el catalizador suele ser más denso. Usa siempre la escala que indique el fabricante y, si es posible, usa una báscula digital para máxima precisión.',
  },
  {
    question: '¿Cómo evito las burbujas al mezclar?',
    answer:
      'Mezcla lentamente con movimientos circulares constantes durante al menos 3 minutos, rascando bien las paredes del vaso. Deja reposar la mezcla un par de minutos antes de verter para que las burbujas suban a la superficie.',
  },
  {
    question: '¿Qué es el tiempo de vida (Pot Life)?',
    answer:
      'Es el tiempo que tienes para trabajar con la mezcla antes de que empiece a endurecerse (gelificar). En verano o en grandes volúmenes, este tiempo se reduce drásticamente debido a la reacción exotérmica (genera calor).',
  },
];

const howToData = [
  {
    name: 'Medir las dimensiones del molde',
    text: 'Mide el largo, ancho y la profundidad (grosor) de la zona que quieres rellenar con resina.',
  },
  {
    name: 'Introducir la relación de mezcla',
    text: 'Consulta en la etiqueta de tu producto si la mezcla es 1:1, 2:1 o 3:1 y si se basa en peso o volumen.',
  },
  {
    name: 'Pesar los componentes',
    text: 'Vierte primero el componente A (resina) y luego el B (catalizador) en un recipiente limpio sobre una báscula digital.',
  },
  {
    name: 'Mezclado técnico',
    text: "Remueve suavemente hasta que la mezcla sea totalmente transparente y no se vean 'hilos' de diferente densidad.",
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    {
      name: 'TotalBoat - Centro de Soporte y Guías Técnicas',
      url: 'https://www.totalboat.com/pages/support',
    },
    {
      name: 'ArtResin - Preguntas Frecuentes y Guía de Uso',
      url: 'https://www.artresin.com/pages/artresin-faq',
    },
    {
      name: 'Smooth-On - Calculadoras de Moldes y Vaciado',
      url: 'https://www.smooth-on.com/support/calculators/',
    },
    {
      name: 'Polytek - Soporte Técnico y Hojas de Seguridad',
      url: 'https://www.polytek.com/technical-support',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guía de Cálculo y Mezcla de Resina Epóxica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La resina epóxica no es una pintura que se seca por evaporación; es una <strong>reacción química exotérmica</strong> compleja. La magia ocurre cuando las moléculas de epóxido se encadenan con las de poliamina para formar un polímero termoestable sólido cristalino.',
    },
    {
      type: 'paragraph',
      html: 'La diferencia entre una pieza de arte duradera y un desastre pegajoso radica en la <strong>estequiometría exacta</strong>. Un error de apenas un 5% en la proporción de mezcla puede inhibir el curado permanentemente. Esta herramienta elimina las conjeturas matemáticas, permitiéndote enfocarte en la creación.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:scale-balance',
          title: '¿Volumen o Peso?',
          html: '<p>El error #1 de los principiantes es asumir que 100ml pesan 100g. <strong>La resina es más densa que el endurecedor.</strong></p><p>Si la ficha técnica de tu producto dice "100:50 por peso", NO es lo mismo que "2:1 por volumen". Esta calculadora trabaja con <strong>Volumen</strong> (V = L × W × H), que es el estándar para llenar moldes.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:water-percent',
          title: 'Proporciones Comunes',
          html: '<ul><li><strong>1:1</strong> — Recubrimientos, barnices y adhesivos rápidos.</li><li><strong>2:1</strong> — Estándar. River tables, joyería y moldes medios.</li><li><strong>3:1</strong> — Suelos industriales y laminados estructurales de alta dureza.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Protocolo de Seguridad y Mejores Prácticas',
      level: 2,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:thermometer',
          title: 'Temperatura Vital',
          html: '<p>Trabaja siempre entre <strong>21°C y 25°C</strong>. El frío puede detener la reacción, dejando la pieza turbia. El calor excesivo acelera la reacción exotérmica peligrosamente ("flash cure").</p>',
        },
        {
          type: 'card',
          icon: 'mdi:cup-outline',
          title: 'Técnica del Doble Vaso',
          html: '<p>No confíes en una sola mezcla. Raspa bien los lados y el fondo, vierte la mezcla en un <strong>segundo vaso limpio</strong> y vuelve a mezclar. Esto asegura que no quede material sin catalizar.</p>',
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:weather-windy',
      title: 'Ventilación',
      html: '<p>Aunque muchas resinas modernas son de bajo olor, los vapores de isocianatos y aminas requieren ventilación cruzada o máscara de carbón activo. Usa siempre guantes de nitrilo.</p>',
    },
  ],
  ui: {
    shapeRect: 'Rectangular',
    shapeCylinder: 'Cilíndrico',
    shapeSphere: 'Esférico',
    labelLength: 'Largo (cm)',
    labelWidth: 'Ancho (cm)',
    labelDiameter: 'Diámetro (cm)',
    labelDepth: 'Profundidad (cm)',
    labelRatio: 'Proporción de Mezcla (Peso/Volumen)',
    labelCustomRatio: 'Usar proporción personalizada (A:B)',
    labelResinA: 'Resina (A)',
    labelHardenerB: 'Endurecedor (B)',
    labelWasteTitle: 'Margen de Seguridad',
    labelWasteDesc: 'Añade 5% extra para pérdidas',
    labelTotalVolume: 'Volumen Total',
    labelPartA: 'Parte A (Resina)',
    labelPartB: 'Parte B (Catalizador)',
    labelVisualization: 'Visualización',
    shapeRectLabel: 'Bloque Rectangular',
    shapeCylinderLabel: 'Cilindro / Molde Redondo',
    shapeSphereLabel: 'Esfera Completa',
  },
};
