import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TwoStrokeMixtureCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-campuran-bahan-bakar-2-tak';
const title = 'Kalkulator Campuran Bahan Bakar 2 Tak: Rasio Oli dan Bensin Akurat';
const description = 'Hitung rasio campuran bahan bakar 2-tak yang presisi secara instan. Alat penting untuk gergaji mesin, moped, sepeda motor, dan mesin kecil. Mendukung rasio 1:25, 1:33, 1:40, dan 1:50.';

const faqData = [
  {
    question: 'Apa itu mesin 2-tak?',
    answer: 'Mesin 2-tak menggabungkan langkah hisap dan tenaga dalam dua gerakan piston, menjadikannya lebih sederhana dan ringan daripada mesin 4-tak. Mesin ini menggerakkan gergaji mesin, peniup daun, moped, dan beberapa sepeda motor. Mereka membutuhkan oli yang dicampur ke dalam bahan bakar untuk pelumasan.',
  },
  {
    question: 'Apa rasio campuran bahan bakar dan oli yang umum?',
    answer: 'Rasio umum adalah 1:25 (kaya, melindungi), 1:33 (peralatan lama), 1:40 (standar), dan 1:50 (miskin, mesin modern). Periksa manual mesin Anda untuk rasio yang tepat—menggunakan rasio yang salah dapat merusak mesin Anda.',
  },
  {
    question: 'Apa yang terjadi jika saya salah mencampur?',
    answer: 'Terlalu banyak oli (campuran kaya) menyebabkan asap berlebih, busi kotor, dan performa buruk. Terlalu sedikit oli (campuran miskin) menyebabkan piston macet (seizure), kerusakan piston, dan kegagalan mesin.',
  },
  {
    question: 'Jenis oli apa yang harus saya gunakan?',
    answer: 'Gunakan oli motor 2-tak yang sesuai untuk peralatan Anda. Oli 2-tak sintetik premium memberikan perlindungan yang lebih baik dan pembakaran yang lebih bersih daripada oli konvensional. Jangan pernah menggunakan oli mesin 4-tak—ini akan merusak mesin.',
  },
  {
    question: 'Bagaimana cara mencampur bahan bakar dan oli?',
    answer: 'Tuangkan sebagian bensin ke dalam wadah bersih, tambahkan jumlah oli yang dihitung, lalu tambahkan sisa bensin. Campur secara menyeluruh dengan mengocok selama 1-2 menit. Beri label pada wadah dengan tanggal pencampuran.',
  },
];

const howToData = [
  { name: 'Ketahui rasio Anda', text: 'Cari manual mesin atau dokumentasi peralatan Anda. Rasio umum: gergaji mesin (1:40 atau 1:50), moped (1:33), sepeda motor lama (1:25). Menggunakan rasio yang salah akan merusak mesin Anda.' },
  { name: 'Ukur volume bahan bakar', text: 'Tentukan berapa banyak bensin yang Anda butuhkan. Alat ini menangani liter, galon, atau unit volume apa pun. Pengukuran bahan bakar yang akurat = jumlah oli yang akurat.' },
  { name: 'Hitung oli yang dibutuhkan', text: 'Masukkan volume bahan bakar dan rasio. Kalkulator ini menunjukkan dengan tepat berapa banyak oli (dalam ml atau liter) yang Anda butuhkan untuk campuran yang sempurna.' },
  { name: 'Campur dengan hati-hati', text: 'Tuangkan bahan bakar ke dalam wadah bersih, tambahkan oli yang dihitung, lalu tambahkan sisa bahan bakar. Kocok selama 1-2 menit agar tercampur rata.' },
  { name: 'Beri label dan gunakan', text: 'Tandai wadah dengan tanggal dan rasio campuran. Gunakan bahan bakar campuran dalam waktu 30 hari untuk hasil terbaik (terutama oli sintetik).' },
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

const howToSchema: WithContext<any> = {
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

export const content: ToolLocaleContent<TwoStrokeMixtureCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Kalkulator Campuran Bahan Bakar 2-Tak: Rasio Oli-Bensin Presisi untuk Gergaji Mesin & Moped', level: 2 },
    { type: 'paragraph', html: 'Mesin dua-tak membutuhkan campuran bahan bakar-oli yang presisi untuk bertahan hidup. Salah campur dan mesin Anda bisa hancur dalam hitungan menit. Kalkulator ini secara instan menentukan jumlah oli yang tepat yang dibutuhkan untuk volume bahan bakar dan jenis mesin Anda—menghilangkan tebakan di bengkel.' },

    { type: 'title', text: 'Mengapa Mesin 2-Tak Membutuhkan Oli dalam Bahan Bakar', level: 3 },
    { type: 'card', icon: 'mdi:engine', title: 'Perbedaan Kritis', html: 'Tidak seperti mesin 4-tak dengan penampung oli terpisah, mesin 2-tak mencampur oli langsung ke dalam bahan bakar. Pada setiap langkah tenaga, mesin membakar campuran bahan bakar-oli untuk energi dan pelumasan. Tidak ada bak oli, tidak ada pompa oli terpisah—hanya bahan bakar campuran yang menjaga piston tetap hidup.' },

    { type: 'title', text: 'Referensi Cepat Rasio 2-Tak', level: 3 },
    { type: 'table', headers: ['Rasio', '% Oli', 'Kasus Penggunaan', 'Jenis Mesin', 'Karakteristik'], rows: [
      ['1:25', '3,85%', 'Perlindungan Maksimal', 'Peralatan sebelum 1980-an, penggunaan beban tinggi, motor antik', 'Campuran kaya: lebih banyak asap, lebih banyak tumpukan karbon, perlindungan maksimal terhadap macet'],
      ['1:33', '2,94%', 'Peralatan Klasik', 'Mesin kecil 1980-an–1990-an, gergaji mesin lama', 'Kekayaan moderat: keseimbangan antara perlindungan dan efisiensi'],
      ['1:40', '2,44%', 'Standar Industri', 'Kebanyakan gergaji mesin modern, moped, mesin kecil modern', 'Rekomendasi standar: dirancang untuk oli sintetik masa kini'],
      ['1:50', '1,96%', 'Efisiensi Modern', 'Gergaji mesin terbaru, moped performa tinggi, sepeda motor baru', 'Campuran miskin: lebih sedikit asap, pembakaran lebih bersih, dirancang untuk oli sintetik premium']
    ] },

    { type: 'title', text: 'Konsekuensi Rasio yang Salah', level: 3 },
    { type: 'proscons', items: [
      { pro: 'Terlalu Banyak Oli (Campuran Kaya)', con: 'Asap putih berlebih, busi kotor, tumpukan karbon, akselerasi buruk, kegagalan mesin' },
      { pro: 'Terlalu Sedikit Oli (Campuran Miskin)', con: 'Piston macet dalam hitungan detik, dinding silinder tergores, kerusakan mesin katastrofik' },
      { pro: 'Rasio yang Benar', con: 'Operasi lancar, pelumasan yang tepat, pembakaran optimal, umur mesin lebih panjang, starter yang andal' }
    ] },

    { type: 'title', text: 'Rasio Peralatan Umum', level: 3 },
    { type: 'card', icon: 'mdi:tree', title: 'Gergaji Mesin', html: '<strong>Stihl, Husqvarna, Echo:</strong> Model modern biasanya membutuhkan 1:40 atau 1:50. Selalu periksa manual Anda—menggunakan 1:25 pada gergaji mesin modern berisiko busi kotor dan performa buruk. Mesin Stihl lama (1990-an dan sebelumnya) mungkin menentukan 1:25 atau 1:33.' },
    { type: 'card', icon: 'mdi:motorcycle', title: 'Moped & Sepeda Motor', html: '<strong>Vespa, Honda, Yamaha:</strong> Kebanyakan membutuhkan 1:33 untuk model lama, 1:40–1:50 untuk versi modern. Moped performa tinggi sering kali menentukan rasio 1:50. Periksa manual servis Anda—itu adalah sumber kebenaran.' },
    { type: 'card', icon: 'mdi:tools', title: 'Peniup Daun & Pemangkas', html: '<strong>Stihl, Husqvarna, DeWalt:</strong> Biasanya 1:50 (modern) atau 1:40 (sedikit lebih tua). Alat-alat ini dirancang untuk penggunaan musiman cepat, sehingga rasio miskin menghemat asap tanpa mengorbankan keandalan.' },

    { type: 'title', text: 'Jenis Oli Sangat Penting', level: 3 },
    { type: 'comparative', items: [
      { title: 'Oli 2 Tak Konvensional', description: 'Opsi hemat untuk penggunaan sesekali. Kadar abu lebih tinggi, lebih banyak asap, perlindungan memadai untuk rasio standar.', icon: 'mdi:beaker', points: ['Biaya lebih rendah', 'Asap lebih terlihat', 'Tumpukan abu lebih tinggi', 'Bekerja untuk rasio 1:40'] },
      { title: 'Oli 2 Tak Sintetik', description: 'Pilihan premium untuk pengguna sering. Pembakaran lebih bersih, perlindungan lebih baik, memungkinkan rasio lebih miskin. Stabil terhadap suhu.', icon: 'mdi:flame', points: ['Keluaran asap lebih rendah', 'Perlindungan mesin lebih baik', 'Memungkinkan rasio 1:50 dengan aman', 'Stabilitas penyimpanan lebih lama'], highlight: true },
      { title: 'Campuran Sintetik (Semi Sintetik)', description: 'Jalan tengah antara konvensional dan sintetik penuh. Perlindungan baik dengan biaya moderat. Rekomendasi umum produsen.', icon: 'mdi:beaker-outline', points: ['Performa seimbang', 'Biaya moderat', 'Bagus untuk rasio 1:40', 'Asap berkurang dibanding konvensional'] }
    ], columns: 3 },

    { type: 'title', text: 'Proses Mencampur Langkah-demi-Langkah', level: 3 },
    { type: 'card', icon: 'mdi:check-circle', title: 'Cara yang Benar untuk Mencampur', html: '<ol style="margin: 1rem 0; padding-left: 1.5rem;"><li><strong>Gunakan wadah khusus</strong> yang disediakan hanya untuk pencampuran bahan bakar. Bersih, kering, bertanda.</li><li><strong>Tuangkan setengah bahan bakar Anda</strong> ke dalam wadah terlebih dahulu.</li><li><strong>Tambahkan jumlah oli yang dihitung</strong> (gunakan kalkulator ini untuk presisi).</li><li><strong>Tambahkan sisa bahan bakar</strong> untuk mencapai volume target.</li><li><strong>Kocok dengan kuat selama 1–2 menit</strong> sampai warna seragam. Campuran homogen = pelumasan merata.</li><li><strong>Beri label pada wadah</strong> dengan tanggal, rasio, dan jenis bahan bakar.</li><li><strong>Gunakan dalam waktu 30 hari</strong> (oli sintetik memperpanjang ini hingga 60 hari).</li></ol>' },

    { type: 'title', text: 'Kapan Harus Mempertanyakan Manual Peralatan Anda', level: 3 },
    { type: 'tip', html: '<strong>Selalu verifikasi rasio dalam manual peralatan Anda terlebih dahulu.</strong> Jika Anda tidak dapat menemukannya, kunjungi situs web produsen atau hubungi dukungan mereka. Jangan pernah menebak—rasio yang salah membatalkan garansi dan berisiko piston macet. Jika peralatan Anda barang antik dan manualnya hilang, cari nomor model secara online.' },

    { type: 'title', text: 'Glosarium: Istilah 2-Tak Dijelaskan', level: 3 },
    { type: 'glossary', items: [
      { term: 'Campuran Miskin (Lean)', definition: 'Bahan bakar dengan terlalu sedikit oli (rasio tinggi seperti 1:50). Berisiko piston macet karena pelumasan yang tidak memadai.' },
      { term: 'Campuran Kaya (Rich)', definition: 'Bahan bakar dengan terlalu banyak oli (rasio rendah seperti 1:25). Menyebabkan asap berlebih, busi kotor, dan tumpukan karbon.' },
      { term: 'Campuran Homogen', definition: 'Campuran seragam antara bahan bakar dan oli di seluruh bagian, dicapai melalui pengocokan yang menyeluruh. Penting untuk pelumasan dan pembakaran yang merata.' },
      { term: 'Macet (Seizure)', definition: 'Saat piston membeku di dalam silinder karena pelumasan dan gesekan yang tidak memadai. Menyebabkan kegagalan mesin total.' },
      { term: 'Oli Sintetik', definition: 'Oli formulasi lab yang menawarkan perlindungan unggul, pembakaran lebih bersih, dan stabilitas suhu dibanding oli mineral konvensional.' },
      { term: 'Mesin 2-Tak', definition: 'Mesin yang menyelesaikan siklus pembakaran penuh dalam dua gerakan piston. Lebih ringan dan sederhana dari mesin 4-tak.' },
      { term: 'Mesin 4-Tak', definition: 'Mesin dengan bak oli terpisah dan siklus empat tahap. Oli bersirkulasi melalui saluran, tidak dicampur ke dalam bahan bakar.' }
    ] },

    { type: 'title', text: 'Bagaimana Kalkulator Ini Menghemat Waktu & Uang', level: 3 },
    { type: 'stats', items: [
      { value: '100%', label: 'Perhitungan akurat, tidak ada kesalahan ukur', icon: 'mdi:check-circle' },
      { value: 'Instan', label: 'Dapatkan jumlah tepat dalam hitungan detik', icon: 'mdi:flash' },
      { value: '4 Rasio', label: 'Mencakup 1:25, 1:33, 1:40, 1:50', icon: 'mdi:counter', trend: { value: 'Ditambah rasio kustom', positive: true } },
      { value: 'Dapat Dibagikan', label: 'Salin dan bagikan pengaturan campuran Anda melalui URL', icon: 'mdi:share-variant' }
    ], columns: 2 },

    { type: 'title', text: 'Kesalahan Umum yang Mematikan Mesin', level: 3 },
    { type: 'diagnostic', variant: 'error', title: 'Menggunakan Oli 4 Tak pada Mesin 2 Tak', icon: 'mdi:alert', badge: 'Kematian Mesin', html: 'Oli 4-tak dirancang untuk bersirkulasi melalui blok mesin. Dalam tangki bahan bakar 2-tak, mereka tidak terbakar bersih dan akan menghancurkan mesin Anda dalam hitungan jam.' },
    { type: 'diagnostic', variant: 'warning', title: 'Lupa Mencampur Secara Menyeluruh', icon: 'mdi:alert', badge: 'Risiko Macet', html: 'Jika oli dan bahan bakar terpisah karena pencampuran yang tidak lengkap, bagian dari mesin Anda akan terbakar tanpa pelumasan. Kocok setidaknya selama 1–2 menit sampai campuran seragam.' },
    { type: 'diagnostic', variant: 'warning', title: 'Menggunakan Bahan Bakar Lama (Lebih dari 60 Hari)', icon: 'mdi:alert', badge: 'Penumpukan Getah', html: 'Bahan bakar campuran etanol terurai seiring waktu. Campuran bahan bakar lama meninggalkan endapan getah di karburator dan injektor bahan bakar. Campur hanya apa yang akan Anda gunakan dalam 30 hari.' },

    { type: 'title', text: 'Ringkasan FAQ', level: 3 },
    { type: 'summary', title: 'Sebelum Anda Mencampur', items: [
      'Periksa manual peralatan Anda untuk rasio yang tepat—ini adalah spesifikasi yang diuji produsen.',
      'Verifikasi Anda menggunakan oli 2-tak, bukan 4-tak atau oli lainnya.',
      'Gunakan wadah bersih khusus yang hanya digunakan untuk pencampuran bahan bakar.',
      'Gunakan bensin segar (tidak disimpan selama berbulan-bulan) dan oli 2-tak yang kompatibel.',
      'Campur secara menyeluruh dan beri label dengan tanggal, rasio, dan jenis bahan bakar.',
      'Gunakan campuran dalam waktu 30 hari untuk hasil terbaik.'
    ] },
  ],
  ui: {
    titleMain: 'Kalkulator Campuran Bahan Bakar 2 Tak',
    labelFuelVolume: 'Volume Bahan Bakar',
    labelRatio: 'Rasio Campuran',
    labelOilRequired: 'Oli yang Dibutuhkan',
    labelTotalMixture: 'Total Campuran',
    labelRichness: 'Kekayaan Campuran',
    labelPresets: 'Rasio Umum',
    labelCustomRatio: 'Rasio Kustom (1:X)',
    btnClear: 'Bersihkan',
    btnCopyResults: 'Salin Hasil',
    btnSwitchMode: 'Ganti Mode',
    unitLiters: 'L',
    unitMilliliters: 'ml',
    richLean: 'Miskin (sedikit oli, risiko macet)',
    richBalanced: 'Seimbang (campuran standar)',
    richRich: 'Kaya (lebih banyak oli, lebih banyak asap, perlindungan mesin)',
    msgReady: 'Siap',
    msgMixtureReady: 'Campuran dihitung',
    tooltipFuelVolume: 'Masukkan jumlah bensin dalam liter',
    tooltipRatio: 'Masukkan rasio sebagai 25, 33, 40, atau 50 (untuk 1:25, 1:33, dll.)',
    recipientLabel: 'Wadah Campuran',
    oilPercentage: '% Oli',
    labelVolume: 'Volume',
    labelRatioShort: 'Rasio',
    labelOilTip: 'Campuran oli 2% = rasio 1:50',
    labelMixingTips: 'Tips Mencampur',
    labelMixingTipsDesc: 'Campur dalam wadah bersih: bensin dulu, tambahkan oli terukur, lalu sisa bensin. Kocok rata (1-2 menit) untuk hasil homogen. Labeli dengan tanggal dan rasio.',
    recipePrefix: 'Untuk',
    recipeAt: 'bensin pada',
    recipeAdd: 'tambahkan tepat',
    recipeOfOil: 'oli 2-tak.',
    copyTextPrefix: 'Campuran 2-Tak',
    copyTextFuel: 'bensin',
    copyTextOil: 'oli',
  },
};
