import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'baluster-rekenmachine';
const title = 'Baluster Calculator: Exacte Afstand voor Leuningen';
const description =
  'Bereken de exacte afstand tussen spijlen of balusters voor leuningen volgens de 10cm-norm. Automatische bouwplannen.';

const faqData = [
  {
    question: 'Wat is de maximale wettelijke afstand tussen balusters?',
    answer:
      'In de meeste internationale bouwvoorschriften mag de vrije ruimte tussen de onderdelen van een leuning niet groter zijn dan 10 cm (de 10cm-regel), zodat er geen sfeer met een diameter van 10 cm doorheen kan. Dit is essentieel voor de veiligheid van kinderen.',
  },
  {
    question: 'Hoe wordt de afstand gemeten: tussen de harten of de tussenruimtes?',
    answer:
      "Onze calculator geeft beide weer. De 'vrije ruimte' is de daadwerkelijke opening tussen de spijlen (cruciaal voor de veiligheid), terwijl de 'hart-op-hart afstand' aangeeft waar je elke baluster moet boren of bevestigen.",
  },
  {
    question: 'Wat gebeurt er als de verdeling niet precies uitkomt?',
    answer:
      'De calculator past automatisch het aantal spijlen aan, zodat de eerste en laatste opening identiek zijn. Dit garandeert visuele symmetrie en strikte naleving van de maximaal toegestane tussenruimte.',
  },
  {
    question: 'Is het beter om balusters te lassen of te schroeven?',
    answer:
      'Dit hangt af van het materiaal. Bij staal biedt lassen de maximale structurele stijfheid. Bij hout of aluminium worden vaak mechanische ankers of doorgaande bouten gebruikt. Belangrijk is dat de leuning een horizontale kracht van minstens 0,8 kN/m kan weerstaan.',
  },
];

const howToData = [
  {
    name: 'Totale lengte meten',
    text: 'Meet de exacte afstand tussen de eerste en de laatste paal waar de leuning wordt geplaatst.',
  },
  {
    name: 'Dikte van de baluster bepalen',
    text: 'Meet de breedte van een individuele spijl (bijv. 2x2 cm voor een kokerprofiel of de diameter bij een ronde spijl).',
  },
  {
    name: 'Maximale tussenruimte instellen',
    text: 'Geef de gewenste maximale opening aan (10 cm wordt aanbevolen om aan de normen te voldoen).',
  },
  {
    name: 'Installatiemarkeringen ontvangen',
    text: 'Bekijk de lijst met exacte posities voor het boren om een symmetrische en veilige verdeling te garanderen.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
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
      text: 'De Ultieme Gids: Hoe Bereken je de Afstand tussen Balusters?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het ontwerpen van een veilige en esthetisch perfecte leuning is een kunst die wiskundige precisie combineert met bouwvoorschriften. Of het nu gaat om een terras, een balkon of een binnentrap, de juiste berekening van de balusters (of spijlen) is de meest kritische stap van het project. Een rekenfout bederft niet alleen de visuele symmetrie, maar kan je constructie ook onveilig en illegaal maken.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Waarom is deze berekening zo belangrijk?',
      html: '<p>Het gaat niet alleen om het "vullen van het gat". Het gaat om het voldoen aan de <strong>4-inch sfeer-regel (10 cm)</strong>, een internationale veiligheidsnorm die is ontworpen om ongelukken met kinderen te voorkomen.</p>',
    },
    {
      type: 'title',
      text: '1. Veiligheidsvoorschriften: De 10cm-regel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voordat je het eerste stuk hout of metaal zaagt, moet je begrijpen waarom deze wiskunde nodig is. Het Bouwbesluit in Nederland en soortgelijke codes internationaal (zoals de IRC) stellen een duidelijke norm: <em>"De vrije ruimte tussen verticale elementen mag niet zodanig zijn dat een sfeer met een diameter van 10 cm erdoorheen kan."</em>',
    },
    {
      type: 'paragraph',
      html: 'Deze maat is niet willekeurig. Het is de gemiddelde diameter van het hoofd van een klein kind (meestal onder de 1 jaar). Als een kind met zijn lichaam erdoorheen kan maar het hoofd blijft steken, is het risico op verstikking extreem hoog. Als het hoofd er wel doorheen kan, kan het kind vallen. Daarom is het doel van onze <strong>Baluster Calculator</strong> niet alleen esthetiek, maar het redden van levens.',
    },
    {
      type: 'title',
      text: '2. Het Wiskundige Probleem: De Fencepost Error',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In de informatica en de bouw bestaat een klassiek probleem genaamd de <em>"Fencepost Error"</em> (de paal-en-hek-fout). Als je een hek van 10 meter wilt bouwen met palen om de meter, hoeveel palen heb je dan nodig? Het intuïtieve antwoord is 10, maar het juiste antwoord is 11.',
    },
    {
      type: 'paragraph',
      html: 'Bij balusters werkt het vergelijkbaar, maar ingewikkelder, omdat de breedte van de baluster zelf ook ruimte inneemt. De formule die onze tool gebruikt, lost dit stelsel van vergelijkingen voor je op:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Stap A: Tussenruimtes Berekenen',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Eerst bepalen we hoeveel balusters er theoretisch passen als we de maximaal toegestane ruimte gebruiken. We ronden dit getal naar boven af om er zeker van te zijn dat de resulterende tussenruimtes <em>kleiner</em> zijn dan het maximum.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Stap B: Exacte Afstand Herberekenen',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Zodra we het exacte aantal balusters (n) weten, berekenen we hoeveel ruimte er "overblijft" als we de breedte van alle materialen aftrekken, en verdelen we dit gelijkmatig over de tussenruimtes (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Stap-voor-stap Gids voor de Perfecte Installatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De cijfers hebben is slechts het halve werk. Hier leggen we uit hoe je die getallen van het papier (of scherm) vertaalt naar de realiteit van je bouwproject.',
    },
    {
      type: 'title',
      text: 'Stap 1: Precisie Meting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Meet de <strong>interne</strong> afstand tussen paal en paal. Meet niet vanaf het hart van de paal. Je moet de exacte dagmaat weten die je gaat opvullen (L). Als je leuning meerdere secties heeft, meet dan elke sectie afzonderlijk; constructies zijn zelden perfect haaks en een fout van 0,5 cm kan de symmetrie verpesten.',
    },
    {
      type: 'title',
      text: 'Stap 2: Het Midden Vinden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meest gemaakte beginnersfout is om balusters vanaf de ene kant naar de andere kant te plaatsen. Dit resulteert bijna altijd in een laatste tussenruimte met een vreemde afmeting, wat de visuele harmonie verstoort.<ul><li>Markeer het <strong>exacte midden</strong> van de leuning (L / 2).</li><li>Bepaal of je in het midden een <em>baluster</em> of een <em>tussenruimte</em> wilt hebben.</li><li>Als je een baluster in het midden wilt: markeer de helft van de balusterbreedte aan weerszijden van je middenmarkering.</li><li>Als je een tussenruimte in het midden wilt: markeer de helft van de tussenruimte-afstand (g / 2) aan weerszijden.</li></ul>',
    },
    {
      type: 'title',
      text: 'Stap 3: Een Afstandhouder (Spacer) Maken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik niet het meetlint voor elke baluster. De cumulatieve menselijke fout zal ervoor zorgen dat de laatste baluster enkele centimeters afwijkt. De professionele aanpak is om een blok hout (of twee) te zagen met de exacte maat van de opening (g) die onze calculator heeft berekend.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik dit blok als een mal. Plaats een baluster, leg het blok ertegenaan, plaats de volgende baluster strak tegen het blok en zet deze vast. Dit garandeert een consistentie op de millimeter nauwkeurig.',
    },
    {
      type: 'title',
      text: '4. Benodigde Materialen en Gereedschap',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Uitrusting voor een professionele afwerking',
      html: '<ul><li>Hoogwaardig meetlint</li><li>Timmermanspotlood</li><li>Waterpas (voor de verticaliteit)</li><li>Afkortzaag (voor strakke sneden)</li><li>Boormachine en houtschroeven</li><li>Afstandhouders (op maat gemaakt)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Aanvullende Technische Vragen',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Wat als de laatste opening niet uitkomt?',
      html: '<p>Als je onze calculator hebt gebruikt, zou dit niet mogen gebeuren. Echter, in de echte wereld werkt hout en staan palen niet altijd kaarsrecht. Als je aan het einde 1-2 mm overhoudt of tekortkomt, is dat onzichtbaar. Als je 1 cm tekortkomt, controleer dan je afstandhouders; waarschijnlijk heb je bij elke stap een kleine fout geaccumuleerd.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Mag ik balusters verder uit elkaar plaatsen als ik geen kinderen heb?',
      html: '<p>Wettelijk gezien niet. De bouwvoorschriften gelden voor de woning, niet voor de huidige bewoners. Als je het huis ooit verkoopt, zal een leuning die niet aan de norm voldoet een probleem vormen bij de inspectie. Bovendien kunnen bezoekers (neefjes, kleinkinderen) gevaar lopen.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Hout, Metaal of Glas?',
      html: '<p>Deze calculator werkt voor <strong>elk herhalend verticaal element</strong>. Als je horizontale spankabels gebruikt, zijn de regels anders (meestal mogen deze niet opklimbaar zijn, het "trapeffect"). Voor glas wordt het beschouwd als een gesloten paneel en geldt er geen tussenruimte-eis, maar een impact-eis.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"Architectuur is de wil van de tijd vertaald in ruimte."</em></p><p>We hopen dat deze tool je helpt om veiligere en mooiere ruimtes te creëren. Vergeet niet om altijd de lokale bouwverordening van je gemeente te raadplegen, aangezien er specifieke variaties kunnen zijn in minimale hoogte (meestal 90-110 cm) of belastingseisen.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Afmetingen',
    sectionDesc: 'Voer de maten van je leuning in',
    labelRailLength: 'Totale Lengte (L)',
    labelBalusterWidth: 'Balusterbreedte (w)',
    labelMaxGap: 'Maximale Opening (g)',
    blueprintTitle: 'Bouwplan',
    blueprintRef: 'REF: BAL-001 // SCHAAL: AUTO',
    labelRequired: 'Benodigde Balusters',
    labelExactGap: 'Exacte Opening',
    labelOnCenter: 'Hart-op-Hart',
    labelTotalSpaces: 'Totaal Aantal Gaten',
    labelCoveredLength: 'Bedekte Lengte',
    labelDisclaimer: '* De getoonde afmetingen zijn bij benadering voor visualisatie.',
  },
};
