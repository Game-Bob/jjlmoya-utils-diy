import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lerkrympskalkylator';
const title = 'Lerkrympskalkylator: Exakta dimensioner för keramik';
const description =
  'Beräkna lerkrympning under torkning och bränning. Designa keramikföremål med exakta slutdimensioner.';

const faqData = [
  {
    question: 'Varför krymper lera?',
    answer:
      'Lera krymper främst på grund av vattenförlust. Först sker torkning (avdunstning av vatten mellan partiklar) och sedan bränning (avlägsnande av kemiskt bundet vatten och sintring av partiklar).',
  },
  {
    question: 'Vad är en normal krympprocent?',
    answer:
      'Det beror på lermassan. Lergods krymper vanligtvis mellan 5-10 %, medan stengods och porslin kan nå 12-15 % på grund av sin högre grad av vitrifiering (förglasning).',
  },
  {
    question: 'Hur mäter jag krympningen på min egen lera?',
    answer:
      'Skapa en testplatta på exakt 10 cm. Låt den torka och mät den (torkkrympning). Bränn den till sluttemperaturen och mät igen (totalkrympning). Skillnaden ger dig den exakta procentsatsen.',
  },
  {
    question: 'Vad händer om mitt föremål spricker vid torkning?',
    answer:
      'Det tyder oftast på en för snabb eller ojämn torkprocess. Tunna delar förlorar vatten snabbare än tjocka, vilket skapar spänningar. Täck föremålen med plast för att sakta ner processen.',
  },
];

const howToData = [
  {
    name: 'Mät föremålet när det är vått',
    text: 'Registrera de exakta måtten på ditt föremål direkt efter drejning eller modellering, när det fortfarande har all sin fukt.',
  },
  {
    name: 'Ange krympkoefficient',
    text: 'Leta på lerans förpackning efter den totala krympprocenten (torkning + bränning) som tillhandahålls av tillverkaren.',
  },
  {
    name: 'Få förväntade slutdimensioner',
    text: 'Använd kalkylatorn för att veta hur stort ditt föremål kommer att vara efter ugnen och planera passningar eller lock därefter.',
  },
  {
    name: 'Omvänd beräkning för mål',
    text: 'Om du behöver att ditt föremål ska mäta exakt X cm i slutet, använd den omvända beräkningen för att veta vilken storlek det ska ha på drejskivan.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
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
      text: 'Lerans fysik: Krympning och expansion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lera är ett levande material som ändrar storlek under hela keramikprocessen. Från det ögonblick du formar ett vått föremål tills det kommer ut ur ugnen kan det förlora mellan 8 % och 15 % av sin ursprungliga storlek. Att beräkna denna krympning är grundläggande för att skapa föremål med de exakta dimensioner du behöver.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Krympfaser',
          html: '<p><strong>1. Torkning (Vått → Torrt):</strong> Genom att förlora vatten kommer lerpartiklarna närmare varandra. Detta är den största krympningen (4-8 %). Tjockväggiga föremål kan spricka om de torkar för snabbt.</p><p><strong>2. Bränning (Torrt → Skröj):</strong> Mellan 900-1000 °C genomgår leran oåterkalleliga kemiska förändringar. Ytterligare krympning på 2-4 %. Föremålet blir poröst men hållbart.</p><p><strong>3. Vitrifiering (Hög temperatur):</strong> Vid 1200-1300 °C förglasas leran. Slutlig krympning på 1-3 %. Stengods och porslin når sin maximala densitet.</p>',
        },
        {
          type: 'card',
          title: 'Variabler som påverkar',
          html: '<ul><li><strong>Lertyp:</strong> Rödlerkrympning är mindre (8-10 %) än porslin (12-15 %).</li><li><strong>Väggtjocklek:</strong> Tunna väggar krymper mer enhetligt än tjocka.</li><li><strong>Bränntemperatur:</strong> Ju högre temperatur, desto större blir krympningen och vitrifieringen.</li><li><strong>Chamottinnehåll:</strong> Att tillsätta chamotte (krossad, redan bränd lera) minskar krympningen.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Praktiska tillämpningar',
      level: 2,
    },
    {
      type: 'title',
      text: 'Design av formar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om du behöver en kopp med en slutdiameter på 8 cm, och din lera krymper 12 %, måste du göra formen <strong>9,1 cm</strong>. Denna omvända beräkning är kritisk vid serieproduktion.',
    },
    {
      type: 'title',
      text: 'Lock och montering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När du skapar delar som ska passa ihop (tekanna + lock, burk + lock), måste båda göras av samma lera och brännas tillsammans för att garantera att de krymper lika mycket. En skillnad på bara 1 % kan förstöra passformen.',
    },
    {
      type: 'title',
      text: 'Monumental skulptur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I stora föremål kan skillnaden i krympning mellan tjocka och tunna sektioner orsaka sprickor. Erfarna keramiker kompenserar genom att lämna väggarna tjockare i zoner som de vet kommer att krympa mer.',
    },
  ],
  ui: {
    labelInitialSize: 'Ursprunglig storlek (mm)',
    labelShrinkage: 'Krympprocent (%)',
    labelLow: 'Låg (Terrakotta)',
    labelMedium: 'Mellan (Stengods)',
    labelHigh: 'Hög (Porslin)',
    presetTerracota: 'Terrakotta (8%)',
    presetGres: 'Stengods (12%)',
    presetPorcelana: 'Porslin (15%)',
    labelResult: 'Resultat',
    labelFinalSize: 'Slutlig storlek:',
    labelLoss: 'Total förlust:',
    tipText:
      'För att beräkna den ursprungliga storleken som behövs för att få en specifik slutstorlek, dela den önskade storleken med (1 - krympning/100).',
    labelInitialBadge: 'Ursprunglig:',
    labelFinalBadge: 'mm slutlig',
    labelLossBadge: 'Förlust:',
    labelInitialArea: 'Ursprungligt område',
    labelFinalArea: 'Slutområde',
  },
};
