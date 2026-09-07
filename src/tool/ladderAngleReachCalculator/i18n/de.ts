import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'de', slug: 'leiternwinkel-und-reichweiten-rechner', title: 'Leiterwinkel und Reichweitenrechner', description: 'Berechne mit zwei Maßen den Abstand, Winkel und die Reichweite einer Leiter und vergleiche sie mit der 1:4-Aufstellregel.', faqTitle: 'Häufige Fragen', faq: [
    { question: 'Was berechnet dieser Leiterrechner?', answer: 'Er berechnet aus zwei Werten für Zielhöhe, Leiterlänge und Fußabstand die fehlende geometrische Größe. Zusätzlich zeigt er Winkel, Reichhöhe und die 1:4-Referenz getrennt an.' },
    { question: 'Warum unterscheiden sich tatsächlicher Abstand und 1:4-Abstand?', answer: 'Sie beantworten unterschiedliche Fragen. Bei 3 m Höhe und 4 m Leiter ergibt das echte Dreieck 2,65 m Abstand und 48,6°. Die 1:4-Referenz für 3 m liegt bei 0,75 m und benötigt mindestens 3,09 m Leiter.' },
    { question: 'Wie berechne ich eine Leiter für 3 m Höhe?', answer: 'Gib 3 m als Zielhöhe und die verfügbare Leiterlänge ein. Das Ergebnis zeigt die echte Geometrie sowie getrennt den 1:4-Abstand von 0,75 m und die Mindestlänge von etwa 3,09 m.' },
    { question: 'Welche drei Modi gibt es?', answer: 'Höhe + Leiter prüft den echten Fußabstand, Höhe + Fußabstand berechnet die Leiterlänge und Leiter + Fußabstand berechnet die erreichbare Höhe.' },
    { question: 'Ist das Ergebnis ein Sicherheitsnachweis?', answer: 'Nein. Es ist nur eine geometrische Prüfung. Beachte Leiterkennzeichnung, Untergrund, Auflage, Last, Zugang und örtliche Vorschriften.' },
  ],
  howTo: [
    { name: 'Zwei Maße auswählen', text: 'Wähle Höhe und Leiter, Höhe und Fußabstand oder Leiter und Fußabstand.' },
    { name: 'Werte eingeben', text: 'Verwende für beide Felder dasselbe Einheitensystem.' },
    { name: 'Geometrie prüfen', text: 'Lies Abstand, Winkel und Reichhöhe des eingegebenen Dreiecks ab.' },
    { name: 'Mit 1:4 vergleichen', text: 'Vergleiche Referenzabstand und Mindestlänge vor der Aufstellung.' },
  ],
  seo: [
    { type: 'title', text: 'Was dieser Leiterrechner beantwortet', level: 2 },
    { type: 'paragraph', html: 'Nutze ihn, wenn du zwei Maße kennst und entscheiden möchtest, ob eine Leiter eine Höhe erreicht, welchen Fußabstand das echte Dreieck hat oder welche Länge benötigt wird. Die 1:4-Referenz wird nicht mit der tatsächlichen Geometrie verwechselt.' },
    { type: 'title', text: 'Echte Geometrie deiner Maße', level: 3 },
    { type: 'paragraph', html: 'Bei <strong>Höhe + Leiter</strong> lautet der echte Fußabstand <code>√(Leiterlänge² − Höhe²)</code>. Bei <strong>Höhe + Fußabstand</strong> wird die Leiterlänge berechnet; bei <strong>Leiter + Fußabstand</strong> die erreichbare Höhe.' },
    { type: 'title', text: 'Die 1:4-Aufstellreferenz', level: 3 },
    { type: 'paragraph', html: 'Die 1:4-Regel bedeutet einen Abstand von einer Einheit je vier Einheiten Höhe. Für 3 m sind das 0,75 m; die Mindestlänge dieses Dreiecks beträgt <code>√(3² + 0,75²) = 3,09 m</code>. Eine längere Leiter kann eine andere Reichhöhe und einen anderen Winkel ergeben.' },
    { type: 'title', text: 'Ergebnis richtig lesen', level: 3 },
    { type: 'list', items: ['Flacher als 1:4 bedeutet, dass der Fuß weiter vom Auflagepunkt entfernt ist.', 'Steiler als 1:4 bedeutet, dass der Fuß näher am Auflagepunkt steht.', 'Eine längere Leiter kann über die Zielhöhe hinausragen.'] },
    { type: 'tip', title: 'Geometrie ist kein Sicherheitsnachweis', html: 'Prüfe Leiter, Untergrund, Auflage, Last, Zugang und Herstellerangaben vor der Benutzung.' },
  ],
  ui: {
    unitSystemLabel: 'Einheitensystem', unitMetric: 'Metrisch', unitImperial: 'Imperial', intro: 'Gib zwei Maße ein. Geometrie und 1:4-Referenz bleiben getrennt.', solveTitle: 'Zwei Maße auswählen', modeHeightLength: 'Höhe + Leiter', modeHeightBase: 'Höhe + Fuß', modeLengthBase: 'Leiter + Fuß', modeHeightLengthHint: 'Echten Abstand prüfen', modeHeightBaseHint: 'Leiterlänge berechnen', modeLengthBaseHint: 'Reichhöhe berechnen', fieldHeight: 'Zielhöhe', fieldLength: 'Verfügbare Leiterlänge', fieldBase: 'Fußabstand', fieldHeightHelp: 'Höhe, die erreicht werden soll', fieldLengthHelp: 'Länge der Leiter', fieldBaseHelp: 'Horizontaler Abstand zur Auflage', calculatedTitle: 'Für dich berechnet', calculatedBase: 'Echter Fußabstand', calculatedBaseHelp: 'aus diesen beiden Maßen', calculatedLength: 'Leiterlänge', calculatedLengthHelp: 'für diese Höhe und diesen Abstand', calculatedHeight: 'Erreichbare Höhe', calculatedHeightHelp: 'mit dieser Leiter und diesem Abstand', diagramTitle: 'Geometrie des Ergebnisses', angleTitle: 'Winkel', angleGuide: 'Seitenansicht mit Leiter, Auflage, Zielhöhe und 1:4-Referenz', reachTitle: 'Vertikale Reichhöhe', reachHelp: 'Höhe an der Auflage', targetTitle: 'Zielhöhe', targetHelp: 'gewünschte Höhe', guideDistanceTitle: '1:4-Abstand für die Höhe', guideDistanceHelp: 'Zielhöhe ÷ 4', requiredLengthTitle: 'Mindestlänge bei 1:4', requiredLengthHelp: 'für die Zielhöhe', verdictReach: 'Die Leiter erreicht die Höhe', verdictShort: 'Die Leiter erreicht die Höhe nicht', verdictReachHelp: 'Die vertikale Reichhöhe erreicht oder übertrifft die Zielhöhe.', verdictShortHelp: 'Du brauchst mehr Länge oder eine andere Geometrie.', angleTooFlat: 'Flacher als die Referenz', angleWithinGuide: 'Nahe an der 1:4-Referenz', angleTooSteep: 'Steiler als die Referenz', ladderLabel: 'Leiter', wallLabel: 'Auflage', targetLabel: 'Ziel', baseLabel: 'Fußabstand', groundLabel: 'Boden', guideLabel: '1:4-Referenz', invalidPositive: 'Gib zwei positive Maße ein.', invalidBase: 'Der Fußabstand muss kleiner als die Leiterlänge sein.', invalidTarget: 'Die Zielhöhe muss kleiner als die Leiterlänge sein.', warning: 'Nur Geometrie. Beachte Leiterkennzeichnung und Herstellerangaben.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
