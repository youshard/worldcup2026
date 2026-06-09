/* ===== 实时数据 API 服务层 =====
 * 
 * Vercel 部署模式:
 *   - 同源请求 /api/xxx（Vercel Serverless Functions）
 *   - GitHub Actions 每30分钟自动更新 public/data/*.json
 *   - 数据 30 秒 CDN 缓存
 *
 * 纯前端模式（本地开发）:
 *   - 天气: 直连 Open-Meteo
 *   - 比分: 客户端模拟
 */

// ===== Vercel API 基础地址 =====
const isVercel = typeof window !== 'undefined' && 
  (window.location.hostname.includes('vercel.app') || import.meta.env.VITE_ON_VERCEL);

const API_BASE = isVercel ? '' : (import.meta.env.VITE_BACKEND_URL || '');
const USE_API = !!API_BASE || isVercel;

// ===== 比赛场馆坐标映射 =====
const VENUE_COORDS: Record<string, { lat: number; lon: number }> = {
  '墨西哥城':   { lat: 19.43, lon: -99.13 },
  '瓜达拉哈拉': { lat: 20.68, lon: -103.35 },
  '多伦多':     { lat: 43.65, lon: -79.38 },
  '洛杉矶':     { lat: 33.94, lon: -118.35 },
  '温哥华':     { lat: 49.28, lon: -123.12 },
  '旧金山湾区': { lat: 37.35, lon: -121.95 },
  '纽约新泽西': { lat: 40.81, lon: -74.07 },
  '波士顿':     { lat: 42.09, lon: -71.26 },
  '休斯敦':     { lat: 29.68, lon: -95.41 },
  '达拉斯':     { lat: 32.75, lon: -97.08 },
  '费城':       { lat: 39.90, lon: -75.17 },
  '蒙特雷':     { lat: 25.68, lon: -100.30 },
  '亚特兰大':   { lat: 33.76, lon: -84.40 },
  '西雅图':     { lat: 47.60, lon: -122.33 },
  '迈阿密':     { lat: 25.96, lon: -80.24 },
  '堪萨斯城':   { lat: 39.05, lon: -94.48 },
};

// ===== Open-Meteo 实时天气 API（免费 · 无需 Key） =====
export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

export async function fetchWeather(venue: string): Promise<WeatherData | null> {
  const coord = Object.entries(VENUE_COORDS).find(([city]) => venue.includes(city));
  if (!coord) return null;
  const { lat, lon } = coord[1];

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation&timezone=auto&forecast_days=1`;
    const res = await fetch(url);
    const json = await res.json();
    const c = json.current;

    return {
      temperature: Math.round(c.temperature_2m),
      condition: weatherCodeToText(c.weather_code),
      icon: weatherCodeToIcon(c.weather_code),
      humidity: c.relative_humidity_2m,
      windSpeed: Math.round(c.wind_speed_10m * 10) / 10,
      precipitation: c.precipitation ?? 0,
    };
  } catch {
    return null;
  }
}

function weatherCodeToText(code: number): string {
  if (code <= 1) return '晴';
  if (code === 2) return '多云';
  if (code === 3) return '阴';
  if (code <= 48) return '雾';
  if (code <= 57) return '小雨';
  if (code <= 67) return '雨';
  if (code <= 77) return '雪';
  if (code <= 86) return '阵雨';
  if (code >= 95) return '雷暴';
  return '晴';
}

function weatherCodeToIcon(code: number): string {
  if (code <= 1) return '☀️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code <= 48) return '🌫️';
  if (code <= 57) return '🌧️';
  if (code <= 67) return '🌧️';
  if (code <= 77) return '🌨️';
  if (code <= 86) return '🌦️';
  if (code >= 95) return '⛈️';
  return '🌤️';
}

// ===== 实时比分模拟（赛事期间按时间自动生成） =====
export interface LiveScore {
  matchId: string;
  homeScore: number;
  awayScore: number;
  minute: number;       // 比赛分钟数
  status: 'not_started' | 'first_half' | 'halftime' | 'second_half' | 'finished';
}

// 判断比赛是否正在进行（基于北京时间）
export function getMatchStatus(matchDate: string, matchTime: string): LiveScore['status'] {
  const now = new Date();
  // 解析日期和时间（北京时间 UTC+8）
  const [y, m, d] = matchDate.split('-').map(Number);
  const [hh, mm] = (matchTime || '00:00').split(':').map(Number);
  const kickoff = new Date(Date.UTC(y, m - 1, d, hh - 8, mm)); // 转 UTC
  const diffMs = now.getTime() - kickoff.getTime();
  const diffMin = diffMs / 60000;

  if (diffMin < 0) return 'not_started';
  if (diffMin < 48) return 'first_half';
  if (diffMin < 63) return 'halftime';
  if (diffMin < 110) return 'second_half';
  return 'finished';
}

// 模拟比分（用种子保证每场不同）
export function getLiveScore(matchId: string, matchDate: string, matchTime: string): LiveScore | null {
  const status = getMatchStatus(matchDate, matchTime);
  if (status === 'not_started') return null;

  const now = new Date();
  const [y, m, d] = matchDate.split('-').map(Number);
  const [hh, mm] = (matchTime || '00:00').split(':').map(Number);
  const kickoff = new Date(Date.UTC(y, m - 1, d, hh - 8, mm));
  const diffMin = Math.floor((now.getTime() - kickoff.getTime()) / 60000);

  // 用比赛 ID + 日期作为种子生成伪随机比分
  const seed = hashCode(matchId + matchDate) % 100;
  const baseScore = (seed % 4) + 1; // 1-4
  const extraMin = Math.min(diffMin - 1, 90);
  const extraGoals = Math.floor(extraMin / 15); // 每15分钟加1球

  const hg = Math.min(baseScore + extraGoals, 6);
  const ag = Math.max(0, Math.min(((seed * 7) % 5) + Math.floor(extraMin / 20), 4));

  return {
    matchId,
    homeScore: hg,
    awayScore: ag,
    minute: status === 'finished' ? 90 : status === 'halftime' ? 45 : Math.min(diffMin, 90),
    status,
  };
}

function hashCode(s: string): number {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) - hash) + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// ===== 比分API接入（Vercel / API-Football / 客户端模拟） =====
export async function fetchLiveScoresAPI(): Promise<LiveScore[] | null> {
  // Vercel 部署：同源 API
  if (isVercel || USE_API) {
    try {
      const res = await fetch(`${API_BASE}/api/live-scores`);
      const json = await res.json();
      const matches = json.data?.matches || [];
      if (matches.length > 0) {
        return matches.map((m: any) => ({
          matchId: m.id || m.matchId,
          homeScore: m.hg ?? m.homeScore ?? 0,
          awayScore: m.ag ?? m.awayScore ?? 0,
          minute: m.minute ?? 0,
          status: m.status || 'not_started',
        }));
      }
    } catch { /* fall through */ }
  }

  // 本地开发：直接调 API-Football（如果配了 Key）
  // const KEY = 'YOUR_API_FOOTBALL_KEY';
  // ...

  return null; // 无后端数据时由客户端 getLiveScore 模拟
}

// ===== Vercel 数据拉取 =====
export async function fetchVercelData(endpoint: string) {
  if (!isVercel && !API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}/api/${endpoint}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || json;
  } catch { return null; }
}

export async function fetchVercelRankings() { return fetchVercelData('rankings'); }
export async function fetchVercelWeather()  { return fetchVercelData('weather'); }
export async function fetchVercelBundle()   { return fetchVercelData('bundle'); }
export function isOnVercel() { return isVercel; }
