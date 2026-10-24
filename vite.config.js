import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const rootDir = process.cwd();
      const outDir = resolve(rootDir, 'dist');

      const foldersToCopy = [
        'CheckIn',
        'Johnson Controls',
        'LOGOS',
        'MyCouncilor',
        'RecycleNET',
        'Scalenow Technosolutions',
        'Skills Logo',
        'SupportFit',
        'SupportRoom',
        'TravelHoster',
      ];

      const filesToCopy = [
        'Sparsh_Resume.pdf',
        'favicon.ico',
        '_headers',
        '_redirects',
        'robots.txt',
        'sitemap.xml',
      ];

      foldersToCopy.forEach((folder) => {
        const src = resolve(rootDir, folder);
        const dest = resolve(outDir, folder);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
        }
      });

      filesToCopy.forEach((file) => {
        const src = resolve(rootDir, file);
        const dest = resolve(outDir, file);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      });
      console.log('✓ [vite-plugin] All static asset folders, PDFs & _headers copied to dist/');
    },
  };
}

export default defineConfig({
  plugins: [copyStaticAssetsPlugin()],
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
