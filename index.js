export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Explicitly handle /faq and /faq.html without redirect loops
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

    return env.ASSETS.fetch(request);
  }
};
