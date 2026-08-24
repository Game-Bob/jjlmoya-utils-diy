import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'excavation-volume-soil-swell-calculator';
const title = 'Excavation Volume Calculator and Soil Swell Estimate';
const description = 'Calculate bank excavation volume and estimate loose soil after digging with a visible planning range for sand, topsoil, clay, and gravel.';

const faq = [
  {
    question: 'What is the difference between bank volume and loose volume?',
    answer: 'Bank volume is the volume of soil before it is disturbed, calculated from length, width, and depth. Loose volume is the expected space occupied after excavation, including an estimated expansion allowance for the selected soil profile.',
  },
  {
    question: 'How is excavation volume calculated?',
    answer: 'Multiply excavation length by width and depth. For example, a 4 metre by 3 metre excavation that is 0.5 metres deep has a bank volume of 6 cubic metres before soil expansion is considered.',
  },
  {
    question: 'Why does clay need a wider soil swell range?',
    answer: 'Clay behavior depends strongly on mineralogy, moisture, density, and stress history. This calculator uses a wider planning band for clay because its volume response is more variable than a simple geometric cut suggests.',
  },
  {
    question: 'Can this calculator replace a geotechnical measurement?',
    answer: 'No. The result is a planning estimate for material handling and storage. Ask a qualified professional for a site specific measurement when the excavation affects foundations, groundwater, retaining structures, contaminated ground, or regulated disposal.',
  },
];

const howTo = [
  { name: 'Enter the excavation dimensions', text: 'Enter the length, width, and depth of the cut. Switch between metric and imperial units if needed.' },
  { name: 'Choose the closest soil profile', text: 'Select sand, topsoil, clay, or gravel to apply a visible planning range for loose volume.' },
  { name: 'Plan the material handling', text: 'Use bank volume for the undisturbed cut and the loose volume range for loading, haulage, skips, or temporary storage.' },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq,
  bibliographyTitle: 'Sources and technical notes',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Two Volumes Answer Two Site Questions', level: 2 },
    { type: 'paragraph', html: 'The <strong>bank volume</strong> is the geometry of undisturbed ground: length multiplied by width and depth. The <strong>loose volume</strong> is the space the disturbed soil may occupy after it leaves the cut. Keeping them separate prevents a skip or haulage estimate from being based on the wrong state of the soil.' },
    { type: 'title', text: 'Use the Loose Range to Plan Handling', level: 3 },
    { type: 'paragraph', html: 'Choose the closest soil profile and compare the lower and upper loose results with truck capacity, skip size, stockpile footprint, and temporary staging space. The range is deliberately visible because excavation method, moisture, density, and later compaction can change the result.' },
    { type: 'tip', title: 'A soil swell band is not a geotechnical test', html: 'Clay mineralogy, groundwater, stress history, and moisture can produce behavior outside a generic allowance. Foundations, retaining structures, contaminated ground, regulated disposal, and expansive clay need a site specific measurement.' },
    { type: 'title', text: 'Check the Assumption Before Ordering Capacity', level: 3 },
    { type: 'paragraph', html: 'If the selected soil is uncertain, calculate the same cut with two plausible profiles and plan for the larger handling result until the ground is measured. That is more useful than reporting a single precise looking figure that hides the material uncertainty.' },
  ],
  ui: {
    unitSystemLabel: 'Measurement system',
    unitMetric: 'Metric',
    unitImperial: 'Imperial',
    onboarding: 'Enter the current dimensions of the cut, choose the closest soil profile, and use the two results for excavation planning and material handling.',
    dimensionLabel: 'Excavation dimensions',
    lengthLabel: 'Length',
    widthLabel: 'Width',
    depthLabel: 'Depth',
    soilLabel: 'Soil profile',
    soilSand: 'Sand',
    soilTopsoil: 'Topsoil',
    soilClay: 'Clay',
    soilGravel: 'Gravel',
    soilSandBand: '10 to 15% swell',
    soilTopsoilBand: '15 to 25% swell',
    soilClayBand: '25 to 40% swell',
    soilGravelBand: '15 to 25% swell',
    bankVolumeLabel: 'Bank volume',
    bankVolumeHelp: 'Undisturbed soil in the cut',
    looseVolumeLabel: 'Loose volume',
    looseVolumeHelp: 'Planning range after excavation',
    expansionLabel: 'Applied soil expansion',
    expansionHelp: 'Range used for the selected profile',
    sceneTitle: 'From ground to stockpile',
    sceneBank: 'in ground',
    sceneLoose: 'loose material',
    sceneGround: 'ground line',
    sceneCut: 'the excavated cut',
    interpretationTitle: 'How to use it.',
    interpretationText: 'The first number describes the hole. The range describes the extra space the disturbed soil may occupy.',
    warning: 'Planning estimate only. Moisture, density, excavation method, and site conditions can change the actual loose volume. It does not replace a geotechnical measurement.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'lower allowance',
    soilStatusMedium: 'moderate allowance',
    soilStatusHigh: 'wide allowance',
    soilStatusLabel: 'Planning band',
  },
};
