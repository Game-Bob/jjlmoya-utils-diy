import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'zweitakt-gemischrechner';
const title = 'Zweitakt Gemischrechner: Präzise Öl und Kraftstoff Verhältnisse';
const description = 'Berechnen Sie sofort präzise 2-Takt-Mischungsverhältnisse. Unverzichtbares Werkzeug für Motorsägen, Mofas, Motorräder und Kleinmotoren. Unterstützt 1:25, 1:33, 1:40 und 1:50.';

const faqData = [
  {
    question: 'Was ist ein Zweitaktmotor?',
    answer: 'Ein Zweitaktmotor kombiniert Ansaugen und Verdichten in zwei Kolbenhüben, was ihn einfacher und leichter als Viertaktmotoren macht. Sie treiben Motorsägen, Laubbläser, Mofas und einige Motorräder an. Sie benötigen zur Schmierung Öl, das dem Kraftstoff beigemischt wird.',
  },
  {
    question: 'Was sind gängige Kraftstoff-Öl-Mischungsverhältnisse?',
    answer: 'Gängige Verhältnisse sind 1:25 (fett, schützend), 1:33 (ältere Geräte), 1:40 (Standard) und 1:50 (mager, moderne Motoren). Prüfen Sie das Handbuch Ihres Motors – ein falsches Verhältnis kann den Motor beschädigen.',
  },
  {
    question: 'Was passiert bei falschem Mischungsverhältnis?',
    answer: 'Zu viel Öl (fettes Gemisch) führt zu übermäßiger Rauchentwicklung, verrußten Zündkerzen und schlechter Leistung. Zu wenig Öl (mageres Gemisch) führt zum Kolbenfresser, Kolbenschäden und Motorausfall.',
  },
  {
    question: 'Welches Öl soll ich verwenden?',
    answer: 'Verwenden Sie Zweitaktöl, das für Ihr Gerät zugelassen ist. Hochwertige synthetische Zweitaktöle bieten besseren Schutz und verbrennen sauberer als herkömmliche Öle. Verwenden Sie niemals Viertaktöl – es führt zu Motorschäden.',
  },
  {
    question: 'Wie mische ich Kraftstoff und Öl?',
    answer: 'Gießen Sie einen Teil des Benzins in einen sauberen Behälter, geben Sie die berechnete Menge Öl hinzu und füllen Sie das restliche Benzin auf. Mischen Sie gründlich durch 1-2 Minuten langes Schütteln. Beschriften Sie den Behälter mit dem Mischdatum.',
  },
];

const howToData = [
  { name: 'Verhältnis kennen', text: 'Suchen Sie das Handbuch Ihres Motors oder die Gerätedokumentation. Gängige Verhältnisse: Motorsägen (1:40 oder 1:50), Mofas (1:33), ältere Motorräder (1:25). Ein falsches Verhältnis schadet dem Motor.' },
  { name: 'Kraftstoffmenge messen', text: 'Entscheiden Sie, wie viel Benzin Sie benötigen. Dieses Tool verarbeitet Liter, Gallonen oder jede Volumeneinheit. Genaue Kraftstoffmessung = genaue Ölmenge.' },
  { name: 'Ölbedarf berechnen', text: 'Geben Sie Kraftstoffmenge und Verhältnis ein. Dieser Rechner zeigt genau, wie viel Öl (in ml oder Litern) Sie für eine perfekte Mischung benötigen.' },
  { name: 'Sorgfältig mischen', text: 'Benzin in einen sauberen Behälter füllen, berechnetes Öl zugeben, dann Restbenzin einfüllen. 1-2 Minuten kräftig schütteln.' },
  { name: 'Beschriften und verwenden', text: 'Behälter mit Datum und Verhältnis markieren. Mischung für beste Ergebnisse innerhalb von 30 Tagen verbrauchen (besonders bei synthetischen Ölen).' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Zweitakt-Gemischrechner: Präzise Öl-Kraftstoff-Verhältnisse für Motorsägen und Mofas', level: 2 },
    { type: 'paragraph', html: 'Zweitaktmotoren benötigen ein präzises Kraftstoff-Öl-Gemisch zum Überleben. Eine falsche Mischung kann Ihren Motor in wenigen Minuten zerstören. Dieser Rechner ermittelt sofort die exakte Ölmenge für Ihre Kraftstoffmenge und Ihren Motortyp – Schluss mit dem Rätselraten in der Werkstatt.' },

    { type: 'title', text: 'Warum Zweitaktmotoren Öl im Kraftstoff benötigen', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'Der entscheidende Unterschied', html: 'Im Gegensatz zu Viertaktmotoren mit separaten Öltanks mischen Zweitaktmotoren das Öl direkt in den Kraftstoff. Bei jedem Arbeitstakt verbrennt der Motor das Gemisch sowohl für Energie als auch zur Schmierung. Es gibt keine Ölwanne, keine separate Ölpumpe – nur das Mischbenzin hält die Kolben am Leben.' },

    { type: 'title', text: 'Schnellreferenz für Zweitakt-Verhältnisse', level: 3 },
    { type: 'table', headers: ['Verhältnis', 'Öl %', 'Einsatzzweck', 'Motortyp', 'Eigenschaften'], rows: [
      ['1:25', '3,85%', 'Maximaler Schutz', 'Geräte vor 1980, Hochlast, Oldtimer-Motorräder', 'Fettes Gemisch: mehr Rauch, mehr Ölkohle, maximaler Schutz gegen Fresser'],
      ['1:33', '2,94%', 'Klassische Geräte', 'Kleinmotoren der 80er-90er, ältere Motorsägen', 'Moderate Fettigkeit: Balance zwischen Schutz und Effizienz'],
      ['1:40', '2,44%', 'Industriestandard', 'Die meisten modernen Sägen, Mofas, moderne Kleinmotoren', 'Standardempfehlung: ausgelegt für heutige synthetische Öle'],
      ['1:50', '1,96%', 'Moderne Effizienz', 'Neueste Motorsägen, Hochleistungsmofas, neue Motorräder', 'Mageres Gemisch: weniger Rauch, saubere Verbrennung, für Premium-Synthetiköle']
    ] },

    { type: 'title', text: 'Folgen falscher Verhältnisse', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Zu viel Öl (Fettes Gemisch)', con: 'Übermäßiger weißer Rauch, verrußte Kerzen, Ölkohlebildung, schlechte Beschleunigung, Motorausfall' },
      { pro: 'Zu wenig Öl (Mageres Gemisch)', con: 'Kolbenfresser binnen Sekunden, riefige Zylinderwände, katastrophaler Motorschaden' },
      { pro: 'Korrektes Verhältnis', con: 'Ruhiger Lauf, ordnungsgemäße Schmierung, optimale Verbrennung, längere Lebensdauer, zuverlässiger Start' }
    ] },

    { type: 'title', text: 'Gängige Geräte-Verhältnisse', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Motorsägen', html: '<strong>Stihl, Husqvarna, Echo:</strong> Moderne Modelle benötigen typischerweise 1:40 oder 1:50. Prüfen Sie immer Ihr Handbuch – 1:25 bei einer modernen Säge riskiert verrußte Kerzen. Ältere Stihl-Maschinen (90er und früher) können 1:25 oder 1:33 vorschreiben.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Mofas & Motorräder', html: '<strong>Vespa, Honda, Yamaha:</strong> Die meisten benötigen 1:33 bei älteren Modellen, 1:40–1:50 bei modernen Versionen. Hochleistungs-Mofas und Straßenmaschinen schreiben oft 1:50 vor. Das Werkstatthandbuch ist die einzige Wahrheit.' },
    { type: 'card', icon: 'mdi:tools', title: 'Laubbläser & Trimmer', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Typischerweise 1:50 (modern) oder 1:40 (etwas älter). Diese Geräte sind für kurzen saisonalen Einsatz konzipiert, magere Mischungen sparen Rauch ohne Zuverlässigkeitsverlust.' },

    { type: 'title', text: 'Ölsorte ist so wichtig wie das Verhältnis', level: 3 },
    { type: 'comparative', items: [
      { title: 'Mineralisches Zweitaktöl', description: 'Günstige Option für gelegentliche Nutzung. Höherer Aschegehalt, mehr Rauch, ausreichender Schutz für Standardverhältnisse.', icon: 'mdi:beaker', points: ['Günstiger Preis', 'Sichtbarer Rauch', 'Höhere Ablagerungen', 'Gut für 1:40 Verhältnisse'] },
      { title: 'Synthetisches Zweitaktöl', description: 'Premium-Wahl für Vielnutzer. Sauberere Verbrennung, besserer Schutz, ermöglicht magerere Mischungen. Temperaturstabil.', icon: 'mdi:flame', points: ['Geringere Rauchentwicklung', 'Bester Motorschutz', 'Ermöglicht sicheres 1:50', 'Längere Lagerstabilität'], highlight: true },
      { title: 'Teilsynthetisches Öl', description: 'Mittelweg zwischen mineralisch und vollsynthetisch. Guter Schutz bei moderaten Kosten. Oft von Herstellern empfohlen.', icon: 'mdi:beaker-outline', points: ['Ausgewogene Leistung', 'Moderate Kosten', 'Gut für 1:40 Verhältnisse', 'Weniger Rauch als mineralisch'] }
    ], columns: 3 },

    { type: 'title', text: 'Schritt-für-Schritt Mischvorgang', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'Der richtige Weg zum Mischen', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Verwenden Sie einen speziellen Behälter</strong> nur für Kraftstoffmischungen. Sauber, trocken, markiert.</li><li><strong>Gießen Sie zuerst die Hälfte des Benzins</strong> ein.</li><li><strong>Geben Sie die berechnete Ölmenge zu</strong> (nutzen Sie diesen Rechner für Präzision).</li><li><strong>Füllen Sie das restliche Benzin auf</strong>, um die Zielmenge zu erreichen.</li><li><strong>Schütteln Sie kräftig für 1–2 Minuten</strong>, bis die Farbe gleichmäßig ist. Ein homogenes Gemisch = gleichmäßige Schmierung.</li><li><strong>Beschriften Sie den Behälter</strong> mit Datum, Verhältnis und Kraftstoffart.</li><li><strong>Innerhalb von 30 Tagen verbrauchen</strong> (Synthetiköle halten bis zu 60 Tage).</li></ol>' },

    { type: 'title', text: 'Wann Sie das Handbuch infrage stellen sollten', level: 3 },
    { type: 'tip', html: '<strong>Prüfen Sie immer zuerst das Verhältnis im Gerätehandbuch.</strong> Wenn Sie es nicht finden, besuchen Sie die Website des Herstellers oder kontaktieren Sie den Support. Niemals raten – ein falsches Verhältnis führt zum Erlöschen der Garantie und riskiert einen Motorschaden.' },

    { type: 'title', text: 'Glossar: Zweitakt-Begriffe erklärt', level: 3 },
    { type: 'glossary', items: [
      { term: 'Mageres Gemisch', definition: 'Kraftstoff mit zu wenig Öl (hohes Verhältnis wie 1:50). Gefahr von Kolbenfressern durch mangelnde Schmierung.' },
      { term: 'Fettes Gemisch', definition: 'Kraftstoff mit zu viel Öl (niedriges Verhältnis wie 1:25). Verursacht Rauch, verrußte Kerzen und Ablagerungen.' },
      { term: 'Homogenes Gemisch', definition: 'Gleichmäßige Mischung von Benzin und Öl, erreicht durch gründliches Schütteln. Lebenswichtig für Schmierung und Verbrennung.' },
      { term: 'Kolbenfresser', definition: 'Wenn der Kolben im Zylinder aufgrund mangelnder Schmierung und Reibung festbrennt. Führt zum totalen Motorschaden.' },
      { term: 'Synthetiköl', definition: 'Laborformuliertes Öl für überlegenen Schutz, sauberere Verbrennung und Temperaturstabilität im Vergleich zu Mineralölen.' },
      { term: 'Zweitaktmotor', definition: 'Motor, der den Verbrennungszyklus in zwei Kolbenbewegungen abschließt. Leichter und einfacher als Viertaktmotoren.' },
      { term: 'Viertaktmotor', definition: 'Motor mit separatem Ölkreislauf und vier Arbeitstakten. Öl wird nicht dem Kraftstoff beigemischt. Schwerer, aber effizienter.' }
    ] },

    { type: 'title', text: 'Wie dieser Rechner Zeit & Geld spart', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Genaue Berechnungen, keine Messfehler', icon: 'mdi:check-circle' },
      { value: 'Sofort', label: 'Exakte Mengen in Sekunden statt Schätzen', icon: 'mdi:flash' },
      { value: '4 Ratios', label: '1:25, 1:33, 1:40, 1:50 abgedeckt', icon: 'mdi:counter', trend: { value: 'Plus eigene Verhältnisse', positive: true } },
      { value: 'Teilbar', label: 'Teilen Sie Ihr Misch-Setup per URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Häufige Fehler, die Motoren töten', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Viertaktöl in Zweitaktmotoren verwenden', icon: 'mdi:alert', badge: 'Motortod', html: 'Viertaktöle sind für die Zirkulation im Motorblock gedacht. Im Zweitakter verbrennen sie nicht sauber und zerstören den Motor binnen Stunden.' },
    { type: 'diagnostic', variant: 'warning', title: 'Gründliches Mischen vergessen', icon: 'mdi:alert', badge: 'Fresser-Risiko', html: 'Wenn sich Öl und Benzin trennen, laufen Teile Ihres Motors ohne Schmierung. Mindestens 1–2 Minuten lang kräftig schütteln.' },
    { type: 'diagnostic', variant: 'warning', title: 'Alten Kraftstoff verwenden (über 60 Tage)', icon: 'mdi:alert', badge: 'Verharzungsgefahr', html: 'Ethanol-Benzin zersetzt sich mit der Zeit. Alte Mischung hinterlässt Harzablagerungen im Vergaser. Nur mischen, was in 30 Tagen verbraucht wird.' },

    { type: 'title', text: 'FAQ Zusammenfassung', level: 3 },
    { type: 'summary', title: 'Vor dem Mischen', items: [
      'Prüfen Sie das Handbuch auf das exakte Verhältnis – das ist die Vorgabe des Herstellers.',
      'Sicherstellen, dass Sie Zweitaktöl verwenden, kein Viertakt- oder sonstiges Öl.',
      'Verwenden Sie einen sauberen, speziellen Behälter nur zum Mischen.',
      'Frisches Benzin (nicht monatelang gelagert) und passendes Öl verwenden.',
      'Gründlich mischen und mit Datum, Verhältnis und Kraftstoffart beschriften.',
      'Mischung innerhalb von 30 Tagen verbrauchen.'
    ] },
  ],
  ui: {
    titleMain: 'Zweitakt-Gemischrechner',
    labelFuelVolume: 'Kraftstoffmenge',
    labelRatio: 'Mischungsverhältnis',
    labelOilRequired: 'Ölbedarf',
    labelTotalMixture: 'Gesamtgemisch',
    labelRichness: 'Gemisch-Fettigkeit',
    labelPresets: 'Gängige Verhältnisse',
    labelCustomRatio: 'Eigener Wert (1:X)',
    btnClear: 'Leeren',
    btnCopyResults: 'Ergebnisse kopieren',
    btnSwitchMode: 'Modus wechseln',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Mager (weniger Öl, Fresser-Risiko)',
    richBalanced: 'Ausgewogen (Standard-Mix)',
    richRich: 'Fett (mehr Öl, mehr Rauch, Motorschutz)',
    msgReady: 'Bereit',
    msgMixtureReady: 'Gemisch berechnet',
    tooltipFuelVolume: 'Geben Sie die Benzinmenge in Litern ein',
    tooltipRatio: 'Geben Sie den Wert als 25, 33, 40 oder 50 ein (für 1:25, 1:33 etc.)',
    recipientLabel: 'Mischbehälter',
    oilPercentage: 'Öl %',
    labelVolume: 'Volumen',
    labelRatioShort: 'Verhältnis',
    labelOilTip: '2% Öl-Mix = 1:50 Verhältnis',
    labelMixingTips: 'Tipps zum Mischen',
    labelMixingTipsDesc: 'In sauberem Behälter mischen – erst Benzin, dann Öl, dann Restbenzin. 1-2 Minuten kräftig schütteln. Mit Datum und Verhältnis beschriften.',
    recipePrefix: 'Für',
    recipeAt: 'Benzin bei',
    recipeAdd: 'fügen Sie genau',
    recipeOfOil: 'Zweitaktöl hinzu.',
    copyTextPrefix: '2-Takt Mix',
    copyTextFuel: 'Benzin',
    copyTextOil: 'Öl',
  },
};
