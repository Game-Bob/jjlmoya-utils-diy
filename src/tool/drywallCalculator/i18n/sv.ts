import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'gipsskivor-kalkylator';
const title = 'Gipsskivor Kalkylator: Regelverk, Skivor och Spackel';
const description = 'Professionell materialkalkylator for innervaggar och stålregelverk. Berakna exakt antal gipsskivor, stålreglar, skenor, skruv, skarvremsa och spackel.';

const faqData = [
  {
    question: 'Hur beraknar jag hur manga gipsskivor som behovsk till en innervagg?',
    answer: 'Multiplicera vaggens langd med takhojden for att fa vaggarean. For dubbelsidiga vaggar multiplicerar du med 2; for dubbla skivlager pa bada sidor multiplicerar du med 4. Dela den totala arean med ytan for en skiva (2.88 m2 for skiva 120x240 cm) och lagg till 10% spillmarginal.',
  },
  {
    question: 'Nar ska jag valja regelavstand 40 cm eller 60 cm (cc 45/60)?',
    answer: 'Standard avstand cc 60 cm passar vanliga torra innervaggar upp till 3,0 m hojd. Anvand cc 40 cm vid kakelsattning, i vatrum (badrum, kok), vid ljudisolerande vaggar eller hojder over 3,0 meter.',
  },
  {
    question: 'Vilken typ av gipsskiva ska valjas per utrymme?',
    answer: 'Anvand Standard Vit (Typ A) for bostadsrum; Humid/Vatrum Gron (Typ H1) for badrum; Brand/Kombiform Rosa (Typ F) for eldstader; och Ljudskiva Bld for ljuddampning.',
  },
  {
    question: 'Hur manga gipsskruvar kravs per gipsskiva?',
    answer: 'Räkna med ca 30 gipsskruvar (3.5x25 mm) per skiva 120x240 cm vid enkelgips. Skruva med 25 cm avstand langs kanterna och 30 cm pa de mittersta reglarna.',
  },
  {
    question: 'Varfor ar isoleringsband obligatoriskt under skenorna?',
    answer: 'Sjalvhäftande akustikband i polyeten isolerar stålskenorna fran golv och tak, vilket forhindrar stomljud och akustiska lackage.',
  },
];

const howToData = [
  { name: 'Ange Vaggens Mått', text: 'Fyll i vaggens langd och takhojd i meter eller fot.' },
  { name: 'Konfigurera Regelverk och Skivlager', text: 'Valj regelavstand (40 cm eller 60 cm), antal skivlager och enkelsidig/dubbelsidig beplankning.' },
  { name: 'Granska Materialspecifikation och CAD-ritning', text: 'Se komplett materiallista for reglar, skruvar, skarvremsa och spackel samt ritning.' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Teknisk Dimensionering av Stålregelverk och Gipsskivor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att bygga lätta innerväggar med gipsskivor kräver exakt teknisk dimensionering av galvaniserade stålprofiler (vertikala C-reglar och horisontella U-skenor) samt förskjutning av skivskarvar enligt EN 520 för att undvika väggnedböjning och sprickor.',
    },
    {
      type: 'title',
      text: 'Regler for Regelavstand: 40 cm vs 60 cm (cc)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Regelavståndet bestämmer väggens stabilitet och bärförmåga. <strong>Standardavstånd cc 60 cm</strong> anpassas till skivbredd 120 cm. <strong>Cc 40 cm</strong> är obligatoriskt vid tung kakelsättning eller porslinsklinker, vid vägghöjder över 3,0 meter samt i utrymmen med förhöjda ljudisoleringskrav.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Forskjutna Skarvar och Skruvmonster',
      html: '<p>Undvik korsskarvar. Forskjut skivskarvar minst 40 cm. Skruva med 3.5x25 mm skruv med <strong>25 cm avstand pa kanten</strong> och <strong>30 cm pa mitten reglarna</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Spillmarginal och Spackelforbrukning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Räkna alltid med en generös <strong>spillmarginal på 10%</strong> för kapningar vid dörröppningar, fönstersmygar och takanslutningar. För professionell skarvspackling av gipsskivorna (från ytfinishsteg Q1 till Q4) krävs cirka 0,8 kg gipsbaserat skarvspackel per kvadratmeter skivyta samt pappers- eller glasfiberremsa för att undvika alla former av sprickbildning.',
    },
  ],
  ui: {
    unitSystemLabel: 'Måttsystem',
    unitMetric: 'Metrisk (m, cm, kg)',
    unitImperial: 'Imperial (ft, in, lb)',

    paramLengthLabel: 'Vägglängd',
    paramHeightLabel: 'Takhöjd',
    paramSpacingLabel: 'Regelavstånd (cc)',
    paramSpacing40Metric: '40 cm (Hög Belastning)',
    paramSpacing60Metric: '60 cm (Standard)',
    paramSpacing40Imperial: '16 in (Hög Belastning)',
    paramSpacing60Imperial: '24 in (Standard)',
    paramLayersLabel: 'Skivlager',
    paramSingleLayer: 'Enkelgips',
    paramDoubleLayer: 'Dubbelgips',
    paramSidesLabel: 'Sidor Beplankade',
    paramDoubleSided: '2 Sidor (Innervägg)',
    paramSingleSided: '1 Sida (Försettvägg)',
    paramBoardTypeLabel: 'Gipsskivtyp',
    boardTypeStandard: 'Standard (Typ A)',
    boardTypeMoisture: 'Våtrum/Fukt (Typ H1)',
    boardTypeFire: 'Brand (Typ F)',
    boardTypeAcoustic: 'Ljudskiva (Typ A)',
    paramWasteLabel: 'Spillmarginal',

    summaryWallArea: 'Nettoväggarea',
    summaryBoardArea: 'Total Skivarea',

    resBoardsLabel: 'Gipsskivor',
    resBoardsUnit: 'st',
    resStudsLabel: 'Vertikala Stålreglar (C)',
    resStudsUnit: 'st',
    resTracksLabel: 'Horisontella Skenor (U)',
    resTracksUnit: 'längder',
    resDrywallScrewsLabel: 'Gipsskruv',
    resDrywallScrewsUnit: 'st',
    resFramingScrewsLabel: 'Montegipsskruv',
    resFramingScrewsUnit: 'st',
    resJointTapeLabel: 'Skarvremsa',
    resJointTapeUnit: 'längd',
    resJointCompoundLabel: 'Skarvspackel',
    resJointCompoundUnit: 'vikt',
    resAcousticBandLabel: 'Akustikband / Dämpband',
    resAcousticBandUnit: 'längd',

    diagramWallTitle: 'CAD-Ritning Höjdsnitt',
    diagramStudLegend: 'Stålreglar C',
    diagramTrackLegend: 'Skenor U',
    diagramBoardLegend: 'Förskjutna Skivskarvar',
    diagramModeStructure: 'Stålregelverk',
    diagramModeBoard: 'Gipsbeplankning',
  },
};
