import type { DiyCategoryEntry } from '../types';
import { clayCalculator } from '../tool/clayCalculator/index';
import { epoxyCalculator } from '../tool/epoxyCalculator/index';
import { balusterCalculator } from '../tool/balusterCalculator/index';
import { mortarCalculator } from '../tool/mortarCalculator/index';
import { passepartoutCalculator } from '../tool/passepartoutCalculator/index';
import { concreteCalculator } from '../tool/concreteCalculator/index';

export const diyCategory: DiyCategoryEntry = {
  icon: 'mdi:hand',
  tools: [clayCalculator, epoxyCalculator, balusterCalculator, mortarCalculator, passepartoutCalculator, concreteCalculator],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

