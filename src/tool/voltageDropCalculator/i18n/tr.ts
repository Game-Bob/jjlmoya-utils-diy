import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';

const slug = 'gerilim-dusumu-hesaplayici';
const title = 'Gerilim Düşümü ve Kablo Kesiti Hesaplayıcı';
const description = 'Kabloların yanmasını önlemek için teknik araç. Mesafe ve güce göre 12V, 24V ve 230V tesisatlar için gerekli kablo kesitini hesaplayın.';

const faqData = [
  {
    question: 'Gerilim düşümü nedir ve neden önemlidir?',
    answer: 'Elektriğin bir kablo üzerinden iletilirken uğradığı voltaj kaybıdır. Kablo çok ince veya çok uzunsa, voltaj kaybedersiniz. Sonuç: sönük ışıklar, çalışmayan motorlar veya tehlikeli bir şekilde ısınan kablolardır.',
  },
  {
    question: '12V\'da 10 metre için hangi kablo kesitine ihtiyacım var?',
    answer: 'Güce bağlıdır. 12V ve 10A için 10m mesafede en az 2.5mm² gerekir. 20A için 6mm² gerekir. Düşük voltajda (12V/24V), gerilim düşümü 230V\'a göre çok daha kritiktir.',
  },
  {
    question: 'Tüm tesisat için 1.5mm² kablo kullanabilir miyim?',
    answer: 'Hayır. 1.5mm² aydınlatma devreleri içindir (maks 10A). Prizler için 2.5mm² gerekir. Mutfak veya çamaşır makinesi için 4mm² veya 6mm² gerekir. İnce kablo kullanmak tehlikelidir ve yangına neden olabilir.',
  },
  {
    question: 'İzin verilen maksimum gerilim düşümü nedir?',
    answer: 'Ev tesisatlarında (230V): aydınlatma için maks %3, diğer kullanımlar için %5. 12V/24V (karavan, solar) tesisatlarda: toplamda %3\'ten fazla olmamalıdır. Daha fazla düşüş, verimlilik kaybı ve aşırı ısınma riski demektir.',
  },
];

const howToData = [
  { name: 'Sistem voltajını tanımlayın', text: 'Tesisatınızın 12V, 24V (solar/karavan) veya 230V (ev) olup olmadığını seçin.' },
  { name: 'Akım şiddetini girin', text: 'Kablonun ucundaki cihazın tüketeceği Amper (A) veya Watt (W) değerini yazın.' },
  { name: 'Kablo mesafesini ölçün', text: 'Enerji kaynağından alıcıya kadar olan kablo uzunluğunu (tek yön) metre cinsinden girin.' },
  { name: 'İletken malzemesini seçin', text: 'Doğru özdirenç hesaplaması için bakır (standart) veya alüminyum seçin.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    { name: 'IEC 60364: Alçak Gerilim Elektrik Tesisatları', url: 'https://www.iec.ch/' },
    { name: 'Ohm Yasası ve Özdirenç: Wikipedia', url: 'https://tr.wikipedia.org/wiki/%C3%96zdiren%C3%A7' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Gerilim Düşümü Hakkında Tam Kılavuz', level: 2 },
    { type: 'paragraph', html: 'Bir karavan yapıyorsanız, güneş enerjisi sistemi tasarlıyorsanız veya bahçenize kablo çekiyorsanız, projenizi mahvedebilecek görünmez bir düşman vardır: <strong>gerilim düşümü</strong>. Bu sadece teknik bir konu değil; soğutan bir buzdolabı ile kapanan bir buzdolabı arasındaki veya güvenli bir tesisat ile yangın riski arasındaki farktır.' },
    { type: 'title', text: 'Gerilim Düşümü Formülü', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Ohm Yasası ile Kesin Hesaplama', html: '<p>Formül <strong>ΔV = (2 × L × I × ρ) / S</strong> şeklindedir. Burada L tek yönlü uzunluk, I akım, ρ özdirenç (bakır için 0,0178) ve S kablo kesitidir.</p>' },
  ],
  ui: {
    heroDropLabel: 'Toplam Gerilim Düşümü',
    heroVoltsUnit: 'Volt',
    heroPctLoss: '% kayıp',
    heroEffLabel: 'Verimlilik',
    statusExcellent: 'Mükemmel',
    statusAcceptable: 'Kabul Edilebilir',
    statusCritical: 'Kritik',
    fieldVoltage: 'Voltaj',
    fieldMaterial: 'Malzeme',
    materialCopper: 'Bakır',
    materialAlum: 'Alüm.',
    fieldLoad: 'Yük',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watt',
    unitAmps: 'Amper',
    fieldLength: 'Kablo Uzunluğu (Tek Yön)',
    unitMeters: 'metre',
    fieldSection: 'Kablo Kesiti',
    sectionInfo: 'Önerilen',
  },
};
