import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-miejsca-na-meble';
const title = 'Kalkulator Przestrzeni do Przeprowadzek i Mebli';
const description = 'Sprawdź, czy Twoja sofa, szafa lub stół zmieści się w windzie lub przejdzie przez drzwi. Skorzystaj z twierdzenia Pitagorasa 3D, aby obliczyć nachylenia.';

const faqData = [
  {
    question: 'Dlaczego sofa może się nie zmieścić, mimo że jest mniejsza niż drzwi?',
    answer: 'Z powodu kąta obrotu. Jeśli korytarz jest wąski, sofa musi wejść bokiem lub pod skosem. Czynnikiem ograniczającym jest nie tylko szerokość drzwi, ale także dostępny promień skrętu w pomieszczeniu.',
  },
  {
    question: 'Co to jest przekątna mebla i dlaczego jest ważna?',
    answer: 'To najdłuższa odległość między dwoma przeciwległymi narożnikami. Jest to kluczowe, aby wiedzieć, czy wysoki mebel można podnieść w pomieszczeniu z niskim sufitem po zmontowaniu go na podłodze.',
  },
  {
    question: 'Jak prawidłowo zmierzyć windę?',
    answer: 'Nie mierz tylko podłogi. Zmierz szerokość otwartych drzwi, głębokość użytkową i całkowitą wysokość. Przekątna od podstawy drzwi do górnego tylnego narożnika to najważniejsza informacja.',
  },
  {
    question: 'Które elementy należy zdemontować w pierwszej kolejności?',
    answer: 'Nóżki sof, uchwyty szaf i drzwi lodówek często pozwalają zyskać krytyczne 5 do 10 cm, które decydują o tym, czy mebel się zmieści, czy zostanie na zewnątrz.',
  },
];

const howToData = [
  { name: 'Zmierzyć mebel (Długość, Szerokość, Wysokość)', text: 'Przyjmij maksymalne wymiary obiektu, wliczając wszelkie wystające elementy, takie jak podłokietniki czy uchwyty.' },
  { name: 'Zmierzyć krytyczne przejścia', text: 'Zmierz światło drzwi (od ościeżnicy do ościeżnicy), wnętrze windy i szerokość korytarzy.' },
  { name: 'Wprowadzić dane do symulatora', text: 'Wpisz wymiary w narzędziu, aby sprawdzić, czy objętość mebla jest kompatybilna z przestrzenią przejścia.' },
  { name: 'Obliczyć nachylenia', text: 'Jeśli mebel jest bardzo wysoki, użyj obliczonej przekątnej, aby sprawdzić, czy będziesz w stanie go obrócić na półpiętrze lub wewnątrz windy.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Nauka o Przeprowadzkach i Twierdzenie Pitagorasa', level: 2 },
    { type: 'paragraph', html: 'Przeprowadzki to nie tylko test siły fizycznej; to złożona zagadka geometryczna. Pozorna przestrzeń pokoju lub windy często myli ludzkie oko, zwłaszcza gdy ignorujemy trzeci wymiar. Matematyka może zaoszczędzić Ci setki złotych na zwrotach i nieudanych transportach.' },
    { type: 'title', text: 'Sztuczka z Przekątną 3D', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Złota Zasada', html: '<p>Nigdy nie mierz tylko mebla. Zawsze mierz <strong>krytyczne punkty dostępu</strong>: szerokość ościeżnicy drzwi, najniższy punkt sufitu na klatce schodowej i rzeczywistą głębokość windy przy zamkniętych drzwiach. Formuła <code>d = √(w² + h² + z²)</code> powie Ci, czy mebel wejdzie pod skosem.</p>' },
    { type: 'title', text: 'Problem Sofy w Korytarzu', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Margines Manewru', html: '<p>Częstym błędem jest zakładanie, że jeśli mebel ma 80 cm, a otwór 80 cm, to przejdzie. Tak nie jest. Ręce tragarzy, elastyczność tkaniny i nierówności ścian wymagają minimalnego marginesu <strong>od 2 do 5 cm</strong>. Bez tego marginesu mebel zostanie porysowany lub zaklinuje się pod naciskiem.</p>' },
    { type: 'title', text: '3 Błędy, które Ruinują Przeprowadzkę', level: 3 },
    { type: 'paragraph', html: 'Nawet przy poprawnych wymiarach, te niewidoczne czynniki często powodują katastrofy: <strong>Lampa Sufitowa</strong> — często pomijana podczas obracania po skosie. <strong>Promień Skrętu Mebla</strong> — sztywny mebel się nie zgina. <strong>Opakowanie</strong> — folia bąbelkowa i tektura ochronna mogą dodać od 1 do 3 cm z każdej strony.' },
  ],
  ui: {
    conTitle: 'Wymiary Przestrzeni',
    conHint: 'Np. standardowa winda, ościeżnica drzwi lub furgonetka.',
    objTitle: 'Wymiary Mebla',
    labelWidth: 'Szerokość (cm)',
    labelHeight: 'Wysokość (cm)',
    labelDepth: 'Głębokość (cm)',
    labelLength: 'Długość (cm)',
    labelMargin: 'Margines Błędu (cm)',
    vizLabel: 'Uproszczony Widok Przestrzenny',
    verdictDefault: 'Zmieści się?',
    verdictHint: 'Wprowadź wymiary, aby sprawdzić kompatybilność przestrzenną.',
    verdictYes: 'TAK, MIEŚCI SIĘ!',
    verdictNo: 'NIE MIEŚCI SIĘ',
    fitDirect: 'Mebel mieści się idealnie w sposób bezpośredni.',
    fitDiagonal3d: 'Mieści się nachylony po przekątnej (Pitagoras 3D).',
    fitDiagonalPlane: 'Mieści się nachylony w jednej z płaszczyzn bocznych.',
    fitNope: 'Mebel jest zbyt duży, nawet by wejść po przekątnej.',
    diagLabel: 'Maksymalna Przekątna (Pitagoras 3D):',
    objLabel: 'Mebel',
  },
};
