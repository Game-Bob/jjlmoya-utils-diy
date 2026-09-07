import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'zh', slug: 'ladder-angle-and-reach-calculator', title: '梯子角度与到达高度计算器', description: '输入两个尺寸，计算梯脚距离、角度和到达高度，并与 1:4 放置参考进行比较。', faqTitle: '常见问题',
  faq: [
    { question: '这个梯子计算器计算什么？', answer: '输入目标高度、梯子长度和梯脚距离中的任意两个，即可计算第三个几何数值。工具还会分别显示角度、垂直到达高度和 1:4 参考值。' },
    { question: '为什么实际梯脚距离可能不同于 1:4 距离？', answer: '两者回答的是不同问题。目标高度为 3 米、梯子长 4 米时，正好到达该高度的三角形梯脚距离为 2.65 米；3 米高度对应的 1:4 参考距离是 0.75 米，所需最短梯长约为 3.09 米。' },
    { question: '如何检查能到达 3 米高度的梯子？', answer: '将目标高度设为 3 米，再输入现有梯子的长度。结果会显示实际梯脚距离和角度，并单独显示 1:4 参考值。' },
    { question: '三个计算模式分别是什么？', answer: '高度 + 梯子用于计算梯脚距离；高度 + 梯脚用于计算梯子长度；梯子 + 梯脚用于计算可到达高度。' },
    { question: '结果能保证梯子安全吗？', answer: '不能。这只是几何检查。使用前请检查梯子标签、地面、支撑、负载、通行空间和当地要求。' },
  ],
  howTo: [
    { name: '选择两个尺寸', text: '选择高度 + 梯子、高度 + 梯脚或梯子 + 梯脚。' },
    { name: '输入数值', text: '两个输入框请使用相同的单位制。' },
    { name: '查看几何结果', text: '查看输入尺寸形成的梯脚距离、角度和到达高度。' },
    { name: '与 1:4 比较', text: '决定放置位置前，先比较参考距离和最短梯长。' },
  ],
  seo: [
    { type: 'title', text: '梯子计算器能告诉你什么', level: 2 },
    { type: 'paragraph', html: '当你知道两个尺寸时，可以检查梯子是否能到达目标高度、梯脚需要离支撑多远，或需要多长的梯子。实际几何结果和 1:4 放置参考会分开显示。' },
    { type: 'title', text: '根据输入尺寸计算实际几何', level: 3 },
    { type: 'paragraph', html: '<strong>高度 + 梯子</strong>使用 <code>√(长度² − 高度²)</code> 计算梯脚距离。<strong>高度 + 梯脚</strong>计算梯子长度，<strong>梯子 + 梯脚</strong>计算可到达高度。' },
    { type: 'title', text: '1:4 放置参考', level: 3 },
    { type: 'paragraph', html: '1:4 参考表示每升高 4 个单位，梯脚向外放置 1 个单位。目标高度为 3 米时，参考距离为 0.75 米，满足该几何关系的最短梯长约为 3.09 米。' },
    { type: 'title', text: '如何理解结果', level: 3 },
    { type: 'list', items: ['角度越平，梯脚离支撑越远。', '角度越陡，梯脚离支撑越近。', '长于最短长度的梯子可能会高出目标高度。'] },
    { type: 'tip', title: '几何结果不是安全认证', html: '使用前请检查梯子、地面、支撑、负载、周围空间和制造商说明。' },
  ],
  ui: {
    unitSystemLabel: '单位制', unitMetric: '公制', unitImperial: '英制', intro: '输入两个尺寸。实际几何结果和 1:4 参考会分开显示。', solveTitle: '选择两个尺寸', modeHeightLength: '高度 + 梯子', modeHeightBase: '高度 + 梯脚', modeLengthBase: '梯子 + 梯脚', modeHeightLengthHint: '检查实际梯脚距离', modeHeightBaseHint: '计算梯子长度', modeLengthBaseHint: '计算到达高度', fieldHeight: '目标高度', fieldLength: '现有梯子长度', fieldBase: '支撑到梯脚的距离', fieldHeightHelp: '需要到达的高度', fieldLengthHelp: '梯子的长度', fieldBaseHelp: '地面上的水平距离', calculatedTitle: '为你计算', calculatedBase: '实际梯脚距离', calculatedBaseHelp: '由这两个尺寸得出', calculatedLength: '梯子长度', calculatedLengthHelp: '对应此高度和梯脚距离', calculatedHeight: '可到达高度', calculatedHeightHelp: '对应此梯子和梯脚距离', diagramTitle: '结果几何图', angleTitle: '角度', angleUnit: '°', angleGuide: '侧视图显示梯子、支撑、目标高度、梯脚距离和 1:4 参考', reachTitle: '垂直到达高度', reachHelp: '支撑处的高度', targetTitle: '目标高度', targetHelp: '要求的高度', baseTitle: '梯脚距离', baseHelp: '地面上的水平距离', guideDistanceTitle: '目标高度的 1:4 梯脚距离', guideDistanceHelp: '目标高度 ÷ 4', requiredLengthTitle: '1:4 下的最短梯长', requiredLengthHelp: '对应目标高度', verdictReach: '可以到达目标', verdictShort: '此设置达不到目标', verdictReachHelp: '垂直到达高度达到或超过目标高度。', verdictShortHelp: '可以选择更长的梯子或改变几何关系，但请确认最终设置适合使用。', angleTooFlat: '比参考更平', angleWithinGuide: '接近 1:4 参考', angleTooSteep: '比参考更陡', ladderLabel: '梯子', wallLabel: '支撑', targetLabel: '目标', baseLabel: '梯脚距离', groundLabel: '地面', guideLabel: '1:4 参考', invalidPositive: '请输入两个正数尺寸。', invalidBase: '梯脚距离必须小于梯子长度。', invalidTarget: '目标高度必须小于梯子长度。', warning: '仅供几何参考。请遵守梯子标签和制造商说明。', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
