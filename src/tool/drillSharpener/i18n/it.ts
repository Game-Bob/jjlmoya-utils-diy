import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';

const slug = 'affilatura-maestra-punte';
const title = 'Affilatura Maestra delle Punte: Calibro di Precisione';
const description = 'Guida interattiva per affilare punte HSS. Calibro digitale a schermo per verificare angoli di 118° e 135°. Calcola RPM e diagnostica errori di taglio.';

const faqData = [
  {
    question: 'Posso appoggiare la punta direttamente sullo schermo?',
    answer: 'Sì, lo strumento è progettato affinché tu possa appoggiare l\'asse della punta sulla linea centrale del calibro digitale e verificare direttamente la simmetria dei taglienti.',
  },
  {
    question: 'Come so se l\'angolo di spoglia dorsale è corretto?',
    answer: 'Ruotando la punta, la parte posteriore del tagliente deve apparire visibilmente più bassa. Se vedi che il metallo brilla in modo uniforme su tutta la punta, significa che manca la spoglia (destalonar).',
  },
  {
    question: 'Quali giri devo usare dopo l\'affilatura?',
    answer: 'Dipende dal diametro; il nostro calcolatore integrato ti fornirà il dato esatto in base al materiale che hai selezionato nel primo passaggio.',
  },
  {
    question: 'Qual è la differenza tra HSS e Metallo Duro?',
    answer: 'L\'HSS (Acciaio Rapido) è più economico e resistente agli urti. Il Metallo Duro sopporta velocità maggiori ma è più fragile. Per l\'affilatura manuale, l\'HSS è lo standard.',
  },
  {
    question: 'Ho bisogno di attrezzatura speciale per affilare?',
    answer: 'Una mola a smeriglio rotante a grana media (120-150) è sufficiente. L\'importante è mantenere la mola equilibrata e piana per ottenere risultati costanti.',
  },
];

const howToData = [
  { name: 'Selezionare Materiale', text: 'Scegli il metallo o il materiale che andrai a forare per impostare l\'angolo target e la velocità di taglio.' },
  { name: 'Verificare Simmetria', text: 'Appoggia la punta sullo schermo e assicurati che entrambi i taglienti coincidano con le linee blu.' },
  { name: 'Controllare il Tallone', text: 'Controlla visivamente che la parte posteriore del tagliente non sfreghi sul pezzo in lavorazione (angolo di spoglia).' },
  { name: 'Calcolare RPM', text: 'Inserisci il diametro e imposta il tuo trapano alla velocità raccomandata per il materiale selezionato.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    { name: 'Manuale d\'Officina - Affilatura Punte (PDF)', url: 'https://www.google.com/search?q=manuale+affilatura+punte' },
    { name: 'Tecnologia dei Metalli - Angoli delle Punte', url: 'https://it.wikipedia.org/wiki/Punta_da_trapano' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Affilatura Maestra delle Punte: Tecnica Professionale', level: 2 },
    { type: 'paragraph', html: 'L\'affilatura delle punte è una delle abilità più preziose in qualsiasi officina. Una punta correttamente affilata migliora la qualità del foro, protegge la vita utile dei tuoi elettroutensili e garantisce la sicurezza dell\'operatore.' },
    { type: 'title', text: 'I Pilastri dell\'Affilatura: Angolo di Punta', level: 3 },
    { type: 'paragraph', html: 'L\'angolo di punta definisce come la punta attacca il materiale. Gli angoli standard sono 118° per acciai dolci, 135° per inox e 140° per acciai duri. Ogni materiale richiede un angolo diverso per massimizzare la penetrazione senza compromettere la resistenza.' },
    { type: 'title', text: 'Il Grande Dimenticato: Angolo di Spoglia', level: 3 },
    { type: 'paragraph', html: 'L\'errore più comune è ignorare l\'angolo di spoglia dorsale o destalonatura. Se la faccia posteriore del tagliente è piatta, la punta semplicemente sfregherà generando calore estremo. La soluzione è abbassare leggermente la parte posteriore del tagliente.' },
  ],
  ui: {
    labelMaterial: 'Materiale del lavoro',
    matSteel: 'Acciaio',
    matInox: 'Inox',
    matHard: 'Duri',
    matBrass: 'Ottone',
    matPlastic: 'Plastica',
    matWood: 'Legno',
    labelDiameter: 'Diametro punta (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Velocità',
    unitRpm: 'RPM',
    labelCooling: 'Taglio',
    btnDiagnosis: 'Non taglia bene? Diagnosi',
    diagTitle: 'Diagnosi dei Guasti',
    diagClose: 'Chiudi',
    diagIssue1: '1. Fa fumo e non attraversa',
    diagIssue1Desc: 'Manca l\'Angolo di Spoglia. Il metallo dietro il tagliente sfrega sul pezzo. Abbassa la parte posteriore affinché il tagliente sia il punto più alto.',
    diagIssue2: '2. Foro eccentrico o più grande',
    diagIssue2Desc: 'La Punta non è centrata. I taglienti hanno lunghezze diverse. Assicurati che la punta tocchi esattamente il centro del calibro.',
    diagIssue3: '3. Taglienti bruciati (Blu)',
    diagIssue3Desc: 'Velocità eccessiva. Controlla il calcolo degli RPM dello strumento per questo diametro e materiale.',
    gaugeInstruction: 'APPOGGIA L\'ASSE SULLA LINEA VERTICALE',
  },
};
