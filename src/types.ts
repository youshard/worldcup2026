export interface TeamStats {
  avgGoalsScored: number;
  avgGoalsConceded: number;
  avgPossession: number;
  shotConversion: number;
}

export interface WorldCupHistory {
  appearances: number;
  champion: number;
  championYears?: number[];
  runnerUp: number;
  runnerUpYears?: number[];
  thirdPlace: number;
  thirdPlaceYears?: number[];
  bestResult: string;
  totalWins: number;
  totalDraws: number;
  totalLosses: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface Team {
  id: string;
  name: string;
  nameEn: string;
  fifaCode: string;
  nickname: string;
  nicknameEn: string;
  confederation: string;
  fifaRanking: number;
  fifaPoints: number;
  qualification: string;
  worldCupHistory: WorldCupHistory;
  stats: TeamStats;
}

export interface MatchData {
  id: string;
  round: 'group' | 'round32' | 'round16' | 'quarter' | 'semi' | 'third' | 'final';
  group?: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time?: string;   // 北京时间 HH:MM
  venue: string;
}

export interface ConfederationInfo {
  name: string;
  color: string;
}

export interface Player {
  id: string;
  name: string;
  nameEn: string;
  fifaCode: string;
  position: string;
  age: number;
  club: string;
  rating: number;
  injuryStatus?: 'fit' | 'doubt' | 'out';
  injuryDetail?: string;
}

export interface TacticalSystem {
  formation: string;       // e.g. '4-3-3', '4-2-3-1'
  style: string;            // e.g. '传控', '高位逼抢', '防守反击'
  strengths: string[];      // 战术强项
  weaknesses: string[];     // 战术弱点
  keyPrinciple: string;     // 核心战术哲学
  coach: string;            // 主教练
  coachNationality: string; // 教练国籍
}

export interface TeamInjury {
  fifaCode: string;
  outPlayers: { name: string; reason: string }[];
  doubtfulPlayers: { name: string; reason: string }[];
}

export interface WeatherInfo {
  matchId: string;
  temperature: number;      // °C
  condition: string;        // e.g. '晴', '多云', '小雨'
  humidity: number;         // %
  windSpeed: number;        // m/s
  icon: string;             // emoji
}

export interface RecentMatch {
  opponent: string;
  opponentCode: string;
  result: 'W' | 'D' | 'L';
  homeScore: number;
  awayScore: number;
  date: string;
  venue: string;
  competition: string;
}

export interface H2HRecord {
  team1: string;
  team2: string;
  totalMatches: number;
  team1Wins: number;
  team2Wins: number;
  draws: number;
  lastMeetings: RecentMatch[];
}
