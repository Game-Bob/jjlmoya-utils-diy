import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'calculateur-passe-partout';
const title = 'Calculateur Passepartout: Marges avec Correction Optique pour Encadrement';
const description =
  "Calculez les marges exactes de passe-partout avec correction optique (pondération basse). Proportions galerie pour l'encadrement professionnel de photos et oeuvres d'art.";

const faqData = [
  {
    question: 'Qu\'est-ce que la pondération basse (Bottom Weighting) en encadrement?',
    answer:
      "La pondération basse est une technique professionnelle d'encadrement où la marge inférieure est légèrement plus large que la marge supérieure. Elle corrige une illusion d'optique: lorsqu'une oeuvre est encadrée avec des marges parfaitement égales, elle semble visuellement 'tomber'. La marge inférieure plus large compense cet effet et donne l'impression d'un centrage parfait.",
  },
  {
    question: 'Quel carton choisir pour un passe-partout de conservation?',
    answer:
      "Utilisez toujours un carton sans acide ou à pH neutre (alpha-cellulose ou chiffon de coton). Les cartons bon marché à base de pâte de bois contiennent de la lignine qui libère des acides avec le temps, provoquant le jaunissement et les piqûres (foxing) qui endommagent irrémédiablement l'oeuvre. Cherchez les mentions \"Acid-Free\" ou \"Museum Quality\".",
  },
  {
    question: 'Comment choisir la couleur du passe-partout?',
    answer:
      "Le blanc cassé ou le crème doux sont les standards professionnels qui ne concurrencent pas l'oeuvre. Un passe-partout sombre peut mettre en valeur les blancs d'une photographie. Un passe-partout coloré doit être utilisé avec parcimonie pour complémenter les tons de la pièce sans les dominer.",
  },
  {
    question: 'Quelle est la largeur de marge idéale?',
    answer:
      "Le standard professionnel est entre 5 et 8 cm. Une marge trop étroite donne une impression d'étouffement. Une marge plus large donne même aux petits formats une présence monumentale et élégante.",
  },
];

const howToData = [
  {
    name: "Mesurer l'oeuvre",
    text: "Mesurez la largeur et la hauteur exactes du papier ou de la toile à encadrer. Soustrayez quelques millimètres si vous souhaitez que le passe-partout chevauche légèrement l'image.",
  },
  {
    name: 'Mesurer le feuillure du cadre',
    text: "Prenez les dimensions internes de la feuillure du cadre où le carton du passe-partout viendra s'insérer.",
  },
  {
    name: 'Activer la correction optique',
    text: "Cochez l'option dans notre calculateur si vous souhaitez que la marge inférieure soit automatiquement plus large pour un rendu professionnel.",
  },
  {
    name: 'Couper le carton',
    text: "Utilisez les mesures obtenues pour découper la fenêtre et l'extérieur du carton, idéalement avec un cutter biseau 45 degrés pour un chanfrein net.",
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    {
      name: 'ISO 9706: Permanence du papier pour documents',
      url: 'https://www.iso.org/standard/22495.html',
    },
    {
      name: 'PPFA: Professional Picture Framers Association',
      url: 'https://ppfa.com/',
    },
    {
      name: 'Fine Art Trade Guild: Normes d\'encadrement',
      url: 'https://www.fineart.co.uk/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "La Science de l'Encadrement Parfait",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Un <strong>passe-partout</strong> (ou marie-louise) n'est pas qu'un carton décoratif: c'est l'espace respiratoire qui permet à votre oeuvre d'exister indépendamment de son cadre. Ce calculateur vous donne les dimensions exactes pour découper votre carton, garantissant que l'oeuvre soit centrée optiquement selon les standards des galeries professionnelles.",
    },
    {
      type: 'title',
      text: 'Pourquoi la Pondération Basse fonctionne',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:eye-outline',
      title: "L'illusion du centre optique",
      html: "<p>L'oeil humain perçoit le centre géométrique vertical d'un rectangle comme étant légèrement plus bas qu'il ne l'est réellement. Une oeuvre encadrée avec des marges exactement égales semble 'tomber' ou s'enfoncer visuellement.</p><p>La <strong>pondération basse</strong> corrige cela en rendant la marge inférieure 5 à 15% plus large que la supérieure. L'oeuvre est rehaussée optiquement et semble parfaitement centrée, une technique utilisée dans toutes les galeries professionnelles.</p>",
    },
    {
      type: 'title',
      text: 'Le Carton de Conservation: Pourquoi les Matériaux Comptent',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:palette-swatch-outline',
      title: 'Carton sans acide contre carton standard',
      html: "<p>Les cartons à base de pâte de bois contiennent de la lignine qui se dégrade en libérant de l'acide acétique. Cela provoque le jaunissement et les piqûres (foxing) caractéristiques qui détruisent définitivement les oeuvres. Le <strong>carton de conservation</strong> (alpha-cellulose ou chiffon de coton) est à pH neutre et protège l'oeuvre pendant des décennies.</p>",
    },
    {
      type: 'title',
      text: 'Conseils de Mesure Professionnels',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>Mesurez la feuillure, pas la face:</strong> Si vous avez déjà le cadre, mesurez la feuillure intérieure par l'arrière, pas l'ouverture du verre par l'avant. Le carton doit s'insérer précisément dans la feuillure.",
    },
    {
      type: 'paragraph',
      html: "<strong>Le chevauchement de sécurité:</strong> La fenêtre du passe-partout doit être légèrement plus petite que l'oeuvre (environ 5mm par côté) pour que l'image ne puisse pas glisser par l'ouverture.",
    },
    {
      type: 'card',
      icon: 'mdi:ruler',
      title: "La règle d'or de l'encadrement",
      html: "<p>Ne jamais laisser moins de 5cm de marge si vous voulez que l'oeuvre respire. Des marges généreuses signalent la qualité et élèvent même les petits formats au rang d'oeuvres de musée.</p>",
    },
  ],
  ui: {
    sectionTitle: 'Dimensions',
    sectionDesc: 'Entrez les mesures en centimètres.',
    frameSizeTitle: 'Taille du Cadre',
    artSizeTitle: "Taille de l'Oeuvre",
    labelWidth: 'Largeur (cm)',
    labelHeight: 'Hauteur (cm)',
    labelBottomWeighting: 'Pondération Basse',
    descBottomWeighting: 'Marge inférieure plus large pour équilibre visuel',
    labelOffset: 'Décalage (%)',
    errorMsg: "Les dimensions de l'oeuvre doivent être inférieures à celles du cadre.",
    labelTop: 'Haut',
    labelBottom: 'Bas',
    labelLeft: 'G.',
    labelRight: 'D.',
    artPlaceholder: 'Votre Oeuvre',
  },
};
