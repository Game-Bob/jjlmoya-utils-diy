import ThermalExpansionCalculatorComponent from './component.astro';
import ThermalExpansionCalculatorSEO from './seo.astro';
import ThermalExpansionCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { ThermalExpansionCalculatorUI } from './ui';

export {
  ThermalExpansionCalculatorComponent,
  ThermalExpansionCalculatorSEO,
  ThermalExpansionCalculatorBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const thermalExpansionCalculator: DiyToolEntry<ThermalExpansionCalculatorUI> = {
  id: 'thermal-expansion-calculator',
  icons: { bg: 'mdi:thermometer-lines', fg: 'mdi:ruler' },
  i18n: { es, en, fr },
};

export const THERMAL_EXPANSION_CALCULATOR_TOOL: ToolDefinition = {
  entry: thermalExpansionCalculator,
  Component: ThermalExpansionCalculatorComponent,
  SEOComponent: ThermalExpansionCalculatorSEO,
  BibliographyComponent: ThermalExpansionCalculatorBibliography,
};
