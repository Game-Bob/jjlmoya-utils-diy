import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'calculateur-volume-excavation-foisonnement-terre';
const title = 'Calculateur de Volume d\'Excavation et Foisonnement de Terre';
const description = 'Calculez le volume en place de votre excavation et estimez le volume foisonné après terrassement avec une plage de foisonnement pour sable, terre végétale, argile et gravier.';

const faq = [
  {
    question: 'Quelle est la différence entre le volume en place et le volume foisonné ?',
    answer: 'Le volume en place (bank volume) est le volume du sol compact in situ avant terrassement. Le volume foisonné (loose volume) est l\'espace occupé par la terre extraite après foisonnement selon la nature du sol.',
  },
  {
    question: 'Comment calculer le volume d\'une fouille ?',
    answer: 'Multipliez la longueur par la largeur et la profondeur de la fouille. Par exemple, une excavation de 4 m sur 3 m et 0,5 m de profondeur donne un volume en place de 6 mètres cubes avant foisonnement.',
  },
  {
    question: 'Pourquoi l\'argile nécessite-t-elle une plage de foisonnement plus large ?',
    answer: 'Le comportement de l\'argile dépend de la minéralogie, de la teneur en eau et de l\'historique des contraintes. Cet outil applique une fourchette plus large car l\'augmentation de volume varie fortement.',
  },
  {
    question: 'Ce calculateur remplace-t-il une étude géotechnique ?',
    answer: 'Non. Le résultat est une estimation pour la gestion des évacuations et bennes. Pour des fondations ou murs de soutènement, faites appel à un bureau d\'études géotechniques qualifié.',
  },
];

const howTo = [
  { name: 'Saisir les dimensions de la fouille', text: 'Entrez la longueur, la largeur et la profondeur du terrassement. Basculez entre unités métriques et impériales si nécessaire.' },
  { name: 'Sélectionner la nature du sol', text: 'Choisissez le type de sol le plus proche (sable, terre végétale, argile ou gravier) pour appliquer le coefficient de foisonnement.' },
  { name: 'Planifier la gestion des évacuations', text: 'Utilisez le volume en place pour le creusement et la fourchette foisonnée pour les bennes, camions et zones de stockage temporaire.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  faq,
  bibliographyTitle: 'Sources et notes techniques',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Deux volumes pour répondre aux besoins du chantier', level: 2 },
    { type: 'paragraph', html: 'Le <strong>volume en place</strong> correspond à la géométrie du terrain non perturbé: longueur fois largeur fois profondeur. Le <strong>volume foisonné</strong> correspond à l\'espace occupé par la terre déblayée. Distinguer ces deux notions évite de sous-dimensionner la rotation des camions ou des bennes.' },
    { type: 'title', text: 'Utiliser la fourchette foisonnée pour la logistique', level: 3 },
    { type: 'paragraph', html: 'Sélectionnez la nature du sol et comparez les limites basse et haute du volume foisonné avec la capacité des camions, des bennes et l\'emprise du stockage temporaire. La plage tient compte des variations d\'humidité et du mode de terrassement.' },
    { type: 'tip', title: 'Le foisonnement théorique ne remplace pas l\'essai géotechnique', html: 'La teneur en eau et la présence de nappes peuvent modifier le foisonnement réel. Pour les fondations et terrains pollués, une étude de sol spécifique reste obligatoire.' },
    { type: 'title', text: 'Vérifier les hypothèses avant de commander le matériel', level: 3 },
    { type: 'paragraph', html: 'En cas de sol hétérogène, effectuez la simulation avec deux profils plausibles et retenez l\'estimation la plus prudente pour l\'évacuation jusqu\'à confirmation du terrain.' },
  ],
  ui: {
    unitSystemLabel: 'Système de mesure',
    unitMetric: 'Métrique',
    unitImperial: 'Impérial',
    onboarding: 'Saisissez les dimensions du terrassement, choisissez la nature du sol et utilisez les deux volumes pour organiser le chantier et l\'évacuation.',
    dimensionLabel: 'Dimensions de l\'excavation',
    lengthLabel: 'Longueur',
    widthLabel: 'Largeur',
    depthLabel: 'Profondeur',
    soilLabel: 'Nature du sol',
    soilSand: 'Sable',
    soilTopsoil: 'Terre végétale',
    soilClay: 'Argile',
    soilGravel: 'Gravier',
    soilSandBand: '10 à 15% de foisonnement',
    soilTopsoilBand: '15 à 25% de foisonnement',
    soilClayBand: '25 à 40% de foisonnement',
    soilGravelBand: '15 à 25% de foisonnement',
    bankVolumeLabel: 'Volume en place',
    bankVolumeHelp: 'Sol compact in situ',
    looseVolumeLabel: 'Volume foisonné',
    looseVolumeHelp: 'Plage estimée après terrassement',
    expansionLabel: 'Foisonnement appliqué',
    expansionHelp: 'Plage utilisée pour ce sol',
    sceneTitle: 'Du sol au dépôt',
    sceneBank: 'en place',
    sceneLoose: 'matériau foisonné',
    sceneGround: 'niveau du sol',
    sceneCut: 'fouille creusée',
    interpretationTitle: 'Comment interpréter les chiffres.',
    interpretationText: 'Le premier chiffre indique le volume de la fouille. La fourchette indique le volume supplémentaire de terre foisonnée à traiter.',
    warning: 'Valeurs indicatives pour la logistique. L\'humidité et la méthode de terrassement modifient le foisonnement réel. Ne remplace pas une étude géotechnique.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'foisonnement faible',
    soilStatusMedium: 'foisonnement modéré',
    soilStatusHigh: 'foisonnement élevé',
    soilStatusLabel: 'Plage de planification',
  },
};
