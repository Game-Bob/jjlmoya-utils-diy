import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'beton-moertel-rechner';
const title = 'Beton und Mörtelrechner: Exakte Mengen an Zement, Sand und Wasser';
const description =
  'Berechnen Sie, wie viele Säcke Zement, Schaufeln Sand und Liter Wasser Sie pro m³ benötigen. Für Fundamente, Bodenplatten, Mauern und Estriche.';

const faqData = [
  {
    question: 'Wie viele 25-kg-Säcke Zement passen in einen Kubikmeter?',
    answer:
      'Für einen Standardbeton (Festigkeitsklasse C20/25) werden ca. 14 Säcke à 25 kg (350 kg) benötigt, um einen Kubikmeter verdichteten Beton herzustellen.',
  },
  {
    question: 'Was ist stärker, Beton oder Mörtel?',
    answer:
      'Beton (mit Kies) ist strukturell stärker, um große Lasten zu tragen. Mörtel (nur Sand) ist ideal zum Verbinden von Steinen oder zum Verputzen von Oberflächen.',
  },
  {
    question: 'Wie viele Schaufeln sind ein Kubikmeter?',
    answer:
      'Das hängt von der Größe der Schaufel ab, aber im Allgemeinen rechnet man mit 180-200 Schaufeln Sand pro m³. Unser Rechner übersetzt m³ in empfohlene Schaufeln.',
  },
  {
    question: 'Kann ich die Mischung von Hand ohne Betonmischer herstellen?',
    answer:
      'Ja, auch wenn es viel mehr körperliche Anstrengung erfordert. Ideal ist es, dies auf einer sauberen und wasserdichten Fläche (Metallplatte oder Trog) zu tun, um kein Wasser zu verlieren.',
  },
  {
    question: 'Warum reißt Beton beim Trocknen?',
    answer:
      'Meist liegt es an fehlender Feuchtigkeit während des Abbindens (schnelle Verdunstung von Wasser) oder zu viel Wasser in der Mischung. Es wird empfohlen, den Beton an den folgenden Tagen zu wässern.',
  },
];

const howToData = [
  {
    name: 'Mischungstyp wählen',
    text: 'Wählen Sie aus, ob Sie Beton für Fundamente oder Mörtel für Mauern herstellen wollen.',
  },
  {
    name: 'Volumen in m³ angeben',
    text: 'Geben Sie das Gesamtvolumen ein. Multiplizieren Sie Länge x Breite x Dicke.',
  },
  {
    name: 'Mengen abrufen',
    text: 'Sehen Sie nach, wie viele Säcke, Schaufeln und Liter Sie kaufen müssen.',
  },
  {
    name: 'Proportionen anwenden',
    text: 'Folgen Sie der visuellen Anleitung für Zement, Sand und Kies für eine perfekte Mischung.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Anleitung zur Dosierung von Beton und Mörtel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie vor einer Renovierung oder einem Bau stehen, ist eine der häufigsten Fragen: <strong>Wie viele Säcke Zement benötige ich für einen Kubikmeter Beton?</strong>. Es geht nicht nur darum, Zutaten zu mischen; die endgültige Festigkeit der Struktur hängt direkt von der Genauigkeit der Proportionen von Zement, Sand, Kies und Wasser ab. Unser Rechner übersetzt industrielle Maße in praktische Baustelleneinheiten: 25-kg-Säcke, Schaufeln und Liter.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'Zu viel Wasser schwächt den Beton',
      html: '<p>Ein sehr häufiger Fehler ist die Zugabe von zu viel Wasser, damit der Beton besser fließt. Überschüssiges Wasser bildet beim Verdunsten während des Abbindens Poren, was die Endfestigkeit drastisch reduziert. Die ideale Konsistenz sollte wie eine <strong>dicke Paste sein, nicht flüssig</strong>. Verwenden Sie so wenig Wasser wie möglich.</p>',
    },
    {
      type: 'title',
      text: 'Standardproportionen je nach Verwendung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Betondosierung</strong> variiert je nach Verwendung. Für <strong>Beton C20/25</strong> (Fundamente und Bodenplatten) ist das Verhältnis 1 Teil Zement, 2,5 Teile Sand und 3 Teile Kies. Für <strong>Mauermörtel</strong> (Wände) ist es 1 Teil Zement und 4 Teile Sand. Für <strong>Estrichmörtel</strong> (Bodenbeläge) ist es 1 Teil Zement und 3 Teile Sand. Beton mit Kies hält mehr Last aus; Mörtel nur mit Sand ist ideal zum Verbinden und Verputzen.',
    },
    {
      type: 'title',
      text: 'So berechnen Sie die benötigten m³',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Berechnungsbeispiel für eine Bodenplatte',
      html: '<p>Für eine Gartenplatte von 4m Länge, 3m Breite und 15cm Dicke: <strong>4 × 3 × 0,15 = 1,80 m³</strong>. Unser Rechner führt diese Operation automatisch aus, wenn Sie die Maße im Abschnitt "Nach Maßen" eingeben.</p><p>Denken Sie immer daran, <strong>10 % zusätzlich zu kaufen</strong>, um Verluste durch Verschütten oder Bodenunebenheiten auszugleichen.</p>',
    },
    {
      type: 'title',
      text: 'Mischreihenfolge und Dosierung nach Säcken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Auf Baustellen spricht man oft von einer <strong>"300er Mischung"</strong>: 300 kg Zement pro Kubikmeter fertigem Beton. Für ein korrektes Mischen im Betonmischer: zuerst das Wasser, dann Kies und Sand (um Klumpen zu lösen) und zuletzt der Zement, der schrittweise hinzugefügt wird.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'Die 10 Prozent Regel, um Fehlmengen zu vermeiden',
      html: '<p>Kaufen Sie immer <strong>10 % mehr Material</strong> als berechnet, um Verluste durch Verschütten, Unregelmäßigkeiten im Gelände oder Schwankungen im tatsächlichen Volumen der feuchten Zuschlagstoffe auszugleichen. Es ist viel billiger, als eine zweite Bestellung aufgeben zu müssen, während der Bau stillsteht.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Standardbeton',
    mixH200Hint: 'Ideal für Fundamente und Bodenplatten',
    mixM40Label: 'Mauermörtel',
    mixM40Hint: 'Für Mauern und Trennwände',
    mixM80Label: 'Starker Estrich',
    mixM80Hint: 'Für Böden und starken Putz',
    modeDimsLabel: 'Nach Maßen',
    modeDirectLabel: 'Direkte m³',
    labelLength: 'Länge',
    labelWidth: 'Breite',
    labelThickness: 'Dicke',
    labelVolume: 'Gesamtvolumen (m³)',
    binderCementLabel: 'Zement',
    binderLimeLabel: 'Kalk',
    summaryLabel: 'Gesamtfüllmenge:',
    resUnitSacks: 'Säcke (25kg)',
    resUnitShovels: 'Schaufeln',
    resUnitLitres: 'Liter',
    resLabelCement: 'Portlandzement',
    resLabelLime: 'Hydraulischer Kalk',
    resLabelSand: 'Sand / Zuschläge',
    resLabelWater: 'Trinkwasser',
    proportionsTitle: 'Proportionen der gewählten Mischung',
    propLabelSand: 'Sand',
    propLabelGravel: 'Kies',
    adviceH200: 'Ideal für Pfeiler, Bodenplatten und tragende Strukturen.',
    adviceM40: 'Perfekt zum Errichten von Ziegel- oder Blockwänden.',
    adviceM80: 'Verwenden Sie dies für sehr widerstandsfähige Estriche.',
    adviceLimeH200: 'Kalkbeton ist flexibler, braucht aber länger zum Abbinden.',
    priceTotalLabel: 'Geschätztes Budget',
    priceSackLabel: 'Sack',
    priceSandLabel: 'Sand (m³)',
    priceDisclaimer: 'Unverbindliche Marktpreise. Passen Sie diese gemäß Ihrem lokalen Anbieter an.',
  },
};
