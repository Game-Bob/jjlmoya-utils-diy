import DrillCalculatorComponent from './component.astro';
import DrillCalculatorSEO from './seo.astro';
import DrillCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { DrillCalculatorUI } from './ui';

export {
  DrillCalculatorComponent,
  DrillCalculatorSEO,
  DrillCalculatorBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const drillCalculator: DiyToolEntry<DrillCalculatorUI> = {
  id: 'drill-rpm-calculator',
  icons: { bg: 'mdi:tools', fg: 'mdi:speedometer' },
  i18n: { es, en, fr },
};

export const DRILL_CALCULATOR_TOOL: ToolDefinition = {
  entry: drillCalculator,
  Component: DrillCalculatorComponent,
  SEOComponent: DrillCalculatorSEO,
  BibliographyComponent: DrillCalculatorBibliography,
};
