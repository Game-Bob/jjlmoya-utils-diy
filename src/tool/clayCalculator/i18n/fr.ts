import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'calculateur-retrait-argile';
const title = "Calculateur de Retrait d'Argile : Dimensions Exactes pour la Céramique";
const description =
  "Calculez le retrait de l'argile pendant le séchage et la cuisson. Concevez des pièces céramiques avec les dimensions finales exactes dont vous avez besoin.";

const faqData = [
  {
    question: "Pourquoi l'argile rétrécit-elle ?",
    answer:
      "L'argile rétrécit principalement à cause de la perte d'eau. D'abord vient le séchage (évaporation de l'eau entre les particules) puis la cuisson (élimination de l'eau chimiquement combinée et frittage des particules).",
  },
  {
    question: 'Quel est le pourcentage de retrait normal ?',
    answer:
      "Cela dépend de la pâte céramique. La faïence rétrécit généralement de 5 à 10%, tandis que le grès et la porcelaine peuvent atteindre 12-15% en raison d'une plus grande vitrification.",
  },
  {
    question: "Comment mesurer le retrait de ma propre argile ?",
    answer:
      "Créez une plaquette de test exactement de 10cm. Laissez-la sécher et mesurez-la (retrait au séchage). Cuisez-la à la température finale et mesurez à nouveau (retrait total). La différence vous donnera le pourcentage exact.",
  },
  {
    question: 'Que se passe-t-il si ma pièce se fissure en séchant ?',
    answer:
      "Cela indique généralement un séchage trop rapide ou inégal. Les zones minces perdent l'eau avant les zones épaisses, créant des tensions. Couvrez les pièces avec du plastique pour ralentir le processus.",
  },
];

const howToData = [
  {
    name: 'Mesurer la pièce à l\'état humide',
    text: "Prenez les dimensions exactes de votre pièce juste après le tournage ou le modelage, quand elle contient encore toute son humidité.",
  },
  {
    name: 'Entrer le coefficient de retrait',
    text: "Vérifiez sur l'emballage de votre argile le pourcentage de retrait total (séchage + cuisson) fourni par le fabricant.",
  },
  {
    name: 'Obtenir les dimensions finales attendues',
    text: "Utilisez le calculateur pour savoir combien votre pièce mesurera après la cuisson et planifiez vos assemblages ou couvercles.",
  },
  {
    name: 'Calcul inverse pour les objectifs',
    text: "Si vous avez besoin que votre pièce mesure exactement X cm une fois terminée, utilisez le calcul inverse pour savoir quelle taille elle doit avoir au tour.",
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    {
      name: "The Potter's Dictionary - Clay Shrinkage",
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "La Physique de l'Argile : Retrait et Expansion",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'argile est un matériau vivant qui change de taille tout au long du processus céramique. Du moment où vous façonnez une pièce humide jusqu'à sa sortie du four, elle peut perdre entre 8% et 15% de sa taille originale. Calculer ce retrait est essentiel pour créer des pièces aux dimensions exactes dont vous avez besoin.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Phases de Retrait',
          html: "<p><strong>1. Séchage (Humide → Sec) :</strong> En perdant de l'eau, les particules d'argile se rapprochent. C'est la phase de retrait la plus importante (4-8%). Les pièces épaisses peuvent se fissurer si elles sèchent trop vite.</p><p><strong>2. Cuisson (Sec → Biscuit) :</strong> Entre 900-1000°C, l'argile subit des changements chimiques irréversibles. Retrait supplémentaire de 2-4%. La pièce devient poreuse mais résistante.</p><p><strong>3. Vitrification (Haute Température) :</strong> À 1200-1300°C, l'argile se vitrifie. Retrait final de 1-3%. Le grès et la porcelaine atteignent leur densité maximale.</p>",
        },
        {
          type: 'card',
          title: 'Variables Influentes',
          html: "<ul><li><strong>Type d'argile :</strong> Les argiles rouges rétrécissent moins (8-10%) que les porcelaines (12-15%).</li><li><strong>Épaisseur des parois :</strong> Les parois fines rétrécissent plus uniformément que les épaisses.</li><li><strong>Température de cuisson :</strong> Des températures plus élevées signifient un retrait et une vitrification plus importants.</li><li><strong>Teneur en chamotte :</strong> Ajouter de la chamotte (argile précuite moulue) réduit le retrait.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'Applications Pratiques',
      level: 2,
    },
    {
      type: 'title',
      text: 'Conception de Moules',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Si vous avez besoin d'une tasse avec un diamètre final de 8cm, et que votre argile rétrécit de 12%, vous devez faire le moule de <strong>9,1cm</strong>. Ce calcul inverse est critique en production en série.",
    },
    {
      type: 'title',
      text: 'Couvercles et Assemblages',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous créez des pièces qui doivent s'emboîter (théière + couvercle, pot + couvercle), les deux doivent être faites avec la même argile et cuites ensemble pour garantir un retrait égal. Une différence de 1% peut ruiner l'ajustement.",
    },
    {
      type: 'title',
      text: 'Sculpture Monumentale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Dans les grandes pièces, le retrait différentiel entre sections épaisses et minces peut provoquer des fissures. Les céramistes expérimentés compensent en laissant des parois plus épaisses dans les zones qu'ils savent vont davantage rétrécir.",
    },
  ],
  ui: {
    labelInitialSize: 'Taille Initiale (mm)',
    labelShrinkage: 'Pourcentage de Retrait (%)',
    labelLow: 'Faible (Terre cuite)',
    labelMedium: 'Moyen (Grès)',
    labelHigh: 'Élevé (Porcelaine)',
    presetTerracota: 'Terre cuite (8%)',
    presetGres: 'Grès (12%)',
    presetPorcelana: 'Porcelaine (15%)',
    labelResult: 'Résultat',
    labelFinalSize: 'Taille Finale :',
    labelLoss: 'Perte Totale :',
    tipText:
      "Pour calculer la taille initiale nécessaire pour obtenir une taille finale spécifique, divisez la taille souhaitée par (1 - retrait/100).",
    labelInitialBadge: 'Initial :',
    labelFinalBadge: 'mm final',
    labelLossBadge: 'Perte :',
    labelInitialArea: 'Aire Initiale',
    labelFinalArea: 'Aire Finale',
  },
};
