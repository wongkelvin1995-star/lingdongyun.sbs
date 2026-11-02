// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lingdongyun.sbs',
  // CSS 直接写进页面，少一次阻塞渲染的请求（跨境访问时每次往返都慢）
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
