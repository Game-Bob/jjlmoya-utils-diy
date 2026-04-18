import { passepartoutCalculator } from './entry';
export * from './entry';
export const PASSEPARTOUT_CALCULATOR_TOOL: ToolDefinition = {
  entry: passepartoutCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
