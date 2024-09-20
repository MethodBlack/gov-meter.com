import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [db()],
  output: 'server',
  adapter: netlify(),
});