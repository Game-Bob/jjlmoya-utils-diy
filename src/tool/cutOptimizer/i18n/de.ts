import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'schnittoptimierung';
const title = 'Schnittoptimierung für Leisten und Platten';
const description =
  'Kostenloser Rechner zur Schnittoptimierung für Holz, Metall oder Rohre. Minimieren Sie den Verschnitt mit dem 1D- und 2D-Bin-Packing-Algorithmus. Ideal für Tischlerei und Metallbau.';

const faqData = [
  {
    question: 'Was ist ein 1D-Schnittoptimierer?',
    answer:
      'Es ist ein Werkzeug, das mathematische Algorithmen (wie das Bin-Packing-Problem) verwendet, um zu bestimmen, wie kleinere Teile aus einem standardmäßigen Langstück (Leiste, Profil, Rohr) mit möglichst wenig Verschnitt geschnitten werden können.',
  },
  {
    question: 'Warum muss die Schnittbreite (Kerf) berücksichtigt werden?',
    answer:
      'Jedes Mal, wenn die Säge durch das Material schneidet, gehen einige Millimeter verloren (normalerweise zwischen 2 mm und 4 mm, je nach Sägeblatt). Wenn dieser Platz nicht eingerechnet wird, werden die letzten Teile auf Ihrer Liste kürzer als geplant.',
  },
  {
    question: 'Kann ich Teile verschiedener Längen mischen?',
    answer:
      'Ja, unser Rechner akzeptiert jede Kombination von Längen und Mengen. Der Algorithmus bewertet alle möglichen Kombinationen und priorisiert die maximale Ausnutzung des Lagermaterials.',
  },
  {
    question: 'Wie speichere ich meinen Schnittplan?',
    answer:
      'Nach der Optimierung können Sie die Seite ausdrucken oder einen Screenshot des visuellen Schemas machen. Dies dient als physische Anleitung in der Werkstatt, um die Reihenfolge der Schnitte nicht zu verwechseln.',
  },
];

const howToData = [
  {
    name: 'Basismaterial definieren (Stock)',
    text: 'Geben Sie die Gesamtlänge der verfügbaren Leiste oder des Profils an (z. B. 2400 mm oder 6000 mm).',
  },
  {
    name: 'Sägeblattdicke konfigurieren (Kerf)',
    text: 'Stellen Sie die Millimeter ein, die die Säge bei jedem Schnitt entfernt, damit die Berechnung millimetergenau ist.',
  },
  {
    name: 'Gewünschte Teile auflisten',
    text: 'Geben Sie die Länge und Anzahl jedes Teils ein, das Sie für Ihr Projekt benötigen.',
  },
  {
    name: 'Optimierung ausführen',
    text: 'Erhalten Sie das effizienteste Schnittschema und den exakten Prozentsatz des erzeugten Verschnitts.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Der definitive Leitfaden zur Schnittoptimierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Schnittoptimierung, technisch bekannt als das <strong>Zuschnittproblem (Cutting Stock Problem)</strong>, ist eine der faszinierendsten logistischen Herausforderungen in der Industrietechnik. Bei einem Projekt mit 20 Teilen und 5 Lagerstäben gibt es Millionen möglicher Kombinationen. Ein Computer-Algorithmus kann die optimale Lösung in Millisekunden finden und den üblichen Verschnitt von 15 % auf weniger als 5 % reduzieren.',
    },
    {
      type: 'title',
      text: 'Linearer 1D-Schnitt und 2D-Plattenschnitt',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Linearschnitt für Leisten und Profile',
      html: '<p>Beim <strong>linearen Schnitt (1D)</strong> erfolgt die Optimierung in nur einer Dimension: der Länge. Die Breite des Materials wird als konstant angenommen. Ideal für Bauholz (Leisten, Balken), Metall- und Aluminiumprofile, PVC- oder Kupferrohre und Gewindestangen.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Plattenschnitt für Platten und Bleche',
      html: '<p>Beim <strong>Plattenschnitt (2D)</strong> werden zwei Dimensionen verwaltet: Breite und Länge. Das Tool verwendet Guillotine-Algorithmen, bei denen jeder Schnitt von Kante zu Kante verläuft. Ideal für Plattenwerkstoffe (MDF, Spanplatten), Sperrholz, Glas, Acrylglas und Metallbleche.</p>',
    },
    {
      type: 'title',
      text: 'Der kritische Faktor: Die Schnittbreite (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Kerf</strong> ist das Material, das bei jedem Schnitt entfernt wird. Ein Standard-Tischkreissägeblatt verbraucht zwischen 3,0 mm und 3,2 mm pro Schnitt. Eine Handkreissäge verbraucht 1,5 bis 2,5 mm. Ein Laserschnitt in Acrylglas verbraucht kaum 0,1 bis 0,3 mm. Das Ignorieren der Schnittbreite in einem Projekt mit 10 Schnitten an 2400-mm-Leisten kann dazu führen, dass Sie zwischen 30 mm und 32 mm nutzbares Material verlieren.',
    },
    {
      type: 'title',
      text: 'Der Best-Fit-Decreasing-Algorithmus',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Wie der Optimierer intern funktioniert',
      html: '<p>Der Kern des Optimierers nutzt die Strategie <strong>Best Fit Decreasing (BFD)</strong>: Zuerst werden alle Teile von der größten zur kleinsten Länge sortiert (große Teile sind schwieriger einzupassen). Dann wird für jedes Teil der vorhandene Rest gesucht, in den es mit dem geringsten verbleibenden Rest passt. Nur wenn es in keinen Rest passt, wird ein neuer Rohstab angebrochen. Dieser Prozess reduziert den Verschnitt um eine Größenordnung im Vergleich zur zufälligen Auswahl.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Linear (Stäbe)',
    modePanelLabel: 'Platten',
    configTitle: 'Materialkonfiguration',
    labelStockLength: 'Materiallänge (mm)',
    labelStockWidth: 'Materialbreite (mm)',
    labelKerf: 'Schnittbreite / Kerf (mm)',
    cutsTitle: 'Schnittliste',
    placeholderLength: 'Länge',
    placeholderWidth: 'Breite',
    placeholderQty: 'Anz.',
    btnRemoveTitle: 'Löschen',
    statStockUsed: 'Material benutzt',
    statTotalCuts: 'Gesamtschnitte',
    statWaste: 'Gesamtverschnitt',
    statEfficiency: 'Effizienz',
    vizTitle: 'Schnittvisualisierung',
    emptyState: 'Fügen Sie Schnitte hinzu und klicken Sie auf Berechnen, um den Schnittplan zu sehen.',
    noValidCuts: 'Es konnten keine gültigen Schnitte generiert werden. Überprüfen Sie die Maße.',
    noValidPanels: 'Es konnten keine gültigen Platten generiert werden. Prüfen Sie, ob die Teile auf die Platte passen.',
    stockLabel: 'Material',
    panelLabel: 'Platte',
    wasteLabel: 'Verschnitt:',
    effLabel: 'Eff:',
  },
};
