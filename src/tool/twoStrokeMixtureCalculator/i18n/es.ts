import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-mezcla-2-tiempos';
const title = 'Calculadora de Mezcla de Gasolina para 2 Tiempos: Ratios Precisos';
const description = 'Calcula al instante la proporción exacta de aceite para tu motor de 2 tiempos. Ideal para motosierras, ciclomotores, motos y maquinaria de jardín. Soporta ratios 1:25, 1:33, 1:40 y 1:50.';

const faqData = [
  {
    question: '¿Qué es un motor de 2 tiempos?',
    answer: 'Un motor de 2 tiempos realiza la admisión y la explosión en solo dos movimientos del pistón, lo que lo hace más sencillo y ligero que los de 4 tiempos. Se usan en motosierras, sopladores, ciclomotores y algunas motos. Requieren que el aceite se mezcle directamente con la gasolina para su lubricación.',
  },
  {
    question: '¿Cuáles son las proporciones de mezcla más comunes?',
    answer: 'Las ratios habituales son 1:25 (mezcla rica, protectora), 1:33 (maquinaria antigua), 1:40 (estándar) y 1:50 (mezcla pobre, motores modernos). Consulta siempre el manual de tu motor; una proporción incorrecta puede averiarlo.',
  },
  {
    question: '¿Qué pasa si la mezcla no es correcta?',
    answer: 'Demasiado aceite (mezcla rica) provoca humo excesivo, ensucia las bujías y reduce el rendimiento. Poco aceite (mezcla pobre) provoca el gripado del motor, daños en el pistón y averías catastróficas.',
  },
  {
    question: '¿Qué tipo de aceite debo usar?',
    answer: 'Usa aceite específico para motores de 2 tiempos. Los aceites sintéticos premium ofrecen mejor protección y una combustión más limpia que los convencionales. Nunca uses aceite de motor de 4 tiempos, ya que dañará el motor.',
  },
  {
    question: '¿Cómo mezclo la gasolina y el aceite?',
    answer: 'Vierte una parte de la gasolina en un recipiente limpio, añade la cantidad de aceite calculada y luego completa con el resto de la gasolina. Mezcla bien agitando durante 1 o 2 minutos. Etiqueta el recipiente con la fecha de la mezcla.',
  },
];

const howToData = [
  { name: 'Identifica tu ratio', text: 'Busca el manual de tu motor. Ratios comunes: motosierras (1:40 o 1:50), ciclomotores (1:33), motos antiguas (1:25). Usar el ratio incorrecto dañará tu motor.' },
  { name: 'Mide el volumen de gasolina', text: 'Decide cuánta gasolina necesitas. Esta herramienta funciona con litros, galones o cualquier unidad. Una medición precisa de la gasolina garantiza la cantidad correcta de aceite.' },
  { name: 'Calcula el aceite necesario', text: 'Introduce el volumen de gasolina y el ratio. La calculadora te dirá exactamente cuánto aceite (en ml o litros) necesitas para una mezcla perfecta.' },
  { name: 'Mezcla con cuidado', text: 'Vierte la gasolina en un recipiente limpio, añade el aceite calculado y completa con el combustible restante. Agita 1-2 minutos para mezclarlo bien.' },
  { name: 'Etiqueta y usa', text: 'Marca el recipiente con la fecha y el ratio. Usa la mezcla antes de 30 días para obtener los mejores resultados (especialmente con aceites sintéticos).' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculadora de Mezcla para Motores de 2 Tiempos: Ratios de Aceite Precisos para Motosierras y Ciclomotores', level: 2 },
    { type: 'paragraph', html: 'Los motores de dos tiempos necesitan una mezcla exacta de gasolina y aceite para sobrevivir. Una mezcla incorrecta puede destruir tu motor en cuestión de minutos. Esta calculadora determina al instante la cantidad exacta de aceite que necesitas según tu volumen de combustible y tipo de motor, eliminando cualquier duda en el taller.' },

    { type: 'title', text: 'Por qué los motores de 2 tiempos necesitan aceite en la gasolina', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'La diferencia crítica', html: 'A diferencia de los motores de 4 tiempos con cárter de aceite separado, los de 2 tiempos mezclan el aceite directamente con el combustible. En cada ciclo, el motor quema la mezcla para obtener energía y lubricación. No hay bomba de aceite independiente; solo la mezcla mantiene vivos los pistones.' },

    { type: 'title', text: 'Referencia rápida de ratios de 2 tiempos', level: 3 },
    { type: 'table', headers: ['Ratio', '% Aceite', 'Uso recomendado', 'Tipo de motor', 'Características'], rows: [
      ['1:25', '3,85%', 'Máxima protección', 'Maquinaria anterior a los 80, cargas altas, motos clásicas', 'Mezcla rica: más humo, más carbonilla, máxima protección contra el gripado'],
      ['1:33', '2,94%', 'Maquinaria clásica', 'Motores pequeños de los 80-90, motosierras antiguas', 'Riqueza moderada: equilibrio entre protección y eficiencia'],
      ['1:40', '2,44%', 'Estándar de la industria', 'La mayoría de motosierras, ciclomotores y motores modernos', 'Recomendación estándar: optimizado para aceites sintéticos actuales'],
      ['1:50', '1,96%', 'Eficiencia moderna', 'Últimas motosierras, ciclomotores de alto rendimiento', 'Mezcla pobre: menos humo, combustión más limpia, diseñado para aceites sintéticos premium']
    ] },

    { type: 'title', text: 'Consecuencias de un ratio incorrecto', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Exceso de aceite (Mezcla rica)', con: 'Humo blanco excesivo, bujías sucias, acumulación de carbonilla, mala aceleración, fallo del motor' },
      { pro: 'Falta de aceite (Mezcla pobre)', con: 'El pistón se gripa en segundos, paredes del cilindro rayadas, daños catastróficos, fallo total' },
      { pro: 'Ratio correcto', con: 'Funcionamiento suave, lubricación adecuada, combustión óptima, mayor vida útil, arranque fiable' }
    ] },

    { type: 'title', text: 'Ratios comunes por maquinaria', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Motosierras', html: '<strong>Stihl, Husqvarna, Echo:</strong> Los modelos modernos suelen requerir 1:40 o 1:50. Consulta siempre tu manual; usar 1:25 en una motosierra moderna puede ensuciar las bujías. Las máquinas Stihl antiguas (años 90 o anteriores) pueden especificar 1:25 o 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Ciclomotores y Motos', html: '<strong>Vespa, Honda, Yamaha:</strong> La mayoría requiere 1:33 en modelos antiguos y 1:40-1:50 en versiones modernas. Los ciclomotores de alto rendimiento suelen especificar 1:50. El manual de servicio es tu única fuente de verdad.' },
    { type: 'card', icon: 'mdi:tools', title: 'Sopladores y Cortabordes', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Normalmente 1:50 (modernos) o 1:40 (algo más antiguos). Estas herramientas están diseñadas para un uso estacional rápido, por lo que los ratios pobres reducen el humo sin sacrificar fiabilidad.' },

    { type: 'title', text: 'El tipo de aceite importa tanto como el ratio', level: 3 },
    { type: 'comparative', items: [
      { title: 'Aceite de 2T Convencional', description: 'Opción económica para uso ocasional. Más cenizas, más humo, protección adecuada para ratios estándar.', icon: 'mdi:beaker', points: ['Menor coste', 'Humo más visible', 'Más acumulación de ceniza', 'Funciona bien para 1:40'] },
      { title: 'Aceite de 2T Sintético', description: 'La opción premium. Combustión más limpia, mejor protección, permite ratios más pobres. Estable ante temperaturas.', icon: 'mdi:flame', points: ['Mínimo humo', 'Mejor protección del motor', 'Permite 1:50 con seguridad', 'Mayor estabilidad en el almacenaje'], highlight: true },
      { title: 'Mezcla Sintética (Semi sintético)', description: 'Punto medio entre convencional y sintético. Buena protección a coste moderado. Recomendación común de fabricantes.', icon: 'mdi:beaker-outline', points: ['Rendimiento equilibrado', 'Coste moderado', 'Ideal para ratios 1:40', 'Menos humo que el convencional'] }
    ], columns: 3 },

    { type: 'title', text: 'Proceso de mezcla paso a paso', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'La forma correcta de mezclar', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Usa un recipiente específico</strong> reservado solo para mezcla. Limpio, seco y marcado.</li><li><strong>Vierte la mitad de la gasolina</strong> en el recipiente primero.</li><li><strong>Añade la cantidad de aceite calculada</strong> (usa esta calculadora para mayor precisión).</li><li><strong>Añade el resto de la gasolina</strong> hasta alcanzar el volumen deseado.</li><li><strong>Agita enérgicamente durante 1-2 minutos</strong> hasta que el color sea uniforme. Una mezcla homogénea garantiza una lubricación constante.</li><li><strong>Etiqueta el recipiente</strong> con la fecha, el ratio y el tipo de combustible.</li><li><strong>Usa la mezcla en un plazo de 30 días</strong> (los aceites sintéticos pueden aguantar hasta 60).</li></ol>' },

    { type: 'title', text: 'Cuándo dudar del manual de tu máquina', level: 3 },
    { type: 'tip', html: '<strong>Verifica siempre primero el ratio en el manual de tu equipo.</strong> Si no lo encuentras, visita la web del fabricante o contacta con su soporte. Nunca supongas: un ratio incorrecto anula garantías y arriesga el motor. Si la máquina es antigua y has perdido el manual, busca el número de modelo online. El coste de un manual nuevo es mucho menor que el de reconstruir un motor.' },

    { type: 'title', text: 'Glosario: Términos de 2 Tiempos', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mezcla Pobre (Lean)', definition: 'Combustible con poco aceite (ratio alto como 1:50). Riesgo de gripado por lubricación insuficiente.' },
      { term: 'Mezcla Rica (Rich)', definition: 'Combustible con mucho aceite (ratio bajo como 1:25). Provoca humo excesivo, suciedad en bujías y carbonilla.' },
      { term: 'Mezcla Homogénea', definition: 'Mezcla uniforme de gasolina y aceite, lograda tras agitar bien. Es vital para una lubricación y combustión constantes.' },
      { term: 'Gripado (Seizure)', definition: 'Cuando el pistón se bloquea dentro del cilindro por falta de lubricación y exceso de fricción. Resulta en avería total.' },
      { term: 'Aceite Sintético', definition: 'Aceite formulado en laboratorio que ofrece mayor protección, combustión limpia y estabilidad térmica que los minerales.' },
      { term: 'Motor de 2 Tiempos', definition: 'Motor que completa el ciclo de combustión en dos movimientos del pistón. Más ligero y simple que los de 4 tiempos.' },
      { term: 'Motor de 4 Tiempos', definition: 'Motor con cárter de aceite separado y ciclo de cuatro etapas. El aceite circula por conductos y no se mezcla con la gasolina.' }
    ] },

    { type: 'title', text: 'Cómo esta calculadora te ahorra tiempo y dinero', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Cálculos precisos, sin errores de medida', icon: 'mdi:check-circle' },
      { value: 'Al instante', label: 'Resultados en segundos, sin adivinanzas', icon: 'mdi:flash' },
      { value: '4 Ratios', label: 'Cubre 1:25, 1:33, 1:40 y 1:50', icon: 'mdi:counter', trend: { value: 'Más ratios personalizados', positive: true } },
      { value: 'Compartible', label: 'Copia y comparte tu configuración mediante URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Errores comunes que destrozan motores', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Usar aceite de 4 tiempos en motores de 2 tiempos', icon: 'mdi:alert', badge: 'Muerte del motor', html: 'Los aceites de 4 tiempos están diseñados para circular por un bloque motor. En un depósito de 2 tiempos, no se queman limpiamente y destruirán tu motor en horas.' },
    { type: 'diagnostic', variant: 'warning', title: 'Olvidar mezclar bien', icon: 'mdi:alert', badge: 'Riesgo de gripado', html: 'Si el aceite y la gasolina se separan por una mezcla incompleta, partes del motor funcionarán sin lubricación. Agita al menos 1-2 minutos.' },
    { type: 'diagnostic', variant: 'warning', title: 'Usar gasolina vieja (más de 60 días)', icon: 'mdi:alert', badge: 'Residuos gomosos', html: 'La gasolina con etanol se degrada con el tiempo. La mezcla vieja deja depósitos en carburadores e inyectores. Mezcla solo lo que vayas a usar en 30 días.' },

    { type: 'title', text: 'Resumen de Preguntas Frecuentes', level: 3 },
    { type: 'summary', title: 'Antes de mezclar', items: [
      'Consulta el manual para saber el ratio exacto especificado por el fabricante.',
      'Asegúrate de usar aceite de 2 tiempos, no de 4 tiempos ni otros aceites.',
      'Usa un recipiente limpio y dedicado exclusivamente a la mezcla.',
      'Usa gasolina fresca (no almacenada durante meses) y aceite compatible.',
      'Mezcla bien y etiqueta con fecha, ratio y tipo de combustible.',
      'Usa la mezcla en un plazo de 30 días para mejores resultados.'
    ] },
  ],
  ui: {
    titleMain: 'Calculadora de Mezcla de Gasolina para 2 Tiempos',
    labelFuelVolume: 'Volumen de Gasolina',
    labelRatio: 'Ratio de Mezcla',
    labelOilRequired: 'Aceite Necesario',
    labelTotalMixture: 'Mezcla Total',
    labelRichness: 'Riqueza de la Mezcla',
    labelPresets: 'Ratios Comunes',
    labelCustomRatio: 'Ratio Personalizado (1:X)',
    btnClear: 'Limpiar',
    btnCopyResults: 'Copiar Resultados',
    btnSwitchMode: 'Cambiar Modo',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Pobre (menos aceite, riesgo de gripado)',
    richBalanced: 'Equilibrada (mezcla estándar)',
    richRich: 'Rica (más aceite, más humo, protección del motor)',
    msgReady: 'Listo',
    msgMixtureReady: 'Mezcla calculada',
    tooltipFuelVolume: 'Introduce la cantidad de gasolina en litros',
    tooltipRatio: 'Introduce el ratio como 25, 33, 40 o 50 (para 1:25, 1:33, etc.)',
    recipientLabel: 'Recipiente de Mezcla',
    oilPercentage: '% Aceite',
    labelVolume: 'Volumen',
    labelRatioShort: 'Ratio',
    labelOilTip: 'Mezcla al 2% aceite = ratio 1:50',
    labelMixingTips: 'Consejos de Mezcla',
    labelMixingTipsDesc: 'Mezcla en un recipiente limpio: primero la gasolina, añade el aceite medido y luego el resto de gasolina. Agita bien (1-2 min) para una mezcla homogénea. Etiqueta con fecha y ratio.',
    recipePrefix: 'Para',
    recipeAt: 'de gasolina al',
    recipeAdd: 'añade exactamente',
    recipeOfOil: 'de aceite de 2 tiempos.',
    copyTextPrefix: 'Mezcla 2T',
    copyTextFuel: 'gasolina',
    copyTextOil: 'aceite',
  },
};
