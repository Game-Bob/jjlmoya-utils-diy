import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatrice-balaustre';
const title = 'Calcolatrice per Balaustre: Spaziatura Esatta per Ringhiere';
const description =
  'Calcola lo spazio esatto tra aste o balaustre per ringhiere rispettando la normativa dei 10 cm. Piante automatiche.';

const faqData = [
  {
    question: 'Qual è la distanza massima legale tra le balaustre?',
    answer:
      'Nella maggior parte delle normative internazionali, lo spazio libero tra gli elementi di una ringhiera non deve consentire il passaggio di una sfera di 10 cm di diametro per evitare incidenti ai bambini.',
  },
  {
    question: 'Come si misura la spaziatura: tra i centri o i vuoti?',
    answer:
      "La nostra calcolatrice fornisce entrambi. Lo 'spazio libero' è il vuoto reale tra le aste (fondamentale per la sicurezza), mentre la 'distanza tra i centri' (on-center) è quella che indica dove forare o fissare ogni balaustra.",
  },
  {
    question: 'Cosa succede se la ripartizione non è esatta?',
    answer:
      'La calcolatrice regola automaticamente il numero di aste in modo che il primo e l’ultimo vuoto siano identici, garantendo la simmetria visiva e il rispetto rigoroso del vuoto massimo consentito.',
  },
  {
    question: 'È meglio saldare o avvitare le balaustre?',
    answer:
      'Dipende dal materiale. Per l’acciaio, la saldatura offre la massima rigidità strutturale. Per il legno o l’alluminio, si usano ancoraggi meccanici o viti passanti. L’importante è che la ringhiera sopporti una forza orizzontale di almeno 0,8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Misurare la lunghezza totale',
    text: 'Misura la distanza esatta tra il primo e l’ultimo palo dove verrà installata la ringhiera.',
  },
  {
    name: 'Definire lo spessore della balaustra',
    text: 'Misura la larghezza di un’asta individuale (es. 2x2 cm per tubo quadrato o il diametro se è tondo).',
  },
  {
    name: 'Stabilire il vuoto massimo',
    text: 'Indica la separazione massima desiderata (raccomandato 10 cm per rispettare la normativa).',
  },
  {
    name: 'Ottenere i segni di installazione',
    text: 'Controlla la lista delle posizioni esatte per eseguire i fori e assicurare una ripartizione simmetrica e sicura.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
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
      text: 'Guida Definitiva: Come Calcolare la Spaziatura delle Balaustre per Ringhiere',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Progettare una ringhiera sicura ed esteticamente perfetta è un’arte che combina la precisione matematica con le normative edilizie. Che sia per una terrazza, un balcone o una scala interna, il calcolo corretto delle balaustre (o aste) è il passo più critico del progetto. Un errore di calcolo non solo rovina la simmetria visiva, ma può rendere la tua struttura illegale e insicura.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Perché questo calcolo è così importante?',
      html: '<p>Non si tratta solo di "riempire lo spazio". Si tratta di rispettare la <strong>Regola della Sfera da 4 Pollici (10 cm)</strong>, una normativa internazionale di sicurezza progettata per prevenire incidenti ai bambini.</p>',
    },
    {
      type: 'title',
      text: '1. La Normativa di Sicurezza: La Regola dei 10 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prima di tagliare il primo pezzo di legno o metallo, devi capire il "perché" della matematica. I codici edilizi in molti paesi stabiliscono una norma chiara: <em>"Lo spazio libero tra gli elementi verticali non deve consentire il passaggio di una sfera di 10 cm (4 pollici) di diametro."</em>',
    },
    {
      type: 'paragraph',
      html: 'Questa misura non è arbitraria. È il diametro medio della testa di un bambino piccolo (generalmente sotto l’anno di età). Se un bambino riesce a passare il corpo ma la testa rimane incastrata, il rischio di soffocamento è altissimo. Se riesce a passare la testa, può cadere nel vuoto. Pertanto, l’obiettivo della nostra <strong>Calcolatrice per Balaustre</strong> non è solo estetico, è salvare vite.',
    },
    {
      type: 'title',
      text: '2. Il Problema Matematico: L’Errore del Palo della Recinzione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nella programmazione e nell’edilizia, esiste un problema classico chiamato <em>"Fencepost Error"</em> (Errore del Palo della Recinzione). Se vuoi costruire una recinzione di 10 metri con pali ogni metro, di quanti pali hai bisogno? La risposta intuitiva è 10, ma quella corretta è 11.',
    },
    {
      type: 'paragraph',
      html: 'Con le balaustre accade qualcosa di simile, ma più complesso, perché la larghezza della balaustra stessa occupa spazio. La formula utilizzata dal nostro strumento risolve questo sistema di equazioni per te:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Passo A: Calcolare i Vuoti',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Per prima cosa determiniamo quante balaustre possono entrare teoricamente se usassimo lo spazio massimo consentito. Arrotondiamo questo numero per eccesso per garantire che i vuoti risultanti siano <em>minori</em> del massimo.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Passo B: Ricalcolare lo Spazio Esatto',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Una volta noto il numero esatto di balaustre (n), calcoliamo quanto spazio "avanza" se sottraiamo la larghezza di tutto il materiale, e lo dividiamo equamente tra i vuoti (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Guida Passo-Passo per un’Installazione Perfetta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Avere i numeri è solo metà della battaglia. Qui ti spieghiamo come trasferire quelle cifre dalla carta (o dallo schermo) alla realtà del tuo lavoro.',
    },
    {
      type: 'title',
      text: 'Passo 1: Misurazione di Precisione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Misura la distanza <strong>interna</strong> tra palo e palo. Non misurare dal centro del palo. Devi conoscere lo spazio luce esatto che andrai a riempire (L). Se la tua ringhiera ha più tratti, misura ognuno individualmente; le costruzioni raramente sono perfettamente in squadra e un errore di 0,5 cm può rovinare la simmetria.',
    },
    {
      type: 'title',
      text: 'Passo 2: Trovare il Centro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L’errore numero uno dei principianti è iniziare a posizionare le balaustre da un’estremità all’altra. Questo si traduce quasi sempre in un ultimo vuoto di dimensioni insolite, rompendo l’armonia visiva.<ul><li>Segna il <strong>centro esatto</strong> della ringhiera (L / 2).</li><li>Decidi se al centro vuoi una <em>balaustra</em> o un <em>vuoto</em>.</li><li>Se vuoi una balaustra al centro: segna metà della larghezza della balaustra su ogni lato del tuo segno centrale.</li><li>Se vuoi un vuoto al centro: segna metà della distanza del vuoto (g / 2) su ogni lato.</li></ul>',
    },
    {
      type: 'title',
      text: 'Passo 3: Fabbricare un Distanziatore (Spacers)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Non usare il metro per ogni balaustra. L’errore umano cumulativo farà sì che l’ultima balaustra sia spostata di diversi centimetri. La cosa professionale è tagliare un blocco di legno (o due) con la misura esatta del vuoto (g) fornita dalla nostra calcolatrice.',
    },
    {
      type: 'paragraph',
      html: 'Usa questo blocco come dima fisica. Posiziona una balaustra, metti il blocco, posiziona la balaustra successiva aderente al blocco e fissala. Questo garantisce una consistenza millimetrica.',
    },
    {
      type: 'title',
      text: '4. Materiali e Strumenti Necessari',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Attrezzatura per una finitura professionale',
      html: '<ul><li>Metro a nastro ad alta precisione</li><li>Matita da carpentiere</li><li>Livella a bolla (per la verticalità)</li><li>Troncatrice (per tagli netti)</li><li>Trapano e viti per legno</li><li>Blocchi distanziatori (fatti su misura)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Ulteriori Domande Tecniche',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Cosa succede se l’ultimo vuoto non combacia?',
      html: '<p>Se hai usato la nostra calcolatrice, questo non dovrebbe accadere. Tuttavia, nella realtà, il legno si curva e i pali non sono sempre dritti. Se arrivando alla fine ti avanzano o mancano 1-2 mm, è impercettibile. Se ti manca 1 cm, controlla i tuoi blocchi distanziatori, probabilmente hai accumulato millimetri in ogni passaggio.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Posso mettere le balaustre più separate se non ho bambini?',
      html: '<p>Legalmente, no. Il codice edilizio si applica all’abitazione, non agli abitanti attuali. Se un giorno dovessi vendere casa, una ringhiera non a norma sarà un problema durante l’ispezione. Inoltre, i visitatori (nipoti, nipoti) potrebbero essere in pericolo.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Legno, Metallo o Vetro?',
      html: '<p>Questa calcolatrice funziona per <strong>qualsiasi elemento verticale ripetitivo</strong>. Se usi cavi d’acciaio orizzontali, la normativa è diversa (normalmente non devono consentire la scalata, "effetto scala"). Per il vetro, è considerato un pannello continuo e non si applica la spaziatura, ma la resistenza all’impatto.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"L’architettura è la volontà dell’epoca tradotta in spazio."</em></p><p>Ci auguriamo che questo strumento ti aiuti a costruire spazi più sicuri e belli. Ricorda sempre di consultare il codice edilizio locale del tuo comune, poiché potrebbero esserci variazioni specifiche sull’altezza minima (generalmente 90-110 cm) o sui carichi di forza.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensioni',
    sectionDesc: 'Inserisci le misure della tua ringhiera',
    labelRailLength: 'Lunghezza Totale (L)',
    labelBalusterWidth: 'Larghezza Balaustra (w)',
    labelMaxGap: 'Spazio Massimo (g)',
    blueprintTitle: 'Piano di Montaggio',
    blueprintRef: 'REF: BAL-001 // SCALA: AUTO',
    labelRequired: 'Balaustre Richieste',
    labelExactGap: 'Gap Esatto',
    labelOnCenter: 'Centro a Centro',
    labelTotalSpaces: 'Spazi Totali',
    labelCoveredLength: 'Lunghezza Coperta',
    labelDisclaimer: '* Le dimensioni mostrate sono approssimative per la visualizzazione.',
  },
};
