import type { DiyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import BalusterCalculatorComponent from './component.astro';
import BalusterCalculatorSEO from './seo.astro';
import BalusterCalculatorBibliography from './bibliography.astro';
import type { BalusterCalculatorUI } from './ui';

export type BalusterCalculatorLocaleContent = ToolLocaleContent<BalusterCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const balusterCalculator: DiyToolEntry<BalusterCalculatorUI> = {
  id: 'baluster-calculator',
  icons: {
    bg: 'mdi:ruler',
    fg: 'mdi:view-week',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { BalusterCalculatorComponent, BalusterCalculatorSEO, BalusterCalculatorBibliography };

export const BALUSTER_CALCULATOR_TOOL: ToolDefinition = {
  entry: balusterCalculator,
  Component: BalusterCalculatorComponent,
  SEOComponent: BalusterCalculatorSEO,
  BibliographyComponent: BalusterCalculatorBibliography,
};
