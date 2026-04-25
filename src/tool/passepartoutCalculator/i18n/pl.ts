import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-passe-partout';
const title = 'Kalkulator Passepartout: Marginesy z Korekcją Optyczną do Oprawiania';
const description = 'Narzędzie do obliczania marginesów passe-partout z korekcją optyczną (bottom weighting). Oprawiaj swoje fotografie i sztukę z zachowaniem galerijnych proporcji.';

const faqData = [
  {
    question: 'Co to jest korekcja środka optycznego (Bottom Weighting)?',
    answer: 'Jest to zasada projektowania i oprawiania, w której dolny margines jest nieco szerszy niż pozostałe. Koryguje to złudzenie optyczne, które sprawia, że środek geometryczny wydaje się "opadać", gdy patrzy się na wiszące dzieło.',
  },
  {
    question: 'Z jakiego materiału powinno być wykonane passe-partout?',
    answer: 'W celach konserwatorskich powinien to być karton bezkwasowy lub o neutralnym pH (alfa-celuloza lub bawełna). Tanie kartony z czasem żółkną i mogą uszkodzić dzieło z powodu zawartości ligniny.',
  },
  {
    question: 'Jak wybrać kolor marginesu?',
    answer: 'Złamana biel lub delikatny krem to standardy, które nie odciągają uwagi od dzieła. Ciemny margines może podkreślić biele na fotografii, natomiast kolorowy margines należy stosować ostrożnie, aby nie rywalizował z tonacją pracy.',
  },
  {
    question: 'Jaka jest idealna szerokość marginesu?',
    answer: 'Profesjonalny standard to od 5 do 8 cm. Jeśli margines jest zbyt wąski, dzieło wydaje się "stłamszone". Jeśli jest bardzo szeroki, może nadać małym pracom heroiczny i minimalistyczny charakter.',
  },
];

const howToData = [
  { name: 'Zmierzyć dzieło sztuki', text: 'Zmierz dokładną szerokość i wysokość papieru lub płótna, które zamierzasz oprawić. Odejmij kilka milimetrów, jeśli chcesz, aby passe-partout lekko nachodziło na obraz.' },
  { name: 'Zmierzyć wnętrze ramy', text: 'Zmierz wewnętrzne wymiary ramy lub felcu, w którym zostanie umieszczony karton passe-partout.' },
  { name: 'Aktywować korekcję optyczną', text: 'Zaznacz opcję w naszym kalkulatorze, jeśli chcesz, aby dolny margines był automatycznie większy dla uzyskania profesjonalnego wykończenia.' },
  { name: 'Wyciąć karton', text: 'Użyj wynikowych wymiarów do wycięcia okna i zewnętrznej części kartonu, najlepiej za pomocą noża pod kątem 45 stopni dla uzyskania czystej fazy.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Nauka o Idealnej Oprawie', level: 2 },
    { type: 'paragraph', html: '<strong>Passe-partout</strong> to nie tylko ozdobny karton; to płuca, które pozwalają Twojemu dziełu sztuki oddychać. Ten kalkulator pomoże Ci określić dokładne wymiary do wycięcia kartonu, zapewniając, że praca będzie idealnie wyśrodkowana lub optycznie zrównoważona wewnątrz ramy.' },
    { type: 'title', text: 'Dlaczego "Większy Dół" (Bottom Weighting)?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'Złudzenie optyczne środka geometrycznego', html: '<p>Ludzkie oko ma tendencję do postrzegania pionowego środka geometrycznego nieco niżej niż znajduje się on w rzeczywistości. Jeśli oprawisz pracę dokładnie w środku, będzie się wydawać, że "opada".</p><p><strong>Bottom Weighting</strong> koryguje to złudzenie, pozostawiając nieco większy dolny margines, optycznie unosząc dzieło, aby wydawało się idealnie wyśrodkowane.</p>' },
    { type: 'title', text: 'Materiały Konserwatorskie do Passe-partout', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Bezkwasowy karton do konserwacji', html: '<p>Wybierając karton, zawsze szukaj terminów takich jak <strong>"Acid-Free"</strong> lub <strong>"Museum Quality"</strong>. Tanie kartony z miazgi drzewnej mogą z czasem żółknąć i uwalniać kwasy, które "przypalą" Twoje dzieło (foxing), nieodwracalnie je niszcząc.</p>' },
  ],
  ui: {
    sectionTitle: 'Wymiary',
    sectionDesc: 'Wprowadź wymiary w centymetrach.',
    frameSizeTitle: 'Rozmiar Ramy',
    artSizeTitle: 'Rozmiar Dzieła',
    labelWidth: 'Szerokość (cm)',
    labelHeight: 'Wysokość (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Zastosuj większy dolny margines dla równowagi wizualnej',
    labelOffset: 'Przesunięcie (%)',
    errorMsg: 'Rozmiar dzieła musi być mniejszy niż ramy.',
    labelTop: 'Góra',
    labelBottom: 'Dół',
    labelLeft: 'Lewy',
    labelRight: 'Prawy',
    artPlaceholder: 'Twoje Dzieło',
  },
};
