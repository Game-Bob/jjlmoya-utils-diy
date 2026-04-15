import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';

const slug = 'borrslipningsmaster';
const title = 'Borrslipningsmästare: Precisionsmått';
const description = 'Interaktiv guide för att slipa HSS-borrar. Digitalt mått på skärmen för kontroll av 118°- och 135°-vinklar. Beräknar RPM och diagnostiserar skärfel.';

const faqData = [
  {
    question: 'Kan jag lägga borren direkt på skärmen?',
    answer: 'Ja, verktyget är utformat så att du kan vila borrens axel mot centrumlinjen på det digitala måttet och verifiera skärens symmetri direkt.',
  },
  {
    question: 'Hur vet jag om släppningsvinkeln är korrekt?',
    answer: 'När du vrider på borren måste den bakre delen av skäret vara synbart lägre. Om du ser att metallen glänser lika mycket över hela spetsen saknas släppning (destalonar).',
  },
  {
    question: 'Vilket varvtal ska jag använda efter slipning?',
    answer: 'Det beror på diametern; vår integrerade kalkylator ger dig exakt data baserat på det material du valde i det första steget.',
  },
  {
    question: 'Vad är skillnaden mellan HSS och hårdmetall?',
    answer: 'HSS (snabbstål) är billigare och mer slagtåligt. Hårdmetall tål högre hastigheter men är sprödare. För manuell slipning är HSS standard.',
  },
  {
    question: 'Behöver jag speciell utrustning för att slipa?',
    answer: 'En roterande slipsten med medelhög kornstorlek (120-150) räcker. Det viktiga är att hålla stenen balanserad och plan för att få jämna resultat.',
  },
];

const howToData = [
  { name: 'Välj material', text: 'Välj den metall eller det material du ska borra i för att fastställa målvinkel och skärhastighet.' },
  { name: 'Verifiera symmetri', text: 'Vila borren mot skärmen och se till att båda skären stämmer överens med de blå linjerna.' },
  { name: 'Kontrollera klacken', text: 'Kontrollera visuellt att skärets baksida inte skaver mot arbetsstycket (släppningsvinkel).' },
  { name: 'Beräkna RPM', text: 'Ange diameter och justera din borr till den rekommenderade hastigheten för det valda materialet.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    { name: 'Workshopmanual - Borrslipning (PDF)', url: 'https://sv.wikipedia.org/wiki/Spiralborr#' },
    { name: 'Metallteknologi - Borrvinklar', url: 'https://www.google.com/search?q=borr+slipning+vinklar' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Borrslipningsmästare: Professionell teknik', level: 2 },
    { type: 'paragraph', html: 'Borrslipning är en av de mest värdefulla färdigheterna i alla verkstäder. En korrekt slipad borr förbättrar hålets kvalitet, skyddar livslängden på dina elverktyg och garanterar operatörens säkerhet.' },
    { type: 'title', text: 'Slipningens pelare: Spetsvinkel', level: 3 },
    { type: 'paragraph', html: 'Spetsvinkeln definierar hur borren angriper materialet. Standardvinklar är 118° för mjuka stål, 135° för rostfritt och 140° för hårda stål. Varje material kräver en specifik vinkel för att maximera inträngningen utan att kompromissa med hållfastheten.' },
    { type: 'title', text: 'Den stora glömda faktorn: Släppningsvinkel', level: 3 },
    { type: 'paragraph', html: 'Det vanligaste felet är att ignorera släppningsvinkeln. Om skärets baksida är plan kommer borren bara att skava, vilket genererar extrem värme. Lösningen är att slipa ner den bakre delen av skäret något.' },
  ],
  ui: {
    labelMaterial: 'Arbetsmaterial',
    matSteel: 'Stål',
    matInox: 'Rostfritt',
    matHard: 'Hårda',
    matBrass: 'Mässing',
    matPlastic: 'Plast',
    matWood: 'Trä',
    labelDiameter: 'Borrdiameter (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Hastighet',
    unitRpm: 'RPM',
    labelCooling: 'Skärning',
    btnDiagnosis: 'Skär den inte bra? Diagnos',
    diagTitle: 'Feldiagnos',
    diagClose: 'Stäng',
    diagIssue1: '1. Ryker och går inte igenom',
    diagIssue1Desc: 'Släppningsvinkel saknas. Metallen bakom skäret skaver mot materialet. Slipa ner baksidan så att skäret är den högsta punkten.',
    diagIssue2: '2. Excentriskt eller för stort hål',
    diagIssue2Desc: 'Spetsen är inte centrerad. Skären har olika längder. Se till att spetsen nuddar exakt mitten av måttet.',
    diagIssue3: '3. Brända skär (blåa)',
    diagIssue3Desc: 'För högt varvtal. Kontrollera verktygets RPM-beräkning för denna diameter och detta material.',
    gaugeInstruction: 'VILA AXELN MOT DEN VERTIKALA LINJEN',
  },
};
