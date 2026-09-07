import { createLadderLocale } from '../locale';

export const content = createLadderLocale({
  language: 'id', slug: 'kalkulator-sudut-dan-jangkauan-tangga', title: 'Kalkulator Sudut dan Jangkauan Tangga', description: 'Hitung jarak kaki tangga, sudut, dan jangkauan dari dua ukuran, lalu bandingkan dengan panduan penempatan 1:4.', faqTitle: 'Pertanyaan yang sering diajukan',
  faq: [
    { question: 'Apa yang dihitung kalkulator ini?', answer: 'Masukkan dua dari tinggi target, panjang tangga, dan jarak kaki tangga untuk mendapatkan ukuran ketiga. Kalkulator juga menampilkan sudut, jangkauan vertikal, dan acuan 1:4 secara terpisah.' },
    { question: 'Mengapa jarak sebenarnya bisa berbeda dari jarak 1:4?', answer: 'Keduanya menjawab hal berbeda. Untuk target 3 m dan tangga 4 m, segitiga tepatnya memiliki jarak kaki 2,65 m. Acuan 1:4 untuk target 3 m adalah 0,75 m dan membutuhkan panjang minimum sekitar 3,09 m.' },
    { question: 'Bagaimana menghitung tangga untuk tinggi 3 m?', answer: 'Masukkan 3 m sebagai tinggi target dan panjang tangga yang tersedia. Hasil geometri menunjukkan jarak kaki dan sudut, sedangkan baris 1:4 menunjukkan acuan jarak 0,75 m.' },
    { question: 'Apa arti tiga mode perhitungan?', answer: 'Tinggi + tangga memeriksa jarak kaki, tinggi + jarak kaki menghitung panjang tangga, dan tangga + jarak kaki menghitung tinggi yang dapat dicapai.' },
    { question: 'Apakah hasil ini menjamin tangga aman?', answer: 'Tidak. Ini hanya pemeriksaan geometri. Periksa label tangga, permukaan, penyangga, beban, akses, dan aturan setempat.' },
  ],
  howTo: [
    { name: 'Pilih dua ukuran', text: 'Pilih tinggi + tangga, tinggi + jarak kaki, atau tangga + jarak kaki.' },
    { name: 'Masukkan nilainya', text: 'Gunakan sistem satuan yang sama pada kedua kolom.' },
    { name: 'Baca geometri', text: 'Periksa jarak kaki, sudut, dan jangkauan yang dibentuk ukuran Anda.' },
    { name: 'Bandingkan dengan 1:4', text: 'Gunakan jarak acuan dan panjang minimum sebelum menentukan posisi tangga.' },
  ],
  seo: [
    { type: 'title', text: 'Yang ditunjukkan kalkulator tangga ini', level: 2 },
    { type: 'paragraph', html: 'Gunakan saat Anda mengetahui dua ukuran dan perlu menentukan apakah tangga mencapai ketinggian tertentu atau berapa jarak kaki yang terbentuk. Kalkulator menghitung segitiga sebenarnya dan menampilkan panduan 1:4 secara terpisah.' },
    { type: 'title', text: 'Geometri dari ukuran yang dimasukkan', level: 3 },
    { type: 'paragraph', html: 'Mode <strong>tinggi + tangga</strong> menghitung jarak kaki dengan <code>√(panjang² − tinggi²)</code>. Mode <strong>tinggi + jarak kaki</strong> menghitung panjang tangga, sedangkan <strong>tangga + jarak kaki</strong> menghitung tinggi yang dapat dicapai.' },
    { type: 'title', text: 'Panduan penempatan 1:4', level: 3 },
    { type: 'paragraph', html: 'Acuan 1:4 menempatkan kaki tangga satu satuan keluar untuk setiap empat satuan tinggi. Untuk 3 m, jaraknya 0,75 m dan panjang minimum segitiganya sekitar 3,09 m.' },
    { type: 'title', text: 'Cara membaca hasil', level: 3 },
    { type: 'list', items: ['Sudut lebih landai berarti kaki tangga lebih jauh dari penyangga.', 'Sudut lebih curam berarti kaki tangga lebih dekat.', 'Tangga yang lebih panjang dari minimum dapat melewati tinggi target.'] },
    { type: 'tip', title: 'Geometri bukan sertifikat keselamatan', html: 'Periksa tangga, permukaan, penyangga, beban, akses, petunjuk produsen, dan aturan setempat sebelum digunakan.' },
  ],
  ui: {
    unitSystemLabel: 'Sistem satuan', unitMetric: 'Metrik', unitImperial: 'Imperial', intro: 'Masukkan dua ukuran. Hasil geometri dan acuan 1:4 ditampilkan terpisah.', solveTitle: 'Pilih dua ukuran', modeHeightLength: 'Tinggi + tangga', modeHeightBase: 'Tinggi + jarak kaki', modeLengthBase: 'Tangga + jarak kaki', modeHeightLengthHint: 'Periksa jarak kaki', modeHeightBaseHint: 'Cari panjang tangga', modeLengthBaseHint: 'Cari jangkauan', fieldHeight: 'Tinggi target', fieldLength: 'Panjang tangga tersedia', fieldBase: 'Jarak kaki dari penyangga', fieldHeightHelp: 'Tinggi yang ingin dicapai', fieldLengthHelp: 'Panjang tangga', fieldBaseHelp: 'Jarak mendatar di tanah', calculatedTitle: 'Hasil perhitungan', calculatedBase: 'Jarak kaki sebenarnya', calculatedBaseHelp: 'dari dua ukuran ini', calculatedLength: 'Panjang tangga', calculatedLengthHelp: 'untuk tinggi dan jarak kaki ini', calculatedHeight: 'Tinggi yang dapat dicapai', calculatedHeightHelp: 'dari tangga dan jarak kaki ini', diagramTitle: 'Geometri hasil', angleTitle: 'Sudut', angleUnit: '°', angleGuide: 'Diagram samping tangga, penyangga, tinggi target, jarak kaki, dan panduan 1:4', reachTitle: 'Jangkauan vertikal', reachHelp: 'tinggi pada penyangga', targetTitle: 'Tinggi target', targetHelp: 'tinggi yang diminta', baseTitle: 'Jarak kaki', baseHelp: 'jarak mendatar di tanah', guideDistanceTitle: 'Jarak 1:4 untuk target', guideDistanceHelp: 'tinggi target ÷ 4', requiredLengthTitle: 'Panjang minimum pada 1:4', requiredLengthHelp: 'untuk tinggi target', verdictReach: 'Target dapat dicapai', verdictShort: 'Target lebih tinggi dari susunan ini', verdictReachHelp: 'Jangkauan vertikal memenuhi atau melebihi tinggi target.', verdictShortHelp: 'Gunakan tangga lebih panjang atau ubah geometri hanya jika susunan akhirnya tetap sesuai.', angleTooFlat: 'Lebih landai dari panduan', angleWithinGuide: 'Dekat dengan panduan 1:4', angleTooSteep: 'Lebih curam dari panduan', ladderLabel: 'tangga', wallLabel: 'penyangga', targetLabel: 'target', baseLabel: 'jarak kaki', groundLabel: 'tanah', guideLabel: 'panduan 1:4', invalidPositive: 'Masukkan dua ukuran positif.', invalidBase: 'Jarak kaki harus lebih kecil dari panjang tangga.', invalidTarget: 'Tinggi target harus lebih rendah dari panjang tangga.', warning: 'Geometri saja. Ikuti label dan petunjuk produsen tangga.', unitLengthMetric: 'm', unitLengthImperial: 'ft',
  },
});
