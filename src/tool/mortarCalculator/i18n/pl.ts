import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-zapraw';
const title = 'Proporcje Tradycyjnych Zapraw Wapiennych: Tynki i Gładzie';
const description = 'Bezpłatny kalkulator zapraw wapienno-piaskowych. Uzyskaj dokładne proporcje dla tynków podkładowych, narzutów i gładzi według tradycyjnych metod (Witruwiusz).';

const faqData = [
  {
    question: 'Dlaczego warto używać wapna zamiast cementu?',
    answer: 'Wapno to materiał "żywy" i oddychający, który umożliwia odprowadzanie pary wodnej, zapobiegając wilgoci z kondensacji. Ponadto jest bardziej elastyczne niż cement, co ogranicza pojawianie się pęknięć w starych murach.',
  },
  {
    question: 'Jaka jest idealna proporcja dla tynku podkładowego?',
    answer: 'Zgodnie z tradycją witruwiańską, dla czystego piasku rzecznego stosuje się proporcję 1:3 (jedna część wapna na trzy części piasku). Dla piasku kopalnianego zaleca się 1:2, aby zapewnić spójność zaprawy.',
  },
  {
    question: 'Co to jest gładź lub tynk wykończeniowy?',
    answer: 'To ostatnia warstwa ściany. Stosuje się znacznie drobniejszy piasek (czasami pył marmurowy) i większą proporcję wapna, aby uzyskać gładkie, jedwabiste wykończenie, które można malować lub pozostawić naturalne.',
  },
  {
    question: 'Jak długo twardnieje zaprawa wapienna?',
    answer: 'Wapno powietrzne twardnieje przez karbonatyzację (pochłanianie CO2 z powietrza). Początkowy proces wiązania trwa kilka dni, ale maksymalną twardość osiąga się po miesiącach, zyskując na wytrzymałości z biegiem lat.',
  },
];

const howToData = [
  { name: 'Zidentyfikować rodzaj podłoża', text: 'Sprawdź, czy będziesz pracować na kamieniu, starej cegle czy bloczku. Podłoże musi być czyste i lekko wilgotne.' },
  { name: 'Wybrać granulację piasku', text: 'Użyj grubego piasku do warstwy szczepnej i drobnego piasku do wykończenia kosmetycznego. Czystość piasku definiuje jakość zaprawy.' },
  { name: 'Mieszanie składników', text: 'Wymieszaj wapno i piasek na sucho przed dodaniem wody. Konsystencja powinna być plastyczna, nie płynna.' },
  { name: 'Aplikacja i zacieranie', text: 'Rozprowadź zaprawę pacą i użyj zacieraczki, aby wyrównać powierzchnię, gdy zaprawa zacznie "ciągnąć" (twardnieć powierzchniowo).' },
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Traktat o Zaprawach: Mądrość Witruwiusza', level: 2 },
    { type: 'paragraph', html: 'Marek Witruwiusz Polio w Księdze VII swojego dzieła <em>De Architectura</em> opisał nie tylko techniki, ale i filozofię. Rozumiał, że wieczność budynku tkwi w jego połączeniach. Zaprawa nie jest zwykłym klejem; to tkanka łączna. Jej proporcje (1:3, 1:2, 1:1) są dziedzictwem stuleci rzymskich obserwacji empirycznych, poszukujących idealnej równowagi między wytrzymałością a elastycznością.' },
    { type: 'title', text: 'Granulacja Kruszywa: Klucz do Jakości', level: 3 },
    { type: 'paragraph', html: 'Jakość zaprawy wapiennej zależy w dużej mierze od granulacji kruszywa. Dla <strong>Trullissatio</strong> (tynk podkładowy) stosuje się gruby piasek rzeczny 2-5 mm. Dla <strong>Arenato</strong> (narzut pośredni) piasek średni płukany 0,5-2 mm. Dla <strong>Marmorato</strong> (gładź cienka) pył marmurowy poniżej 0,5 mm.' },
    { type: 'title', text: 'Tajemnica Przyczepności Mechanicznej', level: 3 },
    { type: 'paragraph', html: 'Przyczepność nie jest chemiczna, lecz <strong>mechaniczna</strong>. Wyobraź sobie miliony mikroskopijnych korzeni. Zaprawa musi wniknąć w pory cegły, aby stworzyć fizyczny "klucz". Bez porowatości nie ma zakotwiczenia.' },
  ],
  ui: {
    leftTitle: 'System Witruwiański',
    centerTitle: 'Dostępne Materiały',
    rightTitle: 'Szacowane Pokrycie',
    btnCal: 'Wapno',
    btnArena: 'Piasek',
    labelCalPasta: 'Ciasto Wapienne (1.30 kg/L)',
    labelCalPolvo: 'Proszek NHL (0.65 kg/L)',
    labelQuantity: 'Dostępna ilość:',
    labelNeedsAlso: 'Będziesz potrzebować również:',
    labelProportion: 'Proporcja: ',
    labelCoverage: 'Pokrycie:',
    labelThickness: 'Grubość całkowita:',
    labelLayers: 'Warstwy:',
    labelWasteFactor: 'Współczynnik ubytku: 20%',
    layersSingular: 'warstwa',
    layersPlural: 'warstwy',
    layersSingularShort: 'warstwa',
    layersPluralShort: 'warstwy',
    materialCal: 'Wapno',
    materialArena: 'Piasek',
    materialMarmol: 'Marmur',
    phaseDescTrullissatio: 'Szorstka warstwa bazowa. 2 warstwy po 15mm. Proporcja 1:3 (Wapno:Piasek rzeczny).',
    phaseDescArenato: 'Warstwa pośrednia. 2 warstwy po 8mm. Proporcja 1:2 (Wapno:Piasek płukany).',
    phaseDescMarmorato: 'Wykończenie cienkie. 1 warstwa podwójna 4mm. Proporcja 1:1 (Wapno:Pył marmurowy).',
    granulometryTitle: 'Granulacja Kruszywa',
    grainTitleCoarse: 'Piasek Gruby',
    grainSubtitleCoarse: 'Piasek Rzeczny',
    grainUsageCoarse: 'Tynk podkładowy',
    grainTitleMedium: 'Piasek Średni',
    grainSubtitleMedium: 'Piasek Płukany',
    grainUsageMedium: 'Narzut pośredni',
    grainTitleFine: 'Pył Drobny',
    grainSubtitleFine: 'Pył Marmurowy (Marmolina)',
    grainUsageFine: 'Gładź cienka',
    specSize: 'Rozmiar:',
    specUse: 'Zastosowanie:',
    specDensity: 'Gęstość:',
  },
};
