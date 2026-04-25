import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'moebel-platz-rechner';
const title = 'Platzrechner für Umzüge und Möbel';
const description = 'Prüfen Sie, ob Ihr Sofa, Schrank oder Tisch in den Aufzug oder durch die Tür passt. Nutzen Sie den 3D-Pythagoras, um Neigungen zu berechnen.';

const faqData = [
  {
    question: 'Warum kann ein Sofa nicht passen, obwohl es kleiner als die Tür ist?',
    answer: 'Wegen des Drehwinkels. Wenn der Flur schmal ist, muss das Sofa seitlich oder schräg eingeführt werden. Der limitierende Faktor ist nicht nur die Türbreite, sondern der verfügbare Schwenkradius im Flur.',
  },
  {
    question: 'Was ist die Diagonale eines Möbelstücks und warum ist sie wichtig?',
    answer: 'Es ist der längste Abstand zwischen zwei gegenüberliegenden Ecken. Dies ist entscheidend, um zu wissen, ob ein hohes Möbelstück in einem Raum mit niedriger Decke aufgestellt werden kann, nachdem es am Boden montiert wurde.',
  },
  {
    question: 'Wie misst man einen Aufzug korrekt?',
    answer: 'Messen Sie nicht nur den Boden. Messen Sie die Breite der offenen Tür, die lichte Tiefe und die Gesamthöhe. Die Diagonale von der Basis der Tür bis zur oberen hinteren Ecke ist der wichtigste Wert.',
  },
  {
    question: 'Welche Teile sollten zuerst demontiert werden?',
    answer: 'Sofafüße, Schrankgriffe und Kühlschranktüren bringen oft die entscheidenden 5 bis 10 cm, die den Unterschied ausmachen, ob ein Möbelstück passt oder draußen bleiben muss.',
  },
];

const howToData = [
  { name: 'Möbel messen (Länge, Breite, Höhe)', text: 'Nehmen Sie die maximalen Maße des Objekts, einschließlich aller Vorsprünge wie Armlehnen oder Griffe.' },
  { name: 'Kritische Durchgänge messen', text: 'Messen Sie die lichte Weite der Tür (von Rahmen zu Rahmen), das Innere des Aufzugs und die Breite der Flure.' },
  { name: 'Daten in den Simulator eingeben', text: 'Geben Sie die Abmessungen in das Tool ein, um zu sehen, ob das Volumen des Möbels mit dem Durchgangsbereich kompatibel ist.' },
  { name: 'Neigungen berechnen', text: 'Wenn das Möbelstück sehr hoch ist, verwenden Sie die berechnete Diagonale, um zu prüfen, ob Sie es im Treppenhaus oder im Aufzug drehen können.' },
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Die Wissenschaft der Umzüge und der Satz des Pythagoras', level: 2 },
    { type: 'paragraph', html: 'Umzüge sind nicht nur eine Prüfung der körperlichen Kraft; sie sind ein komplexes geometrisches Puzzle. Der scheinbare Raum eines Zimmers oder Aufzugs täuscht das menschliche Auge, besonders wenn wir die dritte Dimension ignorieren. Mathematik kann Ihnen Hunderte von Euro für Rücksendungen und fehlgeschlagene Transporte sparen.' },
    { type: 'title', text: 'Der Trick mit der 3D-Diagonalen', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Goldene Regel', html: '<p>Messen Sie nie nur das Möbelstück. Messen Sie immer die <strong>kritischen Zugangspunkte</strong>: die Breite des Türrahmens, den niedrigsten Punkt der Decke im Treppenhaus und die tatsächliche Tiefe des Aufzugs bei geschlossenen Türen. Die Formel <code>d = √(w² + h² + z²)</code> verrät Ihnen, ob es schräg passt.</p>' },
    { type: 'title', text: 'Das Sofa-Problem im Flur', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Manövrierspielraum', html: '<p>Ein häufiger Fehler ist die Annahme, dass das Möbelstück passt, wenn es 80 cm misst und die Öffnung ebenfalls 80 cm beträgt. Das ist nicht der Fall. Die Hände der Träger, die Elastizität des Stoffes und Unebenheiten der Wände erfordern eine Mindestmarge von <strong>2 bis 5 cm</strong>. Ohne diese Marge wird das Möbelstück zerkratzt oder verkeilt sich.</p>' },
    { type: 'title', text: '3 Fehler, die einen Umzug ruinieren', level: 3 },
    { type: 'paragraph', html: 'Selbst mit korrekten Maßen verursachen diese unsichtbaren Faktoren oft Katastrophen: <strong>Die Deckenlampe</strong> — oft vergessen bei diagonalen Drehungen; <strong>Der Schwenkradius</strong> — ein starres Möbelstück biegt sich nicht; <strong>Die Verpackung</strong> — Luftpolsterfolie kann auf jeder Seite 1 bis 3 cm hinzufügen.' },
  ],
  ui: {
    conTitle: 'Abmessungen des Raums',
    conHint: 'Z.B. Standardaufzug, Türrahmen oder Lieferwagen.',
    objTitle: 'Abmessungen des Möbels',
    labelWidth: 'Breite (cm)',
    labelHeight: 'Höhe (cm)',
    labelDepth: 'Tiefe (cm)',
    labelLength: 'Länge (cm)',
    labelMargin: 'Fehlermarge (cm)',
    vizLabel: 'Vereinfachte räumliche Ansicht',
    verdictDefault: 'Passt es?',
    verdictHint: 'Geben Sie die Maße ein, um die räumliche Kompatibilität zu prüfen.',
    verdictYes: 'JA, ES PASST!',
    verdictNo: 'PASST NICHT',
    fitDirect: 'Das Möbelstück passt perfekt auf direktem Weg.',
    fitDiagonal3d: 'Passt schräg/diagonal (3D-Pythagoras).',
    fitDiagonalPlane: 'Passt schräg in einer der Seitenebenen.',
    fitNope: 'Das Möbelstück ist zu groß, selbst für den diagonalen Weg.',
    diagLabel: 'Maximale Diagonale (3D-Pythagoras):',
    objLabel: 'Möbelstück',
  },
};
