import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'trap-calculator';
const title = 'Trap Calculator: Ontwerp en Uitvoering';
const description = 'Bereken de exacte maten van je trap: optrede, aantrede, hoek en materialen. Houd je aan de Wet van Blondel en voorkom bouwfouten.';

const faqData = [
  {
    question: 'Wat is de Wet van Blondel?',
    answer: 'Het is een formule die stelt dat om een trap comfortabel te maken, de som van twee optreden en één aantrede tussen 62 en 64 cm moet liggen (2 × optrede + aantrede = 63 cm). Deze wet is gebaseerd op de gemiddelde menselijke paslengte.',
  },
  {
    question: 'Wat is de maximale hoogte van een traptrede?',
    answer: 'In woningen wordt aangeraden om niet hoger te gaan dan 18-19 cm. Voor openbare ruimtes is het maximum meestal 17,5 cm volgens de voorschriften. Hogere treden zijn vermoeiender en kunnen gevaarlijk zijn.',
  },
  {
    question: 'Hoe reken ik als ik weinig ruimte heb?',
    answer: 'Als de horizontale ruimte beperkt is, moet je het aantal treden verhogen (de optrede verkleinen) of een steilere helling accepteren. De calculator helpt je de optimale balans te vinden.',
  },
  {
    question: 'Wat omvat de betonberekening?',
    answer: 'Het totale volume beton wordt berekend op basis van de treden plus de schuine trapsteek (de schuine plaat die de treden ondersteunt). Als je dit volume negeert, bestel je te weinig beton.',
  },
  {
    question: 'Waarom is de cumulatieve uitzetting belangrijk?',
    answer: 'Elke trede afzonderlijk meten leidt tot cumulatieve fouten. De cumulatieve uitzetting garandeert dat alle treden exact dezelfde hoogte hebben, wat risico\'s vermijdt en het comfort verhoogt.',
  },
];

const howToData = [
  { name: 'Hoogteverschil meten', text: 'Meet het totale hoogteverschil (H) vanaf de afgewerkte vloer beneden tot de afgewerkte vloer boven. Dit is het basisgegeven voor de hele berekening.' },
  { name: 'Beschikbare lengte invoeren', text: 'Optioneel: Als je ruimtebeperkingen hebt, voer dan de beschikbare horizontale lengte in. Gebruik 0 voor een vrije berekening.' },
  { name: 'Aantal treden aanpassen', text: 'De calculator stelt een aantal treden voor, maar je kunt dit aanpassen. Let op de Blondel-indicator: deze moet groen zijn (62-64 cm) voor maximaal comfort.' },
  { name: 'Bouwparameters definiëren', text: 'Geef de dikte van de plaat, afwerkingen, betonsterkte en breedte van de trap op. Deze gegevens beïnvloeden de uiteindelijke materiaalhoeveelheden.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Geometrisch Ontwerp van Trappen: De Wet van Blondel', level: 2 },
    { type: 'paragraph', html: 'Het comfort van een trap hangt af van de menselijke paslengte. Je lichaam verwacht een voorspelbaar ritme bij het traplopen. De Wet van Blondel stelt dat 2 optreden + 1 aantrede = 62-64 cm de standaard is voor maximaal comfort en veiligheid.' },
    { type: 'title', text: 'Controle over Constructie en Materialen', level: 3 },
    { type: 'paragraph', html: 'Voor een professionele uitvoering is het essentieel om de betonplaat (het schuine vlak dat de treden draagt) mee te nemen. Het negeren van dit volume leidt tot onvoldoende beton en slechte uitvoering. De calculator integreert deze berekening automatisch.' },
    { type: 'title', text: 'Uitzetten en de Cumulatieve Fout', level: 3 },
    { type: 'paragraph', html: 'In de bouw is de millimeterfout de grootste vijand. Als je elke trede afzonderlijk meet, kan de som van kleine foutjes ervoor zorgen dat de laatste trede 5 cm hoger of lager uitvalt dan de eerste.' },
  ],
  ui: {
    labelGeometry: 'Geometrie en Ruimte',
    labelTotalHeight: 'Totale Hoogte (H)',
    labelAvailableLength: 'Beschikbare Lengte (L)',
    labelAvailableLengthHint: 'Gebruik 0 voor vrije berekening.',
    labelNumSteps: 'Aantal Treden',
    labelOptimize: 'Optimaliseren (18cm)',
    labelWork: 'Bouw en Installatie',
    labelSlabThickness: 'Plaatdikte (e)',
    labelFinishThickness: 'Afwerking',
    labelCeilingHeight: 'Plafondhoogte',
    labelStairWidth: 'Breedte Trap',
    labelConcreteStrength: 'Betonsterkte',
    optionH150: 'C12/15 (Mager)',
    optionH200: 'C16/20 (Woning)',
    optionH250: 'C20/25 (Constructief)',
    labelRiser: 'Optrede',
    labelTread: 'Aantrede',
    labelSlope: 'Helling',
    labelRealAdvance: 'Werkelijke Lengte',
    labelLayoutTable: 'Uitzetten en Uitvoering',
    colStep: 'Trede',
    colConcreteHeight: 'H. Beton',
    colFinishedHeight: 'H. Gereed',
    colAdvance: 'Voortgang',
    adjustedNote: 'Aangepast',
    labelMaterials: 'Materialen en Volume',
    labelTotalConcrete: 'Totaal Beton:',
    labelCement: 'Cement (zakken/25kg):',
    labelSand: 'Zand nodig:',
    unitM3: 'm³',
    unitBags: 'zakken',
    unitLiters: 'L',
    btnShare: 'Delen',
    btnPrint: 'PDF Printen',
    statusOptimalComfort: 'Optimaal Comfort',
    statusMarginLimit: 'Grenswaarde',
    statusCriticalDesign: 'Kritisch Ontwerp',
    statusRiserError: 'Tredenfout',
    msgInvalidValues: 'Ongeldige waarden',
    msgInsufficientSpace: 'ONVOLDOENDE RUIMTE',
    msgDangerousTread: 'Een aantrede van {val}cm is gevaarlijk.',
    msgBlondelValue: 'Blondel-maat: {val}cm.',
    msgOptimalStep: 'Comfortabele pas: {val}cm.',
    msgLowCeiling: 'DOORRIJHOOGTE LAAG (<2m)',
    msgCalculating: 'Berekenen...',
    msgEnterMeasurements: 'Voer maten in',
    shareTitle: 'Bouwoverzicht',
    shareMessage: 'Trap: H={h}cm, N={n}, Opt={ch}cm, Vol={vol}m3',
  },
};
