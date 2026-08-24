import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'calcolatore-volume-scavo-rigonfiamento-terreno';
const title = 'Calcolatore Volume Scavo e Stima Rigonfiamento Terreno';
const description = 'Calcola il volume in banco dello scavo e stima il volume di terreno sciolto dopo lo scavo con un intervallo per sabbia, terra vegetale, argilla e ghiaia.';

const faq = [
  {
    question: 'Qual è la differenza tra volume in banco e volume sciolto?',
    answer: 'Il volume in banco è il volume del terreno in situ prima di essere scavato. Il volume sciolto è lo spazio stimato occupato dal terreno dopo lo scavo considerando il coefficiente di rigonfiamento.',
  },
  {
    question: 'Come si calcola il volume di uno scavo?',
    answer: 'Moltiplica la lunghezza dello scavo per la larghezza e la profondità. Ad esempio, uno scavo di 4 metri per 3 metri e profondo 0,5 metri ha un volume in banco di 6 metri cubi prima del rigonfiamento.',
  },
  {
    question: 'Perché l\'argilla richiede un intervallo di rigonfiamento più ampio?',
    answer: 'Il comportamento dell\'argilla dipende fortemente dall\'umidità, dalla mineralogia e dalla storia delle tensioni del terreno. Lo strumento applica una forbice più ampia per riflettere questa variabilità.',
  },
  {
    question: 'Questo calcolatore sostituisce un\'indagine geotecnica?',
    answer: 'No. Il risultato è una stima per la gestione della logistica, dei camion e dei cassoni. Per fondazioni o muri di contenimento occorre una relazione geotecnica professionale.',
  },
];

const howTo = [
  { name: 'Inserire le dimensioni dello scavo', text: 'Inserisci lunghezza, larghezza e profondità del taglio. Scegli tra unità metriche e imperiali.' },
  { name: 'Selezionare il tipo di terreno', text: 'Seleziona sabbia, terra vegetale, argilla o ghiaia per applicare il coefficiente di rigonfiamento stimato.' },
  { name: 'Pianificare il trasporto dei materiali', text: 'Usa il volume in banco per lo scavo e la forbice del volume sciolto per stimare i cassoni e i camion necessari.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq,
  bibliographyTitle: 'Fonti e note tecniche',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Due volumi per due esigenze del cantiere', level: 2 },
    { type: 'paragraph', html: 'Il <strong>volume in banco</strong> rappresenta lo scavo geometrico del terreno non alterato. Il <strong>volume sciolto</strong> rappresenta lo spazio che il terreno estratto occuperà nei cassoni o negli accumuli temporanei. Separare i due valori previene errori nella stima dei trasporti.' },
    { type: 'title', text: 'Usare l\'intervallo sciolto per la logistica', level: 3 },
    { type: 'paragraph', html: 'Seleziona il profilo di terreno e confronta i risultati sciolti minimo e massimo con la capienza dei camion e dei container. L\'intervallo evidenzia la naturale incertezza dovuta all\'umidità e alle modalità di scavo.' },
    { type: 'tip', title: 'Il coefficiente teorico non sostituisce le prove di laboratorio', html: 'Umidità e presenza di falda possono modificare il rigonfiamento reale. Per strutture di fondazione e terre contaminate si richiede un indagine geotecnica.' },
    { type: 'title', text: 'Verificare i dati prima di ordinare i mezzi', level: 3 },
    { type: 'paragraph', html: 'In presenza di terreni misti, esegui il calcolo con due profili differenti e organizza la logistica sul valore più cautelativo.' },
  ],
  ui: {
    unitSystemLabel: 'Sistema di misura',
    unitMetric: 'Metrico',
    unitImperial: 'Imperiale',
    onboarding: 'Inserisci le dimensioni dello scavo, seleziona il terreno e usa i due volumi per pianificare lo scavo e il trasporto.',
    dimensionLabel: 'Dimensioni dello scavo',
    lengthLabel: 'Lunghezza',
    widthLabel: 'Larghezza',
    depthLabel: 'Profondità',
    soilLabel: 'Profilo del terreno',
    soilSand: 'Sabbia',
    soilTopsoil: 'Terra vegetale',
    soilClay: 'Argilla',
    soilGravel: 'Ghiaia',
    soilSandBand: 'Rigonfiamento 10-15%',
    soilTopsoilBand: 'Rigonfiamento 15-25%',
    soilClayBand: 'Rigonfiamento 25-40%',
    soilGravelBand: 'Rigonfiamento 15-25%',
    bankVolumeLabel: 'Volume in banco',
    bankVolumeHelp: 'Terreno in situ non alterato',
    looseVolumeLabel: 'Volume sciolto',
    looseVolumeHelp: 'Intervallo stimato dopo lo scavo',
    expansionLabel: 'Rigonfiamento applicato',
    expansionHelp: 'Intervallo per il terreno scelto',
    sceneTitle: 'Dallo scavo all\'accumulo',
    sceneBank: 'in banco',
    sceneLoose: 'materiale sciolto',
    sceneGround: 'piano di campagna',
    sceneCut: 'scavo eseguito',
    interpretationTitle: 'Come interpretare i risultati.',
    interpretationText: 'Il primo valore misura la cavità scavata. L\'intervallo stimato indica il volume di terreno sciolto da trasportare.',
    warning: 'Stima indicativa per la logistica. Umidità e metodo di scavo modificano il volume sciolto effettivo. Non sostituisce una relazione geotecnica.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'rigonfiamento basso',
    soilStatusMedium: 'rigonfiamento moderato',
    soilStatusHigh: 'rigonfiamento alto',
    soilStatusLabel: 'Fascia di stima',
  },
};
