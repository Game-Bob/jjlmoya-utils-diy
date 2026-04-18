import { stairCalculator } from './entry';
export * from './entry';
export const STAIR_CALCULATOR_TOOL: ToolDefinition = {
  entry: stairCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

export { stairCalculatorUI };
