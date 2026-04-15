import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';

const slug = 'calcolatore-spazio-mobili';
const title = 'Calcolatore di Spazio per Traslochi e Mobili';
const description = 'Verifica se il tuo divano, armadio o tavolo entra in ascensore o dalla porta. Usa il teorema di Pitagora 3D per calcolare le inclinazioni.';

const faqData = [
  {
    question: 'Perché un divano può non entrare anche se è più piccolo della porta?',
    answer: 'A causa dell\'angolo di rotazione. Se il corridoio è stretto, il divano deve entrare di lato o inclinato. Il fattore limitante non è solo la larghezza della porta, ma il raggio di rotazione disponibile nel locale.',
  },
  {
    question: 'Cos\'è la diagonale di un mobile e perché è importante?',
    answer: 'È la distanza più lunga tra due angoli opposti. È fondamentale per sapere se un mobile alto può essere sollevato in una stanza con soffitto basso dopo essere stato montato a terra.',
  },
  {
    question: 'Come misurare correttamente un ascensore?',
    answer: 'Non misurare solo il pavimento. Misura la larghezza della porta aperta, la profondità libera e l\'altezza totale. La diagonale dalla base della porta all\'angolo posteriore superiore è il dato più importante.',
  },
  {
    question: 'Quali pezzi devono essere smontati per primi?',
    answer: 'Piedini dei divani, maniglie degli armadi e porte dei frigoriferi spesso fanno guadagnare tra i 5 e i 10 cm critici che fanno la differenza tra un mobile che entra o che resta fuori.',
  },
];

const howToData = [
  { name: 'Misurare il mobile (Lungo, Largo, Alto)', text: 'Prendi le misure massime dell\'oggetto, inclusa qualsiasi sporgenza come braccioli o maniglie.' },
  { name: 'Misurare i passaggi critici', text: 'Misura il vano libero della porta (da telaio a telaio), l\'interno dell\'ascensore e la larghezza dei corridoi.' },
  { name: 'Inserire i dati nel simulatore', text: 'Scrivi le dimensioni nello strumento per vedere se il volume del mobile è compatibile con lo spazio di passaggio.' },
  { name: 'Calcolare le inclinazioni', text: 'Se il mobile è molto alto, usa la diagonale calcolata per verificare se potrai ruotarlo nel pianerottolo o dentro l\'ascensore.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    { name: 'Geometric Fit in Confined Spaces (MDPI Buildings)', url: 'https://www.mdpi.com/2075-5309/15/2/157' },
    { name: 'Moving Sofa Problem: Wolfram MathWorld', url: 'https://mathworld.wolfram.com/MovingSofaProblem.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'La Scienza dei Traslochi e il Teorema di Pitagora', level: 2 },
    { type: 'paragraph', html: 'I traslochi non sono solo una prova di forza fisica; sono un complesso puzzle geometrico. Lo spazio apparente di una stanza o di un ascensore inganna l\'occhio umano, specialmente quando ignoriamo la terza dimensione. La matematica può farti risparmiare centinaia di euro in resi e trasporti falliti.' },
    { type: 'title', text: 'Il Trucco della Diagonale 3D', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Regola d\'Oro', html: '<p>Non misurare mai solo il mobile. Misura sempre i <strong>punti critici di accesso</strong>: la larghezza del telaio della porta, il punto più basso del soffitto sul pianerottolo e la profondità reale dell\'ascensore con le porte chiuse. La formula <code>d = √(w² + h² + z²)</code> ti rivela se entra inclinato.</p>' },
    { type: 'title', text: 'Il Problema del Divano nel Corridoio', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Margine di Manovra', html: '<p>Un errore comune è assumere che se il mobile misura 80cm e il vano 80cm, passerà. Non è così. Le mani dei trasportatori, l\'elasticità del tessuto e le imperfezioni delle pareti richiedono un margine minimo di <strong>2-5 cm</strong>. Senza questo margine, il mobile si graffierà o rimarrà incastrato per pressione.</p>' },
    { type: 'title', text: 'I 3 Errori che Rovinano un Traslocco', level: 3 },
    { type: 'paragraph', html: 'Anche con misure corrette, questi fattori invisibili causano spesso disastri: <strong>La Lampada a Soffitto</strong> — dimenticata durante la rotazione diagonale; <strong>Il Raggio di Rotazione del Mobile</strong> — un mobile rigido non si piega; <strong>L\'Imballaggio</strong> — il pluriball può aggiungere da 1 a 3 cm per lato.' },
  ],
  ui: {
    conTitle: 'Dimensioni dello Spazio',
    conHint: 'Es: Ascensore standard, telaio porta o furgone.',
    objTitle: 'Dimensioni del Mobile',
    labelWidth: 'Larghezza (cm)',
    labelHeight: 'Altezza (cm)',
    labelDepth: 'Profondità (cm)',
    labelLength: 'Lunghezza (cm)',
    labelMargin: 'Margine di Errore (cm)',
    vizLabel: 'Vista Spaziale Semplificata',
    verdictDefault: 'Entra?',
    verdictHint: 'Inserisci le misure per verificare la compatibilità spaziale.',
    verdictYes: 'SÌ, ENTRA!',
    verdictNo: 'NON ENTRA',
    fitDirect: 'Il mobile entra perfettamente in modo diretto.',
    fitDiagonal3d: 'Entra inclinato diagonalmente (Pitagora 3D).',
    fitDiagonalPlane: 'Entra inclinato in uno dei piani laterali.',
    fitNope: 'Il mobile è troppo grande anche per entrare in diagonale.',
    diagLabel: 'Diagonale Massima (Pitagora 3D):',
    objLabel: 'Mobile',
  },
};
