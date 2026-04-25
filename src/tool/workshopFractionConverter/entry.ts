import type { DiyToolEntry } from '../../types';
import type { WorkshopFractionConverterUI } from './ui';

export const workshopFractionConverter: DiyToolEntry<WorkshopFractionConverterUI> = {
  id: 'workshop-fraction-converter',
  icons: { bg: 'mdi:tools', fg: 'mdi:ruler' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};
