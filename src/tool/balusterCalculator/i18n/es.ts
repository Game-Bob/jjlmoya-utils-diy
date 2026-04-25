import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-balustres';
const title = 'Calculadora de Balustres: Espaciado Exacto para Barandillas';
const description =
  'Calcula el espacio exacto entre barrotes o balustres para barandillas cumpliendo la normativa de los 10cm. Planos automáticos.';

const faqData = [
  {
    question: '¿Cuál es la distancia máxima legal entre balustres?',
    answer:
      'En España (CTE) y en la mayoría de normativas internacionales, el espacio libre entre elementos de una barandilla no debe permitir el paso de una esfera de 10 cm de diámetro para evitar accidentes infantiles.',
  },
  {
    question: '¿Cómo se mide el espaciado: entre centros o huecos?',
    answer:
      "Nuestra calculadora proporciona ambos. El 'espaciado libre' es el hueco real entre barrotes (vital por seguridad), mientras que la 'distancia entre centros' (on-center) es la que marca dónde taladrar o fijar cada balustre.",
  },
  {
    question: '¿Qué pasa si el reparto no es exacto?',
    answer:
      'La calculadora ajusta automáticamente el número de barrotes para que el primer y el último hueco sean idénticos, garantizando la simetría visual y el cumplimiento estricto del hueco máximo permitido.',
  },
  {
    question: '¿Es mejor soldar o atornillar los balustres?',
    answer:
      'Depende del material. En acero, la soldadura ofrece máxima rigidez estructural. En madera o aluminio, se usan anclajes mecánicos o tornillos pasantes. Lo importante es que la barandilla soporte una fuerza horizontal de al menos 0.8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Medir la longitud total',
    text: 'Mide la distancia exacta entre el primer y el último poste donde irá instalada la barandilla.',
  },
  {
    name: 'Definir el grosor del balustre',
    text: 'Mide el ancho de un barrote individual (ej. 2x2 cm para tubo cuadrado o el diámetro si es redondo).',
  },
  {
    name: 'Establecer el hueco máximo',
    text: 'Indica la separación máxima deseada (recomendado 10 cm para cumplir normativa).',
  },
  {
    name: 'Obtener marcas de instalación',
    text: 'Revisa la lista de posiciones exactas para realizar los taladros y asegurar un reparto simétrico y seguro.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
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
      text: 'Guía Definitiva: Cómo Calcular el Espaciado de Balustres para Barandillas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Diseñar una barandilla segura y estéticamente perfecta es un arte que combina la precisión matemática con la normativa de construcción. Ya sea para una terraza, un balcón o una escalera interior, el cálculo correcto de los balustres (o barrotes) es el paso más crítico del proyecto. Un error de cálculo no solo arruina la simetría visual, sino que puede hacer que tu estructura sea ilegal e insegura.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: '¿Por qué es tan importante este cálculo?',
      html: '<p>No se trata solo de "rellenar el hueco". Se trata de cumplir con la <strong>Regla de la Esfera de 4 Pulgadas (10 cm)</strong>, una normativa internacional de seguridad diseñada para evitar accidentes infantiles.</p>',
    },
    {
      type: 'title',
      text: '1. La Normativa de Seguridad: La Regla de los 10 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de cortar la primera pieza de madera o metal, debes entender el "por qué" de las matemáticas. El Código Técnico de la Edificación (CTE) en España, así como el IRC (International Residential Code) en Estados Unidos, establecen una norma clara: <em>"El espacio libre entre los elementos verticales no debe permitir el paso de una esfera de 10 cm (4 pulgadas) de diámetro."</em>',
    },
    {
      type: 'paragraph',
      html: 'Esta medida no es arbitraria. Es el diámetro promedio de la cabeza de un niño pequeño (generalmente de menos de 1 año). Si un niño puede pasar el cuerpo pero la cabeza se queda atascada, el riesgo de asfixia es altísimo. Si puede pasar la cabeza, puede caerse al vacío. Por lo tanto, el objetivo de nuestra <strong>Calculadora de Balustres</strong> no es solo estético, es salvar vidas.',
    },
    {
      type: 'title',
      text: '2. El Problema Matemático: El Error del Poste de la Cerca',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En programación y construcción, existe un problema clásico llamado <em>"Fencepost Error"</em> (Error del Poste de la Cerca). Si quieres construir una valla de 10 metros con postes cada metro, ¿cuántos postes necesitas? La respuesta intuitiva es 10, pero la correcta es 11.',
    },
    {
      type: 'paragraph',
      html: 'Con los balustres ocurre algo similar, pero más complejo, porque el ancho del propio balustre ocupa espacio. La fórmula que utiliza nuestra herramienta resuelve este sistema de ecuaciones por ti:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Paso A: Calcular Huecos',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Primero determinamos cuántos balustres caben teóricamente si usáramos el espacio máximo permitido. Redondeamos este número hacia arriba para asegurar que los huecos resultantes sean <em>menores</em> que el máximo.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Paso B: Recalcular Espacio Exacto',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Una vez sabemos el número exacto de balustres (n), calculamos cuánto espacio "sobra" si restamos el ancho de toda la madera, y lo dividimos equitativamente entre los huecos (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Guía Paso a Paso para la Instalación Perfecta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tener los números es solo la mitad de la batalla. Aquí te explicamos cómo trasladar esas cifras del papel (o la pantalla) a la realidad de tu obra.',
    },
    {
      type: 'title',
      text: 'Pase 1: Medición de Precisión',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mide la distancia <strong>interna</strong> entre poste y poste. No midas desde el centro del poste. Necesitas saber el espacio luz exacto que vas a rellenar (L). Si tu barandilla tiene varios tramos, mide cada uno individualmente; las construcciones rara vez son perfectamente cuadradas y un error de 0.5 cm puede arruinar la simetría.',
    },
    {
      type: 'title',
      text: 'Paso 2: Encontrar el Centro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El error de principiante número uno es empezar a colocar balustres desde un extremo hacia el otro. Esto casi siempre resulta en un último hueco de tamaño extraño, rompiendo la armonía visual.<ul><li>Marca el <strong>centro exacto</strong> de la barandilla (L / 2).</li><li>Decide si quieres que en el centro haya un <em>balustre</em> o un <em>hueco</em>.</li><li>Si quieres un balustre en el centro: marca la mitad del ancho del balustre a cada lado de tu marca central.</li><li>Si quieres un hueco en el centro: marca la mitad de la distancia del hueco (g / 2) a cada lado.</li></ul>',
    },
    {
      type: 'title',
      text: 'Paso 3: Fabricar un Separador (Spacers)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No uses la cinta métrica para cada balustre. El error humano acumulativo hará que el último balustre esté desviado varios centímetros. Lo profesional es cortar un bloque de madera (o dos) con la medida exacta del hueco (g) que te ha dado nuestra calculadora.',
    },
    {
      type: 'paragraph',
      html: 'Usa este bloque como plantilla física. Coloca un balustre, pon el bloque, coloca el siguiente balustre apretado contra el bloque, y fíjalo. Esto garantiza una consistencia milimétrica.',
    },
    {
      type: 'title',
      text: '4. Materiales y Herramientas Necesarias',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Equipamiento para un acabado profesional',
      html: '<ul><li>Cinta métrica de alta precisión</li><li>Lápiz de carpintero</li><li>Nivel de burbuja (para la verticalidad)</li><li>Sierra ingleteadora (para cortes limpios)</li><li>Taladro y tornillos para madera</li><li>Bloques separadores (hechos a medida)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Preguntas Técnicas Adicionales',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: '¿Qué pasa si el último hueco no encaja?',
      html: '<p>Si has usado nuestra calculadora, esto no debería pasar. Sin embargo, en el mundo real, la madera se curva y los postes no siempre están rectos. Si al llegar al final te sobra o falta 1-2 mm, es imperceptible. Si te falta 1 cm, revisa tus bloques separadores, probablemente te has ido comiendo mm en cada paso.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '¿Puedo poner los balustres más separados si no tengo niños?',
      html: '<p>Legalmente, no. El código de construcción se aplica a la vivienda, no a los habitantes actuales. Si algún día vendes la casa, una barandilla fuera de normativa será un problema en la inspección. Además, las visitas (sobrinos, nietos) pueden estar en peligro.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: '¿Madera, Metal o Vidrio?',
      html: '<p>Esta calculadora funciona para <strong>cualquier elemento vertical repetitivo</strong>. Si usas cables de acero horizontales, la normativa es diferente (normalmente no deben permitir escalar, "efecto escalera"). Para vidrio, se considera un panel continuo y no aplica espaciado, sino resistencia al impacto.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"La arquitectura es la voluntad de la época traducida a espacio."</em></p><p>Esperamos que esta herramienta te ayude a construir espacios más seguros y bellos. Recuerda siempre consultar el código de construcción local de tu municipio, ya que puede haber variaciones específicas sobre la altura mínima (generalmente 90-110 cm) o cargas de fuerza.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensiones',
    sectionDesc: 'Ingresa las medidas de tu barandilla',
    labelRailLength: 'Longitud Total (L)',
    labelBalusterWidth: 'Ancho Balustre (w)',
    labelMaxGap: 'Espacio Máximo (g)',
    blueprintTitle: 'Plan de Montaje',
    blueprintRef: 'REF: BAL-001 // ESCALA: AUTO',
    labelRequired: 'Balustres Requeridos',
    labelExactGap: 'Gap Exacto',
    labelOnCenter: 'Centro a Centro',
    labelTotalSpaces: 'Espacios Totales',
    labelCoveredLength: 'Longitud Cubierta',
    labelDisclaimer: '* Las dimensiones mostradas son aproximadas para visualización.',
  },
};
