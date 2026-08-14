import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DrywallCalculatorUI } from '../ui';
import { drywallCalculatorBibliography } from '../bibliography';

const slug = 'kalkulator-gypsum-drywall';
const title = 'Kalkulator Gypsum dan Rangka Hollow Aluminium';
const description = 'Kalkulator kebutuhan material dinding partisi papan gypsum dan rangka hollow. Hitung lembar gypsum, hollow stud, runner, sekrup, kompon, dan pita sambungan secara akurat.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung jumlah papan gypsum untuk dinding partisi?',
    answer: 'Kalikan panjang dinding dengan tinggi ruangan untuk mendapatkan luas dinding. Untuk partisi 2 sisi, kalikan dengan 2. Bagi total luas dengan luas 1 lembar papan (2.88 m2 untuk papan 120x240 cm) lalu tambahkan margin sisa pemotongan sebesar 10%.',
  },
  {
    question: 'Kapan harus menggunakan jarak rangka 40 cm atau 60 cm?',
    answer: 'Jarak rangka 60 cm digunakan untuk dinding interior kering standar. Gunakan jarak 40 cm untuk dinding yang dipasang keramik, area lembap (kamarmandi dan dapur), dinding kedap suara, atau jika tinggi dinding melebihi 3 meter.',
  },
  {
    question: 'Jenis papan gypsum apa yang sesuai untuk tiap ruangan?',
    answer: 'Gunakan Papan Standar Putih (Tipe A) untuk kamar tidur dan ruang tamu; Papan Tahan Kelembapan Hijau (Tipe H1) untuk kamar mandi dan dapur; Papan Tahan Api Merah Muda (Tipe F) untuk area sekitar cerobong dan dapur; serta Papan Akustik Biru untuk peredam suara.',
  },
  {
    question: 'Berapa banyak sekrup yang dibutuhkan per lembar papan gypsum?',
    answer: 'Gunakan sekitar 30 sekrup gypsum (3.5x25 mm) per lembar papan 120x240 cm. Pasang sekrup dengan jarak 25 cm di tepi perimetris dan 30 cm pada rangka hollow tengah.',
  },
  {
    question: 'Mengapa pita penyekat akustik wajib dipasang di bawah runner?',
    answer: 'Pita penyekat berbahan busa polietilena meredam getaran mekanis antara rangka lantai/plafon dan struktur bangunan, mencegah kebocoran suara dan getaran.',
  },
];

const howToData = [
  { name: 'Masukkan Dimensi Dinding', text: 'Tentukan panjang dan tinggi dinding dalam satuan meter atau kaki.' },
  { name: 'Pilih Jarak Rangka dan Lapis Gypsum', text: 'Pilih jarak rangka 40 cm atau 60 cm, serta opsi lapis tunggal atau ganda.' },
  { name: 'Tinjau Rincian Material & Diagram CAD', text: 'Lihat daftar kebutuhan material lengkap serta visualisasi struktur rangka.' },
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

export const content: ToolLocaleContent<DrywallCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Sering Diajukan',
  faq: faqData,
  bibliography: drywallCalculatorBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Prinsip Rekayasa Struktur Dinding Partisi Gypsum',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pemasangan dinding partisi ringan papan gypsum memerlukan perhitungan matang pada rangka hollow baja galvanis (stud dan runner) serta pembagian sambungan papan. Penataan rangka yang tepat mencegah lendutan dan retak pada sambungan.',
    },
    {
      type: 'title',
      text: 'Aturan Jarak Rangka: 40 cm vs 60 cm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jarak <strong>60 cm</strong> adalah standar ideal untuk lembar papan lebar 120 cm. Jarak <strong>40 cm</strong> wajib diterapkan jika permukaan dinding dipasang keramik tebal atau tinggi dinding lebih dari 3 meter.',
    },
    {
      type: 'card',
      icon: 'mdi:shield-check-outline',
      title: 'Pola Sambungan Silang dan Pemasangan Sekrup',
      html: '<p>Hindari sejajarnya sambungan papan antar sisi. Berikan jarak selang-seling minimal 40 cm antar sambungan vertikal untuk mencegah retak. Kencangkan sekrup 3.5x25 mm dengan jarak <strong>25 cm di tepi</strong> dan <strong>30 cm di bagian tengah</strong>.</p>',
    },
    {
      type: 'title',
      text: 'Toleransi Sampah Pemotongan dan Pengolahan Kompon',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selalu tambahkan margin <strong>10% faktor sisa</strong> untuk mengantisipasi potongan sekitar jendela dan pintu. Pengolahan sambungan membutuhkan sekitar 0.8 kg kompon per meter persegi permukaan papan.',
    },
  ],
  ui: {
    unitSystemLabel: 'Sistem Pengukuran',
    unitMetric: 'Metrik (m, cm, kg)',
    unitImperial: 'Imperial (ft, in, lb)',

    paramLengthLabel: 'Panjang Dinding',
    paramHeightLabel: 'Tinggi Dinding',
    paramSpacingLabel: 'Jarak Rangka',
    paramSpacing40Metric: '40 cm (Beban Berat)',
    paramSpacing60Metric: '60 cm (Standar)',
    paramSpacing40Imperial: '16 in (Beban Berat)',
    paramSpacing60Imperial: '24 in (Standar)',
    paramLayersLabel: 'Jumlah Lapis Papan',
    paramSingleLayer: 'Satu Lapis',
    paramDoubleLayer: 'Dua Lapis',
    paramSidesLabel: 'Sisi Partisi',
    paramDoubleSided: '2 Sisi (Dinding Partisi)',
    paramSingleSided: '1 Sisi (Pelapis Dinding)',
    paramBoardTypeLabel: 'Jenis Papan Gypsum',
    boardTypeStandard: 'Standar (Tipe A)',
    boardTypeMoisture: 'Tahan Lembap (Tipe H1)',
    boardTypeFire: 'Tahan Api (Tipe F)',
    boardTypeAcoustic: 'Akustik (Tipe A)',
    paramWasteLabel: 'Margin Pemotongan',

    summaryWallArea: 'Luas Bersih Dinding',
    summaryBoardArea: 'Total Luas Papan',

    resBoardsLabel: 'Papan Gypsum',
    resBoardsUnit: 'lembar',
    resStudsLabel: 'Rangka Vertikal (Stud)',
    resStudsUnit: 'batang',
    resTracksLabel: 'Rangka Horisontal (Runner)',
    resTracksUnit: 'batang',
    resDrywallScrewsLabel: 'Sekrup Gypsum',
    resDrywallScrewsUnit: 'buah',
    resFramingScrewsLabel: 'Sekrup Rangka',
    resFramingScrewsUnit: 'buah',
    resJointTapeLabel: 'Pita Sambungan',
    resJointTapeUnit: 'panjang',
    resJointCompoundLabel: 'Kompon Gypsum',
    resJointCompoundUnit: 'berat',
    resAcousticBandLabel: 'Pita Penyekat Akustik',
    resAcousticBandUnit: 'panjang',

    diagramWallTitle: 'Elevasi Teknik CAD',
    diagramStudLegend: 'Profil Stud C',
    diagramTrackLegend: 'Profil Runner U',
    diagramBoardLegend: 'Pola Sambungan Papan',
    diagramModeStructure: 'Rangka Utama',
    diagramModeBoard: 'Tata Layak Papan',
  },
};
