import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'calculatrice-escaliers';
const title = 'Calculatrice d\'Escaliers: Conception et Exécution';
const description = 'Calculez les mesures exactes de votre escalier: giron, hauteur de marche, pente et matériaux. Appliquez la loi de Blondel et évitez les erreurs de construction.';

const faqData = [
  {
    question: 'Qu\'est-ce que la Loi de Blondel?',
    answer: 'C\'est une formule qui établit que pour qu\'un escalier soit confortable, la somme de deux hauteurs de marche et d\'un giron doit être entre 62 et 64 cm (2H + G = 63). Cette loi est basée sur la longueur moyenne du pas humain et garantit que la montée ou la descente est sûre et confortable.',
  },
  {
    question: 'Quelle est la hauteur maximale d\'une marche?',
    answer: 'Pour les bâtiments résidentiels, 18-19 cm est recommandé. Pour les espaces publics, le maximum est généralement 17,5 cm selon les normes. Les hauteurs de marche plus importantes sont fatigantes et potentiellement dangereuses, notamment pour les enfants et les personnes âgées.',
  },
  {
    question: 'Comment calculer si l\'espace est limité?',
    answer: 'Si l\'espace horizontal est limité, vous devez augmenter le nombre de marches (réduire la hauteur) ou accepter une pente plus raide, bien que moins confortable. La calculatrice vous aide à trouver l\'équilibre optimal.',
  },
  {
    question: 'Qu\'inclut le calcul du volume de béton?',
    answer: 'Le volume total de béton est calculé en considérant les marches plus la dalle inclinée (le plan incliné qui soutient les marches). Ignorer ce volume entraînerait une commande de béton insuffisante.',
  },
  {
    question: 'Pourquoi la mise en plan cumulée est-elle importante?',
    answer: 'Mesurer chaque marche séparément génère des erreurs cumulées. La mise en plan cumulée garantit que toutes les marches ont exactement la même hauteur, évitant les risques et améliorant le confort d\'utilisation.',
  },
];

const howToData = [
  { name: 'Mesurer la dénivellation', text: 'Mesurez la dénivellation totale (H) du sol fini inférieur au sol fini supérieur. C\'est la valeur fondamentale pour tout le calcul.' },
  { name: 'Entrez la longueur disponible', text: 'Optionnel: Si vous avez des contraintes d\'espace, entrez la longueur horizontale disponible. Utilisez 0 pour un calcul libre sans limites.' },
  { name: 'Ajustez le nombre de marches', text: 'La calculatrice propose un nombre initial, mais vous pouvez l\'ajuster. Observez l\'indicateur de Blondel: il doit être au vert (62-64 cm) pour un confort maximal.' },
  { name: 'Définissez les paramètres de construction', text: 'Spécifiez l\'épaisseur de la dalle, les finitions, la résistance du béton et la largeur de l\'escalier. Ces valeurs affectent les calculs finaux des matériaux.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Normes',
  bibliography: [
    { name: 'Règles de construction des escaliers intérieurs - DTU', url: 'https://www.afnor.org/' },
    { name: 'Loi de Blondel - Wikipédia', url: 'https://fr.wikipedia.org/wiki/Escalier' },
    { name: 'ISO 12122-1: Escaliers de bâtiment - Prescriptions de sécurité', url: 'https://www.iso.org/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Géométrie de Conception d\'Escaliers: Loi de Blondel', level: 2 },
    { type: 'paragraph', html: 'Le confort d\'un escalier dépend de la longueur du pas humain. Quand vous montez ou descendez des escaliers, votre corps s\'attend à un rythme prévisible. La loi de Blondel établit que 2 hauteurs + 1 giron = 62-64 cm est la norme garantissant un confort et une sécurité maximaux.' },
    { type: 'title', text: 'Contrôle Structurel et Matériaux', level: 3 },
    { type: 'paragraph', html: 'Pour une exécution professionnelle, il est vital de tenir compte de la dalle de béton (le plan incliné supportant les marches). Ignorer ce volume entraînerait une commande de béton insuffisante et une construction défectueuse. La calculatrice intègre automatiquement ce calcul.' },
    { type: 'title', text: 'Mise en Plan et Traçage: Erreur Cumulée', level: 3 },
    { type: 'paragraph', html: 'En construction, le plus grand ennemi est l\'erreur au niveau millimétrique. Si vous mesurez chaque marche séparément, la somme des petites erreurs peut laisser la dernière marche 5 cm plus haute ou plus basse que la première. La mise en plan cumulée évite ce problème.' },
    { type: 'title', text: 'Prévision des Finitions Finales', level: 3 },
    { type: 'paragraph', html: 'Un détail critique: allez-vous installer des marches en granit de 3 cm? Cette donnée est fondamentale. Si elle n\'est pas correctement prévue, la première marche sera 3 cm plus haute et la dernière 3 cm plus basse, créant un vrai risque de sécurité.' },
  ],
  ui: {
    // Géométrie
    labelGeometry: 'Géométrie et Ouverture',
    labelTotalHeight: 'Dénivellation Totale (H)',
    labelAvailableLength: 'Longueur Disponible (L)',
    labelAvailableLengthHint: 'Utilisez 0 pour calcul libre.',
    labelNumSteps: 'Nombre de Marches',
    labelOptimize: 'Optimiser (18cm)',

    // Travail
    labelWork: 'Détails de Construction',
    labelSlabThickness: 'Dalle (e)',
    labelFinishThickness: 'Finition',
    labelCeilingHeight: 'Hauteur Plafond (Optionnel)',
    labelStairWidth: 'Largeur Escalier',
    labelConcreteStrength: 'Résistance Béton',
    optionH150: 'H-150 (Béton Maigre)',
    optionH200: 'H-200 (Résidentiel)',
    optionH250: 'H-250 (Structurel)',

    // Résultats
    labelRiser: 'Hauteur de Marche',
    labelTread: 'Giron',
    labelSlope: 'Pente',
    labelRealAdvance: 'Avance Réelle',

    // Tableau
    labelLayoutTable: 'Mise en Plan et Exécution',
    colStep: 'Marche',
    colConcreteHeight: 'Hauteur Béton',
    colFinishedHeight: 'Hauteur Finie',
    colAdvance: 'Avance',
    adjustedNote: 'Ajusté',

    // Matériaux
    labelMaterials: 'Estimation des Matériaux',
    labelTotalConcrete: 'Béton Total:',
    labelCement: 'Ciment (sacs/25kg):',
    labelSand: 'Sable Nécessaire:',
    unitM3: 'm³',
    unitBags: 'sacs',
    unitLiters: 'L',

    // Boutons
    btnShare: 'Partager',
    btnPrint: 'Imprimer PDF',

    // États Blondel
    statusOptimalComfort: 'Confort Optimal',
    statusMarginLimit: 'Limite Marge',
    statusCriticalDesign: 'Conception Critique',
    statusRiserError: 'Erreur de Giron',

    msgInvalidValues: 'Valeurs invalides',
    msgInsufficientSpace: 'ESPACE INSUFFISANT',
    msgDangerousTread: 'Le giron de {val}cm est dangereux.',
    msgBlondelValue: 'Blondel: {val}cm.',
    msgOptimalStep: 'Pas confortable: {val}cm.',
    msgLowCeiling: 'ECHAPPÉE BASSE (<2m)',
    msgCalculating: 'Calcul en cours...',
    msgEnterMeasurements: 'Saisissez les mesures',

    shareTitle: 'Résumé de l\'ouvrage',
    shareMessage: 'Escalier: H={h}cm, N={n}, CH={ch}cm, Vol={vol}m3',
  },
};
