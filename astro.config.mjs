import { defineConfig } from 'astro/config';

// Два деплой-таргета из одного репозитория:
// - Vercel (dr-chashchina.vercel.app) — сайт в корне, base не нужен;
//   Vercel сам выставляет VERCEL=1 при билде.
// - GitHub Pages (nikitaa2333333.github.io/dr.chashchina) — сайт в подпапке.
const onVercel = !!process.env.VERCEL;

export default defineConfig({
  site: onVercel ? 'https://dr-chashchina.vercel.app' : 'https://Nikitaa2333333.github.io',
  base: onVercel ? '/' : '/dr.chashchina',
  compressHTML: true,
});
