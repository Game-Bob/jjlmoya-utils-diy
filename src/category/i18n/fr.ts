import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Outils et Calculateurs pour Projets DIY et Construction',
  description:
    "Planifiez vos projets de bricolage avec des outils gratuits en ligne. Calculateurs de retrait de l'argile, mélanges de résine, béton, optimiseurs de coupe et tracé d'escaliers.",
  seo: [
    {
      type: 'title',
      text: 'Ingénierie Domestique et Projets DIY : Du Design à la Réalité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le mouvement <strong>Do It Yourself (DIY)</strong> est passé d'un simple passe-temps à une forme d'autonomie technique et créative. Cette section propose une suite d'<strong>outils gratuits en ligne</strong> conçus pour les makers, artisans et passionnés de construction qui recherchent des résultats professionnels. Nous appliquons des modèles mathématiques et des normes techniques pour que chaque coupe, chaque mélange et chaque structure soit sûr et précis.",
    },
    {
      type: 'paragraph',
      html: "Du calcul du dosage exact du béton à l'optimisation des coupes sur des planches de bois, nos utilitaires éliminent le gaspillage de matériaux et garantissent l'intégrité de vos projets.",
    },
    {
      type: 'title',
      text: 'Construction et Rénovation : Béton, Mortiers et Escaliers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La base de toute structure est son mélange. Notre calculateur de <strong>mélange de béton</strong> fournit le dosage exact de ciment, sable et gravier pour tout volume requis. Pour les travaux de maçonnerie fine, le <strong>calculateur de mortier</strong> ajuste les proportions de chaux et sable pour des enduits durables. De plus, l'outil de tracé d'escaliers utilise la <strong>Loi de Blondel</strong> pour garantir des marches confortables et conformes aux normes.",
    },
    {
      type: 'title',
      text: 'Menuiserie et Optimisation des Matériaux',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les matériaux sont coûteux et le gaspillage est inacceptable. L'<strong>optimiseur de coupes</strong> calcule la meilleure distribution des pièces sur des planches ou liteaux, minimisant les chutes. Pour les projets de mobilier, le calculateur <strong>\"Le meuble entre-t-il ?\"</strong> analyse les dimensions des portes et ascenseurs pour éviter les surprises logistiques lors du montage.",
    },
    {
      type: 'title',
      text: 'Artisanat et Nouveaux Matériaux : Argile et Résine Époxy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les matériaux dynamiques nécessitent des calculs de changement de phase. En céramique, le <strong>calculateur d'argile</strong> estime le facteur de retrait pendant le séchage et la cuisson pour que vos pièces finales aient les dimensions exactes souhaitées. Pour le coulage de résines, notre utilitaire calcule le volume total et le ratio de mélange par poids ou volume des composants A et B, évitant les bulles et le durcissement incomplet.",
    },
    {
      type: 'title',
      text: 'Électricité et Sécurité Technique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Un mauvais calcul électrique peut provoquer des incendies. Notre calculateur de <strong>chute de tension</strong> détermine la section minimale de câble nécessaire selon la longueur de ligne et la charge connectée (12V/24V/230V), garantissant que vos installations solaires ou domestiques fonctionnent selon les normes de sécurité en vigueur.",
    },
    {
      type: 'list',
      items: [
        "<strong>Économies de coûts :</strong> Minimisez le gaspillage de matériaux coûteux comme les résines, le bois et les métaux grâce à l'optimisation algorithmique.",
        '<strong>Sécurité structurelle :</strong> Calculs basés sur les normes de construction (Blondel, normes électriques) pour des projets sûrs.',
        "<strong>Précision dans les détails :</strong> Facteurs de correction pour la dilatation thermique, le retrait chimique et les jeux de montage.",
        "<strong>Outils prêts hors ligne :</strong> Utilisez-les à l'atelier ou sur le chantier sans applications lourdes.",
      ],
    },
    {
      type: 'tip',
      title: "Conseil d'Exécution sur Chantier",
      html: "<p><strong>Mélange Parfait :</strong> Ajoutez toujours les poudres (ciment/chaux) à l'eau, jamais l'inverse. Vous obtiendrez une hydratation plus homogène et éviterez la formation de grumeaux difficiles à dissoudre, garantissant la résistance finale du matériau.</p>",
    },
    {
      type: 'title',
      text: 'Gestion du Budget : Décomposition des Coûts et Optimisation Économique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Un projet sans budget est un projet qui s'effondre. Notre calculateur de coûts permet de décomposer le prix de chaque matériau, la main-d'œuvre estimée, les outils et les imprévus. En optimisant les coupes et en réduisant les déchets de 20%, vous économisez significativement.",
    },
    {
      type: 'title',
      text: 'La démocratisation de la fabrication personnelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'accès à des <strong>logiciels d'ingénierie simplifiés</strong> permet à quiconque d'exécuter des projets qui nécessitaient auparavant des années de spécialisation. Ces outils sont le pont entre votre idée et sa réalisation physique, vous donnant la confiance des données pour construire le monde qui vous entoure.",
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Optimisation', value: 'Matériau 95%+', icon: 'mdi:saw-blade' },
        { label: 'Sécurité', value: 'Normative', icon: 'mdi:ruler-square' },
        { label: 'Matériaux', value: 'Récupération', icon: 'mdi:tools' },
        { label: 'Précision', value: 'Millimétrique', icon: 'mdi:calculator' },
      ],
    },
  ],
};
