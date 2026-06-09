import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react'

interface RefreshContextType {
  refreshKey: number;         // 每次刷新 +1，触发子组件重新拉数据
  lastRefresh: Date | null;   // 上次刷新时间
  autoRefresh: boolean;       // 自动刷新开关
  toggleAutoRefresh: () => void;
  doRefresh: () => void;       // 手动刷新
}

const RefreshCtx = createContext<RefreshContextType>({
  refreshKey: 0, lastRefresh: null, autoRefresh: false,
  toggleAutoRefresh: () => {}, doRefresh: () => {},
});

export function RefreshProvider({ children }: { children: React.ReactNode }) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const doRefresh = useCallback(() => {
    setRefreshKey(k => k + 1);
    setLastRefresh(new Date());
  }, []);

  const toggleAutoRefresh = useCallback(() => {
    setAutoRefresh(a => !a);
  }, []);

  // 自动刷新：每 60 秒
  useEffect(() => {
    if (autoRefresh) {
      timerRef.current = setInterval(() => {
        setRefreshKey(k => k + 1);
        setLastRefresh(new Date());
      }, 60000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoRefresh]);

  return (
    <RefreshCtx.Provider value={{ refreshKey, lastRefresh, autoRefresh, toggleAutoRefresh, doRefresh }}>
      {children}
    </RefreshCtx.Provider>
  );
}

export function useRefresh() { return useContext(RefreshCtx); }
