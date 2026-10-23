import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        supportfit: resolve(__dirname, 'supportfit.html'),
        travelhoster: resolve(__dirname, 'travelhoster.html'),
        mycouncillor: resolve(__dirname, 'mycouncillor.html'),
        checkin: resolve(__dirname, 'checkin.html'),
      },
    },
  },
});
