import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Espelha "paths" do tsconfig.app.json. Também vale para `@use '@/...'` no Sass.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
