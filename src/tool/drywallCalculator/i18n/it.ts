import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'calcolatore-cartongesso';
const title = 'Calcolatore Cartongesso: Struttura, Lastre e Stuccatura';
const description = 'Calcolatore professionale per pareti divisorie e contropareti in cartongesso. Calcola il numero esatto di lastre, montanti C, guide U, viti, nastro per giunti e stucco.';

const faqData = [
  {
    question: 'Come calcolare quante lastre di cartongesso servono per una parete?',
    answer: 'Moltiplica la lunghezza della parete per l\'altezza del soffitto. Per pareti divisorie a due facce moltiplica per 2; per doppia lastra su due facce moltiplica per 4. Dividi l\'area totale per la superficie della singola lastra (2.4 m2 per lastra 120x200 cm) e aggiungi un 10% di scarto per i tagli.',
  },
  {
    question: 'Quando usare il passo dei montanti a 40 cm o 60 cm?',
    answer: 'Il passo standard di 60 cm è idoneo per pareti interne asciutte fino a 3.0 metri di altezza. Passa a un interasse di 40 cm in presenza di rivestimenti in ceramica, ambienti umidi (bagno e cucina), contropareti acustiche o altezze superiori a 3 metri.',
  },
  {
    question: 'Quale tipo di lastra di cartongesso scegliere per ogni ambiente?',
    answer: 'Usa la Lastra Standard Bianca (Tipo A) per camere e soggiorni; Idrorepellente Verde (Tipo H1) per bagni e cucine; Ignifuga Rosa (Tipo F) per camini e centrali termiche; Acustica Blu ad alta densità per l\'isolamento acustico.',
  },
  {
    question: 'Quante viti servono per ogni lastra di cartongesso?',
    answer: 'Calcola circa 30 viti autofilettanti (3.5x25 mm) per lastra 120x200 cm a rivestimento singolo. Fissa le viti a un passo di 25 cm lungo il perimetro e 30 cm sui montanti centrali.',
  },
  {
    question: 'Perché posare il nastro acustico sotto le guide?',
    answer: 'Il nastro desolarizzante in polietilene isola le guide U dal pavimento e dal soffitto, interrompendo la trasmissione delle vibrazioni e del rumore di calpestio.',
  },
];

const howToData = [
  { name: 'Inserire le Dimensioni della Parete', text: 'Indica la lunghezza e l\'altezza del soffitto in metri o piedi.' },
  { name: 'Configurare la Struttura e le Lastre', text: 'Scegli il passo dei montanti (40 cm o 60 cm), il numero di strati e le facce rivestite.' },
  { name: 'Esaminare la Distinta Materiali e il Disegno CAD', text: 'Controlla il computo dei materiali (montanti, guide, viti, stucchi) e l\'elevazione tecnica.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dimensionamento Tecnico delle Pareti in Cartongesso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La costruzione di sistemi a secco in cartongesso richiede il calcolo accurato dell\'orditura metallica in acciaio zincato (montanti C e guide U) e la sfalsatura dei giunti secondo le norme EN 520 per evitare fessurazioni.',
    },
    {
      type: 'title',
      text: 'Regole per il Passo dei Montanti: 40 cm vs 60 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>passo standard a 60 cm</strong> è idoneo per le pareti di normale altezza. Il <strong>passo a 40 cm</strong> è obbligatorio per l\'applicazione di piastrelle ceramiche pesanti o altezze superiori a 3.00 metri.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Sfalsamento dei Giunti e Schema di Fissaggio',
      html: '<p>Non allineare mai i giunti tra lastre adiacenti o tra facce opposte. Mantieni uno sfalsamento minimo di 40 cm. Fissa le lastre con viti autofilettanti 3.5x25 mm distanziate a <strong>25 cm sul bordo</strong> e a <strong>30 cm al centro</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Calcolo dello Scarto e del Consumo di Stucco',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Considera sempre un <strong>10% di margine per gli sfridi</strong> di taglio. La stuccatura dei giunti richiede circa 0.8 kg di stucco in polvere o pronto all\'uso per metro quadrato di superficie.',
    },
  ],
  ui: {
    unitSystemLabel: 'Sistema di Misura',
    unitMetric: 'Metrico (m, cm, kg)',
    unitImperial: 'Imperiale (ft, in, lb)',

    paramLengthLabel: 'Lunghezza Parete',
    paramHeightLabel: 'Altezza Parete',
    paramSpacingLabel: 'Passo Montanti',
    paramSpacing40Metric: '40 cm (Carico Alto)',
    paramSpacing60Metric: '60 cm (Standard)',
    paramSpacing40Imperial: '16 in (Carico Alto)',
    paramSpacing60Imperial: '24 in (Standard)',
    paramLayersLabel: 'Strati di Lastre',
    paramSingleLayer: 'Lastra Singola',
    paramDoubleLayer: 'Doppia Lastra',
    paramSidesLabel: 'Facce Rivestite',
    paramDoubleSided: '2 Facce (Divisorio)',
    paramSingleSided: '1 Faccia (Controparete)',
    paramBoardTypeLabel: 'Tipo di Lastra',
    boardTypeStandard: 'Standard (Tipo A)',
    boardTypeMoisture: 'Idrorepellente (Tipo H1)',
    boardTypeFire: 'Ignifuga (Tipo F)',
    boardTypeAcoustic: 'Acustica (Tipo A)',
    paramWasteLabel: 'Margine Scarto',

    summaryWallArea: 'Superficie Netta Parete',
    summaryBoardArea: 'Superficie Totale Lastre',

    resBoardsLabel: 'Lastre di Cartongesso',
    resBoardsUnit: 'lastre',
    resStudsLabel: 'Montanti Verticali C',
    resStudsUnit: 'pezzi',
    resTracksLabel: 'Guide Orizzontali U',
    resTracksUnit: 'aste',
    resDrywallScrewsLabel: 'Viti per Cartongesso',
    resDrywallScrewsUnit: 'viti',
    resFramingScrewsLabel: 'Viti per Struttura',
    resFramingScrewsUnit: 'viti',
    resJointTapeLabel: 'Nastro per Giunti',
    resJointTapeUnit: 'lunghezza',
    resJointCompoundLabel: 'Stucco per Giunti',
    resJointCompoundUnit: 'peso',
    resAcousticBandLabel: 'Nastro Acustico Desolarizzante',
    resAcousticBandUnit: 'lunghezza',

    diagramWallTitle: 'Elevazione Tecnica CAD',
    diagramStudLegend: 'Montanti C',
    diagramTrackLegend: 'Guide U',
    diagramBoardLegend: 'Sfalsamento Lastre',
    diagramModeStructure: 'Struttura',
    diagramModeBoard: 'Lastre',
  },
};
