import { clayCalculator } from './entry';
export * from './entry';
export const CLAY_CALCULATOR_TOOL: ToolDefinition = {
  entry: clayCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
