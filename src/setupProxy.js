const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://improved-enigma-6jj6x655796c47xg-8000.app.github.dev',
      changeOrigin: true,
    })
  );
};