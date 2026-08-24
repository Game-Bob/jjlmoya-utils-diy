import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'kazi-hacmi-toprak-kabarma-hesaplama';
const title = 'Kazı Hacmi Hesaplama ve Toprak Kabarma Miktarı';
const description = 'Kazı öncesi doğal zemin hacmini hesaplayın ve kum, bahçe toprağı, kil ve çakıl için kabarma oranı ile gevşek toprak hacmini tahmin edin.';

const faq = [
  {
    question: 'Doğal zemin hacmi (sıkışık hacim) ile gevşek hacim arasındaki fark nedir?',
    answer: 'Doğal zemin hacmi, kazı yapılmadan önce toprağın yerindeki hacmidir. Gevşek hacim ise kazı sonrasında toprağın kabarmasıyla kaplayacağı tahmini hacimdir.',
  },
  {
    question: 'Kazı hacmi nasıl hesaplanır?',
    answer: 'Uzunluk, genişlik ve derinlik değerlerini birbiriyle çarpın. Örneğin 4 m uzunluğunda, 3 m genişliğinde ve 0.5 m derinliğinde bir kazının kabarma öncesi doğal hacmi 6 metreküptür.',
  },
  {
    question: 'Kil neden daha geniş bir kabarma oranına sahiptir?',
    answer: 'Kilin yapısı nem oranına ve yoğunluğa oldukça duyarlıdır. Bu nedenle hesaplayıcı killi topraklar için daha geniş bir tahmin aralığı sunar.',
  },
  {
    question: 'Bu hesaplayıcı jeoteknik zemin etüdünün yerine geçer mi?',
    answer: 'Hayır. Bu araç hafriyat nakliyesi ve konteyner planlaması için ön tahminde bulunur. Temel ve istinat duvarı projelerinde jeoteknik rapor zorunludur.',
  },
];

const howTo = [
  { name: 'Kazı ölçülerini girin', text: 'Kazılacak alanın uzunluk, genişlik ve derinliğini girin.' },
  { name: 'Toprak tipini seçin', text: 'Kum, bahçe toprağı, kil veya çakıl seçeneklerinden uygun olanı belirleyin.' },
  { name: 'Nakliye planlamasını yapın', text: 'Zemin hacmini kazı alanı için, gevşek hacmi ise hafriyat kamyonu sayısını belirlemek için kullanın.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq,
  bibliographyTitle: 'Kaynaklar ve teknik notlar',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Şantiyedeki İki Farklı Hacim İhtiyacı', level: 2 },
    { type: 'paragraph', html: '<strong>Doğal zemin hacmi</strong> (sıkışık zemin hacmi olarak da bilinir), kazılacak çukurun bozulmamış haldeki geometrik ölçüsüdür: uzunluk × genişlik × derinlik. <strong>Gevşek hacim</strong> ise kazılan toprağın kabarması sonucu hafriyat kamyonlarında, konteynerlerde veya geçici döküm sahalarında kaplayacağı gerçek hacimdir. Bu iki farklı hacim değerini ayrı tutmak, lojistik ve nakliye hesaplamalarının yanlış zemin durumuna göre yapılmasını engeller.' },
    { type: 'title', text: 'Nakliye ve Hafriyat Planlamasında Kullanım', level: 3 },
    { type: 'paragraph', html: 'Hesaplayıcıda şantiyenize en uygun toprak türünü seçin ve tahmin edilen gevşek hacim alt ve üst sınırlarını mevcut hafriyat kamyonu kasası kapasiteleri, konteyner boyutları ve geçici depolama alanı ile karşılaştırın. Aralık şeklinde gösterilmesinin sebebi, kazı yöntemi, toprağın nem oranı ve sıkışma derecesinin sonucu önemli ölçüde değiştirmesidir.' },
    { type: 'tip', title: 'Kabarma oranı zemin etüdü yerine geçmez', html: 'Nem oranı, yeraltı su seviyesi ve doğal sıkışma miktarı gerçek kabarmayı değiştirir. Yapı temelleri, istinat duvarları ve kontamine toprak nakliyesi projelerinde resmi jeoteknik zemin etüt raporu alınması zorunludur.' },
    { type: 'title', text: 'Kamyon Siparişinden Önce Değerlendirin', level: 3 },
    { type: 'paragraph', html: 'Zemin türünden emin değilseniz daha yüksek kabarma oranına sahip iki olası zemin profili ile deneme hesabı yapın ve saha içi kesin ölçümler yapılana kadar en yüksek nakliye ihtiyacını esas alarak planlama yapın.' },
  ],
  ui: {
    unitSystemLabel: 'Ölçü sistemi',
    unitMetric: 'Metrik',
    unitImperial: 'İngiliz (Imperial)',
    onboarding: 'Kazı ölçülerini girin, toprak türünü seçin ve hafriyat ile nakliye planlaması için iki hacim değerini kullanın.',
    dimensionLabel: 'Kazı ölçüleri',
    lengthLabel: 'Uzunluk',
    widthLabel: 'Genişlik',
    depthLabel: 'Derinlik',
    soilLabel: 'Toprak türü',
    soilSand: 'Kum',
    soilTopsoil: 'Bahçe toprağı / Bitkisel toprak',
    soilClay: 'Kil / Kil karışımı',
    soilGravel: 'Çakıl',
    soilSandBand: '%10 - %15 kabarma',
    soilTopsoilBand: '%15 - %25 kabarma',
    soilClayBand: '%25 - %40 kabarma',
    soilGravelBand: '%15 - %25 kabarma',
    bankVolumeLabel: 'Doğal zemin hacmi',
    bankVolumeHelp: 'Kazı öncesi yerindeki toprak',
    looseVolumeLabel: 'Gevşek toprak hacmi',
    looseVolumeHelp: 'Kazı sonrası tahmini hacim aralığı',
    expansionLabel: 'Uygulanan kabarma oranı',
    expansionHelp: 'Seçilen toprak için kullanılan aralık',
    sceneTitle: 'Kazı alanından döküm sahasına',
    sceneBank: 'doğal zeminde',
    sceneLoose: 'gevşek toprak',
    sceneGround: 'zemin seviyesi',
    sceneCut: 'açılan kazı çukuru',
    interpretationTitle: 'Sonuçlar nasıl kullanılır?',
    interpretationText: 'İlk sayı açılacak çukurun hacmidir. Aralıklı sayı ise kazılan toprağın nakliyede kaplayacağı hacimdir.',
    warning: 'Nakliye planlaması için tahmini değerdir. Nem ve kazı yöntemi gerçek hacmi etkileyebilir.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'düşük kabarma',
    soilStatusMedium: 'orta kabarma',
    soilStatusHigh: 'yüksek kabarma',
    soilStatusLabel: 'Planlama aralığı',
  },
};
