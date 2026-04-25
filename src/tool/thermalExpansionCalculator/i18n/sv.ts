import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkylator-termisk-expansion';
const title = 'Kalkylator för termisk expansion av balkar och strukturer';
const description = 'Beräkna hur mycket en balk eller struktur expanderar vid temperaturförändringar. Tekniskt verktyg för ingenjörer och DIY. Inkluderar expansionskoefficienter per material.';

const faqData = [
  {
    question: 'Vad är den linjära utvidgningskoefficienten?',
    answer: 'Det är en fysikalisk egenskap hos material som anger hur mycket det expanderar för varje grad Celsius som dess temperatur ökar. Den mäts i 1/°C eller °C⁻¹.',
  },
  {
    question: 'Varför är det viktigt att beräkna expansionen i balkar?',
    answer: 'Om en balk inte har utrymme att expandera (dilatationsfogar) genereras massiva interna spänningar som kan deformera strukturen, spräcka betong eller till och med orsaka en kollaps.',
  },
  {
    question: 'Expanderar trä lika mycket i alla riktningar?',
    answer: 'Nej. Trä är ett anisotropt material. Det expanderar väldigt lite längs fibern men betydligt i tvärriktningen (bredd och tjocklek).',
  },
  {
    question: 'Vilken temperatur ska jag använda som startvärde?',
    answer: 'Du bör använda temperaturen vid tidpunkten för installation eller konstruktion. Slutvärdet bör vara den maximalt förväntade temperaturen under dess livslängd.',
  },
];

const howToData = [
  { name: 'Mät ursprunglig längd', text: 'Ange längden på balken eller materialet i meter.' },
  { name: 'Välj material', text: 'Välj mellan metaller, byggmaterial eller träslag för att tillämpa dess specifika koefficient.' },
  { name: 'Definiera temperaturområdet', text: 'Ange starttemperatur och maximal förväntad temperatur för att beräkna temperaturskillnaden.' },
  { name: 'Analysera tillväxten', text: 'Observera den totala utvidgningen i millimeter och den resulterande slutlängden för att planera för lämpliga fogar.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vad är termisk expansion och varför påverkar det strukturer', level: 2 },
    { type: 'paragraph', html: '<strong>Termisk expansion</strong> är den fysikaliska process där ett material ökar sin längd som svar på en ökning av dess temperatur. I konstruktionsvärlden är detta en kraft som kan spräcka betong, deformera stålbalkar och böja tågräls.' },
    { type: 'title', text: 'Formeln för linjär expansion', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formel för linjär expansion', html: '<p>Expansionen av ett strukturelement beräknas med: <code>ΔL = L₀ · α · ΔT</code>. Där <strong>ΔL</strong> är den totala tillväxten, <strong>L₀</strong> är den ursprungliga längden, <strong>α</strong> är materialets utvidgningskoefficient (i °C⁻¹) och <strong>ΔT</strong> är temperaturskillnaden.</p>' },
  ],
  ui: {
    configTitle: 'Konfiguration',
    labelMaterial: 'Material',
    groupMetals: 'Metaller',
    groupConstruction: 'Konstruktion',
    groupWood: 'Trä och polymerer',
    matSteel: 'Stål (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Koppar (17 ppm/°C)',
    matIron: 'Järn (11 ppm/°C)',
    matConcrete: 'Betong (12 ppm/°C)',
    matBrick: 'Tegel (9 ppm/°C)',
    matGlass: 'Glas (9 ppm/°C)',
    matWoodFiber: 'Träfiber (5 ppm/°C)',
    matWoodTransversal: 'Trä tvärriktning (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metallurgi',
    catConstruction: 'Byggnation',
    catWood: 'Trä och polymerer',
    labelLength: 'Ursprunglig längd (m)',
    labelTempStart: 'Starttemp (°C)',
    labelTempEnd: 'Max temp (°C)',
    deltaLabel: 'Temperaturskillnad (ΔT)',
    vizTitle: 'Simulering av expansion',
    resultGrowthLabel: 'Total tillväxt (ΔL)',
    resultFinalLabel: 'Slutlängd',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Risk för knäckning',
    jointTitle: 'Minsta fog',
    riskLow: 'Låg',
    riskModerate: 'Måttlig',
    riskCritical: 'Kritisk',
    tipDefault: 'Se tillverkarens manual för exakta koefficienter för speciella legeringar.',
    tipSteel: 'Stål och betong har nästan identiska koefficienter, vilket gör att armerad betong fungerar utan interna sprickor.',
    tipAluminum: 'Aluminium expanderar nästan dubbelt så mycket som stål. I metallpartier kräver detta elastiska fogmassor.',
    tipGlass: 'Glas och stål expanderar nästan lika, vilket är avgörande för design av stora glasfasader.',
    tipConcrete: 'Betongens koefficient är mycket lik stålets, vilket är anledningen till att hybridstrukturer är så stabila.',
    tipWood: 'Trä expanderar lite av värme, men mycket av fukt. I långa strukturer är fiberriktningen mycket stabil.',
    tipPvc: 'PVC har en väldigt hög expansion. Det kräver specialfogar för att absorbera rörelsen utan att gå sönder.',
  },
};
