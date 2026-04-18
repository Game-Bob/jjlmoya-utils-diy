export * from './entry';
export const FURNITURE_FIT_TOOL: ToolDefinition = {
  entry: furnitureFit,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
