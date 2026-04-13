import FurnitureFitComponent from './component.astro';
import FurnitureFitSEO from './seo.astro';
import FurnitureFitBibliography from './bibliography.astro';
import type { DiyToolEntry, ToolDefinition } from '../../types';
import type { FurnitureFitUI } from './ui';

export {
  FurnitureFitComponent,
  FurnitureFitSEO,
  FurnitureFitBibliography,
};

const es = async () => (await import('./i18n/es')).content;
const en = async () => (await import('./i18n/en')).content;
const fr = async () => (await import('./i18n/fr')).content;

export const furnitureFit: DiyToolEntry<FurnitureFitUI> = {
  id: 'furniture-fit-calculator',
  icons: { bg: 'mdi:sofa', fg: 'mdi:ruler-square' },
  i18n: { es, en, fr },
};

export const FURNITURE_FIT_TOOL: ToolDefinition = {
  entry: furnitureFit,
  Component: FurnitureFitComponent,
  SEOComponent: FurnitureFitSEO,
  BibliographyComponent: FurnitureFitBibliography,
};
