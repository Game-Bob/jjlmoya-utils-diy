import VoltageDropCalculatorComponent from './component.astro';
import VoltageDropCalculatorSEO from './seo.astro';
import VoltageDropCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { VoltageDropCalculatorUI } from './ui';

export {
  VoltageDropCalculatorComponent,
  VoltageDropCalculatorSEO,
  VoltageDropCalculatorBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const voltageDropCalculator: DiyToolEntry<VoltageDropCalculatorUI> = {
  id: 'voltage-drop-calculator',
  icons: { bg: 'mdi:flash', fg: 'mdi:cable-data' },
  i18n: { es, en, fr },
};

export const VOLTAGE_DROP_CALCULATOR_TOOL: ToolDefinition = {
  entry: voltageDropCalculator,
  Component: VoltageDropCalculatorComponent,
  SEOComponent: VoltageDropCalculatorSEO,
  BibliographyComponent: VoltageDropCalculatorBibliography,
};
