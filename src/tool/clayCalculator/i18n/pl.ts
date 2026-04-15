import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'kalkulator-kurczliwosci-gliny';
const title = 'Kalkulator Kurczliwości Gliny: Dokładne Wymiary dla Ceramiki';
const description =
  'Oblicz kurczliwość gliny podczas suszenia i wypalania. Projektuj wyroby ceramiczne z dokładnymi wymiarami końcowymi.';

const faqData = [
  {
    question: 'Dlaczego glina się kurczy?',
    answer:
      'Glina kurczy się głównie z powodu utraty wody. Najpierw następuje suszenie (odparowanie wody spomiędzy cząsteczek), a następnie wypalanie (usuwanie wody związanej chemicznie i spiekanie cząsteczek).',
  },
  {
    question: 'Jaki jest normalny procent kurczliwości?',
    answer:
      'Zależy to od masy ceramicznej. Gliniane naczynia (fajans) zazwyczaj kurczą się o 5-10%, podczas gdy kamionka i porcelana mogą osiągnąć 12-15% ze względu na większy stopień zeszklenia.',
  },
  {
    question: 'Jak zmierzyć kurczliwość własnej gliny?',
    answer:
      'Utwórz płytkę testową o wymiarach dokładnie 10 cm. Pozostaw ją do wyschnięcia i zmierz (kurczliwość podczas suszenia). Wypal ją w docelowej temperaturze i zmierz ponownie (kurczliwość całkowita). Różnica poda Ci dokładny procent.',
  },
  {
    question: 'Co jeśli mój wyrób pęka podczas suszenia?',
    answer:
      'Zazwyczaj oznacza to zbyt szybkie lub nierównomierne suszenie. Cienkie strefy tracą wodę szybciej niż grube, co generuje napięcia. Przykryj wyroby folią, aby spowolnić ten proces.',
  },
];

const howToData = [
  {
    name: 'Zmierz wyrób na mokro',
    text: 'Pobierz dokładne wymiary wyrobu tuż po toczeniu lub modelowaniu, gdy posiada on jeszcze całą swoją wilgoć.',
  },
  {
    name: 'Wprowadź współczynnik kurczliwości',
    text: 'Poszukaj na opakowaniu gliny procentu kurczliwości całkowitej (suszenie + wypalanie) podanego przez producenta.',
  },
  {
    name: 'Uzyskaj oczekiwane wymiary końcowe',
    text: 'Użyj kalkulatora, aby dowiedzieć się, jakie wymiary będzie miał Twój wyrób po wyjęciu z pieca i odpowiednio zaplanuj dopasowania lub pokrywki.',
  },
  {
    name: 'Obliczenie odwrotne dla celów',
    text: 'Jeśli potrzebujesz, aby Twój wyrób miał na końcu dokładnie X cm, użyj obliczenia odwrotnego, aby wiedzieć, jaki rozmiar powinien mieć na kole.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'The Potter\'s Dictionary - Clay Shrinkage',
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Fizyka Gliny: Kurczliwość i Ekspansja',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Glina to żywy materiał, który zmienia rozmiar podczas całego procesu ceramicznego. Od momentu uformowania mokrego wyrobu do chwili wyjęcia go z pieca, może on stracić od 8% do 15% swojej pierwotnej wielkości. Obliczenie tej kurczliwości jest kluczowe dla tworzenia przedmiotów o dokładnie takich wymiarach, jakich potrzebujesz.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Fazy Kurczliwości',
          html: '<p><strong>1. Suszenie (Mokre → Suche):</strong> Tracąc wodę, cząsteczki gliny zbliżają się do siebie. Jest to największa kurczliwość (4-8%). Grube wyroby mogą pękać, jeśli schną zbyt szybko.</p><p><strong>2. Wypalanie (Suche → Biskwit):</strong> Pomiędzy 900-1000°C glina przechodzi nieodwracalne zmiany chemiczne. Dodatkowa kurczliwość biskwitu wynosi 2-4%. Wyrób staje się porowaty, ale wytrzymały.</p><p><strong>3. Zeszklenie (Wysoka Temperatura):</strong> Przy 1200-1300°C glina ulega zeszkleniu. Końcowa kurczliwość wynosi 1-3%. Kamionka i porcelana osiągają swoją maksymalną gęstość.</p>',
        },
        {
          type: 'card',
          title: 'Zmienne Wpływające',
          html: '<ul><li><strong>Rodzaj gliny:</strong> Gliny czerwone kurczą się mniej (8-10%) niż porcelany (12-15%).</li><li><strong>Grubość ścianki:</strong> Cienkie ścianki kurczą się bardziej równomiernie niż grube.</li><li><strong>Temperatura wypalania:</strong> Im wyższa temperatura, tym większa kurczliwość i zeszklenie.</li><li><strong>Zawartość szamotu:</strong> Dodanie szamotu (zmielonej, wypalonej już gliny) zmniejsza kurczliwość.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Zastosowania Praktyczne',
      level: 2,
    },
    {
      type: 'title',
      text: 'Projektowanie Form',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli potrzebujesz filiżanki o końcowej średnicy 8 cm, a Twoja glina kurczy się o 12%, musisz wykonać formę o rozmiarze <strong>9,1 cm</strong>. To obliczenie odwrotne jest krytyczne w produkcji seryjnej.',
    },
    {
      type: 'title',
      text: 'Pokrywki i Montaże',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tworząc elementy, które muszą do siebie pasować (imbryk + pokrywka, słoik + pokrywka), oba należy wykonać z tej samej gliny i wypalać razem, aby zagwarantować, że skurczą się jednakowo. Różnica rzędu 1% może zrujnować dopasowanie.',
    },
    {
      type: 'title',
      text: 'Rzeźba Monumentalna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W dużych obiektach różnica w kurczeniu się grubych i cienkich sekcji może powodować pęknięcia. Doświadczeni ceramicy kompensują to, zostawiając grubsze ścianki w strefach, o których wiedzą, że skurczą się bardziej.',
    },
  ],
  ui: {
    labelInitialSize: 'Rozmiar Początkowy (mm)',
    labelShrinkage: 'Procent Kurczliwości (%)',
    labelLow: 'Niska (Terakota)',
    labelMedium: 'Średnia (Kamionka)',
    labelHigh: 'Wysoka (Porcelana)',
    presetTerracota: 'Terakota (8%)',
    presetGres: 'Kamionka (12%)',
    presetPorcelana: 'Porcelana (15%)',
    labelResult: 'Wynik',
    labelFinalSize: 'Rozmiar Końcowy:',
    labelLoss: 'Całkowita Strata:',
    tipText:
      'Aby obliczyć rozmiar początkowy potrzebny do uzyskania konkretnego rozmiaru końcowego, podziel pożądany rozmiar przez (1 - kurczliwość/100).',
    labelInitialBadge: 'Początkowy:',
    labelFinalBadge: 'mm końcowy',
    labelLossBadge: 'Strata:',
    labelInitialArea: 'Obszar Początkowy',
    labelFinalArea: 'Obszar Końcowy',
  },
};
