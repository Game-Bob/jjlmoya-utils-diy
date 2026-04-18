import { balusterCalculator } from './entry';
export * from './entry';
export const BALUSTER_CALCULATOR_TOOL: ToolDefinition = {
  entry: balusterCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
