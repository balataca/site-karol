import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://karolbiscardi.com',
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

