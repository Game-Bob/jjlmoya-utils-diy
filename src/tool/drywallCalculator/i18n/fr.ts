import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'calculateur-plaque-de-platre';
const title = 'Calculateur Plaque de Platre et Ossature Metallique';
const description = 'Calculateur professionnel de quantite de materiaux pour cloisons et doublages en plaque de platre. Estimez precisement les plaques, montants C, rails U, vis, bandes a joint et enduit.';

const faqData = [
  {
    question: 'Comment calculer le nombre de plaques de platre pour une cloison ?',
    answer: 'Calculez la surface du mur en multipliant la longueur par la hauteur sous plafond. Pour une cloison separative a 2 parements, multipliez par 2; pour un doublage double peau a 2 parements, multipliez par 4. Divisez la surface totale par la surface utile d\'une plaque (2.4 m2 pour une plaque 120x200 cm ou 3.0 m2 pour 120x250 cm) et ajoutez 10% de marge pour les decoupes et ouvertures.',
  },
  {
    question: 'Faut-il choisir un entraxe de montants de 40 cm ou 60 cm ?',
    answer: 'L\'entraxe standard de 60 cm convient aux cloisons seches residentielles jusqu\'a 3.0 m de hauteur. Un entraxe de 40 cm est obligatoire en cas de pose de carrelage lourd, dans les pieces humides (salle de bain, cuisine), pour les cloisons acoustiques double peau ou lorsque la hauteur depasse 3.0 metres.',
  },
  {
    question: 'Quel type de plaque de platre choisir selon l\'application ?',
    answer: 'Utilisez la Plaque Standard Blanche (Type A) pour les chambres et sejours; la Plaque Hydrofuge Verte (Type H1) pour les pieces humides; la Plaque Ignifuge Rose (Type F) pour les conduits et locaux techniques; et la Plaque Acoustique Bleue haute densite pour l\'isolation phonique.',
  },
  {
    question: 'Combien de vis faut-il par plaque de platre ?',
    answer: 'Comptez environ 30 vis plaque de platre (3.5x25 mm) par plaque 120x200 cm en parement simple. Espacez les vis de 25 cm sur la peripherie et 30 cm sur les montants verticaux centraux. Pour la seconde couche en double peau, utilisez des vis 3.5x35 mm.',
  },
  {
    question: 'Pourquoi la bande resiliente est-elle obligatoire sous les rails ?',
    answer: 'La bande mousse autocollante en polyethylene desolidarise les rails U horizontaux des dalles sol et plafond. Elle stoppe la transmission des bruits d\'impact et assure l\'etancheite thermo-acoustique peripherique.',
  },
];

const howToData = [
  { name: 'Saisir les dimensions de la cloison', text: 'Indiquez la longueur et la hauteur sous plafond en metres ou pieds.' },
  { name: 'Configurer l\'ossature et la peau', text: 'Selectionnez l\'entraxe des montants (40 cm ou 60 cm), le nombre de peaux (simple ou double) et le nombre de faces (1 ou 2 faces).' },
  { name: 'Examiner le quantitatif et l\'elevation CAD', text: 'Consultez la liste des materiaux (montants, rails, vis, bandes, enduit) et le schema technique de l\'ossature.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dimensionnement Technique des Cloisons Seches sur Ossature Metallique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La realisation de cloisons legeres en plaques de platre necessite le dimensionnement precis des profiles en acier galvanise (montants C et rails U) ainsi que la disposition des joints. Conformement au <strong>DTU 25.41 et a la norme NF EN 520</strong>, un entraxe rigoureux evite la deformation mecanique et les fissures aux joints.',
    },
    {
      type: 'title',
      text: 'Regles d\'Entraxe des Montants: 40 cm vs 60 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'entraxe determine la rigidite de l\'ouvrage. L\'<strong>entraxe standard de 60 cm</strong> correspond exactement a la largeur de 120 cm des plaques, assurant l\'appui des bords sur l\'aile du montant. L\'<strong>entraxe de 40 cm</strong> s\'impose en presence de carrelage mural, pour les hauteurs superieures a 3.00 metres ou pour des contraintes acoustiques renforcees.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Harpage des Joints et Schéma de Vissage',
      html: '<p>Ne faites jamais coincider les joints verticaux ou horizontaux entre plaques adjacentes ou entre les deux faces. Observez un decalage d\'au moins 40 cm. Fixez les plaques avec des vis autoforeuses 3.5x25 mm tous les <strong>25 cm en peripherie</strong> et tous les <strong>30 cm sur les montants centraux</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Marge de Chutes et Consommation d\'Enduit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prevoyez systematiquement une <strong>marge de chute de 10%</strong> sur les rails, montants et plaques. Le traitement des joints consomme environ 0,8 kg d\'enduit par metre carre de plaque, associe a une bande armee ou papier microperfore.',
    },
  ],
  ui: {
    unitSystemLabel: 'Système de Mesure',
    unitMetric: 'Métrique (m, cm, kg)',
    unitImperial: 'Impérial (ft, in, lb)',

    paramLengthLabel: 'Longueur du Mur',
    paramHeightLabel: 'Hauteur sous Plafond',
    paramSpacingLabel: 'Entraxe des Montants',
    paramSpacing40Metric: '40 cm (Forte Charge)',
    paramSpacing60Metric: '60 cm (Standard)',
    paramSpacing40Imperial: '16 in (Forte Charge)',
    paramSpacing60Imperial: '24 in (Standard)',
    paramLayersLabel: 'Nombre de Peaux',
    paramSingleLayer: 'Simple Peau',
    paramDoubleLayer: 'Double Peau',
    paramSidesLabel: 'Faces Habillées',
    paramDoubleSided: '2 Faces (Cloison)',
    paramSingleSided: '1 Face (Doublage)',
    paramBoardTypeLabel: 'Type de Plaque',
    boardTypeStandard: 'Standard (Type A)',
    boardTypeMoisture: 'Hydrofuge (Type H1)',
    boardTypeFire: 'Ignifuge (Type F)',
    boardTypeAcoustic: 'Acoustique (Type A)',
    paramWasteLabel: 'Marge de Chutes',

    summaryWallArea: 'Surface Nette Mur',
    summaryBoardArea: 'Surface Totale Plaques',

    resBoardsLabel: 'Plaques de Plâtre',
    resBoardsUnit: 'plaques',
    resStudsLabel: 'Montants Verticaux',
    resStudsUnit: 'pièces',
    resTracksLabel: 'Rails Horizontaux',
    resTracksUnit: 'longueurs',
    resDrywallScrewsLabel: 'Vis Placo',
    resDrywallScrewsUnit: 'vis',
    resFramingScrewsLabel: 'Vis Ossature',
    resFramingScrewsUnit: 'vis',
    resJointTapeLabel: 'Bande à Joint',
    resJointTapeUnit: 'longueur',
    resJointCompoundLabel: 'Enduit à Joint',
    resJointCompoundUnit: 'poids',
    resAcousticBandLabel: 'Bande Résiliente',
    resAcousticBandUnit: 'longueur',

    diagramWallTitle: 'Élévation Technique CAD',
    diagramStudLegend: 'Montants C',
    diagramTrackLegend: 'Rails U',
    diagramBoardLegend: 'Harpage des Plaques',
    diagramModeStructure: 'Ossature',
    diagramModeBoard: 'Plaques',
  },
};
