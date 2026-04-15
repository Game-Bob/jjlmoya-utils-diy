import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'calcolatrice-argilla';
const title = 'Calcolatrice Restringimento Argilla: Dimensioni Esatte per Ceramica';
const description =
  'Calcola il restringimento dell\'argilla in essiccazione e cottura. Progetta pezzi in ceramica con le dimensioni finali esatte.';

const faqData = [
  {
    question: 'Perché l\'argilla si restringe?',
    answer:
      'L\'argilla si restringe principalmente a causa della perdita d\'acqua. Prima avviene l\'essiccazione (evaporazione dell\'acqua tra le particelle) e poi la cottura (eliminazione dell\'acqua chimicamente combinata e sinterizzazione delle particelle).',
  },
  {
    question: 'Qual è la percentuale di restringimento normale?',
    answer:
      'Dipende dall\'impasto ceramico. La terracotta solitamente si restringe tra il 5-10%, mentre il gres e la porcellana possono arrivare al 12-15% a causa della loro maggiore vetrificazione.',
  },
  {
    question: 'Come misuro il restringimento della mia argilla?',
    answer:
      'Crea una piastra di prova di esattamente 10 cm. Lasciala asciugare e misurala (restringimento da essiccazione). Cuocila alla temperatura finale e misurala di nuovo (restringimento totale). La differenza ti darà la percentuale esatta.',
  },
  {
    question: 'Cosa succede se il mio pezzo si crepa durante l\'essiccazione?',
    answer:
      'Solitamente indica un\'essiccazione troppo rapida o non uniforme. Le zone sottili perdono acqua prima di quelle spesse, generando tensioni. Copri i pezzi con della plastica per rallentare il processo.',
  },
];

const howToData = [
  {
    name: 'Misurare il pezzo umido',
    text: 'Prendi le dimensioni esatte del tuo pezzo subito dopo la tornitura o la modellazione, quando ha ancora tutta la sua umidità.',
  },
  {
    name: 'Inserire il coefficiente di restringimento',
    text: 'Cerca sulla confezione della tua argilla la percentuale di restringimento totale (essiccazione + cottura) fornita dal produttore.',
  },
  {
    name: 'Ottenere le dimensioni finali previste',
    text: 'Usa la calcolatrice per sapere quanto misurerà il tuo pezzo dopo il passaggio in forno e pianifica i tuoi incastri o coperchi di conseguenza.',
  },
  {
    name: 'Calcolo inverso per obiettivi',
    text: 'Se hai bisogno che il tuo pezzo misuri esattamente X cm alla fine, usa il calcolo inverso per sapere che dimensioni deve avere sul tornio.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    {
      name: 'The Potter\'s Dictionary - Clay Shrinkage',
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Fisica dell\'Argilla: Restringimento ed Espansione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'argilla è un materiale vivo che cambia dimensioni durante tutto il processo ceramico. Dal momento in cui modelli un pezzo umido fino a quando esce dal forno, può perdere tra l\'8% e il 15% della sua dimensione originale. Calcolare questo restringimento è fondamentale per creare pezzi con le dimensioni esatte di cui hai bisogno.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Fasi di Restringimento',
          html: '<p><strong>1. Essiccazione (Umido → Secco):</strong> Perdendo acqua, le particelle d\'argilla si avvicinano. Questo è il restringimento maggiore (4-8%). I pezzi spessi possono creparsi se si asciugano troppo velocemente.</p><p><strong>2. Cottura (Secco → Biscotto):</strong> Tra 900-1000°C, l\'argilla subisce cambiamenti chimici irreversibili. Restringimento addizionale del 2-4%. Il pezzo diventa poroso ma resistente.</p><p><strong>3. Vetrificazione (Alta Temperatura):</strong> A 1200-1300°C, l\'argilla vetrifica. Restringimento finale dell\'1-3%. Il gres e la porcellana raggiungono la loro massima densità.</p>',
        },
        {
          type: 'card',
          title: 'Variabili che Influenzano',
          html: '<ul><li><strong>Tipo di argilla:</strong> Le argille rosse si restringono meno (8-10%) rispetto alle porcellane (12-15%).</li><li><strong>Spessore della parete:</strong> Le pareti sottili si restringono più uniformemente di quelle spesse.</li><li><strong>Temperatura di cottura:</strong> Maggiore è la temperatura, maggiore sarà il restringimento e la vetrificazione.</li><li><strong>Contenuto di chamotte:</strong> L\'aggiunta di chamotte (argilla già cotta e macinata) riduce il restringimento.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Applicazioni Pratiche',
      level: 2,
    },
    {
      type: 'title',
      text: 'Progettazione di Stampi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se hai bisogno di una tazza con un diametro finale di 8 cm e la tua argilla si restringe del 12%, devi realizzare lo stampo di <strong>9,1 cm</strong>. Questo calcolo inverso è critico nella produzione in serie.',
    },
    {
      type: 'title',
      text: 'Coperchi e Assemblaggi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando crei pezzi che devono incastrarsi (teiera + coperchio, barattolo + coperchio), entrambi devono essere realizzati con la stessa argilla e cotti insieme per garantire che si restringano allo stesso modo. Una differenza dell\'1% può rovinare l\'incastro.',
    },
    {
      type: 'title',
      text: 'Scultura Monumentale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In pezzi di grandi dimensioni, il restringimento differenziale tra zone spesse e sottili può causare crepe. I ceramisti esperti compensano lasciando pareti più spesse nelle zone che sanno che si restringono di più.',
    },
  ],
  ui: {
    labelInitialSize: 'Dimensione Iniziale (mm)',
    labelShrinkage: 'Percentuale di Restringimento (%)',
    labelLow: 'Bassa (Terracotta)',
    labelMedium: 'Media (Gres)',
    labelHigh: 'Alta (Porcellana)',
    presetTerracota: 'Terracotta (8%)',
    presetGres: 'Gres (12%)',
    presetPorcelana: 'Porcellana (15%)',
    labelResult: 'Risultato',
    labelFinalSize: 'Dimensione Finale:',
    labelLoss: 'Perdita Totale:',
    tipText:
      'Per calcolare la dimensione iniziale necessaria per ottenere una dimensione finale specifica, dividi la dimensione desiderata per (1 - restringimento/100).',
    labelInitialBadge: 'Iniziale:',
    labelFinalBadge: 'mm finale',
    labelLossBadge: 'Perdita:',
    labelInitialArea: 'Area Iniziale',
    labelFinalArea: 'Area Finale',
  },
};
