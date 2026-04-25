import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FurnitureFitUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-ruang-furnitur';
const title = 'Kalkulator Ruang untuk Pindahan dan Furnitur';
const description = 'Periksa apakah sofa, lemari, atau meja Anda muat di lift atau melalui pintu. Gunakan teorema Pythagoras 3D untuk menghitung kemiringan.';

const faqData = [
  {
    question: 'Mengapa sofa mungkin tidak muat padahal lebih kecil dari pintu?',
    answer: 'Karena sudut putar. Jika lorong sempit, sofa harus masuk menyamping atau miring. Faktor pembatas bukan hanya lebar pintu, tetapi radius putar yang tersedia di ruangan.',
  },
  {
    question: 'Apa itu diagonal furnitur dan mengapa itu penting?',
    answer: 'Adalah jarak terjauh antara dua sudut yang berlawanan. Sangat penting untuk mengetahui apakah furnitur tinggi dapat ditegakkan di ruangan dengan langit-langit rendah setelah dirakit di lantai.',
  },
  {
    question: 'Bagaimana cara mengukur lift dengan benar?',
    answer: 'Jangan hanya mengukur lantai. Ukur lebar pintu yang terbuka, kedalaman bersih, dan tinggi total. Diagonal dari dasar pintu hingga sudut belakang atas adalah data yang paling penting.',
  },
  {
    question: 'Bagian apa yang harus dilepas terlebih dahulu?',
    answer: 'Kaki sofa, pegangan lemari, dan pintu kulkas seringkali menambah ruang kritis 5 hingga 10 cm yang membuat perbedaan antara furnitur muat atau tertahan di luar.',
  },
];

const howToData = [
  { name: 'Ukur furnitur (Panjang, Lebar, Tinggi)', text: 'Ambil ukuran maksimal objek, termasuk bagian yang menonjol seperti sandaran tangan atau pegangan.' },
  { name: 'Ukur akses kritis', text: 'Ukur celah bebas pintu (dari kusen ke kusen), bagian dalam lift, dan lebar lorong.' },
  { name: 'Masukkan data ke simulator', text: 'Tulis dimensi di alat ini untuk melihat apakah volume furnitur kompatibel dengan ruang akses.' },
  { name: 'Hitung kemiringan', text: 'Jika furnitur sangat tinggi, gunakan diagonal yang dihitung untuk memverifikasi apakah Anda dapat memutarnya di tangga atau di dalam lift.' },
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

export const content: ToolLocaleContent<FurnitureFitUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Sains dalam Pindahan dan Teorema Pythagoras', level: 2 },
    { type: 'paragraph', html: 'Pindahan bukan hanya ujian kekuatan fisik; ini adalah teka-teki geometris yang kompleks. Ruang yang terlihat di sebuah ruangan atau lift seringkali menipu mata manusia, terutama ketika kita mengabaikan dimensi ketiga. Matematika dapat menyelamatkan Anda dari kerugian jutaan rupiah akibat pengembalian barang dan transportasi yang gagal.' },
    { type: 'title', text: 'Trik Diagonal 3D', level: 3 },
    { type: 'card', icon: 'mdi:math-log', title: 'Aturan Emas', html: '<p>Jangan pernah hanya mengukur furniturnya saja. Selalu ukur <strong>titik akses kritis</strong>: lebar kusen pintu (dikurangi ketebalan pintu jika tidak terbuka 180°), titik terendah langit-langit di tangga, dan kedalaman nyata lift dengan pintu tertutup. Rumus <code>d = √(w² + h² + z²)</code> menunjukkan apakah barang muat jika dimiringkan.</p>' },
    { type: 'title', text: 'Masalah Sofa di Lorong', level: 3 },
    { type: 'card', icon: 'mdi:sofa', title: 'Margin Manuver', html: '<p>Kesalahan umum adalah mengasumsikan jika furnitur berukuran 80cm dan celahnya 80cm, maka akan muat. Tidak seperti itu. Tangan pengangkut, elastisitas kain, dan ketidaksempurnaan dinding memerlukan margin minimal <strong>2 hingga 5 cm</strong>. Tanpa margin ini, furnitur akan tergores atau terjepit karena tekanan.</p>' },
    { type: 'title', text: '3 Kesalahan yang Merusak Pindahan', level: 3 },
    { type: 'paragraph', html: 'Meskipun dengan ukuran yang benar, faktor tak kasat mata ini sering menyebabkan bencana: <strong>Lampu Langit-langit</strong> — terlupakan saat pemutaran diagonal; <strong>Radius Putar Furnitur</strong> — furnitur yang kaku tidak bisa ditekuk; <strong>Kemasan</strong> — bubble wrap dan kardus pelindung dapat menambah 1 hingga 3 cm di setiap sisi.' },
  ],
  ui: {
    conTitle: 'Dimensi Ruang',
    conHint: 'Contoh: Lift standar, kusen pintu, atau mobil boks.',
    objTitle: 'Dimensi Furnitur',
    labelWidth: 'Lebar (cm)',
    labelHeight: 'Tinggi (cm)',
    labelDepth: 'Kedalaman (cm)',
    labelLength: 'Panjang (cm)',
    labelMargin: 'Margin Kesalahan (cm)',
    vizLabel: 'Tampilan Ruang Sederhana',
    verdictDefault: 'Apakah muat?',
    verdictHint: 'Masukkan ukuran untuk mengecek kompatibilitas ruang.',
    verdictYes: 'YA, MUAT!',
    verdictNo: 'TIDAK MUAT',
    fitDirect: 'Furnitur muat secara langsung dengan sempurna.',
    fitDiagonal3d: 'Muat jika dimiringkan secara diagonal (Pythagoras 3D).',
    fitDiagonalPlane: 'Muat jika dimiringkan pada salah satu sisi.',
    fitNope: 'Furnitur terlalu besar bahkan untuk masuk secara diagonal.',
    diagLabel: 'Diagonal Maksimal (Pythagoras 3D):',
    objLabel: 'Furnitur',
  },
};
