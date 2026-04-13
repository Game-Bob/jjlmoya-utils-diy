import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';

const slug = 'furniture-fit-calculator';
const title = 'Furniture Fit Calculator: Will It Go Through the Door?';
const description =
  'Check if your sofa, wardrobe or dining table fits through the elevator or door. Use the 3D Pythagorean theorem to calculate tilt clearance and avoid expensive moving disasters.';

const faqData = [
  {
    question: 'Why can a sofa not fit even if it is smaller than the doorway?',
    answer:
      'Because of the turning angle. If the hallway is narrow, the sofa must enter sideways or tilted. The limiting factor is not just the door width, but the turning radius available in the entrance area.',
  },
  {
    question: 'What is the diagonal of a piece of furniture and why does it matter?',
    answer:
      'It is the longest distance between two opposite corners. It is critical for knowing whether a tall piece of furniture can be lifted upright in a room with a low ceiling after being assembled on the floor.',
  },
  {
    question: 'How do I measure a lift correctly?',
    answer:
      'Do not just measure the floor. Measure the width of the open door (which is often smaller than the lift interior), the free depth, and the total height. The diagonal from the base of the door to the upper rear corner is the most important figure.',
  },
  {
    question: 'What parts should be disassembled first?',
    answer:
      'Sofa legs, wardrobe handles and fridge doors typically gain 5 to 10 critical centimetres that make the difference between a piece fitting or being left on the street.',
  },
];

const howToData = [
  {
    name: 'Measure the furniture (Length, Width, Height)',
    text: 'Take the maximum dimensions of the object, including any protrusions such as armrests or handles.',
  },
  {
    name: 'Measure the critical passages',
    text: 'Measure the clear opening of the door (frame to frame), the lift interior and the corridor width.',
  },
  {
    name: 'Enter the data in the simulator',
    text: 'Type the dimensions into the tool to see whether the furniture volume is compatible with the passage space.',
  },
  {
    name: 'Calculate tilt clearance',
    text: 'If the furniture is very tall, use the calculated diagonal to verify whether you can rotate it on the staircase landing or inside the lift.',
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    { name: 'Geometric Fit in Confined Spaces (MDPI Buildings)', url: 'https://www.mdpi.com/2075-5309/15/2/157' },
    { name: 'Moving Sofa Problem: Wolfram MathWorld', url: 'https://mathworld.wolfram.com/MovingSofaProblem.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'The Science of Moving House: Pythagorean Theorem in Practice', level: 2 },
    {
      type: 'paragraph',
      html: 'Moving house is not just a physical challenge — it is a complex geometric puzzle. The apparent space of a room or lift deceives the human eye, especially when we ignore the third dimension. Applied mathematics can save you hundreds of pounds in returns and failed deliveries.',
    },
    { type: 'title', text: 'The 3D Diagonal Trick', level: 3 },
    {
      type: 'card',
      icon: 'mdi:math-log',
      title: 'The Golden Rule of Measuring',
      html: '<p>Never just measure the furniture. Always measure the <strong>critical access points</strong>: the clear width of the door frame (subtract door thickness if it does not open 180°), the lowest point of the ceiling on the landing, and the actual depth of the lift with doors closed. The formula <code>d = √(w² + h² + z²)</code> reveals whether the piece fits when tilted.</p>',
    },
    { type: 'title', text: 'The Moving Sofa Problem', level: 3 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Safety Margin Matters',
      html: '<p>A common mistake is assuming that if the furniture measures 80cm and the gap is 80cm, it will pass. It will not. The movers\' hands, fabric elasticity and wall imperfections all require a minimum clearance of <strong>2 to 5 cm</strong>. Without this margin, the piece will be scratched or wedged in by pressure.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Disassemble to Win',
      html: '<p>Before giving up because a piece does not fit, check the legs. Removing sofa legs often reduces the critical height by 10 to 15cm — the difference between success and leaving it in the lobby. Fridge doors and wardrobe handles also add critical centimetres.</p>',
    },
    { type: 'title', text: '3 Mistakes That Ruin Every Move', level: 3 },
    {
      type: 'paragraph',
      html: 'Even with correct measurements, these invisible factors cause disasters: <strong>The Ceiling Light</strong> — forgotten during the diagonal tilt, it can be hit and smashed. <strong>Furniture Turning Radius</strong> — a rigid piece does not bend; even if it fits width-wise in a narrow corridor, it cannot complete the corner turn. <strong>Packaging</strong> — bubble wrap and cardboard protection can add 1 to 3 cm on every side.',
    },
  ],
  ui: {
    conTitle: 'Space Dimensions',
    conHint: 'E.g.: Standard lift, door frame or van interior.',
    objTitle: 'Furniture Dimensions',
    labelWidth: 'Width (cm)',
    labelHeight: 'Height (cm)',
    labelDepth: 'Depth (cm)',
    labelLength: 'Length (cm)',
    labelMargin: 'Safety Margin (cm)',
    vizLabel: 'Simplified Spatial View',
    verdictDefault: 'Will it fit?',
    verdictHint: 'Enter the measurements to check spatial compatibility.',
    verdictYes: 'YES, IT FITS!',
    verdictNo: 'DOES NOT FIT',
    fitDirect: 'The furniture fits directly without any tilting.',
    fitDiagonal3d: 'Fits when tilted diagonally (3D Pythagorean theorem).',
    fitDiagonalPlane: 'Fits when tilted in one of the lateral planes.',
    fitNope: 'The furniture is too large even when tilted diagonally.',
    diagLabel: 'Maximum Diagonal (3D Pythagoras):',
    objLabel: 'Furniture',
  },
};
