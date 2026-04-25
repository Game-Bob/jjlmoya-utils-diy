import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-balustres';
const title = 'Calculateur de Balustres: Espacement Exact pour Rampes';
const description =
  "Calculez l'espacement exact entre balustres pour les rambardes en respectant la règle des 10 cm. Plans automatiques.";

const faqData = [
  {
    question: 'Quelle est la distance maximale légale entre les balustres?',
    answer:
      "Dans la plupart des codes de construction internationaux, l'espace libre entre les éléments d'une rambarde ne doit pas permettre le passage d'une sphère de 10 cm de diamètre afin de prévenir les accidents infantiles.",
  },
  {
    question: "Comment mesure-t-on l'espacement: entre axes ou espace libre?",
    answer:
      "Notre calculateur fournit les deux. L'espace libre est le vide réel entre les balustres (essentiel pour la sécurité), tandis que la distance entre axes est utilisée pour marquer où percer ou fixer chaque balustre.",
  },
  {
    question: "Que faire si la répartition n'est pas exacte?",
    answer:
      'Le calculateur ajuste automatiquement le nombre de balustres pour que le premier et le dernier espace soient identiques, garantissant la symétrie visuelle et le respect strict de l\'espace maximal autorisé.',
  },
  {
    question: 'Vaut-il mieux souder ou visser les balustres?',
    answer:
      "Cela dépend du matériau. Pour l'acier, la soudure offre une rigidité structurelle maximale. Pour le bois ou l'aluminium, on utilise des ancrages mécaniques ou des boulons traversants. La rambarde doit résister à une charge horizontale d'au moins 0,8 kN/m.",
  },
];

const howToData = [
  {
    name: 'Mesurer la longueur totale',
    text: 'Mesurez la distance exacte entre le premier et le dernier poteau où sera installée la rambarde.',
  },
  {
    name: 'Définir l\'épaisseur du balustre',
    text: 'Mesurez la largeur d\'un balustre individuel (ex. 2x2 cm pour tube carré ou le diamètre si rond).',
  },
  {
    name: "Définir l'espace maximal",
    text: "Indiquez l'espacement maximal souhaité (10 cm recommandé pour respecter la réglementation).",
  },
  {
    name: "Obtenir les repères d'installation",
    text: 'Consultez la liste des positions exactes pour percer et assurer une répartition symétrique et sécurisée.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Complet: Comment Calculer l\'Espacement des Balustres pour Rambardes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Concevoir une rambarde sûre et esthétiquement parfaite est un art qui combine la précision mathématique avec les normes de construction. Que ce soit pour une terrasse, un balcon ou un escalier intérieur, le calcul correct des balustres est l'étape la plus critique du projet. Une erreur de calcul ne ruine pas seulement la symétrie visuelle, mais peut rendre votre structure illégale et dangereuse.",
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Pourquoi ce calcul est si important?',
      html: '<p>Il ne s\'agit pas seulement de "remplir l\'espace". Il s\'agit de respecter la <strong>Règle de la Sphère de 10 cm</strong>, une norme de sécurité internationale conçue pour prévenir les accidents infantiles.</p>',
    },
    {
      type: 'title',
      text: '1. La Réglementation de Sécurité: La Règle des 10 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Avant de couper la première pièce de bois ou de métal, vous devez comprendre le "pourquoi" des mathématiques. Le Code de Construction International (IRC) aux États-Unis établit une règle claire: <em>"L\'espace libre entre les éléments verticaux ne doit pas permettre le passage d\'une sphère de 10 cm (4 pouces) de diamètre."</em>',
    },
    {
      type: 'paragraph',
      html: "Cette mesure n'est pas arbitraire. C'est le diamètre moyen de la tête d'un jeune enfant (généralement de moins d'1 an). Si un enfant peut passer son corps mais que sa tête se coince, le risque d'asphyxie est extrêmement élevé. L'objectif de notre <strong>Calculateur de Balustres</strong> n'est donc pas seulement esthétique — il sauve des vies.",
    },
    {
      type: 'title',
      text: "2. Le Problème Mathématique: L'Erreur du Poteau de Clôture",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En programmation et en construction, il existe un problème classique appelé <em>"Fencepost Error"</em> (Erreur du Poteau de Clôture). Si vous voulez construire une clôture de 10 mètres avec des poteaux tous les mètres, combien de poteaux vous faut-il? La réponse intuitive est 10, mais la bonne réponse est 11.',
    },
    {
      type: 'paragraph',
      html: "Avec les balustres, quelque chose de similaire se produit, mais plus complexe, car la largeur du balustre lui-même occupe de l'espace. La formule utilisée par notre outil résout ce système d'équations pour vous:",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Étape A: Calculer les Espaces',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>On détermine d\'abord combien de balustres rentrent théoriquement en utilisant l\'espace maximal autorisé. On arrondit ce nombre vers le haut pour s\'assurer que les espaces résultants soient <em>inférieurs</em> au maximum.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: "Étape B: Recalculer l'Espace Exact",
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Une fois que nous connaissons le nombre exact de balustres (n), nous calculons combien d\'espace "reste" après avoir soustrait toute la largeur du bois, et nous le divisons équitablement entre les espaces (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: "3. Guide d'Installation Étape par Étape",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Avoir les chiffres n'est que la moitié de la bataille. Voici comment transférer ces données du papier (ou de l'écran) à la réalité de votre chantier.",
    },
    {
      type: 'title',
      text: 'Étape 1: Mesure de Précision',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mesurez la distance <strong>intérieure</strong> entre poteau et poteau. Ne mesurez pas depuis le centre du poteau. Vous avez besoin de connaître l\'espace net exact que vous allez remplir (L). Si votre rambarde comporte plusieurs travées, mesurez chacune individuellement.',
    },
    {
      type: 'title',
      text: 'Étape 2: Trouver le Centre',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'erreur numéro un des débutants est de commencer à placer les balustres d\'un bout à l\'autre. Cela entraîne presque toujours un dernier espace de taille bizarre.<ul><li>Marquez le <strong>centre exact</strong> de la rambarde (L / 2).</li><li>Décidez si vous voulez un <em>balustre</em> ou un <em>espace</em> au centre.</li><li>Si vous voulez un balustre au centre: marquez la moitié de la largeur du balustre de chaque côté de votre repère central.</li><li>Si vous voulez un espace au centre: marquez la moitié de la distance de l\'espace (g / 2) de chaque côté.</li></ul>',
    },
    {
      type: 'title',
      text: 'Étape 3: Fabriquer un Gabarit (Spacer)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "N'utilisez pas le mètre ruban pour chaque balustre. L'erreur humaine cumulative fera que le dernier balustre sera décalé de plusieurs centimètres. La méthode professionnelle consiste à couper un bloc de bois avec la mesure exacte de l'espace (g) donné par notre calculateur.",
    },
    {
      type: 'paragraph',
      html: "Utilisez ce bloc comme gabarit physique. Placez un balustre, posez le bloc, placez le balustre suivant serré contre le bloc, et fixez-le. Cela garantit une cohérence au millimètre près.",
    },
    {
      type: 'title',
      text: '4. Matériaux et Outils Nécessaires',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Équipement pour une finition professionnelle',
      html: '<ul><li>Mètre ruban de haute précision</li><li>Crayon de charpentier</li><li>Niveau à bulle (pour la verticalité)</li><li>Scie à onglets (pour des coupes nettes)</li><li>Perceuse et vis à bois</li><li>Blocs gabarits (faits sur mesure)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Questions Techniques Supplémentaires',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: "Que faire si le dernier espace ne s'adapte pas?",
      html: "<p>Si vous avez utilisé notre calculateur, cela ne devrait pas arriver. Cependant, dans le monde réel, le bois se courbe et les poteaux ne sont pas toujours droits. Si vous avez un écart de 1-2 mm, c'est imperceptible. S'il manque 1 cm, vérifiez vos blocs gabarits.</p>",
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: "Balustres plus espacés sans enfants?",
      html: "<p>Légalement, non. Le code de construction s'applique au logement, pas aux occupants actuels. Si vous vendez un jour, une rambarde non conforme sera un problème lors de l'inspection. De plus, les visiteurs (neveux, petits-enfants) peuvent être en danger.</p>",
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Bois, Métal ou Verre?',
      html: '<p>Ce calculateur fonctionne pour <strong>tout élément vertical répétitif</strong>. Pour les câbles en acier horizontaux, une réglementation différente s\'applique. Pour le verre, c\'est un panneau continu et l\'espacement ne s\'applique pas — c\'est la résistance aux chocs qui compte.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"L\'architecture est la volonté d\'une époque traduite dans l\'espace."</em></p><p>Nous espérons que cet outil vous aidera à construire des espaces plus sûrs et plus beaux. Consultez toujours le code de construction local de votre municipalité.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensions',
    sectionDesc: 'Entrez les mesures de votre rambarde',
    labelRailLength: 'Longueur Totale (L)',
    labelBalusterWidth: 'Largeur Balustre (w)',
    labelMaxGap: 'Espace Maximal (g)',
    blueprintTitle: 'Plan de Montage',
    blueprintRef: 'RÉF: BAL-001 // ÉCHELLE: AUTO',
    labelRequired: 'Balustres Requis',
    labelExactGap: 'Espace Exact',
    labelOnCenter: 'Entre Axes',
    labelTotalSpaces: 'Espaces Totaux',
    labelCoveredLength: 'Longueur Couverte',
    labelDisclaimer: '* Les dimensions affichées sont approximatives pour la visualisation.',
  },
};
