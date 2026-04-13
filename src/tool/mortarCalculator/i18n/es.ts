import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';

const slug = 'morteros';
const title = 'Proporciones Morteros de Cal Tradicionales: Enfoscados y Revocos';
const description =
  'Calculadora gratuita para morteros de cal y arena. Obtén las proporciones exactas para enfoscados, revocos y enlucidos según métodos tradicionales (Vitruvio)';

const faqData = [
  {
    question: '¿Por qué usar cal en lugar de cemento?',
    answer:
      "La cal es un material 'vivo' y transpirable que permite la evacuación del vapor de agua, evitando humedades por condensación. Además, es más flexible que el cemento, lo que reduce la aparición de grietas en muros antiguos.",
  },
  {
    question: '¿Cuál es la proporción ideal para un enfoscado?',
    answer:
      'Según la tradición vitruviana, para arena de río limpia se usa una proporción de 1:3 (una parte de cal por tres de arena). Para arena de mina, se recomienda 1:2 para asegurar la cohesión del mortero.',
  },
  {
    question: '¿Qué es el revoco fino o enlucido?',
    answer:
      'Es la última capa del muro. Se usa una arena mucho más fina (polvo de mármol en ocasiones) y una mayor proporción de cal para obtener un acabado liso y sedoso que puede ser pintado o dejado al natural.',
  },
  {
    question: '¿Cuánto tiempo tarda en endurecer el mortero de cal?',
    answer:
      'La cal aérea endurece por carbonatación (absorbiendo CO2 del aire). El proceso inicial de fraguado es de unos días, pero la dureza máxima se alcanza meses después, ganando resistencia con el paso de los años.',
  },
];

const howToData = [
  {
    name: 'Identificar el tipo de soporte',
    text: 'Comprueba si vas a trabajar sobre piedra, ladrillo antiguo o bloque. El soporte debe estar limpio y ligeramente húmedo.',
  },
  {
    name: 'Elegir la granulometría de la arena',
    text: 'Usa arena gruesa para la capa de agarre y arena fina para el acabado cosmético. La pureza de la arena define la calidad del mortero.',
  },
  {
    name: 'Mezcla de componentes',
    text: 'Mezcla la cal y la arena en seco antes de añadir agua. La consistencia debe ser plástica, no líquida.',
  },
  {
    name: 'Aplicación y fratasado',
    text: 'Extiende el mortero con llana y usa un fratas para igualar la superficie cuando el mortero empiece a tirar (endurecerse superficialmente).',
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    {
      name: 'Vitruvio - De Architectura, Libro VII',
      url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:2007.01.0072',
    },
    {
      name: 'Norma EN 459 - Cales para la Construcción',
      url: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0053796',
    },
    {
      name: 'CTE - Código Técnico de la Edificación',
      url: 'https://www.codigotecnico.org/',
    },
    {
      name: 'ICCROM - Conservation of Historic Masonry',
      url: 'https://www.iccrom.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tratado de los Morteros: La Sabiduría de Vitruvio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Marco Vitruvio Polión, en el Libro VII de su <em>De Architectura</em>, no solo describió técnicas, sino una filosofía. Entendía que la eternidad de un edificio reside en sus uniones. El mortero no es mero pegamento; es el tejido conectivo. Sus proporciones (1:3, 1:2, 1:1) son el legado de siglos de observación empírica romana, buscando el equilibrio perfecto entre resistencia y flexibilidad.',
    },
    {
      type: 'title',
      text: 'Granulometría del Árido: La Clave de la Calidad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calidad de un mortero de cal depende en gran medida de la granulometría del árido. Para el <strong>Trullissatio</strong> (enfoscado base), se usa arena gruesa de río de 2-5 mm, con densidad 1,6 kg/L. Para el <strong>Arenato</strong> (revoco intermedio), arena media lavada de 0,5-2 mm, densidad 1,5 kg/L. Para el <strong>Marmorato</strong> (enlucido fino), polvo de mármol (marmolina) menor de 0,5 mm, densidad 1,2 kg/L.',
    },
    {
      type: 'title',
      text: 'El Misterio del Agarre Mecánico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El agarre no es químico, es <strong>mecánico</strong>. Imagina millones de raíces microscópicas. El mortero debe penetrar en los poros del ladrillo para crear una "llave" física. Por eso Vitruvio prohibía aplicar capas gruesas sobre superficies lisas. Sin porosidad, no hay anclaje. El muro y el mortero deben convertirse en una sola entidad monolítica.',
    },
    {
      type: 'title',
      text: 'El Arte del Fratasado',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Técnica del fratás de madera',
      html: '<p>El fratasado no es solo alisar; es preparar el futuro. El uso del <strong>fratás de madera</strong> es crucial en las capas base porque "abre el poro", dejando una textura rugosa ideal para que la siguiente capa se agarre. La llana de acero cierra el poro y saca el agua a la superficie ("quemar" el mortero), técnica reservada solo para el enlucido final o estucos.</p><p>El secreto está en el <em>tempo</em>: saber esperar a que el mortero haya "tirado" (endurecido ligeramente) pero siga húmedo. Es un diálogo silencioso entre la herramienta y la cal.</p>',
    },
    {
      type: 'title',
      text: 'El Ciclo de la Cal: Un Material Vivo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diferencia del cemento moderno, la cal es un material "vivo". Fragua lentamente mediante <strong>carbonatación</strong>: absorbe el CO₂ del aire para volver a convertirse en piedra caliza. Es un ciclo eterno: de la piedra venimos y a la piedra volvemos. Esta respiración permite que el edificio se adapte a los movimientos sin agrietarse, sanando sus propias heridas con el tiempo.',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Vitruvio, De Architectura, Libro VII',
      html: '<p><em>"La preparación de la cal se hace de la siguiente manera: se toman piedras las más duras y lo más pesadas que se puedan encontrar [...] Una vez cocidas, se apagan con agua para que se deshagan en polvo."</em></p><p>Las proporciones vitruvianas han resistido dos mil años porque no son arbitrarias: son el resultado de la observación sistemática del comportamiento de los materiales.</p>',
    },
  ],
  ui: {
    leftTitle: 'Sistema Vitrubio',
    centerTitle: 'Materiales Disponibles',
    rightTitle: 'Cobertura Estimada',
    btnCal: 'Cal',
    btnArena: 'Arena',
    labelCalPasta: 'Pasta (1.30 kg/L)',
    labelCalPolvo: 'Polvo NHL (0.65 kg/L)',
    labelQuantity: 'Cantidad disponible:',
    labelNeedsAlso: 'Necesitarás también:',
    labelProportion: 'Proporción: ',
    labelCoverage: 'Cobertura:',
    labelThickness: 'Espesor total:',
    labelLayers: 'Capas:',
    labelWasteFactor: 'Factor de merma: 20%',
    layersSingular: 'mano',
    layersPlural: 'manos',
    materialCal: 'Cal',
    materialArena: 'Arena',
    materialMarmol: 'Mármol',
    phaseDescTrullissatio: 'Capa base rugosa. 2 manos de 15mm. Proporción 1:3 (Cal:Arena de río).',
    phaseDescArenato: 'Capa intermedia. 2 manos de 8mm. Proporción 1:2 (Cal:Arena lavada).',
    phaseDescMarmorato: 'Acabado fino. 1 mano doble de 4mm. Proporción 1:1 (Cal:Polvo de mármol).',
    granulometryTitle: 'Granulometría del Árido',
    grainTitleCoarse: 'Arena Gruesa (Cero)',
    grainSubtitleCoarse: 'Arena de Río',
    grainUsageCoarse: 'Enfoscado base',
    grainTitleMedium: 'Arena Media (Cero Fino)',
    grainSubtitleMedium: 'Arena Lavada',
    grainUsageMedium: 'Revoco intermedio',
    grainTitleFine: 'Polvo Fino',
    grainSubtitleFine: 'Polvo de Mármol (Marmolina)',
    grainUsageFine: 'Enlucido fino',
    specSize: 'Tamaño:',
    specUse: 'Uso:',
    specDensity: 'Densidad:',
  },
};
