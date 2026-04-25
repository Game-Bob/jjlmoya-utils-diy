import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'clay-shrinkage-calculator';
const title = '粘土缩水率计算器：陶瓷精确尺寸设计';
const description =
  '计算粘土在干燥和烧成过程中的缩水率。设计具有精确最终尺寸的陶瓷作品。';

const faqData = [
  {
    question: '粘土为什么要缩水？',
    answer:
      '粘土缩水主要是因为水分流失。首先是干燥缩水（颗粒间水分蒸发），然后是烧成缩水（去除化学结合水及颗粒烧结）。',
  },
  {
    question: '正常的缩水率是多少？',
    answer:
      '这取决于陶瓷泥料。陶土通常在5-10%之间缩水，而炻器（Gres）和瓷器（Porcelain）由于玻化程度更高，缩水率可达12-15%。',
  },
  {
    question: '如何测量我所用粘土的缩水率？',
    answer:
      '制作一个精确10厘米的测试片。晾干后测量（干燥缩水）。在最终温度下烧制后再次测量（总缩水）。差值即为精确百分比。',
  },
  {
    question: '如果作品在干燥时开裂怎么办？',
    answer:
      '这通常表明干燥过快或不均匀。薄的部分比厚的部分失水更快，从而产生应力。请用塑料薄膜覆盖作品以减缓干燥过程。',
  },
];

const howToData = [
  {
    name: '测量湿坯尺寸',
    text: '在拉坯或捏塑完成后，趁作品还含有全部水分时，记录其精确尺寸。',
  },
  {
    name: '输入缩水系数',
    text: '在粘土包装上查看制造商提供的总缩水率（干燥+烧成）百分比。',
  },
  {
    name: '获取预期的最终尺寸',
    text: '使用计算器了解作品出窑后的尺寸，并据此规划嵌套件或盖子的尺寸。',
  },
  {
    name: '逆向计算目标尺寸',
    text: '如果您需要作品最终精确达到 X 厘米，请使用逆向计算来确定在陶轮上应制作的尺寸。',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '粘土物理学：缩水与膨胀',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '粘土是一种在整个陶瓷制作过程中都会改变尺寸的活材料。从您塑造湿坯的那一刻起，直到作品出窑，它可能会失去原始尺寸的8%到15%。计算这一缩水率对于制作具有精确所需尺寸的作品至关重要。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '缩水阶段',
          html: '<p><strong>1. 干燥（湿 → 干）：</strong> 随着水分流失，粘土颗粒相互靠近。这是最大的缩水阶段（4-8%）。如果干燥过快，厚壁作品可能会开裂。</p><p><strong>2. 烧成（干 → 素烧）：</strong> 在900-1000°C之间，粘土发生不可逆的化学变化。额外的缩水率为2-4%。作品变得多孔但坚固。</p><p><strong>3. 玻化（高温）：</strong> 在1200-1300°C时，粘土发生玻化。最终缩水率为1-3%。炻器和瓷器达到最大密度。</p>',
        },
        {
          type: 'card',
          title: '影响变量',
          html: '<ul><li><strong>粘土类型：</strong> 红泥的缩水率（8-10%）通常低于瓷泥（12-15%）。</li><li><strong>壁厚：</strong> 薄壁比厚壁缩水更均匀。</li><li><strong>烧成温度：</strong> 温度越高，缩水和玻化程度越高。</li><li><strong>熟料含量：</strong> 添加熟料（已烧制并研磨的粘土）可以减少缩水。</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '实际应用',
      level: 2,
    },
    {
      type: 'title',
      text: '模具设计',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果您需要一个最终直径为8厘米的杯子，而您的粘土缩水率为12%，那么您必须制作<strong>9.1厘米</strong>的模具。这种逆向计算在批量生产中至关重要。',
    },
    {
      type: 'title',
      text: '盖子与组装',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当您制作需要嵌套的部件（茶壶+盖子，罐子+盖子）时，两者必须使用相同的粘土制作并一起烧制，以确保它们缩水一致。1%的差异就可能破坏配合度。',
    },
    {
      type: 'title',
      text: '大型雕塑',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在大型作品中，厚薄部分之间的差异缩水会导致裂缝。经验丰富的陶艺家会通过在已知缩水较多的区域保留较厚的壁厚来进行补偿。',
    },
  ],
  ui: {
    labelInitialSize: '初始尺寸 (mm)',
    labelShrinkage: '缩水率百分比 (%)',
    labelLow: '低（陶土/Terracota）',
    labelMedium: '中（炻器/Gres）',
    labelHigh: '高（瓷器/Porcelain）',
    presetTerracota: '陶土 (8%)',
    presetGres: '炻器 (12%)',
    presetPorcelana: '瓷器 (15%)',
    labelResult: '结果',
    labelFinalSize: '最终尺寸：',
    labelLoss: '总缩水量：',
    tipText:
      '要计算获得特定最终尺寸所需的初始尺寸，请将目标尺寸除以 (1 - 缩水率/100)。',
    labelInitialBadge: '初始：',
    labelFinalBadge: 'mm 最终',
    labelLossBadge: '缩小：',
    labelInitialArea: '初始区域',
    labelFinalArea: '最终区域',
  },
};
