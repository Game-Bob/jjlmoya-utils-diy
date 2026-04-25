import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'treppen-rechner';
const title = 'Treppenrechner: Planung und Ausführung';
const description = 'Berechnen Sie die exakten Maße Ihrer Treppe: Stufenhöhe, Auftritt, Winkel und Materialbedarf. Beachten Sie die Blondel-Regel für maximalen Komfort.';

const faqData = [
  {
    question: 'Was ist die Blondel-Regel (Schrittmaßregel)?',
    answer: 'Es ist eine Formel, die besagt, dass für eine bequeme Treppe die Summe aus zwei Steigungen (Stufenhöhen) und einem Auftritt zwischen 62 und 64 cm liegen sollte (2 × h + s = 63 cm). Diese Regel basiert auf der durchschnittlichen menschlichen Schrittlänge.',
  },
  {
    question: 'Was ist die maximale Höhe einer Stufe?',
    answer: 'In Wohngebäuden wird empfohlen, 18-19 cm nicht zu überschreiten. Für öffentliche Räume liegt das Maximum laut Vorschrift meist bei 17,5 cm. Höhere Steigungen sind anstrengender und können gefährlich sein.',
  },
  {
    question: 'Wie berechne ich bei wenig Platz?',
    answer: 'Wenn der horizontale Raum begrenzt ist, müssen Sie die Anzahl der Stufen erhöhen (die Steigung verringern) oder eine steilere Neigung akzeptieren. Der Rechner hilft Ihnen, das optimale Gleichgewicht zu finden.',
  },
  {
    question: 'Was beinhaltet die Betonberechnung?',
    answer: 'Es wird das Gesamtvolumen des Betons berechnet, wobei die Stufen plus die schräge Trägerplatte (die schräge Ebene, die die Stufen trägt) berücksichtigt werden. Ohne diese Platte wäre die Bestellung unzureichend.',
  },
  {
    question: 'Warum ist das kumulative Aufmaß wichtig?',
    answer: 'Das separate Messen jeder Stufe führt zu kumulierten Fehlern. Das kumulative Aufmaß stellt sicher, dass alle Stufen exakt die gleiche Höhe haben, was Risiken vermeidet und den Komfort verbessert.',
  },
];

const howToData = [
  { name: 'Höhenunterschied messen', text: 'Messen Sie den gesamten Höhenunterschied (H) vom fertigen Boden unten bis zum fertigen Boden oben. Dies ist der Basiswert für alle Berechnungen.' },
  { name: 'Verfügbare Länge eingeben', text: 'Optional: Geben Sie die verfügbare horizontale Länge ein. Verwenden Sie 0 für eine freie Berechnung ohne Einschränkungen.' },
  { name: 'Stufenzahl anpassen', text: 'Der Rechner schlägt eine Anzahl vor, die Sie anpassen können. Achten Sie auf die Blondel-Anzeige: Sie sollte grün sein (62-64 cm).' },
  { name: 'Baustellendaten definieren', text: 'Geben Sie die Plattenstärke, Endbeläge, Betonfestigkeit und Treppenbreite an. Diese Daten beeinflussen die Materialmengen.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Geometrische Treppenplanung: Die Blondel-Regel', level: 2 },
    { type: 'paragraph', html: 'Der Komfort einer Treppe hängt von der menschlichen Schrittlänge ab. Wenn Sie Treppen steigen, erwartet Ihr Körper einen vorhersehbaren Rhythmus. Die Blondel-Regel besagt, dass 2 Steigungen + 1 Auftritt = 62-64 cm der Standard für maximalen Komfort und Sicherheit ist.' },
    { type: 'title', text: 'Struktur- und Materialkontrolle', level: 3 },
    { type: 'paragraph', html: 'Für eine professionelle Ausführung ist es wichtig, die Betonlaufplatte zu berücksichtigen. Ein Ignorieren dieses Volumens führt zu Fehlbestellungen beim Beton. Der Rechner integriert diese Berechnung automatisch.' },
    { type: 'title', text: 'Vermeidung kumulierter Fehler', level: 3 },
    { type: 'paragraph', html: 'Im Bauwesen ist der Millimeterfehler der größte Feind. Wenn Sie jede Stufe einzeln messen, können sich kleine Fehler so summieren, dass die letzte Stufe 5 cm höher oder niedriger als die erste ist.' },
  ],
  ui: {
    labelGeometry: 'Geometrie und Platzbedarf',
    labelTotalHeight: 'Gesamthöhe (H)',
    labelAvailableLength: 'Verfügbare Länge (L)',
    labelAvailableLengthHint: '0 für freie Berechnung verwenden.',
    labelNumSteps: 'Anzahl Stufen',
    labelOptimize: 'Optimieren (18cm)',
    labelWork: 'Ausführung und Installation',
    labelSlabThickness: 'Plattenstärke (e)',
    labelFinishThickness: 'Endbelag',
    labelCeilingHeight: 'Deckenhöhe (Kopfm.)',
    labelStairWidth: 'Treppenbreite',
    labelConcreteStrength: 'Betonfestigkeit',
    optionH150: 'C12/15 (Unterbau)',
    optionH200: 'C16/20 (Wohnraum)',
    optionH250: 'C20/25 (Strukturell)',
    labelRiser: 'Steigung (h)',
    labelTread: 'Auftritt (s)',
    labelSlope: 'Neigung',
    labelRealAdvance: 'Tatsächliche Länge',
    labelLayoutTable: 'Aufmaß und Ausführung',
    colStep: 'Stufe',
    colConcreteHeight: 'H. Beton',
    colFinishedHeight: 'H. Fertig',
    colAdvance: 'Laufweg',
    adjustedNote: 'Angemessen',
    labelMaterials: 'Materialbedarf',
    labelTotalConcrete: 'Beton Gesamt:',
    labelCement: 'Zement (Säcke/25kg):',
    labelSand: 'Sandbedarf:',
    unitM3: 'm³',
    unitBags: 'Säcke',
    unitLiters: 'L',
    btnShare: 'Teilen',
    btnPrint: 'PDF Drucken',
    statusOptimalComfort: 'Optimaler Komfort',
    statusMarginLimit: 'Grenzfall',
    statusCriticalDesign: 'Kritisches Design',
    statusRiserError: 'Stufenfehler',
    msgInvalidValues: 'Ungültige Werte',
    msgInsufficientSpace: 'PLATZMANGEL',
    msgDangerousTread: 'Ein Auftritt von {val}cm ist gefährlich.',
    msgBlondelValue: 'Blondel-Maß: {val}cm.',
    msgOptimalStep: 'Bequemer Schritt: {val}cm.',
    msgLowCeiling: 'GERINGE KOPFFREIHEIT (<2m)',
    msgCalculating: 'Berechnung...',
    msgEnterMeasurements: 'Maße eingeben',
    shareTitle: 'Umrechnungszusammenfassung',
    shareMessage: 'Treppe: H={h}cm, N={n}, h={ch}cm, Vol={vol}m3',
  },
};
