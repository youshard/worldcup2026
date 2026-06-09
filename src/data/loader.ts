import type { Team } from '../types';

// GitHub Pages 子目录: /worldcup2026/ → 用它, / → 用 /
const BASE = (() => {
  if (typeof window !== 'undefined') {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 1 && parts[0] !== '') return '/' + parts[0] + '/';
  }
  return '/';
})();

let teamsCache: Team[] | null = null;

export async function loadTeams(): Promise<Team[]> {
  if (teamsCache) return teamsCache;
  const res = await fetch(`${BASE}teams.json`);
  const json = await res.json();
  teamsCache = json.teams;
  return teamsCache!;
}

export function getAllTeamsSync(): Team[] {
  if (!teamsCache) throw new Error('teams not loaded');
  return teamsCache;
}

export function getTeamById(id: string): Team | undefined {
  if (!teamsCache) return undefined;
  return teamsCache.find(t => t.id === id);
}
