import type { DiyToolEntry } from '../../types';
import type { TwoStrokeMixtureCalculatorUI } from './ui';

export const twoStrokeMixtureCalculator: DiyToolEntry<TwoStrokeMixtureCalculatorUI> = {
  id: 'two-stroke-fuel-mixture-calculator',
  icons: { bg: 'mdi:gas-cylinder', fg: 'mdi:beaker-outline' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content)
  },
};
