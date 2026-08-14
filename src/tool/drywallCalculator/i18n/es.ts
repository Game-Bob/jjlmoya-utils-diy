import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'calculadora-placas-pladur-yeso';
const title = 'Calculadora de Placas de Pladur y Estructura Metalica';
const description = 'Calculadora profesional de despiece para tabiques y trasdosados de pladur y yeso laminado. Obtén la cantidad exacta de placas, montantes C, canales U, tornillos, cinta y pasta de agarre.';

const faqData = [
  {
    question: '¿Cómo calcular cuántas placas de pladur necesito para un tabique?',
    answer: 'Calcula la superficie de la pared multiplicando la longitud por la altura del techo. Para tabiques a dos caras, multiplica la superficie por 2; para doble placa a dos caras, multiplica por 4. Divide la superficie total de revestimiento entre la superficie útil de cada placa (2.4 m² para placa estándar de 120x200 cm o 3.0 m² para placa de 120x250 cm) y suma un 10% adicional por recortes, puertas y ventanas.',
  },
  {
    question: '¿Cuándo usar separación de montantes a 40 cm o a 60 cm?',
    answer: 'Usa la separación estándar de 60 cm entre ejes de montantes C para tabiques residenciales secos de hasta 3 metros de altura. Es obligatorio pasar a un paso de 40 cm entre ejes en paredes que vayan a recibir alicatado cerámico pesado, zonas húmedas (baños y cocinas), sistemas de insonorización con doble placa o cuando la altura del tabique supere los 3 metros.',
  },
  {
    question: '¿Qué tipo de placa de yeso laminado elegir según la estancia?',
    answer: 'Selecciona Placa Estándar Blanca (Tipo A) para dormitorios, salones y distribuidores; Placa Hidrófuga Verde (Tipo H1) con baja absorción de agua para baños, lavaderos y cocinas; Placa Ignífuga Rosa (Tipo F) con fibra de vidrio para chimeneas, cuartos de calderas y sectorización de incendios; y Placa Acústica Azul de alta densidad para aislamiento fónico entre dormitorios.',
  },
  {
    question: '¿Cuántos tornillos se necesitan por cada placa de pladur?',
    answer: 'Calcula aproximadamente 30 tornillos autotaladrantes (3.5x25 mm) por cada placa de 120x200 cm en fijación monocapa. Distribuye los tornillos a una distancia de 25 cm en todo el perímetro de la placa y a 30 cm en los montantes verticales intermedios. Para la segunda capa en sistemas de doble placa, usa tornillos de 3.5x35 mm.',
  },
  {
    question: '¿Por qué es obligatoria la banda acústica bajo los canales horizontales?',
    answer: 'La banda estanca monoadhesiva de espuma de polietileno desolidariza mecánicamente los canales horizontales U del suelo y del techo. Esto interrumpe la transmisión de ruidos de impacto y vibraciones por flanqueo, garantizando la estanqueidad acústica y térmica del perímetro del tabique.',
  },
];

const howToData = [
  { name: 'Introducir Dimensiones del Tabique', text: 'Indica la longitud lineal del tabique y la altura libre hasta el techo en metros o pies.' },
  { name: 'Configurar Modulación y Placas', text: 'Selecciona el paso de montantes (40 cm o 60 cm), el número de capas (monocapa o doble placa) y las caras revestidas (1 o 2 caras).' },
  { name: 'Revisar Despiece y Esquema CAD', text: 'Inspecciona la lista detallada de materiales (montantes, canales, tornillos, cinta, pasta) y el dibujo técnico de elevación.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Principios de Dimensionado Técnico en Tabiquería Seca y Estructura Metálica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La construcción de sistemas de tabiquería ligera con placas de yeso laminado (PYL) requiere calcular con precisión la perfilaría de acero galvanizado (montantes C y canales U) junto a la traba de juntas. Según la normativa <strong>UNE-EN 520 y CTE DB-SE</strong>, la correcta modulación de la estructura metálica evita flectaciones en el paramento, grietas en las uniones y pérdidas de aislamiento acústico.',
    },
    {
      type: 'title',
      text: 'Reglas de Modulación de Montantes: Paso a 40 cm vs 60 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La distancia entre los ejes de los montantes C condiciona la rigidez mecánica del tabique. El <strong>paso estándar a 60 cm</strong> coincide exactamente con el ancho habitual de las placas de 120 cm, haciendo que las juntas verticales apoyen en el centro del ala del perfil. No obstante, se exige <strong>paso a 40 cm</strong> cuando se instala alicatado cerámico pesado sobre la pared, en tabiques de altura superior a 3.00 metros o en áreas comerciales expuestas a impactos.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Traba Obligatoria de Placas y Patrón de Atornillado',
      html: '<p>Nunca hagas coincidir las juntas verticales ni horizontales entre placas contiguas o entre caras opuestas del tabique. Mantén una traba mínima de 40 cm entre bordes para evitar cruciformes que propaguen fisuras. Fija las placas mediante tornillos autotaladrantes de 3.5x25 mm colocados a <strong>25 cm en los bordes perimetrales</strong> y a <strong>30 cm en los montantes intermedios</strong>, avellanando la cabeza ligeramente por debajo del papel sin romper el núcleo de yeso.</p>',
    },
    {
      type: 'title',
      text: 'Margen de Desperdicio y Cálculo de Pasta y Cinta de Juntas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Añade siempre un <strong>10% de desperdicio estimado</strong> en perfiles y placas para absorber los recortes inevitables en jambas de puertas, ventanas y faldones inclinados. El tratamiento de juntas requiere aproximadamente 0.8 kg de pasta de secado o fraguado por metro cuadrado de placa, junto a la cinta de papel microperforada de alta resistencia a la tracción.',
    },
  ],
  ui: {
    unitSystemLabel: 'Sistema de Medida',
    unitMetric: 'Métrico (m, cm, kg)',
    unitImperial: 'Imperial (ft, in, lb)',

    paramLengthLabel: 'Longitud del Tabique',
    paramHeightLabel: 'Altura del Tabique',
    paramSpacingLabel: 'Paso de Montantes',
    paramSpacing40Metric: '40 cm (Carga Alta)',
    paramSpacing60Metric: '60 cm (Estandard)',
    paramSpacing40Imperial: '16 in (Carga Alta)',
    paramSpacing60Imperial: '24 in (Estandard)',
    paramLayersLabel: 'Capas de Placa',
    paramSingleLayer: 'Monocapa',
    paramDoubleLayer: 'Doble Placa',
    paramSidesLabel: 'Caras Revestidas',
    paramDoubleSided: '2 Caras (Tabique)',
    paramSingleSided: '1 Cara (Trasdosado)',
    paramBoardTypeLabel: 'Tipo de Placa',
    boardTypeStandard: 'Estandard (Tipo A)',
    boardTypeMoisture: 'Hidrofuga (Tipo H1)',
    boardTypeFire: 'Ignifuga (Tipo F)',
    boardTypeAcoustic: 'Acustica (Tipo A)',
    paramWasteLabel: 'Margen Desperdicio',

    summaryWallArea: 'Superficie Pared Net',
    summaryBoardArea: 'Superficie Total Placas',

    resBoardsLabel: 'Placas de Pladur',
    resBoardsUnit: 'unidades',
    resStudsLabel: 'Montantes Verticales',
    resStudsUnit: 'piezas',
    resTracksLabel: 'Canales Horizontales',
    resTracksUnit: 'tiras',
    resDrywallScrewsLabel: 'Tornillos Pladur',
    resDrywallScrewsUnit: 'unidades',
    resFramingScrewsLabel: 'Tornillos Estructura',
    resFramingScrewsUnit: 'unidades',
    resJointTapeLabel: 'Cinta de Juntas',
    resJointTapeUnit: 'longitud',
    resJointCompoundLabel: 'Pasta de Juntas',
    resJointCompoundUnit: 'peso',
    resAcousticBandLabel: 'Banda Estanca Acustica',
    resAcousticBandUnit: 'longitud',

    diagramWallTitle: 'Elevacion Tecnica CAD',
    diagramStudLegend: 'Montantes C',
    diagramTrackLegend: 'Canales U',
    diagramBoardLegend: 'Traba de Placas',
    diagramModeStructure: 'Estructura',
    diagramModeBoard: 'Placas',
  },
};
