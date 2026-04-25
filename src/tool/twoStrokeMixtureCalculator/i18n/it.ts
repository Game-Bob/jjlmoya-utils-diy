import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-miscela-2-tempi';
const title = 'Calcolatore Miscela 2 Tempi: Rapporti Olio e Benzina Precisi';
const description = 'Calcola istantaneamente il rapporto preciso per la tua miscela 2 tempi. Strumento essenziale per motoseghe, ciclomotori, moto e piccoli motori. Supporta i rapporti 1:25, 1:33, 1:40 e 1:50.';

const faqData = [
  {
    question: 'Cos\'è un motore a 2 tempi?',
    answer: 'Un motore a 2 tempi combina aspirazione e compressione in soli due movimenti del pistone, risultando più semplice e leggero di un motore a 4 tempi. Alimentano motoseghe, soffiatori, ciclomotori e alcune moto. Richiedono olio miscelato alla benzina per la lubrificazione.',
  },
  {
    question: 'Quali sono i rapporti di miscela più comuni?',
    answer: 'I rapporti comuni sono 1:25 (ricco, protettivo), 1:33 (macchine datate), 1:40 (standard) e 1:50 (magro, motori moderni). Controlla sempre il manuale del tuo motore: un rapporto errato può danneggiarlo.',
  },
  {
    question: 'Cosa succede se sbaglio la miscela?',
    answer: 'Troppo olio (miscela ricca) causa fumo eccessivo, incrosta le candele e riduce le prestazioni. Troppo poco olio (miscela magra) porta al grippaggio, danni al pistone e rottura del motore.',
  },
  {
    question: 'Che tipo di olio devo usare?',
    answer: 'Usa olio specifico per motori a 2 tempi adatto alla tua attrezzatura. Gli oli sintetici premium offrono una protezione migliore e una combustione più pulita rispetto agli oli convenzionali. Non usare mai olio per motori a 4 tempi: danneggerebbe il motore.',
  },
  {
    question: 'Come miscelare benzina e olio?',
    answer: 'Versa una parte di benzina in un contenitore pulito, aggiungi la quantità calcolata di olio, quindi aggiungi la benzina rimanente. Mescola bene agitando per 1-2 minuti. Etichetta il contenitore con la data della miscela.',
  },
];

const howToData = [
  { name: 'Verifica il rapporto', text: 'Cerca il manuale del motore. Rapporti comuni: motoseghe (1:40 o 1:50), ciclomotori (1:33), moto d\'epoca (1:25). Usare il rapporto sbagliato danneggia il motore.' },
  { name: 'Misura la benzina', text: 'Decidi quanta benzina ti serve. Questo strumento gestisce litri, galloni o qualsiasi unità. Una misurazione precisa della benzina garantisce la giusta quantità di olio.' },
  { name: 'Calcola l\'olio necessario', text: 'Inserisci volume benzina e rapporto. Questo calcolatore mostra esattamente quanto olio (in ml o litri) ti serve per una miscela perfetta.' },
  { name: 'Mescola con cura', text: 'Versa la benzina in un contenitore pulito, aggiungi l\'olio calcolato, poi la benzina restante. Agita per 1-2 minuti per amalgamare bene.' },
  { name: 'Etichetta e usa', text: 'Segna sul contenitore data e rapporto. Usa la miscela entro 30 giorni per risultati ottimali (specialmente con oli sintetici).' },
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calcolatore Miscela 2 Tempi: Rapporti Olio-Benzina Precisi per Motoseghe e Ciclomotori', level: 2 },
    { type: 'paragraph', html: 'I motori a due tempi richiedono una miscela precisa di benzina e olio per sopravvivere. Una miscela errata può distruggere il motore in pochi minuti. Questo calcolatore determina istantaneamente l\'esatta quantità di olio necessaria per il tuo volume di carburante e tipo di motore, eliminando ogni incertezza in officina.' },

    { type: 'title', text: 'Perché i motori a 2 tempi richiedono olio nella benzina', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'La differenza critica', html: 'A differenza dei motori a 4 tempi con serbatoi d\'olio separati, i motori a 2 tempi miscelano l\'olio direttamente nel carburante. Ad ogni ciclo, il motore brucia la miscela sia per l\'energia che per la lubrificazione. Non c\'è coppa, né pompa dell\'olio separata: solo la miscela mantiene in vita i pistoni.' },

    { type: 'title', text: 'Riferimento rapido rapporti 2 tempi', level: 3 },
    { type: 'table', headers: ['Rapporto', '% Olio', 'Utilizzo', 'Tipo Motore', 'Caratteristiche'], rows: [
      ['1:25', '3,85%', 'Massima Protezione', 'Attrezzatura pre-1980, carichi elevati, moto d\'epoca', 'Miscela ricca: più fumo, più depositi carboniosi, massima protezione contro il grippaggio'],
      ['1:33', '2,94%', 'Macchine Classiche', 'Piccoli motori anni 80-90, vecchie motoseghe', 'Ricchezza moderata: equilibrio tra protezione ed efficienza'],
      ['1:40', '2,44%', 'Standard di Settore', 'Quasi tutte le motoseghe e ciclomotori moderni', 'Raccomandazione standard: progettato per gli oli sintetici odierni'],
      ['1:50', '1,96%', 'Efficienza Moderna', 'Ultime motoseghe, ciclomotori hi-performance', 'Miscela magra: meno fumo, combustione pulita, per oli sintetici premium']
    ] },

    { type: 'title', text: 'Conseguenze di rapporti errati', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Troppo Olio (Miscela Ricca)', con: 'Eccessivo fumo bianco, candele incrostate, depositi carboniosi, scarsa accelerazione, guasto al motore' },
      { pro: 'Troppo Poco Olio (Miscela Magra)', con: 'Grippaggio del pistone in pochi secondi, pareti cilindro rigate, danno motore catastrofico' },
      { pro: 'Rapporto Corretto', con: 'Funzionamento fluido, lubrificazione adeguata, combustione ottimale, vita del motore prolungata, avviamento affidabile' }
    ] },

    { type: 'title', text: 'Rapporti comuni per attrezzatura', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Motoseghe', html: '<strong>Stihl, Husqvarna, Echo:</strong> I modelli moderni richiedono tipicamente 1:40 o 1:50. Controlla sempre il manuale: usare 1:25 su una motosega moderna rischia candele sporche. Le vecchie macchine Stihl (anni 90 e precedenti) possono specificare 1:25 o 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Ciclomotori e Moto', html: '<strong>Vespa, Honda, Yamaha:</strong> La maggior parte richiede 1:33 per i vecchi modelli, 1:40–1:50 per le versioni moderne. Ciclomotori ad alte prestazioni spesso specificano 1:50. Il manuale di servizio è la fonte di verità.' },
    { type: 'card', icon: 'mdi:tools', title: 'Soffiatori e Tagliabordi', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Tipicamente 1:50 (moderni) o 1:40 (più vecchi). Questi strumenti sono progettati per uso stagionale rapido, quindi rapporti magri riducono il fumo senza sacrificare l\'affidabilità.' },

    { type: 'title', text: 'Il tipo di olio conta quanto il rapporto', level: 3 },
    { type: 'comparative', items: [
      { title: 'Olio 2 Tempi Convenzionale', description: 'Opzione economica per uso occasionale. Più ceneri, più fumo, protezione adeguata per rapporti standard.', icon: 'mdi:beaker', points: ['Costo inferiore', 'Fumo più visibile', 'Più depositi', 'Va bene per rapporti 1:40'] },
      { title: 'Olio 2 Tempi Sintetico', description: 'Scelta premium per utenti frequenti. Combustione più pulita, migliore protezione, permette rapporti più magri. Termostabile.', icon: 'mdi:flame', points: ['Minore fumo', 'Migliore protezione motore', 'Permette 1:50 in sicurezza', 'Maggiore stabilità in stoccaggio'], highlight: true },
      { title: 'Miscela Sintetica (Semi sintetico)', description: 'Via di mezzo tra convenzionale e sintetico. Buona protezione a costo moderato. Spesso raccomandato dai produttori.', icon: 'mdi:beaker-outline', points: ['Prestazioni equilibrate', 'Costo moderato', 'Ottimo per rapporti 1:40', 'Meno fumo del convenzionale'] }
    ], columns: 3 },

    { type: 'title', text: 'Processo di miscelazione passo-passo', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'Il modo giusto di miscelare', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Usa un contenitore dedicato</strong> riservato solo alla miscela. Pulito, asciutto, contrassegnato.</li><li><strong>Versa metà benzina</strong> nel contenitore per prima.</li><li><strong>Aggiungi la quantità di olio calcolata</strong> (usa questo calcolatore per precisione).</li><li><strong>Aggiungi la benzina rimanente</strong> per raggiungere il volume target.</li><li><strong>Agita vigorosamente per 1–2 minuti</strong> finché il colore non è uniforme. Una miscela omogenea = lubrificazione costante.</li><li><strong>Etichetta il contenitore</strong> con data, rapporto e tipo di carburante.</li><li><strong>Usa entro 30 giorni</strong> (gli oli sintetici estendono a 60 giorni).</li></ol>' },

    { type: 'title', text: 'Quando dubitare del manuale dell\'attrezzatura', level: 3 },
    { type: 'tip', html: '<strong>Verifica sempre prima il rapporto sul manuale del produttore.</strong> Se non lo trovi, visita il sito del produttore o contatta il supporto. Mai indovinare: un rapporto errato annulla la garanzia e rischia il grippaggio. Se l\'attrezzatura è d\'epoca e il manuale è perso, cerca online il numero del modello.' },

    { type: 'title', text: 'Glossario: Termini del 2 Tempi Spiegati', level: 3 },
    { type: 'glossary', items: [
      { term: 'Miscela Magra (Lean)', definition: 'Carburante con troppo poco olio (rapporto alto come 1:50). Rischio di grippaggio per lubrificazione insufficiente.' },
      { term: 'Miscela Ricca (Rich)', definition: 'Carburante con troppo olio (rapporto basso come 1:25). Causa fumo eccessivo, candele sporche e depositi.' },
      { term: 'Miscela Omogenea', definition: 'Amalgama uniforme di benzina e olio, ottenuto agitando bene. Essenziale per lubrificazione e combustione costanti.' },
      { term: 'Grippaggio (Seizure)', definition: 'Quando un pistone si blocca nel cilindro per mancanza di lubrificazione e attrito. Risulta in guasto totale del motore.' },
      { term: 'Olio Sintetico', definition: 'Olio formulato in laboratorio che offre protezione superiore, combustione pulita e stabilità termica rispetto agli oli minerali.' },
      { term: 'Motore a 2 Tempi', definition: 'Motore che completa il ciclo in due movimenti del pistone. Più leggero e semplice dei motori a 4 tempi.' },
      { term: 'Motore a 4 Tempi', definition: 'Motore con coppa dell\'olio separata e ciclo a quattro fasi. L\'olio circola tramite condotti, non miscelato alla benzina.' }
    ] },

    { type: 'title', text: 'Come questo calcolatore salva tempo e denaro', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Calcoli precisi, zero errori di misura', icon: 'mdi:check-circle' },
      { value: 'Istantaneo', label: 'Quantità esatte in pochi secondi', icon: 'mdi:flash' },
      { value: '4 Rapporti', label: 'Copre 1:25, 1:33, 1:40, 1:50', icon: 'mdi:counter', trend: { value: 'Più rapporti custom', positive: true } },
      { value: 'Condivisibile', label: 'Copia e condividi il setup tramite URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Errori comuni che uccidono i motori', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Usare olio per 4 tempi in motori a 2 tempi', icon: 'mdi:alert', badge: 'Morte Motore', html: 'Gli oli per 4 tempi sono fatti per circolare nel blocco motore. In un serbatoio 2 tempi non bruciano bene e distruggono il motore in poche ore.' },
    { type: 'diagnostic', variant: 'warning', title: 'Dimenticare di agitare bene', icon: 'mdi:alert', badge: 'Rischio Grippaggio', html: 'Se olio e benzina si separano per miscelazione incompleta, parti del motore bruceranno senza lubrificazione. Agita per almeno 1–2 minuti.' },
    { type: 'diagnostic', variant: 'warning', title: 'Usare benzina vecchia (oltre 60 giorni)', icon: 'mdi:alert', badge: 'Residui Gommosi', html: 'La benzina con etanolo si degrada nel tempo. La vecchia miscela lascia depositi gommosi nei carburatori. Prepara solo quella che userai entro 30 giorni.' },

    { type: 'title', text: 'Sintesi FAQ', level: 3 },
    { type: 'summary', title: 'Prima di miscelare', items: [
      'Controlla il rapporto esatto sul manuale: è la specifica testata dal produttore.',
      'Verifica di usare olio per 2 tempi, non per 4 tempi o altri tipi.',
      'Usa un contenitore pulito e dedicato solo alla miscela.',
      'Usa benzina fresca (non vecchia di mesi) e olio compatibile.',
      'Mescola bene ed etichetta con data, rapporto e tipo di benzina.',
      'Usa la miscela entro 30 giorni per i migliori risultati.'
    ] },
  ],
  ui: {
    titleMain: 'Calcolatore Miscela 2 Tempi',
    labelFuelVolume: 'Volume Benzina',
    labelRatio: 'Rapporto Miscela',
    labelOilRequired: 'Olio Necessario',
    labelTotalMixture: 'Miscela Totale',
    labelRichness: 'Ricchezza Miscela',
    labelPresets: 'Rapporti Comuni',
    labelCustomRatio: 'Rapporto Custom (1:X)',
    btnClear: 'Cancella',
    btnCopyResults: 'Copia Risultati',
    btnSwitchMode: 'Cambia Modalità',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Magro (meno olio, rischio grippaggio)',
    richBalanced: 'Bilanciato (mix standard)',
    richRich: 'Ricco (più olio, più fumo, protezione motore)',
    msgReady: 'Pronto',
    msgMixtureReady: 'Miscela calcolata',
    tooltipFuelVolume: 'Inserisci la quantità di benzina in litri',
    tooltipRatio: 'Inserisci il valore: 25, 33, 40 o 50 (per 1:25, 1:33, ecc.)',
    recipientLabel: 'Contenitore Miscela',
    oilPercentage: '% Olio',
    labelVolume: 'Volume',
    labelRatioShort: 'Rapporto',
    labelOilTip: 'Mix olio al 2% = rapporto 1:50',
    labelMixingTips: 'Consigli Miscelazione',
    labelMixingTipsDesc: 'Mescola in contenitore pulito: prima benzina, aggiungi olio misurato, poi benzina restante. Agita bene (1-2 min) per mix omogeneo. Etichetta con data e rapporto.',
    recipePrefix: 'Per',
    recipeAt: 'di benzina al',
    recipeAdd: 'aggiungi esattamente',
    recipeOfOil: 'di olio per 2 tempi.',
    copyTextPrefix: 'Miscela 2T',
    copyTextFuel: 'benzina',
    copyTextOil: 'olio',
  },
};
