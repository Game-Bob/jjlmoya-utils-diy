import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ExcavationCalculatorUI } from '../ui';
import { excavationVolumeCalculatorBibliography } from '../bibliography';

const slug = 'kalkulator-volume-galian-pengembangan-tanah';
const title = 'Kalkulator Volume Galian dan Estimasi Pengembangan Tanah';
const description = 'Hitung volume tanah asli (bank volume) dan estimasi volume gembur setelah digali dengan rentang pengembangan untuk pasir, tanah subur, tanah liat, dan kerikil.';

const faq = [
  {
    question: 'Apa perbedaan antara volume bank (tanah padat) dan volume gembur?',
    answer: 'Volume bank adalah volume tanah dalam kondisi asli sebelum digali, dihitung dari panjang, lebar, dan kedalaman. Volume gembur adalah perkiraan ruang yang dibutuhkan setelah tanah digali termasuk faktor pengembangan.',
  },
  {
    question: 'Bagaimana cara menghitung volume galian tanah?',
    answer: 'Kalikan panjang galian dengan lebar dan kedalaman. Sebagai contoh, galian 4 meter x 3 meter x 0,5 meter memiliki volume bank 6 meter kubik sebelum memperhitungkan faktor pengembangan tanah.',
  },
  {
    question: 'Mengapa tanah liat memiliki rentang pengembangan lebih lebar?',
    answer: 'Sifat tanah liat sangat dipengaruhi oleh kadar air, kepadatan, dan jenis mineralnya. Kalkulator ini menerapkan rentang perencanaan yang lebih luas karena perubahan volumenya sangat bervariasi.',
  },
  {
    question: 'Apakah kalkulator ini dapat menggantikan uji geoteknik?',
    answer: 'Tidak. Hasil ini adalah estimasi untuk perencanaan pengangkutan dan penampungan sementara. Hubungi ahli geoteknik untuk pengujian tanah resmi pada struktur pondasi atau dinding penahan tanah.',
  },
];

const howTo = [
  { name: 'Masukkan dimensi galian', text: 'Masukkan panjang, lebar, dan kedalaman galian. Pilih sistem satuan metrik atau imperial sesuai kebutuhan.' },
  { name: 'Pilih jenis tanah yang paling sesuai', text: 'Pilih pasir, tanah subur, tanah liat, atau kerikil untuk menerapkan perkiraan persentase pengembangan tanah.' },
  { name: 'Rencanakan pengangkutan dan pembuangan', text: 'Gunakan volume bank untuk pengukuran galian dan volume gembur untuk menentukan kapasitas truk atau wadah penampung.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<ExcavationCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq,
  bibliographyTitle: 'Sumber dan Catatan Teknis',
  bibliography: excavationVolumeCalculatorBibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dua Angka Volume untuk Dua Kebutuhan Proyek', level: 2 },
    { type: 'paragraph', html: '<strong>Volume bank</strong> adalah geometri lubang galian pada kondisi tanah asli: panjang dikali lebar dan kedalaman. <strong>Volume gembur</strong> adalah perkiraan ruang yang dibutuhkan setelah tanah dibongkar. Memisahkan kedua angka ini mencegah kesalahan perhitungan jumlah armada truk pembuang.' },
    { type: 'title', text: 'Gunakan Rentang Gembur untuk Perencanaan Logistik', level: 3 },
    { type: 'paragraph', html: 'Pilih jenis tanah yang sesuai dan bandingkan estimasi volume gembur batas bawah dan batas atas dengan kapasitas dump truck atau penampungan sementara di lapangan.' },
    { type: 'tip', title: 'Faktor pengembangan tanah bukan pengganti uji laboratorium', html: 'Kadar air dan kepadatan tanah asli dapat mengubah persentase pengembangan. Untuk perencanaan pondasi utama, diperlukan hasil uji laboratorium geoteknik.' },
    { type: 'title', text: 'Konfirmasi Asumsi Sebelum Memesan Armada', level: 3 },
    { type: 'paragraph', html: 'Jika kondisi tanah bervariasi, lakukan simulasi dengan dua jenis profil tanah dan gunakan estimasi volume yang lebih besar untuk armada pengangkut.' },
  ],
  ui: {
    unitSystemLabel: 'Sistem Pengukuran',
    unitMetric: 'Metrik',
    unitImperial: 'Imperial',
    onboarding: 'Masukkan dimensi galian, pilih jenis tanah, dan gunakan kedua hasil volume untuk perencanaan pekerjaan tanah dan logistik.',
    dimensionLabel: 'Dimensi Galian',
    lengthLabel: 'Panjang',
    widthLabel: 'Lebar',
    depthLabel: 'Kedalaman',
    soilLabel: 'Profil Tanah',
    soilSand: 'Pasir',
    soilTopsoil: 'Tanah Subur',
    soilClay: 'Tanah Liat',
    soilGravel: 'Kerikil',
    soilSandBand: 'Pengembangan 10 hingga 15%',
    soilTopsoilBand: 'Pengembangan 15 hingga 25%',
    soilClayBand: 'Pengembangan 25 hingga 40%',
    soilGravelBand: 'Pengembangan 15 hingga 25%',
    bankVolumeLabel: 'Volume Bank (Asli)',
    bankVolumeHelp: 'Kondisi tanah asli sebelum digali',
    looseVolumeLabel: 'Volume Gembur',
    looseVolumeHelp: 'Rentang perkiraan setelah digali',
    expansionLabel: 'Faktor Pengembangan Tanah',
    expansionHelp: 'Persentase yang diterapkan pada profil',
    sceneTitle: 'Dari tanah asli ke lokasi penampungan',
    sceneBank: 'di dalam tanah',
    sceneLoose: 'material gembur',
    sceneGround: 'garis permukaan',
    sceneCut: 'lubang hasil galian',
    interpretationTitle: 'Cara Membaca Hasil.',
    interpretationText: 'Angka pertama menunjukkan ukuran lubang galian. Rentang volume gembur menunjukkan perkiraan ruang tanah hasil galian.',
    warning: 'Hanya untuk estimasi perencanaan logistik. Kadar air dan metode penggalian dapat mengubah volume gembur nyata. Bukan pengganti uji geoteknik.',
    unitLengthMetric: 'm',
    unitLengthImperial: 'ft',
    unitVolumeMetric: 'm³',
    unitVolumeImperial: 'ft³',
    soilStatusLow: 'pengembangan rendah',
    soilStatusMedium: 'pengembangan sedang',
    soilStatusHigh: 'pengembangan tinggi',
    soilStatusLabel: 'Tingkat Pengembangan',
  },
};
