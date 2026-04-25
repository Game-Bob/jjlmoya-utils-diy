import type { ToolDefinition } from '../../types';
import { pythagoreanRightAngleCalculator } from './entry';
export * from './entry';
export const PYTHAGOREAN_RIGHT_ANGLE_CALCULATOR_TOOL: ToolDefinition = {
  entry: pythagoreanRightAngleCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

export type { PythagoreanRightAngleCalculatorUI } from './ui';
