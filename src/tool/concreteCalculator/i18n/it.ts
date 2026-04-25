import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatrice-calcestruzzo-malta';
const title = 'Calcolatrice Calcestruzzo e Malta: Quantità Esatte di Cemento, Sabbia e Acqua';
const description =
  'Calcola quanti sacchi di cemento, palate di sabbia e litri d\'acqua servono per m³. Per fondamenta, solette, muri e massetti. Guida al dosaggio tecnico.';

const faqData = [
  {
    question: 'Quanti sacchi di cemento da 25kg servono per un metro cubo?',
    answer:
      'Per un calcestruzzo standard (resistenza C20/25), servono circa 14 sacchi da 25kg (350kg) per produrre un metro cubo di impasto compattato.',
  },
  {
    question: 'Cosa è più resistente, il calcestruzzo o la malta?',
    answer:
      'Il calcestruzzo (con ghiaia) è strutturalmente più resistente per sopportare grandi carichi. La malta (solo sabbia) è ideale per unire mattoni o intonacare superfici.',
  },
  {
    question: 'Quante palate servono per un metro cubo?',
    answer:
      'Dipende dalla dimensione della palata, ma in genere si calcolano 180-200 palate di sabbia per m³. La nostra calcolatrice traduce i m³ in palate suggerite.',
  },
  {
    question: 'Posso fare l\'impasto a mano senza betoniera?',
    answer:
      'Sì, anche se richiede molto più sforzo fisico. L\'ideale è farlo su una superficie pulita e impermeabile (lamiera metallica o trogolo) per non disperdere l\'acqua.',
  },
  {
    question: 'Perché il calcestruzzo si crepa durante l\'asciugatura?',
    answer:
      'Spesso è dovuto alla mancanza di umidità durante la maturazione (evaporazione rapida dell\'acqua) o a un eccesso di acqua nell\'impasto. Si raccomanda di bagnare il calcestruzzo nei giorni successivi.',
  },
];

const howToData = [
  {
    name: 'Scegli il Tipo di Impasto',
    text: 'Seleziona se devi fare calcestruzzo per fondamenta o malta per muri.',
  },
  {
    name: 'Indica il Volume in m³',
    text: 'Inserisci il volume totale. Moltiplica lunghezza x larghezza x spessore.',
  },
  {
    name: 'Consulta le Quantità',
    text: 'Visualizza quanti sacchi, palate e litri devi acquistare.',
  },
  {
    name: 'Applica le Proporzioni',
    text: 'Segui la guida visiva per cemento, sabbia e ghiaia per un impasto perfetto.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida al Dosaggio per Calcestruzzo e Malta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando affronti una ristrutturazione o una costruzione, una delle domande più frequenti è <strong>quanti sacchi di cemento servono per un metro cubo di calcestruzzo?</strong>. Non si tratta solo di mescolare ingredienti; la resistenza finale della struttura dipende direttamente dalla precisione nelle proporzioni di cemento, sabbia, ghiaia e acqua. La nostra calcolatrice traduce le misure industriali in unità pratiche da cantiere: sacchi da 25kg, palate e litri.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'L\'eccesso di acqua indebolisce il calcestruzzo',
      html: '<p>Un errore molto comune è aggiungere troppa acqua per rendere il calcestruzzo più fluido. L\'eccesso di acqua crea dei pori evaporando durante la maturazione, riducendo drasticamente la resistenza finale. La consistenza ideale dovrebbe essere come quella di una <strong>pasta densa, non liquida</strong>. Usa la minima quantità di acqua possibile.</p>',
    },
    {
      type: 'title',
      text: 'Proporzioni Standard secondo l\'Uso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>dosaggio del calcestruzzo</strong> varia in base all\'uso. Per un <strong>calcestruzzo C20/25</strong> (fondamenta e solette) la proporzione è 1 parte di cemento, 2.5 di sabbia e 3 di ghiaia. Per la <strong>malta da muratura</strong> (muri e tramezzi) è 1 parte di cemento e 4 di sabbia. Per la <strong>malta per massetti</strong> è 1 parte di cemento e 3 di sabbia. Il calcestruzzo con ghiaia sopporta più carico; la malta di sola sabbia è ideale per unire ed intonacare.',
    },
    {
      type: 'title',
      text: 'Come Calcolare i m³ che ti Servono',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Esempio di Calcolo per una Soletta',
      html: '<p>Per una soletta da giardino lunga 4m, larga 3m e spessa 15cm: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. La nostra calcolatrice esegue questa operazione automaticamente se inserisci le dimensioni nella sezione "Per Misure".</p><p>Ricorda sempre di <strong>acquistare un 10% in più</strong> per compensare le perdite per sversamento o le variazioni del terreno.</p>',
    },
    {
      type: 'title',
      text: 'Ordine di Miscelazione e Dosaggio per Sacchi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In cantiere si parla spesso di <strong>"miscela a 300 chili"</strong>: 300kg di cemento per ogni metro cubo di calcestruzzo finito. Per una corretta miscelazione in betoniera: prima l\'acqua, poi ghiaia e sabbia (per sciogliere i grumi) e infine il cemento aggiunto gradualmente.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'La Regola del 10% per non rimanere a corto',
      html: '<p>Acquista sempre il <strong>10% di materiale in più</strong> rispetto a quello calcolato per compensare le perdite, le irregolarità del terreno o le variazioni del volume reale degli inerti umidi. È molto più economico che dover fare un secondo ordine con i lavori fermi.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Calcestruzzo Standard',
    mixH200Hint: 'Ideale per fondamenta e solette',
    mixM40Label: 'Malta per Muratura',
    mixM40Hint: 'Per muri e tramezzi',
    mixM80Label: 'Massetti Resistenti',
    mixM80Hint: 'Per pavimenti e intonaci forti',
    modeDimsLabel: 'Per Misure',
    modeDirectLabel: 'm³ Diretti',
    labelLength: 'Lunghezza',
    labelWidth: 'Larghezza',
    labelThickness: 'Spessore',
    labelVolume: 'Volume Totale (m³)',
    binderCementLabel: 'Cemento',
    binderLimeLabel: 'Calce',
    summaryLabel: 'Totale da riempire:',
    resUnitSacks: 'Sacchi (25kg)',
    resUnitShovels: 'Palate',
    resUnitLitres: 'Litri',
    resLabelCement: 'Cemento Portland',
    resLabelLime: 'Calce Idraulica',
    resLabelSand: 'Sabbia / Inerti',
    resLabelWater: 'Acqua Potabile',
    proportionsTitle: 'Proporzioni dell\'Impasto Selezionato',
    propLabelSand: 'Sabbia',
    propLabelGravel: 'Ghiaia',
    adviceH200: 'Ideale per pilastri, solette e strutture portanti.',
    adviceM40: 'Perfetto per costruire muri di mattoni o blocchi.',
    adviceM80: 'Usa questo per massetti di pavimento molto resistenti.',
    adviceLimeH200: 'Il calcestruzzo di calce è più flessibile ma impiega più tempo a fare presa.',
    priceTotalLabel: 'Budget Stimato',
    priceSackLabel: 'Sacco',
    priceSandLabel: 'Sabbia (m³)',
    priceDisclaimer: 'Prezzi di mercato indicativi. Adegua in base al tuo fornitore locale.',
  },
};
