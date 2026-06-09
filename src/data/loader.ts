import type { Team } from '../types';

const BASE = import.meta.env.BASE_URL || '/';

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
