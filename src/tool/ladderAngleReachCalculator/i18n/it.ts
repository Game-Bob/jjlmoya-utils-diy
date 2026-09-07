import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'it', slug: 'calcolatore-angolo-e-portata-scala', title: 'Calcolatore di angolo e portata della scala', description: 'Calcola base, angolo e portata di una scala con due misure e confronta il risultato con il riferimento 1:4.', faqTitle: 'Domande frequenti',
  faq: [
    { question: 'Cosa calcola questo strumento?', answer: 'Trasforma due valori tra altezza obiettivo, lunghezza della scala e distanza della base nel terzo valore geometrico. Mostra anche angolo, altezza raggiungibile e riferimento 1:4 separatamente.' },
    { question: 'Perché la base reale può differire dalla base 1:4?', answer: 'Rispondono a domande diverse. Con 3 m di altezza e una scala da 4 m, il triangolo reale dà 2,65 m e 48,6 gradi. Il riferimento 1:4 per 3 m è 0,75 m e richiede almeno 3,09 m di scala.' },
    { question: 'Come raggiungo una altezza di 3 m?', answer: 'Inserisci 3 m come altezza obiettivo e la lunghezza disponibile. Vedrai la geometria reale e, separatamente, la base 1:4 di 0,75 m e la lunghezza minima di circa 3,09 m.' },
    { question: 'Quali sono le tre modalità?', answer: 'Altezza + scala verifica la base reale, altezza + base calcola la lunghezza, scala + base calcola l altezza raggiungibile.' },
    { question: 'Il risultato certifica la sicurezza?', answer: 'No. È solo un controllo geometrico. Segui l etichetta della scala, le istruzioni del produttore e le norme locali.' },
  ],
  howTo: [
    { name: 'Scegli due misure', text: 'Seleziona altezza e scala, altezza e base, oppure scala e base.' },
    { name: 'Inserisci i valori', text: 'Usa lo stesso sistema di unità per entrambi i campi.' },
    { name: 'Leggi la geometria', text: 'Controlla base, angolo e altezza raggiungibile del triangolo.' },
    { name: 'Confronta con 1:4', text: 'Confronta base di riferimento e lunghezza minima prima del posizionamento.' },
  ],
  seo: [
    { type: 'title', text: 'Cosa calcola questo calcolatore per scale', level: 2 },
    { type: 'paragraph', html: 'Usalo quando conosci due misure e devi decidere se una scala raggiunge una altezza, quale base forma il triangolo reale o quale lunghezza serve. Il riferimento 1:4 resta separato dalla geometria effettiva.' },
    { type: 'title', text: 'Geometria reale delle tue misure', level: 3 },
    { type: 'paragraph', html: 'Con <strong>altezza + scala</strong>, la base reale è <code>√(lunghezza² - altezza²)</code>. Con <strong>altezza + base</strong> ottieni la lunghezza; con <strong>scala + base</strong> ottieni l altezza raggiungibile.' },
    { type: 'title', text: 'Riferimento di posizionamento 1:4', level: 3 },
    { type: 'paragraph', html: 'Il riferimento 1:4 mette la base a una unità ogni quattro unità di altezza. Per 3 m sono 0,75 m; la lunghezza minima è circa 3,09 m.' },
    { type: 'title', text: 'Come leggere il risultato', level: 3 },
    { type: 'list', items: ['Un angolo più basso significa che la base è più lontana.', 'Un angolo più alto significa che la base è più vicina.', 'Una scala più lunga del minimo può superare l altezza obiettivo.'] },
    { type: 'tip', title: 'La geometria non è una certificazione di sicurezza', html: 'Controlla scala, superficie, appoggio, carico, accesso e istruzioni del produttore prima dell uso.' },
  ],
  ui: {
    unitSystemLabel: 'Sistema di unità', unitMetric: 'Metrico', unitImperial: 'Imperiale', intro: 'Inserisci due misure. Geometria e riferimento 1:4 restano separati.', solveTitle: 'Scegli due misure', modeHeightLength: 'Altezza + scala', modeHeightBase: 'Altezza + base', modeLengthBase: 'Scala + base', modeHeightLengthHint: 'Controlla la base reale', modeHeightBaseHint: 'Calcola la lunghezza', modeLengthBaseHint: 'Calcola la portata', fieldHeight: 'Altezza obiettivo', fieldLength: 'Lunghezza disponibile', fieldBase: 'Distanza della base', fieldHeightHelp: 'Altezza da raggiungere', fieldLengthHelp: 'Lunghezza della scala', fieldBaseHelp: 'Distanza orizzontale dal supporto', calculatedTitle: 'Calcolato per te', calculatedBase: 'Base reale', calculatedBaseHelp: 'con queste due misure', calculatedLength: 'Lunghezza della scala', calculatedLengthHelp: 'per questa altezza e base', calculatedHeight: 'Altezza raggiungibile', calculatedHeightHelp: 'con questa scala e base', diagramTitle: 'Geometria del risultato', angleTitle: 'Angolo', angleUnit: 'gradi', angleGuide: 'Vista laterale con scala, supporto, altezza obiettivo, base e riferimento 1:4', reachTitle: 'Portata verticale', reachHelp: 'altezza al supporto', targetTitle: 'Altezza obiettivo', targetHelp: 'altezza richiesta', baseTitle: 'Distanza della base', baseHelp: 'distanza orizzontale al suolo', guideDistanceTitle: 'Base 1:4 per l altezza', guideDistanceHelp: 'altezza obiettivo divisa per 4', requiredLengthTitle: 'Lunghezza minima a 1:4', requiredLengthHelp: 'per l altezza obiettivo', verdictReach: 'L altezza è raggiunta', verdictShort: 'L altezza non è raggiunta', verdictReachHelp: 'La portata verticale raggiunge o supera l altezza obiettivo.', verdictShortHelp: 'Serve più lunghezza o una geometria diversa.', angleTooFlat: 'Più bassa del riferimento', angleWithinGuide: 'Vicino al riferimento 1:4', angleTooSteep: 'Più alta del riferimento', ladderLabel: 'scala', wallLabel: 'supporto', targetLabel: 'obiettivo', baseLabel: 'distanza base', groundLabel: 'suolo', guideLabel: 'riferimento 1:4', invalidPositive: 'Inserisci due misure positive.', invalidBase: 'La base deve essere inferiore alla lunghezza della scala.', invalidTarget: 'L altezza obiettivo deve essere inferiore alla lunghezza.', warning: 'Solo geometria. Segui etichetta e istruzioni del produttore.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
