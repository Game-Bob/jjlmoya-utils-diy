import type { DiyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import EpoxyCalculatorComponent from './component.astro';
import EpoxyCalculatorSEO from './seo.astro';
import EpoxyCalculatorBibliography from './bibliography.astro';
import type { EpoxyCalculatorUI } from './ui';

export type EpoxyCalculatorLocaleContent = ToolLocaleContent<EpoxyCalculatorUI>;

export const epoxyCalculator: DiyToolEntry<EpoxyCalculatorUI> = {
  id: 'epoxy-calculator',
  icons: {
    bg: 'mdi:flask',
    fg: 'mdi:scale-balance',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { EpoxyCalculatorComponent, EpoxyCalculatorSEO, EpoxyCalculatorBibliography };

export const EPOXY_CALCULATOR_TOOL: ToolDefinition = {
  entry: epoxyCalculator,
  Component: EpoxyCalculatorComponent,
  SEOComponent: EpoxyCalculatorSEO,
  BibliographyComponent: EpoxyCalculatorBibliography,
};
