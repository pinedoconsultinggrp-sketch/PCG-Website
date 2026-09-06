import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const entry = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      // One HTML entry per language, so each is a real, indexable URL.
      input: {
        main: entry('./index.html'),
        es: entry('./es/index.html'),
      },
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173
    }
  }
})
