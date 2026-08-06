# Product Requirements Document (PRD) — Lelang Landing Page

**Nama Produk:** Axiom Lelang — Landing Page Jasa Titip Bid Lelang  
**Versi Dokumen:** 1.0.0  
**Tanggal:** 6 Agustus 2026  
**Status Repo:** Terpisah (`lelang-landing`)  
**Target Hosting:** Cloudflare Pages / GitHub Pages  

---

## 1. Ringkasan Eksekutif & Tujuan Produk

Landing page ini dibuat sebagai **halaman pemasaran statis** satu halaman (single-page) untuk mempromosikan layanan jasa titip & pendampingan teknis penawaran lelang di platform **lelang.go.id**.

### Tujuan Utama
1. **Mengonversi Pengunjung Jadi Klien:** Mengarahkan calon pembeli aset lelang (rumah, tanah, mobil) untuk berkonsultasi via WhatsApp / Telegram.
2. **Edukasi & Ekspektasi Transparan:** Menjelaskan keunggulan eksekusi presisi sekaligus memberikan edukasi jujur mengenai batas kemampuan layanan (tidak memberikan janji manis / garansi palsu pasti menang).
3. **Keamanan & Privasi Maksimal (Zero Backend):** Menghilangkan seluruh risiko penyimpanan data pribadi calon klien dengan tidak menyediakan form database atau backend input.

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
- Dilarang mengimpor, meniru, atau menyalin file sensitif dari repo bot (seperti `CLAUDE.md`, `version.py`, `sessions.json`, `logs/*.jsonl`).

### B. Kerahasiaan Data & Tanpa Form (Zero Data Storage)
- **TIDAK BOLEH** membuat form `<form>` yang meminta NIK, PIN, password, nomor rekening, atau dokumen pribadi pengguna.
- Seluruh interaksi dan konversi **WAJIB** menggunakan Deep Link langsung ke kontak instant messaging:
  - WhatsApp: `https://wa.me/<nomor>?text=<pesan_otomatis>`
  - Telegram: `https://t.me/<username>`
- **TIDAK BOLEH** menampilkan tangkapan layar riil yang mengandung `pesertaId`, NIK, PIN, nama klien, atau token sesi.

### C. Terminologi Publik vs Terminologi Kode Internal
- Dilarang menggunakan nama variabel/istilah internal bot di halaman web publik.
  - ❌ **Dilarang:** `_ladder_war`, `trigger_ms`, `SnipeEngine`, `Precision Snipe`, `SHOT_COUNT`, `BASTL_400`.
  - ✅ **Gunakan istilah publik:** "Pendampingan Eksekusi Presisi", "Strict Budget Cap Brake", "Monitoring Real-Time", "Eksekusi Sub-Detik Penutupan".

### D. Keberadaan Wajib Section *"Yang Tidak Kami Janjikan"*
- Landing page ini **HARUS** menyertakan bagian disclaimer transparan mengenai batas layanan:
  1. **Kalah itu mungkin:** Jika ada peserta lain yang budget-nya lebih besar dari limit disepakati, sistem tidak akan memaksa bid.
  2. **Disiplin Limit:** Sistem tidak pernah menaikkan bid di atas budget cap yang ditentukan di awal.
  3. **Bukan Pengondisian:** Ini adalah layanan pendampingan eksekusi teknis resmi, bukan praktek pengondisian pemenang lelang.

---

## 4. Persyaratan Desain & UI/UX

### Fondasi Aesthetic Saat Ini (v1)
- **Theme:** Dark Mode Modern (Deep Slate Navy `#0B0F17`, Surface `#111827`).
- **Accent Colors:** 
  - Emerald Green (`#00E599`) — Menyimbolkan presisi, keberhasilan, dan keamanan budget.
  - Sky Cyan (`#38BDF8`) — Menyimbolkan teknologi dan kejelasan informasi.
  - Warm Amber (`#F59E0B`) — Digunakan khusus pada section transparansi/disclaimer.
- **Typography:**
  - Font Heading: `Outfit` (Google Fonts)
  - Font Body: `Inter` (Google Fonts)
- **Komponen Visual:** Glassmorphism cards, glowing ambient gradients, badge indikator status live, FAQ accordion.

### Catatan untuk Agent Mengenai Eksplorasi Desain Masa Depan
User mungkin akan membawa inspirasi desain baru (misal: Bento Grid layout, referensi SaaS modern, dsb). Saat diminta memperbarui desain:
1. Pertahankan sifat **Zero Dependency Heavy Framework** (gunakan Vanilla CSS atau Tailwind CDN jika diminta eksplisit).
2. Pastikan responsivitas ponsel (Mobile-First) tetap 100% terjaga.
3. Selalu uji bahwa kontras warna (accessibility) memenuhi standar WCAG (teks mudah dibaca di background gelap).

---

## 5. Struktur Halaman & Fitur Konten

| Section | Komponen Utama | Tujuan Konten |
|---|---|---|
| **Navbar** | Logo brand, Link navigasi smooth-scroll, Button CTA WA | Navigasi cepat dan brand recognition |
| **Hero** | Badge status, Headline tajam, Subheadline, CTA WA + Telegram, Stat Cards | Menangkap perhatian dalam 3 detik pertama & dorong aksi langsung |
| **Problem vs Solution** | Card Perbandingan (Risiko Lelang Manual vs Solusi Axiom) | Mengedukasi pengunjung tentang kerugian overbid & lag internet |
| **Cara Kerja** | 3 Step Workflow (Konsultasi → Setup → Eksekusi) | Menjelaskan alur kerja sederhana tanpa kerumitan teknis |
| **Batas Layanan (Transparansi)** | Section Warning/Amber + 3 Card Batas Layanan | **Krusial:** Memotong komplain/sengketa di awal bila kalah pertama kali |
| **FAQ Accordion** | Interactive Q&A (Keamanan akun, UJL, Alasan detik terakhir) | Menjawab keraguan calon klien sebelum klik WhatsApp |
| **Final CTA** | Banner Banner Penutup + Button WA Besar | Konversi akhir sebelum footer |
| **Footer** | Copyright + Disclaimer Resmi (Independen dari DJKN/KPKNL) | Aspek legalitas dan batas tanggung jawab hukum |

---

## 6. Target Performa & SEO

- **Lighthouse Performance Score:** ≥ 95
- **Lighthouse Accessibility Score:** ≥ 95
- **Lighthouse Best Practices Score:** ≥ 95
- **Lighthouse SEO Score:** ≥ 95
- **Load Time:** < 1.0 detik pada jaringan 4G
- **Responsivitas:** Mendukung layar mobile (320px - 480px), tablet (768px), dan desktop (1024px+).

---

## 7. Backlog / Checklist Tugas AI Agent

Gunakan checklist ini untuk memandu pengerjaan agent selanjutnya:

- [x] Inisialisasi repo terpisah `lelang-landing` dan git init.
- [x] Pembuatan fondasi `index.html`, `styles.css`, `script.js`.
- [x] Penulisan section transparansi *"Yang Tidak Kami Janjikan"*.
- [x] Pembuatan dokumen `PRD.md` ini.
- [ ] **Kustomisasi Kontak:** Mengganti placeholder nomor WhatsApp (`wa.me/?text=...`) dan Telegram dengan nomor/link asli pengguna.
- [ ] **Integrasi Desain Baru:** Menyesuaikan style jika pengguna membawa referensi desain/palette warna baru.
- [ ] **Optimasi SEO & Open Graph (OG):** Menambahkan meta tag OG (image preview WhatsApp/Twitter saat link dibagikan).
- [ ] **Penambahan Favicon:** Menambahkan icon brand favicon di `<head>`.
- [ ] **Audit Lighthouse:** Menjalankan audit performa dan keterbacaan di browser.
- [ ] **Deployment Final:** Konfigurasi build ke Cloudflare Pages atau GitHub Pages.

---

&copy; 2026 Axiom Lelang. Dokumen PRD Internal Repo `lelang-landing`.
