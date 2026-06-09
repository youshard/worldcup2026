import { useMemo, useState } from 'react'
import { PLAYERS } from '../data/players'
import { flagEmoji } from '../data/flags'
import { getAllTeamsSync } from '../data/loader'
import { TEAM_INJURIES } from '../data/systemData'

const POSITIONS: Record<string, string> = {
  GK: '门将', DF: '后卫', MF: '中场', FW: '前锋',
};

function ratingColor(r: number): string {
  if (r >= 110) return '#fbbf24';
  if (r >= 100) return '#3b82f6';
  if (r >= 90) return '#22c55e';
  if (r >= 80) return '#94a3b8';
  return '#64748b';
}

export default function Players() {
  const [posFilter, setPosFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [modeFilter, setModeFilter] = useState<'all'|'stars'|'injured'>('all');

  const teams = useMemo(() => getAllTeamsSync(), []);
  const teamMap = useMemo(() => {
    const map: Record<string, string> = {};
    teams.forEach(t => { map[t.id] = t.name; });
    return map;
  }, [teams]);

  const injuryMap = useMemo(() => {
    const map: Record<string, string> = {};
    TEAM_INJURIES.forEach(ti => {
      ti.outPlayers.forEach(p => { map[p.name] = 'out'; });
      ti.doubtfulPlayers.forEach(p => { map[p.name] = 'doubt'; });
    });
    return map;
  }, []);

  const sorted = useMemo(() => {
    let list = [...PLAYERS];
    if (posFilter) list = list.filter(p => p.position === posFilter);
    if (teamFilter) list = list.filter(p => p.fifaCode === teamFilter);
    if (modeFilter === 'stars') list = list.filter(p => p.rating >= 100);
    if (modeFilter === 'injured') list = list.filter(p => {
      // 子串匹配：PLAYERS.name可能是"库杜斯"，TEAM_INJURIES里是"穆罕默德·库杜斯(Kudus)"
      return Object.keys(injuryMap).some(k => k.includes(p.name) || p.name.includes(k.replace(/\(.*\)/, '')));
    });
    return list.sort((a, b) => b.rating - a.rating);
  }, [posFilter, teamFilter, modeFilter, injuryMap]);

  return (
    <div className="page">
      <div className="sticky-header" style={{ paddingTop: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>球员评估</h2>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
          基于球员能力、位置和近期表现的评分系统 (60-120)
        </p>
      </div>

      {/* 筛选 */}
      <div style={{ padding: '0 16px 8px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        <button
          onClick={() => setPosFilter('')}
          className="tag"
          style={{
            flexShrink: 0, height: 32, fontSize: 12,
            border: `1px solid ${posFilter ? 'var(--border)' : 'var(--accent)'}`,
            background: posFilter ? 'transparent' : 'rgba(59,130,246,.15)',
            color: posFilter ? 'var(--text-muted)' : 'var(--accent)',
            cursor: 'pointer',
          }}
        >全部 ({PLAYERS.length})</button>
        {Object.entries(POSITIONS).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setPosFilter(posFilter === k ? '' : k)}
            className="tag"
            style={{
              flexShrink: 0, height: 32, fontSize: 12,
              border: `1px solid ${posFilter === k ? 'var(--accent)' : 'var(--border)'}`,
              background: posFilter === k ? 'rgba(59,130,246,.15)' : 'transparent',
              color: posFilter === k ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >{v}</button>
        ))}
        <span style={{ width:1, background:'var(--border)', margin:'0 4px', alignSelf:'stretch' }} />
        <button
          onClick={() => setModeFilter(modeFilter === 'stars' ? 'all' : 'stars')}
          className="tag"
          style={{
            flexShrink:0, height:32, fontSize:12,
            border:`1px solid ${modeFilter==='stars'?'var(--gold)':'var(--border)'}`,
            background:modeFilter==='stars'?'rgba(251,191,36,.12)':'transparent',
            color:modeFilter==='stars'?'var(--gold)':'var(--text-muted)',
            cursor:'pointer',
          }}
        >⭐ 球星(100+)</button>
        <button
          onClick={() => setModeFilter(modeFilter === 'injured' ? 'all' : 'injured')}
          className="tag"
          style={{
            flexShrink:0, height:32, fontSize:12,
            border:`1px solid ${modeFilter==='injured'?'#ef4444':'var(--border)'}`,
            background:modeFilter==='injured'?'rgba(239,68,68,.12)':'transparent',
            color:modeFilter==='injured'?'#ef4444':'var(--text-muted)',
            cursor:'pointer',
          }}
        >🏥 伤病</button>
      </div>

      {/* 球队筛选 */}
      <div style={{ padding: '0 16px 12px', overflowX: 'auto', display: 'flex', gap: 6 }}>
        <select
          value={teamFilter}
          onChange={e => setTeamFilter(e.target.value)}
          style={{
            height: 34, borderRadius: 8, border: '1px solid var(--border)',
            background: 'var(--bg-card)', color: 'var(--text)', padding: '0 10px',
            fontSize: 12, outline: 'none',
          }}
        >
          <option value="">全部球队</option>
          {teams.sort((a,b)=>a.name.localeCompare(b.name)).map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* 列表内容 */}
      <div style={{ padding: '0 16px' }}>
        {modeFilter === 'injured' ? (
          <InjuryReport />
        ) : (
          sorted.map((p, idx) => (
          <div key={p.id} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px',
            marginBottom: 8, borderRadius: 12,
            background: 'var(--bg-card)', border: '1px solid var(--border)',
          }}>
            {/* 排名 */}
            <span style={{ width: 22, fontSize: 12, color: idx < 3 ? 'var(--gold)' : 'var(--text-dim)', fontWeight: 700 }}>
              {idx + 1}
            </span>

            {/* 国旗 */}
            <span style={{ fontSize: 22 }}>{flagEmoji(p.fifaCode)}</span>

            {/* 信息 */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>{p.name}</span>
                {p.rating >= 110 && <span style={{ fontSize:12 }}>⭐</span>}
                {(() => {
                  const iname = `${p.nameEn}(${p.name})`;
                  const injStatus = injuryMap[p.name] || injuryMap[iname];
                  if (injStatus === 'out') return <span style={{ fontSize:10, background:'rgba(239,68,68,.15)', color:'#ef4444', padding:'1px 5px', borderRadius:8 }}>伤缺</span>;
                  if (injStatus === 'doubt') return <span style={{ fontSize:10, background:'rgba(251,191,36,.15)', color:'#fbbf24', padding:'1px 5px', borderRadius:8 }}>存疑</span>;
                  return null;
                })()}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                {p.nameEn} · {p.age}岁 · {p.club}
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                <span className="tag" style={{
                  background: p.position === 'FW' ? 'rgba(239,68,68,.12)' :
                    p.position === 'MF' ? 'rgba(59,130,246,.12)' :
                    p.position === 'DF' ? 'rgba(34,197,94,.12)' : 'rgba(251,191,36,.12)',
                  color: p.position === 'FW' ? '#ef4444' :
                    p.position === 'MF' ? '#3b82f6' :
                    p.position === 'DF' ? '#22c55e' : '#fbbf24',
                }}>
                  {POSITIONS[p.position] || p.position}
                </span>
                <span className="tag" style={{ background: 'rgba(148,163,184,.1)', color: 'var(--text-muted)' }}>
                  {teamMap[p.fifaCode] || p.fifaCode}
                </span>
              </div>
            </div>

            {/* 评分 */}
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: 'var(--bg-card2)', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              border: `2px solid ${ratingColor(p.rating)}`,
            }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: ratingColor(p.rating), lineHeight: 1 }}>
                {p.rating}
              </span>
              <span style={{ fontSize: 9, color: 'var(--text-dim)' }}>评分</span>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  )
}

function InjuryReport() {
  const teams = useMemo(() => getAllTeamsSync(), []);
  const teamMap: Record<string, string> = {};
  teams.forEach(t => { teamMap[t.id] = t.name; });

  return (
    <div>
      <div style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 12, fontWeight: 600 }}>
        📋 各队伤病报告（截至6月初）
      </div>
      {TEAM_INJURIES.map(inj => {
        if (inj.outPlayers.length === 0 && inj.doubtfulPlayers.length === 0) return null;
        return (
          <div key={inj.fifaCode} className="card mb-12" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 22 }}>{flagEmoji(inj.fifaCode)}</span>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{teamMap[inj.fifaCode] || inj.fifaCode}</span>
              <span className="tag" style={{
                marginLeft: 'auto', background: 'rgba(239,68,68,.08)', color: '#ef4444',
              }}>{inj.outPlayers.length + inj.doubtfulPlayers.length}人受影响</span>
            </div>
            {inj.outPlayers.map((p, i) => (
              <div key={i} style={{
                fontSize: 13, padding: '8px 10px', borderRadius: 8,
                background: 'rgba(239,68,68,.08)', marginBottom: 6,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontWeight: 600 }}>🔴 {p.name}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{p.reason}</span>
              </div>
            ))}
            {inj.doubtfulPlayers.map((p, i) => (
              <div key={i} style={{
                fontSize: 13, padding: '8px 10px', borderRadius: 8,
                background: 'rgba(251,191,36,.08)', marginBottom: 6,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontWeight: 600 }}>🟡 {p.name}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{p.reason}</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
