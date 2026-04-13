import CutOptimizerComponent from './component.astro';
import CutOptimizerSEO from './seo.astro';
import CutOptimizerBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { CutOptimizerUI } from './ui';

export {
  CutOptimizerComponent,
  CutOptimizerSEO,
  CutOptimizerBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const cutOptimizer: DiyToolEntry<CutOptimizerUI> = {
  id: 'cut-optimizer',
  icons: { bg: 'mdi:saw-blade', fg: 'mdi:ruler' },
  i18n: { es, en, fr },
};

export const CUT_OPTIMIZER_TOOL: ToolDefinition = {
  entry: cutOptimizer,
  Component: CutOptimizerComponent,
  SEOComponent: CutOptimizerSEO,
  BibliographyComponent: CutOptimizerBibliography,
};
