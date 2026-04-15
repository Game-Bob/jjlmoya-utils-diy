import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'diy',
  title: 'DIY 및 건설 프로젝트를 위한 도구와 계산기',
  description: '무료 온라인 도구로 DIY 프로젝트를 계획하세요. 점토 수축, 레진 혼합, 콘크리트, 절단 최적화 및 계단 레이아웃 계산기.',
  seo: [
    { type: 'title', text: '홈 엔지니어링 및 DIY 프로젝트: 설계에서 현실까지', level: 2 },
    { type: 'paragraph', html: '<strong>DIY (Do It Yourself)</strong> 운동은 더 이상 단순한 취미가 아니라 기술적, 창의적 자립의 형태가 되었습니다. 이 섹션에서는 전문적인 결과를 원하는 메이커, 장인 및 건설 애호가들을 위해 설계된 일련의 <strong>무료 온라인 도구</strong>를 제공합니다.' },
    { type: 'stats', columns: 2, items: [{ label: '최적화', value: '자재 95%+', icon: 'mdi:saw-blade' }, { label: '안전', value: '규격 준수', icon: 'mdi:ruler-square' }, { label: '자재', value: '재활용', icon: 'mdi:tools' }, { label: '정밀도', value: '밀리미터 단위', icon: 'mdi:calculator' }] },
  ],
};
