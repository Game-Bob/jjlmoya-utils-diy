import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'calcolatore-scale';
const title = 'Calcolatore per Scale: Progettazione ed Esecuzione';
const description = 'Calcola le misure esatte della tua scala: pedata, alzata, angolo e materiali. Rispetta la Legge di Blondel ed evita errori di cantiere.';

const faqData = [
  {
    question: 'Cos\'è la Legge di Blondel?',
    answer: 'È una formula che stabilisce che per far sì che una scala sia comoda, la somma di due alzate e una pedata deve essere compresa tra 62 e 64 cm (2A + P = 63). Questa legge si basa sulla lunghezza media del passo umano.',
  },
  {
    question: 'Qual è l\'altezza massima di un gradino?',
    answer: 'Nelle abitazioni si raccomanda di non superare i 18-19 cm. Per gli spazi pubblici, il massimo è solitamente 17,5 cm secondo normativa. Alzate maggiori stancano di più e possono essere pericolose.',
  },
  {
    question: 'Come calcolo se ho poco spazio?',
    answer: 'Se lo spazio orizzontale è limitato, dovrai aumentare il numero di gradini (riducendo l\'alzata) o accettare una pendenza maggiore. Il calcolatore ti aiuta a trovare l\'equilibrio ottimale.',
  },
  {
    question: 'Cosa include il calcolo del calcestruzzo?',
    answer: 'Viene calcolato il volume totale di calcestruzzo considerando i gradini più la soletta inclinata (il piano inclinato che sostiene i gradini). Ignorare questo volume risulterebbe in un ordine insufficiente.',
  },
  {
    question: 'Perché è importante il tracciamento accumulato?',
    answer: 'Misurare ogni gradino separatamente genera errori accumulati. Il tracciamento accumulato garantisce che tutti i gradini abbiano esattamente la stessa altezza, migliorando la sicurezza e il comfort.',
  },
];

const howToData = [
  { name: 'Misurare il dislivello', text: 'Misura il dislivello totale (H) dal pavimento finito inferiore al pavimento finito superiore. Questo è il dato fondamentale per tutto il calcolo.' },
  { name: 'Inserire la lunghezza disponibile', text: 'Opzionale: Se hai restrizioni di spazio, inserisci la lunghezza orizzontale disponibile. Usa 0 per il calcolo libero.' },
  { name: 'Regolare il numero di gradini', text: 'Il calcolatore propone un numero iniziale, ma puoi regolarlo. Osserva l\'indicatore di Blondel: deve essere in verde (62-64 cm) per il massimo comfort.' },
  { name: 'Definire i parametri di opera', text: 'Specifica lo spessore della soletta, le finiture finali, la resistenza del calcestruzzo e la larghezza della scala. Questi dati influenzano il volume finale.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Normative',
  bibliography: [
    { name: 'Norme per la progettazione delle scale', url: 'https://it.wikipedia.org/wiki/Scala_(architettura)' },
    { name: 'Legge di Blondel - Wikipedia', url: 'https://it.wikipedia.org/wiki/Alzata_e_pedata' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Design Geometrico delle Scale: La Legge di Blondel', level: 2 },
    { type: 'paragraph', html: 'Il comfort di una scala dipende dalla lunghezza del passo umano. La Legge di Blondel stabilisce che 2 alzate + 1 pedata = 62-64 cm è lo standard che garantisce massimo comfort e sicurezza.' },
    { type: 'title', text: 'Controllo Struttura e Materiali', level: 3 },
    { type: 'paragraph', html: 'Per un\'esecuzione professionale, è vitale considerare la soletta di calcestruzzo. Ignorare questo volume risulterebbe in un ordine di materiale insufficiente. Il calcolatore integra automaticamente questo calcolo.' },
    { type: 'title', text: 'Tracciamento e Errore Accumulato', level: 3 },
    { type: 'paragraph', html: 'In costruzione, il peggior nemico è l\'errore millimetrico. Se misuri ogni gradino separatamente, la somma di piccoli errori può lasciare l\'ultimo gradino 5 cm più alto o più basso del previsto.' },
  ],
  ui: {
    labelGeometry: 'Geometria e Ingombro',
    labelTotalHeight: 'Dislivello Totale (H)',
    labelAvailableLength: 'Lunghezza Disponibile (L)',
    labelAvailableLengthHint: 'Usa 0 per calcolo libero.',
    labelNumSteps: 'Nº Gradini',
    labelOptimize: 'Ottimizza (18cm)',
    labelWork: 'Opera e Installazione',
    labelSlabThickness: 'Soletta (e)',
    labelFinishThickness: 'Finitura',
    labelCeilingHeight: 'Altezza Soffitto',
    labelStairWidth: 'Larghezza Scala',
    labelConcreteStrength: 'Resistenza Calcestruzzo',
    optionH150: 'C12/15 (Magrone)',
    optionH200: 'C16/20 (Civile)',
    optionH250: 'C20/25 (Strutturale)',
    labelRiser: 'Alzata',
    labelTread: 'Pedata',
    labelSlope: 'Pendenza',
    labelRealAdvance: 'Avanzamento Reale',
    labelLayoutTable: 'Tracciamento ed Esecuzione',
    colStep: 'Gradino',
    colConcreteHeight: 'H. Calcestruzzo',
    colFinishedHeight: 'H. Finita',
    colAdvance: 'Avanzamento',
    adjustedNote: 'Regolato',
    labelMaterials: 'Calcolo Materiali',
    labelTotalConcrete: 'Calcestruzzo Totale:',
    labelCement: 'Cemento (sacchi/25kg):',
    labelSand: 'Sabbia necessaria:',
    unitM3: 'm³',
    unitBags: 'sacchi',
    unitLiters: 'L',
    btnShare: 'Condividi',
    btnPrint: 'Stampa PDF',
    statusOptimalComfort: 'Comfort Ottimale',
    statusMarginLimit: 'Margine Limite',
    statusCriticalDesign: 'Design Critico',
    statusRiserError: 'Errore Pedata',
    msgInvalidValues: 'Valori non validi',
    msgInsufficientSpace: 'SPAZIO INSUFFICIENTE',
    msgDangerousTread: 'La pedata di {val}cm è pericolosa.',
    msgBlondelValue: 'Blondel: {val}cm.',
    msgOptimalStep: 'Passo comodo: {val}cm.',
    msgLowCeiling: 'PASSAGGIO BASSO (<2m)',
    msgCalculating: 'Calcolo in corso...',
    msgEnterMeasurements: 'Inserisci misure',
    shareTitle: 'Riepilogo Opera',
    shareMessage: 'Scala: H={h}cm, N={n}, A={ch}cm, Vol={vol}m3',
  },
};
