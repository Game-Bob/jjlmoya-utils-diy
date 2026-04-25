import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'passepartout-kalkylator';
const title = 'Passepartout kalkylator: Marginaler med optisk korrektion för inramning';
const description = 'Verktyg för att beräkna passepartout-marginaler med optisk korrektion (bottom weighting). Rama in dina fotografier och konstverk med galleriproportioner.';

const faqData = [
  {
    question: 'Vad är optisk mittkorrektion (Bottom Weighting)?',
    answer: 'Det är en princip inom inramning där den nedre marginalen görs något bredare än de övriga. Detta korrigerar den optiska illusionen som får det geometriska centrumet att se ut som om det "sjunkit" när man tittar på ett upphängt verk.',
  },
  {
    question: 'Vilket material ska passepartouten bestå av?',
    answer: 'För konstnärlig konservering bör det vara syrafri eller pH-neutral kartong (alfa-cellulosa eller bomull). Billig kartong gulnar med tiden och kan skada verket på grund av lignin.',
  },
  {
    question: 'Hur väljer jag färg på marginalen?',
    answer: 'Off-white eller mjuk creme är standarder som inte distraherar från verket. En mörk marginal kan framhäva de vita tonerna i ett fotografi, medan en färgad marginal bör användas med försiktighet så att den inte konkurrerar med verkets färgtoner.',
  },
  {
    question: 'Vad är den ideala marginalbredden?',
    answer: 'En professionell standard är mellan 5 och 8 cm. Om marginalen är för smal ser verket "kvävt" ut. Om den är mycket bred kan det ge små verk en heroisk och minimalistisk känsla.',
  },
];

const howToData = [
  { name: 'Mät konstverket', text: 'Mät den exakta bredden och höjden på pappret eller duken som ska ramas in. Dra av några millimeter om du vill att passepartouten ska täcka bilden lite grann.' },
  { name: 'Mät ramens innermått', text: 'Ta ramens invändiga mått eller falsen där passepartout-kartongen ska sitta.' },
  { name: 'Aktivera optisk korrektion', text: 'Välj alternativet i vår kalkylator om du vill att den nedre marginalen automatiskt ska vara större för en professionell finish.' },
  { name: 'Skär till kartongen', text: 'Använd de resulterande måtten för att skära ut hålet (fönstret) och kartongens yttermått, helst med en 45-graders skärare för en snygg fasning.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vetenskapen bakom den perfekta inramningen', level: 2 },
    { type: 'paragraph', html: 'En <strong>Passepartout</strong> är inte bara en dekorativ kartong; det är lungorna som låter ditt konstverk andas. Denna kalkylator hjälper dig att fastställa de exakta måtten för att skära din kartong, vilket säkerställer att verket placeras perfekt centrerat eller optiskt balanserat i ramen.' },
    { type: 'title', text: 'Varför "Bottom Weighting"?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'Den optiska illusionen av det geometriska centrumet', html: '<p>Det mänskliga ögat tenderar att uppfatta det vertikala geometriska centrumet som något lägre än det faktiskt är. Om du ramar in ett verk exakt i mitten ser det ut som om det "sjunker".</p><p><strong>Bottom Weighting</strong> korrigerar denna illusion genom att lämna en något större nedre marginal, vilket lyfter verket visuellt så att det ser perfekt centrerat ut.</p>' },
    { type: 'title', text: 'Konserveringsmaterial för passepartouter', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Syrafri kartong för konservering', html: '<p>När du väljer kartong ska du alltid leta efter termer som <strong>"Acid-Free"</strong> eller <strong>"Museum Quality"</strong>. Billig kartong av trämassa kan gulna med tiden och frigöra syror som "bränner" ditt konstverk (foxing), vilket förstör det oåterkalleligt.</p>' },
  ],
  ui: {
    sectionTitle: 'Dimensioner',
    sectionDesc: 'Ange måtten i centimeter.',
    frameSizeTitle: 'Ramens storlek',
    artSizeTitle: 'Verkets storlek',
    labelWidth: 'Bredd (cm)',
    labelHeight: 'Höjd (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Använd mer nedmarginal för visuell balans',
    labelOffset: 'Offset (%)',
    errorMsg: 'Verkets storlek måste vara mindre än ramen.',
    labelTop: 'Överkant',
    labelBottom: 'Nederkant',
    labelLeft: 'Vänster',
    labelRight: 'Höger',
    artPlaceholder: 'Ditt verk',
  },
};
