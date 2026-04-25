import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'epoxidharz-rechner';
const title = 'Epoxidharz Rechner: Mischung und Volumen';
const description = 'Berechnen Sie die exakte Menge an Epoxidharz und Härter für Ihre Projekte. Vermeiden Sie Verschwendung bei River Tables, Schmuck und Gussformen.';

const faqData = [
  {
    question: 'Warum ist das exakte Mischungsverhältnis bei Harz so wichtig?',
    answer: 'Im Gegensatz zu anderen Mischungen trocknet Epoxidharz nicht durch Verdunstung, sondern durch eine chemische Reaktion (Polymerisation). Wenn Harz oder Härter im Übermaß vorhanden sind, bleibt die Reaktion unvollständig, was zu klebrigen, weichen Stellen oder dauerhaften Blasen führt.',
  },
  {
    question: 'Was ist das Verhältnis nach Gewicht vs. Volumen?',
    answer: 'Viele Harze werden im Volumenverhältnis 2:1 gemischt, aber nach Gewicht oft 100:45, da der Härter meist eine andere Dichte hat. Verwenden Sie immer die vom Hersteller angegebene Skala und nutzen Sie nach Möglichkeit eine Digitalwaage für maximale Präzision.',
  },
  {
    question: 'Wie vermeide ich Blasen beim Mischen?',
    answer: 'Mischen Sie langsam mit konstanten kreisenden Bewegungen für mindestens 3 Minuten und kratzen Sie dabei die Wände des Bechers gut ab. Lassen Sie die Mischung vor dem Gießen ein paar Minuten ruhen, damit Blasen an die Oberfläche steigen können.',
  },
  {
    question: 'Was ist die Topfzeit (Pot Life)?',
    answer: 'Dies ist die Zeit, die Sie zur Verarbeitung der Mischung haben, bevor sie beginnt hart zu werden (zu gelieren). Im Sommer oder bei großen Volumina reduziert sich diese Zeit drastisch aufgrund der exothermen Reaktion (Wärmeentwicklung).',
  },
];

const howToData = [
  { name: 'Formabmessungen messen', text: 'Messen Sie Länge, Breite und Tiefe (Dicke) des Bereichs, den Sie mit Harz füllen möchten.' },
  { name: 'Mischungsverhältnis eingeben', text: 'Prüfen Sie auf dem Etikett Ihres Produkts, ob das Verhältnis 1:1, 2:1 oder 3:1 ist und ob es auf Gewicht oder Volumen basiert.' },
  { name: 'Komponenten abwiegen', text: 'Gießen Sie zuerst Komponente A (Harz) und dann B (Härter) in einen sauberen Behälter auf einer Digitalwaage.' },
  { name: 'Technisches Mischen', text: 'Rühren Sie vorsichtig um, bis die Mischung völlig transparent ist und keine "Schlieren" unterschiedlicher Dichte mehr zu sehen sind.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Leitfaden zur Berechnung und Mischung von Epoxidharz', level: 2 },
    { type: 'paragraph', html: 'Epoxidharz ist keine Farbe, die durch Verdunstung trocknet; es ist eine komplexe <strong>exotherme chemische Reaktion</strong>. Die Magie geschieht, wenn sich Epoxidmoleküle mit Polyamidmolekülen zu einem kristallinen, festen duroplastischen Polymer verketten.' },
    { type: 'paragraph', html: 'Der Unterschied zwischen einem langlebigen Kunstwerk und einer klebrigen Katastrophe liegt in der <strong>exakten Stöchiometrie</strong>. Ein Fehler von nur 5 % im Mischungsverhältnis kann die Aushärtung dauerhaft verhindern. Dieses Tool eliminiert mathematische Vermutungen, sodass Sie sich auf das Erschaffen konzentrieren können.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Volumen oder Gewicht?', html: '<p>Der häufigste Fehler von Anfängern ist die Annahme, dass 100 ml 100 g wiegen. <strong>Harz ist dichter als Härter.</strong></p><p>Wenn das Datenblatt Ihres Produkts "100:50 nach Gewicht" angibt, ist das NICHT dasselbe wie "2:1 nach Volumen". Dieser Rechner arbeitet mit dem <strong>Volumen</strong> (V = L × B × H), dem Standard für das Füllen von Formen.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Gängige Verhältnisse', html: '<ul><li><strong>1:1</strong> — Beschichtungen, Lacke und Schnellkleber.</li><li><strong>2:1</strong> — Standard. River Tables, Schmuck und mittlere Abgüsse.</li><li><strong>3:1</strong> — Industrieböden und hochharte strukturelle Laminate.</li></ul>' },
    ]},
    { type: 'title', text: 'Sicherheitsprotokoll und Best Practices', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Überlebenswichtige Temperatur', html: '<p>Arbeiten Sie immer zwischen <strong>21°C und 25°C</strong>. Kälte kann die Reaktion stoppen und das Teil trüb machen. Übermäßige Hitze beschleunigt die exotherme Reaktion gefährlich ("Flash Cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Zwei Becher Methode', html: '<p>Vertrauen Sie nicht auf eine einzige Mischung. Kratzen Sie die Seiten und den Boden gut ab, gießen Sie die Mischung in einen <strong>zweiten sauberen Becher</strong> und mischen Sie erneut. Dies stellt sicher, dass kein unkatalysiertes Material zurückbleibt.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Rechteckig',
    shapeCylinder: 'Zylindrisch',
    shapeSphere: 'Sphärisch',
    labelLength: 'Länge (cm)',
    labelWidth: 'Breite (cm)',
    labelDiameter: 'Durchmesser (cm)',
    labelDepth: 'Tiefe (cm)',
    labelRatio: 'Mischungsverhältnis (Gewicht/Volumen)',
    labelCustomRatio: 'Benutzerdefiniertes Verhältnis (A:B)',
    labelResinA: 'Harz (A)',
    labelHardenerB: 'Härter (B)',
    labelWasteTitle: 'Sicherheitsmarge',
    labelWasteDesc: '5% extra für Verluste hinzufügen',
    labelTotalVolume: 'Gesamtvolumen',
    labelPartA: 'Teil A (Harz)',
    labelPartB: 'Teil B (Härter)',
    labelVisualization: 'Visualisierung',
    shapeRectLabel: 'Rechteckiger Block',
    shapeCylinderLabel: 'Zylinder / Runde Form',
    shapeSphereLabel: 'Vollständige Kugel',
  },
};
