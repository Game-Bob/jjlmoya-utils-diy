import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'werkstatt-bruch-metrisch-umrechner';
const title = 'Werkstatt Umrechner: Brüche in Millimeter';
const description = 'Rechnen Sie Zoll-Brüche sofort in Millimeter um. Finden Sie die passenden Standard-Schrauben, Bolzen und Steckschlüssel für Ihre Werkstatt. Optimiert für schmutzige Hände und Arbeitshandschuhe.';

const faqData = [
  {
    question: 'Warum muss ich Brüche in Millimeter umrechnen?',
    answer: 'Die meisten modernen Werkzeuge und Befestigungselemente verwenden das metrische System, aber viele Oldtimer-Werkzeuge und Spezifikationen nutzen noch Zoll-Brüche. Dieser Umrechner schließt diese Lücke und hilft Ihnen, das metrische Äquivalent oder die nächste Standardgröße zu finden.',
  },
  {
    question: 'Was ist der Unterschied zwischen 1/2 Zoll und 12,7 mm?',
    answer: '1/2 Zoll entspricht exakt 12,7 Millimetern (0,5 × 25,4 = 12,7). Metrische und imperiale Werkzeuge sind bei Standardgrößen oft austauschbar, da die Hersteller gängige Größen in beiden Systemen angleichen.',
  },
  {
    question: 'Warum zeigt das Tool die "nächste Standardgröße" an?',
    answer: 'Weil exakte Umrechnungen oft zwischen den gängigen Standardgrößen liegen. Das Tool findet den im Handel erhältlichen Bolzen oder Steckschlüssel, der Ihrem Maß am nächsten kommt, damit Sie das verwenden können, was in Ihrer Werkstatt verfügbar ist.',
  },
  {
    question: 'Was ist der Unterschied zwischen Holz- und Metallpräzision?',
    answer: 'Bei Holzarbeiten sind Abweichungen von 0,5 mm oft vernachlässigbar. In der Metallbearbeitung und im Maschinenbau zählt jedes 0,1 mm. Der Präzisionsmodus gibt Hinweise auf akzeptable Toleranzbereiche für Ihr Material.',
  },
  {
    question: 'Kann ich dieses Tool offline verwenden?',
    answer: 'Ja. Alle Berechnungen finden in Ihrem Browser statt. Nach dem ersten Laden funktioniert das Tool komplett offline – perfekt für den Einsatz in der Werkstatt ohne WLAN.',
  },
  {
    question: 'Warum enthält das Tool einen Verlauf?',
    answer: 'Bei der Demontage oder Projekten mit vielen Teilen ermöglicht der Verlauf das Nachschlagen von Maßen, ohne sie erneut eingeben zu müssen, und hilft beim Erstellen einer Teileliste während der Arbeit.',
  },
];

const howToData = [
  {
    name: 'Messart wählen',
    text: 'Wählen Sie "Vorwärts", um einen Bruch in Millimeter umzurechnen, oder "Rückwärts", um den passenden Bruch für ein mit dem Messschieber genommenes Maß zu finden.',
  },
  {
    name: 'Maß eingeben',
    text: 'Nutzen Sie die dreispaltige Eingabe (Ganzzahl, Zähler, Nenner) oder tippen Sie auf eine Schnellauswahl. Mit den Schritt-Tasten können Sie Werte ohne Tippen anpassen.',
  },
  {
    name: 'Ergebnisse prüfen',
    text: 'Das Ergebnis zeigt die exakte Umrechnung sowie die nächsten Standardgrößen für Bolzen und Steckschlüssel. Eine visuelle Skala hilft bei der Einschätzung der Proportionen.',
  },
  {
    name: 'Im Verlauf speichern',
    text: 'Klicken Sie auf "Im Verlauf speichern", um Maße für später zu merken. Der Verlauf bleibt in Ihrem Browser gespeichert, auch wenn Sie ihn schließen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Warum Präzision bei der Bruchumrechnung in der Werkstatt entscheidend ist', level: 2 },
    { type: 'paragraph', html: 'In einer professionellen Werkstatt oder beim anspruchsvollen Heimwerken führt ein "ungefähr" oft zu überdrehten Bolzen, wackeligen Verbindungen oder fehlerhaften Konstruktionen. Dieses Tool schließt die Lücke zwischen traditionellen Zoll-Maßen und der Präzision des metrischen Systems und stellt sicher, dass Ihre Projekte Profi-Standards entsprechen.' },
    { type: 'title', text: 'Die Standard-Umrechnung: 1/2" vs. 12,7 mm', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: 'Sind metrische und imperiale Maße austauschbar?', html: '<p>Viele nehmen das an. Obwohl 1/2" exakt 12,7 mm entspricht, ist der nächste metrische Steckschlüssel 13 mm groß. Die Verwendung des falschen Werkzeugs kann Schraubenköpfe runddrehen. Unser Umrechner findet die <strong>nächste Standard-Werkzeuggröße</strong>, damit Sie Ihre Hardware niemals beschädigen.</p>' },
    { type: 'title', text: 'Toleranzen im Holzbau vs. Metallbau', level: 3 },
    { type: 'paragraph', html: 'Die Anforderungen an die Toleranz variieren je nach Handwerk stark. Im <strong>Holzbau</strong> ist eine Toleranz von 1/64" (0,4 mm) meist akzeptabel. Im <strong>Metallbau und Maschinenbau</strong> zählt jedes 0,1 mm oder sogar 0,01 mm. Unser Tool bietet einen Präzisionsmodus, der Ihnen hilft, die sicherste Standardgröße für Ihr spezifisches Material zu wählen.' },
    { type: 'title', text: '3 Tipps für präzise Messungen', level: 3 },
    { type: 'paragraph', html: '<strong>1. Messschieber verwenden:</strong> Nutzen Sie für die Rückwärtssuche immer einen digitalen Messschieber für genaueste Millimeter-Werte. <strong>2. Verschleiß prüfen:</strong> Alte Steckschlüssel und Bolzen können abgenutzte Kanten haben, was die "nächste Übereinstimmung" noch wichtiger macht. <strong>3. Gewindesteigung beachten:</strong> Denken Sie daran: Auch wenn die Kopfgröße passt, ist die Gewindesteigung (metrisch vs. Zoll) immer unterschiedlich.' },
  ],
  ui: {
    labelFraction: 'Messart',
    labelWhole: 'Ganze Zahl',
    labelNumerator: 'Zähler',
    labelDenominator: 'Nenner',
    labelInches: 'Zoll',
    labelMillimeters: 'Millimeter',
    resultTitle: 'Umrechnungsergebnis',
    resultFraction: 'Bruch',
    resultInches: 'Zoll',
    resultMillimeters: 'Millimeter',
    matchTitle: 'Nächste Standardgröße',
    matchClosestFastener: 'Standard-Bolzen oder Schraube',
    matchClosestSocket: 'Standard-Steckschlüssel',
    matchDifference: 'Abweichung zum Messwert',
    matchRecommendation: 'Diese Größe verwenden, falls vorhanden',
    reverseSearchTitle: 'Rückwärtssuche',
    reverseSearchLabel: 'Gemessenes Maß (mm)',
    reverseSearchButton: 'Bruch finden',
    reverseSearchHint: 'Mit Messschieber messen, Wert eingeben',
    unitMm: 'mm',
    unitInch: 'Zoll',
    modeForward: 'Bruch → Metrisch',
    modeReverse: 'Metrisch → Bruch',
    precisionLabel: 'Präzisionsmodus',
    precisionCarpentry: 'Holzbau',
    precisionMetal: 'Metallbau',
    buttonConvert: 'Umrechnen',
    buttonClear: 'Löschen',
    buttonCopyResult: 'Ergebnis kopieren',
    buttonSaveToHistory: 'Speichern',
    historyTitle: 'Verlauf',
    historyEmpty: 'Noch keine Messungen',
    historyRemove: 'Entfernen',
    helpText: 'Wählen Sie ein Maß oder geben Sie einen Bruch ein.',
    toolOverline: 'Werkstatt-Tools',
    labelVisualReference: 'Visuelle Referenz (1 Zoll = 96px)',
  },
};
