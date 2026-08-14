import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'drywall-calculator';
const title = '石膏板用量与轻钢龙骨计算器';
const description = '专业的隔墙与贴面墙石膏板用量计算器。准确计算石膏板、C型竖向龙骨、U型沿顶沿地龙骨、自攻螺 clandestine、接缝纸带与嵌缝腻子用量。';

const faqData = [
  {
    question: '如何计算隔墙所需的石膏板数量？',
    answer: '将墙体长度乘以层高计算出净墙面积。双面隔墙乘以2，双层双面封板乘以4。除以单张石膏板有效面积（120x240cm板约2.88平方米），并加上10%的损耗率。',
  },
  {
    question: '龙骨间距应该选择40cm还是60cm？',
    answer: '标准60cm间距适用于3.0米以下普通干燥室内隔墙。若墙面贴重型瓷砖、处于潮湿环境（浴室、厨房）或墙高超过3.0米，必须采用40cm龙骨间距。',
  },
  {
    question: '不同区域应该选择哪种石膏板？',
    answer: '普通卧室使用标准白板（A型）；浴室厨房使用耐水绿板（H1型）；烟道与机房周边使用防火粉红板（F型）；隔音墙体使用高密度隔音蓝板。',
  },
  {
    question: '每张石膏板需要多少颗自攻螺钉？',
    answer: '单层封板时，每张120x240cm石膏板约需30颗自攻螺钉（3.5x25mm）。边缘间距25cm，中间龙骨间距30cm。',
  },
  {
    question: '为什么沿顶沿地龙骨下方必须铺设隔音密封胶带？',
    answer: '自粘聚乙烯隔音胶带能阻断U型龙骨与楼板地面之间的机械振动传递，防止结构传声与声漏。',
  },
];

const howToData = [
  { name: '输入墙体尺寸', text: '输入隔墙长度与层高（米或英尺）。' },
  { name: '配置龙骨间距与封板层数', text: '选择龙骨间距（40cm或60cm）、单层/双层封板及单面/双面施工。' },
  { name: '查看材料清单与CAD图', text: '查看龙骨、螺钉、接缝带、腻子清单及龙骨立面排布图。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '轻钢龙骨石膏板隔墙结构计算原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '轻钢龙骨隔墙施工中，镀锌钢板C型竖向龙骨与U型沿顶沿地龙骨的合理布置及板缝错缝排列是防止挠度变形与接缝开裂的关键。',
    },
    {
      type: 'title',
      text: '龙骨间距规范: 40cm与60cm对比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>60cm间距</strong>是120cm宽石膏板的标准配置。贴饰面砖或墙高大于3.0米时必须采用<strong>40cm间距</strong>。',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '板缝错缝与螺钉固定规范',
      html: '<p>严禁出现十字通缝，相邻石膏板竖缝应错开至少40cm。螺钉固定间距为<strong>板边25cm</strong>，<strong>板中30cm</strong>。</p>',
    },
    {
      type: 'title',
      text: '损耗率与嵌缝腻子用量计算',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '门窗洞口裁切需预留<strong>10%损耗率</strong>。接缝处理每平方米约消耗0.8kg嵌缝腻子。',
    },
  ],
  ui: {
    unitSystemLabel: '计量单位体系',
    unitMetric: '公制 (m, cm, kg)',
    unitImperial: '英制 (ft, in, lb)',

    paramLengthLabel: '墙体长度',
    paramHeightLabel: '墙体高度 (层高)',
    paramSpacingLabel: '竖向龙骨间距',
    paramSpacing40Metric: '40 cm (高承重)',
    paramSpacing60Metric: '60 cm (标准)',
    paramSpacing40Imperial: '16 in (高承重)',
    paramSpacing60Imperial: '24 in (标准)',
    paramLayersLabel: '封板层数',
    paramSingleLayer: '单层封板',
    paramDoubleLayer: '双层封板',
    paramSidesLabel: '施工面',
    paramDoubleSided: '双面施工 (隔墙)',
    paramSingleSided: '单面施工 (贴面墙)',
    paramBoardTypeLabel: '石膏板类型',
    boardTypeStandard: '标准白板 (A型)',
    boardTypeMoisture: '耐水绿板 (H1型)',
    boardTypeFire: '防火粉红板 (F型)',
    boardTypeAcoustic: '隔音蓝板 (A型)',
    paramWasteLabel: '损耗预留率',

    summaryWallArea: '净墙面积',
    summaryBoardArea: '石膏板总铺设面积',

    resBoardsLabel: '石膏板数量',
    resBoardsUnit: '张',
    resStudsLabel: 'C型竖向龙骨 (主龙骨)',
    resStudsUnit: '根',
    resTracksLabel: 'U型沿顶沿地龙骨',
    resTracksUnit: '根',
    resDrywallScrewsLabel: '石膏板自攻螺钉',
    resDrywallScrewsUnit: '颗',
    resFramingScrewsLabel: '龙骨连接螺钉 (穿心钉)',
    resFramingScrewsUnit: '颗',
    resJointTapeLabel: '接缝纸带/网格带',
    resJointTapeUnit: '长度',
    resJointCompoundLabel: '嵌缝膏/石膏腻子',
    resJointCompoundUnit: '重量',
    resAcousticBandLabel: '减震隔音密封带',
    resAcousticBandUnit: '长度',

    diagramWallTitle: 'CAD 龙骨立面排布图',
    diagramStudLegend: 'C型竖向龙骨',
    diagramTrackLegend: 'U型沿顶沿地龙骨',
    diagramBoardLegend: '错缝拼板模式',
    diagramModeStructure: '轻钢骨架',
    diagramModeBoard: '石膏板封板',
  },
};
