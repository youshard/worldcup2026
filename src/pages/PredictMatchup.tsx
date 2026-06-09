import { useState, useMemo } from 'react'
import { getAllTeamsSync } from '../data/loader'
import { flagEmoji } from '../data/flags'
import { RECENT_FORM, getH2H } from '../data/formData'
import { TACTICS, TEAM_INJURIES, COACH_RATINGS } from '../data/systemData'
import { PLAYERS } from '../data/players'
import type { Team, RecentMatch } from '../types'

/* ====== 综合6维预测模型 v3 ======
 *
 * 1. 硬实力 (20%): Elo动态评分 (含近期对战修正) + 球员平均评分
 * 2. 教练与战术 (15%): 教练评分 + 战术级别
 * 3. 近期状态 (25%): 近5场胜率 + 净胜球幅度 + 对手质量加权
 * 4. 历史交手 (10%): H2H胜率（含最近3场加权）
 * 5. 阵容健康 (15%): 伤病扣分 + 年龄结构（年轻=加分，老化=扣分）
 * 6. 大赛底蕴 (15%): 冠军历史 + 参赛经验 + 近年大赛成绩
 * 🆕 东道主修正: USA/MEX/CAN 主场 +3%
 */

/* ====== Elo 评分系统 ====== */
function computeElo(fifaCode: string): number {
  // 基础 Elo = FIFA 排名反推 (1900 - rank*4)
  const teams = getAllTeamsSync();
  const team = teams.find(t => t.id === fifaCode);
  if (!team) return 1500;
  let elo = 1900 - (team.fifaRanking - 1) * 4;

  // 根据近 10 场比赛结果动态修正
  const fixtures = RECENT_FORM[fifaCode] || [];
  const recentFixtures = fixtures.slice(0, 10);
  let eloDelta = 0;
  recentFixtures.forEach(f => {
    const oppTeam = teams.find(t => t.id === f.opponentCode);
    const oppElo = oppTeam ? 1900 - (oppTeam.fifaRanking - 1) * 4 : 1500;
    const expected = 1 / (1 + Math.pow(10, (oppElo - elo) / 400));
    const actual = f.result === 'W' ? 1 : f.result === 'D' ? 0.5 : 0;
    const k = f.competition.includes('热身') ? 15 : 25;
    // 净胜球加成: 赢3球以上+50%K值
    const gd = Math.abs(f.homeScore - f.awayScore);
    const kFinal = gd >= 3 ? k * 1.5 : k;
    eloDelta += kFinal * (actual - expected);
  });
  return Math.round(elo + eloDelta);
}

// 东道主加成
function hostBonus(fifaCode: string): number {
  if (['USA','MEX','CAN'].includes(fifaCode)) return 3;
  return 0;
}

/* ====== 球员画像（预计算） ====== */
function calcSquadProfile(fifaCode: string) {
  const squad = PLAYERS.filter(p => p.fifaCode === fifaCode);
  if (!squad.length) return { avgRating: 70, avgAge: 27, starCount: 0 };
  const total = squad.reduce((s, p) => s + p.rating, 0);
  const totalAge = squad.reduce((s, p) => s + p.age, 0);
  return {
    avgRating: total / squad.length,
    avgAge: totalAge / squad.length,
    starCount: squad.filter(p => p.rating >= 100).length,
  };
}

/* ====== 战术级别分 ====== */
function tacticScore(fifaCode: string): number {
  const t = TACTICS[fifaCode];
  if (!t) return 4;
  let s = 5;
  if (t.strengths.length >= 3) s += 0.5;
  if (!t.weaknesses.some(w => w.includes('深度不足') || w.includes('有限'))) s += 0.5;
  if (t.style.includes('传控') || t.style.includes('控球')) s += 0.5;
  if (t.weaknesses.length >= 3) s -= 0.3;
  return Math.min(10, Math.max(3, s));
}

/* ====== 伤病扣分 ====== */
function injuryPenalty(fifaCode: string): number {
  const inj = TEAM_INJURIES.find(i => i.fifaCode === fifaCode);
  if (!inj) return 0;
  let penalty = 0;
  penalty += inj.outPlayers.length * 3;
  penalty += inj.doubtfulPlayers.length * 1.5;
  return Math.min(penalty, 15);
}

// 欧洲杯/美洲杯等非世界杯大赛冠军加成
const NON_WC_GLORY: Record<string, number> = {
  ESP: 100,  // 2024欧洲杯冠军
  ARG: 100,  // 2024美洲杯冠军
  ENG: 85,   // 2024欧洲杯亚军
  POR: 80,   // 2025欧国联冠军
  NED: 70,   // 2024欧洲杯四强
  FRA: 80,   // 2024欧洲杯四强 + 2022世界杯亚军
  BRA: 60,   // 传统强队
  GER: 55,   // 东道主
  CRO: 70,   // 2023欧国联亚军
  MAR: 75,   // 2022世界杯四强
  SEN: 65,   // 非洲杯冠军
  COL: 55,
  URU: 60,
  BEL: 50,
};

/* ====== 主评分函数 ====== */
export function computeComprehensiveScore(team: Team, opponentId?: string): {
  total: number;
  breakdown: { label: string; score: number; max: number; weight: string }[];
} {
  const h = team.worldCupHistory;
  const s = team.stats;
  const profile = calcSquadProfile(team.id);
  const coachRating = COACH_RATINGS[team.id] || 5;
  const tLevel = tacticScore(team.id);
  const injPen = injuryPenalty(team.id);
  const fixtures = RECENT_FORM[team.id] || [];
  const nonWcBonus = NON_WC_GLORY[team.id] || 0;

  // ---- 1. 硬实力 (20%) ----
  const eloScore = computeElo(team.id);
  // Elo 归一化到 0-100 (范围 ~1200-2000)
  const eloNormalized = Math.max(0, Math.min(100, (eloScore - 1200) / 800 * 100));
  const dataScore =
    (s.avgGoalsScored / 3) * 25 +
    (Math.max(0, 3 - s.avgGoalsConceded) / 3) * 25 +
    (s.avgPossession / 70) * 25 +
    (s.shotConversion / 20) * 25;
  const squadScore = Math.max(0, Math.min(100, (profile.avgRating - 60) / 60 * 100));
  const hardStrength = eloNormalized * 0.5 + dataScore * 0.25 + squadScore * 0.25;

  // ---- 2. 教练与战术 (15%) ----
  const coachScore = (coachRating / 10) * 100;
  const tacticRaw = (tLevel / 10) * 100;
  const coachTactic = coachScore * 0.55 + tacticRaw * 0.45;

  // ---- 3. 近期状态 (25%) ----
  const recentWins = fixtures.filter(f => f.result === 'W').length;
  const recentDraws = fixtures.filter(f => f.result === 'D').length;
  const recentTotal = fixtures.length || 1;
  const recentWinRate = (recentWins / recentTotal) * 100 * 0.7 + (recentDraws / recentTotal) * 50 * 0.3;
  const recentFormScore = Math.min(100, recentWinRate);
  let recentGF = 0, recentGA = 0, recentGDBonus = 0;
  fixtures.forEach(f => {
    recentGF += f.homeScore;
    recentGA += f.awayScore;
    // 大胜加成: 净胜3球以上额外加分
    const gd = f.homeScore - f.awayScore;
    if (gd >= 3) recentGDBonus += 5;
    else if (gd >= 2) recentGDBonus += 2;
  });
  const recentGdPerGame = recentTotal > 0 ? (recentGF - recentGA) / recentTotal : 0;
  const recentAttackScore = Math.min(100, Math.max(0, 50 + recentGdPerGame * 15));
  const recentForm = recentFormScore * 0.55 + recentAttackScore * 0.3 + Math.min(15, recentGDBonus) / 15 * 100 * 0.15;

  // ---- 4. 历史交手 (10%) ----
  let h2hScore = 50;
  if (opponentId) {
    const h2h = getH2H(team.id, opponentId);
    if (h2h) {
      const isTeam1 = h2h.team1 === team.id;
      const wins = isTeam1 ? h2h.team1Wins : h2h.team2Wins;
      const totalH2H = h2h.totalMatches || 1;
      let recentH2HWins = 0;
      h2h.lastMeetings.slice(0, 3).forEach(m => {
        if (m.result === 'W') recentH2HWins++;
        else if (m.result === 'D') recentH2HWins += 0.5;
      });
      const h2hWinRate = (wins / totalH2H) * 100 * 0.5 + (recentH2HWins / Math.min(3, h2h.lastMeetings.length || 1)) * 100 * 0.5;
      h2hScore = Math.min(100, h2hWinRate);
    }
  }

  // ---- 5. 健康度 (15%) ----
  // 伤病扣分 (10%)
  const injuryScore = Math.max(0, 100 - injPen * 6.67);
  // 年龄结构 (5%) — 只惩罚老化，年轻阵容不扣分
  // 29岁及以上开始递减，30岁前不扣，30岁后每岁扣3分
  let ageScore = 100;
  if (profile.avgAge > 29) {
    ageScore = Math.max(60, 100 - (profile.avgAge - 29) * 5);
  }
  // 年轻阵容轻微加成：23岁以下+额外分（代表上升期+体能优势）
  if (profile.avgAge < 24) {
    ageScore = Math.min(100, 100 + (24 - profile.avgAge) * 2);
  }
  const healthScore = injuryScore * 0.65 + ageScore * 0.35;

  // ---- 6. 大赛底蕴 (15%) ----
  const championScore = Math.min(h.champion, 5) / 5 * 100;
  const appsScore = Math.min(h.appearances / 20, 1) * 100;
  // 近年大赛成绩：世界杯冠军+欧洲杯/美洲杯等综合评定
  let recentTournament = 0;
  // 世界杯冠军
  if (h.champion > 0 && h.championYears?.some(y => y >= 2018)) recentTournament = 100;
  else if (h.runnerUp > 0 && h.runnerUpYears?.some(y => y >= 2018)) recentTournament = 80;
  else if (h.thirdPlace > 0 && h.thirdPlaceYears?.some(y => y >= 2018)) recentTournament = 70;
  // 叠加非世界杯大赛成绩
  if (nonWcBonus > 0 && recentTournament < nonWcBonus) {
    recentTournament = Math.max(recentTournament, nonWcBonus);
  }
  if (recentTournament === 0) {
    if (h.champion > 0) recentTournament = 60;
    else if (h.runnerUp > 0) recentTournament = 50;
    else recentTournament = 40;
  }
  const prestigeScore = championScore * 0.4 + appsScore * 0.3 + recentTournament * 0.3;

  // ---- 加权汇总 ----
  const hBonus = hostBonus(team.id);
  const total =
    hardStrength * 0.20 +
    coachTactic  * 0.15 +
    recentForm   * 0.25 +
    h2hScore     * 0.10 +
    healthScore  * 0.15 +
    prestigeScore* 0.15 +
    hBonus;  // 东道主加成(0或3)

  return {
    total: Math.round(total * 10) / 10,
    breakdown: [
      { label: '硬实力', score: Math.round(hardStrength), max: 100, weight: '20%' },
      { label: '教练战术', score: Math.round(coachTactic), max: 100, weight: '15%' },
      { label: '近期状态', score: Math.round(recentForm), max: 100, weight: '25%' },
      { label: '历史交手', score: Math.round(h2hScore), max: 100, weight: '10%' },
      { label: '阵容健康', score: Math.round(healthScore), max: 100, weight: '15%' },
      { label: '大赛底蕴', score: Math.round(prestigeScore), max: 100, weight: '15%' },
    ],
  };
}

export default function PredictMatchup({ noHeader }: { noHeader?: boolean }) {
  const teams = useMemo(() => getAllTeamsSync().sort((a, b) => a.fifaRanking - b.fifaRanking), []);
  const [t1Id, setT1Id] = useState('');
  const [t2Id, setT2Id] = useState('');

  const t1 = teams.find(t => t.id === t1Id);
  const t2 = teams.find(t => t.id === t2Id);

  const headerEl = (
    <div style={{ padding: '0 0 12px' }}>
      <h2 style={{ fontSize: 20, fontWeight: 800 }}>单场预测</h2>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
        6维综合模型：硬实力·教练战术·近期状态·历史交手·阵容健康·大赛底蕴
      </p>
    </div>
  );

  return (
    <div className={noHeader ? '' : 'page'}>
      {!noHeader && <div className="sticky-header" style={{ paddingTop: 20 }}>{headerEl}</div>}
      {noHeader && headerEl}

      <div style={{ padding: '0 16px' }}>
        <div className="card mb-16">
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <select value={t1Id} onChange={e => setT1Id(e.target.value)} style={{
              flex: 1, height: 44, borderRadius: 10, border: '1px solid var(--border)',
              background: 'var(--bg-card2)', color: 'var(--text)', padding: '0 12px', fontSize: 14, outline: 'none',
            }}>
              <option value="">主队</option>
              {teams.map(t => (<option key={t.id} value={t.id} disabled={t.id===t2Id}>[#{t.fifaRanking}] {t.name}</option>))}
            </select>
            <span style={{ alignSelf:'center', fontSize:18, fontWeight:800, color:'var(--accent2)' }}>VS</span>
            <select value={t2Id} onChange={e => setT2Id(e.target.value)} style={{
              flex: 1, height: 44, borderRadius: 10, border: '1px solid var(--border)',
              background: 'var(--bg-card2)', color: 'var(--text)', padding: '0 12px', fontSize: 14, outline: 'none',
            }}>
              <option value="">客队</option>
              {teams.map(t => (<option key={t.id} value={t.id} disabled={t.id===t1Id}>[#{t.fifaRanking}] {t.name}</option>))}
            </select>
          </div>

          {t1 && t2 && <ComprehensiveResult t1={t1} t2={t2} />}
        </div>
      </div>
    </div>
  )
}

function ComprehensiveResult({ t1, t2 }: { t1: Team; t2: Team }) {
  const result1 = useMemo(() => computeComprehensiveScore(t1, t2.id), [t1, t2]);
  const result2 = useMemo(() => computeComprehensiveScore(t2, t1.id), [t1, t2]);

  const winPct  = (result1.total / (result1.total + result2.total || 1) * 100).toFixed(1);
  const losePct = (result2.total / (result1.total + result2.total || 1) * 100).toFixed(1);
  const drawPct = (Math.max(0, 100 - +winPct - +losePct)).toFixed(1);

  const profile1 = useMemo(() => calcSquadProfile(t1.id), [t1]);
  const profile2 = useMemo(() => calcSquadProfile(t2.id), [t2]);

  return (
    <div>
      {/* VS 头部 */}
      <div style={{ textAlign:'center', marginBottom:16 }}>
        <span style={{ fontSize:26 }}>{flagEmoji(t1.fifaCode)}</span>
        <span style={{ fontSize:18, fontWeight:800, margin:'0 14px', color:'var(--accent2)' }}>VS</span>
        <span style={{ fontSize:26 }}>{flagEmoji(t2.fifaCode)}</span>
      </div>

      {/* 综合评分对比 */}
      <div style={{ display:'flex', gap:10, marginBottom:16 }}>
        <div style={{ flex:1, textAlign:'center', background:'var(--bg-card2)', borderRadius:10, padding:14 }}>
          <div style={{ fontSize:11, color:'var(--text-dim)' }}>{t1.name} 综合评分</div>
          <div style={{ fontSize:32, fontWeight:800, color: result1.total>=result2.total?'var(--green)':'var(--accent)', marginTop:4 }}>
            {result1.total}
          </div>
          <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:2 }}>/ 100</div>
        </div>
        <div style={{ flex:1, textAlign:'center', background:'var(--bg-card2)', borderRadius:10, padding:14 }}>
          <div style={{ fontSize:11, color:'var(--text-dim)' }}>{t2.name} 综合评分</div>
          <div style={{ fontSize:32, fontWeight:800, color: result2.total>=result1.total?'var(--green)':'var(--accent)', marginTop:4 }}>
            {result2.total}
          </div>
          <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:2 }}>/ 100</div>
        </div>
      </div>

      {/* 6维雷达对比 */}
      <div style={{ background:'var(--bg-card2)', borderRadius:10, padding:12, marginBottom:16 }}>
        <div style={{ fontSize:11, color:'var(--text-dim)', marginBottom:10, fontWeight:600 }}>📊 6维能力对比</div>
        {result1.breakdown.map((dim, i) => {
          const v1 = dim.score;
          const v2 = result2.breakdown[i].score;
          return (
            <div key={dim.label} style={{ marginBottom:10 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:10, color:'var(--text-dim)', marginBottom:3 }}>
                <span>{dim.label} <span style={{ color:'var(--text-muted)' }}>({dim.weight})</span></span>
                <span style={{ color:'var(--accent)' }}>{v1}</span>
                <span style={{ fontSize:9, color:'var(--accent2)' }}>vs</span>
                <span style={{ color:'var(--accent2)' }}>{v2}</span>
              </div>
              <div style={{ display:'flex', gap:3 }}>
                <div style={{ flex:1, height:8, borderRadius:4, background:'var(--border)', overflow:'hidden' }}>
                  <div style={{ height:'100%', borderRadius:4, width:Math.min(v1/100*100,100)+'%',
                    background: v1>=v2?'var(--green)':v1===v2?'var(--gold)':'var(--accent)',
                  }} />
                </div>
                <div style={{ flex:1, height:8, borderRadius:4, background:'var(--border)', overflow:'hidden' }}>
                  <div style={{ height:'100%', borderRadius:4, width:Math.min(v2/100*100,100)+'%',
                    background: v2>v1?'var(--green)':v2===v1?'var(--gold)':'var(--accent2)',
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 阵容详情 */}
      <div style={{ background:'var(--bg-card2)', borderRadius:10, padding:12, marginBottom:16 }}>
        <div style={{ fontSize:11, color:'var(--text-dim)', marginBottom:8, fontWeight:600 }}>👥 阵容画像</div>
        <div style={{ display:'flex', gap:10 }}>
          {[
            { label: '均分', v1: profile1.avgRating.toFixed(0), v2: profile2.avgRating.toFixed(0), unit: '', help: '球员均评' },
            { label: '均龄', v1: profile1.avgAge.toFixed(1), v2: profile2.avgAge.toFixed(1), unit: '岁', help: '平均年龄' },
            { label: '球星', v1: profile1.starCount, v2: profile2.starCount, unit: '人', help: '评分≥100' },
          ].map((item, i) => (
            <div key={i} style={{ flex:1, textAlign:'center' }}>
              <div style={{ fontSize:9, color:'var(--text-dim)', marginBottom:2 }}>{item.help}</div>
              <div style={{ fontSize:18, fontWeight:800 }}>{item.v1}</div>
              <div style={{ fontSize:9, color:'var(--accent2)' }}>vs</div>
              <div style={{ fontSize:18, fontWeight:800 }}>{item.v2}</div>
              <div style={{ fontSize:9, color:'var(--text-dim)' }}>{item.unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 预测概率条 */}
      <div style={{ display:'flex', height:16, borderRadius:8, overflow:'hidden', marginBottom:10 }}>
        <div style={{ width:winPct+'%', background:'var(--green)', transition:'width .5s' }} />
        <div style={{ width:drawPct+'%', background:'var(--gold)' }} />
        <div style={{ width:losePct+'%', background:'var(--red)' }} />
      </div>
      <div style={{ display:'flex', justifyContent:'space-around', fontSize:13, color:'var(--text-muted)', marginBottom:14 }}>
        <span style={{ color:'var(--green)', fontWeight:600 }}>{t1.name}胜 {winPct}%</span>
        <span style={{ color:'var(--gold)', fontWeight:600 }}>平 {drawPct}%</span>
        <span style={{ color:'var(--red)', fontWeight:600 }}>{t2.name}胜 {losePct}%</span>
      </div>

      <div style={{ marginBottom:16, padding:14, borderRadius:10, background:'var(--bg-card2)', textAlign:'center' }}>
        <span style={{ fontSize:14, color:'var(--text-muted)' }}>
          综合6维模型预测：<b style={{ color: result1.total>=result2.total?'var(--green)':'var(--red)' }}>
            {result1.total>=result2.total ? t1.name : t2.name}
          </b> 获胜概率更高
        </span>
        <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:6 }}>
          硬实力20% · 教练战术15% · 近期状态25% · 交手记录10% · 健康度15% · 大赛底蕴15%
        </div>
      </div>

      {/* 近期战绩双列 */}
      <div style={{ display:'flex', gap:10, marginBottom:14 }}>
        <MiniForm team={t1} fixtures={RECENT_FORM[t1.id]} label={t1.name} />
        <MiniForm team={t2} fixtures={RECENT_FORM[t2.id]} label={t2.name} />
      </div>

      {/* 交手记录 */}
      <H2HMini t1={t1} t2={t2} />
    </div>
  );
}

function MiniForm({ team, fixtures, label }: { team: Team; fixtures?: RecentMatch[]; label: string }) {
  return (
    <div style={{ flex:1, background:'var(--bg-card2)', borderRadius:10, padding:12 }}>
      <div style={{ fontSize:11, color:'var(--text-dim)', marginBottom:6, fontWeight:600 }}>
        {flagEmoji(team.fifaCode)} {label} · 近5场
      </div>
      {fixtures && fixtures.length > 0 ? (
        <div>
          <div style={{ display:'flex', gap:4 }}>
            {fixtures.map((m, i) => (
              <span key={i} style={{ fontSize:16 }}>
                {m.result==='W'?'🟢':m.result==='D'?'🟡':'🔴'}
              </span>
            ))}
          </div>
          <div style={{ marginTop:6, fontSize:10, color:'var(--text-muted)' }}>
            {fixtures.map((m,i) => (
              <div key={i} style={{ display:'flex', justifyContent:'space-between' }}>
                <span>vs {m.opponent}</span>
                <span>{m.homeScore}-{m.awayScore}</span>
              </div>
            ))}
          </div>
        </div>
      ) : <div style={{ fontSize:10, color:'var(--text-dim)' }}>暂无数据</div>}
    </div>
  );
}

function H2HMini({ t1, t2 }: { t1: Team; t2: Team }) {
  const h2h = getH2H(t1.id, t2.id);
  if (!h2h) return null;
  const isT1Team1 = h2h.team1 === t1.id;
  const t1Wins = isT1Team1 ? h2h.team1Wins : h2h.team2Wins;
  const t2Wins = isT1Team1 ? h2h.team2Wins : h2h.team1Wins;
  return (
    <div style={{ background:'var(--bg-card2)', borderRadius:10, padding:12 }}>
      <div style={{ fontSize:11, color:'var(--text-dim)', marginBottom:8, fontWeight:600 }}>⚔️ 历史交锋</div>
      <div style={{ display:'flex', gap:8, marginBottom:10 }}>
        <div style={{ fontSize:16, fontWeight:800, color:'var(--accent)' }}>{h2h.totalMatches}次</div>
        <span style={{ color:'var(--green)', fontWeight:600 }}>{t1.name} {t1Wins}胜</span>
        <span style={{ color:'var(--gold)', fontWeight:600 }}>{h2h.draws}平</span>
        <span style={{ color:'var(--red)', fontWeight:600 }}>{t2.name} {t2Wins}胜</span>
      </div>
      <div style={{ fontSize:10, color:'var(--text-dim)', marginBottom:4 }}>最近对阵：</div>
      {h2h.lastMeetings.slice(0,3).map((m,i) => (
        <div key={i} style={{ fontSize:10, color:'var(--text-muted)', padding:'2px 0' }}>
          {m.date.slice(0,10)} · {m.competition} · {m.homeScore}-{m.awayScore}
        </div>
      ))}
    </div>
  );
}
