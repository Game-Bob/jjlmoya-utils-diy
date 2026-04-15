import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'termal-genlesme-hesaplayici';
const title = 'Kiriş ve Yapıların Termal Genleşme Hesaplayıcısı';
const description = 'Sıcaklık değişimleri nedeniyle bir kirişin veya yapının ne kadar uzadığını hesaplayın. Mühendisler ve DIY için teknik araç. Malzeme bazlı genleşme katsayıları içerir.';

const faqData = [
  {
    question: 'Lineer genleşme katsayısı nedir?',
    answer: 'Malzemelerin, sıcaklığındaki her bir santigrat derece artış başına ne kadar genleştiğini gösteren fiziksel bir özelliktir. 1/°C veya °C⁻¹ birimiyle ölçülür.',
  },
  {
    question: 'Kirişlerde genleşmeyi hesaplamak neden önemlidir?',
    answer: 'Bir kirişin genleşmesi için alanı (genleşme derzi) yoksa, yapıyı deforme edebilecek, betonu çatlatabilecek ve hatta çökmeye neden olabilecek devasa iç gerilmeler oluşur.',
  },
  {
    question: 'Ahşap her yöne aynı şekilde mi genleşir?',
    answer: 'Hayır. Ahşap anizotropik bir malzemedir. Lif yönünde çok az, ancak enine yönde (genişlik ve kalınlık) önemli ölçüde genleşir.',
  },
  {
    question: 'Başlangıç Sıcaklığı olarak ne kullanmalıyım?',
    answer: 'Montaj veya inşaat sırasındaki sıcaklığı kullanmalısınız. Final Sıcaklığı ise kullanım ömrü boyunca beklenen maksimum sıcaklık olmalıdır.',
  },
];

const howToData = [
  { name: 'Orijinal uzunluğu ölçün', text: 'Kirişin veya malzemenin uzunluğunu metre cinsinden girin.' },
  { name: 'Malzemeyi seçin', text: 'Spesifik katsayıyı uygulamak için metaller, inşaat malzemeleri veya ahşaplar arasından seçim yapın.' },
  { name: 'Termal aralığı tanımlayın', text: 'Termal farkı hesaplamak için başlangıç ve beklenen maksimum sıcaklığı belirtin.' },
  { name: 'Uzamayı analiz edin', text: 'Uygun derzleri öngörmek için milimetre cinsinden toplam uzamayı ve sonuçtaki son uzunluğu gözlemleyin.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    { name: 'Termal Genleşme Katsayısı — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: 'Termal Genleşme ve Sıcaklık — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: 'Lineer Termal Genleşme — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Termal Genleşme Nedir ve Neden Yapıları Etkiler', level: 2 },
    { type: 'paragraph', html: '<strong>Termal genleşme</strong>, bir malzemenin sıcaklığındaki artışa yanıt olarak uzunluğunun artması fiziksel sürecidir. İnşaatta bu olay bir merak konusu değil; betonu kırabilen, çelik kirişleri deforme edebilen ve tren raylarını bükebilen bir kuvvettir.' },
    { type: 'title', text: 'Lineer Genleşme Formülü', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Lineer Genleşme Formülü', html: '<p>Yapısal bir elemanın genleşmesi şu şekilde hesaplanır: <code>ΔL = L₀ · α · ΔT</code>. Burada <strong>ΔL</strong> toplam uzama, <strong>L₀</strong> orijinal uzunluk, <strong>α</strong> malzemenin genleşme katsayısı (1/°C cinsinden) ve <strong>ΔT</strong> sıcaklık farkıdır.</p>' },
  ],
  ui: {
    configTitle: 'Konfigürasyon',
    labelMaterial: 'Malzeme',
    groupMetals: 'Metaller',
    groupConstruction: 'İnşaat',
    groupWood: 'Ahşap ve Polimerler',
    matSteel: 'Çelik (12 ppm/°C)',
    matAluminum: 'Alüminyum (23 ppm/°C)',
    matCopper: 'Bakır (17 ppm/°C)',
    matIron: 'Demir (11 ppm/°C)',
    matConcrete: 'Beton (12 ppm/°C)',
    matBrick: 'Tuğla (9 ppm/°C)',
    matGlass: 'Cam (9 ppm/°C)',
    matWoodFiber: 'Ahşap Lif (5 ppm/°C)',
    matWoodTransversal: 'Ahşap Enine (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metalurji',
    catConstruction: 'İnşaat',
    catWood: 'Ahşap ve Polimerler',
    labelLength: 'Başlangıç Uzunluğu (m)',
    labelTempStart: 'B. Sıcaklığı (°C)',
    labelTempEnd: 'Maks. Sıcaklık (°C)',
    deltaLabel: 'Termal Fark (ΔT)',
    vizTitle: 'Genleşme Simülasyonu',
    resultGrowthLabel: 'Toplam Uzama (ΔL)',
    resultFinalLabel: 'Final Uzunluğu',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Burulma Riski',
    jointTitle: 'Minimum Derz',
    riskLow: 'Düşük',
    riskModerate: 'Orta',
    riskCritical: 'Kritik',
    tipDefault: 'Özel alaşımların kesin katsayıları için üretici kılavuzuna bakın.',
    tipSteel: 'Çelik ve beton neredeyse aynı katsayılara sahiptir, bu da betonarmenin iç çatlak oluşmadan çalışmasını sağlar.',
    tipAluminum: 'Alüminyum çelikten neredeyse iki kat fazla genleşir. Metal doğramalarda bu durum elastik sızdırmazlık kullanımını zorunlu kılan bir unsurdur.',
    tipGlass: 'Cam ve çelik neredeyse aynı oranda genleşir, bu da büyük cam cephelerin tasarımı için anahtar niteliğindedir.',
    tipConcrete: 'Betonun katsayısı çeliğinkine çok yakındır, karma yapıların bu kadar stabil olmasının nedeni budur.',
    tipWood: 'Ahşap ısı nedeniyle az, ancak nem nedeniyle çok genleşir. Uzun yapılarda lif yönü oldukça stabildir.',
    tipPvc: 'PVC çok yüksek bir genleşme oranına sahiptir. Kırılmadan hareketi emmek için özel derzler gerektirir.',
  },
};
