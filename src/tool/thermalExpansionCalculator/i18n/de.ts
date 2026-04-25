import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'waermeausdehnungs-rechner';
const title = 'Rechner für thermische Ausdehnung von Balken und Strukturen';
const description = 'Berechnen Sie, wie stark sich ein Balken oder eine Struktur bei Temperaturänderungen ausdehnt. Technisches Werkzeug für Ingenieure und Heimwerker.';

const faqData = [
  {
    question: 'Was ist der lineare Ausdehnungskoeffizient?',
    answer: 'Es ist eine physikalische Eigenschaft von Materialien, die angibt, wie sehr sie sich pro Grad Celsius Temperaturerhöhung ausdehnen. Er wird in 1/°C oder °C⁻¹ gemessen.',
  },
  {
    question: 'Warum ist die Berechnung der Ausdehnung bei Balken wichtig?',
    answer: 'Wenn ein Balken keinen Platz zum Ausdehnen hat (Dehnungsfugen), entstehen massive interne Spannungen, die die Struktur verformen, Beton reißen lassen oder sogar zum Einsturz führen können.',
  },
  {
    question: 'Dehnt sich Holz in alle Richtungen gleich aus?',
    answer: 'Nein. Holz ist ein anisotropes Material. Es dehnt sich entlang der Faser sehr wenig aus, aber signifikant in Querrichtung (Breite und Dicke).',
  },
  {
    question: 'Welche Temperatur sollte ich als Ausgangswert verwenden?',
    answer: 'Sie sollten die Temperatur zum Zeitpunkt der Installation oder des Baus verwenden. Der Endwert sollte die maximal erwartete Temperatur während der Lebensdauer sein.',
  },
];

const howToData = [
  { name: 'Ursprüngliche Länge messen', text: 'Geben Sie die Länge des Balkens oder Materials in Metern ein.' },
  { name: 'Material auswählen', text: 'Wählen Sie zwischen Metallen, Baustoffen oder Hölzern, um den spezifischen Koeffizienten anzuwenden.' },
  { name: 'Temperaturbereich definieren', text: 'Geben Sie die Starttemperatur und die erwartete Maximaltemperatur an, um die Temperaturdifferenz zu berechnen.' },
  { name: 'Ausdehnung analysieren', text: 'Beobachten Sie die Gesamtausdehnung in Millimetern und die resultierende Endlänge, um geeignete Fugen vorzusehen.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Was ist thermische Ausdehnung und warum ist sie für Strukturen wichtig?', level: 2 },
    { type: 'paragraph', html: 'Die <strong>thermische Ausdehnung</strong> ist der physikalische Prozess, bei dem ein Material seine Länge als Reaktion auf eine Temperaturerhöhung vergrößert. Auf mikroskopischer Ebene vibrieren die Teilchen mit mehr Energie und benötigen mehr Platz. Im Bauwesen ist dieses Phänomen eine Kraft, die Beton brechen, Stahlbalken verformen und Bahngleise verbiegen kann.' },
    { type: 'title', text: 'Die Formel der linearen Ausdehnung', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formel für die lineare Ausdehnung', html: '<p>Die Ausdehnung eines Bauteils berechnet sich mit: <code>ΔL = L₀ · α · ΔT</code>. Dabei ist <strong>ΔL</strong> die Gesamtausdehnung, <strong>L₀</strong> die ursprüngliche Länge, <strong>α</strong> der Ausdehnungskoeffizient des Materials (in °C⁻¹) und <strong>ΔT</strong> die Temperaturdifferenz. Dies ist die Basis für das Design von Dehnungsfugen.</p>' },
    { type: 'title', text: 'Ausdehnungskoeffizienten nach Material', level: 3 },
    { type: 'card', icon: 'mdi:table', title: 'Tabelle gängiger Koeffizienten', html: '<p>Nicht alle Materialien dehnen sich gleich aus. <strong>Aluminium</strong> (23 ppm/°C) dehnt sich fast doppelt so stark aus wie <strong>Stahl</strong> (12 ppm/°C). <strong>Beton</strong> hat fast den gleichen Koeffizienten wie Stahl (12 ppm/°C), weshalb Stahlbeton stabil ist.</p>' },
  ],
  ui: {
    configTitle: 'Konfiguration',
    labelMaterial: 'Material',
    groupMetals: 'Metalle',
    groupConstruction: 'Bauwesen',
    groupWood: 'Hölzer und Polymere',
    matSteel: 'Stahl (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Kupfer (17 ppm/°C)',
    matIron: 'Eisen (11 ppm/°C)',
    matConcrete: 'Beton (12 ppm/°C)',
    matBrick: 'Ziegel (9 ppm/°C)',
    matGlass: 'Glas (9 ppm/°C)',
    matWoodFiber: 'Holzfaser (5 ppm/°C)',
    matWoodTransversal: 'Holz Quer (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metallurgie',
    catConstruction: 'Bauwesen',
    catWood: 'Hölzer und Polymere',
    labelLength: 'Anfangslänge (m)',
    labelTempStart: 'Starttemp. (°C)',
    labelTempEnd: 'Max. Temp. (°C)',
    deltaLabel: 'Temperaturdifferenz (ΔT)',
    vizTitle: 'Simulacija Ausdehnung',
    resultGrowthLabel: 'Gesamtausdehnung (ΔL)',
    resultFinalLabel: 'Endlänge',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Verformungsrisiko',
    jointTitle: 'Minimale Fuge',
    riskLow: 'Niedrig',
    riskModerate: 'Moderat',
    riskCritical: 'Kritisch',
    tipDefault: 'Konsultieren Sie die Herstellerangaben für exakte Koeffizienten spezieller Legierungen.',
    tipSteel: 'Stahl und Beton haben fast identische Koeffizienten, sodass Stahlbeton ohne interne Risse funktioniert.',
    tipAluminum: 'Aluminium dehnt sich doppelt so stark aus wie Stahl. Bei Metallgehäusen erfordert dies elastische Dichtstoffe.',
    tipGlass: 'Glas und Stahl dehnen sich fast gleich aus, was entscheidend für große Glasfassaden ist.',
    tipConcrete: 'Der Beton-Koeffizient ähnelt dem von Stahl, weshalb Mischstrukturen so stabil sind.',
    tipWood: 'Holz dehnt sich durch Wärme wenig, aber durch Feuchtigkeit stark aus. In Längsrichtung ist es sehr stabil.',
    tipPvc: 'PVC hat eine sehr hohe Ausdehnung. Es benötigt O-Ringe oder Dehnungsbögen, um Bewegungen ohne Bruch zu absorbieren.',
  },
};
