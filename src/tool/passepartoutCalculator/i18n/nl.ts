import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'passepartout-rekenmachine';
const title = 'Passepartout Calculator: Marges met Optische Correctie voor Inlijsten';
const description = 'Tool voor het berekenen van passepartout-marges met optische correctie (bottom weighting). Lijst je foto\'s en kunst in met galerie-proporties.';

const faqData = [
  {
    question: 'Wat is de optische middencorrectie (Bottom Weighting)?',
    answer: 'Het is een principe bij het inlijsten waarbij de onderste marge iets breder wordt gemaakt dan de andere. Dit corrigeert de optische illusie waardoor het geometrische midden "gezakt" lijkt als je naar een opgehangen werk kijkt.',
  },
  {
    question: 'Van welk materiaal moet het passepartout zijn?',
    answer: 'Voor artistieke conservering moet het zuurvrij of pH-neutraal karton zijn (alfa-cellulose of katoen). Goedkoop karton vergeelt met de tijd en kan het werk beschadigen door lignine.',
  },
  {
    question: 'Hoe kies ik de kleur van de marge?',
    answer: 'Gebroken wit of zacht crème zijn de standaarden die niet afleiden van het werk. Een donkere marge kan de witte tinten in een foto benadrukken, terwijl een gekleurde marge voorzichtig moet worden gebruikt om niet te concurreren met de tinten van het stuk.',
  },
  {
    question: 'Wat is de ideale margebreedte?',
    answer: 'Een professionele standaard ligt tussen de 5 en 8 cm. Als de marge te smal is, lijkt het werk "verstikt". Als de marge heel breed is, kan dit kleine werken een heroïsche en minimalistische uitstraling geven.',
  },
];

const howToData = [
  { name: 'Kunstwerk opmeten', text: 'Meet de exacte breedte en hoogte van het papier of doek dat je gaat inlijsten. Trek er een paar millimeter vanaf als je wilt dat de passepartout de afbeelding een klein beetje overlapt.' },
  { name: 'Binnenmaat van de lijst meten', text: 'Neem de binnenmaten van de lijst of de sponning waar het karton van de passepartout in komt te vallen.' },
  { name: 'Optische correctie activeren', text: 'Vink de optie aan in onze calculator als je wilt dat de onderste marge automatisch groter wordt voor een professionele afwerking.' },
  { name: 'Karton snijden', text: 'Gebruik de resulterende maten om het gat (venster) en de buitenkant van het karton te snijden, bij voorkeur met een 45-graden snijder voor een strakke schuine rand.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'De Wetenschap van het Perfecte Inlijsten', level: 2 },
    { type: 'paragraph', html: 'Een <strong>Passepartout</strong> is niet alleen decoratief karton; het zijn de longen die je kunstwerk laten ademen. Deze calculator helpt je bij het bepalen van de exacte afmetingen voor het snijden van je karton, zodat het werk perfect gecentreerd of optisch uitgebalanceerd in de lijst hangt.' },
    { type: 'title', text: 'Waarom "Bottom Weighting"?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'De optische illusie van het geometrische midden', html: '<p>Het menselijk oog heeft de neiging om het verticale geometrische midden iets lager waar te nemen dan het in werkelijkheid is. Als je een werk exact in het midden inlijst, lijkt het alsof het "naar beneden valt".</p><p><strong>Bottom Weighting</strong> corrigeert deze illusie door de onderste marge iets groter te maken, waardoor het werk visueel wordt opgetild zodat het perfect gecentreerd lijkt.</p>' },
    { type: 'title', text: 'Conserveringsmaterialen voor Passepartouts', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Zuurvrij karton voor conservering', html: '<p>Zoek bij het kiezen van je karton altijd naar termen als <strong>"Acid-Free"</strong> of <strong>"Museum Quality"</strong>. Goedkoop karton van houtpulp kan na verloop van tijd vergelen en zuren afgeven die je kunstwerk "verbranden" (foxing), waardoor het onherstelbaar beschadigd raakt.</p>' },
  ],
  ui: {
    sectionTitle: 'Afmetingen',
    sectionDesc: 'Voer de maten in centimeters in.',
    frameSizeTitle: 'Grootte van de Lijst',
    artSizeTitle: 'Grootte van het Werk',
    labelWidth: 'Breedte (cm)',
    labelHeight: 'Hoogte (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Pas meer ondermarge toe voor visuele balans',
    labelOffset: 'Offset (%)',
    errorMsg: 'De grootte van het werk moet kleiner zijn dan de lijst.',
    labelTop: 'Boven',
    labelBottom: 'Onder',
    labelLeft: 'Links',
    labelRight: 'Rechts',
    artPlaceholder: 'Jouw Kunst',
  },
};
