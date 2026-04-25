import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = '2-zamanli-yakit-karisim-hesaplamasi';
const title = '2 Zamanlı Yakıt Karışım Hesaplama: Hassas Yağ ve Yatık Oranları';
const description = '2 zamanlı motorlar için hassas yağ-yakıt karışım oranlarını anında hesaplayın. Motorlu testereler, mopetler ve küçük motorlar için temel araç. 1:25, 1:33, 1:40 ve 1:50 oranlarını destekler.';

const faqData = [
  {
    question: '2 zamanlı motor nedir?',
    answer: '2 zamanlı bir motor, emme ve güç çevrimini iki piston strokunda birleştirerek 4 zamanlı motorlardan daha basit ve hafif olmasını sağlar. Motorlu testereler, yaprak üfleyiciler ve mopetlerde kullanılırlar. Yağlama için yakıta karıştırılmış yağa ihtiyaç duyarlar.',
  },
  {
    question: 'Yaygın yakıt-yağ karışım oranları nelerdir?',
    answer: 'Yaygın oranlar 1:25 (zengin, koruyucu), 1:33 (eski ekipmanlar), 1:40 (standart) ve 1:50\'dir (fakir, modern motorlar). Tam oran için motor kılavuzuna bakın; yanlış oran motora zarar verebilir.',
  },
  {
    question: 'Yanlış karıştırırsam ne olur?',
    answer: 'Çok fazla yağ (zengin karışım) aşırı dumana, bujilerin kirlenmesine ve düşük performansa neden olur. Çok az yağ (fakir karışım) motorun kilitlenmesine, piston hasarına ve motor arızasına yol açar.',
  },
  {
    question: 'Ne tür yağ kullanmalıyım?',
    answer: 'Ekipmanınız için derecelendirilmiş 2 zamanlı motor yağı kullanın. Premium sentetik yağlar, geleneksel yağlara göre daha iyi koruma ve daha temiz yanma sağlar. Asla 4 zamanlı motor yağı kullanmayın.',
  },
  {
    question: 'Yakıt ve yağı nasıl karıştırırım?',
    answer: 'Benzinin bir kısmını temiz bir kaba dökün, hesaplanan miktarda yağı ekleyin ve kalan benzini ilave edin. 1-2 dakika çalkalayarak iyice karıştırın. Kabın üzerine karışım tarihini yazın.',
  },
];

const howToData = [
  { name: 'Oranınızı bilin', text: 'Motor kılavuzuna bakın. Yaygın oranlar: testereler (1:40 veya 1:50), mopetler (1:33), eski motosikletler (1:25). Yanlış oran motora zarar verir.' },
  { name: 'Yakıt miktarını ölçün', text: 'Ne kadar benzine ihtiyacınız olduğuna karar verin. Bu araç litre, galon veya herhangi bir birimi destekler. Doğru yakıt ölçümü = doğru yağ miktarı.' },
  { name: 'Gereken yağı hesaplayın', text: 'Yakıt hacmini ve oranı girin. Hesaplayıcı, mükemmel bir karışım için tam olarak ne kadar yağa (ml veya litre) ihtiyacınız olduğunu gösterir.' },
  { name: 'Dikkatlice karıştırın', text: 'Benzini temiz bir kaba dökün, yağı ekleyin, sonra kalan benzini ekleyin. İyice harmanlanması için 1-2 dakika çalkalayın.' },
  { name: 'Etiketleyin ve kullanın', text: 'Kabı tarih ve oranla işaretleyin. En iyi sonuç için karışımı 30 gün içinde tüketin (özellikle sentetik yağlarda).' },
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '2 Zamanlı Yakıt Karışım Hesaplama: Testere ve Mopetler için Hassas Yağ Oranları', level: 2 },
    { type: 'paragraph', html: 'İki zamanlı motorların hayatta kalması için hassas bir yakıt-yağ karışımı gerekir. Yanlış karıştırırsanız motorunuzu dakikalar içinde mahvedebilirsiniz. Bu hesaplayıcı, yakıt miktarınız ve motor tipiniz için gereken tam yağ miktarını anında belirler.' },

    { type: 'title', text: '2 Zamanlı Motorlar Neden Yakıtta Yağa İhtiyaç Duyar?', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'Kritik Fark', html: 'Ayrı yağ depoları olan 4 zamanlı motorların aksine, 2 zamanlı motorlar yağı doğrudan yakıta karıştırır. Her güç strokunda motor, hem enerji hem de yağlama için yakıt-yağ karışımını yakar. Ayrı bir yağ pompası yoktur; pistonları sadece karışımlı yakıt hayatta tutar.' },

    { type: 'title', text: '2 Zamanlı Oran Hızlı Referans', level: 3 },
    { type: 'table', headers: ['Oran', 'Yağ %', 'Kullanım Durumu', 'Motor Tipi', 'Özellikler'], rows: [
      ['1:25', '%3,85', 'Maksimum Koruma', '1980 öncesi ekipmanlar, ağır yük, eski motosikletler', 'Zengin karışım: daha fazla duman, daha fazla karbon birikimi, kilitlenmeye karşı maksimum koruma'],
      ['1:33', '%2,94', 'Klasik Ekipmanlar', '80-90\'ların küçük motorları, eski testereler', 'Orta zenginlik: koruma ve verimlilik dengesi'],
      ['1:40', '%2,44', 'Endüstri Standardı', 'Çoğu modern testere, mopet ve küçük motorlar', 'Standart tavsiye: bugünün sentetik yağları için tasarlanmıştır'],
      ['1:50', '%1,96', 'Modern Verimlilik', 'En yeni testereler, yüksek performanslı mopetler', 'Fakir karışım: daha az duman, temiz yanma, premium sentetik yağlar için']
    ] },

    { type: 'title', text: 'Yanlış Oranların Sonuçları', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Çok Fazla Yağ (Zengin Karışım)', con: 'Aşırı beyaz duman, kirlenmiş bujiler, karbon birikimi, zayıf hızlanma, motor arızası' },
      { pro: 'Çok Az Yağ (Fakir Karışım)', con: 'Piston saniyeler içinde kilitlenir, çizilmiş silindir duvarları, katastrofik motor hasarı' },
      { pro: 'Doğru Oran', con: 'Sarsıntısız çalışma, uygun yağlama, optimum yanma, uzun motor ömrü, güvenilir marş' }
    ] },

    { type: 'title', text: 'Yaygın Ekipman Oranları', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Motorlu Testereler', html: '<strong>Stihl, Husqvarna, Echo:</strong> Modern modeller genellikle 1:40 veya 1:50 gerektirir. Her zaman kılavuzunuzu kontrol edin. Eski Stihl makineleri (90\'lar ve öncesi) 1:25 veya 1:33 belirtebilir.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Mopetler ve Motosikletler', html: '<strong>Vespa, Honda, Yamaha:</strong> Çoğu eski model için 1:33, modern versiyonlar için 1:40–1:50 gerektirir. Yüksek performanslı mopetler genellikle 1:50 oranlarını belirtir.' },
    { type: 'card', icon: 'mdi:tools', title: 'Yaprak Üfleyiciler', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Tipik olarak 1:50 (modern) veya 1:40 (biraz daha eski). Bu araçlar hızlı sezonluk kullanım için tasarlanmıştır, bu nedenle fakir oranlar güvenilirlikten ödün vermeden dumanı azaltır.' },

    { type: 'title', text: 'Yağ Tipi Oran Kadar Önemlidir', level: 3 },
    { type: 'comparative', items: [
      { title: 'Geleneksel 2 Zamanlı Yağı', description: 'Ara sıra kullanım için bütçe dostu seçenek. Daha fazla duman, standart oranlar için yeterli koruma.', icon: 'mdi:beaker', points: ['Düşük maliyet', 'Görünür duman', 'Yüksek kül birikimi', '1:40 oranları için uygun'] },
      { title: 'Sentetik 2 Zamanlı Yağı', description: 'Sık kullanıcılar için premium seçim. Daha temiz yanma, daha iyi koruma, daha fakir oranlara olanak tanır.', icon: 'mdi:flame', points: ['Düşük duman çıkışı', 'En iyi motor koruması', '1:50 oranlarını güvenle sağlar', 'Uzun depolama stabilitesi'], highlight: true },
      { title: 'Sentetik Karışım (Yarı Sentetik)', description: 'Geleneksel ve tam sentetik arasında orta yol. Makul maliyetle iyi koruma. Yaygın üretici tavsiyesi.', icon: 'mdi:beaker-outline', points: ['Dengeli performans', 'Orta maliyet', '1:40 oranları için iyi', 'Geleneksele göre daha az duman'] }
    ], columns: 3 },

    { type: 'title', text: 'Adım Adım Karıştırma İşlemi', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'Karıştırmanın Doğru Yolu', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Özel bir kap kullanın</strong> sadece yakıt karıştırma için ayrılmış. Temiz, kuru.</li><li><strong>Benzinin yarısını</strong> önce kaba dökün.</li><li><strong>Hesaplanan yağ miktarını ekleyin</strong> (hassasiyet için bu hesaplayıcıyı kullanın).</li><li><strong>Kalan benzini ekleyin</strong> hedef hacme ulaşmak için.</li><li><strong>1-2 dakika kuvvetlice çalkalayın</strong> renk homojen olana kadar. Homojen bir karışım = eşit yağlama.</li><li><strong>Kabı etiketleyin</strong> tarih, oran ve yakıt tipi ile.</li><li><strong>30 gün içinde kullanın</strong> (sentetik yağlar bunu 60 güne çıkarır).</li></ol>' },

    { type: 'title', text: 'Ekipman Kılavuzunuzdan Ne Zaman Şüphe Etmelisiniz?', level: 3 },
    { type: 'tip', html: '<strong>Her zaman önce ekipman kılavuzundaki oranı doğrulayın.</strong> Bulamıyorsanız üreticinin web sitesini ziyaret edin. Asla tahmin etmeyin — yanlış oran garantiyi geçersiz kılar ve motorun kilitlenme riskini artırır. Ekipmanınız eskiyse ve kılavuz kayıpsa model numarasıyla çevrimiçi arama yapın.' },

    { type: 'title', text: 'Sözlük: 2 Zamanlı Terimlerin Açıklaması', level: 3 },
    { type: 'glossary', items: [
      { term: 'Fakir Karışım (Lean)', definition: 'Çok az yağ içeren yakıt (1:50 gibi yüksek oran). Yetersiz yağlama nedeniyle piston kilitlenme riski.' },
      { term: 'Zengin Karışım (Rich)', definition: 'Çok fazla yağ içeren yakıt (1:25 gibi düşük oran). Aşırı duman, buji kirlenmesi ve karbon birikimine neden olur.' },
      { term: 'Homojen Karışım', definition: 'İyice çalkalanarak elde edilen, yakıt ve yağın her yere eşit dağıldığı karışım. Eşit yağlama için şarttır.' },
      { term: 'Kilitlenme (Seizure)', definition: 'Yetersiz yağlama ve sürtünme nedeniyle pistonun silindir içinde donması. Tam motor arızasıyla sonuçlanır.' },
      { term: 'Sentetik Yağ', definition: 'Geleneksel mineral yağlara göre üstün koruma, temiz yanma ve sıcaklık stabilitesi sunan laboratuvar yapımı yağ.' },
      { term: '2 Zamanlı Motor', definition: 'Tam yanma döngüsünü iki piston hareketinde tamamlayan motor. 4 zamanlı motorlardan daha hafif ve basittir.' },
      { term: '4 Zamanlı Motor', definition: 'Ayrı yağ karteri olan ve dört aşamalı döngüye sahip motor. Yağ kanallardan dolaşır, yakıta karışmaz.' }
    ] },

    { type: 'title', text: 'Bu Hesaplayıcı Nasıl Zaman ve Para Tasarrufu Sağlar?', level: 3 },
    { type: 'stats', items: [
      { value: '%100', label: 'Doğru hesaplamalar, ölçüm hatası yok', icon: 'mdi:check-circle' },
      { value: 'Anında', label: 'Tahminle değil, saniyeler içinde tam miktarlar', icon: 'mdi:flash' },
      { value: '4 Oran', label: '1:25, 1:33, 1:40, 1:50 kapsanır', icon: 'mdi:counter', trend: { value: 'Artı özel oranlar', positive: true } },
      { value: 'Paylaşılabilir', label: 'Tam karışım ayarınızı URL üzerinden kopyalayın ve paylaşın', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Motoru Bitiren Yaygın Hatalar', level: 3 },
    { type: 'diagnostic', variant: 'error', title: '2 Zamanlı Motorlarda 4 Zamanlı Yağı Kullanmak', icon: 'mdi:alert', badge: 'Motor Ölümü', html: '4 zamanlı yağlar bir motor bloğu içinde dolaşmak için tasarlanmıştır. 2 zamanlı tankta temiz yanmazlar ve motorunuzu saatler içinde mahvederler.' },
    { type: 'diagnostic', variant: 'warning', title: 'İyice Karıştırmayı Unutmak', icon: 'mdi:alert', badge: 'Kilitlenme Riski', html: 'Eksik karıştırma nedeniyle yağ ve yakıt ayrılırsa motorunuzun parçaları yağlamasız yanacaktır. En az 1-2 dakika çalkalayın.' },
    { type: 'diagnostic', variant: 'warning', title: 'Eski Yakıt Kullanmak (60 Günden Fazla)', icon: 'mdi:alert', badge: 'Sakız Birikimi', html: 'Etanol karışımlı yakıt zamanla bozulur. Eski yakıt karışımı karbüratörlerde sakız kalıntıları bırakır. Sadece 30 gün içinde kullanacağınız kadar karıştırın.' },

    { type: 'title', text: 'SSS Özeti', level: 3 },
    { type: 'summary', title: 'Karıştırmadan Önce', items: [
      'Tam oran için ekipman kılavuzunu kontrol edin — bu üreticinin test edilmiş özelliğidir.',
      '4 zamanlı veya diğer yağları değil, 2 zamanlı yağı kullandığınızdan emin olun.',
      'Sadece yakıt karıştırma için ayrılmış temiz bir kap kullanın.',
      'Taze benzin (aylarca saklanmamış) ve uyumlu 2 zamanlı yağı kullanın.',
      'İyice karıştırın ve tarih, oran ve yakıt tipi ile etiketleyin.',
      'En iyi sonuç için karışımı 30 gün içinde kullanın.'
    ] },
  ],
  ui: {
    titleMain: '2 Zamanlı Yakıt Karışım Hesaplama',
    labelFuelVolume: 'Yakıt Miktarı',
    labelRatio: 'Karışım Oranı',
    labelOilRequired: 'Gereken Yağ',
    labelTotalMixture: 'Toplam Karışım',
    labelRichness: 'Karışım Zenginliği',
    labelPresets: 'Yaygın Oranlar',
    labelCustomRatio: 'Özel Oran (1:X)',
    btnClear: 'Temizle',
    btnCopyResults: 'Sonuçları Kopyala',
    btnSwitchMode: 'Modu Değiştir',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Fakir (daha az yağ, kilitlenme riski)',
    richBalanced: 'Dengeli (standart karışım)',
    richRich: 'Zengin (daha fazla yağ, daha fazla duman, motor koruması)',
    msgReady: 'Hazır',
    msgMixtureReady: 'Karışım hesaplandı',
    tooltipFuelVolume: 'Litre cinsinden benzin miktarını girin',
    tooltipRatio: 'Oranı 25, 33, 40 veya 50 olarak girin (1:25, 1:33 vb. için)',
    recipientLabel: 'Karışım Kabı',
    oilPercentage: 'Yağ %',
    labelVolume: 'Hacim',
    labelRatioShort: 'Oran',
    labelOilTip: '%2 yağ karışımı = 1:50 oranı',
    labelMixingTips: 'Karıştırma İpuçları',
    labelMixingTipsDesc: 'Temiz bir kapta karıştırın: önce benzin, ölçülen yağı ekleyin, sonra kalan benzini ekleyin. Homojen karışım için iyi çalkalayın. Tarih ve oranla etiketleyin.',
    recipePrefix: 'Şunun için:',
    recipeAt: 'yakıtın oranı:',
    recipeAdd: 'tam olarak şunu ekleyin:',
    recipeOfOil: '2 zamanlı yağı.',
    copyTextPrefix: '2 Zamanlı Karışım',
    copyTextFuel: 'yakıt',
    copyTextOil: 'yağ',
  },
};
