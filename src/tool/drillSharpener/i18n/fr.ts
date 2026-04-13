import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';

const slug = 'affuteur-maitrise-forets';
const title = 'Affûteur Maître de Forets: Jauge de Précision';
const description = 'Guide interactif pour affûter les forets HSS. Jauge numérique sur écran pour vérifier les angles de 118° et 135°. Calculez RPM et diagnostiquez les erreurs de coupe.';

const faqData = [
  {
    question: 'Puis-je placer le foret directement sur l\'écran?',
    answer: 'Oui, l\'outil est conçu pour que vous reposiez l\'axe du foret sur la ligne centrale de la jauge numérique et vérifiez la symétrie des lèvres directement.',
  },
  {
    question: 'Comment sais-je si l\'angle de dépouille est correct?',
    answer: 'Lorsque vous faites tourner le foret, l\'arrière de l\'arête tranchante doit être visiblement plus bas. Si le métal brille également sur toute la pointe, vous avez besoin de plus de dépouille.',
  },
  {
    question: 'Quel RPM dois-je utiliser après affûtage?',
    answer: 'Cela dépend du diamètre. Notre calculatrice intégrée vous donnera la valeur exacte en fonction du matériau que vous avez sélectionné.',
  },
  {
    question: 'Quelle est la différence entre HSS et carbure?',
    answer: 'L\'HSS (Acier rapide) est plus économique et résistant aux chocs. Le carbure supporte des vitesses plus élevées mais est plus fragile. Pour l\'affûtage manuel, l\'HSS est standard.',
  },
  {
    question: 'Ai-je besoin d\'un équipement spécial pour affûter?',
    answer: 'Une meule rotative avec granulométrie moyenne (120-150) est suffisante. L\'important est de garder la pierre équilibrée et plate pour des résultats constants.',
  },
];

const howToData = [
  { name: 'Sélectionner le matériau', text: 'Choisissez le métal ou le matériau que vous allez percer pour définir l\'angle cible et la vitesse de coupe.' },
  { name: 'Vérifier la symétrie', text: 'Placez le foret sur l\'écran et assurez-vous que les deux arêtes tranchantes s\'alignent avec les lignes bleues de guide.' },
  { name: 'Vérifier la dépouille', text: 'Vérifiez visuellement que l\'arrière de l\'arête tranchante ne contacte pas la pièce (angle de dépouille).' },
  { name: 'Calculer RPM', text: 'Entrez le diamètre et réglez votre perceuse à la vitesse recommandée pour le matériau sélectionné.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    { name: 'Manuel d\'atelier - Affûtage des forets (PDF)', url: 'https://www.scribd.com/document/486692441/Afilado-Manual-de-Brocas' },
    { name: 'Technologie des métaux - Angles de forets', url: 'https://fr.wikipedia.org/wiki/Foret_%28outil%29' },
    { name: 'Normes d\'affûtage en atelier mécanique', url: 'https://www.iso.org/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Affûteur Maître de Forets: Technique Professionnelle', level: 2 },
    { type: 'paragraph', html: 'L\'affûtage des forets est l\'une des compétences les plus précieuses dans n\'importe quel atelier. Un foret correctement affûté améliore la qualité du trou, prolonge la durée de vie de vos outils et assure la sécurité de l\'opérateur.' },
    { type: 'title', text: 'Les Fondamentaux: Angle de Pointe', level: 3 },
    { type: 'paragraph', html: 'L\'angle de pointe définit comment le foret attaque le matériau. Les angles standards sont 118° pour l\'acier doux, 135° pour l\'inoxydable et 140° pour les aciers durs. Chaque matériau nécessite un angle différent pour maximiser la pénétration sans compromettre la résistance de l\'arête.' },
    { type: 'title', text: 'Le Facteur Oublié: Angle de Dépouille', level: 3 },
    { type: 'paragraph', html: 'L\'erreur la plus courante est d\'ignorer l\'angle de dépouille. Si la surface derrière l\'arête tranchante est plate, le foret glissera simplement, générant une chaleur extrême. La solution est de réduire légèrement l\'arrière de l\'arête tranchante.' },
  ],
  ui: {
    labelMaterial: 'Matériau du travail',
    matSteel: 'Acier',
    matInox: 'Inox',
    matHard: 'Durs',
    matBrass: 'Laiton',
    matPlastic: 'Plastique',
    matWood: 'Bois',
    labelDiameter: 'Diamètre du foret (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Vitesse',
    unitRpm: 'RPM',
    labelCooling: 'Coupe',
    btnDiagnosis: 'Ne coupe pas bien? Diagnostique',
    diagTitle: 'Diagnostic des Défaillances',
    diagClose: 'Fermer',
    diagIssue1: '1. Fume mais ne traverse pas',
    diagIssue1Desc: 'Manque d\'angle de dépouille. Le métal derrière l\'arête frotte la pièce. Réduisez l\'arrière de l\'arête pour que la lèvre soit la plus haute.',
    diagIssue2: '2. Trou excentrique ou surdimensionné',
    diagIssue2Desc: 'La pointe n\'est pas centrée. Les arêtes tranchantes ont des longueurs différentes. Assurez-vous que la pointe touche le centre exact de la jauge.',
    diagIssue3: '3. Arêtes brûlées (Bleues)',
    diagIssue3Desc: 'Vitesse excessive. Vérifiez le calcul RPM pour ce diamètre et ce matériau.',
    gaugeInstruction: 'REPOSEZ L\'AXE SUR LA LIGNE VERTICALE',
  },
};
