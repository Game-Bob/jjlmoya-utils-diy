import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verkstadsomvandlare-tum-brak-till-millimeter';
const title = 'Verkstadsomvandlare: Bråk till Millimeter';
const description = 'Omvandla tum-bråk till millimeter direkt. Hitta närmaste standardbultar, skruvar och hylsor för din verkstad. Designad för smutsiga händer och arbetshandskar.';

const faqData = [
  {
    question: 'Varför behöver jag omvandla bråk till millimeter?',
    answer: 'De flesta moderna verktyg och fästelement använder det metriska systemet, men många äldre verktyg och specifikationer använder fortfarande tum-bråk. Denna omvandlare överbryggar det gapet och hjälper dig att hitta den exakta metriska motsvarigheten eller närmaste standardstorlek.',
  },
  {
    question: 'Vad är skillnaden mellan 1/2 tum och 12,7 mm?',
    answer: '1/2 tum är exakt 12,7 millimeter (0,5 × 25,4 = 12,7). Metriska och imperiala verktyg är ofta utbytbara vid standardstorlekar eftersom tillverkare anpassar vanliga fäststorlekar i båda systemen.',
  },
  {
    question: 'Varför visar verktyget "närmaste matchning"?',
    answer: 'Eftersom exakta omvandlingar ofta hamnar mellan standardstorlekar på fästelement. Verktyget hittar den bult eller hylsa som ligger närmast ditt mått, så att du kan använda det som finns tillgängligt i verkstaden.',
  },
  {
    question: 'Vad är skillnaden mellan snickeri- och metallprecision?',
    answer: 'Inom snickeri är skillnader på 0,5 mm ofta försumbara. Inom metallarbete och maskinteknik räknas varje 0,1 mm. Precisionsläget ger ledtrådar om acceptabla toleransintervall för ditt material.',
  },
  {
    question: 'Kan jag använda detta verktyg offline?',
    answer: 'Ja. Alla beräkningar sker i din webbläsare. Verktyget fungerar helt offline efter första laddningen, perfekt för användning i verkstaden utan WiFi.',
  },
  {
    question: 'Varför innehåller verktyget en historik?',
    answer: 'Vid demontering eller projekt med många delar låter historiken dig kontrollera mått utan att skriva in dem igen, och hjälper dig att bygga en stycklista medan du arbetar.',
  },
];

const howToData = [
  {
    name: 'Välj mättyp',
    text: 'Välj "Framåt" för att omvandla ett bråk till millimeter, eller "Bakåt" för att hitta bråket för ett mått du tagit med skjutmått.',
  },
  {
    name: 'Ange måttet',
    text: 'Använd trespaltsinmatningen (helatal, täljare, nämnare) eller tryck på en snabbvals-knapp. Med stegknapparna kan du justera utan att skriva.',
  },
  {
    name: 'Granska resultaten',
    text: 'Resultatet visar den exakta omvandlingen plus närmaste standardstorlek för bult och hylsa. En visuell skala ger en känsla för proportioner.',
  },
  {
    name: 'Spara i historiken',
    text: 'Klicka på "Spara i historik" för att behålla mått för senare bruk. Historiken sparas i din webbläsare, även efter att du stängt ner den.',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Varför precision vid bråkomvandling är avgörande i verkstaden', level: 2 },
    { type: 'paragraph', html: 'I en professionell verkstad eller vid avancerat hemmafixande leder ett "ungefär" ofta till runddragna bultar, ostadiga fogar eller misslyckade konstruktioner. Detta verktyg överbryggar klyftan mellan traditionella tum-mått och det metriska systemets precision, vilket säkerställer att dina projekt håller professionell standard.' },
    { type: 'title', text: 'Standardomvandlingen: 1/2" mot 12,7 mm', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: 'Är metriska och imperiala system utbytbara?', html: '<p>Många antar det. Även om 1/2" är exakt 12,7 mm, är den närmaste metriska hylsan 13 mm. Att använda fel verktyg kan skada bulthuvuden. Vår omvandlare identifierar den <strong>närmaste standardmatchningen för verktyg</strong> så att du aldrig skadar din hårdvara.</p>' },
    { type: 'title', text: 'Tolerans inom snickeri kontra metallarbete', level: 3 },
    { type: 'paragraph', html: 'Toleranskraven varierar kraftigt beroende på hantverk. Inom <strong>snickeri</strong> är en tolerans på 1/64" (0,4 mm) oftast acceptabel. Inom <strong>metallarbete och maskinteknik</strong> räknas varje 0,1 mm eller till och med 0,01 mm. Vårt verktyg innehåller ett precisionsläge som hjälper dig att avgöra vilken standardstorlek som är det säkraste valet för ditt specifika material.' },
    { type: 'title', text: '3 viktiga tips för noggranna mätningar', level: 3 },
    { type: 'paragraph', html: '<strong>1. Använd skjutmått:</strong> För bakåtsökning, använd alltid digitala skjutmått för mest exakta millimeterinmatning. <strong>2. Kontrollera slitage:</strong> Gamla hylsor och bultar kan ha slitna kanter, vilket gör "närmaste matchning" ännu viktigare. <strong>3. Kontrollera gängstigning:</strong> Kom ihåg att även om huvudstorleken matchar, kommer gängstigningen (metrisk vs. tum) alltid att vara olika.' },
  ],
  ui: {
    labelFraction: 'Mättyp',
    labelWhole: 'Heltal',
    labelNumerator: 'Täljare',
    labelDenominator: 'Nämnare',
    labelInches: 'Tum',
    labelMillimeters: 'Millimeter',
    resultTitle: 'Omvandlingsresultat',
    resultFraction: 'Bråk',
    resultInches: 'Tum',
    resultMillimeters: 'Millimeter',
    matchTitle: 'Närmaste standardfäste',
    matchClosestFastener: 'Standardbult eller skruvstorlek',
    matchClosestSocket: 'Standardhylsa eller nyckelstorlek',
    matchDifference: 'Skillnad från ditt mått',
    matchRecommendation: 'Använd denna storlek om tillgänglig',
    reverseSearchTitle: 'Bakåtsökning',
    reverseSearchLabel: 'Uppmätt storlek (mm)',
    reverseSearchButton: 'Hitta bråk',
    reverseSearchHint: 'Mät med skjutmått, ange värdet',
    unitMm: 'mm',
    unitInch: 'tum',
    modeForward: 'Bråk → Metriskt',
    modeReverse: 'Metriskt → Bråk',
    precisionLabel: 'Precisionsläge',
    precisionCarpentry: 'Snickeri',
    precisionMetal: 'Metallarbete',
    buttonConvert: 'Omvandla',
    buttonClear: 'Rensa',
    buttonCopyResult: 'Kopiera resultat',
    buttonSaveToHistory: 'Spara i historik',
    historyTitle: 'Historik',
    historyEmpty: 'Inga mått än',
    historyRemove: 'Ta bort',
    helpText: 'Välj ett mått eller ange ett bråk för att komma igång.',
    toolOverline: 'Verkstadsverktyg',
    labelVisualReference: 'Visuell referens (1 tum = 96px)',
  },
};
