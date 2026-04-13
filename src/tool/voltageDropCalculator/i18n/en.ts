import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'voltage-drop-calculator';
const title = 'Voltage Drop Calculator: Wire Cross Section from Volts, Watts and Distance';
const description =
  'Free voltage drop calculator for 12V, 24V and 230V systems. Find the right cable cross section by entering current, wire length and conductor material. Essential for camper vans, solar and home wiring.';

const faqData = [
  {
    question: 'What is voltage drop and why does it matter?',
    answer:
      'Voltage drop is the loss of voltage that occurs as electricity travels through a cable. A wire that is too thin or too long loses voltage along the way. Practical consequences include dim lights, motors that fail to start, and cables that overheat dangerously.',
  },
  {
    question: 'What cable size do I need for 12V at 10 metres?',
    answer:
      'It depends on the current. For 12V and 10A over 10m, you need at minimum 2.5mm². For 20A, you need 6mm². At low voltage (12V or 24V), voltage drop is far more critical than at 230V because the same wattage demands much higher current.',
  },
  {
    question: 'Can I use 1.5mm² cable throughout my camper van?',
    answer:
      'No. 1.5mm² is suitable for light circuits up to about 10A. Sockets and fridges need 2.5mm². High-draw appliances like inverters or cookers need 6mm² or more. Undersized cable is a fire risk.',
  },
  {
    question: 'What is the maximum allowable voltage drop?',
    answer:
      'For domestic 230V installations: maximum 3% for lighting circuits, 5% for other circuits. For 12V or 24V systems (solar, camper van, marine): aim for no more than 3% total. Beyond these limits, efficiency falls and overheating risk rises.',
  },
];

const howToData = [
  {
    name: 'Select the system voltage',
    text: 'Choose 12V, 24V (solar or camper) or 230V (mains) depending on your installation.',
  },
  {
    name: 'Enter the load',
    text: 'Type the Watts (W) or Amperes (A) that the appliance at the end of the cable will draw.',
  },
  {
    name: 'Set the cable length',
    text: 'Enter the one-way distance in metres from the power source to the load.',
  },
  {
    name: 'Choose the conductor material',
    text: 'Select copper (standard) or aluminium to get the correct resistivity in the calculation.',
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    { name: 'IEC 60364: Low voltage electrical installations', url: 'https://www.iec.ch/homepage' },
    { name: 'Voltage drop: Wikipedia', url: 'https://en.wikipedia.org/wiki/Voltage_drop' },
    { name: 'Electrical resistivity and conductivity: Wikipedia', url: 'https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Complete Guide to Voltage Drop in DC and AC Systems', level: 2 },
    {
      type: 'paragraph',
      html: 'Whether you are wiring a camper van, designing an off-grid solar system or running cable for garden lighting, there is one invisible enemy that can ruin your project before it starts: <strong>voltage drop</strong>. It is not just a technical nuance — it is the difference between a fridge that cools and one that shuts off, or between a safe installation and a fire hazard.',
    },
    { type: 'title', text: 'The Ohm\'s Law Formula Behind the Calculator', level: 3 },
    {
      type: 'card',
      icon: 'mdi:function-variant',
      title: 'How Voltage Drop Is Calculated',
      html: '<p>The formula is <strong>ΔV = (2 × L × I × ρ) / S</strong>. L is the one-way cable length in metres, I is the current in amperes, ρ is resistivity (0.0178 Ω·mm²/m for copper, 0.028 for aluminium), and S is the cable cross-section in mm². The factor of 2 accounts for the current flowing out and back through the cable.</p>',
    },
    { type: 'title', text: 'Why 12V Systems Need Thicker Cable Than 230V', level: 3 },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'The Low Voltage Paradox',
      html: '<p>To deliver 1000W at 230V you only need 4.3A and a 1.5mm² cable will do the job. To deliver the same 1000W at 12V you need 83.3A, requiring 25mm² cable. The lower the voltage, <strong>the thicker the cable must be</strong> to carry the same power without dangerous losses. This surprises most camper van builders who assume 12V is safe to wire casually.</p>',
    },
    { type: 'title', text: 'Real Consequences of Excessive Voltage Drop', level: 3 },
    {
      type: 'card',
      icon: 'mdi:thermometer-alert',
      title: 'Heat, Failures and Fire Risk',
      html: '<p>A cable carrying too much current for its cross-section converts electrical energy into heat. Practical consequences: 12V fridges that shut off because they detect low voltage even with a full battery, LED strips that fade and yellow at the far end, motors that cannot reach rated torque, and in extreme cases, PVC insulation melting and causing fire.</p>',
    },
    { type: 'title', text: 'Cable Size Reference for 12V Systems', level: 3 },
    {
      type: 'paragraph',
      html: 'Quick reference for 12V DC wiring: <strong>1.5mm²</strong> light circuits up to 10A, <strong>2.5mm²</strong> fridges and USB sockets up to 20A, <strong>6mm²</strong> solar panels up to 40A, <strong>16mm²</strong> secondary battery connections up to 80A, <strong>25mm²</strong> main camper van circuits up to 120A. Always verify with the calculator using your exact wire length and current.',
    },
  ],
  ui: {
    heroDropLabel: 'Total Voltage Drop',
    heroVoltsUnit: 'Volts',
    heroPctLoss: '% loss',
    heroEffLabel: 'Efficiency',
    statusExcellent: 'Excellent',
    statusAcceptable: 'Acceptable',
    statusCritical: 'Critical',
    fieldVoltage: 'Voltage',
    fieldMaterial: 'Material',
    materialCopper: 'Copper',
    materialAlum: 'Alum.',
    fieldLoad: 'Load',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watts',
    unitAmps: 'Amps',
    fieldLength: 'Cable Length (One Way)',
    unitMeters: 'metres',
    fieldSection: 'Cable Cross Section',
    sectionInfo: 'Recommended',
  },
};
