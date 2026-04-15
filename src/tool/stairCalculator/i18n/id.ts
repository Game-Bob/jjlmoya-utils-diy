import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StairCalculatorUI } from '../ui';

const slug = 'kalkulator-tangga';
const title = 'Kalkulator Tangga: Desain dan Pelaksanaan';
const description = 'Hitung ukuran persis tangga Anda: tinggi anak tangga, lebar pijakan, sudut, dan bahan. Patuhi Hukum Blondel dan hindari kesalahan konstruksi.';

const faqData = [
  {
    question: 'Apa itu Hukum Blondel?',
    answer: 'Ini adalah rumus yang menyatakan bahwa agar sebuah tangga nyaman, jumlah dari dua tinggi anak tangga dan satu pijakan harus berada di antara 62 dan 64 cm (2T + P = 63). Hukum ini didasarkan pada panjang rata-rata langkah manusia.',
  },
  {
    question: 'Berapa tinggi maksimum anak tangga?',
    answer: 'Di perumahan, disarankan untuk tidak melebihi 18-19 cm. Untuk ruang publik, maksimum biasanya 17,5 cm sesuai peraturan. Anak tangga yang lebih tinggi lebih melelahkan dan bisa berbahaya.',
  },
  {
    question: 'Bagaimana cara menghitung jika ruang terbatas?',
    answer: 'Jika ruang horizontal terbatas, Anda harus menambah jumlah anak tangga (mengurangi tingginya) atau menerima kemiringan yang lebih curam. Kalkulator membantu Anda menemukan keseimbangan optimal.',
  },
  {
    question: 'Apa yang termasuk dalam perhitungan volume beton?',
    answer: 'Total volume beton dihitung dengan mempertimbangkan anak tangga ditambah pelat tangga (lantai miring yang menopang anak tangga). Mengabaikan volume ini akan mengakibatkan pemesanan beton yang kurang.',
  },
  {
    question: 'Mengapa pengukuran kumulatif itu penting?',
    answer: 'Mengukur setiap anak tangga secara terpisah akan menghasilkan kesalahan yang menumpuk. Pengukuran kumulatif memastikan semua anak tangga memiliki tinggi yang persis sama, menghindari risiko dan meningkatkan kenyamanan.',
  },
];

const howToData = [
  { name: 'Ukur perbedaan tinggi', text: 'Ukur total perbedaan tinggi (H) dari lantai bawah yang sudah jadi ke lantai atas yang sudah jadi. Ini adalah data dasar untuk kalkulasi.' },
  { name: 'Masukkan panjang yang tersedia', text: 'Opsional: Jika Anda memiliki batasan ruang, masukkan panjang horizontal yang tersedia. Gunakan 0 untuk kalkulasi bebas.' },
  { name: 'Sesuaikan jumlah anak tangga', text: 'Kalkulator mengusulkan jumlah awal, tetapi Anda dapat menyesuaikannya. Perhatikan indikator Blondel: harus berwarna hijau (62-64 cm) untuk kenyamanan maksimal.' },
  { name: 'Tentukan parameter pekerjaan', text: 'Tentukan tebal pelat, penyelesaian akhir, kekuatan beton, dan lebar tangga. Data ini memengaruhi volume akhir.' },
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

export const content: ToolLocaleContent<StairCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Peraturan',
  bibliography: [
    { name: 'Standar Keamanan dan Aksesibilitas', url: 'https://id.wikipedia.org/wiki/Tangga' },
    { name: 'Hukum Blondel - Wikipedia', url: 'https://en.wikipedia.org/wiki/Stairs#Blondel\'s_Rule' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Desain Geometris Tangga: Hukum Blondel', level: 2 },
    { type: 'paragraph', html: 'Kenyamanan tangga bergantung pada panjang langkah manusia. Tubuh Anda mengharapkan ritme yang dapat diprediksi. Hukum Blondel menetapkan bahwa 2 tinggi anak tangga + 1 pijakan = 62-64 cm adalah standar yang menjamin kenyamanan dan keamanan maksimal.' },
    { type: 'title', text: 'Kontrol Struktur dan Bahan', level: 3 },
    { type: 'paragraph', html: 'Untuk pelaksanaan profesional, penting untuk mempertimbangkan pelat beton. Mengabaikan volume ini akan menghasilkan pemesanan beton yang tidak mencukupi. Kalkulator mengintegrasikan perhitungan ini secara otomatis.' },
    { type: 'title', text: 'Kesalahan Kumulatif dalam Pengukuran', level: 3 },
    { type: 'paragraph', html: 'Dalam konstruksi, musuh terbesar adalah kesalahan milimeter. Jika Anda mengukur setiap anak tangga secara terpisah, total kesalahan kecil dapat membuat anak tangga terakhir jauh lebih tinggi atau lebih rendah dari yang pertama.' },
  ],
  ui: {
    labelGeometry: 'Geometri dan Ruang',
    labelTotalHeight: 'Tinggi Total (H)',
    labelAvailableLength: 'Panjang Tersedia (L)',
    labelAvailableLengthHint: 'Gunakan 0 untuk kalkulasi bebas.',
    labelNumSteps: 'Jlh Anak Tangga',
    labelOptimize: 'Optimalkan (18cm)',
    labelWork: 'Pekerjaan dan Instalasi',
    labelSlabThickness: 'Tebal Pelat (e)',
    labelFinishThickness: 'Penyelesaian',
    labelCeilingHeight: 'Tinggi Plafon',
    labelStairWidth: 'Lebar Tangga',
    labelConcreteStrength: 'Kekuatan Beton',
    optionH150: 'K-175 (Lantai kerja)',
    optionH200: 'K-225 (Hunian)',
    optionH250: 'K-300 (Struktural)',
    labelRiser: 'Tinggi A. Tangga',
    labelTread: 'Lebar Pijakan',
    labelSlope: 'Kemiringan',
    labelRealAdvance: 'Panjang Rill',
    labelLayoutTable: 'Layout dan Pelaksanaan',
    colStep: 'Tangga',
    colConcreteHeight: 'T. Beton',
    colFinishedHeight: 'T. Selesai',
    colAdvance: 'Kemajuan',
    adjustedNote: 'Disesuaikan',
    labelMaterials: 'Volume dan Bahan',
    labelTotalConcrete: 'Total Beton:',
    labelCement: 'Semen (sak/25kg):',
    labelSand: 'Pasir diperlukan:',
    unitM3: 'm³',
    unitBags: 'sak',
    unitLiters: 'L',
    btnShare: 'Bagikan',
    btnPrint: 'Cetak PDF',
    statusOptimalComfort: 'Kenyamanan Optimal',
    statusMarginLimit: 'Batas Toleransi',
    statusCriticalDesign: 'Desain Kritis',
    statusRiserError: 'Kesalahan Tangga',
    msgInvalidValues: 'Nilai tidak valid',
    msgInsufficientSpace: 'RUANG TIDAK CUKUP',
    msgDangerousTread: 'Pijakan selebar {val}cm berbahaya.',
    msgBlondelValue: 'Nilai Blondel: {val}cm.',
    msgOptimalStep: 'Langkah nyaman: {val}cm.',
    msgLowCeiling: 'JARAK KEPALA RENDAH (<2m)',
    msgCalculating: 'Menghitung...',
    msgEnterMeasurements: 'Masukkan ukuran',
    shareTitle: 'Ringkasan Pekerjaan',
    shareMessage: 'Tangga: H={h}cm, N={n}, T={ch}cm, Vol={vol}m3',
  },
};
