import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-melange-2-temps';
const title = 'Calculateur de Mélange 2 Temps : Ratios Huile et Essence Précis';
const description = 'Calculez instantanément le mélange précis pour votre moteur 2 temps. Outil essentiel pour tronçonneuses, cyclomoteurs, motos et petits moteurs. Supporte les ratios 1:25, 1:33, 1:40 et 1:50.';

const faqData = [
  {
    question: 'Qu\'est-ce qu\'un moteur 2 temps ?',
    answer: 'Un moteur 2 temps combine l\'admission et la compression en deux courses de piston, ce qui le rend plus simple et plus léger que les moteurs 4 temps. Ils équipent les tronçonneuses, les souffleurs, les cyclomoteurs et certaines motos. Ils nécessitent de l\'huile mélangée au carburant pour la lubrification.',
  },
  {
    question: 'Quels sont les ratios de mélange courants ?',
    answer: 'Les ratios courants sont 1:25 (riche, protecteur), 1:33 (matériel ancien), 1:40 (standard) et 1:50 (pauvre, moteurs modernes). Vérifiez le manuel de votre moteur : un mauvais ratio peut endommager votre moteur.',
  },
  {
    question: 'Que se passe-t-il si le mélange est incorrect ?',
    answer: 'Trop d\'huile (mélange riche) provoque une fumée excessive, encrasse les bougies et réduit les performances. Trop peu d\'huile (mélange pauvre) entraîne un serrage, des dommages au piston et une casse moteur.',
  },
  {
    question: 'Quel type d\'huile utiliser ?',
    answer: 'Utilisez de l\'huile moteur 2 temps adaptée à votre équipement. Les huiles synthétiques premium offrent une meilleure protection et une combustion plus propre que les huiles conventionnelles. N\'utilisez jamais d\'huile moteur 4 temps, cela endommagerait le moteur.',
  },
  {
    question: 'Comment mélanger l\'essence et l\'huile ?',
    answer: 'Versez une partie de l\'essence dans un récipient propre, ajoutez la quantité calculée d\'huile, puis ajoutez le reste de l\'essence. Mélangez soigneusement en agitant pendant 1 à 2 minutes. Étiquetez le récipient avec la date du mélange.',
  },
];

const howToData = [
  { name: 'Connaître votre ratio', text: 'Consultez le manuel de votre moteur. Ratios courants : tronçonneuses (1:40 ou 1:50), cyclomoteurs (1:33), motos anciennes (1:25). Un mauvais ratio endommage votre moteur.' },
  { name: 'Mesurer le volume d\'essence', text: 'Décidez de la quantité d\'essence nécessaire. Cet outil gère les litres, les gallons ou toute unité de volume. Une mesure précise de l\'essence garantit la bonne quantité d\'huile.' },
  { name: 'Calculer l\'huile nécessaire', text: 'Entrez le volume d\'essence et le ratio. Ce calculateur affiche exactement la quantité d\'huile (en ml ou litres) dont vous avez besoin pour un mélange parfait.' },
  { name: 'Mélanger soigneusement', text: 'Versez l\'essence dans un récipient propre, ajoutez l\'huile calculée, puis ajoutez l\'essence restante. Agitez pendant 1 à 2 minutes pour bien mélanger.' },
  { name: 'Étiqueter et utiliser', text: 'Marquez le récipient avec la date et le ratio. Utilisez le mélange dans les 30 jours pour de meilleurs résultats (surtout avec les huiles synthétiques).' },
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculateur de Mélange 2 Temps : Ratios Huile/Essence Précis pour Tronçonneuses et Cyclomoteurs', level: 2 },
    { type: 'paragraph', html: 'Les moteurs deux temps nécessitent un mélange précis d\'essence et d\'huile pour survivre. Un mauvais mélange peut détruire votre moteur en quelques minutes. Ce calculateur détermine instantanément la quantité exacte d\'huile nécessaire pour votre volume de carburant et votre type de moteur — éliminant toute approximation dans l\'atelier.' },

    { type: 'title', text: 'Pourquoi les moteurs 2 temps nécessitent-ils de l\'huile dans l\'essence ?', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'La différence critique', html: 'Contrairement aux moteurs 4 temps dotés de réservoirs d\'huile séparés, les moteurs 2 temps mélangent l\'huile directement au carburant. À chaque temps moteur, le moteur brûle le mélange essence-huile pour l\'énergie et la lubrification. Il n\'y a pas de carter, pas de pompe à huile séparée — seule le mélange maintient les pistons en vie.' },

    { type: 'title', text: 'Référence rapide des ratios 2 temps', level: 3 },
    { type: 'table', headers: ['Ratio', '% Huile', 'Usage', 'Type de moteur', 'Caractéristiques'], rows: [
      ['1:25', '3,85%', 'Protection Maximale', 'Matériel avant 1980, forte charge, motos anciennes', 'Mélange riche : plus de fumée, plus de calamine, protection maximale contre le serrage'],
      ['1:33', '2,94%', 'Matériel Classique', 'Petits moteurs des années 80-90, anciennes tronçonneuses', 'Richesse modérée : équilibre entre protection et efficacité'],
      ['1:40', '2,44%', 'Standard de l\'industrie', 'La plupart des tronçonneuses et cyclomoteurs modernes', 'Recommandation standard : conçu pour les huiles synthétiques actuelles'],
      ['1:50', '1,96%', 'Efficacité Moderne', 'Dernières tronçonneuses, cyclomoteurs haute performance', 'Mélange pauvre : moins de fumée, combustion propre, conçu pour les huiles synthétiques premium']
    ] },

    { type: 'title', text: 'Conséquences de ratios incorrects', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Trop d\'huile (Mélange riche)', con: 'Fumée blanche excessive, bougies encrassées, calamine, mauvaises accélérations, panne moteur' },
      { pro: 'Trop peu d\'huile (Mélange pauvre)', con: 'Serrage du piston en quelques secondes, parois du cylindre rayées, dommages moteur catastrophiques' },
      { pro: 'Ratio correct', con: 'Fonctionnement fluide, lubrification adéquate, combustion optimale, durée de vie moteur prolongée, démarrage fiable' }
    ] },

    { type: 'title', text: 'Ratios courants par équipement', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Tronçonneuses', html: '<strong>Stihl, Husqvarna, Echo :</strong> Les modèles modernes nécessitent généralement 1:40 ou 1:50. Vérifiez toujours votre manuel — utiliser du 1:25 sur une tronçonneuse moderne risque d\'encrasser les bougies. Les anciennes machines Stihl (années 90 et antérieures) peuvent spécifier 1:25 ou 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Cyclomoteurs & Motos', html: '<strong>Vespa, Honda, Yamaha :</strong> La plupart nécessitent 1:33 pour les anciens modèles, 1:40–1:50 pour les versions modernes. Les cyclomoteurs et motos de route haute performance spécifient souvent des ratios de 1:50.' },
    { type: 'card', icon: 'mdi:tools', title: 'Souffleurs & Coupe bordures', html: '<strong>Stihl, Husqvarna, DeWalt :</strong> Généralement 1:50 (moderne) ou 1:40 (plus ancien). Ces outils sont conçus pour une utilisation saisonnière rapide, donc les ratios pauvres réduisent la fumée sans sacrifier la fiabilité.' },

    { type: 'title', text: 'Le type d\'huile compte autant que le ratio', level: 3 },
    { type: 'comparative', items: [
      { title: 'Huile 2 Temps Conventionnelle', description: 'Option économique pour usage occasionnel. Plus de cendres, plus de fumée, protection adéquate pour les ratios standards.', icon: 'mdi:beaker', points: ['Coût réduit', 'Fumée plus visible', 'Plus de calamine', 'Fonctionne pour les ratios 1:40'] },
      { title: 'Huile 2 Temps Synthétique', description: 'Le choix premium. Combustion plus propre, meilleure protection, permet des ratios plus pauvres. Stable en température.', icon: 'mdi:flame', points: ['Moins de fumée', 'Meilleure protection moteur', 'Permet le 1:50 en toute sécurité', 'Meilleure stabilité au stockage'], highlight: true },
      { title: 'Mélange Synthétique (Semi synthétique)', description: 'Compromis entre conventionnelle et 100% synthétique. Bonne protection à coût modéré. Recommandation courante des constructeurs.', icon: 'mdi:beaker-outline', points: ['Performances équilibrées', 'Coût modéré', 'Idéal pour les ratios 1:40', 'Fumée réduite vs conventionnelle'] }
    ], columns: 3 },

    { type: 'title', text: 'Processus de mélange étape par étape', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'La bonne façon de mélanger', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Utilisez un récipient dédié</strong> réservé uniquement au mélange. Propre, sec, marqué.</li><li><strong>Versez la moitié de l\'essence</strong> dans le récipient d\'abord.</li><li><strong>Ajoutez la quantité d\'huile calculée</strong> (utilisez ce calculateur pour la précision).</li><li><strong>Ajoutez l\'essence restante</strong> pour atteindre le volume cible.</li><li><strong>Agitez vigoureusement pendant 1 à 2 minutes</strong> jusqu\'à ce que la couleur soit uniforme. Un mélange homogène = lubrification égale.</li><li><strong>Étiquetez le récipient</strong> avec la date, le ratio et le type de carburant.</li><li><strong>Utilisez dans les 30 jours</strong> (les huiles synthétiques prolongent cela à 60 jours).</li></ol>' },

    { type: 'title', text: 'Quand douter du manuel de votre équipement', level: 3 },
    { type: 'tip', html: '<strong>Vérifiez toujours le ratio dans le manuel de votre équipement en premier.</strong> Si vous ne le trouvez pas, visitez le site web du fabricant ou contactez son support. Ne supposez jamais — un mauvais ratio annule les garanties et risque un serrage moteur. Si votre équipement est ancien et le manuel perdu, cherchez en ligne le numéro de modèle.' },

    { type: 'title', text: 'Glossaire : Termes du 2 Temps Expliqués', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mélange Pauvre (Lean)', definition: 'Carburant avec trop peu d\'huile (ratio élevé comme 1:50). Risque de serrage du piston par manque de lubrification.' },
      { term: 'Mélange Riche (Rich)', definition: 'Carburant avec trop d\'huile (ratio faible comme 1:25). Provoque fumée excessive, encrassement des bougies et calamine.' },
      { term: 'Mélange Homogène', definition: 'Mélange uniforme d\'essence et d\'huile dans tout le volume, obtenu par agitation. Essentiel pour une lubrification et combustion régulières.' },
      { term: 'Serrage (Seizure)', definition: 'Lorsqu\'un piston se bloque dans le cylindre par manque de lubrification et friction. Entraîne une casse moteur complète.' },
      { term: 'Huile Synthétique', definition: 'Huile formulée en laboratoire offrant une protection supérieure, une combustion plus propre et une meilleure stabilité thermique.' },
      { term: 'Moteur 2 Temps', definition: 'Moteur complétant son cycle de combustion en deux mouvements de piston. Plus léger et simple que les moteurs 4 temps.' },
      { term: 'Moteur 4 Temps', definition: 'Moteur avec carter d\'huile séparé et cycle en quatre étapes. L\'huile circule via des conduits, pas mélangée à l\'essence.' }
    ] },

    { type: 'title', text: 'Comment ce calculateur vous fait gagner du temps et de l\'argent', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Calculs précis, aucune erreur de mesure', icon: 'mdi:check-circle' },
      { value: 'Instantané', label: 'Montants exacts en secondes, pas d\'approximation', icon: 'mdi:flash' },
      { value: '4 Ratios', label: '1:25, 1:33, 1:40, 1:50 couverts', icon: 'mdi:counter', trend: { value: 'Plus ratios personnalisés', positive: true } },
      { value: 'Partageable', label: 'Copiez et partagez votre configuration via URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Erreurs courantes qui tuent les moteurs', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Utiliser de l\'huile 4 temps dans un moteur 2 temps', icon: 'mdi:alert', badge: 'Mort du Moteur', html: 'Les huiles 4 temps sont conçues pour circuler dans un bloc moteur. Dans un réservoir 2 temps, elles ne brûlent pas proprement et détruiront votre moteur en quelques heures.' },
    { type: 'diagnostic', variant: 'warning', title: 'Oublier de mélanger soigneusement', icon: 'mdi:alert', badge: 'Risque de Serrage', html: 'Si l\'huile et l\'essence se séparent à cause d\'un mélange incomplet, des parties de votre moteur brûleront sans lubrification. Agitez pendant au moins 1 à 2 minutes.' },
    { type: 'diagnostic', variant: 'warning', title: 'Utiliser du vieux carburant (plus de 60 jours)', icon: 'mdi:alert', badge: 'Dépôts de Gomme', html: 'L\'essence contenant de l\'éthanol se dégrade avec le temps. Le vieux mélange laisse des dépôts gommeux dans les carburateurs. Ne mélangez que ce que vous utiliserez sous 30 jours.' },

    { type: 'title', text: 'Résumé de la FAQ', level: 3 },
    { type: 'summary', title: 'Avant de mélanger', items: [
      'Vérifiez le ratio exact dans le manuel — c\'est la spécification testée par le fabricant.',
      'Vérifiez que vous utilisez de l\'huile 2 temps, pas de la 4 temps ou autre.',
      'Utilisez un récipient propre et dédié uniquement au mélange.',
      'Utilisez de l\'essence fraîche (pas stockée depuis des mois) et une huile compatible.',
      'Mélangez soigneusement et étiquetez avec date, ratio et type d\'essence.',
      'Utilisez le mélange sous 30 jours pour de meilleurs résultats.'
    ] },
  ],
  ui: {
    titleMain: 'Calculateur de Mélange 2 Temps',
    labelFuelVolume: 'Volume d\'Essence',
    labelRatio: 'Ratio de Mélange',
    labelOilRequired: 'Huile Nécessaire',
    labelTotalMixture: 'Mélange Total',
    labelRichness: 'Richesse du Mélange',
    labelPresets: 'Ratios Courants',
    labelCustomRatio: 'Ratio Personnalisé (1:X)',
    btnClear: 'Effacer',
    btnCopyResults: 'Copier les Résultats',
    btnSwitchMode: 'Changer de Mode',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Pauvre (moins d\'huile, risque de serrage)',
    richBalanced: 'Équilibré (mélange standard)',
    richRich: 'Riche (plus d\'huile, plus de fumée, protection moteur)',
    msgReady: 'Prêt',
    msgMixtureReady: 'Mélange calculé',
    tooltipFuelVolume: 'Entrez la quantité d\'essence en litres',
    tooltipRatio: 'Entrez le ratio : 25, 33, 40 ou 50 (pour 1:25, 1:33, etc.)',
    recipientLabel: 'Récipient de Mélange',
    oilPercentage: '% Huile',
    labelVolume: 'Volume',
    labelRatioShort: 'Ratio',
    labelOilTip: 'Mélange à 2% d\'huile = ratio 1:50',
    labelMixingTips: 'Conseils de Mélange',
    labelMixingTipsDesc: 'Mélangez dans un récipient propre : essence d\'abord, huile mesurée ensuite, puis essence restante. Agitez bien (1-2 min) pour un mélange homogène. Étiquetez avec date et ratio.',
    recipePrefix: 'Pour',
    recipeAt: 'd\'essence à',
    recipeAdd: 'ajoutez exactement',
    recipeOfOil: 'd\'huile 2 temps.',
    copyTextPrefix: 'Mélange 2T',
    copyTextFuel: 'essence',
    copyTextOil: 'huile',
  },
};
