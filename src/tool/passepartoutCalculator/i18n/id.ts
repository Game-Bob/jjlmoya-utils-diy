import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PassepartoutCalculatorUI } from '../ui';

const slug = 'kalkulator-passepartout';
const title = 'Kalkulator Passepartout: Margin dengan Koreksi Optik untuk Pembingkaian';
const description = 'Alat untuk menghitung margin passepartout dengan koreksi optik (bottom weighting). Bingkai foto dan karya seni Anda dengan proporsi galeri.';

const faqData = [
  {
    question: 'Apa itu koreksi pusat optik (Bottom Weighting)?',
    answer: 'Ini adalah prinsip desain grafis dan pembingkaian di mana margin bawah dibuat sedikit lebih lebar dari yang lain. Ini mengoreksi ilusi optik yang membuat pusat geometris tampak "turun" saat melihat karya yang digantung.',
  },
  {
    question: 'Bahan apa yang sebaiknya digunakan untuk passepartout?',
    answer: 'Untuk pengawetan artistik, harus menggunakan karton bebas asam atau pH netral (alfa-selulosa atau kapas). Karton murah akan menguning seiring waktu dan dapat merusak karya karena kandungan lignin.',
  },
  {
    question: 'Bagaimana cara memilih warna margin?',
    answer: 'Putih tulang atau krem lembut adalah standar yang tidak mengalihkan perhatian dari karya. Margin gelap dapat menonjolkan warna putih pada foto, sementara margin berwarna harus digunakan dengan hati-hati agar tidak bersaing dengan nada warna karya tersebut.',
  },
  {
    question: 'Berapa lebar margin yang ideal?',
    answer: 'Standar profesional adalah antara 5 hingga 8 cm. Jika margin terlalu sempit, karya tampak "sesak". Jika sangat lebar, dapat memberikan kesan heroik dan minimalis pada karya kecil.',
  },
];

const howToData = [
  { name: 'Ukur karya seni', text: 'Ukur lebar dan tinggi persis dari kertas atau kanvas yang akan dibingkai. Kurangi beberapa milimeter jika Anda ingin passepartout sedikit menutupi gambar.' },
  { name: 'Ukur bagian dalam bingkai', text: 'Ambil dimensi internal bingkai atau tempat karton passepartout akan dipasang.' },
  { name: 'Aktifkan koreksi optik', text: 'Centang opsi di kalkulator kami jika Anda ingin margin bawah secara otomatis lebih besar untuk hasil akhir profesional.' },
  { name: 'Potong karton', text: 'Gunakan ukuran yang dihasilkan untuk memotong lubang (jendela) dan bagian luar karton, sebaiknya dengan cutter 45 derajat untuk hasil miring yang bersih.' },
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

export const content: ToolLocaleContent<PassepartoutCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    { name: 'ISO 9706: Kertas permanen untuk dokumen', url: 'https://www.iso.org/standard/22495.html' },
    { name: 'PPFA: Professional Picture Framers Association', url: 'https://ppfa.com/' },
    { name: 'Fine Art Trade Guild: Standar Pembingkaian', url: 'https://www.fineart.co.uk/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Sains Pembingkaian yang Sempurna', level: 2 },
    { type: 'paragraph', html: '<strong>Passepartout</strong> bukan sekadar karton dekoratif; ia adalah paru-paru yang memungkinkan karya seni Anda bernapas. Kalkulator ini membantu Anda menentukan dimensi yang tepat untuk memotong karton, memastikan karya terpusat dengan sempurna atau seimbang secara optik di dalam bingkai.' },
    { type: 'title', text: 'Mengapa "Pemberatan Bawah" atau Bottom Weighting?', level: 3 },
    { type: 'card', icon: 'mdi:eye-outline', title: 'Ilusi optik pusat geometris', html: '<p>Mata manusia cenderung melihat pusat vertikal geometris seolah-olah sedikit lebih rendah dari yang sebenarnya. Jika Anda membingkai karya tepat di tengah, karya akan tampak "turun".</p><p><strong>Bottom Weighting</strong> mengoreksi ilusi ini dengan menyisakan margin bawah yang sedikit lebih besar, mengangkat karya secara visual agar tampak terpusat dengan sempurna.</p>' },
    { type: 'title', text: 'Bahan Pengawetan untuk Passepartout', level: 3 },
    { type: 'card', icon: 'mdi:palette-swatch-outline', title: 'Karton bebas asam untuk pengawetan', html: '<p>Saat memilih karton, selalu cari istilah seperti <strong>"Acid-Free"</strong> atau <strong>"Museum Quality"</strong>. Karton murah dapat menguning seiring waktu dan melepaskan asam yang akan merusak karya seni Anda secara permanen.</p>' },
  ],
  ui: {
    sectionTitle: 'Dimensi',
    sectionDesc: 'Masukkan ukuran dalam sentimeter.',
    frameSizeTitle: 'Ukuran Bingkai',
    artSizeTitle: 'Ukuran Karya',
    labelWidth: 'Lebar (cm)',
    labelHeight: 'Tinggi (cm)',
    labelBottomWeighting: 'Bottom Weighting',
    descBottomWeighting: 'Terapkan lebih banyak margin bawah untuk keseimbangan visual',
    labelOffset: 'Offset (%)',
    errorMsg: 'Ukuran karya harus lebih kecil dari bingkai.',
    labelTop: 'Atas',
    labelBottom: 'Bawah',
    labelLeft: 'Kiri',
    labelRight: 'Kanan',
    artPlaceholder: 'Karya Anda',
  },
};
