import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const pages = {
  main: resolve(process.cwd(), 'index.html'),
  recyclenet: resolve(process.cwd(), 'recyclenet.html'),
  supportfit: resolve(process.cwd(), 'supportfit.html'),
  travelhoster: resolve(process.cwd(), 'travelhoster.html'),
  mycouncillor: resolve(process.cwd(), 'mycouncillor.html'),
  checkin: resolve(process.cwd(), 'checkin.html'),
  notfound: resolve(process.cwd(), '404.html'),
};

// Middleware to serve extensionless URLs in dev server and handle 404s in preview server
function cleanUrlsPlugin() {
  const cleanRoutes = Object.keys(pages)
    .filter((key) => key !== 'main')
    .map((key) => (key === 'notfound' ? '/404' : `/${key}`));

  return {
    name: 'clean-urls-and-404-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url ? req.url.split('?')[0].split('#')[0] : '';
        if (cleanRoutes.includes(urlPath)) {
          const target = urlPath === '/404' ? '/404.html' : `${urlPath}.html`;
          req.url = req.url.replace(urlPath, target);
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const distDir = resolve(process.cwd(), 'dist');
        const rawPath = req.url ? req.url.split('?')[0].split('#')[0] : '';

        // If clean route (e.g. /recyclenet), rewrite so preview server serves the html file
        if (cleanRoutes.includes(rawPath) && rawPath !== '/404') {
          req.url = req.url.replace(rawPath, `${rawPath}.html`);
          return next();
        }

        // Allow root and existing static files/directories in dist
        const filePath = resolve(distDir, rawPath.replace(/^\//, ''));
        if (rawPath === '/' || (fs.existsSync(filePath) && rawPath !== '/404')) {
          return next();
        }

        // Unknown route or /404: serve dist/404.html with HTTP 404 status
        const notFoundPath = resolve(distDir, '404.html');
        if (fs.existsSync(notFoundPath)) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          fs.createReadStream(notFoundPath).pipe(res);
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  publicDir: 'public',
  plugins: [cleanUrlsPlugin()],
  build: {
    rollupOptions: {
      input: pages,
    },
  },
});
