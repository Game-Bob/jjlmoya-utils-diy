import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'gipsplaat-rekenmachine';
const title = 'Gipsplaat Berekenen: Wandprofielen, Platen en Voegmiddel';
const description = 'Professionele materiaalcoolculator voor gipsplaat scheidingswanden en voorzetwanden. Bereken nauwkeurig gipsplaten, C-staanders, U-liggers, schroeven, voegband en pasta.';

const faqData = [
  {
    question: 'Hoe bereken ik hoeveel gipsplaten ik nodig heb voor een scheidingswand?',
    answer: 'Vermenigvuldig de wandlengte met de plafondhoogte om de wandoppervlakte te berekenen. Vermenigvuldig bij dubbelzijdige wanden met 2; bij dubbele beplating aan beide zijden met 4. Deel de totale oppervlakte door de nuttige oppervlakte van een plaat (2,4 m2 voor een plaat van 120x200 cm) en tel er 10% snijverlies bij op.',
  },
  {
    question: 'Wanneer kies ik voor een staanderafstand van 40 cm of 60 cm?',
    answer: 'Een standaard staanderafstand van 60 cm is geschikt voor normale droge binnenwanden tot 3,0 m hoogte. Stap over op 40 cm h.o.h. bij zwaar tegelwerk, vochtige ruimtes (badkamer, keuken), akoestische wanden of wandhoogtes boven 3,0 meter.',
  },
  {
    question: 'Welk type gipsplaat moet ik kiezen per toepassing?',
    answer: 'Gebruik Standaard Wit (Type A) voor woon- en slaapkamers; Hydro Groen (Type H1) voor badkamers en keukens; Knik/Kwaliteit Roze (Type F) voor brandwerende zones; en Akoestisch Blauw voor geluidsisolatie.',
  },
  {
    question: 'Hoeveel gipsschroeven zijn er per gipsplaat nodig?',
    answer: 'Reken op circa 30 gipsschroeven (3,5x25 mm) per plaat van 120x200 cm bij enkelzijdige beplating. Plaats schroeven om de 25 cm langs de randen en om de 30 cm op de tussenstaanders.',
  },
  {
    question: 'Waarom is akoestisch band onder U-profielen verplicht?',
    answer: 'Zelfklevend PE-schuimband ontkoppelt de stalen profielen mechanisch van vloer en plafond, waardoor contactgeluid en trillingen niet doorgegeven worden.',
  },
];

const howToData = [
  { name: 'Wandafmetingen Invoeren', text: 'Vul de totale wandlengte en plafondhoogte in m of ft in.' },
  { name: 'Frame en Beplating Configureren', text: 'Kies de staanderafstand (40 cm of 60 cm), enkele of dubbele beplating en 1 of 2 zijden.' },
  { name: 'Materiaallijst en CAD-tekening Controleren', text: 'Bekijk de gedetailleerde stuklijst van profielen, schroeven, voegband en spachtelmasse.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Technische Dimensenering van Metal Stud Scheidingswanden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het bouwen van lichte scheidingswanden met gipsplaten vereist het nauwkeurig berekenen van het stalen frame (C-staanders en U-liggers) en het verspringend aanbrengen van de plaatvoegen volgens de norm EN 520.',
    },
    {
      type: 'title',
      text: 'Regels voor Staanderafstand: 40 cm vs 60 cm h.o.h.',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De h.o.h.-afstand bepaalt de stijfheid van de wand. De <strong>standaard 60 cm afstand</strong> sluit aan op platen van 120 cm breed. De <strong>40 cm afstand</strong> is vereist voor zwaar tegelwerk en wanden hoger dan 3,00 meter.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Verspringende Voegen en Schroefpatroon',
      html: '<p>Voorkom kruisnaden. Laat de plaatnaden minimaal 40 cm verspringen. Bevestig de platen met gipsschroeven 3,5x25 mm om de <strong>25 cm aan de randen</strong> en <strong>30 cm in het midden</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Snijverlies en Voegpasta Verbruik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reken altijd <strong>10% snijverlies</strong> voor profielen en platen. Het afvoegen kost ca. 0,8 kg voegpasta per vierkante meter wandopslag.',
    },
  ],
  ui: {
    unitSystemLabel: 'Maatsysteem',
    unitMetric: 'Metrisch (m, cm, kg)',
    unitImperial: 'Imperiaal (ft, in, lb)',

    paramLengthLabel: 'Wandlengte',
    paramHeightLabel: 'Plafondhoogte',
    paramSpacingLabel: 'Staanderafstand (h.o.h.)',
    paramSpacing40Metric: '40 cm (Zware Belasting)',
    paramSpacing60Metric: '60 cm (Standaard)',
    paramSpacing40Imperial: '16 in (Zware Belasting)',
    paramSpacing60Imperial: '24 in (Standaard)',
    paramLayersLabel: 'Aantal Plaatlagen',
    paramSingleLayer: 'Enkele Beplating',
    paramDoubleLayer: 'Dubbele Beplating',
    paramSidesLabel: 'Zijdes Bekleed',
    paramDoubleSided: '2 Zijden (Scheidingswand)',
    paramSingleSided: '1 Zijde (Voorzetwand)',
    paramBoardTypeLabel: 'Type Gipsplaat',
    boardTypeStandard: 'Standaard (Type A)',
    boardTypeMoisture: 'Hydro / Vochtbestendig (Type H1)',
    boardTypeFire: 'Brandwerend (Type F)',
    boardTypeAcoustic: 'Akoestisch (Type A)',
    paramWasteLabel: 'Snijverlies Marges',

    summaryWallArea: 'Netto Wandoppervlakte',
    summaryBoardArea: 'Totale Pllaatoppervlakte',

    resBoardsLabel: 'Gipsplaten',
    resBoardsUnit: 'stuks',
    resStudsLabel: 'C-Staanders (Verticaal)',
    resStudsUnit: 'stuks',
    resTracksLabel: 'U-Liggers (Horizontaal)',
    resTracksUnit: 'lengtes',
    resDrywallScrewsLabel: 'Gipsschroeven',
    resDrywallScrewsUnit: 'stuks',
    resFramingScrewsLabel: 'Profielschroeven',
    resFramingScrewsUnit: 'stuks',
    resJointTapeLabel: 'Voegband / Gaasband',
    resJointTapeUnit: 'lengte',
    resJointCompoundLabel: 'Voegpasta / Voegvuller',
    resJointCompoundUnit: 'gewicht',
    resAcousticBandLabel: 'Akoestisch Schuimband',
    resAcousticBandUnit: 'lengte',

    diagramWallTitle: 'CAD Wandvooraanzicht',
    diagramStudLegend: 'C-Staanders',
    diagramTrackLegend: 'U-Liggers',
    diagramBoardLegend: 'Plaatverspringing',
    diagramModeStructure: 'Metal Stud Frame',
    diagramModeBoard: 'Gipsbeplating',
  },
};
