# Plan Redesign: Axiom Lelang → Gladia.io Design Language

**Versi Dokumen:** 1.0.0  
**Tanggal:** 6 Agustus 2026  
**Status:** AKTIF — Menunggu Eksekusi  
**Target:** Redesign total `index.html` + `styles.css` + `script.js`  
**Framework:** Vanilla HTML/CSS/JS (tanpa framework tambahan)  
**Referensi Desain:** `https://gladia.io/`

---

## 1. Analisis Desain Gladia.io

Berdasarkan crawl data dan konten yang dianalisa dari `site-gladia.io/`, berikut DNA desain Gladia.io yang harus diadopsi:

### 1.1 Karakter Visual Utama Gladia.io

| Elemen | Deskripsi Gladia |
|---|---|
| **Background** | Pure black / near-black (`#08080A` atau `#0D0D0F`) dengan subtle texture |
| **Typography** | Serif/Modern sans kombinasi — heading bold, subtext ringan dan tipis |
| **Layout** | Full-width sections dengan generous white space, grid terstruktur rapi |
| **Hero** | Headline super besar (display text), subtext kecil, 2 CTA buttons berdampingan |
| **Announcement Bar** | Thin top bar dengan "news badge" (new feature) + link |
| **Navigation** | Transparent navbar dengan mega-menu dropdown, logo kiri, CTA kanan |
| **Section Structure** | Alternating dark/light sections, setiap section punya `eyebrow label` kecil |
| **Feature Grid** | 4-col icon grid untuk "Why teams build on X" |
| **Deep Dive Section** | Tab/pillar sections: tiap fitur utama dapat full-width spotlight section |
| **Comparison Table** | Tabel perbandingan dengan checkmarks vs kompetitor |
| **Testimonial Strip** | Scrolling/marquee testimonial cards — horizontal |
| **Final CTA** | Full-width dark/gradient banner dengan headline besar |
| **Footer** | Multi-column footer dengan logo, link groups, compliance badges |

### 1.2 Design Tokens Gladia

```
Primary Dark : #08080A — #0D0D0F
Card Surface : rgba(255,255,255,0.03) — #111115
Border       : rgba(255,255,255,0.08)
Text Primary : #FAFAFA
Text Muted   : #9CA3AF — #6B7280
Accent Green : #22C55E / emerald tones
Accent Blue  : #60A5FA / cyan tones  
CTA Primary  : White pill button (filled)
CTA Secondary: Outlined/ghost pill button
```

### 1.3 Animasi & Interaksi Khas Gladia

- **Announcement bar** di atas navbar dengan pill badge + animated dot
- **Navbar glass effect** yang scrolls ke opaque saat di-scroll
- **Hero headline** bisa ada gradient text atau highlighted word
- **Section eyebrow** — label kecil uppercase di atas setiap H2
- **Fade-in on scroll** — elemen muncul smooth saat masuk viewport
- **Horizontal marquee** untuk trusted logos / testimonial scroller
- **Hover cards** dengan subtle border glow saat hover
- **Pillar tabs** di feature deep-dive section — klik tab = konten berganti

---

## 2. Pemetaan Konten: Gladia → Axiom Lelang

| Gladia.io Section | Axiom Lelang Equivalent |
|---|---|
| Announcement bar ("Solaria-3 is live") | Bar → "⚡ Layanan Sesi Lelang Real-Time Aktif" |
| Hero — "AI Audio Infrastructure" | Hero — "Amankan Lot Lelang Impian Bebas Stress & Emosi Overbid" |
| "The foundation of every voice product" | "Fondasi Eksekusi Penawaran Lelang Presisi" |
| Capture → Transcribe → Enrich → Integrate (4 pillars) | Konsultasi → Persiapan → Eksekusi → Selesai (4 pillars) |
| "Why teams build on Gladia" (5-card grid) | "Mengapa Penawar Memilih Axiom Lelang" (5-card grid) |
| Comparison table | Perbandingan Manual vs Axiom (table format) |
| Testimonials marquee | Testimoni klien (horizontal scroll) |
| "The future is voice-first" final CTA | "Siap Mengamankan Lot Lelang Berikutnya?" final CTA |
| Footer multi-column | Footer dengan disclaimer hukum |

---

## 3. Struktur Section Baru (Gladia-Inspired)

```
[ANNOUNCEMENT BAR]
  → "⚡ Update: Layanan Snipe Mode kini tersedia untuk seluruh klien →"

[NAVBAR]
  Logo | Fitur | Cara Kerja | Batas Layanan | FAQ    [Konsultasi WA]

[HERO SECTION]
  — eyebrow: "EKSEKUSI PRESISI LELANG.GO.ID"
  — H1: "Amankan Lot Lelang Impian\nBebas Stress & Emosi Overbid"
  — subtext (max 2 baris, tipis)
  — [Hubungi via WhatsApp]  [Pelajari Cara Kerja ↓]
  — Stat row bawah: Sub-Detik | 100% Disiplin | Privasi Penuh

[TRUST STRIP / LOGO MARQUEE]
  → "Beroperasi di platform resmi:" + logo lelang.go.id, KPKNL, DJKN

[PROBLEM vs SOLUTION — PILLAR SECTION]
  — Section eyebrow: "KENAPA BANYAK PENAWAR GAGAL"
  — H2: "Dua jebakan terbesar yang merugikan penawar lelang"
  — Tab kiri: "Penawaran Manual ❌" | Tab kanan: "Solusi Axiom ✅"
  — Detail poin muncul per tab (interaktif)

[HOW IT WORKS — 4 STEPS]
  — eyebrow: "CARA KERJA"
  — 4 kartu horizontal dengan nomor besar: 01 → 02 → 03 → 04
    01: Konsultasi & Tentukan Limit
    02: Persiapan & Konfigurasi Sesi
    03: Monitoring Real-Time
    04: Eksekusi Detik Penutupan

[WHY AXIOM — FEATURE GRID]
  — eyebrow: "KEUNGGULAN LAYANAN"
  — H2: "Mengapa Investor Memilih Axiom Lelang"
  — 5–6 icon cards dalam grid 3-col

[COMPARISON TABLE]
  — eyebrow: "PERBANDINGAN LANGSUNG"
  — Tabel: Penawaran Manual | Axiom Lelang
  — Baris: Kecepatan Eksekusi, Budget Control, Risiko Emosi, Keamanan Akun, dsb.

[TRANSPARANSI SECTION] ← WAJIB ada berdasarkan PRD
  — eyebrow: "TRANSPARANSI LAYANAN"
  — H2: "Apa yang TIDAK kami janjikan"
  — 3 kartu disclaimer (no guarantee, budget cap, bukan pengondisian)
  — Summary banner

[FAQ ACCORDION]
  — eyebrow: "PERTANYAAN UMUM"

[FINAL CTA BANNER]
  — Full width dark banner
  — H2 besar
  — 2 CTA buttons

[FOOTER]
  — Multi-column: Brand desc | Links | Disclaimer
  — Bottom bar: copyright + legal

```

---

## 4. Stack Teknis & Keputusan Framework

### Keputusan: Tetap Vanilla HTML/CSS/JS

Berdasarkan analisa kompleksitas desain:

- Gladia.io menggunakan Next.js (dibuktikan dari struktur routes JSON yang sangat modular)
- Namun untuk **single-page landing** seperti Axiom Lelang, **semua fitur visual** Gladia bisa direplikasi dengan Vanilla HTML + CSS + JS
- Komponen yang perlu JS: announcement bar close, navbar scroll effect, tab switcher, marquee scroller, FAQ accordion, scroll reveal animations

**Kesimpulan:** Tetap Vanilla — tidak perlu Astro/Next.js untuk single-page ini.

> **Jika nanti diperlukan Astro:** Trigger utama adalah jika user minta halaman tambahan (blog, use-cases pages, dll). Untuk sekarang, Vanilla cukup.

### File yang Dimodifikasi

| File | Status | Deskripsi Perubahan |
|---|---|---|
| `index.html` | **TOTAL REWRITE** | Struktur HTML baru mengikuti layout Gladia |
| `styles.css` | **TOTAL REWRITE** | Design system baru: dark mode Axiom versi Gladia-style |
| `script.js` | **SIGNIFICANT UPDATE** | Tab switcher, marquee, reveal animations, navbar scroll |
| `COPYWRITING.md` | **UPDATE** | Tambah copy untuk section-section baru |
| `PRD.md` | **UPDATE** | Reflect design decision & checklist progress |

---

## 5. Design System: Axiom × Gladia

Menggabungkan design system dari `collor.md` dengan estetik Gladia:

### Color Tokens (Dark-First)

```css
/* === BACKGROUND SYSTEM === */
--bg-base      : #111111;   /* Carbon — deep dark base */
--bg-elevated  : #1A1A1A;   /* Graphite — card surface */
--bg-glass     : rgba(255,255,255,0.03); /* glassmorphism card */
--bg-light     : #F8F6ED;   /* Cream — light sections */

/* === BORDER === */
--border       : rgba(255,255,255,0.08);
--border-light : #D8D2C2;

/* === TEXT === */
--text-primary     : #F8F6ED;   /* Cream */
--text-muted       : #9CA3AF;
--text-dark        : #111111;

/* === ACCENT === */
--emerald      : #127369;   /* Brand accent */
--emerald-light: #15897E;
--gold         : #C89B3C;   /* Premium/warning accent */
--gold-light   : #D4A843;
```

### Typography Scale

```css
/* Display/Hero — Outfit Bold */
--text-display: clamp(2.5rem, 6vw, 5.5rem);   /* Hero H1 */
--text-h1     : clamp(2rem, 4vw, 3.5rem);
--text-h2     : clamp(1.5rem, 3vw, 2.25rem);
--text-h3     : 1.25rem;
--text-body   : 1rem;
--text-small  : 0.875rem;
--text-eyebrow: 0.75rem;    /* Section labels */
```

---

## 6. Checklist Eksekusi

### Phase 1 — Foundation (SEKARANG)
- [x] Analisa desain Gladia.io selesai
- [x] Buat `plan.md` ini
- [ ] Update `COPYWRITING.md` dengan copy section baru
- [ ] Update `PRD.md` reflect design decision v2

### Phase 2 — Redesign HTML & CSS
- [ ] Rewrite `index.html` dengan struktur section Gladia-style
- [ ] Rewrite `styles.css` dengan design system baru
- [ ] Implement: Announcement bar
- [ ] Implement: Navbar with glass effect
- [ ] Implement: Hero with display text + stat row
- [ ] Implement: Trust strip / logo marquee
- [ ] Implement: Problem vs Solution tab switcher
- [ ] Implement: How It Works 4-step horizontal cards
- [ ] Implement: Feature grid "Mengapa Axiom"
- [ ] Implement: Comparison table
- [ ] Implement: Transparansi section (WAJIB dari PRD)
- [ ] Implement: FAQ accordion
- [ ] Implement: Final CTA banner
- [ ] Implement: Multi-column footer

### Phase 3 — JS & Animations
- [ ] Update `script.js`: navbar scroll effect
- [ ] Update `script.js`: announcement bar dismiss
- [ ] Update `script.js`: tab switcher (Problem vs Solution)
- [ ] Update `script.js`: marquee/horizontal scroll animasi
- [ ] Update `script.js`: scroll reveal (IntersectionObserver)
- [ ] Update `script.js`: FAQ accordion

### Phase 4 — Polish
- [ ] Responsivitas mobile (320px–480px, 768px, 1024px+)
- [ ] WCAG contrast check
- [ ] Performance audit (Lighthouse ≥ 95)
- [ ] Favicon integration
- [ ] OG image meta

---

## 7. Aturan Agent yang Tidak Boleh Dilanggar

Saat mengeksekusi plan ini, agent **WAJIB** mematuhi:

1. **Zero Backend:** Tidak ada `<form>` database. Semua CTA → WhatsApp deep link.
2. **Guardrail Terminologi:** Tidak memakai `SnipeEngine`, `_ladder_war`, `BASTL_400`, `trigger_ms` di HTML publik.
3. **Transparansi Section WAJIB:** Section "Apa yang TIDAK kami janjikan" tidak boleh dihapus.
4. **Isolasi Repo:** Tidak menyalin file dari repo `bot-goid-py`.
5. **Budget Cap Copy:** Selalu tampilkan bahwa sistem berhenti di budget limit.

---

*Plan ini adalah dokumen hidup. Update checklist saat setiap fase selesai.*  
*© 2026 Axiom Lelang — Internal Planning Document*
