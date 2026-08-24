import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'aushubvolumen-bodenauflockerungs-rechner';
const title = 'Aushubvolumen Rechner und Bodenauflockerungs Schätzung';
const description = 'Berechnen Sie das Festmaß des Aushubs und schätzen Sie das aufgelockerte Bodenvolumen nach dem Ausheben mit einer sichtbaren Planungsbandbreite für Sand, Mutterboden, Ton und Kies.';

const faq = [
  {
    question: 'Was ist der Unterschied zwischen Festmaß (Bank Volume) und Lockermaß (Loose Volume)?',
    answer: 'Das Festmaß ist das Volumen des Bodens vor dem Aushub im gewachsenen Zustand, berechnet aus Länge, Breite und Tiefe. Das Lockermaß ist der erwartete Raumbedarf nach dem Ausheben inklusive des geschätzten Auflockerungsfaktors für die gewählte Bodenart.',
  },
  {
    question: 'Wie wird das Aushubvolumen berechnet?',
    answer: 'Multiplizieren Sie die Aushublänge mit der Breite und der Tiefe. Ein Aushub von 4 Metern Länge, 3 Metern Breite und 0,5 Metern Tiefe ergibt beispielsweise ein Festmaß von 6 Kubikmetern vor Berücksichtigung der Bodenauflockerung.',
  },
  {
    question: 'Warum benötigt Ton eine breitere Auflockerungsspanne?',
    answer: 'Das Verhalten von Ton hängt stark von Mineralogie, Feuchtigkeit, Dichte und Vorbelastung ab. Dieser Rechner verwendet ein breiteres Planungsband für Ton, da seine Volumenänderung variabler ist als ein rein geometrischer Schnitt vermuten lässt.',
  },
  {
    question: 'Kann dieser Rechner eine geotechnische Bodenuntersuchung ersetzen?',
    answer: 'Nein. Das Ergebnis ist eine Schätzung für Materialtransport und Lagerung. Ziehen Sie bei Fundamenten, Grundwasser, Stützbauwerken, kontaminiertem Boden oder deponiepflichtigem Aushub stets Fachpersonal hinzu.',
  },
];

const howTo = [
  { name: 'Aushubabmessungen eingeben', text: 'Geben Sie Länge, Breite und Tiefe der Baugrube ein. Wechseln Sie bei Bedarf zwischen metrischen und imperialen Einheiten.' },
  { name: 'Nächstgelegenes Bodenprofil wählen', text: 'Wählen Sie Sand, Mutterboden, Ton oder Kies, um die passende Auflockerungsspanne für das Lockermaß anzuwenden.' },
  { name: 'Materiallogistik planen', text: 'Nutzen Sie das Festmaß für die ungestörte Baugrube und die Lockermaß-Spanne für Beladung, Lkw-Transport, Container oder Zwischenlagerung.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq,
  bibliographyTitle: 'Quellen und technische Hinweise',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Zwei Volumina beantworten zwei Fragen auf der Baustelle', level: 2 },
    { type: 'paragraph', html: 'Das <strong>Festmaß</strong> beschreibt die Geometrie des ungestörten Bodens: Länge mal Breite mal Tiefe. Das <strong>Lockermaß</strong> ist der Raum, den das gelockerte Material nach dem Ausheben einnimmt. Die Unterscheidung verhindert, dass Container- oder Transportberechnungen auf falschen Bodenzuständen basieren.' },
    { type: 'title', text: 'Lockermaß-Spanne für die Logistikplanung nutzen', level: 3 },
    { type: 'paragraph', html: 'Wählen Sie das passende Bodenprofil und vergleichen Sie die unteren und oberen Lockermaß-Ergebnisse mit Lkw-Ladekapazitäten, Containergrößen, Haufwerksflächen und Zwischenlagern. Die Spanne ist bewusst variabel dargestellt, da Aushebemethode, Feuchte und Dichte das Ergebnis beeinflussen.' },
    { type: 'tip', title: 'Ein Auflockerungswert ersetzt keine Bodenanalyse', html: 'Tonmineralogie, Grundwasser und Vorbelastung können das Abweichungsverhalten verändern. Für Fundamente, Stützmauern, Altlasten und deponiepflichtiges Material ist eine geotechnische Fachprüfung erforderlich.' },
    { type: 'title', text: 'Annahmen vor der Kapazitätsbestellung prüfen', level: 3 },
    { type: 'paragraph', html: 'Wenn die Bodenart unsicher ist, berechnen Sie den Aushub mit zwei plausiblen Profilen und planen Sie mit dem größeren Logistikergebnis, bis genaue Messwerte vorliegen. Das bietet höhere Sicherheit als eine scheinbar exakte Einzelzahl.' },
  ],
  ui: {
    unitSystemLabel: 'Messsystem',
    unitMetric: 'Metrisch',
    unitImperial: 'Imperial',
    onboarding: 'Geben Sie die Abmessungen des Aushubs ein, wählen Sie das Bodenprofil und nutzen Sie die Ergebnisse für die Aushub- und Transportplanung.',
    dimensionLabel: 'Aushubabmessungen',
    lengthLabel: 'Länge',
    widthLabel: 'Breite',
    depthLabel: 'Tiefe',
    soilLabel: 'Bodenprofil',
    soilSand: 'Sand',
    soilTopsoil: 'Mutterboden',
    soilClay: 'Ton / Lehm',
    soilGravel: 'Kies',
    soilSandBand: '10 bis 15% Auflockerung',
    soilTopsoilBand: '15 bis 25% Auflockerung',
    soilClayBand: '25 bis 40% Auflockerung',
    soilGravelBand: '15 bis 25% Auflockerung',
    bankVolumeLabel: 'Festmaß',
    bankVolumeHelp: 'Ungestörter Boden in der Baugrube',
    looseVolumeLabel: 'Lockermaß',
    looseVolumeHelp: 'Planungsbereich nach dem Ausheben',
    expansionLabel: 'Angewendete Bodenauflockerung',
    expansionHelp: 'Spanne für das gewählte Profil',
    sceneTitle: 'Vom Baugrund zum Haufwerk',
    sceneBank: 'im Boden',
    sceneLoose: 'gelockertes Material',
    sceneGround: 'Gelaendekante',
    sceneCut: 'ausgehobene Baugrube',
    interpretationTitle: 'Anwendung der Ergebnisse.',
    interpretationText: 'Die erste Zahl beschreibt die Grube. Die Spanne beschreibt den zusätzlichen Raumbedarf des gelockerten Bodens.',
    warning: 'Nur für Planungs- und Logistikzwecke. Feuchtigkeit, Dichte und Aushebemethode verändern das tatsächliche Lockermaß. Ersetzt keine geotechnische Baugrunduntersuchung.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'geringe Auflockerung',
    soilStatusMedium: 'mittlere Auflockerung',
    soilStatusHigh: 'hohe Auflockerung',
    soilStatusLabel: 'Planungsband',
  },
};
