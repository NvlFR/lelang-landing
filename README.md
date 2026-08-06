# Axiom Lelang — Landing Page Statis

Halaman landing page statis untuk layanan pendampingan & eksekusi bid lelang di `lelang.go.id`.

## 📁 Struktur Repo

```text
lelang-landing/
├── index.html   # Struktur HTML5 (Semantic, SEO-friendly, No Backend)
├── styles.css   # Vanilla CSS Modern System (Dark Mode, Glassmorphism)
├── script.js   # Interaktivitas UI ringan (FAQ, Navbar scroll, Smooth scroll)
└── README.md    # Dokumentasi deployment
```

## 🚀 Fitur Landing Page

- **Zero Backend & Data Safety:** Tidak menggunakan form input atau database. Kontak calon klien diarahkan langsung via *WhatsApp Deep Link* dan *Telegram Deep Link*.
- **Transparansi Layanan ("Yang Tidak Kami Janjikan"):** Menegaskan secara lugas bahwa bot adalah alat eksekusi presisi yang mematuhi limit budget, bukan jimat pasti menang melawan penawar berbudget lebih besar.
- **Sangat Ringan & Cepat:** HTML + CSS + JS murni tanpa framework JS berat (skor Lighthouse tinggi).
- **Desain Modern:** Dark mode elegan dengan aksen emerald (`#00E599`), sky cyan, dan kaca glassmorphism.

## 🌐 Cara Deploy

### 1. Cloudflare Pages (Rekomendasi)
1. Push repo ini ke GitHub / GitLab.
2. Buka dashboard Cloudflare Pages → **Create a project** → Connect Git.
3. Set **Build command**: (kosongkan)
4. Set **Build output directory**: `/` (atau `.` root).
5. Klik **Save and Deploy**.

### 2. GitHub Pages
1. Masuk ke **Settings** repository di GitHub.
2. Navigasi ke menu **Pages** (Sisi kiri).
3. Di bagian **Source**, pilih branch `main` (atau `master`) dan folder `/ (root)`.
4. Simpan. Halaman akan aktif di `https://<username>.github.io/<repo-name>`.

---

&copy; 2026 Axiom Lelang. Independen & Terpisah dari Repository Bot.
