import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'betong-bruk-kalkylator';
const title = 'Betong och brukskalkylator: Exakta mängder cement, sand och vatten';
const description =
  'Beräkna hur många säckar cement, skyfflar sand och liter vatten du behöver per m³. För fundament, plattor, murar och avjämningsmassor.';

const faqData = [
  {
    question: 'Hur många 25 kg säckar cement går det på en kubikmeter?',
    answer:
      'För en standardbetong (hållfasthetsklass C20/25) behövs cirka 14 säckar à 25 kg (350 kg) för att framställa en kubikmeter packad blandning.',
  },
  {
    question: 'Vad är starkast, betong eller bruk?',
    answer:
      'Betong (med grus) är strukturellt starkare för att bära tunga laster. Bruk (endast sand) är idealiskt för att sammanfoga stenar eller putsa ytor.',
  },
  {
    question: 'Hur många skyfflar är en kubikmeter?',
    answer:
      'Det beror på skyffelns storlek, men i allmänhet räknar man med 180-200 skyfflar sand per m³. Vår kalkylator översätter m³ till föreslagna skyfflar.',
  },
  {
    question: 'Kan jag blanda för hand utan betongblandare?',
    answer:
      'Ja, även om det kräver betydligt mer fysisk ansträngning. Det är idealiskt att göra det på en ren och vattentät yta (metallplåt eller ho) för att inte förlora vatten.',
  },
  {
    question: 'Varför spricker betong när den torkar?',
    answer:
      'Det beror ofta på brist på fukt under härdningen (snabb avdunstning av vatten) eller för mycket vatten i blandningen. Det rekommenderas att vattna betongen de efterföljande dagarna.',
  },
];

const howToData = [
  {
    name: 'Välj blandningstyp',
    text: 'Välj om du ska göra betong för fundament eller bruk för murar.',
  },
  {
    name: 'Ange volym i m³',
    text: 'Ange den totala volymen. Multiplicera längd x bredd x tjocklek.',
  },
  {
    name: 'Se mängderna',
    text: 'Se hur många säckar, skyfflar och liter du behöver köpa.',
  },
  {
    name: 'Tillämpa proportionerna',
    text: 'Följ den visuella guiden för cement, sand och grus för en perfekt blandning.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    {
      name: 'Boverkets konstruktionsregler (EKS) - Sverige',
      url: 'https://www.boverket.se/',
    },
    {
      name: 'Concrete Mix Proportioning Standards (ASTM)',
      url: 'https://store.astm.org/astm-bos-04.02.html',
    },
    {
      name: 'Guide för dosering av cementbruk',
      url: 'https://sv.wikipedia.org/wiki/Murbruk',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Doseringsguide för betong och bruk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När du står inför en renovering eller ett bygge är en av de vanligaste frågorna <strong>hur många säckar cement behöver jag för en kubikmeter betong?</strong>. Det handlar inte bara om att blanda ingredienser; den slutliga hållfastheten hos konstruktionen beror direkt på precisionen i proportionerna av cement, sand, grus och vatten. Vår kalkylator översätter industriella mått till praktiska enheter: 25 kg säckar, skyfflar och liter.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'För mycket vatten försvagar betongen',
      html: '<p>Ett mycket vanligt fel är att tillsätta för mycket vatten för att få betongen att flyta bättre. Överskottsvattnet skapar porer när det avdunstar under härdningen, vilket drastiskt minskar den slutliga hållfastheten. Den ideala konsistensen bör vara som en <strong>tjock pasta, inte flytande</strong>. Använd så lite vatten som möjligt.</p>',
    },
    {
      type: 'title',
      text: 'Standardproportioner beroende på användning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Betongdoseringen</strong> varierar beroende på användningsområde. För <strong>Betong C20/25</strong> (fundament och plattor) är proportionen 1 del cement, 2,5 delar sand och 3 delar grus. För <strong>Murbruk</strong> (murar) är det 1 del cement och 4 delar sand. För <strong>Avjämningsmassa</strong> (golv) är det 1 del cement och 3 delar sand. Betong med grus tål mer belastning; bruk med endast sand är idealiskt för sammanfogning och putsning.',
    },
    {
      type: 'title',
      text: 'Så beräknar du m³ som du behöver',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Beräkningsexempel för en platta',
      html: '<p>För en trädgårdsplatta som är 4 m lång, 3 m bred och 15 cm tjock: <strong>4 × 3 × 0,15 = 1,80 m³</strong>. Vår kalkylator utför denna operation automatiskt om du anger måtten i sektionen "Efter mått".</p><p>Kom alltid ihåg att <strong>köpa 10 % extra</strong> för att kompensera för förluster genom spill eller ojämnheter i marken.</p>',
    },
    {
      type: 'title',
      text: 'Blandningsordning och dosering per säck',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'På byggarbetsplatser pratar man ofta om en <strong>"300 kilos-blandning"</strong>: 300 kg cement för varje färdig kubikmeter betong. För korrekt blandning i betongblandare: först vattnet, sedan grus och sand (för att lösa upp klumpar), och sist cementen som tillsätts gradvis.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: '10 procents regeln för att inte stå utan material',
      html: '<p>Köp alltid <strong>10 % mer material</strong> än beräknat för att kompensera för spill, ojämnheter i terrängen eller variationer i den faktiska volymen av de fuktiga materialen. Det är mycket billigare än att behöva göra en andra beställning med bygget stående stilla.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Standardbetong',
    mixH200Hint: 'Idealisk för fundament och plattor',
    mixM40Label: 'Murbruk',
    mixM40Hint: 'För murar och skiljeväggar',
    mixM80Label: 'Stark avjämningsmassa',
    mixM80Hint: 'För golv och stark puts',
    modeDimsLabel: 'Efter mått',
    modeDirectLabel: 'Direkta m³',
    labelLength: 'Längd',
    labelWidth: 'Bredd',
    labelThickness: 'Tjocklek',
    labelVolume: 'Total volym (m³)',
    binderCementLabel: 'Cement',
    binderLimeLabel: 'Kalk',
    summaryLabel: 'Totalt att fylla:',
    resUnitSacks: 'Säckar (25kg)',
    resUnitShovels: 'Skyfflar',
    resUnitLitres: 'Liter',
    resLabelCement: 'Portlandcement',
    resLabelLime: 'Hydraulisk kalk',
    resLabelSand: 'Sand / Aggregat',
    resLabelWater: 'Dricksvatten',
    proportionsTitle: 'Proportioner för vald blandning',
    propLabelSand: 'Sand',
    propLabelGravel: 'Grus',
    adviceH200: 'Idealisk för pelare, plattor och bärande strukturer.',
    adviceM40: 'Perfekt för att mura tegel- eller blockväggar.',
    adviceM80: 'Använd detta för mycket tåliga golvytor.',
    adviceLimeH200: 'Kalkbetong är mer flexibel men tar längre tid på sig att härda.',
    priceTotalLabel: 'Uppskattad budget',
    priceSackLabel: 'Säck',
    priceSandLabel: 'Sand (m³)',
    priceDisclaimer: 'Vägledande marknadspriser. Justera efter din lokala leverantör.',
  },
};
