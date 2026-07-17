import type { DiyCategoryEntry } from '../types';
import { clayCalculator } from '../tool/clayCalculator/entry';
import { epoxyCalculator } from '../tool/epoxyCalculator/entry';
import { balusterCalculator } from '../tool/balusterCalculator/entry';
import { mortarCalculator } from '../tool/mortarCalculator/entry';
import { passepartoutCalculator } from '../tool/passepartoutCalculator/entry';
import { concreteCalculator } from '../tool/concreteCalculator/entry';
import { cutOptimizer } from '../tool/cutOptimizer/entry';
import { voltageDropCalculator } from '../tool/voltageDropCalculator/entry';
import { furnitureFit } from '../tool/furnitureFit/entry';
import { thermalExpansionCalculator } from '../tool/thermalExpansionCalculator/entry';
import { drillCalculator } from '../tool/drillCalculator/entry';
import { stairCalculator } from '../tool/stairCalculator/entry';
import { drillSharpener } from '../tool/drillSharpener/entry';
import { workshopFractionConverter } from '../tool/workshopFractionConverter/entry';

export const diyCategory: DiyCategoryEntry = {
  icon: 'mdi:hand',
  tools: [clayCalculator, epoxyCalculator, balusterCalculator, mortarCalculator, passepartoutCalculator, concreteCalculator, cutOptimizer, voltageDropCalculator, furnitureFit, thermalExpansionCalculator, drillCalculator, stairCalculator, drillSharpener, workshopFractionConverter],
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

