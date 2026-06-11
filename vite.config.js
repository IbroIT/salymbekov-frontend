import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/legacy-api': {
        target: 'https://salymbekov-backend-f4c797e9b169.herokuapp.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/legacy-api/, '/api'),
      },
    },
  },
})
