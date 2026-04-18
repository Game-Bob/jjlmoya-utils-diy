export * from './entry';
export const DRILL_SHARPENER_TOOL: ToolDefinition = {
  entry: drillSharpener,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

export { drillSharpenerUI };
