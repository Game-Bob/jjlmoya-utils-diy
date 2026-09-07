import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'fr', slug: 'calculateur-angle-et-portee-echelle', title: "Calculateur d'angle et de portée d'échelle", description: "Calculez la distance de base, l'angle et la portée d'une échelle avec deux mesures, puis comparez le résultat à la référence 1:4.", faqTitle: 'Questions fréquentes',
  faq: [
    { question: 'Que calcule cet outil pour les échelles ?', answer: "Il transforme deux valeurs parmi la hauteur cible, la longueur de l'échelle et la distance de base en troisième valeur géométrique. Il affiche aussi l'angle, la portée et la référence 1:4 séparément." },
    { question: 'Pourquoi la base réelle diffère-t-elle de la base 1:4 ?', answer: 'Ces valeurs répondent à des questions différentes. Avec 3 m de hauteur et une échelle de 4 m, le triangle réel donne 2,65 m et 48,6 degrés. La référence 1:4 pour 3 m donne 0,75 m et demande au moins 3,09 m d échelle.' },
    { question: 'Comment atteindre une hauteur de 3 m ?', answer: "Saisissez 3 m comme hauteur cible et la longueur disponible. L'outil montre la géométrie réelle puis, séparément, la base 1:4 de 0,75 m et la longueur minimale d'environ 3,09 m." },
    { question: 'Quels sont les trois modes ?', answer: 'Hauteur + échelle vérifie la base réelle, hauteur + base calcule la longueur, et échelle + base calcule la hauteur atteignable.' },
    { question: 'Le résultat garantit-il la sécurité ?', answer: "Non. Il s'agit uniquement d'une vérification géométrique. Suivez l'étiquette de l'échelle, les instructions du fabricant et les règles locales." },
  ],
  howTo: [
    { name: 'Choisir deux mesures', text: 'Choisissez hauteur et échelle, hauteur et base, ou échelle et base.' },
    { name: 'Saisir les valeurs', text: 'Utilisez le même système d unités pour les deux champs.' },
    { name: 'Lire la géométrie', text: "Vérifiez la base, l'angle et la portée du triangle obtenu." },
    { name: 'Comparer à 1:4', text: 'Comparez la base de référence et la longueur minimale avant l installation.' },
  ],
  seo: [
    { type: 'title', text: 'Ce que calcule ce calculateur d échelle', level: 2 },
    { type: 'paragraph', html: "Utilisez-le lorsque vous connaissez deux mesures et devez décider si une échelle atteint une hauteur, quelle base forme le triangle réel ou quelle longueur est nécessaire. La référence 1:4 reste distincte du calcul géométrique." },
    { type: 'title', text: 'Géométrie réelle de vos mesures', level: 3 },
    { type: 'paragraph', html: 'Avec <strong>hauteur + échelle</strong>, la base réelle vaut <code>√(longueur² - hauteur²)</code>. Avec <strong>hauteur + base</strong>, vous obtenez la longueur, et avec <strong>échelle + base</strong>, la hauteur atteignable.' },
    { type: 'title', text: 'Référence de placement 1:4', level: 3 },
    { type: 'paragraph', html: 'La référence 1:4 place le pied à une unité pour quatre unités de hauteur. Pour 3 m, cela représente 0,75 m et une longueur minimale correspondante de 3,09 m.' },
    { type: 'title', text: 'Interpréter le résultat', level: 3 },
    { type: 'list', items: ['Un angle plus faible signifie que le pied est plus éloigné du support.', 'Un angle plus fort signifie que le pied est plus proche.', 'Une échelle plus longue que le minimum peut dépasser la hauteur cible.'] },
    { type: 'tip', title: 'La géométrie ne certifie pas la sécurité', html: "Vérifiez l'échelle, le sol, l'appui, la charge, l'accès et les instructions du fabricant avant utilisation." },
  ],
  ui: {
    unitSystemLabel: 'Système d unités', unitMetric: 'Métrique', unitImperial: 'Impérial', intro: 'Saisissez deux mesures. La géométrie et la référence 1:4 restent séparées.', solveTitle: 'Choisir deux mesures', modeHeightLength: 'Hauteur + échelle', modeHeightBase: 'Hauteur + base', modeLengthBase: 'Échelle + base', modeHeightLengthHint: 'Vérifier la base réelle', modeHeightBaseHint: 'Calculer la longueur', modeLengthBaseHint: 'Calculer la portée', fieldHeight: 'Hauteur cible', fieldLength: 'Longueur disponible', fieldBase: 'Distance de la base', fieldHeightHelp: 'Hauteur à atteindre', fieldLengthHelp: "Longueur de l'échelle", fieldBaseHelp: 'Distance horizontale au support', calculatedTitle: 'Calculé pour vous', calculatedBase: 'Base réelle', calculatedBaseHelp: 'avec ces deux mesures', calculatedLength: "Longueur de l'échelle", calculatedLengthHelp: 'pour cette hauteur et cette base', calculatedHeight: 'Hauteur atteignable', calculatedHeightHelp: 'avec cette échelle et cette base', diagramTitle: 'Géométrie du résultat', angleTitle: 'Angle', angleUnit: 'degrés', angleGuide: 'Vue latérale avec échelle, support, hauteur cible, base et référence 1:4', reachTitle: 'Portée verticale', reachHelp: 'hauteur au support', targetTitle: 'Hauteur cible', targetHelp: 'hauteur demandée', baseTitle: 'Distance de base', baseHelp: 'distance horizontale au sol', guideDistanceTitle: 'Base 1:4 pour la hauteur', guideDistanceHelp: 'hauteur cible divisée par 4', requiredLengthTitle: 'Longueur minimale à 1:4', requiredLengthHelp: 'pour la hauteur cible', verdictReach: 'La hauteur est atteinte', verdictShort: "La hauteur n'est pas atteinte", verdictReachHelp: 'La portée verticale atteint ou dépasse la hauteur cible.', verdictShortHelp: 'Il faut plus de longueur ou une autre géométrie adaptée.', angleTooFlat: 'Plus faible que la référence', angleWithinGuide: 'Proche de la référence 1:4', angleTooSteep: 'Plus fort que la référence', ladderLabel: 'échelle', wallLabel: 'support', targetLabel: 'cible', baseLabel: 'distance de base', groundLabel: 'sol', guideLabel: 'référence 1:4', invalidPositive: 'Saisissez deux mesures positives.', invalidBase: "La base doit être inférieure à la longueur de l'échelle.", invalidTarget: 'La hauteur cible doit être inférieure à la longueur.', warning: "Géométrie uniquement. Suivez l'étiquette et les instructions du fabricant.", unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
