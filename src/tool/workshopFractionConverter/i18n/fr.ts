import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-fractions-pouces-millimetres';
const title = 'Convertisseur Fractions en Millimètres pour l\'Atelier';
const description = 'Convertissez instantanément vos mesures de pouces fractionnaires en millimètres. Trouvez les vis, boulons et douilles standard les plus proches pour votre atelier. Conçu pour les mains sales et les doigts gantés.';

const faqData = [
  {
    question: 'Pourquoi convertir les fractions en millimètres ?',
    answer: 'La plupart des outils et fixations modernes utilisent le système métrique, mais de nombreux outils anciens et spécifications utilisent encore les pouces fractionnaires. Ce convertisseur comble cet écart, vous aidant à trouver l\'équivalent métrique exact ou la taille de fixation standard la plus proche.',
  },
  {
    question: 'Quelle est la différence entre 1/2 pouce et 12,7 mm ?',
    answer: '1/2 pouce équivaut exactement à 12,7 millimètres (0,5 × 25,4 = 12,7). Les outils métriques et impériaux sont souvent interchangeables pour les tailles standard car les fabricants alignent les tailles de fixations courantes sur les deux systèmes.',
  },
  {
    question: 'Pourquoi l\'outil affiche-t-il la "fixation la plus proche" ?',
    answer: 'Parce que les conversions exactes tombent souvent entre deux tailles de fixations standard. L\'outil trouve le boulon ou la douille commerciale la plus proche de votre mesure, afin que vous puissiez utiliser ce qui est disponible dans votre atelier.',
  },
  {
    question: 'Quelle est la différence entre la précision menuiserie et mécanique ?',
    answer: 'En menuiserie, une différence de 0,5 mm est souvent négligeable. En mécanique de précision et usinage, chaque 0,1 mm compte. Le mode précision indique les plages de tolérance acceptables pour votre matériau.',
  },
  {
    question: 'Puis-je utiliser cet outil hors ligne ?',
    answer: 'Oui. Tous les calculs s\'effectuent dans votre navigateur. L\'outil fonctionne complètement hors ligne après le premier chargement, idéal pour une utilisation en atelier sans WiFi.',
  },
  {
    question: 'Pourquoi l\'outil inclut-il un historique ?',
    answer: 'Lors d\'un démontage ou d\'un projet multi-pièces, l\'historique vous permet de consulter vos mesures sans les ressaisir, et de construire une liste de pièces au fur et à mesure.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez le type de mesure',
    text: 'Choisissez "Direct" pour convertir une fraction en millimètres, ou "Inverse" pour trouver la fraction d\'une mesure prise au pied à coulisse.',
  },
  {
    name: 'Entrez la mesure',
    text: 'Utilisez l\'entrée à trois colonnes (entier, numérateur, dénominateur) ou appuyez sur un bouton de préréglage. Les boutons de réglage permettent d\'ajuster sans taper.',
  },
  {
    name: 'Consultez les résultats',
    text: 'Le résultat affiche la conversion exacte ainsi que les tailles de boulons et douilles standard les plus proches. L\'échelle visuelle donne une idée des proportions.',
  },
  {
    name: 'Enregistrez dans l\'historique',
    text: 'Cliquez sur "Sauvegarder dans l\'historique" pour conserver vos mesures. L\'historique reste dans votre navigateur, même après fermeture.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'Utilisation', type: 'howto', schema: howToSchema },
    { title: 'Application', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: 'Type de mesure',
    labelWhole: 'Entier',
    labelNumerator: 'Numérateur',
    labelDenominator: 'Dénominateur',
    labelInches: 'Pouces',
    labelMillimeters: 'Millimètres',
    resultTitle: 'Résultat de conversion',
    resultFraction: 'Fraction',
    resultInches: 'Pouces',
    resultMillimeters: 'Millimètres',
    matchTitle: 'Correspondance la plus proche',
    matchClosestFastener: 'Taille de boulon ou vis standard',
    matchClosestSocket: 'Taille de douille ou clé standard',
    matchDifference: 'Différence avec votre mesure',
    matchRecommendation: 'Utilisez cette taille si disponible',
    reverseSearchTitle: 'Recherche inversée',
    reverseSearchLabel: 'Taille mesurée (mm)',
    reverseSearchButton: 'Trouver la fraction',
    reverseSearchHint: 'Mesurez avec un pied à coulisse, entrez la valeur',
    unitMm: 'mm',
    unitInch: 'po',
    modeForward: 'Fraction → Métrique',
    modeReverse: 'Métrique → Fraction',
    precisionLabel: 'Mode de précision',
    precisionCarpentry: 'Menuiserie',
    precisionMetal: 'Mécanique',
    buttonConvert: 'Convertir',
    buttonClear: 'Effacer',
    buttonCopyResult: 'Copier le résultat',
    buttonSaveToHistory: 'Sauvegarder',
    historyTitle: 'Historique',
    historyEmpty: 'Aucune mesure pour le moment',
    historyRemove: 'Supprimer',
    helpText: 'Sélectionnez une mesure ou entrez une fraction pour commencer.',
    toolOverline: 'Outils d\'Atelier',
    labelVisualReference: 'Référence Visuelle (1 pouce = 96px)',
  },
};
