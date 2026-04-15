import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'passepartout-rechner';
const title = 'Passepartout Rechner: Ränder mit optischer Korrektur für Einrahmungen';
const description = 'Werkzeug zur Berechnung von Passepartout-Rändern mit optischer Korrektur (Bottom Weighting). Rahmen Sie Ihre Fotografien und Kunstwerke mit Galerie-Proportionen ein.';

const faqData = [
  {
    question: 'Was ist die optische Mittenkorrektur (Bottom Weighting)?',
    answer: 'Es ist ein Gestaltungsprinzip bei Einrahmungen, bei dem der untere Rand etwas breiter als die anderen gemacht wird. Dies korrigiert die optische Täuschung, die das geometrische Zentrum "abgesackt" erscheinen lässt, wenn ein Werk an der Wand hängt.',
  },
  {
    question: 'Welches Material sollte für das Passepartout verwendet werden?',
    answer: 'Für die künstlerische Konservierung sollte es säurefreier oder pH-neutraler Karton sein (Alfa-Zellulose oder Baumwolle). Billige Kartons vergilben mit der Zeit und können das Werk durch Lignin beschädigen.',
  },
  {
    question: 'Wie wähle ich die Farbe des Randes?',
    answer: 'Offwhite oder sanftes Creme sind die Standards, die nicht vom Werk ablenken. Ein dunkler Rand kann die Weißtöne einer Fotografie hervorheben, während farbige Ränder vorsichtig eingesetzt werden sollten, um nicht mit den Farbtönen des Stücks zu konkurrieren.',
  },
  {
    question: 'Was ist die ideale Randbreite?',
    answer: 'Ein professioneller Standard liegt zwischen 5 und 8 cm. Wenn der Rand zu schmal ist, wirkt das Werk "erstickt". Wenn er sehr breit ist, kann es kleinen Werken eine heroische und minimalistische Ausstrahlung verleihen.',
  },
];

const howToData = [
  { name: 'Kunstwerk messen', text: 'Messen Sie die exakte Breite und Höhe des Papiers oder der Leinwand. Ziehen Sie einige Millimeter ab, wenn das Passepartout das Bild leicht überlappen soll.' },
  { name: 'Innenmaß des Rahmens messen', text: 'Nehmen Sie die Innenmaße des Rahmens oder des Falzes, in den der Passepartout-Karton passen wird.' },
  { name: 'Optische Korrektur aktivieren', text: 'Wählen Sie die Option in unserem Rechner, wenn der untere Rand für ein professionelles Finish automatisch größer sein soll.' },
  { name: 'Karton schneiden', text: 'Verwenden Sie die berechneten Maße zum Schneiden des Fensters und des Außenmaßes, vorzugsweise mit einem 45-Grad-Schrägschnitt für eine saubere Kante.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    { name: 'ISO 9706: Permanentes Papier für Dokumente', url: 'https://www.iso.org/standard/22495.html' },
    { name: 'PPFA: Professional Picture Framers Association', url: 'https://ppfa.com/' },
    { name: 'Fine Art Trade Guild: Framing Standards', url: 'https://www.fineart.co.uk/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Die Wissenschaft der perfekten Einrahmung', level: 2 },
    { type: 'paragraph', html: 'Ein <strong>Passepartout</strong> ist nicht nur ein dekorativer Karton; es ist die Lunge, die Ihr Kunstwerk atmen lässt. Dieser Rechner hilft Ihnen, die exakten Maße für den Zuschnitt zu bestimmen, damit das Werk perfekt zentriert oder optisch ausgewogen im Rahmen platziert wird.' },
    { type: 'title', text: 'Warum die optische Mittenkorrektur?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'Die optische Täuschung der geometrischen Mitte', html: '<p>Das menschliche Auge tendiert dazu, die vertikale geometrische Mitte etwas tiefer wahrzunehmen, als sie tatsächlich ist. Rahmen Sie ein Werk exakt in der Mitte ein, wirkt es, als ob es "absinkt".</p><p>Das <strong>Bottom Weighting</strong> korrigiert diese Täuschung, indem der untere Rand etwas größer gelassen wird, was das Werk visuell anhebt.</p>' },
    { type: 'title', text: 'Konservierungsmaterialien für Passepartouts', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Säurefreier Karton für die Konservierung', html: '<p>Suchen Sie beim Kauf immer nach Begriffen wie <strong>"Acid-Free"</strong> (säurefrei) oder <strong>"Museum Quality"</strong>. Billige Kartons aus Holzschliff können vergilben und Säuren freisetzen, die Ihr Kunstwerk irreversibel schädigen (Stockflecken).</p>' },
  ],
  ui: {
    sectionTitle: 'Abmessungen',
    sectionDesc: 'Geben Sie die Maße in Zentimetern ein.',
    frameSizeTitle: 'Rahmengröße',
    artSizeTitle: 'Größe des Werks',
    labelWidth: 'Breite (cm)',
    labelHeight: 'Höhe (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Mehr unterer Rand für visuelles Gleichgewicht',
    labelOffset: 'Versatz (%)',
    errorMsg: 'Das Werk muss kleiner als der Rahmen sein.',
    labelTop: 'Oben',
    labelBottom: 'Unten',
    labelLeft: 'Links',
    labelRight: 'Rechts',
    artPlaceholder: 'Ihr Werk',
  },
};
