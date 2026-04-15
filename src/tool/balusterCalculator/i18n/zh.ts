import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';

const slug = 'baluster-calculator';
const title = '楼梯护栏子柱计算器：精确间距计算';
const description =
  '根据10厘米安全规范，精确计算护栏子柱（栏杆）之间的间距。提供自动图面计划。';

const faqData = [
  {
    question: '子柱之间的法定最大距离是多少？',
    answer:
      '在大多数国际建筑规范中，为了防止儿童发生意外，护栏元素之间的净空距离必须不能让直径为10厘米的球体通过。',
  },
  {
    question: '间距是如何测量的：中心距还是净空？',
    answer:
      "我们的计算器同时提供这两项数据。「净空（Clearance）」是子柱之间的实际空隙（对安全至关重要），而「中心距（On-center）」是指示每个子柱钻孔或固定位置的标记。",
  },
  {
    question: '如果分配结果不是整数怎么办？',
    answer:
      '计算器会自动调整子柱数量，使第一个和最后一个空隙完全相同，从而保证视觉上的对称性，并严格遵守最大允许空隙的规定。',
  },
  {
    question: '子柱是焊接好还是螺栓固定好？',
    answer:
      '这取决于材料。对于钢材，焊接能提供最大的结构刚性。对于木材或铝材，通常使用机械锚栓或穿透螺栓。关键是护栏必须能承受至少0.8 kN/m的水平推力。',
  },
];

const howToData = [
  {
    name: '测量总长度',
    text: '测量将要安装护栏的第一根和最后一根柱子之间的精确距离。',
  },
  {
    name: '定义子柱厚度',
    text: '测量单根子柱的宽度（例如，方管为2x2厘米，圆管则测量其直径）。',
  },
  {
    name: '设定最大空隙',
    text: '输入所需的最大间隔（建议设为10厘米以符合规范）。',
  },
  {
    name: '获取安装标记',
    text: '查看钻孔精确位置列表，以确保分配对称且安全。',
  },
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: '住宅建筑规范 (中国)',
      url: 'https://www.mohurd.gov.cn/',
    },
    {
      name: 'IRC - 国际住宅规范 (美国)',
      url: 'https://codes.iccsafe.org/content/IRC2021',
    },
    {
      name: 'IBC - 国际建筑规范',
      url: 'https://codes.iccsafe.org/content/IBC2021',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '终极指南：如何计算护栏子柱的间距',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '设计一个安全且美观完美的护栏是一门将数学精度与建筑规范相结合的艺术。无论是露台、阳台还是室内楼梯，正确计算子柱（栏杆）都是项目中最关键的一步。计算错误不仅会破坏视觉对称性，还可能使您的结构不合法且不安全。',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: '为什么这项计算如此重要？',
      html: '<p>这不仅仅是为了「填补空隙」。这是为了遵守<strong>4英寸球体原则（10厘米）</strong>，这是一项旨在防止儿童发生意外的国际安全标准。</p>',
    },
    {
      type: 'title',
      text: '1. 安全规范：10厘米原则',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在切割第一块木材或金属之前，您必须理解数学背后的「原因」。许多国家的建筑规范以及美国的IRC（国际住宅规范）都设定了明确的标准：<em>「垂直元素之间的净空距离必须不能让直径为10厘米（4英寸）的球体通过。」</em>',
    },
    {
      type: 'paragraph',
      html: '这个数值并非随意设定。它是幼儿（通常未满1岁）的平均头围直径。如果孩子身体能钻过去但头被卡住，窒息风险极高。如果头能钻过去，孩子就可能坠落。因此，我们的<strong>子柱计算器</strong>的目标不仅仅是美观，而是为了拯救生命。',
    },
    {
      type: 'title',
      text: '2. 数学难题：栅栏柱错误 (Fencepost Error)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在编程和建筑领域，有一个经典的问题叫做<em>「Fencepost Error」</em>（栅栏柱错误）。如果您想建一个10米长的栅栏，每隔1米立一根柱子，您需要多少根柱子？直觉答案是10，但正确答案是11。',
    },
    {
      type: 'paragraph',
      html: '子柱的情况与之类似，但更为复杂，因为子柱本身的宽度也占空间。我们的工具所使用的公式为您解决了这组联立方程：',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: '步骤 A：计算空隙',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>首先，我们确定如果使用最大允许空隙，理论上可以容纳多少根子柱。我们将这个数字向上取整，以确保生成的空隙<em>小于</em>最大值。</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: '步骤 B：重新计算精确间距',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>一旦我们知道了子柱的精确数量（n），我们计算扣除所有材料宽度后「剩余」的空间，并将其平均分配到各个空隙（n+1）中。</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. 完美安装的分步指南',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '得到数字只是成功了一半。在这里，我们将解释如何将这些数据从纸面（或屏幕）转化到实际工程中。',
    },
    {
      type: 'title',
      text: '第1步：精确测量',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '测量柱子与柱子之间的<strong>内部</strong>距离。不要从柱子中心开始测量。您需要知道要填补的精确净空间距（L）。如果您的护栏有多个分段，请逐一单独测量；建筑很少是完美的直角，0.5厘米的误差就可能破坏对称性。',
    },
    {
      type: 'title',
      text: '第2步：寻找中心',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '初学者最容易犯的错误是从一端开始向另一端排列子柱。这几乎总是会导致最后一个空隙大小奇特，破坏视觉和谐。<ul><li>标记护栏的<strong>精确中心</strong>（L / 2）。</li><li>决定中心位置是要放一个<em>子柱</em>还是一个<em>空隙</em>。</li><li>如果要在中心放子柱：在中心标记的两侧各标记小子柱宽度一半的距离。</li><li>如果要在中心留空隙：在两侧各标记空隙距离一半（g / 2）的距离。</li></ul>',
    },
    {
      type: 'title',
      text: '第3步：制作定距块 (Spacers)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '不要对每根子柱都使用卷尺测量。累积的人为误差会导致最后一根子柱偏离数厘米。专业的做法是根据计算器给出的精确空隙尺寸（g）切割一个或两个木块。',
    },
    {
      type: 'paragraph',
      html: '将此木块用作物理模板。安装一根子柱，放入木块，紧贴木块安装下一根子柱并固定。这保证了毫米级的工整一致。',
    },
    {
      type: 'title',
      text: '4. 所需材料和工具',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: '专业饰面所需设备',
      html: '<ul><li>高精度卷尺</li><li>木工铅笔</li><li>水平尺（用于测量垂直度）</li><li>斜切锯（用于整齐切割）</li><li>电钻和木螺钉</li><li>定距块（量身定制）</li></ul>',
    },
    {
      type: 'title',
      text: '5. 其他技术问题',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: '如果最后一个空隙不合适怎么办？',
      html: '<p>如果您使用了我们的计算器，这种情况本不该发生。然而在现实世界中，木材会弯曲，柱子也不总是笔直的。如果到最后多出或缺少1-2毫米，通常是察觉不到的。如果差了1厘米，请检查您的定距块，可能每一步都累积了一点误差。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: '如果没有小孩，我可以把子柱间距留大一点吗？',
      html: '<p>法律上是不可以的。建筑规范适用于建筑本身，而非当前居住者。如果您以后转让房屋，不符合规范的护栏会在检验时产生麻烦。此外，访客（侄子、孙辈等）也可能面临危险。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: '木材、金属还是玻璃？',
      html: '<p>此计算器适用于<strong>任何重复的垂直元素</strong>。如果您使用水平钢索，规范则有所不同（通常必须不能让人攀爬，「阶梯效应」）。对于玻璃，它被视为连续面板，不适用间距规定，而是适用抗冲击性规定。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: '密斯·凡·德·罗',
      html: '<p><em>「建筑是转化成空间的时代意志。」</em></p><p>我们希望此工具能帮助您建造更安全、更美观的空间。请务必核实您当地政府的建筑规范，因为关于最低高度（通常为90-110厘米）或载荷要求可能存在特定差异。</p>',
    },
  ],
  ui: {
    sectionTitle: '尺寸',
    sectionDesc: '输入您的护栏测量值',
    labelRailLength: '总长度 (L)',
    labelBalusterWidth: '子柱宽度 (w)',
    labelMaxGap: '最大空隙 (g)',
    blueprintTitle: '安装计划',
    blueprintRef: 'REF: BAL-001 // 比例：自动',
    labelRequired: '所需子柱数',
    labelExactGap: '精确空隙',
    labelOnCenter: '中心距',
    labelTotalSpaces: '总空隙数',
    labelCoveredLength: '覆盖长度',
    labelDisclaimer: '* 显示的尺寸为用于可视化的近似值。',
  },
};
