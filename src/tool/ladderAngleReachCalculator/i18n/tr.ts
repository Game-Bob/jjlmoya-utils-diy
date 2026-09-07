import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'tr', slug: 'merdiven-acisi-ve-erisim-hesaplayici', title: 'Merdiven Açısı ve Erişim Hesaplayıcı', description: 'İki ölçüyle merdivenin taban mesafesini, açısını ve erişim yüksekliğini hesaplayın; sonucu 1:4 yerleştirme kılavuzuyla karşılaştırın.', faqTitle: 'Sık sorulan sorular',
  faq: [
    { question: 'Bu merdiven hesaplayıcı neyi hesaplar?', answer: 'Hedef yükseklik, merdiven uzunluğu ve taban mesafesinden ikisini girerek üçüncü geometrik değeri bulur. Açıyı, dikey erişimi ve 1:4 referansını da ayrı gösterir.' },
    { question: 'Gerçek taban mesafesi neden 1:4 mesafesinden farklı olabilir?', answer: 'Bunlar farklı sorulara cevap verir. 3 m hedef ve 4 m merdiven için gerçek üçgenin taban mesafesi 2,65 m olur. 3 m için 1:4 referansı 0,75 m, minimum merdiven uzunluğu ise yaklaşık 3,09 m dir.' },
    { question: '3 m yüksekliğe ulaşacak merdiveni nasıl kontrol ederim?', answer: 'Hedef yüksekliğe 3 m ve mevcut merdiven uzunluğunu girin. Sonuç gerçek taban mesafesini ve açıyı, ayrıca 1:4 referansını gösterir.' },
    { question: 'Üç hesaplama modu ne anlama gelir?', answer: 'Yükseklik + merdiven taban mesafesini, yükseklik + taban merdiven uzunluğunu, merdiven + taban ise ulaşılabilir yüksekliği hesaplar.' },
    { question: 'Sonuç merdivenin güvenli olduğunu garanti eder mi?', answer: 'Hayır. Bu yalnızca geometrik bir kontroldür. Merdiven etiketini, zemini, desteği, yükü, erişimi ve yerel kuralları kontrol edin.' },
  ],
  howTo: [
    { name: 'İki ölçü seçin', text: 'Yükseklik + merdiven, yükseklik + taban veya merdiven + taban seçeneklerinden birini seçin.' },
    { name: 'Değerleri girin', text: 'İki alanda aynı ölçü sistemini kullanın.' },
    { name: 'Geometriyi okuyun', text: 'Ölçülerinizin oluşturduğu taban mesafesini, açıyı ve erişimi kontrol edin.' },
    { name: '1:4 ile karşılaştırın', text: 'Yerleştirmeye karar vermeden önce referans mesafeyi ve minimum uzunluğu inceleyin.' },
  ],
  seo: [
    { type: 'title', text: 'Bu merdiven hesaplayıcı ne gösterir?', level: 2 },
    { type: 'paragraph', html: 'İki ölçüyü bildiğinizde merdivenin hedef yüksekliğe ulaşıp ulaşmadığını, tabanın ne kadar uzakta olacağını veya hangi uzunluğun gerektiğini kontrol edin. Gerçek geometri ile 1:4 referansı ayrı gösterilir.' },
    { type: 'title', text: 'Girdiğiniz ölçülerin gerçek geometrisi', level: 3 },
    { type: 'paragraph', html: '<strong>Yükseklik + merdiven</strong> modu taban mesafesini <code>√(uzunluk² - yükseklik²)</code> ile bulur. <strong>Yükseklik + taban</strong> merdiven uzunluğunu, <strong>merdiven + taban</strong> ise erişilebilir yüksekliği hesaplar.' },
    { type: 'title', text: '1:4 yerleştirme kılavuzu', level: 3 },
    { type: 'paragraph', html: '1:4 kuralı, hedef yüksekliğin her dört birimi için tabanı bir birim dışarıda tutar. 3 m için referans mesafe 0,75 m, minimum uzunluk yaklaşık 3,09 m dir.' },
    { type: 'title', text: 'Sonuç nasıl yorumlanır?', level: 3 },
    { type: 'list', items: ['Daha yatık açı, tabanın destekten daha uzakta olduğunu gösterir.', 'Daha dik açı, tabanın desteğe daha yakın olduğunu gösterir.', 'Minimumdan uzun merdiven hedef yüksekliğin üzerine çıkabilir.'] },
    { type: 'tip', title: 'Geometri güvenlik sertifikası değildir', html: 'Kullanmadan önce merdiveni, zemini, desteği, yükü, boşluğu ve üretici talimatlarını kontrol edin.' },
  ],
  ui: {
    unitSystemLabel: 'Ölçü sistemi', unitMetric: 'Metrik', unitImperial: 'İngiliz', intro: 'İki ölçü girin. Gerçek geometri ve 1:4 referansı ayrı gösterilir.', solveTitle: 'İki ölçü seçin', modeHeightLength: 'Yükseklik + merdiven', modeHeightBase: 'Yükseklik + taban', modeLengthBase: 'Merdiven + taban', modeHeightLengthHint: 'Gerçek tabanı kontrol edin', modeHeightBaseHint: 'Merdiven uzunluğunu bulun', modeLengthBaseHint: 'Erişimi bulun', fieldHeight: 'Hedef yükseklik', fieldLength: 'Mevcut merdiven uzunluğu', fieldBase: 'Duvar ile taban arası', fieldHeightHelp: 'Ulaşmanız gereken yükseklik', fieldLengthHelp: 'Merdivenin uzunluğu', fieldBaseHelp: 'Zemindeki yatay mesafe', calculatedTitle: 'Sizin için hesaplandı', calculatedBase: 'Gerçek taban mesafesi', calculatedBaseHelp: 'bu iki ölçüden', calculatedLength: 'Merdiven uzunluğu', calculatedLengthHelp: 'bu yükseklik ve taban için', calculatedHeight: 'Erişilebilir yükseklik', calculatedHeightHelp: 'bu merdiven ve taban için', diagramTitle: 'Sonucun geometrisi', angleTitle: 'Açı', angleUnit: 'derece', angleGuide: 'Merdiveni, desteği, hedef yüksekliği, taban mesafesini ve 1:4 kılavuzunu gösteren yandan görünüm', reachTitle: 'Dikey erişim', reachHelp: 'destekteki yükseklik', targetTitle: 'Hedef yükseklik', targetHelp: 'istenen yükseklik', baseTitle: 'Taban mesafesi', baseHelp: 'zemindeki yatay mesafe', guideDistanceTitle: 'Hedef için 1:4 tabanı', guideDistanceHelp: 'hedef yükseklik bölü 4', requiredLengthTitle: '1:4 için minimum uzunluk', requiredLengthHelp: 'hedef yükseklik için', verdictReach: 'Hedefe ulaşılabilir', verdictShort: 'Bu kurulum hedefe ulaşmıyor', verdictReachHelp: 'Dikey erişim hedef yüksekliğe eşit veya daha yüksek.', verdictShortHelp: 'Daha uzun merdiven ya da farklı geometri seçin; son kurulumun uygun olduğundan emin olun.', angleTooFlat: 'Kılavuzdan daha yatık', angleWithinGuide: '1:4 kılavuzuna yakın', angleTooSteep: 'Kılavuzdan daha dik', ladderLabel: 'merdiven', wallLabel: 'destek', targetLabel: 'hedef', baseLabel: 'taban mesafesi', groundLabel: 'zemin', guideLabel: '1:4 kılavuzu', invalidPositive: 'İki pozitif ölçü girin.', invalidBase: 'Taban mesafesi merdiven uzunluğundan küçük olmalıdır.', invalidTarget: 'Hedef yükseklik merdiven uzunluğundan küçük olmalıdır.', warning: 'Yalnızca geometri. Merdiven etiketine ve üretici talimatlarına uyun.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
