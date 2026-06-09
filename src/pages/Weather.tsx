import { useEffect, useMemo, useState } from 'react'
import { GROUP_FIXTURES } from '../data/matches'
import { getAllTeamsSync } from '../data/loader'
import { flagEmoji } from '../data/flags'
import { fetchWeather, type WeatherData } from '../services/api'
import { useRefresh } from '../components/RefreshContext'
import type { Team } from '../types'

// 气候概况兜底
const CLIMATE_FALLBACK: Record<string, { temp: number; icon: string; cond: string; hum: number }> = {
  '墨西哥城':   { temp: 26, icon:'⛅', cond:'多云转晴', hum: 55 },
  '瓜达拉哈拉': { temp: 30, icon:'☀️', cond:'晴',      hum: 60 },
  '多伦多':     { temp: 22, icon:'⛅', cond:'多云',    hum: 65 },
  '洛杉矶':     { temp: 26, icon:'☀️', cond:'晴',      hum: 50 },
  '温哥华':     { temp: 20, icon:'⛅', cond:'多云',    hum: 70 },
  '旧金山湾区': { temp: 22, icon:'⛅', cond:'多云',    hum: 65 },
  '纽约新泽西': { temp: 28, icon:'⛅', cond:'多云转晴', hum: 70 },
  '波士顿':     { temp: 25, icon:'⛅', cond:'晴转多云', hum: 65 },
  '休斯敦':     { temp: 34, icon:'☀️', cond:'晴',      hum: 75 },
  '达拉斯':     { temp: 35, icon:'☀️', cond:'晴',      hum: 60 },
  '费城':       { temp: 28, icon:'⛅', cond:'多云',    hum: 68 },
  '蒙特雷':     { temp: 33, icon:'☀️', cond:'晴',      hum: 58 },
  '亚特兰大':   { temp: 31, icon:'⛅', cond:'晴转多云', hum: 72 },
  '西雅图':     { temp: 22, icon:'⛅', cond:'多云',    hum: 68 },
  '迈阿密':     { temp: 32, icon:'⛈️', cond:'晴转雷阵雨', hum: 78 },
  '堪萨斯城':   { temp: 30, icon:'☀️', cond:'晴',      hum: 65 },
};

function getFallback(venue: string) {
  const e = Object.entries(CLIMATE_FALLBACK).find(([c]) => venue.includes(c));
  return e ? e[1] : { temp: 25, icon: '🌤️', cond: '待更新', hum: 60 };
}

export default function Weather() {
  const [selectedDate, setSelectedDate] = useState('');
  const teams = useMemo(() => getAllTeamsSync(), []);
  const teamMap = useMemo(() => {
    const m: Record<string, Team> = {};
    teams.forEach(t => { m[t.id] = t; });
    return m;
  }, [teams]);

  const dates = [...new Set(GROUP_FIXTURES.map(m => m.date))].sort();
  const fixtures = selectedDate ? GROUP_FIXTURES.filter(m => m.date === selectedDate) : [];

  return (
    <div className="page">
      <div className="sticky-header" style={{ paddingTop: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>比赛天气</h2>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
          Open-Meteo 实时数据 · 赛前1天起精确预报
        </p>
      </div>

      <div style={{ padding: '0 16px 12px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {dates.map(d => (
          <button
            key={d}
            onClick={() => setSelectedDate(d)}
            className="tag"
            style={{
              flexShrink: 0, height: 34, fontSize: 12,
              border: `1px solid ${selectedDate === d ? 'var(--accent)' : 'var(--border)'}`,
              background: selectedDate === d ? 'rgba(59,130,246,.15)' : 'transparent',
              color: selectedDate === d ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >{d.slice(5)}</button>
        ))}
      </div>

      <div style={{ padding: '0 16px' }}>
        {!selectedDate && (
          <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-dim)', fontSize: 14 }}>
            🌤️ 选择日期查看当天比赛天气
          </div>
        )}

        {fixtures.map(m => {
          const homeTeam = teamMap[m.homeTeam];
          const awayTeam = teamMap[m.awayTeam];
          const hName = homeTeam?.name || m.homeTeam;
          const aName = awayTeam?.name || m.awayTeam;
          const hFlag = homeTeam ? flagEmoji(homeTeam.fifaCode) : '⚽';
          const aFlag = awayTeam ? flagEmoji(awayTeam.fifaCode) : '⚽';

          return <WeatherCard key={m.id} m={m} hFlag={hFlag} aFlag={aFlag} hName={hName} aName={aName} />;
        })}
      </div>
    </div>
  )
}

function WeatherCard({ m, hFlag, aFlag, hName, aName }: {
  m: typeof GROUP_FIXTURES[0];
  hFlag: string; aFlag: string; hName: string; aName: string;
}) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    setLoading(true);
    let cancelled = false;
    fetchWeather(m.venue).then(w => {
      if (!cancelled) { setWeather(w); setLoading(false); }
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [m.venue, refreshKey]);

  const fb = getFallback(m.venue);

  return (
    <div className="card mb-12" style={{ padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ width: 40, fontSize: 12, fontWeight: 700, color: 'var(--gold)' }}>
          {m.time}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: 7, background: 'var(--bg-card2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, color: 'var(--text-dim)',
        }}>{m.group}</span>
        <span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>
          <span>{hFlag} {hName}</span>
          <span style={{ margin: '0 8px', color: 'var(--accent2)', fontWeight: 700 }}>VS</span>
          <span>{aName} {aFlag}</span>
        </span>
      </div>

      <div style={{ background: 'var(--bg-card2)', borderRadius: 10, padding: 14, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ fontSize: 42 }}>
          {loading ? '🔄' : weather ? (weather as WeatherData).icon : (fb as { icon: string }).icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-dim)' }}>{m.venue}</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 4, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--gold)' }}>
              {weather ? `${weather.temperature}°C` : `${fb.temp}°C`}
            </span>
            <span style={{ fontSize: 12, color: 'var(--accent)' }}>
              {weather ? weather.condition : fb.cond}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>
              湿度 {weather ? `${weather.humidity}%` : `${fb.hum}%`}
            </span>
            {weather && weather.windSpeed > 0 && (
              <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>
                风速 {weather.windSpeed}m/s
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 6, textAlign: 'right' }}>
        {weather ? '✅ Open-Meteo 实时数据' : loading ? '⏳ 正在获取实时天气...' : '⚠️ 气候概况（赛前1天更新实时数据）'}
      </div>
    </div>
  );
}
