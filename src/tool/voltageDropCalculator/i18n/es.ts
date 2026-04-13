import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'calculadora-caida-tension';
const title = 'Calculadora de Caída de Tensión y Sección de Cable';
const description =
  'Herramienta técnica para evitar cables quemados. Calcula la sección necesaria para instalaciones de 12V, 24V y 230V según distancia y potencia. Rápido, preciso y sin registros.';

const faqData = [
  {
    question: '¿Qué es la caída de tensión y por qué importa?',
    answer:
      'Es la pérdida de voltaje que ocurre cuando la electricidad viaja por un cable. Si el cable es muy fino o muy largo, pierdes voltaje. Resultado: luces tenues, motores que no arrancan, o cables que se calientan peligrosamente.',
  },
  {
    question: '¿Qué sección de cable necesito para 12V a 10 metros?',
    answer:
      'Depende de la potencia. Para 12V y 10A a 10m, necesitas mínimo 2.5mm². Para 20A, necesitas 6mm². A bajo voltaje (12V/24V), la caída es mucho más crítica que a 230V.',
  },
  {
    question: '¿Puedo usar cable de 1.5mm² para toda mi instalación?',
    answer:
      'No. 1.5mm² es para circuitos de iluminación (máx 10A). Para enchufes necesitas 2.5mm². Para cocina o lavadora necesitas 4mm² o 6mm². Usar cable fino es peligroso y puede causar incendios.',
  },
  {
    question: '¿Cuál es la caída de tensión máxima permitida?',
    answer:
      'En instalaciones domésticas (230V): máximo 3% para iluminación, 5% para otros usos. En 12V/24V (autocaravanas, solar): no más del 3% total. Más caída significa pérdida de eficiencia y riesgo de sobrecalentamiento.',
  },
];

const howToData = [
  {
    name: 'Definir el voltaje del sistema',
    text: 'Selecciona si tu instalación es de 12V, 24V (solar/camper) o 230V (doméstica).',
  },
  {
    name: 'Introducir la intensidad de corriente',
    text: 'Escribe los Amperios (A) o Vatios (W) que consumirá el aparato al final del cable.',
  },
  {
    name: 'Medir la distancia del cable',
    text: 'Introduce la longitud de ida del cable en metros desde la fuente de energía hasta el receptor.',
  },
  {
    name: 'Elegir el material del conductor',
    text: 'Selecciona cobre (estándar) o aluminio para obtener el cálculo exacto de resistividad.',
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    { name: 'IEC 60364: Instalaciones eléctricas de baja tensión', url: 'https://www.iec.ch/homepage' },
    { name: 'Ley de Ohm y Resistividad: Wikipedia', url: 'https://es.wikipedia.org/wiki/Resistividad' },
    { name: 'REBT: Reglamento Electrotécnico de Baja Tensión', url: 'https://www.boe.es/eli/es/rd/2002/08/02/842' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guía Completa de Caída de Tensión', level: 2 },
    {
      type: 'paragraph',
      html: 'Si estás camperizando una furgoneta, diseñando una instalación solar o tirando cables para iluminar tu jardín, hay un enemigo invisible que puede arruinar tu proyecto: la <strong>caída de tensión</strong>. No es solo una cuestión técnica; es la diferencia entre una nevera que enfría y una que se apaga, o entre una instalación segura y un riesgo de incendio.',
    },
    { type: 'title', text: 'La Fórmula de la Caída de Tensión', level: 3 },
    {
      type: 'card',
      icon: 'mdi:function-variant',
      title: 'Cálculo Exacto con la Ley de Ohm',
      html: '<p>La fórmula es <strong>ΔV = (2 × L × I × ρ) / S</strong>, donde L es la longitud de ida en metros, I la corriente en amperios, ρ la resistividad del material (0,0178 Ω·mm²/m para cobre, 0,028 para aluminio) y S la sección del cable en mm². El factor 2 se debe a que la corriente recorre el cable de ida y de vuelta.</p>',
    },
    { type: 'title', text: 'La Paradoja del Bajo Voltaje', level: 3 },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Por qué el 12V necesita cables más gruesos que el 230V',
      html: '<p>Para transportar la misma potencia (1000W), a 230V necesitas solo 4,3A y un cable de 1,5mm². A 12V necesitas 83,3A y un cable de 25mm². Cuanto más bajo es el voltaje, <strong>más grueso debe ser el cable</strong> para transportar la misma energía sin pérdidas peligrosas.</p>',
    },
    { type: 'title', text: 'Consecuencias de una Caída Excesiva', level: 3 },
    {
      type: 'card',
      icon: 'mdi:thermometer-alert',
      title: 'Calor, Averías e Incendios',
      html: '<p>Un cable con excesiva caída de tensión convierte la energía eléctrica en calor. Las consecuencias prácticas son: neveras 12V que se apagan creyendo que la batería está baja, tiras LED que se degradan en color hacia el final, motores que no alcanzan su par nominal y, en casos extremos, fusión del PVC y riesgo de incendio.</p>',
    },
    { type: 'title', text: 'Tabla de Secciones y Usos Habituales', level: 3 },
    {
      type: 'paragraph',
      html: 'Referencia rápida para instalaciones 12V: <strong>1,5mm²</strong> iluminación ligera (hasta 10A), <strong>2,5mm²</strong> neveras y tomas USB (hasta 20A), <strong>6mm²</strong> placas solares (hasta 40A), <strong>16mm²</strong> conexión de baterías auxiliares (hasta 80A), <strong>25mm²</strong> circuitos principales de camper (hasta 120A). Estos valores son orientativos; usa siempre la calculadora con tu longitud y corriente exactas.',
    },
  ],
  ui: {
    heroDropLabel: 'Caída de Tensión Total',
    heroVoltsUnit: 'Voltios',
    heroPctLoss: '% pérdida',
    heroEffLabel: 'Eficiencia',
    statusExcellent: 'Excelente',
    statusAcceptable: 'Aceptable',
    statusCritical: 'Crítico',
    fieldVoltage: 'Voltaje',
    fieldMaterial: 'Material',
    materialCopper: 'Cobre',
    materialAlum: 'Alum.',
    fieldLoad: 'Carga',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Vatios',
    unitAmps: 'Amperios',
    fieldLength: 'Longitud del Cable (Ida)',
    unitMeters: 'metros',
    fieldSection: 'Sección del Cable',
    sectionInfo: 'Recomendado',
  },
};
