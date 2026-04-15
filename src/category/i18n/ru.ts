import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'Инструменты и калькуляторы для DIY и строительных проектов',
  description: 'Планируйте свои DIY-проекты с помощью бесплатных онлайн-инструментов. Калькуляторы усадки глины, смесей смол, бетона, оптимизаторы резки и планировка лестниц.',
  seo: [
    { type: 'title', text: 'Домашняя инженерия и DIY-проекты: от идеи к реальности', level: 2 },
    { type: 'paragraph', html: 'Движение <strong>Do It Yourself (DIY)</strong> перестало быть просто хобби, превратившись в форму технического и творческого суверенитета. В этом разделе мы предоставляем набор <strong>бесплатных онлайн-инструментов</strong>, разработанных для мейкеров, мастеров и любителей строительства, стремящихся к профессиональным результатам.' },
    { type: 'stats', columns: 2, items: [{ label: 'Оптимизация', value: 'Материал 95%+', icon: 'mdi:saw-blade' }, { label: 'Безопасность', value: 'Нормативы', icon: 'mdi:ruler-square' }, { label: 'Материалы', value: 'Восстановление', icon: 'mdi:tools' }, { label: 'Точность', value: 'Миллиметровая', icon: 'mdi:calculator' }] },
  ],
};
