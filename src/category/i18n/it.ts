import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Strumenti e Calcolatori per Progetti DIY e Costruzione',
  description: 'Pianifica i tuoi progetti fai da te con strumenti online gratuiti. Calcolatori per il ritiro dell\'argilla, miscele di resina, cemento, ottimizzatori di taglio e layout scale.',
  seo: [
    { type: 'title', text: 'Ingegneria Domestica e Progetti DIY: Dal Design alla Realtà', level: 2 },
    { type: 'paragraph', html: 'Il movimento <strong>Do It Yourself (DIY)</strong> non è più un semplice hobby ma una forma di sovranità tecnica e creativa. In questa sezione, forniamo una suite di <strong>strumenti online gratuiti</strong> progettati per maker, artigiani e appassionati di costruzioni che cercano risultati professionali.' },
    { type: 'stats', columns: 2, items: [{ label: 'Ottimizzazione', value: 'Materiale 95%+', icon: 'mdi:saw-blade' }, { label: 'Sicurezza', value: 'Normativa', icon: 'mdi:ruler-square' }, { label: 'Materiali', value: 'Recupero', icon: 'mdi:tools' }, { label: 'Precisione', value: 'Millimetrica', icon: 'mdi:calculator' }] },
  ],
};
