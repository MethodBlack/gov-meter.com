import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: process.env.URL || 'https://gov-meter.deno.dev',
  integrations: [db()],
  output: 'server',
  adapter: netlify(),
});