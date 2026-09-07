import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LadderAngleReachUI } from '../ui';
import { ladderAngleReachCalculatorBibliography } from '../bibliography';

const slug = 'ladder-angle-and-reach-calculator';
const title = 'Ladder Angle and Reach Calculator';
const description = 'Calculate a ladder\'s actual base distance, angle and reach from two measurements, then compare it with the 1:4 placement guide and minimum ladder length.';

const faq = [
  {
    question: 'What does the ladder angle and reach calculator calculate?',
    answer: 'It turns any two of target height, ladder length and base distance into the missing geometric value. It also reports the resulting angle, whether the ladder reaches the target, and a separate 1:4 reference for the target height.',
  },
  {
    question: 'Why can the actual base differ from the 1:4 base?',
    answer: 'They answer different questions. With a 3 m target and a 4 m ladder, the exact triangle that touches 3 m has a 2.65 m base and a 48.6° angle. The 1:4 reference for a 3 m target is 0.75 m out and needs a 3.09 m ladder. The calculator keeps those figures separate so a reach check is not mistaken for a placement recommendation.',
  },
  {
    question: 'How do I use the calculator for a 3 m wall height?',
    answer: 'Enter 3 m as the target height and your available ladder length. The geometric result tells you the base and angle if the ladder top is exactly at 3 m. The 1:4 rows then show 0.75 m as the target-height reference and about 3.09 m as the minimum ladder length at that placement angle.',
  },
  {
    question: 'What are the three calculation modes?',
    answer: 'Use height plus ladder length to check the actual base, height plus base distance to calculate the ladder length, or ladder length plus base distance to calculate the reachable height.',
  },
  {
    question: 'What does the 1:4 ladder rule mean?',
    answer: 'For a leaning portable ladder, the foot is placed one unit out for every four units of target height. This is a planning reference, not a complete safety assessment. Check the ladder label, surface, support and local requirements before use.',
  },
];

const howTo = [
  { name: 'Choose the calculation you need', text: 'Pick height + ladder to check an existing setup, height + base to size a ladder, or ladder + base to find its reachable height.' },
  { name: 'Enter your two measurements', text: 'Use the same unit system for both fields. Switch between metric and imperial if needed.' },
  { name: 'Read the geometric result', text: 'Use the base, angle and reach to understand the triangle formed by your measurements.' },
  { name: 'Check the 1:4 reference', text: 'Compare the target-height base and minimum ladder length with the available space and ladder before deciding how to place it.' },
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

export const content: ToolLocaleContent<LadderAngleReachUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq,
  bibliographyTitle: 'Sources and technical notes',
  bibliography: ladderAngleReachCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'What this ladder calculator tells you', level: 2 },
    { type: 'paragraph', html: 'Use this calculator when you know two measurements and need to make a ladder setup decision. It calculates the missing side of the right triangle, the ladder angle and the vertical reach. It also gives a separate 1:4 reference so you can compare the target-height placement with the geometry created by your actual measurements.' },
    { type: 'title', text: 'Actual geometry from the measurements you enter', level: 3 },
    { type: 'paragraph', html: 'Choose <strong>height + ladder</strong> to check an existing ladder against a target height. The actual base is <code>√(ladder length² − target height²)</code>. Choose <strong>height + base</strong> to calculate the required ladder length, or <strong>ladder + base</strong> to calculate the height that setup can reach. The angle and reach are calculated from the same triangle, so the result reflects your measurements rather than silently replacing them with the 1:4 rule.' },
    { type: 'title', text: '1:4 placement: base distance and minimum ladder length', level: 3 },
    { type: 'paragraph', html: 'The common 1:4 planning reference places the foot one unit out for every four units of target height. For a 3 m target, that means a 0.75 m reference distance. The minimum ladder length for that target-height geometry is <code>√(3² + 0.75²) = 3.09 m</code>. These values are shown separately from the actual triangle because a longer ladder or a different base distance can change the angle and reach.' },
    { type: 'title', text: 'How to interpret the result', level: 3 },
    { type: 'list', items: ['If the actual angle is flatter than the 1:4 guide, the ladder is farther from the support for the height entered.', 'If the actual angle is steeper, the ladder is closer to the support than the guide reference.', 'If the available ladder is longer than the minimum, it may extend above the target; check the required access height and the ladder instructions.'] },
    { type: 'tip', title: 'Geometry is not a safety certificate', html: 'A reachable height or a 1:4 comparison does not certify the ladder, surface, support, load, access clearance or work method. Inspect the ladder and follow its label, manufacturer instructions and local requirements before use.' },
  ],
  ui: {
    unitSystemLabel: 'Measurement system', unitMetric: 'Metric', unitImperial: 'Imperial',
    intro: 'Enter two measurements. The geometric result and the 1:4 reference stay separate.',
    solveTitle: 'Choose two measurements', modeHeightLength: 'Height + ladder', modeHeightBase: 'Height + base', modeLengthBase: 'Ladder + base', modeHeightLengthHint: 'Check the actual base', modeHeightBaseHint: 'Find the ladder length', modeLengthBaseHint: 'Find the reachable height',
    fieldHeight: 'Target height', fieldLength: 'Available ladder length', fieldBase: 'Base distance from wall', fieldHeightHelp: 'Height you need to reach', fieldLengthHelp: 'Length along the ladder', fieldBaseHelp: 'Horizontal distance on the ground',
    calculatedTitle: 'Calculated for you', calculatedBase: 'Actual base distance', calculatedBaseHelp: 'from these two measurements', calculatedLength: 'Ladder length', calculatedLengthHelp: 'for this height and base distance', calculatedHeight: 'Reachable height', calculatedHeightHelp: 'from this ladder and base distance',
    diagramTitle: 'The geometry behind the answer', angleTitle: 'Angle', angleUnit: '°', angleGuide: 'Functional side-view diagram showing ladder, wall, target height, base distance, and the 1:4 guide', reachTitle: 'Vertical reach', reachHelp: 'height at the wall', targetTitle: 'Target height', targetHelp: 'height requested', baseTitle: 'Base distance', baseHelp: 'horizontal ground distance', guideDistanceTitle: '1:4 base for target', guideDistanceHelp: 'target height ÷ 4', requiredLengthTitle: 'Minimum length at 1:4', requiredLengthHelp: 'for the target height',
    verdictReach: 'The target is reachable', verdictShort: 'The target is higher than this setup', verdictReachHelp: 'The calculated vertical reach meets or exceeds the target height.', verdictShortHelp: 'Choose more ladder length or change the geometry only if the final setup remains suitable.',
    angleTooFlat: 'Flatter than the guide', angleWithinGuide: 'Near the 1:4 guide', angleTooSteep: 'Steeper than the guide', ladderLabel: 'ladder', wallLabel: 'support', targetLabel: 'target', baseLabel: 'base distance', groundLabel: 'ground', guideLabel: '1:4 guide',
    invalidPositive: 'Enter two positive measurements.', invalidBase: 'The base distance must be smaller than the ladder length.', invalidTarget: 'The target height must be lower than the ladder length.', warning: 'Geometry only. Follow the ladder label and manufacturer instructions.',
    unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
};
