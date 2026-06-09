import { useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { path: '/',        label: '首页',  icon: '🏠' },
  { path: '/teams',   label: '球队',  icon: '⚽' },
  { path: '/players', label: '球员',  icon: '⭐' },
  { path: '/matches', label: '赛程',  icon: '📅' },
  { path: '/weather', label: '天气',  icon: '🌤️' },
  { path: '/predict', label: '预测',  icon: '🔮' },
]

export default function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();

  function isActive(path: string) {
    if (path === '/predict') return location.pathname.startsWith('/predict');
    if (path === '/teams') return location.pathname.startsWith('/teams');
    if (path === '/weather') return location.pathname.startsWith('/weather');
    return location.pathname === path;
  }

  return (
    <div className="tab-bar" style={{ fontSize: 9 }}>
      {tabs.map(t => (
        <div
          key={t.path}
          className={`tab-item ${isActive(t.path) ? 'active' : ''}`}
          onClick={() => navigate(t.path)}
        >
          <span className="icon">{t.icon}</span>
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  )
}
