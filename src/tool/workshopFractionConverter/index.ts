import { workshopFractionConverter } from './entry';
export * from './entry';
export const WORKSHOP_FRACTION_CONVERTER_TOOL: ToolDefinition = {
  entry: workshopFractionConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
