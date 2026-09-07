import type { ToolDefinition } from '../../types';
import { ladderAngleReachCalculator } from './entry';

export * from './entry';

export const LADDER_ANGLE_REACH_CALCULATOR_TOOL: ToolDefinition = {
  entry: ladderAngleReachCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
