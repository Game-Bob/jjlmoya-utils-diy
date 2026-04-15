import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'kalkulator-zywicy-epoksydowej';
const title = 'Kalkulator Żywicy Epoksydowej: Mieszanka i Dokładna Objętość';
const description = 'Oblicz dokładną ilość żywicy epoksydowej i utwardzacza potrzebną do Twoich projektów. Unikaj marnotrawstwa przy tworzeniu stołów rzecznych, biżuterii i form.';

const faqData = [
  {
    question: 'Dlaczego dokładne zachowanie proporcji jest tak ważne w przypadku żywicy?',
    answer: 'W przeciwieństwie do innych mieszanek, żywica epoksydowa nie wysycha przez parowanie, lecz w wyniku reakcji chemicznej (polimeryzacji). Jeśli żywicy lub utwardzacza będzie za dużo, reakcja nie zostanie ukończona, co sprawi, że element będzie lepki, miękki lub z trwałymi pęcherzykami powietrza.',
  },
  {
    question: 'Czym różni się proporcja wagowa od objętościowej?',
    answer: 'Wiele żywic miesza się w stosunku objętościowym 2:1, ale wagowym 100:45, ponieważ utwardzacz jest zazwyczaj gęstszy. Zawsze stosuj skalę wskazaną przez producenta i, jeśli to możliwe, używaj wagi cyfrowej dla maksymalnej precyzji.',
  },
  {
    question: 'Jak uniknąć pęcherzyków powietrza podczas mieszania?',
    answer: 'Mieszaj powoli jednostajnymi ruchami okrężnymi przez co najmniej 3 minuty, dokładnie skrobiąc ścianki naczynia. Pozostaw mieszankę na kilka minut przed wylaniem, aby pęcherzyki mogły wypłynąć na powierzchnię.',
  },
  {
    question: 'Co to jest czas przydatności (Pot Life)?',
    answer: 'Jest to czas, w którym możesz pracować z mieszanką, zanim zacznie ona twardnieć (żelować). W lecie lub przy dużych objętościach czas ten drastycznie się skraca ze względu na reakcję egzotermiczną (wydzielanie ciepła).',
  },
];

const howToData = [
  { name: 'Zmierzyć wymiary formy', text: 'Zmierz długość, szerokość i głębokość (grubość) obszaru, który chcesz wypełnić żywicą.' },
  { name: 'Wprowadzić proporcje mieszania', text: 'Sprawdź na etykiecie produktu, czy proporcja wynosi 1:1, 2:1 czy 3:1 i czy opiera się na wadze czy objętości.' },
  { name: 'Zważyć składniki', text: 'Wlej najpierw składnik A (żywica), a następnie B (utwardzacz) do czystego naczynia stojącego na wadze cyfrowej.' },
  { name: 'Mieszanie techniczne', text: 'Mieszaj delikatnie, aż mieszanka stanie się całkowicie przezroczysta i nie będą widoczne "smugi" o różnej gęstości.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    { name: 'TotalBoat - Centrum Wsparcia i Przewodniki Techniczne', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - Często Zadawane Pytania i Instrukcja Obsługi', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Przewodnik po Obliczaniu i Mieszaniu Żywicy Epoksydowej', level: 2 },
    { type: 'paragraph', html: 'Żywica epoksydowa nie jest farbą, która schnie przez parowanie; jest to złożona <strong>egzotermiczna reakcja chemiczna</strong>. Magia dzieje się, gdy cząsteczki epoksydu łączą się z cząsteczkami poliaminy, tworząc krystaliczny, stały polimer termoutwardzalny.' },
    { type: 'paragraph', html: 'Różnica między trwałym dziełem sztuki a lepką katastrofą tkwi w <strong>dokładnej stechiometrii</strong>. Błąd rzędu zaledwie 5% w proporcji mieszania może trwale uniemożliwić utwardzenie. To narzędzie eliminuje matematyczne zgadywanie, pozwalając Ci skupić się na tworzeniu.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Objętość czy Waga?', html: '<p>Błąd nr 1 początkujących polega na zakładaniu, że 100 ml waży 100 g. <strong>Żywica jest gęstsza niż utwardzacz.</strong></p><p>Jeśli karta techniczna produktu podaje "100:50 wagowo", to NIE jest to samo co "2:1 objętościowo". Ten kalkulator pracuje z <strong>Objętością</strong> (V = L × W × H), która jest standardem przy napełnianiu form.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Typowe Proporcje', html: '<ul><li><strong>1:1</strong> — Powłoki, lakiery i szybkie kleje.</li><li><strong>2:1</strong> — Standard. Stoły rzeczne, biżuteria i średnie odlewy.</li><li><strong>3:1</strong> — Podłogi przemysłowe i laminaty strukturalne o wysokiej twardości.</li></ul>' },
    ]},
    { type: 'title', text: 'Protokół Bezpieczeństwa i Najlepsze Praktyki', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Kluczowa Temperatura', html: '<p>Zawsze pracuj w temperaturze między <strong>21°C a 25°C</strong>. Zimno może zatrzymać reakcję, sprawiając, że element będzie mętny. Nadmierne ciepło niebezpiecznie przyspiesza reakcję egzotermiczną ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Technika Dwóch Kubków', html: '<p>Nie ufaj jednokrotnemu wymieszaniu. Dobrze zeskrob boki i dno naczynia, przelej mieszankę do <strong>drugiego czystego kubka</strong> i wymieszaj ponownie. Zapewnia to, że nie pozostanie żaden nieskatalizowany materiał.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Prostokątny',
    shapeCylinder: 'Cylindryczny',
    shapeSphere: 'Sferyczny',
    labelLength: 'Długość (cm)',
    labelWidth: 'Szerokość (cm)',
    labelDiameter: 'Średnica (cm)',
    labelDepth: 'Głębokość (cm)',
    labelRatio: 'Proporcja Mieszania (Waga/Objętość)',
    labelCustomRatio: 'Użyj niestandardowej proporcji (A:B)',
    labelResinA: 'Żywica (A)',
    labelHardenerB: 'Utwardzacz (B)',
    labelWasteTitle: 'Margines Bezpieczeństwa',
    labelWasteDesc: 'Dodaj 5% ekstra na straty',
    labelTotalVolume: 'Całkowita Objętość',
    labelPartA: 'Część A (Żywica)',
    labelPartB: 'Część B (Katalizator)',
    labelVisualization: 'Wizualizacja',
    shapeRectLabel: 'Blok Prostokątny',
    shapeCylinderLabel: 'Cylinder / Forma Okrągła',
    shapeSphereLabel: 'Pełna Sfera',
  },
};
