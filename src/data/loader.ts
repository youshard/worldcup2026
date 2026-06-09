import type { Team } from '../types';

let teamsCache: Team[] | null = null;

export async function loadTeams(): Promise<Team[]> {
  if (teamsCache) return teamsCache;
  const res = await fetch('/teams.json');
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
