import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-tours-taraudage';
const title = 'Calculateur RPM Perçage et Fraisage';
const description = 'Calculez le nombre idéal de tours par minute pour votre perceuse ou fraiseuse selon le matériau et le diamètre du foret. Évitez de surchauffer vos outils.';

const faqData = [
  {
    question: 'Pourquoi mes forets surchauffent-ils?',
    answer: 'Principalement à cause d\'un excès de tours/minute. Quand le foret tourne plus vite que le matériau ne peut dissiper la chaleur, la friction élève la température au-delà du point de trempe de l\'acier, ce qui ramollit le tranchant.',
  },
  {
    question: 'Qu\'est-ce que la vitesse de coupe (Vc)?',
    answer: 'C\'est la vitesse linéaire en mètres par minute à laquelle le tranchant de l\'outil parcourt la surface du matériau. Chaque matériau a une Vc recommandée qui ne dépend pas du diamètre du foret.',
  },
  {
    question: 'Quand utiliser des outils en carbure (Widia)?',
    answer: 'Utilisez le carbure quand vous avez besoin de vitesses beaucoup plus élevées, en production industrielle ou pour usiner des matériaux extrêmement durs. Pour le bricolage, l\'acier rapide est suffisant et plus résistant à la rupture en flexion.',
  },
  {
    question: 'La lubrification est-elle toujours nécessaire?',
    answer: 'Pour les métaux, c\'est presque toujours recommandé. L\'aluminium empêche le matériau de coller au foret. L\'acier réduit la chaleur. Pour le bois et les plastiques, le perçage à sec avec extraction fréquente est préférable.',
  },
  {
    question: 'Comment calculer l\'avance sans machine CNC?',
    answer: 'Sur une perceuse manuelle, l\'avance se contrôle par la pression manuelle. Vous devez voir une virure continue et nette. Si vous voyez de la poudre, vous appuyez trop faiblement ou le RPM est trop élevé.',
  },
];

const howToData = [
  { name: 'Sélectionnez le matériau', text: 'Choisissez le matériau à percer ou fraiser (acier, aluminium, bois, etc.). Chacun a des propriétés thermiques différentes.' },
  { name: 'Entrez le diamètre', text: 'Entrez le diamètre exact de votre foret ou fraise en millimètres. Rappelez-vous que les plus grands diamètres nécessitent moins de tours.' },
  { name: 'Sélectionnez le type d\'outil', text: 'Déterminez si votre foret est en acier rapide (HSS) ou en carbure (Widia). Les outils en carbure supportent des vitesses beaucoup plus élevées.' },
  { name: 'Réglez le RPM sur votre machine', text: 'Configurez votre perceuse avec la valeur calculée. Si votre machine a des positions fixes, utilisez notre outil de vitesse la plus proche pour sélectionner la position de poulie la plus sûre.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'L\'importance du RPM correct en usinage', level: 2 },
    { type: 'paragraph', html: 'Calculer le bon nombre de tours par minute est la différence entre un résultat parfait et un échec coûteux. Il ne s\'agit pas de faire tourner un foret aussi vite que possible, mais de respecter la physique du frottement et de la résistance des matériaux. Notre calculateur optimise la performance des outils et la qualité de finition.' },
    { type: 'title', text: 'Comprendre la Vitesse de Coupe', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formule de Calcul du RPM', html: '<p>La vitesse de coupe est une valeur en mètres par minute indiquant la vitesse idéale à laquelle le tranchant doit parcourir le matériau. La formule que nous utilisons est: <code>RPM = (Vc × 1000) / (π × D)</code> où D est le diamètre en millimètres. Ce calcul est indépendant du diamètre de la pièce.' },
    { type: 'title', text: 'Acier Rapide vs Carbure', level: 3 },
    { type: 'paragraph', html: 'L\'<strong>acier rapide (HSS)</strong> est économique et résistant aux chocs, mais a une résistance thermique limitée. Le <strong>carbure</strong> permet des vitesses de coupe 3 à 5 fois supérieures, mais est plus fragile. La calculatrice ajuste automatiquement les paramètres selon le type d\'outil.' },
    { type: 'title', text: '3 Erreurs Courantes en Perçage', level: 3 },
    { type: 'paragraph', html: '<strong>RPM trop élevé:</strong> Cause une surchauffe et une perte de trempe. <strong>RPM trop faible:</strong> Cause des vibrations et une rupture par fatigue. <strong>Sans lubrifiant:</strong> Réduit drastiquement la durée de vie de l\'outil.' },
  ],
  ui: {
    labelMaterial: 'Matériau de la pièce',
    matSteel: 'Acier Doux',
    matInox: 'Acier Inoxydable',
    matAlu: 'Aluminium',
    matBrass: 'Laiton',
    matCastIron: 'Fonte',
    matWood: 'Bois',
    matPlastic: 'Plastiques',
    coolSteel: 'Huile de Coupe',
    coolInox: 'Huile de Coupe EP',
    coolAlu: 'Solvant / Paraffine',
    coolBrass: 'À sec / Air',
    coolCastIron: 'À sec',
    coolWood: 'Aspiration Seule',
    coolPlastic: 'Jet d\'Air',
    labelTool: 'Type d\'Outil',
    typeHss: 'Acier Rapide (HSS)',
    typeWidia: 'Carbure (Widia)',
    labelDiameter: 'Diamètre',
    unitMm: 'mm',
    unitInch: 'pouce',
    modeColumnDrill: 'Mode Perceuse à Colonne',
    labelAdvanced: 'Paramètres d\'Avance',
    labelLips: 'Nombre de Dents (z)',
    labelFz: 'Avance par Dent (Fz)',
    labelMachine: 'Vitesses de votre Machine',
    presetStandard: 'Standard',
    presetCnc: 'CNC',
    addRpmManual: 'Ajouter RPM manuel...',
    addButton: '+',
    resultRpm: 'Vitesse Optimale',
    resultCooling: 'Type de Lubrifiant',
    resultFeed: 'Avance Résultante',
    resultClosest: 'Réglage Recommandé',
    rpmUnit: 'Tours / Minute',
    recommendedLabel: 'Réglage Recommandé',
    recommendedHint: 'Réglez le sélecteur de votre machine sur cette position',
    statusLimitActive: 'Limite de machine active',
    statusOutOfRange: 'Hors de la plage standard commerciale',
  },
};
