import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'baluster-rechner';
const title = 'Baluster Rechner: Exakter Abstand für Geländer';
const description =
  'Berechnen Sie den exakten Abstand zwischen Stäben oder Balustern für Geländer unter Einhaltung der 10-cm-Regel. Automatische Pläne.';

const faqData = [
  {
    question: 'Was ist der gesetzliche Maximalabstand zwischen Balustern?',
    answer:
      'In den meisten internationalen Bauvorschriften darf der lichte Abstand zwischen den Elementen eines Geländers den Durchgang einer Kugel mit 10 cm Durchmesser nicht zulassen, um Unfälle mit Kindern zu vermeiden.',
  },
  {
    question: 'Wie wird der Abstand gemessen: zwischen den Mitten oder den Lücken?',
    answer:
      "Unser Rechner liefert beides. Der 'lichte Abstand' ist die tatsächliche Lücke zwischen den Stäben (entscheidend für die Sicherheit), während der 'Mittenabstand' (on-center) angibt, wo jeder Baluster gebohrt oder befestigt werden muss.",
  },
  {
    question: 'Was passiert, wenn die Verteilung nicht exakt aufgeht?',
    answer:
      'Der Rechner passt die Anzahl der Stäbe automatisch so an, dass die erste und die letzte Lücke identisch sind, was visuelle Symmetrie und die strikte Einhaltung der maximal zulässigen Lücke garantiert.',
  },
  {
    question: 'Ist es besser, Baluster zu schweißen oder zu schrauben?',
    answer:
      'Das hängt vom Material ab. Bei Stahl bietet Schweißen maximale strukturelle Steifigkeit. Bei Holz oder Aluminium werden mechanische Verankerungen oder durchgehende Schrauben verwendet. Wichtig ist, dass das Geländer einer horizontalen Kraft von mindestens 0,8 kN/m standhält.',
  },
];

const howToData = [
  {
    name: 'Gesamtlänge messen',
    text: 'Messen Sie den exakten Abstand zwischen dem ersten und dem letzten Pfosten, an dem das Geländer installiert wird.',
  },
  {
    name: 'Balusterbreite definieren',
    text: 'Messen Sie die Breite eines einzelnen Stabes (z. B. 2x2 cm bei Quadratrohr oder den Durchmesser bei Rundstäben).',
  },
  {
    name: 'Maximale Lücke festlegen',
    text: 'Geben Sie den gewünschten maximalen Abstand an (empfohlen sind 10 cm zur Einhaltung der Vorschriften).',
  },
  {
    name: 'Installationsmarkierungen erhalten',
    text: 'Überprüfen Sie die Liste der exakten Positionen für die Bohrungen, um eine symmetrische und sichere Verteilung zu gewährleisten.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
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
      text: 'Ultimativer Leitfaden: So berechnen Sie den Balusterabstand für Geländer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Gestaltung eines sicheren und ästhetisch perfekten Geländers ist eine Kunst, die mathematische Präzision mit Bauvorschriften kombiniert. Ob für eine Terrasse, einen Balkon oder eine Innentreppe, die korrekte Berechnung der Baluster (oder Stäbe) ist der kritischste Schritt des Projekts. Ein Rechenfehler ruiniert nicht nur die visuelle Symmetrie, sondern kann Ihre Struktur illegal und unsicher machen.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Warum ist diese Berechnung so wichtig?',
      html: '<p>Es geht nicht nur darum, eine Lücke zu füllen. Es geht um die Einhaltung der <strong>4-Zoll-Kugel-Regel (10 cm)</strong>, einer internationalen Sicherheitsnorm zur Vermeidung von Unfällen mit Kindern.</p>',
    },
    {
      type: 'title',
      text: '1. Sicherheitsvorschriften: Die 10-cm-Regel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bevor Sie das erste Stück Holz oder Metall schneiden, müssen Sie das „Warum“ hinter der Mathematik verstehen. Die Bauvorschriften in vielen Ländern, wie auch der IRC (International Residential Code) in den USA, legen eine klare Norm fest: <em>„Der lichte Abstand zwischen vertikalen Elementen darf den Durchgang einer Kugel mit 10 cm (4 Zoll) Durchmesser nicht zulassen.“</em>',
    },
    {
      type: 'paragraph',
      html: 'Dieses Maß ist nicht willkürlich. Es ist der durchschnittliche Kopfdurchmesser eines Kleinkindes (normalerweise unter einem Jahr). Wenn ein Kind mit dem Körper hindurchkommt, aber der Kopf stecken bleibt, ist das Erstickungsrisiko extrem hoch. Wenn es mit dem Kopf hindurchkommt, kann es in die Tiefe stürzen. Daher ist das Ziel unseres <strong>Baluster-Rechners</strong> nicht nur die Ästhetik, sondern das Retten von Leben.',
    },
    {
      type: 'title',
      text: '2. Das mathematische Problem: Der Zaunpfostenfehler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In der Programmierung und im Bauwesen gibt es ein klassisches Problem namens <em>„Fencepost Error“</em> (Zaunpfostenfehler). Wenn Sie einen 10 Meter langen Zaun mit Pfosten alle 1 Meter bauen wollen, wie viele Pfosten benötigen Sie? Die intuitive Antwort ist 10, aber die richtige ist 11.',
    },
    {
      type: 'paragraph',
      html: 'Bei Balustern ist es ähnlich, aber komplexer, da die Breite des Balusters selbst Platz beansprucht. Die Formel, die unser Tool verwendet, löst dieses Gleichungssystem für Sie:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Schritt A: Lücken berechnen',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Zuerst bestimmen wir, wie viele Baluster theoretisch passen würden, wenn wir den maximal zulässigen Raum nutzen würden. Wir runden diese Zahl auf, um sicherzustellen, dass die resultierenden Lücken <em>kleiner</em> als das Maximum sind.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Schritt B: Exakten Abstand neuberechnen',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Sobald wir die exakte Anzahl der Baluster (n) kennen, berechnen wir, wie viel Platz „übrig bleibt“, wenn wir die Breite des gesamten Materials abziehen, und verteilen diesen gleichmäßig auf die Lücken (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Schritt-für-Schritt-Anleitung für die perfekte Installation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Zahlen zu haben, ist nur die halbe Miete. Hier erklären wir, wie Sie diese Zahlen vom Papier (oder Bildschirm) in die Realität Ihres Bauprojekts übertragen.',
    },
    {
      type: 'title',
      text: 'Schritt 1: Präzisionsmessung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Messen Sie den <strong>inneren</strong> Abstand zwischen Pfosten und Pfosten. Messen Sie nicht von der Mitte des Pfostens. Sie müssen das exakte lichte Maß kennen, das Sie füllen werden (L). Wenn Ihr Geländer mehrere Abschnitte hat, messen Sie jeden einzeln; Konstruktionen sind selten perfekt rechtwinklig, und ein Fehler von 0,5 cm kann die Symmetrie ruinieren.',
    },
    {
      type: 'title',
      text: 'Schritt 2: Die Mitte finden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Anfängerfehler Nummer eins ist, mit dem Setzen der Baluster von einem Ende zum anderen zu beginnen. Dies führt fast immer zu einer seltsam großen oder kleinen letzten Lücke, was die visuelle Harmonie stört.<ul><li>Markieren Sie die <strong>exakte Mitte</strong> des Geländers (L / 2).</li><li>Entscheiden Sie, ob Sie in der Mitte einen <em>Baluster</em> oder eine <em>Lücke</em> haben möchten.</li><li>Wenn Sie einen Baluster in der Mitte möchten: Markieren Sie die Hälfte der Balusterbreite auf jeder Seite Ihrer Mittelmarkierung.</li><li>Wenn Sie eine Lücke in der Mitte möchten: Markieren Sie die Hälfte des Lückenabstands (g / 2) auf jeder Seite.</li></ul>',
    },
    {
      type: 'title',
      text: 'Schritt 3: Einen Abstandshalter (Spacer) anfertigen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie nicht für jeden Baluster das Maßband. Der kumulative menschliche Fehler wird dazu führen, dass der letzte Baluster um mehrere Zentimeter abweicht. Professionell ist es, einen Holzblock (oder zwei) mit dem exakten Maß der Lücke (g) zuzuschneiden, das Ihnen unser Rechner ausgegeben hat.',
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie diesen Block als physische Schablone. Setzen Sie einen Baluster, legen Sie den Block an, setzen Sie den nächsten Baluster fest gegen den Block und fixieren Sie ihn. Dies garantiert millimetergenaue Konsistenz.',
    },
    {
      type: 'title',
      text: '4. Benötigte Materialien und Werkzeuge',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Ausrüstung für ein professionelles Finish',
      html: '<ul><li>Hochpräzises Maßband</li><li>Zimmermannsbleistift</li><li>Wasserwaage (für die Vertikalität)</li><li>Kappsäge (für saubere Schnitte)</li><li>Bohrer und Holzschrauben</li><li>Abstandshalter (maßgefertigt)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Zusätzliche technische Fragen',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Was passiert, wenn die letzte Lücke nicht passt?',
      html: '<p>Wenn Sie unseren Rechner verwendet haben, sollte dies nicht passieren. In der realen Welt verbiegt sich jedoch Holz, und Pfosten sind nicht immer gerade. Wenn Ihnen am Ende 1-2 mm fehlen oder zu viel sind, ist das unmerklich. Wenn Ihnen 1 cm fehlt, überprüfen Sie Ihre Abstandshalter; wahrscheinlich haben Sie sich bei jedem Schritt Millimeter „eingefressen“.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Kann ich die Baluster weiter auseinander setzen, wenn ich keine Kinder habe?',
      html: '<p>Rechtlich gesehen: Nein. Die Bauvorschriften gelten für das Haus, nicht für die aktuellen Bewohner. Wenn Sie das Haus eines Tages verkaufen, wird ein Geländer außerhalb der Norm bei der Inspektion ein Problem sein. Zudem können Besucher (Nichten, Enkel) in Gefahr sein.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Holz, Metall oder Glas?',
      html: '<p>Dieser Rechner funktioniert für <strong>jedes sich wiederholende vertikale Element</strong>. Wenn Sie horizontale Stahlseile verwenden, sind die Vorschriften anders (normalerweise dürfen sie nicht zum Klettern einladen, „Leitereffekt“). Bei Glas wird es als durchgehende Platte betrachtet, und es gilt kein Abstand, sondern die Schlagfestigkeit.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>„Architektur ist der Wille der Epoche, in den Raum übersetzt.“</em></p><p>Wir hoffen, dass dieses Tool Ihnen hilft, sicherere und schönere Räume zu bauen. Denken Sie immer daran, die örtlichen Bauvorschriften Ihrer Gemeinde zu konsultieren, da es spezifische Variationen bei der Mindesthöhe (normalerweise 90–110 cm) oder den Belastungen geben kann.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Abmessungen',
    sectionDesc: 'Geben Sie die Maße Ihres Geländers ein',
    labelRailLength: 'Gesamtlänge (L)',
    labelBalusterWidth: 'Balusterbreite (w)',
    labelMaxGap: 'Maximaler Abstand (g)',
    blueprintTitle: 'Montageplan',
    blueprintRef: 'REF: BAL-001 // SKALA: AUTO',
    labelRequired: 'Benötigte Baluster',
    labelExactGap: 'Exakte Lücke',
    labelOnCenter: 'Mitte zu Mitte',
    labelTotalSpaces: 'Gesamtanzahl Lücken',
    labelCoveredLength: 'Abgedeckte Länge',
    labelDisclaimer: '* Die gezeigten Dimensionen sind Näherungswerte zur Visualisierung.',
  },
};
