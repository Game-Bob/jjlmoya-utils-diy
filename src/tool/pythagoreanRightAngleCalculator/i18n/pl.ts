import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-kata-prostego-pitagorasa-zasada-3-4-5';
const title = 'Kalkulator Kąta Prostego (Twierdzenie Pitagorasa): Zasada 3 4 5 dla Idealnego Wyosiowania';
const description = 'Sprawdź, czy konstrukcje są idealnie prostopadłe (90°), używając twierdzenia Pitagorasa i zasady 3-4-5. Niezbędne narzędzie w budownictwie, stolarstwie i projektach DIY.';

const faqData = [
  {
    question: 'Co to jest zasada 3-4-5?',
    answer: 'Zasada 3-4-5 to prosty trójkąt pitagorejski. Jeśli trójkąt prostokątny ma boki o długości 3, 4 i 5 jednostek w dowolnej skali, kąt między krótszymi bokami wynosi dokładnie 90 stopni. Ta sprawdzona w terenie metoda jest stosowana w budownictwie od wieków.',
  },
  {
    question: 'Jak korzystać z tego kalkulatora?',
    answer: 'Wprowadź długości dwóch ścian (boki A i B) tworzących narożnik. Kalkulator pokaże, jaka powinna być przekątna dla idealnego kąta 90 stopni. Następnie zmierz rzeczywistą przekątną i wprowadź ją, aby sprawdzić, czy narożnik jest naprawdę prosty.',
  },
  {
    question: 'Co jeśli moja przekątna jest inna?',
    answer: 'Jeśli zmierzona przekątna różni się od idealnej, kalkulator pokaże odchylenie. Kolor zielony oznacza ideał, żółty – akceptowalne odchylenie, czerwony – brak kąta prostego. Narzędzie podpowie również, czy należy zwiększyć czy zmniejszyć kąt.',
  },
  {
    question: 'Czy to jest wystarczająco dokładne do budowy?',
    answer: 'Tak. Twierdzenie Pitagorasa jest matematycznie dokładne. Używając taśmy mierniczej, możesz osiągnąć precyzję budowlaną bez specjalistycznych narzędzi i zaawansowanych umiejętności.',
  },
  {
    question: 'Czy mogę przełączać się między calami a stopami?',
    answer: 'Tak. Wybierz cale dla małych projektów lub stopy dla większych konstrukcji. Wszystkie wartości są natychmiast przeliczane bez utraty danych.',
  },
];

const howToData = [
  { name: 'Wybierz jednostkę', text: 'Wybierz cale do precyzyjnych prac lub stopy do większych konstrukcji. Możesz to zmienić w dowolnym momencie.' },
  { name: 'Zmierz oba boki', text: 'Zmierz długość dwóch ścian (boki A i B) tworzących narożnik, który chcesz sprawdzić.' },
  { name: 'Sprawdź idealną przekątną', text: 'Kalkulator pokaże Ci, jaka musi być przekątna dla idealnego kąta 90 stopni.' },
  { name: 'Zmierz swoją przekątną', text: 'Użyj taśmy mierniczej, aby zmierzyć rzeczywistą przekątną. Wprowadź ją w opcjonalnym polu.' },
  { name: 'Odczytaj status', text: 'Zielony = idealny kąt prosty. Żółty = akceptowalne. Czerwony = brak kąta prostego. Skoryguj zgodnie z sugestią.' },
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Twierdzenie Pitagorasa w praktyce', level: 2 },
    { type: 'paragraph', html: 'Idealny kąt 90 stopni to podstawa wysokiej jakości konstrukcji. Ściany muszą być prostopadłe, fundamenty wyosiowane, a ramy idealnie proste. Twierdzenie Pitagorasa zapewnia matematycznie gwarantowaną metodę: a² + b² = c².' },
    { type: 'title', text: 'Dlaczego zasada 3-4-5 działa', level: 3 },
    { type: 'paragraph', html: 'Zasada 3-4-5 to najprostsza trójka pitagorejska. Niezależnie od tego, czy mierzysz w calach, stopach czy jakiejkolwiek innej jednostce: boki o długości 3, 4 i 5 jednostek gwarantują kąt 90 stopni. Jest to udowodnione matematycznie i testowane w budownictwie od wieków.' },
    { type: 'title', text: 'Precyzja bez specjalistycznych narzędzi', level: 3 },
    { type: 'paragraph', html: 'W przeciwieństwie do poziomic czy kątowników, które mogą się uszkodzić lub rozregulować, twierdzenie Pitagorasa jest niezmienne. Używając tylko taśmy mierniczej, możesz sprawdzić każdy narożnik w dowolnej skali. Ten kalkulator eliminuje liczenie w pamięci i zapewnia dokładność.' },
    { type: 'title', text: 'Od teorii do praktycznych wskazówek', level: 3 },
    { type: 'paragraph', html: 'Ten kalkulator zmienia abstrakcyjną matematykę w praktyczne instrukcje terenowe. Jeśli Twoja przekątna jest błędna, powie Ci dokładnie, o ile i w którym kierunku należy dokonać korekty. Zmień teorię w realne wyniki na budowie.' },
  ],
  ui: {
    titleMain: 'Kalkulator Kąta Prostego (Pitagoras)',
    labelInputData: 'Pomiary',
    labelUnitSelection: 'Jednostka',
    btnUnitInches: 'cale',
    btnUnitFeet: 'stopy',
    btnUnitCentimeters: 'centymetry',
    labelSideA: 'Bok A',
    labelSideB: 'Bok B',
    labelMeasuredDiagonal: 'Zmierzona przekątna (opcjonalnie)',
    labelResults: 'Wyniki',
    labelIdealDiagonal: 'Idealna przekątna',
    labelDeviation: 'Odchylenie',
    labelStatus: 'Status',
    labelVerification: 'Weryfikacja kąta prostego',
    btnClear: 'Wyczyść',
    btnCopyResults: 'Kopiuj wyniki',
    labelPresets: 'Szybkie ustawienia',
    unitInches: 'cal',
    unitFeet: 'st',
    unitCentimeters: 'cm',
    tooltipOptional: 'Wprowadź zmierzoną przekątną, aby sprawdzić kąt 90 stopni',
    tooltipPresets: 'Zasada 3-4-5 w różnych skalach',
    statusPerfect: 'Idealny kąt 90 stopni',
    statusAcceptable: 'Akceptowalne odchylenie',
    statusWarning: 'Niewielkie odchylenie',
    statusError: 'Brak kąta prostego',
    statusReady: 'Gotowy',
    msgIdealCalculated: 'Obliczono idealną przekątną',
    actionOpen: 'Otwórz',
    actionClose: 'Zamknij',
    descLarger: 'większa',
    descSmaller: 'mniejsza',
    descCorrection: 'Wymagana korekta',
  },
};
