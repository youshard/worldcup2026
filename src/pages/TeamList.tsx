import { useEffect, useState } from 'react'
import { getAllTeamsSync } from '../data/loader'
import { CONFEDERATIONS } from '../data/confederations'
import { flagEmoji } from '../data/flags'
import { useNavigate } from 'react-router-dom'
import type { Team } from '../types'

export default function TeamList() {
  const [teams] = useState<Team[]>(() => getAllTeamsSync());
  const [conf, setConf] = useState('');
  const [sortBy, setSortBy] = useState<'ranking' | 'appearances' | 'champion'>('ranking');
  const navigate = useNavigate();

  const filtered = conf ? teams.filter(t => t.confederation === conf) : teams;

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'ranking') return a.fifaRanking - b.fifaRanking;
    if (sortBy === 'appearances') return b.worldCupHistory.appearances - a.worldCupHistory.appearances;
    return b.worldCupHistory.champion - a.worldCupHistory.champion;
  });

  return (
    <div className="page">
      <div className="sticky-header" style={{ paddingTop: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>全部球队</h2>
      </div>

      {/* 洲际筛选标签 */}
      <div style={{ padding: '0 16px 8px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        <button
          onClick={() => setConf('')}
          className="tag"
          style={{
            flexShrink: 0, height: 32, border: `1px solid ${conf ? 'var(--border)' : 'var(--accent)'}`,
            background: conf ? 'transparent' : 'rgba(59,130,246,.15)',
            color: conf ? 'var(--text-muted)' : 'var(--accent)',
            cursor: 'pointer', fontSize: 12,
          }}
        >全部 ({teams.length})</button>
        {Object.entries(CONFEDERATIONS).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setConf(k)}
            className="tag"
            style={{
              flexShrink: 0, height: 32,
              border: `1px solid ${conf === k ? v.color : 'var(--border)'}`,
              background: conf === k ? v.color + '22' : 'transparent',
              color: conf === k ? v.color : 'var(--text-muted)',
              cursor: 'pointer', fontSize: 12,
            }}
          >{v.name} ({teams.filter(t => t.confederation === k).length})</button>
        ))}
      </div>

      {/* 排序 */}
      <div style={{ padding: '0 16px 12px', display: 'flex', gap: 8 }}>
        {([
          { key: 'ranking' as const, label: 'FIFA排名' },
          { key: 'appearances' as const, label: '参赛次数' },
          { key: 'champion' as const, label: '夺冠次数' },
        ]).map(o => (
          <button
            key={o.key}
            onClick={() => setSortBy(o.key)}
            style={{
              fontSize: 11, padding: '4px 14px', borderRadius: 12,
              border: `1px solid ${sortBy === o.key ? 'var(--accent)' : 'var(--border)'}`,
              background: sortBy === o.key ? 'rgba(59,130,246,.15)' : 'transparent',
              color: sortBy === o.key ? 'var(--accent)' : 'var(--text-dim)',
              cursor: 'pointer',
            }}
          >{o.label}</button>
        ))}
      </div>

      {/* 列表 */}
      <div style={{ padding: '0 16px' }}>
        {sorted.map((team, idx) => (
          <div
            key={team.id}
            onClick={() => navigate(`/teams/${team.id}`)}
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px', marginBottom: 8,
              background: 'var(--bg-card)', borderRadius: 12,
              border: '1px solid var(--border)', cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 28, width: 40, textAlign: 'center' }}>{flagEmoji(team.fifaCode)}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{team.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                {team.nameEn} · {team.nickname} · {CONFEDERATIONS[team.confederation]?.name || team.confederation}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--gold)' }}>#{team.fifaRanking}</div>
              <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 2 }}>
                {team.worldCupHistory.appearances}届
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
