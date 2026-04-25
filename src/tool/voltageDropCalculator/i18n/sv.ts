import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkylator-spanningsfall';
const title = 'Kalkylator för spänningsfall och kabelarea';
const description = 'Tekniskt verktyg för att undvika brända kablar. Beräkna nödvändig kabelarea för 12V, 24V och 230V-installationer baserat på avstånd och effekt.';

const faqData = [
  {
    question: 'Vad är spänningsfall och varför spelar det roll?',
    answer: 'Det är den förlust av spänning som uppstår när elektricitet färdas genom en kabel. Om kabeln är för tunn eller för lång förlorar du spänning. Resultat: svagt ljus, motorer som inte startar eller kablar som blir farligt varma.',
  },
  {
    question: 'Vilken kabelarea behöver jag för 12V på 10 meter?',
    answer: 'Det beror på effekten. För 12V och 10A på 10m behöver du minst 2,5mm². För 20A behöver du 6mm². Vid lågspänning (12V/24V) är fallet mycket mer kritiskt än vid 230V.',
  },
  {
    question: 'Kan jag använda 1,5mm² kabel till hela min installation?',
    answer: 'Nej. 1,5mm² är för belysningskretsar (max 10A). För uttag behöver du 2,5mm². För spis eller tvättmaskin behöver du 4mm² eller 6mm². Att använda för tunn kabel är farligt och kan orsaka brand.',
  },
  {
    question: 'Vilket är det maximalt tillåtna spänningsfallet?',
    answer: 'I bostadsinstallationer (230V): max 3% för belysning, 5% för andra ändamål. Vid 12V/24V (husbilar, solar): inte mer än 3% totalt. Större fall innebär förlust av effektivitet och risk för överhettning.',
  },
];

const howToData = [
  { name: 'Definiera systemspänning', text: 'Välj om din installation är 12V, 24V (solar/camper) eller 230V (bostad).' },
  { name: 'Ange strömstyrka', text: 'Skriv in Ampere (A) eller Watt (W) som apparaten i änden av kabeln förbrukar.' },
  { name: 'Mät kabelavstånd', text: 'Ange kabellängden (enkel väg) i meter från strömkällan till förbrukaren.' },
  { name: 'Välj ledarmaterial', text: 'Välj koppar (standard) eller aluminium för att få exakt beräkning av resistivitet.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Komplett guide till spänningsfall', level: 2 },
    { type: 'paragraph', html: 'Oavsett om du bygger en husbil, designar en solcellsanläggning eller drar kablar i trädgården finns det en osynlig fiende: <strong>spänningsfall</strong>. Det är inte bara en teknisk detalj; det är skillnaden mellan ett kylskåp som kyler och ett som stängs av, eller mellan en säker installation och en brandrisk.' },
    { type: 'title', text: 'Formeln för spänningsfall', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Exakt beräkning med Ohms lag', html: '<p>Formeln är <strong>ΔV = (2 × L × I × ρ) / S</strong>, där L är längden enkel väg, I är strömmen, ρ är resistiviteten (0,0178 för koppar) och S är kabelarean.</p>' },
  ],
  ui: {
    heroDropLabel: 'Totalt spänningsfall',
    heroVoltsUnit: 'Volt',
    heroPctLoss: '% förlust',
    heroEffLabel: 'Effektivitet',
    statusExcellent: 'Utmärkt',
    statusAcceptable: 'Acceptabel',
    statusCritical: 'Kritisk',
    fieldVoltage: 'Spänning',
    fieldMaterial: 'Material',
    materialCopper: 'Koppar',
    materialAlum: 'Alum.',
    fieldLoad: 'Belastning',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watt',
    unitAmps: 'Ampere',
    fieldLength: 'Kabellängd (Enkel väg)',
    unitMeters: 'meter',
    fieldSection: 'Kabelarea',
    sectionInfo: 'Rekommenderat',
  },
};
