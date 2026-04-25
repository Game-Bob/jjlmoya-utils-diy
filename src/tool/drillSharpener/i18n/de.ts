import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'bohrer-schleifen-meister';
const title = 'Bohrer Schleifen Meister: Präzisionslehre';
const description = 'Interaktive Anleitung zum Schleifen von HSS-Bohrern. Digitale Lehre zur Überprüfung von 118°- und 135°-Winkeln. Berechnet Drehzahlen und diagnostiziert Schnittfehler.';

const faqData = [
  {
    question: 'Kann ich den Bohrer direkt auf den Bildschirm legen?',
    answer: 'Ja, das Tool ist so konzipiert, dass Sie den Bohrerschaft auf die Mittellinie der digitalen Lehre legen können, um die Symmetrie der Schneidlippen direkt zu überprüfen.',
  },
  {
    question: 'Woher weiß ich, ob der Freiwinkel korrekt ist?',
    answer: 'Wenn Sie den Bohrer drehen, muss der hintere Teil der Schneide sichtbar tiefer liegen. Wenn das Metall an der gesamten Spitze gleichmäßig glänzt, fehlt der Hinterschliff.',
  },
  {
    question: 'Welche Drehzahl sollte ich nach dem Schleifen verwenden?',
    answer: 'Das hängt vom Durchmesser ab; unser integrierter Rechner gibt Ihnen den genauen Wert basierend auf dem Material, das Sie im ersten Schritt ausgewählt haben.',
  },
  {
    question: 'Was ist der Unterschied zwischen HSS und Hartmetall?',
    answer: 'HSS (Hochleistungsschnellstahl) ist günstiger und stoßfester. Hartmetall hält höhere Geschwindigkeiten aus, ist aber spröder. Für manuelles Schleifen ist HSS der Standard.',
  },
  {
    question: 'Benötige ich eine spezielle Ausrüstung zum Schleifen?',
    answer: 'Ein rotierender Schleifstein mit mittlerer Körnung (120-150) ist ausreichend. Wichtig ist, dass der Stein ausgewuchtet und plan ist, um konsistente Ergebnisse zu erzielen.',
  },
];

const howToData = [
  { name: 'Material wählen', text: 'Wählen Sie das Metall oder Material, das Sie bohren möchten, um den Zielwinkel und die Schnittgeschwindigkeit festzulegen.' },
  { name: 'Symmetrie prüfen', text: 'Legen Sie den Bohrer auf den Bildschirm und stellen Sie sicher, dass beide Schneidlippen mit den blauen Linien übereinstimmen.' },
  { name: 'Rücken prüfen', text: 'Überprüfen Sie visuell, ob der hintere Teil der Schneide das Werkstück nicht berührt (Freiwinkel).' },
  { name: 'Drehzahl berechnen', text: 'Geben Sie den Durchmesser ein und stellen Sie Ihre Bohrmaschine auf die für das gewählte Material empfohlene Geschwindigkeit ein.' },
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Bohrer-Schleifen Meister: Professionelle Technik', level: 2 },
    { type: 'paragraph', html: 'Das Schleifen von Bohrern ist eine der wertvollsten Fähigkeiten in jeder Werkstatt. Ein korrekt geschliffener Bohrer verbessert die Qualität der Bohrung, schont die Lebensdauer Ihrer Elektrowerkzeuge und gewährleistet die Sicherheit des Bedieners.' },
    { type: 'title', text: 'Die Säulen des Schleifens: Spitzenwinkel', level: 3 },
    { type: 'paragraph', html: 'Der Spitzenwinkel definiert, wie der Bohrer das Material angreift. Standardwinkel sind 118° für weiche Stähle, 135° für Edelstahl und 140° für harte Stähle. Jedes Material erfordert einen anderen Winkel, um die Penetration zu maximieren, ohne die Festigkeit zu beeinträchtigen.' },
    { type: 'title', text: 'Häufig vergessen: Der Freiwinkel', level: 3 },
    { type: 'paragraph', html: 'Der häufigste Fehler besteht darin, den Freiwinkel oder Hinterschliff zu ignorieren. Wenn die Rückseite der Schneide flach ist, reibt der Bohrer lediglich und erzeugt extreme Hitze. Die Lösung besteht darin, den hinteren Teil der Lippe leicht abzusenken.' },
  ],
  ui: {
    labelMaterial: 'Arbeitsmaterial',
    matSteel: 'Stahl',
    matInox: 'Inox',
    matHard: 'Hart',
    matBrass: 'Messing',
    matPlastic: 'Kunststoff',
    matWood: 'Holz',
    labelDiameter: 'Bohrerdurchmesser (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Geschwindigkeit',
    unitRpm: 'U/min',
    labelCooling: 'Schnitt',
    btnDiagnosis: 'Schneidet nicht gut? Diagnose',
    diagTitle: 'Fehlerdiagnose',
    diagClose: 'Schließen',
    diagIssue1: '1. Raucht und geht nicht durch',
    diagIssue1Desc: 'Freiwinkel fehlt. Das Metall hinter der Schneide reibt am Werkstück. Schleifen Sie die Rückseite ab, sodass die Schneidlippe der höchste Punkt ist.',
    diagIssue2: '2. Loch exzentrisch oder zu groß',
    diagIssue2Desc: 'Spitze ist nicht zentriert. Die Schneidlippen haben unterschiedliche Längen. Stellen Sie sicher, dass die Spitze genau die Mitte der Lehre berührt.',
    diagIssue3: '3. Schneiden verbrannt (blau)',
    diagIssue3Desc: 'Zu hohe Geschwindigkeit. Überprüfen Sie die RPM-Berechnung des Werkzeugs für diesen Durchmesser und dieses Material.',
    gaugeInstruction: 'SCHAFT AN DER VERTIKALEN LINIE ANLEGEN',
  },
};
