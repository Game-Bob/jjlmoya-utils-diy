import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'calculateur-dilatation-thermique';
const title = 'Calculateur de Dilatation Thermique pour Structures et Poutres';
const description =
  'Calculez de combien se dilate une poutre ou une structure sous l\'effet de la température. Outil technique pour ingénieurs et bricoleurs. Coefficients par matériau inclus.';

const faqData = [
  {
    question: 'Qu\'est-ce que le coefficient de dilatation linéaire?',
    answer:
      'C\'est une propriété physique des matériaux qui indique de combien ils s\'allongent par degré Celsius d\'augmentation de température. Il se mesure en 1/°C ou °C⁻¹.',
  },
  {
    question: 'Pourquoi calculer la dilatation dans les poutres est-il important?',
    answer:
      'Si une poutre n\'a pas d\'espace pour se dilater (joints de dilatation), elle génère des contraintes internes massives pouvant déformer la structure, fissurer le béton ou provoquer un effondrement.',
  },
  {
    question: 'Le bois se dilate-t-il de la même façon dans toutes les directions?',
    answer:
      'Non. Le bois est un matériau anisotrope. Il se dilate très peu dans le sens du fil mais significativement dans le sens transversal (largeur et épaisseur).',
  },
  {
    question: 'Quelle température utiliser comme valeur Initiale?',
    answer:
      'Utilisez la température au moment de la pose ou de la construction. La valeur Finale doit être la température maximale prévue pendant la durée de vie de l\'ouvrage.',
  },
];

const howToData = [
  {
    name: 'Mesurez la longueur originale',
    text: 'Entrez la longueur de la poutre ou du matériau en mètres.',
  },
  {
    name: 'Sélectionnez le matériau',
    text: 'Choisissez parmi les métaux, les matériaux de construction ou les bois pour appliquer son coefficient spécifique.',
  },
  {
    name: 'Définissez la plage thermique',
    text: 'Indiquez la température initiale et la température maximale attendue pour calculer le différentiel thermique.',
  },
  {
    name: 'Analysez la croissance',
    text: 'Observez l\'allongement total en millimètres et la longueur finale résultante pour prévoir les joints appropriés.',
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    { name: 'Coefficient of Thermal Expansion — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: 'Thermal expansion and temperature — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: 'Linear Thermal Expansion — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Qu\'est-ce que la Dilatation Thermique et comment affecte-t-elle les Structures', level: 2 },
    {
      type: 'paragraph',
      html: 'La <strong>dilatation thermique</strong> est le processus physique par lequel un matériau augmente sa longueur en réponse à une élévation de température. À l\'échelle microscopique, les particules vibrent avec plus d\'énergie et nécessitent un espacement moyen plus grand entre elles. En construction, ce phénomène n\'est pas une curiosité : c\'est une force qui peut fissurer le béton, déformer des poutres en acier et faire se tordre les rails d\'un chemin de fer.',
    },
    { type: 'title', text: 'La Formule de la Dilatation Linéaire', level: 3 },
    {
      type: 'card',
      icon: 'mdi:math-log',
      title: 'Formule de Dilatation Linéaire',
      html: '<p>L\'expansion d\'un élément structurel se calcule avec : <code>ΔL = L₀ · α · ΔT</code>. Où <strong>ΔL</strong> est l\'allongement total, <strong>L₀</strong> est la longueur originale, <strong>α</strong> est le coefficient de dilatation du matériau (en °C⁻¹) et <strong>ΔT</strong> est la différence de température. Cette formule est à la base du dimensionnement des joints de dilatation dans les ponts, les toitures et les façades.</p>',
    },
    { type: 'title', text: 'Coefficients de Dilatation par Matériau', level: 3 },
    {
      type: 'card',
      icon: 'mdi:table',
      title: 'Coefficients de Dilatation Courants',
      html: '<p>Tous les matériaux ne se dilatent pas de la même façon. L\'<strong>aluminium</strong> (23 ppm/°C) se dilate presque deux fois plus vite que l\'<strong>acier</strong> (12 ppm/°C). Le <strong>béton</strong> a un coefficient quasi identique à celui de l\'acier (12 ppm/°C), ce qui explique la stabilité du béton armé. Le <strong>PVC</strong> (30 ppm/°C) et le <strong>bois transversal</strong> (40 ppm/°C) présentent les expansions les plus élevées et nécessitent des solutions de jointement spécifiques.</p>',
    },
    { type: 'title', text: 'L\'importance des Joints de Dilatation', level: 3 },
    {
      type: 'card',
      icon: 'mdi:bridge',
      title: 'Joints de Dilatation',
      html: '<p>Si vous avez déjà vu une rainure garnie de caoutchouc dans le sol d\'un pont, vous avez vu un <strong>joint de dilatation</strong>. Sans cet espace, la poutre en acier buter contre l\'élément suivant lors des chaleurs estivales, générant des pressions susceptibles de provoquer le <strong>flambement</strong> de colonnes ou des fissures dans les murs porteurs. Le calculateur propose un joint minimum de 150 % du ΔL calculé pour absorber les variations de température extrêmes.</p>',
    },
    { type: 'title', text: 'Cas Réels: des Rails de Train à la Tour Eiffel', level: 3 },
    {
      type: 'paragraph',
      html: 'Les ingénieurs ferroviaires laissent des interstices entre les rails pour éviter qu\'ils ne se déforment en été. La structure en fer de la <strong>Tour Eiffel</strong> grandit d\'environ 15 cm lors des journées les plus chaudes de juillet à Paris. Dans le domaine domestique, les toitures en polycarbonate et les bardages en aluminium sont les cas les plus courants où le calcul thermique est déterminant pour éviter les infiltrations et les craquements.',
    },
  ],
  ui: {
    configTitle: 'Configuration',
    labelMaterial: 'Matériau',
    groupMetals: 'Métaux',
    groupConstruction: 'Construction',
    groupWood: 'Bois et Polymères',
    matSteel: 'Acier (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Cuivre (17 ppm/°C)',
    matIron: 'Fonte (11 ppm/°C)',
    matConcrete: 'Béton (12 ppm/°C)',
    matBrick: 'Brique (9 ppm/°C)',
    matGlass: 'Verre (9 ppm/°C)',
    matWoodFiber: 'Bois dans le Fil (5 ppm/°C)',
    matWoodTransversal: 'Bois Transversal (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Métallurgie',
    catConstruction: 'Construction',
    catWood: 'Bois et Polymères',
    labelLength: 'Longueur Initiale (m)',
    labelTempStart: 'T. Initiale (°C)',
    labelTempEnd: 'T. Maximale (°C)',
    deltaLabel: 'Différentiel Thermique (ΔT)',
    vizTitle: 'Simulation d\'Expansion',
    resultGrowthLabel: 'Croissance Totale (ΔL)',
    resultFinalLabel: 'Longueur Finale',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Risque de Flambement',
    jointTitle: 'Joint Minimum',
    riskLow: 'Faible',
    riskModerate: 'Modéré',
    riskCritical: 'Critique',
    tipDefault: 'Consultez la fiche technique du fabricant pour les coefficients exacts des alliages spéciaux.',
    tipSteel: 'L\'acier et le béton ont des coefficients presque identiques, ce qui permet au béton armé de fonctionner sans fissuration interne.',
    tipAluminum: 'L\'aluminium se dilate presque deux fois plus que l\'acier. Dans les bardages métalliques, cela impose l\'utilisation de mastics élastiques.',
    tipGlass: 'Le verre et l\'acier se dilatent à la même vitesse, ce qui est essentiel à la conception des grandes façades vitrées.',
    tipConcrete: 'Le coefficient du béton est très similaire à celui de l\'acier, raison pour laquelle les structures mixtes sont si stables.',
    tipWood: 'Le bois se dilate peu sous l\'effet de la chaleur, mais beaucoup sous l\'effet de l\'humidité. Dans le sens du fil, le mouvement thermique est très faible.',
    tipPvc: 'Le PVC a une expansion très élevée. Il nécessite des joints toriques ou des courbes en lyre pour absorber les mouvements sans se fissurer.',
  },
};
