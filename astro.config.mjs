import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.URL || 'https://meter.netlify.app',
  integrations: [db()],
});

