import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = 'https://joki-lelang.axiomsystemsco.com';
const wa = 'https://wa.me/6285199256640';
const updated = '2026-08-10';

const officialSources = {
  faq: 'https://www.djkn.kemenkeu.go.id/faq/faq_detail/pelayanan-lelang/3',
  join: 'https://www.djkn.kemenkeu.go.id/kpknl-purwakarta/baca-artikel/16006/Cara-Ikut-Lelang-di-lelanggoid.html',
  register: 'https://www.djkn.kemenkeu.go.id/kanwil-papuamaluku/baca-artikel/18470/Cara-Mendaftar-dan-Mengikuti-Lelang.html',
  tips: 'https://www.djkn.kemenkeu.go.id/artikel/baca/14929/10-TIP-JITU-DALAM-MEMBELI-BARANG-SITAAN-BANK.html',
  ujl: 'https://www.djkn.kemenkeu.go.id/kpknl-banjarmasin/baca-artikel/17210/Pengembalian-Uang-Jaminan-Bagi-Peserta-Lelang-yang-dinyatakan-Kalah.html',
  regulation: 'https://www.djkn.kemenkeu.go.id/peraturan/baca/486/Peraturan-Menteri-Keuangan-Nomor-122-Tahun-2023.html'
};

const pages = [
  {
    file: 'jasa-joki-lelang/index.html',
    path: '/jasa-joki-lelang/',
    type: 'service',
    eyebrow: 'LAYANAN UTAMA',
    title: 'Jasa Pendamping Lelang Online lelang.go.id',
    description: 'Pendampingan persiapan budget dan eksekusi penawaran lelang.go.id dari Axiom Lelang, layanan independen Axiom Systems.',
    answer: 'Axiom Lelang adalah layanan pendampingan lelang online dari Axiom Systems. Kami membantu klien meninjau kesiapan lot, menetapkan limit anggaran, dan menjalankan penawaran sesuai instruksi melalui mekanisme resmi lelang.go.id. Layanan ini tidak menjamin kemenangan dan tidak menggantikan pemeriksaan legal maupun kondisi objek.',
    sections: [
      ['Apa yang dikerjakan pendamping lelang?', `<p>Pendamping lelang membantu peserta menjaga proses tetap terencana ketika mengikuti lelang online. Ruang lingkup Axiom Lelang berfokus pada persiapan eksekusi, disiplin limit anggaran, pemantauan sesi, dan penyampaian hasil setelah sesi berakhir.</p><div class="content-card-grid"><div class="content-card"><h3>Sebelum lelang</h3><p>Memeriksa tautan lot, waktu pelaksanaan, jenis penawaran, dan batas anggaran yang diberikan klien.</p></div><div class="content-card"><h3>Saat lelang</h3><p>Menjalankan penawaran berdasarkan instruksi dan tidak melampaui limit yang telah disepakati.</p></div><div class="content-card"><h3>Setelah lelang</h3><p>Menyampaikan status dan catatan penawaran yang tersedia dari sesi resmi.</p></div><div class="content-card"><h3>Tetap tanggung jawab peserta</h3><p>Verifikasi dokumen, kondisi aset, pajak, biaya, dan keputusan nilai ekonomis lot.</p></div></div>`],
      ['Kapan layanan ini relevan?', `<ul><li>Anda sudah memiliki akun dan lot target di lelang.go.id.</li><li>Anda ingin menetapkan batas maksimal sebelum sesi dimulai.</li><li>Anda tidak dapat memantau sesi secara penuh.</li><li>Anda membutuhkan pendampingan teknis tanpa janji pasti menang.</li></ul><p>Jika Anda belum memahami mekanisme dasarnya, mulai dari <a href="/panduan/cara-ikut-lelang-online">panduan cara ikut lelang online</a> dan <a href="/cara-kerja">alur kerja Axiom Lelang</a>.</p>`],
      ['Batas layanan yang perlu dipahami', `<div class="notice-card"><p><strong>Axiom Systems bukan bagian dari DJKN atau KPKNL.</strong> Kami tidak menentukan pemenang, tidak mengubah mekanisme resmi, dan tidak dapat menjamin penawaran berhasil. Harga akhir tetap dipengaruhi penawaran peserta lain dan ketentuan pada pengumuman lot.</p></div>`]
    ],
    related: [['/cara-kerja','Pelajari cara kerja'], ['/biaya','Lihat penjelasan biaya'], ['/faq','Baca FAQ layanan']],
    cta: 'Kirim link lot lelang Anda',
    waText: 'Halo Axiom Lelang, saya ingin mengirim link lot untuk konsultasi pendampingan lelang.'
  },
  {
    file: 'cara-kerja/index.html', path: '/cara-kerja/', type: 'webpage', eyebrow: 'PROSES LAYANAN',
    title: 'Cara Kerja Pendampingan Lelang Axiom Lelang',
    description: 'Pelajari alur konsultasi lot, penetapan budget, persiapan sesi, eksekusi penawaran, dan laporan Axiom Lelang.',
    answer: 'Pendampingan Axiom Lelang berjalan dalam empat tahap: konsultasi lot, penetapan limit anggaran, persiapan dan pelaksanaan penawaran, lalu penyampaian hasil sesi. Klien tetap memegang keputusan atas lot dan budget, sedangkan pelaksanaan mengikuti mekanisme yang tersedia pada lelang.go.id.',
    sections: [
      ['Empat tahap pendampingan', `<ol><li><strong>Kirim lot.</strong> Klien mengirim tautan lot dan waktu pelaksanaan.</li><li><strong>Tetapkan limit.</strong> Klien menentukan batas maksimal berdasarkan perhitungannya sendiri.</li><li><strong>Konfirmasi eksekusi.</strong> Ruang lingkup, biaya, dan instruksi dikonfirmasi sebelum sesi.</li><li><strong>Terima hasil.</strong> Status sesi dan informasi penawaran disampaikan setelah lelang berakhir.</li></ol>`],
      ['Informasi yang perlu disiapkan', `<ul><li>Tautan lot pada lelang.go.id.</li><li>Jadwal dan jenis penawaran yang tercantum.</li><li>Limit anggaran maksimal.</li><li>Status verifikasi peserta dan uang jaminan.</li><li>Instruksi yang telah disepakati sebelum sesi.</li></ul>`],
      ['Apa yang tidak dilakukan?', `<div class="notice-card"><p><strong>Tidak ada pengondisian pemenang.</strong> Axiom Lelang tidak memiliki kewenangan atas sistem, peserta lain, pejabat lelang, atau hasil penetapan pembeli. Kami juga tidak memberikan penilaian hukum atas dokumen dan objek lelang.</p></div>`]
    ], related: [['/jasa-joki-lelang','Ruang lingkup layanan'], ['/biaya','Cara penentuan biaya'], ['/kontak','Hubungi Axiom Systems']],
    cta: 'Konsultasikan alur untuk lot Anda', waText: 'Halo Axiom Lelang, saya ingin konsultasi alur pendampingan untuk lot lelang saya.'
  },
  {
    file: 'biaya/index.html', path: '/biaya/', type: 'webpage', eyebrow: 'BIAYA LAYANAN',
    title: 'Biaya Pendampingan Lelang Axiom Lelang',
    description: 'Penjelasan komponen dan cara memperoleh estimasi biaya pendampingan lelang online dari Axiom Lelang.',
    answer: 'Biaya pendampingan Axiom Lelang diberikan setelah tim meninjau tautan lot, jadwal, jenis penawaran, dan ruang lingkup bantuan yang diperlukan. Estimasi serta ketentuan pembayaran dikonfirmasi sebelum layanan dimulai. Biaya layanan Axiom Systems terpisah dari uang jaminan, pelunasan, pajak, dan biaya resmi lelang.',
    sections: [
      ['Apa yang memengaruhi biaya?', `<table class="content-table"><thead><tr><th>Komponen</th><th>Pengaruh</th></tr></thead><tbody><tr><td data-label="Komponen">Jenis dan jadwal lot</td><td data-label="Pengaruh">Menentukan persiapan serta durasi pemantauan.</td></tr><tr><td data-label="Komponen">Metode penawaran</td><td data-label="Pengaruh">Open bidding dan closed bidding memiliki alur berbeda.</td></tr><tr><td data-label="Komponen">Ruang lingkup</td><td data-label="Pengaruh">Konsultasi saja berbeda dari pendampingan sampai sesi selesai.</td></tr><tr><td data-label="Komponen">Kompleksitas instruksi</td><td data-label="Pengaruh">Instruksi harus dapat dikonfirmasi dan dijalankan secara jelas.</td></tr></tbody></table>`],
      ['Biaya yang bukan bagian dari layanan', `<ul><li>Uang Jaminan Penawaran Lelang.</li><li>Pelunasan pokok lelang dan bea lelang.</li><li>Pajak, biaya balik nama, pemeriksaan aset, dan biaya bank.</li><li>Biaya lain yang tercantum pada pengumuman atau ketentuan lot.</li></ul>`],
      ['Transparansi sebelum mulai', `<p>Klien menerima penjelasan ruang lingkup dan biaya sebelum memberikan persetujuan. Tidak ada biaya yang boleh diasumsikan sebagai pembayaran kepada DJKN/KPKNL atau sebagai jaminan kemenangan.</p>`]
    ], related: [['/jasa-joki-lelang','Lihat layanan'], ['/cara-kerja','Lihat alur kerja'], ['/faq','Pertanyaan umum biaya']],
    cta: 'Tanya biaya untuk lot Anda', waText: 'Halo Axiom Lelang, saya ingin menanyakan estimasi biaya untuk lot berikut.'
  },
  {
    file: 'tentang/index.html', path: '/tentang/', type: 'about', eyebrow: 'TENTANG KAMI',
    title: 'Tentang Axiom Systems dan Axiom Lelang',
    description: 'Kenali Axiom Systems, penyedia layanan Axiom Lelang untuk pendampingan dan eksekusi penawaran lelang online.',
    answer: 'Axiom Systems adalah penyedia independen di balik Axiom Lelang, layanan pendampingan dan eksekusi penawaran lelang online. Fokus layanan adalah membantu klien menjaga disiplin anggaran dan menjalankan instruksi secara terstruktur pada platform lelang.go.id, tanpa menjanjikan kemenangan atau mengatasnamakan instansi pemerintah.',
    sections: [
      ['Identitas layanan', `<p><strong>Axiom Systems</strong> adalah entitas penyedia layanan. <strong>Axiom Lelang</strong> adalah nama layanan yang digunakan untuk pendampingan lelang online. Penyebutan ini diterapkan konsisten pada halaman, metadata, dan structured data website.</p>`],
      ['Prinsip kerja', `<div class="content-card-grid"><div class="content-card"><h3>Disiplin budget</h3><p>Instruksi limit ditetapkan sebelum eksekusi.</p></div><div class="content-card"><h3>Transparansi</h3><p>Ruang lingkup, biaya, dan batas layanan dijelaskan di awal.</p></div><div class="content-card"><h3>Independen</h3><p>Tidak berafiliasi dengan DJKN, KPKNL, atau Kementerian Keuangan.</p></div><div class="content-card"><h3>Tanpa jaminan hasil</h3><p>Persaingan dan ketentuan resmi tetap menentukan hasil.</p></div></div>`],
      ['Informasi publik dan kepercayaan', `<p>Website ini hanya menampilkan klaim yang dapat dijelaskan melalui proses layanan atau sumber resmi. Case study dan testimoni tidak dipublikasikan tanpa data serta izin yang memadai.</p>`]
    ], related: [['/jasa-joki-lelang','Layanan Axiom Lelang'], ['/case-study','Standar case study'], ['/kontak','Kanal kontak resmi']],
    cta: 'Hubungi Axiom Systems', waText: 'Halo Axiom Systems, saya ingin bertanya tentang layanan Axiom Lelang.'
  },
  {
    file: 'kontak/index.html', path: '/kontak/', type: 'contact', eyebrow: 'KONTAK RESMI',
    title: 'Kontak Axiom Lelang dari Axiom Systems',
    description: 'Hubungi Axiom Lelang melalui WhatsApp untuk konsultasi lot, budget, proses, dan biaya pendampingan lelang.',
    answer: 'Kanal konsultasi resmi yang ditampilkan saat ini adalah WhatsApp Axiom Lelang. Agar peninjauan awal lebih cepat, sertakan tautan lot lelang.go.id, jadwal pelaksanaan, jenis aset, dan pertanyaan utama Anda. Jangan mengirim kata sandi, OTP, atau data sensitif melalui pesan awal.',
    sections: [
      ['Informasi yang sebaiknya dikirim', `<ul><li>Tautan lot resmi pada lelang.go.id.</li><li>Tanggal dan jam pelaksanaan.</li><li>Jenis aset yang dilelang.</li><li>Pertanyaan mengenai proses, budget, atau biaya.</li></ul>`],
      ['Jaga keamanan akun', `<div class="notice-card"><p><strong>Jangan kirim OTP atau kata sandi melalui chat awal.</strong> Verifikasi bahwa Anda menggunakan nomor WhatsApp yang ditautkan dari website ini dan diskusikan prosedur keamanan sebelum memberikan akses apa pun.</p></div>`],
      ['Waktu respons dan konfirmasi', `<p>Ketersediaan layanan bergantung pada jadwal lot dan waktu yang tersisa untuk persiapan. Mengirim tautan lebih awal membantu tim menilai apakah pendampingan masih dapat dilakukan.</p>`]
    ], related: [['/cara-kerja','Pelajari proses'], ['/biaya','Tanya biaya'], ['/faq','Baca FAQ']],
    cta: 'Buka WhatsApp Axiom Lelang', waText: 'Halo Axiom Lelang, saya ingin konsultasi. Berikut link lot dan jadwalnya:'
  },
  {
    file: 'case-study/index.html', path: '/case-study/', type: 'webpage', eyebrow: 'BUKTI DAN TRANSPARANSI',
    title: 'Case Study Pendampingan Lelang Axiom Lelang',
    description: 'Dokumentasi proses, hasil sesi, dan pembelajaran pendampingan Axiom Lelang tanpa menjanjikan hasil serupa.',
    answer: 'Halaman case study Axiom Lelang mendokumentasikan proses, keputusan budget, hasil sesi, dan pembelajaran secara transparan. Dokumentasi hasil penawaran yang telah tersedia dapat dilihat pada halaman bukti kemenangan Axiom Lelang.',
    sections: [
      ['Apa yang akan dicatat?', `<ul><li>Konteks lot tanpa membuka data sensitif.</li><li>Tujuan dan limit yang ditetapkan klien.</li><li>Metode penawaran yang berlaku.</li><li>Hasil sesi dan faktor yang memengaruhinya.</li><li>Pembelajaran yang dapat diterapkan peserta lain.</li></ul>`],
      ['Case study menang dan kalah tetap relevan', `<p>Hasil menang tidak otomatis berarti keputusan ekonominya baik, sedangkan hasil kalah dapat menunjukkan bahwa disiplin limit bekerja. Karena itu case study akan menilai proses dan keputusan, bukan sekadar status pemenang.</p>`],
      ['Dokumentasi yang tersedia', `<div class="notice-card"><p><strong>Bukti hasil sesi telah dipublikasikan.</strong> Lihat <a href="/bukti-kemenangan/">galeri bukti kemenangan Axiom Lelang</a> untuk meninjau tangkapan log penawaran dari sesi yang telah ditangani.</p></div>`]
    ], related: [['/bukti-kemenangan','Lihat bukti kemenangan'], ['/cara-kerja','Cara kerja layanan'], ['/tentang','Tentang Axiom Systems']],
    cta: 'Diskusikan lot Anda', waText: 'Halo Axiom Lelang, saya ingin mendiskusikan lot lelang saya.'
  },
  {
    file: 'bukti-kemenangan/index.html', path: '/bukti-kemenangan/', type: 'webpage', eyebrow: 'HASIL AXIOM LELANG',
    title: 'Bukti Kemenangan Axiom Lelang',
    description: 'Lihat dokumentasi hasil dan log penawaran dari sesi lelang online yang telah ditangani oleh Axiom Lelang.',
    answer: 'Galeri ini berisi dokumentasi hasil dan aktivitas penawaran dari sesi lelang online yang telah ditangani Axiom Lelang. Gambar ditampilkan sebagai bukti proses nyata, bukan simulasi atau contoh fiktif.',
    images: [
      ['/bukti-kemenangan/1.svg', 'Bukti hasil penawaran Axiom Lelang pada 4 Agustus 2026'],
      ['/bukti-kemenangan/2.svg', 'Log penawaran sesi Axiom Lelang pada 3 Agustus 2026'],
      ['/bukti-kemenangan/3.svg', 'Bukti hasil penawaran Axiom Lelang pada 5 Agustus 2026'],
      ['/bukti-kemenangan/4.svg', 'Log penawaran sesi Axiom Lelang pada 5 Agustus 2026']
    ],
    sections: [
      ['Dokumentasi hasil penawaran', `<div class="proof-gallery">
        <figure class="proof-card"><a href="/bukti-kemenangan/1.svg" target="_blank" rel="noopener noreferrer" aria-label="Buka bukti hasil penawaran 1 dalam ukuran penuh"><img src="/bukti-kemenangan/1.svg" alt="Bukti hasil penawaran Axiom Lelang pada 4 Agustus 2026" width="778" height="905" loading="eager" decoding="async"></a><figcaption><strong>Dokumentasi sesi 01</strong><span>Hasil penawaran • 4 Agustus 2026</span></figcaption></figure>
        <figure class="proof-card"><a href="/bukti-kemenangan/2.svg" target="_blank" rel="noopener noreferrer" aria-label="Buka bukti hasil penawaran 2 dalam ukuran penuh"><img src="/bukti-kemenangan/2.svg" alt="Log penawaran sesi Axiom Lelang pada 3 Agustus 2026" width="778" height="905" loading="lazy" decoding="async"></a><figcaption><strong>Dokumentasi sesi 02</strong><span>Log penawaran • 3 Agustus 2026</span></figcaption></figure>
        <figure class="proof-card"><a href="/bukti-kemenangan/3.svg" target="_blank" rel="noopener noreferrer" aria-label="Buka bukti hasil penawaran 3 dalam ukuran penuh"><img src="/bukti-kemenangan/3.svg" alt="Bukti hasil penawaran Axiom Lelang pada 5 Agustus 2026" width="778" height="905" loading="lazy" decoding="async"></a><figcaption><strong>Dokumentasi sesi 03</strong><span>Hasil penawaran • 5 Agustus 2026</span></figcaption></figure>
        <figure class="proof-card"><a href="/bukti-kemenangan/4.svg" target="_blank" rel="noopener noreferrer" aria-label="Buka bukti hasil penawaran 4 dalam ukuran penuh"><img src="/bukti-kemenangan/4.svg" alt="Log penawaran sesi Axiom Lelang pada 5 Agustus 2026" width="778" height="905" loading="lazy" decoding="async"></a><figcaption><strong>Dokumentasi sesi 04</strong><span>Log penawaran • 5 Agustus 2026</span></figcaption></figure>
      </div><p class="proof-help">Klik gambar untuk membuka dokumentasi dalam ukuran penuh.</p>`],
      ['Cara membaca bukti', `<ul><li>Baris berwarna hijau menunjukkan penawaran tertinggi yang disahkan sistem sebagai pemenang.</li><li>Tanggal, waktu, dan nilai penawaran berasal dari tampilan log penawaran pada platform lelang.</li><li>Identitas lot dan klien tidak ditampilkan untuk menjaga privasi.</li></ul>`],
      ['Hasil setiap lot dapat berbeda', `<div class="notice-card"><p><strong>Dokumentasi ini menunjukkan hasil sesi yang telah terjadi.</strong> Hasil lot berikutnya tetap dipengaruhi persaingan, limit anggaran, jadwal, dan mekanisme resmi pada lelang.go.id.</p></div>`]
    ],
    related: [['/jasa-joki-lelang','Lihat layanan pendampingan'], ['/cara-kerja','Pelajari cara kerja'], ['/case-study','Baca standar case study']],
    cta: 'Siapkan lot Anda bersama Axiom Lelang', waText: 'Halo Axiom Lelang, saya sudah melihat bukti kemenangan dan ingin konsultasi untuk lot saya.'
  },
  {
    file: 'panduan/apa-itu-lelang-go-id/index.html', path: '/panduan/apa-itu-lelang-go-id/', type: 'article', eyebrow: 'PANDUAN DASAR',
    title: 'Apa Itu lelang.go.id? Panduan Peserta',
    description: 'Pelajari fungsi lelang.go.id, informasi lot, akun peserta, uang jaminan, penawaran, dan hal yang harus diperiksa.',
    answer: 'lelang.go.id adalah platform lelang yang digunakan Direktorat Jenderal Kekayaan Negara untuk menampilkan objek dan memfasilitasi proses lelang secara daring. Calon peserta perlu membuat akun, melengkapi persyaratan, memilih lot, menyetor uang jaminan sesuai pengumuman, lalu mengajukan penawaran dengan metode yang berlaku.',
    sections: [
      ['Apa fungsi lelang.go.id?', `<p>Platform ini menyediakan informasi lot, pengumuman, jadwal, nilai limit, uang jaminan, dan metode penawaran. Detail setiap lot dapat berbeda, sehingga peserta perlu membaca pengumuman dan dokumen lot secara menyeluruh.</p>`],
      ['Informasi penting pada halaman lot', `<ul><li>Identitas dan lokasi objek.</li><li>Nilai limit dan besaran uang jaminan.</li><li>Batas penyetoran jaminan.</li><li>Metode serta jadwal penawaran.</li><li>Syarat khusus dari penjual.</li></ul>`],
      ['Apakah platform menjamin kondisi objek?', `<div class="notice-card"><p><strong>Tidak.</strong> Informasi lot membantu peserta melakukan penilaian awal, tetapi pemeriksaan dokumen, kondisi fisik, penguasaan, pajak, dan biaya lanjutan tetap perlu dilakukan sebelum menawar.</p></div>`]
    ], sources: [[officialSources.join,'DJKN — Cara Ikut Lelang di lelang.go.id'], [officialSources.faq,'DJKN — FAQ Pelayanan Lelang']],
    related: [['/panduan/cara-daftar-lelang-go-id','Cara membuat akun'], ['/panduan/cara-ikut-lelang-online','Langkah mengikuti lelang'], ['/jasa-joki-lelang','Pendampingan lelang']],
    cta: 'Butuh bantuan meninjau alur lot?', waText: 'Halo Axiom Lelang, saya ingin konsultasi tentang lot di lelang.go.id.'
  },
  {
    file: 'panduan/cara-ikut-lelang-online/index.html', path: '/panduan/cara-ikut-lelang-online/', type: 'article', eyebrow: 'PANDUAN PESERTA',
    title: 'Cara Ikut Lelang Online di lelang.go.id',
    description: 'Langkah mengikuti lelang online: membuat akun, memilih lot, melengkapi syarat, menyetor jaminan, menawar, dan menindaklanjuti hasil.',
    answer: 'Cara ikut lelang online dimulai dengan membuat dan memverifikasi akun lelang.go.id, memilih lot, membaca pengumuman, melengkapi persyaratan, serta menyetor uang jaminan sesuai batas waktunya. Setelah jaminan diverifikasi, peserta dapat mengajukan penawaran berdasarkan metode lot dan wajib menindaklanjuti hasil sesuai ketentuan.',
    sections: [
      ['Langkah mengikuti lelang online', `<ol><li>Buat dan verifikasi akun peserta.</li><li>Cari lot dan baca seluruh pengumuman.</li><li>Periksa objek serta dokumen yang tersedia.</li><li>Lengkapi persyaratan lot.</li><li>Setor uang jaminan sesuai nominal dan tenggat.</li><li>Pastikan status jaminan telah diverifikasi.</li><li>Ajukan penawaran sesuai metode lot.</li><li>Periksa hasil dan jalankan kewajiban jika ditetapkan sebagai pembeli.</li></ol>`],
      ['Sebelum mengajukan penawaran', `<p>Tentukan batas maksimal dengan memasukkan biaya di luar harga penawaran, misalnya bea lelang, pajak, pengosongan, perbaikan, dan balik nama apabila relevan. Baca juga <a href="/panduan/cara-menentukan-budget-lelang">cara menentukan budget lelang</a>.</p>`],
      ['Risiko jika pemenang tidak melunasi', `<div class="notice-card"><p><strong>Pemenang memiliki kewajiban lanjutan.</strong> DJKN menjelaskan bahwa peserta yang ditetapkan sebagai pembeli tetapi tidak melunasi sesuai ketentuan dapat dinyatakan wanprestasi dan uang jaminannya diproses berdasarkan aturan yang berlaku.</p></div>`]
    ], sources: [[officialSources.register,'DJKN — Cara Mendaftar dan Mengikuti Lelang'], [officialSources.tips,'DJKN — Tips Membeli Barang melalui Lelang']],
    related: [['/panduan/cara-daftar-lelang-go-id','Cara daftar akun'], ['/panduan/apa-itu-uang-jaminan-lelang','Memahami uang jaminan'], ['/faq','FAQ peserta lelang']],
    cta: 'Konsultasikan lot sebelum menawar', waText: 'Halo Axiom Lelang, saya ingin konsultasi sebelum mengikuti lot berikut.'
  },
  {
    file: 'panduan/cara-daftar-lelang-go-id/index.html', path: '/panduan/cara-daftar-lelang-go-id/', type: 'article', eyebrow: 'PANDUAN AKUN',
    title: 'Cara Daftar Akun lelang.go.id',
    description: 'Panduan persiapan pendaftaran akun lelang.go.id dan data yang perlu dilengkapi sebelum mengikuti lot.',
    answer: 'Untuk mendaftar di lelang.go.id, calon peserta membuat akun menggunakan identitas dan kontak yang aktif, lalu melengkapi data persyaratan pada profil. Data identitas, NPWP apabila dipersyaratkan, dan rekening bank perlu diisi dengan benar karena digunakan dalam administrasi keikutsertaan serta pengembalian uang jaminan.',
    sections: [
      ['Persiapan sebelum mendaftar', `<ul><li>Alamat email dan nomor telepon aktif.</li><li>Identitas resmi dengan data yang terbaca.</li><li>NPWP apabila diminta oleh sistem atau ketentuan.</li><li>Rekening bank atas nama yang sesuai.</li></ul>`],
      ['Tahapan umum', `<ol><li>Buka situs resmi lelang.go.id.</li><li>Pilih pendaftaran akun dan isi data yang diminta.</li><li>Lakukan verifikasi melalui kanal yang diberikan sistem.</li><li>Masuk ke akun dan lengkapi menu persyaratan lelang.</li><li>Periksa ulang identitas serta rekening sebelum memilih lot.</li></ol>`],
      ['Hindari situs dan kontak palsu', `<div class="notice-card"><p><strong>Mulai dari domain resmi lelang.go.id.</strong> Jangan memberikan OTP, kata sandi, atau pembayaran kepada pihak yang mengaku dapat memastikan kemenangan. Periksa tujuan pembayaran berdasarkan informasi resmi lot.</p></div>`]
    ], sources: [[officialSources.register,'DJKN — Cara Mendaftar dan Mengikuti Lelang'], [officialSources.join,'DJKN — Cara Ikut Lelang di lelang.go.id']],
    related: [['/panduan/apa-itu-lelang-go-id','Mengenal platform'], ['/panduan/cara-ikut-lelang-online','Tahap mengikuti lot'], ['/kontak','Konsultasi Axiom Lelang']],
    cta: 'Sudah punya akun dan lot target?', waText: 'Halo Axiom Lelang, akun saya sudah siap dan saya ingin konsultasi lot.'
  },
  {
    file: 'panduan/apa-itu-open-bidding/index.html', path: '/panduan/apa-itu-open-bidding/', type: 'article', eyebrow: 'METODE PENAWARAN',
    title: 'Apa Itu Open Bidding dalam Lelang Online?',
    description: 'Pengertian open bidding, cara kerjanya, perbedaannya dengan closed bidding, dan risiko overbid.',
    answer: 'Open bidding adalah metode penawaran ketika peserta dapat melihat nilai penawaran tertinggi selama sesi dan mengajukan penawaran yang lebih tinggi mengikuti kelipatan yang ditetapkan pejabat lelang. Berbeda dari closed bidding, nilai penawaran peserta pada open bidding terlihat oleh peserta lain secara real time.',
    sections: [
      ['Bagaimana open bidding bekerja?', `<ol><li>Uang jaminan peserta diverifikasi.</li><li>Pejabat lelang membuka sesi sesuai jadwal.</li><li>Peserta melihat penawaran tertinggi yang tampil.</li><li>Penawaran berikutnya harus lebih tinggi sesuai ketentuan sistem.</li><li>Sesi ditutup berdasarkan mekanisme resmi yang berlaku.</li></ol>`],
      ['Open bidding vs closed bidding', `<table class="content-table"><thead><tr><th>Aspek</th><th>Open bidding</th><th>Closed bidding</th></tr></thead><tbody><tr><td data-label="Aspek">Visibilitas harga</td><td data-label="Open bidding">Penawaran tertinggi terlihat.</td><td data-label="Closed bidding">Penawaran peserta tidak saling terlihat sebelum berakhir.</td></tr><tr><td data-label="Aspek">Perubahan penawaran</td><td data-label="Open bidding">Harus lebih tinggi dari penawaran terakhir.</td><td data-label="Closed bidding">Penawaran terakhir dapat berbeda sesuai ketentuan sistem.</td></tr><tr><td data-label="Aspek">Risiko perilaku</td><td data-label="Open bidding">Perang harga dan keputusan emosional.</td><td data-label="Closed bidding">Salah menghitung nilai akhir tanpa sinyal peserta lain.</td></tr></tbody></table>`],
      ['Cara mengurangi risiko overbid', `<p>Tetapkan limit sebelum sesi, masukkan seluruh biaya kepemilikan, dan berhenti ketika penawaran melewati batas tersebut. Penawaran tertinggi bukan selalu pembelian yang ekonomis.</p>`]
    ], sources: [[officialSources.faq,'DJKN — FAQ Penawaran Lelang']],
    related: [['/panduan/cara-menghindari-overbid','Cara menghindari overbid'], ['/panduan/cara-menentukan-budget-lelang','Menentukan budget'], ['/cara-kerja','Pendampingan saat sesi']],
    cta: 'Siapkan limit sebelum open bidding', waText: 'Halo Axiom Lelang, lot saya memakai open bidding dan saya ingin konsultasi limit.'
  },
  {
    file: 'panduan/cara-menentukan-budget-lelang/index.html', path: '/panduan/cara-menentukan-budget-lelang/', type: 'article', eyebrow: 'PERENCANAAN ANGGARAN',
    title: 'Cara Menentukan Budget Lelang yang Aman',
    description: 'Cara menghitung limit penawaran lelang dengan mempertimbangkan nilai aset, biaya resmi, pajak, perbaikan, dan margin risiko.',
    answer: 'Budget lelang yang aman bukan hanya harga penawaran. Hitung nilai wajar objek, biaya resmi lelang, pajak, balik nama, perbaikan, pengosongan, biaya pembiayaan, dan cadangan risiko. Setelah itu tetapkan limit penawaran tertulis sebelum sesi dan jangan menaikkannya hanya karena persaingan.',
    sections: [
      ['Rumus sederhana limit penawaran', `<p><strong>Limit penawaran = nilai ekonomis maksimum − seluruh biaya setelah menang − cadangan risiko.</strong></p><p>Nilai ekonomis maksimum harus berdasarkan pemeriksaan dan tujuan pembelian Anda, bukan hanya harga pasar yang terlihat di iklan.</p>`],
      ['Komponen yang perlu dihitung', `<ul><li>Bea lelang pembeli dan pajak yang relevan.</li><li>Biaya balik nama serta administrasi.</li><li>Perbaikan dan pemeliharaan aset.</li><li>Pengosongan atau penanganan penguasaan bila ada.</li><li>Biaya pembiayaan dan waktu modal tertahan.</li><li>Cadangan untuk informasi yang belum pasti.</li></ul>`],
      ['Gunakan tiga angka', `<table class="content-table"><thead><tr><th>Angka</th><th>Fungsi</th></tr></thead><tbody><tr><td data-label="Angka">Target</td><td data-label="Fungsi">Harga yang masih memberi ruang keuntungan atau manfaat.</td></tr><tr><td data-label="Angka">Limit</td><td data-label="Fungsi">Batas mutlak yang tidak boleh dilampaui.</td></tr><tr><td data-label="Angka">Cadangan</td><td data-label="Fungsi">Penyangga untuk biaya atau kondisi tidak terduga.</td></tr></tbody></table>`]
    ], sources: [[officialSources.faq,'DJKN — Nilai Limit dan Uang Jaminan'], [officialSources.regulation,'PMK 122 Tahun 2023']],
    related: [['/panduan/cara-menghindari-overbid','Mencegah overbid'], ['/biaya','Biaya pendampingan'], ['/jasa-joki-lelang','Layanan disiplin limit']],
    cta: 'Cek kesiapan budget lot Anda', waText: 'Halo Axiom Lelang, saya ingin konsultasi kesiapan budget untuk lot berikut.'
  },
  {
    file: 'panduan/cara-menghindari-overbid/index.html', path: '/panduan/cara-menghindari-overbid/', type: 'article', eyebrow: 'MANAJEMEN RISIKO',
    title: 'Cara Menghindari Overbid Saat Lelang Online',
    description: 'Strategi menghindari overbid dengan limit tertulis, perhitungan biaya total, dan aturan berhenti saat open bidding.',
    answer: 'Cara paling efektif menghindari overbid adalah menentukan limit penawaran sebelum lelang dimulai dan memperlakukannya sebagai batas mutlak. Limit harus memperhitungkan seluruh biaya setelah menang, bukan hanya harga lot. Ketika harga melewati batas, berhenti menawar meskipun selisih kenaikannya terlihat kecil.',
    sections: [
      ['Mengapa overbid terjadi?', `<ul><li>Fokus pada kemenangan, bukan nilai ekonomis.</li><li>Biaya lanjutan tidak dimasukkan ke perhitungan.</li><li>Kenaikan kecil terasa tidak signifikan jika dilihat satu per satu.</li><li>Limit diubah ketika emosi meningkat.</li></ul>`],
      ['Aturan praktis sebelum sesi', `<ol><li>Tulis asumsi nilai aset dan seluruh biaya.</li><li>Tentukan target serta limit terpisah.</li><li>Pastikan limit tidak membutuhkan keputusan ulang saat sesi.</li><li>Siapkan aturan berhenti dan patuhi.</li><li>Evaluasi hasil tanpa mengejar lot yang sudah tidak ekonomis.</li></ol>`],
      ['Kalah tidak selalu berarti gagal', `<div class="notice-card"><p><strong>Disiplin dapat menghasilkan keputusan untuk berhenti.</strong> Jika peserta lain bersedia membayar di atas limit ekonomis Anda, tidak melanjutkan penawaran justru melindungi modal.</p></div>`]
    ], sources: [[officialSources.faq,'DJKN — FAQ Open Bidding dan Penawaran']],
    related: [['/panduan/cara-menentukan-budget-lelang','Menghitung limit'], ['/panduan/apa-itu-open-bidding','Memahami open bidding'], ['/jasa-joki-lelang','Pendampingan eksekusi']],
    cta: 'Tetapkan batas sebelum sesi', waText: 'Halo Axiom Lelang, saya ingin menjaga limit untuk lot berikut.'
  },
  {
    file: 'panduan/apa-itu-uang-jaminan-lelang/index.html', path: '/panduan/apa-itu-uang-jaminan-lelang/', type: 'article', eyebrow: 'PERSYARATAN LELANG',
    title: 'Apa Itu Uang Jaminan Penawaran Lelang?',
    description: 'Pengertian Uang Jaminan Penawaran Lelang, fungsi, penyetoran, pengembalian, biaya bank, dan risiko wanprestasi.',
    answer: 'Uang Jaminan Penawaran Lelang adalah sejumlah uang yang harus disetor calon peserta sebagai syarat mengikuti lot tertentu. Besaran dan batas penyetorannya tercantum pada pengumuman. Peserta yang tidak disahkan sebagai pembeli menerima pengembalian sesuai ketentuan, tetapi biaya transaksi bank dapat menjadi tanggungan peserta.',
    sections: [
      ['Apa fungsi uang jaminan?', `<p>Uang jaminan menunjukkan keseriusan peserta dan menjadi salah satu syarat agar peserta dapat mengajukan penawaran. Nilainya ditetapkan oleh penjual dan perlu efektif diterima sesuai tenggat yang tercantum.</p>`],
      ['Bagaimana jika tidak menang?', `<p>FAQ DJKN menyebut uang jaminan peserta yang tidak disahkan sebagai pembeli dikembalikan seluruhnya, dengan kemungkinan biaya transaksi perbankan menjadi tanggungan peserta. Pastikan data rekening pengembalian benar dan hubungi KPKNL penyelenggara jika terjadi kendala.</p>`],
      ['Bagaimana jika menang tetapi tidak melunasi?', `<div class="notice-card"><p><strong>Ada risiko wanprestasi.</strong> Jika peserta ditetapkan sebagai pembeli tetapi tidak memenuhi kewajiban pembayaran sesuai ketentuan, uang jaminan dapat tidak dikembalikan dan diproses berdasarkan aturan yang berlaku.</p></div>`]
    ], sources: [[officialSources.faq,'DJKN — FAQ Uang Jaminan Lelang'], [officialSources.ujl,'DJKN — Pengembalian Uang Jaminan Peserta yang Kalah'], [officialSources.regulation,'PMK 122 Tahun 2023']],
    related: [['/panduan/cara-ikut-lelang-online','Langkah ikut lelang'], ['/panduan/apa-yang-terjadi-saat-lelang-ditutup','Setelah sesi ditutup'], ['/faq','FAQ Axiom Lelang']],
    cta: 'Sudah verifikasi jaminan lot?', waText: 'Halo Axiom Lelang, jaminan lot saya sudah diverifikasi dan saya ingin konsultasi sesi.'
  },
  {
    file: 'panduan/apa-yang-terjadi-saat-lelang-ditutup/index.html', path: '/panduan/apa-yang-terjadi-saat-lelang-ditutup/', type: 'article', eyebrow: 'SETELAH PENAWARAN',
    title: 'Apa yang Terjadi Saat Lelang Ditutup?',
    description: 'Penjelasan langkah setelah penawaran ditutup bagi peserta yang ditetapkan sebagai pembeli maupun yang tidak menang.',
    answer: 'Setelah periode penawaran ditutup, pejabat lelang menetapkan hasil sesuai metode dan ketentuan lot. Peserta perlu memeriksa status resmi pada akun atau pemberitahuan penyelenggara. Pembeli wajib menyelesaikan pembayaran dan administrasi sesuai tenggat, sedangkan uang jaminan peserta yang tidak menang dikembalikan berdasarkan ketentuan.',
    sections: [
      ['Jika ditetapkan sebagai pembeli', `<ol><li>Periksa penetapan dan rincian kewajiban resmi.</li><li>Lunasi pokok, bea, dan kewajiban lain sesuai tenggat.</li><li>Simpan bukti pembayaran.</li><li>Ikuti proses memperoleh kuitansi dan kutipan risalah lelang.</li><li>Jalankan proses lanjutan aset sesuai jenis objek.</li></ol>`],
      ['Jika tidak ditetapkan sebagai pembeli', `<p>Pantau pengembalian uang jaminan ke rekening yang terdaftar. DJKN menyatakan pengembalian dilakukan sesuai ketentuan dan biaya transaksi bank dapat dibebankan kepada peserta.</p>`],
      ['Jangan mengandalkan pesan tidak resmi', `<div class="notice-card"><p><strong>Periksa hasil dan instruksi melalui kanal resmi.</strong> Waspadai pihak yang meminta transfer tambahan ke rekening pribadi atau mengaku dapat mengubah hasil setelah penutupan.</p></div>`]
    ], sources: [[officialSources.faq,'DJKN — FAQ Pemenang, Pelunasan, dan Uang Jaminan'], [officialSources.tips,'DJKN — Tips Membeli Barang melalui Lelang']],
    related: [['/panduan/apa-itu-uang-jaminan-lelang','Pengembalian uang jaminan'], ['/panduan/cara-ikut-lelang-online','Alur lengkap peserta'], ['/case-study','Pembelajaran hasil sesi']],
    cta: 'Butuh pendampingan sesi berikutnya?', waText: 'Halo Axiom Lelang, saya ingin konsultasi untuk sesi lelang berikutnya.'
  }
];

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function slugify(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function schema(page) {
  const url = `${site}${page.path}`;
  const organization = { '@id': `${site}/#organization` };
  const graph = [
    {
      '@type': page.type === 'about' ? 'AboutPage' : page.type === 'contact' ? 'ContactPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${site}/#website` },
      about: organization,
      inLanguage: 'id-ID',
      dateModified: updated
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${site}/` },
        ...(page.path.startsWith('/panduan/') ? [{ '@type': 'ListItem', position: 2, name: 'Panduan', item: `${site}/#panduan` }] : []),
        { '@type': 'ListItem', position: page.path.startsWith('/panduan/') ? 3 : 2, name: page.title, item: url }
      ]
    }
  ];

  if (page.type === 'service') {
    graph.push({
      '@type': 'Service', '@id': `${url}#service`, name: 'Pendampingan dan Eksekusi Penawaran Lelang Online',
      serviceType: 'Pendampingan lelang online', provider: organization, areaServed: { '@type': 'Country', name: 'Indonesia' },
      url, description: page.description
    });
  }

  if (page.type === 'article') {
    graph.push({
      '@type': 'Article', '@id': `${url}#article`, headline: page.title, description: page.description,
      datePublished: updated, dateModified: updated, inLanguage: 'id-ID', mainEntityOfPage: { '@id': `${url}#webpage` },
      author: { '@type': 'Organization', name: 'Tim Editorial Axiom Systems', '@id': `${site}/#organization` },
      publisher: organization, image: `${site}/images/logo-axiom-dark.png`
    });
  }

  if (page.images) {
    page.images.forEach(([path, caption], index) => {
      graph.push({
        '@type': 'ImageObject',
        '@id': `${url}#bukti-${index + 1}`,
        contentUrl: `${site}${path}`,
        caption,
        representativeOfPage: index === 0,
        inLanguage: 'id-ID'
      });
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replaceAll('<', '\\u003c');
}

function render(page) {
  const url = `${site}${page.path}`;
  const headings = page.sections.map(([heading]) => [slugify(heading), heading]);
  if (page.sources) headings.push(['sumber-resmi', 'Sumber resmi']);
  headings.push(['panduan-terkait', 'Baca selanjutnya']);
  const message = `${wa}?text=${encodeURIComponent(page.waText)}`;
  const breadcrumb = page.path.startsWith('/panduan/')
    ? `<a href="/">Beranda</a><span>/</span><a href="/#panduan">Panduan</a><span>/</span><span>${escapeHtml(page.title)}</span>`
    : `<a href="/">Beranda</a><span>/</span><span>${escapeHtml(page.title)}</span>`;
  const body = page.sections.map(([heading, html]) => `<section id="${slugify(heading)}"><h2>${heading}</h2>${html}</section>`).join('\n');
  const sources = page.sources ? `<section id="sumber-resmi"><h2>Sumber resmi</h2><p>Informasi prosedural pada halaman ini diringkas dari sumber pemerintah berikut. Selalu periksa kembali pengumuman lot dan ketentuan terbaru.</p><ul class="source-list">${page.sources.map(([href,label]) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join('')}</ul></section>` : '';
  const related = `<section id="panduan-terkait"><h2>Baca selanjutnya</h2><div class="article-hub-grid">${page.related.map(([href,label]) => `<a class="article-link-card" href="${href}">${label}<span>Pelajari topik terkait →</span></a>`).join('')}</div></section>`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(page.title)} | Axiom Systems</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="Axiom Systems">
  <meta name="theme-color" content="#0B0C0E">
  <link rel="canonical" href="${url}">
  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">
  <link rel="apple-touch-icon" href="/images/logo-axiom-dark.png">
  <meta property="og:type" content="${page.type === 'article' ? 'article' : 'website'}">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="Axiom Systems">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:image" content="${site}/images/logo-axiom-dark.png">
  <meta property="og:locale" content="id_ID">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(page.title)}">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">
  <meta name="twitter:image" content="${site}/images/logo-axiom-dark.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet"></noscript>
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${schema(page)}</script>
</head>
<body>
  <a class="skip-link" href="#konten">Lewati ke konten utama</a>
  <header class="navbar-wrapper" id="navbar-wrapper">
    <nav class="navbar" id="navbar" aria-label="Navigasi utama">
      <a href="/" class="brand-logo" aria-label="Axiom Systems — Beranda"><img src="/images/logo.svg" alt="Axiom Lelang oleh Axiom Systems" class="brand-img" width="50" height="50"></a>
      <div class="nav-menu" id="nav-menu">
        <a href="/" class="nav-link">Beranda</a>
        <a href="/jasa-joki-lelang" class="nav-link">Layanan</a>
        <a href="/cara-kerja" class="nav-link">Cara Kerja</a>
        <a href="/biaya" class="nav-link">Biaya</a>
        <a href="/bukti-kemenangan" class="nav-link">Bukti Menang</a>
        <a href="/faq" class="nav-link">FAQ</a>
        <a href="/tentang" class="nav-link">Tentang</a>
      </div>
      <div class="nav-cta"><a href="${message}" target="_blank" rel="noopener noreferrer" class="btn btn-pill-primary">Konsultasi WA</a></div>
      <button type="button" class="mobile-toggle" id="mobile-toggle" aria-label="Buka menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </nav>
  </header>
  <main id="konten">
    <header class="content-hero">
      <div class="ambient-glow-orb orb-hero-center"></div>
      <div class="container content-hero-inner">
        <nav class="breadcrumbs" aria-label="Breadcrumb">${breadcrumb}</nav>
        <div class="eyebrow"><span class="dot-active"></span>${page.eyebrow}</div>
        <h1 class="content-title">${page.title}</h1>
        <p class="answer-block">${page.answer}</p>
        <div class="content-meta"><span>Diperbarui: 10 Agustus 2026</span><span>Ditinjau oleh Tim Editorial Axiom Systems</span></div>
      </div>
    </header>
    <div class="container content-layout">
      <article class="prose">
        ${body}
        ${sources}
        ${related}
        <section class="inline-cta"><h2>${page.cta}</h2><a href="${message}" target="_blank" rel="noopener noreferrer" class="btn btn-pill-primary btn-lg">Kirim Lot via WhatsApp</a></section>
      </article>
      <aside class="toc-card" aria-label="Daftar isi"><h2>Di halaman ini</h2><ul>${headings.map(([id,label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ul></aside>
    </div>
  </main>
  <footer class="footer"><div class="container"><div class="footer-grid">
    <div class="footer-col"><a href="/" class="brand-logo"><img src="/images/logo.svg" alt="Axiom Lelang oleh Axiom Systems" class="footer-logo-img" width="180" height="38"></a><p class="footer-tagline">Axiom Lelang adalah layanan pendampingan lelang online independen dari Axiom Systems.</p></div>
    <div class="footer-col"><h2 class="footer-heading">Layanan</h2><ul class="footer-links"><li><a href="/jasa-joki-lelang">Jasa pendamping lelang</a></li><li><a href="/cara-kerja">Cara kerja</a></li><li><a href="/biaya">Biaya</a></li><li><a href="/bukti-kemenangan">Bukti kemenangan</a></li><li><a href="/case-study">Case study</a></li></ul></div>
    <div class="footer-col"><h2 class="footer-heading">Informasi</h2><ul class="footer-links"><li><a href="/panduan/apa-itu-lelang-go-id">Panduan lelang.go.id</a></li><li><a href="/panduan/cara-ikut-lelang-online">Cara ikut lelang</a></li><li><a href="/faq">FAQ</a></li><li><a href="/tentang">Tentang</a></li></ul></div>
    <div class="footer-col"><h2 class="footer-heading">Kontak</h2><ul class="footer-links"><li><a href="/kontak">Kanal resmi</a></li><li><a href="${message}" target="_blank" rel="noopener noreferrer">WhatsApp</a></li></ul></div>
  </div><div class="footer-bottom"><p>&copy; 2026 Axiom Systems. Hak cipta dilindungi.</p></div></div></footer>
  <script src="/script.js"></script>
</body>
</html>`;
}

for (const page of pages) {
  const target = resolve(root, page.file);
  await mkdir(dirname(target), { recursive: true });
  const html = render(page)
    .replace(/href="(\/(?!$|#)[^".?#]*[^/".?#])"/g, 'href="$1/"')
    .replace(/[ \t]+$/gm, '');
  await writeFile(target, html);
}

console.log(`Generated ${pages.length} static pages.`);
