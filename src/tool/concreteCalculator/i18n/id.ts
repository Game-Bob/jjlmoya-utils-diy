import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConcreteCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-beton-mortar';
const title = 'Kalkulator Beton dan Mortar: Jumlah Tepat Semen, Pasir, dan Air';
const description =
  'Hitung berapa sak semen, sekop pasir, dan liter air yang Anda butuhkan per m³. Untuk fondasi, lantai, dinding, dan screed. Panduan dosis teknis.';

const faqData = [
  {
    question: 'Berapa sak semen 25kg dalam satu meter kubik?',
    answer:
      'Untuk beton standar (kekuatan K-200), dibutuhkan sekitar 14 sak semen ukuran 25kg (350kg) untuk membuat satu meter kubik campuran yang dipadatkan.',
  },
  {
    question: 'Mana yang lebih kuat, beton atau mortar?',
    answer:
      'Beton (dengan kerikil) lebih kuat secara struktural untuk menahan beban besar. Mortar (hanya pasir) ideal untuk menyatukan bagian-bagian atau memplester permukaan.',
  },
  {
    question: 'Berapa sekop dalam satu meter kubik?',
    answer:
      'Tergantung pada ukuran sekopnya, tetapi secara umum dihitung 180-200 sekop pasir per m³. Kalkulator kami menerjemahkan m³ menjadi saran jumlah sekop.',
  },
  {
    question: 'Dapatkah saya membuat campuran secara manual tanpa molen?',
    answer:
      'Ya, meskipun membutuhkan usaha fisik yang jauh lebih besar. Idealnya dilakukan di atas permukaan yang bersih dan kedap air (pelat logam atau bak) agar tidak kehilangan air.',
  },
  {
    question: 'Mengapa beton retak saat kering?',
    answer:
      'Seringkali karena kurangnya kelembapan selama proses pengerasan (kehilangan air yang cepat) atau terlalu banyak air dalam campuran. Disarankan untuk menyiram beton pada hari-hari berikutnya.',
  },
];

const howToData = [
  {
    name: 'Pilih Jenis Campuran',
    text: 'Pilih apakah Anda akan membuat beton untuk fondasi atau mortar untuk dinding.',
  },
  {
    name: 'Tentukan Volume dalam m³',
    text: 'Masukkan total volume. Kalikan panjang x lebar x tebal.',
  },
  {
    name: 'Lihat Jumlah yang Dibutuhkan',
    text: 'Lihat berapa sak, sekop, dan liter yang perlu Anda beli.',
  },
  {
    name: 'Terapkan Proposi',
    text: 'Ikuti panduan visual semen, pasir, dan kerikil untuk campuran yang sempurna.',
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

export const content: ToolLocaleContent<ConcreteCalculatorUI> = {
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
      text: 'Panduan Takaran untuk Beton dan Mortar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat menghadapi renovasi atau konstruksi, salah satu pertanyaan yang paling sering muncul adalah <strong>berapa sak semen yang saya butuhkan untuk satu meter kubik beton?</strong>. Ini bukan sekadar mencampur bahan; kekuatan akhir struktur sangat bergantung pada ketepatan proporsi semen, pasir, kerikil, dan air. Kalkulator kami menerjemahkan ukuran industri ke dalam unit praktis lapangan: sak 25kg, sekop, dan liter.',
    },
    {
      type: 'card',
      icon: 'mdi:water-alert',
      title: 'Kelebihan Air Melemahkan Beton',
      html: '<p>Kesalahan yang sangat umum adalah menambahkan terlalu banyak air agar beton lebih mudah mengalir. Kelebihan air menciptakan pori-pori saat menguap selama proses pengerasan, yang secara drastis mengurangi kekuatan akhir. Konsistensi yang ideal harus seperti <strong>pasta kental, bukan cair</strong>. Gunakan air sesedikit mungkin.</p>',
    },
    {
      type: 'title',
      text: 'Proporsi Standar Menurut Penggunaan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Takaran beton</strong> bervariasi sesuai dengan penggunaannya. Untuk <strong>Beton K-200</strong> (fondasi dan lantai kerja) proporsinya adalah 1 bagian semen, 2.5 bagian pasir, dan 3 bagian kerikil. Untuk <strong>Mortar M-40</strong> (dinding dan sekat) adalah 1 bagian semen dan 4 bagian pasir. Untuk <strong>Mortar M-80</strong> (screed lantai) adalah 1 bagian semen dan 3 bagian pasir. Beton dengan kerikil menahan lebih banyak beban; mortar hanya pasir ideal untuk menyatukan dan memplester.',
    },
    {
      type: 'title',
      text: 'Cara Menghitung m³ yang Anda Butuhkan',
      level: 3,
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Contoh Perhitungan untuk Lantai Kerja',
      html: '<p>Untuk lantai taman dengan panjang 4m, lebar 3m, dan tebal 15cm: <strong>4 × 3 × 0.15 = 1.80 m³</strong>. Kalkulator kami melakukan operasi ini secara otomatis jika Anda memasukkan dimensi di bagian "Berdasarkan Ukuran".</p><p>Ingatlah untuk selalu <strong>membeli tambahan 10%</strong> untuk mengompensasi kehilangan akibat tumpahan atau variasi pada permukaan tanah.</p>',
    },
    {
      type: 'title',
      text: 'Urutan Pencampuran dan Takaran Per Sak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Di lapangan sering disebut <strong>"campuran 300 kilo"</strong>: 300kg semen untuk setiap meter kubik beton jadi. Untuk pencampuran yang benar dalam molen: pertama air, kemudian kerikil dan pasir (untuk mengurai gumpalan), dan terakhir semen yang ditambahkan secara bertahap.',
    },
    {
      type: 'card',
      icon: 'mdi:package-variant-closed',
      title: 'Aturan 10% untuk Menghindari Kekurangan Bahan',
      html: '<p>Selalu beli <strong>10% bahan lebih banyak</strong> dari yang dihitung untuk mengompensasi kehilangan akibat tumpahan, ketidakteraturan medan, atau variasi volume riil agregat yang lembap. Ini jauh lebih murah daripada harus melakukan pemesanan kedua saat pekerjaan sedang berhenti.</p>',
    },
  ],
  ui: {
    mixH200Label: 'Beton Standar',
    mixH200Hint: 'Ideal untuk fondasi dan lantai kerja',
    mixM40Label: 'Mortar Pasangan Bata',
    mixM40Hint: 'Untuk dinding dan sekat',
    mixM80Label: 'Screed Kuat',
    mixM80Hint: 'Untuk lantai dan plesteran kuat',
    modeDimsLabel: 'Berdasarkan Ukuran',
    modeDirectLabel: 'm³ Langsung',
    labelLength: 'Panjang',
    labelWidth: 'Lebar',
    labelThickness: 'Tebal',
    labelVolume: 'Volume Total (m³)',
    binderCementLabel: 'Semen',
    binderLimeLabel: 'Kapur',
    summaryLabel: 'Total yang akan diisi:',
    resUnitSacks: 'Sak (25kg)',
    resUnitShovels: 'Sekop',
    resUnitLitres: 'Liter',
    resLabelCement: 'Semen Portland',
    resLabelLime: 'Kapur Hidrolik',
    resLabelSand: 'Pasir / Agregat',
    resLabelWater: 'Air Bersih',
    proportionsTitle: 'Proporsi Campuran yang Dipilih',
    propLabelSand: 'Pasir',
    propLabelGravel: 'Kerikil',
    adviceH200: 'Ideal untuk pilar, lantai kerja, dan struktur penahan beban.',
    adviceM40: 'Sempurna untuk memasang dinding bata atau batako.',
    adviceM80: 'Gunakan ini untuk screed lantai yang sangat tahan lama.',
    adviceLimeH200: 'Beton kapur lebih fleksibel tetapi membutuhkan waktu lebih lama untuk mengeras.',
    priceTotalLabel: 'Estimasi Anggaran',
    priceSackLabel: 'Sak',
    priceSandLabel: 'Pasir (m³)',
    priceDisclaimer: 'Harga pasar sebagai referensi. Sesuaikan dengan pemasok lokal Anda.',
  },
};
