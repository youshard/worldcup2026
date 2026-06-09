import type { VercelRequest, VercelResponse } from '@vercel/node';
import { liveScores, rankings, weather, bundle } from '../data.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=30');

  const path = req.url?.split('?')[0] || '';

  if (path === '/api/live-scores') {
    return res.json({ success: true, data: await liveScores() });
  }
  if (path === '/api/rankings') {
    return res.json({ success: true, data: await rankings() });
  }
  if (path === '/api/weather') {
    return res.json({ success: true, data: await weather() });
  }
  if (path === '/api/bundle') {
    return res.json({ success: true, data: await bundle() });
  }

  res.json({ success: false, error: 'Unknown endpoint' });
}
