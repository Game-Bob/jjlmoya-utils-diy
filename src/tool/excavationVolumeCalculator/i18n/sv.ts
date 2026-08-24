import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'schaktvolymberaknare-volymokning-jord';
const title = 'Schaktvolymberäknare och Volymökning Jord';
const description = 'Beräkna schaktvolym i fast mått (i marken) och uppskatta lösvolym efter grävning med svällningsintervall för sand, matjord, lera och grus.';

const faq = [
  {
    question: 'Vad är skillnaden mellan fast mått (fast volym) och lösvolym?',
    answer: 'Fast mått är jordens volym i opåverkat tillstånd i marken. Lösvolym är den volym jorden intar efter grävning då den sväller och blir luftig.',
  },
  {
    question: 'Hur beräknas schaktvolymen?',
    answer: 'Multiplicera längd, bredd och djup. En schakt som är 4 meter lång, 3 meter bred och 0,5 meter djup har en fast volym på 6 kubikmeter.',
  },
  {
    question: 'Varför har lera ett bredare svällningsintervall?',
    answer: 'Lerans egenskaper beror starkt på fukthalt och densitet. Verktyget använder ett bredare intervall eftersom lerans volymökning varierar mer.',
  },
  {
    question: 'Ersätter denna beräknare en geoteknisk undersökning?',
    answer: 'Nej. Resultatet är en uppskattning för transport och containerplanering. Anlita en geotekniker vid grundläggning eller schaktning nära byggnader.',
  },
];

const howTo = [
  { name: 'Ange schaktmått', text: 'Fyll i längd, bredd och djup för schaktningen.' },
  { name: 'Välj jordart', text: 'Välj sand, matjord, lera eller grus för att applicera svällningsfaktorn.' },
  { name: 'Planera borttransport', text: 'Använd fast mått för grävningen och lösvolym för att beräkna antal containers eller lastbilar.' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq,
  bibliographyTitle: 'Källor och tekniska anteckningar',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Två volymer för två behov på byggarbetsplatsen', level: 2 },
    { type: 'paragraph', html: '<strong>Fast mått</strong> (även kallat bank volume) beskriver gropens exakta geometriska volym i orörd mark: längd gånger bredd gånger djup. <strong>Lösvolym</strong> beskriver den verkliga volym som den uppgrävda jorden tar upp på lastbilsflaket, i avfallscontainern eller på det tillfälliga upplaget efter svällning. Att hålla dessa två volymmått strikt åtskilda förhindrar felaktiga transport- och logistikberäkningar.' },
    { type: 'title', text: 'Använd lösvolymsintervallet för logistikplanering', level: 3 },
    { type: 'paragraph', html: 'Välj den jordart som bäst motsvarar markförhållandena i beräknaren och jämför det nedre och övre lösvolymsvärdet med flakkapacitet, containerstorlek och tillgänglig upplagsyta. Intervallet visas avsiktligt eftersom grävmetod, fukthalt och markens packningsgrad påverkar det slutliga resultatet avsevärt.' },
    { type: 'tip', title: 'Schaktsvallning ersätter inte markundersökning', html: 'Fukthalt, grundvattennivå och packningsgrad påverkar den faktiska volymökningen. Vid grundläggning, stödmurar och hantering av förorenade massor krävs alltid en formell geoteknisk markundersökning.' },
    { type: 'title', text: 'Kontrollera antaganden före beställning', level: 3 },
    { type: 'paragraph', html: 'Vid osäkerhet om den exakta jordarten på platsen är det säkrast att göra en provberäkning med två sannolika profiler och planera för den högre transportvolymen tills exakta mätningar har utförts.' },
  ],
  ui: {
    unitSystemLabel: 'Måttsystem',
    unitMetric: 'Metrisk',
    unitImperial: 'Imperial',
    onboarding: 'Fyll i schaktens mått, välj jordart och använd båda volymvärdena för planering och borttransport.',
    dimensionLabel: 'Schaktens mått',
    lengthLabel: 'Längd',
    widthLabel: 'Bredd',
    depthLabel: 'Djup',
    soilLabel: 'Jordart',
    soilSand: 'Sand',
    soilTopsoil: 'Matjord',
    soilClay: 'Lera',
    soilGravel: 'Grus',
    soilSandBand: '10 till 15% svällning',
    soilTopsoilBand: '15 till 25% svällning',
    soilClayBand: '25 till 40% svällning',
    soilGravelBand: '15 till 25% svällning',
    bankVolumeLabel: 'Fast mått',
    bankVolumeHelp: 'Orörd jord i marken',
    looseVolumeLabel: 'Lösvolym',
    looseVolumeHelp: 'Uppskattat intervall efter grävning',
    expansionLabel: 'Tillämpad svällning',
    expansionHelp: 'Intervall för vald jordart',
    sceneTitle: 'Från schakt till upplag',
    sceneBank: 'i marken',
    sceneLoose: 'lösa massor',
    sceneGround: 'marknivå',
    sceneCut: 'utgrävd schakt',
    interpretationTitle: 'Hur du använder resultaten.',
    interpretationText: 'Det första talet visar gropens volym. Intervallet visar den extra volym som massorna tar upp vid borttransport.',
    warning: 'Endast för logistikplanering. Fukt och grävmetod påverkar den faktiska lösvolymen.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'låg svällning',
    soilStatusMedium: 'måttlig svällning',
    soilStatusHigh: 'hög svällning',
    soilStatusLabel: 'Planeringsintervall',
  },
};
