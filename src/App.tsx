import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadTeams } from './data/loader'
import { RefreshProvider } from './components/RefreshContext'
import RefreshButton from './components/RefreshButton'
import TabBar from './components/TabBar'
import Dashboard from './pages/Dashboard'
import TeamList from './pages/TeamList'
import TeamDetail from './pages/TeamDetail'
import Compare from './pages/Compare'
import Matches from './pages/Matches'
import Players from './pages/Players'
import Weather from './pages/Weather'
import PredictPage from './pages/PredictPage'

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadTeams().then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: 16 }}>
        加载中...
      </div>
    );
  }

  return (
    <RefreshProvider>
      <BrowserRouter basename="/worldcup2026">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/players" element={<Players />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/predict" element={<PredictPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <TabBar />
        <RefreshButton />
      </BrowserRouter>
    </RefreshProvider>
  )
}
