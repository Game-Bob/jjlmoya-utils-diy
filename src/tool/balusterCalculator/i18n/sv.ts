import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';

const slug = 'baluster-kalkylator';
const title = 'Baluster kalkylator: Exakt avstånd för räcken';
const description =
  'Beräkna det exakta avståndet mellan stolpar eller balustrar för räcken enligt 10 cm-regeln. Automatiska ritningar.';

const faqData = [
  {
    question: 'Vilket är det högsta tillåtna avståndet mellan balustrar?',
    answer:
      'I de flesta internationella byggregler får det fria utrymmet mellan räckesdelar inte tillåta passage av en sfär med 10 cm diameter för att förhindra olyckor med barn.',
  },
  {
    question: 'Hur mäts avståndet: mellan centrum eller mellanrum?',
    answer:
      "Vår kalkylator ger båda. 'Fritt mellanrum' är det faktiska hålet mellan stolparna (viktigt för säkerheten), medan 'centrumavstånd' (on-center) anger var du ska borra eller fästa varje baluster.",
  },
  {
    question: 'Vad händer om fördelningen inte blir exakt?',
    answer:
      'Kalkylatorn justerar automatiskt antalet stolpar så att det första och sista mellanrummet blir identiska, vilket garanterar visuell symmetri och strikt efterlevnad av det maximalt tillåtna mellanrummet.',
  },
  {
    question: 'Är det bäst att svetsa eller skruva balustrarna?',
    answer:
      'Det beror på materialet. För stål ger svetsning maximal strukturell styvhet. För trä eller aluminium används kemiska ankare eller genomgående skruvar. Det viktiga är att räcket tål en horisontell kraft på minst 0,8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Mät totallängden',
    text: 'Mät det exakta avståndet mellan den första och sista stolpen där räcket ska installeras.',
  },
  {
    name: 'Definiera balusterns tjocklek',
    text: 'Mät bredden på en enskild stolpe (t.ex. 2x2 cm för fyrkantsprofil eller diametern om den är rund).',
  },
  {
    name: 'Fastställ maximalt mellanrum',
    text: 'Ange önskat maximalt avstånd (rekommenderas 10 cm för att följa reglerna).',
  },
  {
    name: 'Hämta monteringsmärkningar',
    text: 'Granska listan över exakta positioner för borrning för att säkerställa en symmetrisk och säker fördelning.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    {
      name: 'Boverket - Regler för räcken (Sverige)',
      url: 'https://www.boverket.se/',
    },
    {
      name: 'IRC - International Residential Code (USA)',
      url: 'https://codes.iccsafe.org/content/IRC2021',
    },
    {
      name: 'IBC - International Building Code',
      url: 'https://codes.iccsafe.org/content/IBC2021',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Den definitiva guiden: Hur man beräknar balusteravstånd för räcken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att designa ett säkert och estetiskt perfekt räcke är en konst som kombinerar matematisk precision med byggregler. Oavsett om det är för en terrass, en balkong eller en inomhustrappa är den korrekta beräkningen av balustrarna (eller stolparna) projektets mest kritiska steg. Ett räknefel förstör inte bara den visuella symmetrin, utan kan göra din konstruktion olaglig och osäker.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Varför är denna beräkning så viktig?',
      html: '<p>Det handlar inte bara om att "fylla utrymmet". Det handlar om att följa <strong>4-tumsregeln (10 cm)</strong>, en internationell säkerhetsstandard utformad för att förhindra barnolyckor.</p>',
    },
    {
      type: 'title',
      text: '1. Säkerhetsregler: 10 cm-regeln',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Innan du kapar den första trä- eller metallbiten måste du förstå "varför" bakom matematiken. Byggregler i många länder, liksom IRC (International Residential Code) i USA, fastställer en tydlig norm: <em>"Det fria utrymmet mellan vertikala element får inte tillåta passage av en sfär med 10 cm (4 tum) diameter."</em>',
    },
    {
      type: 'paragraph',
      html: 'Detta mått är inte godtyckligt. Det är den genomsnittliga huvuddiametern för ett litet barn (vanligtvis under 1 år). Om ett barn kan få igenom kroppen men huvudet fastnar är risken för kvävning extremt hög. Om huvudet kommer igenom kan barnet falla fritt. Därför är målet med vår <strong>Baluster-kalkylator</strong> inte bara estetik, utan att rädda liv.',
    },
    {
      type: 'title',
      text: '2. Det matematiska problemet: Stolpfel (Fencepost Error)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inom programmering och byggnation finns ett klassiskt problem som kallas <em>"Fencepost Error"</em> (stolpfel). Om du vill bygga ett 10 meter långt staket med stolpar varje meter, hur många stolpar behöver du? Det intuitiva svaret är 10, men det korrekta är 11.',
    },
    {
      type: 'paragraph',
      html: 'Med balustrar händer något liknande, men mer komplext, eftersom bredden på själva balustern tar plats. Formeln som vårt verktyg använder löser detta ekvationssystem åt dig:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Steg A: Beräkna mellanrum',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Först bestämmer vi hur många balustrar som teoretiskt får plats om vi använde det maximalt tillåtna utrymmet. Vi avrundar detta antal uppåt för att säkerställa att de resulterande mellanrummen blir <em>mindre</em> än maxmåttet.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Steg B: Omberäkna exakt avstånd',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>När vi väl vet det exakta antalet balustrar (n), beräknar vi hur mycket utrymme som "blir över" om vi drar bort bredden på allt material, och delar det lika mellan mellanrummen (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Steg-för-steg-guide för perfekt installation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att ha siffrorna är bara hälften av segern. Här förklarar vi hur du överför siffrorna från papperet (eller skärmen) till verkligheten i ditt byggprojekt.',
    },
    {
      type: 'title',
      text: 'Steg 1: Precisionsmätning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mät det <strong>inre</strong> avståndet från stolpe till stolpe. Mät inte från stolpens centrum. Du behöver veta det exakta fria utrymmet som du ska fylla (L). Om ditt räcke har flera sektioner, mät varje sektion individuellt; byggnationer är sällan perfekt vinklade och ett fel på 0,5 cm kan förstöra symmetrin.',
    },
    {
      type: 'title',
      text: 'Steg 2: Hitta centrum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nybörjarfel nummer ett är att börja placera balustrar från ena änden till den andra. Detta resulterar nästan alltid i ett sista mellanrum med en konstig storlek, vilket bryter den visuella harmonin.<ul><li>Markera <strong>exakt centrum</strong> på räcket (L / 2).</li><li>Bestäm om du vill ha en <em>baluster</em> eller ett <em>mellanrum</em> i mitten.</li><li>Om du vill ha en baluster i mitten: markera hälften av balusterns bredd på varje sida av din centrummarkering.</li><li>Om du vill ha ett mellanrum i mitten: markera hälften av mellanrumsavståndet (g / 2) på varje sida.</li></ul>',
    },
    {
      type: 'title',
      text: 'Steg 3: Tillverka en distanskloss (Spacers)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd inte måttbandet för varje baluster. Det kumulativa mänskliga felet kommer att göra att den sista balustern hamnar flera centimeter fel. Det professionella sättet är att kapa en träkloss (eller två) med det exakta måttet på mellanrummet (g) som vår kalkylator har gett dig.',
    },
    {
      type: 'paragraph',
      html: 'Använd denna kloss som en fysisk mall. Placera en baluster, lägg klossen, placera nästa baluster tätt mot klossen och fäst den. Detta garanterar en millimeterexsakt konsistens.',
    },
    {
      type: 'title',
      text: '4. Material och verktyg som behövs',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Utrustning för en professionell finish',
      html: '<ul><li>Måttband med hög precision</li><li>Snickarpenna</li><li>Vattenpass (för vertikalitet)</li><li>Gersåg (för rena snitt)</li><li>Borr och träskruv</li><li>Distansklossar (måttbeställda)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Ytterligare tekniska frågor',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Vad händer om det sista mellanrummet inte passar?',
      html: '<p>Om du har använt vår kalkylator bör detta inte hända. I den verkliga världen slår sig dock trä och stolpar är inte alltid raka. Om det felar på 1-2 mm när du når slutet är det omärkbart. Om det felar på 1 cm bör du kontrollera dina distansklossar; du har förmodligen tappat millimetrar i varje steg.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Kan jag sätta balustrarna glesare om jag inte har barn?',
      html: '<p>Juridiskt sett: nej. Byggregler gäller bostaden, inte de nuvarande invånarna. Om du någon gång säljer huset kommer ett räcke som inte följer reglerna att vara ett problem vid besiktningen. Dessutom kan besökare (syskonbarn, barnbarn) vara i fara.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Trä, metall eller glas?',
      html: '<p>Denna kalkylator fungerar för <strong>vilket repetititvt vertikalt element som helst</strong>. Om du använder horisontella stålvajrar är reglerna annorlunda (vanligtvis får de inte vara klättringsbara, "steg-effekt"). För glas betraktas det som en hel skiva och avstånd gäller inte, utan istället slaghållfasthet.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"Arkitektur är tidens vilja översatt till rum."</em></p><p>Vi hoppas att detta verktyg hjälper dig att bygga säkrare och vackrare rum. Kom alltid ihåg att kontrollera de lokala byggreglerna i din kommun, eftersom det kan finnas specifika variationer gällande minsta höjd (vanligtvis 90-110 cm) eller belastningskrav.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensioner',
    sectionDesc: 'Ange måtten för ditt räcke',
    labelRailLength: 'Totallängd (L)',
    labelBalusterWidth: 'Balusterbredd (w)',
    labelMaxGap: 'Maximalt mellanrum (g)',
    blueprintTitle: 'Monteringsplan',
    blueprintRef: 'REF: BAL-001 // SKALA: AUTO',
    labelRequired: 'Balustrar som krävs',
    labelExactGap: 'Exakt mellanrum',
    labelOnCenter: 'Centrum till centrum',
    labelTotalSpaces: 'Totalt antal mellanrum',
    labelCoveredLength: 'Täckt längd',
    labelDisclaimer: '* De visade dimensionerna är ungefärliga för visualisering.',
  },
};
