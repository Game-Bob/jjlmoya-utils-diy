import type { ToolDefinition } from '../../types';
import { excavationVolumeCalculator } from './entry';

export * from './entry';

export const EXCAVATION_VOLUME_CALCULATOR_TOOL: ToolDefinition = {
  entry: excavationVolumeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
