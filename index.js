export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Clean route for /faq -> serve /faq.html directly
    if (url.pathname === '/faq') {
      return env.ASSETS.fetch(new URL('/faq.html', request.url));
    }

    return env.ASSETS.fetch(request);
  }
};
