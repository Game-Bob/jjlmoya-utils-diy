import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'kil-cekme-hesaplama';
const title = 'Kil Çekme Hesaplayıcı: Seramik İçin Tam Boyutlar';
const description =
  'Kurutma ve pişirme sırasında kilin çekmesini hesaplayın. Seramik parçaları tam nihai boyutlarla tasarlayın.';

const faqData = [
  {
    question: 'Kil neden çeker?',
    answer:
      'Kil esas olarak su kaybı nedeniyle çeker. Önce kuruma (parçacıklar arasındaki suyun buharlaşması) ve ardından pişirme (kimyasal olarak bağlı suyun uzaklaştırılması ve parçacıkların sinterlenmesi) gerçekleşir.',
  },
  {
    question: 'Normal çekme yüzdesi nedir?',
    answer:
      'Seramik hamuruna bağlıdır. Çömlekçi kili (terrakotta) genellikle %5-10 arasında çekerken, taş çini (stoneware) ve porselen daha yüksek vitrifikasyon (camlaşma) nedeniyle %12-15\'e ulaşabilir.',
  },
  {
    question: 'Kendi kilimin çekmesini nasıl ölçerim?',
    answer:
      'Tam olarak 10 cm olan bir test plakası oluşturun. Kurumaya bırakın ve ölçün (kuruma çekmesi). Nihai sıcaklıkta pişirin ve tekrar ölçün (toplam çekme). Aradaki fark size tam yüzdeyi verecektir.',
  },
  {
    question: 'Kuruma sırasında parçam çatlarsa ne olur?',
    answer:
      'Genellikle çok hızlı veya dengesiz kurumayı gösterir. İnce bölgeler kalın bölgelerden daha önce su kaybederek gerilim oluşturur. Süreci yavaşlatmak için parçaları plastik bir örtüyle kapatın.',
  },
];

const howToData = [
  {
    name: 'Parçayı ıslakken ölçün',
    text: 'Tornadan çıktıktan veya modellendikten hemen sonra, henüz tüm nemine sahipken parçanızın tam boyutlarını alın.',
  },
  {
    name: 'Çekme katsayısını girin',
    text: 'Kilinizin paketinde üretici tarafından sağlanan toplam çekme yüzdesini (kuruma + pişirme) arayın.',
  },
  {
    name: 'Beklenen nihai boyutları alın',
    text: 'Fırından çıktıktan sonra parçanızın ne kadar ölçüleceğini bilmek için hesaplayıcıyı kullanın ve geçmelerinizi veya kapaklarınızı buna göre planlayın.',
  },
  {
    name: 'Hedefler için ters hesaplama',
    text: 'Eğer parçanızın sonunda tam olarak X cm olmasını istiyorsanız, tornada hangi boyutta olması gerektiğini bilmek için ters hesaplamayı kullanın.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'The Potter\'s Dictionary - Clay Shrinkage',
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kil Fiziği: Çekme ve Genleşme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kil, tüm seramik süreci boyunca boyutu değişen canlı bir malzemedir. Islak bir parçayı şekillendirdiğiniz andan fırından çıkana kadar orijinal boyutunun %8 ile %15\'ini kaybedebilir. Bu çekmeyi hesaplamak, ihtiyacınız olan tam boyutlarda parçalar oluşturmak için temeldir.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Çekme Aşamaları',
          html: '<p><strong>1. Kuruma (Islak → Kuru):</strong> Su kaybettikçe kil parçacıkları birbirine yaklaşır. Bu en büyük çekmedir (%4-8). Kalın parçalar çok hızlı kururlarsa çatlayabilirler.</p><p><strong>2. Pişirme (Kuru → Bisküvi):</strong> 900-1000°C arasında kil geri dönüşü olmayan kimyasal değişimlere uğrar. %2-4 ek çekme olur. Parça gözenekli hale gelir ancak dayanıklıdır.</p><p><strong>3. Vitrifikasyon (Yüksek Sıcaklık):</strong> 1200-1300°C\'de kil camlaşır. %1-3 son çekme olur. Taş çini ve porselen maksimum yoğunluğuna ulaşır.</p>',
        },
        {
          type: 'card',
          title: 'Etkileyen Değişkenler',
          html: '<ul><li><strong>Kil türü:</strong> Kırmızı killer, porselenlere (%12-15) göre daha az çeker (%8-10).</li><li><strong>Duvar kalınlığı:</strong> İnce duvarlar kalın olanlara göre daha homojen çeker.</li><li><strong>Pişirme sıcaklığı:</strong> Sıcaklık ne kadar yüksekse çekme ve camlaşma o kadar artar.</li><li><strong>Şamot içeriği:</strong> Şamot (ezilmiş, önceden pişirilmiş kil) eklemek çekmeyi azaltır.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Pratik Uygulamalar',
      level: 2,
    },
    {
      type: 'title',
      text: 'Kalıp Tasarımı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nihai çapı 8 cm olan bir fincana ihtiyacınız varsa ve kiliniz %12 çekiyorsa, kalıbı <strong>9.1 cm</strong> yapmalısınız. Bu ters hesaplama seri üretimde kritiktir.',
    },
    {
      type: 'title',
      text: 'Kapaklar ve Montajlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Birbirine geçmesi gereken parçalar (çaydanlık + kapak, kavanoz + kapak) oluştururken, her ikisi de aynı kilden yapılmalı ve aynı oranda çektiklerinden emin olmak için birlikte pişirilmelidir. %1\'lik bir fark bile geçmeyi bozabilir.',
    },
    {
      type: 'title',
      text: 'Anıtsal Heykel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Büyük parçalarda, kalın ve ince bölümler arasındaki fark çekmesi çatlaklara neden olabilir. Deneyimli seramik sanatçıları, daha fazla çekeceğini bildikleri bölgelerde duvarları daha kalın bırakarak bunu telafi ederler.',
    },
  ],
  ui: {
    labelInitialSize: 'Başlangıç Boyutu (mm)',
    labelShrinkage: 'Çekme Yüzdesi (%)',
    labelLow: 'Düşük (Terrakotta)',
    labelMedium: 'Orta (Stoneware)',
    labelHigh: 'Yüksek (Porselen)',
    presetTerracota: 'Terrakotta (%8)',
    presetGres: 'Stoneware (%12)',
    presetPorcelana: 'Porselen (%15)',
    labelResult: 'Sonuç',
    labelFinalSize: 'Nihai Boyut:',
    labelLoss: 'Toplam Kayıp:',
    tipText:
      'Belirli bir nihai boyutu elde etmek için gereken başlangıç boyutunu hesaplamak için istenen boyutu (1 - çekme/100) değerine bölün.',
    labelInitialBadge: 'Başlangıç:',
    labelFinalBadge: 'mm nihai',
    labelLossBadge: 'Kayıp:',
    labelInitialArea: 'Başlangıç Alanı',
    labelFinalArea: 'Nihai Alan',
  },
};
