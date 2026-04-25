import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dosage-mortier-chaux-nhl';
const title = 'Dosage Mortier de Chaux NHL: Proportions pour Enduits et Crépis Traditionnels';
const description =
  'Calculez les dosages exacts pour mortiers de chaux aérienne CL 90 et chaux hydraulique naturelle NHL. Proportions vitruviennes pour crépis, enduits et badigeons patrimoniaux.';

const faqData = [
  {
    question: 'Quelle est la différence entre chaux aérienne CL 90 et chaux hydraulique NHL?',
    answer:
      "La chaux aérienne CL 90 durcit uniquement par carbonatation (absorption du CO₂ atmosphérique). Elle est très souple et très respirante, idéale pour les maçonneries anciennes fragiles. La chaux hydraulique naturelle NHL durcit également par réaction hydraulique avec l'eau, ce qui lui donne une prise plus rapide et une résistance mécanique supérieure, adaptée aux travaux extérieurs exposés.",
  },
  {
    question: 'Quel dosage pour un crépi bâtard à la chaux?',
    answer:
      "Pour la couche de corps (arenato vitruvien), le dosage traditionnel est de 1 volume de chaux pour 2 volumes de sable lavé. Pour la couche de fond (trullissatio), on adopte 1:3 avec un sable de rivière à granulométrie grossière (2-5 mm). Ces proportions garantissent une résistance suffisante tout en préservant la souplesse nécessaire aux bâtiments anciens.",
  },
  {
    question: 'Combien de temps faut-il entre deux couches de mortier de chaux?',
    answer:
      "Chaque couche doit \"tirer\" avant l'application de la suivante. En conditions normales (15-20°C, hygrométrie 60-70%), comptez 24 à 48 heures entre la couche de corps et la couche de finition. Évitez d'appliquer en plein soleil ou par vent fort: le séchage trop rapide empêche la carbonatation correcte et provoque des fissures.",
  },
  {
    question: "Peut-on appliquer un enduit à la chaux sur du ciment?",
    answer:
      "Non, c'est une erreur fréquente aux conséquences graves. Le ciment est imperméable et plus rigide que la chaux. L'enduit à la chaux appliqué sur du ciment se décolle en plaques car il ne peut pas respirer. Pour une restauration patrimoniale correcte, il faut déposer tous les enduits ciment et reprendre l'ensemble en chaux, couche par couche.",
  },
];

const howToData = [
  {
    name: 'Préparer le support',
    text: "Vérifiez la nature du support: pierre calcaire, brique ancienne ou moellon. Le support doit être propre, sain et légèrement humidifié avant l'application du mortier de chaux.",
  },
  {
    name: 'Choisir la granulométrie du sable',
    text: "Utilisez un sable grossier (2-5 mm) pour la couche d'accrochage et un sable fin lavé (0,5-2 mm) pour la couche de finition. La pureté du sable détermine la qualité du mortier.",
  },
  {
    name: 'Gâcher le mortier',
    text: "Mélangez la chaux et le sable à sec avant d'ajouter l'eau progressivement. La consistance doit être plastique, ni trop ferme ni coulante. Pour la NHL 3.5, un dosage de 1:2,5 par volume est standard.",
  },
  {
    name: 'Application et talochage',
    text: "Appliquez le mortier à la truelle et talochezavec une taloche bois pour ouvrir les pores et préparer l'accrochage de la couche suivante. La taloche métallique est réservée à la finition.",
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Complet des Mortiers de Chaux: Chaux Aérienne et NHL en Restauration',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les mortiers de chaux connaissent un renouveau dans la restauration du patrimoine bâti ancien. Contrairement au ciment, qui piège l'humidité et endommage irrémédiablement la pierre, la chaux est un matériau respirant, souple et réversible. Ce calculateur applique le système de proportions codifié par l'architecte romain Vitruve au I<sup>er</sup> siècle av. J.-C., un système toujours en usage dans les chantiers de restauration patrimoniale.",
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Le piège du ciment dans le bâti ancien',
      html: "<p>L'utilisation de ciment sur des maçonneries anciennes est une erreur fréquente aux conséquences graves. Le ciment est <strong>plus rigide que la pierre environnante</strong>: les mouvements thermiques fissurent la pierre plutôt que le joint. De plus, son imperméabilité bloque l'évaporation de l'humidité ascensionnelle, provoquant des sels, des efflorescences et des éclatements dus au gel.</p>",
    },
    {
      type: 'title',
      text: 'Les Trois Couches Vitruviennes: Trullissatio, Arenato, Marmorato',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Vitruve décrit un système d'enduit en trois couches que l'on retrouve dans tous les grands monuments romains: le <strong>Trullissatio</strong> (gobetis 1:3, 30mm) accroche au support; l'<strong>Arenato</strong> (corps d'enduit 1:2, 16mm) crée le planéité; le <strong>Marmorato</strong> (finition 1:1, 4mm) donne la texture finale, traditionnellement réalisée à la poudre de marbre.",
    },
    {
      type: 'title',
      text: 'Choisir entre Chaux Aérienne CL 90 et Chaux Hydraulique NHL',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:weather-windy',
          title: 'Chaux Aérienne CL 90',
          html: "<p>Durcit uniquement par carbonatation. Très souple, très respirante. Idéale pour les pierres tendres, les badigeons, les stucs, et la restauration de maçonneries fragiles. Séchage lent: protection contre le gel obligatoire pendant 7 jours.</p>",
        },
        {
          type: 'card',
          icon: 'mdi:water-outline',
          title: 'Chaux Hydraulique NHL 3.5',
          html: "<p>Prise hydraulique + carbonatation. La plus polyvalente pour les travaux extérieurs, crépis, soubassements. Résistance à la compression: 3,5-10 MPa. Recommandée pour la majorité des travaux de restauration en France.</p>",
        },
        {
          type: 'card',
          icon: 'mdi:shield-outline',
          title: 'Chaux Hydraulique NHL 5',
          html: "<p>Haute résistance mécanique (5-15 MPa). Convient aux zones très exposées, maçonneries enterrées, pieds de mur humides. Moins respirante que la CL 90, à réserver aux situations qui l'exigent.</p>",
        },
      ],
    },
    {
      type: 'title',
      text: "La Granulométrie du Sable: Facteur Clé de la Qualité",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le sable représente <strong>60 à 75% du volume du mortier</strong>. Son choix n'est pas anodin. Un sable de rivière à grains anguleux offre une accroche mécanique supérieure. Pour la restauration patrimoniale, il est recommandé d'effectuer une analyse pétrographique du mortier existant pour en reproduire fidèlement la couleur et la texture, évitant ainsi les contrastes inesthétiques sur façades classées.",
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Vitruve, De Architectura, Livre VII, Ch. 2',
      html: "<p><em>\"Pour les bâtiments achevés avec soin, les joints de la maçonnerie doivent être remplis trois fois: une première fois avec le mortier grossier, une seconde avec le mortier moyen, et une troisième avec la couche de finition.\"</em></p><p>Deux mille ans d'expérience empirique, résumés en une règle de trois qui reste la norme sur tous les chantiers de restauration patrimoniaux aujourd'hui.</p>",
    },
  ],
  ui: {
    leftTitle: 'Système Vitruve',
    centerTitle: 'Matériaux Disponibles',
    rightTitle: 'Couverture Estimée',
    btnCal: 'Chaux',
    btnArena: 'Sable',
    labelCalPasta: 'Pâte (1,30 kg/L)',
    labelCalPolvo: 'Poudre NHL (0,65 kg/L)',
    labelQuantity: 'Quantité disponible:',
    labelNeedsAlso: 'Il vous faudra aussi:',
    labelProportion: 'Proportion: ',
    labelCoverage: 'Couverture:',
    labelThickness: 'Épaisseur totale:',
    labelLayers: 'Passes:',
    labelWasteFactor: 'Coefficient de perte: 20%',
    layersSingular: 'passe',
    layersPlural: 'passes',
    materialCal: 'Chaux',
    materialArena: 'Sable',
    materialMarmol: 'Marbre',
    phaseDescTrullissatio:
      'Gobetis rugueux. 2 passes de 15mm. Dosage 1:3 (Chaux:Sable de rivière).',
    phaseDescArenato: "Corps d'enduit. 2 passes de 8mm. Dosage 1:2 (Chaux:Sable lavé).",
    phaseDescMarmorato: 'Finition fine. 1 double passe de 4mm. Dosage 1:1 (Chaux:Poudre de marbre).',
    granulometryTitle: 'Granulométrie du Granulat',
    grainTitleCoarse: 'Sable Grossier',
    grainSubtitleCoarse: 'Sable de Rivière',
    grainUsageCoarse: 'Gobetis',
    grainTitleMedium: 'Sable Moyen',
    grainSubtitleMedium: 'Sable Lavé',
    grainUsageMedium: "Corps d'enduit",
    grainTitleFine: 'Poudre Fine',
    grainSubtitleFine: 'Poudre de Marbre (Marmolina)',
    grainUsageFine: 'Finition',
    specSize: 'Taille:',
    specUse: 'Usage:',
    specDensity: 'Densité:',
  },
};
