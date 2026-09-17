import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves plain static files with no server-side rewrite, so a
// client-side route like /brands/dodge 404s on a hard refresh or direct
// link. Copying the built index.html to 404.html is the standard fallback:
// GitHub Pages serves 404.html for any unmatched path, which then boots the
// same React app and lets react-router take over from there.
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const dir = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dir, 'index.html'), resolve(dir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/Halem.m/',
  plugins: [react(), githubPagesSpaFallback()],
})
