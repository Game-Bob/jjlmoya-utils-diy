import DrillSharpenerComponent from './component.astro';
import DrillSharpenerSEO from './seo.astro';
import DrillSharpenerBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { DrillSharpenerUI } from './ui';
import { drillSharpenerUI } from './ui';

export {
  DrillSharpenerComponent,
  DrillSharpenerSEO,
  DrillSharpenerBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const drillSharpener: DiyToolEntry<DrillSharpenerUI> = {
  id: 'drill-sharpener',
  icons: { bg: 'mdi:tools', fg: 'mdi:speedometer' },
  i18n: { es, en, fr },
};

export const DRILL_SHARPENER_TOOL: ToolDefinition = {
  entry: drillSharpener,
  Component: DrillSharpenerComponent,
  SEOComponent: DrillSharpenerSEO,
  BibliographyComponent: DrillSharpenerBibliography,
};

export { drillSharpenerUI };
