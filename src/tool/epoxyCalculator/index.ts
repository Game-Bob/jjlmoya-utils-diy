import type { DiyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import EpoxyCalculatorComponent from './component.astro';
import EpoxyCalculatorSEO from './seo.astro';
import EpoxyCalculatorBibliography from './bibliography.astro';
import type { EpoxyCalculatorUI } from './ui';

export type EpoxyCalculatorLocaleContent = ToolLocaleContent<EpoxyCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const epoxyCalculator: DiyToolEntry<EpoxyCalculatorUI> = {
  id: 'epoxy-calculator',
  icons: {
    bg: 'mdi:flask',
    fg: 'mdi:scale-balance',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { EpoxyCalculatorComponent, EpoxyCalculatorSEO, EpoxyCalculatorBibliography };

export const EPOXY_CALCULATOR_TOOL: ToolDefinition = {
  entry: epoxyCalculator,
  Component: EpoxyCalculatorComponent,
  SEOComponent: EpoxyCalculatorSEO,
  BibliographyComponent: EpoxyCalculatorBibliography,
};
