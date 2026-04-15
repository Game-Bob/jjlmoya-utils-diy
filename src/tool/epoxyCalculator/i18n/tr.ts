import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'epoksi-recine-hesaplayici';
const title = 'Epoksi Reçine Hesaplayıcı: Karışım ve Tam Hacim';
const description = 'Projeleriniz için gereken tam epoksi reçine ve sertleştirici miktarını hesaplayın. Nehir masaları, takı ve kalıplarda israfı önleyin.';

const faqData = [
  {
    question: 'Reçinede tam oran neden bu kadar önemlidir?',
    answer: 'Diğer karışımların aksine, epoksi reçine buharlaşma yoluyla değil, kimyasal bir reaksiyon (polimerizasyon) yoluyla kurur. Reçine veya sertleştirici fazla kalırsa reaksiyon eksik kalır; bu da parçanın yapışkan, yumuşak kalmasına veya kalıcı kabarcıklar oluşmasına neden olur.',
  },
  {
    question: 'Ağırlık vs hacim oran nedir?',
    answer: 'Birçok reçine hacim olarak 2:1 oranında karıştırılır ancak sertleştirici genellikle daha yoğun olduğu için ağırlık olarak bu oran 100:45 olabilir. Daima üreticinin belirttiği ölçeği kullanın ve mümkünse maksimum hassasiyet için dijital bir terazi kullanın.',
  },
  {
    question: 'Karıştırırken kabarcıklardan nasıl kaçınırım?',
    answer: 'Bardağın kenarlarını iyice sıyırarak en az 3 dakika boyunca sabit dairesel hareketlerle yavaşça karıştırın. Karışımı dökmeden önce kabarcıkların yüzeye çıkması için birkaç dakika bekletin.',
  },
  {
    question: 'Kap ömrü (Pot Life) nedir?',
    answer: 'Karışımın sertleşmeye (jelleşmeye) başlamadan önce üzerinde çalışabileceğiniz süredir. Yazın veya büyük hacimlerde, ekzotermik reaksiyon (ısı üretimi) nedeniyle bu süre önemli ölçüde azalır.',
  },
];

const howToData = [
  { name: 'Kalıp boyutlarını ölçün', text: 'Reçine ile doldurmak istediğiniz alanın boyunu, enini ve derinliğini (kalınlığını) ölçün.' },
  { name: 'Karışım oranını girin', text: 'Ürününüzün etiketinden karışımın 1:1, 2:1 veya 3:1 olup olmadığını ve bunun ağırlığa mı yoksa hacme mi dayalı olduğunu kontrol edin.' },
  { name: 'Bileşenleri tartın', text: 'Dijital bir terazi üzerindeki temiz bir kaba önce A bileşenini (reçine), ardından B bileşenini (sertleştirici) dökün.' },
  { name: 'Teknik karıştırma', text: 'Karışım tamamen şeffaf olana ve farklı yoğunluktaki "çizgiler" görülmeyene kadar nazikçe karıştırın.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    { name: 'TotalBoat - Destek Merkezi ve Teknik Kılavuzlar', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - SSS ve Kullanım Kılavuzu', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Epoksi Reçine Hesaplama ve Karıştırma Kılavuzu', level: 2 },
    { type: 'paragraph', html: 'Epoksi reçine buharlaşma yoluyla kuruyan bir boya değildir; karmaşık bir <strong>ekzotermik kimyasal reaksiyondur</strong>. Sihir, epoksit molekülleri poliamin molekülleriyle zincirlenerek kristal katı bir termoset polimer oluşturduğunda gerçekleşir.' },
    { type: 'paragraph', html: 'Dayanıklı bir sanat eseri ile yapış yapış bir felaket arasındaki fark <strong>tam stokiyometride</strong> yatar. Karışım oranındaki sadece %5\'lik bir hata, kürleşmeyi kalıcı olarak engelleyebilir. Bu araç, matematiksel tahminleri ortadan kaldırarak yaratıcılığınıza odaklanmanızı sağlar.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Hacim mi Ağırlık mı?', html: '<p>Yeni başlayanların 1 numaralı hatası 100ml\'nin 100g ağırlığında olduğunu varsaymaktır. <strong>Reçine sertleştiriciden daha yoğundur.</strong></p><p>Ürününüzün teknik bilgi formu "ağırlıkça 100:50" diyorsa, bu "hacimce 2:1" ile AYNI değildir. Bu hesaplayıcı, kalıpları doldurmak için standart olan <strong>Hacim</strong> (V = U × G × Y) ile çalışır.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Yaygın Oranlar', html: '<ul><li><strong>1:1</strong> — Kaplamalar, vernikler ve hızlı yapıştırıcılar.</li><li><strong>2:1</strong> — Standart. Nehir masaları, takı ve orta ölçekli kalıplar.</li><li><strong>3:1</strong> — Endüstriyel zeminler ve yüksek sertlikteki yapısal laminatlar.</li></ul>' },
    ]},
    { type: 'title', text: 'Güvenlik Protokolü ve En İyi Uygulamalar', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Hayati Sıcaklık', html: '<p>Daima <strong>21°C ile 25°C</strong> arasında çalışın. Soğuk reaksiyonu durdurarak parçanın bulanık kalmasına neden olabilir. Aşırı ısı ekzotermik reaksiyonu tehlikeli bir şekilde hızlandırır ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Çift Bardak Tekniği', html: '<p>Tek bir karıştırmaya güvenmeyin. Kenarları ve tabanı iyice sıyırın, karışımı <strong>ikinci temiz bir bardağa</strong> dökün ve tekrar karıştırın. Bu, katalize olmamış hiçbir malzemenin kalmamasını sağlar.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Dikdörtgen',
    shapeCylinder: 'Silindirik',
    shapeSphere: 'Küresel',
    labelLength: 'Boy (cm)',
    labelWidth: 'En (cm)',
    labelDiameter: 'Çap (cm)',
    labelDepth: 'Derinlik (cm)',
    labelRatio: 'Karışım Oranı (Ağırlık/Hacim)',
    labelCustomRatio: 'Özel oran kullan (A:B)',
    labelResinA: 'Reçine (A)',
    labelHardenerB: 'Sertleştirici (B)',
    labelWasteTitle: 'Güvenlik Payı',
    labelWasteDesc: 'Kayıplar için %5 fazladan ekleyin',
    labelTotalVolume: 'Toplam Hacim',
    labelPartA: 'A Parçası (Reçine)',
    labelPartB: 'B Parçası (Katalizör)',
    labelVisualization: 'Görselleştirme',
    shapeRectLabel: 'Dikdörtgen Blok',
    shapeCylinderLabel: 'Silindir / Yuvarlak Kalıp',
    shapeSphereLabel: 'Tam Küre',
  },
};
