import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'ontgravingsvolume-gronduitzetting-rekenmachine';
const title = 'Ontgravingsvolume Rekenmachine en Gronduitzetting Schatting';
const description = 'Bereken het vast volume van een ontgraving en schat het losse volume na het graven met een marge voor zand, tuingrond, klei en grind.';

const faq = [
  {
    question: 'Wat is het verschil tussen vast volume (vaste kubieke meters) en los volume?',
    answer: 'Het vaste volume is de inhoud van de grond in ongestoorde staat voor het graven. Het losse volume is de geschatte ruimte die de afgegraven grond inneemt inclusief de uitzettingsfactor.',
  },
  {
    question: 'Hoe wordt het volume van een ontgraving berekend?',
    answer: 'Vermenigvuldig lengte, breedte en diepte. Een ontgraving van 4 meter bij 3 meter en 0,5 meter diep heeft bijvoorbeeld een vast volume van 6 kubieke meter.',
  },
  {
    question: 'Waarom heeft klei een bredere uitzettingsmarge?',
    answer: 'Het gedrag van klei is afhankelijk van vochtgehalte en dichtheid. Deze rekenmachine gebruikt een bredere marge omdat het volume na ontgraven sterker varieert.',
  },
  {
    question: 'Vervangt deze rekenmachine een milieukundig of geotechnisch onderzoek?',
    answer: 'Nee. Het resultaat is een schatting voor transport en containerplanning. Raadpleeg een deskundige bij funderingen, grondwater of vervuilde grond.',
  },
];

const howTo = [
  { name: 'Vul de afmetingen in', text: 'Voer de lengte, breedte en diepte van de graafwerkzaamheden in.' },
  { name: 'Kies het grondtype', text: 'Selecteer zand, tuingrond, klei of grind om de bijbehorende uitzettingsfactor toe te passen.' },
  { name: 'Plan de afvoer en opslag', text: 'Gebruik het vaste volume voor de ontgraving en de losse volumemarge voor het bestellen van afvalcontainers of vrachtwagens.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq,
  bibliographyTitle: 'Bronvermelding en technische nota\'s',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Twee volumematen voor uw bouw- of tuinproject', level: 2 },
    { type: 'paragraph', html: 'Het <strong>vaste volume</strong> (ook wel bank volume genoemd) is de exacte inhoud van de uitgraving in vaste, ongestoorde staat: lengte vermenigvuldigd met breedte en diepte. Het <strong>losse volume</strong> geeft aan hoeveel ruimte de losgegraven grond inneemt op de vrachtwagen, in de afvalcontainer of op de tijdelijke opslagbult. Door deze twee volumematen strikt gescheiden te houden, voorkomt u dat de logistieke planning en transportberekeningen op een verkeerde grondtoestand worden gebaseerd.' },
    { type: 'title', text: 'Gebruik de losse volumemarge voor containerplanning', level: 3 },
    { type: 'paragraph', html: 'Selecteer de meest passende grondsoort in de rekenmachine en vergelijk de minimale en maximale waarden van het losse volume met de beschikbare capaciteit van uw afvoercontainers, vrachtwagens of aanhangers. De marge wordt bewust visueel weergegeven omdat de graafmethode, het vochtgehalte en de compactheid van de bodem het uiteindelijke resultaat aanzienlijk beïnvloeden.' },
    { type: 'tip', title: 'Uitzettingsfactoren zijn richtwaarden', html: 'Het vochtgehalte, grondwaterstanden en de mate van natuurlijke verdichting bepalen het uiteindelijke volume van de losse grond. Bij grote funderingswerken, keermuren of verontreinigde grond is een geotechnisch rapport altijd noodzakelijk.' },
    { type: 'title', text: 'Controleer aannames vooraf', level: 3 },
    { type: 'paragraph', html: 'Bij twijfel over de exacte grondsoort op de bouwlocatie kunt u het beste een proefberekening maken met twee aannemelijke profielen en uitgaan van de hoogste transportbehoefte totdat de exacte bodemgesteldheid bekend is.' },
  ],
  ui: {
    unitSystemLabel: 'Maatsysteem',
    unitMetric: 'Metrisch',
    unitImperial: 'Imperiaal',
    onboarding: 'Voer de afmetingen in van de ontgraving, kies de grondsoort en gebruik beide uitkomsten voor uw plannen.',
    dimensionLabel: 'Afmetingen ontgraving',
    lengthLabel: 'Lengte',
    widthLabel: 'Breedte',
    depthLabel: 'Diepte',
    soilLabel: 'Grondsoort',
    soilSand: 'Zand',
    soilTopsoil: 'Tuingrond / Zwarte grond',
    soilClay: 'Klei',
    soilGravel: 'Grind',
    soilSandBand: '10 tot 15% uitzetting',
    soilTopsoilBand: '15 tot 25% uitzetting',
    soilClayBand: '25 tot 40% uitzetting',
    soilGravelBand: '15 tot 25% uitzetting',
    bankVolumeLabel: 'Vast volume',
    bankVolumeHelp: 'Grond in ongestoorde staat',
    looseVolumeLabel: 'Los volume',
    looseVolumeHelp: 'Geschat volume na ontgraving',
    expansionLabel: 'Toegepaste gronduitzetting',
    expansionHelp: 'Marge voor de gekozen grondsoort',
    sceneTitle: 'Van uitgraving tot opslagbult',
    sceneBank: 'in de grond',
    sceneLoose: 'los materiaal',
    sceneGround: 'maaiveld',
    sceneCut: 'gegraven put',
    interpretationTitle: 'Hoe de cijfers te gebruiken.',
    interpretationText: 'Het eerste getal is de inhoud van het gat. De marge geeft aan hoeveel ruimte de losse grond inneemt.',
    warning: 'Alleen ter indicatie voor afvoer en opslag. Vocht en graafmethode beïnvloeden het werkelijke losse volume.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'lange uitzetting',
    soilStatusMedium: 'gemiddelde uitzetting',
    soilStatusHigh: 'hoge uitzetting',
    soilStatusLabel: 'Planningsmarge',
  },
};
