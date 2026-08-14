import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'alcipan-hesaplayici';
const title = 'Alçıpan ve Bölme Duvar Malzeme Hesaplayıcı';
const description = 'Alçıpan bölme duvar ve giydirme duvarlar için profesyonel malzeme hesaplama aracı. Alçıpan plakaları, C dikmeleri, U rayları, vidaları, derz bandı ve derz dolgusunu tam olarak hesaplayın.';

const faqData = [
  {
    question: 'Bölme duvar için kaç adet alçıpan plakası gerektiğini nasıl hesaplarım?',
    answer: 'Duvar uzunluğu ile tavan yüksekliğini çarparak toplam duvar alanını bulun. Çift taraflı bölme duvarlar için alanı 2 ile çarpın; çift kat kaplama için 4 ile çarpın. Toplam kaplama alanını bir plakanın net alanına (120x240 cm plaka için 2.88 m2) bölün ve %10 fire payı ekleyin.',
  },
  {
    question: 'Dikme aralığı 40 cm mi yoksa 60 cm mi seçilmelidir?',
    answer: 'Standart 60 cm dikme aralığı 3.0 m yüksekliğe kadar olan iç mekân kuru duvarları için uygundur. Ağır seramik kaplama yapılacak duvarlarda, ıslak hacimlerde (banyo, mutfak) ve 3.0 metreyi aşan yüksekliklerde 40 cm dikme aralığı zorunludur.',
  },
  {
    question: 'Hangi alçıpan çeşidi nerede kullanılmalıdır?',
    answer: 'Oturma ve yatak odalarında Beyaz Standart Alçıpan (Tip A); banyo ve mutfaklarda Yeşil Suya Dayanıklı Alçıpan (Tip H1); baca ve kazan dairelerinde Pembe Yangına Dayanıklı Alçıpan (Tip F); ses yalıtımlı alanlarda Mavi Akustik Alçıpan kullanın.',
  },
  {
    question: 'Bir plaka alçıpan için kaç adet borazan vida gereklidir?',
    answer: 'Tek kat kaplamada 120x240 cm boyutundaki plaka başına yaklaşık 30 adet borazan vida (3.5x25 mm) kullanılır. Vidalar kenarlarda 25 cm, orta dikmelerde 30 cm aralıkla sıkılır.',
  },
  {
    question: 'U profillerinin altına neden ses yalıtım bandı yapıştırılmalıdır?',
    answer: 'Kendinden yapışkanlı polietilen ses yalıtım bantları U raylarını döşeme ve tavandan ayırarak titreşim ve darbe seslerinin iletimini engeller.',
  },
];

const howToData = [
  { name: 'Duvar Ölçülerini Girin', text: 'Bölme duvar uzunluğunu ve tavan yüksekliğini metre veya fit cinsinden belirtin.' },
  { name: 'Karkas ve Kaplama Katını Ayarlayın', text: 'Dikme aralığını (40 cm veya 60 cm), kat sayısını ve kaplama yönünü seçin.' },
  { name: 'Malzeme Listesi ve CAD Çizimini İnceleyin', text: 'Profil, vida, derz bandı ve dolgu macunu metrajı ile karkas görünüş çizimini inceleyin.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Alçıpan Bölme Duvar Karkas Hesabı Esasları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hafif bölme duvarların yapımında galvanizli çelik profillerin (C dikme ve U ray) doğru boyutlandırılması ve ek yerlerinin şaşırtmalı yerleştirilmesi TS EN 520 standartlarına göre çatlamaları önler.',
    },
    {
      type: 'title',
      text: 'Dikme Eksen Aralığı: 40 cm ve 60 cm Kuralları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>60 cm eksen aralığı</strong> 120 cm genişliğindeki plakalar için standarttır. Seramik kaplama altında ve 3.0 metreden yüksek duvarlarda <strong>40 cm eksen aralığı</strong> zorunludur.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Plaka Ek Yeri Şaşırtması ve Vidalama Düzeni',
      html: '<p>Derzlerde artı şeklinde kesişmelerden kaçının. Ek yerlerini en az 40 cm şaşırtın. Plakaları 3.5x25 mm borazan vidalarla <strong>kenarlarda 25 cm</strong> ve <strong>ortada 30 cm</strong> aralıkla sabitleyin.</p>',
    },
    {
      type: 'title',
      text: 'Fire Payı Oranı ve Derz Dolgusu Tüketimi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kapı ve pencere boşluklarındaki kesimler için her zaman <strong>%10 fire payı</strong> ekleyin. Derz dolgusu için metrekare başına yaklaşık 0.8 kg alçı bazlı derz macunu gereklidir.',
    },
  ],
  ui: {
    unitSystemLabel: 'Ölçü Sistemi',
    unitMetric: 'Metrik (m, cm, kg)',
    unitImperial: 'İngiliz (ft, in, lb)',

    paramLengthLabel: 'Duvar Uzunluğu',
    paramHeightLabel: 'Tavan Yüksekliği',
    paramSpacingLabel: 'C Dikme Eksen Aralığı',
    paramSpacing40Metric: '40 cm (Yüksek Yük)',
    paramSpacing60Metric: '60 cm (Standart)',
    paramSpacing40Imperial: '16 in (Yüksek Yük)',
    paramSpacing60Imperial: '24 in (Standart)',
    paramLayersLabel: 'Kaplama Kat Sayısı',
    paramSingleLayer: 'Tek Kat Kaplama',
    paramDoubleLayer: 'Çift Kat Kaplama',
    paramSidesLabel: 'Kaplanan Yüz Sayısı',
    paramDoubleSided: '2 Yüz (Bölme Duvar)',
    paramSingleSided: '1 Yüz (Giydirme Duvar)',
    paramBoardTypeLabel: 'Alçıpan Türü',
    boardTypeStandard: 'Standart (Tip A)',
    boardTypeMoisture: 'Suya Dayanıklı (Tip H1)',
    boardTypeFire: 'Yangına Dayanıklı (Tip F)',
    boardTypeAcoustic: 'Akustik (Tip A)',
    paramWasteLabel: 'Fire Payı Oranı',

    summaryWallArea: 'Net Duvar Alanı',
    summaryBoardArea: 'Toplam Alçıpan Alanı',

    resBoardsLabel: 'Alçıpan Plakası',
    resBoardsUnit: 'adet',
    resStudsLabel: 'C Dikey Profil (Sütun)',
    resStudsUnit: 'adet',
    resTracksLabel: 'U Yatay Profil (Ray)',
    resTracksUnit: 'boy',
    resDrywallScrewsLabel: 'Borazan Vida',
    resDrywallScrewsUnit: 'adet',
    resFramingScrewsLabel: 'Karkas Vidası (Mercimek)',
    resFramingScrewsUnit: 'adet',
    resJointTapeLabel: 'Derz Bandı',
    resJointTapeUnit: 'uzunluk',
    resJointCompoundLabel: 'Derz Dolgu Macunu',
    resJointCompoundUnit: 'ağırlık',
    resAcousticBandLabel: 'Ses Yalıtım Bandı',
    resAcousticBandUnit: 'uzunluk',

    diagramWallTitle: 'CAD Karkas Görünüşü',
    diagramStudLegend: 'C Dikme Profil',
    diagramTrackLegend: 'U Ray Profil',
    diagramBoardLegend: 'Şaşırtmalı Ek Yerleri',
    diagramModeStructure: 'Çelik Karkas',
    diagramModeBoard: 'Alçıpan Kaplama',
  },
};
