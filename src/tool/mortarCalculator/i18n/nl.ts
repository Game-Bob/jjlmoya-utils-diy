import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mortel-calculator';
const title = 'Traditionele Kalkmortel Verhoudingen: Pleisterwerk und Afwerking';
const description = 'Gratis calculator voor kalk- en zandmortel. Krijg de exacte verhoudingen voor raapwerk, pleisterwerk en afwerklagen volgens traditionele methoden (Vitruvius).';

const faqData = [
  {
    question: 'Waarom kalk gebruiken in plaats van cement?',
    answer: 'Kalk is een "levend" en ademend materiaal dat de afvoer van waterdamp mogelijk maakt, waardoor vochtplekken door condensatie worden voorkomen. Bovendien is het flexibeler dan cement, wat de kans op scheuren in oude muren verkleint.',
  },
  {
    question: 'Wat is de ideale verhouding voor raapwerk?',
    answer: 'Volgens de Vitruviaanse traditie wordt voor schoon rivierzand een verhouding van 1:3 gebruikt (één deel kalk op drie delen zand). Voor putzand wordt 1:2 aanbevolen om de cohesie van de mortel te waarborgen.',
  },
  {
    question: 'Wat is fijnpleister of finishlaag?',
    answer: 'Dit is de laatste laag van de muur. Er wordt veel fijner zand (soms marmerpoeder) en een groter aandeel kalk gebruikt om een gladde, zijdezachte afwerking te krijgen die geverfd kan worden of natuurlijk gelaten.',
  },
  {
    question: 'Hoe lang duurt het voordat kalkmortel hard is?',
    answer: 'Luchtkalk hardt uit door carbonatatie (absorptie van CO2 uit de lucht). Het initiële hardingsproces duurt een paar dagen, maar de maximale hardheid wordt pas maanden later bereikt, waarbij het in de loop der jaren aan sterkte wint.',
  },
];

const howToData = [
  { name: 'Ondergrond identificeren', text: 'Controleer of je op steen, oude baksteen of blokken gaat werken. De ondergrond moet schoon en licht vochtig zijn.' },
  { name: 'Korrelgrootte van het zand kiezen', text: 'Gebruik grof zand voor de hechtlaag en fijn zand voor de cosmetische afwerking. De zuiverheid van het zand bepaalt de kwaliteit van de mortel.' },
  { name: 'Componenten mengen', text: 'Meng de kalk en het zand droog voordat je water toevoegt. De consistentie moet plastisch zijn, niet vloeibaar.' },
  { name: 'Aanbrengen en afwerken', text: 'Verdeel de mortel met een troffel en gebruik een schuurbord om het oppervlak egaal te maken wanneer de mortel begint aan te trekken.' },
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Traktaat over Mortels: De Wijsheid van Vitruvius', level: 2 },
    { type: 'paragraph', html: 'Marcus Vitruvius Pollio beschreef in Boek VII van zijn <em>De Architectura</em> niet alleen technieken, maar een filosofie. Hij begreep dat de eeuwigheid van een gebouw schuilt in de verbindingen. Mortel is geen loutere lijm; het is het bindweefsel. De verhoudingen (1:3, 1:2, 1:1) zijn de erfenis van eeuwen Romeinse empirische observatie, zoekend naar de perfecte balans tussen sterkte en flexibiliteit.' },
    { type: 'title', text: 'Korrelgrootte van de Toeslag: De Sleutel tot Kwaliteit', level: 3 },
    { type: 'paragraph', html: 'De kwaliteit van een kalkmortel hangt grotendeels af van de korrelgrootte van de toeslag. Voor het <strong>Trullissatio</strong> (basis raapwerk) wordt grof rivierzand van 2-5 mm gebruikt. Voor de <strong>Arenato</strong> (tussenlaag), gewassen medium zand van 0,5-2 mm. Voor de <strong>Marmorato</strong> (fijnpleister), marmerpoeder kleiner dan 0,5 mm.' },
    { type: 'title', text: 'Het Mysterie van de Mechanische Hechting', level: 3 },
    { type: 'paragraph', html: 'De hechting is niet chemisch, maar <strong>mechanisch</strong>. Stel je miljoenen microscopisch kleine wortels voor. De mortel moet diep in de poriën van de baksteen dringen om een fysieke "sleutel" te creëren. Zonder porositeit is er geen verankering.' },
  ],
  ui: {
    leftTitle: 'Vitruviaans Systeem',
    centerTitle: 'Beschikbare Materialen',
    rightTitle: 'Geschatte Dekking',
    btnCal: 'Kalk',
    btnArena: 'Zand',
    labelCalPasta: 'Kalkpasta (1.30 kg/L)',
    labelCalPolvo: 'NHL Poeder (0.65 kg/L)',
    labelQuantity: 'Beschikbare hoeveelheid:',
    labelNeedsAlso: 'Je hebt ook nodig:',
    labelProportion: 'Verhouding: ',
    labelCoverage: 'Dekking:',
    labelThickness: 'Totale dikte:',
    labelLayers: 'Lagen:',
    labelWasteFactor: 'Uitvalfactor: 20%',
    layersSingular: 'laag',
    layersPlural: 'lagen',
    layersSingularShort: 'laag',
    layersPluralShort: 'lagen',
    materialCal: 'Kalk',
    materialArena: 'Zand',
    materialMarmol: 'Marmer',
    phaseDescTrullissatio: 'Rauwe basislaag. 2 lagen van 15mm. Verhouding 1:3 (Kalk:Rivierzand).',
    phaseDescArenato: 'Tussenlaag. 2 lagen van 8mm. Verhouding 1:2 (Kalk:Gewassen zand).',
    phaseDescMarmorato: 'Fijne afwerking. 1 dubbele laag van 4mm. Verhouding 1:1 (Kalk:Marmerpoeder).',
    granulometryTitle: 'Korrelgrootte van de Toeslag',
    grainTitleCoarse: 'Grof Zand',
    grainSubtitleCoarse: 'Rivierzand',
    grainUsageCoarse: 'Basis raapwerk',
    grainTitleMedium: 'Medium Zand',
    grainSubtitleMedium: 'Gewassen Zand',
    grainUsageMedium: 'Tussenlaag',
    grainTitleFine: 'Fijn Poeder',
    grainSubtitleFine: 'Marmerpoeder',
    grainUsageFine: 'Fijnpleister',
    specSize: 'Grootte:',
    specUse: 'Gebruik:',
    specDensity: 'Dichtheid:',
  },
};
