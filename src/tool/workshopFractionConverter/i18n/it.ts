import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertitore-frazioni-pollici-millimetri';
const title = 'Convertitore Frazioni in Millimetri per Officina';
const description = 'Converti istantaneamente le misure in pollici frazionari in millimetri. Trova le viti, i bulloni e le bussole standard più vicini per la tua officina. Progettato per mani sporche e dita con guanti.';

const faqData = [
  {
    question: 'Perché devo convertire le frazioni in millimetri?',
    answer: 'La maggior parte degli strumenti e dei dispositivi di fissaggio moderni utilizza il sistema metrico, ma molti strumenti d\'epoca e specifiche tecniche usano ancora i pollici frazionari. Questo convertitore colma tale divario, aiutandoti a trovare l\'esatto equivalente metrico o la dimensione standard più vicina.',
  },
  {
    question: 'Qual è la differenza tra 1/2 pollice e 12,7 mm?',
    answer: '1/2 pollice equivale esattamente a 12,7 millimetri (0,5 × 25,4 = 12,7). Gli strumenti metrici e imperiali sono spesso intercambiabili per le dimensioni standard perché i produttori allineano le misure comuni dei bulloni su entrambi i sistemi.',
  },
  {
    question: 'Perché lo strumento mostra il "fissaggio più vicino"?',
    answer: 'Perché le conversioni esatte spesso cadono tra le dimensioni standard dei bulloni. Lo strumento trova il bullone o la bussola commerciale più vicina alla tua misura, così puoi usare quello che hai a disposizione in officina.',
  },
  {
    question: 'Qual è la differenza tra precisione per falegnameria e meccanica?',
    answer: 'In falegnameria, differenze di 0,5 mm sono spesso trascurabili. In meccanica e lavorazioni al tornio, lo 0,1 mm conta. La modalità precisione suggerisce gli intervalli di tolleranza accettabili per il tuo materiale.',
  },
  {
    question: 'Posso usare questo strumento offline?',
    answer: 'Sì. Tutti i calcoli avvengono nel tuo browser. Lo strumento funziona completamente offline dopo il primo caricamento, ideale per l\'uso in officina senza WiFi.',
  },
  {
    question: 'Perché lo strumento include la cronologia?',
    answer: 'Quando lavori a uno smontaggio o a un progetto con più parti, la cronologia ti permette di consultare le misure senza doverle reinserire, aiutandoti a creare una lista dei pezzi mentre lavori.',
  },
];

const howToData = [
  {
    name: 'Seleziona il tipo di misura',
    text: 'Scegli "Diretta" per convertire una frazione in millimetri, o "Inversa" per trovare la frazione di una misura presa con il calibro.',
  },
  {
    name: 'Inserisci la misura',
    text: 'Usa l\'input a tre colonne (intero, numeratore, denominatore) o tocca un pulsante di preimpostazione rapida. I pulsanti a freccia ti permettono di regolare il valore senza digitare.',
  },
  {
    name: 'Controlla i risultati',
    text: 'Il risultato mostra la conversione esatta e le dimensioni standard di bulloni e bussole più vicine. La scala visiva aiuta a capire le proporzioni.',
  },
  {
    name: 'Salva nella cronologia',
    text: 'Clicca su "Salva nella cronologia" per conservare le misure. La cronologia rimane nel tuo browser, anche dopo la chiusura.',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'Istruzioni d\'uso', type: 'howto', schema: howToSchema },
    { title: 'Applicazione', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: 'Tipo di Misura',
    labelWhole: 'Intero',
    labelNumerator: 'Numeratore',
    labelDenominator: 'Denominatore',
    labelInches: 'Pollici',
    labelMillimeters: 'Millimetri',
    resultTitle: 'Risultato Conversione',
    resultFraction: 'Frazione',
    resultInches: 'Pollici',
    resultMillimeters: 'Millimetri',
    matchTitle: 'Abbinamento Standard più Vicino',
    matchClosestFastener: 'Misura bullone o vite standard',
    matchClosestSocket: 'Misura bussola o chiave standard',
    matchDifference: 'Differenza dalla tua misura',
    matchRecommendation: 'Usa questa misura se disponibile',
    reverseSearchTitle: 'Ricerca Inversa',
    reverseSearchLabel: 'Misura Rilevata (mm)',
    reverseSearchButton: 'Trova Frazione',
    reverseSearchHint: 'Misura con il calibro e inserisci il valore',
    unitMm: 'mm',
    unitInch: 'pollici',
    modeForward: 'Frazione → Metrico',
    modeReverse: 'Metrico → Frazione',
    precisionLabel: 'Modalità Precisione',
    precisionCarpentry: 'Falegnameria',
    precisionMetal: 'Meccanica',
    buttonConvert: 'Converti',
    buttonClear: 'Cancella',
    buttonCopyResult: 'Copia Risultato',
    buttonSaveToHistory: 'Salva in Cronologia',
    historyTitle: 'Cronologia',
    historyEmpty: 'Nessuna misura salvata',
    historyRemove: 'Rimuovi',
    helpText: 'Seleziona una misura o inserisci una frazione per iniziare.',
    toolOverline: 'Strumenti da Officina',
    labelVisualReference: 'Riferimento Visivo (1 pollice = 96px)',
  },
};
