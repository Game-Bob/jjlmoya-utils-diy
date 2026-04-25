import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'two-stroke-fuel-mixture-calculator';
const title = '2冲程燃油混合比例计算器：精准的机油燃油比';
const description = '瞬时计算精准的2冲程发动机燃油混合比例。电锯、助力车、摩托车和小型发动机必备工具。支持 1:25, 1:33, 1:40 和 1:50 比例。';

const faqData = [
  {
    question: '什么是2冲程发动机？',
    answer: '2冲程发动机通过活塞的两次冲程完成吸气和作功循环，这使得它比4冲程发动机更简单、更轻便。它们通常用于驱动电锯、吹叶机、助力车和部分摩托车。它们需要将机油直接混合到燃油中进行润滑。',
  },
  {
    question: '常见的燃油机油混合比例是多少？',
    answer: '常见的比例有 1:25（油多，保护性强）、1:33（旧型号设备）、1:40（标准）和 1:50（油少，现代发动机）。请查看发动机手册获取准确比例——使用错误比例会损坏发动机。',
  },
  {
    question: '如果比例混合错了会怎样？',
    answer: '机油过多（浓混合气）会导致产生大量浓烟、火花塞积碳和性能下降。机油过少（稀混合气）则会导致活塞拉缸、损坏活塞，甚至发动机报废。',
  },
  {
    question: '我应该使用什么类型的机油？',
    answer: '请使用适用于您设备的2冲程专用发动机油。优质合成2冲程油比普通矿物油提供更好的保护和更清洁的燃烧。切勿使用4冲程机油——那会损坏发动机。',
  },
  {
    question: '如何混合燃油和机油？',
    answer: '先将部分汽油倒入洁净容器中，加入计算出的机油量，然后再倒入剩余的汽油。剧烈摇晃1-2分钟使之充分混合。在容器上标注混合日期。',
  },
];

const howToData = [
  { name: '确认比例', text: '查看发动机手册或设备标签。常见比例：电锯（1:40 或 1:50）、助力车（1:33）、老式摩托车（1:25）。比例错误会损毁发动机。' },
  { name: '测量燃油体积', text: '确定您需要的汽油量。本工具支持升、加仑或任何体积单位。准确测量汽油量 = 准确获得机油量。' },
  { name: '计算所需机油', text: '输入燃油体积和比例。计算器将准确显示达到完美混合比例所需的机油量（毫升或升）。' },
  { name: '仔细混合', text: '将燃油倒入洁净容器，加入计算出的机油，再加入剩余燃油。摇晃1-2分钟直至完全融合。' },
  { name: '标注并使用', text: '在容器上标明日期和混合比例。为了获得最佳效果，混合后的燃油请在30天内用完（特别是使用合成油时）。' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '2冲程燃油混合计算器：电锯与助力车的精准机油比', level: 2 },
    { type: 'paragraph', html: '二冲程发动机需要极其精准的燃油与机油混合比例才能正常运转。比例错误可能会在几分钟内彻底损坏发动机。本计算器可根据您的燃油体积和发动机类型瞬间确定所需的准确机油量，消除作业现场的所有猜测。' },

    { type: 'title', text: '为什么2冲程发动机需要在燃油中混入机油？', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: '关键区别', html: '与拥有独立油底壳的4冲程发动机不同，2冲程发动机直接将机油混入燃油。在每一次作功冲程中，发动机燃烧燃油混合气，既提供动力又进行润滑。这里没有油泵，全靠混合燃油来维持活塞寿命。' },

    { type: 'title', text: '2冲程混合比例快速参考', level: 3 },
    { type: 'table', headers: ['比例', '机油 %', '应用场景', '发动机类型', '特点'], rows: [
      ['1:25', '3.85%', '最大保护', '1980年代以前的设备、高负荷使用、复古摩托车', '油浓：烟雾较多，易积碳，但对拉缸的保护性最强'],
      ['1:33', '2.94%', '经典设备', '80-90年代的小型发动机、老旧电锯', '浓度适中：在保护性与效率之间取得平衡'],
      ['1:40', '2.44%', '行业标准', '大多数现代电锯、助力车、现代小型发动机', '标准推荐：专为当今的合成机油设计'],
      ['1:50', '1.96%', '现代高效', '最新款电锯、高性能助力车、新型摩托车', '油稀：烟雾极少，燃烧更清洁，仅适用于优质合成油']
    ] },

    { type: 'title', text: '比例错误带来的后果', level: 3 },
    { type: 'proscons', items: [
      { pro: '机油过多（混合气浓）', con: '大量白烟、火花塞积碳污染、加速无力、发动机故障' },
      { pro: '机油过少（混合气稀）', con: '数秒内活塞拉缸、气缸壁划伤、灾难性发动机损毁' },
      { pro: '比例正确', con: '运行平顺、润滑充分、燃烧状态佳、延长发动机寿命、启动可靠' }
    ] },

    { type: 'title', text: '常见设备比例', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: '电锯', html: '<strong>Stihl, Husqvarna, Echo:</strong> 现代机型通常要求 1:40 或 1:50。请务必核对手册——在现代机型上使用 1:25 可能导致积碳和性能下降。90年代及以前的老款机型可能指定 1:25 或 1:33。' },
    { type: 'card', icon: 'mdi:motorcycle', title: '助力车与摩托车', html: '<strong>Vespa, Honda, Yamaha:</strong> 旧型号大多要求 1:33，现代机型则为 1:40–1:50。高性能街道车辆通常指定 1:50 比例。维修手册是唯一的准确依据。' },
    { type: 'card', icon: 'mdi:tools', title: '吹叶机与打草机', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> 通常为 1:50（现代）或 1:40。这些工具专为快速季节性使用设计，稀比例可在不牺牲可靠性的前提下减少烟雾。' },

    { type: 'title', text: '机油类型与比例同样重要', level: 3 },
    { type: 'comparative', items: [
      { title: '矿物2冲程机油', description: '偶尔使用的经济选择。灰分较高，烟雾较多，对标准比例提供足够保护。', icon: 'mdi:beaker', points: ['价格低廉', '烟雾明显', '积碳较多', '适用于 1:40 比例'] },
      { title: '合成2冲程机油', description: '频繁使用者的优质选择。燃烧更清洁，保护性更好，允许更稀的比例。', icon: 'mdi:flame', points: ['极低烟雾排放', '最佳发动机保护', '可安全支持 1:50 比例', '储存稳定性更高'], highlight: true },
      { title: '半合成机油 (Semi synthetic)', description: '矿物与全合成之间的中间选择。价格合理，保护性佳。厂家常见推荐。', icon: 'mdi:beaker-outline', points: ['性能均衡', '成本适中', '非常适合 1:40 比例', '比矿物油更少烟雾'] }
    ], columns: 3 },

    { type: 'title', text: '分步混合流程', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: '正确混合方法', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>使用专用容器</strong>：仅用于燃油混合的洁净、干燥、有标注的容器。</li><li><strong>先倒入一半汽油</strong>：先将汽油倒入容器。</li><li><strong>加入计算出的机油量</strong>：请使用此计算器获取精准数值。</li><li><strong>倒入剩余汽油</strong>：达到目标总体积。</li><li><strong>剧烈摇晃 1–2 分钟</strong>：直到颜色均匀一致。均匀混合 = 稳定润滑。</li><li><strong>标注容器</strong>：写明日期、比例和燃油类型。</li><li><strong>30天内用完</strong>：合成油最多可延长至60天。</li></ol>' },

    { type: 'title', text: '何时该怀疑您的设备手册', level: 3 },
    { type: 'tip', html: '<strong>务必先核对手册。</strong> 如果找不到，请访问官网或咨询客服。切勿盲目猜测——比例错误会导致保修失效并面临拉缸风险。如果是老式机器手册丢失，请根据型号在网上搜索。' },

    { type: 'title', text: '词汇表：2冲程术语解释', level: 3 },
    { type: 'glossary', items: [
      { term: '稀混合 (Lean)', definition: '机油比例过低（如 1:50）。由于润滑不足，存在拉缸风险。' },
      { term: '浓混合 (Rich)', definition: '机油比例过高（如 1:25）。会导致大量浓烟、火花塞积碳。' },
      { term: '均匀混合', definition: '燃料与机油完全融合的状态，需通过剧烈摇晃实现。对润滑至关重要。' },
      { term: '拉缸 (Seizure)', definition: '因润滑不足和摩擦过热，活塞在气缸内卡死。会导致发动机彻底报废。' },
      { term: '合成油', definition: '实验室研制的高性能油品，提供更强保护、更净燃烧和更好的温度稳定性。' },
      { term: '2冲程发动机', definition: '活塞往复两次即完成一次作功。结构简单，重量轻。' },
      { term: '4冲程发动机', definition: '拥有独立油路，机油不混入燃油。结构较复杂但效率高。' }
    ] },

    { type: 'title', text: '计算器如何为您省时省钱', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: '计算准确，无测量误差', icon: 'mdi:check-circle' },
      { value: '瞬时', label: '秒出结果，无需心算猜测', icon: 'mdi:flash' },
      { value: '4档比例', label: '涵盖 1:25, 1:33, 1:40, 1:50', icon: 'mdi:counter', trend: { value: '支持自定义比例', positive: true } },
      { value: '可分享', label: '通过 URL 复制并分享您的精确配置', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: '会毁掉发动机的常见错误', level: 3 },
    { type: 'diagnostic', variant: 'error', title: '在2冲程机中使用4冲程机油', icon: 'mdi:alert', badge: '引擎杀手', html: '4冲程机油专为循环流动设计，不适合燃烧。在2冲程机中使用会导致严重的积碳并损毁引擎。' },
    { type: 'diagnostic', variant: 'warning', title: '混合不充分', icon: 'mdi:alert', badge: '拉缸风险', html: '如果油和汽油没有完全融合，发动机部分组件会在无润滑状态下运转。请务必摇晃 1-2 分钟。' },
    { type: 'diagnostic', variant: 'warning', title: '使用过期燃油（超过60天）', icon: 'mdi:alert', badge: '胶质积聚', html: '混合燃油会随时间分解。过期混合油会在化油器中留下胶质。请仅混合30天内能用完的量。' },

    { type: 'title', text: '摘要', level: 3 },
    { type: 'summary', title: '混合前请确认', items: [
      '核对手册获取厂家指定的准确比例。',
      '确保使用的是2冲程专用油，而非4冲程或其他油品。',
      '使用洁净的专用盛油容器。',
      '使用新鲜汽油和兼容的2冲程机油。',
      '充分混合并标注日期和比例。',
      '混合油请在30天内用完。'
    ] },
  ],
  ui: {
    titleMain: '2冲程燃油混合比例计算器',
    labelFuelVolume: '燃油量',
    labelRatio: '混合比例',
    labelOilRequired: '所需机油',
    labelTotalMixture: '混合总量',
    labelRichness: '混合气浓度',
    labelPresets: '常用比例',
    labelCustomRatio: '自定义比例 (1:X)',
    btnClear: '清空',
    btnCopyResults: '复制结果',
    btnSwitchMode: '切换模式',
    unitLiters: '升',
    unitMilliliters: '毫升',
    richLean: '稀（油少，拉缸风险）',
    richBalanced: '平衡（标准混合）',
    richRich: '浓（油多，保护引擎）',
    msgReady: '就绪',
    msgMixtureReady: '计算完毕',
    tooltipFuelVolume: '输入汽油体积（升）',
    tooltipRatio: '输入比例数值（如 25, 33, 40 或 50）',
    recipientLabel: '混合容器',
    oilPercentage: '机油 %',
    labelVolume: '体积',
    labelRatioShort: '比例',
    labelOilTip: '2% 机油混合 = 1:50 比例',
    labelMixingTips: '混合技巧',
    labelMixingTipsDesc: '使用洁净容器：先加汽油，再加计量的机油，最后补足汽油。摇晃1-2分钟直至均匀。标注日期和比例。',
    recipePrefix: '对于',
    recipeAt: '的燃油（比例为',
    recipeAdd: '请加入',
    recipeOfOil: '2冲程机油。',
    copyTextPrefix: '2冲程混合',
    copyTextFuel: '燃油',
    copyTextOil: '机油',
  },
};
