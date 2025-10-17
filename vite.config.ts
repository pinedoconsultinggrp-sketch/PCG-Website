import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: 'localhost',      // or '127.0.0.1'
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',    // try '127.0.0.1' if localhost still fails
      port: 5173
    }
  }
})
