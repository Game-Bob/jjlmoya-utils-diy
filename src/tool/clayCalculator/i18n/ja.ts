import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'clay-shrinkage-calculator';
const title = '粘土収縮計算機：陶芸のための正確な寸法設計';
const description =
  '乾燥および焼成時の粘土の収縮を計算します。最終的な寸法を正確に予測して陶器を設計できます。';

const faqData = [
  {
    question: 'なぜ粘土は収縮するのですか？',
    answer:
      '粘土は主に水分を失うことで収縮します。まず乾燥（粒子間の水分の蒸発）が起こり、次に焼成（化学的に結合した水分の除去と粒子の焼結）が起こります。',
  },
  {
    question: '通常の収縮率はどのくらいですか？',
    answer:
      '粘土の種類によって異なります。土器は通常5〜10％ですが、せっ器や磁器はガラス化が進むため、12〜15％に達することがあります。',
  },
  {
    question: '自分の使っている粘土の収縮率を測るには？',
    answer:
      '正確に10cmのテストピースを作ります。それを乾燥させて測定し（乾燥収縮）、最終温度で焼成した後に再度測定します（全収縮）。その差から正確な比率を算出できます。',
  },
  {
    question: '乾燥中に作品がひび割れてしまうのはなぜですか？',
    answer:
      '通常、乾燥が早すぎるか、不均一であることが原因です。薄い部分は厚い部分よりも早く水分を失い、歪みが生じます。作品をビニールで覆い、乾燥を遅らせるようにしてください。',
  },
];

const howToData = [
  {
    name: '成形直後の寸法を測る',
    text: 'ろくろや手びねりで作った直後の、まだ水分を十分に含んでいる状態の正確な寸法を記録します。',
  },
  {
    name: '収縮率を入力する',
    text: '粘土のパッケージを確認するか、メーカーが提供している全収縮率（乾燥＋焼成）を入力します。',
  },
  {
    name: '完成時の予想寸法を確認する',
    text: '計算機を使用して、窯から出た後の作品のサイズを把握し、嵌め合わせや蓋の設計に役立てます。',
  },
  {
    name: '目標サイズからの逆算',
    text: '最終的に特定のサイズ（例：X cm）に仕上げたい場合は、逆算機能を使用して成形時に必要なサイズを確認します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '粘土の物理学：収縮と膨張',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '粘土は陶芸のプロセス全体を通じてサイズが変化する「生きた」素材です。湿った状態で成形してから窯から出るまでの間に、元のサイズの8％から15％を失うことがあります。この収縮を計算することは、必要な正確な寸法の作品を作るために不可欠です。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '収縮の段階',
          html: '<p><strong>1. 乾燥（湿潤 → 乾燥）：</strong> 水分を失うことで、粘土の粒子が近づきます。これが最大の収縮段階（4-8％）です。乾燥が早すぎると、厚手の商品はひび割れることがあります。</p><p><strong>2. 焼成（乾燥 → 素焼き）：</strong> 900〜1000℃の間で、粘土は不可逆的な化学変化を起こします。さらに2-4％収縮します。作品は多孔質ですが丈夫になります。</p><p><strong>3. ガラス化（高温焼成）：</strong> 1200〜1300℃で、粘土はガラス化します。最終的な1-3％の収縮が起こります。せっ器や磁器はこの段階で最大の密度に達します。</p>',
        },
        {
          type: 'card',
          title: '影響を与える要因',
          html: '<ul><li><strong>粘土の種類：</strong> 赤土は磁器（12-15％）よりも収縮が少ない（8-10％）傾向があります。</li><li><strong>肉厚：</strong> 壁面が薄い方が、厚いものよりも均一に収縮します。</li><li><strong>焼成温度：</strong> 温度が高いほど、収縮とガラス化が進みます。</li><li><strong>シャモット含有量：</strong> シャモット（一度焼いて粉砕した粘土）を加えると収縮を抑えられます。</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '実践的な応用',
      level: 2,
    },
    {
      type: 'title',
      text: '金型・型の設計',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最終的に直径8cmのカップが必要で、粘土の収縮率が12％の場合、型は<strong>9.1cm</strong>で作る必要があります。この逆算は量産において非常に重要です。',
    },
    {
      type: 'title',
      text: '蓋と嵌め合わせ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '嵌め合わせが必要な作品（急須と蓋、保存容器と蓋など）を作る場合、両方を同じ粘土で作る必要があります。1％の収縮率の差でも、製品としての嵌まり具合を台無しにすることがあります。',
    },
    {
      type: 'title',
      text: '大型彫刻',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大きな作品では、厚い部分と薄い部分の収縮の差がひび割れの原因となります。経験豊富な陶芸家は、収縮が大きいとわかっている部分の壁を厚めに残すことで調整します。',
    },
  ],
  ui: {
    labelInitialSize: '初期サイズ (mm)',
    labelShrinkage: '収縮率 (%)',
    labelLow: '低 (テラコッタ)',
    labelMedium: '中 (せっ器)',
    labelHigh: '高 (磁器)',
    presetTerracota: 'テラコッタ (8%)',
    presetGres: 'せっ器 (12%)',
    presetPorcelana: '磁器 (15%)',
    labelResult: '結果',
    labelFinalSize: '完成サイズ：',
    labelLoss: '合計収縮量：',
    tipText: '特定の完成サイズから必要な初期サイズを計算するには、目標サイズを (1 - 収縮率/100) で割ってください。',
    labelInitialBadge: '初期：',
    labelFinalBadge: 'mm 完成',
    labelLossBadge: '収縮量：',
    labelInitialArea: '初期面積',
    labelFinalArea: '完成面積',
  },
};
