import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Narzędzia i Kalkulatory dla Projektów DIY i Budowlanych',
  description: 'Zaplanuj swoje projekty DIY dzięki darmowym narzędziom online. Kalkulatory skurczu gliny, mieszanek żywicy, betonu, optymalizatory cięcia i tyczenia schodów.',
  seo: [
    { type: 'title', text: 'Inżynieria domowa i projekty DIY: Od projektu do rzeczywistości', level: 2 },
    { type: 'paragraph', html: 'Ruch <strong>Do It Yourself (DIY)</strong> przestał być zwykłym hobby, stając się formą technicznej i kreatywnej suwerenności. W tej sekcji udostępniamy zestaw <strong>darmowych narzędzi online</strong> zaprojektowanych dla twórców, rzemieślników i entuzjastów budownictwa szukających profesjonalnych efektów.' },
    { type: 'stats', columns: 2, items: [{ label: 'Optymalizacja', value: 'Materiał 95%+', icon: 'mdi:saw-blade' }, { label: 'Bezpieczeństwo', value: 'Zgodne z Normatywami', icon: 'mdi:ruler-square' }, { label: 'Materiały', value: 'Odzysk', icon: 'mdi:tools' }, { label: 'Precyzja', value: 'Milimetrowa', icon: 'mdi:calculator' }] },
  ],
};
