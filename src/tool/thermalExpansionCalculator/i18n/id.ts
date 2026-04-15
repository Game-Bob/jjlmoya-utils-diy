import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ThermalExpansionCalculatorUI } from '../ui';

const slug = 'kalkulator-pemuaian-panas';
const title = 'Kalkulator Pemuaian Panas Balok dan Struktur';
const description = 'Hitung seberapa besar pemuaian balok atau struktur akibat perubahan suhu. Alat teknis untuk insinyur dan DIY. Termasuk koefisien ekspansi per material.';

const faqData = [
  {
    question: 'Apa itu koefisien pemuaian linier?',
    answer: 'Ini adalah properti fisik material yang menunjukkan seberapa besar material memuai untuk setiap derajat Celsius kenaikan suhunya. Diukur dalam 1/°C atau °C⁻¹.',
  },
  {
    question: 'Mengapa penting menghitung pemuaian pada balok?',
    answer: 'Jika balok tidak memiliki ruang untuk memuai (sambungan ekspansi), hal itu akan menghasilkan tegangan internal masif yang dapat merusak struktur, meretakkan beton, atau bahkan menyebabkan keruntuhan.',
  },
  {
    question: 'Apakah kayu memuai secara merata ke segala arah?',
    answer: 'Tidak. Kayu adalah material anisotropik. Pemuaiannya sangat sedikit di sepanjang serat, tetapi signifikan pada arah transversal (lebar dan tebal).',
  },
  {
    question: 'Suhu apa yang harus saya gunakan sebagai Suhu Awal?',
    answer: 'Anda harus menggunakan suhu pada saat pemasangan atau konstruksi. Suhu Akhir haruslah suhu maksimum yang diperkirakan selama masa pakai struktur tersebut.',
  },
];

const howToData = [
  { name: 'Ukur panjang asli', text: 'Masukkan panjang balok atau material dalam satuan meter.' },
  { name: 'Pilih material', text: 'Pilih antara logam, material konstruksi, atau kayu untuk menerapkan koefisien spesifiknya.' },
  { name: 'Tentukan rentang termal', text: 'Tentukan suhu awal dan suhu maksimum yang diperkirakan untuk menghitung perbedaan termal.' },
  { name: 'Analisis pemuaian', text: 'Perhatikan total pemuaian dalam milimeter dan panjang akhir yang dihasilkan untuk merencanakan sambungan yang sesuai.' },
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

export const content: ToolLocaleContent<ThermalExpansionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    { name: 'Koefisien Ekspansi Termal — Engineering Toolbox', url: 'https://www.engineeringtoolbox.com/linear-expansion-coefficients-d_95.html' },
    { name: 'Ekspansi Termal dan Suhu — Britannica', url: 'https://www.britannica.com/science/thermal-expansion' },
    { name: 'Ekspansi Termal Linier — Physics Hypertextbook', url: 'https://physics.info/expansion/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Apa itu Pemuaian Panas dan Mengapa Hal itu Memengaruhi Struktur', level: 2 },
    { type: 'paragraph', html: '<strong>Pemuaian panas</strong> adalah proses fisik di mana suatu material bertambah panjang sebagai respons terhadap kenaikan suhunya. Pada tingkat mikroskopis, partikel bergetar dengan lebih banyak energi dan membutuhkan ruang rata-rata yang lebih besar antar partikel. Dalam konstruksi, fenomena ini adalah kekuatan yang dapat merusak beton, merusak balok baja, dan membengkokkan rel kereta api.' },
    { type: 'title', text: 'Rumus Pemuaian Linier', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Rumus Pemuaian Linier', html: '<p>Ekspansi dari suatu elemen struktural dihitung dengan: <code>ΔL = L₀ · α · ΔT</code>. Di mana <strong>ΔL</strong> adalah total pemuaian, <strong>L₀</strong> adalah panjang asli, <strong>α</strong> adalah koefisien ekspansi material (dalam °C⁻¹), dan <strong>ΔT</strong> adalah perbedaan suhu.</p>' },
  ],
  ui: {
    configTitle: 'Konfigurasi',
    labelMaterial: 'Material',
    groupMetals: 'Logam',
    groupConstruction: 'Konstruksi',
    groupWood: 'Kayu dan Polimer',
    matSteel: 'Baja (12 ppm/°C)',
    matAluminum: 'Aluminium (23 ppm/°C)',
    matCopper: 'Tembaga (17 ppm/°C)',
    matIron: 'Besi (11 ppm/°C)',
    matConcrete: 'Beton (12 ppm/°C)',
    matBrick: 'Bata (9 ppm/°C)',
    matGlass: 'Kaca (9 ppm/°C)',
    matWoodFiber: 'Serat Kayu (5 ppm/°C)',
    matWoodTransversal: 'Kayu Transversal (40 ppm/°C)',
    matPvc: 'PVC (30 ppm/°C)',
    catMetals: 'Metalurgi',
    catConstruction: 'Konstruksi',
    catWood: 'Kayu dan Polimer',
    labelLength: 'Panjang Awal (m)',
    labelTempStart: 'T. Awal (°C)',
    labelTempEnd: 'T. Maksimum (°C)',
    deltaLabel: 'Perbedaan Termal (ΔT)',
    vizTitle: 'Simulasi Ekspansi',
    resultGrowthLabel: 'Total Pemuaian (ΔL)',
    resultFinalLabel: 'Panjang Akhir',
    unitMm: 'MM',
    unitM: 'M',
    riskTitle: 'Risiko Tekukan',
    jointTitle: 'Sambungan Minimum',
    riskLow: 'Rendah',
    riskModerate: 'Moderat',
    riskCritical: 'Kritis',
    tipDefault: 'Konsultasikan manual pabrikan untuk koefisien eksak paduan khusus.',
    tipSteel: 'Baja dan beton memiliki koefisien yang hampir identik, memungkinkan beton bertulang bekerja tanpa retak internal.',
    tipAluminum: 'Aluminium memuai hampir dua kali lipat dari baja. Pada penutup logam, ini mengharuskan penggunaan sealant elastis.',
    tipGlass: 'Kaca dan baja memuai hampir sama, yang merupakan kunci desain fasad kaca besar.',
    tipConcrete: 'Koefisien beton sangat mirip dengan baja, alasan mengapa struktur campuran sangat stabil.',
    tipWood: 'Kayu memuai sedikit karena panas, tetapi banyak karena kelembapan. Serat longitudinal sangat stabil.',
    tipPvc: 'PVC memiliki ekspansi yang sangat tinggi. Memerlukan sambungan khusus untuk menyerap gerakan tanpa pecah.',
  },
};
