export * from './entry';
export const MORTAR_CALCULATOR_TOOL: ToolDefinition = {
  entry: mortarCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
