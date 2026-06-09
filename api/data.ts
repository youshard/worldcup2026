// Vercel Serverless 代理端点
// 部署到 Vercel 后，前端通过 /api/xxx 调用
// 这些函数读取 public/data/ 下的 JSON 文件并返回

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');

function readJSON(filename: string) {
  try {
    const raw = fs.readFileSync(path.join(DATA_DIR, filename), 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function liveScores() {
  return readJSON('live-scores.json') || { matches: [], count: 0 };
}

export async function rankings() {
  return readJSON('rankings.json') || { rankingDate: '2026-06-04', teams: [] };
}

export async function weather() {
  return readJSON('weather.json') || { venues: {} };
}

export async function bundle() {
  return {
    scores: readJSON('live-scores.json'),
    rankings: readJSON('rankings.json'),
    weather: readJSON('weather.json'),
    fetchedAt: new Date().toISOString(),
  };
}
