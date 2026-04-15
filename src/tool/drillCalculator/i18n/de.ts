import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'drehzahlrechner-bohren-fraesen';
const title = 'Drehzahlrechner Bohren und Fräsen';
const description = 'Berechnen Sie die idealen Umdrehungen pro Minute (U/min) für Ihre Bohrmaschine oder Fräse basierend auf Material und Werkzeugdurchmesser.';

const faqData = [
  {
    question: 'Warum verbrennen Bohrer beim Bohren?',
    answer: 'Hauptsächlich durch zu hohe Drehzahlen (U/min). Wenn der Bohrer schneller dreht, als das Material die Wärme ableiten kann, steigt die Temperatur über die Anlassgrenze des Stahls, wodurch die Schneide weich wird und nicht mehr schneidet.',
  },
  {
    question: 'Was ist die Schnittgeschwindigkeit (Vc)?',
    answer: 'Es ist die lineare Geschwindigkeit in Metern pro Minute, mit der die Werkzeugschneide über die Materialoberfläche fährt. Jedes Material hat eine empfohlene Vc, die unabhängig vom Bohrerdurchmesser ist.',
  },
  {
    question: 'Wann sollte ich Hartmetall-Werkzeuge (VHM/Widia) verwenden?',
    answer: 'Verwenden Sie Hartmetall, wenn Sie mit viel höheren Geschwindigkeiten arbeiten müssen, in der industriellen Fertigung oder wenn das zu bohrende Material extrem hart ist. Für normales Heimwerken ist HSS ausreichend und bruchfester bei Biegung.',
  },
  {
    question: 'Ist Schmiermittel immer notwendig?',
    answer: 'Bei Metallen fast immer empfehlenswert. Bei Aluminium verhindert es das Verkleben des Materials am Bohrer, bei Stählen reduziert es die Hitze. Bei Holz und Kunststoffen ist es besser trocken zu arbeiten und den Bohrer häufig zu lüften.',
  },
  {
    question: 'Wie berechne ich den Vorschub ohne CNC-Maschine?',
    answer: 'An einer Handbohrmaschine spürt man den Vorschub durch den Druck. Es sollten konstante und saubere Späne entstehen. Wenn nur Staub kommt, ist der Druck zu gering oder die Drehzahl zu hoch. Wenn der Span sehr dick ist und die Maschine sich quält, ist der Druck zu hoch.',
  },
];

const howToData = [
  { name: 'Material wählen', text: 'Geben Sie an, welches Material Sie bohren oder fräsen möchten (Stahl, Aluminium, Holz etc.). Jedes hat eine andere Härte und thermische Kapazität.' },
  { name: 'Durchmesser eingeben', text: 'Geben Sie den exakten Durchmesser Ihres Bohrers oder Fräsers in Millimetern ein. Denken Sie daran: Je größer der Durchmesser, desto geringer die Drehzahl.' },
  { name: 'Werkzeugtyp wählen', text: 'Bestimmen Sie, ob Ihr Bohrer aus HSS oder Hartmetall (VHM) besteht. Hartmetall hält viel höhere Geschwindigkeiten aus.' },
  { name: 'Drehzahl an der Maschine einstellen', text: 'Stellen Sie Ihre Maschine auf den berechneten Wert ein. Wenn Ihre Maschine feste Gänge hat, nutzen Sie unsere Auswahlhilfe für die sicherste Riemenposition.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    { name: 'Sandvik Coromant: Formeln für Schnittgeschwindigkeit und Vorschub', url: 'https://www.sandvik.coromant.com/de-de/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: 'Tabellenbuch Metall', url: 'https://www.europa-lehrmittel.de/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Die Bedeutung der Umdrehungen pro Minute in der Zerspanung', level: 2 },
    { type: 'paragraph', html: 'Die richtige Berechnung der Umdrehungen pro Minute ist der Unterschied zwischen perfekter Arbeit und einer teuren Katastrophe. Es geht nicht darum, den Bohrer so schnell wie möglich zu drehen, sondern die physikalischen Gesetze von Reibung und Materialwiderstand zu beachten. Unser Rechner optimiert die Leistung Ihrer Werkzeuge und die Qualität Ihrer Oberflächen.' },
    { type: 'title', text: 'Die Schnittgeschwindigkeit verstehen', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Berechnungsformel für U/min', html: '<p>Die Schnittgeschwindigkeit ist ein Wert in Metern pro Minute, der angibt, mit welcher idealen Geschwindigkeit die Schneide durch das Material fahren sollte. Die Formel lautet: <code>U/min = (Vc × 1000) / (π × D)</code>, wobei D der Durchmesser in Millimetern ist.' },
    { type: 'title', text: 'HSS vs. Hartmetall', level: 3 },
    { type: 'paragraph', html: '<strong>Schnellarbeitsstahl (HSS)</strong> Werkzeuge sind günstig und belastbar, haben aber eine begrenzte thermische Beständigkeit. <strong>Hartmetall (VHM)</strong> erlaubt 3- bis 5-mal höhere Schnittgeschwindigkeiten, ist aber spröder. Der Rechner passt die Parameter automatisch an den Werkzeugtyp an.' },
    { type: 'title', text: '3 häufige Fehler beim Bohren', level: 3 },
    { type: 'paragraph', html: '<strong>Zu hohe Drehzahl:</strong> Verursacht Überhitzung und Enthärtung des Stahls. <strong>Zu niedrige Drehzahl:</strong> Der Bohrer vibriert und kann durch Ermüdung brechen. <strong>Keine Kühlung:</strong> Hitze verkürzt die Werkzeuglebensdauer erheblich.' },
  ],
  ui: {
    labelMaterial: 'Werkstoff',
    matSteel: 'Baustahl',
    matInox: 'Edelstahl',
    matAlu: 'Aluminium',
    matBrass: 'Messing',
    matCastIron: 'Gusseisen',
    matWood: 'Holz',
    matPlastic: 'Kunststoff',
    coolSteel: 'Kühlschmiermittel/Öl',
    coolInox: 'Schneidöl spezial',
    coolAlu: 'Spiritus / Paraffin',
    coolBrass: 'Trocken / Luft',
    coolCastIron: 'Trocken',
    coolWood: 'Nur Absaugung',
    coolPlastic: 'Druckluft',
    labelTool: 'Werkzeugtyp',
    typeHss: 'HSS (Schnellarbeitsstahl)',
    typeWidia: 'Hartmetall (VHM)',
    labelDiameter: 'Durchmesser',
    unitMm: 'mm',
    unitInch: 'Zoll',
    modeColumnDrill: 'Säulenbohrmaschine',
    labelAdvanced: 'Vorschub-Parameter',
    labelLips: 'Anzahl Schneiden (z)',
    labelFz: 'Vorschub/Zahn (fz)',
    labelMachine: 'Drehzahlen Ihrer Maschine',
    presetStandard: 'Standard',
    presetCnc: 'CNC',
    addRpmManual: 'RPM manuell hinzufügen...',
    addButton: '+',
    resultRpm: 'Optimale Drehzahl',
    resultCooling: 'Kühlung',
    resultFeed: 'Vorschubwert',
    resultClosest: 'Empfohlene Einstellung',
    rpmUnit: 'Umdrehungen / Minute',
    recommendedLabel: 'Empfohlene Einstellung',
    recommendedHint: 'Stellen Sie den Wahlschalter Ihrer Maschine auf diese Position',
    statusLimitActive: 'Maschinenlimit aktiv',
    statusOutOfRange: 'Bereich außerhalb des gewerblichen Standards',
  },
};
