import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tweetakt-mengverhouding-calculator';
const title = 'Tweetakt Mengverhouding Calculator: Nauwkeurige Olie en Benzine Ratios';
const description = 'Bereken direct de exacte mengverhouding voor uw tweetaktmotor. Onmisbaar voor kettingzagen, bromfietsen, motorfietsen en klein materieel. Ondersteunt 1:25, 1:33, 1:40 en 1:50.';

const faqData = [
  {
    question: 'Wat is een tweetaktmotor?',
    answer: 'Een tweetaktmotor combineert inlaat en compressie in slechts twee zuigerslagen, waardoor deze eenvoudiger en lichter is dan viertaktmotoren. Ze worden gebruikt in kettingzagen, bladblazers, bromfietsen en sommige motorfietsen. Voor de smering moet er olie door de brandstof gemengd worden.',
  },
  {
    question: 'Wat zijn veelvoorkomende mengverhoudingen?',
    answer: 'Veelvoorkomende verhoudingen zijn 1:25 (rijk, beschermend), 1:33 (ouder materieel), 1:40 (standaard) en 1:50 (mager, moderne motoren). Raadpleeg altijd de handleiding van uw motor; een verkeerde verhouding kan schade veroorzaken.',
  },
  {
    question: 'Wat gebeurt er bij een verkeerde mengverhouding?',
    answer: 'Te veel olie (rijk mengsel) zorgt voor overmatige rook, vette bougies en mindere prestaties. Te weinig olie (mager mengsel) leidt tot een vastloper, schade aan de zuiger en motorstoring.',
  },
  {
    question: 'Welke olie moet ik gebruiken?',
    answer: 'Gebruik tweetaktolie die geschikt is voor uw materieel. Premium synthetische tweetaktoliën bieden betere bescherming en verbranden schoner dan minerale oliën. Gebruik nooit viertaktmotorolie; dit veroorzaakt motorschade.',
  },
  {
    question: 'Hoe meng ik benzine en olie?',
    answer: 'Giet een deel van de benzine in een schone jerrycan, voeg de berekende hoeveelheid olie toe en vul aan met de rest van de benzine. Meng grondig door 1-2 minuten krachtig te schudden. Noteer de mengdatum op de jerrycan.',
  },
];

const howToData = [
  { name: 'Bepaal de ratio', text: 'Zoek de handleiding van uw motor of apparatuur. Veelvoorkomende ratios: kettingzagen (1:40 of 1:50), bromfietsen (1:33), oude motorfietsen (1:25). Een verkeerde ratio beschadigt uw motor.' },
  { name: 'Meet het benzinevolume', text: 'Bepaal hoeveel benzine u nodig heeft. Deze tool werkt met liters, gallons of elke andere eenheid. Nauwkeurige benzine-meting = nauwkeurige oliehoeveelheid.' },
  { name: 'Bereken de benodigde olie', text: 'Voer het benzinevolume en de ratio in. De calculator toont exact hoeveel olie (in ml of liter) u nodig heeft voor een perfect mengsel.' },
  { name: 'Meng zorgvuldig', text: 'Giet benzine in een schone jerrycan, voeg de berekende olie toe en vul aan met de resterende benzine. Schud 1-2 minuten om goed te mengen.' },
  { name: 'Label en gebruik', text: 'Noteer datum en ratio op de jerrycan. Gebruik de mengsmering binnen 30 dagen voor de beste resultaten (vooral bij synthetische oliën).' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Tweetakt Mengverhouding Calculator: Precieze Olie-Benzine Ratios voor Kettingzagen en Bromfietsen', level: 2 },
    { type: 'paragraph', html: 'Tweetaktmotoren hebben een exact mengsel van benzine en olie nodig om te overleven. Een verkeerd mengsel kan uw motor binnen enkele minuten vernielen. Deze calculator bepaalt direct de exacte hoeveelheid olie voor uw brandstofvolume en motortype — geen giswerk meer in de schuur.' },

    { type: 'title', text: 'Waarom tweetaktmotoren olie in de brandstof nodig hebben', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'Het cruciale verschil', html: 'In tegenstelling tot viertaktmotoren met een apart carter, mengen tweetaktmotoren olie direct door de brandstof. Bij elke arbeidsslag verbrandt de motor het mengsel voor zowel energie als smering. Er is geen oliepomp; alleen de mengsmering houdt de zuigers in leven.' },

    { type: 'title', text: 'Snelgids tweetakt ratios', level: 3 },
    { type: 'table', headers: ['Ratio', 'Olie %', 'Gebruik', 'Motortype', 'Kenmerken'], rows: [
      ['1:25', '3,85%', 'Maximale bescherming', 'Apparatuur van vóór 1980, zware belasting, oldtimers', 'Rijk mengsel: meer rook, meer koolafzetting, maximale bescherming tegen vastlopen'],
      ['1:33', '2,94%', 'Klassiek materieel', 'Kleine motoren uit de jaren 80-90, oudere kettingzagen', 'Matige rijkheid: balans tussen bescherming en efficiëntie'],
      ['1:40', '2,44%', 'Industriestandaard', 'Meeste moderne kettingzagen en bromfietsen', 'Standaard aanbeveling: ontworpen voor moderne synthetische oliën'],
      ['1:50', '1,96%', 'Moderne efficiëntie', 'Nieuwste kettingzagen, high-performance bromfietsen', 'Mager mengsel: minder rook, schonere verbranding, voor premium synthetische oliën']
    ] },

    { type: 'title', text: 'Gevolgen van verkeerde ratios', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Te veel olie (Rijk mengsel)', con: 'Overmatige witte rook, vette bougies, koolafzetting, trage acceleratie, motorstoring' },
      { pro: 'Te weinig olie (Mager mengsel)', con: 'Zuiger loopt binnen seconden vast, krassen in cilinderwand, catastrofale motorschade' },
      { pro: 'Correcte ratio', con: 'Soepele loop, juiste smering, optimale verbranding, langere levensduur, betrouwbare start' }
    ] },

    { type: 'title', text: 'Veelvoorkomende ratios per apparaat', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Kettingzagen', html: '<strong>Stihl, Husqvarna, Echo:</strong> Moderne modellen vereisen meestal 1:40 of 1:50. Check altijd uw handleiding — 1:25 op een moderne zaag geeft risico op vette bougies. Oudere Stihl-machines (jaren 90 en ouder) kunnen 1:25 of 1:33 voorschrijven.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Bromfietsen & Motoren', html: '<strong>Vespa, Honda, Yamaha:</strong> De meeste vereisen 1:33 voor oude modellen, 1:40–1:50 voor moderne versies. High-performance brommers schrijven vaak 1:50 voor. De handleiding is de enige bron van waarheid.' },
    { type: 'card', icon: 'mdi:tools', title: 'Bladblazers & Trimmers', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Meestal 1:50 (modern) of 1:40 (iets ouder). Dit materieel is voor kort seizoensgebruik; magere ratios sparen rook zonder de betrouwbaarheid op te offeren.' },

    { type: 'title', text: 'Oliesoort is net zo belangrijk als de ratio', level: 3 },
    { type: 'comparative', items: [
      { title: 'Minerale tweetaktolie', description: 'Budgetoptie voor incidenteel gebruik. Hoger asgehalte, meer rook, voldoende bescherming voor standaard ratios.', icon: 'mdi:beaker', points: ['Lagere kosten', 'Zichtbare rook', 'Meer koolafzetting', 'Werkt voor 1:40 ratios'] },
      { title: 'Synthetische tweetaktolie', description: 'Premium keuze voor intensief gebruik. Schonere verbranding, betere bescherming, maakt magere ratios mogelijk. Temperatuurstabiel.', icon: 'mdi:flame', points: ['Minimale rook', 'Beste motorbescherming', 'Maakt 1:50 veilig mogelijk', 'Langer houdbaar'], highlight: true },
      { title: 'Semi synthetische olie', description: 'Middenweg tussen mineraal en vol-synthetisch. Goede bescherming tegen gemiddelde kosten. Veelgebruikte aanbeveling.', icon: 'mdi:beaker-outline', points: ['Gebalanceerde prestaties', 'Gemiddelde kosten', 'Goed voor 1:40 ratios', 'Minder rook dan mineraal'] }
    ], columns: 3 },

    { type: 'title', text: 'Stappenplan voor het mengen', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'De juiste manier van mengen', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Gebruik een aparte jerrycan</strong> die alleen voor mengsmering is. Schoon, droog en gelabeld.</li><li><strong>Giet eerst de helft van de benzine</strong> in de jerrycan.</li><li><strong>Voeg de berekende olie toe</strong> (gebruik deze calculator voor precisie).</li><li><strong>Voeg de rest van de benzine toe</strong> tot het gewenste volume.</li><li><strong>Schud krachtig gedurende 1–2 minuten</strong> tot de kleur egaal is. Een homogeen mengsel = gelijkmatige smering.</li><li><strong>Label de jerrycan</strong> met datum, ratio en brandstoftype.</li><li><strong>Gebruik binnen 30 dagen</strong> (synthetische oliën tot 60 dagen).</li></ol>' },

    { type: 'title', text: 'Wanneer de handleiding in twijfel trekken', level: 3 },
    { type: 'tip', html: '<strong>Controleer altijd eerst de ratio in de originele handleiding.</strong> Kunt u deze niet vinden, kijk dan op de website van de fabrikant. Gok nooit — een verkeerde ratio doet de garantie vervallen en riskeert een vastloper. Bij oldtimers zonder handleiding: zoek online op modelnummer.' },

    { type: 'title', text: 'Begrippenlijst tweetakt termen', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mager mengsel', definition: 'Brandstof met te weinig olie (hoge ratio zoals 1:50). Risico op vastloper door gebrek aan smering.' },
      { term: 'Rijk mengsel', definition: 'Brandstof met te veel olie (lage ratio zoals 1:25). Zorgt voor veel rook, vette bougies en koolafzetting.' },
      { term: 'Homogeen mengsel', definition: 'Gelijkmatige verdeling van benzine en olie, bereikt door goed schudden. Cruciaal voor smering en verbranding.' },
      { term: 'Vastloper (Seizure)', definition: 'Wanneer de zuiger vastslaat in de cilinder door hitte en gebrek aan smering. Betekent einde motor.' },
      { term: 'Synthetische olie', definition: 'In het lab ontwikkelde olie met superieure bescherming, schonere verbranding en hittebestendigheid.' },
      { term: 'Tweetaktmotor', definition: 'Motor die de cyclus in twee zuigerslagen voltooit. Lichter en eenvoudiger dan viertakt.' },
      { term: 'Viertaktmotor', definition: 'Motor met apart oliecarter en vier fasen. Olie wordt niet gemengd maar circuleert door de motor.' }
    ] },

    { type: 'title', text: 'Waarom deze calculator u helpt', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Foutloze berekening, geen meetfouten', icon: 'mdi:check-circle' },
      { value: 'Direct', label: 'Exacte hoeveelheden in seconden', icon: 'mdi:flash' },
      { value: '4 Ratios', label: '1:25, 1:33, 1:40 en 1:50 gedekt', icon: 'mdi:counter', trend: { value: 'Plus eigen ratios', positive: true } },
      { value: 'Deelbaar', label: 'Kopieer en deel uw instellingen via URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Veelgemaakte fouten', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Viertaktolie gebruiken in tweetaktmotoren', icon: 'mdi:alert', badge: 'Motorsloop', html: 'Viertaktolie is bedoeld om te circuleren, niet om te verbranden. In een tweetakter vervuilt het de motor en vernielt het de boel binnen uren.' },
    { type: 'diagnostic', variant: 'warning', title: 'Niet goed schudden', icon: 'mdi:alert', badge: 'Vastlooprisico', html: 'Als olie en benzine scheiden door slecht mengen, loopt de motor delen van de tijd zonder smering. Schud altijd 1-2 minuten.' },
    { type: 'diagnostic', variant: 'warning', title: 'Oude benzine gebruiken (>60 dagen)', icon: 'mdi:alert', badge: 'Gomvorming', html: 'Benzine met ethanol veroudert snel. Oude mengsmering laat gom achter in de carburateur. Meng alleen wat u binnen 30 dagen opmaakt.' },

    { type: 'title', text: 'Samenvatting', level: 3 },
    { type: 'summary', title: 'Voor u gaat mengen', items: [
      'Check de handleiding voor de exacte ratio van de fabrikant.',
      'Gebruik tweetaktolie, geen viertakt- of andere olie.',
      'Gebruik een schone jerrycan, alleen bedoeld voor mengsmering.',
      'Gebruik verse benzine en compatibele olie.',
      'Schud krachtig en label met datum en ratio.',
      'Maak het mengsel binnen 30 dagen op.'
    ] },
  ],
  ui: {
    titleMain: 'Tweetakt Mengverhouding Calculator',
    labelFuelVolume: 'Benzine Volume',
    labelRatio: 'Mengverhouding',
    labelOilRequired: 'Benodigde Olie',
    labelTotalMixture: 'Totaal Mengsel',
    labelRichness: 'Rijkheid Mengsel',
    labelPresets: 'Veelvoorkomende Ratios',
    labelCustomRatio: 'Eigen Ratio (1:X)',
    btnClear: 'Wissen',
    btnCopyResults: 'Resultaten kopiëren',
    btnSwitchMode: 'Modus wisselen',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Mager (minder olie, risico op vastloper)',
    richBalanced: 'Gebalanceerd (standaard mix)',
    richRich: 'Rijk (meer olie, meer rook, motorbescherming)',
    msgReady: 'Klaar',
    msgMixtureReady: 'Verhouding berekend',
    tooltipFuelVolume: 'Voer het aantal liters benzine in',
    tooltipRatio: 'Voer de ratio in als 25, 33, 40 of 50 (voor 1:25, 1:33, etc.)',
    recipientLabel: 'Jerrycan / Mixbak',
    oilPercentage: 'Olie %',
    labelVolume: 'Volume',
    labelRatioShort: 'Ratio',
    labelOilTip: '2% olie-mix = 1:50 ratio',
    labelMixingTips: 'Mengtips',
    labelMixingTipsDesc: 'Meng in een schone jerrycan: eerst benzine, dan de afgemeten olie, dan de rest van de benzine. Schud goed (1-2 min) voor een egaal mengsel. Label met datum en ratio.',
    recipePrefix: 'Voor',
    recipeAt: 'benzine op',
    recipeAdd: 'voeg exact',
    recipeOfOil: 'tweetaktolie toe.',
    copyTextPrefix: '2-Takt Mix',
    copyTextFuel: 'benzine',
    copyTextOil: 'olie',
  },
};
