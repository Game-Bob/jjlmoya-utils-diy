import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';

const slug = 'mistrzowskie-ostrzenie-wiertel';
const title = 'Mistrzowskie Ostrzenie Wierteł: Sprawdzian Precyzyjny';
const description = 'Interaktywny przewodnik ostrzenia wierteł HSS. Cyfrowy sprawdzian na ekranie do weryfikacji kątów 118° i 135°. Oblicza RPM i diagnozuje błędy skrawania.';

const faqData = [
  {
    question: 'Czy mogę położyć wiertło bezpośrednio na ekranie?',
    answer: 'Tak, narzędzie zostało zaprojektowane tak, aby można było oprzeć oś wiertła o linię środkową cyfrowego sprawdzianu i bezpośrednio zweryfikować symetrię ostrzy.',
  },
  {
    question: 'Skąd mam wiedzieć, czy kąt przyłożenia jest prawidłowy?',
    answer: 'Podczas obracania wiertła tylna część ostrza musi być wyraźnie niżej. Jeśli widzisz, dass metal błyszczy się jednakowo na całym wierzchołku, oznacza to, że brakuje kąta przyłożenia (podszlifowania).',
  },
  {
    question: 'Jakie obroty powinienem zastosować po naostrzeniu?',
    answer: 'To zależy od średnicy; nasz zintegrowany kalkulator poda Ci dokładne dane na podstawie materiału wybranego w pierwszym kroku.',
  },
  {
    question: 'Jaka jest różnica między HSS a węglikiem spiekanym?',
    answer: 'HSS (stal szybkotnąca) jest tańsza i bardziej odporna na uderzenia. Węglik spiekany wytrzymuje wyższe prędkości, ale jest bardziej kruchy. Do ręcznego ostrzenia standardem jest HSS.',
  },
  {
    question: 'Czy do ostrzenia potrzebuję specjalnego sprzętu?',
    answer: 'Wystarczy obrotowa ściernica o średnim ziarnie (120-150). Ważne jest, aby ściernica była wyważona i płaska, co pozwoli uzyskać powtarzalne wyniki.',
  },
];

const howToData = [
  { name: 'Wybierz Materiał', text: 'Wybierz metal lub materiał, który będziesz wiercić, aby ustalić docelowy kąt i prędkość skrawania.' },
  { name: 'Zweryfikuj Symetrię', text: 'Oprzyj wiertło na ekranie i upewnij się, że oba ostrza pokrywają się z niebieskimi liniami.' },
  { name: 'Sprawdź Piętkę', text: 'Sprawdź wizualnie, czy tylna część ostrza nie ociera o obrabiany przedmiot (kąt przyłożenia).' },
  { name: 'Oblicz RPM', text: 'Wprowadź średnicę i ustaw wiertarkę na zalecaną prędkość dla wybranego materiału.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    { name: 'Podręcznik warsztatowy - Ostrzenie wierteł (PDF)', url: 'https://pl.wikipedia.org/wiki/Wiertło_kręte' },
    { name: 'Technologia metali - Kąty wierteł', url: 'https://www.google.com/search?q=ostrzenie+wiertla+katy' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Mistrzowskie Ostrzenie Wierteł: Technika Profesjonalna', level: 2 },
    { type: 'paragraph', html: 'Ostrzenie wierteł to jedna z najcenniejszych umiejętności w każdym warsztacie. Prawidłowo naostrzone wiertło poprawia jakość otworu, chroni żywotność elektronarzędzi i zapewnia bezpieczeństwo operatora.' },
    { type: 'title', text: 'Filary Ostrzenia: Kąt Wierzchołkowy', level: 3 },
    { type: 'paragraph', html: 'Kąt wierzchołkowy definiuje, jak wiertło atakuje materiał. Standardowe kąty to 118° dla stali miękkich, 135° dla stali nierdzewnej i 140° dla stali twardych. Każdy materiał wymaga innego kąta, aby zmaksymalizować penetrację bez osłabiania wytrzymałości.' },
    { type: 'title', text: 'Najczęstsze Przeoczenie: Kąt Przyłożenia', level: 3 },
    { type: 'paragraph', html: 'Najczęstszym błędem jest ignorowanie kąta przyłożenia lub podszlifowania. Jeśli tylna krawędź ostrza jest płaska, wiertło będzie tylko ocierać, generując ekstremalne ciepło. Rozwiązaniem jest lekkie zebranie materiału z tylnej części ostrza.' },
  ],
  ui: {
    labelMaterial: 'Materiał obrabiany',
    matSteel: 'Stal',
    matInox: 'Nierdzewna',
    matHard: 'Twarde',
    matBrass: 'Mosiądz',
    matPlastic: 'Tworzywo',
    matWood: 'Drewno',
    labelDiameter: 'Średnica wiertła (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Prędkość',
    unitRpm: 'RPM',
    labelCooling: 'Skrawanie',
    btnDiagnosis: 'Nie tnie dobrze? Diagnoza',
    diagTitle: 'Diagnoza Usterek',
    diagClose: 'Zamknij',
    diagIssue1: '1. Dymi i nie przechodzi',
    diagIssue1Desc: 'Brak kąta przyłożenia. Metal za ostrzem ociera o materiał. Zeszlifuj tylną część tak, aby ostrze było najwyższym punktem.',
    diagIssue2: '2. Otwór nieosiowy lub za duży',
    diagIssue2Desc: 'Wierzchołek nie jest wycentrowany. Ostrza mają różne długości. Upewnij się, że wierzchołek dotyka dokładnie środka sprawdzianu.',
    diagIssue3: '3. Ostrza przypalone (niebieskie)',
    diagIssue3Desc: 'Nadmierna prędkość. Sprawdź obliczenia RPM narzędzia dla tej średnicy i materiału.',
    gaugeInstruction: 'OPRZYJ OŚ NA LINII PIONOWEJ',
  },
};
