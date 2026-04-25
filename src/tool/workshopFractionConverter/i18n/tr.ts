import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'atolye-inc-kesir-milimetre-donusturucu';
const title = 'Atölye Kesir Milimetre Dönüştürücü';
const description = 'İnç kesirli ölçüleri anında milimetreye dönüştürün. Atölyeniz için en yakın standart cıvata, somun ve lokma boyutlarını bulun. Kirli eller ve eldivenli parmaklar için tasarlandı.';

const faqData = [
  {
    question: 'Neden kesirleri milimetreye dönüştürmem gerekiyor?',
    answer: 'Çoğu modern alet ve bağlantı elemanı metrik sistemi kullanır, ancak birçok eski alet ve teknik özellik hala inç kesirlerini kullanmaktadır. Bu dönüştürücü bu boşluğu doldurarak tam metrik karşılığını veya en yakın standart boyutu bulmanıza yardımcı olur.',
  },
  {
    question: '1/2 inç ile 12,7 mm arasındaki fark nedir?',
    answer: '1/2 inç tam olarak 12,7 milimetreye eşittir (0,5 × 25,4 = 12,7). Metrik ve emperyal aletler standart boyutlarda genellikle birbirinin yerine kullanılabilir çünkü üreticiler yaygın boyutları her iki sistemde de hizalar.',
  },
  {
    question: 'Araç neden "en yakın bağlantı elemanını" gösteriyor?',
    answer: 'Çünkü kesin dönüşümler genellikle standart bağlantı elemanı boyutlarının arasına düşer. Araç, ölçünüze en yakın ticari cıvata veya lokmayı bularak atölyenizde mevcut olanı kullanmanızı sağlar.',
  },
  {
    question: 'Marangozluk ve metal hassasiyeti arasındaki fark nedir?',
    answer: 'Marangozlukta 0,5 mm\'lik farklar genellikle önemsizdir. Metal işleme ve talaşlı imalatta ise 0,1 mm önemlidir. Hassasiyet modu, malzemeniz için kabul edilebilir tolerans aralıklarını belirtir.',
  },
  {
    question: 'Bu aracı çevrimdışı kullanabilir miyim?',
    answer: 'Evet. Tüm hesaplamalar tarayıcınızda gerçekleşir. Araç ilk yüklemeden sonra tamamen çevrimdışı çalışır; WiFi olmayan atölyelerde kullanım için idealdir.',
  },
  {
    question: 'Araç neden geçmiş kaydı içeriyor?',
    answer: 'Bir sökme işlemi veya çok parçalı bir proje üzerinde çalışırken, geçmiş, ölçüleri tekrar girmeden referans almanızı sağlar ve çalışırken bir parça listesi oluşturmanıza yardımcı olur.',
  },
];

const howToData = [
  {
    name: 'Ölçüm tipini seçin',
    text: 'Bir kesri milimetreye dönüştürmek için "İleri"yi veya kumpasla aldığınız bir ölçünün kesrini bulmak için "Geri"yi seçin.',
  },
  {
    name: 'Ölçüyü girin',
    text: 'Üç sütunlu girişi (tam, pay, payda) kullanın veya hızlı ön ayar düğmesine dokunun. Adım düğmeleri, yazmadan ayarlama yapmanızı sağlar.',
  },
  {
    name: 'Sonuçları inceleyin',
    text: 'Sonuç, tam dönüşümün yanı sıra en yakın standart cıvata ve lokma boyutlarını gösterir. Görsel ölçek, oran hissi verir.',
  },
  {
    name: 'Geçmişe kaydet',
    text: 'Ölçüleri daha sonra başvurmak üzere saklamak için "Geçmişe Kaydet"e tıklayın. Geçmiş, kapattıktan sonra bile tarayıcınızda kalır.',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Atölyede Kesir Dönüşümünde Hassasiyetin Önemi', level: 2 },
    { type: 'paragraph', html: 'Profesyonel veya ileri düzey bir DIY atölyesinde, "yaklaşık" bir değer genellikle yalama olmuş cıvatalara, sallanan bağlantılara veya hatalı montajlara yol açar. Bu araç, geleneksel emperyal ölçüler ile metrik sistemin hassasiyeti arasındaki boşluğu doldurarak atölye projelerinizin profesyonel standartlarda kalmasını sağlar.' },
    { type: 'title', text: 'Standart Dönüşüm: 1/2" ve 12.7mm Karşılaştırması', level: 3 },
    { type: 'card', icon: 'mdi:ruler-square', title: 'Metrik ve emperyal sistemler birbirinin yerine kullanılabilir mi?', html: '<p>Birçok kişi öyle olduğunu varsayar. 1/2" tam olarak 12.7mm olsa da, en yakın standart metrik lokma 13mm\'dir. Yanlış alet kullanmak cıvata başlarını yuvarlayabilir. Dönüştürücümüz, donanımınıza asla zarar vermemeniz için <strong>en yakın standart alet eşleşmesini</strong> belirler.</p>' },
    { type: 'title', text: 'Marangozluk ve Metal İşleme Toleransı', level: 3 },
    { type: 'paragraph', html: 'Tolerans gereksinimleri mesleğe göre büyük ölçüde değişir. <strong>Marangozlukta</strong>, 1/64" (0.4mm) tolerans genellikle kabul edilebilirdir. <strong>Metal işleme ve talaşlı imalatta</strong> ise 0.1mm hatta 0.01mm bile önemlidir. Aracımız, özel malzemeniz için hangi standart bağlantı elemanının en güvenli seçenek olduğuna karar vermenize yardımcı olacak bir hassasiyet modu içerir.' },
    { type: 'title', text: 'Doğru Ölçümler İçin 3 Temel İpucu', level: 3 },
    { type: 'paragraph', html: '<strong>1. Kumpas Kullanın:</strong> Ters arama için, en doğru milimetre girişi için daima dijital kumpas kullanın. <strong>2. Aşınmayı Kontrol Edin:</strong> Eski lokmalar ve cıvatalar aşınmış kenarlara sahip olabilir, bu da "en yakın eşleşmeyi" daha da kritik hale getirir. <strong>3. Diş Adımını Doğrulayın:</strong> Baş boyutu eşleşse bile, diş adımının (metrik vs. emperyal) daima farklı olacağını unutmayın.' },
  ],
  ui: {
    labelFraction: 'Ölçüm Tipi',
    labelWhole: 'Tam',
    labelNumerator: 'Pay',
    labelDenominator: 'Payda',
    labelInches: 'İnç',
    labelMillimeters: 'Milimetre',
    resultTitle: 'Dönüşüm Sonucu',
    resultFraction: 'Kesir',
    resultInches: 'İnç',
    resultMillimeters: 'Milimetre',
    matchTitle: 'En Yakın Standart Eşleşme',
    matchClosestFastener: 'Standart cıvata veya bağlantı elemanı boyutu',
    matchClosestSocket: 'Standart lokma veya anahtar boyutu',
    matchDifference: 'Ölçünüzden farkı',
    matchRecommendation: 'Varsa bu boyutu kullanın',
    reverseSearchTitle: 'Geriye Dönük Arama',
    reverseSearchLabel: 'Ölçülen Boyut (mm)',
    reverseSearchButton: 'Kesri Bul',
    reverseSearchHint: 'Kumpasla ölçün, değeri girin',
    unitMm: 'mm',
    unitInch: 'inç',
    modeForward: 'Kesir → Metrik',
    modeReverse: 'Metrik → Kesir',
    precisionLabel: 'Hassasiyet Modu',
    precisionCarpentry: 'Marangozluk',
    precisionMetal: 'Metal İşleme',
    buttonConvert: 'Dönüştür',
    buttonClear: 'Temizle',
    buttonCopyResult: 'Sonucu Kopyala',
    buttonSaveToHistory: 'Geçmişe Kaydet',
    historyTitle: 'Geçmiş',
    historyEmpty: 'Henüz ölçüm yok',
    historyRemove: 'Kaldır',
    helpText: 'Başlamak için bir ölçü seçin veya bir kesir girin.',
    toolOverline: 'Atölye Araçları',
    labelVisualReference: 'Görsel Referans (1 inç = 96 piksel)',
  },
};
