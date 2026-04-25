import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'beton-mortel-calculator';
const title = 'Beton en Mortelcalculator: Exacte Hoeveelheden Cement, Zand en Water';
const description =
  'Bereken hoeveel zakken cement, scheppen zand en liters water je nodig hebt per m³. Voor funderingen, vloeren, muren en dekvloeren. Technische doseergids.';

const faqData = [
  {
    question: 'Hoeveel zakken cement van 25kg gaan er in een kubieke meter?',
    answer:
      'Voor een standaard beton (sterkteklasse C20/25) heb je ongeveer 14 zakken van 25kg (350kg) nodig om één kubieke meter verdicht mengsel te maken.',
  },
  {
    question: 'Wat is sterker, beton of mortel?',
    answer:
      'Beton (met grind) is structureel sterker om grote belastingen te dragen. Mortel (alleen zand) is ideaal voor het metselen van stenen of het stucen van oppervlakken.',
  },
  {
    question: 'Hoeveel scheppen gaan er in een kubieke meter?',
    answer:
      'Dit hangt af van de grootte van de schep, maar over het algemeen rekent men met 180-200 scheppen zand per m³. Onze calculator vertaalt de m³ naar voorgestelde scheppen.',
  },
  {
    question: 'Kan ik het mengsel met de hand maken zonder betonmolen?',
    answer:
      'Ja, hoewel het veel meer fysieke inspanning vereist. Het is ideaal om dit op een schone en waterdichte ondergrond te doen (metalen plaat oder bak) om geen water te verliezen.',
  },
  {
    question: 'Waarom scheurt beton tijdens het drogen?',
    answer:
      'Dit komt vaak door een gebrek aan vocht tijdens het uitharden (snelle verdamping van water) of te veel water in het mengsel. Het wordt aanbevolen om het beton in de dagen na het storten te bevochtigen.',
  },
];

const howToData = [
  {
    name: 'Kies het Type Mengsel',
    text: 'Selecteer of je beton gaat maken voor funderingen of mortel voor muren.',
  },
  {
    name: 'Geef het Volume in m³ op',
    text: 'Voer het totale volume in. Vermenigvuldig lengte x breedte x dikte.',
  },
  {
    name: 'Raadpleeg de Hoeveelheden',
    text: 'Bekijk hoeveel zakken, scheppen en liters je moet kopen.',
  },
  {
    name: 'Pas de Verhoudingen toe',
    text: 'Volg de visuele gids voor cement, zand en grind voor een perfect mengsel.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
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
      text: 'Doseergids voor Beton en Mortel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij een verbouwing of nieuwbouw is een van de meest gestelde vragen: <strong>hoeveel zakken cement heb ik nodig voor een kubieke meter beton?</strong>. Het gaat niet alleen om het mengen van ingrediënten; de uiteindelijke sterkte van de constructie hangt direct af van de precisie in de verhoudingen van cement, zand, grind en water. Onze calculator vertaalt industriële maten naar praktische bouwplaats-eenheden: zakken van 25kg, scheppen en liters.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'Te veel water verzwakt het beton',
      html: '<p>Een veelvoorkomende fout is het toevoegen van te veel water zodat het beton beter vloeit. Overtollig water creëert poriën bij verdamping tijdens het uitharden, wat de uiteindelijke sterkte drastisch vermindert. De ideale consistentie moet zijn als die van een <strong>dikke pasta, niet vloeibaar</strong>. Gebruik zo min mogelijk water.</p>',
    },
    {
      type: 'title',
      text: 'Standaard Verhoudingen naar Gebruik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De <strong>dosering van beton</strong> varieert per gebruik. Voor <strong>Beton C20/25</strong> (funderingen en vloeren) is de verhouding 1 deel cement, 2.5 delen zand en 3 delen grind. Voor <strong>Metselmortel</strong> (muren) is het 1 deel cement en 4 delen zand. Voor <strong>Vloermortel</strong> (dekvloeren) is het 1 deel cement en 3 delen zand. Beton met grind kan meer belasting dragen; mortel met alleen zand is ideaal voor metselen en stucen.',
    },
    {
      type: 'title',
      text: 'Hoe bereken je de m³ die je nodig hebt',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Voorbeeld van Berekening voor een Vloer',
      html: '<p>Voor een tuinvloer van 4m lang, 3m breed en 15cm dik: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. Onze calculator voert deze bewerking automatisch uit als je de afmetingen invoert in de sectie "Op Maat".</p><p>Vergeet niet om altijd <strong>10% extra te kopen</strong> om verliezen door morsen of variaties in het terrein te compenseren.</p>',
    },
    {
      type: 'title',
      text: 'Mengvolgorde en Dosering per Zak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Op de bouw spreekt men vaak over een <strong>"300 kg mengsel"</strong>: 300kg cement per kubieke meter gereed beton. Voor correct mengen in een betonmolen: eerst het water, dan grind en zand (om klonten te breken), en als laatste het cement geleidelijk toevoegen.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'De 10% regel om niet tekort te komen',
      html: '<p>Koop altijd <strong>10% meer materiaal</strong> dan berekend om verliezen door morsen, onregelmatigheden in het terrein of variaties in het werkelijke volume van de vochtige aggregaten te compenseren. Het is veel goedkoper dan een tweede bestelling moeten plaatsen terwijl de bouw stilligt.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Standaard Beton',
    mixH200Hint: 'Ideaal voor funderingen en vloeren',
    mixM40Label: 'Metselmortel',
    mixM40Hint: 'Voor muren en tussenwanden',
    mixM80Label: 'Sterke Dekvloer',
    mixM80Hint: 'Voor vloeren en sterk stucwerk',
    modeDimsLabel: 'Op Maat',
    modeDirectLabel: 'Directe m³',
    labelLength: 'Lengte',
    labelWidth: 'Breedte',
    labelThickness: 'Dikte',
    labelVolume: 'Totaal Volume (m³)',
    binderCementLabel: 'Cement',
    binderLimeLabel: 'Kalk',
    summaryLabel: 'Totaal te vullen:',
    resUnitSacks: 'Zakken (25kg)',
    resUnitShovels: 'Scheppen',
    resUnitLitres: 'Liter',
    resLabelCement: 'Portlandcement',
    resLabelLime: 'Hydraulische Kalk',
    resLabelSand: 'Zand / Aggregaten',
    resLabelWater: 'Drinkwater',
    proportionsTitle: 'Verhoudingen van het Geselecteerde Mengsel',
    propLabelSand: 'Zand',
    propLabelGravel: 'Grind',
    adviceH200: 'Ideaal voor kolommen, vloeren en dragende structuren.',
    adviceM40: 'Perfect voor het optrekken van bakstenen of blokken muren.',
    adviceM80: 'Gebruik dit voor zeer sterke vloerafwerkingen.',
    adviceLimeH200: 'Kalkbeton is flexibeler maar doet er langer over om uit te harden.',
    priceTotalLabel: 'Geschat Budget',
    priceSackLabel: 'Zak',
    priceSandLabel: 'Zand (m³)',
    priceDisclaimer: 'Indicatieve marktprijzen. Pas aan volgens je lokale leverancier.',
  },
};
