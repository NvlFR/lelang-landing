import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = 'https://joki-lelang.axiomsystemsco.com';
const filter = resolve(root, 'scripts/markdown-filter.lua');

const pages = [
  ['/', 'index.html'],
  ['/jasa-joki-lelang/', 'jasa-joki-lelang/index.html'],
  ['/cara-kerja/', 'cara-kerja/index.html'],
  ['/biaya/', 'biaya/index.html'],
  ['/faq/', 'faq/index.html'],
  ['/tentang/', 'tentang/index.html'],
  ['/kontak/', 'kontak/index.html'],
  ['/case-study/', 'case-study/index.html'],
  ['/bukti-kemenangan/', 'bukti-kemenangan/index.html'],
  ['/berita/gangguan-sso-djkn-risalah-lelang-11-agustus-2026/', 'berita/gangguan-sso-djkn-risalah-lelang-11-agustus-2026/index.html'],
  ['/panduan/apa-itu-lelang-go-id/', 'panduan/apa-itu-lelang-go-id/index.html'],
  ['/panduan/cara-ikut-lelang-online/', 'panduan/cara-ikut-lelang-online/index.html'],
  ['/panduan/cara-daftar-lelang-go-id/', 'panduan/cara-daftar-lelang-go-id/index.html'],
  ['/panduan/apa-itu-open-bidding/', 'panduan/apa-itu-open-bidding/index.html'],
  ['/panduan/cara-menentukan-budget-lelang/', 'panduan/cara-menentukan-budget-lelang/index.html'],
  ['/panduan/cara-menghindari-overbid/', 'panduan/cara-menghindari-overbid/index.html'],
  ['/panduan/apa-itu-uang-jaminan-lelang/', 'panduan/apa-itu-uang-jaminan-lelang/index.html'],
  ['/panduan/apa-yang-terjadi-saat-lelang-ditutup/', 'panduan/apa-yang-terjadi-saat-lelang-ditutup/index.html']
];

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function metaContent(html, attribute, value) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${value}"\\s+content="([^"]+)"`, 'i');
  return decodeEntities(html.match(pattern)?.[1] ?? '');
}

function yamlString(value) {
  return JSON.stringify(value).replaceAll('\\u2028', ' ').replaceAll('\\u2029', ' ');
}

function extractMain(html, file) {
  const main = html.match(/<main(?:\s[^>]*)?>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) throw new Error(`${file}: elemen <main> tidak ditemukan`);

  return main
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/<nav(?:\s[^>]*)?>[\s\S]*?<\/nav>/gi, '')
    .replace(/<aside(?:\s[^>]*)?>[\s\S]*?<\/aside>/gi, '')
    .replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi, '')
    .replace(/<noscript(?:\s[^>]*)?>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg(?:\s[^>]*)?>[\s\S]*?<\/svg>/gi, '')
    .replace(/<button[^>]*class="[^"]*faq-trigger[^"]*"[^>]*>[\s\S]*?<span[^>]*itemprop="name"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/button>/gi, '<h2>$1</h2>')
    .replace(/<button(?:\s[^>]*)?>([\s\S]*?)<\/button>/gi, '$1')
    .replace(/<div class="axiom-brand-title">([\s\S]*?)<\/div>/gi, '<span>$1</span>')
    .replace(/<span>Pelajari topik terkait →<\/span>/gi, '')
    .replace(/<\/span>\s*<span/gi, '</span>\n<span')
    .replace(/<\/strong>\s*<span/gi, '</strong>\n<span')
    .replace(/<\/a>\s*<a/gi, '</a>\n<a');
}

function toAbsoluteLinks(markdown, canonical) {
  return markdown
    .replace(/\]\(\/(?!\/)/g, `](${site}/`)
    .replace(/\]\(#/g, `](${canonical}#`);
}

async function generate(route, file) {
  const html = await readFile(resolve(root, file), 'utf8');
  const title = metaContent(html, 'property', 'og:title') || html.match(/<title>([^<]+)<\/title>/i)?.[1] || '';
  const description = metaContent(html, 'name', 'description');
  const image = metaContent(html, 'property', 'og:image');
  const canonical = `${site}${route}`;
  const fragment = extractMain(html, file);

  const result = spawnSync('pandoc', [
    '--from=html',
    '--to=gfm-raw_html',
    '--wrap=none',
    `--lua-filter=${filter}`
  ], {
    input: fragment,
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });

  if (result.error?.code === 'ENOENT') {
    throw new Error('Pandoc tidak ditemukan. Instal pandoc untuk menghasilkan representasi Markdown.');
  }
  if (result.status !== 0) throw new Error(`${file}: ${result.stderr.trim()}`);

  const frontmatter = [
    '---',
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    ...(image ? [`image: ${yamlString(image)}`] : []),
    `canonical: ${yamlString(canonical)}`,
    '---',
    ''
  ].join('\n');

  const relativeOutput = route === '/' ? 'index.md' : `${route.slice(1)}index.md`;
  const output = resolve(root, '_markdown', relativeOutput);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${frontmatter}${toAbsoluteLinks(result.stdout, canonical).trim()}\n`);
}

for (const [route, file] of pages) await generate(route, file);

console.log(`Generated ${pages.length} Markdown representations.`);
