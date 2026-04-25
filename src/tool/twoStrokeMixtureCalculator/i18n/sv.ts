import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tvataxtsblandning-kalkylator';
const title = 'Tvåtaktsblandning Kalkylator: Exakta Proportioner Olja/Bensin';
const description = 'Beräkna snabbt rätt mängd olja för din tvåtaktsmotor. Ett oumbärligt verktyg för motorsågar, mopeder, motorcyklar och småmaskiner. Stöder 1:25, 1:33, 1:40 och 1:50.';

const faqData = [
  {
    question: 'Vad är en tvåtaktsmotor?',
    answer: 'En tvåtaktsmotor kombinerar insug och arbetstakt på bara två kolvrörelser, vilket gör den enklare och lättare än fyrtaktsmotorer. De driver motorsågar, lövblåsar, mopeder och vissa motorcyklar. De kräver att olja blandas direkt i bränslet för smörjning.',
  },
  {
    question: 'Vilka är de vanligaste blandningsförhållandena?',
    answer: 'Vanliga förhållanden är 1:25 (fet, skyddande), 1:33 (äldre maskiner), 1:40 (standard) och 1:50 (mager, moderna motorer). Kontrollera alltid motorns manual; fel förhållande kan skada motorn.',
  },
  {
    question: 'Vad händer om jag blandar fel?',
    answer: 'För mycket olja (fet blandning) orsakar kraftig rök, sotiga tändstift och sämre prestanda. För lite olja (mager blandning) leder till skärning, kolvskador och motorhaveri.',
  },
  {
    question: 'Vilken typ av olja ska jag använda?',
    answer: 'Använd tvåtaktsolja anpassad för din utrustning. Syntetisk tvåtaktsolja av hög kvalitet ger bättre skydd och renare förbränning än mineraloljor. Använd aldrig fyrtaktsolja — det skadar motorn.',
  },
  {
    question: 'Hur blandar jag bensin och olja?',
    answer: 'Häll en del av bensinen i en ren dunk, tillsätt den beräknade mängden olja och fyll sedan på med resten av bensinen. Blanda noggrant genom att skaka i 1-2 minuter. Märk dunken med blandningsdatum.',
  },
];

const howToData = [
  { name: 'Kolla förhållandet', text: 'Hitta motorns manual eller dokumentation. Vanliga förhållanden: motorsågar (1:40 eller 1:50), mopeder (1:33), äldre motorcyklar (1:25). Fel förhållande skadar motorn.' },
  { name: 'Mät bensinmängden', text: 'Bestäm hur mycket bensin du behöver. Detta verktyg hanterar liter, gallons eller valfri enhet. Noggrann bensinmätning = rätt mängd olja.' },
  { name: 'Beräkna olja', text: 'Ange bensinmängd och förhållande. Kalkylatorn visar exakt hur mycket olja (i ml eller liter) du behöver för en perfekt blandning.' },
  { name: 'Blanda noga', text: 'Häll bensin i en ren dunk, tillsätt beräknad olja och sedan resten av bensinen. Skaka i 1-2 minuter för att blanda väl.' },
  { name: 'Märk och använd', text: 'Märk dunken med datum och förhållande. Använd blandningen inom 30 dagar för bästa resultat (särskilt med syntetiska oljor).' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Tvåtaktsblandning Kalkylator: Exakta Proportioner för Motorsågar och Mopeder', level: 2 },
    { type: 'paragraph', html: 'Tvåtaktsmotorer kräver en exakt blandning av bensin och olja för att överleva. Fel blandning kan förstöra din motor på några minuter. Denna kalkylator beräknar direkt den exakta mängden olja som behövs för din bränslemängd och motortyp — inget mer gissande i verkstaden.' },

    { type: 'title', text: 'Varför tvåtaktsmotorer kräver olja i bränslet', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'Den avgörande skillnaden', html: 'Till skillnad från fyrtaktsmotorer med separata oljetankar blandar tvåtaktsmotorer oljan direkt i bränslet. Vid varje arbetstakt förbränner motorn blandningen för både energi och smörjning. Det finns ingen oljepump; bara det blandade bränslet håller kolvarna vid liv.' },

    { type: 'title', text: 'Snabbguide tvåtaktsförhållanden', level: 3 },
    { type: 'table', headers: ['Förhållande', 'Olja %', 'Användning', 'Motortyp', 'Egenskaper'], rows: [
      ['1:25', '3,85%', 'Maximalt Skydd', 'Maskiner före 1980, tung belastning, veteranmotorcyklar', 'Fet blandning: mer rök, mer sot, maximalt skydd mot skärning'],
      ['1:33', '2,94%', 'Klassisk Utrustning', 'Småmotorer från 80-90-talet, äldre motorsågar', 'Måttlig fethet: balans mellan skydd och effektivitet'],
      ['1:40', '2,44%', 'Industristandard', 'De flesta moderna motorsågar och mopeder', 'Standardrekommendation: anpassad för dagens syntetiska oljor'],
      ['1:50', '1,96%', 'Modern Effektivitet', 'Senaste motorsågarna, högpresterande mopeder', 'Mager blandning: mindre rök, renare förbränning, för premium-syntetoljor']
    ] },

    { type: 'title', text: 'Konsekvenser av fel förhållanden', level: 3 },
    { type: 'proscons', items: [
      { pro: 'För mycket olja (Fet blandning)', con: 'Kraftig vit rök, sotiga tändstift, koksbildning, dålig acceleration, motorstopp' },
      { pro: 'För lite olja (Mager blandning)', con: 'Kolven skär på några sekunder, repade cylinderväggar, totalt motorhaveri' },
      { pro: 'Rätt förhållande', con: 'Jämn gång, rätt smörjning, optimal förbränning, längre livslängd, pålitlig start' }
    ] },

    { type: 'title', text: 'Vanliga förhållanden per utrustning', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Motorsågar', html: '<strong>Stihl, Husqvarna, Echo:</strong> Moderna modeller kräver oftast 1:40 eller 1:50. Kolla alltid din manual — 1:25 på en modern såg riskerar sotiga stift. Äldre Stihl-maskiner (90-talet och tidigare) kan föreskriva 1:25 eller 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Mopeder & Motorcyklar', html: '<strong>Vespa, Honda, Yamaha:</strong> De flesta kräver 1:33 för äldre modeller, 1:40–1:50 för moderna versioner. Högpresterande mopeder föreskriver ofta 1:50. Verkstadshandboken är den enda källan till sanning.' },
    { type: 'card', icon: 'mdi:tools', title: 'Lövblåsar & Trimmers', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Vanligtvis 1:50 (moderna) eller 1:40 (något äldre). Dessa verktyg är gjorda för kort säsongsanvändning, så magra förhållanden sparar rök utan att offra pålitlighet.' },

    { type: 'title', text: 'Oljetyp är lika viktigt som förhållande', level: 3 },
    { type: 'comparative', items: [
      { title: 'Mineralbaserad Tvåtaktsolja', description: 'Budgetalternativ för tillfällig användning. Högre askhalt, mer rök, tillräckligt skydd för standardförhållanden.', icon: 'mdi:beaker', points: ['Lägre kostnad', 'Synlig rök', 'Mer sotbildning', 'Fungerar för 1:40 förhållanden'] },
      { title: 'Syntetisk Tvåtaktsolja', description: 'Premiumval för frekventa användare. Renare förbränning, bättre skydd, tillåter magrare förhållanden. Temperaturstabil.', icon: 'mdi:flame', points: ['Mindre rök', 'Bästa motorskyddet', 'Tillåter 1:50 säkert', 'Längre hållbarhet'], highlight: true },
      { title: 'Delsyntetisk Olja', description: 'Mellanväg mellan mineral och helsyntet. Bra skydd till rimlig kostnad. Vanlig rekommendation från tillverkare.', icon: 'mdi:beaker-outline', points: ['Balanserad prestanda', 'Måttlig kostnad', 'Bra för 1:40 förhållanden', 'Mindre rök än mineral'] }
    ], columns: 3 },

    { type: 'title', text: 'Steg-för-steg blandning', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'Rätt sätt att blanda', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Använd en dedikerad dunk</strong> endast för bränsleblandning. Ren, torr, märkt.</li><li><strong>Häll i hälften av bensinen</strong> först.</li><li><strong>Tillsätt den beräknade oljemängden</strong> (använd denna kalkylator för precision).</li><li><strong>Fyll på med resten av bensinen</strong> för att nå målvolymen.</li><li><strong>Skaka kraftigt i 1–2 minuter</strong> tills färgen är jämn. En homogen blandning = jämn smörjning.</li><li><strong>Märk dunken</strong> med datum, förhållande och bränsletyp.</li><li><strong>Använd inom 30 dagar</strong> (syntetiska oljor upp till 60 dagar).</li></ol>' },

    { type: 'title', text: 'När du bör ifrågasätta manualen', level: 3 },
    { type: 'tip', html: '<strong>Kontrollera alltid förhållandet i manualen först.</strong> Om du inte hittar den, besök tillverkarens hemsida. Gissa aldrig — fel förhållande gör garantin ogiltig och riskerar att motorn skär. För äldre maskiner utan manual, sök online på modellnumret.' },

    { type: 'title', text: 'Ordlista: Tvåtaktsbegrepp förklarade', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mager blandning', definition: 'Bränsle med för lite olja (högt förhållande som 1:50). Risk för att kolven skär pga bristande smörjning.' },
      { term: 'Fet blandning', definition: 'Bränsle med för mycket olja (lågt förhållande som 1:25). Orsakar rök, sotiga stift och koks.' },
      { term: 'Homogen blandning', definition: 'Jämn blandning av bensin och olja, uppnås genom noggrann skakning. Avgörande för smörjning.' },
      { term: 'Skärning (Seizure)', definition: 'När kolven fastnar i cylindern pga bristande smörjning och friktion. Innebär totalt motorhaveri.' },
      { term: 'Syntetolja', definition: 'Laboratorieframställd olja som ger bättre skydd, renare förbränning och temperaturstabilitet.' },
      { term: 'Tvåtaktsmotor', definition: 'Motor som slutför arbetscykeln på två kolvrörelser. Lättare och enklare än fyrtakt.' },
      { term: 'Fyrtaktsmotor', definition: 'Motor med separat oljesmörjning och fyrastegs-cykel. Oljan blandas inte i bränslet.' }
    ] },

    { type: 'title', text: 'Hur kalkylatorn hjälper dig', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Exakta beräkningar, inga mätfel', icon: 'mdi:check-circle' },
      { value: 'Direkt', label: 'Exakta mängder på sekunder', icon: 'mdi:flash' },
      { value: '4 Ratios', label: '1:25, 1:33, 1:40, 1:50 täcks', icon: 'mdi:counter', trend: { value: 'Plus egna förhållanden', positive: true } },
      { value: 'Delbar', label: 'Kopiera och dela din setup via URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Vanliga misstag som dödar motorer', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Använda fyrtaktsolja i tvåtaktsmotorer', icon: 'mdi:alert', badge: 'Motordöd', html: 'Fyrtaktsoljor är gjorda för cirkulation, inte förbränning. I en tvåtaktsmotor brinner de inte rent och förstör motorn snabbt.' },
    { type: 'diagnostic', variant: 'warning', title: 'Glömma att blanda noga', icon: 'mdi:alert', badge: 'Risk för skärning', html: 'Om olja och bensin separeras pga dålig blandning körs delar av motorn utan smörjning. Skaka alltid dunken ordentligt.' },
    { type: 'diagnostic', variant: 'warning', title: 'Använda gammalt bränsle (>60 dagar)', icon: 'mdi:alert', badge: 'Gummibildning', html: 'Bensin med etanol bryts ner över tid. Gammal blandning lämnar beläggningar i förgasaren. Blanda bara det du använder inom 30 dagar.' },

    { type: 'title', text: 'Sammanfattning FAQ', level: 3 },
    { type: 'summary', title: 'Innan du blandar', items: [
      'Kolla manualen för exakt förhållande — det är tillverkarens specifikation.',
      'Se till att använda tvåtaktsolja, inte fyrtaktsolja.',
      'Använd en ren dunk endast avsedd för bränsleblandning.',
      'Använd färsk bensin och kompatibel olja.',
      'Blanda noga och märk med datum och förhållande.',
      'Använd blandningen inom 30 dagar.'
    ] },
  ],
  ui: {
    titleMain: 'Tvåtaktsblandning Kalkylator',
    labelFuelVolume: 'Bensinmängd',
    labelRatio: 'Blandningsförhållande',
    labelOilRequired: 'Olja som behövs',
    labelTotalMixture: 'Total blandning',
    labelRichness: 'Blandningens fethet',
    labelPresets: 'Vanliga förhållanden',
    labelCustomRatio: 'Eget förhållande (1:X)',
    btnClear: 'Rensa',
    btnCopyResults: 'Kopiera resultat',
    btnSwitchMode: 'Byt läge',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Mager (mindre olja, risk för skärning)',
    richBalanced: 'Balanserad (standardmix)',
    richRich: 'Fet (mer olja, mer rök, motorskydd)',
    msgReady: 'Klar',
    msgMixtureReady: 'Blandning beräknad',
    tooltipFuelVolume: 'Ange mängden bensin i liter',
    tooltipRatio: 'Ange förhållande som 25, 33, 40 eller 50 (för 1:25, 1:33, etc.)',
    recipientLabel: 'Blandningsdunk',
    oilPercentage: 'Olja %',
    labelVolume: 'Volym',
    labelRatioShort: 'Ratio',
    labelOilTip: '2% oljemix = 1:50 förhållande',
    labelMixingTips: 'Tips för blandning',
    labelMixingTipsDesc: 'Blanda i ren dunk: bensin först, tillsätt olja, sedan resten av bensinen. Skaka väl (1-2 min) för jämn blandning. Märk med datum och förhållande.',
    recipePrefix: 'För',
    recipeAt: 'bensin med',
    recipeAdd: 'tillsätt exakt',
    recipeOfOil: 'tvåtaktsolja.',
    copyTextPrefix: '2-Taktsmix',
    copyTextFuel: 'bensin',
    copyTextOil: 'olja',
  },
};
