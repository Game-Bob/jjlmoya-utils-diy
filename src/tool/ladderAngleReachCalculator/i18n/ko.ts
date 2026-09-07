import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'ko', slug: 'ladder-angle-and-reach-calculator', title: '사다리 각도 및 도달 높이 계산기', description: '두 가지 치수로 사다리의 바닥 거리, 각도, 도달 높이를 계산하고 1:4 설치 기준과 비교합니다.', faqTitle: '자주 묻는 질문',
  faq: [
    { question: '이 계산기는 무엇을 계산하나요?', answer: '목표 높이, 사다리 길이, 벽에서 바닥까지의 거리 중 두 가지를 입력하면 나머지 값을 계산합니다. 각도와 수직 도달 높이, 1:4 기준도 따로 표시합니다.' },
    { question: '실제 바닥 거리와 1:4 거리가 다른 이유는 무엇인가요?', answer: '서로 다른 값을 나타내기 때문입니다. 목표 높이 3 m와 사다리 4 m라면 실제 삼각형의 바닥 거리는 2.65 m입니다. 1:4 기준은 0.75 m이며 최소 사다리 길이는 약 3.09 m입니다.' },
    { question: '높이 3 m에 닿는 사다리는 어떻게 확인하나요?', answer: '목표 높이에 3 m와 사용 가능한 사다리 길이를 입력하세요. 실제 바닥 거리와 각도, 그리고 1:4 기준을 함께 확인할 수 있습니다.' },
    { question: '세 가지 계산 모드는 무엇인가요?', answer: '높이 + 사다리는 바닥 거리를, 높이 + 바닥 거리는 사다리 길이를, 사다리 + 바닥 거리는 도달 높이를 계산합니다.' },
    { question: '이 결과만으로 안전하다고 볼 수 있나요?', answer: '아니요. 기하학적 확인일 뿐입니다. 사다리 라벨, 바닥, 지지점, 하중, 접근 공간과 현지 규정을 확인하세요.' },
  ],
  howTo: [
    { name: '두 치수 선택', text: '높이 + 사다리, 높이 + 바닥 거리, 사다리 + 바닥 거리 중 하나를 선택합니다.' },
    { name: '값 입력', text: '두 입력란에 같은 단위 체계를 사용합니다.' },
    { name: '기하 결과 확인', text: '입력한 값으로 만들어지는 바닥 거리, 각도, 도달 높이를 읽습니다.' },
    { name: '1:4와 비교', text: '설치 위치를 정하기 전에 기준 거리와 최소 길이를 확인합니다.' },
  ],
  seo: [
    { type: 'title', text: '사다리 계산기가 보여주는 것', level: 2 },
    { type: 'paragraph', html: '두 가지 치수만 알고 있을 때 사다리가 목표 높이에 닿는지, 바닥이 얼마나 떨어지는지, 어떤 각도가 되는지 확인하세요. 실제 삼각형과 1:4 기준은 따로 보여줍니다.' },
    { type: 'title', text: '입력값으로 계산하는 실제 기하', level: 3 },
    { type: 'paragraph', html: '<strong>높이 + 사다리</strong>는 <code>√(길이² − 높이²)</code>로 바닥 거리를 계산합니다. <strong>높이 + 바닥 거리</strong>는 사다리 길이를, <strong>사다리 + 바닥 거리</strong>는 도달 높이를 계산합니다.' },
    { type: 'title', text: '1:4 설치 기준', level: 3 },
    { type: 'paragraph', html: '1:4 기준은 높이 4마다 바닥을 1만큼 바깥에 둔다는 뜻입니다. 높이 3 m라면 기준 거리는 0.75 m이고 최소 길이는 약 3.09 m입니다.' },
    { type: 'title', text: '결과 해석 방법', level: 3 },
    { type: 'list', items: ['각도가 완만할수록 바닥은 지지점에서 멀어집니다.', '각도가 가파를수록 바닥은 지지점에 가까워집니다.', '최소 길이보다 긴 사다리는 목표 높이보다 위로 올라갈 수 있습니다.'] },
    { type: 'tip', title: '기하 계산은 안전 인증이 아닙니다', html: '사용 전에 사다리, 바닥, 지지점, 하중, 주변 공간과 제조사 지침을 확인하세요.' },
  ],
  ui: {
    unitSystemLabel: '단위 체계', unitMetric: '미터법', unitImperial: '야드파운드법', intro: '두 가지 치수를 입력하세요. 실제 기하와 1:4 기준은 따로 표시됩니다.', solveTitle: '두 치수 선택', modeHeightLength: '높이 + 사다리', modeHeightBase: '높이 + 바닥 거리', modeLengthBase: '사다리 + 바닥 거리', modeHeightLengthHint: '실제 바닥 거리 확인', modeHeightBaseHint: '사다리 길이 계산', modeLengthBaseHint: '도달 높이 계산', fieldHeight: '목표 높이', fieldLength: '사용 가능한 사다리 길이', fieldBase: '벽에서 바닥까지 거리', fieldHeightHelp: '도달해야 하는 높이', fieldLengthHelp: '사다리 길이', fieldBaseHelp: '지면의 수평 거리', calculatedTitle: '계산 결과', calculatedBase: '실제 바닥 거리', calculatedBaseHelp: '두 치수로 계산', calculatedLength: '사다리 길이', calculatedLengthHelp: '이 높이와 바닥 거리에서', calculatedHeight: '도달 높이', calculatedHeightHelp: '이 사다리와 바닥 거리에서', diagramTitle: '결과의 기하', angleTitle: '각도', angleUnit: '°', angleGuide: '사다리, 지지점, 목표 높이, 바닥 거리와 1:4 기준을 보여주는 측면도', reachTitle: '수직 도달 높이', reachHelp: '지지점에서의 높이', targetTitle: '목표 높이', targetHelp: '입력한 높이', baseTitle: '바닥 거리', baseHelp: '지면의 수평 거리', guideDistanceTitle: '목표 높이의 1:4 거리', guideDistanceHelp: '목표 높이 ÷ 4', requiredLengthTitle: '1:4 최소 길이', requiredLengthHelp: '목표 높이에 필요한 길이', verdictReach: '목표에 도달합니다', verdictShort: '이 배치로는 목표보다 낮습니다', verdictReachHelp: '수직 도달 높이가 목표 높이 이상입니다.', verdictShortHelp: '더 긴 사다리나 다른 기하를 선택할 수 있지만 최종 배치가 적합한지 확인하세요.', angleTooFlat: '기준보다 완만함', angleWithinGuide: '1:4 기준에 가까움', angleTooSteep: '기준보다 가파름', ladderLabel: '사다리', wallLabel: '지지점', targetLabel: '목표', baseLabel: '바닥 거리', groundLabel: '지면', guideLabel: '1:4 기준', invalidPositive: '양수인 치수 두 개를 입력하세요.', invalidBase: '바닥 거리는 사다리 길이보다 짧아야 합니다.', invalidTarget: '목표 높이는 사다리 길이보다 낮아야 합니다.', warning: '기하 계산만 제공합니다. 사다리 라벨과 제조사 지침을 따르세요.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
