import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'kalkulator-rozszerzalnosci-cieplnej';
const title = 'Kalkulator Rozszerzalności Cieplnej Belek i Struktur';
const description = 'Oblicz, o ile wydłuża się belka lub struktura pod wpływem zmian temperatury. Narzędzie techniczne dla inżynierów i DIY. Zawiera współczynniki rozszerzalności dla materiałów.';

const faqData = [
  {
    question: 'Co to jest współczynnik rozszerzalności liniowej?',
    answer: 'Jest to właściwość fizyczna materiałów wskazująca, o ile materiał rozszerza się na każdy stopień Celsjusza wzrostu jego temperatury. Mierzony jest w 1/°C lub °C⁻¹.',
  },
  {
    question: 'Dlaczego obliczanie rozszerzalności belek jest ważne?',
    answer: 'Jeśli belka nie ma miejsca na rozszerzanie się (szczeliny dylatacyjne), generuje to ogromne naprężenia wewnętrzne, które mogą deformować strukturę, powodować pękanie betonu, a nawet katastrofę budowlaną.',
  },
  {
    question: 'Czy drewno rozszerza się tak samo we wszystkich kierunkach?',
    answer: 'Nie. Drewno jest materiałem anizotropowym. Rozszerza się bardzo mało wzdłuż włókien, ale znacząco w kierunku poprzecznym (szerokość i grubość).',
  },
  {
    question: 'Jaką temperaturę powinienem przyjąć jako Początkową?',
    answer: 'Należy użyć temperatury w momencie montażu lub budowy. Temperatura Końcowa powinna być maksymalną temperaturą oczekiwaną w trakcie eksploatacji.',
  },
];

const howToData = [
  { name: 'Zmierz długość początkową', text: 'Wprowadź długość belki lub materiału w metrach.' },
  { name: 'Wybierz materiał', text: 'Wybierz spośród metali, materiałów budowlanych lub drewna, aby zastosować właściwy współczynnik.' },
  { name: 'Zdefiniuj zakres temperatur', text: 'Określ temperaturę początkową i maksymalną oczekiwaną, aby obliczyć różnicę temperatur.' },
  { name: 'Przeanalizuj przyrost', text: 'Zwróć uwagę na całkowite wydłużenie w milimetrach i wynikową długość końcową, aby przewidzieć odpowiednie dylatacje.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    { name: 'Coefficient of Thermal Expansion — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: 'Thermal expansion and temperature — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: 'Linear Thermal Expansion — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Czym jest Rozszerzalność Cieplna i jak wpływa na Struktury', level: 2 },
    { type: 'paragraph', html: '<strong>Rozszerzalność cieplna</strong> to proces fizyczny, w którym materiał zwiększa swoją długość w odpowiedzi na wzrost temperatury. W budownictwie zjawisko to jest siłą, która może kruszyć beton, deformować stalowe belki i wyginać szyny kolejowe.' },
    { type: 'title', text: 'Wzór na Rozszerzalność Liniową', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Wzór na Rozszerzalność Liniową', html: '<p>Rozszerzenie elementu strukturalnego oblicza się ze wzoru: <code>ΔL = L₀ · α · ΔT</code>. Gdzie <strong>ΔL</strong> to całkowity przyrost, <strong>L₀</strong> to długość początkowa, <strong>α</strong> to współczynnik rozszerzalności materiału (w °C⁻¹) a <strong>ΔT</strong> to różnica temperatur.</p>' },
  ],
  ui: {
    configTitle: 'Konfiguracja',
    labelMaterial: 'Materiał',
    groupMetals: 'Metale',
    groupConstruction: 'Budownictwo',
    groupWood: 'Drewno i Polimery',
    matSteel: 'Stal (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Miedź (17 ppm/°C)',
    matIron: 'Żelazo (11 ppm/°C)',
    matConcrete: 'Beton (12 ppm/°C)',
    matBrick: 'Cegła (9 ppm/°C)',
    matGlass: 'Szkło (9 ppm/°C)',
    matWoodFiber: 'Drewno Wzdłużne (5 ppm/°C)',
    matWoodTransversal: 'Drewno Poprzeczne (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metalurgia',
    catConstruction: 'Budownictwo',
    catWood: 'Drewno i Polimery',
    labelLength: 'Długość Początkowa (m)',
    labelTempStart: 'Temp. Początkowa (°C)',
    labelTempEnd: 'Temp. Maksymalna (°C)',
    deltaLabel: 'Różnica Temperatur (ΔT)',
    vizTitle: 'Symulacja Rozszerzania',
    resultGrowthLabel: 'Całkowity Przyrost (ΔL)',
    resultFinalLabel: 'Długość Końcowa',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Ryzyko Wyboczenia',
    jointTitle: 'Minimalna Szczelina',
    riskLow: 'Niskie',
    riskModerate: 'Umiarkowane',
    riskCritical: 'Krytyczne',
    tipDefault: 'Sprawdź instrukcję producenta dla dokładnych współczynników specjalnych stopów.',
    tipSteel: 'Stal i beton mają niemal identyczne współczynniki, co pozwala żelbetowi pracować bez wewnętrznych pęknięć.',
    tipAluminum: 'Aluminium rozszerza się prawie dwa razy bardziej niż stal. W ślusarce otworowej wymaga to stosowania elastycznych uszczelniaczy.',
    tipGlass: 'Szkło i stal rozszerzają się prawie identycznie, co jest kluczowe dla projektowania dużych szklanych fasad.',
    tipConcrete: 'Współczynnik betonu jest bardzo zbliżyony do stali, dlatego konstrukcje mieszane są tak stabilne.',
    tipWood: 'Drewno rozszerza się mało pod wpływem ciepła, ale mocno pod wpływem wilgoci. W długich konstrukcjach włókno wzdłużne jest bardzo stabilne.',
    tipPvc: 'PVC ma bardzo wysoką rozszerzalność. Wymaga specjalnych połączeń, aby absorbować ruch bez pękania.',
  },
};
