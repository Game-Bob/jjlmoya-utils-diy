import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BalusterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-baluster';
const title = 'Kalkulator Baluster: Jarak Tepat untuk Pagar';
const description =
  'Hitung jarak tepat antara jeruji atau baluster untuk pagar sesuai dengan peraturan 10 cm. Denah otomatis.';

const faqData = [
  {
    question: 'Berapa jarak maksimum legal antar baluster?',
    answer:
      'Di kebanyakan peraturan internasional, ruang bebas antar elemen pagar tidak boleh membiarkan bola berdiameter 10 cm lewat untuk mencegah kecelakaan pada anak-anak.',
  },
  {
    question: 'Bagaimana cara mengukur jarak: antar pusat atau antar celah?',
    answer:
      "Kalkulator kami menyediakan keduanya. 'Jarak bebas' adalah celah nyata antar jeruji (penting untuk keamanan), sedangkan 'jarak antar pusat' (on-center) adalah yang menandai tempat mengebor atau memasang setiap baluster.",
  },
  {
    question: 'Apa yang terjadi jika pembagiannya tidak tepat?',
    answer:
      'Kalkulator secara otomatis menyesuaikan jumlah jeruji agar celah pertama dan terakhir identik, menjamin simetri visual dan kepatuhan ketat terhadap celah maksimum yang diizinkan.',
  },
  {
    question: 'Apakah lebih baik mengelas atau menyekrup baluster?',
    answer:
      'Tergantung bahannya. Pada baja, pengelasan menawarkan kekakuan struktural maksimum. Pada kayu atau aluminium, digunakan jangkar mekanis atau sekrup tembus. Yang penting adalah pagar mampu menahan gaya horizontal setidaknya 0,8 kN/m.',
  },
];

const howToData = [
  {
    name: 'Ukur panjang total',
    text: 'Ukur jarak tepat antara tiang pertama dan terakhir tempat pagar akan dipasang.',
  },
  {
    name: 'Tentukan ketebalan baluster',
    text: 'Ukur lebar jeruji individual (misalnya 2x2 cm untuk pipa kotak atau diameter jika bulat).',
  },
  {
    name: 'Tetapkan celah maksimum',
    text: 'Tentukan pemisahan maksimum yang diinginkan (direkomendasikan 10 cm untuk mematuhi peraturan).',
  },
  {
    name: 'Dapatkan tanda pemasangan',
    text: 'Periksa daftar posisi tepat untuk melakukan pengeboran dan memastikan pembagian yang simetris dan aman.',
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

export const content: ToolLocaleContent<BalusterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Definitif: Cara Menghitung Jarak Baluster untuk Pagar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Merancang pagar yang aman dan estetis sempurna adalah seni yang menggabungkan presisi matematika dengan peraturan bangunan. Baik untuk teras, balkon, atau tangga dalam ruangan, perhitungan baluster (atau jeruji) yang benar adalah langkah paling kritis dalam proyek ini. Kesalahan perhitungan tidak hanya merusak simetri visual, tetapi juga dapat membuat struktur Anda ilegal dan tidak aman.',
    },
    {
      type: 'card',
      icon: 'mdi:alert-circle-outline',
      title: 'Mengapa perhitungan ini sangat penting?',
      html: '<p>Ini bukan hanya tentang "mengisi celah". Ini tentang mematuhi <strong>Aturan Bola 4 Inci (10 cm)</strong>, standar keamanan internasional yang dirancang untuk mencegah kecelakaan pada anak-anak.</p>',
    },
    {
      type: 'title',
      text: '1. Peraturan Keamanan: Aturan 10 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebelum memotong potongan kayu atau logam pertama, Anda harus memahami "mengapa" di balik matematikanya. Kode bangunan di banyak negara menetapkan aturan yang jelas: <em>"Ruang bebas antar elemen vertikal tidak boleh membiarkan bola berdiameter 10 cm (4 inci) lewat."</em>',
    },
    {
      type: 'paragraph',
      html: 'Ukuran ini tidak sembarangan. Ini adalah diameter rata-rata kepala anak kecil (umumnya kurang dari 1 tahun). Jika seorang anak bisa memasukkan tubuhnya tetapi kepalanya tersangkut, risiko mati lemas sangat tinggi. Jika kepalanya bisa lewat, dia bisa terjatuh. Oleh karena itu, tujuan dari <strong>Kalkulator Baluster</strong> kami bukan hanya estetika, tetapi untuk menyelamatkan nyawa.',
    },
    {
      type: 'title',
      text: '2. Masalah Matematika: Kesalahan Tiang Pagar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalam pemrograman dan konstruksi, ada masalah klasik yang disebut <em>"Fencepost Error"</em> (Kesalahan Tiang Pagar). Jika Anda ingin membangun pagar sepanjang 10 meter dengan tiang setiap 1 meter, berapa banyak tiang yang Anda butuhkan? Jawaban intuitifnya adalah 10, tetapi yang benar adalah 11.',
    },
    {
      type: 'paragraph',
      html: 'Dengan baluster, hal serupa terjadi, tetapi lebih kompleks karena lebar baluster itu sendiri memakan ruang. Formula yang digunakan alat kami menyelesaikan sistem persamaan ini untuk Anda:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          icon: 'mdi:calculator',
          title: 'Langkah A: Hitung Celah',
          html: '<p class="bc-formula">n = (L - g_max) / (w + g_max)</p><p>Pertama, kami menentukan berapa banyak baluster yang secara teoritis muat jika kita menggunakan ruang maksimum yang diizinkan. Kami membulatkan angka ini ke atas untuk memastikan celah yang dihasilkan <em>lebih kecil</em> dari maksimum.</p>',
        },
        {
          type: 'card',
          icon: 'mdi:function-variant',
          title: 'Langkah B: Hitung Ulang Jarak Tepat',
          html: '<p class="bc-formula">g = (L - n × w) / (n + 1)</p><p>Setelah kita mengetahui jumlah pasti baluster (n), kita menghitung berapa banyak ruang yang "tersisa" jika kita mengurangkan lebar semua material, dan membaginya secara merata di antara celah-celah (n+1).</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '3. Panduan Langkah demi Langkah untuk Pemasangan Sempurna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Memiliki angka-angka tersebut hanyalah setengah dari perjuangan. Di sini kami menjelaskan cara memindahkan angka-angka tersebut dari kertas (atau layar) ke realitas pekerjaan Anda.',
    },
    {
      type: 'title',
      text: 'Langkah 1: Pengukuran Presisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ukur jarak <strong>internal</strong> antara tiang ke tiang. Jangan mengukur dari tengah tiang. Anda perlu mengetahui ruang cahaya tepat yang akan Anda isi (L). Jika pagar Anda memiliki beberapa bagian, ukur masing-masing secara individual; konstruksi jarang sekali benar-benar simetris dan kesalahan 0,5 cm dapat merusak keharmonisan.',
    },
    {
      type: 'title',
      text: 'Langkah 2: Menemukan Titik Tengah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kesalahan pemula nomor satu adalah mulai memasang baluster dari satu ujung ke ujung lainnya. Ini hampir selalu menghasilkan celah terakhir dengan ukuran yang aneh, merusak harmoni visual.<ul><li>Tandai <strong>titik tengah tepat</strong> dari pagar (L / 2).</li><li>Putuskan apakah Anda ingin ada <em>baluster</em> atau <em>celah</em> di tengah.</li><li>Jika Anda ingin baluster di tengah: tandai setengah lebar baluster di setiap sisi tanda tengah Anda.</li><li>Jika Anda ingin celah di tengah: tandai setengah jarak celah (g / 2) di setiap sisi.</li></ul>',
    },
    {
      type: 'title',
      text: 'Langkah 3: Membuat Pembatas (Spacers)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jangan gunakan pita pengukur untuk setiap baluster. Kesalahan manusia yang kumulatif akan membuat baluster terakhir menyimpang beberapa sentimeter. Cara profesional adalah memotong blok kayu (atau dua) dengan ukuran celah tepat (g) yang diberikan oleh kalkulator kami.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan blok ini sebagai templat fisik. Pasang satu baluster, letakkan blok, pasang baluster berikutnya rapat dengan blok, dan kencangkan. Ini menjamin konsistensi milimeter.',
    },
    {
      type: 'title',
      text: '4. Bahan dan Alat yang Dibutuhkan',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:tools',
      title: 'Peralatan untuk hasil akhir profesional',
      html: '<ul><li>Pita pengukur presisi tinggi</li><li>Pensil tukang kayu</li><li>Waterpass (untuk vertikalitas)</li><li>Miter saw (untuk potongan bersih)</li><li>Bor dan sekrup kayu</li><li>Blok pembatas (dibuat khusus)</li></ul>',
    },
    {
      type: 'title',
      text: '5. Pertanyaan Teknis Tambahan',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:help-circle-outline',
      title: 'Apa yang terjadi jika celah terakhir tidak pas?',
      html: '<p>Jika Anda telah menggunakan kalkulator kami, hal ini seharusnya tidak terjadi. Namun, di dunia nyata, kayu melengkung dan tiang tidak selalu lurus. Jika saat sampai di ujung Anda kelebihan atau kekurangan 1-2 mm, itu tidak akan terlihat. Jika Anda kekurangan 1 cm, periksa blok pembatas Anda, kemungkinan Anda telah kehilangan beberapa mm di setiap langkah.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Bolehkah saya memasang baluster lebih renggang jika tidak ada anak anak?',
      html: '<p>Secara hukum, tidak. Kode bangunan berlaku untuk rumah, bukan penghuni saat ini. Jika suatu hari Anda menjual rumah, pagar yang tidak sesuai peraturan akan menjadi masalah dalam inspeksi. Selain itu, pengunjung (keponakan, cucu) bisa dalam bahaya.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:wrench-outline',
      title: 'Kayu, Logam, atau Kaca?',
      html: '<p>Kalkulator ini berfungsi untuk <strong>elemen vertikal berulang apa pun</strong>. Jika Anda menggunakan kabel baja horizontal, peraturannya berbeda (biasanya tidak boleh membiarkan orang memanjat, "efek tangga"). Untuk kaca, dianggap sebagai panel kontinu dan tidak berlaku jarak celah, melainkan ketahanan benturan.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:format-quote-close',
      title: 'Mies van der Rohe',
      html: '<p><em>"Arsitektur adalah kemauan zaman yang diterjemahkan ke dalam ruang."</em></p><p>Kami berharap alat ini membantu Anda membangun ruang yang lebih aman dan indah. Ingatlah selalu untuk berkonsultasi dengan kode bangunan setempat di kota Anda, karena mungkin ada variasi khusus tentang tinggi minimum (biasanya 90-110 cm) atau beban gaya.</p>',
    },
  ],
  ui: {
    sectionTitle: 'Dimensi',
    sectionDesc: 'Masukkan ukuran pagar Anda',
    labelRailLength: 'Panjang Total (L)',
    labelBalusterWidth: 'Lebar Baluster (w)',
    labelMaxGap: 'Celah Maksimum (g)',
    blueprintTitle: 'Rencana Pemasangan',
    blueprintRef: 'REF: BAL-001 // SKALA: AUTO',
    labelRequired: 'Baluster Dibutuhkan',
    labelExactGap: 'Celah Tepat',
    labelOnCenter: 'Pusat ke Pusat',
    labelTotalSpaces: 'Total Celah',
    labelCoveredLength: 'Panjang Tertutup',
    labelDisclaimer: '* Dimensi yang ditampilkan adalah perkiraan untuk visualisasi.',
  },
};
