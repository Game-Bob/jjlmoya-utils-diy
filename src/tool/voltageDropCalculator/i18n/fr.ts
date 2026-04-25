import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-chute-tension';
const title = 'Calculateur de Chute de Tension et Section de Câble';
const description =
  'Calculez la chute de tension et la section de câble nécessaire pour vos installations 12V, 24V et 230V. Entrez la puissance, la distance et le matériau du conducteur pour obtenir un résultat précis.';

const faqData = [
  {
    question: 'Qu\'est-ce que la chute de tension?',
    answer:
      'La chute de tension est la perte de voltage qui se produit lorsque le courant électrique parcourt un câble. Un câble trop fin ou trop long entraîne une perte de tension. Résultat pratique: lumières ternes, moteurs qui ne démarrent pas, câbles qui surchauffent.',
  },
  {
    question: 'Quelle section de câble pour du 12V sur 10 mètres?',
    answer:
      'Cela dépend de la puissance. Pour 12V et 10A sur 10m, il faut au minimum 2,5mm². Pour 20A, il faut 6mm². En basse tension (12V/24V), la chute de tension est beaucoup plus critique qu\'en 230V.',
  },
  {
    question: 'Quelle est la chute de tension maximale autorisée?',
    answer:
      'Pour les installations domestiques (230V): maximum 3% pour l\'éclairage, 5% pour les autres usages. Pour les systèmes 12V/24V (camping-car, solaire): ne pas dépasser 3% au total. Au-delà, l\'efficacité chute et le risque de surchauffe augmente.',
  },
  {
    question: 'Pourquoi le 12V nécessite des câbles plus épais que le 230V?',
    answer:
      'Pour transporter la même puissance (1000W), le 230V nécessite seulement 4,3A et un câble de 1,5mm². Le 12V nécessite 83,3A et un câble de 25mm². Plus la tension est basse, plus le câble doit être épais pour éviter les pertes.',
  },
];

const howToData = [
  {
    name: 'Choisir la tension du système',
    text: 'Sélectionnez 12V, 24V (solaire/camping-car) ou 230V (réseau) selon votre installation.',
  },
  {
    name: 'Saisir la charge',
    text: 'Entrez les Watts (W) ou Ampères (A) que consommera l\'appareil en bout de câble.',
  },
  {
    name: 'Mesurer la longueur du câble',
    text: 'Entrez la distance aller en mètres depuis la source d\'énergie jusqu\'au récepteur.',
  },
  {
    name: 'Choisir le matériau du conducteur',
    text: 'Sélectionnez cuivre (standard) ou aluminium pour obtenir le calcul de résistivité exact.',
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guide Complet sur la Chute de Tension', level: 2 },
    {
      type: 'paragraph',
      html: 'Que vous aménagez un van, installez des panneaux solaires ou câblez votre jardin, il existe un ennemi invisible qui peut compromettre votre projet: la <strong>chute de tension</strong>. Ce n\'est pas seulement une question technique; c\'est la différence entre un réfrigérateur qui refroidit et un qui s\'éteint, entre une installation sûre et un risque d\'incendie.',
    },
    { type: 'title', text: 'La Formule de Calcul de la Chute de Tension', level: 3 },
    {
      type: 'card',
      icon: 'mdi:function-variant',
      title: 'Calcul Exact par la Loi d\'Ohm',
      html: '<p>La formule est <strong>ΔV = (2 × L × I × ρ) / S</strong>. L est la longueur aller en mètres, I le courant en ampères, ρ la résistivité du matériau (0,0178 Ω·mm²/m pour le cuivre, 0,028 pour l\'aluminium) et S la section du câble en mm². Le facteur 2 correspond au trajet aller-retour du courant.',
    },
    { type: 'title', text: 'Le Paradoxe de la Basse Tension', level: 3 },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Pourquoi le 12V exige des câbles plus épais que le 230V',
      html: '<p>Pour transporter 1000W à 230V, il suffit de 4,3A et un câble de 1,5mm². Pour les mêmes 1000W à 12V, il faut 83,3A et un câble de 25mm². <strong>Plus la tension est basse, plus le câble doit être épais</strong> pour transporter la même énergie sans pertes dangereuses. C\'est le paradoxe qui surprend la plupart des constructeurs de van.</p>',
    },
    { type: 'title', text: 'Sections de Référence pour Installations 12V', level: 3 },
    {
      type: 'paragraph',
      html: 'Référence rapide pour le câblage 12V DC: <strong>1,5mm²</strong> éclairage léger jusqu\'à 10A, <strong>2,5mm²</strong> réfrigérateurs et prises USB jusqu\'à 20A, <strong>6mm²</strong> panneaux solaires jusqu\'à 40A, <strong>16mm²</strong> batteries auxiliaires jusqu\'à 80A, <strong>25mm²</strong> circuits principaux de van jusqu\'à 120A. Utilisez toujours le calculateur avec votre longueur et courant exacts.',
    },
  ],
  ui: {
    heroDropLabel: 'Chute de Tension Totale',
    heroVoltsUnit: 'Volts',
    heroPctLoss: '% de perte',
    heroEffLabel: 'Efficacité',
    statusExcellent: 'Excellent',
    statusAcceptable: 'Acceptable',
    statusCritical: 'Critique',
    fieldVoltage: 'Tension',
    fieldMaterial: 'Matériau',
    materialCopper: 'Cuivre',
    materialAlum: 'Alum.',
    fieldLoad: 'Charge',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watts',
    unitAmps: 'Ampères',
    fieldLength: 'Longueur du Câble (Aller)',
    unitMeters: 'mètres',
    fieldSection: 'Section du Câble',
    sectionInfo: 'Recommandé',
  },
};
