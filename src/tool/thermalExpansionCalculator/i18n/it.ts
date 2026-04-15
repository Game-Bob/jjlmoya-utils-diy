import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'calcolatore-dilatazione-termica';
const title = 'Calcolatore di Dilatazione Termica di Travi e Strutture';
const description = 'Calcola quanto cresce una trave o una struttura per variazioni di temperatura. Strumento tecnico per ingegneri e DIY. Include i coefficienti di espansione per materiale.';

const faqData = [
  {
    question: 'Cos\'è il coefficiente di dilatazione lineare?',
    answer: 'È una proprietà fisica dei materiali che indica quanto si espande per ogni grado Celsius di aumento della temperatura. Si misura in 1/°C o °C⁻¹.',
  },
  {
    question: 'Perché è importante calcolare la dilatazione nelle travi?',
    answer: 'Se una trave non ha spazio per espandersi (giunti di dilatazione), genererà tensioni interne massicce che possono deformare la struttura, incrinare il calcestruzzo o persino causarne il crollo.',
  },
  {
    question: 'Il legno si dilata allo stesso modo in tutte le direzioni?',
    answer: 'No. Il legno è un materiale anisotropo. Si dilata pochissimo lungo la fibra ma significativamente in senso trasversale (larghezza e spessore).',
  },
  {
    question: 'Quale temperatura devo usare come Iniziale?',
    answer: 'Devi usare la temperatura al momento dell\'installazione o della costruzione. La Finale deve essere la temperatura massima prevista durante la sua vita utile.',
  },
];

const howToData = [
  { name: 'Misura la lunghezza originale', text: 'Inserisci la lunghezza della trave o del materiale in metri.' },
  { name: 'Seleziona il materiale', text: 'Scegli tra metalli, materiali da costruzione o legni per applicare il coefficiente specifico.' },
  { name: 'Definisci l\'intervallo termico', text: 'Specifica la temperatura iniziale e la massima prevista per calcolare il differenziale termico.' },
  { name: 'Analizza la crescita', text: 'Osserva l\'allungamento totale in millimetri e la lunghezza finale risultante per prevedere giunti adeguati.' },
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    { name: 'Coefficient of Thermal Expansion — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: 'Thermal expansion and temperature — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: 'Linear Thermal Expansion — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Cos\'è la Dilatazione Termica e perché influisce sulle Strutture', level: 2 },
    { type: 'paragraph', html: 'La <strong>dilatazione termica</strong> è il processo fisico per cui un materiale aumenta la propria lunghezza come risposta a un incremento della temperatura. A livello microscopico, le particelle vibrano con più energia e necessitano di maggiore spazio medio tra di esse. In edilizia, questo fenomeno è una forza che può rompere il calcestruzzo, deformare travi d\'acciaio e torcere i binari del treno.' },
    { type: 'title', text: 'La Formula della Dilatazione Lineare', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formula della Dilatazione Lineare', html: '<p>L\'espansione di un elemento strutturale si calcola con: <code>ΔL = L₀ · α · ΔT</code>. Dove <strong>ΔL</strong> è la crescita totale, <strong>L₀</strong> è la lunghezza originale, <strong>α</strong> è il coefficiente di espansione del materiale (in °C⁻¹) e <strong>ΔT</strong> è la differenza di temperatura.</p>' },
  ],
  ui: {
    configTitle: 'Configurazione',
    labelMaterial: 'Materiale',
    groupMetals: 'Metalli',
    groupConstruction: 'Costruzione',
    groupWood: 'Legni e Polimeri',
    matSteel: 'Acciaio (12 ppm/°C)',
    matAluminum: 'Alluminio (23 ppm/°C)',
    matCopper: 'Rame (17 ppm/°C)',
    matIron: 'Ferro (11 ppm/°C)',
    matConcrete: 'Calcestruzzo (12 ppm/°C)',
    matBrick: 'Mattone (9 ppm/°C)',
    matGlass: 'Vetro (9 ppm/°C)',
    matWoodFiber: 'Legno Fibra (5 ppm/°C)',
    matWoodTransversal: 'Legno Trasversale (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metallurgia',
    catConstruction: 'Costruzione',
    catWood: 'Legni e Polimeri',
    labelLength: 'Lunghezza Iniziale (m)',
    labelTempStart: 'T. Iniziale (°C)',
    labelTempEnd: 'T. Massima (°C)',
    deltaLabel: 'Differenziale Termico (ΔT)',
    vizTitle: 'Simulazione di Espansione',
    resultGrowthLabel: 'Crescita Totale (ΔL)',
    resultFinalLabel: 'Lunghezza Finale',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Rischio Deformazione',
    jointTitle: 'Giunto Minimo',
    riskLow: 'Basso',
    riskModerate: 'Moderato',
    riskCritical: 'Critico',
    tipDefault: 'Consulta il manuale del fabbricante per i coefficienti esatti di leghe speciali.',
    tipSteel: 'L\'acciaio e il calcestruzzo hanno coefficienti quasi identici, permettendo al cemento armato di funzionare senza crepe interne.',
    tipAluminum: 'L\'alluminio si dilata quasi il doppio dell\'acciaio. Nei serramenti metallici, questo obbliga all\'uso di sigillanti elastici.',
    tipGlass: 'Il vetro e l\'acciaio si dilatano quasi allo stesso modo, il che è fondamentale per il design di grandi facciate vetrate.',
    tipConcrete: 'Il coefficiente del calcestruzzo è molto simile a quello dell\'acciaio, motivo per cui le strutture miste sono così stabili.',
    tipWood: 'Il legno si dilata poco per calore, ma molto per umidità. In strutture lunghe, la fibra longitudinale è molto stabile.',
    tipPvc: 'Il PVC ha un\'espansione altissima. Richiede giunti speciali per assorbire il movimento senza rompersi.',
  },
};
