import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usta-matkap-bileme';
const title = 'Usta Matkap Bileme: Hassas Mastar';
const description = 'HSS matkap uçlarını bilemek için etkileşimli kılavuz. 118° ve 135° açılarını kontrol etmek için ekranda dijital mastar. RPM hesaplar ve kesme hatalarını teşhis eder.';

const faqData = [
  {
    question: 'Matkabı doğrudan ekranın üzerine koyabilir miyim?',
    answer: 'Evet, araç, matkap şaftını dijital mastarın merkez hattına dayamanız ve kesici ağızların simetrisini doğrudan doğrulamanız için tasarlanmıştır.',
  },
  {
    question: 'Boşluk açısının (serbest açı) doğru olduğunu nasıl anlarım?',
    answer: 'Matkabı döndürdüğünüzde, kesici ağzın arka kısmı belirgin şekilde daha alçakta görünmelidir. Ucun tamamında metalin eşit şekilde parladığını görüyorsanız, boşluk açısı (destalonar) eksiktir.',
  },
  {
    question: 'Bileme işleminden sonra hangi devri kullanmalıyım?',
    answer: 'Çapa bağlıdır; entegre hesaplayıcımız, ilk adımda seçtiğiniz malzemeye göre size tam veriyi verecektir.',
  },
  {
    question: 'HSS ile Karbür arasındaki fark nedir?',
    answer: 'HSS (Yüksek Hız Çeliği) daha ekonomik ve darbelere dayanıklıdır. Karbür daha yüksek hızlara dayanır ancak daha kırılgandır. Manuel bileme için HSS standarttır.',
  },
  {
    question: 'Bilemek için özel bir ekipmana ihtiyacım var mı?',
    answer: 'Orta kumlu (120-150) dönen bir zımpara taşı yeterlidir. Önemli olan, tutarlı sonuçlar elde etmek için taşın dengeli ve düz tutulmasıdır.',
  },
];

const howToData = [
  { name: 'Malzeme Seçin', text: 'Hedef açıyı ve kesme hızını belirlemek için deleceğiniz metali veya malzemeyi seçin.' },
  { name: 'Simetriyi Doğrulayın', text: 'Matkabı ekrana dayayın ve her iki kesici ağzın da mavi çizgilerle eşleştiğinden emin olun.' },
  { name: 'Topuk Kısmını Kontrol Edin', text: 'Kesici ağzın arka kısmının iş parçasına sürtünmediğini görsel olarak kontrol edin (boşluk açısı).' },
  { name: 'RPM Hesaplayın', text: 'Çapı girin ve matkabınızı seçilen malzeme için önerilen hıza ayarlayın.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Usta Matkap Bileme: Profesyonel Teknik', level: 2 },
    { type: 'paragraph', html: 'Matkap ucu bileme, her atölyedeki en değerli becerilerden biridir. Doğru bilenmiş bir matkap, delik kalitesini artırır, elektrikli aletlerinizin ömrünü korur ve operatör güvenliğini sağlar.' },
    { type: 'title', text: 'Bilemenin Temelleri: Uç Açısı', level: 3 },
    { type: 'paragraph', html: 'Uç açısı, matkabın malzemeye nasıl saldırdığını tanımlar. Standart açılar yumuşak çelikler için 118°, paslanmaz için 135° ve sert çelikler için 140°\'dir. Her malzeme, dayanıklılıktan ödün vermeden penetrasyonu maksimize etmek için farklı bir açı gerektirir.' },
    { type: 'title', text: 'En Çok Unutulan: Boşluk Açısı', level: 3 },
    { type: 'paragraph', html: 'En yaygın hata, boşluk açısını veya serbest açıyı görmezden gelmektir. Kesici ağzın arka yüzü düzse, matkap sadece sürtecek ve aşırı ısı üretecektir. Çözüm, ağzın arka kısmını hafifçe aşağıya doğru taşlamaktır.' },
  ],
  ui: {
    labelMaterial: 'İş malzemesi',
    matSteel: 'Çelik',
    matInox: 'Paslanmaz',
    matHard: 'Sertler',
    matBrass: 'Pirinç',
    matPlastic: 'Plastik',
    matWood: 'Ahşap',
    labelDiameter: 'Matkap çapı (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Hız',
    unitRpm: 'RPM',
    labelCooling: 'Kesim',
    btnDiagnosis: 'İyi kesmiyor mu? Teşhis',
    diagTitle: 'Arıza Teşhisi',
    diagClose: 'Kapat',
    diagIssue1: '1. Duman çıkarıyor ve delip geçmiyor',
    diagIssue1Desc: 'Boşluk Açısı eksik. Kesici ağzın arkasındaki metal parçaya sürtüyor. Ağzın en yüksek nokta olması için arka kısmı aşağıya doğru taşlayın.',
    diagIssue2: '2. Eksantrik veya daha büyük delik',
    diagIssue2Desc: 'Uç merkezlenmemiş. Kesici ağızların uzunlukları farklı. Ucun mastarın tam merkezine değdiğinden emin olun.',
    diagIssue3: '3. Kesici ağızlar yanmış (Mavi)',
    diagIssue3Desc: 'Aşırı hız. Bu çap ve malzeme için aletin RPM hesaplamasını kontrol edin.',
    gaugeInstruction: 'ŞAFTI DİKEY ÇİZGİYE DAYAYIN',
  },
};
