import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculatrice-angle-droit-pythagore-regle-3-4-5';
const title = 'Calculatrice d\'Angle Droit (Théorème de Pythagore) : Règle 3-4-5 pour Équerrages Parfaits';
const description = 'Vérifiez si vos structures sont parfaitement d\'équerre (90°) en utilisant le théorème de Pythagore et la règle 3-4-5. Outil essentiel pour la construction, la menuiserie et le bricolage.';

const faqData = [
  {
    question: 'Qu\'est-ce que la règle 3-4-5 ?',
    answer: 'La règle 3-4-5 est un triplet pythagoricien simple. Si un triangle rectangle a des côtés de 3, 4 et 5 unités à n\'importe quelle échelle, l\'angle entre les côtés les plus courts est exactement de 90 degrés. Cette méthode éprouvée est utilisée dans la construction depuis des siècles.',
  },
  {
    question: 'Comment utiliser cette calculatrice ?',
    answer: 'Entrez les longueurs des deux murs (côtés A et B) qui forment le coin. La calculatrice indique ce que devrait être la diagonale pour un angle parfait de 90 degrés. Mesurez ensuite votre diagonale réelle et entrez-la pour vérifier si votre coin est vraiment d\'équerre.',
  },
  {
    question: 'Que se passe-t-il si ma diagonale est différente ?',
    answer: 'Si votre diagonale mesurée diffère de l\'idéale, la calculatrice affiche l\'écart. Le vert signifie parfait, le jaune acceptable, le rouge hors d\'équerre. Elle vous indique également s\'il faut ouvrir ou fermer l\'angle.',
  },
  {
    question: 'Est-ce assez précis pour la construction ?',
    answer: 'Oui. Le théorème de Pythagore est mathématiquement exact. Avec un ruban à mesurer, vous pouvez obtenir une précision de niveau construction sans outils spécialisés ni compétences avancées.',
  },
  {
    question: 'Puis-je passer des pouces aux pieds ?',
    answer: 'Oui. Choisissez les pouces pour les petits projets ou les pieds pour les structures plus grandes. Toutes les valeurs se convertissent instantanément sans perte de données.',
  },
];

const howToData = [
  { name: 'Sélectionnez votre unité', text: 'Choisissez les pouces pour les travaux détaillés ou les pieds pour les structures plus grandes. Vous pouvez changer à tout moment.' },
  { name: 'Mesurez les deux côtés', text: 'Mesurez la longueur des deux murs (côtés A et B) qui forment le coin que vous souhaitez vérifier.' },
  { name: 'Vérifiez la diagonale idéale', text: 'La calculatrice vous montre ce que doit être la diagonale pour un angle parfait de 90 degrés.' },
  { name: 'Mesurez votre diagonale', text: 'Utilisez un ruban à mesurer pour mesurer votre diagonale réelle. Entrez-la dans le champ optionnel.' },
  { name: 'Lisez le statut', text: 'Vert = équerre parfaite. Jaune = acceptable. Rouge = hors d\'équerre. Ajustez comme suggéré.' },
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

const howToSchema: WithContext<any> = {
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Le Théorème de Pythagore en Pratique', level: 2 },
    { type: 'paragraph', html: 'Un angle parfait de 90 degrés est fondamental pour une construction de qualité. Les murs doivent être perpendiculaires, les fondations doivent être d\'équerre et les cadres doivent être d\'aplomb. Le théorème de Pythagore fournit une méthode mathématiquement garantie : a² + b² = c².' },
    { type: 'title', text: 'Pourquoi la règle 3-4-5 fonctionne', level: 3 },
    { type: 'paragraph', html: 'La règle 3-4-5 est le triplet pythagoricien le plus simple. Que vous mesuriez en pouces, en pieds ou dans n\'importe quelle autre unité, les côtés de 3, 4 et 5 unités garantissent un angle de 90 degrés. Cela a été prouvé mathématiquement et testé dans la construction depuis des siècles.' },
    { type: 'title', text: 'La précision sans outils spécialisés', level: 3 },
    { type: 'paragraph', html: 'Contrairement aux niveaux ou aux équerres qui peuvent se casser ou se dérégler, le théorème de Pythagore est immuable. Avec un simple ruban à mesurer, vous pouvez vérifier n\'importe quel angle à n\'importe quelle échelle. Cette calculatrice élimine le calcul mental et assure la précision.' },
    { type: 'title', text: 'De la théorie au guide pratique', level: 3 },
    { type: 'paragraph', html: 'Cette calculatrice convertit les mathématiques abstraites en instructions pratiques sur le terrain. Si votre diagonale est fausse, elle vous indique exactement de combien et dans quelle direction ajuster. Transformez la théorie en résultats concrets sur le chantier.' },
  ],
  ui: {
    titleMain: 'Calculatrice d\'Équerrage (Pythagore)',
    labelInputData: 'Mesures',
    labelUnitSelection: 'Unité',
    btnUnitInches: 'pouces',
    btnUnitFeet: 'pieds',
    labelSideA: 'Côté A',
    labelSideB: 'Côté B',
    labelMeasuredDiagonal: 'Diagonale mesurée (optionnel)',
    labelResults: 'Résultats',
    labelIdealDiagonal: 'Diagonale idéale',
    labelDeviation: 'Écart',
    labelStatus: 'Statut',
    labelVerification: 'Vérification d\'équerrage',
    btnClear: 'Effacer',
    btnCopyResults: 'Copier les résultats',
    labelPresets: 'Réglages rapides',
    unitInches: 'po',
    unitFeet: 'pi',
    tooltipOptional: 'Entrez votre diagonale mesurée pour vérifier les 90 degrés',
    tooltipPresets: 'Règle 3-4-5 à différentes échelles',
    statusPerfect: 'Angle de 90 degrés parfait',
    statusAcceptable: 'Écart acceptable',
    statusWarning: 'Écart mineur',
    statusError: 'Hors d\'équerre',
    statusReady: 'Prêt',
    msgIdealCalculated: 'Diagonale idéale calculée',
    actionOpen: 'Ouvrir',
    actionClose: 'Fermer',
    descLarger: 'plus grande',
    descSmaller: 'plus petite',
    descCorrection: 'Correction nécessaire',
  },
};
