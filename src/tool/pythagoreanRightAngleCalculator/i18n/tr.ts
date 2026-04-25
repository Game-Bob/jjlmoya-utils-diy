import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pisagor-teoremi-dik-aci-hesaplama-3-4-5-kurali';
const title = 'Pisagor Dik Açı Hesaplayıcı: Mükemmel Gönye İçin 3 4 5 Kuralı';
const description = 'Pisagor teoremini ve 3-4-5 kuralını kullanarak yapıların mükemmel şekilde gönyede (90°) olup olmadığını doğrulayın. İnşaat, marangozluk ve DIY projeleri için temel araç.';

const faqData = [
  {
    question: '3-4-5 kuralı nedir?',
    answer: '3-4-5 kuralı basit bir Pisagor üçlüsüdür. Dik bir üçgenin herhangi bir ölçekte 3, 4 ve 5 birimlik kenarları varsa, kısa kenarlar arasındaki açı tam olarak 90 derecedir. Bu sahada kanıtlanmış yöntem, yüzyıllardır inşaatlarda kullanılmaktadır.',
  },
  {
    question: 'Bu hesaplayıcıyı nasıl kullanırım?',
    answer: 'Köşeyi oluşturan iki duvarın (A ve B kenarları) uzunluklarını girin. Hesaplayıcı, mükemmel bir 90 derecelik açı için diyagonalin ne olması gerektiğini gösterir. Ardından gerçek diyagonalinizi ölçün ve köşenizin gerçekten gönyede olup olmadığını doğrulamak için girin.',
  },
  {
    question: 'Diyagonalim farklıysa ne olur?',
    answer: 'Ölçülen diyagonaliniz ideal olandan farklıysa, hesaplayıcı sapmayı gösterir. Yeşil mükemmel, sarı kabul edilebilir, kırmızı ise gönye dışı anlamına gelir. Ayrıca açıyı açmanız mı yoksa kapatmanız mı gerektiğini de söyler.',
  },
  {
    question: 'Bu inşaat için yeterince hassas mı?',
    answer: 'Evet. Pisagor teoremi matematiksel olarak kesindir. Bir şerit metre ile, özel aletlere veya ileri düzey becerilere ihtiyaç duymadan inşaat sınıfı hassasiyete ulaşabilirsiniz.',
  },
  {
    question: 'İnç ve fit arasında geçiş yapabilir miyim?',
    answer: 'Evet. Küçük projeler için inç, daha büyük yapılar için fit seçin. Tüm değerler veri kaybı olmadan anında dönüştürülür.',
  },
];

const howToData = [
  { name: 'Biriminizi seçin', text: 'Detaylı işler için inç, daha büyük yapılar için fit seçin. İstediğiniz zaman değiştirebilirsiniz.' },
  { name: 'Her iki kenarı ölçün', text: 'Kontrol etmek istediğiniz köşeyi oluşturan iki duvarın (A ve B kenarları) uzunluğunu ölçün.' },
  { name: 'İdeal diyagonali kontrol edin', text: 'Hesaplayıcı, mükemmel 90 derecelik açı için diyagonalin ne olması gerektiğini gösterir.' },
  { name: 'Diyagonalinizi ölçün', text: 'Gerçek diyagonalinizi ölçmek için bir şerit metre kullanın. İsteğe bağlı alana girin.' },
  { name: 'Durumu okuyun', text: 'Yeşil = mükemmel gönye. Sarı = kabul edilebilir. Kırmızı = gönye dışı. Önerildiği gibi ayarlayın.' },
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Uygulamada Pisagor Teoremi', level: 2 },
    { type: 'paragraph', html: 'Mükemmel bir 90 derecelik açı, kaliteli inşaatın temelidir. Duvarlar dik olmalı, temeller gönyesinde olmalı ve çerçeveler doğru hizalanmalıdır. Pisagor teoremi matematiksel olarak garantili bir yöntem sunar: a² + b² = c².' },
    { type: 'title', text: '3-4-5 Kuralı neden çalışır?', level: 3 },
    { type: 'paragraph', html: '3-4-5 kuralı en basit Pisagor üçlüsüdür. İster inç, ister fit veya başka bir birimle ölçün; 3, 4 ve 5 birimlik kenarlar 90 derecelik açıyı garanti eder. Bu matematiksel olarak kanıtlanmıştır ve yüzyıllardır inşaatlarda test edilmiştir.' },
    { type: 'title', text: 'Özel aletler olmadan hassasiyet', level: 3 },
    { type: 'paragraph', html: 'Kırılabilecek veya ayarı bozulabilecek su terazileri veya gönyelerin aksine, Pisagor teoremi değişmezdir. Sadece bir şerit metre ile her köşeyi her ölçekte doğrulayabilirsiniz. Bu hesaplayıcı zihinden hesap yapma zorunluluğunu ortadan kaldırır ve doğruluğu sağlar.' },
    { type: 'title', text: 'Teoriden pratik rehberliğe', level: 3 },
    { type: 'paragraph', html: 'Bu hesaplayıcı soyut matematiği pratik saha talimatlarına dönüştürür. Diyagonaliniz hatalıysa, ne kadar ve hangi yönde ayarlama yapmanız gerektiğini tam olarak söyler. Teoriyi şantiyede gerçek sonuçlara dönüştürün.' },
  ],
  ui: {
    titleMain: 'Gönye Hesaplayıcı (Pisagor)',
    labelInputData: 'Ölçümler',
    labelUnitSelection: 'Birim',
    btnUnitInches: 'inç',
    btnUnitFeet: 'fit',
    labelSideA: 'A Kenarı',
    labelSideB: 'B Kenarı',
    labelMeasuredDiagonal: 'Ölçülen diyagonal (isteğe bağlı)',
    labelResults: 'Sonuçlar',
    labelIdealDiagonal: 'İdeal diyagonal',
    labelDeviation: 'Sapma',
    labelStatus: 'Durum',
    labelVerification: 'Gönye doğrulaması',
    btnClear: 'Temizle',
    btnCopyResults: 'Sonuçları kopyala',
    labelPresets: 'Hızlı ayarlar',
    unitInches: 'in',
    unitFeet: 'ft',
    tooltipOptional: '90 derecelik açıyı doğrulamak için ölçülen diyagonali girin',
    tooltipPresets: 'Farklı ölçeklerde 3-4-5 kuralı',
    statusPerfect: 'Mükemmel 90 derece açı',
    statusAcceptable: 'Kabul edilebilir sapma',
    statusWarning: 'Küçük sapma',
    statusError: 'Gönye dışı',
    statusReady: 'Hazır',
    msgIdealCalculated: 'İdeal diyagonal hesaplandı',
    actionOpen: 'Aç',
    actionClose: 'Kapat',
    descLarger: 'daha büyük',
    descSmaller: 'daha küçük',
    descCorrection: 'Düzeltme gerekli',
  },
};
