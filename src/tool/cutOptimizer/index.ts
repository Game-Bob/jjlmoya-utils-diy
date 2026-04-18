import { cutOptimizer } from './entry';
export * from './entry';
export const CUT_OPTIMIZER_TOOL: ToolDefinition = {
  entry: cutOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
