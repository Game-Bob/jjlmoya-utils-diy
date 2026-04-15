import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'calcolatore-caduta-tensione';
const title = 'Calcolatore di Caduta di Tensione e Sezione Cavo';
const description = 'Strumento tecnico per evitare cavi bruciati. Calcola la sezione necessaria per impianti 12V, 24V e 230V in base a distanza e potenza.';

const faqData = [
  {
    question: 'Cos\'è la caduta di tensione e perché è importante?',
    answer: 'È la perdita di voltaggio che si verifica quando l\'elettricità viaggia attraverso un cavo. Se il cavo è troppo sottile o troppo lungo, si perde tensione. Risultato: luci fioche, motori che non si avviano o cavi che si scaldano pericolosamente.',
  },
  {
    question: 'Che sezione di cavo serve per 12V a 10 metri?',
    answer: 'Dipende dalla potenza. Per 12V e 10A a 10m, serve minimo 2.5mm². Per 20A, serve 6mm². A basso voltaggio (12V/24V), la caduta è molto più critica che a 230V.',
  },
  {
    question: 'Posso usare cavo da 1.5mm² per tutto l\'impianto?',
    answer: 'No. 1.5mm² è per circuiti di illuminazione (max 10A). Per le prese serve 2.5mm². Per cucina o lavatrice serve 4mm² o 6mm². Usare cavi troppo sottili è pericoloso e può causare incendi.',
  },
  {
    question: 'Qual è la caduta di tensione massima permessa?',
    answer: 'Negli impianti domestici (230V): massimo 3% per illuminazione, 5% per altri usi. In 12V/24V (camper, solare): non più del 3% totale. Una caduta maggiore significa perdita di efficienza e rischio di surriscaldamento.',
  },
];

const howToData = [
  { name: 'Definire il voltaggio del sistema', text: 'Seleziona se il tuo impianto è a 12V, 24V (solare/camper) o 230V (domestico).' },
  { name: 'Inserire l\'intensità di corrente', text: 'Scrivi gli Ampere (A) o i Watt (W) che consumerà l\'apparecchio alla fine del cavo.' },
  { name: 'Misurare la distanza del cavo', text: 'Inserisci la lunghezza del cavo (solo andata) in metri dalla fonte di energia al ricevitore.' },
  { name: 'Scegliere il materiale del conduttore', text: 'Seleziona rame (standard) o alluminio per ottenere il calcolo esatto della resistività.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    { name: 'IEC 60364: Impianti elettrici a bassa tensione', url: 'https://www.iec.ch/' },
    { name: 'Legge di Ohm e Resistività: Wikipedia', url: 'https://it.wikipedia.org/wiki/Resistivit%C3%A0_elettrica' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guida Completa alla Caduta di Tensione', level: 2 },
    { type: 'paragraph', html: 'Se stai allestendo un camper, progettando un impianto solare o tirando cavi nel giardino, c\'è un nemico invisibile: la <strong>caduta di tensione</strong>. Non è solo un fatto tecnico; è la differenza tra un frigo che raffredda e uno che si spegne, o tra un impianto sicuro e un rischio incendio.' },
    { type: 'title', text: 'La Formula della Caduta di Tensione', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Calcolo Esatto con la Legge di Ohm', html: '<p>La formula è <strong>ΔV = (2 × L × I × ρ) / S</strong>, dove L è la lunghezza di andata, I la corrente, ρ la resistività (0,0178 per il rame) e S la sezione del cavo.</p>' },
  ],
  ui: {
    heroDropLabel: 'Caduta di Tensione Totale',
    heroVoltsUnit: 'Volt',
    heroPctLoss: '% perdita',
    heroEffLabel: 'Efficienza',
    statusExcellent: 'Eccellente',
    statusAcceptable: 'Accettabile',
    statusCritical: 'Critico',
    fieldVoltage: 'Voltaggio',
    fieldMaterial: 'Materiale',
    materialCopper: 'Rame',
    materialAlum: 'Allum.',
    fieldLoad: 'Carico',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watt',
    unitAmps: 'Ampere',
    fieldLength: 'Lunghezza Cavo (Andata)',
    unitMeters: 'metri',
    fieldSection: 'Sezione del Cavo',
    sectionInfo: 'Consigliato',
  },
};
