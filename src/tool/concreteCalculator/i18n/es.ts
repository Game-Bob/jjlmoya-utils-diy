import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'calculadora-hormigon-mortero';
const title = 'Calculadora de Hormigón y Mortero: Cantidades Exactas de Cemento, Arena y Agua';
const description =
  'Calcula cuántos sacos de cemento, paladas de arena y litros de agua necesitas por m³. Para cimientos, soleras, muros y recrecidos. Guía de dosificación técnica.';

const faqData = [
  {
    question: '¿Cuántos sacos de cemento de 25kg entran en un metro cúbico?',
    answer:
      'Para un hormigón estándar (resistencia H-200), se necesitan aproximadamente 14 sacos de 25kg (350kg) para fabricar un metro cúbico de mezcla compactada.',
  },
  {
    question: '¿Qué es más fuerte, el hormigón o el mortero?',
    answer:
      'El hormigón (con grava) es más fuerte estructuralmente para soportar grandes cargas. El mortero (solo arena) es ideal para unir piezas o enfoscar superficies.',
  },
  {
    question: '¿Cuántas paladas son un metro cúbico?',
    answer:
      'Depende del tamaño de la palada, pero por lo general se calculan 180-200 paladas de arena por m³. Nuestra calculadora traduce los m³ a paladas sugeridas.',
  },
  {
    question: '¿Puedo hacer la mezcla a mano sin hormigonera?',
    answer:
      'Sí, aunque requiere mucho más esfuerzo físico. Lo ideal es hacerlo sobre una superficie limpia y estanca (plancha metálica o artesa) para no perder agua.',
  },
  {
    question: '¿Por qué el hormigón se agrieta al secar?',
    answer:
      'Suele ser por falta de humedad durante el fraguado (pérdida rápida de agua) o exceso de agua en la mezcla. Se recomienda regar el hormigón los días posteriores.',
  },
];

const howToData = [
  {
    name: 'Elige el Tipo de Mezcla',
    text: 'Selecciona si vas a hacer hormigón para cimientos o mortero para muros.',
  },
  {
    name: 'Indica el Volumen en m³',
    text: 'Introduce el volumen total. Multiplica largo x ancho x espesor.',
  },
  {
    name: 'Consulta las Cantidades',
    text: 'Mira cuántos sacos, paladas y litros necesitas comprar.',
  },
  {
    name: 'Aplica las Proporciones',
    text: 'Sigue la guía visual de cemento, arena y grava para una mezcla perfecta.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    {
      name: 'Código Estructural (EHE-08): Normativa de Hormigón',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2021-12906',
    },
    {
      name: 'Concrete Mix Proportioning Standards (ASTM)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: 'Guía de Dosificación de Morteros de Cemento',
      url: 'https://es.wikipedia.org/wiki/Mortero_(construcci%C3%B3n)',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guía de Dosificación para Hormigón y Mortero',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando te enfrentas a una reforma o construcción, una de las preguntas más recurrentes es <strong>¿cuántos sacos de cemento necesito para un metro cúbico de hormigón?</strong>. No se trata solo de mezclar ingredientes; la resistencia final de la estructura depende directamente de la precisión en las proporciones de cemento, arena, grava y agua. Nuestra calculadora traduce medidas industriales a unidades prácticas de obra: sacos de 25kg, paladas y litros.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'El Exceso de Agua Debilita el Hormigón',
      html: '<p>Un error muy común es añadir demasiada agua para que el hormigón fluya mejor. El exceso de agua crea poros al evaporarse durante el fraguado, reduciendo drásticamente la resistencia final. La consistencia ideal debe ser como la de una <strong>pasta espesa, no líquida</strong>. Usa la mínima cantidad de agua posible.</p>',
    },
    {
      type: 'title',
      text: 'Proporciones Estándar según el Uso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>dosificación del hormigón</strong> varía según el uso. Para un <strong>Hormigón H-200</strong> (cimientos y soleras) la proporción es 1 parte de cemento, 2.5 de arena y 3 de grava. Para el <strong>Mortero M-40</strong> (muros y tabiques) es 1 parte de cemento y 4 de arena. Para el <strong>Mortero M-80</strong> (recrecidos de suelo) es 1 parte de cemento y 3 de arena. El hormigón con grava soporta más carga; el mortero solo arena es ideal para unir y enfoscar.',
    },
    {
      type: 'title',
      text: 'Cómo Calcular los m³ que Necesitas',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Ejemplo de Cálculo para una Solera',
      html: '<p>Para una solera de jardín de 4m de largo, 3m de ancho y 15cm de espesor: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. Nuestra calculadora realiza esta operación automáticamente si introduces las dimensiones en la sección "Por Medidas".</p><p>Recuerda siempre <strong>comprar un 10% adicional</strong> para compensar pérdidas por derrame o variaciones en el terreno.</p>',
    },
    {
      type: 'title',
      text: 'Orden de Mezclado y Dosificación por Sacos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En las obras se habla de <strong>"mezcla a 300 kilos"</strong>: 300kg de cemento por cada metro cúbico de hormigón terminado. Para un mezclado correcto en hormigonera: primero el agua, después grava y arena (para disgregar grumos), y por último el cemento añadido gradualmente.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'La Regla del 10% para Evitar Quedarte Corto',
      html: '<p>Compra siempre un <strong>10% más de material</strong> del calculado para compensar pérdidas por derrame, irregularidades en el terreno o variaciones en el volumen real de los áridos húmedos. Es mucho más barato que tener que hacer un segundo pedido con la obra parada.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Hormigón Estándar',
    mixH200Hint: 'Ideal para cimientos y soleras',
    mixM40Label: 'Mortero de Albañilería',
    mixM40Hint: 'Para muros y tabiques',
    mixM80Label: 'Recrecidos Fuertes',
    mixM80Hint: 'Para suelos y revocos fuertes',
    modeDimsLabel: 'Por Medidas',
    modeDirectLabel: 'm³ Directos',
    labelLength: 'Largo',
    labelWidth: 'Ancho',
    labelThickness: 'Grosor',
    labelVolume: 'Volumen Total (m³)',
    binderCementLabel: 'Cemento',
    binderLimeLabel: 'Cal',
    summaryLabel: 'Total a rellenar:',
    resUnitSacks: 'Sacos (25kg)',
    resUnitShovels: 'Paladas',
    resUnitLitres: 'Litros',
    resLabelCement: 'Cemento Portland',
    resLabelLime: 'Cal Hidráulica',
    resLabelSand: 'Arena / Áridos',
    resLabelWater: 'Agua Potable',
    proportionsTitle: 'Proporciones de la Mezcla Seleccionada',
    propLabelSand: 'Arena',
    propLabelGravel: 'Grava',
    adviceH200: 'Ideal para pilares, soleras y estructuras que soportan carga.',
    adviceM40: 'Perfecto para levantar muros de ladrillo o bloque.',
    adviceM80: 'Usa esto para recrecidos de suelo muy resistentes.',
    adviceLimeH200: 'El hormigón de cal es más flexible pero tarda más en fraguar.',
    priceTotalLabel: 'Presupuesto Estimado',
    priceSackLabel: 'Saco',
    priceSandLabel: 'Arena (m³)',
    priceDisclaimer: 'Precios de mercado orientativos. Ajusta según tu proveedor local.',
  },
};
