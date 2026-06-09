import type { MatchData } from '../types';

// ===== 2026世界杯真实分组（附加赛已全部结束） =====
// 欧洲附加赛: 波黑(A) · 瑞典(B) · 土耳其(C) · 捷克(D)
// 洲际附加赛: 民主刚果(1) · 伊拉克(2)

export const WORLD_CUP_GROUPS: { group: string; teams: string[] }[] = [
  { group: 'A', teams: ['MEX', 'KOR', 'RSA', 'CZE'] },     // 墨西哥·韩国·南非·捷克
  { group: 'B', teams: ['CAN', 'BIH', 'QAT', 'SUI'] },     // 加拿大·波黑·卡塔尔·瑞士
  { group: 'C', teams: ['BRA', 'MAR', 'SCO', 'HAI'] },     // 巴西·摩洛哥·苏格兰·海地
  { group: 'D', teams: ['USA', 'PAR', 'AUS', 'TUR'] },     // 美国·巴拉圭·澳大利亚·土耳其
  { group: 'E', teams: ['GER', 'ECU', 'CIV', 'CUW'] },     // 德国·厄瓜多尔·科特迪瓦·库拉索
  { group: 'F', teams: ['NED', 'JPN', 'TUN', 'SWE'] },     // 荷兰·日本·突尼斯·瑞典
  { group: 'G', teams: ['BEL', 'IRN', 'EGY', 'NZL'] },     // 比利时·伊朗·埃及·新西兰
  { group: 'H', teams: ['ESP', 'URU', 'KSA', 'CPV'] },     // 西班牙·乌拉圭·沙特·佛得角
  { group: 'I', teams: ['FRA', 'SEN', 'NOR', 'IRQ'] },     // 法国·塞内加尔·挪威·伊拉克
  { group: 'J', teams: ['ARG', 'AUT', 'ALG', 'JOR'] },     // 阿根廷·奥地利·阿尔及利亚·约旦
  { group: 'K', teams: ['POR', 'COL', 'UZB', 'COD'] },     // 葡萄牙·哥伦比亚·乌兹别克·民主刚果
  { group: 'L', teams: ['ENG', 'CRO', 'PAN', 'GHA'] },     // 英格兰·克罗地亚·巴拿马·加纳
];

// ===== 72场比赛完整赛程（北京时间UTC+8） =====
export const GROUP_FIXTURES: MatchData[] = [
  // ========== 第1轮 ==========
  // 6月12日 周五（北京时间）
  { id:'M1',  round:'group', group:'A', homeTeam:'MEX', awayTeam:'RSA', date:'2026-06-12', time:'03:00', venue:'墨西哥城·阿兹特克体育场' },
  { id:'M2',  round:'group', group:'A', homeTeam:'KOR', awayTeam:'CZE', date:'2026-06-12', time:'10:00', venue:'瓜达拉哈拉·阿克伦球场' },
  // 6月13日 周六
  { id:'M3',  round:'group', group:'B', homeTeam:'CAN', awayTeam:'BIH', date:'2026-06-13', time:'03:00', venue:'多伦多·BMO球场' },
  { id:'M4',  round:'group', group:'D', homeTeam:'USA', awayTeam:'PAR', date:'2026-06-13', time:'09:00', venue:'洛杉矶·SoFi体育场' },
  // 6月14日 周日
  { id:'M5',  round:'group', group:'D', homeTeam:'AUS', awayTeam:'TUR', date:'2026-06-14', time:'12:00', venue:'温哥华·BC体育场' },
  { id:'M6',  round:'group', group:'B', homeTeam:'QAT', awayTeam:'SUI', date:'2026-06-14', time:'03:00', venue:'旧金山湾区·李维斯体育场' },
  { id:'M7',  round:'group', group:'C', homeTeam:'BRA', awayTeam:'MAR', date:'2026-06-14', time:'06:00', venue:'纽约新泽西·大都会人寿体育场' },
  { id:'M8',  round:'group', group:'C', homeTeam:'HAI', awayTeam:'SCO', date:'2026-06-14', time:'09:00', venue:'波士顿·吉列体育场' },
  // 6月15日 周一
  { id:'M9',  round:'group', group:'E', homeTeam:'GER', awayTeam:'CUW', date:'2026-06-15', time:'01:00', venue:'休斯敦·NRG体育场' },
  { id:'M10', round:'group', group:'F', homeTeam:'NED', awayTeam:'JPN', date:'2026-06-15', time:'04:00', venue:'达拉斯·AT&T体育场' },
  { id:'M11', round:'group', group:'E', homeTeam:'CIV', awayTeam:'ECU', date:'2026-06-15', time:'07:00', venue:'费城·林肯金融球场' },
  { id:'M12', round:'group', group:'F', homeTeam:'SWE', awayTeam:'TUN', date:'2026-06-15', time:'10:00', venue:'蒙特雷·BBVA体育场' },
  // 6月16日 周二
  { id:'M13', round:'group', group:'H', homeTeam:'ESP', awayTeam:'CPV', date:'2026-06-16', time:'00:00', venue:'亚特兰大·梅赛德斯-奔驰体育场' },
  { id:'M14', round:'group', group:'G', homeTeam:'BEL', awayTeam:'EGY', date:'2026-06-16', time:'03:00', venue:'西雅图·流明球场' },
  { id:'M15', round:'group', group:'H', homeTeam:'KSA', awayTeam:'URU', date:'2026-06-16', time:'06:00', venue:'迈阿密·硬石体育场' },
  { id:'M16', round:'group', group:'G', homeTeam:'IRN', awayTeam:'NZL', date:'2026-06-16', time:'09:00', venue:'洛杉矶·SoFi体育场' },
  // 6月17日 周三
  { id:'M17', round:'group', group:'I', homeTeam:'FRA', awayTeam:'SEN', date:'2026-06-17', time:'03:00', venue:'纽约新泽西·大都会人寿体育场' },
  { id:'M18', round:'group', group:'I', homeTeam:'IRQ', awayTeam:'NOR', date:'2026-06-17', time:'06:00', venue:'波士顿·吉列体育场' },
  { id:'M19', round:'group', group:'J', homeTeam:'ARG', awayTeam:'ALG', date:'2026-06-17', time:'09:00', venue:'堪萨斯城·箭头体育场' },
  { id:'M20', round:'group', group:'J', homeTeam:'AUT', awayTeam:'JOR', date:'2026-06-17', time:'12:00', venue:'旧金山湾区·李维斯体育场' },
  // 6月18日 周四
  { id:'M21', round:'group', group:'K', homeTeam:'POR', awayTeam:'COD', date:'2026-06-18', time:'01:00', venue:'休斯敦·NRG体育场' },
  { id:'M22', round:'group', group:'L', homeTeam:'ENG', awayTeam:'CRO', date:'2026-06-18', time:'04:00', venue:'达拉斯·AT&T体育场' },
  { id:'M23', round:'group', group:'L', homeTeam:'GHA', awayTeam:'PAN', date:'2026-06-18', time:'07:00', venue:'多伦多·BMO球场' },
  { id:'M24', round:'group', group:'K', homeTeam:'UZB', awayTeam:'COL', date:'2026-06-18', time:'10:00', venue:'墨西哥城·阿兹特克体育场' },

  // ========== 第2轮 ==========
  // 6月19日 周五
  { id:'M25', round:'group', group:'A', homeTeam:'CZE', awayTeam:'RSA', date:'2026-06-19', time:'00:00', venue:'亚特兰大·梅赛德斯-奔驰体育场' },
  { id:'M26', round:'group', group:'B', homeTeam:'SUI', awayTeam:'BIH', date:'2026-06-19', time:'03:00', venue:'洛杉矶·SoFi体育场' },
  { id:'M27', round:'group', group:'B', homeTeam:'CAN', awayTeam:'QAT', date:'2026-06-19', time:'06:00', venue:'温哥华·BC体育场' },
  { id:'M28', round:'group', group:'A', homeTeam:'MEX', awayTeam:'KOR', date:'2026-06-19', time:'09:00', venue:'瓜达拉哈拉·阿克伦球场' },
  // 6月20日 周六
  { id:'M29', round:'group', group:'D', homeTeam:'TUR', awayTeam:'PAR', date:'2026-06-20', time:'12:00', venue:'旧金山湾区·李维斯体育场' },
  { id:'M30', round:'group', group:'D', homeTeam:'USA', awayTeam:'AUS', date:'2026-06-20', time:'03:00', venue:'西雅图·流明球场' },
  { id:'M31', round:'group', group:'C', homeTeam:'SCO', awayTeam:'MAR', date:'2026-06-20', time:'06:00', venue:'波士顿·吉列体育场' },
  { id:'M32', round:'group', group:'C', homeTeam:'BRA', awayTeam:'HAI', date:'2026-06-20', time:'09:00', venue:'费城·林肯金融球场' },
  // 6月21日 周日
  { id:'M33', round:'group', group:'F', homeTeam:'NED', awayTeam:'SWE', date:'2026-06-21', time:'01:00', venue:'休斯敦·NRG体育场' },
  { id:'M34', round:'group', group:'E', homeTeam:'GER', awayTeam:'CIV', date:'2026-06-21', time:'04:00', venue:'多伦多·BMO球场' },
  { id:'M35', round:'group', group:'E', homeTeam:'ECU', awayTeam:'CUW', date:'2026-06-21', time:'08:00', venue:'堪萨斯城·箭头体育场' },
  { id:'M36', round:'group', group:'F', homeTeam:'TUN', awayTeam:'JPN', date:'2026-06-21', time:'12:00', venue:'蒙特雷·BBVA体育场' },
  // 6月22日 周一
  { id:'M37', round:'group', group:'H', homeTeam:'ESP', awayTeam:'KSA', date:'2026-06-22', time:'00:00', venue:'亚特兰大·梅赛德斯-奔驰体育场' },
  { id:'M38', round:'group', group:'G', homeTeam:'BEL', awayTeam:'IRN', date:'2026-06-22', time:'03:00', venue:'洛杉矶·SoFi体育场' },
  { id:'M39', round:'group', group:'H', homeTeam:'URU', awayTeam:'CPV', date:'2026-06-22', time:'06:00', venue:'迈阿密·硬石体育场' },
  { id:'M40', round:'group', group:'G', homeTeam:'NZL', awayTeam:'EGY', date:'2026-06-22', time:'09:00', venue:'温哥华·BC体育场' },
  // 6月23日 周二
  { id:'M41', round:'group', group:'I', homeTeam:'FRA', awayTeam:'IRQ', date:'2026-06-23', time:'05:00', venue:'费城·林肯金融球场' },
  { id:'M42', round:'group', group:'J', homeTeam:'ARG', awayTeam:'AUT', date:'2026-06-23', time:'01:00', venue:'达拉斯·AT&T体育场' },
  { id:'M43', round:'group', group:'J', homeTeam:'ALG', awayTeam:'JOR', date:'2026-06-23', time:'11:00', venue:'旧金山湾区·李维斯体育场' },
  { id:'M44', round:'group', group:'I', homeTeam:'NOR', awayTeam:'SEN', date:'2026-06-23', time:'08:00', venue:'纽约新泽西·大都会人寿体育场' },
  // 6月24日 周三
  { id:'M45', round:'group', group:'L', homeTeam:'ENG', awayTeam:'GHA', date:'2026-06-24', time:'04:00', venue:'波士顿·吉列体育场' },
  { id:'M46', round:'group', group:'K', homeTeam:'POR', awayTeam:'UZB', date:'2026-06-24', time:'01:00', venue:'休斯敦·NRG体育场' },
  { id:'M47', round:'group', group:'L', homeTeam:'PAN', awayTeam:'CRO', date:'2026-06-24', time:'07:00', venue:'多伦多·BMO球场' },
  { id:'M48', round:'group', group:'K', homeTeam:'COD', awayTeam:'COL', date:'2026-06-24', time:'10:00', venue:'洛杉矶·SoFi体育场' },

  // ========== 第3轮 ==========
  // 6月25日 周四
  { id:'M49', round:'group', group:'A', homeTeam:'RSA', awayTeam:'KOR', date:'2026-06-25', time:'09:00', venue:'蒙特雷·BBVA体育场' },
  { id:'M50', round:'group', group:'A', homeTeam:'CZE', awayTeam:'MEX', date:'2026-06-25', time:'09:00', venue:'墨西哥城·阿兹特克体育场' },
  { id:'M51', round:'group', group:'B', homeTeam:'SUI', awayTeam:'CAN', date:'2026-06-25', time:'03:00', venue:'温哥华·BC体育场' },
  { id:'M52', round:'group', group:'B', homeTeam:'BIH', awayTeam:'QAT', date:'2026-06-25', time:'03:00', venue:'西雅图·流明球场' },
  { id:'M53', round:'group', group:'C', homeTeam:'SCO', awayTeam:'BRA', date:'2026-06-26', time:'06:00', venue:'迈阿密·硬石体育场' },
  { id:'M54', round:'group', group:'C', homeTeam:'MAR', awayTeam:'HAI', date:'2026-06-26', time:'06:00', venue:'亚特兰大·梅赛德斯-奔驰体育场' },
  { id:'M55', round:'group', group:'D', homeTeam:'TUR', awayTeam:'USA', date:'2026-06-26', time:'10:00', venue:'洛杉矶·SoFi体育场' },
  { id:'M56', round:'group', group:'D', homeTeam:'PAR', awayTeam:'AUS', date:'2026-06-26', time:'10:00', venue:'旧金山湾区·李维斯体育场' },
  // 6月26日 周五
  { id:'M57', round:'group', group:'E', homeTeam:'ECU', awayTeam:'GER', date:'2026-06-27', time:'04:00', venue:'纽约新泽西·大都会人寿体育场' },
  { id:'M58', round:'group', group:'E', homeTeam:'CUW', awayTeam:'CIV', date:'2026-06-27', time:'04:00', venue:'费城·林肯金融球场' },
  { id:'M59', round:'group', group:'F', homeTeam:'JPN', awayTeam:'SWE', date:'2026-06-27', time:'07:00', venue:'达拉斯·AT&T体育场' },
  { id:'M60', round:'group', group:'F', homeTeam:'TUN', awayTeam:'NED', date:'2026-06-27', time:'07:00', venue:'堪萨斯城·箭头体育场' },
  { id:'M61', round:'group', group:'G', homeTeam:'EGY', awayTeam:'IRN', date:'2026-06-27', time:'11:00', venue:'西雅图·流明球场' },
  { id:'M62', round:'group', group:'G', homeTeam:'NZL', awayTeam:'BEL', date:'2026-06-27', time:'11:00', venue:'温哥华·BC体育场' },
  { id:'M63', round:'group', group:'H', homeTeam:'CPV', awayTeam:'KSA', date:'2026-06-28', time:'08:00', venue:'休斯敦·NRG体育场' },
  { id:'M64', round:'group', group:'H', homeTeam:'URU', awayTeam:'ESP', date:'2026-06-28', time:'08:00', venue:'瓜达拉哈拉·阿克伦球场' },
  // 6月27日 周六
  { id:'M65', round:'group', group:'I', homeTeam:'SEN', awayTeam:'IRQ', date:'2026-06-28', time:'03:00', venue:'堪萨斯城·箭头体育场' },
  { id:'M66', round:'group', group:'I', homeTeam:'NOR', awayTeam:'FRA', date:'2026-06-28', time:'03:00', venue:'纽约新泽西·大都会人寿体育场' },
  { id:'M67', round:'group', group:'J', homeTeam:'ALG', awayTeam:'AUT', date:'2026-06-28', time:'10:00', venue:'多伦多·BMO球场' },
  { id:'M68', round:'group', group:'J', homeTeam:'JOR', awayTeam:'ARG', date:'2026-06-28', time:'10:00', venue:'迈阿密·硬石体育场' },
  { id:'M69', round:'group', group:'K', homeTeam:'COD', awayTeam:'UZB', date:'2026-06-28', time:'07:30', venue:'达拉斯·AT&T体育场' },
  { id:'M70', round:'group', group:'K', homeTeam:'COL', awayTeam:'POR', date:'2026-06-28', time:'07:30', venue:'旧金山湾区·李维斯体育场' },
  { id:'M71', round:'group', group:'L', homeTeam:'CRO', awayTeam:'GHA', date:'2026-06-28', time:'07:00', venue:'西雅图·流明球场' },
  { id:'M72', round:'group', group:'L', homeTeam:'PAN', awayTeam:'ENG', date:'2026-06-28', time:'03:00', venue:'亚特兰大·梅赛德斯-奔驰体育场' },
];

// ===== 淘汰赛模板（32强→16强→8强→4强→决赛） =====
export const KNOCKOUT_TEMPLATE: { round: MatchData['round']; label: string; count: number; dateRange: string }[] = [
  { round: 'round32', label: '1/16决赛', count: 16, dateRange: '6月29日-7月4日' },
  { round: 'round16', label: '1/8决赛',  count: 8,  dateRange: '7月5日-8日' },
  { round: 'quarter', label: '1/4决赛',  count: 4,  dateRange: '7月10日-12日' },
  { round: 'semi',    label: '半决赛',   count: 2,  dateRange: '7月15日-16日' },
  { round: 'third',   label: '三四名决赛', count: 1, dateRange: '7月19日' },
  { round: 'final',   label: '决赛',     count: 1,  dateRange: '7月20日03:00 新泽西' },
];
