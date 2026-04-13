import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'calculateur-resine-epoxy';
const title = 'Calculateur de Résine Époxy : Mélange et Volume Exact';
const description =
  "Calculez la quantité exacte de résine époxy et de durcisseur nécessaire pour vos projets. Évitez les gaspillages pour les tables rivières, bijoux et moules.";

const faqData = [
  {
    question: 'Pourquoi la proportion exacte est-elle si importante avec la résine ?',
    answer:
      "Contrairement à d'autres mélanges, la résine époxy ne sèche pas par évaporation mais par une réaction chimique (polymérisation). S'il y a un excès de résine ou de durcisseur, la réaction sera incomplète, laissant la pièce collante, molle ou avec des bulles permanentes.",
  },
  {
    question: 'Quelle est la différence entre le ratio en poids et en volume ?',
    answer:
      "Beaucoup de résines se mélangent 2:1 en volume mais 100:45 en poids car le durcisseur est généralement plus dense. Utilisez toujours l'échelle indiquée par le fabricant et, si possible, une balance numérique pour une précision maximale.",
  },
  {
    question: 'Comment éviter les bulles lors du mélange ?',
    answer:
      "Mélangez lentement avec des mouvements circulaires constants pendant au moins 3 minutes, en raclant bien les parois du récipient. Laissez reposer le mélange quelques minutes avant de verser pour que les bulles remontent à la surface.",
  },
  {
    question: "Qu'est-ce que le Pot Life (durée de vie) ?",
    answer:
      "C'est le temps dont vous disposez pour travailler avec le mélange avant qu'il commence à durcir (gélifier). En été ou avec de grands volumes, ce temps est considérablement réduit en raison de la réaction exothermique (génère de la chaleur).",
  },
];

const howToData = [
  {
    name: 'Mesurer les dimensions du moule',
    text: 'Mesurez la longueur, la largeur et la profondeur (épaisseur) de la zone que vous souhaitez remplir de résine.',
  },
  {
    name: 'Entrer le ratio de mélange',
    text: "Vérifiez sur l'étiquette de votre produit si le mélange est 1:1, 2:1 ou 3:1 et s'il est basé sur le poids ou le volume.",
  },
  {
    name: 'Peser les composants',
    text: "Versez d'abord le composant A (résine) puis le B (durcisseur) dans un récipient propre sur une balance numérique.",
  },
  {
    name: 'Mélange technique',
    text: "Remuez doucement jusqu'à ce que le mélange soit totalement transparent et qu'il n'y ait plus de 'fils' de densité différente visibles.",
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    {
      name: 'TotalBoat - Centre de support et guides techniques',
      url: 'https://www.totalboat.com/pages/support',
    },
    {
      name: "ArtResin - FAQ et guide d'utilisation",
      url: 'https://www.artresin.com/pages/artresin-faq',
    },
    {
      name: 'Smooth-On - Calculateurs de moules et coulée',
      url: 'https://www.smooth-on.com/support/calculators/',
    },
    {
      name: 'Polytek - Support technique et fiches de sécurité',
      url: 'https://www.polytek.com/technical-support',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide de Calcul et de Mélange de Résine Époxyde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La résine époxyde n'est pas une peinture qui sèche par évaporation ; c'est une <strong>réaction chimique exothermique</strong> complexe. La magie opère lorsque les molécules d'époxyde se lient aux molécules de polyamine pour former un polymère thermodurcissable solide et cristallin.",
    },
    {
      type: 'paragraph',
      html: "La différence entre une pièce artistique durable et un désastre collant réside dans la <strong>stœchiométrie exacte</strong>. Une erreur de seulement 5% dans le ratio de mélange peut inhiber définitivement la polymérisation. Cet outil élimine les approximations mathématiques pour vous permettre de vous concentrer sur la création.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:scale-balance',
          title: 'Volume ou Poids ?',
          html: "<p>L'erreur n°1 des débutants est de supposer que 100ml pèsent 100g. <strong>La résine est plus dense que le durcisseur.</strong></p><p>Si la fiche technique de votre produit indique \"100:50 en poids\", ce n'est PAS équivalent à \"2:1 en volume\". Ce calculateur fonctionne avec le <strong>Volume</strong> (V = L × l × H), la norme pour remplir les moules.</p>",
        },
        {
          type: 'card',
          icon: 'mdi:water-percent',
          title: 'Proportions Courantes',
          html: "<ul><li><strong>1:1</strong> — Revêtements, vernis et adhésifs rapides.</li><li><strong>2:1</strong> — Standard. Tables rivières, bijoux et moules moyens.</li><li><strong>3:1</strong> — Sols industriels et stratifiés structurels haute résistance.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'Protocole de Sécurité et Meilleures Pratiques',
      level: 2,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:thermometer',
          title: 'Température Critique',
          html: '<p>Travaillez toujours entre <strong>21°C et 25°C</strong>. Le froid peut stopper la réaction, laissant la pièce trouble. La chaleur excessive accélère dangereusement la réaction exothermique ("flash cure").</p>',
        },
        {
          type: 'card',
          icon: 'mdi:cup-outline',
          title: 'Technique du Double Récipient',
          html: '<p>Ne faites pas confiance à un seul mélange. Raclez bien les côtés et le fond, versez le mélange dans un <strong>second récipient propre</strong> et remélangez. Cela garantit qu\'aucun matériau non catalysé ne reste.</p>',
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:weather-windy',
      title: 'Ventilation',
      html: "<p>Même si de nombreuses résines modernes sont à faible odeur, les vapeurs d'isocyanates et d'amines nécessitent une ventilation croisée ou un masque à charbon actif. Portez toujours des gants en nitrile.</p>",
    },
  ],
  ui: {
    shapeRect: 'Rectangulaire',
    shapeCylinder: 'Cylindrique',
    shapeSphere: 'Sphérique',
    labelLength: 'Longueur (cm)',
    labelWidth: 'Largeur (cm)',
    labelDiameter: 'Diamètre (cm)',
    labelDepth: 'Profondeur (cm)',
    labelRatio: 'Ratio de Mélange (Poids/Volume)',
    labelCustomRatio: 'Utiliser un ratio personnalisé (A:B)',
    labelResinA: 'Résine (A)',
    labelHardenerB: 'Durcisseur (B)',
    labelWasteTitle: 'Marge de Sécurité',
    labelWasteDesc: "Ajoute 5% supplémentaire pour les pertes",
    labelTotalVolume: 'Volume Total',
    labelPartA: 'Partie A (Résine)',
    labelPartB: 'Partie B (Durcisseur)',
    labelVisualization: 'Visualisation',
    shapeRectLabel: 'Bloc Rectangulaire',
    shapeCylinderLabel: 'Cylindre / Moule Rond',
    shapeSphereLabel: 'Sphère Complète',
  },
};
