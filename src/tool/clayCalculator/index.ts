import type { DiyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ClayCalculatorComponent from './component.astro';
import ClayCalculatorSEO from './seo.astro';
import ClayCalculatorBibliography from './bibliography.astro';
import type { ClayCalculatorUI } from './ui';

export type ClayCalculatorLocaleContent = ToolLocaleContent<ClayCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const clayCalculator: DiyToolEntry<ClayCalculatorUI> = {
  id: 'clay-calculator',
  icons: {
    bg: 'mdi:pot',
    fg: 'mdi:resize',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ClayCalculatorComponent, ClayCalculatorSEO, ClayCalculatorBibliography };

export const CLAY_CALCULATOR_TOOL: ToolDefinition = {
  entry: clayCalculator,
  Component: ClayCalculatorComponent,
  SEOComponent: ClayCalculatorSEO,
  BibliographyComponent: ClayCalculatorBibliography,
};
