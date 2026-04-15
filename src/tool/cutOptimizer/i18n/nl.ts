import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'zaagplan-optimalisatie';
const title = 'Zaagplan Optimalisatie voor Latten en Platen';
const description =
  'Gratis calculator voor het optimaliseren van zaagsneden in hout, metaal of buizen. Minimaliseer afval met 1D en 2D Bin Packing algoritmes. Ideaal voor houtbewerking en metaalbewerking.';

const faqData = [
  {
    question: 'Wat is een 1D zaag-optimalisator?',
    answer:
      'Het is een tool die wiskundige algoritmes gebruikt (zoals het Bin Packing Problem) om te bepalen hoe je kleinere stukken kunt zagen uit een standaard lang stuk (lat, profiel, buis) met zo min mogelijk afval.',
  },
  {
    question: 'Waarom moet ik de zaagsnededikte (Kerf) opgeven?',
    answer:
      'Elke keer dat de zaag door het materiaal gaat, verdwijnt er een paar millimeter (meestal tussen 2mm en 4mm afhankelijk van het blad). Als je deze ruimte niet meerekent, worden de laatste stukken op je lijst korter dan gepland.',
  },
  {
    question: 'Kan ik stukken van verschillende lengtes mengen?',
    answer:
      'Ja, onze calculator accepteert elke combinatie van lengtes en aantallen. Het algoritme evalueert alle mogelijke combinaties en geeft prioriteit aan een maximale benutting van het voorraadmaterial.',
  },
  {
    question: 'Hoe sla ik mijn zaagplan op?',
    answer:
      'Zodra het geoptimaliseerd is, kun je de pagina afdrukken of een screenshot maken van het visuele schema. Dit dient als fysieke gids in de werkplaats om de volgorde van de sneden niet te verwarren.',
  },
];

const howToData = [
  {
    name: 'Basis materiaal definiëren (Stock)',
    text: 'Voer de totale lengte van de beschikbare lat of profiel in (bijv. 2400mm of 6000mm).',
  },
  {
    name: 'Zaagblad dikte instellen (Kerf)',
    text: 'Stel de millimeters in die de zaag bij elke stap verwijdert, zodat de berekening tot op de millimeter nauwkeurig is.',
  },
  {
    name: 'Gewenste stukken opgeven',
    text: 'Schrijf de lengte en het aantal van elk stuk dat je nodig hebt voor je project.',
  },
  {
    name: 'Optimalisatie uitvoeren',
    text: 'Ontvang het meest efficiënte zaagschema en het exacte percentage gegenereerd afval.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Definitieve Gids voor Zaagplan Optimalisatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De optimalisatie van zaagsneden, technisch bekend als het <strong>Cutting Stock Problem</strong>, is een van de meest fascinerende logistieke uitdagingen in de industriële techniek. Voor een project met 20 stukken en 5 voorraadstaven zijn er miljoenen mogelijke combinaties. Een computeralgoritme kan de optimale oplossing in milliseconden vinden, waardoor het gebruikelijke afval van 15% wordt gereduceerd tot minder dan 5%.',
    },
    {
      type: 'title',
      text: 'Lineaire 1D snede en 2D Plaatsnede',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Lineaire snede voor Latten en Profielen',
      html: '<p>Bij de <strong>lineaire snede (1D)</strong> vindt de optimalisatie plaats in slechts één dimensie: de lengte. De breedte van het materiaal wordt als constant verondersteld. Het is ideaal voor constructiehout (latten, balken), metalen en aluminium profielen, PVC of koperen buizen, en draadeinden.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Plaatsnede voor Planken en Platen',
      html: '<p>Bij de <strong>plaatsnede (2D)</strong> worden twee dimensies beheerd: breedte en lengte. De tool gebruikt guillotine-algoritmes, waarbij elke snede van rand tot rand gaat. Ideaal voor afgeleide platen (MDF, spaanplaat), multiplex, glas, methacrylaat en metaalplaten.</p>',
    },
    {
      type: 'title',
      text: 'De Kritieke Factor: De Zaagsnededikte (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De <strong>Kerf</strong> is het materiaal dat bij elke snede wordt verwijderd. Een standaard tafelzaagblad verbruikt tussen 3,0mm en 3,2mm per snede. Een handcirkelzaag verbruikt 1,5 tot 2,5mm. Een lasersnede in methacrylaat nauwelijks 0,1 tot 0,3mm. Het negeren van de kerf in een project met 10 sneden in latten van 2400mm kan ervoor zorgen dat je tussen de 30mm en 32mm aan bruikbaar materiaal verliest.',
    },
    {
      type: 'title',
      text: 'Het Best Fit Decreasing Algoritme',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Hoe de Optimalisator van binnen werkt',
      html: '<p>De kern van de optimalisator gebruikt de <strong>Best Fit Decreasing (BFD)</strong> strategie: eerst worden alle stukken van groot naar klein gesorteerd (grote stukken zijn moeilijker passend te krijgen). Vervolgens wordt voor elk stuk gezocht naar het bestaande restant waar het in past met zo min mogelijk overschot. Alleen als het nergens in past, wordt een nieuwe staaf gebruikt. Dit proces vermindert afval met een orde van grootte vergeleken met willekeurige selectie.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Lineair (Staven)',
    modePanelLabel: 'Paneel (Platen)',
    configTitle: 'Materiaal Configuratie',
    labelStockLength: 'Lengte Materiaal (mm)',
    labelStockWidth: 'Breedte Materiaal (mm)',
    labelKerf: 'Bladdikte / Kerf (mm)',
    cutsTitle: 'Lijst met Sneden',
    placeholderLength: 'Lengte',
    placeholderWidth: 'Breedte',
    placeholderQty: 'Aantal',
    btnRemoveTitle: 'Verwijderen',
    statStockUsed: 'Materiaal Gebruikt',
    statTotalCuts: 'Totale Sneden',
    statWaste: 'Totaal Afval',
    statEfficiency: 'Efficiëntie',
    vizTitle: 'Zaag Visualisatie',
    emptyState: 'Voeg sneden toe en druk op berekenen om het zaagplan te zien.',
    noValidCuts: 'Kon geen geldige sneden genereren. Controleer de maten.',
    noValidPanels: 'Kon geen geldige panelen genereren. Controleer of de stukken op de plaat passen.',
    stockLabel: 'Materiaal',
    panelLabel: 'Paneel',
    wasteLabel: 'Afval:',
    effLabel: 'Eff:',
  },
};
