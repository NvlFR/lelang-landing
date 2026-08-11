# Axiom Lelang

## Overview

Axiom Lelang adalah website resmi layanan pendampingan penawaran lelang online yang dioperasikan oleh Axiom Systems Co. Repository ini berisi landing page, knowledge base, berita layanan, structured data, dan representasi Markdown untuk AI agents.

## Website

Website resmi: [joki-lelang.axiomsystemsco.com](https://joki-lelang.axiomsystemsco.com/)

## Operator

Axiom Lelang dioperasikan oleh [Axiom Systems Co](https://axiomsystemsco.com), perusahaan automation engineering berbasis di Indonesia.

- Website perusahaan: [axiomsystemsco.com](https://axiomsystemsco.com)
- GitHub organisasi: [github.com/axiomsystemsco](https://github.com/axiomsystemsco)
- Email: [hello@axiomsystemsco.com](mailto:hello@axiomsystemsco.com)

## Service

Layanan berfokus pada:

- peninjauan kesiapan lot dan jadwal;
- penetapan limit anggaran berdasarkan instruksi klien;
- persiapan dan pelaksanaan instruksi penawaran;
- penyampaian status setelah sesi selesai.

## Independence

Axiom Lelang adalah layanan independen. Axiom Systems Co dan Axiom Lelang bukan bagian dari DJKN, KPKNL, atau Kementerian Keuangan Republik Indonesia.

Layanan tidak mengendalikan mekanisme resmi dan tidak menjamin kemenangan. Hasil tetap dipengaruhi ketentuan lot, penawaran peserta lain, dan limit yang ditetapkan klien.

## Core Principles

- **Disiplin limit:** penawaran tidak melampaui batas yang dikonfirmasi klien.
- **Transparansi:** ruang lingkup, biaya, dan batas layanan dijelaskan sebelum sesi.
- **Keamanan akun:** OTP dan kata sandi tidak diminta melalui konsultasi awal.
- **Sumber resmi:** panduan prosedural merujuk informasi DJKN dan pengumuman lot.
- **Bukti yang dapat diverifikasi:** tidak mempublikasikan klaim, hasil, atau testimoni fiktif.

## Related Links

- [Tentang Axiom Lelang](https://joki-lelang.axiomsystemsco.com/tentang/)
- [Cara kerja](https://joki-lelang.axiomsystemsco.com/cara-kerja/)
- [FAQ](https://joki-lelang.axiomsystemsco.com/faq/)
- [Panduan lelang online](https://joki-lelang.axiomsystemsco.com/panduan/cara-ikut-lelang-online/)
- [Berita dan update](https://joki-lelang.axiomsystemsco.com/berita/)

## Technical Overview

Website menggunakan HTML, CSS, dan JavaScript statis yang dilayani melalui Cloudflare. Worker menyediakan content negotiation: browser menerima HTML, sedangkan request dengan `Accept: text/markdown` menerima Markdown yang telah dipregenerasi.

```text
lelang-landing/
├── docs/                         # Dokumentasi teknis yang aman dipublikasikan
├── berita/                       # Hub dan artikel berita
├── panduan/                      # Knowledge base lelang online
├── bukti-kemenangan/             # Galeri bukti hasil sesi
├── scripts/site-config.mjs       # Source of truth entitas dan URL resmi
├── scripts/generate-pages.mjs    # Generator halaman konten
├── scripts/generate-markdown.mjs # Generator Markdown untuk agents
├── scripts/validate-site.mjs     # Validasi metadata, schema, link, sitemap
├── _markdown/                    # Mirror Markdown yang dipregenerasi
├── index.html
├── robots.txt
├── sitemap.xml
├── llms.txt
├── .assetsignore                # Mencegah file internal menjadi static asset
├── worker.js
└── wrangler.jsonc
```

## Local Validation

```bash
node scripts/generate-pages.mjs
node scripts/generate-markdown.mjs
node scripts/validate-site.mjs
node scripts/validate-markdown-negotiation.mjs
npx html-validate '**/*.html'
```

Generator Markdown membutuhkan `pandoc`. Setelah HTML berubah, bangun ulang halaman Markdown agar kedua representasi tetap sinkron.

Pengujian content negotiation:

```bash
curl https://joki-lelang.axiomsystemsco.com/jasa-joki-lelang/ \
  -H "Accept: text/markdown"
```

## Deployment

Deployment produksi menggunakan Cloudflare Workers Static Assets dengan konfigurasi pada `wrangler.jsonc`. Perubahan branch tidak otomatis dianggap live sampai workflow deployment berhasil.

Runbook deployment, PRD, audit, strategi growth, dan measurement disimpan di repository internal yang private. Jangan menghapus `.assetsignore`: konfigurasi asset menunjuk root repository sehingga file tersebut menjadi boundary agar dokumentasi internal, script, dan konfigurasi tidak ikut dilayani sebagai static asset.
