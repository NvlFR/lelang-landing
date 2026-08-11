# Implementasi Technical SEO dan Entity — Phase 1

Tanggal: 11 Agustus 2026  
Branch: `feat/ai-search-phase-1`

## Scope

Phase 1 pada repository ini mencakup properti Axiom Lelang di `https://joki-lelang.axiomsystemsco.com`. Source code domain perusahaan `https://axiomsystemsco.com` tidak tersedia di workspace ini, sehingga perubahan domain utama dicatat sebagai handoff dan tidak diterapkan dari repository Axiom Lelang.

## Perubahan yang diterapkan

### Source of truth

- Menambahkan `scripts/site-config.mjs` untuk nama, URL, ID schema, email, GitHub, WhatsApp, locale, dan negara.
- Menambahkan `docs/ENTITY_MAP.md` sebagai referensi manusia dan agent implementasi.

### Metadata dan copy

- Menyeragamkan operator dari “Axiom Systems” menjadi “Axiom Systems Co”.
- Mempertahankan “Axiom Lelang” sebagai brand dan nama website layanan.
- Memperbarui tanggal halaman yang berubah menjadi 11 Agustus 2026.
- Mempertahankan canonical unik untuk seluruh 19 URL.

### Structured data

- Menggunakan ID perusahaan lintas properti: `https://axiomsystemsco.com/#organization`.
- Menggunakan `https://axiomsystemsco.com` sebagai URL Organization.
- Menambahkan GitHub organisasi melalui `sameAs` pada definisi Organization.
- Menambahkan email resmi perusahaan.
- Menghubungkan `WebSite`, `WebPage`, `Service`, `Article`, dan `NewsArticle` ke Organization yang sama.
- Mempertahankan ID brand Axiom Lelang pada subdomain layanan.

### Internal dan entity linking

- Menambahkan link HTML ke website Axiom Systems Co pada seluruh halaman.
- Menambahkan link ke organisasi GitHub pada seluruh halaman.
- Mempertahankan navigasi utama dan internal link antarlayanan/panduan.

### Robots dan sitemap

- Menambahkan izin eksplisit untuk `OAI-SearchBot`.
- Mempertahankan izin crawler yang sudah ada.
- Mempertahankan 19 URL sitemap dan memperbarui `lastmod` halaman yang berubah.

### Agent-readable content

- Membangun ulang seluruh representasi Markdown setelah HTML diperbarui.
- Memperbarui `llms.txt` dengan website perusahaan, website layanan, GitHub, dan email resmi.

### Guardrails

Validator sekarang gagal apabila:

- halaman masih memakai “Axiom Systems” tanpa “Co”;
- halaman tidak menautkan website perusahaan;
- halaman tidak menautkan GitHub organisasi;
- homepage tidak memakai ID Organization resmi;
- canonical, sitemap, title, description, H1, JSON-LD, atau local link tidak valid.

## Instruksi Google Search Console

### Properti yang disarankan

Gunakan Domain property `axiomsystemsco.com` agar domain utama dan seluruh subdomain tercakup. Jika akses DNS belum tersedia, pertahankan URL-prefix property berikut secara terpisah:

- `https://axiomsystemsco.com/`
- `https://joki-lelang.axiomsystemsco.com/`

### Sitemap Axiom Lelang

Kirim hanya:

```text
https://joki-lelang.axiomsystemsco.com/sitemap.xml
```

Pada form yang sudah menampilkan prefix domain, cukup isi:

```text
sitemap.xml
```

Tidak perlu mengirim setiap URL sebagai sitemap terpisah.

### Setelah deployment

1. Buka menu **Sitemaps** dan pastikan status sitemap sukses.
2. Gunakan **URL Inspection** untuk homepage, `/tentang/`, `/jasa-joki-lelang/`, `/faq/`, dan artikel terbaru.
3. Jalankan **Test Live URL**.
4. Pilih **Request Indexing** apabila live test berhasil.
5. Periksa laporan **Page indexing**, **HTTPS**, **Core Web Vitals**, dan **Enhancements** setelah Google melakukan crawl ulang.
6. Jangan mengirim request indexing berulang kali pada hari yang sama; request tidak menjamin crawl atau ranking langsung.

## Handoff domain perusahaan

Perubahan berikut harus dilakukan di repository/deployment `axiomsystemsco.com`:

1. Tambahkan satu H1 yang menjelaskan Axiom Systems Co.
2. Tambahkan `Organization` JSON-LD dengan ID `https://axiomsystemsco.com/#organization`.
3. Tambahkan `sameAs` ke `https://github.com/axiomsystemsco`.
4. Tambahkan link langsung ke `https://joki-lelang.axiomsystemsco.com` dan GitHub organisasi.
5. Selaraskan deskripsi Axiom Lelang dengan entity map ini.
6. Audit atau hapus klaim angka, win rate, latency, bypass, dan supremasi pasar yang tidak memiliki bukti publik.
7. Terapkan redirect permanen HTTP ke HTTPS.
8. Dokumentasikan kebijakan crawler search/retrieval dan training.

Tanpa handoff ini, entity graph masih satu arah: Axiom Lelang sudah menunjuk perusahaan dan GitHub, tetapi domain perusahaan belum memberikan konfirmasi resiprokal.

## Validasi sebelum deployment

```bash
node scripts/generate-pages.mjs
node scripts/generate-markdown.mjs
node scripts/validate-site.mjs
node scripts/validate-markdown-negotiation.mjs
npx html-validate '**/*.html'
```

