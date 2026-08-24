import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'kalkulator-objetosci-wykopu-specznienia-gruntu';
const title = 'Kalkulator Objętości Wykopu i Spęcznienia Gruntu';
const description = 'Oblicz objętość wykopu w stanie rodzimym (w gruncie) i oszacuj objętość gruntu spęczniałego po wykopaniu z przedziałem dla piasku, humusu, gliny i żwiru.';

const faq = [
  {
    question: 'Jaka jest różnica między objętością w gruncie a objętošću w stanie luźnym?',
    answer: 'Objętość w gruncie (w rodzimym złożu) to geometryczna objętość wykopu przed naruszeniem. Objętość w stanie luźnym to przestrzeń, jaką wydobyty grunt zajmie po spęcznieniu.',
  },
  {
    question: 'Jak obliczyć objętość wykopu?',
    answer: 'Pomnóż długość wykopu przez szerokość i głębokość. Na przykład wykop o długości 4 m, szerokości 3 m i głębokości 0,5 m ma objętość w gruncie równą 6 m³.',
  },
  {
    question: 'Dlaczego glina wymaga szerszego przedziału spęcznienia?',
    answer: 'Zachowanie gliny zależy od jej wilgotności, gęstości i składu mineralnego. Kalkulator przyjmuje szerszy przedział spęcznienia ze względu na większą zmienność objętości.',
  },
  {
    question: 'Czy ten kalkulator zastępuje badanie geotechniczne?',
    answer: 'Nie. Wynik jest szacunkiem planistycznym do wywozu ziemi i wyboru kontenerów. W przypadku fundamentów lub ścian oporowych wymagana jest opinia geotechniczna.',
  },
];

const howTo = [
  { name: 'Wprowadź wymiary wykopu', text: 'Podaj długość, szerokość i głębokość planowanego wykopu.' },
  { name: 'Wybierz rodzaj gruntu', text: 'Zaznacz piasek, humus, glinę lub żwir, aby zastosować współczynnik spęcznienia.' },
  { name: 'Zaplanuj transport i wywóz', text: 'Użyj objętości w gruncie do wykopu, a objętości luźnej do zamówienia kontenerów lub ciężarówek.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq,
  bibliographyTitle: 'Źródła i uwagi techniczne',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dwie objętości odpowiadające na dwa pytania na budowie', level: 2 },
    { type: 'paragraph', html: '<strong>Objętość w gruncie</strong> (tzw. stan rodzimy) to czysta geometria nienaruszonego terenu: długość razy szerokość razy głębokość wykopu. <strong>Objętość luźna</strong> wskazuje, ile realnej przestrzeni zajmie wykopana ziemia po spęcznieniu na ciężarówce, w kontenerze na odpady lub na tymczasowej pryzmie. Rozdzielenie tych dwóch wartości zapobiega błędnemu szacowaniu zapotrzebowania na wywóz.' },
    { type: 'title', text: 'Wykorzystaj przedział luźny do organizacji transportu', level: 3 },
    { type: 'paragraph', html: 'Wybierz najbardziej odpowiadający profil gruntu w kalkulatorze i porównaj dolną oraz górną granicę spęcznienia z ładownością ciężarówek, rozmiarem kontenerów wywozowych oraz dostępną powierzchnią placu składowego. Przedział pokazany jest celowo, gdyż metoda wykopu i wilgotność ziemi znacząco wpływają na wynik.' },
    { type: 'tip', title: 'Szacunek spęcznienia nie zastępuje badań laboratoryjnych', html: 'Wilgotność, poziom wód gruntowych i stopień zagęszczenia wpływają na rzeczywisty przyrost objętości. Do projektowania fundamentów, ścian oporowych czy wywozu gruntów skażonych konieczne są badania geotechniczne.' },
    { type: 'title', text: 'Sprawdź założenia przed zamówieniem transportu', level: 3 },
    { type: 'paragraph', html: 'W przypadku niepewności co do dokładnego rodzaju gruntu warto wykonać symulację dla dwóch prawdopodobnych profili i założyć wyższe zapotrzebowanie transportowe do czasu przeprowadzenia pomiarów w terenie.' },
  ],
  ui: {
    unitSystemLabel: 'System miar',
    unitMetric: 'Metryczny',
    unitImperial: 'Imperialny',
    onboarding: 'Wprowadź wymiary wykopu, wybierz rodzaj gruntu i wykorzystaj wyniki do planowania prac i wywozu.',
    dimensionLabel: 'Wymiary wykopu',
    lengthLabel: 'Długość',
    widthLabel: 'Szerokość',
    depthLabel: 'Głębokość',
    soilLabel: 'Rodzaj gruntu',
    soilSand: 'Piasek',
    soilTopsoil: 'Humus / Ziemia roślinna',
    soilClay: 'Glina',
    soilGravel: 'Żwir',
    soilSandBand: 'Spęcznienie 10 do 15%',
    soilTopsoilBand: 'Spęcznienie 15 do 25%',
    soilClayBand: 'Spęcznienie 25 do 40%',
    soilGravelBand: 'Spęcznienie 15 do 25%',
    bankVolumeLabel: 'Objętość w gruncie',
    bankVolumeHelp: 'Grunt w stanie rodzimym',
    looseVolumeLabel: 'Objętość w stanie luźnym',
    looseVolumeHelp: 'Szacowany przedział po wykopaniu',
    expansionLabel: 'Zastosowane spęcznienie',
    expansionHelp: 'Przedział dla wybranego gruntu',
    sceneTitle: 'Od wykopu do pryzmy',
    sceneBank: 'w gruncie',
    sceneLoose: 'materiały luźne',
    sceneGround: 'poziom terenu',
    sceneCut: 'wykonany wykop',
    interpretationTitle: 'Jak interpretować wyniki.',
    interpretationText: 'Pierwsza liczba wskazuje objętość dółu. Przedział wskazuje przestrzeń potrzebną na wykopaną ziemię.',
    warning: 'Wartości orientacyjne do celów logistycznych. Wilgotność i metoda wykopu zmieniają rzeczywistą objętość luźną.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'niskie spęcznienie',
    soilStatusMedium: 'umiarkowane spęcznienie',
    soilStatusHigh: 'wysokie spęcznienie',
    soilStatusLabel: 'Pasmo planowania',
  },
};
