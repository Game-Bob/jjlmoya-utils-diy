import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';

const slug = 'calculateur-beton-mortier';
const title = 'Calculateur Béton et Mortier: Sacs de Ciment et Dosages par m³';
const description =
  'Calculez le nombre de sacs de ciment, pelletées de sable et litres d\'eau nécessaires par m³. Dosages pour béton H200, mortier M40 et chape M80. Guide de gâchage professionnel.';

const faqData = [
  {
    question: 'Combien de sacs de ciment de 25kg pour un mètre cube de béton?',
    answer:
      'Pour un béton structurel standard (résistance H-200), il faut environ 14 sacs de 25kg (350kg au total) par mètre cube de mélange compacté. Un mortier de maçonnerie M-40 nécessite environ 11 sacs par m³.',
  },
  {
    question: 'Quelle est la différence entre le béton et le mortier?',
    answer:
      'Le béton contient des granulats grossiers (gravier) en plus du ciment et du sable, ce qui le rend plus résistant pour les structures portantes (fondations, dalles). Le mortier utilise uniquement du sable fin et sert à lier les briques, à jointoyer et à enduire les surfaces.',
  },
  {
    question: 'Combien de pelletées de sable pour un mètre cube?',
    answer:
      'Pour un béton H-200, il faut environ 180 pelletées de sable et 240 de gravier par m³. Pour un mortier M-40, environ 400 pelletées de sable (sans gravier). Une pelletée standard représente environ 3 à 4 litres de matériau.',
  },
  {
    question: 'Peut-on gâcher le béton à la main sans bétonnière?',
    answer:
      'Oui, mais c\'est très physique et peu pratique au-delà de 0,5 m³. Gâchez sur une surface propre et étanche. Ajoutez l\'eau en faible quantité : un excès d\'eau réduit drastiquement la résistance finale du béton.',
  },
  {
    question: 'Pourquoi le béton se fissure-t-il en séchant?',
    answer:
      'Les fissures proviennent généralement d\'une perte d\'humidité trop rapide pendant la prise ou d\'un excès d\'eau dans le mélange. Maintenez le béton humide plusieurs jours après le coulage en le couvrant de toile de jute mouillée ou d\'un film plastique.',
  },
];

const howToData = [
  {
    name: 'Choisir le type de mélange',
    text: 'Sélectionnez si vous faites du béton de structure pour des fondations ou du mortier de maçonnerie pour des murs.',
  },
  {
    name: 'Indiquer le volume en m³',
    text: 'Saisissez le volume total ou utilisez la calculatrice de dimensions: longueur × largeur × épaisseur.',
  },
  {
    name: 'Consulter les quantités',
    text: 'Lisez le nombre de sacs de ciment, de pelletées de sable et de litres d\'eau à acheter.',
  },
  {
    name: 'Suivre le guide des proportions',
    text: 'Utilisez la barre de proportions visuelle pour préparer un mélange correctement dosé à chaque fois.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    {
      name: 'NF EN 206: Béton, spécification, performance, production et conformité',
      url: 'https://www.afnor.org/',
    },
    {
      name: 'DTU 26.1: Travaux d\'enduit de mortiers',
      url: 'https://www.cstb.fr/',
    },
    {
      name: 'Centre Technique du Bâtiment: Guide de formulation du béton',
      url: 'https://www.cstb.fr/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dosage Béton et Mortier: Guide Technique de Gâchage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Que vous couliez une dalle de terrasse, montiez un mur de parpaings ou réalisiez une chape de sol, le <strong>dosage du béton</strong> est le facteur déterminant pour la résistance de l\'ouvrage. Ce calculateur convertit les dosages industriels exprimés en kg par m³ en unités pratiques de chantier: <strong>sacs de 25kg, pelletées et litres</strong>.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: "L'excès d'eau fragilise le béton",
      html: "<p>Le rapport eau/ciment est la variable clé qui contrôle la résistance du béton. Chaque litre d'eau ajouté au-delà du minimum strict améliore la maniabilité mais affaiblit durablement le béton en créant des pores à l'évaporation.</p><p>La consistance idéale ressemble à une <strong>pâte ferme et cohésive</strong>, non liquide. Si votre mélange glisse facilement de la truelle, vous avez trop gâché.</p>",
    },
    {
      type: 'title',
      text: 'Proportions Standard selon l\'Usage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les trois mélanges de ce calculateur couvrent les usages courants. Le <strong>béton H-200</strong> (proportion 1:2,5:3) convient aux fondations, dalles et éléments structurels. Le <strong>mortier M-40</strong> (proportion 1:4) est idéal pour la maçonnerie de briques et parpaings. La <strong>chape M-80</strong> (proportion 1:3) donne une finition dense et résistante pour les sols et les enduits extérieurs. Toujours choisir le mélange adapté à la charge que l\'ouvrage devra supporter.',
    },
    {
      type: 'title',
      text: 'Calcul du Volume en m³',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Exemple de Calcul pour une Dalle de Terrasse',
      html: "<p>Pour une terrasse de 4m de long, 3m de large et 15cm d'épaisseur: <strong>4 × 3 × 0,15 = 1,80 m³</strong>. Saisissez ces dimensions directement dans la calculatrice et elle gère le reste automatiquement.</p><p>Commandez toujours <strong>10% de matériau en plus</strong> pour absorber les pertes liées aux coulures, à l'irrégularité du fond de fouille et à la compaction.</p>",
    },
    {
      type: 'title',
      text: 'Ordre de Gâchage et Dosage au Sac',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En construction professionnelle, on parle de <strong>"béton à 300 kg"</strong>: 300kg de ciment par mètre cube de béton fini. Pour un gâchage optimal à la bétonnière: commencer par l\'eau, ajouter ensuite les granulats (gravier et sable) pour briser les grumeaux, puis incorporer le ciment progressivement. Cet ordre garantit une répartition homogène.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'Toujours Commander 10% de Matériau en Plus',
      html: "<p>Le gaspillage sur un chantier béton n'est pas une option, c'est une constante. Les irrégularités du fond de fouille, le résidu dans la bétonnière et le facteur de compaction consomment tous du matériau au-delà du volume théorique. Un <strong>surplus de 10%</strong> évite le problème coûteux de manquer de matériau en plein coulage, sans possibilité d'arrêt.</p>",
    },
  ],
  ui: {
    mixH200Label: 'Béton Structurel',
    mixH200Hint: 'Pour fondations et dalles',
    mixM40Label: 'Mortier de Maçonnerie',
    mixM40Hint: 'Pour murs et cloisons',
    mixM80Label: 'Chape de Sol',
    mixM80Hint: 'Pour sols et enduits forts',
    modeDimsLabel: 'Par Dimensions',
    modeDirectLabel: 'm³ Directs',
    labelLength: 'Longueur',
    labelWidth: 'Largeur',
    labelThickness: 'Épaisseur',
    labelVolume: 'Volume Total (m³)',
    binderCementLabel: 'Ciment',
    binderLimeLabel: 'Chaux',
    summaryLabel: 'Total à remplir:',
    resUnitSacks: 'Sacs (25kg)',
    resUnitShovels: 'Pelletées',
    resUnitLitres: 'Litres',
    resLabelCement: 'Ciment Portland',
    resLabelLime: 'Chaux Hydraulique',
    resLabelSand: 'Sable / Granulats',
    resLabelWater: 'Eau Potable',
    proportionsTitle: 'Proportions du Mélange Sélectionné',
    propLabelSand: 'Sable',
    propLabelGravel: 'Gravier',
    adviceH200: 'Idéal pour poteaux, dalles et structures portantes.',
    adviceM40: 'Parfait pour monter des murs de briques ou de parpaings.',
    adviceM80: 'Utilisez ceci pour des chapes de sol très résistantes.',
    adviceLimeH200: 'Le béton de chaux est plus flexible mais prend plus de temps à durcir.',
    priceTotalLabel: 'Budget Estimé',
    priceSackLabel: 'Sac',
    priceSandLabel: 'Sable (m³)',
    priceDisclaimer: 'Prix indicatifs du marché. Ajustez selon votre fournisseur local.',
  },
};
