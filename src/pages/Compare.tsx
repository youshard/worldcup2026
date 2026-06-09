import { useState } from 'react'
import { getAllTeamsSync } from '../data/loader'
import { flagEmoji } from '../data/flags'
import { RECENT_FORM, getH2H } from '../data/formData'
import type { Team, RecentMatch, H2HRecord } from '../types'

export default function Compare() {
  const [teams] = useState<Team[]>(() => getAllTeamsSync().sort((a, b) => a.fifaRanking - b.fifaRanking));
  const [t1Id, setT1Id] = useState('');
  const [t2Id, setT2Id] = useState('');

  const t1 = teams.find(t => t.id === t1Id);
  const t2 = teams.find(t => t.id === t2Id);

  return (
    <div className="page">
      <div className="sticky-header" style={{ paddingTop: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800 }}>球队对比</h2>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
          多维度数据 + 近期战绩 + 历史交锋
        </p>
      </div>

      <div style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 6 }}>球队一</div>
            <select value={t1Id} onChange={e => setT1Id(e.target.value)} style={{
              width: '100%', height: 44, borderRadius: 10, border: '1px solid var(--border)',
              background: 'var(--bg-card)', color: 'var(--text)', padding: '0 12px', fontSize: 14, outline: 'none',
            }}>
              <option value="">选择球队</option>
              {teams.map(t => (<option key={t.id} value={t.id} disabled={t.id===t2Id}>[#{t.fifaRanking}] {t.name}</option>))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 6 }}>球队二</div>
            <select value={t2Id} onChange={e => setT2Id(e.target.value)} style={{
              width: '100%', height: 44, borderRadius: 10, border: '1px solid var(--border)',
              background: 'var(--bg-card)', color: 'var(--text)', padding: '0 12px', fontSize: 14, outline: 'none',
            }}>
              <option value="">选择球队</option>
              {teams.map(t => (<option key={t.id} value={t.id} disabled={t.id===t1Id}>[#{t.fifaRanking}] {t.name}</option>))}
            </select>
          </div>
        </div>

        {t1 && t2 && (
          <div>
            {/* VS 头部 */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:20, marginBottom:20, padding:20, background:'var(--bg-card)', borderRadius:14, border:'1px solid var(--border)' }}>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:36 }}>{flagEmoji(t1.fifaCode)}</div>
                <div style={{ fontSize:16, fontWeight:700, marginTop:4 }}>{t1.name}</div>
                <div style={{ fontSize:12, color:'var(--gold)', marginTop:2 }}>#{t1.fifaRanking}</div>
              </div>
              <div style={{ fontSize:24, fontWeight:800, color:'var(--accent2)' }}>VS</div>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:36 }}>{flagEmoji(t2.fifaCode)}</div>
                <div style={{ fontSize:16, fontWeight:700, marginTop:4 }}>{t2.name}</div>
                <div style={{ fontSize:12, color:'var(--gold)', marginTop:2 }}>#{t2.fifaRanking}</div>
              </div>
            </div>

            {/* 多维度对比 */}
            <div className="card mb-16">
              <h3 style={{ fontSize:13, color:'var(--text-dim)', marginBottom:12, letterSpacing:2 }}>📊 多维度对比</h3>
              {getCompareRows(t1, t2).map((row, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', padding:'10px 0', borderBottom: i<7?'1px solid rgba(51,65,85,.3)':'none' }}>
                  <span style={{ flex:1, fontSize:13, color:'var(--text-muted)' }}>{row.label}</span>
                  <span style={{ width:60, textAlign:'center', fontSize:14, fontWeight:row.winner===t1.name?700:600, color:row.winner===t1.name?'var(--accent)':'var(--text)' }}>{row.v1}</span>
                  <span style={{ width:60, textAlign:'center', fontSize:14, fontWeight:row.winner===t2.name?700:600, color:row.winner===t2.name?'var(--accent2)':'var(--text)' }}>{row.v2}</span>
                  <span style={{ width:60, textAlign:'center', fontSize:11, color:row.winner==='—'?'var(--gold)':'var(--accent)' }}>{row.winner==='—'?'持平':row.winner}</span>
                </div>
              ))}
            </div>

            {/* 近期战绩 */}
            <div style={{ display:'flex', gap:12, marginBottom:16 }}>
              <div className="card" style={{ flex:1 }}>
                <h3 style={{ fontSize:13, color:'var(--text-dim)', marginBottom:12 }}>📈 {t1.name} 近5场</h3>
                <FormTable fixtures={RECENT_FORM[t1.id]} team={t1} />
              </div>
              <div className="card" style={{ flex:1 }}>
                <h3 style={{ fontSize:13, color:'var(--text-dim)', marginBottom:12 }}>📈 {t2.name} 近5场</h3>
                <FormTable fixtures={RECENT_FORM[t2.id]} team={t2} />
              </div>
            </div>

            {/* 交手记录 */}
            <H2HSection t1={t1} t2={t2} />
          </div>
        )}

        {(!t1 || !t2) && (
          <div style={{ textAlign:'center', padding:60, color:'var(--text-dim)', fontSize:14 }}>请选择两支球队开始对比</div>
        )}
      </div>
    </div>
  )
}

function FormTable({ fixtures, team }: { fixtures?: RecentMatch[]; team: Team }) {
  if (!fixtures || fixtures.length === 0) return <div style={{ fontSize:12, color:'var(--text-dim)', padding:12, textAlign:'center' }}>暂无数据</div>;
  return (
    <div>
      {fixtures.map((m, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'7px 0', borderBottom: i<4?'1px solid rgba(51,65,85,.2)':'none', fontSize:11 }}>
          <span style={{ width:22, height:22, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center',
            fontWeight:700, fontSize:10, color:'#fff',
            background: m.result==='W'?'var(--green)':m.result==='D'?'var(--gold)':'var(--red)',
          }}>{m.result==='W'?'W':m.result==='D'?'D':'L'}</span>
          <span style={{ flex:1, fontWeight:600 }}>
            vs {flagEmoji(m.opponentCode)} {m.opponent}
          </span>
          <span style={{ fontWeight:700, color:'var(--text)' }}>{m.homeScore}-{m.awayScore}</span>
        </div>
      ))}
      <div style={{ marginTop:8, display:'flex', gap:8 }}>
        {fixtures.map((m, i) => (
          <span key={i} style={{ fontSize:18,
            color: m.result==='W'?'var(--green)':m.result==='D'?'var(--gold)':'var(--red)',
          }}>{m.result==='W'?'🟢':m.result==='D'?'🟡':'🔴'}</span>
        ))}
        <span style={{ fontSize:11, color:'var(--text-dim)', marginLeft:4 }}>
          {fixtures.filter(f=>f.result==='W').length}胜 {fixtures.filter(f=>f.result==='D').length}平 {fixtures.filter(f=>f.result==='L').length}负
        </span>
      </div>
    </div>
  );
}

function H2HSection({ t1, t2 }: { t1: Team; t2: Team }) {
  const h2h = getH2H(t1.id, t2.id);
  if (!h2h) return null;
  const isT1Team1 = h2h.team1 === t1.id;
  const t1Wins = isT1Team1 ? h2h.team1Wins : h2h.team2Wins;
  const t2Wins = isT1Team1 ? h2h.team2Wins : h2h.team1Wins;
  return (
    <div className="card mb-16">
      <h3 style={{ fontSize:13, color:'var(--text-dim)', marginBottom:12, letterSpacing:2 }}>
        ⚔️ 历史交锋数据
      </h3>
      <div style={{ display:'flex', gap:8, marginBottom:14 }}>
        <div style={{ flex:1, textAlign:'center', background:'var(--bg-card2)', borderRadius:10, padding:12 }}>
          <div style={{ fontSize:22, fontWeight:800, color:'var(--accent)' }}>{h2h.totalMatches}</div>
          <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:2 }}>总交锋</div>
        </div>
        <div style={{ flex:1, textAlign:'center', background:'var(--bg-card2)', borderRadius:10, padding:12 }}>
          <div style={{ fontSize:22, fontWeight:800, color:'var(--green)' }}>{t1Wins}</div>
          <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:2 }}>{t1.name}胜</div>
        </div>
        <div style={{ flex:1, textAlign:'center', background:'var(--bg-card2)', borderRadius:10, padding:12 }}>
          <div style={{ fontSize:22, fontWeight:800, color:'var(--gold)' }}>{h2h.draws}</div>
          <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:2 }}>平</div>
        </div>
        <div style={{ flex:1, textAlign:'center', background:'var(--bg-card2)', borderRadius:10, padding:12 }}>
          <div style={{ fontSize:22, fontWeight:800, color:'var(--red)' }}>{t2Wins}</div>
          <div style={{ fontSize:10, color:'var(--text-dim)', marginTop:2 }}>{t2.name}胜</div>
        </div>
      </div>
      <div style={{ fontSize:11, color:'var(--text-dim)', marginBottom:8 }}>最近交锋：</div>
      {h2h.lastMeetings.map((m, i) => {
        const who = h2h.team1===t1.id ? (isT1Team1 ? t1 : t2) : (isT1Team1 ? t2 : t1);
        return (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 0', borderBottom: i<h2h.lastMeetings.length-1?'1px solid rgba(51,65,85,.2)':'none', fontSize:11 }}>
          <span style={{ color:'var(--text-dim)', width:70 }}>{m.date}</span>
          <span style={{ flex:1, fontWeight:600 }}>
            {flagEmoji(m.opponentCode)} {m.homeScore}-{m.awayScore}
          </span>
          <span style={{ fontSize:10, color:'var(--text-dim)' }}>{m.competition}</span>
        </div>
        );
      })}
    </div>
  );
}

function getCompareRows(t1: Team, t2: Team) {
  const h1 = t1.worldCupHistory, h2 = t2.worldCupHistory;
  const s1 = t1.stats, s2 = t2.stats;
  const total1 = h1.totalWins+h1.totalDraws+h1.totalLosses;
  const total2 = h2.totalWins+h2.totalDraws+h2.totalLosses;
  const wr1 = total1>0?(h1.totalWins/total1*100).toFixed(1)+'%':'—';
  const wr2 = total2>0?(h2.totalWins/total2*100).toFixed(1)+'%':'—';
  const items: [string,string,string,'lower'|'higher'][] = [
    ['FIFA 排名',String(t1.fifaRanking),String(t2.fifaRanking),'lower'],
    ['参赛次数',String(h1.appearances),String(h2.appearances),'higher'],
    ['夺冠次数',String(h1.champion),String(h2.champion),'higher'],
    ['历史胜率',wr1,wr2,'higher'],
    ['场均进球',s1.avgGoalsScored.toFixed(2),s2.avgGoalsScored.toFixed(2),'higher'],
    ['场均失球',s1.avgGoalsConceded.toFixed(2),s2.avgGoalsConceded.toFixed(2),'lower'],
    ['控球率',s1.avgPossession.toFixed(1)+'%',s2.avgPossession.toFixed(1)+'%','higher'],
    ['射门转化率',s1.shotConversion.toFixed(1)+'%',s2.shotConversion.toFixed(1)+'%','higher'],
  ];
  return items.map(([label,v1,v2,dir]) => {
    const n1=parseFloat(v1),n2=parseFloat(v2); let winner='—';
    if(!isNaN(n1)&&!isNaN(n2)){if(dir==='lower'){if(n1<n2)winner=t1.name;else if(n2<n1)winner=t2.name}else{if(n1>n2)winner=t1.name;else if(n2>n1)winner=t2.name}}
    return{label,v1,v2,winner};
  });
}
