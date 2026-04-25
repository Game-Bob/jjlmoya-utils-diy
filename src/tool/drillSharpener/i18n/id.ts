import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillSharpenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pengasah-mata-bor-presisi';
const title = 'Pengasah Mata Bor Utama: Alat Ukur Presisi';
const description = 'Panduan interaktif untuk mengasah mata bor HSS. Alat ukur digital di layar untuk memeriksa sudut 118° dan 135°. Menghitung RPM dan mendiagnosis kesalahan pemotongan.';

const faqData = [
  {
    question: 'Dapatkah saya meletakkan mata bor langsung di atas layar?',
    answer: 'Ya, alat ini dirancang agar Anda dapat menyandarkan batang mata bor pada garis tengah alat ukur digital dan memverifikasi simetri mata potong secara langsung.',
  },
  {
    question: 'Bagaimana saya tahu jika sudut bebas (insidensi) sudah benar?',
    answer: 'Saat memutar mata bor, bagian belakang mata potong harus terlihat lebih rendah. Jika Anda melihat logam mengkilap secara merata di seluruh ujungnya, itu berarti Anda kurang memberikan sudut bebas (destalonar).',
  },
  {
    question: 'Berapa putaran (RPM) yang harus saya gunakan setelah mengasah?',
    answer: 'Tergantung pada diameternya; kalkulator terintegrasi kami akan memberi Anda data tepat berdasarkan material yang telah Anda pilih di langkah pertama.',
  },
  {
    question: 'Apa perbedaan antara HSS dan Karbida?',
    answer: 'HSS (Baja Kecepatan Tinggi) lebih ekonomis dan tahan terhadap benturan. Karbida tahan terhadap kecepatan yang lebih tinggi tetapi lebih rapuh. Untuk pengasahan manual, HSS adalah standar.',
  },
  {
    question: 'Apakah saya memerlukan peralatan khusus untuk mengasah?',
    answer: 'Batu gerinda putar butiran sedang (120-150) sudah cukup. Yang penting adalah menjaga batu tetap seimbang dan rata untuk mendapatkan hasil yang konsisten.',
  },
];

const howToData = [
  { name: 'Pilih Material', text: 'Pilih logam atau material yang akan Anda bor untuk menetapkan sudut target dan kecepatan potong.' },
  { name: 'Verifikasi Simetri', text: 'Sandarkan mata bor pada layar dan pastikan kedua mata potong sesuai dengan garis biru.' },
  { name: 'Periksa Tumit (Back)', text: 'Periksa secara visual bahwa bagian belakang mata potong tidak menyentuh benda kerja (sudut bebas).' },
  { name: 'Hitung RPM', text: 'Masukkan diameter dan atur bor Anda ke kecepatan yang direkomendasikan untuk material yang dipilih.' },
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

export const content: ToolLocaleContent<DrillSharpenerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pengasah Mata Bor Utama: Teknik Profesional', level: 2 },
    { type: 'paragraph', html: 'Mengasah mata bor adalah salah satu keterampilan paling berharga di bengkel mana pun. Mata bor yang diasah dengan benar meningkatkan kualitas lubang, melindungi masa pakai alat listrik Anda, dan menjamin keselamatan operator.' },
    { type: 'title', text: 'Pilar Pengasahan: Sudut Ujung', level: 3 },
    { type: 'paragraph', html: 'Sudut ujung menentukan bagaimana mata bor menyerang material. Sudut standar adalah 118° untuk baja lunak, 135° untuk stainless steel, dan 140° untuk baja keras. Setiap material memerlukan sudut yang berbeda untuk memaksimalkan penetrasi tanpa mengorbankan kekuatan.' },
    { type: 'title', text: 'Sering Terlupa: Sudut Bebas', level: 3 },
    { type: 'paragraph', html: 'Kesalahan paling umum adalah mengabaikan sudut bebas atau relief. Jika bagian belakang mata potong rata, mata bor hanya akan bergesekan dan menghasilkan panas ekstrem. Solusinya adalah sedikit merendahkan bagian belakang mata potong.' },
  ],
  ui: {
    labelMaterial: 'Material kerja',
    matSteel: 'Baja',
    matInox: 'Inox',
    matHard: 'Keras',
    matBrass: 'Kuningan',
    matPlastic: 'Plastik',
    matWood: 'Kayu',
    labelDiameter: 'Diameter mata bor (mm)',
    unitMm: 'mm',
    btnMinus: '-',
    btnPlus: '+',
    labelVelocity: 'Kecepatan',
    unitRpm: 'RPM',
    labelCooling: 'Potong',
    btnDiagnosis: 'Tidak memotong dengan baik? Diagnosis',
    diagTitle: 'Diagnosis Kegagalan',
    diagClose: 'Tutup',
    diagIssue1: '1. Keluar asap dan tidak menembus',
    diagIssue1Desc: 'Kurang Sudut Bebas. Logam di belakang mata potong bergesekan dengan benda kerja. Rendahkan bagian belakang agar mata potong menjadi titik tertinggi.',
    diagIssue2: '2. Lubang eksentrik atau lebih besar',
    diagIssue2Desc: 'Ujung tidak berada di tengah. Mata potong memiliki panjang yang berbeda. Pastikan ujung menyentuh tepat di tengah alat ukur.',
    diagIssue3: '3. Mata potong terbakar (Biru)',
    diagIssue3Desc: 'Kecepatan berlebihan. Periksa perhitungan RPM alat untuk diameter dan material ini.',
    gaugeInstruction: 'SANDERKAN BATANG PADA GARIS VERTIKAL',
  },
};
