import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'paspartu-hesaplayici';
const title = 'Paspartu Hesaplayıcı: Çerçeveleme İçin Optik Gözetimli Kenar Boşlukları';
const description = 'Optik gözetimli (bottom weighting) paspartu kenar boşluklarını hesaplamak için bir araç. Fotoğraflarınızı ve sanat eserlerinizi galeri oranlarıyla çerçeveleyin.';

const faqData = [
  {
    question: 'Optik merkez düzeltmesi (Bottom Weighting) nedir?',
    answer: 'Grafik tasarım ve çerçeveleme ilkelerinden biri olup, alt kenar boşluğunun diğerlerinden biraz daha geniş tutulmasıdır. Bu, asılı bir esere bakıldığında geometrik merkezin "aşağı düşmüş" gibi görünmesine neden olan optik illüzyonu düzeltir.',
  },
  {
    question: 'Paspartu hangi malzemeden olmalıdır?',
    answer: 'Sanatsal koruma için asitsiz veya pH nötr karton (alfa selüloz veya pamuk) kullanılmalıdır. Ucuz kartonlar zamanla sararır ve içerdikleri lignin nedeniyle esere zarar verebilir.',
  },
  {
    question: 'Kenar boşluğu rengini nasıl seçmeliyim?',
    answer: 'Eserin önüne geçmeyen kirli beyaz veya yumuşak krem renkleri standarttır. Koyu renkli bir boşluk bir fotoğrafın beyazlarını öne çıkarabilirken, renkli boşluklar eserin tonlarıyla rekabet etmemesi için dikkatli seçilmelidir.',
  },
  {
    question: 'İdeal kenar boşluğu genişliği nedir?',
    answer: 'Profesyonel standart 5 ile 8 cm arasındadır. Kenar boşluğu çok darsa eser "boğulmuş" gibi görünür. Çok geniş olması ise küçük eserlere kahramanca ve minimalist bir hava katabilir.',
  },
];

const howToData = [
  { name: 'Sanat eserini ölçün', text: 'Çerçeveleyeceğiniz kağıdın veya tuvalin tam genişlik ve yüksekliğini ölçün. Paspartunun resmin üzerine biraz binmesini istiyorsanız birkaç milimetre düşebilirsiniz.' },
  { name: 'Çerçevenin içini ölçün', text: 'Çerçevenin iç boyutlarını veya paspartu kartonunun yerleşeceği yuvanın ölçülerini alın.' },
  { name: 'Optik düzeltmeyi etkinleştirin', text: 'Profesyonel bir bitiş için alt kenar boşluğunun otomatik olarak daha büyük olmasını istiyorsanız hesaplayıcımızdaki seçeneği işaretleyin.' },
  { name: 'Kartonu kesin', text: 'Elde edilen ölçüleri kullanarak boşluğu (pencereyi) ve kartonun dış kısmını kesin; temiz bir eğim için 45 derecelik bir maket bıçağı kullanılması önerilir.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    { name: 'ISO 9706: Belgeler için kalıcı kağıt', url: 'https://www.iso.org/standard/22495.html' },
    { name: 'PPFA: Professional Picture Framers Association', url: 'https://ppfa.com/' },
    { name: 'Fine Art Trade Guild: Çerçeveleme Standartları', url: 'https://www.fineart.co.uk/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Mükemmel Çerçevelemenin Bilimi', level: 2 },
    { type: 'paragraph', html: 'Bir <strong>Paspartu</strong> sadece dekoratif bir karton değildir; sanat eserinizin nefes almasını sağlayan bir ciğer gibidir. Bu hesaplayıcı, kartonunuzu kesmek için kesin boyutları belirlemenize yardımcı olarak eserin çerçeve içinde kusursuz bir şekilde ortalanmasını veya optik olarak dengelenmesini sağlar.' },
    { type: 'title', text: 'Neden "Alt Ağırlık" veya Bottom Weighting?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'Geometrik merkezin optik illüzyonu', html: '<p>İnsan gözü, dikey geometrik merkezi gerçekte olduğundan biraz daha aşağıda algılama eğilimindedir. Bir eseri tam merkeze çerçevelerseniz, "aşağı düşüyormuş" gibi görünecektir.</p><p><strong>Bottom Weighting</strong>, alt kenar boşluğunu biraz daha geniş bırakarak bu illüzyonu düzeltir ve eseri görsel olarak yükselterek mükemmel bir şekilde ortalanmış görünmesini sağlar.</p>' },
    { type: 'title', text: 'Paspartu İçin Koruma Malzemeleri', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Koruma için asitsiz karton', html: '<p>Kartonunuzu seçerken daima <strong>"Acid-Free"</strong> (asitsiz) veya <strong>"Museum Quality"</strong> (müze kalitesi) gibi terimleri arayın. Ucuz odun hamuru kartonlar zamanla sararabilir ve sanat eserinizi irreversibl şekilde bozacak asitler salabilir.</p>' },
  ],
  ui: {
    sectionTitle: 'Boyutlar',
    sectionDesc: 'Ölçüleri santimetre cinsinden girin.',
    frameSizeTitle: 'Çerçeve Boyutu',
    artSizeTitle: 'Eser Boyutu',
    labelWidth: 'Genişlik (cm)',
    labelHeight: 'Yükseklik (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Görsel denge için daha fazla alt kenar boşluğu uygula',
    labelOffset: 'Kaydırma (%)',
    errorMsg: 'Eserin boyutu çerçeveden küçük olmalıdır.',
    labelTop: 'Üst',
    labelBottom: 'Alt',
    labelLeft: 'Sol',
    labelRight: 'Sağ',
    artPlaceholder: 'Eseriniz',
  },
};
