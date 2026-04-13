import StairCalculatorComponent from './component.astro';
import StairCalculatorSEO from './seo.astro';
import StairCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { StairCalculatorUI } from './ui';
import { stairCalculatorUI } from './ui';

export {
  StairCalculatorComponent,
  StairCalculatorSEO,
  StairCalculatorBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const stairCalculator: DiyToolEntry<StairCalculatorUI> = {
  id: 'stair-calculator',
  icons: { bg: 'mdi:stairs', fg: 'mdi:ruler-square' },
  i18n: { es, en, fr },
};

export const STAIR_CALCULATOR_TOOL: ToolDefinition = {
  entry: stairCalculator,
  Component: StairCalculatorComponent,
  SEOComponent: StairCalculatorSEO,
  BibliographyComponent: StairCalculatorBibliography,
};

export { stairCalculatorUI };
