// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    site: 'https://link.fahri-r.com',
    integrations: [svelte(), sitemap()],
    vite: {
        plugins: [tailwindcss()]
    },
    output: 'static',
    adapter: cloudflare()
});