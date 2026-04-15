import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'kesim-optimizasyonu';
const title = 'Çıta ve Panel Kesim Optimizasyonu';
const description =
  'Ahşap, metal veya boru kesimlerini optimize etmek için ücretsiz hesaplayıcı. 1D ve 2D Bin Packing algoritmalarıyla atığı en aza indirin. Marangozluk, metalurji ve tadilatlar için idealdir.';

const faqData = [
  {
    question: '1D kesim optimizasyonu nedir?',
    answer:
      'Standart uzun bir parçadan (çıta, profil, boru) mümkün olan en az atıkla daha küçük parçaların nasıl kesileceğini belirlemek için matematiksel algoritmalar (Bin Packing Problem gibi) kullanan bir araçtır.',
  },
  {
    question: 'Kesim kalınlığını (Kerf) neden dahil etmeliyiz?',
    answer:
      'Testere malzemeyi her kestiğinde, (testere bıçağına bağlı olarak normalde 2 mm ile 4 mm arasında) birkaç milimetre yok olur. Bu boşluğu hesaplamazsanız, listenizdeki son parçalar planlanandan daha kısa olacaktır.',
  },
  {
    question: 'Farklı uzunluktaki parçaları karıştırabilir miyim?',
    answer:
      'Evet, hesaplayıcımız her türlü uzunluk ve miktar kombinasyonunu kabul eder. Algoritma tüm olası kombinasyonları değerlendirecek ve stok malzemesinin maksimum kullanımına öncelik verecektir.',
  },
  {
    question: 'Kesim planımı nasıl kaydederim?',
    answer:
      'Optimize edildikten sonra, sayfayı yazdırabilir veya görsel şemanın ekran görüntüsünü alabilirsiniz. Bu, atölyede kesim sırasını karıştırmamanız için fiziksel bir rehber görevi görecektir.',
  },
];

const howToData = [
  {
    name: 'Temel Malzemeyi Tanımlayın (Stok)',
    text: 'Mevcut çıta veya profilin toplam uzunluğunu girin (örneğin 2400 mm veya 6000 mm).',
  },
  {
    name: 'Bıçak Kalınlığını Ayarlayın (Kerf)',
    text: 'Hesaplamanın milimetrik olması için testerenin her adımda yok ettiği milimetre miktarını ayarlayın.',
  },
  {
    name: 'İstenen Parçaları Listeleyin',
    text: 'Projeniz için ihtiyacınız olan her bir parçanın uzunluğunu ve miktarını yazın.',
  },
  {
    name: 'Optimizasyonu Çalıştırın',
    text: 'En verimli kesim şemasını ve oluşan atığın tam yüzdesini elde edin.',
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

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kesim Optimizasyonu Kesin Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Teknik olarak <strong>Stok Kesme Problemi (Cutting Stock Problem)</strong> olarak bilinen kesim optimizasyonu, endüstri mühendisliğindeki en büyüleyici lojistik zorluklardan biridir. 20 parçalı ve 5 stok çubuklu bir proje için milyonlarca olası kombinasyon vardır. Bir bilgisayar algoritması milisaniyeler içinde en uygun çözümü bulabilir ve olağan %15 atığı %5\'in altına indirebilir.',
    },
    {
      type: 'title',
      text: 'Lineer 1D Kesim ve 2D Panel Kesimi',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Çıtalar ve Profiller İçin Lineer Kesim',
      html: '<p><strong>Lineer kesimde (1D)</strong>, optimizasyon sadece tek bir boyutta gerçekleşir: uzunluk. Malzemenin genişliğinin sabit olduğu varsayılır. Boyutsal kereste (çıtalar, kirişler), metal ve alüminyum profiller, PVC veya bakır borular ve saplamalar için idealdir.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Paneller ve Levhalar İçin Panel Kesimi',
      html: '<p><strong>Panel kesiminde (2D)</strong>, genişlik ve uzunluk olmak üzere iki boyut yönetilir. Araç, her kesimin kenardan kenara gittiği giyotin tipi algoritmalar kullanır. Türev paneller (MDF, sunta), kontrplak, cam, pleksi ve metal levhalar için idealdir.</p>',
    },
    {
      type: 'title',
      text: 'Kritik Faktör: Kesim Kalınlığı (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kerf</strong>, her kesimde yok olan malzemedir. Standart bir tezgah testere bıçağı, kesim başına 3,0 mm ile 3,2 mm arasında tüketir. El tipi daire testere 1,5 ile 2,5 mm tüketir. Pleksi üzerindeki lazer kesim sadece 0,1 ile 0,3 mm\'dir. 2400 mm\'lik çıtalarda 10 kesimlik bir projede kerf\'i görmezden gelmek, 30 mm ile 32 mm arasında yararlı malzeme kaybetmenize neden olabilir.',
    },
    {
      type: 'title',
      text: 'Best Fit Decreasing Algoritması',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Optimizasyon Aracının İç Kapasitesi',
      html: '<p>Optimizasyon aracının çekirdeği <strong>Best Fit Decreasing (BFD)</strong> stratejisini kullanır: önce tüm parçaları en büyükten en küçük uzunluğa göre sıralar (büyük parçaların sığdırılması daha zordur). Ardından, her parça için, en az artığı bırakacak şekilde sığabileceği mevcut artığı arar. Sadece hiçbirine sığmazsa yeni bir ham çubuk açar. Bu süreç, rastgele seçime kıyasla atığı bir büyüklük mertebesinde azaltır.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Lineer (Çubuklar)',
    modePanelLabel: 'Panel (Levhalar)',
    configTitle: 'Malzeme Yapılandırması',
    labelStockLength: 'Malzeme Uzunluğu (mm)',
    labelStockWidth: 'Malzeme Genişliği (mm)',
    labelKerf: 'Bıçak Kalınlığı / Kerf (mm)',
    cutsTitle: 'Kesim Listesi',
    placeholderLength: 'Boy',
    placeholderWidth: 'En',
    placeholderQty: 'Adet',
    btnRemoveTitle: 'Sil',
    statStockUsed: 'Kullanılan Malzeme',
    statTotalCuts: 'Toplam Kesim',
    statWaste: 'Toplam Atık',
    statEfficiency: 'Verimlilik',
    vizTitle: 'Kesim Görselleştirme',
    emptyState: 'Kesimleri ekleyin ve kesim planını görmek için hesapla düğmesine basın.',
    noValidCuts: 'Geçerli kesimler oluşturulamadı. Ölçüleri kontrol edin.',
    noValidPanels: 'Geçerli paneller oluşturulamadı. Parçaların levhaya sığdığından emin olun.',
    stockLabel: 'Malzeme',
    panelLabel: 'Panel',
    wasteLabel: 'Atık:',
    effLabel: 'Ver:',
  },
};
