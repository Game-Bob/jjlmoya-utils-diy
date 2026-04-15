import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'calcolatore-giri-trapano-fresa';
const title = 'Calcolatore RPM Lavorazione e Perforazione';
const description = 'Calcola i giri al minuto ideali per il tuo trapano o fresa secondo il materiale e il diametro della punta. Evita di bruciare i tuoi strumenti.';

const faqData = [
  {
    question: 'Perché le punte si bruciano durante la foratura?',
    answer: 'Principalmente per un eccesso di giri al minuto (RPM). Quando la punta gira più velocemente di quanto il materiale permetta di dissipare il calore, l\'attrito innalza la temperatura sopra il limite di tempra dell\'acciaio, rendendo il tagliente morbido e incapace di tagliare.',
  },
  {
    question: 'Cos\'è la velocità di taglio (Vc)?',
    answer: 'È la velocità lineare in metri al minuto alla quale il tagliente dell\'utensile percorre la superficie del materiale. Ogni materiale ha una Vc raccomandata che non dipende dal diametro della punta.',
  },
  {
    question: 'Quando devo usare un utensile in Metallo Duro (Widia)?',
    answer: 'Devi usare il metallo duro quando hai bisogno di lavorare a velocità molto più elevate, in produzioni industriali o quando il materiale da forare è estremamente duro. Per il fai-da-te comune, l\'HSS è sufficiente e più resistente alle rotture per flessione.',
  },
  {
    question: 'È sempre necessario usare il lubrificante?',
    answer: 'Sui metalli è quasi sempre consigliabile. Sull\'alluminio evita che il materiale si attacchi alla punta, e sugli acciai riduce il calore. Su legni e plastiche è meglio lavorare a secco con scarichi frequenti della punta.',
  },
  {
    question: 'Come calcolo l\'avanzamento se non ho una fresa CNC?',
    answer: 'In un trapano manuale, l\'avanzamento si sente dalla pressione. Devi vedere che esce un truciolo costante e pulito. Se esce polvere, stai premendo poco o gli RPM sono eccessivi. Se il truciolo è molto spesso e il trapano soffre, stai premendo troppo.',
  },
];

const howToData = [
  { name: 'Seleziona il materiale', text: 'Indica quale materiale intendi forare o fresare (acciaio, alluminio, legno, ecc.). Ognuno ha una durezza e capacità termica diversa.' },
  { name: 'Inserisci il diametro', text: 'Scrivi il diametro esatto della tua punta o fresa in millimetri. Ricorda che maggiore è il diametro, minore deve essere la velocità di rotazione.' },
  { name: 'Scegli il tipo di utensile', text: 'Determina se la tua punta è in acciaio rapido (HSS) o in metallo duro (Carburo/Widia). Quelli in metallo duro sopportano velocità molto più elevate.' },
  { name: 'Imposta gli RPM sulla tua macchina', text: 'Configura il tuo trapano o fresa con il valore calcolato. Se la tua macchina ha posizioni fisse, usa il nostro strumento di velocità vicina per scegliere la posizione della puleggia più sicura.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    { name: 'Sandvik Coromant: Cutting Speed and Feed Rate Formulae', url: 'https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: 'Macchine. Calcoli d\'officina — A.L. Casillas', url: 'https://www.google.com/search?q=Casillas+Maquinas+Calculos+de+taller' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'L\'importanza dei Giri al Minuto nella lavorazione meccanica', level: 2 },
    { type: 'paragraph', html: 'Il calcolo corretto dei giri al minuto fa la differenza tra un lavoro perfetto e un disastro costoso. Non si tratta di far girare una punta il più velocemente possibile, ma di rispettare le leggi della fisica applicate all\'attrito e alla resistenza dei materiali. Il nostro calcolatore è progettato per ottimizzare le prestazioni dei tuoi utensili e la qualità delle tue finiture.' },
    { type: 'title', text: 'Capire la Velocità di Taglio', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formula di Calcolo degli RPM', html: '<p>La velocità di taglio è un valore in metri al minuto che indica la velocità ideale alla quale il tagliente deve passare sul materiale. La formula che usiamo è: <code>RPM = (Vc × 1000) / (π × D)</code> dove D è il diametro in millimetri. Questo calcolo è indipendente dal diametro del materiale che stiamo tagliando.' },
    { type: 'title', text: 'HSS vs Metallo Duro', level: 3 },
    { type: 'paragraph', html: 'Gli utensili in <strong>Acciaio Rapido (HSS)</strong> sono economici e resistenti agli urti, ma hanno una resistenza termica limitata. Il <strong>Metallo Duro (Carburo)</strong> permette velocità di taglio da 3 a 5 superiori, ma sono più fragili. Il calcolatore adatta automaticamente i parametri secondo il tipo di utensile.' },
    { type: 'title', text: '3 Errori Comuni durante la Foratura', level: 3 },
    { type: 'paragraph', html: '<strong>RPM troppo alti:</strong> Causano surriscaldamento e perdita di tempra dell\'acciaio. <strong>RPM troppo bassi:</strong> La punta vibra e può rompersi per fatica. <strong>Senza refrigerante:</strong> Il calore riduce significativamente la vita utile dell\'utensile.' },
  ],
  ui: {
    labelMaterial: 'Materiale del pezzo',
    matSteel: 'Acciaio Dolce',
    matInox: 'Inossidabile',
    matAlu: 'Alluminio',
    matBrass: 'Ottone',
    matCastIron: 'Ghisa',
    matWood: 'Legni',
    matPlastic: 'Plastiche',
    coolSteel: 'Olio da taglio o Emulsione',
    coolInox: 'Olio da Taglio EP',
    coolAlu: 'Alcool / Paraffina',
    coolBrass: 'A secco / Aria',
    coolCastIron: 'A secco',
    coolWood: 'Solo Aspirazione',
    coolPlastic: 'Getto d\'Aria',
    labelTool: 'Tipo di Utensile',
    typeHss: 'Acciai (HSS)',
    typeWidia: 'Metallo Duro (Widia)',
    labelDiameter: 'Diametro',
    unitMm: 'mm',
    unitInch: 'pollici',
    modeColumnDrill: 'Modalità Trapano a Colonna',
    labelAdvanced: 'Parametri di Avanzamento',
    labelLips: 'Nº di Taglienti (z)',
    labelFz: 'Avanzamento/dente (Fz)',
    labelMachine: 'Velocità della tua Macchina',
    presetStandard: 'Standard',
    presetCnc: 'CNC',
    addRpmManual: 'Aggiungi RPM manuali...',
    addButton: '+',
    resultRpm: 'Velocità Ottimale',
    resultCooling: 'Refrigerazione',
    resultFeed: 'Avanzamento Risultante',
    resultClosest: 'Regolazione consigliata',
    rpmUnit: 'Giri / Minuto',
    recommendedLabel: 'Regolazione consigliata',
    recommendedHint: 'Imposta il selettore della tua macchina su questa posizione',
    statusLimitActive: 'Limite macchina attivo',
    statusOutOfRange: 'Intervallo fuori dagli standard commerciali',
  },
};
