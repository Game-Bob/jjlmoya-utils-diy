import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ton-schwindungsrechner';
const title = 'Ton Schwindungsrechner: Exakte Maße für Keramik';
const description =
  'Berechnen Sie die Schwindung von Ton beim Trocknen und Brennen. Entwerfen Sie Keramikstücke mit exakten Endmaßen.';

const faqData = [
  {
    question: 'Warum schwindet Ton?',
    answer:
      'Ton schwindet hauptsächlich durch Wasserverlust. Zuerst erfolgt die Trocknung (Verdunstung des Wassers zwischen den Partikeln) und dann der Brand (Entfernung von chemisch gebundenem Wasser und Sintern der Partikel).',
  },
  {
    question: 'Wie hoch ist der normale Schwindungsprozentsatz?',
    answer:
      'Das hängt von der Keramikmasse ab. Irdenware schwindet normalerweise zwischen 5-10 %, während Steinzeug und Porzellan aufgrund ihrer höheren Vitrifizierung 12-15 % erreichen können.',
  },
  {
    question: 'Wie messe ich die Schwindung meines eigenen Tons?',
    answer:
      'Erstellen Sie eine Testplatte von exakt 10 cm Länge. Lassen Sie sie trocknen und messen Sie sie (Trockenschwindung). Brennen Sie sie bei der Endtemperatur und messen Sie erneut (Gesamtschwindung). Die Differenz ergibt den exakten Prozentsatz.',
  },
  {
    question: 'Was passiert, wenn mein Stück beim Trocknen reißt?',
    answer:
      'Dies deutet meist auf eine zu schnelle oder ungleichmäßige Trocknung hin. Dünne Stellen verlieren Wasser schneller als dicke, was zu Spannungen führt. Decken Sie die Stücke mit Kunststoff ab, um den Prozess zu verlangsamen.',
  },
];

const howToData = [
  {
    name: 'Das Werkstück feucht messen',
    text: 'Nehmen Sie die exakten Maße Ihres Werkstücks direkt nach dem Drehen oder Modellieren auf, wenn es noch seine volle Feuchtigkeit hat.',
  },
  {
    name: 'Schwindungskoeffizienten eingeben',
    text: 'Suchen Sie auf der Verpackung Ihres Tons nach dem vom Hersteller angegebenen Prozentsatz der Gesamtschwindung (Trocknen + Brennen).',
  },
  {
    name: 'Erwartete Endmaße erhalten',
    text: 'Nutzen Sie den Rechner, um zu erfahren, wie groß Ihr Stück nach dem Brennen sein wird, und planen Sie Ihre Passungen oder Deckel entsprechend.',
  },
  {
    name: 'Umgekehrte Berechnung für Zielmaße',
    text: 'Wenn Ihr Stück am Ende exakt X cm groß sein soll, nutzen Sie die umgekehrte Berechnung, um zu wissen, welche Größe es auf der Töpferscheibe haben muss.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
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
      text: 'Die Physik des Tons: Schwindung und Ausdehnung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ton ist ein lebendiges Material, das seine Größe während des gesamten Keramikprozesses verändert. Von dem Moment an, in dem Sie ein feuchtes Stück formen, bis es aus dem Ofen kommt, kann es zwischen 8 % und 15 % seiner ursprünglichen Größe verlieren. Die Berechnung dieser Schwindung ist entscheidend, um Stücke mit den exakten Maßen zu erstellen, die Sie benötigen.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Schwindungsphasen',
          html: '<p><strong>1. Trocknung (Feucht → Trocken):</strong> Durch den Wasserverlust rücken die Tonpartikel näher zusammen. Dies ist die stärkste Schwindung (4-8 %). Dickwandige Stücke können reißen, wenn sie zu schnell trocknen.</p><p><strong>2. Brand (Trocken → Schrühbrand):</strong> Zwischen 900-1000 °C erfährt der Ton irreversible chemische Veränderungen. Zusätzliche Schwindung von 2-4 %. Das Stück wird porös, aber fest.</p><p><strong>3. Vitrifizierung (Hochtemperatur):</strong> Bei 1200-1300 °C versintert (vitrifiziert) der Ton. Endgültige Schwindung von 1-3 %. Steinzeug und Porzellan erreichen ihre maximale Dichte.</p>',
        },
        {
          type: 'card',
          title: 'Einflussfaktoren',
          html: '<ul><li><strong>Tonsorte:</strong> Roter Ton schwindet weniger (8-10 %) als Porzellan (12-15 %).</li><li><strong>Wandstärke:</strong> Dünne Wände schwinden gleichmäßiger als dicke.</li><li><strong>Brenntemperatur:</strong> Je höher die Temperatur, desto stärker die Schwindung und Vitrifizierung.</li><li><strong>Schamotteanteil:</strong> Die Zugabe von Schamotte (gemahlener, bereits gebrannter Ton) verringert die Schwindung.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Praktische Anwendungen',
      level: 2,
    },
    {
      type: 'title',
      text: 'Entwurf von Formen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie eine Tasse mit einem Enddurchmesser von 8 cm benötigen und Ihr Ton um 12 % schwindet, müssen Sie die Form mit <strong>9,1 cm</strong> anlegen. Diese umgekehrte Berechnung ist in der Serienproduktion entscheidend.',
    },
    {
      type: 'title',
      text: 'Deckel und Montagen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie Stücke erstellen, die zusammenpassen müssen (Teekanne + Deckel, Dose + Deckel), müssen beide aus demselben Ton hergestellt und zusammen gebrannt werden, um eine gleichmäßige Schwindung zu gewährleisten. Eine Differenz von nur 1 % kann die Passform ruinieren.',
    },
    {
      type: 'title',
      text: 'Monumentale Skulpturen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bei großen Stücken kann die unterschiedliche Schwindung zwischen dicken und dünnen Abschnitten zu Rissen führen. Erfahrene Keramiker gleichen dies aus, indem sie die Wände in Bereichen, von denen sie wissen, dass sie stärker schwinden, dicker lassen.',
    },
  ],
  ui: {
    labelInitialSize: 'Anfangsgröße (mm)',
    labelShrinkage: 'Schwindungsprozentsatz (%)',
    labelLow: 'Niedrig (Terrakotta)',
    labelMedium: 'Mittel (Steinzeug)',
    labelHigh: 'Hoch (Porzellan)',
    presetTerracota: 'Terrakotta (8%)',
    presetGres: 'Steinzeug (12%)',
    presetPorcelana: 'Porzellan (15%)',
    labelResult: 'Ergebnis',
    labelFinalSize: 'Endgröße:',
    labelLoss: 'Gesamtverlust:',
    tipText:
      'Um die erforderliche Anfangsgröße für eine bestimmte Endgröße zu berechnen, teilen Sie die gewünschte Größe durch (1 - Schwindung/100).',
    labelInitialBadge: 'Anfang:',
    labelFinalBadge: 'mm Ende',
    labelLossBadge: 'Verlust:',
    labelInitialArea: 'Anfangsfläche',
    labelFinalArea: 'Endfläche',
  },
};
