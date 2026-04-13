import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'passepartout-calculator';
const title = 'Passepartout Calculator: Mat Board Margins with Optical Center Correction';
const description =
  'Calculate exact mat board margins for professional picture framing with bottom weighting optical correction. Gallery-quality proportions for photos and artwork.';

const faqData = [
  {
    question: 'What is bottom weighting in picture framing?',
    answer:
      "Bottom weighting is a professional framing technique where the bottom margin is made slightly wider than the top. This corrects an optical illusion: when a piece is framed with perfectly equal margins, the artwork appears to 'sink' visually. The extra bottom margin lifts the piece optically so it appears perfectly centered.",
  },
  {
    question: 'What mat board material should I use for conservation framing?',
    answer:
      'Always use acid-free or pH-neutral mat board (alpha-cellulose or cotton rag). Cheap wood-pulp boards contain lignin which releases acids over time, causing yellowing and foxing that permanently damages artwork. Look for "Museum Quality" or "Conservation Grade" labels.',
  },
  {
    question: 'How do I choose the mat board color?',
    answer:
      'Off-white or soft cream are the safe professional standards — they do not compete with the artwork. A dark mat can emphasize highlights in photography. Colored mats should be used carefully and only to complement specific tones in the piece, never to overpower it.',
  },
  {
    question: 'What is the ideal mat margin width?',
    answer:
      "The professional standard is between 5 and 8 cm (2-3 inches). A margin that is too narrow makes the artwork feel 'suffocated'. A wider margin gives even small pieces a heroic, gallery-like presence.",
  },
];

const howToData = [
  {
    name: 'Measure the artwork',
    text: 'Measure the exact width and height of the paper or canvas you are framing. Subtract a few millimetres if you want the mat to overlap the image slightly.',
  },
  {
    name: 'Measure the frame interior',
    text: 'Take the internal dimensions of the frame or rebate where the mat board will sit.',
  },
  {
    name: 'Enable optical correction',
    text: 'Check the bottom weighting option in the calculator if you want the bottom margin to be automatically wider for a professional finish.',
  },
  {
    name: 'Cut the mat board',
    text: 'Use the resulting measurements to cut the window and exterior of the mat, ideally with a 45-degree bevel cutter for a clean chamfered edge.',
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    {
      name: 'ISO 9706: Permanence of Paper for Documents',
      url: 'https://www.iso.org/standard/22495.html',
    },
    {
      name: 'PPFA: Professional Picture Framers Association',
      url: 'https://ppfa.com/',
    },
    {
      name: 'Fine Art Trade Guild: Framing Standards',
      url: 'https://www.fineart.co.uk/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Science of Perfect Picture Framing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>passepartout</strong> (or mat board) is not merely decorative cardboard — it is the breathing space that allows your artwork to exist independently from its frame. This calculator gives you the exact dimensions to cut your mat, ensuring the artwork is optically centred or balanced within the frame to professional gallery standards.',
    },
    {
      type: 'title',
      text: 'Why Bottom Weighting Works',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:eye-outline',
      title: 'The optical center illusion',
      html: '<p>The human eye perceives the geometric vertical center of a rectangle as being slightly lower than it actually is. Artwork framed with perfectly equal top and bottom margins appears to be "falling" or sinking.</p><p><strong>Bottom weighting</strong> corrects this by making the bottom margin 5-15% wider than the top. The artwork is lifted optically and appears perfectly centered — a technique used in every professional gallery worldwide.</p>',
    },
    {
      type: 'title',
      text: 'Conservation Mat Board: Why Materials Matter',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:palette-swatch-outline',
      title: 'Conservation board versus standard mat board',
      html: '<p>Standard wood-pulp mat boards contain lignin, which breaks down over time releasing acetic acid. This causes the characteristic brown foxing and yellowing that permanently destroys artwork. <strong>Conservation-grade mat board</strong> (alpha-cellulose or cotton rag) is pH-neutral and buffers against external acids, protecting artwork for decades.</p>',
    },
    {
      type: 'title',
      text: 'Professional Measuring Tips',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Measure the rebate, not the face:</strong> If you already have the frame, measure the inner rebate from the back, not the front glass opening. The mat must fit the rebate precisely.',
    },
    {
      type: 'paragraph',
      html: '<strong>The safety overlap:</strong> The mat window should be slightly smaller than the artwork (approximately 5mm per side) so the image cannot slip through the opening.',
    },
    {
      type: 'card',
      icon: 'mdi:ruler',
      title: 'The golden rule of matting',
      html: '<p>Never use less than 5cm (2 inches) of margin if you want the artwork to breathe. Generous margins signal quality and elevate even modest pieces to gallery status. A wide white mat transforms a small watercolour into a museum exhibit.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensions',
    sectionDesc: 'Enter measurements in centimetres.',
    frameSizeTitle: 'Frame Size',
    artSizeTitle: 'Artwork Size',
    labelWidth: 'Width (cm)',
    labelHeight: 'Height (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Adds extra bottom margin for visual balance',
    labelOffset: 'Offset (%)',
    errorMsg: 'Artwork dimensions must be smaller than the frame.',
    labelTop: 'Top',
    labelBottom: 'Bottom',
    labelLeft: 'Left',
    labelRight: 'Right',
    artPlaceholder: 'Your Artwork',
  },
};
