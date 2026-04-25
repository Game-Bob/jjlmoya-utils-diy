import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'thermal-expansion-calculator';
const title = 'Thermal Expansion Calculator for Beams and Structural Materials';
const description =
  'Calculate how much a beam or structure expands with temperature changes. Technical tool for engineers and DIY. Includes expansion coefficients by material.';

const faqData = [
  {
    question: 'What is the linear thermal expansion coefficient?',
    answer:
      'It is a physical property of materials indicating how much they expand per degree Celsius of temperature increase. It is measured in 1/°C or °C⁻¹.',
  },
  {
    question: 'Why is it important to calculate expansion in beams?',
    answer:
      'If a beam has no room to expand (no expansion joints), it will generate massive internal stresses that can deform the structure, crack the concrete or even cause collapse.',
  },
  {
    question: 'Does wood expand equally in all directions?',
    answer:
      'No. Wood is an anisotropic material. It expands very little along the grain but significantly in the transverse direction (width and thickness).',
  },
  {
    question: 'What temperature should I use as the Initial value?',
    answer:
      'Use the temperature at the time of installation or construction. The Final value should be the maximum temperature expected during its service life.',
  },
];

const howToData = [
  {
    name: 'Measure the original length',
    text: 'Enter the length of the beam or material in metres.',
  },
  {
    name: 'Select the material',
    text: 'Choose from metals, construction materials or wood to apply its specific coefficient.',
  },
  {
    name: 'Set the thermal range',
    text: 'Specify the initial temperature and the maximum expected temperature to calculate the thermal differential.',
  },
  {
    name: 'Analyse the growth',
    text: 'Observe the total elongation in millimetres and the resulting final length to plan adequate expansion joints.',
  },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'What is Thermal Expansion and How Does It Affect Structures', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Thermal expansion</strong> is the physical process by which a material increases its length in response to a rise in temperature. At the microscopic level, particles vibrate with more energy and require a greater average spacing between them. In construction, this phenomenon is not a curiosity — it is a force that can crack concrete, deform steel beams and buckle railway tracks.',
    },
    { type: 'title', text: 'The Linear Expansion Formula', level: 3 },
    {
      type: 'card',
      icon: 'mdi:math-log',
      title: 'Linear Expansion Formula',
      html: '<p>The expansion of a structural element is calculated with: <code>ΔL = L₀ · α · ΔT</code>. Where <strong>ΔL</strong> is the total growth, <strong>L₀</strong> is the original length, <strong>α</strong> is the material expansion coefficient (in °C⁻¹) and <strong>ΔT</strong> is the temperature difference. This formula underpins the design of expansion joints in bridges, roofs and facades.</p>',
    },
    { type: 'title', text: 'Expansion Coefficients by Material', level: 3 },
    {
      type: 'card',
      icon: 'mdi:table',
      title: 'Common Expansion Coefficients',
      html: '<p>Not all materials expand equally. <strong>Aluminium</strong> (23 ppm/°C) expands almost twice as fast as <strong>steel</strong> (12 ppm/°C). <strong>Concrete</strong> has a coefficient nearly identical to steel (12 ppm/°C), which is why reinforced concrete is structurally stable. <strong>PVC</strong> (30 ppm/°C) and <strong>transverse wood</strong> (40 ppm/°C) show the highest expansion rates and require special jointing solutions.</p>',
    },
    { type: 'title', text: 'The Importance of Expansion Joints', level: 3 },
    {
      type: 'card',
      icon: 'mdi:bridge',
      title: 'Expansion Joint Sizing',
      html: '<p>If you have walked across a bridge and noticed a rubber-filled slot in the deck, you have seen an <strong>expansion joint</strong>. Without that gap, the steel beam would press against the next element when heated in summer, generating pressures capable of causing column <strong>buckling</strong> or cracks in load-bearing walls. The calculator suggests a minimum joint of 150% of the calculated ΔL to absorb extreme temperature swings.</p>',
    },
    { type: 'title', text: 'Real World Examples: Train Rails to the Eiffel Tower', level: 3 },
    {
      type: 'paragraph',
      html: 'Railway engineers leave gaps between rails to prevent them from buckling in summer. The iron structure of the <strong>Eiffel Tower</strong> grows approximately 15 cm on the hottest July days in Paris. In domestic settings, polycarbonate roofing and aluminium cladding are the most common cases where thermal calculation is decisive in preventing leaks and stress noises.',
    },
  ],
  ui: {
    configTitle: 'Configuration',
    labelMaterial: 'Material',
    groupMetals: 'Metals',
    groupConstruction: 'Construction',
    groupWood: 'Wood and Polymers',
    matSteel: 'Steel (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Copper (17 ppm/°C)',
    matIron: 'Cast Iron (11 ppm/°C)',
    matConcrete: 'Concrete (12 ppm/°C)',
    matBrick: 'Brick (9 ppm/°C)',
    matGlass: 'Glass (9 ppm/°C)',
    matWoodFiber: 'Wood Grain (5 ppm/°C)',
    matWoodTransversal: 'Wood Transverse (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metallurgy',
    catConstruction: 'Construction',
    catWood: 'Wood and Polymers',
    labelLength: 'Initial Length (m)',
    labelTempStart: 'Initial Temp (°C)',
    labelTempEnd: 'Max Temp (°C)',
    deltaLabel: 'Thermal Differential (ΔT)',
    vizTitle: 'Expansion Simulation',
    resultGrowthLabel: 'Total Growth (ΔL)',
    resultFinalLabel: 'Final Length',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Buckling Risk',
    jointTitle: 'Minimum Joint',
    riskLow: 'Low',
    riskModerate: 'Moderate',
    riskCritical: 'Critical',
    tipDefault: 'Consult the manufacturer data sheet for exact coefficients of special alloys.',
    tipSteel: 'Steel and concrete have nearly identical coefficients, which is why reinforced concrete works without internal cracking.',
    tipAluminum: 'Aluminium expands almost twice as fast as steel. In metal cladding, this requires elastic sealants at all joints.',
    tipGlass: 'Glass and steel expand at nearly the same rate, which is key to the design of large glazed facades.',
    tipConcrete: 'The coefficient of concrete is very similar to that of steel, which is why composite structures are so stable.',
    tipWood: 'Wood expands little from heat, but a great deal from moisture. Along the grain, thermal movement is very small.',
    tipPvc: 'PVC has very high expansion. It requires O-ring joints or lyre-shaped curves to absorb movement without cracking.',
  },
};
