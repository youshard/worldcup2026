import { useEffect, useState } from 'react'
import { getAllTeamsSync } from '../data/loader'
import { CONFEDERATIONS } from '../data/confederations'
import { flagEmoji } from '../data/flags'
import { useNavigate } from 'react-router-dom'
import type { Team } from '../types'

export default function Dashboard() {
  const [teams, setTeams] = useState<Team[]>([]);
  const navigate = useNavigate();

  useEffect(() => { setTeams(getAllTeamsSync()); }, []);

  // 按排名排序
  const topTeams = [...teams].sort((a, b) => a.fifaRanking - b.fifaRanking).slice(0, 10);
  const confEntries = Object.entries(CONFEDERATIONS).map(([k, v]) => ({
    key: k,
    name: v.name,
    color: v.color,
    count: teams.filter(t => t.confederation === k).length,
    topTeam: teams.filter(t => t.confederation === k).sort((a, b) => a.fifaRanking - b.fifaRanking)[0],
  }));

  return (
    <div className="page">
      {/* 顶部 */}
      <div className="sticky-header" style={{ paddingTop: 20, paddingBottom: 16 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800 }}>FIFA World Cup 2026</h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
          加拿大 · 墨西哥 · 美国 联合主办 · 48 支球队
        </p>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* 洲际分布 */}
        <div className="card mb-16">
          <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 12, letterSpacing: 1 }}>
            各大洲参赛名额
          </h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {confEntries.map(c => (
              <div
                key={c.key}
                onClick={() => navigate('/teams')}
                style={{
                  flex: '1 1 calc(33% - 8px)',
                  minWidth: 100,
                  background: 'var(--bg-card2)',
                  borderRadius: 10,
                  padding: '12px 10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderTop: `3px solid ${c.color}`,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: c.color }}>{c.count}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{c.name}</div>
                {c.topTeam && (
                  <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 4 }}>
                    {flagEmoji(c.topTeam.fifaCode)} #{c.topTeam.fifaRanking} {c.topTeam.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TOP 10 */}
        <div className="card mb-16">
          <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 12, letterSpacing: 1 }}>
            FIFA 排名 TOP 10
          </h3>
          {topTeams.map((team, idx) => (
            <div
              key={team.id}
              onClick={() => navigate(`/teams/${team.id}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 0',
                borderBottom: idx < topTeams.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ width: 24, fontSize: 12, color: 'var(--text-dim)', textAlign: 'center' }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: 22 }}>{flagEmoji(team.fifaCode)}</span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>{team.name}</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--gold)' }}>
                #{team.fifaRanking}
              </span>
            </div>
          ))}
        </div>

        {/* 冠军统计 */}
        <div className="card mb-16">
          <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 12, letterSpacing: 1 }}>
            夺冠热门 — 历史冠军
          </h3>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {teams
              .filter(t => t.worldCupHistory.champion > 0)
              .sort((a, b) => b.worldCupHistory.champion - a.worldCupHistory.champion)
              .map(team => (
                <div
                  key={team.id}
                  onClick={() => navigate(`/teams/${team.id}`)}
                  style={{
                    flexShrink: 0,
                    width: 100,
                    textAlign: 'center',
                    background: 'var(--bg-card2)',
                    borderRadius: 10,
                    padding: 14,
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: 28 }}>{flagEmoji(team.fifaCode)}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{team.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--gold)', marginTop: 2 }}>
                    {team.worldCupHistory.champion}次冠军
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
