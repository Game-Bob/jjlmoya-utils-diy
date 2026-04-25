import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'beton-harc-hesaplama';
const title = 'Beton ve Harç Hesaplayıcı: Tam Çimento, Kum ve Su Miktarları';
const description =
  'm³ başına kaç torba çimento, kürek kum ve litre su gerektiğini hesaplayın. Temeller, döşemeler, duvarlar ve şaplar için. Teknik dozaj kılavuzu.';

const faqData = [
  {
    question: 'Bir metreküpte kaç adet 25 kg\'lık çimento torbası bulunur?',
    answer:
      'Standart bir beton (C20/25 dayanım sınıfı) için, bir metreküp sıkıştırılmış karışım üretmek için yaklaşık 14 torba 25 kg\'lık çimentoya (350 kg) ihtiyaç vardır.',
  },
  {
    question: 'Beton mu yoksa harç mı daha güçlüdür?',
    answer:
      'Beton (çakıl içeren), büyük yükleri taşımak için yapısal olarak daha güçlüdür. Harç (sadece kum içeren), parçaları birleştirmek veya yüzeyleri sıvamak için idealdir.',
  },
  {
    question: 'Bir metreküp kaç kürek eder?',
    answer:
      'Kürek boyutuna bağlıdır ancak genellikle m³ başına 180-200 kürek kum hesaplanır. Hesaplayıcımız m³ değerini önerilen kürek sayısına çevirir.',
  },
  {
    question: 'Betonyer olmadan karışımı elle yapabilir miyim?',
    answer:
      'Evet, ancak çok daha fazla fiziksel çaba gerektirir. Suyu kaybetmemek için temiz ve su sızdırmaz bir yüzey (metal levha veya harç teknesi) üzerinde yapılması idealdir.',
  },
  {
    question: 'Beton kururken neden çatlar?',
    answer:
      'Genellikle sertleşme sırasında nem eksikliğinden (suyun hızlı buharlaşması) veya karışımdaki aşırı sudan kaynaklanır. Sonraki günlerde betonun sulanması önerilir.',
  },
];

const howToData = [
  {
    name: 'Karışım Tipini Seçin',
    text: 'Temeller için beton mu yoksa duvarlar için harç mı yapacağınızı seçin.',
  },
  {
    name: 'm³ Cinsinden Hacmi Belirleyin',
    text: 'Toplam hacmi girin. Boy x en x kalınlık değerlerini çarpın.',
  },
  {
    name: 'Miktarları İnceleyin',
    text: 'Kaç torba, kürek ve litre satın almanız gerektiğini görün.',
  },
  {
    name: 'Oranları Uygulayın',
    text: 'Mükemmel bir karışım için çimento, kum ve çakıl görsel kılavuzunu izleyin.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Beton ve Harç İçin Dozaj Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir tadilat veya inşaatla karşılaştığınızda en sık sorulan sorulardan biri şudur: <strong>Bir metreküp beton için kaç torba çimentoya ihtiyacım var?</strong>. Bu sadece malzemeleri karıştırmak değildir; yapının nihai dayanımı, çimento, kum, çakıl ve su oranlarındaki hassasiyete doğrudan bağlıdır. Hesaplayıcımız, endüstriyel ölçüleri şantiye birimlerine çevirir: 25 kg\'lık torbalar, kürekler ve litreler.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'Aşırı Su Betonu Zayıflatır',
      html: '<p>Çok yaygın bir hata, betonun daha iyi akması için çok fazla su eklemektir. Aşırı su, sertleşme sırasında buharlaşırken gözenekler oluşturarak nihai dayanımı önemli ölçüde azaltır. İdeal kıvam <strong>sıvı değil, koyu bir macun</strong> gibi olmalıdır. Mümkün olduğunca az su kullanın.</p>',
    },
    {
      type: 'title',
      text: 'Kullanıma Göre Standart Oranlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Beton dozajı</strong> kullanıma göre değişir. <strong>C20/25 Beton</strong> (temeller ve döşemeler) için oran 1 ölçek çimento, 2.5 ölçek kum ve 3 ölçek çakıldır. <strong>Duvar Harcı</strong> için 1 ölçek çimento ve 4 ölçek kumdur. <strong>Zemin Şapı</strong> için 1 ölçek çimento ve 3 ölçek kumdur. Çakıllı beton daha fazla yük taşır; sadece kumlu harç ise birleştirme ve sıva için idealdir.',
    },
    {
      type: 'title',
      text: 'İhtiyacınız Olan m³ Nasıl Hesaplanır?',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Bir Döşeme İçin Hesaplama Örneği',
      html: '<p>4m uzunluğunda, 3m genişliğinde ve 15cm kalınlığında bir bahçe döşemesi için: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. Hesaplayıcımız, "Ölçülere Göre" bölümünde boyutları girdiğinizde bu işlemi otomatik olarak gerçekleştirir.</p><p>Dökülme kayıplarını veya zemin farklarını telafi etmek için her zaman <strong>%10 ek malzeme almayı</strong> unutmayın.</p>',
    },
    {
      type: 'title',
      text: 'Karıştırma Sırası ve Torba Başına Dozaj',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Şantiyelerde genellikle <strong>"300 dozlu karışım"</strong> terimi kullanılır: Her metreküp bitmiş beton için 300 kg çimento. Mikserde doğru karıştırma için: önce su, sonra çakıl ve kum (topakları dağıtmak için) ve son olarak kademeli olarak çimento eklenir.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'Malzemesiz Kalmamak İçin %10 Kuralı',
      html: '<p>Dökülme kayıplarını, zemin düzensizliklerini veya nemli agregaların gerçek hacim varyasyonlarını telafi etmek için her zaman hesaplanandan <strong>%10 daha fazla malzeme</strong> satın alın. İş durmuşken ikinci bir sipariş vermekten çok daha ucuzdur.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Standart Beton',
    mixH200Hint: 'Temeller ve döşemeler için ideal',
    mixM40Label: 'Duvar Harcı',
    mixM40Hint: 'Duvarlar ve bölmeler için',
    mixM80Label: 'Güçlü Şap',
    mixM80Hint: 'Zeminler ve güçlü sıvalar için',
    modeDimsLabel: 'Ölçülere Göre',
    modeDirectLabel: 'Doğrudan m³',
    labelLength: 'Boy',
    labelWidth: 'En',
    labelThickness: 'Kalınlık',
    labelVolume: 'Toplam Hacim (m³)',
    binderCementLabel: 'Çimento',
    binderLimeLabel: 'Kireç',
    summaryLabel: 'Doldurulacak toplam alan:',
    resUnitSacks: 'Torba (25kg)',
    resUnitShovels: 'Kürek',
    resUnitLitres: 'Litre',
    resLabelCement: 'Portland Çimento',
    resLabelLime: 'Hidrolik Kireç',
    resLabelSand: 'Kum / Agrega',
    resLabelWater: 'İçme Suyu',
    proportionsTitle: 'Seçilen Karışımın Oranları',
    propLabelSand: 'Kum',
    propLabelGravel: 'Çakıl',
    adviceH200: 'Sütunlar, döşemeler ve yük taşıyan yapılar için idealdir.',
    adviceM40: 'Tuğla veya bims duvarlar örmek için mükemmeldir.',
    adviceM80: 'Bunu çok dayanıklı zemin şapları için kullanın.',
    adviceLimeH200: 'Kireç betonu daha esnektir ancak priz alması daha uzun sürer.',
    priceTotalLabel: 'Tahmini Bütçe',
    priceSackLabel: 'Torba',
    priceSandLabel: 'Kum (m³)',
    priceDisclaimer: 'Referans piyasa fiyatlarıdır. Yerel tedarikçinize göre ayarlayın.',
  },
};
