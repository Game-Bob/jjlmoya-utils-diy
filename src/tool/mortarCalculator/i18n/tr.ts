import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';

const slug = 'harc-hesaplayici';
const title = 'Geleneksel Kireç Harcı Oranları: Sıva ve Kaplama';
const description = 'Kireç ve kum harçları için ücretsiz hesaplayıcı. Geleneksel yöntemlere (Vitruvius) göre kaba sıva ve ince sıva için tam oranları alın.';

const faqData = [
  {
    question: 'Neden çimento yerine kireç kullanmalıyım?',
    answer: 'Kireç, su buharının tahliye edilmesini sağlayan, yoğuşmadan kaynaklanan nemi önleyen "canlı" ve nefes alabilen bir malzemedir. Ayrıca çimentodan daha esnektir, bu da eski duvarlarda çatlak oluşumunu azaltır.',
  },
  {
    question: 'Kaba sıva için ideal oran nedir?',
    answer: 'Vitruvius geleneğine göre, temiz nehir kumu için 1:3 (bir ölçü kireç, üç ölçü kum) oranı kullanılır. Ocak kumu için harcın kaynaşmasını sağlamak amacıyla 1:2 önerilir.',
  },
  {
    question: 'İnce sıva veya perdah nedir?',
    answer: 'Duvarın son katıdır. Boyanabilen veya doğal bırakılabilen pürüzsüz ve ipeksi bir yüzey elde etmek için çok daha ince bir kum (bazen mermer tozu) ve daha yüksek kireç oranı kullanılır.',
  },
  {
    question: 'Kireç harcının sertleşmesi ne kadar sürer?',
    answer: 'Hava kireci, karbonatlaşma (havadaki CO2\'yi emerek) yoluyla sertleşir. İlk priz süreci birkaç gündür, ancak maksimum sertliğe aylar sonra ulaşılır ve yıllar geçtikçe direnç kazanır.',
  },
];

const howToData = [
  { name: 'Yüzey tipini belirleyin', text: 'Taş, eski tuğla veya blok üzerinde mi çalışacağınızı kontrol edin. Yüzey temiz ve hafif nemli olmalıdır.' },
  { name: 'Kum tane boyutunu seçin', text: 'Tutunma katmanı için kalın kum, görsel bitiş için ince kum kullanın. Kumun saflığı harcın kalitesini belirler.' },
  { name: 'Bileşenlerin karıştırılması', text: 'Su eklemekten önce kireç ve kumu kuru halde karıştırın. Kıvam sıvı değil, plastik olmalıdır.' },
  { name: 'Uygulama ve perdahlama', text: 'Harcı mala ile yayın ve harç "çekmeye" (yüzeyde sertleşmeye) başladığında yüzeyi eşitlemek için bir mastar kullanın.' },
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

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    { name: 'Vitruvius - Mimarlık Üzerine On Kitap, 7. Kitap', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:2007.01.0072' },
    { name: 'EN 459 Standartı - Yapı Kireçleri', url: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0053796' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Harçlar Üzerine İnceleme: Vitruvius\'un Bilgeliği', level: 2 },
    { type: 'paragraph', html: 'Marcus Vitruvius Pollio, <em>Mimarlık Üzerine</em> adlı eserinin 7. Kitabı\'nda sadece teknikleri değil, bir felsefeyi de anlattı. Bir binanın sonsuzluğunun birleşim yerlerinde olduğunu anlamıştı. Harç sadece bir yapıştırıcı değil, bağlayıcı dokudur. Oranları (1:3, 1:2, 1:1), direnç ve esneklik arasında mükemmel dengeyi arayan Roma dönemi ampirik gözlemlerinin mirasıdır.' },
    { type: 'title', text: 'Agrega Tane Boyutu: Kalitenin Anahtarı', level: 3 },
    { type: 'paragraph', html: 'Bir kireç harcının kalitesi büyük ölçüde agreganın tane boyutuna bağlıdır. <strong>Trullissatio</strong> (kaba sıva) için 2-5 mm kalın nehir kumu kullanılır. <strong>Arenato</strong> (ara katman) için 0,5-2 mm yıkanmış orta kum. <strong>Marmorato</strong> (ince sıva) için 0,5 mm\'den küçük mermer tozu kullanılır.' },
    { type: 'title', text: 'Mekanik Tutunma Gizemi', level: 3 },
    { type: 'paragraph', html: 'Tutunma kimyasal değil, <strong>mekaniktir</strong>. Milyonlarca mikroskobik kök hayal edin. Harç, fiziksel bir "anahtar" oluşturmak için tuğlanın gözeneklerine nüfuz etmelidir. Gözeneklilik yoksa tutunma da yoktur.' },
  ],
  ui: {
    leftTitle: 'Vitruvius Sistemi',
    centerTitle: 'Mevcut Malzemeler',
    rightTitle: 'Tahmini Kapsama',
    btnCal: 'Kireç',
    btnArena: 'Kum',
    labelCalPasta: 'Macun (1.30 kg/L)',
    labelCalPolvo: 'NHL Toz (0.65 kg/L)',
    labelQuantity: 'Mevcut miktar:',
    labelNeedsAlso: 'Ayrıca şuna ihtiyacınız olacak:',
    labelProportion: 'Oran: ',
    labelCoverage: 'Kapsama:',
    labelThickness: 'Toplam kalınlık:',
    labelLayers: 'Katmanlar:',
    labelWasteFactor: 'Kayup faktörü: %20',
    layersSingular: 'kat',
    layersPlural: 'kat',
    layersSingularShort: 'kat',
    layersPluralShort: 'kat',
    materialCal: 'Kireç',
    materialArena: 'Kum',
    materialMarmol: 'Mermer',
    phaseDescTrullissatio: 'Pürüzlü taban katmanı. 15mm\'lik 2 kat. Oran 1:3 (Kireç:Nehir kumu).',
    phaseDescArenato: 'Orta katman. 8mm\'lik 2 kat. Oran 1:2 (Kireç:Yıkanmış kum).',
    phaseDescMarmorato: 'İnce bitiş. 4mm\'lik 1 çift kat. Oran 1:1 (Kireç:Mermer tozu).',
    granulometryTitle: 'Agrega Tane Boyutu',
    grainTitleCoarse: 'Kalın Kum',
    grainSubtitleCoarse: 'Nehir Kumu',
    grainUsageCoarse: 'Kaba sıva',
    grainTitleMedium: 'Orta Kum',
    grainSubtitleMedium: 'Yıkanmış Kum',
    grainUsageMedium: 'Ara katman sıva',
    grainTitleFine: 'İnce Toz',
    grainSubtitleFine: 'Mermer Tozu',
    grainUsageFine: 'İnce sıva',
    specSize: 'Boyut:',
    specUse: 'Kullanım:',
    specDensity: 'Yoğunluk:',
  },
};
