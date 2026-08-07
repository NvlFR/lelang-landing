export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Clean route for /faq or /faq.html
    if (url.pathname === '/faq' || url.pathname === '/faq.html') {
      return env.ASSETS.fetch(new URL('/faq.html', request.url));
    }
    
    return env.ASSETS.fetch(request);
  }
};
