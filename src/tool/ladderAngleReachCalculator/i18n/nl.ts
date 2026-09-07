import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'nl', slug: 'ladderhoek-en-bereik-calculator', title: 'Ladderhoek en bereikcalculator', description: 'Bereken met twee metingen de afstand, hoek en hoogte van een ladder en vergelijk met de 1:4-opstelrichtlijn.', faqTitle: 'Veelgestelde vragen', faq: [
    { question: 'Wat berekent deze laddercalculator?', answer: 'Op basis van twee waarden voor doelhoogte, ladderlengte en voetafstand berekent hij de derde geometrische waarde. Ook toont hij de hoek, het bereik en de 1:4-referentie apart.' },
    { question: 'Waarom kan de echte voetafstand verschillen van 1:4?', answer: 'Ze beantwoorden verschillende vragen. Bij 3 m hoogte en een ladder van 4 m is het echte driehoekspunt 2,65 m en 48,6°. De 1:4-referentie voor 3 m is 0,75 m en vereist minimaal 3,09 m ladder.' },
    { question: 'Hoe bereik ik een hoogte van 3 m?', answer: 'Voer 3 m als doelhoogte en de beschikbare ladderlengte in. Je ziet de echte geometrie en apart de 1:4-afstand van 0,75 m en de minimale lengte van ongeveer 3,09 m.' },
    { question: 'Wat zijn de drie standen?', answer: 'Hoogte + ladder controleert de echte voetafstand, hoogte + voet berekent de ladderlengte en ladder + voet berekent de bereikbare hoogte.' },
    { question: 'Garandeert de uitkomst veilig gebruik?', answer: 'Nee. Dit is alleen een geometrische controle. Volg het ladderlabel, de fabrikant en lokale voorschriften.' },
  ],
  howTo: [
    { name: 'Kies twee metingen', text: 'Kies hoogte en ladder, hoogte en voetafstand, of ladder en voetafstand.' },
    { name: 'Vul de waarden in', text: 'Gebruik voor beide velden hetzelfde eenhedensysteem.' },
    { name: 'Lees de geometrie', text: 'Controleer voetafstand, hoek en verticale hoogte van de driehoek.' },
    { name: 'Vergelijk met 1:4', text: 'Vergelijk de richtafstand en minimale lengte voordat je de ladder opstelt.' },
  ],
  seo: [
    { type: 'title', text: 'Wat deze laddercalculator oplost', level: 2 },
    { type: 'paragraph', html: 'Gebruik hem wanneer je twee maten kent en wilt beslissen of een ladder een hoogte bereikt, welke voetafstand de echte driehoek heeft of welke lengte nodig is. De 1:4-richtlijn blijft gescheiden van de echte geometrie.' },
    { type: 'title', text: 'Echte geometrie van je metingen', level: 3 },
    { type: 'paragraph', html: 'Met <strong>hoogte + ladder</strong> is de echte voetafstand <code>√(ladderlengte² − hoogte²)</code>. Met <strong>hoogte + voet</strong> bereken je de ladderlengte; met <strong>ladder + voet</strong> de bereikbare hoogte.' },
    { type: 'title', text: '1:4-opstelrichtlijn', level: 3 },
    { type: 'paragraph', html: 'De 1:4-richtlijn plaatst de voet één eenheid uit voor elke vier eenheden hoogte. Voor 3 m is dat 0,75 m; de minimale ladderlengte is <code>√(3² + 0,75²) = 3,09 m</code>. Een langere ladder kan hoek en bereik veranderen.' },
    { type: 'title', text: 'De uitkomst lezen', level: 3 },
    { type: 'list', items: ['Een vlakkere hoek dan 1:4 betekent dat de voet verder van het steunpunt staat.', 'Een steilere hoek betekent dat de voet dichterbij staat.', 'Een langere ladder kan boven de doelhoogte uitsteken.'] },
    { type: 'tip', title: 'Geometrie is geen veiligheidsbewijs', html: 'Controleer ladder, ondergrond, steun, belasting, toegang en fabrieksinstructies voor gebruik.' },
  ],
  ui: {
    unitSystemLabel: 'Eenhedensysteem', unitMetric: 'Metrisch', unitImperial: 'Imperial', intro: 'Voer twee metingen in. Geometrie en 1:4-referentie blijven apart.', solveTitle: 'Kies twee metingen', modeHeightLength: 'Hoogte + ladder', modeHeightBase: 'Hoogte + voet', modeLengthBase: 'Ladder + voet', modeHeightLengthHint: 'Echte voetafstand controleren', modeHeightBaseHint: 'Ladderlengte berekenen', modeLengthBaseHint: 'Bereikbare hoogte berekenen', fieldHeight: 'Doelhoogte', fieldLength: 'Beschikbare ladderlengte', fieldBase: 'Voetafstand', fieldHeightHelp: 'Hoogte die je wilt bereiken', fieldLengthHelp: 'Lengte van de ladder', fieldBaseHelp: 'Horizontale afstand tot steunpunt', calculatedTitle: 'Voor jou berekend', calculatedBase: 'Echte voetafstand', calculatedBaseHelp: 'met deze twee metingen', calculatedLength: 'Ladderlengte', calculatedLengthHelp: 'voor deze hoogte en voetafstand', calculatedHeight: 'Bereikbare hoogte', calculatedHeightHelp: 'met deze ladder en voetafstand', diagramTitle: 'Geometrie van de uitkomst', angleTitle: 'Hoek', angleGuide: 'Zijaanzicht met ladder, steunpunt, doelhoogte en 1:4-richtlijn', reachTitle: 'Verticaal bereik', reachHelp: 'hoogte bij steunpunt', targetTitle: 'Doelhoogte', targetHelp: 'gevraagde hoogte', guideDistanceTitle: '1:4-voetafstand voor doel', guideDistanceHelp: 'doelhoogte ÷ 4', requiredLengthTitle: 'Minimale lengte bij 1:4', requiredLengthHelp: 'voor de doelhoogte', verdictReach: 'De ladder bereikt de hoogte', verdictShort: 'De ladder bereikt de hoogte niet', verdictReachHelp: 'Het verticale bereik is gelijk aan of groter dan de doelhoogte.', verdictShortHelp: 'Je hebt meer lengte of een andere geometrie nodig.', angleTooFlat: 'Vlakker dan richtlijn', angleWithinGuide: 'Dicht bij 1:4-richtlijn', angleTooSteep: 'Steiler dan richtlijn', ladderLabel: 'ladder', wallLabel: 'steun', targetLabel: 'doel', baseLabel: 'voetafstand', groundLabel: 'grond', guideLabel: '1:4-richtlijn', invalidPositive: 'Voer twee positieve metingen in.', invalidBase: 'De voetafstand moet kleiner zijn dan de ladderlengte.', invalidTarget: 'De doelhoogte moet kleiner zijn dan de ladderlengte.', warning: 'Alleen geometrie. Volg label en instructies van de fabrikant.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
