# Changelog AI Search, Entity, dan SEO

## 11 Agustus 2026 — Final Readiness dan Deployment

- Menambahkan `AI_SEARCH_READINESS.md` berisi status Definition of Done, Acceptance Tests, bukti repository/production, dan blocker sign-off.
- Menambahkan `DEPLOYMENT.md` berisi arsitektur aktual, branch flow, preflight, dry-run, preview, smoke test, production, Cloudflare handoff, Search Console, serta rollback.
- Menambahkan `.assetsignore` agar file internal seperti PRD, dokumentasi, script, Worker source, konfigurasi, dan secret lokal tidak menjadi static asset.
- Memperluas validator untuk memastikan pola perlindungan asset internal tidak terhapus.
- Mencatat perbedaan branch dan production: repository memiliki 21 URL, sedangkan sitemap live masih 19 URL pada saat audit.
- Mencatat blocker redirect karena endpoint HTTP masih mengembalikan 200 dan belum mengarah permanen ke HTTPS.

## 11 Agustus 2026 — Phase 5 Measurement

- Menambahkan `SEO_AI_VISIBILITY.md` sebagai scorecard bulanan SEO, AI visibility, referral, conversion, dan external authority.
- Mendokumentasikan baseline yang sudah memiliki bukti dan menandai data yang belum tersedia sebagai `N/A`.
- Menetapkan segmentasi query branded/non-branded, sepuluh query AI tetap, prosedur snapshot, dan rumus mention/citation/entity accuracy.
- Menambahkan klasifikasi AI referrer, event CTA yang aman, guardrail privasi, indikator 30/60/90 hari, serta aturan pengambilan keputusan.
- Merekomendasikan Cloudflare Web Analytics untuk trafik dan referral, dengan catatan custom events dan UTM belum didukung sehingga CTA memerlukan solusi measurement terpisah.

## 11 Agustus 2026 — Phase 4 Authority Preparation

- Mengaudit hasil pencarian publik untuk nama perusahaan, nama layanan, dan kedua domain.
- Menetapkan GitHub sebagai satu-satunya profil eksternal resmi yang sudah dapat diverifikasi saat audit.
- Menambahkan `AUTHORITY_PLAN.md` berisi prioritas kanal, strategi authority bertingkat, rencana 30/60/90 hari, template pitch, guardrail, dan definition of done.
- Menambahkan `PROFILE_KIT.md` berisi matriks identitas, bio siap pakai, konfigurasi profil, post awal, pilar konten, serta checklist verifikasi.
- Menunda penambahan social `sameAs` sampai setiap profil benar-benar aktif dan terverifikasi.
- Menandai Google Business Profile sebagai bersyarat karena bisnis online-only tidak memenuhi kelayakan profil bisnis Google.

## 11 Agustus 2026 — Phase 3 Knowledge Layer

- Menambahkan panduan `/panduan/risiko-mengikuti-lelang-online/`.
- Menambahkan panduan `/panduan/apakah-joki-lelang-menjamin-menang/`.
- Melengkapi 10 dari 10 search intent prioritas PRD dengan halaman atau padanan yang relevan.
- Menambahkan direct answer, tabel, langkah mitigasi, batas layanan, FAQ singkat, sumber resmi, internal link, CTA, dan Article schema.
- Menambahkan kedua halaman ke homepage, sitemap, `llms.txt`, Worker Markdown negotiation, generator Markdown, dan validator.
- Menambah `CONTENT_PLAN.md` sebagai peta intent, standar konten, internal link, backlog, dan jadwal pemeliharaan.

## 11 Agustus 2026 — Phase 2 GitHub Entity

### Repository Axiom Lelang

- Menyusun ulang README mengikuti struktur Overview, Website, Operator, Service, Independence, Core Principles, Related Links, Technical Overview, Local Validation, dan Deployment.
- Menjelaskan hubungan Axiom Systems Co → Axiom Lelang.
- Menegaskan independensi, disiplin limit, serta tidak adanya jaminan kemenangan.
- Memperbarui metadata publik repository `NvlFR/lelang-landing`:
  - description;
  - homepage produksi;
  - topics `axiom-lelang`, `auction`, `cloudflare-workers`, `indonesia`, `lelang`, `seo`, `static-site`, dan `ai-search`.

README landing page masih berada pada branch feature dan baru tampil di GitHub setelah branch di-commit serta di-merge ke `master`.

### Organisasi GitHub

- Memperpendek dan melengkapi deskripsi organisasi agar tidak terpotong.
- Mempertahankan display name, website, email, dan lokasi yang sudah benar.
- Menambahkan pernyataan budget discipline dan no-guaranteed-win ke profile README organisasi.
- Perubahan profile README dipublikasikan melalui commit `fbdb085` pada `axiomsystemsco/.github`.
- Tidak menambahkan pin karena satu-satunya repository organisasi saat ini adalah repository profil `.github`; PRD melarang mengisi pin dengan repository yang tidak mewakili proyek terbaik.
- Tidak mentransfer `NvlFR/lelang-landing` ke organisasi karena transfer dapat memengaruhi deployment, remote, dan akses.

## 11 Agustus 2026 — Phase 1 Technical Foundation

- Menambahkan source of truth entitas di `scripts/site-config.mjs`.
- Menyeragamkan operator menjadi Axiom Systems Co pada 19 halaman.
- Menghubungkan schema Axiom Lelang ke ID organisasi `https://axiomsystemsco.com/#organization`.
- Menambahkan link website perusahaan dan GitHub organisasi pada seluruh halaman.
- Menambahkan izin eksplisit `OAI-SearchBot`.
- Memperbarui sitemap dan membangun ulang 19 representasi Markdown.
- Memperketat validator entity consistency.
- Menambahkan `ENTITY_MAP.md` dan `SEO_IMPLEMENTATION.md`.

## 11 Agustus 2026 — Phase 0 Audit

- Mengaudit repository, situs Axiom Lelang, domain perusahaan, organisasi GitHub, indexing evidence, schema, robots, sitemap, performa, content gap, dan konsistensi entitas.
- Mendokumentasikan hasil di `AUDIT.md` tanpa mengubah production pada fase audit.
