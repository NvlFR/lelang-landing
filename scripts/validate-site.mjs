import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  'index.html', 'faq/index.html', 'jasa-joki-lelang/index.html', 'cara-kerja/index.html', 'biaya/index.html',
  'tentang/index.html', 'kontak/index.html', 'case-study/index.html',
  'bukti-kemenangan/index.html',
  'panduan/apa-itu-lelang-go-id/index.html', 'panduan/cara-ikut-lelang-online/index.html',
  'panduan/cara-daftar-lelang-go-id/index.html', 'panduan/apa-itu-open-bidding/index.html',
  'panduan/cara-menentukan-budget-lelang/index.html', 'panduan/cara-menghindari-overbid/index.html',
  'panduan/apa-itu-uang-jaminan-lelang/index.html',
  'panduan/apa-yang-terjadi-saat-lelang-ditutup/index.html'
];

const errors = [];
const warnings = [];
const canonicals = new Set();

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function publicTarget(path) {
  if (path === '/') return 'index.html';
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  if (/\.[a-z0-9]+$/i.test(clean)) return clean;
  return `${clean}/index.html`;
}

for (const file of pages) {
  const html = await readFile(resolve(root, file), 'utf8');
  const checks = [
    ['title', count(html, /<title>[^<]+<\/title>/gi), 1],
    ['meta description', count(html, /<meta\s+name="description"\s+content="[^"]+"\s*\/?>/gi), 1],
    ['canonical', count(html, /<link\s+rel="canonical"\s+href="[^"]+"\s*\/?>/gi), 1],
    ['H1', count(html, /<h1(?:\s[^>]*)?>/gi), 1]
  ];

  for (const [label, actual, expected] of checks) {
    if (actual !== expected) errors.push(`${file}: ${label} berjumlah ${actual}, seharusnya ${expected}`);
  }

  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  if (canonical) {
    if (canonicals.has(canonical)) errors.push(`${file}: canonical duplikat ${canonical}`);
    canonicals.add(canonical);
  }

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? '';
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1] ?? '';
  if (title.length > 65) warnings.push(`${file}: title ${title.length} karakter`);
  if (description.length > 170) warnings.push(`${file}: description ${description.length} karakter`);

  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${file}: JSON-LD tidak valid — ${error.message}`);
    }
  }

  for (const match of html.matchAll(/(?:href|src)="(\/[^"]+)"/gi)) {
    const url = match[1];
    if (url.startsWith('//')) continue;
    const path = url.split(/[?#]/)[0];
    if (!path) continue;
    try {
      await access(resolve(root, publicTarget(path)));
    } catch {
      errors.push(`${file}: target lokal tidak ditemukan ${url}`);
    }
  }
}

const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
for (const canonical of canonicals) {
  if (!sitemapUrls.has(canonical)) errors.push(`Sitemap belum memuat canonical ${canonical}`);
}
for (const url of sitemapUrls) {
  if (!canonicals.has(url)) errors.push(`Sitemap memuat URL tanpa halaman terdaftar ${url}`);
}

const publicText = await Promise.all(pages.map((file) => readFile(resolve(root, file), 'utf8')));
const forbiddenClaims = [
  /Axiom Systems Co/i,
  /100% legal/i,
  /SSL\/TLS 256/i,
  /LATENCY:\s*\d+/i,
  /Sub-Second Automated/i,
  /100% Official UJL/i
];
for (const pattern of forbiddenClaims) {
  if (publicText.some((html) => pattern.test(html))) errors.push(`Klaim terlarang masih ditemukan: ${pattern}`);
}

if (warnings.length) {
  console.log(`Peringatan (${warnings.length}):`);
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length) {
  console.error(`Validasi gagal (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validasi berhasil: ${pages.length} halaman, ${canonicals.size} canonical, ${sitemapUrls.size} URL sitemap.`);
