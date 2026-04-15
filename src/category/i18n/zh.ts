import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: '针对 DIY 和建筑项目的工具与计算器',
  description: '使用免费在线工具规划您的 DIY 项目。包含粘土收缩、树脂混合、混凝土、切割优化和楼梯布局等计算器。',
  seo: [
    { type: 'title', text: '居家工程与 DIY 项目：从设计到现实', level: 2 },
    { type: 'paragraph', html: '<strong>DIY (Do It Yourself)</strong> 运动已不再仅仅是一种简单的爱好，而是一种技术和创造力的自主形式。在本节中，我们为寻求专业效果的高手、工匠和建筑爱好者提供了一系列<strong>免费在线工具</strong>。' },
    { type: 'stats', columns: 2, items: [{ label: '优化', value: '材料利用 95%+', icon: 'mdi:saw-blade' }, { label: '安全', value: '符合标准', icon: 'mdi:ruler-square' }, { label: '材料', value: '回收利用', icon: 'mdi:tools' }, { label: '精度', value: '毫米级', icon: 'mdi:calculator' }] },
  ],
};
