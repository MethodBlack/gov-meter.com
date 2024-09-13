import db from '@astrojs/db';
import { defineConfig } from 'astro/config';
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
	site: process.env.URL || 'https://gov-meter.deno.dev',
	integrations: [db()],
	output: "server",
  	adapter: deno(),
});
