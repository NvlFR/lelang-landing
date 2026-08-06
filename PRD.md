# Product Requirements Document (PRD) — Lelang Landing Page

**Nama Produk:** Axiom Lelang — Landing Page Jasa Titip Bid Lelang  
**Versi Dokumen:** 2.0.0  
**Tanggal:** 6 Agustus 2026  
**Status Repo:** Terpisah (`lelang-landing`)  
**Target Hosting:** Cloudflare Pages / GitHub Pages  
**Referensi Desain:** `gladia.io` (Cloning Design Language)

---

## 1. Ringkasan Eksekutif & Tujuan Produk

Landing page ini dibuat sebagai **halaman pemasaran statis** satu halaman (single-page) untuk mempromosikan layanan jasa titip & pendampingan teknis penawaran lelang di platform **lelang.go.id**.

### Tujuan Utama
1. **Mengonversi Pengunjung Jadi Klien:** Mengarahkan calon pembeli aset lelang (rumah, tanah, mobil) untuk berkonsultasi via WhatsApp.
2. **Edukasi & Ekspektasi Transparan:** Menjelaskan keunggulan eksekusi presisi sekaligus memberikan edukasi jujur mengenai batas kemampuan layanan (tidak memberikan janji manis / garansi palsu pasti menang).
3. **Keamanan & Privasi Maksimal (Zero Backend):** Menghilangkan seluruh risiko penyimpanan data pribadi calon klien.

---

## 2. Target Audience (Buyer Persona)

1. **Investor Properti / Kendaraan Lelang**
   - Mengincar margin dari aset lelang murah.
   - Paham nilai pasar tapi tidak punya waktu atau sering kalah karena koneksi internet lambat di detik penutupan.
2. **Pembeli Rumah / Aset Pertama (End-User)**
   - Ingin membeli rumah lelang untuk ditempati sendiri.
   - Takut emosi terpancing hingga membeli di atas harga pasar (overbid).
   - Membutuhkan sistem pendampingan yang disiplin mematuhi batas budget aman.

---

## 3. 🚨 Aturan & Guardrail Utama untuk AI Agent (Agent Directives)

Jika Anda adalah **AI Agent** yang ditugaskan mengerjakan atau mengedit repository ini, Anda **WAJIB** mematuhi aturan berikut tanpa pengecualian:

### A. Isolasi Repo (Strict Repository Boundary)
- Repo ini (`lelang-landing`) **TIDAK BOLEH** digabungkan dengan repo bot backend/engine (`bot-goid-py`).
- Dilarang mengimpor, meniru, atau menyalin file sensitif dari repo bot.

### B. Kerahasiaan Data & Tanpa Form (Zero Data Storage)
- **TIDAK BOLEH** membuat form `<form>` yang meminta NIK, PIN, password, nomor rekening, atau dokumen pribadi pengguna.
- Seluruh interaksi dan konversi **WAJIB** menggunakan Deep Link:
  - WhatsApp: `https://wa.me/<nomor>?text=<pesan_otomatis>`

### C. Terminologi Publik vs Terminologi Kode Internal
- ❌ **Dilarang:** `_ladder_war`, `trigger_ms`, `SnipeEngine`, `Precision Snipe`, `SHOT_COUNT`, `BASTL_400`
- ✅ **Gunakan istilah publik:** "Pendampingan Eksekusi Presisi", "Strict Budget Cap Brake", "Monitoring Real-Time", "Eksekusi Sub-Detik Penutupan"

### D. Keberadaan Wajib Section *"Yang Tidak Kami Janjikan"*
- Landing page ini **HARUS** menyertakan bagian disclaimer transparan mengenai batas layanan.
- **Tidak boleh dihapus** bahkan saat redesign.

---

## 4. Persyaratan Desain & UI/UX — v2.0 (Gladia-Style)

### 4.1 Keputusan Framework

| Opsi | Status | Alasan |
|---|---|---|
| Vanilla HTML/CSS/JS | ✅ **DIPILIH** | Single-page tidak butuh framework berat |
| Astro | ⏳ Reserved | Digunakan jika muncul kebutuhan multi-page (blog, use-cases) |
| Next.js | ❌ Tidak diperlukan | Overkill untuk static landing page |

### 4.2 Design DNA dari Gladia.io

Berikut elemen visual kunci Gladia.io yang diadopsi:

| Elemen | Implementasi di Axiom Lelang |
|---|---|
| **Announcement Bar** | Top bar tipis dismissible — "⚡ Baru: Snipe Mode aktif →" |
| **Pure Dark Background** | `#111111` Carbon base — bukan dark navy lama |
| **Display Typography** | Hero H1 `clamp(2.5rem, 6vw, 5.5rem)` — Outfit Bold |
| **Section Eyebrow Labels** | Label uppercase kecil di atas setiap H2 |
| **Tab Switcher** | Problem vs Solution dengan tab interaktif |
| **4-Step Horizontal Cards** | Cara Kerja dengan nomor besar 01–04 |
| **Feature Grid 3×2** | Keunggulan Axiom dalam 6 icon cards |
| **Comparison Table** | Tabel perbandingan Manual vs Axiom |
| **Testimonial/Trust Marquee** | Horizontal scrolling trust strip |
| **Full-Width Final CTA** | Dark banner dengan headline besar + 2 CTA |
| **Multi-Column Footer** | Link groups + disclaimer legal |

### 4.3 Color System v2.0 (Axiom × Gladia)

```css
/* Background */
--bg-base      : #111111;               /* Carbon */
--bg-elevated  : #1A1A1A;               /* Graphite */
--bg-glass     : rgba(255,255,255,0.03);
--bg-light     : #F8F6ED;               /* Cream */

/* Border */
--border       : rgba(255,255,255,0.08);
--border-light : #D8D2C2;

/* Text */
--text-primary : #F8F6ED;   /* Cream */
--text-muted   : #9CA3AF;
--text-dark    : #111111;

/* Accent */
--emerald      : #127369;
--emerald-light: #15897E;
--gold         : #C89B3C;   /* Dipakai di section transparansi */
```

### 4.4 Typography Scale

```css
--text-display : clamp(2.5rem, 6vw, 5.5rem);  /* Hero H1 */
--text-h2      : clamp(1.5rem, 3vw, 2.25rem);
--font-heading : 'Outfit', sans-serif;
--font-body    : 'Inter', sans-serif;
```

### 4.5 Animasi & Interaksi

- Navbar: transparent → glass blur on scroll
- Announcement bar: dismissible dengan localStorage
- Section eyebrows: fade-in on scroll (IntersectionObserver)
- Tab switcher: smooth content swap
- Marquee: CSS infinite scroll animation
- FAQ accordion: smooth height transition
- Hover cards: subtle border glow

---

## 5. Struktur Halaman v2.0 (Gladia-Inspired)

| # | Section | Komponen Utama | Tujuan |
|---|---|---|---|
| 0 | **Announcement Bar** | Pill badge + teks + close button | Kesan aktif & update |
| 1 | **Navbar** | Logo, nav links, CTA WA, mobile toggle | Navigasi & brand |
| 2 | **Hero** | Eyebrow, Display H1, subtext, 2 CTA, stat row | Hook 3 detik pertama |
| 3 | **Trust Strip** | Logo platform resmi + marquee | Social proof legalitas |
| 4 | **Problem vs Solution** | Eyebrow, H2, Tab switcher interaktif | Edukasi + agitasi |
| 5 | **Cara Kerja** | Eyebrow, H2, 4-step horizontal cards | Alur kerja simpel |
| 6 | **Feature Grid** | Eyebrow, H2, 6 icon cards 3×2 | Keunggulan layanan |
| 7 | **Comparison Table** | Eyebrow, H2, tabel 6 baris | Perbandingan langsung |
| 8 | **Transparansi** ⚠️ | Badge, H2, 3 cards, summary banner | **WAJIB** — disclaimer |
| 9 | **FAQ Accordion** | Eyebrow, H2, 6 Q&A | Hilangkan keraguan |
| 10 | **Final CTA** | Full-width dark banner, H2, 2 CTA | Konversi akhir |
| 11 | **Footer** | Brand, link groups, disclaimer, copyright | Legal & navigasi |

---

## 6. Target Performa & SEO

- **Lighthouse Performance Score:** ≥ 95
- **Lighthouse Accessibility Score:** ≥ 95
- **Lighthouse Best Practices Score:** ≥ 95
- **Lighthouse SEO Score:** ≥ 95
- **Load Time:** < 1.0 detik pada jaringan 4G
- **Responsivitas:** 320px, 480px, 768px, 1024px+

---

## 7. Backlog / Checklist Tugas AI Agent

### Phase 1 — Perencanaan
- [x] Inisialisasi repo terpisah `lelang-landing` dan git init.
- [x] Pembuatan fondasi `index.html`, `styles.css`, `script.js` (v1).
- [x] Penulisan section transparansi *"Yang Tidak Kami Janjikan"*.
- [x] Pembuatan dokumen `PRD.md` v1.
- [x] Analisa desain referensi `gladia.io`.
- [x] Pembuatan `plan.md` redesign.
- [x] Update `COPYWRITING.md` v2.0.
- [x] Update `PRD.md` v2.0 (dokumen ini).

### Phase 2 — Redesign Eksekusi
- [ ] Rewrite `index.html` — struktur section Gladia-style.
- [ ] Rewrite `styles.css` — design system v2.0.
- [ ] Implement Announcement Bar.
- [ ] Implement Navbar glass effect.
- [ ] Implement Hero display text + stat row.
- [ ] Implement Trust strip / logo marquee.
- [ ] Implement Problem vs Solution tab switcher.
- [ ] Implement How It Works 4-step cards.
- [ ] Implement Feature Grid 3×2.
- [ ] Implement Comparison Table.
- [ ] Implement Transparansi section (WAJIB).
- [ ] Implement FAQ Accordion (6 Q&A).
- [ ] Implement Final CTA Banner.
- [ ] Implement Multi-column Footer.

### Phase 3 — JS & Animasi
- [ ] Update `script.js`: navbar scroll effect.
- [ ] Update `script.js`: announcement bar dismiss.
- [ ] Update `script.js`: tab switcher.
- [ ] Update `script.js`: marquee animation.
- [ ] Update `script.js`: scroll reveal (IntersectionObserver).
- [ ] Update `script.js`: FAQ accordion.

### Phase 4 — QA & Deploy
- [ ] **Kustomisasi Kontak:** Ganti placeholder nomor WhatsApp.
- [ ] Responsivitas mobile 100%.
- [ ] WCAG contrast check.
- [ ] Favicon integration.
- [ ] OG image meta.
- [ ] Audit Lighthouse.
- [ ] Deployment ke Cloudflare Pages / GitHub Pages.

---

&copy; 2026 Axiom Lelang. Dokumen PRD Internal Repo `lelang-landing` — Versi 2.0.0
