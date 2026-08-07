export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Explicitly handle /faq and /faq.html
    if (url.pathname === '/faq' || url.pathname === '/faq.html') {
      const targetUrl = new URL('/faq.html', request.url);
      const res = await env.ASSETS.fetch(targetUrl);
      return new Response(res.body, {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=3600'
        }
      });
    }

    // Explicitly handle /llms.txt for AI Search Audit
    if (url.pathname === '/llms.txt') {
      const res = await env.ASSETS.fetch(new URL('/llms.txt', request.url));
      return new Response(res.body, {
        status: 200,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'public, max-age=86400'
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
