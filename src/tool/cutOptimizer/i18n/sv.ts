import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kapoptimering';
const title = 'Kapoptimering för reglar och skivor';
const description =
  'Gratis kalkylator för att optimera kapning av trä, metall eller rör. Minimera spillet med 1D- och 2D-bin packing-algoritmer. Idealisk för snickeri, metallarbete och renovering.';

const faqData = [
  {
    question: 'Vad är kapoptimering 1D?',
    answer:
      'Det är ett verktyg som använder matematiska algoritmer (som Bin Packing Problem) för att fastställa hur mindre delar kan kapas ur en längre standardlängd (regel, profil, rör) med minsta möjliga spill.',
  },
  {
    question: 'Varför inkludera sågklingans tjocklek (Kerf)?',
    answer:
      'Varje gång sågen kapar materialet försvinner några millimeter (vanligtvis mellan 2 mm och 4 mm beroende på klingan). Om du inte räknar med detta utrymme kommer de sista delarna i din lista att bli kortare än planerat.',
  },
  {
    question: 'Kan jag blanda delar med olika längder?',
    answer:
      'Ja, vår kalkylator accepterar valfri kombination av längder och antal. Algoritmen utvärderar alla möjliga kombinationer och prioriterar maximalt utnyttjande av lagermaterialet.',
  },
  {
    question: 'Hur sparar jag min kapningsplan?',
    answer:
      'När optimeringen har utförts kan du skriva ut sidan eller ta en skärmdump av det visuella schemat. Detta fungerar som en fysisk guide i verkstaden så att du inte blandar ihop ordningen på kappen.',
  },
];

const howToData = [
  {
    name: 'Definiera basmaterialet (Stock)',
    text: 'Ange den totala längden på den tillgängliga regeln eller profilen (t.ex. 2400 mm eller 6000 mm).',
  },
  {
    name: 'Ställ in klingans tjocklek (Kerf)',
    text: 'Justera de millimetrar som sågen tar bort vid varje kapning så att beräkningen blir millimeterprecision.',
  },
  {
    name: 'Lista de önskade delarna',
    text: 'Skriv längden och antalet av varje del som du behöver för ditt projekt.',
  },
  {
    name: 'Kör optimeringen',
    text: 'Få det mest effektiva kapschemat och den exakta procentandelen spill som skapas.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Den ultimata guiden för kapoptimering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kapoptimering, tekniskt känt som <strong>Cutting Stock Problem</strong>, är en av de mest fascinerande logistiska utmaningarna inom industriteknik. För ett projekt med 20 delar och 5 lagerstänger finns det miljontals möjliga kombinationer. En datoralgoritm kan hitta den optimala lösningen på millisekunder och minska det vanliga spillet från 15 % till mindre än 5 %.',
    },
    {
      type: 'title',
      text: 'Linjär 1D-kapning och 2D-skivoptimering',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Linjär kapning för reglar och profiler',
      html: '<p>Vid <strong>linjär kapning (1D)</strong> sker optimeringen i endast en dimension: längden. Materialets bredd antas vara konstant. Det är idealiskt för trävirke (reglar, bjälkar), metall- och aluminiumprofiler, rör av PVC eller koppar samt gängstänger.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Skivoptimering för skivor och plåt',
      html: '<p>Vid <strong>skivoptimering (2D)</strong> hanteras två dimensioner: bredd och längd. Verktyget använder giljotinliknande algoritmer där varje kapning går från kant till kant. Idealiskt för skivmaterial (MDF, spånskiva), plywood, glas, plexiglas och metallplåt.</p>',
    },
    {
      type: 'title',
      text: 'Den kritiska faktorn: Sågklingans tjocklek (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kerf</strong> är materialet som försvinner vid varje kapning. En standardklinga för bordssåg förbrukar mellan 3,0 mm och 3,2 mm per kapning. En handcirkelsåg förbrukar 1,5 till 2,5 mm. En laserskärning i plexiglas förbrukar knappt 0,1 till 0,3 mm. Att ignorera kerf i ett projekt med 10 kapningar i reglar på 2400 mm kan göra att du förlorar mellan 30 mm och 32 mm användbart material.',
    },
    {
      type: 'title',
      text: 'Best Fit Decreasing-algoritmen',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Så fungerar optimeraren på insidan',
      html: '<p>Kärnan i optimeraren använder strategin <strong>Best Fit Decreasing (BFD)</strong>: först sorteras alla delar från största till minsta längd (stora delar är svårare att få plats med). Sedan letar den för varje del efter det befintliga spillstycket där den får plats med minsta möjliga återstående del. Endast om den inte får plats i något spillstycke används en ny råvara. Denna process minskar spillet markant jämfört med slumpmässigt val.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Linjär (Längder)',
    modePanelLabel: 'Panel (Skivor)',
    configTitle: 'Materialkonfiguration',
    labelStockLength: 'Materiallängd (mm)',
    labelStockWidth: 'Materialbredd (mm)',
    labelKerf: 'Bladtjocklek / Kerf (mm)',
    cutsTitle: 'Kaplista',
    placeholderLength: 'Längd',
    placeholderWidth: 'Bredd',
    placeholderQty: 'Antal',
    btnRemoveTitle: 'Ta bort',
    statStockUsed: 'Använt material',
    statTotalCuts: 'Totalt antal kapningar',
    statWaste: 'Totalt spill',
    statEfficiency: 'Effektivitet',
    vizTitle: 'Kapningsvisualisering',
    emptyState: 'Lägg till kapningar och tryck på beräkna för att se kapningsplanen.',
    noValidCuts: 'Kunde inte generera giltiga kapningar. Kontrollera måtten.',
    noValidPanels: 'Kunde inte generera giltiga skivor. Kontrollera att delarna får plats på skivan.',
    stockLabel: 'Material',
    panelLabel: 'Panel',
    wasteLabel: 'Spill:',
    effLabel: 'Effekt:',
  },
};
