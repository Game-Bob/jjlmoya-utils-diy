import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatrice-angolo-retto-pitagora-regola-3-4-5';
const title = 'Calcolatrice Angolo Retto (Teorema di Pitagora): Regola 3 4 5 per Squadrature Perfette';
const description = 'Verifica se le strutture sono perfettamente a squadra (90°) utilizzando il teorema di Pitagora e la regola 3-4-5. Strumento essenziale per edilizia, falegnameria e progetti DIY.';

const faqData = [
  {
    question: 'Cos\'è la regola 3-4-5?',
    answer: 'La regola 3-4-5 è una terna pitagorica semplice. Se un triangolo rettangolo ha i lati di 3, 4 e 5 unità in qualsiasi scala, l\'angolo tra i lati più corti è esattamente di 90 gradi. Questo metodo collaudato sul campo è usato nell\'edilizia da secoli.',
  },
  {
    question: 'Come si usa questa calcolatrice?',
    answer: 'Inserisci le lunghezze delle due pareti (lati A e B) che formano l\'angolo. La calcolatrice mostra quale dovrebbe essere la diagonale per un angolo perfetto di 90 gradi. Quindi misura la tua diagonale reale e inseriscila per verificare se il tuo angolo è veramente a squadra.',
  },
  {
    question: 'Cosa succede se la mia diagonale è diversa?',
    answer: 'Se la diagonale misurata differisce da quella ideale, la calcolatrice mostra lo scostamento. Il verde significa perfetto, il giallo accettabile, il rosso fuori squadra. Indica anche se devi aprire o chiudere l\'angolo.',
  },
  {
    question: 'È abbastanza preciso per l\'edilizia?',
    answer: 'Sì. Il teorema di Pitagora è matematicamente esatto. Con un metro a nastro, puoi ottenere una precisione di livello professionale senza strumenti specializzati o competenze avanzate.',
  },
  {
    question: 'Posso passare dai pollici ai piedi?',
    answer: 'Sì. Scegli i pollici per piccoli progetti o i piedi per strutture più grandi. Tutti i valori si convertono istantaneamente senza perdere dati.',
  },
];

const howToData = [
  { name: 'Seleziona l\'unità', text: 'Scegli pollici per lavori di precisione o piedi per strutture più grandi. Puoi cambiare in qualsiasi momento.' },
  { name: 'Misura entrambi i lati', text: 'Misura la lunghezza delle due pareti (lati A e B) che formano l\'angolo che vuoi controllare.' },
  { name: 'Controlla la diagonale ideale', text: 'La calcolatrice ti mostra quale deve essere la diagonale per un angolo perfetto di 90 gradi.' },
  { name: 'Misura la tua diagonale', text: 'Usa un metro a nastro per misurare la tua diagonale reale. Inseriscila nel campo opzionale.' },
  { name: 'Leggi lo stato', text: 'Verde = squadra perfetta. Giallo = accettabile. Rosso = fuori squadra. Regola come suggerito.' },
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Il Teorema di Pitagora nella Pratica', level: 2 },
    { type: 'paragraph', html: 'Un angolo perfetto di 90 gradi è fondamentale per una costruzione di qualità. Le pareti devono essere perpendicolari, le fondamenta devono essere a squadra e i telai devono essere allineati. Il teorema di Pitagora fornisce un metodo matematicamente garantito: a² + b² = c².' },
    { type: 'title', text: 'Perché la regola 3-4-5 funziona', level: 3 },
    { type: 'paragraph', html: 'La regola 3-4-5 è la terna pitagorica più semplice. Che tu misuri in pollici, piedi o qualsiasi altra unità, i lati di 3, 4 e 5 unità garantiscono un angolo di 90 gradi. Questo è stato provato matematicamente e testato nell\'edilizia per secoli.' },
    { type: 'title', text: 'Precisione senza strumenti specializzati', level: 3 },
    { type: 'paragraph', html: 'A differenza di livelle o squadre che possono rompersi o perdere la calibrazione, il teorema di Pitagora è immutabile. Con un semplice metro a nastro, puoi verificare qualsiasi angolo a qualsiasi scala. Questa calcolatrice elimina il calcolo mentale e assicura la precisione.' },
    { type: 'title', text: 'Dalla teoria alla guida pratica', level: 3 },
    { type: 'paragraph', html: 'Questa calcolatrice converte la matematica astratta in istruzioni pratiche sul campo. Se la tua diagonale è errata, ti dice esattamente di quanto e in che direzione regolare. Trasforma la teoria in risultati concreti in cantiere.' },
  ],
  ui: {
    titleMain: 'Calcolatore Squadratura (Pitagora)',
    labelInputData: 'Misurazioni',
    labelUnitSelection: 'Unità',
    btnUnitInches: 'pollici',
    btnUnitFeet: 'piedi',
    labelSideA: 'Lato A',
    labelSideB: 'Lato B',
    labelMeasuredDiagonal: 'Diagonale misurata (opzionale)',
    labelResults: 'Risultati',
    labelIdealDiagonal: 'Diagonale ideale',
    labelDeviation: 'Scostamento',
    labelStatus: 'Stato',
    labelVerification: 'Verifica squadratura',
    btnClear: 'Cancella',
    btnCopyResults: 'Copia risultati',
    labelPresets: 'Regolazioni rapide',
    unitInches: 'pol',
    unitFeet: 'pie',
    tooltipOptional: 'Inserisci la diagonale misurata per verificare i 90 gradi',
    tooltipPresets: 'Regola 3-4-5 in diverse scale',
    statusPerfect: 'Angolo di 90 gradi perfetto',
    statusAcceptable: 'Scostamento accettabile',
    statusWarning: 'Scostamento minore',
    statusError: 'Fuori squadra',
    statusReady: 'Pronto',
    msgIdealCalculated: 'Diagonale ideale calcolata',
    actionOpen: 'Apri',
    actionClose: 'Chiudi',
    descLarger: 'più grande',
    descSmaller: 'più piccola',
    descCorrection: 'Correzione necessaria',
  },
};
