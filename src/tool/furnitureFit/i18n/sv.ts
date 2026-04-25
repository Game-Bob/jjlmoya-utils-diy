import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkylator-mobelutrymme';
const title = 'Utrymmeskalkylator för flytt och möbler';
const description = 'Kontrollera om din soffa, garderob eller ditt bord får plats i hissen eller genom dörren. Använd 3D-Pythagoras sats för att beräkna lutningar.';

const faqData = [
  {
    question: 'Varför kan en soffa inte gå in trots att den är mindre än dörren?',
    answer: 'På grund av svängvinkeln. Om korridoren är smal måste soffan föras in i sidled eller snett. Den begränsande faktorn är inte bara dörrbredden utan även den tillgängliga svängradien i rummet.',
  },
  {
    question: 'Vad är möbelns diagonal och varför är den viktig?',
    answer: 'Det är det längsta avståndet mellan två motstående hörn. Det är avgörande för att veta om en hög möbel kan resas upp i ett rum med lågt tak efter att den monterats på golvet.',
  },
  {
    question: 'Hur mäter man en hiss korrekt?',
    answer: 'Mät inte bara golvet. Mät bredden på den öppna dörren, det fria djupet och den totala höjden. Diagonalen från dörrens bas till det övre bakre hörnet är det viktigaste måttet.',
  },
  {
    question: 'Vilka delar bör demonteras först?',
    answer: 'Soffben, garderobshandtag och kylskåpsdörrar kan ofta ge de där kritiska 5 till 10 centimetrarna som avgör om en möbel går in eller blir kvar på gatan.',
  },
];

const howToData = [
  { name: 'Mät möbeln (längd, bredd, höjd)', text: 'Ta objektets maximala mått, inklusive alla utstickande delar som armstöd eller handtag.' },
  { name: 'Mät kritiska passager', text: 'Mät dörrens fria öppning (från karm till karm), hissens insida och korridorernas bredd.' },
  { name: 'Ange data i simulatorn', text: 'Skriv in dimensionerna i verktyget för att se om möbelns volym är kompatibel med passagens utrymme.' },
  { name: 'Beräkna lutningar', text: 'Om möbeln är mycket hög, använd den beräknade diagonalen för att kontrollera om du kan vrida den på trappavsatsen eller inuti hissen.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vetenskapen bakom flytt och Pythagoras sats', level: 2 },
    { type: 'paragraph', html: 'Flyttar är inte bara ett prov på fysisk styrka; de är ett komplext geometriskt pussel. Det skenbara utrymmet i ett rum eller en hiss lurar det mänskliga ögat, särskilt när vi ignorerar den tredje dimensionen. Matematik kan spara dig tusentals kronor i returer och misslyckade transporter.' },
    { type: 'title', text: 'Tricket med 3D-diagonalen', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Gyllene regel', html: '<p>Mät aldrig bara möbeln. Mät alltid de <strong>kritiska åtkomstpunkterna</strong>: dörrkarmens bredd, takets lägsta punkt vid trappavsatsen och hissens faktiska djup med stängda dörrar. Formeln <code>d = √(w² + h² + z²)</code> avslöjar om den går in snett.</p>' },
    { type: 'title', text: 'Soffproblemet i korridoren', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Manövreringsutrymme', html: '<p>Ett vanligt misstag är att anta att om möbeln mäter 80 cm och öppningen är 80 cm, så går den igenom. Så är det inte. Flyttkarlarnas händer, tygets elasticitet och väggarnas ojämnheter kräver en minsta marginal på <strong>2 till 5 cm</strong>. Utan denna marginal blir möbeln repad eller fastnar genom tryck.</p>' },
    { type: 'title', text: '3 fel som förstör en flytt', level: 3 },
    { type: 'paragraph', html: 'Även med korrekta mått orsakar dessa osynliga faktorer ofta katastrofer: <strong>Taklampan</strong> — ofta bortglömd vid diagonal rotation. <strong>Möbelns svängradie</strong> — en stel möbel böjer sig inte. <strong>Förpackningen</strong> — bubbelplast och skyddskartong kan lägga till 1 till 3 cm på varje sida.' },
  ],
  ui: {
    conTitle: 'Utrymmets dimensioner',
    conHint: 'T.ex: Standardhiss, dörrkarm eller skåpbil.',
    objTitle: 'Möbelns dimensioner',
    labelWidth: 'Bredd (cm)',
    labelHeight: 'Höjd (cm)',
    labelDepth: 'Djup (cm)',
    labelLength: 'Längd (cm)',
    labelMargin: 'Felmarginal (cm)',
    vizLabel: 'Förenklad spatial vy',
    verdictDefault: 'Går den in?',
    verdictHint: 'Ange måtten för att kontrollera den spatiala kompatibiliteten.',
    verdictYes: 'JA, DEN GÅR IN!',
    verdictNo: 'GÅR INTE IN',
    fitDirect: 'Möbeln går in perfekt på ett direkt sätt.',
    fitDiagonal3d: 'Går in snett diagonalt (3D Pythagoras).',
    fitDiagonalPlane: 'Går in snett i ett av sidoplanen.',
    fitNope: 'Möbeln är för stor även för att gå in diagonalt.',
    diagLabel: 'Maximal diagonal (3D Pythagoras):',
    objLabel: 'Möbel',
  },
};
