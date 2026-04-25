import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-tralek';
const title = 'Kalkulator Tralek: Dokładne Rozmieszczenie dla Barierek';
const description =
  'Oblicz dokładny odstęp między szczeblami lub tralkami barierek zgodnie z normą 10 cm. Automatyczne plany.';

const faqData = [
  {
    question: 'Jaka jest maksymalna legalna odległość między tralkami?',
    answer:
      'W większości międzynarodowych przepisów budowlanych wolna przestrzeń między elementami barierki nie powinna pozwalać na przejście sfery o średnicy 10 cm, aby zapobiec wypadkom z udziałem dzieci.',
  },
  {
    question: 'Jak mierzy się odstępy: między środkami czy prześwity?',
    answer:
      "Nasz kalkulator podaje obie wartości. 'Prześwit' to rzeczywista luka między szczeblami (kluczowa dla bezpieczeństwa), natomiast 'odległość między środkami' (on-center) wyznacza miejsca wiercenia lub mocowania każdej tralki.",
  },
  {
    question: 'Co jeśli podział nie jest dokładny?',
    answer:
      'Kalkulator automatycznie dostosowuje liczbę szczebli, aby pierwsza i ostatnia luka były identyczne, gwarantując symetrię wizualną i ścisłe przestrzeganie maksymalnego dozwolonego prześwitu.',
  },
  {
    question: 'Lepiej spawać czy przykręcać tralki?',
    answer:
      'To zależy od materiału. W przypadku stali spawanie zapewnia maksymalną sztywność konstrukcyjną. W drewnie lub aluminium stosuje się kotwy mechaniczne lub śruby przelotowe. Ważne jest, aby barierka wytrzymała siłę poziomą co najmniej 0,8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Zmierz długość całkowitą',
    text: 'Zmierzy dokładną odległość między pierwszym a ostatnim słupkiem, gdzie zostanie zainstalowana barierka.',
  },
  {
    name: 'Określ grubość tralki',
    text: 'Zmierz szerokość pojedynczego szczebla (np. 2x2 cm dla profilu kwadratowego lub średnicę, jeśli jest okrągły).',
  },
  {
    name: 'Ustal maksymalny prześwit',
    text: 'Wskaż maksymalną pożądaną separację (zalecane 10 cm dla zachowania norm).',
  },
  {
    name: 'Pobierz oznaczenia montażowe',
    text: 'Sprawdź listę dokładnych pozycji do wiercenia otworów, aby zapewnić symetryczny i bezpieczny rozkład.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ostateczny Przewodnik: Jak Obliczyć Rozstaw Tralek w Barierkach',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Projektowanie bezpiecznej i estetycznie doskonałej barierki to sztuka łącząca precyzję matematyczną z przepisami budowlanymi. Czy to na taras, balkon czy schody wewnętrzne, prawidłowe obliczenie tralek (lub szczebli) jest najbardziej krytycznym krokiem projektu. Błąd w obliczeniach nie tylko psuje symetrię wizualną, ale może sprawić, że Twoja konstrukcja będzie nielegalna i niebezpieczna.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Dlaczego to obliczenie jest takie ważne?',
      html: '<p>Nie chodzi tylko o "wypełnienie luki". Chodzi o przestrzeganie <strong>Zasady Sfery 4 Cali (10 cm)</strong>, międzynarodowej normy bezpieczeństwa zaprojektowanej w celu zapobiegania wypadkom dzieci.</p>',
    },
    {
      type: 'title',
      text: '1. Przepisy Bezpieczeństwa: Zasada 10 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zanim przetniesz pierwszy kawałek drewna lub metalu, musisz zrozumieć "dlaczego" kryjące się za matematyką. Przepisy budowlane w wielu krajach ustalają jasną normę: <em>"Wolna przestrzeń między elementami pionowymi nie powinna pozwalać na przejście sfery o średnicy 10 cm (4 cale)."</em>',
    },
    {
      type: 'paragraph',
      html: 'Ta miara nie jest przypadkowa. Jest to średnia średnica głowy małego dziecka (zwykle poniżej 1 roku życia). Jeśli dziecko może przełożyć ciało, ale głowa utknie, ryzyko uduszenia jest bardzo wysokie. Jeśli głowa przejdzie, może spaść w przepaść. Dlatego celem naszego <strong>Kalkulatora Tralek</strong> nie jest tylko estetyka, ale ratowanie życia.',
    },
    {
      type: 'title',
      text: '2. Problem Matematyczny: Błąd Słupka Ogrodzeniowego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W programowaniu i budownictwie istnieje klasyczny problem zwany <em>"Fencepost Error"</em> (Błąd Słupka Ogrodzeniowego). Jeśli chcesz zbudować 10-metrowy płot ze słupkami co metr, ilu słupków potrzebujesz? Intuicyjna odpowiedź to 10, ale poprawna to 11.',
    },
    {
      type: 'paragraph',
      html: 'Z tralkami dzieje się coś podobnego, ale bardziej złożonego, ponieważ szerokość samej tralki zajmuje miejsce. Formuła, której używa nasze narzędzie, rozwiązuje ten układ równań za Ciebie:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Krok A: Obliczanie Luk',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Najpierw określamy, ile tralek zmieściłoby się teoretycznie przy użyciu maksymalnej dozwolonej przestrzeni. Zaokrąglamy tę liczbę w górę, aby zapewnić, że wynikowe luki są <em>mniejsze</em> niż maksimum.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Krok B: Ponowne Obliczenie Dokładnego Odstępu',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Gdy znamy dokładną liczbę tralek (n), obliczamy ile miejsca "zostaje" po odjęciu szerokości całego materiału i dzielimy je równo między luki (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Przewodnik Krok po Kroku dla Idealnej Instalacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Posiadanie liczb to tylko połowa sukcesu. Tutaj wyjaśniamy, jak przenieść te dane z papieru (lub ekranu) do rzeczywistości Twojej budowy.',
    },
    {
      type: 'title',
      text: 'Krok 1: Pomiar Precyzyjny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zmierz odległość <strong>wewnętrzną</strong> między słupkiem a słupkiem. Nie mierz od środka słupka. Musisz znać dokładny prześwit, który wypełnisz (L). Jeśli Twoja barierka ma kilka odcinków, zmierz każdy indywidualnie; konstrukcje rzadko są idealnie prostopadłe, a błąd 0,5 cm może zepsuć symetrię.',
    },
    {
      type: 'title',
      text: 'Krok 2: Znalezienie Środka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Błąd numer jeden początkujących to zaczynanie rozmieszczania tralek od jednego końca do drugiego. Prawie zawsze skutkuje to ostatnią luką o dziwnym rozmiarze, co niszczy harmonię wizualną.<ul><li>Zaznacz <strong>dokładny środek</strong> barierki (L / 2).</li><li>Zdecyduj, czy na środku ma być <em>tralka</em> czy <em>luka</em>.</li><li>Jeśli chcesz tralkę na środku: zaznacz połowę szerokości tralki po obu stronach znaku środkowego.</li><li>Jeśli chcesz lukę na środku: zaznacz połowę odległości luki (g / 2) po obu stronach.</li></ul>',
    },
    {
      type: 'title',
      text: 'Krok 3: Wykonanie Szablonu (Dystansów)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nie używaj miarki przy każdej tralce. Skumulowany błąd ludzki sprawi, że ostatnia tralka odchyli się o kilka centymetrów. Profesjonalnym sposobem jest wycięcie klocka drewna (lub dwóch) o dokładnym wymiarze luki (g) podanym przez nasz kalkulator.',
    },
    {
      type: 'paragraph',
      html: 'Użyj tego klocka jako szablonu fizycznego. Umieść tralkę, przyłóż klocek, umieść następną tralkę dociśniętą do klocka i zamocuj ją. Gwarantuje to milimetrową spójność.',
    },
    {
      type: 'title',
      text: '4. Materiały i Potrzebne Narzędzia',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Wyposażenie dla profesjonalnego wykończenia',
      html: '<ul><li>Miarka o wysokiej precyzji</li><li>Ołówek stolarski</li><li>Poziomica (do pionowania)</li><li>Ukośnica (do czystych cięć)</li><li>Wiertarka i wkręty do drewna</li><li>Klocki dystansowe (wykonane na wymiar)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Dodatkowe Pytania Techniczne',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Co jeśli ostatnia luka nie pasuje?',
      html: '<p>Jeśli skorzystałeś z naszego kalkulatora, nie powinno to się zdarzyć. Jednak w świecie rzeczywistym drewno się wygina, a słupki nie zawsze są proste. Jeśli po dotarciu do końca zostanie lub zabraknie Ci 1-2 mm, jest to niezauważalne. Jeśli brakuje 1 cm, sprawdź swoje klocki dystansowe, prawdopodobnie na każdym kroku traciłeś milimetry.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Czy mogę umieścić tralki rzadziej, jeśli nie mam dzieci?',
      html: '<p>Prawnie: nie. Przepisy budowlane dotyczą domu, a nie obecnych mieszkańców. Jeśli kiedyś sprzedasz dom, barierka niezgodna z normami będzie problemem przy inspekcji. Ponadto goście (siostrzeńcy, wnuki) mogą być w niebezpieczeństwie.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Drewno, Metal czy Szkło?',
      html: '<p>Ten kalkulator działa dla <strong>każdego powtarzalnego elementu pionowego</strong>. Jeśli używasz poziomych linek stalowych, przepisy są inne (zazwyczaj nie mogą pozwalać na wspinanie się, "efekt drabiny"). W przypadku szkła uważa się je za panel ciągły i nie stosuje się rozstawu, lecz odporność na uderzenia.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"Architektura jest wolą epoki przełożoną na przestrzeń."</em></p><p>Mamy nadzieję, że to narzędzie pomoże Ci budować bezpieczniejsze i piękniejsze przestrzenie. Zawsze pamiętaj o sprawdzeniu lokalnych przepisów budowlanych w Twojej gminie, ponieważ mogą istnieć specyficzne warianty dotyczące minimalnej wysokości (zwykle 90-110 cm) lub obciążeń siłowych.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Wymiary',
    sectionDesc: 'Wprowadź wymiary swojej barierki',
    labelRailLength: 'Długość Całkowita (L)',
    labelBalusterWidth: 'Szerokość Tralki (w)',
    labelMaxGap: 'Maksymalna Luka (g)',
    blueprintTitle: 'Plan Montażu',
    blueprintRef: 'REF: BAL-001 // SKALA: AUTO',
    labelRequired: 'Wymagane Tralki',
    labelExactGap: 'Dokładna Luka',
    labelOnCenter: 'Od Środka do Środka',
    labelTotalSpaces: 'Łączna Liczba Luk',
    labelCoveredLength: 'Długość Pokryta',
    labelDisclaimer: '* Pokazane wymiary są przybliżone do celów wizualizacji.',
  },
};
