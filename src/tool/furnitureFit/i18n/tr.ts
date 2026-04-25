import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobilya-alan-hesaplama';
const title = 'Taşınma ve Mobilya İçin Alan Hesaplayıcı';
const description = 'Kanepenizin, dolabınızın veya masanızın asansöre veya kapıdan sığıp sığmadığını kontrol edin. Eğimleri hesaplamak için 3D Pisagor teoremini kullanın.';

const faqData = [
  {
    question: 'Bir kanepe kapıdan daha küçük olmasına rağmen neden sığmayabilir?',
    answer: 'Dönüş açısı nedeniyle. Koridor darsa, kanepe yan veya eğik olarak girmelidir. Sınırlayıcı faktör sadece kapı genişliği değil, aynı zamanda odadaki mevcut dönüş yarıçapıdır.',
  },
  {
    question: 'Bir mobilyanın diyagonali nedir ve neden önemlidir?',
    answer: 'İki zıt köşe arasındaki en uzak mesafedir. Uzun bir mobilyanın yerde monte edildikten sonra tavanı alçak bir odada dikilip dikilemeyeceğini bilmek için hayati önem taşır.',
  },
  {
    question: 'Bir asansör doğru şekilde nasıl ölçülür?',
    answer: 'Sadece zemini ölçmeyin. Açık kapı genişliğini, net derinliği ve toplam yüksekliği ölçün. Kapı tabanından arka üst köşeye kadar olan diyagonal en önemli veridir.',
  },
  {
    question: 'Önce hangi parçalar sökülmelidir?',
    answer: 'Kanepe ayakları, dolap kulpları ve buzdolabı kapakları, bir mobilyanın sığıp sığmaması arasında fark yaratan o kritik 5 ila 10 cm\'yi kazandırabilir.',
  },
];

const howToData = [
  { name: 'Mobilyayı ölçün (Boy, En, Yükseklik)', text: 'Kolçaklar veya kulplar gibi çıkıntılar dahil olmak üzere objenin maksimum boyutlarını alın.' },
  { name: 'Kritik geçişleri ölçün', text: 'Kapı net boşluğunu (kasadan kasaya), asansörün içini ve koridorların genişliğini ölçün.' },
  { name: 'Verileri simülatöre girin', text: 'Mobilya hacminin geçiş alanıyla uyumlu olup olmadığını görmek için boyutları araca yazın.' },
  { name: 'Eğimleri hesaplayın', text: 'Mobilya çok yüksekse, merdiven sahanlığında veya asansör içinde döndürüp döndüremeyeceğinizi doğrulamak için hesaplanan diyagonali kullanın.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Taşınma Bilimi ve Pisagor Teoremi', level: 2 },
    { type: 'paragraph', html: 'Taşınma sadece bir fiziksel güç testi değildir; karmaşık bir geometrik bulmacadır. Bir odanın veya asansörün görünen alanı, özellikle üçüncü boyutu görmezden geldiğimizde insan gözünü aldatır. Matematik sizi iade ve başarısız nakliyat masraflarından kurtarabilir.' },
    { type: 'title', text: '3D Diyagonal İpucu', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Altın Kural', html: '<p>Asla sadece mobilyayı ölçmeyin. Daima <strong>kritik erişim noktalarını</strong> ölçün: kapı kasası genişliği, sahanlıktaki tavanın en alçak noktası ve kapılar kapalıyken asansörün gerçek derinliği. <code>d = √(w² + h² + z²)</code> formülü, eğik sığıp sığmadığını gösterir.</p>' },
    { type: 'title', text: 'Koridordaki Kanepe Problemi', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Manevra Payı', html: '<p>Mobilya 80 cm ve boşluk 80 cm ise geçeceğini varsaymak yaygın bir hatadır. Öyle değildir. Taşıyıcıların elleri, kumaşın esnekliği ve duvarlardaki kusurlar en az <strong>2 ila 5 cm</strong> pay gerektirir. Bu pay olmadan mobilya çizilir veya baskı nedeniyle sıkışıp kalır.</p>' },
    { type: 'title', text: 'Taşınmayı Mahveden 3 Hata', level: 3 },
    { type: 'paragraph', html: 'Doğru ölçümlerle bile bu görünmez faktörler felaketlere yol açar: <strong>Tavan Lambası</strong> — diyagonal dönüş sırasında unutulur; <strong>Mobilya Dönüş Yarıçapı</strong> — sert mobilyalar bükülmez; <strong>Paketleme</strong> — balonlu naylon her iki tarafa da 1-3 cm ekleyebilir.' },
  ],
  ui: {
    conTitle: 'Alan Boyutları',
    conHint: 'Örn: Standart asansör, kapı kasası veya kamyonet.',
    objTitle: 'Mobilya Boyutları',
    labelWidth: 'Genişlik (cm)',
    labelHeight: 'Yükseklik (cm)',
    labelDepth: 'Derinlik (cm)',
    labelLength: 'Boy (cm)',
    labelMargin: 'Hata Payı (cm)',
    vizLabel: 'Basitleştirilmiş Mekansal Görünüm',
    verdictDefault: 'Sığar mı?',
    verdictHint: 'Mekansal uyumluluğu kontrol etmek için ölçüleri girin.',
    verdictYes: 'EVET, SIĞIYOR!',
    verdictNo: 'SIĞMIYOR',
    fitDirect: 'Mobilya doğrudan mükemmel şekilde sığıyor.',
    fitDiagonal3d: 'Diyagonal olarak eğik sığıyor (3D Pisagor).',
    fitDiagonalPlane: 'Yan düzlemlerden birinde eğik sığıyor.',
    fitNope: 'Mobilya diyagonal olarak girmek için bile çok büyük.',
    diagLabel: 'Maksimum Diyagonal (3D Pisagor):',
    objLabel: 'Mobilya',
  },
};
