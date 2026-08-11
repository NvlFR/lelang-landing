# Axiom Lelang — Website Statis Axiom Systems

Website statis untuk layanan pendampingan dan eksekusi penawaran lelang online dari Axiom Systems.

## 📁 Struktur Repo

```text
lelang-landing/
├── index.html                 # Beranda
├── jasa-joki-lelang/index.html # Halaman layanan
├── cara-kerja/index.html       # Alur pendampingan
├── biaya/index.html            # Penjelasan biaya
├── faq/index.html              # Pertanyaan umum
├── tentang/index.html          # Entity Axiom Systems
├── kontak/index.html           # Kanal kontak resmi
├── case-study/index.html       # Standar publikasi case study
├── bukti-kemenangan/           # Galeri bukti hasil sesi dan aset SVG
├── panduan/                   # Knowledge base lelang online
├── scripts/generate-pages.mjs # Generator halaman konten
├── scripts/generate-markdown.mjs # Generator representasi Markdown untuk agents
├── scripts/validate-site.mjs  # Validasi metadata, schema, link, dan sitemap
├── worker.js                  # Content negotiation HTML/Markdown
├── _markdown/                 # Mirror Markdown yang dipregenerasi
├── .assetsignore              # Aset sumber yang tidak diunggah ke publik
├── wrangler.jsonc             # Binding aset dan selective Worker routing
├── styles.css                 # Design system dan layout konten
├── script.js                  # Interaktivitas UI ringan
├── sitemap.xml
├── robots.txt
└── llms.txt
```

## 🚀 Fitur Landing Page

- **Zero Backend & Data Safety:** Tidak menggunakan form input atau database. Kontak calon klien diarahkan langsung melalui WhatsApp.
- **AI Search Ready:** Jawaban langsung, metadata unik, schema, breadcrumb, internal link, sitemap, dan `llms.txt`.
- **Knowledge Base:** Delapan panduan lelang online yang merujuk sumber resmi DJKN.
- **Transparansi Layanan:** Menegaskan independensi Axiom Systems, disiplin limit, dan tidak adanya jaminan kemenangan.
- **Bukti Hasil:** Galeri dokumentasi hasil dan log penawaran dari sesi yang telah ditangani.
- **Markdown for Agents:** `Accept: text/markdown` menghasilkan konten Markdown bersih, sedangkan browser tetap menerima HTML.
- **Agent Discovery:** Homepage mengirim `Link` response header menuju `llms.txt` dan `sitemap.xml`.
- **Sangat Ringan & Cepat:** HTML + CSS + JS murni tanpa framework JS berat (skor Lighthouse tinggi).
- **Desain Modern:** Dark mode elegan dengan aksen emerald (`#00E599`), sky cyan, dan kaca glassmorphism.

## Validasi Lokal

```bash
node scripts/generate-pages.mjs
node scripts/generate-markdown.mjs
node scripts/validate-site.mjs
node scripts/validate-markdown-negotiation.mjs
npx html-validate 404.html index.html faq/index.html jasa-joki-lelang/index.html cara-kerja/index.html biaya/index.html tentang/index.html kontak/index.html case-study/index.html bukti-kemenangan/index.html berita/*/index.html panduan/*/index.html
npx wrangler dev
```

Generator Markdown membutuhkan `pandoc`. Setelah halaman HTML berubah, jalankan generator halaman lalu generator Markdown agar kedua representasi tetap sinkron.

Pengujian content negotiation:

```bash
curl https://joki-lelang.axiomsystemsco.com/jasa-joki-lelang/ \
  -H "Accept: text/markdown"
```

## 🌐 Cara Deploy

### 1. Cloudflare Workers (Rekomendasi)
1. Push repo ini ke GitHub / GitLab.
2. Hubungkan repository melalui Workers Builds.
3. Gunakan deploy command `npx wrangler deploy`.
4. Wrangler mengunggah aset statis dan `worker.js` dalam satu deployment.

### 2. GitHub Pages
1. Masuk ke **Settings** repository di GitHub.
2. Navigasi ke menu **Pages** (Sisi kiri).
3. Di bagian **Source**, pilih branch `main` (atau `master`) dan folder `/ (root)`.
4. Simpan. Halaman akan aktif di `https://<username>.github.io/<repo-name>`.

---

&copy; 2026 Axiom Lelang. Independen & Terpisah dari Repository Bot.
