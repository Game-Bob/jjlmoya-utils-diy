import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDropCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-jatuh-tegangan';
const title = 'Kalkulator Jatuh Tegangan dan Ukuran Kabel';
const description = 'Alat teknis untuk menghindari kabel terbakar. Hitung ukuran kabel yang diperlukan untuk instalasi 12V, 24V, dan 230V berdasarkan jarak dan daya.';

const faqData = [
  {
    question: 'Apa itu jatuh tegangan (voltage drop) dan mengapa itu penting?',
    answer: 'Ini adalah kehilangan tegangan yang terjadi saat listrik mengalir melalui kabel. Jika kabel terlalu tipis atau terlalu panjang, Anda kehilangan tegangan. Hasilnya: lampu redup, motor tidak mau menyala, atau kabel menjadi panas secara berbahaya.',
  },
  {
    question: 'Berapa ukuran kabel yang saya butuhkan untuk 12V pada jarak 10 meter?',
    answer: 'Tergantung pada daya. Untuk 12V dan 10A pada jarak 10m, Anda butuh minimal 2,5mm². Untuk 20A, Anda butuh 6mm². Pada tegangan rendah (12V/24V), jatuh tegangan jauh lebih kritis daripada pada 230V.',
  },
  {
    question: 'Dapatkah saya menggunakan kabel 1,5mm² untuk seluruh instalasi saya?',
    answer: 'Tidak. 1,5mm² hanya untuk sirkuit pencahayaan (maks 10A). Untuk stopkontak Anda butuh 2,5mm². Untuk dapur atau mesin cuci Anda butuh 4mm² atau 6mm². Menggunakan kabel yang terlalu tipis sangat berbahaya dan dapat menyebabkan kebakaran.',
  },
  {
    question: 'Berapa jatuh tegangan maksimum yang diperbolehkan?',
    answer: 'Dalam instalasi domestik (230V): maks 3% untuk pencahayaan, 5% untuk penggunaan lain. Pada 12V/24V (solar, camper): tidak boleh lebih dari 3% total. Jatuh tegangan yang lebih besar berarti kehilangan efisiensi dan risiko panas berlebih.',
  },
];

const howToData = [
  { name: 'Tentukan tegangan sistem', text: 'Pilih apakah instalasi Anda adalah 12V, 24V (solar/camper) atau 230V (domestik).' },
  { name: 'Masukkan arus listrik', text: 'Tuliskan Ampere (A) atau Watt (W) yang akan dikonsumsi perangkat di ujung kabel.' },
  { name: 'Ukur jarak kabel', text: 'Masukkan panjang kabel (satu arah) dalam meter dari sumber energi ke penerima.' },
  { name: 'Pilih material konduktor', text: 'Pilih tembaga (standar) atau aluminium untuk mendapatkan perhitungan resistivitas yang akurat.' },
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

export const content: ToolLocaleContent<VoltageDropCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Panduan Lengkap Jatuh Tegangan', level: 2 },
    { type: 'paragraph', html: 'Jika Anda sedang membangun sistem campervan, merancang instalasi solar, atau menarik kabel untuk taman, ada musuh tak terlihat yang bisa merusak proyek Anda: <strong>jatuh tegangan</strong>. Ini bukan sekadar masalah teknis; ini perbedaan antara kulkas yang dingin dan yang mati, atau antara instalasi aman dan risiko kebakaran.' },
    { type: 'title', text: 'Rumus Jatuh Tegangan', level: 3 },
    { type: 'card', icon: 'mdi:function-variant', title: 'Perhitungan Akurat dengan Hukum Ohm', html: '<p>Rumusnya adalah <strong>ΔV = (2 × L × I × ρ) / S</strong>, di mana L adalah panjang kabel satu arah, I adalah arus, ρ adalah resistivitas (0,0178 untuk tembaga), dan S adalah luas penampang kabel.</p>' },
  ],
  ui: {
    heroDropLabel: 'Total Jatuh Tegangan',
    heroVoltsUnit: 'Volt',
    heroPctLoss: '% rugi',
    heroEffLabel: 'Efisiensi',
    statusExcellent: 'Sangat Baik',
    statusAcceptable: 'Dapat Diterima',
    statusCritical: 'Kritis',
    fieldVoltage: 'Tegangan',
    fieldMaterial: 'Material',
    materialCopper: 'Tembaga',
    materialAlum: 'Alum.',
    fieldLoad: 'Beban',
    modeW: 'W',
    modeA: 'A',
    unitWatts: 'Watt',
    unitAmps: 'Ampere',
    fieldLength: 'Panjang Kabel (Satu Arah)',
    unitMeters: 'meter',
    fieldSection: 'Ukuran Kabel',
    sectionInfo: 'Disarankan',
  },
};
