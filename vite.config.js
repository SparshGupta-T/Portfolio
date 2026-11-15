import { resolve } from 'path';
import { defineConfig } from 'vite';

// Middleware to serve extensionless URLs in local Vite dev server
function cleanUrlsPlugin() {
  return {
    name: 'clean-urls-dev-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanRoutes = [
          '/recyclenet',
          '/supportfit',
          '/travelhoster',
          '/mycouncillor',
          '/checkin',
        ];
        const urlPath = req.url ? req.url.split('?')[0].split('#')[0] : '';
        if (cleanRoutes.includes(urlPath)) {
          req.url = req.url.replace(urlPath, urlPath + '.html');
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
      input: {
        main: resolve(process.cwd(), 'index.html'),
        recyclenet: resolve(process.cwd(), 'recyclenet.html'),
        supportfit: resolve(process.cwd(), 'supportfit.html'),
        travelhoster: resolve(process.cwd(), 'travelhoster.html'),
        mycouncillor: resolve(process.cwd(), 'mycouncillor.html'),
        checkin: resolve(process.cwd(), 'checkin.html'),
        notfound: resolve(process.cwd(), '404.html'),
      },
    },
  },
});
