import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Werkzeuge und Rechner für Heimwerker und Bauprojekte',
  description: 'Planen Sie Ihre Heimwerkerprojekte mit kostenlosen Online-Tools. Rechner für Tonschrumpfung, Harzmischungen, Beton, Schnittoptimierer und Treppenlayout.',
  seo: [
    { type: 'title', text: 'Heimtechnik und DIY Projekte: Vom Entwurf zur Realität', level: 2 },
    { type: 'paragraph', html: 'Die <strong>Do-It-Yourself (DIY)</strong>-Bewegung ist kein bloßes Hobby mehr, sondern eine Form der technischen und kreativen Souveränität. In diesem Bereich bieten wir eine Reihe von <strong>kostenlosen Online-Tools</strong> an, die für Maker, Handwerker und Bauinteressierte entwickelt wurden, die professionelle Ergebnisse anstreben.' },
    { type: 'stats', columns: 2, items: [{ label: 'Optimierung', value: 'Material 95%+', icon: 'mdi:saw-blade' }, { label: 'Sicherheit', value: 'Normgerecht', icon: 'mdi:ruler-square' }, { label: 'Materialien', value: 'Wiederverwertung', icon: 'mdi:tools' }, { label: 'Präzision', value: 'Millimetergenau', icon: 'mdi:calculator' }] },
  ],
};
