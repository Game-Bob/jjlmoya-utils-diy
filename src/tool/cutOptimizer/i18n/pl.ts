import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'optymalizator-ciecia';
const title = 'Optymalizator Cięcia Listew i Płyt';
const description =
  'Bezpłatny kalkulator optymalizacji cięcia drewna, metalu lub rur. Minimalizuj odpady dzięki algorytmom Bin Packing 1D i 2D. Idealny dla stolarstwa i metalurgii.';

const faqData = [
  {
    question: 'Co to jest optymalizator cięcia 1D?',
    answer:
      'Jest to narzędzie wykorzystujące algorytmy matematyczne (takie jak problem pakowania w pojemniki - Bin Packing Problem), aby określić, jak wyciąć mniejsze elementy ze standardowego długiego elementu (listwa, profil, rura) przy minimalnym możliwym odpadzie.',
  },
  {
    question: 'Dlaczego należy uwzględnić grubość rzazu (Kerf)?',
    answer:
      'Za każdym razem, gdy piła przecina materiał, zużywa się kilka milimetrów (zwykle od 2 do 4 mm w zależności od tarczy). Jeśli nie uwzględnisz tej przestrzeni, ostatnie elementy z Twojej listy będą krótsze niż planowano.',
  },
  {
    question: 'Czy mogę mieszać elementy o różnych długościach?',
    answer:
      'Tak, nasz kalkulator akceptuje dowolną kombinację długości i ilości. Algorytm oceni wszystkie możliwe kombinacje i nada priorytet maksymalnemu wykorzystaniu materiału z magazynu.',
  },
  {
    question: 'Jak zapisać mój plan cięcia?',
    answer:
      'Po zoptymalizowaniu możesz wydrukować stronę lub zrobić zrzut ekranu schematu wizualnego. Służy to jako fizyczny przewodnik w warsztacie, aby nie pomylić kolejności cięć.',
  },
];

const howToData = [
  {
    name: 'Zdefiniuj materiał bazowy (Stock)',
    text: 'Wprowadź całkowitą długość dostępnej listwy lub profilu (np. 2400 mm lub 6000 mm).',
  },
  {
    name: 'Skonfiguruj grubość tarczy (Kerf)',
    text: 'Ustaw milimetry, które piła usuwa przy każdym przejściu, aby obliczenie było co do milimetra dokładne.',
  },
  {
    name: 'Wymień pożądane elementy',
    text: 'Wpisz długość i ilość każdego elementu, którego potrzebujesz do swojego projektu.',
  },
  {
    name: 'Uruchom optymalizację',
    text: 'Uzyskaj najbardziej wydajny schemat cięcia i dokładny procent wygenerowanego odpadu.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ostateczny Przewodnik Optymalizacji Cięcia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Optymalizacja cięcia, technicznie znana jako <strong>Problem Cięcia Magazynowego (Cutting Stock Problem)</strong>, jest jednym z najciekawszych wyzwań logistycznych w inżynierii przemysłowej. Dla projektu z 20 elementami i 5 prętami magazynowymi istnieją miliony możliwych kombinacji. Algorytm komputerowy może znaleźć optymalne rozwiązanie w milisekundy, redukując typowy odpad z 15% do mniej niż 5%.',
    },
    {
      type: 'title',
      text: 'Cięcie liniowe 1D i cięcie płyt 2D',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Cięcie liniowe dla listew i profili',
      html: '<p>W <strong>cięciu liniowym (1D)</strong> optymalizacja zachodzi tylko w jednym wymiarze: długości. Szerokość materiału przyjmuje się jako stałą. Idealne dla tarcicy (listwy, belki), profili metalowych i aluminiowych, rur PVC lub miedzianych oraz prętów gwintowanych.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Cięcie płyt dla paneli i blach',
      html: '<p>W <strong>cięciu płyt (2D)</strong> zarządza się dwoma wymiarami: szerokością i długością. Narzędzie wykorzystuje algorytmy typu gilotynowego, w których każde cięcie idzie od krawędzi do krawędzi. Idealne dla płyt drewnopochodnych (MDF, wiórowa), sklejki, szkła, pleksi i blach metalowych.</p>',
    },
    {
      type: 'title',
      text: 'Czynnik krytyczny: Grubość rzazu (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kerf</strong> to materiał usuwany przy każdym cięciu. Standardowa tarcza piły stołowej zużywa od 3,0 mm do 3,2 mm na cięcie. Ręczna piła tarczowa zużywa 1,5 do 2,5 mm. Cięcie laserowe w pleksi zaledwie 0,1 do 0,3 mm. Zignorowanie rzazu w projekcie z 10 cięciami na listwach o długości 2400 mm może spowodować utratę od 30 mm do 32 mm użytecznego materiału.',
    },
    {
      type: 'title',
      text: 'Algorytm Best Fit Decreasing',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Jak działa optymalizator od środka',
      html: '<p>Rdzeń optymalizatora wykorzystuje strategię <strong>Best Fit Decreasing (BFD)</strong>: najpierw sortuje wszystkie elementy od największej do najmniejszej długości (duże elementy trudniej dopasować). Następnie dla każdego elementu szuka istniejącego odpadu, w którym się zmieści, pozostawiając jak najmniejszą resztę. Tylko jeśli nie mieści się w żadnym odpadzie, otwiera nowy pełny pręt. Ten proces redukuje odpady o rząd wielkości w stosunku do losowego wyboru.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Liniowy (Pręty)',
    modePanelLabel: 'Panelowy (Płyty)',
    configTitle: 'Konfiguracja Materiału',
    labelStockLength: 'Długość Materiału (mm)',
    labelStockWidth: 'Szerokość Materiał (mm)',
    labelKerf: 'Grubość Tarczy / Kerf (mm)',
    cutsTitle: 'Lista Cięć',
    placeholderLength: 'Długość',
    placeholderWidth: 'Szerokość',
    placeholderQty: 'Ilość',
    btnRemoveTitle: 'Usuń',
    statStockUsed: 'Użyty Materiał',
    statTotalCuts: 'Całkowite Cięcia',
    statWaste: 'Całkowity Odpad',
    statEfficiency: 'Wydajność',
    vizTitle: 'Wizualizacja Cięcia',
    emptyState: 'Dodaj cięcia i naciśnij oblicz, aby zobaczyć plan cięcia.',
    noValidCuts: 'Nie udało się wygenerować prawidłowych cięć. Sprawdź wymiary.',
    noValidPanels: 'Nie udało się wygenerować prawidłowych płyt. Sprawdź, czy elementy mieszczą się na płycie.',
    stockLabel: 'Materiał',
    panelLabel: 'Panel',
    wasteLabel: 'Odpad:',
    effLabel: 'Wydaj:',
  },
};
