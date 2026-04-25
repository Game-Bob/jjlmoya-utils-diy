import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PythagoreanRightAngleCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-sudut-siku-siku-pythagoras-aturan-3-4-5';
const title = 'Kalkulator Sudut Siku Siku (Teorema Pythagoras): Aturan 3 4 5 untuk Kesikuan Sempurna';
const description = 'Verifikasi apakah struktur sudah benar-benar siku (90°) menggunakan teorema Pythagoras dan aturan 3-4-5. Alat penting untuk konstruksi, pertukangan, dan proyek DIY.';

const faqData = [
  {
    question: 'Apa itu aturan 3-4-5?',
    answer: 'Aturan 3-4-5 adalah triple Pythagoras sederhana. Jika sebuah segitiga siku-siku memiliki sisi 3, 4, dan 5 unit dalam skala apa pun, sudut di antara sisi yang lebih pendek adalah tepat 90 derajat. Metode yang teruji di lapangan ini telah digunakan dalam konstruksi selama berabad-abad.',
  },
  {
    question: 'Bagaimana cara menggunakan kalkulator ini?',
    answer: 'Masukkan panjang kedua dinding (sisi A dan B) yang membentuk sudut. Kalkulator akan menunjukkan berapa seharusnya panjang diagonal untuk sudut 90 derajat yang sempurna. Kemudian ukur diagonal aktual Anda dan masukkan untuk memverifikasi apakah sudut Anda benar-benar siku.',
  },
  {
    question: 'Bagaimana jika diagonal saya berbeda?',
    answer: 'Jika diagonal terukur Anda berbeda dari ideal, kalkulator menunjukkan penyimpangannya. Hijau berarti sempurna, kuning berarti dapat diterima, merah berarti tidak siku. Ini juga memberi tahu Anda apakah harus membuka atau menutup sudut.',
  },
  {
    question: 'Apakah ini cukup akurat untuk konstruksi?',
    answer: 'Ya. Teorema Pythagoras tepat secara matematis. Dengan pita pengukur, Anda dapat mencapai akurasi tingkat konstruksi tanpa alat khusus atau keterampilan tingkat lanjut.',
  },
  {
    question: 'Dapatkah saya beralih antara inci dan kaki?',
    answer: 'Ya. Pilih inci untuk proyek kecil atau kaki untuk struktur yang lebih besar. Semua nilai dikonversi secara instan tanpa kehilangan data.',
  },
];

const howToData = [
  { name: 'Pilih unit Anda', text: 'Pilih inci untuk pekerjaan mendetail atau kaki untuk struktur yang lebih besar. Anda dapat beralih kapan saja.' },
  { name: 'Ukur kedua sisi', text: 'Ukur panjang kedua dinding (sisi A dan B) yang membentuk sudut yang ingin Anda periksa.' },
  { name: 'Periksa diagonal ideal', text: 'Kalkulator menunjukkan kepada Anda berapa seharusnya diagonal untuk sudut 90 derajat yang sempurna.' },
  { name: 'Ukur diagonal Anda', text: 'Gunakan pita pengukur untuk mengukur diagonal aktual Anda. Masukkan di kolom opsional.' },
  { name: 'Baca statusnya', text: 'Hijau = siku sempurna. Kuning = dapat diterima. Merah = tidak siku. Sesuaikan seperti yang disarankan.' },
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

export const content: ToolLocaleContent<PythagoreanRightAngleCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Teorema Pythagoras dalam Praktik', level: 2 },
    { type: 'paragraph', html: 'Sudut 90 derajat yang sempurna adalah dasar dari konstruksi berkualitas. Dinding harus tegak lurus, fondasi harus siku, dan rangka harus lurus. Teorema Pythagoras menyediakan metode yang dijamin secara matematis: a² + b² = c².' },
    { type: 'title', text: 'Mengapa Aturan 3-4-5 Berhasil', level: 3 },
    { type: 'paragraph', html: 'Aturan 3-4-5 adalah triple Pythagoras yang paling sederhana. Apakah Anda mengukur dalam inci, kaki, atau unit lainnya: sisi 3, 4, dan 5 unit menjamin sudut 90 derajat. Ini telah dibuktikan secara matematis dan diuji dalam konstruksi selama berabad-abad.' },
    { type: 'title', text: 'Presisi Tanpa Alat Khusus', level: 3 },
    { type: 'paragraph', html: 'Berbeda dengan waterpass atau siku tukang yang bisa rusak atau tidak presisi, teorema Pythagoras tidak berubah. Hanya dengan pita pengukur, Anda dapat memverifikasi sudut mana pun pada skala apa pun. Kalkulator ini menghilangkan perhitungan mental dan memastikan akurasi.' },
    { type: 'title', text: 'Dari Teori ke Panduan Praktis', level: 3 },
    { type: 'paragraph', html: 'Kalkulator ini mengubah matematika abstrak menjadi instruksi lapangan praktis. Jika diagonal Anda meleset, ia memberi tahu Anda dengan tepat berapa banyak dan ke arah mana harus menyesuaikan. Ubah teori menjadi hasil nyata di lokasi kerja.' },
  ],
  ui: {
    titleMain: 'Kalkulator Kesikuan (Pythagoras)',
    labelInputData: 'Pengukuran',
    labelUnitSelection: 'Unit',
    btnUnitInches: 'inci',
    btnUnitFeet: 'kaki',
    btnUnitCentimeters: 'sentimeter',
    labelSideA: 'Sisi A',
    labelSideB: 'Sisi B',
    labelMeasuredDiagonal: 'Diagonal terukur (opsional)',
    labelResults: 'Hasil',
    labelIdealDiagonal: 'Diagonal ideal',
    labelDeviation: 'Penyimpangan',
    labelStatus: 'Status',
    labelVerification: 'Verifikasi kesikuan',
    btnClear: 'Bersihkan',
    btnCopyResults: 'Salin hasil',
    labelPresets: 'Preset cepat',
    unitInches: 'in',
    unitFeet: 'ft',
    unitCentimeters: 'cm',
    tooltipOptional: 'Masukkan diagonal terukur Anda untuk memverifikasi sudut 90 derajat',
    tooltipPresets: 'Aturan 3-4-5 dalam berbagai skala',
    statusPerfect: 'Sudut 90 derajat sempurna',
    statusAcceptable: 'Penyimpangan dapat diterima',
    statusWarning: 'Penyimpangan minor',
    statusError: 'Tidak siku',
    statusReady: 'Siap',
    msgIdealCalculated: 'Diagonal ideal dihitung',
    actionOpen: 'Buka',
    actionClose: 'Tutup',
    descLarger: 'lebih besar',
    descSmaller: 'lebih kecil',
    descCorrection: 'Koreksi diperlukan',
  },
};
