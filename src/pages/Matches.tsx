import { useState, useEffect, useMemo } from 'react'
import { getAllTeamsSync } from '../data/loader'
import { WORLD_CUP_GROUPS, GROUP_FIXTURES, KNOCKOUT_TEMPLATE } from '../data/matches'
import { flagEmoji } from '../data/flags'
import { getLiveScore, type LiveScore } from '../services/api'
import { RECENT_FORM, getH2H } from '../data/formData'
import { computeComprehensiveScore } from './PredictMatchup'
import { useRefresh } from '../components/RefreshContext'
import type { Team, RecentMatch, MatchData } from '../types'

const ROUND_LABELS = [
  { label: '第1轮',  dates: ['2026-06-12','2026-06-13','2026-06-14','2026-06-15','2026-06-16','2026-06-17','2026-06-18'] },
  { label: '第2轮',  dates: ['2026-06-19','2026-06-20','2026-06-21','2026-06-22','2026-06-23','2026-06-24'] },
  { label: '第3轮',  dates: ['2026-06-25','2026-06-26','2026-06-27','2026-06-28'] },
];

export default function Matches() {
  const [activeTab, setActiveTab] = useState<'fixtures' | 'standings' | 'knockout'>('fixtures');
  const [activeRound, setActiveRound] = useState(0);

  return (
    <div className="page">
      <div className="sticky-header" style={{ paddingTop: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>赛程 & 积分</h2>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>全部时间均为北京时间 (UTC+8) · 点击对阵查看预测</p>
      </div>

      <div style={{ padding: '0 16px 12px', display: 'flex', gap: 8 }}>
        {([
          { key: 'fixtures' as const, label: '赛程对阵' },
          { key: 'standings' as const, label: '小组积分' },
          { key: 'knockout' as const, label: '淘汰赛' },
        ]).map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              flex: 1, height: 40, borderRadius: 10,
              border: `1px solid ${activeTab === tab.key ? 'var(--accent)' : 'var(--border)'}`,
              background: activeTab === tab.key ? 'rgba(59,130,246,.15)' : 'transparent',
              color: activeTab === tab.key ? 'var(--accent)' : 'var(--text-muted)',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
            }}
          >{tab.label}</button>
        ))}
      </div>

      <div style={{ padding: '0 16px' }}>
        {activeTab === 'fixtures' && <FixturesView activeRound={activeRound} setActiveRound={setActiveRound} />}
        {activeTab === 'standings' && <StandingsView />}
        {activeTab === 'knockout' && <KnockoutView />}
      </div>
    </div>
  )
}

function FixturesView({ activeRound, setActiveRound }: { activeRound: number; setActiveRound: (r: number) => void }) {
  const teams = getAllTeamsSync();
  const teamMap = useMemo(() => {
    const m: Record<string, Team> = {};
    teams.forEach(t => { m[t.id] = t; });
    return m;
  }, [teams]);

  const [predictMatch, setPredictMatch] = useState<{ homeId: string; awayId: string; label: string } | null>(null);

  const fixtures = GROUP_FIXTURES.filter(m =>
    ROUND_LABELS[activeRound]?.dates.includes(m.date)
  );

  return (
    <>
      {/* 轮次筛选 */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', marginBottom: 16 }}>
        {ROUND_LABELS.map((r, idx) => (
          <button
            key={idx}
            onClick={() => setActiveRound(idx)}
            className="tag"
            style={{
              flexShrink: 0, height: 32, fontSize: 12,
              border: `1px solid ${activeRound === idx ? 'var(--accent)' : 'var(--border)'}`,
              background: activeRound === idx ? 'rgba(59,130,246,.15)' : 'transparent',
              color: activeRound === idx ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >{r.label}</button>
        ))}
      </div>

      {groupByDate(fixtures).map(({ date, matches }) => (
        <div key={date} style={{ marginBottom: 16 }}>
          <div style={{
            fontSize: 12, fontWeight: 700, color: 'var(--accent)',
            marginBottom: 8, paddingLeft: 4, letterSpacing: 1,
          }}>
            {formatDate(date)}
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {matches.map((m, idx) => {
              const home = teamMap[m.homeTeam];
              const away = teamMap[m.awayTeam];
              const hName = home?.name || m.homeTeam;
              const aName = away?.name || m.awayTeam;
              const hFlag = home ? flagEmoji(home.fifaCode) : '⚽';
              const aFlag = away ? flagEmoji(away.fifaCode) : '⚽';
              const canPredict = home && away;
              return (
                <div
                  key={m.id}
                  onClick={() => {
                    if (canPredict) setPredictMatch({ homeId: m.homeTeam, awayId: m.awayTeam, label: `${hName} vs ${aName}` });
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px',
                    borderBottom: idx < matches.length - 1 ? '1px solid var(--border)' : 'none',
                    cursor: canPredict ? 'pointer' : 'default',
                    transition: 'background .2s',
                  }}
                  onMouseEnter={e => { if (canPredict) (e.currentTarget as HTMLElement).style.background = 'var(--bg-card2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
                >
                  <span style={{
                    width: 40, fontSize: 12, fontWeight: 700, color: 'var(--gold)',
                    textAlign: 'center',
                  }}>{m.time || 'TBD'}</span>
                  <LiveMatchBadge matchDate={m.date} matchTime={m.time || '00:00'} />
                  <span style={{
                    width: 26, height: 26, borderRadius: 7,
                    background: 'var(--bg-card2)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, color: 'var(--text-dim)', flexShrink: 0,
                  }}>{m.group}</span>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ flex: 1, textAlign: 'right', fontSize: 13, fontWeight: 600 }}>
                      <span style={{ marginRight: 6 }}>{hFlag}</span>
                      {hName}
                    </span>
                    <LiveScoreDisplay matchId={m.id} matchDate={m.date} matchTime={m.time || '00:00'} />
                    <span style={{ flex: 1, textAlign: 'left', fontSize: 13, fontWeight: 600 }}>
                      {aName}
                      <span style={{ marginLeft: 6 }}>{aFlag}</span>
                    </span>
                  </div>
                  <div style={{ width: 110, textAlign: 'right', fontSize: 10, color: 'var(--text-dim)' }}>
                    {m.venue}
                  </div>
                  {canPredict && (
                    <span style={{ fontSize: 16, color: 'var(--text-dim)', marginLeft: 4 }}>›</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* 预测底部弹窗 */}
      {predictMatch && (
        <MatchPredictSheet
          homeId={predictMatch.homeId}
          awayId={predictMatch.awayId}
          label={predictMatch.label}
          teamMap={teamMap}
          onClose={() => setPredictMatch(null)}
        />
      )}
    </>
  );
}

// ===== 比赛预测底部弹窗 =====
function MatchPredictSheet({ homeId, awayId, label, teamMap, onClose }: {
  homeId: string; awayId: string; label: string;
  teamMap: Record<string, Team>;
  onClose: () => void;
}) {
  const t1 = teamMap[homeId];
  const t2 = teamMap[awayId];

  const result1 = useMemo(() => t1 ? computeComprehensiveScore(t1, awayId) : null, [t1, awayId]);
  const result2 = useMemo(() => t2 ? computeComprehensiveScore(t2, homeId) : null, [t2, homeId]);

  if (!t1 || !t2 || !result1 || !result2) return null;

  const winPct  = (result1.total / (result1.total + result2.total || 1) * 100).toFixed(1);
  const losePct = (result2.total / (result1.total + result2.total || 1) * 100).toFixed(1);
  const drawPct = (Math.max(0, 100 - +winPct - +losePct)).toFixed(1);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,.75)', zIndex: 999,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }} onClick={onClose}>
      <div style={{
        width: '100%', maxHeight: '85vh', background: '#1e293b',
        borderRadius: '20px 20px 0 0', padding: '24px 18px 32px',
        overflowY: 'auto', position: 'relative',
      }} onClick={e => e.stopPropagation()}>
        {/* 手柄 */}
        <div style={{ width: 40, height: 4, borderRadius: 2, background: '#475569', margin: '0 auto 16px' }} />
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 18, width: 32, height: 32,
          borderRadius: '50%', border: 'none', background: '#334155', color: '#94a3b8',
          fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>&times;</button>

        <div style={{ textAlign: 'center', fontSize: 17, fontWeight: 700, marginBottom: 20 }}>{label}</div>

        {/* 综合评分 */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <div style={{ flex: 1, textAlign: 'center', background: 'var(--bg-card2)', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{t1.name} 综合评分</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: result1.total >= result2.total ? 'var(--green)' : 'var(--accent)', marginTop: 4 }}>
              {result1.total}
            </div>
          </div>
          <div style={{ flex: 1, textAlign: 'center', background: 'var(--bg-card2)', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{t2.name} 综合评分</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: result2.total >= result1.total ? 'var(--green)' : 'var(--accent)', marginTop: 4 }}>
              {result2.total}
            </div>
          </div>
        </div>

        {/* 6维对比条 */}
        <div style={{ background: 'var(--bg-card2)', borderRadius: 10, padding: 12, marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 8, fontWeight: 600 }}>📊 6维对比</div>
          {result1.breakdown.map((dim, i) => {
            const v1 = dim.score;
            const v2 = result2.breakdown[i].score;
            return (
              <div key={dim.label} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-dim)', marginBottom: 2 }}>
                  <span>{dim.label} ({dim.weight})</span>
                  <span style={{ color: v1 >= v2 ? 'var(--green)' : 'var(--accent)' }}>{v1}</span>
                  <span style={{ color: v2 > v1 ? 'var(--green)' : 'var(--accent2)' }}>{v2}</span>
                </div>
                <div style={{ display: 'flex', gap: 2 }}>
                  <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--border)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 3, width: v1 + '%', background: v1 >= v2 ? 'var(--green)' : 'var(--accent)' }} />
                  </div>
                  <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--border)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 3, width: v2 + '%', background: v2 > v1 ? 'var(--green)' : 'var(--accent2)' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 概率条 */}
        <div style={{ display: 'flex', height: 14, borderRadius: 7, overflow: 'hidden', marginBottom: 8 }}>
          <div style={{ width: winPct + '%', background: 'var(--green)' }} />
          <div style={{ width: drawPct + '%', background: 'var(--gold)' }} />
          <div style={{ width: losePct + '%', background: 'var(--red)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>
          <span style={{ color: 'var(--green)', fontWeight: 600 }}>{t1.name}胜 {winPct}%</span>
          <span style={{ color: 'var(--gold)', fontWeight: 600 }}>平 {drawPct}%</span>
          <span style={{ color: 'var(--red)', fontWeight: 600 }}>{t2.name}胜 {losePct}%</span>
        </div>

        {/* 近期战绩 */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          <MiniForm team={t1} fixtures={RECENT_FORM[t1.id]} label={t1.name} />
          <MiniForm team={t2} fixtures={RECENT_FORM[t2.id]} label={t2.name} />
        </div>

        {/* H2H */}
        <H2HMini t1Id={t1.id} t2Id={t2.id} t1Name={t1.name} t2Name={t2.name} />
      </div>
    </div>
  );
}

function MiniForm({ team, fixtures, label }: { team: Team; fixtures?: RecentMatch[]; label: string }) {
  return (
    <div style={{ flex: 1, background: 'var(--bg-card2)', borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 6, fontWeight: 600 }}>
        {flagEmoji(team.fifaCode)} {label} · 近5场
      </div>
      {fixtures && fixtures.length > 0 ? (
        <div>
          <div style={{ display: 'flex', gap: 4 }}>
            {fixtures.map((m, i) => (
              <span key={i} style={{ fontSize: 16 }}>
                {m.result === 'W' ? '🟢' : m.result === 'D' ? '🟡' : '🔴'}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 6, fontSize: 10, color: 'var(--text-muted)' }}>
            {fixtures.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>vs {m.opponent}</span>
                <span>{m.homeScore}-{m.awayScore}</span>
              </div>
            ))}
          </div>
        </div>
      ) : <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>暂无数据</div>}
    </div>
  );
}

function H2HMini({ t1Id, t2Id, t1Name, t2Name }: { t1Id: string; t2Id: string; t1Name: string; t2Name: string }) {
  const h2h = getH2H(t1Id, t2Id);
  if (!h2h) return null;
  const isT1Team1 = h2h.team1 === t1Id;
  const t1Wins = isT1Team1 ? h2h.team1Wins : h2h.team2Wins;
  const t2Wins = isT1Team1 ? h2h.team2Wins : h2h.team1Wins;
  return (
    <div style={{ background: 'var(--bg-card2)', borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 8, fontWeight: 600 }}>⚔️ 历史交锋</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--accent)' }}>{h2h.totalMatches}次</div>
        <span style={{ color: 'var(--green)', fontWeight: 600 }}>{t1Name} {t1Wins}胜</span>
        <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{h2h.draws}平</span>
        <span style={{ color: 'var(--red)', fontWeight: 600 }}>{t2Name} {t2Wins}胜</span>
      </div>
      <div style={{ fontSize: 10, color: 'var(--text-dim)', marginBottom: 4 }}>最近对阵：</div>
      {h2h.lastMeetings.slice(0, 3).map((m, i) => (
        <div key={i} style={{ fontSize: 10, color: 'var(--text-muted)', padding: '2px 0' }}>
          {m.date.slice(0, 10)} · {m.competition} · {m.homeScore}-{m.awayScore}
        </div>
      ))}
    </div>
  );
}

function groupByDate(matches: typeof GROUP_FIXTURES) {
  const map: Record<string, typeof GROUP_FIXTURES> = {};
  for (const m of matches) {
    if (!map[m.date]) map[m.date] = [];
    map[m.date].push(m);
  }
  return Object.entries(map).map(([date, matches]) => ({ date, matches }));
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00+08:00');
  const weekdays = ['周日','周一','周二','周三','周四','周五','周六'];
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${m}月${day}日 ${weekdays[d.getDay()]}`;
}

function StandingsView() {
  const teams = getAllTeamsSync();
  const teamMap: Record<string, Team> = {};
  teams.forEach(t => { teamMap[t.id] = t; });

  return (
    <div>
      {WORLD_CUP_GROUPS.map(g => (
        <div key={g.group} className="card mb-12">
          <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
            {g.group} 组
          </h4>
          <div style={{
            display: 'flex', fontSize: 10, color: 'var(--text-dim)', fontWeight: 600,
            padding: '4px 0', borderBottom: '1px solid rgba(51,65,85,.3)', marginBottom: 4,
          }}>
            <span style={{ width: 80 }}>球队</span>
            <span style={{ width: 36, textAlign: 'center' }}>赛</span>
            <span style={{ width: 36, textAlign: 'center' }}>胜</span>
            <span style={{ width: 36, textAlign: 'center' }}>平</span>
            <span style={{ width: 36, textAlign: 'center' }}>负</span>
            <span style={{ flex: 1, textAlign: 'center' }}>进/失</span>
            <span style={{ width: 36, textAlign: 'center' }}>积分</span>
          </div>
          {g.teams.map((teamId, idx) => {
            const team = teamMap[teamId];
            const name = team?.name || teamId;
            const flag = team ? flagEmoji(team.fifaCode) : '⚽';
            return (
              <div key={teamId} style={{
                display: 'flex', alignItems: 'center', fontSize: 12,
                padding: '8px 0',
                borderBottom: idx < 3 ? '1px solid rgba(51,65,85,.2)' : 'none',
                fontWeight: 600,
              }}>
                <span style={{ width: 80, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 15 }}>{flag}</span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {name}
                  </span>
                </span>
                <span style={{ width: 36, textAlign: 'center', color: 'var(--text-dim)' }}>0</span>
                <span style={{ width: 36, textAlign: 'center', color: 'var(--text-dim)' }}>0</span>
                <span style={{ width: 36, textAlign: 'center', color: 'var(--text-dim)' }}>0</span>
                <span style={{ width: 36, textAlign: 'center', color: 'var(--text-dim)' }}>0</span>
                <span style={{ flex: 1, textAlign: 'center', color: 'var(--text-dim)' }}>0/0</span>
                <span style={{ width: 36, textAlign: 'center', fontWeight: 700, color: 'var(--gold)' }}>0</span>
              </div>
            );
          })}
          <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 6, fontStyle: 'italic' }}>
            前两名 + 8个最佳第三名晋级淘汰赛
          </div>
        </div>
      ))}
    </div>
  )
}

function KnockoutView() {
  return (
    <div>
      {KNOCKOUT_TEMPLATE.map((r, idx) => (
        <div key={idx} className="card mb-12">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: 14, fontWeight: 700 }}>{r.label}</h4>
            <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>{r.count}场</span>
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 4 }}>{r.dateRange}</div>
        </div>
      ))}
      <div className="card" style={{ textAlign: 'center', padding: 24, marginTop: 8 }}>
        <div style={{ fontSize: 30, marginBottom: 8 }}>🏆</div>
        <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>
          小组赛结束后根据出线结果生成对阵表
        </div>
      </div>
    </div>
  );
}

// ===== 直播比分组件 =====
function LiveScoreDisplay({ matchId, matchDate, matchTime }: { matchId: string; matchDate: string; matchTime: string }) {
  const [score, setScore] = useState<LiveScore | null>(null);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    const s = getLiveScore(matchId, matchDate, matchTime);
    if (s) setScore(s);
    if (s && s.status !== 'finished' && s.status !== 'not_started') {
      const timer = setInterval(() => {
        const ns = getLiveScore(matchId, matchDate, matchTime);
        if (ns) setScore(ns);
      }, 30000);
      return () => clearInterval(timer);
    }
  }, [matchId, matchDate, matchTime, refreshKey]);

  if (!score) {
    return (
      <span style={{
        fontSize: 10, fontWeight: 700, color: 'var(--accent2)',
        background: 'rgba(124,58,237,.1)', padding: '2px 8px', borderRadius: 10,
      }}>VS</span>
    );
  }

  const statusLabel =
    score.status === 'first_half' ? `${score.minute}'` :
    score.status === 'halftime' ? 'HT' :
    score.status === 'second_half' ? `${score.minute}'` :
    score.status === 'finished' ? 'FT' : '';

  return (
    <span style={{
      fontWeight: 700, padding: '2px 10px', borderRadius: 10, fontSize: 13,
      background: score.status === 'finished' ? 'rgba(100,116,139,.15)' : 'rgba(239,68,68,.15)',
      color: score.status === 'finished' ? 'var(--text-muted)' : '#ef4444',
    }}>
      {score.homeScore} - {score.awayScore}
      {statusLabel && <span style={{ fontSize: 9, marginLeft: 4, opacity: 0.7 }}>{statusLabel}</span>}
    </span>
  );
}

function LiveMatchBadge({ matchDate, matchTime }: { matchDate: string; matchTime: string }) {
  const now = new Date();
  const [y, m, d] = matchDate.split('-').map(Number);
  const [hh, mm] = (matchTime || '00:00').split(':').map(Number);
  const kickoff = new Date(Date.UTC(y, m - 1, d, hh - 8, mm));
  const diffMs = now.getTime() - kickoff.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < -5) return null;
  if (diffMin < 0 && diffMin >= -5) {
    return <span style={{ fontSize: 9, color: '#ef4444', fontWeight: 700, width: 28, textAlign: 'center' }}>即将</span>;
  }
  if (diffMin >= 0 && diffMin <= 120) {
    return <span style={{
      fontSize: 9, background: '#ef4444', color: '#fff', fontWeight: 700,
      padding: '1px 4px', borderRadius: 4, width: 28, textAlign: 'center',
    }}>LIVE</span>;
  }
  return null;
}
