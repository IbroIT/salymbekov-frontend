import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getSalymbekovNews } from './lib/salymbekovNews.js'

const localNewsApi = () => ({
  name: 'local-news-api',
  configureServer(server) {
    server.middlewares.use('/api/news', async (req, res) => {
      try {
        const requestUrl = new URL(req.url || '/', 'http://localhost');
        const limit = requestUrl.searchParams.get('limit');
        const forceRefresh = requestUrl.searchParams.get('refresh') === '1';
        const newsPayload = await getSalymbekovNews({ forceRefresh });
        const parsedLimit = limit ? Number(limit) : null;
        const items = Number.isFinite(parsedLimit) && parsedLimit > 0
          ? newsPayload.items.slice(0, parsedLimit)
          : newsPayload.items;

        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
          ...newsPayload,
          count: items.length,
          total: newsPayload.items.length,
          items,
        }));
      } catch {
        res.statusCode = 502;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
          sourceUrl: 'https://salymbekov.com/en/latest-news/',
          message: 'Unable to load news from salymbekov.com',
          items: [],
        }));
      }
    });
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [localNewsApi(), react(), tailwindcss()],
  resolve: {
    alias: {
      // Disable appearance/scroll animations site-wide: render motion
      // components as plain visible elements (see src/lib/motion-shim.jsx)
      'framer-motion': fileURLToPath(new URL('./src/lib/motion-shim.jsx', import.meta.url)),
    },
  },
})
