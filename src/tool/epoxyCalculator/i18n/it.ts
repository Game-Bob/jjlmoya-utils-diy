import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'calcolatore-resina-epossidica';
const title = 'Calcolatore di Resina Epossidica: Miscela e Volume Esatto';
const description = 'Calcola la quantità esatta di resina epossidica e catalizzatore necessaria per i tuoi progetti. Evita sprechi in tavoli river, gioielleria e stampi.';

const faqData = [
  {
    question: 'Perché la proporzione esatta è così importante nella resina?',
    answer: 'A differenza di altre miscele, la resina epossidica non asciuga per evaporazione, ma per una reazione chimica (polimerizzazione). Se avanza resina o catalizzatore, la reazione sarà incompleta, lasciando il pezzo appiccicoso, morbido o con bolle permanenti.',
  },
  {
    question: 'Cos\'è la proporzione in peso vs volume?',
    answer: 'Molte resine si miscelano 2:1 in volume ma 100:45 in peso perché il catalizzatore è solitamente più denso. Usa sempre la scala indicata dal produttore e, se possibile, usa una bilancia digitale per la massima precisione.',
  },
  {
    question: 'Come evito le bolle durante la miscelazione?',
    answer: 'Mescola lentamente con movimenti circolari costanti per almeno 3 minuti, raschiando bene le pareti del bicchiere. Lascia riposare la miscela un paio di minuti prima di versare affinché le bolle salgano in superficie.',
  },
  {
    question: 'Cos\'è il tempo di vita (Pot Life)?',
    answer: 'È il tempo che hai per lavorare con la miscela prima che inizi a indurirsi (gelificare). In estate o in grandi volumi, questo tempo si riduce drasticamente a causa della reazione esotermica (genera calore).',
  },
];

const howToData = [
  { name: 'Misurare le dimensioni dello stampo', text: 'Misura la lunghezza, la larghezza e la profondità (spessore) della zona che vuoi riempire con la resina.' },
  { name: 'Inserire il rapporto di miscela', text: 'Consulta l\'etichetta del tuo prodotto per vedere se la miscela è 1:1, 2:1 o 3:1 e se si basa su peso o volume.' },
  { name: 'Pesare i componenti', text: 'Versa prima il componente A (resina) e poi il B (catalizzatore) in un recipiente pulito su una bilancia digitale.' },
  { name: 'Miscelazione tecnica', text: 'Mescola delicatamente finché la miscela non è totalmente trasparente e non si vedono "fili" di diversa densità.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    { name: 'TotalBoat - Centro di Supporto e Guide Tecniche', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - Domande Frequenti e Guida d\'Uso', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guida al Calcolo e alla Miscelazione della Resina Epossidica', level: 2 },
    { type: 'paragraph', html: 'La resina epossidica non è una vernice che asciuga per evaporazione; è una complessa <strong>reazione chimica esotermica</strong>. La magia avviene quando le molecole di epossido si incatenano con quelle di poliammina per formare un polimero termoindurente solido cristallino.' },
    { type: 'paragraph', html: 'La differenza tra un pezzo d\'arte duraturo e un disastro appiccicoso risiede nella <strong>stechiometria esatta</strong>. Un errore di appena il 5% nel rapporto di miscela può inibire permanentemente l\'indurimento. Questo strumento elimina le congetture matematiche, permettendoti di concentrarti sulla creazione.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Volume o Peso?', html: '<p>L\'errore n. 1 dei principianti è assumere che 100ml pesino 100g. <strong>La resina è più densa dell\'indurente.</strong></p><p>Se la scheda tecnica del tuo prodotto dice "100:50 in peso", NON è lo stesso di "2:1 in volume". Questo calcolatore lavora con il <strong>Volume</strong> (V = L × W × H), che è lo standard per riempire gli stampi.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Rapporti Comuni', html: '<ul><li><strong>1:1</strong> — Rivestimenti, vernici e adesivi rapidi.</li><li><strong>2:1</strong> — Standard. Tavoli river, gioielleria e stampi medi.</li><li><strong>3:1</strong> — Pavimenti industriali e laminati strutturali ad alta durezza.</li></ul>' },
    ]},
    { type: 'title', text: 'Protocollo di Sicurezza e Buone Pratiche', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Temperatura Vitale', html: '<p>Lavora sempre tra <strong>21°C e 25°C</strong>. Il freddo può fermare la reazione, lasciando il pezzo torbido. Il calore eccessivo accelera pericolosamente la reazione esotermica ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Tecnica del Doppio Bicchiere', html: '<p>Non fidarti di una sola miscelazione. Raschia bene i lati e il fondo, versa la miscela in un <strong>secondo bicchiere pulito</strong> e mescola di nuovo. Questo assicura che non rimanga materiale non catalizzato.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Rettangolare',
    shapeCylinder: 'Cilindrico',
    shapeSphere: 'Sferico',
    labelLength: 'Lunghezza (cm)',
    labelWidth: 'Larghezza (cm)',
    labelDiameter: 'Diametro (cm)',
    labelDepth: 'Profondità (cm)',
    labelRatio: 'Rapporto di Miscela (Peso/Volume)',
    labelCustomRatio: 'Usa rapporto personalizzato (A:B)',
    labelResinA: 'Resina (A)',
    labelHardenerB: 'Indurente (B)',
    labelWasteTitle: 'Margine di Sicurezza',
    labelWasteDesc: 'Aggiungi il 5% extra per perdite',
    labelTotalVolume: 'Volume Totale',
    labelPartA: 'Parte A (Resina)',
    labelPartB: 'Parte B (Catalizzatore)',
    labelVisualization: 'Visualizzazione',
    shapeRectLabel: 'Blocco Rettangolare',
    shapeCylinderLabel: 'Cilindro / Stampo Rotondo',
    shapeSphereLabel: 'Sfera Completa',
  },
};
