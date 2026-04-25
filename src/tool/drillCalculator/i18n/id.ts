import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrillCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-kecepatan-bor-frais';
const title = 'Kalkulator RPM Pemesinan dan Bor';
const description = 'Hitung putaran per menit (RPM) ideal untuk bor atau mesin frais Anda berdasarkan material dan diameter mata bor. Hindari kerusakan alat Anda.';

const faqData = [
  {
    question: 'Mengapa mata bor terbakar saat mengebor?',
    answer: 'Terutama karena putaran (RPM) yang berlebihan. Ketika mata bor berputar lebih cepat daripada kemampuan material menyerap panas, gesekan meningkatkan suhu di atas batas pengerasan baja, membuat mata potong menjadi lunak dan berhenti memotong.',
  },
  {
    question: 'Apa itu kecepatan potong (Vc)?',
    answer: 'Adalah kecepatan linier dalam meter per menit di mana mata potong alat bergerak di permukaan material. Setiap material memiliki Vc yang direkomendasikan yang tidak bergantung pada diameter mata bor.',
  },
  {
    question: 'Kapan saya harus menggunakan alat Karbida (Widia)?',
    answer: 'Anda harus menggunakan karbida ketika membutuhkan kecepatan yang jauh lebih tinggi, dalam produksi industri, atau ketika material yang akan dibor sangat keras. Untuk DIY umum, HSS sudah cukup dan lebih tahan terhadap patah karena kelenturannya.',
  },
  {
    question: 'Apakah pelumas selalu diperlukan?',
    answer: 'Pada logam, hampir selalu direkomendasikan. Pada aluminium mencegah material menempel pada mata bor, dan pada baja mengurangi panas. Pada kayu dan plastik, lebih baik dikerjakan kering dengan sering mengeluarkan mata bor untuk membuang sisa potongan.',
  },
  {
    question: 'Bagaimana cara menghitung gerak makan (feed) jika saya tidak memiliki mesin CNC?',
    answer: 'Pada bor manual, gerak makan dirasakan melalui tekanan. Anda harus melihat tatal (gram) yang keluar secara konstan dan bersih. Jika yang keluar adalah bubuk, berarti tekanan kurang atau RPM terlalu tinggi. Jika tatal terlalu tebal dan mesin bor tampak kepayahan, berarti tekanan terlalu kuat.',
  },
];

const howToData = [
  { name: 'Pilih material', text: 'Tentukan material apa yang akan Anda bor atau frais (baja, aluminium, kayu, dll.). Masing-masing memiliki kekerasan dan kapasitas termal yang berbeda.' },
  { name: 'Masukkan diameter', text: 'Tulis diameter tepat mata bor atau pisau frais Anda dalam milimeter. Ingat bahwa semakin besar diameter, semakin rendah kecepatan putarannya.' },
  { name: 'Pilih jenis alat', text: 'Tentukan apakah mata bor Anda terbuat dari baja kecepatan tinggi (HSS) atau karbida (Widia). Karbida tahan terhadap kecepatan yang jauh lebih tinggi.' },
  { name: 'Atur RPM di mesin Anda', text: 'Konfigurasikan bor atau mesin frais Anda dengan nilai yang dihitung. Jika mesin Anda memiliki posisi tetap, gunakan alat kecepatan terdekat kami untuk memilih posisi puli yang paling aman.' },
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

export const content: ToolLocaleContent<DrillCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pentingnya RPM dalam Pemesinan', level: 2 },
    { type: 'paragraph', html: 'Perhitungan RPM yang benar adalah perbedaan antara pekerjaan yang sempurna dan kegagalan yang mahal. Ini bukan tentang memutar mata bor secepat mungkin, tetapi tentang menghormati hukum fisika yang diterapkan pada gesekan dan ketahanan material. Kalkulator kami dirancang untuk mengoptimalkan kinerja alat Anda dan kualitas hasil akhir Anda.' },
    { type: 'title', text: 'Memahami Kecepatan Potong', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Formula Perhitungan RPM', html: '<p>Kecepatan potong adalah nilai dalam meter per menit yang menunjukkan kecepatan ideal mata potong melewati material. Formula yang digunakan adalah: <code>RPM = (Vc × 1000) / (π × D)</code> di mana D adalah diameter dalam milimeter. Perhitungan ini tidak bergantung pada diameter material yang kita potong.' },
    { type: 'title', text: 'HSS vs Karbida', level: 3 },
    { type: 'paragraph', html: 'Alat <strong>Baja Kecepatan Tinggi (HSS)</strong> ekonomis dan tahan terhadap benturan, tetapi memiliki ketahanan termal yang terbatas. <strong>Karbida (Carbide/Widia)</strong> memungkinkan kecepatan potong 3 hingga 5 kali lebih tinggi, tetapi lebih rapuh. Kalkulator secara otomatis menyesuaikan parameter sesuai dengan jenis alat.' },
    { type: 'title', text: '3 Kesalahan Umum saat Mengebor', level: 3 },
    { type: 'paragraph', html: '<strong>RPM terlalu tinggi:</strong> Menyebabkan kelebihan panas dan hilangnya kekerasan baja. <strong>RPM terlalu rendah:</strong> Mata bor bergetar dan bisa patah karena kelelahan material. <strong>Tanpa pendinginan:</strong> Panas mengurangi masa pakai alat secara signifikan.' },
  ],
  ui: {
    labelMaterial: 'Material benda kerja',
    matSteel: 'Baja Lunak',
    matInox: 'Stainless Steel',
    matAlu: 'Aluminium',
    matBrass: 'Kuningan',
    matCastIron: 'Besi Tuang',
    matWood: 'Kayu',
    matPlastic: 'Plastik',
    coolSteel: 'Cairan Pendingin atau Oli',
    coolInox: 'Oli Potong EP',
    coolAlu: 'Alkohol / Parafin',
    coolBrass: 'Kering / Udara',
    coolCastIron: 'Kering',
    coolWood: 'Hanya Aspirasi',
    coolPlastic: 'Semburan Udara',
    labelTool: 'Jenis Alat',
    typeHss: 'Baja (HSS)',
    typeWidia: 'Karbida (Widia)',
    labelDiameter: 'Diameter',
    unitMm: 'mm',
    unitInch: 'inci',
    modeColumnDrill: 'Mode Mesin Bor Meja',
    labelAdvanced: 'Parameter Gerak Makan',
    labelLips: 'Jml. Mata Potong (z)',
    labelFz: 'Gerak makan/gigi (Fz)',
    labelMachine: 'Kecepatan Mesin Anda',
    presetStandard: 'Standar',
    presetCnc: 'CNC',
    addRpmManual: 'Tambah RPM manual...',
    addButton: '+',
    resultRpm: 'Kecepatan Optimal',
    resultCooling: 'Pendinginan',
    resultFeed: 'Gerak Makan Hasil',
    resultClosest: 'Pengaturan disarankan',
    rpmUnit: 'Putaran / Menit',
    recommendedLabel: 'Pengaturan disarankan',
    recommendedHint: 'Atur selektor mesin Anda ke posisi ini',
    statusLimitActive: 'Batas mesin aktif',
    statusOutOfRange: 'Rentang di luar standar komersial',
  },
};
