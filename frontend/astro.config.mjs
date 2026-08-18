import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hanumanchalisa.example',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  compressHTML: true
});
