import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = 'https://joki-lelang.axiomsystemsco.com';
const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const workerConfig = JSON.parse(await readFile(resolve(root, 'wrangler.jsonc'), 'utf8'));
const source = await readFile(resolve(root, 'worker.js'), 'utf8');
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const { handleRequest } = await import(moduleUrl);

const errors = [];

function routeFromUrl(url) {
  return new URL(url).pathname;
}

function markdownAssetForRoute(route) {
  return route === '/' ? '/_markdown/index.md' : `/_markdown${route}index.md`;
}

function matchesRoute(pattern, route) {
  return pattern.endsWith('*') ? route.startsWith(pattern.slice(0, -1)) : pattern === route;
}

async function assetFetch(input) {
  const url = new URL(input instanceof Request ? input.url : input.toString());
  const path = url.pathname.endsWith('/')
    ? `${url.pathname}index.html`
    : url.pathname;
  try {
    const body = await readFile(resolve(root, path.slice(1)), 'utf8');
    return new Response(body, {
      headers: {
        'Content-Type': path.endsWith('.md') ? 'text/markdown' : 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow'
      }
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}

function execute(url, accept, method = 'GET') {
  const request = new Request(url, { method, headers: accept ? { Accept: accept } : {} });
  return handleRequest(request, { ASSETS: { fetch: assetFetch } });
}

const workerRoutes = workerConfig.assets?.run_worker_first ?? [];
if (workerConfig.main !== 'worker.js') errors.push('wrangler.jsonc harus memakai worker.js sebagai entrypoint');
if (workerConfig.assets?.binding !== 'ASSETS') errors.push('wrangler.jsonc harus menyediakan binding ASSETS');

for (const url of urls) {
  const route = routeFromUrl(url);
  const assetPath = markdownAssetForRoute(route);
  let markdown;

  if (!workerRoutes.some((pattern) => matchesRoute(pattern, route))) {
    errors.push(`${route}: belum tercakup oleh assets.run_worker_first`);
  }

  try {
    markdown = await readFile(resolve(root, assetPath.slice(1)), 'utf8');
  } catch {
    errors.push(`${route}: aset Markdown tidak ditemukan ${assetPath}`);
    continue;
  }

  if (!markdown.startsWith('---\n')) errors.push(`${assetPath}: YAML frontmatter tidak ditemukan`);
  if (!markdown.includes(`canonical: "${site}${route}"`)) errors.push(`${assetPath}: canonical tidak sesuai`);
  if (!/^#\s+.+$/m.test(markdown)) errors.push(`${assetPath}: H1 Markdown tidak ditemukan`);

  const markdownResponse = await execute(url, 'text/html, text/markdown;q=0.9');
  if (!markdownResponse.headers.get('Content-Type')?.startsWith('text/markdown')) {
    errors.push(`${route}: respons agent bukan text/markdown`);
  }
  if (!markdownResponse.headers.get('Vary')?.toLowerCase().includes('accept')) {
    errors.push(`${route}: Vary tidak memuat Accept`);
  }
  if (!/^\d+$/.test(markdownResponse.headers.get('X-Markdown-Tokens') ?? '')) {
    errors.push(`${route}: x-markdown-tokens tidak valid`);
  }
  if (markdownResponse.headers.has('X-Robots-Tag')) {
    errors.push(`${route}: respons negotiated tidak boleh mewarisi noindex dari aset mirror`);
  }
}

const htmlResponse = await execute(`${site}/faq/`, 'text/html');
if (!htmlResponse.headers.get('Content-Type')?.startsWith('text/html')) {
  errors.push('Request browser default tidak menghasilkan HTML');
}

const rejectedMarkdown = await execute(`${site}/faq/`, 'text/markdown;q=0, text/html');
if (!rejectedMarkdown.headers.get('Content-Type')?.startsWith('text/html')) {
  errors.push('Accept text/markdown;q=0 tidak kembali ke HTML');
}

const headResponse = await execute(`${site}/faq/`, 'text/markdown', 'HEAD');
if (headResponse.status !== 200 || await headResponse.text() !== '') {
  errors.push('HEAD Markdown harus 200 tanpa response body');
}

const directMirror = await execute(`${site}/_markdown/faq/index.md`, 'text/markdown');
if (directMirror.status !== 404) {
  errors.push('Aset mirror Markdown harus ditutup dari akses URL langsung');
}
if (!workerRoutes.includes('/_markdown/*')) {
  errors.push('assets.run_worker_first harus memblokir akses langsung /_markdown/*');
}

if (errors.length) {
  console.error(`Validasi Markdown gagal (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validasi Markdown berhasil: ${urls.length} halaman mendukung content negotiation.`);
