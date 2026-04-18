export * from './entry';
export const EPOXY_CALCULATOR_TOOL: ToolDefinition = {
  entry: epoxyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
