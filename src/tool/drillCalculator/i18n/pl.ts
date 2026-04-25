import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-obrotow-wiercenia-frezowania';
const title = 'Kalkulator RPM Obróbki i Wiercenia';
const description = 'Oblicz idealne obroty na minutę (RPM) dla swojej wiertarki lub frezarki w zależności od materiału i średnicy wiertła. Unikaj spalenia narzędzi.';

const faqData = [
  {
    question: 'Dlaczego wiertła palą się podczas wiercenia?',
    answer: 'Głównie z powodu zbyt wysokich obrotów (RPM). Gdy wiertło obraca się szybciej niż materiał pozwala odprowadzić ciepło, tarcie podnosi temperaturę powyżej granicy odpuszczania stali, co sprawia, że ostrze staje się miękkie i przestaje ciąć.',
  },
  {
    question: 'Co to jest prędkość skrawania (Vc)?',
    answer: 'Jest to prędkość liniowa w metrach na minutę, z jaką krawędź tnąca narzędzia przemieszcza się po powierzchni materiału. Każdy materiał ma zalecaną Vc, która nie zależy od średnicy wiertła.',
  },
  {
    question: 'Kiedy powinienem używać narzędzi z węglika spiekanego (Widia)?',
    answer: 'Węglika należy używać, gdy trzeba pracować przy znacznie wyższych prędkościach, w produkcji przemysłowej lub gdy wiercony materiał jest ekstremalnie twardy. W typowych pracach domowych wystarczy stal szybkotnąca (HSS), która jest bardziej odporna na pęknięcia przy zginaniu.',
  },
  {
    question: 'Czy zawsze trzeba używać chłodziwa?',
    answer: 'W przypadku metali jest to prawie zawsze zalecane. W aluminium zapobiega przyklejaniu się materiału do wiertła, a w stali redukuje ciepło. W drewnie i tworzywach sztucznych najlepiej pracować na sucho, często wyprowadzając wiertło w celu usunięcia wiórów.',
  },
  {
    question: 'Jak obliczyć posuw, jeśli nie mam frezarki CNC?',
    answer: 'W wiertarce ręcznej posuw czuje się poprzez nacisk. Powinieneś widzieć, że wychodzi stały i czysty wiór. Jeśli wydostaje się pył, oznacza to, że naciskasz za słabo lub obroty są zbyt wysokie. Jeśli wiór jest bardzo gruby, a wiertarka "męczy się", naciskasz zbyt mocno.',
  },
];

const howToData = [
  { name: 'Wybierz materiał', text: 'Określ, jaki materiał będziesz wiercić lub frezować (stal, aluminium, drewno itp.). Każdy ma inną twardość i pojemność cieplną.' },
  { name: 'Wprowadź średnicę', text: 'Wpisz dokładną średnicę wiertła lub frezu w milimetrach. Pamiętaj, że im większa średnica, tym niższa powinna być prędkość obrotowa.' },
  { name: 'Wybierz typ narzędzia', text: 'Określ, czy Twoje wiertło jest ze stali szybkotnącej (HSS) czy z węglika spiekanego (Widia). Narzędzia z węglika wytrzymują znacznie wyższe prędkości.' },
  { name: 'Ustaw obroty w maszynie', text: 'Skonfiguruj wiertarkę lub frezarkę zgodnie z obliczoną wartością. Jeśli Twoja maszyna ma stałe przełożenia, skorzystaj z naszej podpowiedzi najbliższej prędkości, aby wybrać najbezpieczniejsze ustawienie kół pasowych.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Znaczenie obrotów na minutę w obróbce mechanicznej', level: 2 },
    { type: 'paragraph', html: 'Prawidłowe obliczenie obrotów na minutę to różnica między idealną pracą a kosztowną katastrofą. Nie chodzi o to, by wiertło obracało się jak najszybciej, lecz o przestrzeganie praw fizyki dotyczących tarcia i wytrzymałości materiałów. Nasz kalkulator został zaprojektowany, aby zoptymalizować wydajność Twoich narzędzi i jakość wykończenia.' },
    { type: 'title', text: 'Zrozumienie prędkości skrawania', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Wzór na obliczanie obrotów (RPM)', html: '<p>Prędkość skrawania to wartość w metrach na minutę, wskazująca idealną prędkość, z jaką krawędź tnąca powinna przemieszczać się po materiale. Wzór, którego używamy, to: <code>RPM = (Vc × 1000) / (π × D)</code>, gdzie D to średnica w milimetrach. Obliczenie to jest niezależne od średnicy materiału, który wycinamy.' },
    { type: 'title', text: 'HSS vs Węglik spiekany', level: 3 },
    { type: 'paragraph', html: 'Narzędzia ze <strong>stali szybkotnącej (HSS)</strong> są ekonomiczne i odporne na uderzenia, ale mają ograniczoną odporność termiczną. <strong>Węglik spiekany (Widia)</strong> pozwala na prędkości skrawania 3 do 5 razy wyższe, ale narzędzia te są bardziej kruche. Kalkulator automatycznie dostosowuje parametry do typu narzędzia.' },
    { type: 'title', text: '3 częste błędy podczas wiercenia', level: 3 },
    { type: 'paragraph', html: '<strong>Zbyt wysokie obroty:</strong> Powodują przegrzanie i utratę twardości stali. <strong>Zbyt niskie obroty:</strong> Wiertło wibruje i może pęknąć w wyniku zmęczenia materiału. <strong>Brak chłodzenia:</strong> Wysoka temperatura znacznie skraca żywotność narzędzia.' },
  ],
  ui: {
    labelMaterial: 'Materiał obrabiany',
    matSteel: 'Stal miękka',
    matInox: 'Stal nierdzewna',
    matAlu: 'Aluminium',
    matBrass: 'Mosiądz',
    matCastIron: 'Żeliwo',
    matWood: 'Drewno',
    matPlastic: 'Tworzywa sztuczne',
    coolSteel: 'Chłodziwo lub olej',
    coolInox: 'Olej do skrawania EP',
    coolAlu: 'Alkohol / Parafina',
    coolBrass: 'Na sucho / Powietrze',
    coolCastIron: 'Na sucho',
    coolWood: 'Tylko odciąg pyłu',
    coolPlastic: 'Strumień powietrza',
    labelTool: 'Typ narzędzia',
    typeHss: 'Stal szybkotnąca (HSS)',
    typeWidia: 'Węglik spiekany (Widia)',
    labelDiameter: 'Średnica',
    unitMm: 'mm',
    unitInch: 'cal',
    modeColumnDrill: 'Tryb wiertarki stołowej',
    labelAdvanced: 'Parametry posuwu',
    labelLips: 'Liczba ostrzy (z)',
    labelFz: 'Posuw/ząb (Fz)',
    labelMachine: 'Prędkosći Twojej maszyny',
    presetStandard: 'Standardowa',
    presetCnc: 'CNC',
    addRpmManual: 'Dodaj RPM ręcznie...',
    addButton: '+',
    resultRpm: 'Optymalna prędkość',
    resultCooling: 'Chłodzenie',
    resultFeed: 'Wynikowy posuw',
    resultClosest: 'Zalecane ustawienie',
    rpmUnit: 'Obroty / Minute',
    recommendedLabel: 'Zalecane ustawienie',
    recommendedHint: 'Ustaw przełącznik swojej maszyny w tej pozycji',
    statusLimitActive: 'Limit maszyny aktywny',
    statusOutOfRange: 'Zakres poza standardem komercyjnym',
  },
};
