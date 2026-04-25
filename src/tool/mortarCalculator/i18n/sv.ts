import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'bruk-kalkylator';
const title = 'Traditionella proportioner för kalkbruk: puts och ytfinish';
const description = 'Gratis kalkylator för kalk- och sandbruk. Få exakta proportioner för grundning, grovputs och finputs enligt traditionella metoder (Vitruvius).';

const faqData = [
  {
    question: 'Varför använda kalk istället för cement?',
    answer: 'Kalk är ett "levande" material som andas och gör det möjligt för vattenånga att evakueras, vilket förhindrar fuktproblem från kondens. Dessutom är det mer flexibelt än cement, vilket minskar risken för sprickor i gamla murar.',
  },
  {
    question: 'Vad är den ideala proportionen för en grundputs?',
    answer: 'Enligt den vitruvianska traditionen används för ren flodsand proportionen 1:3 (en del kalk till tre delar sand). För grusgravssand rekommenderas 1:2 för att säkerställa brukets sammanhållning.',
  },
  {
    question: 'Vad är finputs eller ytfinish?',
    answer: 'Det är väggens sista lager. Man använder en mycket finare sand (ibland marmormjöl) och en högre andel kalk för att få en slät och silkeslen yta som kan målas eller lämnas naturlig.',
  },
  {
    question: 'Hur lång tid tar det för kalkbruk att härda?',
    answer: 'Luftkalk härdar genom karbonatisering (genom att absorbera CO2 från luften). Den initiala härdningsprocessen tar några dagar, men maximal hårdhet uppnås först månader senare och styrkan ökar under årens lopp.',
  },
];

const howToData = [
  { name: 'Identifiera underlaget', text: 'Kontrollera om du ska arbeta på sten, gammalt tegel eller block. Underlaget måste vara rent och lätt fuktigt.' },
  { name: 'Välj sandens kornstorlek', text: 'Använd grov sand för fästlagret och fin sand för den kosmetiska finishen. Sandens renhet avgör brukets kvalitet.' },
  { name: 'Blandning av komponenter', text: 'Blanda kalk och sand torrt innan du tillsätter vatten. Konsistensen ska vara plastisk, inte flytande.' },
  { name: 'Applicering och putsning', text: 'Stryk ut bruket med en putslev och använd en rivbräda för att jämna till ytan när bruket börjar "dra" (härdna på ytan).' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Traktat om bruk: Vitruvius visdom', level: 2 },
    { type: 'paragraph', html: 'Marcus Vitruvius Pollio beskrev i Bok VII av sitt verk <em>De Architectura</em> inte bara tekniker utan en hel filosofi. Han förstod att en byggnads evighet ligger i dess fogar. Bruket är inte bara ett lim; det är den bindande vävnaden. Dess proportioner (1:3, 1:2, 1:1) är arvet från århundraden av romerska empiriska observationer i sökandet efter den perfekta balansen mellan styrka och flexibilitet.' },
    { type: 'title', text: 'Ballastens kornstorlek: Nyckeln till kvalitet', level: 3 },
    { type: 'paragraph', html: 'Kvaliteten på ett kalkbruk beror till stor del på ballastens kornstorlek. För <strong>Trullissatio</strong> (grundputs) används grov flodsand på 2-5 mm. För <strong>Arenato</strong> (grovputs), tvättad mellansand på 0,5-2 mm. För <strong>Marmorato</strong> (finputs), marmormjöl mindre än 0,5 mm.' },
    { type: 'title', text: 'Mysteriet med mekanisk vidhäftning', level: 3 },
    { type: 'paragraph', html: 'Vidhäftningen är inte kemisk, den är <strong>mekanisk</strong>. Tänk dig miljontals mikroskopiska rötter. Bruket måste tränga in i teglets porer för att skapa en fysisk "nyckel". Utan porositet finns ingen förankring.' },
  ],
  ui: {
    leftTitle: 'Vitruvianskt system',
    centerTitle: 'Tillgängligt material',
    rightTitle: 'Beräknad täckning',
    btnCal: 'Kalk',
    btnArena: 'Sand',
    labelCalPasta: 'Kalkpasta (1.30 kg/L)',
    labelCalPolvo: 'NHL-pulver (0.65 kg/L)',
    labelQuantity: 'Tillgänglig mängd:',
    labelNeedsAlso: 'Du behöver också:',
    labelProportion: 'Proportion: ',
    labelCoverage: 'Täckning:',
    labelThickness: 'Total tjocklek:',
    labelLayers: 'Lager:',
    labelWasteFactor: 'Spillfaktor: 20%',
    layersSingular: 'strykning',
    layersPlural: 'strykningar',
    layersSingularShort: 'strykn.',
    layersPluralShort: 'strykn.',
    materialCal: 'Kalk',
    materialArena: 'Sand',
    materialMarmol: 'Marmor',
    phaseDescTrullissatio: 'Rå grundning. 2 strykningar på 15mm. Proportion 1:3 (Kalk:Flodsand).',
    phaseDescArenato: 'Grovputs. 2 strykningar på 8mm. Proportion 1:2 (Kalk:Tvättad sand).',
    phaseDescMarmorato: 'Finputs. 1 dubbelstrykning på 4mm. Proportion 1:1 (Kalk:Marmormjöl).',
    granulometryTitle: 'Ballastens kornstorlek',
    grainTitleCoarse: 'Grovsand',
    grainSubtitleCoarse: 'Flodsand',
    grainUsageCoarse: 'Grundputs',
    grainTitleMedium: 'Mellansand',
    grainSubtitleMedium: 'Tvättad sand',
    grainUsageMedium: 'Grovputs',
    grainTitleFine: 'Fint pulver',
    grainSubtitleFine: 'Marmormjöl',
    grainUsageFine: 'Finputs',
    specSize: 'Storlek:',
    specUse: 'Användning:',
    specDensity: 'Densitet:',
  },
};
