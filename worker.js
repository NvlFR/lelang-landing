const MARKDOWN_ASSETS = new Map([
  ['/', '/_markdown/index.md'],
  ['/jasa-joki-lelang/', '/_markdown/jasa-joki-lelang/index.md'],
  ['/cara-kerja/', '/_markdown/cara-kerja/index.md'],
  ['/biaya/', '/_markdown/biaya/index.md'],
  ['/faq/', '/_markdown/faq/index.md'],
  ['/tentang/', '/_markdown/tentang/index.md'],
  ['/kontak/', '/_markdown/kontak/index.md'],
  ['/case-study/', '/_markdown/case-study/index.md'],
  ['/bukti-kemenangan/', '/_markdown/bukti-kemenangan/index.md'],
  ['/berita/', '/_markdown/berita/index.md'],
  ['/berita/gangguan-sso-djkn-risalah-lelang-11-agustus-2026/', '/_markdown/berita/gangguan-sso-djkn-risalah-lelang-11-agustus-2026/index.md'],
  ['/panduan/apa-itu-lelang-go-id/', '/_markdown/panduan/apa-itu-lelang-go-id/index.md'],
  ['/panduan/cara-ikut-lelang-online/', '/_markdown/panduan/cara-ikut-lelang-online/index.md'],
  ['/panduan/cara-daftar-lelang-go-id/', '/_markdown/panduan/cara-daftar-lelang-go-id/index.md'],
  ['/panduan/apa-itu-open-bidding/', '/_markdown/panduan/apa-itu-open-bidding/index.md'],
  ['/panduan/cara-menentukan-budget-lelang/', '/_markdown/panduan/cara-menentukan-budget-lelang/index.md'],
  ['/panduan/cara-menghindari-overbid/', '/_markdown/panduan/cara-menghindari-overbid/index.md'],
  ['/panduan/apa-itu-uang-jaminan-lelang/', '/_markdown/panduan/apa-itu-uang-jaminan-lelang/index.md'],
  ['/panduan/apa-yang-terjadi-saat-lelang-ditutup/', '/_markdown/panduan/apa-yang-terjadi-saat-lelang-ditutup/index.md'],
  ['/panduan/risiko-mengikuti-lelang-online/', '/_markdown/panduan/risiko-mengikuti-lelang-online/index.md'],
  ['/panduan/apakah-joki-lelang-menjamin-menang/', '/_markdown/panduan/apakah-joki-lelang-menjamin-menang/index.md']
]);

const HOMEPAGE_DISCOVERY_LINKS = [
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</sitemap.xml>; rel="describedby"; type="application/xml"'
].join(', ');

function acceptsMarkdown(value) {
  if (!value) return false;

  return value.split(',').some((entry) => {
    const [mediaType, ...parameters] = entry.trim().toLowerCase().split(';');
    if (mediaType !== 'text/markdown') return false;

    const quality = parameters
      .map((parameter) => parameter.trim())
      .find((parameter) => parameter.startsWith('q='));

    return quality ? Number.parseFloat(quality.slice(2)) > 0 : true;
  });
}

function normalizePagePath(pathname) {
  if (pathname === '/') return pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function withAcceptVary(headers) {
  const vary = headers.get('Vary');
  if (!vary) {
    headers.set('Vary', 'Accept');
    return;
  }

  const values = vary.split(',').map((value) => value.trim().toLowerCase());
  if (!values.includes('accept')) headers.append('Vary', 'Accept');
}

function estimateTokens(markdown) {
  if (!markdown.trim()) return 0;
  return Math.ceil(markdown.length / 4);
}

function withHomepageDiscoveryLinks(response, pathname) {
  if (pathname !== '/') return response;

  const headers = new Headers(response.headers);
  headers.set('Link', HOMEPAGE_DISCOVERY_LINKS);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export async function handleRequest(request, env) {
  const requestUrl = new URL(request.url);

  if (requestUrl.pathname.startsWith('/_markdown/')) {
    return new Response('Not Found', {
      status: 404,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }

  if (!['GET', 'HEAD'].includes(request.method)) return env.ASSETS.fetch(request);
  if (!acceptsMarkdown(request.headers.get('Accept'))) {
    const assetResponse = await env.ASSETS.fetch(request);
    return withHomepageDiscoveryLinks(assetResponse, requestUrl.pathname);
  }

  const assetPath = MARKDOWN_ASSETS.get(normalizePagePath(requestUrl.pathname));
  if (!assetPath) return env.ASSETS.fetch(request);

  const assetUrl = new URL(assetPath, requestUrl.origin);
  const assetResponse = await env.ASSETS.fetch(assetUrl);
  if (!assetResponse.ok) return env.ASSETS.fetch(request);

  const markdown = await assetResponse.text();
  const headers = new Headers(assetResponse.headers);
  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  headers.set('Content-Location', requestUrl.pathname);
  headers.set('X-Markdown-Tokens', String(estimateTokens(markdown)));
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.delete('Content-Length');
  headers.delete('Content-Encoding');
  headers.delete('ETag');
  headers.delete('Last-Modified');
  headers.delete('X-Robots-Tag');
  withAcceptVary(headers);

  const response = new Response(request.method === 'HEAD' ? null : markdown, {
    status: 200,
    headers
  });

  return withHomepageDiscoveryLinks(response, requestUrl.pathname);
}

export default {
  fetch: handleRequest
};
