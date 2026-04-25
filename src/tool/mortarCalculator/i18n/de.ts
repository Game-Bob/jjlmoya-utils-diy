import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'moertel-rechner';
const title = 'Traditionelle Kalkmörtel Verhältnisse: Putz und Anstrich';
const description = 'Kostenloser Rechner für Kalk-Sand-Mörtel. Erhalten Sie die exakten Verhältnisse für Grundputz, Zwischenputz und Feinputz nach traditionellen Methoden (Vitruv).';

const faqData = [
  {
    question: 'Warum Kalk statt Zement verwenden?',
    answer: 'Kalk ist ein "lebendiges" und atmungsaktives Material, das den Abtransport von Wasserdampf ermöglicht und so Kondensationsfeuchtigkeit verhindert. Zudem ist er flexibler als Zement, was die Rissbildung in alten Mauern reduziert.',
  },
  {
    question: 'Was ist das ideale Verhältnis für einen Grundputz?',
    answer: 'Nach vitruvianischer Tradition wird für sauberen Flusssand ein Verhältnis von 1:3 verwendet (ein Teil Kalk auf drei Teile Sand). Bei Grubensand wird 1:2 empfohlen, um den Zusammenhalt des Mörtels zu gewährleisten.',
  },
  {
    question: 'Was ist Feinputz oder Glattputz?',
    answer: 'Dies ist die letzte Schicht der Wand. Es wird ein viel feinerer Sand (manchmal Marmormehl) und ein höherer Kalkanteil verwendet, um ein glattes, seidiges Finish zu erzielen, das gestrichen oder naturbelassen werden kann.',
  },
  {
    question: 'Wie lange dauert es, bis Kalkmörtel aushärtet?',
    answer: 'Luftkalk härtet durch Karbonisierung (Aufnahme von CO2 aus der Luft) aus. Der erste Abbindeprozess dauert einige Tage, aber die maximale Härte wird erst Monate später erreicht, wobei die Festigkeit im Laufe der Jahre zunimmt.',
  },
];

const howToData = [
  { name: 'Untergrund identifizieren', text: 'Prüfen Sie, ob Sie auf Stein, altem Ziegel oder Block arbeiten. Der Untergrund muss sauber und leicht feucht sein.' },
  { name: 'Korngröße des Sandes wählen', text: 'Verwenden Sie groben Sand für die Haftschicht und feinen Sand für das kosmetische Finish. Die Reinheit des Sandes bestimmt die Qualität des Mörtels.' },
  { name: 'Mischen der Komponenten', text: 'Mischen Sie Kalk und Sand trocken, bevor Sie Wasser hinzufügen. Die Konsistenz sollte plastisch, nicht flüssig sein.' },
  { name: 'Auftrag und Glätten', text: 'Tragen Sie den Mörtel mit der Kelle auf und verwenden Sie ein Reibebrett, um die Oberfläche zu glätten, sobald der Mörtel anzuziehen beginnt.' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Abhandlung über Mörtel: Die Weisheit des Vitruv', level: 2 },
    { type: 'paragraph', html: 'Marcus Vitruvius Pollio beschrieb im VII. Buch seines Werkes <em>De Architectura</em> nicht nur Techniken, sondern eine Philosophie. Er verstand, dass die Ewigkeit eines Gebäudes in seinen Verbindungen liegt. Mörtel ist nicht bloß Klebstoff; er ist das Bindegewebe. Seine Verhältnisse (1:3, 1:2, 1:1) sind das Erbe jahrhundertelanger römischer empirischer Beobachtung auf der Suche nach dem perfekten Gleichgewicht zwischen Festigkeit und Flexibilität.' },
    { type: 'title', text: 'Korngröße des Zuschlags: Der Schlüssel zur Qualität', level: 3 },
    { type: 'paragraph', html: 'Die Qualität eines Kalkmörtels hängt maßgeblich von der Korngröße des Zuschlags ab. Für das <strong>Trullissatio</strong> (Grundputz) wird grober Flusssand von 2-5 mm verwendet. Für das <strong>Arenato</strong> (Zwischenputz) gewaschener Mittelsand von 0,5-2 mm. Für das <strong>Marmorato</strong> (Feinputz) Marmormehl unter 0,5 mm.' },
    { type: 'title', text: 'Der Reiz der mechanischen Haftung', level: 3 },
    { type: 'paragraph', html: 'Die Haftung ist nicht chemisch, sondern <strong>mechanisch</strong>. Stellen Sie sich Millionen mikroskopisch kleiner Wurzeln vor. Der Mörtel muss in die Poren des Ziegels eindringen, um eine physikalische "Verzahnung" zu schaffen. Ohne Porosität gibt es keine Verankerung.' },
  ],
  ui: {
    leftTitle: 'Vitruvianisches System',
    centerTitle: 'Verfügbare Materialien',
    rightTitle: 'Geschätzte Abdeckung',
    btnCal: 'Kalk',
    btnArena: 'Sand',
    labelCalPasta: 'Sumpfkalk (1.30 kg/L)',
    labelCalPolvo: 'NHL Pulver (0.65 kg/L)',
    labelQuantity: 'Verfügbare Menge:',
    labelNeedsAlso: 'Zusätzlich benötigt:',
    labelProportion: 'Verhältnis: ',
    labelCoverage: 'Abdeckung:',
    labelThickness: 'Gesamtstärke:',
    labelLayers: 'Schichten:',
    labelWasteFactor: 'Abfallfaktor: 20%',
    layersSingular: 'Lage',
    layersPlural: 'Lagen',
    layersSingularShort: 'Lage',
    layersPluralShort: 'Lagen',
    materialCal: 'Kalk',
    materialArena: 'Sand',
    materialMarmol: 'Marmor',
    phaseDescTrullissatio: 'Rauher Grundputz. 2 Lagen à 15mm. Verhältnis 1:3 (Kalk:Flusssand).',
    phaseDescArenato: 'Zwischenschicht. 2 Lagen à 8mm. Verhältnis 1:2 (Kalk:Gewaschener Sand).',
    phaseDescMarmorato: 'Feinfunish. 1 Doppellage à 4mm. Verhältnis 1:1 (Kalk:Marmormehl).',
    granulometryTitle: 'Korngröße des Zuschlags',
    grainTitleCoarse: 'Grobsand',
    grainSubtitleCoarse: 'Flusssand',
    grainUsageCoarse: 'Grundputz',
    grainTitleMedium: 'Mittelsand',
    grainSubtitleMedium: 'Gewaschener Sand',
    grainUsageMedium: 'Zwischenputz',
    grainTitleFine: 'Feinpulver',
    grainSubtitleFine: 'Marmormehl',
    grainUsageFine: 'Feinputz',
    specSize: 'Größe:',
    specUse: 'Verwendung:',
    specDensity: 'Dichte:',
  },
};
