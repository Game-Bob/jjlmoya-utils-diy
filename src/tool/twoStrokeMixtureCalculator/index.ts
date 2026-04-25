import type { ToolDefinition } from '../../types';
import { twoStrokeMixtureCalculator } from './entry';
export * from './entry';
export const TWO_STROKE_MIXTURE_CALCULATOR_TOOL: ToolDefinition = {
  entry: twoStrokeMixtureCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

export type { TwoStrokeMixtureCalculatorUI } from './ui';
