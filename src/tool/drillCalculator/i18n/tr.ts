import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';

const slug = 'matkap-devir-hesaplayici';
const title = 'İşleme ve Matkap RPM Hesaplayıcı';
const description = 'Malzemeye ve matkap ucunun çapına göre matkabınız veya frezeniz için ideal dakikadaki devir sayısını (RPM) hesaplayın. Aletlerinizin yanmasını önleyin.';

const faqData = [
  {
    question: 'Delme sırasında matkap uçları neden yanar?',
    answer: 'Esas olarak aşırı devir (RPM) nedeniyle. Matkap ucu, malzemenin ısıyı dağıtabileceğinden daha hızlı döndüğünde, sürtünme sıcaklığı çeliğin temperleme sınırının üzerine çıkarır, bu da kesici ağzın yumuşamasına ve kesmeyi durdurmasına neden olur.',
  },
  {
    question: 'Kesme hızı (Vc) nedir?',
    answer: 'Aletin kesici ağzının malzeme yüzeyi boyunca kat ettiği dakikadaki metre cinsinden doğrusal hızdır. Her malzemenin, matkap ucu çapından bağımsız olan önerilen bir Vc değeri vardır.',
  },
  {
    question: 'Ne zaman Karbür (Elmas/Widia) alet kullanmalıyım?',
    answer: 'Çok daha yüksek hızlarda çalışmanız gerektiğinde, endüstriyel üretimlerde veya delinecek malzeme aşırı sert olduğunda karbür kullanmalısınız. Yaygın DIY işleri için HSS yeterlidir ve esneme kaynaklı kırılmalara karşı daha dayanıklıdır.',
  },
  {
    question: 'Her zaman yağlayıcı kullanmak gerekli midir?',
    answer: 'Metallerde neredeyse her zaman tavsiye edilir. Alüminyumda malzemenin matkap ucuna yapışmasını önler, çeliklerde ise ısıyı azaltır. Ahşap ve plastiklerde, matkabı sık sık dışarı çıkararak talaşları temizleyip kuru çalışmak daha iyidir.',
  },
  {
    question: 'CNC frezem yoksa ilerlemeyi nasıl hesaplarım?',
    answer: 'Manuel bir matkapta ilerleme basınçla hissedilir. Sürekli ve temiz bir talaş çıktığını görmelisiniz. Toz çıkıyorsa, az bastırıyorsunuz veya RPM çok yüksektir. Talaş çok kalınsa ve matkap zorlanıyorsa, çok fazla bastırıyorsunuz demektir.',
  },
];

const howToData = [
  { name: 'Malzemeyi seçin', text: 'Hangi malzemeyi deleceğinizi veya frezeleyeceğinizi belirtin (çelik, alüminyum, ahşap vb.). Her birinin farklı sertliği ve termal kapasitesi vardır.' },
  { name: 'Çapı girin', text: 'Matkap ucunuzun veya frezenizin tam çapını milimetre cinsinden yazın. Çap arttıkça dönüş hızının düşmesi gerektiğini unutmayın.' },
  { name: 'Alet tipini seçin', text: 'Matkap ucunuzun yüksek hız çeliği (HSS) mi yoksa karbür (Widia) mi olduğunu belirleyin. Karbür olanlar çok daha yüksek hızlara dayanır.' },
  { name: 'Makinenizde RPM\'i ayarlayın', text: 'Matkabınızı veya frezenizi hesaplanan değerle yapılandırın. Makinenizin sabit konumları varsa, en güvenli kasnak konumunu seçmek için en yakın hız aracımızı kullanın.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    { name: 'Sandvik Coromant: Cutting Speed and Feed Rate Formulae', url: 'https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/general-turning-formulas-definitions' },
    { name: 'Makineler. Atölye Hesaplamaları — A.L. Casillas', url: 'https://www.google.com/search?q=Casillas+Maquinas+Calculos+de+taller' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Talaşlı imalatta Dakikadaki Devir Sayısının önemi', level: 2 },
    { type: 'paragraph', html: 'Dakikadaki devir sayısının doğru hesaplanması, mükemmel bir iş ile maliyetli bir felaket arasındaki farktır. Mesele bir matkap ucunu olabildiğince hızlı döndürmek değil, sürtünme ve malzeme direncine uygulanan fizik yasalarına saygı duymaktır. Hesaplayıcımız, aletlerinizin performansını ve kaplamalarınızın kalitesini optimize etmek için tasarlanmıştır.' },
    { type: 'title', text: 'Kesme Hızını Anlamak', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'RPM Hesaplama Formülü', html: '<p>Kesme hızı, kesici ağzın malzemeden geçmesi gereken ideal hızı dakikada metre cinsinden gösteren bir değerdir. Kullandığımız formül: <code>RPM = (Vc × 1000) / (π × D)</code> şeklindedir; burada D, milimetre cinsinden çaptır. Bu hesaplama, kestiğimiz malzemenin çapından bağımsızdır.' },
    { type: 'title', text: 'HSS vs Karbür', level: 3 },
    { type: 'paragraph', html: '<strong>Yüksek Hız Çeliği (HSS)</strong> aletler ekonomiktir ve darbelere dayanıklıdır, ancak termal dirençleri sınırlıdır. <strong>Karbür (Widia)</strong> 3 ila 5 kat daha yüksek kesme hızlarına izin verir ancak daha kırılgandır. Hesaplayıcı, parametreleri alet tipine göre otomatik olarak ayarlar.' },
    { type: 'title', text: 'Delme Sırasında Yapılan 3 Yaygın Hata', level: 3 },
    { type: 'paragraph', html: '<strong>Çok yüksek RPM:</strong> Aşırı ısınmaya ve çeliğin sertliğini kaybetmesine neden olur. <strong>Çok düşük RPM:</strong> Matkap ucu titrer ve yorulma nedeniyle kırılabilir. <strong>Soğutma olmadan:</strong> Isı, alet ömrünü önemli ölçüde azaltır.' },
  ],
  ui: {
    labelMaterial: 'İş parçası malzemesi',
    matSteel: 'Yumuşak Çelik',
    matInox: 'Paslanmaz',
    matAlu: 'Alüminyum',
    matBrass: 'Pirinç',
    matCastIron: 'Dökme Demir',
    matWood: 'Ahşap Türleri',
    matPlastic: 'Plastikler',
    coolSteel: 'Soğutma Sıvısı veya Yağ',
    coolInox: 'Kesme Yağı EP',
    coolAlu: 'Alkol / Parafin',
    coolBrass: 'Kuru / Hava',
    coolCastIron: 'Kuru',
    coolWood: 'Sadece Aspirasyon',
    coolPlastic: 'Hava Püskürtme',
    labelTool: 'Alet Tipi',
    typeHss: 'Çelikler (HSS)',
    typeWidia: 'Karbür (Widia)',
    labelDiameter: 'Çap',
    unitMm: 'mm',
    unitInch: 'inç',
    modeColumnDrill: 'Sütunlu Matkap Modu',
    labelAdvanced: 'İlerleme Parametreleri',
    labelLips: 'Ağız Sayısı (z)',
    labelFz: 'Diş başına ilerleme (Fz)',
    labelMachine: 'Makinenizin Hızları',
    presetStandard: 'Standart',
    presetCnc: 'CNC',
    addRpmManual: 'Manuel RPM ekle...',
    addButton: '+',
    resultRpm: 'Optimal Hız',
    resultCooling: 'Soğutma',
    resultFeed: 'Sonuç İlerleme',
    resultClosest: 'Önerilen ayar',
    rpmUnit: 'Devir / Dakika',
    recommendedLabel: 'Önerilen ayar',
    recommendedHint: 'Makinenizin seçicisini bu konuma getirin',
    statusLimitActive: 'Makine limiti aktif',
    statusOutOfRange: 'Ticari standart dışı aralık',
  },
};
