import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortarCalculatorUI } from '../ui';

const slug = 'kalkulator-mortir';
const title = 'Proporsi Mortir Kapur Tradicional: Plester dan Acian';
const description = 'Kalkulator gratis untuk mortir kapur dan pasir. Dapatkan proporsi tepat untuk plesteran dan acian sesuai metode tradisional (Vitruvius).';

const faqData = [
  {
    question: 'Mengapa menggunakan kapur daripada semen?',
    answer: 'Kapur adalah bahan "hidup" dan bernapas yang memungkinkan penguapan uap air, mencegah kelembapan akibat kondensasi. Selain itu, kapur lebih fleksibel daripada semen, yang mengurangi munculnya retakan pada dinding tua.',
  },
  {
    question: 'Berapa proporsi ideal untuk plesteran?',
    answer: 'Menurut tradisi Vitruvius, untuk pasir sungai yang bersih digunakan proporsi 1:3 (satu bagian kapur untuk tiga bagian pasir). Untuk pasir tambang, direkomendasikan 1:2 untuk memastikan kohesi mortir.',
  },
  {
    question: 'Apa itu acian halus atau plesteran akhir?',
    answer: 'Ini adalah lapisan terakhir dinding. Digunakan pasir yang jauh lebih halus (terkadang bubuk marmer) dan proporsi kapur yang lebih tinggi untuk mendapatkan hasil akhir yang halus dan lembut yang dapat dicat atau dibiarkan alami.',
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan mortir kapur untuk mengeras?',
    answer: 'Kapur udara mengeras melalui karbonasi (menyerap CO2 dari udara). Proses pengerasan awal memakan waktu beberapa hari, tetapi kekerasan maksimal dicapai berbulan-bulan kemudian, semakin kuat seiring berjalannya waktu.',
  },
];

const howToData = [
  { name: 'Identifikasi jenis penyangga', text: 'Periksa apakah Anda akan bekerja pada batu, bata tua, atau blok. Penyangga harus bersih dan sedikit lembap.' },
  { name: 'Pilih granulometri pasir', text: 'Gunakan pasir kasar untuk lapisan dasar dan pasir halus untuk hasil akhir kosmetik. Kemurnian pasir menentukan kualitas mortir.' },
  { name: 'Pencampuran komponen', text: 'Campurkan kapur dan pasir dalam keadaan kering sebelum menambahkan air. Konsistensi harus plastis, tidak cair.' },
  { name: 'Aplikasi dan penghalusan', text: 'Ratakan mortir dengan cetok dan gunakan roskam untuk meratakan permukaan saat mortir mulai mengeras di permukaan.' },
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MortarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    { name: 'Vitruvius - De Architectura, Buku VII', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:2007.01.0072' },
    { name: 'Norma EN 459 - Kapur Konstruksi', url: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0053796' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Risalah Mortir: Kebijaksanaan Vitruvius', level: 2 },
    { type: 'paragraph', html: 'Marco Vitruvio Polión, dalam Buku VII dari <em>De Architectura</em>-nya, tidak hanya mendeskripsikan teknik, tetapi sebuah filosofi. Ia memahami bahwa keabadian sebuah bangunan terletak pada sambungannya. Mortir bukan sekadar lem; ia adalah jaringan ikat. Proporsinya (1:3, 1:2, 1:1) adalah warisan pengamatan empiris Romawi selama berabad-abad, mencari keseimbangan sempurna antara kekuatan dan fleksibilitas.' },
    { type: 'title', text: 'Granulometri Agregat: Kunci Kualitas', level: 3 },
    { type: 'paragraph', html: 'Kualitas mortir kapur sangat bergantung pada granulometri agregat. Untuk <strong>Trullissatio</strong> (plester dasar), digunakan pasir sungai kasar 2-5 mm. Untuk <strong>Arenato</strong> (plester menengah), pasir sedang dicuci 0,5-2 mm. Untuk <strong>Marmorato</strong> (acian halus), bubuk marmer kurang dari 0,5 mm.' },
    { type: 'title', text: 'Misteri Ikatan Mekanis', level: 3 },
    { type: 'paragraph', html: 'Ikatan ini bukan kimia, melainkan <strong>mekanis</strong>. Bayangkan jutaan akar mikroskopis. Mortir harus menembus ke dalam pori-pori bata untuk menciptakan "kunci" fisik. Tanpa porositas, tidak ada jangkar.' },
  ],
  ui: {
    leftTitle: 'Sistem Vitruvius',
    centerTitle: 'Bahan Tersedia',
    rightTitle: 'Estimasi Cakupan',
    btnCal: 'Kapur',
    btnArena: 'Pasir',
    labelCalPasta: 'Pasta (1.30 kg/L)',
    labelCalPolvo: 'Bubuk NHL (0.65 kg/L)',
    labelQuantity: 'Jumlah tersedia:',
    labelNeedsAlso: 'Anda juga butuh:',
    labelProportion: 'Proporsi: ',
    labelCoverage: 'Cakupan:',
    labelThickness: 'Tebal total:',
    labelLayers: 'Lapisan:',
    labelWasteFactor: 'Faktor susut: 20%',
    layersSingular: 'lapis',
    layersPlural: 'lapis',
    layersSingularShort: 'lapis',
    layersPluralShort: 'lapis',
    materialCal: 'Kapur',
    materialArena: 'Pasir',
    materialMarmol: 'Marmer',
    phaseDescTrullissatio: 'Lapisan dasar kasar. 2 lapis 15mm. Proporsi 1:3 (Kapur:Pasir sungai).',
    phaseDescArenato: 'Lapisan menengah. 2 lapis 8mm. Proporsi 1:2 (Kapur:Pasir cuci).',
    phaseDescMarmorato: 'Hasil akhir halus. 1 lapis ganda 4mm. Proporsi 1:1 (Kapur:Bubuk marmer).',
    granulometryTitle: 'Granulometri Agregat',
    grainTitleCoarse: 'Pasir Kasar',
    grainSubtitleCoarse: 'Pasir Sungai',
    grainUsageCoarse: 'Plester dasar',
    grainTitleMedium: 'Pasir Sedang',
    grainSubtitleMedium: 'Pasir Cuci',
    grainUsageMedium: 'Plester menengah',
    grainTitleFine: 'Bubuk Halus',
    grainSubtitleFine: 'Bubuk Marmer',
    grainUsageFine: 'Acian halus',
    specSize: 'Ukuran:',
    specUse: 'Kegunaan:',
    specDensity: 'Densitas:',
  },
};
