import { defineConfig } from 'astro/config';

// Два таргета из одного репозитория:
// - Vercel (chashina-site.vercel.app) — сайт в корне, base не нужен;
//   Vercel сам ставит VERCEL=1 при билде.
// - GitHub Pages — сайт в подпапке /chashchina-site.
const onVercel = !!process.env.VERCEL;

export default defineConfig({
  site: onVercel ? 'https://chashina-site.vercel.app' : 'https://Nikitaa2333333.github.io',
  base: onVercel ? '/' : '/chashchina-site',
  compressHTML: true,
});
