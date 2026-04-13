import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'optimiseur-decoupe';
const title = 'Optimiseur de Découpe 1D et 2D: Réduire les Chutes de Matériaux';
const description =
  "Optimiseur de découpe gratuit pour bois, métal et tubes. Calculez le plan de coupe le plus efficace avec l'algorithme Best Fit Decreasing. Supporte la découpe linéaire 1D et panneaux 2D avec compensation du trait de scie.";

const faqData = [
  {
    question: "Qu'est-ce qu'un optimiseur de découpe 1D?",
    answer:
      "Un optimiseur de découpe 1D utilise l'algorithme de Bin Packing pour déterminer comment couper des pièces plus petites dans des longueurs standard (bois, profilés, tubes) avec un minimum de chutes. Il résout le problème de découpe de stock de manière informatique en quelques millisecondes.",
  },
  {
    question: "Pourquoi le trait de scie (Kerf) est-il important?",
    answer:
      "Chaque passage de scie consomme du matériau égal à l'épaisseur de la lame. Une scie circulaire sur table standard enlève 3mm par coupe. Sur un projet avec 10 coupes, cela représente 30mm de matériau perdu. Ignorer le trait de scie signifie que vos dernières pièces seront plus courtes que prévu.",
  },
  {
    question: "Quelle est la différence entre la découpe 1D et 2D?",
    answer:
      "La découpe 1D traite les matériaux linéaires (barres, profilés, tubes) en optimisant uniquement la longueur. La découpe 2D traite les panneaux (contreplaqué, MDF, verre) en ajustant des pièces rectangulaires sur un panneau plus grand, en optimisant les deux dimensions simultanément.",
  },
  {
    question: "Comment sauvegarder mon plan de découpe?",
    answer:
      "Imprimez la page ou faites une capture d'écran du schéma visuel pour l'utiliser comme guide physique dans votre atelier. Annotez chaque barre avec son numéro pour suivre la séquence sans erreur.",
  },
];

const howToData = [
  {
    name: 'Définir le matériau de base',
    text: 'Saisissez la longueur totale (et la largeur pour les panneaux) du matériau de stock disponible.',
  },
  {
    name: 'Configurer le trait de scie',
    text: "Ajustez l'épaisseur de lame en millimètres pour que le calcul tienne compte du matériau perdu par coupe.",
  },
  {
    name: 'Lister les pièces requises',
    text: 'Saisissez la longueur et la quantité de chaque pièce nécessaire pour votre projet.',
  },
  {
    name: "Lancer l'optimisation",
    text: "Obtenez le plan de coupe le plus efficace et le pourcentage exact de chutes générées.",
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    {
      name: 'Problème de découpe de stock: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Problème de bin packing: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Guide Complet de l'Optimisation de Découpe",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'optimisation de découpe, connue techniquement sous le nom de <strong>Problème de Découpe de Stock</strong>, est l'un des défis logistiques les plus utiles en mathématiques combinatoires. Pour un projet avec 20 pièces et 5 barres de stock, il existe des millions de combinaisons possibles. Un algorithme informatique trouve la solution quasi optimale en quelques millisecondes, réduisant les chutes habituelles de 15% à moins de 5%.",
    },
    {
      type: 'title',
      text: 'Découpe Linéaire 1D et Découpe Panneau 2D',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Optimisation Linéaire pour Barres et Profilés',
      html: "<p>La <strong>découpe linéaire (1D)</strong> traite les matériaux optimisés uniquement par leur longueur: bois dimensionnel, profilés aluminium, tubes PVC ou cuivre, et tiges filetées. L'algorithme dispose toutes les pièces requises sur le nombre minimum de longueurs de stock, en intégrant le trait de scie à chaque coupe.</p>",
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Optimisation Panneau pour Matériaux en Feuille',
      html: "<p>La <strong>découpe panneau (2D)</strong> traite les matériaux en feuille tels que contreplaqué, MDF, verre, méthacrylate et tôle. Elle utilise un algorithme à coupe guillotine, où chaque coupe va d'un bord à l'autre, conformément au fonctionnement réel des scies circulaires et des scies de format.</p>",
    },
    {
      type: 'title',
      text: 'Le Trait de Scie: La Perte de Matériau Cachée',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le <strong>trait de scie (Kerf)</strong> est la largeur de matériau enlevée par la lame à chaque coupe. Une scie circulaire sur table standard enlève 3,0 à 3,2mm par passage. Une scie circulaire portative enlève 1,5 à 2,5mm. Un laser enlève seulement 0,1 à 0,3mm. Sur un projet avec 10 coupes dans une planche de 2400mm, un kerf de 3mm représente 30mm de matériau utilisable perdu — de quoi rater une petite pièce entière.",
    },
    {
      type: 'title',
      text: "L'Algorithme Best Fit Decreasing",
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: "Fonctionnement Interne de l'Optimiseur",
      html: "<p>Le cœur de l'algorithme utilise la stratégie <strong>Best Fit Decreasing (BFD)</strong>: les pièces sont triées de la plus grande à la plus petite, car les grandes pièces sont plus difficiles à placer. Pour chaque pièce, l'algorithme parcourt tous les chutes existantes et la place dans celle qui laisse le moins d'espace résiduel. Seulement si aucune chute existante ne peut accueillir la pièce, une nouvelle barre vierge est ouverte. Cette approche atteint généralement 95% d'efficacité matérielle ou plus.</p>",
    },
  ],
  ui: {
    modeLinearLabel: 'Linéaire (Barres)',
    modePanelLabel: 'Panneau (Tableros)',
    configTitle: 'Configuration Matériau',
    labelStockLength: 'Longueur du matériau (mm)',
    labelStockWidth: 'Largeur du matériau (mm)',
    labelKerf: 'Trait de scie / Kerf (mm)',
    cutsTitle: 'Liste de Découpes',
    placeholderLength: 'Longueur',
    placeholderWidth: 'Largeur',
    placeholderQty: 'Qté',
    btnRemoveTitle: 'Supprimer',
    statStockUsed: 'Matériaux utilisés',
    statTotalCuts: 'Coupes totales',
    statWaste: 'Chutes totales',
    statEfficiency: 'Efficacité',
    vizTitle: 'Visualisation de Découpe',
    emptyState: 'Ajoutez des coupes et lancez le calcul pour voir le plan de découpe.',
    noValidCuts: 'Impossible de générer des coupes valides. Vérifiez les dimensions.',
    noValidPanels: 'Impossible de générer des panneaux valides. Vérifiez que les pièces rentrent dans le panneau.',
    stockLabel: 'Matériau',
    panelLabel: 'Panneau',
    wasteLabel: 'Chute:',
    effLabel: 'Eff:',
  },
};
