import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WorkshopFractionConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-pecahan-inci-ke-milimeter';
const title = 'Konverter Pecahan Inci ke Milimeter Bengkel';
const description = 'Ubah pengukuran inci pecahan ke milimeter secara instan. Temukan baut, sekrup, dan kunci sok standar terdekat untuk bengkel Anda. Dirancang untuk tangan kotor dan jari bersarung tangan.';

const faqData = [
  {
    question: 'Mengapa saya perlu mengubah pecahan ke milimeter?',
    answer: 'Sebagian besar alat dan pengencang modern menggunakan sistem metrik, tetapi banyak alat lama dan spesifikasi masih menggunakan inci pecahan. Konverter ini menjembatani celah tersebut, membantu Anda menemukan padanan metrik yang tepat atau ukuran pengencang standar terdekat.',
  },
  {
    question: 'Apa perbedaan antara 1/2 inci dan 12,7 mm?',
    answer: '1/2 inci sama persis dengan 12,7 milimeter (0,5 × 25,4 = 12,7). Alat metrik dan imperial sering kali dapat saling menggantikan pada ukuran standar karena produsen menyelaraskan ukuran pengencang umum di kedua sistem.',
  },
  {
    question: 'Mengapa alat ini menunjukkan "pengencang terdekat"?',
    answer: 'Karena konversi yang tepat sering kali jatuh di antara ukuran pengencang standar. Alat ini menemukan baut atau kunci sok komersial yang paling dekat dengan pengukuran Anda, sehingga Anda dapat menggunakan apa yang tersedia di bengkel Anda.',
  },
  {
    question: 'Apa perbedaan antara presisi perkayuan dan logam?',
    answer: 'Dalam pertukangan kayu, perbedaan 0,5 mm sering kali dapat diabaikan. Dalam pengerjaan logam dan pemesinan, 0,1 mm sangat berarti. Mode presisi memberikan petunjuk tentang rentang toleransi yang dapat diterima untuk material Anda.',
  },
  {
    question: 'Dapatkah saya menggunakan alat ini secara offline?',
    answer: 'Ya. Semua perhitungan dilakukan di browser Anda. Alat ini bekerja sepenuhnya offline setelah pemuatan pertama, cocok untuk digunakan di bengkel tanpa WiFi.',
  },
  {
    question: 'Mengapa alat ini menyertakan riwayat?',
    answer: 'Saat membongkar atau mengerjakan proyek dengan banyak bagian, riwayat memungkinkan Anda melihat kembali pengukuran tanpa memasukkannya lagi, dan membantu Anda membangun daftar suku cadang saat bekerja.',
  },
];

const howToData = [
  {
    name: 'Pilih jenis pengukuran',
    text: 'Pilih "Maju" untuk mengubah pecahan ke milimeter, atau "Balik" untuk menemukan pecahan dari ukuran yang Anda ambil dengan jangka sorong.',
  },
  {
    name: 'Masukkan ukuran',
    text: 'Gunakan input tiga kolom (bulat, pembilang, penyebut) atau ketuk tombol preset cepat. Tombol pengatur memungkinkan Anda menyesuaikan tanpa mengetik.',
  },
  {
    name: 'Tinjau hasil',
    text: 'Hasilnya menunjukkan konversi yang tepat ditambah ukuran baut dan kunci sok standar terdekat. Skala visual memberikan gambaran tentang proporsi.',
  },
  {
    name: 'Simpan ke riwayat',
    text: 'Klik "Simpan ke Riwayat" untuk menyimpan pengukuran untuk referensi nanti. Riwayat tetap ada di browser Anda, bahkan setelah ditutup.',
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

export const content: ToolLocaleContent<WorkshopFractionConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { title: 'FAQ', type: 'faq', schema: faqSchema },
    { title: 'Cara Penggunaan', type: 'howto', schema: howToSchema },
    { title: 'Aplikasi', type: 'app', schema: appSchema },
  ],
  ui: {
    labelFraction: 'Jenis Pengukuran',
    labelWhole: 'Bilangan Bulat',
    labelNumerator: 'Pembilang',
    labelDenominator: 'Penyebut',
    labelInches: 'Inci',
    labelMillimeters: 'Milimeter',
    resultTitle: 'Hasil Konversi',
    resultFraction: 'Pecahan',
    resultInches: 'Inci',
    resultMillimeters: 'Milimeter',
    matchTitle: 'Kesesuaian Pengencang Terdekat',
    matchClosestFastener: 'Ukuran baut atau pengencang standar',
    matchClosestSocket: 'Ukuran kunci sok atau kunci pas standar',
    matchDifference: 'Selisih dari pengukuran Anda',
    matchRecommendation: 'Gunakan ukuran ini jika tersedia',
    reverseSearchTitle: 'Pencarian Balik',
    reverseSearchLabel: 'Ukuran Terukur (mm)',
    reverseSearchButton: 'Cari Pecahan',
    reverseSearchHint: 'Ukur dengan jangka sorong, masukkan nilainya',
    unitMm: 'mm',
    unitInch: 'in',
    modeForward: 'Pecahan → Metrik',
    modeReverse: 'Metrik → Pecahan',
    precisionLabel: 'Mode Presisi',
    precisionCarpentry: 'Pertukangan Kayu',
    precisionMetal: 'Pengerjaan Logam',
    buttonConvert: 'Konversi',
    buttonClear: 'Hapus',
    buttonCopyResult: 'Salin Hasil',
    buttonSaveToHistory: 'Simpan ke Riwayat',
    historyTitle: 'Riwayat',
    historyEmpty: 'Belum ada pengukuran',
    historyRemove: 'Hapus',
    helpText: 'Pilih ukuran atau masukkan pecahan untuk memulai.',
    toolOverline: 'Peralatan Bengkel',
    labelVisualReference: 'Referensi Visual (1 inci = 96px)',
  },
};
