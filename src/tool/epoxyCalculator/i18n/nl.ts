import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'epoxyhars-calculator';
const title = 'Epoxyhars Calculator: Exacte Mengverhouding en Volume';
const description = 'Bereken de exacte hoeveelheid epoxyhars und harder die nodig is voor je projecten. Voorkom verspilling bij rivertabels, sieraden en mallen.';

const faqData = [
  {
    question: 'Waarom is de exacte verhouding bij hars zo belangrijk?',
    answer: 'In tegenstelling tot andere mengsels, droogt epoxyhars niet door verdamping, maar door een chemische reactie (polymerisatie). Als er hars of harder overblijft, zal de reactie onvolledig zijn, waardoor het werkstuk plakkerig, zacht of met blijvende bellen achterblijft.',
  },
  {
    question: 'Wat is de verhouding in gewicht vs volume?',
    answer: 'Veel harsen worden 2:1 gemengd in volume maar 100:45 in gewicht omdat de harder meestal een hogere dichtheid heeft. Gebruik altijd de schaal die de fabrikant aangeeft en gebruik, indien mogelijk, een digitale weegschaal voor maximale precisie.',
  },
  {
    question: 'Hoe voorkom ik bellen bij het mengen?',
    answer: 'Meng langzaam met constante cirkelvormige bewegingen gedurende ten minste 3 minuten, waarbij je de wanden van de beker goed afschraapt. Laat het mengsel een paar minuten rusten voordat je het giet, zodat de bellen naar de oppervlakte kunnen stijgen.',
  },
  {
    question: 'Wat is de verwerkingstijd (Pot Life)?',
    answer: 'Dit is de tijd die je hebt om met het mengsel te werken voordat het begint uit te harden (geleren). In de zomer of bij grote volumes wordt deze tijd drastisch verkort door de exotherme reactie (warmteontwikkeling).',
  },
];

const howToData = [
  { name: 'Afmetingen van de mal meten', text: 'Meet de lengte, breedte und diepte (dikte) van het gebied dat je met hars wilt vullen.' },
  { name: 'Mengverhouding invoeren', text: 'Kijk op het etiket van je product of de mengverhouding 1:1, 2:1 of 3:1 is en of dit gebaseerd is op gewicht of volume.' },
  { name: 'Componenten afwegen', text: 'Giet eerst component A (hars) en dan B (harder) in een schone container op een digitale weegschaal.' },
  { name: 'Technisch mengen', text: 'Roer voorzichtig totdat het mengsel volledig transparant is en er geen "slierten" van verschillende dichtheid meer te zien zijn.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Gids voor Berekening en Mengen van Epoxyhars', level: 2 },
    { type: 'paragraph', html: 'Epoxyhars is geen verf die droogt door verdamping; het is een complexe <strong>exotherme chemische reactie</strong>. De magie gebeurt wanneer de epoxidemoleculen zich ketenen met die van polyamine om een solide kristallijn thermohardend polymeer te vormen.' },
    { type: 'paragraph', html: 'Het verschil tussen een duurzaam kunstwerk en een plakkerige ramp ligt in de <strong>exacte stoichiometrie</strong>. Een fout van slechts 5% in de mengverhouding kan de uitharding permanent verhinderen. Deze tool elimineert de wiskundige gissingen, zodat jij je kunt concentreren op de creatie.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Volume of Gewicht?', html: '<p>De #1 fout van beginners is de aanname dat 100ml 100g weegt. <strong>Hars is dichter dan de harder.</strong></p><p>Als het technisch informatieblad van je product "100:50 per gewicht" zegt, is dat NIET hetzelfde als "2:1 per volume". Deze calculator werkt met <strong>Volume</strong> (V = L × B × H), de standaard voor het vullen van mallen.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Veelvoorkomende Verhoudingen', html: '<ul><li><strong>1:1</strong> — Coatings, vernissen en snellijmen.</li><li><strong>2:1</strong> — Standaard. River tabels, sieraden en middelgrote mallen.</li><li><strong>3:1</strong> — Industriële vloeren und structurele laminaten van hoge hardheid.</li></ul>' },
    ]},
    { type: 'title', text: 'Veiligheidsprotocol en Best Practices', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Vitale Temperatuur', html: '<p>Werk altijd tussen de <strong>21°C en 25°C</strong>. Kou kan de reactie stoppen, waardoor het werkstuk troebel wordt. Overmatige hitte versnelt de exotherme reactie gevaarlijk ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Dubbele Beker Techniek', html: '<p>Vertrouw niet op één enkele menging. Schraap de zijkanten en bodem goed af, giet het mengsel in een <strong>tweede schone beker</strong> en meng opnieuw. Dit zorgt ervoor dat er geen ongekatalyseerd materiaal achterblijft.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Rechthoekig',
    shapeCylinder: 'Cilindrisch',
    shapeSphere: 'Sferisch',
    labelLength: 'Lengte (cm)',
    labelWidth: 'Breedte (cm)',
    labelDiameter: 'Diameter (cm)',
    labelDepth: 'Diepte (cm)',
    labelRatio: 'Mengverhouding (Gewicht/Volume)',
    labelCustomRatio: 'Gebruik aangepaste verhouding (A:B)',
    labelResinA: 'Hars (A)',
    labelHardenerB: 'Harder (B)',
    labelWasteTitle: 'Veiligheidsmarge',
    labelWasteDesc: 'Voeg 5% extra toe voor verliezen',
    labelTotalVolume: 'Totaal Volume',
    labelPartA: 'Deel A (Hars)',
    labelPartB: 'Deel B (Katalysator)',
    labelVisualization: 'Visualisatie',
    shapeRectLabel: 'Rechthoekig Blok',
    shapeCylinderLabel: 'Cilinder / Ronde Mal',
    shapeSphereLabel: 'Volledige Bol',
  },
};
