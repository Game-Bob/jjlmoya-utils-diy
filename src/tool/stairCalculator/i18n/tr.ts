import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'merdiven-hesaplayici';
const title = 'Merdiven Hesaplayıcı: Tasarım ve Uygulama';
const description = 'Merdiveninizin kesin ölçülerini hesaplayın: rıht, basamak, açı ve malzemeler. Blondel Yasası\'na uyarak inşaat hatalarını önleyin.';

const faqData = [
  {
    question: 'Blondel Yasası nedir?',
    answer: 'Bir merdivenin konforlu olabilmesi için iki rıht yüksekliği ile bir basamak genişliğinin toplamının 62 ile 64 cm arasında olması gerektiğini belirten bir formüldür (2R + B = 63). Bu yasa, ortalama insan adımı uzunluğuna dayanır.',
  },
  {
    question: 'Bir basamağın maksimum yüksekliği ne olmalıdır?',
    answer: 'Konutlarda 18-19 cm\'yi geçmemesi önerilir. Kamusal alanlarda ise yönetmeliklere göre maksimum genellikle 17,5 cm\'dir. Daha yüksek rıhtlar daha fazla yorar ve tehlikeli olabilir.',
  },
  {
    question: 'Alan azsa nasıl hesaplama yaparım?',
    answer: 'Yatay mesafe sınırlıysa, basamak sayısını artırmanız (rıhtı küçülterek) veya daha dik bir eğimi kabul etmeniz gerekir. Hesaplayıcı, en uygun dengeyi bulmanıza yardımcı olur.',
  },
  {
    question: 'Beton metrajı neleri içerir?',
    answer: 'Basamaklar ve basamakları taşıyan eğimli plak (rampa kısmı) dikkate alınarak toplam beton hacmi hesaplanır. Bu plakanın hacmini ihmal etmek eksik beton siparişine neden olur.',
  },
  {
    question: 'Kümülatif aplikasyon (işaretleme) neden önemlidir?',
    answer: 'Her basamağı tek tek ölçmek kümülatif hatalara neden olur. Kümülatif aplikasyon, tüm basamakların tam olarak aynı yükseklikte olmasını sağlayarak riskleri önler ve konforu artırır.',
  },
];

const howToData = [
  { name: 'Yükseklik farkını ölçün', text: 'Alt bitmiş zeminden üst bitmiş zemine kadar olan toplam yükseklik farkını (H) ölçün. Bu, tüm hesaplamanın temel verisidir.' },
  { name: 'Mevcut uzunluğu girin', text: 'Opsiyonel: Alan kısıtlamanız varsa, mevcut yatay uzunluğu girin. Kısıtlama yoksa 0 kullanın.' },
  { name: 'Basamak sayısını ayarlayın', text: 'Hesaplayıcı başlangıç sayısı önerir ama siz ayarlayabilirsiniz. Blondel göstergesine dikkat edin: Maksimum konfor için yeşil (62-64 cm) olmalıdır.' },
  { name: 'Şantiye parametrelerini tanımlayın', text: 'Plak kalınlığı, kaplamalar, beton dayanımı ve merdiven genişliğini belirtin. Bu veriler final metrajını etkiler.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Merdivenlerin Geometrik Tasarımı: Blondel Yasası', level: 2 },
    { type: 'paragraph', html: 'Merdiven konforu insan adım uzunluğuna bağlıdır. Vücudunuz inerken veya çıkarken öngörülebilir bir ritim bekler. Blondel Yasası (2 Rıht + 1 Basamak = 62-64 cm) maksimum konfor ve güvenliği garanti eden standarttır.' },
    { type: 'title', text: 'Yapı ve Malzeme Kontrolü', level: 3 },
    { type: 'paragraph', html: 'Profesyonel bir uygulama için beton plağı (basamakları taşıyan eğim) dikkate almak hayati önem taşır. Bu hacmin ihmal edilmesi eksik beton siparişi ve kötü uygulamaya yol açar.' },
    { type: 'title', text: 'Aplikasyon ve Kümülatif Hata', level: 3 },
    { type: 'paragraph', html: 'İnşaatta en büyük düşman milimetrik hatadır. Her basamağı ayrı ölçerseniz, küçük hataların toplamı son basamağı ilkinden 5 cm yüksek veya alçak bırakabilir.' },
  ],
  ui: {
    labelGeometry: 'Geometri ve Alan',
    labelTotalHeight: 'Toplam Yükseklik (H)',
    labelAvailableLength: 'Mevcut Uzunluk (L)',
    labelAvailableLengthHint: 'Serbest hesap için 0 kullanın.',
    labelNumSteps: 'Basamak Sayısı',
    labelOptimize: 'Optimize Et (18cm)',
    labelWork: 'Uygulama ve Kurulum',
    labelSlabThickness: 'Plak Kalınlığı (e)',
    labelFinishThickness: 'Kaplama',
    labelCeilingHeight: 'Tavan Yüksekliği',
    labelStairWidth: 'Merdiven Genişliği',
    labelConcreteStrength: 'Beton Dayanımı',
    optionH150: 'C12 (Grosbeton)',
    optionH200: 'C16 (Konut Tipi)',
    optionH250: 'C20 (Taşıyıcı)',
    labelRiser: 'Rıht',
    labelTread: 'Basamak',
    labelSlope: 'Eğim',
    labelRealAdvance: 'Gerçek Uzunluk',
    labelLayoutTable: 'Aplikasyon ve Uygulama',
    colStep: 'Basamak',
    colConcreteHeight: 'Beton Y.',
    colFinishedHeight: 'Bitmiş Y.',
    colAdvance: 'İlerleme',
    adjustedNote: 'Ayarlı',
    labelMaterials: 'Metraj ve Sipariş',
    labelTotalConcrete: 'Toplam Beton:',
    labelCement: 'Çimento (torba/25kg):',
    labelSand: 'Gereken Kum:',
    unitM3: 'm³',
    unitBags: 'torba',
    unitLiters: 'L',
    btnShare: 'Paylaş',
    btnPrint: 'PDF Yazdır',
    statusOptimalComfort: 'Optimal Konfor',
    statusMarginLimit: 'Sınır Değer',
    statusCriticalDesign: 'Kritik Tasarım',
    statusRiserError: 'Basamak Hatası',
    msgInvalidValues: 'Geçersiz değerler',
    msgInsufficientSpace: 'YETERSİZ ALAN',
    msgDangerousTread: '{val}cm basamak tehlikelidir.',
    msgBlondelValue: 'Blondel: {val}cm.',
    msgOptimalStep: 'Konforlu adım: {val}cm.',
    msgLowCeiling: 'ALÇAK GEÇİŞ (<2m)',
    msgCalculating: 'Hesaplanıyor...',
    msgEnterMeasurements: 'Ölçüleri girin',
    shareTitle: 'Uygulama Özeti',
    shareMessage: 'Merdiven: H={h}cm, N={n}, R={ch}cm, Vol={vol}m3',
  },
};
