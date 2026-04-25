import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'satz-des-pythagoras-rechter-winkel-rechner-3-4-5-regel';
const title = 'Pythagoras Rechter Winkel Rechner: 3 4 5 Regel für perfekte Winkel';
const description = 'Prüfen Sie mit dem Satz des Pythagoras und der 3-4-5-Regel, ob Strukturen perfekt im 90°-Winkel stehen. Unverzichtbares Tool für Bau, Zimmerei und DIY-Projekte.';

const faqData = [
  {
    question: 'Was ist die 3-4-5-Regel?',
    answer: 'Die 3-4-5-Regel ist ein einfaches pythagoreisches Tripel. Wenn ein rechtwinkliges Dreieck Seiten von 3, 4 und 5 Einheiten in beliebigem Maßstab hat, beträgt der Winkel zwischen den kürzeren Seiten genau 90 Grad. Diese praxiserprobte Methode wird seit Jahrhunderten im Bauwesen angewendet.',
  },
  {
    question: 'Wie benutze ich diesen Rechner?',
    answer: 'Geben Sie die Längen der beiden Wände (Seiten A und B) ein, die die Ecke bilden. Der Rechner zeigt an, wie groß die Diagonale für einen perfekten 90-Grad-Winkel sein muss. Messen Sie dann Ihre tatsächliche Diagonale und geben Sie diese ein, um zu prüfen, ob Ihre Ecke wirklich rechtwinklig ist.',
  },
  {
    question: 'Was ist, wenn meine Diagonale abweicht?',
    answer: 'Wenn Ihre gemessene Diagonale vom Idealwert abweicht, zeigt der Rechner die Abweichung an. Grün bedeutet perfekt, Gelb akzeptabel, Rot nicht rechtwinklig. Er gibt Ihnen auch an, ob Sie den Winkel öffnen oder schließen müssen.',
  },
  {
    question: 'Ist dies genau genug für den Bau?',
    answer: 'Ja. Der Satz des Pythagoras ist mathematisch exakt. Mit einem Maßband können Sie Bau-Präzision ohne Spezialwerkzeug oder Fachkenntnisse erreichen.',
  },
  {
    question: 'Kann ich zwischen Zoll und Fuß wechseln?',
    answer: 'Ja. Wählen Sie Zoll für kleine Projekte oder Fuß für größere Strukturen. Alle Werte werden sofort umgerechnet, ohne dass Daten verloren gehen.',
  },
];

const howToData = [
  { name: 'Einheit wählen', text: 'Wählen Sie Zoll für Detailarbeiten oder Fuß für größere Strukturen. Sie können jederzeit wechseln.' },
  { name: 'Beide Seiten messen', text: 'Messen Sie die Länge der beiden Wände (Seiten A und B), die die zu prüfende Ecke bilden.' },
  { name: 'Ideale Diagonale prüfen', text: 'Der Rechner zeigt Ihnen, wie groß die Diagonale für einen perfekten 90-Grad-Winkel sein muss.' },
  { name: 'Diagonale messen', text: 'Messen Sie Ihre tatsächliche Diagonale mit einem Maßband. Geben Sie den Wert im optionalen Feld ein.' },
  { name: 'Status ablesen', text: 'Grün = perfekt rechtwinklig. Gelb = akzeptabel. Rot = nicht rechtwinklig. Passen Sie wie vorgeschlagen an.' },
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Der Satz des Pythagoras in der Praxis', level: 2 },
    { type: 'paragraph', html: 'Ein perfekter 90-Grad-Winkel ist die Grundlage für Qualitätsbau. Wände müssen senkrecht stehen, Fundamente müssen rechtwinklig sein und Rahmen müssen fluchten. Der Satz des Pythagoras bietet eine mathematisch garantierte Methode: a² + b² = c².' },
    { type: 'title', text: 'Warum die 3-4-5-Regel funktioniert', level: 3 },
    { type: 'paragraph', html: 'Die 3-4-5-Regel ist das einfachste pythagoreische Tripel. Egal, ob Sie in Zoll, Fuß oder einer anderen Einheit messen: Seiten von 3, 4 und 5 Einheiten garantieren einen 90-Grad-Winkel. Dies ist mathematisch bewiesen und seit Jahrhunderten im Bauwesen erprobt.' },
    { type: 'title', text: 'Präzision ohne Spezialwerkzeug', level: 3 },
    { type: 'paragraph', html: 'Im Gegensatz zu Wasserwaagen oder Winkeln, die brechen oder sich verstellen können, ist der Satz des Pythagoras unveränderlich. Mit nur einem Maßband können Sie jede Ecke in jedem Maßstab prüfen. Dieser Rechner macht Kopfrechnen überflüssig und sorgt für Genauigkeit.' },
    { type: 'title', text: 'Von der Theorie zur praktischen Anleitung', level: 3 },
    { type: 'paragraph', html: 'Dieser Rechner wandelt abstrakte Mathematik in praktische Anweisungen für die Baustelle um. Wenn Ihre Diagonale nicht stimmt, sagt er Ihnen genau, um wie viel und in welche Richtung Sie korrigieren müssen. Machen Sie Theorie zu echten Ergebnissen vor Ort.' },
  ],
  ui: {
    titleMain: 'Winkel-Rechner (Pythagoras)',
    labelInputData: 'Messungen',
    labelUnitSelection: 'Einheit',
    btnUnitInches: 'Zoll',
    btnUnitFeet: 'Fuß',
    btnUnitCentimeters: 'Zentimeter',
    labelSideA: 'Seite A',
    labelSideB: 'Seite B',
    labelMeasuredDiagonal: 'Gemessene Diagonale (optional)',
    labelResults: 'Ergebnisse',
    labelIdealDiagonal: 'Ideale Diagonale',
    labelDeviation: 'Abweichung',
    labelStatus: 'Status',
    labelVerification: 'Winkel-Prüfung',
    btnClear: 'Löschen',
    btnCopyResults: 'Ergebnisse kopieren',
    labelPresets: 'Schnellwahl',
    unitInches: 'in',
    unitFeet: 'ft',
    unitCentimeters: 'cm',
    tooltipOptional: 'Geben Sie Ihre gemessene Diagonale ein, um den 90-Grad-Winkel zu prüfen',
    tooltipPresets: '3-4-5-Regel in verschiedenen Maßstäben',
    statusPerfect: 'Perfekter 90-Grad-Winkel',
    statusAcceptable: 'Akzeptable Abweichung',
    statusWarning: 'Geringe Abweichung',
    statusError: 'Nicht rechtwinklig',
    statusReady: 'Bereit',
    msgIdealCalculated: 'Ideale Diagonale berechnet',
    actionOpen: 'Öffnen',
    actionClose: 'Schließen',
    descLarger: 'größer',
    descSmaller: 'kleiner',
    descCorrection: 'Korrektur erforderlich',
  },
};
