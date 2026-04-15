import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EpoxyCalculatorUI } from '../ui';

const slug = 'kalkulator-resin-epoksi';
const title = 'Kalkulator Resin Epoksi: Campuran dan Volume Tepat';
const description = 'Hitung jumlah tepat resin epoksi dan katalis yang dibutuhkan untuk proyek Anda. Hindari pemborosan pada meja river, perhiasan, dan cetakan.';

const faqData = [
  {
    question: 'Mengapa proporsi yang tepat sangat penting dalam resin?',
    answer: 'Berbeda dengan campuran lain, resin epoksi tidak kering melalui penguapan, melainkan melalui reaksi kimia (polimerisasi). Jika ada kelebihan resin atau katalis, reaksi tidak akan sempurna, meninggalkan bagian yang lengket, lunak, atau dengan gelembung permanen.',
  },
  {
    question: 'Apa itu perbandingan berat vs volume?',
    answer: 'Banyak resin dicampur 2:1 dalam volume tetapi 100:45 dalam berat karena katalis biasanya lebih padat. Gunakan selalu skala yang ditentukan pabrikan dan, jika mungkin, gunakan timbangan digital demi presisi maksimal.',
  },
  {
    question: 'Bagaimana cara menghindari gelembung saat mengaduk?',
    answer: 'Aduk perlahan dengan gerakan memutar konstan selama setidaknya 3 menit, bersihkan dinding wadah dengan baik. Diamkan campuran selama beberapa menit sebelum dituang agar gelembung naik ke permukaan.',
  },
  {
    question: 'Apa itu masa pakai (Pot Life)?',
    answer: 'Adalah waktu yang Anda miliki untuk mengerjakan campuran sebelum mulai mengeras (mengental). Di musim panas atau dalam volume besar, waktu ini berkurang drastis karena reaksi eksotermik (menghasilkan panas).',
  },
];

const howToData = [
  { name: 'Ukur dimensi cetakan', text: 'Ukur panjang, lebar, dan kedalaman (tebal) area yang ingin Anda isi dengan resin.' },
  { name: 'Masukkan rasio campuran', text: 'Periksa label produk Anda apakah campurannya 1:1, 2:1, atau 3:1 dan apakah berdasarkan berat atau volume.' },
  { name: 'Timbang komponen', text: 'Tuang komponen A (resin) terlebih dahulu lalu B (katalis) ke dalam wadah bersih di atas timbangan digital.' },
  { name: 'Pengadukan teknis', text: 'Aduk perlahan hingga campuran benar-benar transparan dan tidak terlihat "alur" dari kepadatan yang berbeda.' },
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

export const content: ToolLocaleContent<EpoxyCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    { name: 'TotalBoat - Pusat Dukungan dan Panduan Teknis', url: 'https://www.totalboat.com/pages/support' },
    { name: 'ArtResin - FAQ dan Panduan Penggunaan', url: 'https://www.artresin.com/pages/artresin-faq' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Panduan Perhitungan dan Pengadukan Resin Epoksi', level: 2 },
    { type: 'paragraph', html: 'Resin epoksi bukan cat yang kering karena penguapan; ini adalah <strong>reaksi kimia eksotermik</strong> yang kompleks. Keajaiban terjadi ketika molekul epoksida berikatan dengan molekul poliamina untuk membentuk polimer termoset padat kristalin.' },
    { type: 'paragraph', html: 'Perbedaan antara karya seni yang tahan lama dan kegagalan yang lengket terletak pada <strong>stoikiometri yang tepat</strong>. Kesalahan bahkan hanya 5% dalam rasio campuran dapat menghambat pengerasan secara permanen. Alat ini menghilangkan tebakan matematis, memungkinkan Anda fokus pada kreasi.' },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:scale-balance', title: 'Volume atau Berat?', html: '<p>Kesalahan #1 pemula adalah menganggap bahwa 100ml beratnya 100g. <strong>Resin lebih padat daripada pengeras.</strong></p><p>Jika data teknis produk Anda menyebutkan "100:50 berdasarkan berat", itu TIDAK sama dengan "2:1 berdasarkan volume". Kalkulator ini bekerja dengan <strong>Volume</strong> (V = L × W × H), yang merupakan standar untuk mengisi cetakan.</p>' },
      { type: 'card', icon: 'mdi:water-percent', title: 'Rasio Umum', html: '<ul><li><strong>1:1</strong> — Pelapis, vernis, dan pelekat cepat.</li><li><strong>2:1</strong> — Standar. Meja river, perhiasan, dan cetakan sedang.</li><li><strong>3:1</strong> — Lantai industri dan laminasi struktural kekerasan tinggi.</li></ul>' },
    ]},
    { type: 'title', text: 'Protokol Keamanan dan Praktik Terbaik', level: 2 },
    { type: 'grid', columns: [
      { type: 'card', icon: 'mdi:thermometer', title: 'Suhu Vital', html: '<p>Bekerjalah selalu antara <strong>21°C hingga 25°C</strong>. Suhu dingin dapat menghentikan reaksi, membuat benda menjadi keruh. Panas berlebih mempercepat reaksi eksotermik secara berbahaya ("flash cure").</p>' },
      { type: 'card', icon: 'mdi:cup-outline', title: 'Teknik Dua Wadah', html: '<p>Jangan mengandalkan satu pengadukan. Bersihkan sisi dan dasar wadah dengan baik, tuang campuran ke <strong>wadah bersih kedua</strong> dan aduk kembali. Ini memastikan tidak ada bahan yang tidak terkatalis tertinggal.</p>' },
    ]},
  ],
  ui: {
    shapeRect: 'Persegi Panjang',
    shapeCylinder: 'Silinder',
    shapeSphere: 'Bola',
    labelLength: 'Panjang (cm)',
    labelWidth: 'Lebar (cm)',
    labelDiameter: 'Diameter (cm)',
    labelDepth: 'Kedalaman (cm)',
    labelRatio: 'Rasio Campuran (Berat/Volume)',
    labelCustomRatio: 'Gunakan rasio kustom (A:B)',
    labelResinA: 'Resin (A)',
    labelHardenerB: 'Pengeras (B)',
    labelWasteTitle: 'Margin Keamanan',
    labelWasteDesc: 'Tambah 5% ekstra untuk kehilangan',
    labelTotalVolume: 'Volume Total',
    labelPartA: 'Bagian A (Resin)',
    labelPartB: 'Bagian B (Katalis)',
    labelVisualization: 'Visualisasi',
    shapeRectLabel: 'Blok Persegi Panjang',
    shapeCylinderLabel: 'Silinder / Cetakan Bulat',
    shapeSphereLabel: 'Bola Penuh',
  },
};
