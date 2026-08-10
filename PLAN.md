# Rencana Implementasi AI Search & SEO — Axiom Systems

**Project:** `lelang-landing`
**Branch:** `feat/ai-search-seo`
**Tanggal:** 10 Agustus 2026
**Status:** Implementasi lokal selesai — menunggu QA visual dan branch preview
**Sumber utama:** [`BLUEPRINT_AI_SEARCH.md`](BLUEPRINT_AI_SEARCH.md)
**Stack:** Vanilla HTML, CSS, dan JavaScript di Cloudflare Pages

---

## 1. Tujuan

Meningkatkan kemampuan website untuk:

- diindeks dan dipahami oleh mesin pencari;
- memberikan jawaban yang mudah dikutip oleh AI search;
- membangun entitas brand Axiom Systems secara konsisten;
- menangkap pencarian informasional dan komersial seputar lelang online;
- memperkuat kepercayaan tanpa klaim berlebihan;
- mengarahkan pengunjung berkualitas ke konsultasi WhatsApp;
- tetap ringan, statis, dan mudah dideploy melalui Cloudflare Pages.

---

## 2. Keputusan Implementasi

### 2.1 Tetap menggunakan HTML statis

Website belum perlu dimigrasikan ke Astro pada tahap ini. Struktur saat ini masih kecil dan dapat dikembangkan dengan HTML statis tanpa menambah proses build atau risiko deployment.

Migrasi ke Astro baru dipertimbangkan jika:

- jumlah artikel sudah lebih dari 15–20 halaman;
- metadata dan komponen berulang sulit dipelihara;
- dibutuhkan koleksi konten, template artikel, atau authoring Markdown;
- perubahan halaman manual mulai menimbulkan inkonsistensi.

### 2.2 Brand architecture

Gunakan identitas berikut secara konsisten:

- **Entitas/perusahaan:** Axiom Systems
- **Nama layanan:** Axiom Lelang
- **Penyebutan utama:** “Axiom Lelang, layanan pendampingan lelang online dari Axiom Systems.”

Hindari variasi identitas yang tidak diperlukan seperti “Axiom Systems Co”, “Axiom System”, atau hanya “Axiom” dalam metadata utama dan structured data.

### 2.3 URL publik

Gunakan URL bersih tanpa ekstensi `.html` pada canonical, sitemap, navigasi, dan internal link.

Contoh:

- `/faq`
- `/jasa-joki-lelang`
- `/panduan/cara-ikut-lelang-online`

File fisik tetap dapat berupa `.html` selama Cloudflare Pages melayani clean URL dengan benar.

---

## 3. Kondisi Awal dan Temuan Audit

Website saat ini sudah memiliki:

- landing page utama;
- halaman FAQ;
- metadata dasar;
- Open Graph dan Twitter Card;
- JSON-LD dasar;
- `robots.txt`;
- `sitemap.xml`;
- `llms.txt`;
- CTA WhatsApp;
- desain responsif berbasis HTML/CSS/JS statis.

Hal yang perlu diperbaiki:

- identitas brand masih bercampur antara Axiom Lelang dan Axiom Systems Co;
- beberapa klaim terlalu absolut atau belum memiliki bukti yang ditampilkan;
- halaman komersial dan knowledge base belum tersedia;
- FAQ schema berulang di beranda dan halaman FAQ;
- struktur internal link masih terbatas;
- URL internal masih bercampur antara clean URL dan `.html`;
- `llms.txt` mengandung beberapa klaim yang perlu diperhalus;
- metadata dan schema belum menggunakan entity ID yang sepenuhnya konsisten;
- sitemap baru mencakup dua URL.

---

## 4. Guardrail Konten dan Compliance

### 4.1 Pesan yang wajib terlihat

- Axiom Systems adalah penyedia layanan independen dan bukan bagian dari DJKN/KPKNL.
- Layanan tidak menjamin kemenangan lelang.
- Hasil lelang bergantung pada persaingan, mekanisme lelang, dan anggaran peserta.
- Penawaran dijalankan berdasarkan instruksi dan plafon anggaran yang disepakati.
- Proses tetap mengikuti mekanisme resmi yang tersedia di `lelang.go.id`.
- Klien bertanggung jawab memeriksa dokumen, kondisi, dan kelayakan lot.

### 4.2 Klaim yang harus dihapus atau ditulis ulang

- “Pasti menang” atau makna yang setara.
- “100% legal” tanpa konteks dan dasar yang jelas.
- “Anti lag server” sebagai jaminan hasil.
- Angka latency atau kecepatan tanpa bukti pengukuran publik.
- Klaim keamanan teknis seperti jenis enkripsi apabila implementasinya tidak dapat dibuktikan.
- Klaim bahwa penawaran detik terakhir selalu mencegah pesaing membalas.
- Klaim pengembalian UJL sebagai jaminan dari Axiom Systems.

### 4.3 Prinsip penulisan

- Gunakan bahasa Indonesia yang jelas dan alami.
- Jawab pertanyaan utama di awal halaman.
- Bedakan fakta, saran, dan penawaran layanan.
- Utamakan sumber resmi untuk penjelasan kebijakan lelang.
- Hindari pengulangan keyword yang tidak alami.
- Structured data harus sama dengan konten yang terlihat.

---

## 5. Arsitektur Halaman

### 5.1 Halaman inti

| Prioritas | URL | Tujuan pencarian | CTA utama |
|---|---|---|---|
| P0 | `/` | Brand dan ringkasan layanan | Konsultasi via WhatsApp |
| P0 | `/jasa-joki-lelang` | Jasa joki/pendamping lelang | Kirim link lot |
| P0 | `/cara-kerja` | Proses pendampingan | Konsultasi budget |
| P0 | `/biaya` | Informasi biaya dan skema layanan | Tanya biaya |
| P0 | `/faq` | Jawaban keberatan dan pertanyaan umum | Ajukan pertanyaan |
| P1 | `/tentang` | Entitas, pengalaman, dan batas layanan | Hubungi Axiom Systems |
| P1 | `/kontak` | Kanal kontak resmi | Buka WhatsApp |
| P2 | `/case-study` | Bukti proses dan pembelajaran | Diskusikan lot |

### 5.2 Knowledge base tahap pertama

| Prioritas | URL | Target intent |
|---|---|---|
| P0 | `/panduan/apa-itu-lelang-go-id` | Definisi platform dan mekanisme umum |
| P0 | `/panduan/cara-ikut-lelang-online` | Langkah mengikuti lelang online |
| P0 | `/panduan/cara-daftar-lelang-go-id` | Proses pendaftaran peserta |
| P0 | `/panduan/apa-itu-open-bidding` | Definisi open bidding |
| P1 | `/panduan/cara-menentukan-budget-lelang` | Perencanaan batas anggaran |
| P1 | `/panduan/cara-menghindari-overbid` | Pencegahan overbid |
| P1 | `/panduan/apa-itu-uang-jaminan-lelang` | Penjelasan UJL |
| P1 | `/panduan/apa-yang-terjadi-saat-lelang-ditutup` | Tahap setelah penutupan |

---

## 6. Template Konten

### 6.1 Halaman layanan

Setiap halaman layanan minimal memiliki:

1. Breadcrumb.
2. H1 yang menjelaskan layanan secara langsung.
3. Ringkasan jawaban 40–70 kata.
4. Masalah pengguna yang relevan.
5. Penjelasan solusi dan ruang lingkup layanan.
6. Tahapan proses.
7. Batas layanan dan risiko.
8. FAQ yang benar-benar terlihat di halaman.
9. Internal link ke halaman terkait.
10. CTA WhatsApp dengan konteks pesan yang sesuai halaman.

### 6.2 Artikel panduan

Setiap artikel minimal memiliki:

1. Breadcrumb.
2. H1 yang sama dengan intent pencarian utama.
3. Jawaban langsung 40–70 kata di bagian awal.
4. Daftar isi jika artikel cukup panjang.
5. Penjelasan langkah demi langkah atau definisi terstruktur.
6. Peringatan, risiko, atau pengecualian penting.
7. Rujukan ke sumber resmi jika membahas aturan atau prosedur.
8. FAQ relevan.
9. Tiga atau lebih internal link yang kontekstual.
10. CTA lembut menuju halaman layanan.

---

## 7. Metadata dan Structured Data

### 7.1 Metadata wajib per halaman

- `<title>` unik;
- meta description unik;
- canonical absolut;
- `robots` index/follow;
- Open Graph URL, title, description, image, locale, dan site name;
- Twitter Card;
- satu H1 utama;
- favicon dan theme color;
- atribut `lang="id"`.

### 7.2 Pemetaan schema

| Jenis halaman | Schema utama |
|---|---|
| Beranda | `Organization`, `WebSite`, `WebPage` |
| Layanan | `Service`, `WebPage`, `BreadcrumbList` |
| FAQ | `FAQPage`, `WebPage`, `BreadcrumbList` |
| Artikel | `Article`, `WebPage`, `BreadcrumbList` |
| Tentang | `AboutPage`, `Organization`, `BreadcrumbList` |
| Kontak | `ContactPage`, `Organization`, `BreadcrumbList` |

Gunakan entity ID berikut secara konsisten:

- Organization: `https://joki-lelang.axiomsystemsco.com/#organization`
- WebSite: `https://joki-lelang.axiomsystemsco.com/#website`
- WebPage: URL halaman ditambah `#webpage`
- Service: URL halaman jasa ditambah `#service`

`Person` hanya ditambahkan apabila terdapat profil orang nyata yang terlihat dan informasinya telah disetujui untuk dipublikasikan.

---

## 8. Internal Linking

Aturan minimum:

- semua halaman dapat dicapai dari navigasi, footer, hub, atau sitemap HTML;
- artikel edukasi mengarah ke halaman jasa, FAQ, dan kontak;
- halaman FAQ mengarah ke cara kerja dan biaya;
- halaman biaya mengarah ke jasa dan kontak;
- artikel saling terhubung berdasarkan topik, bukan sekadar keyword;
- anchor text harus deskriptif dan tidak menggunakan “klik di sini”.

Alur utama:

```text
Artikel edukasi
  -> Jasa joki lelang
  -> Cara kerja
  -> FAQ
  -> Kontak/WhatsApp

Case study
  -> Cara kerja
  -> Biaya
  -> Kontak/WhatsApp
```

---

## 9. Fase Eksekusi

### Fase 0 — Baseline dan inventarisasi

- [x] Catat seluruh URL, title, description, H1, canonical, dan schema saat ini.
- [x] Validasi perilaku clean URL pada preview lokal Cloudflare Pages.
- [ ] Catat baseline Lighthouse untuk mobile dan desktop.
- [x] Periksa seluruh link dan aset lokal.
- [x] Inventarisasi klaim yang membutuhkan koreksi atau bukti.

**Selesai jika:** baseline terdokumentasi dan tidak ada asumsi teknis penting yang belum diperiksa.

### Fase 1 — Fondasi entity, trust, dan technical SEO

- [x] Standarkan nama Axiom Systems dan Axiom Lelang.
- [x] Revisi title, description, author, OG, dan Twitter metadata beranda/FAQ.
- [x] Revisi klaim absolut di HTML, JSON-LD, dan `llms.txt`.
- [x] Buat reusable pattern untuk header, footer, breadcrumb, CTA, dan disclaimer.
- [x] Rapikan JSON-LD beranda dan FAQ.
- [x] Konsistenkan canonical dan internal URL.
- [x] Pastikan FAQ schema sama dengan FAQ yang terlihat.

**Selesai jika:** identitas dan klaim konsisten di seluruh file publik yang sudah ada.

### Fase 2 — Halaman komersial P0

- [x] Buat `/jasa-joki-lelang`.
- [x] Buat `/cara-kerja`.
- [x] Buat `/biaya`.
- [x] Tingkatkan `/faq` berdasarkan pertanyaan pengguna dan compliance.
- [x] Tambahkan navigasi dan footer menuju halaman baru.
- [x] Tambahkan CTA WhatsApp kontekstual per halaman.

**Selesai jika:** empat halaman P0 lengkap, saling terhubung, responsif, dan dapat diindeks.

### Fase 3 — Entity dan contact pages

- [x] Buat `/tentang`.
- [x] Buat `/kontak`.
- [x] Tampilkan kanal kontak resmi yang disetujui.
- [x] Tambahkan identitas organisasi yang konsisten.
- [x] Tambahkan disclaimer independensi dari DJKN/KPKNL.

**Selesai jika:** mesin pencari dan pengguna dapat memahami siapa penyedia layanan dan cara menghubunginya.

### Fase 4 — Knowledge base P0

- [x] Buat artikel “Apa Itu lelang.go.id?”.
- [x] Buat artikel “Cara Ikut Lelang Online”.
- [x] Buat artikel “Cara Daftar lelang.go.id”.
- [x] Buat artikel “Apa Itu Open Bidding?”.
- [x] Tambahkan Article dan BreadcrumbList schema.
- [x] Tambahkan sumber resmi dan tanggal pembaruan.
- [x] Bangun internal linking antarpanduan dan halaman layanan.

**Selesai jika:** empat intent informasional utama memiliki jawaban lengkap dan dapat diakses crawler tanpa JavaScript.

### Fase 5 — Knowledge base P1 dan case study

- [x] Buat artikel penentuan budget.
- [x] Buat artikel pencegahan overbid.
- [x] Buat artikel Uang Jaminan Lelang.
- [x] Buat artikel proses setelah lelang ditutup.
- [x] Buat halaman hub `/case-study`.
- [x] Publikasikan case study hanya jika data dan izin publikasi tersedia.

**Selesai jika:** topik pendukung lengkap tanpa konten tipis atau testimoni fiktif.

### Fase 6 — Discovery files dan quality assurance

- [x] Perbarui `sitemap.xml` dengan seluruh URL indexable.
- [x] Perbarui `lastmod` berdasarkan perubahan nyata.
- [x] Tinjau ulang `robots.txt`.
- [x] Perbarui `llms.txt` agar faktual dan sesuai halaman publik.
- [x] Validasi HTML dan JSON-LD.
- [x] Jalankan pemeriksaan link rusak.
- [x] Uji keyboard navigation dan accessibility dasar.
- [ ] Uji tampilan mobile 320 px, 375 px, 768 px, dan desktop.
- [ ] Jalankan Lighthouse mobile dan desktop.
- [ ] Deploy branch preview Cloudflare Pages.
- [x] Lakukan smoke test pada preview lokal sebelum merge.

**Selesai jika:** tidak ada error kritis, URL preview berjalan, dan halaman siap direview sebelum merge ke `master`.

---

## 10. Rencana Commit

Gunakan commit kecil agar mudah direview dan dikembalikan jika diperlukan:

1. `docs: add AI search implementation plan`
2. `refactor: align brand entity and trust messaging`
3. `feat: add core service pages`
4. `feat: add about and contact pages`
5. `feat: add auction knowledge base`
6. `seo: add page metadata and structured data`
7. `seo: update sitemap robots and llms discovery files`
8. `test: validate links markup and responsive layout`

---

## 11. Definition of Done

Implementasi dianggap selesai apabila:

- [x] seluruh halaman P0 dan P1 yang disepakati tersedia;
- [x] nama Axiom Systems dan Axiom Lelang konsisten;
- [x] tidak ada klaim kemenangan atau hasil yang dijamin;
- [x] setiap halaman memiliki title, description, canonical, OG, Twitter Card, dan H1 unik;
- [x] structured data valid dan sesuai konten terlihat;
- [x] seluruh halaman penting tercantum di sitemap;
- [x] tidak ada halaman penting yang terblokir atau `noindex`;
- [x] tidak ada internal link rusak;
- [x] konten utama dapat dibaca tanpa JavaScript;
- [x] CTA WhatsApp berfungsi dan memiliki konteks pesan yang tepat;
- [x] layout berfungsi pada mobile dan desktop;
- [ ] branch preview Cloudflare Pages lolos smoke test;
- [ ] perubahan direview sebelum merge ke `master`.

---

## 12. Di Luar Scope Tahap Ini

- migrasi framework ke Astro atau Next.js;
- backend, database, dashboard, login, atau form penyimpanan data;
- otomatisasi penawaran atau perubahan sistem bot;
- pembuatan testimoni atau case study tanpa data nyata;
- jaminan ranking Google atau penyebutan oleh AI search;
- backlink berbayar atau teknik SEO manipulatif;
- perubahan langsung pada branch `master` sebelum review.
