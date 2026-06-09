import { useRefresh } from './RefreshContext'

export default function RefreshButton() {
  const { refreshKey, lastRefresh, autoRefresh, toggleAutoRefresh, doRefresh } = useRefresh();

  return (
    <div style={{
      position: 'fixed', bottom: 80, right: 16, zIndex: 200,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6,
    }}>
      {/* 状态栏 */}
      <div style={{
        fontSize: 9, color: 'var(--text-dim)', background: '#1e293bcc',
        borderRadius: 8, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6,
        backdropFilter: 'blur(4px)',
      }}>
        {autoRefresh ? '🔄 自动刷新中' : '⏸ 手动模式'}
        {lastRefresh && (
          <span>· {lastRefresh.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        )}
      </div>

      <div style={{ display: 'flex', gap: 6 }}>
        {/* 自动刷新开关 */}
        <button
          onClick={toggleAutoRefresh}
          style={{
            width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border)',
            background: autoRefresh ? '#22c55e33' : '#1e293b',
            color: autoRefresh ? '#22c55e' : 'var(--text-muted)',
            fontSize: 14, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
          title={autoRefresh ? '关闭自动刷新' : '开启自动刷新(60秒)'}
        >
          {autoRefresh ? '🔄' : '▶'}
        </button>

        {/* 手动刷新按钮 */}
        <button
          onClick={doRefresh}
          style={{
            width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--accent)',
            background: '#3b82f633', color: 'var(--accent)',
            fontSize: 18, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(59,130,246,.3)',
          }}
          title="刷新数据"
        >
          🔃
        </button>
      </div>
    </div>
  );
}
