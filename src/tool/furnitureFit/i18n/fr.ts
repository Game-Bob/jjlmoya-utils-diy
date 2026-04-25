import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-encombrement-meubles';
const title = 'Calculateur de Place pour Meubles et Déménagement';
const description =
  'Vérifiez si votre canapé, armoire ou table passe dans l\'ascenseur ou par la porte. Utilisez le théorème de Pythagore 3D pour calculer les inclinaisons et éviter les catastrophes de déménagement.';

const faqData = [
  {
    question: 'Pourquoi un canapé peut ne pas passer même s\'il est plus petit que la porte?',
    answer:
      'À cause de l\'angle de rotation. Si le couloir est étroit, le canapé doit entrer de côté ou incliné. Le facteur limitant n\'est pas seulement la largeur de la porte, mais le rayon de giration disponible dans l\'entrée.',
  },
  {
    question: 'Qu\'est-ce que la diagonale d\'un meuble et pourquoi est-elle importante?',
    answer:
      'C\'est la plus grande distance entre deux coins opposés. Elle est essentielle pour savoir si un meuble haut peut être redressé dans une pièce à plafond bas après avoir été assemblé au sol.',
  },
  {
    question: 'Comment mesurer un ascenseur correctement?',
    answer:
      'Ne mesurez pas seulement le sol. Mesurez la largeur de la porte ouverte, la profondeur libre et la hauteur totale. La diagonale depuis la base de la porte jusqu\'au coin supérieur arrière est la donnée la plus importante.',
  },
  {
    question: 'Quelles pièces démonter en premier?',
    answer:
      'Les pieds de canapés, poignées d\'armoires et portes de réfrigérateurs permettent souvent de gagner 5 à 10 cm critiques qui font la différence entre un meuble qui passe ou qui reste dans la rue.',
  },
];

const howToData = [
  {
    name: 'Mesurer le meuble (Longueur, Largeur, Hauteur)',
    text: 'Prenez les dimensions maximales de l\'objet, y compris les saillies comme les accoudoirs ou les poignées.',
  },
  {
    name: 'Mesurer les passages critiques',
    text: 'Mesurez le dégagement de la porte (de cadre à cadre), l\'intérieur de l\'ascenseur et la largeur des couloirs.',
  },
  {
    name: 'Saisir les données dans le simulateur',
    text: 'Entrez les dimensions dans l\'outil pour vérifier si le volume du meuble est compatible avec l\'espace de passage.',
  },
  {
    name: 'Calculer les inclinaisons',
    text: 'Si le meuble est très haut, utilisez la diagonale calculée pour vérifier si vous pouvez le faire pivoter sur le palier ou dans l\'ascenseur.',
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'La Science du Déménagement et le Théorème de Pythagore', level: 2 },
    {
      type: 'paragraph',
      html: 'Un déménagement n\'est pas seulement une épreuve physique — c\'est un puzzle géométrique complexe. L\'espace apparent d\'une pièce ou d\'un ascenseur trompe l\'œil humain, surtout lorsqu\'on ignore la troisième dimension. Les mathématiques peuvent vous faire économiser des centaines d\'euros en retours et transports ratés.',
    },
    { type: 'title', text: 'L\'Astuce de la Diagonale 3D', level: 3 },
    {
      type: 'card',
      icon: 'mdi:math-log',
      title: 'La Règle d\'Or de la Mesure',
      html: '<p>Ne mesurez jamais seulement le meuble. Mesurez toujours les <strong>points d\'accès critiques</strong>: la largeur nette du cadre de porte (soustrayez l\'épaisseur de la porte si elle n\'ouvre pas à 180°), le point le plus bas du plafond sur le palier et la profondeur réelle de l\'ascenseur portes fermées. La formule <code>d = √(l² + h² + p²)</code> révèle si le meuble passe incliné.</p>',
    },
    { type: 'title', text: 'Le Problème du Canapé dans le Couloir', level: 3 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'La Marge de Manœuvre',
      html: '<p>Une erreur courante est de supposer que si le meuble fait 80cm et l\'ouverture 80cm, il passera. Non. Les mains des déménageurs, l\'élasticité du tissu et les imperfections des murs nécessitent une marge minimale de <strong>2 à 5 cm</strong>. Sans cette marge, le meuble sera rayé ou coincé par pression.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Démonter pour Gagner',
      html: '<p>Avant d\'abandonner parce que le meuble ne passe pas, vérifiez les pieds. Retirer les pieds d\'un canapé réduit souvent sa hauteur critique de 10 à 15cm, la différence entre entrer triomphalement ou rester dans le hall. Les portes de réfrigérateur et les poignées d\'armoire ajoutent aussi des centimètres critiques.</p>',
    },
    { type: 'title', text: '3 Erreurs Fatales lors d\'un Déménagement', level: 3 },
    {
      type: 'paragraph',
      html: 'Même avec des mesures correctes, ces facteurs invisibles provoquent des catastrophes: <strong>Le Luminaire au Plafond</strong> — oublié pendant l\'inclinaison diagonale, il peut être heurté et brisé. <strong>Le Rayon de Giration du Meuble</strong> — un meuble rigide ne se plie pas; même s\'il passe en largeur dans un couloir étroit, il ne pourra pas effectuer le virage. <strong>L\'Emballage</strong> — le papier bulle et le carton de protection peuvent ajouter 1 à 3 cm de chaque côté.',
    },
  ],
  ui: {
    conTitle: 'Dimensions de l\'Espace',
    conHint: 'Ex: Ascenseur standard, encadrement de porte ou fourgonnette.',
    objTitle: 'Dimensions du Meuble',
    labelWidth: 'Largeur (cm)',
    labelHeight: 'Hauteur (cm)',
    labelDepth: 'Profondeur (cm)',
    labelLength: 'Longueur (cm)',
    labelMargin: 'Marge d\'Erreur (cm)',
    vizLabel: 'Vue Spatiale Simplifiée',
    verdictDefault: 'Ça rentre?',
    verdictHint: 'Entrez les mesures pour vérifier la compatibilité spatiale.',
    verdictYes: 'OUI, ÇA RENTRE!',
    verdictNo: 'ÇA NE RENTRE PAS',
    fitDirect: 'Le meuble rentre parfaitement de façon directe.',
    fitDiagonal3d: 'Rentre incliné en diagonale (Pythagore 3D).',
    fitDiagonalPlane: 'Rentre incliné dans l\'un des plans latéraux.',
    fitNope: 'Le meuble est trop grand même incliné en diagonale.',
    diagLabel: 'Diagonale Maximale (Pythagore 3D):',
    objLabel: 'Meuble',
  },
};
