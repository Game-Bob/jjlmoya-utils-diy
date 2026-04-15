import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'epoxyharts-kalkylator';
const title = 'Epoxyharts kalkylator: Exakt blandning och volym';
const description = 'Beräkna den exakta mängden epoxyharts och härdare som behövs för dina projekt. Undvik slöseri vid river tables, smycken och gjutformar.';

const faqData = [
  {
    question: 'Varför är den exakta proportionen så viktig vid epoxyarbete?',
    answer: 'Till skillnad från andra blandningar torkar inte epoxyharts genom avdunstning, utan genom en kemisk reaktion (polymerisation). Om det finns för mycket harts eller härdare blir reaktionen ofullständig, vilket lämnar biten klibbig, mjuk eller med permanenta bubblor.',
  },
  {
    question: 'Vad är skillnaden mellan förhållande i vikt vs volym?',
    answer: 'Många hartser blandas 2:1 i volym men 100:45 i vikt eftersom härdaren oftast är mer kompakt. Använd alltid den skala som tillverkaren anger och använd om möjligt en digitalvåg för maximal precision.',
  },
  {
    question: 'Hur undviker jag bubblor vid blandning?',
    answer: 'Blanda långsamt med konstanta cirkelrörelser i minst 3 minuter och skrapa noga av bägarens väggar. Låt blandningen vila ett par minuter innan du häller så att bubblorna kan stiga till ytan.',
  },
  {
    question: 'Vad är pot life (bearbetningstid)?',
    answer: 'Det är den tid du har på dig att arbeta med blandningen innan den börjar härda (gelatineras). På sommaren eller vid stora volymer minskar denna tid drastiskt på grund av den exoterma reaktionen (värmeutveckling).',
  },
];

const howToData = [
  { name: 'Mät formens dimensioner', text: 'Mät längd, bredd och djup (tjocklek) på det område du vill fylla med harts.' },
  { name: 'Ange blandningsförhållande', text: 'Kontrollera på etiketten till din produkt om förhållandet är 1:1, 2:1 eller 3:1 och om det baseras på vikt eller volym.' },
  { name: 'Väg komponenterna', text: 'Häll först i komponent A (harts) och sedan B (härdare) i en ren behållare på en digitalvåg.' },
  { name: 'Teknisk blandning', text: 'Rör om försiktigt tills blandningen är helt transparent och inga "strimmor" av olika densitet syns.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    { name: 'TotalBoat - Supportcenter och tekniska guider', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - FAQ och bruksanvisning', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guide för beräkning och blandning av epoxyharts', level: 2 },
    { type: 'paragraph', html: 'Epoxyharts är inte en färg som torkar genom avdunstning; det är en komplex <strong>exoterm kemisk reaktion</strong>. Magin sker när epoximolekylerna kedjar ihop sig med polyaminmolekylerna för att bilda en solid kristallin härdplastpolymer.' },
    { type: 'paragraph', html: 'Skillnaden mellan ett hållbart konstverk och en klibbig katastrof ligger i den <strong>exakta stökiometrin</strong>. Ett fel på bara 5 % i blandningsförhållandet kan förhindra härdningen permanent. Detta verktyg eliminerar matematiska gissningar så att du kan fokusera på skapandet.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Volym eller vikt?', html: '<p>Det vanligaste felet bland nybörjare är att anta att 100 ml väger 100 g. <strong>Harts är tätare än härdare.</strong></p><p>Om produkten faktablad anger "100:50 i vikt", är det INTE samma sak som "2:1 i volym". Denna kalkylator arbetar med <strong>Volym</strong> (V = L × B × D), vilket är standard för att fylla formar.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Vanliga förhållanden', html: '<ul><li><strong>1:1</strong> — Beläggningar, fernissor och snabblim.</li><li><strong>2:1</strong> — Standard. River tables, smycken och medelstora gjutningar.</li><li><strong>3:1</strong> — Industrigolv och höghårda strukturella laminat.</li></ul>' },
    ]},
    { type: 'title', text: 'Säkerhetsprotokoll och bästa praxis', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Livsviktig temperatur', html: '<p>Arbeta alltid mellan <strong>21°C och 25°C</strong>. Kyla kan stoppa reaktionen och göra biten grumlig. Överdriven värme accelererar den exoterma reaktionen farligt mycket ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Dubbelbägarmetoden', html: '<p>Lita inte på en enda blandning. Skrapa noga sidorna och botten, häll blandningen i en <strong>andra ren bägare</strong> und blanda igen. Detta säkerställer att inget okatalyserat material blir kvar.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Rektangulär',
    shapeCylinder: 'Cylindrisk',
    shapeSphere: 'Sfärisk',
    labelLength: 'Längd (cm)',
    labelWidth: 'Bredd (cm)',
    labelDiameter: 'Diameter (cm)',
    labelDepth: 'Djup (cm)',
    labelRatio: 'Blandningsförhållande (Vikt/Volym)',
    labelCustomRatio: 'Använd anpassat förhållande (A:B)',
    labelResinA: 'Harts (A)',
    labelHardenerB: 'Härdare (B)',
    labelWasteTitle: 'Säkerhetsmarginal',
    labelWasteDesc: 'Lägg till 5% extra för förluster',
    labelTotalVolume: 'Total volym',
    labelPartA: 'Del A (Harts)',
    labelPartB: 'Del B (Härdare)',
    labelVisualization: 'Visualisering',
    shapeRectLabel: 'Rektangulärt block',
    shapeCylinderLabel: 'Cylinder / Rund form',
    shapeSphereLabel: 'Hel sfär',
  },
};
