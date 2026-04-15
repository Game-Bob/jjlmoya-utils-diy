import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';

const slug = 'korkuluk-hesaplama';
const title = 'Korkuluk Hesaplayıcı: Korkuluklar İçin Tam Boşluk Hesabı';
const description =
  '10 cm kuralına uygun olarak korkuluk çubukları veya balusterlar arasındaki tam boşluğu hesaplayın. Otomatik planlar.';

const faqData = [
  {
    question: 'Korkuluk çubukları arasındaki yasal maksimum mesafe nedir?',
    answer:
      'Çoğu uluslararası yapı yönetmeliğinde, çocuk kazalarını önlemek amacıyla korkuluk elemanları arasındaki boşluk, 10 cm çapındaki bir kürenin geçmesine izin vermemelidir.',
  },
  {
    question: 'Boşluk nasıl ölçülür: merkezden merkeze mi yoksa boşluklar mı?',
    answer:
      "Hesaplayıcımız her iki değeri de sağlar. 'Net boşluk', çubuklar arasındaki gerçek boşluktur (güvenlik için hayati önem taşır), 'merkezden merkeze mesafe' (on-center) ise her bir korkuluk çubuğunun nereye delineceğini veya sabitleneceğini belirleyen değerdir.",
  },
  {
    question: 'Dağılım tam olarak eşit olmazsa ne olur?',
    answer:
      'Hesaplayıcı, ilk ve son boşluğun özdeş olmasını sağlayacak şekilde çubuk sayısını otomatik olarak ayarlar; bu da görsel simetriyi ve izin verilen maksimum boşluğa tam uyumu garanti eder.',
  },
  {
    question: 'Korkuluk çubuklarını kaynaklamak mı yoksa vidalamak mı daha iyidir?',
    answer:
      'Malzemeye bağlıdır. Çelikte kaynak, maksimum yapısal rijitlik sunar. Ahşap veya alüminyumda mekanik ankrajlar veya geçme vidalar kullanılır. Önemli olan, korkuluğun en az 0,8 kN/m yatay kuvvete dayanabilmesidir.',
  },
];

const howToData = [
  {
    name: 'Toplam uzunluğu ölçün',
    text: 'Korkuluğun monte edileceği ilk ve son direk arasındaki tam mesafeyi ölçün.',
  },
  {
    name: 'Korkuluk çubuğu kalınlığını belirleyin',
    text: 'Tek bir çubuğun genişliğini ölçün (örneğin kare profil için 2x2 cm veya yuvarlaksa çapı).',
  },
  {
    name: 'Maksimum boşluğu ayarlayın',
    text: 'İstenen maksimum ayrımı belirtin (yönetmeliklere uyum için 10 cm önerilir).',
  },
  {
    name: 'Montaj işaretlerini alın',
    text: 'Simetrik ve güvenli bir dağılım sağlamak için deliklerin açılacağı tam konumların listesini inceleyin.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    {
      name: 'TS 9111 - Özürlülerin İkamet Edeceği Binaların Düzenlenmesi Kuralları (Türkiye)',
      url: 'https://www.tse.org.tr/',
    },
    {
      name: 'IRC - International Residential Code (ABD)',
      url: 'https://codes.iccsafe.org/content/IRC2021',
    },
    {
      name: 'IBC - International Building Code',
      url: 'https://codes.iccsafe.org/content/IBC2021',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Nihai Kılavuz: Korkuluk Çubuğu Boşluğu Nasıl Hesaplanır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Güvenli ve estetik açıdan kusursuz bir korkuluk tasarlamak, matematiksel hassasiyeti yapı yönetmelikleriyle birleştiren bir sanattır. İster bir teras, ister balkon veya iç mekan merdiveni olsun, korkuluk çubuklarının (veya balusterların) doğru hesaplanması projenin en kritik adımıdır. Hesaplama hatası sadece görsel simetriyi bozmakla kalmaz, aynı zamanda yapınızı yasa dışı ve güvensiz hale getirebilir.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Bu hesaplama neden bu kadar önemlidir?',
      html: '<p>Bu sadece "boşluğu doldurmak" ile ilgili değildir. Çocuk kazalarını önlemek için tasarlanmış uluslararası bir güvenlik standardı olan <strong>4 İnç Küre Kuralı (10 cm)</strong> ile uyumluluk hakkındadır.</p>',
    },
    {
      type: 'title',
      text: '1. Güvenlik Yönetmeliği: 10 cm Kuralı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İlk ahşap veya metal parçasını kesmeden önce, matematiğin arkasındaki "neden"i anlamalısınız. Birçok ülkedeki yapı kodları ve ABD’deki IRC (Uluslararası Konut Kodu) net bir standart belirler: <em>"Dikey elemanlar arasındaki net boşluk, 10 cm (4 inç) çapındaki bir kürenin geçmesine izin vermemelidir."</em>',
    },
    {
      type: 'paragraph',
      html: 'Bu ölçü rastgele belirlenmemiştir. Küçük bir çocuğun (genellikle 1 yaşından küçük) ortalama kafa çapıdır. Eğer bir çocuğun vücudu geçebiliyor ancak kafası sıkışıyorsa, boğulma riski çok yüksektir. Kafası geçebiliyorsa, boşluğa düşebilir. Bu nedenle, <strong>Korkuluk Hesaplayıcımızın</strong> amacı sadece estetik değil, hayat kurtarmaktır.',
    },
    {
      type: 'title',
      text: '2. Matematiksel Problem: Direk Hatası (Fencepost Error)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Programlamada ve inşaatta, <em>"Fencepost Error"</em> (Direk Hatası) olarak adlandırılan klasik bir problem vardır. Her metrede bir direk olacak şekilde 10 metrelik bir çit inşa etmek istiyorsanız, kaç direğe ihtiyacınız olur? Sezgisel cevap 10’dur, ancak doğru cevap 11’dir.',
    },
    {
      type: 'paragraph',
      html: 'Korkuluk çubuklarında da benzer bir durum söz konusudur, ancak korkuluk çubuğunun kendi genişliği de yer kapladığı için durum daha karmaşıktır. Aracımızın kullandığı formül, bu denklem sistemini sizin için çözer:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Adım A: Boşlukları Hesaplama',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Önce, izin verilen maksimum alanı kullanırsak teorik olarak kaç korkuluk çubuğunun sığacağını belirleriz. Oluşan boşlukların maksimumdan <em>küçük</em> olmasını sağlamak için bu sayıyı yukarı yuvarlarız.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Adım B: Tam Mesafeyi Yeniden Hesaplama',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Korkuluk çubuklarının tam sayısını (n) öğrendikten sonra, tüm malzemenin genişliğini çıkararak ne kadar alanın "arttığını" hesaplarız ve bunu boşluklar (n+1) arasında eşit olarak paylaştırırız.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Kusursuz Montaj İçin Adım Adım Kılavuz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rakamlara sahip olmak savaşın sadece yarısıdır. Burada, bu rakamları kağıttan (veya ekrandan) işinizin gerçekliğine nasıl aktaracağınızı açıklıyoruz.',
    },
    {
      type: 'title',
      text: 'Adım 1: Hassas Ölçüm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Direkten direğe <strong>iç</strong> mesafeyi ölçün. Direğin merkezinden ölçmeyin. Dolduracağınız tam boşluk alanını (L) bilmeniz gerekir. Korkuluğunuzun birkaç bölümü varsa, her birini ayrı ayrı ölçün; yapılar nadiren tam olarak kare şeklindedir ve 0,5 cm’lik bir hata simetriyi bozabilir.',
    },
    {
      type: 'title',
      text: 'Adım 2: Merkezi Bulmak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Birinci numaralı yeni başlayan hatası, korkuluk çubuklarını bir uçtan diğer uca yerleştirmeye başlamaktır. Bu neredeyse her zaman garip boyutlu bir son boşlukla sonuçlanır ve görsel uyumu bozar.<ul><li>Korkuluğun <strong>tam merkezini</strong> (L / 2) işaretleyin.</li><li>Merkezde bir <em>korkuluk çubuğu</em> mu yoksa bir <em>boşluk</em> mu istediğinize karar verin.</li><li>Merkezde bir korkuluk çubuğu istiyorsanız: merkez işaretinizin her bir yanına korkuluk çubuğu genişliğinin yarısını işaretleyin.</li><li>Merkezde bir boşluk istiyorsanız: her iki yana boşluk mesafesinin yarısını (g / 2) işaretleyin.</li></ul>',
    },
    {
      type: 'title',
      text: 'Adım 3: Bir Ara Parçası (Spacer) Yapmak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her korkuluk çubuğu için şerit metre kullanmayın. Birikmeli insan hatası, son korkuluk çubuğunun birkaç santimetre sapmasına neden olacaktır. Profesyonel yöntem, hesaplayıcımız tarafından verilen tam boşluk ölçüsünde (g) bir ahşap blok (veya iki) kesmektir.',
    },
    {
      type: 'paragraph',
      html: 'Bu bloğu fiziksel bir şablon olarak kullanın. Bir korkuluk çubuğunu yerleştirin, bloğu koyun, bir sonraki korkuluk çubuğunu bloğa iyice dayayarak yerleştirin ve sabitleyin. Bu, milimetrik tutarlılığı garanti eder.',
    },
    {
      type: 'title',
      text: '4. Gerekli Malzemeler ve Araçlar',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Profesyonel bir sonuç için ekipman',
      html: '<ul><li>Yüksek hassasiyetli şerit metre</li><li>Marangoz kalemi</li><li>Su terazisi (dikeylik için)</li><li>Gönyeli testere (temiz kesimler için)</li><li>Matkap ve ahşap vidaları</li><li>Ara parça blokları (siparişe göre yapılmış)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Ek Teknik Sorular',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Ya son boşluk uymazsa?',
      html: '<p>Hesaplayıcımızı kullandıysanız, bu durumun olmaması gerekir. Ancak gerçek dünyada ahşap bükülür ve direkler her zaman düz değildir. Sona ulaştığınızda 1-2 mm’lik bir fazlalık veya eksiklik fark edilmez. 1 cm eksikse, ara parça bloklarınızı kontrol edin; muhtemelen her adımda birkaç mm kaybetmişsinizdir.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Çocuğum yoksa korkuluk çubuklarını daha seyrek koyabilir miyim?',
      html: '<p>Yasal olarak, hayır. Yapı kodları mevcut sakinlere değil, eve uygulanır. Bir gün evi satarsanız, yönetmeliğe aykırı bir korkuluk inceleme sırasında sorun yaratacaktır. Ayrıca, ziyaretçiler (yeğenler, torunlar) tehlikede olabilir.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Ahşap, Metal veya Cam?',
      html: '<p>Bu hesaplayıcı <strong>her türlü tekrarlayan dikey eleman</strong> için çalışır. Yatay çelik halatlar kullanıyorsanız, yönetmelik farklıdır (genellikle tırmanmaya izin vermemelidirler, "merdiven etkisi"). Cam için, sürekli bir panel olarak kabul edilir ve boşluk değil, darbe direnci uygulanır.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"Mimarlık, mekana çevrilmiş zamanın iradesidir."</em></p><p>Bu aracın daha güvenli ve güzel alanlar inşa etmenize yardımcı olacağını umuyoruz. Minimum yükseklik (genellikle 90-110 cm) veya yük kuvvetleri hakkında belirli varyasyonlar olabileceğinden, her zaman belediyenizin yerel yapı koduna danışmayı unutmayın.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Boyutlar',
    sectionDesc: 'Korkuluğunuzun ölçülerini girin',
    labelRailLength: 'Toplam Uzunluk (L)',
    labelBalusterWidth: 'Korkuluk Çubuğu Genişliği (w)',
    labelMaxGap: 'Maksimum Boşluk (g)',
    blueprintTitle: 'Montaj Planı',
    blueprintRef: 'REF: BAL-001 // ÖLÇEK: OTO',
    labelRequired: 'Gerekli Korkuluk Çubuğu',
    labelExactGap: 'Tam Boşluk',
    labelOnCenter: 'Merkezden Merkeze',
    labelTotalSpaces: 'Toplam Boşluk Sayısı',
    labelCoveredLength: 'Kaplanmış Uzunluk',
    labelDisclaimer: '* Gösterilen boyutlar görselleştirme için yaklaşık değerlerdir.',
  },
};
