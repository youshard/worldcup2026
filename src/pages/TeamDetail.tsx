import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTeamById } from '../data/loader'
import { CONFEDERATIONS } from '../data/confederations'
import { flagEmoji } from '../data/flags'
import { TACTICS, TEAM_INJURIES } from '../data/systemData'
import type { Team } from '../types'

export default function TeamDetail() {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<Team | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) setTeam(getTeamById(id));
  }, [id]);

  if (!team) {
    return <div className="page" style={{ padding: 20, textAlign: 'center', color: 'var(--text-dim)' }}>球队不存在</div>;
  }

  const h = team.worldCupHistory;
  const conf = CONFEDERATIONS[team.confederation] || { name: team.confederation, color: '#64748b' };
  const total = h.totalWins + h.totalDraws + h.totalLosses;
  const winPct = total > 0 ? ((h.totalWins / total) * 100).toFixed(1) : '0';
  const gd = h.goalsFor - h.goalsAgainst;

  return (
    <div className="page">
      {/* 顶部导航 */}
      <div className="sticky-header" style={{ paddingTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span onClick={() => navigate(-1)} style={{ fontSize: 24, cursor: 'pointer', lineHeight: 1 }}>‹</span>
        <span style={{ fontSize: 18, fontWeight: 700 }}>{team.name}</span>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* 头部卡片 */}
        <div className="card mb-16" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 20 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, flexShrink: 0,
          }}>{flagEmoji(team.fifaCode)}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{team.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
              {team.nameEn} · {team.nickname}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
              <span className="tag" style={{ background: 'rgba(59,130,246,.15)', color: '#60a5fa' }}>{conf.name}</span>
              <span className="tag" style={{ background: 'rgba(34,197,94,.12)', color: '#4ade80' }}>{team.qualification}</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              border: '3px solid var(--gold)', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 26, fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>{team.fifaRanking}</span>
              <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>FIFA</span>
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 4 }}>{team.fifaPoints.toFixed(1)} 分</div>
          </div>
        </div>

        {/* 历史战绩 */}
        <div className="card mb-16">
          <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 14, letterSpacing: 2 }}>
            📊 世界杯历史战绩
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { label: '参赛次数', value: h.appearances, sub: '届' },
              { label: '最佳成绩', value: h.bestResult, sub: '', small: true },
              { label: '总场次', value: total, sub: '场' },
              { label: '历史胜率', value: winPct + '%', sub: '', color: 'var(--green)' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-card2)', borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{item.label}</div>
                <div style={{
                  fontSize: item.small ? 14 : 22, fontWeight: 700, color: item.color || 'var(--text)',
                  marginTop: 4, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{item.value}</div>
                {item.sub && <div style={{ fontSize: 11, color: 'var(--gold)', marginTop: 2 }}>{item.sub}</div>}
              </div>
            ))}
          </div>

          {/* 荣誉 */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
            {h.champion > 0 && (
              <span className="tag" style={{ background: 'rgba(251,191,36,.1)', color: 'var(--gold)', fontWeight: 600 }}>
                🏆 {h.champion} 次冠军{h.championYears?.length ? ' (' + h.championYears.join(', ') + ')' : ''}
              </span>
            )}
            {h.runnerUp > 0 && (
              <span className="tag" style={{ background: 'rgba(148,163,184,.1)', color: 'var(--text-muted)', fontWeight: 600 }}>
                🥈 {h.runnerUp} 次亚军
              </span>
            )}
            {h.thirdPlace > 0 && (
              <span className="tag" style={{ background: 'rgba(234,179,8,.1)', color: '#ca8a04', fontWeight: 600 }}>
                🥉 {h.thirdPlace} 次季军
              </span>
            )}
          </div>

          {/* 胜平负条 */}
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden' }}>
              <div style={{ width: winPct + '%', background: 'var(--green)' }}></div>
              <div style={{ width: (total > 0 ? (h.totalDraws / total * 100) : 0) + '%', background: 'var(--gold)' }}></div>
              <div style={{ flex: 1, background: 'var(--red)' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 8, fontSize: 12, color: 'var(--text-muted)' }}>
              <span>胜 {h.totalWins}</span>
              <span>平 {h.totalDraws}</span>
              <span>负 {h.totalLosses}</span>
            </div>
          </div>

          {/* 净胜球 */}
          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            {[
              { label: '总进球', val: h.goalsFor, color: 'var(--green)' },
              { label: '总失球', val: h.goalsAgainst, color: 'var(--red)' },
              { label: '净胜球', val: (gd > 0 ? '+' : '') + gd, color: 'var(--accent)' },
            ].map((g, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', background: 'var(--bg-card2)', borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: g.color }}>{g.val}</div>
                <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 2 }}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 能力雷达图 */}
        <div className="card mb-16">
          <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 14, letterSpacing: 2 }}>
            🎯 球队能力分析
          </h3>
          <RadarChart stats={team.stats} />
          {[
            { name: '场均进球', val: team.stats.avgGoalsScored, max: 3, unit: '' },
            { name: '场均失球', val: team.stats.avgGoalsConceded, max: 3, unit: '' },
            { name: '控球率',   val: team.stats.avgPossession,   max: 70, unit: '%' },
            { name: '射门转化率', val: team.stats.shotConversion, max: 20, unit: '%' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(51,65,85,.4)' : 'none' }}>
              <span style={{ width: 80, fontSize: 13, color: 'var(--text-muted)' }}>{s.name}</span>
              <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--border)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 3,
                  width: Math.min(s.val / s.max * 100, 100) + '%',
                  background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                }} />
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, width: 50, textAlign: 'right' }}>
                {s.val.toFixed(1)}{s.unit}
              </span>
            </div>
          ))}
        </div>

        {/* 战术体系 */}
        {TACTICS[team.id] && (
          <div className="card mb-16" style={{ marginTop: 0 }}>
            <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 14, letterSpacing: 2 }}>
              ⚙️ 战术体系
            </h3>
            {(() => {
              const t = TACTICS[team.id];
              return (
                <div>
                  <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:12 }}>
                    <span className="tag" style={{ background:'rgba(59,130,246,.15)', color:'#60a5fa', fontSize:12, padding:'6px 14px' }}>
                      阵型：{t.formation}
                    </span>
                    <span className="tag" style={{ background:'rgba(34,197,94,.12)', color:'#4ade80', fontSize:12, padding:'6px 14px' }}>
                      风格：{t.style}
                    </span>
                    <span className="tag" style={{ background:'rgba(168,85,247,.12)', color:'#c084fc', fontSize:12, padding:'6px 14px' }}>
                      👔 {t.coach}
                    </span>
                  </div>
                  <div style={{ background:'var(--bg-card2)', borderRadius:10, padding:12, marginBottom:10 }}>
                    <div style={{ fontSize:12, color:'var(--gold)', marginBottom:6 }}>核心哲学</div>
                    <div style={{ fontSize:13, color:'var(--text)', lineHeight:1.6 }}>{t.keyPrinciple}</div>
                  </div>
                  <div style={{ display:'flex', gap:12 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:11, color:'var(--green)', marginBottom:6 }}>✅ 强项</div>
                      {t.strengths.map((s,i) => (
                        <div key={i} style={{ fontSize:12, color:'var(--text-muted)', padding:'3px 0' }}>• {s}</div>
                      ))}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:11, color:'var(--red)', marginBottom:6 }}>⚠️ 弱点</div>
                      {t.weaknesses.map((w,i) => (
                        <div key={i} style={{ fontSize:12, color:'var(--text-muted)', padding:'3px 0' }}>• {w}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 伤病情况 */}
        {(() => {
          const injury = TEAM_INJURIES.find(i => i.fifaCode === team.id);
          if (!injury) return null;
          return (
            <div className="card mb-16" style={{ marginTop: 0 }}>
              <h3 style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 14, letterSpacing: 2 }}>
                🏥 伤病报告
              </h3>
              {injury.outPlayers.length > 0 && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize:11, color:'var(--red)', marginBottom:8 }}>🔴 确认缺席</div>
                  {injury.outPlayers.map((p,i) => (
                    <div key={i} style={{
                      fontSize:13, padding:'8px 12px', borderRadius:8,
                      background:'rgba(239,68,68,.08)', marginBottom:6,
                      display:'flex', justifyContent:'space-between',
                    }}>
                      <span style={{ fontWeight:600 }}>{p.name}</span>
                      <span style={{ fontSize:11, color:'var(--text-muted)' }}>{p.reason}</span>
                    </div>
                  ))}
                </div>
              )}
              {injury.doubtfulPlayers.length > 0 && (
                <div>
                  <div style={{ fontSize:11, color:'var(--gold)', marginBottom:8 }}>🟡 出战成疑</div>
                  {injury.doubtfulPlayers.map((p,i) => (
                    <div key={i} style={{
                      fontSize:13, padding:'8px 12px', borderRadius:8,
                      background:'rgba(251,191,36,.08)', marginBottom:6,
                      display:'flex', justifyContent:'space-between',
                    }}>
                      <span style={{ fontWeight:600 }}>{p.name}</span>
                      <span style={{ fontSize:11, color:'var(--text-muted)' }}>{p.reason}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  )
}

function RadarChart({ stats }: { stats: Team['stats'] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = 260, h = 260, cx = 130, cy = 130, r = 90;
    canvas.width = w;
    canvas.height = h;

    const raw = [stats.avgGoalsScored, Math.max(0, 3 - stats.avgGoalsConceded), stats.avgPossession, stats.shotConversion];
    const maxVals = [3, 3, 70, 20];
    const values = raw.map((v, i) => Math.min(v / maxVals[i], 1));
    const labels = ['场均进球', '失球(逆)', '控球率', '射门转化'];
    const count = 4;

    ctx.clearRect(0, 0, w, h);

    // Grid
    for (let lvl = 0.2; lvl <= 1; lvl += 0.2) {
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const ang = (Math.PI * 2 * i / count) - Math.PI / 2;
        const x = cx + r * lvl * Math.cos(ang), y = cy + r * lvl * Math.sin(ang);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(71,85,105,.35)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    // Axes
    for (let i = 0; i < count; i++) {
      const ang = (Math.PI * 2 * i / count) - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + r * Math.cos(ang), cy + r * Math.sin(ang));
      ctx.strokeStyle = 'rgba(71,85,105,.35)';
      ctx.stroke();
    }
    // Data
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
      const ang = (Math.PI * 2 * i / count) - Math.PI / 2;
      const x = cx + r * values[i] * Math.cos(ang), y = cy + r * values[i] * Math.sin(ang);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(37,99,235,.2)';
    ctx.fill();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Points
    for (let i = 0; i < count; i++) {
      const ang = (Math.PI * 2 * i / count) - Math.PI / 2;
      const x = cx + r * values[i] * Math.cos(ang), y = cy + r * values[i] * Math.sin(ang);
      ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fillStyle = '#60a5fa'; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
    }
    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < count; i++) {
      const ang = (Math.PI * 2 * i / count) - Math.PI / 2;
      const lx = cx + (r + 26) * Math.cos(ang), ly = cy + (r + 26) * Math.sin(ang);
      ctx.fillText(labels[i], lx, ly);
    }
  }, [stats]);

  return <canvas ref={canvasRef} style={{ display: 'block', margin: '0 auto' }} />;
}
