import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Verktyg och kalkylatorer för DIY och byggprojekt',
  description: 'Planera dina DIY projekt med kostnadsfria onlineverktyg. Kalkylatorer för lerkrympning, hartsmixer, betong, skäroptimerare och trapplayout.',
  seo: [
    { type: 'title', text: 'Hemteknik och DIY projekt: Från design till verklighet', level: 2 },
    { type: 'paragraph', html: '<strong>Do It Yourself (DIY)</strong>-rörelsen är inte längre bara en hobby utan en form av teknisk och kreativ självständighet. I den här sektionen tillhandahåller vi en uppsättning <strong>kostnadsfria onlineverktyg</strong> designade för makare, hantverkare och byggentusiaster som söker professionella resultat.' },
    { type: 'stats', columns: 2, items: [{ label: 'Optimering', value: 'Material 95%+', icon: 'mdi:saw-blade' }, { label: 'Säkerhet', value: 'Enligt Standard', icon: 'mdi:ruler-square' }, { label: 'Material', value: 'Återvinning', icon: 'mdi:tools' }, { label: 'Precision', value: 'Millimeterprecision', icon: 'mdi:calculator' }] },
  ],
};
