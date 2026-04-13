import MortarCalculatorComponent from './component.astro';
import MortarCalculatorSEO from './seo.astro';
import MortarCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { MortarCalculatorUI } from './ui';

export { MortarCalculatorComponent, MortarCalculatorSEO, MortarCalculatorBibliography };

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const mortarCalculator: DiyToolEntry<MortarCalculatorUI> = {
  id: 'mortar-calculator',
  icons: { bg: 'mdi:wall', fg: 'mdi:bucket-outline' },
  i18n: { es, en, fr },
};

export const MORTAR_CALCULATOR_TOOL: ToolDefinition = {
  entry: mortarCalculator,
  Component: MortarCalculatorComponent,
  SEOComponent: MortarCalculatorSEO,
  BibliographyComponent: MortarCalculatorBibliography,
};
