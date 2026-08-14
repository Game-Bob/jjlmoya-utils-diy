import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'drywall-calculator';
const title = 'Drywall and Plasterboard Calculator: Studs, Tracks and Boards';
const description = 'Professional bill of materials calculator for drywall partitions and wall linings. Accurately estimate plasterboard sheets, C-studs, U-tracks, screws, joint tape, and filler compound.';

const faqData = [
  {
    question: 'How do I calculate how many plasterboard sheets I need for a partition wall?',
    answer: 'Calculate total wall surface by multiplying partition length by ceiling height. For double-sided partitions, multiply this area by 2. For double-layer cladding on both sides, multiply by 4. Divide total cladding area by standard sheet coverage (2.4 m² for a standard 120x200 cm board, or 32 sq ft for a 4x8 ft board) and add a 10% allowance for cuts, window openings, and doorways.',
  },
  {
    question: 'Should I use 40 cm (16 in) or 60 cm (24 in) stud spacing for drywall framing?',
    answer: 'Standard 60 cm (24 in) C-stud spacing is suitable for standard dry residential interior partitions up to 3.0 meters (10 ft) high. Switch to 40 cm (16 in) stud centers for wall surfaces receiving heavy ceramic tiles, damp environments (bathrooms and kitchens), multi-layer acoustic installations, or partition heights exceeding 3.0 meters to ensure structural rigidity.',
  },
  {
    question: 'Which plasterboard type should I select for each interior application?',
    answer: 'Use Standard White (Type A) for general residential bedrooms and living areas; Moisture-Resistant Hydro Green (Type H1) for bathrooms, laundries, and kitchens; Fire-Resistant Pink (Type F) around chimneys, boiler rooms, and party walls; and High-Density Acoustic Blue for soundproofing partitions between rooms.',
  },
  {
    question: 'How many screws are required per plasterboard sheet?',
    answer: 'Estimate approximately 30 self-drilling drywall screws (3.5x25 mm or 1-1/4 in) per standard 120x200 cm sheet for single-layer installations. Fasten screws at 25 cm intervals along perimeters and 30 cm along intermediate vertical C-studs. For double-layer cladding, use 3.5x35 mm screws for the outer layer.',
  },
  {
    question: 'Why is acoustic perimeter sealing tape mandatory under top and bottom tracks?',
    answer: 'Self-adhesive polyethylene acoustic tape creates a resilient acoustic break between metal U-tracks and floor or ceiling slabs. This uncouples structural vibration, prevents impact noise flanking paths, and ensures airtight thermal and acoustic perimeter sealing.',
  },
];

const howToData = [
  { name: 'Enter Wall Dimensions', text: 'Specify the total partition length and ceiling height in meters or feet.' },
  { name: 'Configure Framing & Cladding Layers', text: 'Select 40 cm (16 in) or 60 cm (24 in) stud centers, single vs double board layers, and single or double-sided cladding.' },
  { name: 'Review Takeoff & CAD Layout', text: 'Inspect the complete material bill (studs, tracks, screws, tape, joint compound) and visual framing diagram.' },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Engineering Principles of Light Gauge Steel Drywall Framing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Constructing lightweight interior partition walls requires rigorous structural sizing of light gauge galvanised steel profiles (vertical C-studs and horizontal U-track runner rails) alongside board joint layout. According to international standards such as EN 520 and ASTM C840, proper framing centers and board staggering prevent structural deflection, joint shear cracking, and sound transmission.',
    },
    {
      type: 'title',
      text: 'Stud Spacing Rules: 40 cm (16 in) vs 60 cm (24 in) Centers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selecting the optimal stud spacing determines the flexural rigidity and load-bearing capacity of the partition. Standard <strong>60 cm (24 in) stud centers</strong> match standard 120 cm (48 in) board widths, ensuring vertical joints rest centered over steel flanges. However, <strong>40 cm (16 in) stud centers</strong> are mandatory whenever heavy ceramic wall tiles are installed over boards, when partition heights exceed 3.0 meters (10 ft), or in high-impact commercial environments.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Joint Staggering and Screw Fastening Patterns',
      html: '<p>Never align vertical or horizontal plasterboard seams between adjacent courses or opposite sides of a partition wall. Stagger vertical end joints by at least 40 cm to eliminate continuous stress lines that cause crack propagation. Fasten boards with self-drilling 3.5x25 mm drywall screws spaced <strong>25 cm along perimeters</strong> and <strong>30 cm along intermediate studs</strong>, driving screw heads slightly below the paper face without tearing the protective liner.</p>',
    },
    {
      type: 'title',
      text: 'Material Wastage Allowances & Joint Compound Estimation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Always include a minimum <strong>10% wastage margin</strong> for metal profiles and plasterboard sheets to account for cut-offs around window openings, doorways, and sloped soffits. Joint treatment requires approximately 0.8 kg (1.6 lb) of ready-mixed or setting-type joint compound per square meter of board surface, combined with high-tensile paper joint tape to reinforce recessed board edges.',
    },
  ],
  ui: {
    unitSystemLabel: 'Measurement System',
    unitMetric: 'Metric (m, cm, kg)',
    unitImperial: 'Imperial (ft, in, lb)',

    paramLengthLabel: 'Wall Length',
    paramHeightLabel: 'Wall Height',
    paramSpacingLabel: 'Stud Spacing',
    paramSpacing40Metric: '40 cm (High Load)',
    paramSpacing60Metric: '60 cm (Standard)',
    paramSpacing40Imperial: '16 in (High Load)',
    paramSpacing60Imperial: '24 in (Standard)',
    paramLayersLabel: 'Plasterboard Layers',
    paramSingleLayer: 'Single Layer',
    paramDoubleLayer: 'Double Layer',
    paramSidesLabel: 'Cladding Sides',
    paramDoubleSided: 'Both Sides (Partition)',
    paramSingleSided: 'Single Side (Lining)',
    paramBoardTypeLabel: 'Plasterboard Type',
    boardTypeStandard: 'Standard (Type A)',
    boardTypeMoisture: 'Hydro (Type H1)',
    boardTypeFire: 'Fire (Type F)',
    boardTypeAcoustic: 'Acoustic (Type A)',
    paramWasteLabel: 'Wastage Margin',

    summaryWallArea: 'Partition Net Area',
    summaryBoardArea: 'Total Board Area',

    resBoardsLabel: 'Plasterboard Sheets',
    resBoardsUnit: 'sheets',
    resStudsLabel: 'Vertical Stud Profiles',
    resStudsUnit: 'pieces',
    resTracksLabel: 'Horizontal Track Rails',
    resTracksUnit: 'lengths',
    resDrywallScrewsLabel: 'Drywall Screws',
    resDrywallScrewsUnit: 'screws',
    resFramingScrewsLabel: 'Metal Screws',
    resFramingScrewsUnit: 'screws',
    resJointTapeLabel: 'Joint Tape',
    resJointTapeUnit: 'length',
    resJointCompoundLabel: 'Joint Compound',
    resJointCompoundUnit: 'weight',
    resAcousticBandLabel: 'Acoustic Perimeter Tape',
    resAcousticBandUnit: 'length',

    diagramWallTitle: 'CAD Architectural Elevation',
    diagramStudLegend: 'C-Stud Profiles',
    diagramTrackLegend: 'U-Track Rails',
    diagramBoardLegend: 'Board Staggering Pattern',
    diagramModeStructure: 'Steel Frame',
    diagramModeBoard: 'Board Layout',
  },
};
