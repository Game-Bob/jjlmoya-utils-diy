import type { DiyCategoryEntry } from '../types';
import { clayCalculator } from '../tool/clayCalculator/index';
import { epoxyCalculator } from '../tool/epoxyCalculator/index';
import { balusterCalculator } from '../tool/balusterCalculator/index';
import { mortarCalculator } from '../tool/mortarCalculator/index';
import { passepartoutCalculator } from '../tool/passepartoutCalculator/index';
import { concreteCalculator } from '../tool/concreteCalculator/index';
import { cutOptimizer } from '../tool/cutOptimizer/index';
import { voltageDropCalculator } from '../tool/voltageDropCalculator/index';
import { furnitureFit } from '../tool/furnitureFit/index';
import { thermalExpansionCalculator } from '../tool/thermalExpansionCalculator/index';
import { drillCalculator } from '../tool/drillCalculator/index';
import { stairCalculator } from '../tool/stairCalculator/index';
import { drillSharpener } from '../tool/drillSharpener/index';

export const diyCategory: DiyCategoryEntry = {
  icon: 'mdi:hand',
  tools: [clayCalculator, epoxyCalculator, balusterCalculator, mortarCalculator, passepartoutCalculator, concreteCalculator, cutOptimizer, voltageDropCalculator, furnitureFit, thermalExpansionCalculator, drillCalculator, stairCalculator, drillSharpener],
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

