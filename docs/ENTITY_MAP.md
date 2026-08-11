# Entity Map Axiom Systems Co

Terakhir diperbarui: 11 Agustus 2026

Dokumen ini adalah source of truth untuk penamaan dan hubungan entitas. Nilai yang sama dipakai oleh metadata, copy, JSON-LD, GitHub, dan profil publik resmi.

```yaml
company:
  name: "Axiom Systems Co"
  website: "https://axiomsystemsco.com"
  entity_id: "https://axiomsystemsco.com/#organization"
  github: "https://github.com/axiomsystemsco"
  email: "hello@axiomsystemsco.com"
  country: "Indonesia"

service:
  name: "Axiom Lelang"
  website: "https://joki-lelang.axiomsystemsco.com"
  brand_id: "https://joki-lelang.axiomsystemsco.com/#brand"
  website_id: "https://joki-lelang.axiomsystemsco.com/#website"
  service_id: "https://joki-lelang.axiomsystemsco.com/jasa-joki-lelang/#service"
  operator: "Axiom Systems Co"
  type: "independent auction bidding assistance service"
  country: "Indonesia"

relationships:
  - subject: "Axiom Systems Co"
    predicate: "operates"
    object: "Axiom Lelang"
  - subject: "Axiom Lelang"
    predicate: "website"
    object: "https://joki-lelang.axiomsystemsco.com"
  - subject: "Axiom Systems Co"
    predicate: "official_profile"
    object: "https://github.com/axiomsystemsco"
```

## Aturan penyebutan

- Gunakan **Axiom Systems Co** untuk nama perusahaan/operator.
- Gunakan **Axiom Lelang** untuk nama layanan.
- Pada penyebutan hubungan pertama, gunakan: “Axiom Lelang adalah layanan pendampingan penawaran lelang online independen yang dioperasikan oleh Axiom Systems Co.”
- Jangan menyingkat nama perusahaan menjadi “Axiom Systems” pada metadata, schema, footer, byline, atau profil resmi.
- Jangan menyebut Axiom Lelang sebagai bagian dari DJKN, KPKNL, atau Kementerian Keuangan.
- Jangan menyebut layanan sebagai jaminan kemenangan atau memiliki kendali terhadap hasil resmi lelang.

## Implementasi di repository

Konfigurasi machine-readable untuk generator berada di `scripts/site-config.mjs`. Homepage masih berupa HTML statis, sehingga validator memastikan nama, ID organisasi, website perusahaan, dan GitHub tetap konsisten.

