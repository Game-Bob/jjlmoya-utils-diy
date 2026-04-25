import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-passepartout';
const title = 'Calcolatore Passepartout: Margini con Correzione Ottica per Incorniciatura';
const description = 'Strumento per calcolare i margini del passepartout con correzione ottica (bottom weighting). Incornicia le tue fotografie e opere d\'arte con proporzioni da galleria.';

const faqData = [
  {
    question: 'Cos\'è la correzione del centro ottico (Bottom Weighting)?',
    answer: 'È un principio di design e incorniciatura in cui il margine inferiore viene reso leggermente più ampio degli altri. Questo corregge l\'illusione ottica che fa sembrare il centro geometrico "abbassato" quando si guarda un\'opera appesa.',
  },
  {
    question: 'Di che materiale deve essere il passepartout?',
    answer: 'Per la conservazione artistica, deve essere cartone privo di acido o a pH neutro (alfa-cellulosa o cotone). I cartoni economici ingialliscono col tempo e possono danneggiare l\'opera a causa della lignina.',
  },
  {
    question: 'Come scelgo il colore del margine?',
    answer: 'Il bianco sporco o il crema tenue sono gli standard che non distraggono dall\'opera. Un margine scuro può far risaltare i bianchi di una fotografia, mentre un margine colorato deve essere usato con cura per non competere con i toni del pezzo.',
  },
  {
    question: 'Qual è la larghezza del margine ideale?',
    answer: 'Uno standard professionale è tra 5 e 8 cm. Se il margine è troppo stretto, l\'opera sembra "soffocata". Se è molto ampio, può dare un\'aria eroica e minimalista a opere piccole.',
  },
];

const howToData = [
  { name: 'Misurare l\'opera d\'arte', text: 'Misura la larghezza e l\'altezza esatta della carta o tela da incorniciare. Sottrai qualche millimetro se vuoi che il passepartout sormonti leggermente l\'immagine.' },
  { name: 'Misurare l\'interno della cornice', text: 'Prendi le dimensioni interne della cornice o della battuta dove alloggerà il cartone del passepartout.' },
  { name: 'Attivare la correzione ottica', text: 'Seleziona l\'opzione nel nostro calcolatore se vuoi che il margine inferiore sia automaticamente maggiore per una finitura professionale.' },
  { name: 'Tagliare il cartone', text: 'Usa le misure risultanti per tagliare la finestra e l\'esterno del cartone, preferibilmente con un taglierino a 45 gradi per uno smusso pulito.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'La Scienza dell\'Incorniciatura Perfetta', level: 2 },
    { type: 'paragraph', html: 'Un <strong>Passepartout</strong> non è solo un cartoncino decorativo; è il polmone che permette di far respirare la tua opera d\'arte. Questo calcolatore ti aiuta a determinare le dimensioni esatte per tagliare il tuo cartone, assicurando che l\'opera sia perfettamente centrata o equilibrata otticamente all\'interno della cornice.' },
    { type: 'title', text: 'Perché il "Peso Inferiore" o Bottom Weighting?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'L\'illusione ottica del centro geometrico', html: '<p>L\'occhio umano tende a percepire il centro verticale geometrico come se fosse leggermente più basso di quanto sia in realtà. Se incornici un\'opera esattamente al centro, sembrerà che stia "cadendo".</p><p>Il <strong>Bottom Weighting</strong> corregge questa illusione lasciando un margine inferiore leggermente maggiore, elevando l\'opera visivamente affinché appaia perfettamente centrata.</p>' },
    { type: 'title', text: 'Materiali di Conservazione per Passepartout', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Il cartone privo di acido per la conservazione', html: '<p>Scegliendo il tuo cartone, cerca sempre termini come <strong>"Acid-Free"</strong> o <strong>"Museum Quality"</strong>. I cartoncini economici di pasta di legno possono ingiallire nel tempo e rilasciare acidi che bruceranno la tua opera d\'arte, rovinandola irreversibilmente.</p>' },
  ],
  ui: {
    sectionTitle: 'Dimensioni',
    sectionDesc: 'Inserisci le misure in centimetri.',
    frameSizeTitle: 'Dimensioni Cornice',
    artSizeTitle: 'Dimensioni Opera',
    labelWidth: 'Larghezza (cm)',
    labelHeight: 'Altezza (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Applica più margine inferiore per equilibrio visivo',
    labelOffset: 'Offset (%)',
    errorMsg: 'L\'opera deve essere più piccola della cornice.',
    labelTop: 'Sup',
    labelBottom: 'Inf',
    labelLeft: 'Sini',
    labelRight: 'Dest',
    artPlaceholder: 'Tua Opera',
  },
};
