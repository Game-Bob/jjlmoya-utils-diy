import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Tools en Calculators voor DIY en Bouwprojecten',
  description: 'Plan je DIY projecten met gratis online tools. Calculators voor kleikrimp, harsmengsels, beton, zaagoptimalisatie en trappenlay-out.',
  seo: [
    { type: 'title', text: 'Thuisengineering en DIY projecten: Van Ontwerp tot Realiteit', level: 2 },
    { type: 'paragraph', html: 'De <strong>Do It Yourself (DIY)</strong> beweging is niet langer een simpele hobby, maar een vorm van technische en creatieve soevereiniteit. In deze sectie bieden we een reeks <strong>gratis online tools</strong> aan, ontworpen voor makers, ambachtslieden en bouwliefhebbers die op zoek zijn naar professionele resultaten.' },
    { type: 'stats', columns: 2, items: [{ label: 'Optimalisatie', value: 'Materiaal 95%+', icon: 'mdi:saw-blade' }, { label: 'Veiligheid', value: 'Volgens Normen', icon: 'mdi:ruler-square' }, { label: 'Materialen', value: 'Hergebruik', icon: 'mdi:tools' }, { label: 'Precisie', value: 'Millimeternauwkeurig', icon: 'mdi:calculator' }] },
  ],
};
