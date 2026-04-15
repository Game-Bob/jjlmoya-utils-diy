import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'ottimizzatore-taglio';
const title = 'Ottimizzatore di Taglio per Listelli e Pannelli';
const description =
  'Calcolatrice gratuita per ottimizzare i tagli di legno, metallo o tubi. Minimizza lo scarto con algoritmi Bin Packing 1D e 2D. Ideale per falegnameria e carpenteria.';

const faqData = [
  {
    question: 'Cos\'è un ottimizzatore di taglio 1D?',
    answer:
      'È uno strumento che utilizza algoritmi matematici (come il Bin Packing Problem) per determinare come tagliare pezzi più piccoli da un pezzo lungo standard (listello, profilo, tubo) con il minimo scarto possibile.',
  },
  {
    question: 'Perché includere lo spessore del taglio (Kerf)?',
    answer:
      'Ogni volta che la sega taglia il materiale, vengono consumati alcuni millimetri (normalmente tra 2mm e 4mm a seconda del disco). Se non calcoli questo spazio, gli ultimi pezzi della tua lista risulteranno più corti del previsto.',
  },
  {
    question: 'Posso mischiare pezzi di lunghezze diverse?',
    answer:
      'Sì, la nostra calcolatrice accetta qualsiasi combinazione di lunghezze e quantità. L\'algoritmo valuterà tutte le combinazioni possibili e darà priorità al massimo sfruttamento del materiale di stock.',
  },
  {
    question: 'Come salvo il mio piano di taglio?',
    answer:
      'Una volta ottimizzato, puoi stampare la pagina o fare uno screenshot dello schema visivo. Questo ti servirà da guida fisica in officina per non confondere l\'ordine dei tagli.',
  },
];

const howToData = [
  {
    name: 'Definire il materiale base (Stock)',
    text: 'Inserisci la lunghezza totale del listello o profilo disponibile (es. 2400mm o 6000mm).',
  },
  {
    name: 'Configurare lo spessore del disco (Kerf)',
    text: 'Imposta i millimetri che la sega elimina ad ogni passaggio affinché il calcolo sia millimetrico.',
  },
  {
    name: 'Elencare i pezzi desiderati',
    text: 'Scrivi la lunghezza e la quantità di ogni pezzo di cui hai bisogno per il tuo progetto.',
  },
  {
    name: 'Eseguire l\'ottimizzazione',
    text: 'Ottieni lo schema di taglio più efficiente e la percentuale esatta di scarto generato.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Definitiva all\'Ottimizzazione del Taglio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'ottimizzazione del taglio, nota tecnicamente come il <strong>Problema del Taglio dello Stock (Cutting Stock Problem)</strong>, è una delle sfide logistiche più affascinanti nell\'ingegneria industriale. Per un progetto con 20 pezzi e 5 barre di stock, esistono milioni di combinazioni possibili. Un algoritmo computazionale può trovare la soluzione ottimale in millisecondi, riducendo lo scarto abituale del 15% a meno del 5%.',
    },
    {
      type: 'title',
      text: 'Taglio Lineare 1D e Taglio di Pannelli 2D',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Taglio Lineare per Listelli e Profili',
      html: '<p>Nel <strong>taglio lineare (1D)</strong>, l\'ottimizzazione avviene in una sola dimensione: la lunghezza. La larghezza del materiale è assunta costante. È ideale per legno dimensionale (listelli, travi), profilati metallici e di alluminio, tubi in PVC o rame, e barre filettate.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Taglio di Pannelli per Tavole e Lamiere',
      html: '<p>Nel <strong>taglio di pannelli (2D)</strong>, si gestiscono due dimensioni: larghezza e lunghezza. Lo strumento utilizza algoritmi di tipo ghigliottina, dove ogni taglio va da bordo a bordo. Ideale per pannelli derivati (MDF, truciolato), compensato, vetro, metacrilato e lamiere metalliche.</p>',
    },
    {
      type: 'title',
      text: 'Il Fattore Critico: Lo Spessore del Taglio (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>Kerf</strong> è il materiale che viene eliminato ad ogni taglio. Un disco di sega circolare standard da banco consuma tra 3,0mm e 3,2mm per taglio. Una sega circolare a mano ne consuma da 1,5 a 2,5mm. Un taglio laser sul metacrilato appena 0,1-0,3mm. Ignorare il kerf in un progetto con 10 tagli su listelli da 2400mm può farti perdere tra 30mm e 32mm di materiale utile.',
    },
    {
      type: 'title',
      text: 'L\'Algoritmo Best Fit Decreasing',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Come Funziona l\'Ottimizzatore Internamente',
      html: '<p>Il cuore dell\'ottimizzatore utilizza la strategia <strong>Best Fit Decreasing (BFD)</strong>: prima ordina tutti i pezzi dalla lunghezza maggiore alla minore (i pezzi grandi sono più difficili da incastrare). Poi, per ogni pezzo, cerca il resto esistente dove possa entrare lasciando il minor avanzo possibile. Solo se non entra in nessun resto, apre una nuova barra vergine. Questo processo riduce lo scarto di un ordine di grandezza rispetto alla selezione casuale.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Lineare (Barre)',
    modePanelLabel: 'Pannello (Tavole)',
    configTitle: 'Configurazione Materiale',
    labelStockLength: 'Lunghezza Materiale (mm)',
    labelStockWidth: 'Larghezza Materiale (mm)',
    labelKerf: 'Spessore Lama / Kerf (mm)',
    cutsTitle: 'Lista Tagli',
    placeholderLength: 'Lunghezza',
    placeholderWidth: 'Larghezza',
    placeholderQty: 'Qtà',
    btnRemoveTitle: 'Elimina',
    statStockUsed: 'Materiale Usato',
    statTotalCuts: 'Tagli Totali',
    statWaste: 'Scarto Totale',
    statEfficiency: 'Efficienza',
    vizTitle: 'Visualizzazione Taglio',
    emptyState: 'Aggiungi i tagli e premi calcola per vedere il piano di taglio.',
    noValidCuts: 'Impossibile generare tagli validi. Verifica le misure.',
    noValidPanels: 'Impossibile generare pannelli validi. Verifica che i pezzi entrino nella tavola.',
    stockLabel: 'Materiale',
    panelLabel: 'Pannello',
    wasteLabel: 'Scarto:',
    effLabel: 'Effic:',
  },
};
