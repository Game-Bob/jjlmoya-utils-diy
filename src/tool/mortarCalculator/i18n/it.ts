import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-malte';
const title = 'Proporzioni Malte di Calce Tradizionali: Rinzaffo e Intonaco';
const description = 'Calcolatore gratuito per malte di calce e sabbia. Ottieni le proporzioni esatte per rinzaffo, arriccio e finitura secondo i metodi tradizionali (Vitruvio).';

const faqData = [
  {
    question: 'Perché usare la calce invece del cemento?',
    answer: 'La calce è un materiale "vivo" e traspirante che permette l\'evacuazione del vapore acqueo, evitando umidità da condensa. Inoltre, è più flessibile del cemento, il che riduce la comparsa di crepe in muri antichi.',
  },
  {
    question: 'Qual è la proporzione ideale per un rinzaffo?',
    answer: 'Secondo la tradizione vitruviana, per sabbia di fiume pulita si usa una proporzione di 1:3 (una parte di calce per tre di sabbia). Per sabbia di cava, si raccomanda 1:2 per assicurare la coesione della malta.',
  },
  {
    question: 'Cos\'è la finitura fine o intonachino?',
    answer: 'È l\'ultimo strato del muro. Si usa una sabbia molto più fine (a volte polvere di marmo) e una proporzione maggiore di calce per ottenere una finitura liscia e setosa che può essere dipinta o lasciata naturale.',
  },
  {
    question: 'Quanto tempo impiega la malta di calce a indurire?',
    answer: 'La calce aerea indurisce per carbonatazione (assorbendo CO2 dall\'aria). Il processo iniziale di presa è di alcuni giorni, ma la durezza massima si raggiunge mesi dopo, guadagnando resistenza con il passare degli anni.',
  },
];

const howToData = [
  { name: 'Identificare il tipo di supporto', text: 'Controlla se lavorerai su pietra, mattone antico o blocco. Il supporto deve essere pulito e leggermente umido.' },
  { name: 'Scegliere la granulometria della sabbia', text: 'Usa sabbia grossa per lo strato di aggancio e sabbia fine per la finitura estetica. La purezza della sabbia definisce la qualità della malta.' },
  { name: 'Miscelazione dei componenti', text: 'Mescola la calce e la sabbia a secco prima di aggiungere acqua. La consistenza deve essere plastica, non liquida.' },
  { name: 'Applicazione e frattazzatura', text: 'Stendi la malta con la cazzuola e usa un frattazzo per uniformare la superficie quando la malta inizia a tirare.' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Trattato delle Malte: La Saggezza di Vitruvio', level: 2 },
    { type: 'paragraph', html: 'Marco Vitruvio Pollione, nel Libro VII del suo <em>De Architectura</em>, non descrisse solo tecniche, ma una filosofia. Capiva che l\'eternità di un edificio risiede nelle sue unioni. La malta non è mero collante; è il tessuto connettivo. Le sue proporzioni (1:3, 1:2, 1:1) sono l\'eredità di secoli di osservazione empirica romana, cercando il perfetto equilibrio tra resistenza e flessibilità.' },
    { type: 'title', text: 'Granulometria dell\'Inerte: La Chiave della Qualità', level: 3 },
    { type: 'paragraph', html: 'La qualità di una malta di calce dipende in gran parte dalla granulometria dell\'inerte. Per il <strong>Trullissatio</strong> (rinzaffo), si usa sabbia grossa di fiume da 2-5 mm. Per l\'<strong>Arenato</strong> (arriccio), sabbia media lavata da 0,5-2 mm. Per il <strong>Marmorato</strong> (lastra fine), polvere di marmo minore di 0,5 mm.' },
    { type: 'title', text: 'Il Mistero della Presa Meccanica', level: 3 },
    { type: 'paragraph', html: 'L\'aggancio non è chimico, è <strong>meccanico</strong>. Immagina milioni di radici microscopiche. La malta deve penetrare nei pori del mattone per creare una "chiave" fisica. Senza porosità, non c\'è ancoraggio.' },
  ],
  ui: {
    leftTitle: 'Sistema Vitruviano',
    centerTitle: 'Materiali Disponibili',
    rightTitle: 'Copertura Stimata',
    btnCal: 'Calce',
    btnArena: 'Sabbia',
    labelCalPasta: 'Grassello (1.30 kg/L)',
    labelCalPolvo: 'Polvere NHL (0.65 kg/L)',
    labelQuantity: 'Quantità disponibile:',
    labelNeedsAlso: 'Ti servirà anche:',
    labelProportion: 'Proporzione: ',
    labelCoverage: 'Copertura:',
    labelThickness: 'Spessore totale:',
    labelLayers: 'Strati:',
    labelWasteFactor: 'Fattore di scarto: 20%',
    layersSingular: 'mano',
    layersPlural: 'mani',
    layersSingularShort: 'mano',
    layersPluralShort: 'mani',
    materialCal: 'Calce',
    materialArena: 'Sabbia',
    materialMarmol: 'Marmo',
    phaseDescTrullissatio: 'Strato base rugoso. 2 mani da 15mm. Proporzione 1:3 (Calce:Sabbia di fiume).',
    phaseDescArenato: 'Strato intermedio. 2 mani da 8mm. Proporzione 1:2 (Calce:Sabbia lavata).',
    phaseDescMarmorato: 'Finitura fine. 1 mano doppia da 4mm. Proporzione 1:1 (Calce:Polvere di marmo).',
    granulometryTitle: 'Granulometria dell\'Inerte',
    grainTitleCoarse: 'Sabbia Grossa',
    grainSubtitleCoarse: 'Sabbia di Fiume',
    grainUsageCoarse: 'Rinzaffo base',
    grainTitleMedium: 'Sabbia Media',
    grainSubtitleMedium: 'Sabbia Lavata',
    grainUsageMedium: 'Arriccio intermedio',
    grainTitleFine: 'Polvere Fine',
    grainSubtitleFine: 'Polvere di Marmo',
    grainUsageFine: 'Finitura fine',
    specSize: 'Dimensione:',
    specUse: 'Uso:',
    specDensity: 'Densità:',
  },
};
