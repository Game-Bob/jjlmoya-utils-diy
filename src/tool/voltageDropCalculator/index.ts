export * from './entry';
export const VOLTAGE_DROP_CALCULATOR_TOOL: ToolDefinition = {
  entry: voltageDropCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
