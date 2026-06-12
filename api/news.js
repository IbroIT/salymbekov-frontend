import { getSalymbekovNews } from '../lib/salymbekovNews.js';

export default async function handler(request, response) {
  try {
    const forceRefresh = request.query?.refresh === '1';
    const limit = request.query?.limit ? Number(request.query.limit) : null;
    const newsPayload = await getSalymbekovNews({ forceRefresh });
    const items = Number.isFinite(limit) && limit > 0
      ? newsPayload.items.slice(0, limit)
      : newsPayload.items;

    response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    response.status(200).json({
      ...newsPayload,
      count: items.length,
      total: newsPayload.items.length,
      items,
    });
  } catch {
    response.status(502).json({
      sourceUrl: 'https://salymbekov.com/en/latest-news/',
      message: 'Unable to load news from salymbekov.com',
      items: [],
    });
  }
}
