# Axiom Systems — AI Search & SEO Blueprint
## Project: lelang-landing

## Tujuan
Membangun landing page dan knowledge base yang:
- mudah diindeks Google
- mudah dipahami AI search
- kuat untuk brand entity Axiom Systems
- tetap ringan dan gratis untuk deploy
- fokus pada konversi WhatsApp

## Prinsip Utama
1. Static-first
2. Content-first
3. Entity-first
4. Trust-first
5. Conversion-first

---

## Rekomendasi Framework
### Pilihan utama: Astro
Alasan:
- output static ringan
- SEO friendly
- cocok untuk landing page + blog + FAQ
- mudah deploy ke platform gratis
- bisa tetap pakai HTML/CSS/vanilla JS bila perlu

### Alternatif:
- Eleventy / 11ty: super ringan, cocok untuk site sederhana
- Next.js: hanya jika nanti butuh dashboard, auth, atau fitur app kompleks

---

## Arsitektur Konten
### Halaman utama
- `/`
- `/jasa-joki-lelang`
- `/cara-kerja`
- `/biaya`
- `/faq`
- `/case-study`
- `/tentang`
- `/kontak`

### Konten artikel / knowledge base
- `/panduan/cara-ikut-lelang-go-id`
- `/panduan/cara-menentukan-budget-lelang`
- `/panduan/cara-menghindari-overbid`
- `/panduan/apa-itu-open-bidding`
- `/panduan/apa-itu-uang-jaminan-lelang`
- `/panduan/apa-yang-terjadi-saat-lelang-ditutup`

---

## Target Keyword
### Informational
- apa itu lelang.go.id
- cara ikut lelang online
- cara daftar lelang.go.id
- apa itu open bidding
- cara menentukan budget lelang
- cara menghindari overbid

### Commercial
- jasa joki lelang
- jasa pendamping lelang
- jasa lelang online
- jasa bantu ikut lelang
- jasa eksekusi lelang

### High intent
- jasa joki lelang terpercaya
- jasa joki lelang Indonesia
- jasa joki lelang lelang.go.id
- jasa pendamping lelang online

---

## Brand Entity Rules
Gunakan nama brand secara konsisten:
- Axiom Systems

Jangan campur dengan:
- Axiom
- Axiom System
- Axiom Tech
- Axiom Co

### Entity yang harus jelas di halaman
- Brand: Axiom Systems
- Service: pendampingan / eksekusi penawaran lelang online
- Platform terkait: lelang.go.id
- Lokasi operasional: jika ingin ditampilkan, buat konsisten
- Kanal kontak: WhatsApp, email, sosial media

---

## SEO Technical Checklist
### Indexing
- pastikan halaman penting tidak di-`noindex`
- submit sitemap.xml ke Google Search Console
- pastikan robots.txt tidak memblokir bot penting
- gunakan canonical URL

### Performance
- gambar pakai format modern bila memungkinkan
- kompres gambar
- lazy-load image di bawah fold
- minimalkan JS
- gunakan font seperlunya

### Metadata wajib
Setiap halaman harus punya:
- title unik
- meta description unik
- Open Graph
- Twitter card
- canonical
- H1 yang jelas
- internal linking

---

## Structured Data
Tambahkan schema yang relevan:
- Organization
- WebSite
- WebPage
- Service
- FAQPage
- Article
- BreadcrumbList
- Person

### Catatan
Schema harus sesuai konten yang terlihat di halaman.

---

## Trust & Compliance Messaging
### Wajib ditampilkan
- tidak menjanjikan kemenangan 100%
- hasil lelang tergantung persaingan dan budget
- tidak melampaui budget klien
- proses mengikuti mekanisme resmi lelang.go.id

### Hindari klaim berlebihan
Jangan memakai klaim:
- pasti menang
- 100% legal tanpa konteks
- latensi angka tanpa bukti
- jaminan hasil

---

## Conversion CTA
Primary CTA:
- Konsultasi via WhatsApp

Secondary CTA:
- Kirim link lot
- Cek kelayakan budget
- Tanya biaya

### CTA copy yang disarankan
- Kirim link lot lelang Anda
- Cek lot Anda sekarang
- Konsultasi budget sebelum ikut lelang

---

## Content Plan 30 Hari
### Minggu 1
- apa itu lelang.go.id
- apa itu open bidding
- cara ikut lelang online
- cara daftar lelang.go.id

### Minggu 2
- cara menentukan budget lelang
- apa itu uang jaminan lelang
- cara menghindari overbid
- kenapa peserta kalah di detik terakhir

### Minggu 3
- jasa pendamping lelang itu apa
- kapan perlu bantuan ikut lelang
- risiko ikut lelang tanpa strategi
- cara membaca peluang lot

### Minggu 4
- case study kalah
- case study menang
- FAQ biaya
- FAQ proses kerja

---

## Internal Linking Strategy
Setiap artikel harus link ke:
- halaman jasa
- halaman FAQ
- halaman kontak
- artikel relevan lain

Contoh:
- artikel edukasi -> CTA ke jasa
- FAQ -> link ke cara kerja
- case study -> link ke biaya

---

## AI Visibility Strategy
Tujuan utama:
- saat AI menjawab pertanyaan soal lelang online, Axiom punya sinyal sebagai entitas yang relevan

Yang harus ada:
- halaman jawaban langsung
- konten definisi
- FAQ lengkap
- artikel edukasi
- testimoni/case study
- profil brand yang konsisten di web

---

## Deploy Strategy
### Disarankan
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages jika benar-benar statis sederhana

### Pilihan stack ringan
- Astro + Markdown/MDX
- CSS biasa atau Tailwind kalau perlu
- vanilla JS seperlunya

---

## Struktur Folder yang Disarankan
```txt
src/
  components/
  layouts/
  pages/
    index.astro
    jasa-joki-lelang.astro
    cara-kerja.astro
    biaya.astro
    faq.astro
    case-study/
    panduan/
  content/
    blog/
    faq/
  styles/
  utils/
public/