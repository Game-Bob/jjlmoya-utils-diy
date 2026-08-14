import type { ToolDefinition } from '../../types';
import { drywallCalculatorEntry } from './entry';
export * from './entry';

export const DRYWALL_CALCULATOR_TOOL: ToolDefinition = {
  entry: drywallCalculatorEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
