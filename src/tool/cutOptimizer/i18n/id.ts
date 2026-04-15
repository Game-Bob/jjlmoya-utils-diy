import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CutOptimizerUI } from '../ui';

const slug = 'pengoptimal-potongan';
const title = 'Pengoptimal Potongan Kayu dan Papan';
const description =
  'Kalkulator gratis untuk mengoptimalkan potongan kayu, logam, atau pipa. Minimalkan sisa dengan algoritma Bin Packing 1D dan 2D. Ideal untuk bengkel kayu, metalurgi, dan renovasi.';

const faqData = [
  {
    question: 'Apa itu pengoptimal potongan 1D?',
    answer:
      'Ini adalah alat yang menggunakan algoritma matematika (seperti Bin Packing Problem) untuk menentukan cara memotong bagian yang lebih kecil dari bagian panjang standar (balok, profil, pipa) dengan sisa sesedikit mungkin.',
  },
  {
    question: 'Mengapa harus memasukkan ketebalan potongan (Kerf)?',
    answer:
      'Setiap kali gergaji memotong material, beberapa milimeter akan terbuang (biasanya antara 2mm hingga 4mm tergantung pisaunya). Jika Anda tidak menghitung ruang ini, bagian terakhir dari daftar Anda akan menjadi lebih pendek dari yang direncanakan.',
  },
  {
    question: 'Dapatkah saya mencampur bagian dengan panjang yang berbeda?',
    answer:
      'Ya, kalkulator kami menerima kombinasi panjang dan jumlah berapa pun. Algoritma akan mengevaluasi semua kombinasi yang mungkin dan memprioritaskan pemanfaatan maksimal dari material stok.',
  },
  {
    question: 'Bagaimana cara menyimpan rencana pemotongan saya?',
    answer:
      'Setelah dioptimalkan, Anda dapat mencetak halaman tersebut atau mengambil tangkapan layar dari skema visual. Ini akan berfungsi sebagai panduan fisik di bengkel agar urutan potongan tidak tertukar.',
  },
];

const howToData = [
  {
    name: 'Tentukan material dasar (Stock)',
    text: 'Masukkan total panjang balok atau profil yang tersedia (misalnya 2400mm atau 6000mm).',
  },
  {
    name: 'Atur ketebalan pisau (Kerf)',
    text: 'Sesuaikan milimeter yang dihilangkan gergaji pada setiap langkah agar perhitungannya akurat secara milimetrik.',
  },
  {
    name: 'Daftar bagian yang diinginkan',
    text: 'Tulis panjang dan jumlah setiap bagian yang Anda butuhkan untuk proyek Anda.',
  },
  {
    name: 'Jalankan optimasi',
    text: 'Dapatkan skema pemotongan paling efisien dan persentase tepat dari sisa yang dihasilkan.',
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<CutOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    {
      name: 'Cutting Stock Problem: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cutting_stock_problem',
    },
    {
      name: 'Bin Packing Problem: Wolfram MathWorld',
      url: 'https://mathworld.wolfram.com/BinPackingProblem.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Definitif Optimasi Pemotongan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Optimasi pemotongan, yang secara teknis dikenal sebagai <strong>Masalah Pemotongan Stok (Cutting Stock Problem)</strong>, adalah salah satu tantangan logistik paling menarik dalam teknik industri. Untuk proyek dengan 20 bagian dan 5 batang stok, ada jutaan kemungkinan kombinasi. Algoritma komputer dapat menemukan solusi optimal dalam hitungan milidetik, mengurangi sisa yang biasanya 15% menjadi kurang dari 5%.',
    },
    {
      type: 'title',
      text: 'Pemotongan Linear 1D dan Pemotongan Panel 2D',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:arrow-expand-horizontal',
      title: 'Pemotongan Linear untuk Batang dan Profil',
      html: '<p>Dalam <strong>pemotongan linear (1D)</strong>, optimasi terjadi hanya dalam satu dimensi: panjang. Lebar material dianggap konstan. Sangat ideal untuk kayu dimensional (balok, gelagar), profil logam dan aluminium, pipa PVC atau tembaga, dan batang berulir.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:view-grid',
      title: 'Pemotongan Panel untuk Papan dan Lembaran',
      html: '<p>Dalam <strong>pemotongan panel (2D)</strong>, dua dimensi dikelola: lebar dan panjang. Alat ini menggunakan algoritma tipe guillotine, di mana setiap potongan dilakukan dari tepi ke tepi. Ideal untuk papan turunan (MDF, partikel), kayu lapis, kaca, metakrilat, dan lembaran logam.</p>',
    },
    {
      type: 'title',
      text: 'Faktor Kritis: Ketebalan Potongan (Kerf)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Kerf</strong> adalah material yang hilang pada setiap potongan. Pisau gergaji meja standar menghabiskan antara 3,0mm hingga 3,2mm per potongan. Gergaji sirkuler genggam menghabiskan 1,5 hingga 2,5mm. Potongan laser pada metakrilat hanya 0,1 hingga 0,3mm. Mengabaikan kerf dalam proyek dengan 10 potongan pada balok sepanjang 2400mm dapat membuat Anda kehilangan antara 30mm hingga 32mm material yang berguna.',
    },
    {
      type: 'title',
      text: 'Algoritma Best Fit Decreasing',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:chip',
      title: 'Cara Kerja Pengoptimal Secara Internal',
      html: '<p>Inti dari pengoptimal menggunakan strategi <strong>Best Fit Decreasing (BFD)</strong>: pertama-tama mengurutkan semua bagian dari panjang terbesar ke terkecil (bagian besar lebih sulit untuk dicocokkan). Kemudian, untuk setiap bagian, ia mencari sisa yang ada di mana ia dapat masuk dengan meninggalkan sisa sesedikit mungkin. Hanya jika tidak muat di sisa mana pun, ia akan membuka batang baru. Proses ini mengurangi sisa secara signifikan dibandingkan dengan pemilihan acak.</p>',
    },
  ],
  ui: {
    modeLinearLabel: 'Linear (Batang)',
    modePanelLabel: 'Panel (Papan)',
    configTitle: 'Konfigurasi Material',
    labelStockLength: 'Panjang Material (mm)',
    labelStockWidth: 'Lebar Material (mm)',
    labelKerf: 'Ketebalan Pisau / Kerf (mm)',
    cutsTitle: 'Daftar Potongan',
    placeholderLength: 'Panjang',
    placeholderWidth: 'Lebar',
    placeholderQty: 'Jml.',
    btnRemoveTitle: 'Hapus',
    statStockUsed: 'Material Terpakai',
    statTotalCuts: 'Total Potongan',
    statWaste: 'Total Sisa',
    statEfficiency: 'Efisiensi',
    vizTitle: 'Visualisasi Potongan',
    emptyState: 'Tambahkan potongan dan tekan hitung untuk melihat rencana potongan.',
    noValidCuts: 'Tidak dapat menghasilkan potongan yang valid. Periksa ukurannya.',
    noValidPanels: 'Tidak dapat menghasilkan panel yang valid. Pastikan bagian-bagian tersebut muat di papan.',
    stockLabel: 'Material',
    panelLabel: 'Panel',
    wasteLabel: 'Sisa:',
    effLabel: 'Efis:',
  },
};
