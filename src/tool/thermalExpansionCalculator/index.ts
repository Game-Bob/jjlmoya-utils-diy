import { thermalExpansionCalculator } from './entry';
export * from './entry';
export const THERMAL_EXPANSION_CALCULATOR_TOOL: ToolDefinition = {
  entry: thermalExpansionCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
