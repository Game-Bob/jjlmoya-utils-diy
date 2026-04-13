import PassepartoutCalculatorComponent from './component.astro';
import PassepartoutCalculatorSEO from './seo.astro';
import PassepartoutCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { PassepartoutCalculatorUI } from './ui';

export {
  PassepartoutCalculatorComponent,
  PassepartoutCalculatorSEO,
  PassepartoutCalculatorBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const passepartoutCalculator: DiyToolEntry<PassepartoutCalculatorUI> = {
  id: 'passepartout-calculator',
  icons: { bg: 'mdi:image-frame', fg: 'mdi:ruler' },
  i18n: { es, en, fr },
};

export const PASSEPARTOUT_CALCULATOR_TOOL: ToolDefinition = {
  entry: passepartoutCalculator,
  Component: PassepartoutCalculatorComponent,
  SEOComponent: PassepartoutCalculatorSEO,
  BibliographyComponent: PassepartoutCalculatorBibliography,
};
