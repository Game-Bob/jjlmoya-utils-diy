import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'pl', slug: 'kalkulator-kata-i-zasiegu-drabiny', title: 'Kalkulator kąta i zasięgu drabiny', description: 'Oblicz odległość podstawy, kąt i zasięg drabiny na podstawie dwóch wymiarów i porównaj wynik z zasadą ustawienia 1:4.', faqTitle: 'Najczęściej zadawane pytania',
  faq: [
    { question: 'Co oblicza ten kalkulator drabiny?', answer: 'Po podaniu dwóch z trzech wartości: wysokości docelowej, długości drabiny i odległości podstawy, oblicza brakującą wartość. Pokazuje też kąt, zasięg pionowy oraz osobno odniesienie 1:4.' },
    { question: 'Dlaczego rzeczywista odległość podstawy może różnić się od 1:4?', answer: 'To dwa różne obliczenia. Dla wysokości 3 m i drabiny 4 m dokładna odległość podstawy wynosi 2,65 m. Odniesienie 1:4 dla 3 m to 0,75 m, a minimalna długość drabiny wynosi około 3,09 m.' },
    { question: 'Jak sprawdzić drabinę do wysokości 3 m?', answer: 'Wpisz 3 m jako wysokość docelową oraz dostępną długość drabiny. Wynik pokaże rzeczywistą odległość podstawy i kąt, a osobno wartości odniesienia 1:4.' },
    { question: 'Co oznaczają trzy tryby obliczeń?', answer: 'Wysokość + drabina oblicza odległość podstawy, wysokość + podstawa oblicza długość drabiny, a drabina + podstawa oblicza osiągalną wysokość.' },
    { question: 'Czy wynik potwierdza bezpieczeństwo drabiny?', answer: 'Nie. To tylko sprawdzenie geometrii. Sprawdź oznaczenia drabiny, podłoże, oparcie, obciążenie, dostęp i lokalne przepisy.' },
  ],
  howTo: [
    { name: 'Wybierz dwa wymiary', text: 'Wybierz wysokość + drabinę, wysokość + podstawę albo drabinę + podstawę.' },
    { name: 'Wpisz wartości', text: 'Użyj tego samego systemu jednostek w obu polach.' },
    { name: 'Odczytaj geometrię', text: 'Sprawdź odległość podstawy, kąt i zasięg wynikające z podanych wymiarów.' },
    { name: 'Porównaj z 1:4', text: 'Przed ustawieniem drabiny porównaj odległość odniesienia i minimalną długość.' },
  ],
  seo: [
    { type: 'title', text: 'Co pokazuje kalkulator drabiny', level: 2 },
    { type: 'paragraph', html: 'Użyj go, gdy znasz dwa wymiary i chcesz sprawdzić, czy drabina dosięga danej wysokości, jak daleko od oparcia znajdzie się podstawa lub jaka długość jest potrzebna. Rzeczywista geometria i odniesienie 1:4 są pokazane osobno.' },
    { type: 'title', text: 'Rzeczywista geometria podanych wymiarów', level: 3 },
    { type: 'paragraph', html: 'Tryb <strong>wysokość + drabina</strong> oblicza podstawę ze wzoru <code>√(długość² − wysokość²)</code>. Tryb <strong>wysokość + podstawa</strong> oblicza długość, a <strong>drabina + podstawa</strong> osiągalną wysokość.' },
    { type: 'title', text: 'Odniesienie ustawienia 1:4', level: 3 },
    { type: 'paragraph', html: 'Zasada 1:4 oznacza wysunięcie podstawy o jedną jednostkę na każde cztery jednostki wysokości. Dla 3 m jest to 0,75 m, a minimalna długość takiego trójkąta wynosi około 3,09 m.' },
    { type: 'title', text: 'Jak czytać wynik', level: 3 },
    { type: 'list', items: ['Mniejszy kąt oznacza, że podstawa jest dalej od oparcia.', 'Większy kąt oznacza, że podstawa jest bliżej oparcia.', 'Dłuższa od minimum drabina może wystawać ponad wysokość docelową.'] },
    { type: 'tip', title: 'Geometria nie jest certyfikatem bezpieczeństwa', html: 'Przed użyciem sprawdź drabinę, podłoże, oparcie, obciążenie, przestrzeń i instrukcje producenta.' },
  ],
  ui: {
    unitSystemLabel: 'System jednostek', unitMetric: 'Metryczny', unitImperial: 'Imperialny', intro: 'Wpisz dwa wymiary. Rzeczywista geometria i odniesienie 1:4 są pokazane osobno.', solveTitle: 'Wybierz dwa wymiary', modeHeightLength: 'Wysokość + drabina', modeHeightBase: 'Wysokość + podstawa', modeLengthBase: 'Drabina + podstawa', modeHeightLengthHint: 'Sprawdź rzeczywistą podstawę', modeHeightBaseHint: 'Oblicz długość drabiny', modeLengthBaseHint: 'Oblicz zasięg', fieldHeight: 'Wysokość docelowa', fieldLength: 'Dostępna długość drabiny', fieldBase: 'Odległość podstawy od oparcia', fieldHeightHelp: 'Wysokość, którą trzeba osiągnąć', fieldLengthHelp: 'Długość drabiny', fieldBaseHelp: 'Pozioma odległość na podłożu', calculatedTitle: 'Wynik obliczeń', calculatedBase: 'Rzeczywista odległość podstawy', calculatedBaseHelp: 'z tych dwóch wymiarów', calculatedLength: 'Długość drabiny', calculatedLengthHelp: 'dla tej wysokości i podstawy', calculatedHeight: 'Osiągalna wysokość', calculatedHeightHelp: 'dla tej drabiny i podstawy', diagramTitle: 'Geometria wyniku', angleTitle: 'Kąt', angleUnit: '°', angleGuide: 'Widok z boku pokazujący drabinę, oparcie, wysokość docelową, podstawę i odniesienie 1:4', reachTitle: 'Zasięg pionowy', reachHelp: 'wysokość przy oparciu', targetTitle: 'Wysokość docelowa', targetHelp: 'wymagana wysokość', baseTitle: 'Odległość podstawy', baseHelp: 'pozioma odległość na podłożu', guideDistanceTitle: 'Podstawa 1:4 dla celu', guideDistanceHelp: 'wysokość docelowa ÷ 4', requiredLengthTitle: 'Minimalna długość przy 1:4', requiredLengthHelp: 'dla wysokości docelowej', verdictReach: 'Cel jest osiągalny', verdictShort: 'Ten układ nie sięga celu', verdictReachHelp: 'Zasięg pionowy jest równy wysokości docelowej lub większy.', verdictShortHelp: 'Wybierz dłuższą drabinę lub inną geometrię tylko wtedy, gdy końcowe ustawienie pozostaje odpowiednie.', angleTooFlat: 'Bardziej płaski niż odniesienie', angleWithinGuide: 'Blisko odniesienia 1:4', angleTooSteep: 'Bardziej stromy niż odniesienie', ladderLabel: 'drabina', wallLabel: 'oparcie', targetLabel: 'cel', baseLabel: 'odległość podstawy', groundLabel: 'podłoże', guideLabel: 'odniesienie 1:4', invalidPositive: 'Wpisz dwa dodatnie wymiary.', invalidBase: 'Odległość podstawy musi być mniejsza od długości drabiny.', invalidTarget: 'Wysokość docelowa musi być mniejsza od długości drabiny.', warning: 'Tylko geometria. Przestrzegaj oznaczeń i instrukcji producenta drabiny.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
