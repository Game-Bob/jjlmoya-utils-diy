import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'DIY・建設プロジェクト向けツールと計算機',
  description: '無料のオンラインツールでDIYプロジェクトを計画しましょう。粘土の収縮、レジン混合、コンクリート、カット最適化、階段の設計などの計算機。',
  seo: [
    { type: 'title', text: 'ホームエンジニアリングとDIYプロジェクト：設計から実現まで', level: 2 },
    { type: 'paragraph', html: '<strong>DIY (Do It Yourself)</strong> ムーブメントは、単なる趣味ではなく、技術的および創造的な自立の形へと進化しました。このセクションでは、プロフェッショナルな結果を求めるメーカー、職人、建設愛好家向けに設計された一連の<strong>無料オンラインツール</strong>を提供しています。' },
    { type: 'stats', columns: 2, items: [{ label: '最適化', value: '材料利用率 95%+', icon: 'mdi:saw-blade' }, { label: '安全性', value: '規格準拠', icon: 'mdi:ruler-square' }, { label: '材料', value: '再利用', icon: 'mdi:tools' }, { label: '精度', value: 'ミリ単位', icon: 'mdi:calculator' }] },
  ],
};
