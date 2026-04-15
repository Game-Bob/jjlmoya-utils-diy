import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClayCalculatorUI } from '../ui';

const slug = 'kalkulator-penyusutan-tanah-liat';
const title = 'Kalkulator Penyusutan Tanah Liat: Dimensi Tepat untuk Keramik';
const description =
  'Hitung penyusutan tanah liat saat pengeringan dan pembakaran. Rancang karya keramik dengan dimensi akhir yang tepat.';

const faqData = [
  {
    question: 'Mengapa tanah liat menyusut?',
    answer:
      'Tanah liat menyusut terutama karena kehilangan air. Pertama terjadi pengeringan (penguapan air di antara partikel) dan kemudian pembakaran (penghilangan air yang dikombinasikan secara kimiawi dan sintering partikel).',
  },
  {
    question: 'Berapa persentase penyusutan yang normal?',
    answer:
      'Tergantung pada pasta keramiknya. Gerabah biasanya menyusut antara 5-10%, sementara stonewere dan porselen bisa mencapai 12-15% karena vitrifikasinya yang lebih tinggi.',
  },
  {
    question: 'Bagaimana cara mengukur penyusutan tanah liat saya sendiri?',
    answer:
      'Buat pelat uji berukuran tepat 10 cm. Biarkan mengering dan ukur (penyusutan pengeringan). Bakar hingga suhu akhir dan ukur kembali (penyusutan total). Perbedaannya akan memberi Anda persentase yang tepat.',
  },
  {
    question: 'Apa yang terjadi jika karya saya retak saat pengeringan?',
    answer:
      'Biasanya menunjukkan pengeringan yang terlalu cepat atau tidak merata. Bagian yang tipis kehilangan air lebih cepat daripada bagian yang tebal, sehingga menimbulkan tegangan. Tutupi karya dengan plastik untuk memperlambat proses.',
  },
];

const howToData = [
  {
    name: 'Ukur karya saat basah',
    text: 'Ambil dimensi tepat karya Anda segera setelah diputar atau dimodelkan, saat masih memiliki kelembapan penuh.',
  },
  {
    name: 'Masukkan koefisien penyusutan',
    text: 'Cari di paket tanah liat Anda persentase penyusutan total (pengeringan + pembakaran) yang disediakan oleh produsen.',
  },
  {
    name: 'Dapatkan dimensi akhir yang diharapkan',
    text: 'Gunakan kalkulator untuk mengetahui ukuran karya Anda setelah melewati oven dan rencanakan sambungan atau tutup Anda dengan tepat.',
  },
  {
    name: 'Perhitungan terbalik untuk target',
    text: 'Jika Anda membutuhkan karya Anda berukuran tepat X cm di akhir, gunakan perhitungan terbalik untuk mengetahui ukuran yang harus dimiliki di alat putar.',
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

export const content: ToolLocaleContent<ClayCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'The Potter\'s Dictionary - Clay Shrinkage',
      url: 'https://digitalfire.com/glossary/firing+shrinkage',
    },
    {
      name: 'Ceramic Arts Network - Understanding Shrinkage',
      url: 'https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Fisika Tanah Liat: Penyusutan dan Ekspansi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tanah liat adalah bahan hidup yang berubah ukuran selama seluruh proses keramik. Dari saat Anda membentuk karya basah hingga keluar dari oven, ia bisa kehilangan antara 8% dan 15% dari ukuran aslinya. Menghitung penyusutan ini sangat penting untuk menciptakan karya dengan dimensi tepat yang Anda butuhkan.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Fase Penyusutan',
          html: '<p><strong>1. Pengeringan (Basah → Kering):</strong> Saat kehilangan air, partikel tanah liat saling mendekat. Ini adalah penyusutan terbesar (4-8%). Karya yang tebal bisa retak jika mengering terlalu cepat.</p><p><strong>2. Pembakaran (Kering → Bisku):</strong> Antara 900-1000°C, tanah liat mengalami perubahan kimiawi yang tidak dapat diubah. Penyusutan tambahan sebesar 2-4%. Karya menjadi berpori tetapi tahan banting.</p><p><strong>3. Vitrifikasi (Suhu Tinggi):</strong> Pada 1200-1300°C, tanah liat memvitrifikasi. Penyusutan akhir sebesar 1-3%. Stoneware dan porselen mencapai kepadatan maksimalnya.</p>',
        },
        {
          type: 'card',
          title: 'Variabel yang Mempengaruhi',
          html: '<ul><li><strong>Jenis tanah liat:</strong> Tanah liat merah kurang menyusut (8-10%) dibandingkan porselen (12-15%).</li><li><strong>Ketebalan dinding:</strong> Dinding yang tipis menyusut lebih seragam daripada yang tebal.</li><li><strong>Suhu pembakaran:</strong> Semakin tinggi suhu, semakin besar penyusutan dan vitrifikasi.</li><li><strong>Kandungan grog:</strong> Menambahkan grog (tanah liat yang sudah dibakar dan digiling) mengurangi penyusutan.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Aplikasi Praktis',
      level: 2,
    },
    {
      type: 'title',
      text: 'Desain Cetakan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda membutuhkan cangkir dengan diameter akhir 8 cm, dan tanah liat Anda menyusut 12%, Anda harus membuat cetakan berukuran <strong>9,1 cm</strong>. Perhitungan terbalik ini sangat penting dalam produksi massal.',
    },
    {
      type: 'title',
      text: 'Tutup dan Perakitan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat Anda membuat karya yang harus pas (teko + tutup, toples + tutup), keduanya harus dibuat dengan tanah liat yang sama dan dibakar bersama untuk memastikan keduanya menyusut secara merata. Perbedaan 1% saja dapat merusak kecocokannya.',
    },
    {
      type: 'title',
      text: 'Patung Monumental',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pada karya besar, penyusutan diferensial antara bagian yang tebal dan tipis dapat menyebabkan retakan. Keramik berpengalaman mengimbanginya dengan membiarkan dinding lebih tebal di area yang mereka tahu akan lebih banyak menyusut.',
    },
  ],
  ui: {
    labelInitialSize: 'Ukuran Awal (mm)',
    labelShrinkage: 'Persentase Penyusutan (%)',
    labelLow: 'Rendah (Terakota)',
    labelMedium: 'Sedang (Stoneware)',
    labelHigh: 'Tinggi (Porselen)',
    presetTerracota: 'Terakota (8%)',
    presetGres: 'Stoneware (12%)',
    presetPorcelana: 'Porselen (15%)',
    labelResult: 'Hasil',
    labelFinalSize: 'Ukuran Akhir:',
    labelLoss: 'Total Kehilangan:',
    tipText:
      'Untuk menghitung ukuran awal yang dibutuhkan untuk mendapatkan ukuran akhir tertentu, bagi ukuran yang diinginkan dengan (1 - penyusutan/100).',
    labelInitialBadge: 'Awal:',
    labelFinalBadge: 'mm akhir',
    labelLossBadge: 'Kehilangan:',
    labelInitialArea: 'Area Awal',
    labelFinalArea: 'Area Akhir',
  },
};
