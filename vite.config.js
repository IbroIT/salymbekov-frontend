import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Disable appearance/scroll animations site-wide: render motion
      // components as plain visible elements (see src/lib/motion-shim.jsx)
      'framer-motion': fileURLToPath(new URL('./src/lib/motion-shim.jsx', import.meta.url)),
    },
  },
})
