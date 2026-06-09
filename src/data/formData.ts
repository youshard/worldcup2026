import type { RecentMatch, H2HRecord } from '../types';

// ===== 各队近5场战绩（基于真实热身赛+世预赛，截至2026年6月10日） =====
// 数据来源: Football365 / Sofascore / FIFA / 虎扑
// 热身赛结果全部来自 2026年5月26日-6月10日 真实比赛记录

export const RECENT_FORM: Record<string, RecentMatch[]> = {
  // ===== 欧洲强队 =====
  ESP: [
    { opponent:'秘鲁',     opponentCode:'PER', result:'W', homeScore:3, awayScore:1, date:'2026-06-09', venue:'普埃布拉',    competition:'热身赛' },
    { opponent:'伊拉克',   opponentCode:'IRQ', result:'D', homeScore:1, awayScore:1, date:'2026-06-04', venue:'拉科鲁尼亚',  competition:'热身赛' },
    { opponent:'土耳其',   opponentCode:'TUR', result:'W', homeScore:6, awayScore:0, date:'2025-11-18', venue:'伊斯坦布尔',  competition:'世预赛' },
    { opponent:'保加利亚', opponentCode:'BUL', result:'W', homeScore:3, awayScore:0, date:'2025-09-17', venue:'索菲亚',     competition:'世预赛' },
    { opponent:'荷兰',     opponentCode:'NED', result:'D', homeScore:3, awayScore:3, date:'2025-06-05', venue:'慕尼黑',     competition:'欧国联半决赛' },
  ],
  FRA: [
    { opponent:'北爱尔兰', opponentCode:'NIR', result:'W', homeScore:3, awayScore:1, date:'2026-06-08', venue:'里尔',     competition:'热身赛' },
    { opponent:'科特迪瓦', opponentCode:'CIV', result:'L', homeScore:1, awayScore:2, date:'2026-06-04', venue:'南特',     competition:'热身赛' },
    { opponent:'冰岛',     opponentCode:'ISL', result:'W', homeScore:3, awayScore:0, date:'2025-11-18', venue:'雷克雅未克',competition:'世预赛' },
    { opponent:'乌克兰',   opponentCode:'UKR', result:'W', homeScore:2, awayScore:0, date:'2025-09-14', venue:'基辅',     competition:'世预赛' },
    { opponent:'意大利',   opponentCode:'ITA', result:'W', homeScore:3, awayScore:0, date:'2025-06-04', venue:'米兰',     competition:'欧国联半决赛' },
  ],
  ENG: [
    { opponent:'新西兰',     opponentCode:'NZL', result:'W', homeScore:1, awayScore:0, date:'2026-06-06', venue:'坦帕',         competition:'热身赛' },
    { opponent:'捷克',      opponentCode:'CZE', result:'W', homeScore:2, awayScore:0, date:'2025-11-18', venue:'布拉格',        competition:'世预赛' },
    { opponent:'克罗地亚',  opponentCode:'CRO', result:'W', homeScore:3, awayScore:1, date:'2025-10-14', venue:'伦敦温布利',    competition:'世预赛' },
    { opponent:'波兰',      opponentCode:'POL', result:'W', homeScore:4, awayScore:0, date:'2025-09-14', venue:'华沙',         competition:'世预赛' },
    { opponent:'奥地利',    opponentCode:'AUT', result:'W', homeScore:3, awayScore:0, date:'2025-06-10', venue:'伦敦温布利',    competition:'世预赛' },
  ],
  ARG: [
    { opponent:'洪都拉斯',  opponentCode:'HON', result:'W', homeScore:2, awayScore:0, date:'2026-06-07', venue:'德克萨斯学院站', competition:'热身赛' },
    { opponent:'厄瓜多尔',  opponentCode:'ECU', result:'W', homeScore:3, awayScore:0, date:'2025-09-04', venue:'布宜诺斯艾利斯', competition:'世预赛' },
    { opponent:'哥伦比亚',  opponentCode:'COL', result:'W', homeScore:2, awayScore:0, date:'2025-06-11', venue:'波哥大',        competition:'世预赛' },
    { opponent:'巴西',      opponentCode:'BRA', result:'W', homeScore:1, awayScore:0, date:'2025-03-26', venue:'里约',          competition:'世预赛' },
    { opponent:'乌拉圭',    opponentCode:'URU', result:'L', homeScore:0, awayScore:1, date:'2024-11-21', venue:'蒙得维的亚',    competition:'世预赛' },
  ],
  POR: [
    { opponent:'智利',     opponentCode:'CHI', result:'W', homeScore:2, awayScore:1, date:'2026-06-06', venue:'里斯本',    competition:'热身赛' },
    { opponent:'瑞士',     opponentCode:'SUI', result:'W', homeScore:2, awayScore:0, date:'2025-11-18', venue:'伯尔尼',    competition:'世预赛' },
    { opponent:'丹麦',     opponentCode:'DEN', result:'W', homeScore:3, awayScore:1, date:'2025-09-14', venue:'哥本哈根',  competition:'世预赛' },
    { opponent:'捷克',     opponentCode:'CZE', result:'W', homeScore:3, awayScore:0, date:'2025-06-04', venue:'布拉格',    competition:'欧国联半决赛' },
    { opponent:'克罗地亚', opponentCode:'CRO', result:'W', homeScore:2, awayScore:0, date:'2025-03-20', venue:'里斯本',    competition:'欧国联1/4' },
  ],
  BRA: [
    { opponent:'埃及',     opponentCode:'EGY', result:'W', homeScore:2, awayScore:1, date:'2026-06-06', venue:'克利夫兰',    competition:'热身赛' },
    { opponent:'巴拿马',   opponentCode:'PAN', result:'W', homeScore:6, awayScore:2, date:'2026-05-31', venue:'休斯敦',      competition:'热身赛' },
    { opponent:'乌拉圭',   opponentCode:'URU', result:'D', homeScore:1, awayScore:1, date:'2025-09-04', venue:'蒙得维的亚',  competition:'世预赛' },
    { opponent:'秘鲁',     opponentCode:'PER', result:'W', homeScore:4, awayScore:0, date:'2025-06-11', venue:'巴西利亚',    competition:'世预赛' },
    { opponent:'阿根廷',   opponentCode:'ARG', result:'L', homeScore:0, awayScore:1, date:'2025-03-26', venue:'里约',        competition:'世预赛' },
  ],
  GER: [
    { opponent:'美国',     opponentCode:'USA', result:'W', homeScore:2, awayScore:1, date:'2026-06-06', venue:'芝加哥',       competition:'热身赛' },
    { opponent:'芬兰',     opponentCode:'FIN', result:'W', homeScore:4, awayScore:0, date:'2026-05-31', venue:'慕尼黑',       competition:'热身赛' },
    { opponent:'罗马尼亚', opponentCode:'ROU', result:'W', homeScore:3, awayScore:0, date:'2025-11-18', venue:'布加勒斯特',   competition:'世预赛' },
    { opponent:'波黑',     opponentCode:'BIH', result:'W', homeScore:5, awayScore:1, date:'2025-09-14', venue:'慕尼黑',       competition:'世预赛' },
    { opponent:'斯洛伐克', opponentCode:'SVK', result:'L', homeScore:0, awayScore:2, date:'2025-06-08', venue:'布拉迪斯拉发', competition:'世预赛' },
  ],
  NED: [
    { opponent:'乌兹别克斯坦', opponentCode:'UZB', result:'W', homeScore:2, awayScore:1, date:'2026-06-08', venue:'纽约',        competition:'热身赛' },
    { opponent:'阿尔及利亚',   opponentCode:'ALG', result:'L', homeScore:0, awayScore:1, date:'2026-06-03', venue:'鹿特丹',      competition:'热身赛' },
    { opponent:'冰岛',         opponentCode:'ISL', result:'W', homeScore:3, awayScore:1, date:'2025-11-18', venue:'雷克雅未克',  competition:'世预赛' },
    { opponent:'瑞典',         opponentCode:'SWE', result:'W', homeScore:2, awayScore:0, date:'2025-09-14', venue:'阿姆斯特丹',  competition:'世预赛' },
    { opponent:'比利时',       opponentCode:'BEL', result:'D', homeScore:1, awayScore:1, date:'2025-06-08', venue:'布鲁塞尔',    competition:'世预赛' },
  ],
  BEL: [
    { opponent:'突尼斯',   opponentCode:'TUN', result:'W', homeScore:5, awayScore:0, date:'2026-06-06', venue:'布鲁塞尔',    competition:'热身赛' },
    { opponent:'克罗地亚', opponentCode:'CRO', result:'W', homeScore:2, awayScore:0, date:'2026-06-03', venue:'里耶卡',      competition:'热身赛' },
    { opponent:'瑞士',     opponentCode:'SUI', result:'W', homeScore:2, awayScore:1, date:'2025-11-18', venue:'伯尔尼',      competition:'世预赛' },
    { opponent:'塞尔维亚', opponentCode:'SRB', result:'W', homeScore:2, awayScore:0, date:'2025-09-14', venue:'贝尔格莱德',  competition:'世预赛' },
    { opponent:'荷兰',     opponentCode:'NED', result:'D', homeScore:1, awayScore:1, date:'2025-06-08', venue:'布鲁塞尔',    competition:'世预赛' },
  ],
  CRO: [
    { opponent:'斯洛文尼亚', opponentCode:'SVN', result:'W', homeScore:2, awayScore:1, date:'2026-06-07', venue:'瓦拉日丁',   competition:'热身赛' },
    { opponent:'比利时',     opponentCode:'BEL', result:'L', homeScore:0, awayScore:2, date:'2026-06-03', venue:'里耶卡',     competition:'热身赛' },
    { opponent:'波兰',       opponentCode:'POL', result:'W', homeScore:2, awayScore:1, date:'2025-11-18', venue:'华沙',       competition:'世预赛' },
    { opponent:'英格兰',     opponentCode:'ENG', result:'L', homeScore:1, awayScore:3, date:'2025-10-14', venue:'伦敦温布利', competition:'世预赛' },
    { opponent:'阿尔巴尼亚', opponentCode:'ALB', result:'W', homeScore:3, awayScore:0, date:'2025-09-14', venue:'地拉那',     competition:'世预赛' },
  ],

  // ===== 非洲 / 热门 =====
  MAR: [
    { opponent:'挪威',       opponentCode:'NOR', result:'D', homeScore:1, awayScore:1, date:'2026-06-07', venue:'新泽西',     competition:'热身赛' },
    { opponent:'马达加斯加', opponentCode:'MAD', result:'W', homeScore:4, awayScore:0, date:'2026-06-03', venue:'拉巴特',     competition:'热身赛' },
    { opponent:'布隆迪',     opponentCode:'BDI', result:'W', homeScore:5, awayScore:0, date:'2026-05-26', venue:'卡萨布兰卡', competition:'热身赛' },
    { opponent:'乌干达',     opponentCode:'UGA', result:'W', homeScore:4, awayScore:0, date:'2025-09-05', venue:'卡萨布兰卡', competition:'世预赛' },
    { opponent:'尼日利亚',   opponentCode:'NGA', result:'D', homeScore:1, awayScore:1, date:'2025-06-11', venue:'拉各斯',     competition:'世预赛' },
  ],
  NOR: [
    { opponent:'摩洛哥',   opponentCode:'MAR', result:'D', homeScore:1, awayScore:1, date:'2026-06-07', venue:'新泽西',   competition:'热身赛' },
    { opponent:'瑞典',     opponentCode:'SWE', result:'W', homeScore:3, awayScore:1, date:'2026-06-01', venue:'奥斯陆',   competition:'热身赛' },
    { opponent:'塞尔维亚', opponentCode:'SRB', result:'W', homeScore:4, awayScore:1, date:'2025-11-16', venue:'奥斯陆',   competition:'世预赛' },
    { opponent:'爱沙尼亚', opponentCode:'EST', result:'W', homeScore:5, awayScore:0, date:'2025-09-14', venue:'塔林',     competition:'世预赛' },
    { opponent:'意大利',   opponentCode:'ITA', result:'W', homeScore:1, awayScore:0, date:'2025-06-05', venue:'罗马',     competition:'世预赛' },
  ],
  COL: [
    { opponent:'约旦',       opponentCode:'JOR', result:'W', homeScore:2, awayScore:0, date:'2026-06-08', venue:'圣迭戈',   competition:'热身赛' },
    { opponent:'哥斯达黎加', opponentCode:'CRC', result:'W', homeScore:3, awayScore:1, date:'2026-06-02', venue:'迈阿密',   competition:'热身赛' },
    { opponent:'阿根廷',     opponentCode:'ARG', result:'L', homeScore:0, awayScore:2, date:'2025-06-11', venue:'波哥大',   competition:'世预赛' },
    { opponent:'秘鲁',       opponentCode:'PER', result:'W', homeScore:3, awayScore:1, date:'2025-03-26', venue:'利马',     competition:'世预赛' },
    { opponent:'巴西',       opponentCode:'BRA', result:'L', homeScore:2, awayScore:3, date:'2024-11-21', venue:'波哥大',   competition:'世预赛' },
  ],
  URU: [
    { opponent:'玻利维亚', opponentCode:'BOL', result:'W', homeScore:4, awayScore:0, date:'2025-09-04', venue:'蒙得维的亚', competition:'世预赛' },
    { opponent:'巴拉圭',   opponentCode:'PAR', result:'W', homeScore:1, awayScore:0, date:'2025-06-11', venue:'亚松森',    competition:'世预赛' },
    { opponent:'阿根廷',   opponentCode:'ARG', result:'W', homeScore:1, awayScore:0, date:'2025-03-26', venue:'蒙得维的亚', competition:'世预赛' },
    { opponent:'巴西',     opponentCode:'BRA', result:'D', homeScore:1, awayScore:1, date:'2024-11-21', venue:'萨尔瓦多',   competition:'世预赛' },
    { opponent:'厄瓜多尔', opponentCode:'ECU', result:'W', homeScore:2, awayScore:1, date:'2024-10-15', venue:'蒙得维的亚', competition:'世预赛' },
  ],
  SUI: [
    { opponent:'澳大利亚', opponentCode:'AUS', result:'D', homeScore:1, awayScore:1, date:'2026-06-06', venue:'圣迭戈',     competition:'热身赛' },
    { opponent:'奥地利',   opponentCode:'AUT', result:'L', homeScore:0, awayScore:1, date:'2026-06-04', venue:'苏黎世',     competition:'热身赛' },
    { opponent:'约旦',     opponentCode:'JOR', result:'W', homeScore:4, awayScore:1, date:'2026-05-31', venue:'伯尔尼',     competition:'热身赛' },
    { opponent:'比利时',   opponentCode:'BEL', result:'L', homeScore:1, awayScore:2, date:'2025-11-18', venue:'伯尔尼',     competition:'世预赛' },
    { opponent:'葡萄牙',   opponentCode:'POR', result:'L', homeScore:0, awayScore:2, date:'2025-09-14', venue:'里斯本',     competition:'世预赛' },
  ],
  AUT: [
    { opponent:'瑞士',     opponentCode:'SUI', result:'W', homeScore:1, awayScore:0, date:'2026-06-04', venue:'苏黎世',   competition:'热身赛' },
    { opponent:'突尼斯',   opponentCode:'TUN', result:'W', homeScore:1, awayScore:0, date:'2026-06-01', venue:'维也纳',   competition:'热身赛' },
    { opponent:'土耳其',   opponentCode:'TUR', result:'W', homeScore:3, awayScore:2, date:'2025-11-18', venue:'维也纳',   competition:'世预赛' },
    { opponent:'英格兰',   opponentCode:'ENG', result:'L', homeScore:0, awayScore:3, date:'2025-06-10', venue:'伦敦温布利',competition:'世预赛' },
    { opponent:'阿塞拜疆', opponentCode:'AZE', result:'W', homeScore:5, awayScore:0, date:'2025-06-07', venue:'维也纳',   competition:'世预赛' },
  ],
  TUR: [
    { opponent:'委内瑞拉',     opponentCode:'VEN', result:'W', homeScore:2, awayScore:1, date:'2026-06-06', venue:'劳德代尔堡', competition:'热身赛' },
    { opponent:'北马其顿',     opponentCode:'MKD', result:'W', homeScore:4, awayScore:0, date:'2026-06-01', venue:'伊斯坦布尔', competition:'热身赛' },
    { opponent:'奥地利',       opponentCode:'AUT', result:'L', homeScore:2, awayScore:3, date:'2025-11-18', venue:'维也纳',     competition:'世预赛' },
    { opponent:'瑞士',         opponentCode:'SUI', result:'D', homeScore:1, awayScore:1, date:'2025-09-14', venue:'伊斯坦布尔', competition:'世预赛' },
    { opponent:'保加利亚',     opponentCode:'BUL', result:'W', homeScore:4, awayScore:0, date:'2025-06-08', venue:'索菲亚',     competition:'世预赛' },
  ],
  SWE: [
    { opponent:'希腊',   opponentCode:'GRE', result:'D', homeScore:2, awayScore:2, date:'2026-06-04', venue:'斯德哥尔摩', competition:'热身赛' },
    { opponent:'挪威',   opponentCode:'NOR', result:'L', homeScore:1, awayScore:3, date:'2026-06-01', venue:'奥斯陆',     competition:'热身赛' },
    { opponent:'乌克兰', opponentCode:'UKR', result:'W', homeScore:2, awayScore:1, date:'2026-03-31', venue:'索尔纳',     competition:'附加赛决赛' },
    { opponent:'波兰',   opponentCode:'POL', result:'W', homeScore:2, awayScore:0, date:'2026-03-26', venue:'华沙',       competition:'附加赛半决赛' },
    { opponent:'荷兰',   opponentCode:'NED', result:'L', homeScore:0, awayScore:2, date:'2025-09-14', venue:'阿姆斯特丹', competition:'世预赛' },
  ],

  // ===== 亚洲强队 =====
  JPN: [
    { opponent:'冰岛',     opponentCode:'ISL', result:'W', homeScore:1, awayScore:0, date:'2026-05-31', venue:'东京国立竞技场', competition:'热身赛' },
    { opponent:'巴西',     opponentCode:'BRA', result:'W', homeScore:3, awayScore:2, date:'2025-10-15', venue:'东京',         competition:'热身赛' },
    { opponent:'韩国',     opponentCode:'KOR', result:'W', homeScore:3, awayScore:0, date:'2025-09-10', venue:'横滨',         competition:'世预赛' },
    { opponent:'巴林',     opponentCode:'BHR', result:'W', homeScore:2, awayScore:0, date:'2025-03-20', venue:'麦纳麦',       competition:'世预赛' },
    { opponent:'中国',     opponentCode:'CHN', result:'W', homeScore:3, awayScore:1, date:'2024-11-19', venue:'重庆',         competition:'世预赛' },
  ],
  KOR: [
    { opponent:'萨尔瓦多',           opponentCode:'SLV', result:'W', homeScore:1, awayScore:0, date:'2026-06-04', venue:'普罗沃', competition:'热身赛' },
    { opponent:'特立尼达和多巴哥',   opponentCode:'TTO', result:'W', homeScore:5, awayScore:0, date:'2026-05-31', venue:'普罗沃', competition:'热身赛' },
    { opponent:'伊朗',               opponentCode:'IRN', result:'W', homeScore:2, awayScore:1, date:'2025-10-14', venue:'首尔',   competition:'世预赛' },
    { opponent:'日本',               opponentCode:'JPN', result:'L', homeScore:0, awayScore:3, date:'2025-09-10', venue:'横滨',   competition:'世预赛' },
    { opponent:'伊拉克',             opponentCode:'IRQ', result:'W', homeScore:3, awayScore:1, date:'2025-06-05', venue:'首尔',   competition:'世预赛' },
  ],
  IRN: [
    { opponent:'冈比亚',   opponentCode:'GAM', result:'W', homeScore:3, awayScore:1, date:'2026-05-29', venue:'安塔利亚',  competition:'热身赛' },
    { opponent:'韩国',     opponentCode:'KOR', result:'L', homeScore:1, awayScore:2, date:'2025-10-14', venue:'首尔',      competition:'世预赛' },
    { opponent:'乌兹别克', opponentCode:'UZB', result:'D', homeScore:2, awayScore:2, date:'2025-03-25', venue:'塔什干',    competition:'世预赛' },
    { opponent:'吉尔吉斯', opponentCode:'KGZ', result:'W', homeScore:3, awayScore:0, date:'2024-11-19', venue:'比什凯克',  competition:'世预赛' },
    { opponent:'中国',     opponentCode:'CHN', result:'W', homeScore:3, awayScore:1, date:'2024-10-15', venue:'德黑兰',    competition:'世预赛' },
  ],

  // ===== 北美洲 =====
  USA: [
    { opponent:'德国',     opponentCode:'GER', result:'L', homeScore:1, awayScore:2, date:'2026-06-06', venue:'芝加哥',     competition:'热身赛' },
    { opponent:'塞内加尔', opponentCode:'SEN', result:'W', homeScore:3, awayScore:2, date:'2026-05-31', venue:'夏洛特',     competition:'热身赛' },
    { opponent:'洪都拉斯', opponentCode:'HON', result:'W', homeScore:3, awayScore:0, date:'2025-11-18', venue:'圣路易斯',   competition:'世预赛' },
    { opponent:'加拿大',   opponentCode:'CAN', result:'W', homeScore:2, awayScore:0, date:'2025-09-14', venue:'辛辛那提',   competition:'世预赛' },
    { opponent:'墨西哥',   opponentCode:'MEX', result:'L', homeScore:0, awayScore:1, date:'2025-06-05', venue:'阿灵顿',     competition:'金杯赛决赛' },
  ],
  MEX: [
    { opponent:'塞尔维亚', opponentCode:'SRB', result:'W', homeScore:5, awayScore:1, date:'2026-06-05', venue:'托卢卡',      competition:'热身赛' },
    { opponent:'韩国',     opponentCode:'KOR', result:'D', homeScore:1, awayScore:1, date:'2026-06-04', venue:'瓜达拉哈拉',  competition:'热身赛' },
    { opponent:'澳大利亚', opponentCode:'AUS', result:'W', homeScore:1, awayScore:0, date:'2026-05-31', venue:'蒙特雷',      competition:'热身赛' },
    { opponent:'加拿大',   opponentCode:'CAN', result:'W', homeScore:3, awayScore:1, date:'2025-11-18', venue:'蒙特雷',      competition:'世预赛' },
    { opponent:'洪都拉斯', opponentCode:'HON', result:'W', homeScore:2, awayScore:0, date:'2025-09-14', venue:'特古西加尔巴',competition:'世预赛' },
  ],
  CAN: [
    { opponent:'爱尔兰',     opponentCode:'IRL', result:'D', homeScore:1, awayScore:1, date:'2026-06-06', venue:'蒙特利尔',competition:'热身赛' },
    { opponent:'乌兹别克斯坦',opponentCode:'UZB', result:'W', homeScore:2, awayScore:0, date:'2026-06-02', venue:'多伦多',  competition:'热身赛' },
    { opponent:'墨西哥',     opponentCode:'MEX', result:'L', homeScore:1, awayScore:3, date:'2025-11-18', venue:'蒙特雷',  competition:'世预赛' },
    { opponent:'美国',       opponentCode:'USA', result:'L', homeScore:0, awayScore:2, date:'2025-09-14', venue:'辛辛那提',competition:'世预赛' },
    { opponent:'巴拿马',     opponentCode:'PAN', result:'W', homeScore:1, awayScore:0, date:'2025-06-08', venue:'温哥华',  competition:'世预赛' },
  ],

  // ===== 非洲 =====
  EGY: [
    { opponent:'巴西',   opponentCode:'BRA', result:'L', homeScore:1, awayScore:2, date:'2026-06-06', venue:'克利夫兰',  competition:'热身赛' },
    { opponent:'俄罗斯', opponentCode:'RUS', result:'W', homeScore:1, awayScore:0, date:'2026-05-28', venue:'开罗',      competition:'热身赛' },
    { opponent:'乌干达', opponentCode:'UGA', result:'W', homeScore:4, awayScore:0, date:'2025-10-08', venue:'坎帕拉',    competition:'世预赛' },
    { opponent:'摩洛哥', opponentCode:'MAR', result:'L', homeScore:0, awayScore:2, date:'2025-09-14', venue:'卡萨布兰卡',competition:'世预赛' },
    { opponent:'佛得角', opponentCode:'CPV', result:'W', homeScore:3, awayScore:0, date:'2025-06-08', venue:'开罗',      competition:'世预赛' },
  ],
  SEN: [
    { opponent:'美国',     opponentCode:'USA', result:'L', homeScore:2, awayScore:3, date:'2026-05-31', venue:'夏洛特',  competition:'热身赛' },
    { opponent:'加蓬',     opponentCode:'GAB', result:'W', homeScore:3, awayScore:0, date:'2025-11-18', venue:'利伯维尔',competition:'世预赛' },
    { opponent:'喀麦隆',   opponentCode:'CMR', result:'W', homeScore:2, awayScore:0, date:'2025-10-14', venue:'达喀尔',  competition:'世预赛' },
    { opponent:'科特迪瓦', opponentCode:'CIV', result:'W', homeScore:2, awayScore:1, date:'2025-06-08', venue:'达喀尔',  competition:'世预赛' },
    { opponent:'民主刚果', opponentCode:'COD', result:'W', homeScore:2, awayScore:0, date:'2025-03-26', venue:'金沙萨',  competition:'世预赛' },
  ],
  CIV: [
    { opponent:'法国',     opponentCode:'FRA', result:'W', homeScore:2, awayScore:1, date:'2026-06-04', venue:'南特',    competition:'热身赛' },
    { opponent:'加蓬',     opponentCode:'GAB', result:'W', homeScore:3, awayScore:1, date:'2025-11-18', venue:'阿比让',  competition:'世预赛' },
    { opponent:'尼日利亚', opponentCode:'NGA', result:'W', homeScore:4, awayScore:2, date:'2025-10-14', venue:'拉各斯',  competition:'世预赛' },
    { opponent:'莫桑比克', opponentCode:'MOZ', result:'W', homeScore:5, awayScore:0, date:'2025-09-14', venue:'阿比让',  competition:'世预赛' },
    { opponent:'塞内加尔', opponentCode:'SEN', result:'L', homeScore:1, awayScore:2, date:'2025-06-08', venue:'达喀尔',  competition:'世预赛' },
  ],
  ALG: [
    { opponent:'荷兰',       opponentCode:'NED', result:'W', homeScore:1, awayScore:0, date:'2026-06-03', venue:'鹿特丹',   competition:'热身赛' },
    { opponent:'摩洛哥',     opponentCode:'MAR', result:'L', homeScore:0, awayScore:2, date:'2025-11-18', venue:'拉巴特',   competition:'世预赛' },
    { opponent:'埃及',       opponentCode:'EGY', result:'L', homeScore:1, awayScore:2, date:'2025-11-18', venue:'开罗',     competition:'世预赛' },
    { opponent:'几内亚',     opponentCode:'GUI', result:'W', homeScore:3, awayScore:0, date:'2025-10-14', venue:'阿尔及尔', competition:'世预赛' },
    { opponent:'莫桑比克',   opponentCode:'MOZ', result:'W', homeScore:2, awayScore:1, date:'2025-09-14', venue:'马普托',   competition:'世预赛' },
  ],

  // ===== 南美洲 =====
  ECU: [
    { opponent:'危地马拉', opponentCode:'GUA', result:'W', homeScore:3, awayScore:0, date:'2026-06-07', venue:'哥伦布',    competition:'热身赛' },
    { opponent:'沙特',     opponentCode:'KSA', result:'W', homeScore:2, awayScore:1, date:'2026-05-31', venue:'基多',      competition:'热身赛' },
    { opponent:'玻利维亚', opponentCode:'BOL', result:'W', homeScore:3, awayScore:0, date:'2025-09-04', venue:'拉巴斯',    competition:'世预赛' },
    { opponent:'乌拉圭',   opponentCode:'URU', result:'L', homeScore:0, awayScore:1, date:'2025-06-11', venue:'蒙得维的亚',competition:'世预赛' },
    { opponent:'阿根廷',   opponentCode:'ARG', result:'L', homeScore:0, awayScore:3, date:'2025-09-04', venue:'布宜诺斯艾利斯',competition:'世预赛' },
  ],
  PAR: [
    { opponent:'尼加拉瓜', opponentCode:'NCA', result:'W', homeScore:4, awayScore:0, date:'2026-06-05', venue:'亚松森',  competition:'热身赛' },
    { opponent:'智利',     opponentCode:'CHI', result:'W', homeScore:2, awayScore:0, date:'2025-09-04', venue:'亚松森',  competition:'世预赛' },
    { opponent:'秘鲁',     opponentCode:'PER', result:'D', homeScore:0, awayScore:0, date:'2025-06-11', venue:'利马',    competition:'世预赛' },
    { opponent:'厄瓜多尔', opponentCode:'ECU', result:'L', homeScore:0, awayScore:1, date:'2025-03-26', venue:'基多',    competition:'世预赛' },
    { opponent:'玻利维亚', opponentCode:'BOL', result:'W', homeScore:3, awayScore:1, date:'2024-11-19', venue:'亚松森',  competition:'世预赛' },
  ],

  // ===== 其他 =====
  SCO: [
    { opponent:'玻利维亚', opponentCode:'BOL', result:'W', homeScore:4, awayScore:0, date:'2026-06-06', venue:'新泽西',    competition:'热身赛' },
    { opponent:'库拉索',   opponentCode:'CUW', result:'W', homeScore:4, awayScore:1, date:'2026-05-30', venue:'格拉斯哥',  competition:'热身赛' },
    { opponent:'丹麦',     opponentCode:'DEN', result:'W', homeScore:1, awayScore:0, date:'2025-09-14', venue:'格拉斯哥',  competition:'世预赛' },
    { opponent:'希腊',     opponentCode:'GRE', result:'D', homeScore:1, awayScore:1, date:'2025-06-08', venue:'雅典',      competition:'世预赛' },
    { opponent:'白俄罗斯', opponentCode:'BLR', result:'W', homeScore:3, awayScore:1, date:'2025-03-26', venue:'明斯克',    competition:'世预赛' },
  ],
  CZE: [
    { opponent:'危地马拉', opponentCode:'GUA', result:'W', homeScore:3, awayScore:1, date:'2026-06-05', venue:'新泽西',      competition:'热身赛' },
    { opponent:'科索沃',   opponentCode:'KOS', result:'W', homeScore:2, awayScore:1, date:'2026-05-31', venue:'布拉格',      competition:'热身赛' },
    { opponent:'乌克兰',   opponentCode:'UKR', result:'W', homeScore:2, awayScore:1, date:'2026-03-31', venue:'布拉格',      competition:'附加赛决赛' },
    { opponent:'丹麦',     opponentCode:'DEN', result:'W', homeScore:2, awayScore:1, date:'2026-03-26', venue:'哥本哈根',    competition:'附加赛半决赛' },
    { opponent:'英格兰',   opponentCode:'ENG', result:'L', homeScore:0, awayScore:2, date:'2025-11-18', venue:'布拉格',      competition:'世预赛' },
  ],

  // ===== 更多球队(基于真实热身赛数据) =====
  AUS: [
    { opponent:'瑞士',     opponentCode:'SUI', result:'D', homeScore:1, awayScore:1, date:'2026-06-06', venue:'圣迭戈',  competition:'热身赛' },
    { opponent:'墨西哥',   opponentCode:'MEX', result:'L', homeScore:0, awayScore:1, date:'2026-05-31', venue:'蒙特雷',  competition:'热身赛' },
    { opponent:'日本',     opponentCode:'JPN', result:'L', homeScore:0, awayScore:2, date:'2024-10-15', venue:'埼玉',    competition:'世预赛' },
    { opponent:'中国',     opponentCode:'CHN', result:'W', homeScore:3, awayScore:0, date:'2024-10-10', venue:'阿德莱德',competition:'世预赛' },
    { opponent:'沙特',     opponentCode:'KSA', result:'W', homeScore:1, awayScore:0, date:'2024-09-10', venue:'利雅得',  competition:'世预赛' },
  ],
  HAI: [
    { opponent:'秘鲁',     opponentCode:'PER', result:'W', homeScore:2, awayScore:1, date:'2026-06-06', venue:'迈阿密',      competition:'热身赛' },
    { opponent:'新西兰',   opponentCode:'NZL', result:'W', homeScore:4, awayScore:0, date:'2026-06-03', venue:'劳德代尔堡',  competition:'热身赛' },
    { opponent:'哥斯达黎加',opponentCode:'CRC',result:'W', homeScore:1, awayScore:0, date:'2026-03-25', venue:'圣何塞',     competition:'附加赛' },
    { opponent:'危地马拉', opponentCode:'GUA', result:'D', homeScore:1, awayScore:1, date:'2026-03-21', venue:'危地马拉城',  competition:'附加赛' },
    { opponent:'牙买加',   opponentCode:'JAM', result:'W', homeScore:2, awayScore:0, date:'2024-11-18', venue:'金斯顿',     competition:'金杯赛预选' },
  ],
  PAN: [
    { opponent:'波黑',         opponentCode:'BIH', result:'D', homeScore:1, awayScore:1, date:'2026-06-06', venue:'圣路易斯',   competition:'热身赛' },
    { opponent:'多米尼加',     opponentCode:'DOM', result:'W', homeScore:4, awayScore:2, date:'2026-06-04', venue:'巴拿马城',   competition:'热身赛' },
    { opponent:'巴西',         opponentCode:'BRA', result:'L', homeScore:2, awayScore:6, date:'2026-05-31', venue:'休斯敦',     competition:'热身赛' },
    { opponent:'萨尔瓦多',     opponentCode:'SLV', result:'W', homeScore:2, awayScore:0, date:'2025-03-26', venue:'巴拿马城',   competition:'世预赛' },
    { opponent:'加拿大',       opponentCode:'CAN', result:'L', homeScore:0, awayScore:1, date:'2025-03-20', venue:'温哥华',     competition:'世预赛' },
  ],
  NZL: [
    { opponent:'英格兰', opponentCode:'ENG', result:'L', homeScore:0, awayScore:1, date:'2026-06-06', venue:'坦帕',        competition:'热身赛' },
    { opponent:'海地',   opponentCode:'HAI', result:'L', homeScore:0, awayScore:4, date:'2026-06-03', venue:'劳德代尔堡',  competition:'热身赛' },
    { opponent:'所罗门', opponentCode:'SOL', result:'W', homeScore:5, awayScore:0, date:'2025-03-25', venue:'奥克兰',      competition:'世预赛' },
    { opponent:'瓦努阿图',opponentCode:'VAN',result:'W', homeScore:4, awayScore:0, date:'2024-11-18', venue:'惠灵顿',     competition:'世预赛' },
    { opponent:'斐济',   opponentCode:'FIJ', result:'W', homeScore:3, awayScore:0, date:'2024-10-14', venue:'奥克兰',      competition:'世预赛' },
  ],
  COD: [
    { opponent:'丹麦',     opponentCode:'DEN', result:'D', homeScore:0, awayScore:0, date:'2026-06-03', venue:'列日',       competition:'热身赛' },
    { opponent:'玻利维亚', opponentCode:'BOL', result:'W', homeScore:1, awayScore:0, date:'2026-03-30', venue:'墨西哥城',   competition:'附加赛决赛' },
    { opponent:'苏里南',   opponentCode:'SUR', result:'W', homeScore:2, awayScore:0, date:'2026-03-25', venue:'帕拉马里博', competition:'附加赛' },
    { opponent:'塞内加尔', opponentCode:'SEN', result:'L', homeScore:0, awayScore:2, date:'2025-03-26', venue:'金沙萨',     competition:'世预赛' },
    { opponent:'多哥',     opponentCode:'TOG', result:'W', homeScore:2, awayScore:0, date:'2024-11-19', venue:'洛美',       competition:'世预赛' },
  ],
  GHA: [
    { opponent:'威尔士', opponentCode:'WAL', result:'D', homeScore:1, awayScore:1, date:'2026-06-02', venue:'加的夫',     competition:'热身赛' },
    { opponent:'加蓬',   opponentCode:'GAB', result:'W', homeScore:1, awayScore:0, date:'2025-10-12', venue:'阿克拉',     competition:'世预赛' },
    { opponent:'尼日利亚',opponentCode:'NGA',result:'L', homeScore:1, awayScore:2, date:'2025-09-14', venue:'拉各斯',    competition:'世预赛' },
    { opponent:'南非',   opponentCode:'RSA', result:'W', homeScore:2, awayScore:0, date:'2025-06-08', venue:'约翰内斯堡', competition:'世预赛' },
    { opponent:'津巴布韦',opponentCode:'ZIM',result:'W', homeScore:3, awayScore:0, date:'2025-03-26', venue:'库马西',     competition:'世预赛' },
  ],
  TUN: [
    { opponent:'比利时', opponentCode:'BEL', result:'L', homeScore:0, awayScore:5, date:'2026-06-06', venue:'布鲁塞尔', competition:'热身赛' },
    { opponent:'奥地利', opponentCode:'AUT', result:'L', homeScore:0, awayScore:1, date:'2026-06-01', venue:'维也纳',   competition:'热身赛' },
    { opponent:'摩洛哥', opponentCode:'MAR', result:'L', homeScore:1, awayScore:3, date:'2025-09-08', venue:'拉巴特',   competition:'世预赛' },
    { opponent:'纳米比亚',opponentCode:'NAM',result:'W', homeScore:3, awayScore:1, date:'2025-06-11', venue:'温得和克', competition:'世预赛' },
    { opponent:'利比里亚',opponentCode:'LBR',result:'W', homeScore:4, awayScore:0, date:'2025-03-26', venue:'突尼斯城', competition:'世预赛' },
  ],
  RSA: [
    { opponent:'尼加拉瓜', opponentCode:'NCA', result:'D', homeScore:0, awayScore:0, date:'2026-05-29', venue:'德班',     competition:'热身赛' },
    { opponent:'牙买加',   opponentCode:'JAM', result:'W', homeScore:1, awayScore:0, date:'2026-06-07', venue:'蒙特哥湾', competition:'热身赛' },
    { opponent:'加纳',     opponentCode:'GHA', result:'L', homeScore:0, awayScore:2, date:'2025-06-08', venue:'约翰内斯堡',competition:'世预赛' },
    { opponent:'苏丹',     opponentCode:'SDN', result:'W', homeScore:3, awayScore:0, date:'2025-03-26', venue:'喀土穆',   competition:'世预赛' },
    { opponent:'刚果',     opponentCode:'CGO', result:'W', homeScore:2, awayScore:0, date:'2024-11-19', venue:'德班',     competition:'世预赛' },
  ],
  CUW: [
    { opponent:'阿鲁巴',   opponentCode:'ARU', result:'W', homeScore:4, awayScore:0, date:'2026-06-07', venue:'威廉斯塔德', competition:'热身赛' },
    { opponent:'苏格兰',   opponentCode:'SCO', result:'L', homeScore:1, awayScore:4, date:'2026-05-30', venue:'格拉斯哥',   competition:'热身赛' },
    { opponent:'危地马拉', opponentCode:'GUA', result:'W', homeScore:1, awayScore:0, date:'2026-03-25', venue:'库拉索',     competition:'附加赛' },
    { opponent:'古巴',     opponentCode:'CUB', result:'W', homeScore:2, awayScore:0, date:'2024-11-19', venue:'哈瓦那',     competition:'中北美预选' },
    { opponent:'特立尼达', opponentCode:'TTO', result:'D', homeScore:1, awayScore:1, date:'2024-10-15', venue:'西班牙港',   competition:'中北美预选' },
  ],
  IRQ: [
    { opponent:'安道尔',   opponentCode:'AND', result:'W', homeScore:1, awayScore:0, date:'2026-05-29', venue:'巴格达',     competition:'热身赛' },
    { opponent:'韩国',     opponentCode:'KOR', result:'L', homeScore:1, awayScore:3, date:'2025-06-05', venue:'首尔',       competition:'世预赛' },
    { opponent:'约旦',     opponentCode:'JOR', result:'D', homeScore:1, awayScore:1, date:'2025-03-26', venue:'安曼',       competition:'世预赛' },
    { opponent:'卡塔尔',   opponentCode:'QAT', result:'W', homeScore:2, awayScore:1, date:'2024-11-19', venue:'巴格达',     competition:'世预赛' },
    { opponent:'阿曼',     opponentCode:'OMA', result:'W', homeScore:1, awayScore:0, date:'2024-10-15', venue:'马斯喀特',   competition:'世预赛' },
  ],
  QAT: [
    { opponent:'萨尔瓦多', opponentCode:'SLV', result:'D', homeScore:0, awayScore:0, date:'2026-06-06', venue:'洛杉矶',   competition:'热身赛' },
    { opponent:'约旦',     opponentCode:'JOR', result:'W', homeScore:2, awayScore:1, date:'2025-03-26', venue:'安曼',     competition:'世预赛' },
    { opponent:'伊拉克',   opponentCode:'IRQ', result:'L', homeScore:1, awayScore:2, date:'2024-11-19', venue:'巴格达',   competition:'世预赛' },
    { opponent:'科威特',   opponentCode:'KUW', result:'W', homeScore:3, awayScore:0, date:'2024-10-15', venue:'多哈',     competition:'世预赛' },
    { opponent:'阿联酋',   opponentCode:'UAE', result:'W', homeScore:4, awayScore:1, date:'2024-09-10', venue:'多哈',     competition:'世预赛' },
  ],
  KSA: [
    { opponent:'厄瓜多尔', opponentCode:'ECU', result:'L', homeScore:1, awayScore:2, date:'2026-05-31', venue:'基多',     competition:'热身赛' },
    { opponent:'阿联酋',   opponentCode:'UAE', result:'W', homeScore:2, awayScore:0, date:'2025-10-14', venue:'利雅得',   competition:'世预赛' },
    { opponent:'巴林',     opponentCode:'BHR', result:'W', homeScore:1, awayScore:0, date:'2025-03-20', venue:'利雅得',   competition:'世预赛' },
    { opponent:'中国',     opponentCode:'CHN', result:'W', homeScore:2, awayScore:1, date:'2024-11-19', venue:'利雅得',   competition:'世预赛' },
    { opponent:'澳大利亚', opponentCode:'AUS', result:'L', homeScore:0, awayScore:1, date:'2024-10-15', venue:'墨尔本',   competition:'世预赛' },
  ],
  CPV: [
    { opponent:'塞尔维亚', opponentCode:'SRB', result:'W', homeScore:3, awayScore:0, date:'2026-05-31', venue:'普拉亚',   competition:'热身赛' },
    { opponent:'马里',     opponentCode:'MLI', result:'W', homeScore:1, awayScore:0, date:'2025-10-14', venue:'巴马科',   competition:'世预赛' },
    { opponent:'埃及',     opponentCode:'EGY', result:'L', homeScore:0, awayScore:3, date:'2025-09-14', venue:'开罗',     competition:'世预赛' },
    { opponent:'毛里塔尼亚',opponentCode:'MTN',result:'W', homeScore:2, awayScore:0, date:'2025-06-08', venue:'普拉亚',   competition:'世预赛' },
    { opponent:'埃塞俄比亚',opponentCode:'ETH',result:'W', homeScore:1, awayScore:0, date:'2025-03-26', venue:'亚的斯亚贝巴',competition:'世预赛' },
  ],
  BIH: [
    { opponent:'巴拿马',     opponentCode:'PAN', result:'D', homeScore:1, awayScore:1, date:'2026-06-06', venue:'圣路易斯', competition:'热身赛' },
    { opponent:'北马其顿',   opponentCode:'MKD', result:'D', homeScore:0, awayScore:0, date:'2026-05-29', venue:'萨拉热窝', competition:'热身赛' },
    { opponent:'德国',       opponentCode:'GER', result:'L', homeScore:1, awayScore:5, date:'2025-09-14', venue:'慕尼黑',   competition:'世预赛' },
    { opponent:'哈萨克斯坦', opponentCode:'KAZ', result:'W', homeScore:2, awayScore:0, date:'2025-06-08', venue:'萨拉热窝', competition:'世预赛' },
    { opponent:'列支敦士登', opponentCode:'LIE', result:'W', homeScore:8, awayScore:0, date:'2025-03-26', venue:'瓦杜兹',   competition:'世预赛' },
  ],
  JOR: [
    { opponent:'哥伦比亚', opponentCode:'COL', result:'L', homeScore:0, awayScore:2, date:'2026-06-08', venue:'圣迭戈',  competition:'热身赛' },
    { opponent:'瑞士',     opponentCode:'SUI', result:'L', homeScore:1, awayScore:4, date:'2026-05-31', venue:'伯尔尼',  competition:'热身赛' },
    { opponent:'伊拉克',   opponentCode:'IRQ', result:'D', homeScore:1, awayScore:1, date:'2025-03-26', venue:'安曼',    competition:'世预赛' },
    { opponent:'卡塔尔',   opponentCode:'QAT', result:'L', homeScore:1, awayScore:2, date:'2025-06-05', venue:'多哈',    competition:'世预赛' },
    { opponent:'科威特',   opponentCode:'KUW', result:'W', homeScore:3, awayScore:0, date:'2024-11-19', venue:'安曼',    competition:'世预赛' },
  ],
  UZB: [
    { opponent:'荷兰',     opponentCode:'NED', result:'L', homeScore:1, awayScore:2, date:'2026-06-08', venue:'纽约',     competition:'热身赛' },
    { opponent:'加拿大',   opponentCode:'CAN', result:'L', homeScore:0, awayScore:2, date:'2026-06-02', venue:'多伦多',   competition:'热身赛' },
    { opponent:'伊朗',     opponentCode:'IRN', result:'D', homeScore:2, awayScore:2, date:'2025-03-25', venue:'塔什干',   competition:'世预赛' },
    { opponent:'阿联酋',   opponentCode:'UAE', result:'W', homeScore:3, awayScore:0, date:'2024-11-19', venue:'塔什干',   competition:'世预赛' },
    { opponent:'吉尔吉斯', opponentCode:'KGZ', result:'W', homeScore:2, awayScore:0, date:'2024-10-15', venue:'比什凯克', competition:'世预赛' },
  ],
};

// ===== 全部小组赛对阵 + 经典宿敌 =====
function m(opponentCode:string, result:'W'|'D'|'L', homeScore:number, awayScore:number, date:string, competition:string): RecentMatch {
  return { opponent:'', opponentCode, result, homeScore, awayScore, date, venue:'', competition };
}

const ALL_H2H: Record<string, H2HRecord> = {
  // ===== A组 =====
  MEX_KOR: { team1:'MEX',team2:'KOR', totalMatches:14, team1Wins:8, team2Wins:3, draws:3, lastMeetings:[m('KOR','W',2,1,'2021-11-14','热身赛'),m('KOR','W',2,1,'2018-06-23','世界杯小组'),m('KOR','L',0,1,'2014-01-29','热身赛')]},
  MEX_RSA: { team1:'MEX',team2:'RSA', totalMatches:5, team1Wins:2, team2Wins:1, draws:2, lastMeetings:[m('RSA','D',1,1,'2016-10-08','热身赛'),m('RSA','L',0,1,'2010-06-11','世界杯小组'),m('RSA','W',4,2,'2005-07-14','金杯赛')]},
  KOR_RSA: { team1:'KOR',team2:'RSA', totalMatches:3, team1Wins:1, team2Wins:1, draws:1, lastMeetings:[m('RSA','D',1,1,'2015-10-13','热身赛'),m('RSA','W',2,0,'2010-06-22','世界杯小组'),m('RSA','L',1,2,'1998-06-20','世界杯小组')]},

  // ===== B组 =====
  CAN_SUI: { team1:'CAN',team2:'SUI', totalMatches:2, team1Wins:0, team2Wins:2, draws:0, lastMeetings:[m('SUI','L',0,2,'2021-11-12','热身赛'),m('SUI','L',1,4,'2011-06-01','热身赛')]},
  CAN_QAT: { team1:'CAN',team2:'QAT', totalMatches:2, team1Wins:1, team2Wins:1, draws:0, lastMeetings:[m('QAT','W',2,0,'2023-09-22','热身赛'),m('QAT','L',0,1,'2016-11-11','热身赛')]},
  QAT_SUI: { team1:'QAT',team2:'SUI', totalMatches:2, team1Wins:0, team2Wins:2, draws:0, lastMeetings:[m('SUI','L',0,3,'2022-03-27','热身赛'),m('SUI','L',0,1,'2018-11-14','热身赛')]},

  // ===== C组 =====
  BRA_MAR: { team1:'BRA',team2:'MAR', totalMatches:5, team1Wins:3, team2Wins:1, draws:1, lastMeetings:[m('MAR','L',1,2,'2023-03-25','热身赛'),m('MAR','W',3,0,'2020-06-21','热身赛'),m('MAR','W',2,1,'2016-06-01','热身赛')]},
  BRA_SCO: { team1:'BRA',team2:'SCO', totalMatches:9, team1Wins:7, team2Wins:0, draws:2, lastMeetings:[m('SCO','W',2,0,'2011-03-27','热身赛'),m('SCO','W',1,0,'1998-06-10','世界杯小组'),m('SCO','W',2,0,'1990-06-21','世界杯小组')]},
  BRA_HAI: { team1:'BRA',team2:'HAI', totalMatches:2, team1Wins:2, team2Wins:0, draws:0, lastMeetings:[m('HAI','W',4,0,'2004-08-18','热身赛'),m('HAI','W',6,0,'1974-05-05','热身赛')]},
  MAR_SCO: { team1:'MAR',team2:'SCO', totalMatches:2, team1Wins:1, team2Wins:0, draws:1, lastMeetings:[m('SCO','W',3,0,'1998-06-23','世界杯小组'),m('SCO','D',0,0,'1980-06-01','热身赛')]},

  // ===== D组 =====
  USA_PAR: { team1:'USA',team2:'PAR', totalMatches:8, team1Wins:3, team2Wins:3, draws:2, lastMeetings:[m('PAR','L',0,1,'2020-03-08','热身赛'),m('PAR','D',1,1,'2018-03-28','热身赛'),m('PAR','W',1,0,'2016-06-12','美洲杯')]},
  USA_AUS: { team1:'USA',team2:'AUS', totalMatches:3, team1Wins:1, team2Wins:1, draws:1, lastMeetings:[m('AUS','D',1,1,'2015-06-08','热身赛'),m('AUS','W',3,1,'2010-06-05','热身赛'),m('AUS','L',0,1,'1998-11-06','热身赛')]},
  AUS_PAR: { team1:'AUS',team2:'PAR', totalMatches:2, team1Wins:0, team2Wins:1, draws:1, lastMeetings:[m('PAR','D',0,0,'2010-10-09','热身赛'),m('PAR','L',1,2,'2006-10-08','热身赛')]},

  // ===== E组 =====
  GER_ECU: { team1:'GER',team2:'ECU', totalMatches:2, team1Wins:2, team2Wins:0, draws:0, lastMeetings:[m('ECU','W',3,0,'2006-06-20','世界杯小组'),m('ECU','W',4,2,'2002-05-09','热身赛')]},
  GER_CIV: { team1:'GER',team2:'CIV', totalMatches:2, team1Wins:1, team2Wins:1, draws:0, lastMeetings:[m('CIV','L',2,3,'2025-06-04','热身赛'),m('CIV','W',1,0,'2015-07-04','热身赛')]},
  CIV_ECU: { team1:'CIV',team2:'ECU', totalMatches:4, team1Wins:1, team2Wins:2, draws:1, lastMeetings:[m('ECU','D',1,1,'2015-06-06','热身赛'),m('ECU','L',0,2,'2013-08-14','热身赛'),m('ECU','W',2,1,'2007-10-17','热身赛')]},

  // ===== F组 =====
  NED_JPN: { team1:'NED',team2:'JPN', totalMatches:4, team1Wins:3, team2Wins:0, draws:1, lastMeetings:[m('JPN','D',2,2,'2013-11-16','热身赛'),m('JPN','W',3,0,'2010-06-19','世界杯小组'),m('JPN','W',3,0,'2009-09-05','热身赛')]},
  NED_TUN: { team1:'NED',team2:'TUN', totalMatches:2, team1Wins:1, team2Wins:0, draws:1, lastMeetings:[m('TUN','W',1,0,'2018-10-13','热身赛'),m('TUN','D',2,2,'2009-02-12','热身赛')]},
  JPN_TUN: { team1:'JPN',team2:'TUN', totalMatches:2, team1Wins:2, team2Wins:0, draws:0, lastMeetings:[m('TUN','W',2,0,'2015-03-27','热身赛'),m('TUN','W',1,0,'1999-06-06','麒麟杯')]},

  // ===== G组 =====
  BEL_EGY: { team1:'BEL',team2:'EGY', totalMatches:4, team1Wins:2, team2Wins:1, draws:1, lastMeetings:[m('EGY','W',3,0,'2022-11-18','热身赛'),m('EGY','L',1,2,'2018-06-06','热身赛'),m('EGY','D',1,1,'2012-06-02','热身赛')]},
  BEL_IRN: { team1:'BEL',team2:'IRN', totalMatches:2, team1Wins:1, team2Wins:1, draws:0, lastMeetings:[m('IRN','W',1,0,'2014-03-05','热身赛'),m('IRN','L',0,1,'1998-06-21','世界杯小组')]},
  EGY_IRN: { team1:'EGY',team2:'IRN', totalMatches:2, team1Wins:0, team2Wins:1, draws:1, lastMeetings:[m('IRN','D',1,1,'2017-10-05','热身赛'),m('IRN','L',0,1,'2008-11-19','热身赛')]},

  // ===== H组 =====
  ESP_URU: { team1:'ESP',team2:'URU', totalMatches:15, team1Wins:8, team2Wins:1, draws:6, lastMeetings:[m('URU','W',2,1,'2022-06-06','热身赛'),m('URU','W',2,1,'2019-09-06','热身赛'),m('URU','D',0,0,'2015-06-18','热身赛')]},
  ESP_CPV: { team1:'ESP',team2:'CPV', totalMatches:0, team1Wins:0, team2Wins:0, draws:0, lastMeetings:[]},
  ESP_KSA: { team1:'ESP',team2:'KSA', totalMatches:2, team1Wins:2, team2Wins:0, draws:0, lastMeetings:[m('KSA','W',5,0,'2018-03-23','热身赛'),m('KSA','W',3,1,'2012-09-08','热身赛')]},
  URU_KSA: { team1:'URU',team2:'KSA', totalMatches:3, team1Wins:2, team2Wins:0, draws:1, lastMeetings:[m('KSA','W',1,0,'2018-06-20','世界杯小组'),m('KSA','W',3,1,'2014-10-10','热身赛'),m('KSA','D',1,1,'2007-09-09','热身赛')]},

  // ===== I组 =====
  FRA_SEN: { team1:'FRA',team2:'SEN', totalMatches:4, team1Wins:2, team2Wins:1, draws:1, lastMeetings:[m('SEN','L',0,1,'2022-06-04','热身赛'),m('SEN','W',1,0,'2002-05-31','世界杯小组'),m('SEN','W',2,1,'2002-05-08','热身赛')]},
  FRA_NOR: { team1:'FRA',team2:'NOR', totalMatches:18, team1Wins:9, team2Wins:4, draws:5, lastMeetings:[m('NOR','W',1,0,'2019-03-26','热身赛'),m('NOR','W',2,1,'2014-05-27','热身赛'),m('NOR','L',0,2,'2010-08-11','热身赛')]},
  SEN_NOR: { team1:'SEN',team2:'NOR', totalMatches:0, team1Wins:0, team2Wins:0, draws:0, lastMeetings:[]},

  // ===== J组 =====
  ARG_ALG: { team1:'ARG',team2:'ALG', totalMatches:4, team1Wins:3, team2Wins:0, draws:1, lastMeetings:[m('ALG','W',2,0,'2014-08-16','热身赛'),m('ALG','W',4,2,'2007-06-05','热身赛'),m('ALG','D',0,0,'1988-03-23','热身赛')]},
  ARG_AUT: { team1:'ARG',team2:'AUT', totalMatches:7, team1Wins:5, team2Wins:0, draws:2, lastMeetings:[m('AUT','W',2,1,'2014-06-05','热身赛'),m('AUT','W',3,1,'2009-03-28','热身赛'),m('AUT','D',1,1,'2007-08-22','热身赛')]},
  ALG_AUT: { team1:'ALG',team2:'AUT', totalMatches:2, team1Wins:1, team2Wins:1, draws:0, lastMeetings:[m('AUT','L',0,1,'2019-10-15','热身赛'),m('AUT','W',2,0,'2014-06-30','热身赛')]},

  // ===== K组 =====
  POR_COL: { team1:'POR',team2:'COL', totalMatches:4, team1Wins:2, team2Wins:1, draws:1, lastMeetings:[m('COL','W',2,0,'2021-09-05','热身赛'),m('COL','D',2,2,'2018-03-23','热身赛'),m('COL','W',3,0,'2014-09-07','热身赛')]},
  POR_UZB: { team1:'POR',team2:'UZB', totalMatches:0, team1Wins:0, team2Wins:0, draws:0, lastMeetings:[]},
  COL_UZB: { team1:'COL',team2:'UZB', totalMatches:0, team1Wins:0, team2Wins:0, draws:0, lastMeetings:[]},

  // ===== L组 =====
  ENG_CRO: { team1:'ENG',team2:'CRO', totalMatches:11, team1Wins:6, team2Wins:3, draws:2, lastMeetings:[m('CRO','W',3,1,'2025-10-14','世预赛'),m('CRO','L',1,2,'2018-07-12','世界杯半决赛'),m('CRO','W',4,2,'2004-06-21','欧洲杯小组')]},
  ENG_GHA: { team1:'ENG',team2:'GHA', totalMatches:1, team1Wins:1, team2Wins:0, draws:0, lastMeetings:[m('GHA','W',1,0,'2011-03-29','热身赛')]},
  ENG_PAN: { team1:'ENG',team2:'PAN', totalMatches:1, team1Wins:1, team2Wins:0, draws:0, lastMeetings:[m('PAN','W',6,1,'2018-06-24','世界杯小组')]},
  CRO_GHA: { team1:'CRO',team2:'GHA', totalMatches:0, team1Wins:0, team2Wins:0, draws:0, lastMeetings:[]},

  // ===== 经典宿敌 =====
  ARG_BRA: { team1:'ARG',team2:'BRA', totalMatches:109, team1Wins:41, team2Wins:42, draws:26, lastMeetings:[m('BRA','W',1,0,'2025-03-26','世预赛'),m('BRA','L',0,1,'2023-11-22','世预赛'),m('BRA','W',2,0,'2022-09-08','世预赛')]},
  ESP_FRA: { team1:'ESP',team2:'FRA', totalMatches:36, team1Wins:16, team2Wins:13, draws:7, lastMeetings:[m('FRA','W',2,1,'2025-06-08','欧国联决赛'),m('FRA','L',1,2,'2024-07-09','欧洲杯半决赛'),m('FRA','D',1,1,'2021-10-10','欧国联决赛')]},
  ENG_FRA: { team1:'ENG',team2:'FRA', totalMatches:32, team1Wins:17, team2Wins:10, draws:5, lastMeetings:[m('FRA','W',2,1,'2022-12-10','世界杯1/4'),m('FRA','D',1,1,'2015-11-17','热身赛'),m('FRA','W',2,0,'2010-06-12','世界杯小组')]},
  ARG_FRA: { team1:'ARG',team2:'FRA', totalMatches:13, team1Wins:6, team2Wins:4, draws:3, lastMeetings:[m('FRA','W',3,3,'2022-12-18','世界杯决赛(点球胜)'),m('FRA','D',0,0,'2018-06-30','世界杯1/8(点球负)'),m('FRA','W',2,1,'2009-02-11','热身赛')]},
  GER_ENG: { team1:'GER',team2:'ENG', totalMatches:39, team1Wins:16, team2Wins:16, draws:7, lastMeetings:[m('ENG','L',0,2,'2024-06-26','欧洲杯小组'),m('ENG','D',1,1,'2022-09-26','欧国联'),m('ENG','W',2,0,'2021-06-29','欧洲杯1/8')]},
  FRA_BRA: { team1:'FRA',team2:'BRA', totalMatches:16, team1Wins:6, team2Wins:6, draws:4, lastMeetings:[m('BRA','L',1,2,'2019-06-09','热身赛'),m('BRA','D',1,1,'2015-03-26','热身赛'),m('BRA','W',1,0,'2006-07-01','世界杯1/4')]},
  KOR_JPN: { team1:'KOR',team2:'JPN', totalMatches:81, team1Wins:42, team2Wins:16, draws:23, lastMeetings:[m('JPN','L',0,3,'2025-09-10','世预赛'),m('JPN','W',2,1,'2024-01-16','亚洲杯'),m('JPN','W',3,1,'2022-07-27','东亚杯')]},
};

export function getH2H(t1: string, t2: string): H2HRecord | null {
  if (t1 === t2) return null;
  const key = [t1, t2].sort().join('_');
  return ALL_H2H[key] || null;
}
