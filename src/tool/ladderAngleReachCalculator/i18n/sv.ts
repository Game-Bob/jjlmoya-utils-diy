import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'sv', slug: 'kalkylator-lutning-och-rackvidd-stege', title: 'Kalkylator för stegens vinkel och räckvidd', description: 'Beräkna stegens avstånd från väggen, vinkel och höjd med två mått och jämför med riktlinjen 1:4.', faqTitle: 'Vanliga frågor',
  faq: [
    { question: 'Vad räknar den här stegekalkylatorn ut?', answer: 'Ange två av målhöjd, steglängd och avstånd till stegfoten för att få det tredje värdet. Du får också vinkel, vertikal räckvidd och en separat 1:4-referens.' },
    { question: 'Varför kan det verkliga avståndet skilja sig från 1:4?', answer: 'De beskriver olika saker. Med 3 m målhöjd och en 4 m stege blir det exakta avståndet 2,65 m. 1:4-referensen för 3 m är 0,75 m och kräver en minsta steglängd på cirka 3,09 m.' },
    { question: 'Hur kontrollerar jag en stege för 3 m höjd?', answer: 'Ange 3 m som målhöjd och den steglängd du har. Resultatet visar det verkliga avståndet och vinkeln samt 1:4-värdena separat.' },
    { question: 'Vad betyder de tre beräkningslägena?', answer: 'Höjd + stege beräknar avståndet till stegfoten, höjd + fot beräknar steglängden och stege + fot beräknar den höjd som kan nås.' },
    { question: 'Garanterar resultatet att stegen är säker?', answer: 'Nej. Det är bara en geometrisk kontroll. Kontrollera stegens märkning, underlaget, stödet, belastningen, åtkomsten och lokala regler.' },
  ],
  howTo: [
    { name: 'Välj två mått', text: 'Välj höjd + stege, höjd + fot eller stege + fot.' },
    { name: 'Ange värdena', text: 'Använd samma enhetssystem i båda fälten.' },
    { name: 'Läs geometrin', text: 'Kontrollera avståndet till foten, vinkeln och räckvidden som dina mått bildar.' },
    { name: 'Jämför med 1:4', text: 'Jämför referensavståndet och den minsta längden innan du bestämmer placeringen.' },
  ],
  seo: [
    { type: 'title', text: 'Det här visar stegekalkylatorn', level: 2 },
    { type: 'paragraph', html: 'Använd kalkylatorn när du känner till två mått och vill veta om stegen når en viss höjd, hur långt foten hamnar från stödet eller vilken längd som behövs. Den verkliga geometrin och 1:4-referensen visas separat.' },
    { type: 'title', text: 'Verklig geometri från dina mått', level: 3 },
    { type: 'paragraph', html: 'Med <strong>höjd + stege</strong> beräknas fotavståndet som <code>√(längd² − höjd²)</code>. Med <strong>höjd + fot</strong> beräknas steglängden och med <strong>stege + fot</strong> den nåbara höjden.' },
    { type: 'title', text: 'Riktlinjen 1:4', level: 3 },
    { type: 'paragraph', html: '1:4 innebär att stegfoten placeras en enhet ut för varje fyra höjdenheter. För 3 m blir referensavståndet 0,75 m och den minsta längden cirka 3,09 m.' },
    { type: 'title', text: 'Så tolkar du resultatet', level: 3 },
    { type: 'list', items: ['En flackare vinkel betyder att foten står längre från stödet.', 'En brantare vinkel betyder att foten står närmare stödet.', 'En stege som är längre än minimum kan sticka upp över målhöjden.'] },
    { type: 'tip', title: 'Geometri är inget säkerhetsintyg', html: 'Kontrollera stegen, underlaget, stödet, belastningen, utrymmet och tillverkarens instruktioner före användning.' },
  ],
  ui: {
    unitSystemLabel: 'Enhetssystem', unitMetric: 'Metriskt', unitImperial: 'Imperialt', intro: 'Ange två mått. Den verkliga geometrin och 1:4-referensen visas separat.', solveTitle: 'Välj två mått', modeHeightLength: 'Höjd + stege', modeHeightBase: 'Höjd + fot', modeLengthBase: 'Stege + fot', modeHeightLengthHint: 'Kontrollera verkligt fotavstånd', modeHeightBaseHint: 'Beräkna steglängden', modeLengthBaseHint: 'Beräkna räckvidden', fieldHeight: 'Målhöjd', fieldLength: 'Tillgänglig steglängd', fieldBase: 'Avstånd från stöd till fot', fieldHeightHelp: 'Höjden du behöver nå', fieldLengthHelp: 'Stegens längd', fieldBaseHelp: 'Horisontellt avstånd på marken', calculatedTitle: 'Beräknat åt dig', calculatedBase: 'Verkligt fotavstånd', calculatedBaseHelp: 'från de här två måtten', calculatedLength: 'Steglängd', calculatedLengthHelp: 'för den här höjden och foten', calculatedHeight: 'Nåbar höjd', calculatedHeightHelp: 'med den här stegen och foten', diagramTitle: 'Resultatets geometri', angleTitle: 'Vinkel', angleUnit: '°', angleGuide: 'Sidovy som visar stege, stöd, målhöjd, fotavstånd och 1:4-referens', reachTitle: 'Vertikal räckvidd', reachHelp: 'höjd vid stödet', targetTitle: 'Målhöjd', targetHelp: 'önskad höjd', baseTitle: 'Fotavstånd', baseHelp: 'horisontellt avstånd på marken', guideDistanceTitle: '1:4-fot för målet', guideDistanceHelp: 'målhöjd ÷ 4', requiredLengthTitle: 'Minsta längd vid 1:4', requiredLengthHelp: 'för målhöjden', verdictReach: 'Målet kan nås', verdictShort: 'Den här uppställningen når inte målet', verdictReachHelp: 'Den vertikala räckvidden motsvarar eller överstiger målhöjden.', verdictShortHelp: 'Välj en längre stege eller annan geometri bara om den slutliga uppställningen fortfarande är lämplig.', angleTooFlat: 'Flackare än riktlinjen', angleWithinGuide: 'Nära 1:4-riktlinjen', angleTooSteep: 'Brantare än riktlinjen', ladderLabel: 'stege', wallLabel: 'stöd', targetLabel: 'mål', baseLabel: 'fotavstånd', groundLabel: 'mark', guideLabel: '1:4-riktlinje', invalidPositive: 'Ange två positiva mått.', invalidBase: 'Fotavståndet måste vara mindre än steglängden.', invalidTarget: 'Målhöjden måste vara mindre än steglängden.', warning: 'Endast geometri. Följ stegens märkning och tillverkarens instruktioner.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
