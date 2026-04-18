export * from './entry';
export const CONCRETE_CALCULATOR_TOOL: ToolDefinition = {
  entry: concreteCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
