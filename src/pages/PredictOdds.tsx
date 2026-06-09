import { useMemo } from 'react'
import { getAllTeamsSync } from '../data/loader'
import { flagEmoji } from '../data/flags'
import { RECENT_FORM } from '../data/formData'
import { TACTICS, TEAM_INJURIES, COACH_RATINGS } from '../data/systemData'
import { PLAYERS } from '../data/players'
import type { Team } from '../types'

/* ====== 夺冠赔率计算（同6维模型，H2H取默认50） ====== */
function computeElo(fifaCode: string): number {
  const teams = getAllTeamsSync();
  const team = teams.find(t => t.id === fifaCode);
  if (!team) return 1500;
  let elo = 1900 - (team.fifaRanking - 1) * 4;
  const fixtures = RECENT_FORM[fifaCode] || [];
  let eloDelta = 0;
  fixtures.slice(0, 10).forEach(f => {
    const oppTeam = teams.find(t => t.id === f.opponentCode);
    const oppElo = oppTeam ? 1900 - (oppTeam.fifaRanking - 1) * 4 : 1500;
    const expected = 1 / (1 + Math.pow(10, (oppElo - elo) / 400));
    const actual = f.result === 'W' ? 1 : f.result === 'D' ? 0.5 : 0;
    const k = f.competition.includes('热身') ? 15 : 25;
    const gd = Math.abs(f.homeScore - f.awayScore);
    eloDelta += (gd >= 3 ? k * 1.5 : k) * (actual - expected);
  });
  return Math.round(elo + eloDelta);
}
function calcSquadProfile(fifaCode: string) {
  const squad = PLAYERS.filter(p => p.fifaCode === fifaCode);
  if (!squad.length) return { avgRating: 70, avgAge: 27 };
  return {
    avgRating: squad.reduce((s, p) => s + p.rating, 0) / squad.length,
    avgAge: squad.reduce((s, p) => s + p.age, 0) / squad.length,
  };
}

function tacticScore(fifaCode: string): number {
  const t = TACTICS[fifaCode]; if (!t) return 4;
  let s = 5;
  if (t.strengths.length >= 3) s += 0.5;
  if (!t.weaknesses.some(w => w.includes('深度不足') || w.includes('有限'))) s += 0.5;
  if (t.style.includes('传控') || t.style.includes('控球')) s += 0.5;
  if (t.weaknesses.length >= 3) s -= 0.3;
  return Math.min(10, Math.max(3, s));
}

function injuryPenalty(fifaCode: string): number {
  const inj = TEAM_INJURIES.find(i => i.fifaCode === fifaCode);
  if (!inj) return 0;
  return Math.min(inj.outPlayers.length * 3 + inj.doubtfulPlayers.length * 1.5, 15);
}

const NON_WC_GLORY: Record<string, number> = {
  ESP: 100, ARG: 100, ENG: 85, POR: 80, NED: 70, FRA: 80,
  BRA: 60, GER: 55, CRO: 70, MAR: 75, SEN: 65, COL: 55, URU: 60, BEL: 50,
};

function computeOddsScore(team: Team): number {
  const h = team.worldCupHistory; const s = team.stats;
  const profile = calcSquadProfile(team.id);
  const coachRating = COACH_RATINGS[team.id] || 5;
  const tLevel = tacticScore(team.id);
  const injPen = injuryPenalty(team.id);
  const fixtures = RECENT_FORM[team.id] || [];
  const nonWcBonus = NON_WC_GLORY[team.id] || 0;

  // 硬实力 20%
  const eloNorm = Math.max(0, Math.min(100, (computeElo(team.id) - 1200) / 800 * 100));
  const dataScore  = (s.avgGoalsScored/3)*25 + (Math.max(0,3-s.avgGoalsConceded)/3)*25 + (s.avgPossession/70)*25 + (s.shotConversion/20)*25;
  const squadScore = Math.max(0, Math.min(100, (profile.avgRating - 60) / 60 * 100));
  const hardStr = eloNorm*0.5 + dataScore*0.25 + squadScore*0.25;

  // 教练战术 15%
  const coachS = (coachRating/10)*100; const tacticR = (tLevel/10)*100;
  const coachT = coachS*0.55 + tacticR*0.45;

  // 近期状态 25%
  const recentW = fixtures.filter(f=>f.result==='W').length;
  const recentD = fixtures.filter(f=>f.result==='D').length;
  const recentT = fixtures.length||1;
  const recentF = Math.min(100, (recentW/recentT)*100*0.7 + (recentD/recentT)*50*0.3);
  let gf=0,ga=0, gdB=0; fixtures.forEach(f=>{gf+=f.homeScore;ga+=f.awayScore;const gd=f.homeScore-f.awayScore;if(gd>=3)gdB+=5;else if(gd>=2)gdB+=2;});
  const recentA = Math.min(100, Math.max(0, 50 + (gf-ga)/recentT*15));
  const recent = recentF*0.55 + recentA*0.3 + Math.min(15,gdB)/15*100*0.15;

  // 历史交手取默认50
  const h2h = 50;

  // 健康度 15% — 只惩罚老化，年轻阵容不扣分
  const injS = Math.max(0, 100 - injPen*6.67);
  let ageS = 100;
  if (profile.avgAge > 29) { ageS = Math.max(60, 100 - (profile.avgAge - 29) * 5); }
  if (profile.avgAge < 24) { ageS = Math.min(100, 100 + (24 - profile.avgAge) * 2); }
  const health = injS*0.65 + ageS*0.35;

  // 大赛底蕴 15%
  const champS = Math.min(h.champion,5)/5*100;
  const appsS = Math.min(h.appearances/20,1)*100;
  let rt=0;
  if (h.champion>0 && h.championYears?.some(y=>y>=2018)) rt=100;
  else if (h.runnerUp>0 && h.runnerUpYears?.some(y=>y>=2018)) rt=80;
  else if (h.thirdPlace>0 && h.thirdPlaceYears?.some(y=>y>=2018)) rt=70;
  if (nonWcBonus > 0 && rt < nonWcBonus) { rt = Math.max(rt, nonWcBonus); }
  if (rt===0) { if(h.champion>0) rt=60; else if(h.runnerUp>0) rt=50; else rt=40; }
  const prestige = champS*0.4 + appsS*0.3 + rt*0.3;

  return hardStr*0.20 + coachT*0.15 + recent*0.25 + h2h*0.10 + health*0.15 + prestige*0.15;
}

export default function PredictOdds({ noHeader }: { noHeader?: boolean }) {
  const teams = useMemo(() => getAllTeamsSync().sort((a, b) => a.fifaRanking - b.fifaRanking), []);

  const odds = useMemo(() => {
    const scored = teams.map(t => ({ team:t, score: computeOddsScore(t) }));
    const max = Math.max(...scored.map(s => s.score));
    return scored.map(s => ({ ...s, pct: s.score/max*100 })).sort((a,b)=>b.score-a.score);
  }, [teams]);

  const headerEl = (
    <div style={{ padding: '0 0 12px' }}>
      <h2 style={{ fontSize: 20, fontWeight: 800 }}>夺冠赔率</h2>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
        综合6维模型：硬实力·教练战术·近期状态·阵容健康·大赛底蕴
      </p>
    </div>
  );

  return (
    <div className={noHeader ? '' : 'page'}>
      {!noHeader && <div className="sticky-header" style={{ paddingTop: 20 }}>{headerEl}</div>}
      {noHeader && headerEl}

      <div style={{ padding: '0 16px' }}>
        <div className="card mb-16">
          <p style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 6 }}>
            参考主流赔率：西班牙 5.5 · 法国 6.0 · 英格兰 7.0 · 巴西/阿根廷 9.0 · 葡萄牙/德国 13.0
          </p>
          <p style={{ fontSize: 10, color: 'var(--text-dim)', marginBottom: 14, fontStyle: 'italic' }}>
            权重：硬实力20%·教练战术15%·近期状态25%·健康度15%·底蕴15%·交手10%
          </p>

          {odds.map(({ team, score, pct }, idx) => (
            <div key={team.id} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0',
              borderBottom: idx < odds.length - 1 ? '1px solid rgba(51,65,85,.3)' : 'none',
            }}>
              <span style={{ width: 24, fontSize: 13, color: idx < 3 ? 'var(--gold)' : 'var(--text-dim)', fontWeight: 700 }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{flagEmoji(team.fifaCode)}</span>
              <span style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{team.name}</span>
              <div style={{ width: 110, height: 8, borderRadius: 4, background: 'var(--border)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 4, width: Math.min(pct, 100) + '%',
                  background: idx === 0 ? 'linear-gradient(90deg, #fbbf24, #f59e0b)'
                    : idx < 3 ? 'linear-gradient(90deg, #60a5fa, #3b82f6)'
                    : 'linear-gradient(90deg, #64748b, #475569)',
                }} />
              </div>
              <span style={{ width: 52, textAlign: 'right', fontSize: 13, fontWeight: 700, color: idx < 3 ? 'var(--gold)' : 'var(--accent)' }}>
                {score.toFixed(1)}分
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
