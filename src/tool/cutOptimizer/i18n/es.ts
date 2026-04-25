import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'optimizador-corte';
const title = 'Optimizador de Cortes de Listones y Tableros';
const description =
  'Calculadora gratuita para optimizar cortes en madera, metal o tuberías. Minimiza el desperdicio con algoritmo de Bin Packing 1D y 2D. Ideal para carpintería, metalurgia y reformas.';

const faqData = [
  {
    question: '¿Qué es un optimizador de corte 1D?',
    answer:
      'Es una herramienta que usa algoritmos matemáticos (como el Bin Packing Problem) para determinar cómo cortar piezas más pequeñas de una pieza larga estándar (listón, perfil, tubería) con el mínimo desperdicio posible.',
  },
  {
    question: '¿Por qué incluir el grosor del corte (Kerf)?',
    answer:
      'Cada vez que la sierra corta el material, se consume unos milímetros (normalmente entre 2mm y 4mm según el disco). Si no calculas este espacio, las últimas piezas de tu lista quedarán más cortas de lo planeado.',
  },
  {
    question: '¿Puedo mezclar piezas de diferentes longitudes?',
    answer:
      'Sí, nuestra calculadora acepta cualquier combinación de longitudes y cantidades. El algoritmo evaluará todas las combinaciones posibles y priorizará el aprovechamiento máximo del material de stock.',
  },
  {
    question: '¿Cómo guardo mi plan de corte?',
    answer:
      'Una vez optimizado, puedes imprimir la página o hacer una captura de pantalla del esquema visual. Esto te servirá de guía física en el taller para no confundir el orden de los cortes.',
  },
];

const howToData = [
  {
    name: 'Definir el material base (Stock)',
    text: 'Introduce la longitud total del listón o perfil disponible (ej. 2400mm o 6000mm).',
  },
  {
    name: 'Configurar el grosor del disco (Kerf)',
    text: 'Ajusta los milímetros que la sierra elimina en cada paso para que el cálculo sea milimétrico.',
  },
  {
    name: 'Listar las piezas deseadas',
    text: 'Escribe la longitud y cantidad de cada pieza que necesitas para tu proyecto.',
  },
  {
    name: 'Ejecutar la optimización',
    text: 'Obtén el esquema de corte más eficiente y el porcentaje exacto de desperdicio generado.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
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
      text: 'Guía Definitiva de Optimización de Corte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La optimización de corte, conocida técnicamente como el <strong>Problema de Corte de Stock</strong>, es uno de los desafíos logísticos más fascinantes en la ingeniería industrial. Para un proyecto con 20 piezas y 5 barras de stock, existen millones de combinaciones posibles. Un algoritmo computacional puede encontrar la solución óptima en milisegundos, reduciendo el desperdicio habitual del 15% a menos del 5%.',
    },
    {
      type: 'title',
      text: 'Corte Lineal 1D y Corte de Panel 2D',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Corte Lineal para Listones y Perfiles',
      html: '<p>En el <strong>corte lineal (1D)</strong>, la optimización ocurre en una sola dimensión: la longitud. El ancho del material se asume constante. Es ideal para madera dimensional (listones, vigas), perfilería metálica y de aluminio, tuberías de PVC o cobre, y varillas roscadas.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Corte de Panel para Tableros y Chapas',
      html: '<p>En el <strong>corte de panel (2D)</strong>, se gestionan dos dimensiones: ancho y largo. La herramienta utiliza algoritmos tipo guillotina, donde cada corte va de borde a borde. Ideal para tableros derivados (MDF, aglomerado), contrachapado, vidrio, metacrilato y chapas metálicas.</p>',
    },
    {
      type: 'title',
      text: 'El Factor Crítico: El Grosor del Corte (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El <strong>Kerf</strong> es el material que se elimina en cada corte. Un disco de sierra estándar de mesa consume entre 3,0mm y 3,2mm por corte. Una sierra circular de mano consume 1,5 a 2,5mm. Un corte láser en metacrilato apenas 0,1 a 0,3mm. Ignorar el kerf en un proyecto con 10 cortes en listones de 2400mm puede hacerte perder entre 30mm y 32mm de material útil.',
    },
    {
      type: 'title',
      text: 'El Algoritmo Best Fit Decreasing',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Cómo Funciona el Optimizador por Dentro',
      html: '<p>El núcleo del optimizador usa la estrategia <strong>Best Fit Decreasing (BFD)</strong>: primero ordena todas las piezas de mayor a menor longitud (las grandes son más difíciles de encajar). Luego, para cada pieza, busca el retal existente donde quepa dejando el menor sobrante posible. Solo si no cabe en ninguno, abre una nueva barra virgen. Este proceso reduce el desperdicio en un orden de magnitud respecto a la selección aleatoria.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Lineal (Barras)',
    modePanelLabel: 'Panel (Tableros)',
    configTitle: 'Configuración Material',
    labelStockLength: 'Largo del Material (mm)',
    labelStockWidth: 'Ancho del Material (mm)',
    labelKerf: 'Grosor de Hoja / Kerf (mm)',
    cutsTitle: 'Lista de Cortes',
    placeholderLength: 'Largo',
    placeholderWidth: 'Ancho',
    placeholderQty: 'Cant.',
    btnRemoveTitle: 'Eliminar',
    statStockUsed: 'Material Usado',
    statTotalCuts: 'Cortes Totales',
    statWaste: 'Desperdicio Total',
    statEfficiency: 'Eficiencia',
    vizTitle: 'Visualización de Corte',
    emptyState: 'Añade cortes y pulsa calcular para ver el plan de corte.',
    noValidCuts: 'No se pudieron generar cortes válidos. Verifica las medidas.',
    noValidPanels: 'No se pudieron generar paneles válidos. Verifica que las piezas quepan en el tablero.',
    stockLabel: 'Material',
    panelLabel: 'Panel',
    wasteLabel: 'Desperdicio:',
    effLabel: 'Efic:',
  },
};
