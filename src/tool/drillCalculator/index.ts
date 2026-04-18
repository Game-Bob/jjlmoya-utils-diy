import { drillCalculator } from './entry';
export * from './entry';
export const DRILL_CALCULATOR_TOOL: ToolDefinition = {
  entry: drillCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
