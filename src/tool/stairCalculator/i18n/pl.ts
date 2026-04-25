import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-schodow';
const title = 'Kalkulator Schodów: Projektowanie i Wykonawstwo';
const description = 'Oblicz dokładne wymiary swoich schodów: stopień, podstopnicę, kąt nachylenia i potrzebne materiały. Zastosuj się do prawa Blondela i unikaj błędów budowlanych.';

const faqData = [
  {
    question: 'Co to jest prawo Blondela?',
    answer: 'Jest to wzór, który określa, że aby schody były wygodne, suma dwóch wysokości podstopnic i jednej głębokości stopnia powinna mieścić się w przedziale od 62 do 64 cm (2h + s = 63 cm). Prawo to opiera się na średniej długości ludzkiego kroku.',
  },
  {
    question: 'Jaka jest maksymalna wysokość stopnia?',
    answer: 'W budownictwie mieszkaniowym zaleca się nie przekraczać 18-19 cm. W przestrzeniach publicznych maksimum wynosi zazwyczaj 17,5 cm zgodnie z przepisami. Wyższe podstopnice bardziej męczą i mogą być niebezpieczne.',
  },
  {
    question: 'Jak obliczyć schody przy małej ilości miejsca?',
    answer: 'Jeśli przestrzeń pozioma jest ograniczona, będziesz musiał zwiększyć liczbę stopni (zmniejszając wysokość podstopnicy) lub zaakceptować większe nachylenie. Kalkulator pomoże Ci znaleźć optymalną równowagę.',
  },
  {
    question: 'Co obejmuje obliczenie ilości betonu?',
    answer: 'Obliczana jest całkowita objętość betonu, biorąc pod uwagę stopnie oraz płytę spocznikową/biegową (ukośną płaszczyznę podtrzymującą stopnie). Pominięcie tej płyty skutkowałoby niedoszacowaniem zamówienia materiału.',
  },
  {
    question: 'Dlaczego ważne jest tyczenie kumulacyjne?',
    answer: 'Mierzenie każdego stopnia z osobna generuje skumulowane błędy. Tyczenie kumulacyjne gwarantuje, że wszystkie stopnie będą miały dokładnie tę samą wysokość, poprawiając bezpieczeństwo i komfort użytkowania.',
  },
];

const howToData = [
  { name: 'Zmierzyć wysokość kondygnacji', text: 'Zmierz całkowitą różnicę poziomów (H) od gotowej podłogi dolnej do gotowej podłogi górnej. Jest to podstawowa dana dla wszystkich obliczeń.' },
  { name: 'Wprowadzić dostępną długość', text: 'Opcjonalnie: Jeśli masz ograniczenia przestrzenne, wprowadź dostępną długość poziomą. Użyj 0 dla obliczeń bez ograniczeń.' },
  { name: 'Dostosować liczbę stopni', text: 'Kalkulator zaproponuje początkową liczbę, ale możesz ją zmienić. Obserwuj wskaźnik Blondela: powinien być zielony (62-64 cm) dla maksymalnej wygody.' },
  { name: 'Zdefiniować parametry budowy', text: 'Określ grubość płyty, wykończenia, klasę betonu i szerokość schodów. Te dane wpływają na ostateczne zestawienie materiałów.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Projektowanie Geometryczne Schodów: Prawo Blondela', level: 2 },
    { type: 'paragraph', html: 'Komfort schodów zależy od długości ludzkiego kroku. Twój organizm oczekuje przewidywalnego rytmu podczas wchodzenia. Prawo Blondela określa, że 2 podstopnice + 1 stopień = 62-64 cm to standard gwarantujący maksymalną wygodę i bezpieczeństwo.' },
    { type: 'title', text: 'Kontrola Konstrukcji i Materiałów', level: 3 },
    { type: 'paragraph', html: 'Do profesjonalnego wykonania niezbędne jest uwzględnienie płyty betonowej. Zignorowanie tej objętości skutkowałoby niedoborem betonu i wadliwym wykonaniem. Kalkulator automatycznie integruje te obliczenia.' },
    { type: 'title', text: 'Tyczenie i Błąd Skumulowany', level: 3 },
    { type: 'paragraph', html: 'W budownictwie największym wrogiem jest błąd milimetrowy. Jeśli mierzysz każdy stopień oddzielnie, suma małych błędów może sprawić, że ostatni stopień będzie o 5 cm wyższy lub niższy od pierwszego.' },
  ],
  ui: {
    labelGeometry: 'Geometria i Miejsce',
    labelTotalHeight: 'Wysokość całkowita (H)',
    labelAvailableLength: 'Dostępna długość (L)',
    labelAvailableLengthHint: 'Użyj 0 dla obliczeń dowolnych.',
    labelNumSteps: 'Liczba stopni',
    labelOptimize: 'Optymalizuj (18cm)',
    labelWork: 'Budowa i Instalacja',
    labelSlabThickness: 'Grubość płyty (e)',
    labelFinishThickness: 'Wykończenie',
    labelCeilingHeight: 'Wysokość sufitu',
    labelStairWidth: 'Szerokość schodów',
    labelConcreteStrength: 'Klasa betonu',
    optionH150: 'C12/15 (Chudy)',
    optionH200: 'C16/20 (Budowlany)',
    optionH250: 'C20/25 (Konstrukcyjny)',
    labelRiser: 'Podstopnica',
    labelTread: 'Stopień',
    labelSlope: 'Nachylenie',
    labelRealAdvance: 'Długość całkowita',
    labelLayoutTable: 'Tyczenie i Wykonawstwo',
    colStep: 'Stopień',
    colConcreteHeight: 'Wys. Betonu',
    colFinishedHeight: 'Wys. Gotowa',
    colAdvance: 'Postęp',
    adjustedNote: 'Dostosowano',
    labelMaterials: 'Zestawienie Materiałów',
    labelTotalConcrete: 'Beton całkowity:',
    labelCement: 'Cement (worki/25kg):',
    labelSand: 'Potrzebny piasek:',
    unitM3: 'm³',
    unitBags: 'worki',
    unitLiters: 'L',
    btnShare: 'Udostępnij',
    btnPrint: 'Drukuj PDF',
    statusOptimalComfort: 'Optymalny Komfort',
    statusMarginLimit: 'Granica Normy',
    statusCriticalDesign: 'Projekt Krytyczny',
    statusRiserError: 'Błąd Stopnia',
    msgInvalidValues: 'Nieprawidłowe wartości',
    msgInsufficientSpace: 'BRAK MIEJSCA',
    msgDangerousTread: 'Stopień o szerokości {val}cm jest niebezpieczny.',
    msgBlondelValue: 'Wartość Blondela: {val}cm.',
    msgOptimalStep: 'Wygodny krok: {val}cm.',
    msgLowCeiling: 'NISKI PRZEŚWIT (<2m)',
    msgCalculating: 'Obliczanie...',
    msgEnterMeasurements: 'Wprowadź wymiary',
    shareTitle: 'Podsumowanie Prac',
    shareMessage: 'Schody: H={h}cm, N={n}, h={ch}cm, Vol={vol}m3',
  },
};
