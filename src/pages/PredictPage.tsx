import PredictMatchup from './PredictMatchup'
import PredictOdds from './PredictOdds'
import { useSearchParams } from 'react-router-dom'

export default function PredictPage() {
  const [params, setParams] = useSearchParams();
  const tab = (params.get('tab') as 'matchup' | 'odds') || 'matchup';

  return (
    <div className="page">
      {/* 子标签栏 */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-primary)',
        padding: '20px 16px 8px', display: 'flex', gap: 8,
      }}>
        {([
          { key: 'matchup' as const, label: '⚔️ 单场预测' },
          { key: 'odds' as const, label: '🏆 夺冠赔率' },
        ]).map(t => (
          <button
            key={t.key}
            onClick={() => setParams({ tab: t.key })}
            style={{
              flex: 1, height: 40, borderRadius: 10,
              border: `1px solid ${tab === t.key ? 'var(--accent)' : 'var(--border)'}`,
              background: tab === t.key ? 'rgba(59,130,246,.15)' : 'transparent',
              color: tab === t.key ? 'var(--accent)' : 'var(--text-muted)',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
            }}
          >{t.label}</button>
        ))}
      </div>

      {tab === 'matchup' ? <PredictMatchup noHeader /> : <PredictOdds noHeader />}
    </div>
  )
}
