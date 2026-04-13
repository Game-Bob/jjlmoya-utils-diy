import ConcreteCalculatorComponent from './component.astro';
import ConcreteCalculatorSEO from './seo.astro';
import ConcreteCalculatorBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { ConcreteCalculatorUI } from './ui';

export {
  ConcreteCalculatorComponent,
  ConcreteCalculatorSEO,
  ConcreteCalculatorBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const concreteCalculator: DiyToolEntry<ConcreteCalculatorUI> = {
  id: 'concrete-calculator',
  icons: { bg: 'mdi:bucket-outline', fg: 'mdi:shovel' },
  i18n: { es, en, fr },
};

export const CONCRETE_CALCULATOR_TOOL: ToolDefinition = {
  entry: concreteCalculator,
  Component: ConcreteCalculatorComponent,
  SEOComponent: ConcreteCalculatorSEO,
  BibliographyComponent: ConcreteCalculatorBibliography,
};
