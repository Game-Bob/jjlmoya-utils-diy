import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'klei-krimp-calculator';
const title = 'Klei Krimp Calculator: Exacte Afmetingen voor Keramiek';
const description =
  'Bereken de krimp van klei tijdens het drogen en bakken. Ontwerp keramiek met de exacte uiteindelijke afmetingen.';

const faqData = [
  {
    question: 'Waarom krimpt klei?',
    answer:
      'Klei krimpt voornamelijk door waterverlies. Eerst vindt het drogen plaats (verdamping van water tussen de deeltjes) en daarna het bakken (verwijdering van chemisch gebonden water en sintering van de deeltjes).',
  },
  {
    question: 'Wat is een normaal krimpstpercentage?',
    answer:
      'Dit hangt af van de kleisoort. Aardewerk krimpt meestal tussen de 5-10%, terwijl steengoed en porselein een krimp van 12-15% kunnen hebben door hun hogere mate van verglazing.',
  },
  {
    question: 'Hoe meet ik de krimp van mijn eigen klei?',
    answer:
      'Maak een testplaatje van exact 10 cm. Laat het drogen en meet het op (droogkrimp). Bak het op de uiteindelijke temperatuur en meet het opnieuw (totale krimp). Het verschil geeft je het exacte percentage.',
  },
  {
    question: 'Wat gebeurt er als mijn werkstuk scheurt tijdens het drogen?',
    answer:
      'Dit duidt meestal op een te snel of ongelijkmatig droogproces. Dunne delen verliezen eerder water dan dikke delen, wat spanningen veroorzaakt. Dek werkstukken af met plastic om het proces te vertragen.',
  },
];

const howToData = [
  {
    name: 'Het werkstuk nat meten',
    text: 'Meet de exacte afmetingen van je werkstuk direct na het draaien of boetseren, wanneer het nog al het vocht bevat.',
  },
  {
    name: 'Krimpcoëfficiënt invoeren',
    text: 'Zoek op de verpakking van je klei naar het totale krimpstpercentage (drogen + bakken) dat door de fabrikant wordt opgegeven.',
  },
  {
    name: 'Verwachte uiteindelijke afmetingen verkrijgen',
    text: 'Gebruik de calculator om te weten hoe groot je werkstuk zal zijn nadat het uit de oven komt en plan je deksels of passende onderdelen.',
  },
  {
    name: 'Omgekeerde berekening voor doelen',
    text: 'Als je wilt dat je werkstuk uiteindelijk exact X cm is, gebruik dan de omgekeerde berekening om te weten hoe groot het op de draaischijf moet zijn.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De Fysica van Klei: Krimp en Expansie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Klei is een levend materiaal dat gedurende het hele keramische proces van grootte verandert. Vanaf het moment dat je een nat werkstuk vormt totdat het uit de oven komt, kan het tussen de 8% en 15% van zijn oorspronkelijke grootte verliezen. Het berekenen van deze krimp is essentieel om werkstukken te creëren met de exacte afmetingen die je nodig hebt.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Fases van Krimp',
          html: '<p><strong>1. Drogen (Nat → Droog):</strong> Bij het verliezen van water komen de kleideeltjes dichter bij elkaar te liggen. Dit is de grootste krimp (4-8%). Dikke wanden kunnen scheuren als ze te snel drogen.</p><p><strong>2. Bakken (Droog → Biscuit):</strong> Tussen 900-1000°C ondergaat de klei onomkeerbare chemische veranderingen. Extra krimp van 2-4%. Het werkstuk wordt poreus maar stevig.</p><p><strong>3. Verglazing (Hoge Temperatuur):</strong> Op 1200-1300°C verglast de klei. Uiteindelijke krimp van 1-3%. Steengoed en porselein bereiken hun maximale dichtheid.</p>',
        },
        {
          type: 'card',
          title: 'Variabelen van Invloed',
          html: '<ul><li><strong>Kleisoort:</strong> Rode klei krimpt minder (8-10%) dan porselein (12-15%).</li><li><strong>Wanddikte:</strong> Dunne wanden krimpen gelijkmatiger dan dikke wanden.</li><li><strong>Baktemperatuur:</strong> Hoe hoger de temperatuur, hoe groter de krimp en verglazing.</li><li><strong>Chamottegehalte:</strong> Het toevoegen van chamotte (gemalen gebakken klei) vermindert de krimp.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Praktische Toepassingen',
      level: 2,
    },
    {
      type: 'title',
      text: 'Ontwerp van Mallen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als je een kopje nodig hebt met een uiteindelijke diameter von 8 cm, en je klei krimpt 12%, dan moet je de mal maken op <strong>9,1 cm</strong>. Deze omgekeerde berekening is cruciaal bij serieproductie.',
    },
    {
      type: 'title',
      text: 'Deksels en Assemblages',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer je onderdelen maakt die in elkaar moeten passen (theepot + deksel, pot + deksel), moeten beide van dezelfde klei zijn gemaakt en samen worden gebakken om te garanderen dat ze evenveel krimpen. Een verschil van 1% kan de pasvorm al verpesten.',
    },
    {
      type: 'title',
      text: 'Monumentale Sculpturen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bij grote werkstukken kan het verschil in krimp tussen dikke en dunne secties scheuren veroorzaken. Ervaren keramisten compenseren dit door wanden dikker te laten in zones waarvan ze weten dat ze meer zullen krimpen.',
    },
  ],
  ui: {
    labelInitialSize: 'Initiële Grootte (mm)',
    labelShrinkage: 'Krimpstpercentage (%)',
    labelLow: 'Laag (Terracotta)',
    labelMedium: 'Gemiddeld (Steengoed)',
    labelHigh: 'Hoog (Porselein)',
    presetTerracota: 'Terracotta (8%)',
    presetGres: 'Steengoed (12%)',
    presetPorcelana: 'Porselein (15%)',
    labelResult: 'Resultaat',
    labelFinalSize: 'Uiteindelijke Grootte:',
    labelLoss: 'Totaal Verlies:',
    tipText:
      'Om de benodigde initiële grootte te berekenen voor een specifieke uiteindelijke grootte, deel je de gewenste grootte door (1 - krimp/100).',
    labelInitialBadge: 'Initieel:',
    labelFinalBadge: 'mm eind',
    labelLossBadge: 'Verlies:',
    labelInitialArea: 'Initieel Gebied',
    labelFinalArea: 'Eindgebied',
  },
};
