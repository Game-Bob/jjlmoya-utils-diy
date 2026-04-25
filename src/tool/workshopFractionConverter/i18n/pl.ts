import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'warsztatowy-konwerter-ulamkow-na-milimetry';
const title = 'Konwerter Ułamków na Milimetry Warsztatowy';
const description = 'Błyskawicznie zamieniaj ułamkowe wymiary calowe na milimetry. Znajdź najbliższe standardowe śruby, sworznie i nasadki do swojego warsztatu. Stworzony dla brudnych rąk i palców w rękawicach.';

const faqData = [
  {
    question: 'Dlaczego muszę przeliczać ułamki na milimetry?',
    answer: 'Większość nowoczesnych narzędzi i elementów złącznych korzysta z systemu metrycznego, jednak wiele starszych narzędzi i specyfikacji nadal używa ułamków cala. Ten konwerter wypełnia tę lukę, pomagając znaleźć dokładny ekwiwalent metryczny lub najbliższy standardowy rozmiar elementu złącznego.',
  },
  {
    question: 'Jaka jest różnica między 1/2 cala a 12,7 mm?',
    answer: '1/2 cala to dokładnie 12,7 milimetra (0,5 × 25,4 = 12,7). Narzędzia metryczne i calowe są często wymienne w standardowych rozmiarach, ponieważ producenci dopasowują popularne rozmiary elementów złącznych w obu systemach.',
  },
  {
    question: 'Dlaczego narzędzie pokazuje "najbliższe dopasowanie"?',
    answer: 'Ponieważ dokładne przeliczenia często wypadają pomiędzy standardowymi rozmiarami elementów złącznych. Narzędzie znajduje najbliższą dostępną w handlu śrubę lub nasadkę, abyś mógł użyć tego, co masz pod ręką w warsztacie.',
  },
  {
    question: 'Czym różni się precyzja stolarska od metalowej?',
    answer: 'W stolarstwie różnice rzędu 0,5 mm są często pomijalne. W obróbce metali i skrawaniu liczy się każde 0,1 mm. Tryb precyzji wskazuje akceptowalne zakresy tolerancji dla danego materiału.',
  },
  {
    question: 'Czy mogę korzystać z tego narzędzia offline?',
    answer: 'Tak. Wszystkie obliczenia odbywają się w przeglądarce. Narzędzie działa całkowicie offline po pierwszym załadowaniu, co jest idealne do użytku w warsztacie bez WiFi.',
  },
  {
    question: 'Dlaczego narzędzie zawiera historię?',
    answer: 'Podczas demontażu lub pracy nad projektem z wieloma częściami, historia pozwala sprawdzać wymiary bez ich ponownego wpisywania i pomaga tworzyć listę części w trakcie pracy.',
  },
];

const howToData = [
  {
    name: 'Wybierz rodzaj pomiaru',
    text: 'Wybierz "Wprost", aby zamienić ułamek na milimetry, lub "Odwrotnie", aby znaleźć ułamek dla wymiaru zdjętego suwmiarką.',
  },
  {
    name: 'Wprowadź wymiar',
    text: 'Użyj trzykolumnowego wejścia (całość, licznik, mianownik) lub dotknij przycisku szybkiego wyboru. Przyciski krokowe pozwalają na regulację bez pisania.',
  },
  {
    name: 'Przejrzyj wyniki',
    text: 'Wynik pokazuje dokładne przeliczenie oraz najbliższe standardowe rozmiary śrub i nasadek. Skala wizualna ułatwia ocenę proporcji.',
  },
  {
    name: 'Zapisz w historii',
    text: 'Kliknij "Zapisz w historii", aby zachować pomiary na później. Historia pozostaje w przeglądarce nawet po jej zamknięciu.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dlaczego Precyzja w Konwersji Ułamków Jest Kluczowa w Warsztacie', level: 2 },
    { type: 'paragraph', html: 'W profesjonalnym lub zaawansowanym warsztacie domowym podejście "na oko" często kończy się zerwanymi śrubami, niestabilnymi połączeniami lub nieudanymi konstrukcjami. To narzędzie wypełnia lukę między tradycyjnymi pomiarami calowymi a precyzją systemu metrycznego, zapewniając, że Twoje projekty zachowują profesjonalne standardy.' },
    { type: 'title', text: 'Standardowa Konwersja: 1/2" a 12,7 mm', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: 'Czy systemy metryczny i calowy są wymienne?', html: '<p>Wielu zakłada, że tak. Choć 1/2" to dokładnie 12,7 mm, najbliższa metryczna nasadka ma 13 mm. Użycie niewłaściwego narzędzia może obrobić łby śrub. Nasz konwerter identyfikuje <strong>najbliższe dopasowanie standardowego narzędzia</strong>, dzięki czemu nigdy nie uszkodzisz swoich elementów.</p>' },
    { type: 'title', text: 'Tolerancja w Stolarstwie a Obróbce Metalu', level: 3 },
    { type: 'paragraph', html: 'Wymagania dotyczące tolerancji różnią się znacznie w zależności od rzemiosła. W <strong>stolarstwie</strong> tolerancja 1/64" (0,4 mm) jest zazwyczaj dopuszczalna. W <strong>obróbce metali i skrawaniu</strong> liczy się każde 0,1 mm, a nawet 0,01 mm. Nasze narzędzie zawiera tryb precyzji, który pomoże Ci zdecydować, który standardowy element jest najbezpieczniejszym wyborem dla Twojego materiału.' },
    { type: 'title', text: '3 Kluczowe Porady dla Dokładnych Pomiarów', level: 3 },
    { type: 'paragraph', html: '<strong>1. Używaj Suwmiarki:</strong> Do wyszukiwania odwrotnego zawsze używaj suwmiarki cyfrowej, aby uzyskać najdokładniejszy wynik w milimetrach. <strong>2. Sprawdź Zużycie:</strong> Stare nasadki i śruby mogą mieć zużyte krawędzie, co sprawia, że "najbliższe dopasowanie" jest jeszcze ważniejsze. <strong>3. Zweryfikuj Skok Gwintu:</strong> Pamiętaj, że nawet jeśli rozmiar łba pasuje, skok gwintu (metryczny vs calowy) zawsze będzie inny.' },
  ],
  ui: {
    labelFraction: 'Rodzaj Pomiaru',
    labelWhole: 'Całość',
    labelNumerator: 'Licznik',
    labelDenominator: 'Mianownik',
    labelInches: 'Cale',
    labelMillimeters: 'Milimetry',
    resultTitle: 'Wynik Konwersji',
    resultFraction: 'Ułamek',
    resultInches: 'Cale',
    resultMillimeters: 'Milimetry',
    matchTitle: 'Najbliższe Dopasowanie',
    matchClosestFastener: 'Standardowy rozmiar śruby lub elementu',
    matchClosestSocket: 'Standardowy rozmiar nasadki lub klucza',
    matchDifference: 'Różnica względem pomiaru',
    matchRecommendation: 'Użyj tego rozmiaru, jeśli jest dostępny',
    reverseSearchTitle: 'Wyszukiwanie Odwrotne',
    reverseSearchLabel: 'Zmierzony Rozmiar (mm)',
    reverseSearchButton: 'Znajdź Ułamek',
    reverseSearchHint: 'Zmierz suwmiarką i wpisz wartość',
    unitMm: 'mm',
    unitInch: 'cal',
    modeForward: 'Ułamek → Metryczny',
    modeReverse: 'Metryczny → Ułamek',
    precisionLabel: 'Tryb Precyzji',
    precisionCarpentry: 'Stolarstwo',
    precisionMetal: 'Ślusarstwo',
    buttonConvert: 'Przelicz',
    buttonClear: 'Wyczyść',
    buttonCopyResult: 'Kopiuj Wynik',
    buttonSaveToHistory: 'Zapisz w Historii',
    historyTitle: 'Historia',
    historyEmpty: 'Brak pomiarów',
    historyRemove: 'Usuń',
    helpText: 'Wybierz wymiar lub wpisz ułamek, aby zacząć.',
    toolOverline: 'Narzędzia Warsztatowe',
    labelVisualReference: 'Odniesienie Wizualne (1 cal = 96px)',
  },
};
