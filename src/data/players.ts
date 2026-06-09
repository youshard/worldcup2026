import type { Player } from '../types';

/* 评分 60-120，基于2026年球员能力综合评定
 * 顶级6队18-22人全阵容，其他球队5-8人核心球员 */

export const PLAYERS: Player[] = [
  // ================================================================
  // 欧洲强队 · 全阵容
  // ================================================================
  // ===== 西班牙 ESP (22人) =====
  { id:'p1',   name:'拉明·亚马尔',   nameEn:'Lamine Yamal',       fifaCode:'ESP', position:'FW', age:18, club:'巴塞罗那',       rating:110 },
  { id:'p2',   name:'佩德里',         nameEn:'Pedri',              fifaCode:'ESP', position:'MF', age:23, club:'巴塞罗那',       rating:105 },
  { id:'p3',   name:'尼科·威廉斯',   nameEn:'Nico Williams',      fifaCode:'ESP', position:'FW', age:23, club:'毕尔巴鄂竞技',   rating:102 },
  { id:'p4',   name:'法比安·鲁伊斯', nameEn:'Fabián Ruiz',        fifaCode:'ESP', position:'MF', age:30, club:'巴黎圣日耳曼',   rating:98  },
  { id:'p5',   name:'加维',           nameEn:'Gavi',               fifaCode:'ESP', position:'MF', age:21, club:'巴塞罗那',       rating:97  },
  { id:'p6',   name:'奥尔莫',         nameEn:'Dani Olmo',          fifaCode:'ESP', position:'FW', age:28, club:'巴塞罗那',       rating:96  },
  { id:'p7',   name:'库库雷利亚',     nameEn:'Cucurella',          fifaCode:'ESP', position:'DF', age:27, club:'切尔西',         rating:95  },
  { id:'p196', name:'费兰·托雷斯',   nameEn:'Ferran Torres',      fifaCode:'ESP', position:'FW', age:26, club:'巴塞罗那',       rating:94  },
  { id:'p197', name:'巴埃纳',         nameEn:'Álex Baena',         fifaCode:'ESP', position:'MF', age:24, club:'比利亚雷亚尔',   rating:93  },
  { id:'p198', name:'格里马尔多',     nameEn:'Alejandro Grimaldo', fifaCode:'ESP', position:'DF', age:30, club:'勒沃库森',       rating:96  },
  { id:'p331', name:'大卫·拉亚',     nameEn:'David Raya',          fifaCode:'ESP', position:'GK', age:30, club:'阿森纳',         rating:98  },
  { id:'p332', name:'苏维门迪',       nameEn:'Martin Zubimendi',    fifaCode:'ESP', position:'MF', age:27, club:'皇家社会',       rating:95  },
  { id:'p333', name:'梅里诺',         nameEn:'Mikel Merino',        fifaCode:'ESP', position:'MF', age:29, club:'阿森纳',         rating:94  },
  { id:'p334', name:'勒诺尔芒',       nameEn:'Robin Le Normand',    fifaCode:'ESP', position:'DF', age:29, club:'马德里竞技',     rating:95  },
  { id:'p335', name:'赫苏斯·纳瓦斯', nameEn:'Jesús Navas',        fifaCode:'ESP', position:'DF', age:40, club:'塞维利亚',       rating:90  },
  { id:'p336', name:'维维安',         nameEn:'Daniel Vivian',       fifaCode:'ESP', position:'DF', age:26, club:'毕尔巴鄂竞技',   rating:93  },
  { id:'p337', name:'马克·卡萨多',   nameEn:'Marc Casadó',        fifaCode:'ESP', position:'MF', age:22, club:'巴塞罗那',       rating:92  },
  { id:'p338', name:'萨拉戈萨',       nameEn:'Bryan Zaragoza',     fifaCode:'ESP', position:'FW', age:24, club:'拜仁慕尼黑',     rating:93  },
  { id:'p339', name:'卡瓦哈尔',       nameEn:'Dani Carvajal',      fifaCode:'ESP', position:'DF', age:34, club:'皇家马德里',     rating:97  },
  { id:'p340', name:'阿莱士·加西亚', nameEn:'Aleix García',        fifaCode:'ESP', position:'MF', age:28, club:'勒沃库森',       rating:92  },
  { id:'p341', name:'莫拉塔',         nameEn:'Álvaro Morata',       fifaCode:'ESP', position:'FW', age:33, club:'AC米兰',         rating:95  },
  { id:'p342', name:'赫伊森',         nameEn:'Dean Huijsen',        fifaCode:'ESP', position:'DF', age:21, club:'伯恩茅斯',       rating:91  },

  // ===== 法国 FRA (22人) =====
  { id:'p8',   name:'基利安·姆巴佩', nameEn:'Kylian Mbappé',      fifaCode:'FRA', position:'FW', age:27, club:'皇家马德里',     rating:118 },
  { id:'p9',   name:'登贝莱',         nameEn:'Ousmane Dembélé',    fifaCode:'FRA', position:'FW', age:29, club:'巴黎圣日耳曼',   rating:100 },
  { id:'p10',  name:'萨利巴',         nameEn:'William Saliba',     fifaCode:'FRA', position:'DF', age:25, club:'阿森纳',         rating:104 },
  { id:'p11',  name:'楚阿梅尼',       nameEn:'Aurélien Tchouaméni',fifaCode:'FRA', position:'MF', age:26, club:'皇家马德里',    rating:99  },
  { id:'p12',  name:'德西雷·杜埃',   nameEn:'Désiré Doué',        fifaCode:'FRA', position:'FW', age:21, club:'巴黎圣日耳曼',   rating:97  },
  { id:'p82',  name:'迈尼昂',         nameEn:'Mike Maignan',       fifaCode:'FRA', position:'GK', age:30, club:'AC米兰',         rating:99  },
  { id:'p102', name:'拉比奥',         nameEn:'Adrien Rabiot',      fifaCode:'FRA', position:'MF', age:31, club:'马赛',           rating:95  },
  { id:'p199', name:'迈克尔·奥利塞', nameEn:'Michael Olise',      fifaCode:'FRA', position:'FW', age:24, club:'拜仁慕尼黑',     rating:98  },
  { id:'p200', name:'于帕梅卡诺',     nameEn:'Dayot Upamecano',    fifaCode:'FRA', position:'DF', age:27, club:'拜仁慕尼黑',     rating:97  },
  { id:'p201', name:'孔德',           nameEn:'Jules Koundé',       fifaCode:'FRA', position:'DF', age:27, club:'巴塞罗那',       rating:97  },
  { id:'p343', name:'科纳特',         nameEn:'Ibrahima Konaté',    fifaCode:'FRA', position:'DF', age:27, club:'利物浦',         rating:98  },
  { id:'p344', name:'扎伊尔-埃梅里', nameEn:'Warren Zaïre-Emery', fifaCode:'FRA', position:'MF', age:20, club:'巴黎圣日耳曼',   rating:96  },
  { id:'p345', name:'图拉姆',         nameEn:'Marcus Thuram',       fifaCode:'FRA', position:'FW', age:28, club:'国际米兰',       rating:96  },
  { id:'p346', name:'特奥·埃尔南德斯',nameEn:'Theo Hernández',     fifaCode:'FRA', position:'DF', age:28, club:'AC米兰',         rating:97  },
  { id:'p347', name:'卡马文加',       nameEn:'Eduardo Camavinga',  fifaCode:'FRA', position:'MF', age:23, club:'皇家马德里',     rating:96  },
  { id:'p348', name:'巴尔科拉',   nameEn:'Bradley Barcola', fifaCode:'FRA', position:'FW', age:23, club:'巴黎圣日耳曼',   rating:94  },
  { id:'p349', name:'科洛·穆阿尼',   nameEn:'Randal Kolo Muani',  fifaCode:'FRA', position:'FW', age:27, club:'巴黎圣日耳曼',   rating:95  },
  { id:'p350', name:'贡多齐',         nameEn:'Mattéo Guendouzi',   fifaCode:'FRA', position:'MF', age:27, club:'拉齐奥',         rating:93  },
  { id:'p351', name:'卢卡斯·埃尔南德斯',nameEn:'Lucas Hernández',  fifaCode:'FRA', position:'DF', age:30, club:'巴黎圣日耳曼',   rating:95  },
  { id:'p352', name:'桑巴',           nameEn:'Brice Samba',        fifaCode:'FRA', position:'GK', age:32, club:'朗斯',           rating:93  },
  { id:'p353', name:'马蒂斯·特尔',   nameEn:'Mathys Tel',         fifaCode:'FRA', position:'FW', age:21, club:'拜仁慕尼黑',     rating:93  },
  { id:'p354', name:'谢尔基',         nameEn:'Rayan Cherki',       fifaCode:'FRA', position:'FW', age:22, club:'里昂',           rating:94  },

  // ===== 英格兰 ENG (22人) =====
  { id:'p13',  name:'哈里·凯恩',     nameEn:'Harry Kane',          fifaCode:'ENG', position:'FW', age:32, club:'拜仁慕尼黑',     rating:110 },
  { id:'p14',  name:'贝林厄姆',       nameEn:'Jude Bellingham',     fifaCode:'ENG', position:'MF', age:22, club:'皇家马德里',     rating:112 },
  { id:'p15',  name:'萨卡',           nameEn:'Bukayo Saka',         fifaCode:'ENG', position:'FW', age:24, club:'阿森纳',         rating:103 },
  { id:'p16',  name:'德克兰·赖斯',    nameEn:'Declan Rice',         fifaCode:'ENG', position:'MF', age:27, club:'阿森纳',         rating:100 },
  { id:'p17',  name:'拉什福德',       nameEn:'Marcus Rashford',     fifaCode:'ENG', position:'FW', age:28, club:'曼联',           rating:95  },
  { id:'p76',  name:'麦迪逊',         nameEn:'James Maddison',      fifaCode:'ENG', position:'MF', age:29, club:'热刺',           rating:93  },
  { id:'p103', name:'皮克福德',       nameEn:'Jordan Pickford',     fifaCode:'ENG', position:'GK', age:32, club:'埃弗顿',         rating:95  },
  { id:'p202', name:'埃泽',           nameEn:'Eberechi Eze',        fifaCode:'ENG', position:'MF', age:27, club:'水晶宫',         rating:94  },
  { id:'p203', name:'斯通斯',         nameEn:'John Stones',         fifaCode:'ENG', position:'DF', age:32, club:'曼城',           rating:96  },
  { id:'p204', name:'戈登',           nameEn:'Anthony Gordon',      fifaCode:'ENG', position:'FW', age:25, club:'纽卡斯尔',       rating:95  },
  { id:'p355', name:'梅努',           nameEn:'Kobbie Mainoo',      fifaCode:'ENG', position:'MF', age:21, club:'曼联',           rating:95  },
  { id:'p356', name:'詹姆斯',         nameEn:'Reece James',        fifaCode:'ENG', position:'DF', age:26, club:'切尔西',         rating:96  },
  { id:'p357', name:'古埃伊',         nameEn:'Marc Guéhi',          fifaCode:'ENG', position:'DF', age:25, club:'水晶宫',         rating:94  },
  { id:'p358', name:'沃克',           nameEn:'Kyle Walker',        fifaCode:'ENG', position:'DF', age:36, club:'曼城',           rating:94  },
  { id:'p359', name:'罗杰斯',         nameEn:'Morgan Rogers',       fifaCode:'ENG', position:'FW', age:23, club:'阿斯顿维拉',     rating:93  },
  { id:'p360', name:'拉姆斯戴尔',     nameEn:'Aaron Ramsdale',     fifaCode:'ENG', position:'GK', age:28, club:'阿森纳',         rating:93  },
  { id:'p361', name:'加拉格尔',       nameEn:'Conor Gallagher',    fifaCode:'ENG', position:'MF', age:26, club:'马德里竞技',     rating:93  },
  { id:'p362', name:'布兰斯怀特',     nameEn:'Jarrad Branthwaite', fifaCode:'ENG', position:'DF', age:23, club:'埃弗顿',         rating:92  },
  { id:'p363', name:'奥赖利',         nameEn:'Morgan O\'Riley',    fifaCode:'ENG', position:'MF', age:26, club:'凯尔特人',       rating:91  },
  { id:'p364', name:'马杜埃凯',       nameEn:'Noni Madueke',       fifaCode:'ENG', position:'FW', age:24, club:'切尔西',         rating:92  },
  { id:'p365', name:'肖',             nameEn:'Luke Shaw',           fifaCode:'ENG', position:'DF', age:30, club:'曼联',           rating:93  },
  { id:'p366', name:'鲍文',           nameEn:'Jarrod Bowen',        fifaCode:'ENG', position:'FW', age:29, club:'西汉姆联',       rating:93  },

  // ===== 阿根廷 ARG (20人) =====
  { id:'p18',  name:'梅西',                nameEn:'Lionel Messi',         fifaCode:'ARG', position:'FW', age:39, club:'迈阿密国际',   rating:115 },
  { id:'p19',  name:'劳塔罗·马丁内斯',    nameEn:'Lautaro Martínez',     fifaCode:'ARG', position:'FW', age:28, club:'国际米兰',     rating:107 },
  { id:'p20',  name:'胡利安·阿尔瓦雷斯',  nameEn:'Julián Álvarez',       fifaCode:'ARG', position:'FW', age:26, club:'马德里竞技',   rating:102 },
  { id:'p21',  name:'恩佐·费尔南德斯',    nameEn:'Enzo Fernández',       fifaCode:'ARG', position:'MF', age:25, club:'切尔西',       rating:98  },
  { id:'p22',  name:'麦卡利斯特',          nameEn:'Alexis Mac Allister',  fifaCode:'ARG', position:'MF', age:27, club:'利物浦',       rating:99  },
  { id:'p23',  name:'埃米·马丁内斯',      nameEn:'Emiliano Martínez',    fifaCode:'ARG', position:'GK', age:33, club:'阿斯顿维拉',   rating:101 },
  { id:'p104', name:'罗梅罗',              nameEn:'Cristian Romero',      fifaCode:'ARG', position:'DF', age:28, club:'热刺',         rating:100 },
  { id:'p205', name:'德保罗',              nameEn:'Rodrigo De Paul',      fifaCode:'ARG', position:'MF', age:32, club:'马德里竞技',   rating:97  },
  { id:'p206', name:'尼古拉斯·冈萨雷斯',  nameEn:'Nico González',        fifaCode:'ARG', position:'FW', age:27, club:'尤文图斯',     rating:96  },
  { id:'p207', name:'利桑德罗·马丁内斯',  nameEn:'Lisandro Martínez',    fifaCode:'ARG', position:'DF', age:28, club:'曼联',         rating:98  },
  { id:'p367', name:'奥塔门迪',          nameEn:'Nicolás Otamendi',      fifaCode:'ARG', position:'DF', age:38, club:'本菲卡',       rating:96  },
  { id:'p368', name:'帕雷德斯',          nameEn:'Leandro Paredes',       fifaCode:'ARG', position:'MF', age:31, club:'罗马',         rating:95  },
  { id:'p369', name:'洛塞尔索',          nameEn:'Giovani Lo Celso',      fifaCode:'ARG', position:'MF', age:30, club:'热刺',         rating:94  },
  { id:'p370', name:'阿尔马达',          nameEn:'Thiago Almada',         fifaCode:'ARG', position:'FW', age:25, club:'博塔弗戈',     rating:93  },
  { id:'p371', name:'鲁利',              nameEn:'Gerónimo Rulli',        fifaCode:'ARG', position:'GK', age:34, club:'阿贾克斯',     rating:93  },
  { id:'p372', name:'蒙铁尔',            nameEn:'Gonzalo Montiel',       fifaCode:'ARG', position:'DF', age:29, club:'塞维利亚',     rating:94  },
  { id:'p373', name:'帕拉西奥斯',        nameEn:'Exequiel Palacios',     fifaCode:'ARG', position:'MF', age:27, club:'勒沃库森',     rating:94  },
  { id:'p374', name:'尼科·帕斯',         nameEn:'Nico Paz',             fifaCode:'ARG', position:'MF', age:21, club:'科莫',         rating:92  },
  { id:'p375', name:'莫利纳',            nameEn:'Nahuel Molina',         fifaCode:'ARG', position:'DF', age:28, club:'马德里竞技',   rating:95  },
  { id:'p376', name:'加纳乔',            nameEn:'Alejandro Garnacho',    fifaCode:'ARG', position:'FW', age:21, club:'曼联',         rating:93  },

  // ===== 葡萄牙 POR (20人) =====
  { id:'p24',  name:'C罗',           nameEn:'Cristiano Ronaldo',   fifaCode:'POR', position:'FW', age:41, club:'利雅得胜利',     rating:112 },
  { id:'p25',  name:'B席',           nameEn:'Bernardo Silva',      fifaCode:'POR', position:'MF', age:31, club:'曼城',           rating:103 },
  { id:'p26',  name:'B费',           nameEn:'Bruno Fernandes',     fifaCode:'POR', position:'MF', age:31, club:'曼联',           rating:102 },
  { id:'p27',  name:'拉斐尔·莱奥',   nameEn:'Rafael Leão',         fifaCode:'POR', position:'FW', age:27, club:'AC米兰',         rating:100 },
  { id:'p28',  name:'维蒂尼亚',      nameEn:'Vitinha',             fifaCode:'POR', position:'MF', age:26, club:'巴黎圣日耳曼',   rating:99  },
  { id:'p29',  name:'鲁本·迪亚斯',   nameEn:'Rúben Dias',          fifaCode:'POR', position:'DF', age:29, club:'曼城',           rating:104 },
  { id:'p208', name:'菲利克斯',     nameEn:'João Félix',           fifaCode:'POR', position:'FW', age:26, club:'切尔西',         rating:95  },
  { id:'p209', name:'迪奥戈·科斯塔',nameEn:'Diogo Costa',          fifaCode:'POR', position:'GK', age:26, club:'波尔图',         rating:98  },
  { id:'p210', name:'努诺·门德斯',  nameEn:'Nuno Mendes',          fifaCode:'POR', position:'DF', age:24, club:'巴黎圣日耳曼',   rating:97  },
  { id:'p211', name:'坎塞洛',       nameEn:'João Cancelo',         fifaCode:'POR', position:'DF', age:32, club:'巴塞罗那',       rating:96  },
  { id:'p377', name:'若泽·萨',      nameEn:'José Sá',             fifaCode:'POR', position:'GK', age:33, club:'狼队',           rating:93  },
  { id:'p378', name:'达洛特',       nameEn:'Diogo Dalot',          fifaCode:'POR', position:'DF', age:27, club:'曼联',           rating:95  },
  { id:'p379', name:'鲁本·内维斯',  nameEn:'Rúben Neves',         fifaCode:'POR', position:'MF', age:29, club:'利雅得新月',     rating:94  },
  { id:'p380', name:'若昂·内维斯',  nameEn:'João Neves',          fifaCode:'POR', position:'MF', age:21, club:'巴黎圣日耳曼',   rating:96  },
  { id:'p381', name:'贡萨洛·拉莫斯',nameEn:'Gonçalo Ramos',       fifaCode:'POR', position:'FW', age:25, club:'巴黎圣日耳曼',   rating:94  },
  { id:'p382', name:'特林康',       nameEn:'Francisco Trincão',    fifaCode:'POR', position:'FW', age:26, club:'葡萄牙体育',     rating:93  },
  { id:'p383', name:'佩雷拉',       nameEn:'Danilo Pereira',       fifaCode:'POR', position:'DF', age:34, club:'巴黎圣日耳曼',   rating:93  },
  { id:'p384', name:'小孔塞桑',     nameEn:'Francisco Conceição',  fifaCode:'POR', position:'FW', age:23, club:'尤文图斯',       rating:92  },
  { id:'p385', name:'帕利尼亚',     nameEn:'João Palhinha',        fifaCode:'POR', position:'MF', age:30, club:'拜仁慕尼黑',     rating:95  },
  { id:'p386', name:'伊纳西奥',     nameEn:'Gonçalo Inácio',       fifaCode:'POR', position:'DF', age:24, club:'葡萄牙体育',     rating:93  },

  // ===== 巴西 BRA (20人) =====
  { id:'p30',  name:'维尼修斯',         nameEn:'Vinícius Jr.',      fifaCode:'BRA', position:'FW', age:25, club:'皇家马德里',   rating:115 },
  { id:'p31',  name:'拉菲尼亚',         nameEn:'Raphinha',           fifaCode:'BRA', position:'FW', age:29, club:'巴塞罗那',     rating:103 },
  { id:'p32',  name:'内马尔',           nameEn:'Neymar Jr.',         fifaCode:'BRA', position:'FW', age:34, club:'桑托斯',       rating:100 },
  { id:'p33',  name:'加布里埃尔',       nameEn:'Gabriel Magalhães',  fifaCode:'BRA', position:'DF', age:28, club:'阿森纳',       rating:101 },
  { id:'p34',  name:'布鲁诺·吉马良斯', nameEn:'Bruno Guimarães',    fifaCode:'BRA', position:'MF', age:28, club:'纽卡斯尔',     rating:97  },
  { id:'p35',  name:'阿利松',           nameEn:'Alisson',            fifaCode:'BRA', position:'GK', age:33, club:'利物浦',       rating:102 },
  { id:'p77',  name:'帕奎塔',           nameEn:'Lucas Paquetá',      fifaCode:'BRA', position:'MF', age:28, club:'西汉姆联',     rating:94  },
  { id:'p78',  name:'恩德里克',         nameEn:'Endrick',            fifaCode:'BRA', position:'FW', age:19, club:'皇家马德里',   rating:95  },
  { id:'p212', name:'卡塞米罗',         nameEn:'Casemiro',           fifaCode:'BRA', position:'MF', age:34, club:'曼联',         rating:97  },
  { id:'p213', name:'埃德森',           nameEn:'Ederson',            fifaCode:'BRA', position:'GK', age:32, club:'曼城',         rating:101 },
  { id:'p387', name:'达尼洛',           nameEn:'Danilo',            fifaCode:'BRA', position:'DF', age:34, club:'尤文图斯',     rating:95  },
  { id:'p388', name:'马丁内利',         nameEn:'Gabriel Martinelli',fifaCode:'BRA',position:'FW', age:24, club:'阿森纳',       rating:95  },
  { id:'p389', name:'马尔基尼奥斯',     nameEn:'Marquinhos',         fifaCode:'BRA', position:'DF', age:32, club:'巴黎圣日耳曼',  rating:97  },
  { id:'p390', name:'马特乌斯·库尼亚', nameEn:'Matheus Cunha',      fifaCode:'BRA', position:'FW', age:27, club:'狼队',         rating:94  },
  { id:'p391', name:'道格拉斯·路易斯', nameEn:'Douglas Luiz',       fifaCode:'BRA', position:'MF', age:28, club:'尤文图斯',     rating:94  },
  { id:'p392', name:'法比尼奥',         nameEn:'Fabinho',            fifaCode:'BRA', position:'MF', age:32, club:'吉达联合',     rating:95  },
  { id:'p393', name:'米利唐',           nameEn:'Éder Militão',       fifaCode:'BRA', position:'DF', age:28, club:'皇家马德里',   rating:97  },
  { id:'p394', name:'布雷默',           nameEn:'Bremer',             fifaCode:'BRA', position:'DF', age:29, club:'尤文图斯',     rating:96  },
  { id:'p395', name:'伊戈尔·蒂亚戈',   nameEn:'Igor Thiago',        fifaCode:'BRA', position:'FW', age:24, club:'布伦特福德',   rating:92  },
  { id:'p396', name:'阿莱士·桑德罗',   nameEn:'Alex Sandro',        fifaCode:'BRA', position:'DF', age:35, club:'弗拉门戈',     rating:93  },

  // ================================================================
  // 欧洲二档强队
  // ================================================================
  // ===== 荷兰 NED (8人) =====
  { id:'p36',  name:'范迪克',     nameEn:'Virgil van Dijk',   fifaCode:'NED', position:'DF', age:34, club:'利物浦',     rating:106 },
  { id:'p37',  name:'加克波',     nameEn:'Cody Gakpo',        fifaCode:'NED', position:'FW', age:27, club:'利物浦',     rating:97  },
  { id:'p38',  name:'德容',       nameEn:'Frenkie de Jong',   fifaCode:'NED', position:'MF', age:29, club:'巴塞罗那',   rating:98  },
  { id:'p105', name:'邓弗里斯',   nameEn:'Denzel Dumfries',  fifaCode:'NED', position:'DF', age:30, club:'国际米兰',   rating:96  },
  { id:'p106', name:'德利赫特',   nameEn:'Matthijs de Ligt', fifaCode:'NED', position:'DF', age:26, club:'曼联',       rating:97  },
  { id:'p214', name:'赖因德斯',   nameEn:'Tijjani Reijnders',fifaCode:'NED', position:'MF', age:27, club:'曼城',       rating:96  },
  { id:'p215', name:'马伦',       nameEn:'Donyell Malen',    fifaCode:'NED', position:'FW', age:27, club:'多特蒙德',   rating:93  },
  { id:'p216', name:'阿克',       nameEn:'Nathan Aké',       fifaCode:'NED', position:'DF', age:31, club:'曼城',       rating:96  },

  // ===== 比利时 BEL (8人) =====
  { id:'p39',  name:'德布劳内',   nameEn:'Kevin De Bruyne',  fifaCode:'BEL', position:'MF', age:34, club:'曼城',           rating:108 },
  { id:'p40',  name:'库尔图瓦',   nameEn:'Thibaut Courtois', fifaCode:'BEL', position:'GK', age:34, club:'皇家马德里',     rating:104 },
  { id:'p41',  name:'多库',       nameEn:'Jérémy Doku',      fifaCode:'BEL', position:'FW', age:24, club:'曼城',           rating:97  },
  { id:'p42',  name:'卢卡库',     nameEn:'Romelu Lukaku',    fifaCode:'BEL', position:'FW', age:33, club:'罗马',           rating:96  },
  { id:'p107', name:'蒂勒曼斯',   nameEn:'Youri Tielemans',  fifaCode:'BEL', position:'MF', age:29, club:'阿斯顿维拉',     rating:94  },
  { id:'p217', name:'德凯特拉雷', nameEn:'Charles De Ketelaere',fifaCode:'BEL',position:'FW', age:25, club:'亚特兰大',   rating:93  },
  { id:'p218', name:'奥纳纳',     nameEn:'Amadou Onana',      fifaCode:'BEL', position:'MF', age:24, club:'阿斯顿维拉',   rating:94  },
  { id:'p219', name:'卡斯塔涅',   nameEn:'Timothy Castagne',   fifaCode:'BEL', position:'DF', age:30, club:'富勒姆',       rating:93  },

  // ===== 德国 GER (8人) =====
  { id:'p43',  name:'哈弗茨',     nameEn:'Kai Havertz',      fifaCode:'GER', position:'FW', age:27, club:'阿森纳',         rating:97  },
  { id:'p44',  name:'格雷茨卡',   nameEn:'Leon Goretzka',    fifaCode:'GER', position:'MF', age:31, club:'拜仁慕尼黑',     rating:95  },
  { id:'p45',  name:'诺伊尔',     nameEn:'Manuel Neuer',     fifaCode:'GER', position:'GK', age:40, club:'拜仁慕尼黑',     rating:99  },
  { id:'p108', name:'吕迪格',     nameEn:'Antonio Rüdiger',  fifaCode:'GER', position:'DF', age:33, club:'皇家马德里',     rating:100 },
  { id:'p109', name:'京多安',     nameEn:'Ilkay Gündoğan',   fifaCode:'GER', position:'MF', age:35, club:'曼城',           rating:96  },
  { id:'p220', name:'基米希',     nameEn:'Joshua Kimmich',   fifaCode:'GER', position:'MF', age:31, club:'拜仁慕尼黑',     rating:98  },
  { id:'p221', name:'萨内',       nameEn:'Leroy Sané',       fifaCode:'GER', position:'FW', age:30, club:'拜仁慕尼黑',     rating:96  },
  { id:'p222', name:'施洛特贝克', nameEn:'Nico Schlotterbeck',fifaCode:'GER',position:'DF', age:26, club:'多特蒙德',      rating:94  },

  // ===== 克罗地亚 CRO (7人) =====
  { id:'p46',  name:'莫德里奇',   nameEn:'Luka Modrić',      fifaCode:'CRO', position:'MF', age:40, club:'皇家马德里',     rating:105 },
  { id:'p47',  name:'格瓦迪奥尔', nameEn:'Joško Gvardiol',   fifaCode:'CRO', position:'DF', age:24, club:'曼城',           rating:103 },
  { id:'p48',  name:'科瓦契奇',   nameEn:'Mateo Kovačić',    fifaCode:'CRO', position:'MF', age:32, club:'曼城',           rating:95  },
  { id:'p110', name:'佩里西奇',   nameEn:'Ivan Perišić',     fifaCode:'CRO', position:'FW', age:37, club:'埃因霍温',       rating:93  },
  { id:'p223', name:'利瓦科维奇', nameEn:'Dominik Livaković',fifaCode:'CRO', position:'GK', age:31, club:'费内巴切',       rating:94  },
  { id:'p224', name:'布罗佐维奇', nameEn:'Marcelo Brozović', fifaCode:'CRO', position:'MF', age:33, club:'利雅得胜利',     rating:94  },
  { id:'p225', name:'斯塔尼希奇', nameEn:'Josip Stanišić',   fifaCode:'CRO', position:'DF', age:26, club:'拜仁慕尼黑',     rating:95  },

  // ================================================================
  // 非洲强队
  // ================================================================
  // ===== 摩洛哥 MAR (7人) =====
  { id:'p49',  name:'阿什拉夫',       nameEn:'Achraf Hakimi',     fifaCode:'MAR', position:'DF', age:27, club:'巴黎圣日耳曼',  rating:100 },
  { id:'p50',  name:'布拉希姆·迪亚斯', nameEn:'Brahim Díaz',      fifaCode:'MAR', position:'MF', age:26, club:'皇家马德里',    rating:96  },
  { id:'p79',  name:'亚辛·布努',       nameEn:'Yassine Bounou',   fifaCode:'MAR', position:'GK', age:35, club:'利雅得新月',    rating:96  },
  { id:'p111', name:'阿姆拉巴特',      nameEn:'Sofyan Amrabat',   fifaCode:'MAR', position:'MF', age:29, club:'曼联',          rating:93  },
  { id:'p112', name:'恩内西里',        nameEn:'Youssef En-Nesyri',fifaCode:'MAR', position:'FW', age:29, club:'塞维利亚',     rating:94  },
  { id:'p226', name:'齐耶赫',          nameEn:'Hakim Ziyech',     fifaCode:'MAR', position:'FW', age:33, club:'加拉塔萨雷',    rating:95  },
  { id:'p227', name:'马兹拉维',        nameEn:'Noussair Mazraoui', fifaCode:'MAR', position:'DF', age:28, club:'曼联',        rating:95  },

  // ===== 塞内加尔 SEN (7人) =====
  { id:'p113', name:'萨迪奥·马内',   nameEn:'Sadio Mané',        fifaCode:'SEN', position:'FW', age:34, club:'利雅得胜利',    rating:98  },
  { id:'p114', name:'库利巴利',       nameEn:'Kalidou Koulibaly', fifaCode:'SEN', position:'DF', age:35, club:'利雅得新月',    rating:95  },
  { id:'p115', name:'尼古拉·杰克逊',  nameEn:'Nicolas Jackson',   fifaCode:'SEN', position:'FW', age:25, club:'切尔西',        rating:96  },
  { id:'p116', name:'爱德华·门迪',    nameEn:'Édouard Mendy',     fifaCode:'SEN', position:'GK', age:34, club:'吉达国民',      rating:94  },
  { id:'p228', name:'伊斯梅拉·萨尔',  nameEn:'Ismaïla Sarr',      fifaCode:'SEN', position:'FW', age:28, club:'马赛',          rating:93  },
  { id:'p229', name:'拉明·卡马拉',    nameEn:'Lamine Camara',     fifaCode:'SEN', position:'MF', age:22, club:'摩纳哥',        rating:92  },
  { id:'p230', name:'阿卜杜·迪亚洛',  nameEn:'Abdou Diallo',      fifaCode:'SEN', position:'DF', age:30, club:'多哈阿拉伯人',   rating:92  },

  // ================================================================
  // 其他强队
  // ================================================================
  // ===== 挪威 NOR (6人) =====
  { id:'p51',  name:'哈兰德',   nameEn:'Erling Haaland',   fifaCode:'NOR', position:'FW', age:25, club:'曼城',       rating:119 },
  { id:'p52',  name:'厄德高',   nameEn:'Martin Ødegaard',  fifaCode:'NOR', position:'MF', age:27, club:'阿森纳',     rating:102 },
  { id:'p117', name:'索尔洛特', nameEn:'Alexander Sørloth',fifaCode:'NOR', position:'FW', age:30, club:'马德里竞技', rating:94  },
  { id:'p231', name:'伯格',     nameEn:'Sander Berge',     fifaCode:'NOR', position:'MF', age:28, club:'富勒姆',     rating:91  },
  { id:'p232', name:'厄斯蒂高', nameEn:'Leo Østigård',    fifaCode:'NOR', position:'DF', age:26, club:'雷恩',       rating:90  },
  { id:'p233', name:'尼兰',     nameEn:'Ørjan Nyland',    fifaCode:'NOR', position:'GK', age:35, club:'塞维利亚',   rating:89  },

  // ===== 哥伦比亚 COL (7人) =====
  { id:'p53',  name:'路易斯·迪亚斯',    nameEn:'Luis Díaz',        fifaCode:'COL', position:'FW', age:29, club:'拜仁慕尼黑',   rating:103 },
  { id:'p54',  name:'哈梅斯·罗德里格斯',nameEn:'James Rodríguez',   fifaCode:'COL', position:'MF', age:35, club:'圣保罗',       rating:95  },
  { id:'p118', name:'杜兰',             nameEn:'Jhon Durán',       fifaCode:'COL', position:'FW', age:22, club:'利雅得胜利',   rating:93  },
  { id:'p119', name:'桑切斯',           nameEn:'Davinson Sánchez',  fifaCode:'COL', position:'DF', age:30, club:'加拉塔萨雷',   rating:92  },
  { id:'p234', name:'米纳',            nameEn:'Yerry Mina',        fifaCode:'COL', position:'DF', age:31, club:'卡利亚里',     rating:92  },
  { id:'p235', name:'乌里韦',          nameEn:'Mateus Uribe',      fifaCode:'COL', position:'MF', age:35, club:'萨德',         rating:90  },
  { id:'p236', name:'博雷',            nameEn:'Rafael Borré',      fifaCode:'COL', position:'FW', age:30, club:'巴西国际',     rating:91  },

  // ===== 乌拉圭 URU (7人) =====
  { id:'p60',  name:'巴尔韦德',   nameEn:'Federico Valverde', fifaCode:'URU', position:'MF', age:27, club:'皇家马德里',  rating:106 },
  { id:'p61',  name:'努涅斯',     nameEn:'Darwin Núñez',      fifaCode:'URU', position:'FW', age:26, club:'利物浦',      rating:98  },
  { id:'p165', name:'阿劳霍',     nameEn:'Ronald Araújo',     fifaCode:'URU', position:'DF', age:27, club:'巴塞罗那',    rating:100 },
  { id:'p166', name:'乌加特',     nameEn:'Manuel Ugarte',     fifaCode:'URU', position:'MF', age:25, club:'曼联',        rating:95  },
  { id:'p237', name:'本坦库尔',   nameEn:'Rodrigo Bentancur', fifaCode:'URU', position:'MF', age:29, club:'热刺',      rating:94  },
  { id:'p238', name:'罗切特',     nameEn:'Sergio Rochet',     fifaCode:'URU', position:'GK', age:33, club:'巴西国际',   rating:93  },
  { id:'p239', name:'佩利斯特里', nameEn:'Facundo Pellistri', fifaCode:'URU', position:'FW', age:24, club:'格拉纳达',   rating:92  },

  // ===== 瑞士 SUI (6人) =====
  { id:'p130', name:'扎卡',         nameEn:'Granit Xhaka',      fifaCode:'SUI', position:'MF', age:33, club:'勒沃库森',    rating:98  },
  { id:'p131', name:'阿坎吉',       nameEn:'Manuel Akanji',     fifaCode:'SUI', position:'DF', age:30, club:'曼城',        rating:99  },
  { id:'p132', name:'恩博洛',       nameEn:'Breel Embolo',      fifaCode:'SUI', position:'FW', age:29, club:'摩纳哥',      rating:95  },
  { id:'p133', name:'索默',         nameEn:'Yann Sommer',       fifaCode:'SUI', position:'GK', age:37, club:'国际米兰',    rating:96  },
  { id:'p240', name:'巴尔加斯',     nameEn:'Ruben Vargas',      fifaCode:'SUI', position:'FW', age:27, club:'塞维利亚',    rating:93  },
  { id:'p241', name:'沙尔',         nameEn:'Fabian Schär',      fifaCode:'SUI', position:'DF', age:34, club:'纽卡斯尔',    rating:94  },

  // ===== 土耳其 TUR (6人) =====
  { id:'p134', name:'阿尔达·居莱尔', nameEn:'Arda Güler',        fifaCode:'TUR', position:'MF', age:21, club:'皇家马德里',   rating:98 },
  { id:'p135', name:'恰尔汗奥卢',     nameEn:'Hakan Çalhanoğlu',  fifaCode:'TUR', position:'MF', age:32, club:'国际米兰',     rating:96 },
  { id:'p136', name:'伊尔迪兹',       nameEn:'Kenan Yıldız',      fifaCode:'TUR', position:'FW', age:21, club:'尤文图斯',     rating:95 },
  { id:'p137', name:'伊尔马兹',       nameEn:'Barış Yılmaz',      fifaCode:'TUR', position:'FW', age:26, club:'加拉塔萨雷',    rating:93 },
  { id:'p242', name:'德米拉尔',       nameEn:'Merih Demiral',     fifaCode:'TUR', position:'DF', age:28, club:'吉达国民',     rating:93 },
  { id:'p243', name:'巴因迪尔',       nameEn:'Altay Bayındır',    fifaCode:'TUR', position:'GK', age:28, club:'曼联',         rating:92 },

  // ===== 奥地利 AUT (6人) =====
  { id:'p70',  name:'阿瑙托维奇',     nameEn:'Marko Arnautović',  fifaCode:'AUT', position:'FW', age:37, club:'国际米兰',     rating:93  },
  { id:'p71',  name:'阿拉巴',         nameEn:'David Alaba',       fifaCode:'AUT', position:'DF', age:33, club:'皇家马德里',   rating:97  },
  { id:'p138', name:'萨比策',         nameEn:'Marcel Sabitzer',   fifaCode:'AUT', position:'MF', age:32, club:'多特蒙德',     rating:95  },
  { id:'p139', name:'鲍姆加特纳',     nameEn:'Christoph Baumgartner',fifaCode:'AUT',position:'MF', age:26, club:'莱比锡',   rating:94  },
  { id:'p244', name:'莱默',           nameEn:'Konrad Laimer',     fifaCode:'AUT', position:'MF', age:29, club:'拜仁慕尼黑',   rating:94  },
  { id:'p245', name:'彭茨',           nameEn:'Patrick Pentz',     fifaCode:'AUT', position:'GK', age:29, club:'布隆德比',     rating:91  },

  // ===== 瑞典 SWE (6人) =====
  { id:'p69',  name:'维克托·哲凯赖什', nameEn:'Viktor Gyökeres',  fifaCode:'SWE', position:'FW', age:28, club:'葡萄牙体育',   rating:103 },
  { id:'p140', name:'伊萨克',          nameEn:'Alexander Isak',    fifaCode:'SWE', position:'FW', age:26, club:'纽卡斯尔',     rating:102 },
  { id:'p141', name:'库卢塞夫斯基',    nameEn:'Dejan Kulusevski',  fifaCode:'SWE', position:'FW', age:26, club:'热刺',         rating:96  },
  { id:'p246', name:'林德洛夫',        nameEn:'Victor Lindelöf',   fifaCode:'SWE', position:'DF', age:31, club:'曼联',         rating:92  },
  { id:'p247', name:'艾兰加',          nameEn:'Anthony Elanga',    fifaCode:'SWE', position:'FW', age:24, club:'诺丁汉森林',   rating:93  },
  { id:'p248', name:'奥尔森',          nameEn:'Robin Olsen',       fifaCode:'SWE', position:'GK', age:36, club:'阿斯顿维拉',   rating:90  },

  // ===== 捷克 CZE (5人) =====
  { id:'p142', name:'希克',        nameEn:'Patrik Schick',    fifaCode:'CZE', position:'FW', age:30, club:'勒沃库森',   rating:97 },
  { id:'p143', name:'绍切克',      nameEn:'Tomáš Souček',    fifaCode:'CZE', position:'MF', age:31, club:'西汉姆联',   rating:95 },
  { id:'p144', name:'赫洛热克',    nameEn:'Adam Hložek',     fifaCode:'CZE', position:'FW', age:23, club:'勒沃库森',   rating:94 },
  { id:'p249', name:'科瓦日',      nameEn:'Matej Kovar',     fifaCode:'CZE', position:'GK', age:26, club:'埃因霍温',   rating:91 },
  { id:'p250', name:'克雷伊奇',    nameEn:'Ladislav Krejčí',  fifaCode:'CZE', position:'DF', age:27, club:'赫罗纳',    rating:90 },

  // ===== 苏格兰 SCO (5人) =====
  { id:'p145', name:'麦克托米奈',  nameEn:'Scott McTominay', fifaCode:'SCO', position:'MF', age:29, club:'那不勒斯',     rating:96 },
  { id:'p146', name:'罗伯逊',      nameEn:'Andy Robertson',  fifaCode:'SCO', position:'DF', age:32, club:'利物浦',       rating:96 },
  { id:'p147', name:'麦金',        nameEn:'John McGinn',     fifaCode:'SCO', position:'MF', age:31, club:'阿斯顿维拉',   rating:94 },
  { id:'p251', name:'希基',        nameEn:'Aaron Hickey',    fifaCode:'SCO', position:'DF', age:24, club:'布伦特福德',   rating:92 },
  { id:'p252', name:'亚当斯',      nameEn:'Ché Adams',       fifaCode:'SCO', position:'FW', age:29, club:'都灵',         rating:91 },

  // ===== 波黑 BIH (5人) =====
  { id:'p148', name:'哲科',            nameEn:'Edin Džeko',        fifaCode:'BIH', position:'FW', age:40, club:'费内巴切',    rating:95 },
  { id:'p149', name:'科拉希纳茨',      nameEn:'Sead Kolašinac',    fifaCode:'BIH', position:'DF', age:33, club:'亚特兰大',    rating:93 },
  { id:'p150', name:'塔希罗维奇',      nameEn:'Benjamin Tahirović',fifaCode:'BIH', position:'MF', age:23, club:'阿贾克斯',   rating:92 },
  { id:'p253', name:'皮亚尼奇',        nameEn:'Miralem Pjanić',   fifaCode:'BIH', position:'MF', age:36, club:'沙迦',        rating:94 },
  { id:'p254', name:'德米罗维奇',      nameEn:'Ermedin Demirović', fifaCode:'BIH', position:'FW', age:28, club:'奥格斯堡',   rating:91 },

  // ================================================================
  // 亚洲强队
  // ================================================================
  // ===== 韩国 KOR (7人) =====
  { id:'p55',  name:'孙兴慜',   nameEn:'Son Heung-min',  fifaCode:'KOR', position:'FW', age:34, club:'洛杉矶FC',       rating:108 },
  { id:'p56',  name:'李刚仁',   nameEn:'Lee Kang-in',   fifaCode:'KOR', position:'MF', age:25, club:'巴黎圣日耳曼',   rating:98  },
  { id:'p57',  name:'金玟哉',   nameEn:'Kim Min-jae',   fifaCode:'KOR', position:'DF', age:29, club:'拜仁慕尼黑',     rating:100 },
  { id:'p126', name:'黄喜灿',   nameEn:'Hwang Hee-chan', fifaCode:'KOR', position:'FW', age:30, club:'狼队',          rating:95  },
  { id:'p255', name:'李在成',   nameEn:'Lee Jae-sung',  fifaCode:'KOR', position:'MF', age:33, club:'美因茨',         rating:92  },
  { id:'p256', name:'曹圭成',   nameEn:'Cho Gue-sung',  fifaCode:'KOR', position:'FW', age:28, club:'中日德兰',       rating:91  },
  { id:'p257', name:'金承奎',   nameEn:'Kim Seung-gyu', fifaCode:'KOR', position:'GK', age:35, club:'FC东京',         rating:90  },

  // ===== 日本 JPN (7人) =====
  { id:'p58',  name:'久保建英', nameEn:'Takefusa Kubo', fifaCode:'JPN', position:'FW', age:25, club:'皇家社会',       rating:97 },
  { id:'p59',  name:'远藤航',   nameEn:'Wataru Endo',   fifaCode:'JPN', position:'MF', age:33, club:'利物浦',         rating:94 },
  { id:'p127', name:'三笘薰',   nameEn:'Kaoru Mitoma',  fifaCode:'JPN', position:'FW', age:29, club:'布莱顿',         rating:97 },
  { id:'p128', name:'镰田大地', nameEn:'Daichi Kamada', fifaCode:'JPN', position:'MF', age:29, club:'水晶宫',         rating:93 },
  { id:'p129', name:'富安健洋', nameEn:'Takehiro Tomiyasu',fifaCode:'JPN',position:'DF', age:27, club:'阿森纳',     rating:95 },
  { id:'p258', name:'堂安律',   nameEn:'Ritsu Doan',    fifaCode:'JPN', position:'FW', age:28, club:'弗赖堡',         rating:94 },
  { id:'p259', name:'守田英正', nameEn:'Hidemasa Morita',fifaCode:'JPN',position:'MF', age:31, club:'葡萄牙体育',    rating:93 },

  // ===== 伊朗 IRN (6人) =====
  { id:'p174', name:'塔雷米',   nameEn:'Mehdi Taremi',     fifaCode:'IRN', position:'FW', age:33, club:'国际米兰',    rating:96 },
  { id:'p175', name:'阿兹蒙',   nameEn:'Sardar Azmoun',    fifaCode:'IRN', position:'FW', age:31, club:'勒沃库森',    rating:94 },
  { id:'p176', name:'贾汉巴赫什',nameEn:'Alireza Jahanbakhsh',fifaCode:'IRN',position:'FW', age:32, club:'费耶诺德', rating:90 },
  { id:'p260', name:'卡纳尼',   nameEn:'Hossein Kanaanizadegan',fifaCode:'IRN',position:'DF', age:32, club:'波斯波利斯', rating:88 },
  { id:'p261', name:'贝兰万德', nameEn:'Alireza Beiranvand',fifaCode:'IRN',position:'GK', age:33, club:'皇家安特卫普', rating:89 },
  { id:'p262', name:'埃扎托拉希',nameEn:'Saeid Ezatolahi', fifaCode:'IRN', position:'MF', age:29, club:'迪拜青年国民', rating:88 },

  // ===== 澳大利亚 AUS (5人) =====
  { id:'p171', name:'苏塔尔',       nameEn:'Harry Souttar',      fifaCode:'AUS', position:'DF', age:27, club:'莱斯特城',  rating:91 },
  { id:'p172', name:'马修·瑞安',   nameEn:'Mathew Ryan',         fifaCode:'AUS', position:'GK', age:34, club:'罗马',      rating:90 },
  { id:'p173', name:'伊兰昆达',     nameEn:'Nestory Irankunda',  fifaCode:'AUS', position:'FW', age:20, club:'拜仁慕尼黑', rating:93 },
  { id:'p263', name:'杰克逊·欧文',  nameEn:'Jackson Irvine',      fifaCode:'AUS', position:'MF', age:33, club:'圣保利',    rating:89 },
  { id:'p264', name:'赫鲁斯蒂奇',   nameEn:'Ajdin Hrustic',      fifaCode:'AUS', position:'MF', age:29, club:'维罗纳',    rating:88 },

  // ================================================================
  // 北美洲 / 东道主
  // ================================================================
  // ===== 美国 USA (7人) =====
  { id:'p63',  name:'普利西奇',   nameEn:'Christian Pulisic', fifaCode:'USA', position:'FW', age:27, club:'AC米兰',    rating:99 },
  { id:'p64',  name:'麦肯尼',     nameEn:'Weston McKennie',   fifaCode:'USA', position:'MF', age:27, club:'尤文图斯',   rating:93 },
  { id:'p120', name:'雷纳',       nameEn:'Gio Reyna',         fifaCode:'USA', position:'MF', age:23, club:'多特蒙德',   rating:94 },
  { id:'p121', name:'巴洛贡',     nameEn:'Folarin Balogun',   fifaCode:'USA', position:'FW', age:25, club:'摩纳哥',     rating:93 },
  { id:'p265', name:'特纳',       nameEn:'Matt Turner',       fifaCode:'USA', position:'GK', age:31, club:'诺丁汉森林', rating:90 },
  { id:'p266', name:'亚当斯',     nameEn:'Tyler Adams',       fifaCode:'USA', position:'MF', age:27, club:'伯恩茅斯',   rating:92 },
  { id:'p267', name:'维阿',       nameEn:'Tim Weah',          fifaCode:'USA', position:'FW', age:26, club:'尤文图斯',   rating:93 },

  // ===== 墨西哥 MEX (7人) =====
  { id:'p74',  name:'桑地亚戈·希门尼斯', nameEn:'Santiago Giménez',  fifaCode:'MEX', position:'FW', age:25, club:'AC米兰',     rating:97  },
  { id:'p122', name:'劳尔·希门尼斯',    nameEn:'Raúl Jiménez',       fifaCode:'MEX', position:'FW', age:35, club:'富勒姆',      rating:94  },
  { id:'p123', name:'埃德森·阿尔瓦雷斯', nameEn:'Edson Álvarez',     fifaCode:'MEX', position:'MF', age:28, club:'西汉姆联',    rating:95  },
  { id:'p124', name:'奥乔亚',            nameEn:'Guillermo Ochoa',   fifaCode:'MEX', position:'GK', age:40, club:'利马索尔AEL', rating:93  },
  { id:'p268', name:'洛萨诺',         nameEn:'Hirving Lozano',    fifaCode:'MEX', position:'FW', age:30, club:'埃因霍温',    rating:93  },
  { id:'p269', name:'蒙特斯',         nameEn:'Cesar Montes',      fifaCode:'MEX', position:'DF', age:29, club:'莫斯科火车头', rating:91  },
  { id:'p270', name:'皮内达',         nameEn:'Orbelín Pineda',    fifaCode:'MEX', position:'MF', age:30, club:'雅典AEK',     rating:91  },

  // ===== 加拿大 CAN (6人) =====
  { id:'p65',  name:'阿方索·戴维斯', nameEn:'Alphonso Davies', fifaCode:'CAN', position:'DF', age:25, club:'拜仁慕尼黑',  rating:103 },
  { id:'p66',  name:'乔纳森·戴维',   nameEn:'Jonathan David',  fifaCode:'CAN', position:'FW', age:26, club:'里尔',        rating:98  },
  { id:'p125', name:'拉林',           nameEn:'Cyle Larin',      fifaCode:'CAN', position:'FW', age:31, club:'马洛卡',      rating:91  },
  { id:'p271', name:'布坎南',         nameEn:'Tajon Buchanan',  fifaCode:'CAN', position:'FW', age:27, club:'国际米兰',     rating:92  },
  { id:'p272', name:'尤斯塔基奥',     nameEn:'Stephen Eustáquio',fifaCode:'CAN',position:'MF', age:29, club:'波尔图',     rating:91  },
  { id:'p273', name:'博扬',           nameEn:'Milan Borjan',    fifaCode:'CAN', position:'GK', age:38, club:'贝尔格莱德红星', rating:88 },

  // ================================================================
  // 非洲中游
  // ================================================================
  // ===== 埃及 EGY (6人) =====
  { id:'p67',  name:'萨拉赫',    nameEn:'Mohamed Salah',    fifaCode:'EGY', position:'FW', age:33, club:'利物浦',     rating:110 },
  { id:'p151', name:'马尔穆什',  nameEn:'Omar Marmoush',    fifaCode:'EGY', position:'FW', age:27, club:'曼城',       rating:97  },
  { id:'p152', name:'赫加齐',    nameEn:'Ahmed Hegazi',     fifaCode:'EGY', position:'DF', age:35, club:'吉达联合',   rating:90  },
  { id:'p274', name:'埃尔内尼',  nameEn:'Mohamed Elneny',   fifaCode:'EGY', position:'MF', age:33, club:'加拉塔萨雷', rating:88  },
  { id:'p275', name:'特雷泽盖',  nameEn:'Trezeguet',        fifaCode:'EGY', position:'FW', age:31, club:'特拉布宗体育', rating:89 },
  { id:'p276', name:'埃尔谢纳维', nameEn:'Mohamed El Shenawy', fifaCode:'EGY', position:'GK', age:37, club:'开罗国民', rating:90 },

  // ===== 阿尔及利亚 ALG (6人) =====
  { id:'p68',  name:'马赫雷斯',          nameEn:'Riyad Mahrez',      fifaCode:'ALG', position:'FW', age:35, club:'吉达国民',     rating:96 },
  { id:'p75',  name:'拉扬·艾特·努里',    nameEn:'Rayan Aït-Nouri',    fifaCode:'ALG', position:'DF', age:25, club:'狼队',        rating:94 },
  { id:'p153', name:'阿明·古伊里',       nameEn:'Amine Gouiri',       fifaCode:'ALG', position:'FW', age:26, club:'雷恩',        rating:93 },
  { id:'p277', name:'本纳赛尔',          nameEn:'Ismaël Bennacer',    fifaCode:'ALG', position:'MF', age:28, club:'AC米兰',       rating:93 },
  { id:'p278', name:'本塞拜尼',          nameEn:'Ramy Bensebaini',    fifaCode:'ALG', position:'DF', age:31, club:'多特蒙德',     rating:92 },
  { id:'p279', name:'奥亚尔',            nameEn:'Houssem Aouar',      fifaCode:'ALG', position:'MF', age:27, club:'吉达联合',     rating:91 },

  // ===== 科特迪瓦 CIV (6人) =====
  { id:'p80',  name:'阿马德·迪亚洛',  nameEn:'Amad Diallo',       fifaCode:'CIV', position:'FW', age:23, club:'曼联',     rating:95 },
  { id:'p156', name:'多塞纳',          nameEn:'Simon Adingra',     fifaCode:'CIV', position:'FW', age:24, club:'布莱顿',   rating:94 },
  { id:'p157', name:'福法纳',          nameEn:'Seko Fofana',       fifaCode:'CIV', position:'MF', age:31, club:'利雅得胜利', rating:92 },
  { id:'p280', name:'尼古拉·佩佩',    nameEn:'Nicolas Pépé',      fifaCode:'CIV', position:'FW', age:31, club:'比利亚雷亚尔', rating:92 },
  { id:'p281', name:'凯西',             nameEn:'Franck Kessié',     fifaCode:'CIV', position:'MF', age:29, club:'吉达国民',   rating:91 },
  { id:'p282', name:'恩迪卡',           nameEn:'Evan Ndicka',       fifaCode:'CIV', position:'DF', age:26, club:'罗马',       rating:93 },

  // ===== 加纳 GHA (6人) =====
  { id:'p158', name:'托马斯·帕尔特伊', nameEn:'Thomas Partey',  fifaCode:'GHA', position:'MF', age:33, club:'阿森纳',        rating:96 },
  { id:'p159', name:'库杜斯',          nameEn:'Mohammed Kudus', fifaCode:'GHA', position:'FW', age:25, club:'西汉姆联',      rating:97 },
  { id:'p160', name:'乔丹·阿尤',       nameEn:'Jordan Ayew',    fifaCode:'GHA', position:'FW', age:34, club:'莱斯特城',      rating:90 },
  { id:'p283', name:'兰普泰',          nameEn:'Tariq Lamptey',  fifaCode:'GHA', position:'DF', age:25, club:'布莱顿',        rating:92 },
  { id:'p284', name:'萨利苏',          nameEn:'Mohammed Salisu', fifaCode:'GHA', position:'DF', age:27, club:'摩纳哥',       rating:91 },
  { id:'p285', name:'塞梅尼奥',        nameEn:'Antoine Semenyo', fifaCode:'GHA', position:'FW', age:26, club:'曼城',         rating:94 },

  // ===== 突尼斯 TUN (5人) =====
  { id:'p154', name:'斯希里',      nameEn:'Ellyes Skhiri',    fifaCode:'TUN', position:'MF', age:31, club:'法兰克福',  rating:93 },
  { id:'p155', name:'瓦赫迪·凯赫里达',nameEn:'Wahbi Khazri', fifaCode:'TUN', position:'FW', age:35, club:'蒙彼利埃', rating:90 },
  { id:'p286', name:'姆萨克尼',    nameEn:'Youssef Msakni',   fifaCode:'TUN', position:'FW', age:35, club:'多哈阿拉伯人', rating:89 },
  { id:'p287', name:'莱杜尼',      nameEn:'Aïssa Laïdouni',   fifaCode:'TUN', position:'MF', age:29, club:'柏林联合', rating:88 },
  { id:'p288', name:'塔尔比',      nameEn:'Montassar Talbi',  fifaCode:'TUN', position:'DF', age:28, club:'洛里昂',    rating:88 },

  // ===== 南非 RSA (5人) =====
  { id:'p161', name:'莱尔·福斯特',   nameEn:'Lyle Foster',       fifaCode:'RSA', position:'FW', age:25, club:'伯恩利',   rating:90 },
  { id:'p162', name:'罗恩文·威廉姆斯',nameEn:'Ronwen Williams',  fifaCode:'RSA', position:'GK', age:34, club:'马姆洛迪日落', rating:88 },
  { id:'p289', name:'莫科埃纳',    nameEn:'Teboho Mokoena',   fifaCode:'RSA', position:'MF', age:29, club:'马姆洛迪日落', rating:86 },
  { id:'p290', name:'马戈帕',      nameEn:'Evidence Makgopa',  fifaCode:'RSA', position:'FW', age:26, club:'奥兰多海盗',  rating:85 },
  { id:'p291', name:'莫迪巴',      nameEn:'Aubrey Modiba',     fifaCode:'RSA', position:'DF', age:30, club:'马姆洛迪日落', rating:85 },

  // ===== 刚果民主共和国 COD (5人) =====
  { id:'p163', name:'姆本巴',      nameEn:'Chancel Mbemba',   fifaCode:'COD', position:'DF', age:31, club:'马赛',        rating:92 },
  { id:'p164', name:'巴坎布',      nameEn:'Cédric Bakambu',   fifaCode:'COD', position:'FW', age:35, club:'皇家贝蒂斯',  rating:90 },
  { id:'p292', name:'维萨',        nameEn:'Yoane Wissa',      fifaCode:'COD', position:'FW', age:29, club:'布伦特福德',   rating:91 },
  { id:'p293', name:'姆武布',      nameEn:'Samuel Moutoussamy',fifaCode:'COD',position:'MF', age:29, club:'南特',        rating:87 },
  { id:'p294', name:'马苏苏亚',    nameEn:'Arthur Masuaku',   fifaCode:'COD', position:'DF', age:32, club:'贝西克塔斯',   rating:87 },

  // ================================================================
  // 美洲中下游
  // ================================================================
  // ===== 厄瓜多尔 ECU (5人) =====
  { id:'p81',  name:'莫伊塞斯·凯塞多',  nameEn:'Moisés Caicedo', fifaCode:'ECU', position:'MF', age:24, club:'切尔西',     rating:97 },
  { id:'p167', name:'皮耶罗·因卡皮耶',  nameEn:'Piero Hincapié',  fifaCode:'ECU', position:'DF', age:24, club:'勒沃库森',   rating:96 },
  { id:'p168', name:'恩纳尔·瓦伦西亚',  nameEn:'Enner Valencia',  fifaCode:'ECU', position:'FW', age:36, club:'巴西国际',   rating:90 },
  { id:'p295', name:'帕乔',             nameEn:'Willian Pacho',    fifaCode:'ECU', position:'DF', age:24, club:'巴黎圣日耳曼', rating:94 },
  { id:'p296', name:'萨米恩托',         nameEn:'Jeremy Sarmiento', fifaCode:'ECU', position:'FW', age:24, club:'伯恩利',     rating:90 },

  // ===== 巴拉圭 PAR (5人) =====
  { id:'p169', name:'阿尔米隆',   nameEn:'Miguel Almirón',   fifaCode:'PAR', position:'FW', age:32, club:'纽卡斯尔',    rating:94 },
  { id:'p170', name:'恩西索',     nameEn:'Julio Enciso',     fifaCode:'PAR', position:'FW', age:22, club:'布莱顿',      rating:93 },
  { id:'p297', name:'戈麦斯',     nameEn:'Diego Gómez',      fifaCode:'PAR', position:'MF', age:23, club:'迈阿密国际',  rating:90 },
  { id:'p298', name:'阿尔德雷特', nameEn:'Omar Alderete',    fifaCode:'PAR', position:'DF', age:29, club:'赫塔费',      rating:89 },
  { id:'p299', name:'桑切斯',     nameEn:'Antonio Sanabria', fifaCode:'PAR', position:'FW', age:30, club:'都灵',        rating:90 },

  // ===== 巴拿马 PAN (5人) =====
  { id:'p187', name:'何塞·罗德里格斯', nameEn:'José Luis Rodríguez', fifaCode:'PAN', position:'FW', age:28, club:'巴列卡诺',   rating:87 },
  { id:'p188', name:'阿达尔贝托·卡拉斯奎拉', nameEn:'Adalberto Carrasquilla', fifaCode:'PAN', position:'MF', age:27, club:'休斯顿迪纳摩', rating:88 },
  { id:'p300', name:'沃特曼',   nameEn:'Cecilio Waterman',  fifaCode:'PAN', position:'FW', age:32, club:'科布雷萨尔',  rating:86 },
  { id:'p301', name:'埃斯科瓦尔',nameEn:'Fidel Escobar',    fifaCode:'PAN', position:'DF', age:31, club:'萨普里萨',    rating:85 },
  { id:'p302', name:'梅希亚',   nameEn:'Luis Mejía',       fifaCode:'PAN', position:'GK', age:35, club:'民族队',      rating:85 },

  // ================================================================
  // 亚洲中下游
  // ================================================================
  // ===== 沙特阿拉伯 KSA (5人) =====
  { id:'p179', name:'萨勒姆·达瓦萨里',  nameEn:'Salem Al-Dawsari', fifaCode:'KSA', position:'FW', age:34, club:'利雅得新月',   rating:91 },
  { id:'p180', name:'阿卜杜勒哈米德',    nameEn:'Saud Abdulhamid',  fifaCode:'KSA', position:'DF', age:26, club:'罗马',         rating:90 },
  { id:'p303', name:'阿尔比拉坎',      nameEn:'Firas Al-Buraikan', fifaCode:'KSA', position:'FW', age:26, club:'吉达国民',     rating:87 },
  { id:'p304', name:'阿尔奥韦斯',      nameEn:'Mohammed Al-Owais', fifaCode:'KSA', position:'GK', age:34, club:'利雅得新月',   rating:87 },
  { id:'p305', name:'阿尔坦巴克蒂',    nameEn:'Hassan Al-Tambakti',fifaCode:'KSA',position:'DF', age:27, club:'利雅得新月',   rating:88 },

  // ===== 卡塔尔 QAT (5人) =====
  { id:'p183', name:'阿克拉姆·阿菲夫', nameEn:'Akram Afif',     fifaCode:'QAT', position:'FW', age:29, club:'萨德',       rating:90 },
  { id:'p184', name:'阿尔莫伊兹·阿里', nameEn:'Almoez Ali',     fifaCode:'QAT', position:'FW', age:29, club:'杜海勒',     rating:89 },
  { id:'p306', name:'海多斯',          nameEn:'Hassan Al-Haydos',fifaCode:'QAT', position:'MF', age:35, club:'萨德',       rating:87 },
  { id:'p307', name:'巴沙姆',          nameEn:'Meshaal Barsham', fifaCode:'QAT', position:'GK', age:28, club:'萨德',       rating:86 },
  { id:'p308', name:'瓦伊德',          nameEn:'Mohammed Waad',   fifaCode:'QAT', position:'MF', age:26, club:'萨德',       rating:85 },

  // ===== 乌兹别克斯坦 UZB (5人) =====
  { id:'p185', name:'肖穆罗多夫',   nameEn:'Eldor Shomurodov',  fifaCode:'UZB', position:'FW', age:30, club:'罗马',        rating:90 },
  { id:'p186', name:'法伊祖拉耶夫', nameEn:'Abbosbek Fayzullaev',fifaCode:'UZB',position:'MF', age:22, club:'莫斯科中央陆军', rating:91 },
  { id:'p309', name:'乌鲁诺夫',     nameEn:'Oston Urunov',      fifaCode:'UZB', position:'FW', age:25, club:'波斯波利斯',   rating:86 },
  { id:'p310', name:'马沙里波夫',   nameEn:'Jaloliddin Masharipov',fifaCode:'UZB',position:'MF', age:32, club:'德黑兰独立',  rating:86 },
  { id:'p311', name:'尤苏波夫',     nameEn:'Utkir Yusupov',     fifaCode:'UZB', position:'GK', age:35, club:'纳弗巴霍',     rating:85 },

  // ===== 伊拉克 IRQ (5人) =====
  { id:'p177', name:'阿里·贾西姆',  nameEn:'Ali Jasim',      fifaCode:'IRQ', position:'FW', age:22, club:'科莫',     rating:88 },
  { id:'p178', name:'侯赛因·阿里',  nameEn:'Hussein Ali',    fifaCode:'IRQ', position:'FW', age:28, club:'海伦芬',   rating:87 },
  { id:'p312', name:'拉桑',         nameEn:'Bashar Rasan',    fifaCode:'IRQ', position:'MF', age:29, club:'多哈阿拉伯人', rating:85 },
  { id:'p313', name:'纳迪克',       nameEn:'Saad Natiq',      fifaCode:'IRQ', position:'DF', age:34, club:'巴格达空军', rating:84 },
  { id:'p314', name:'哈桑',         nameEn:'Jalal Hassan',    fifaCode:'IRQ', position:'GK', age:35, club:'阿尔扎瓦拉', rating:84 },

  // ===== 约旦 JOR (5人) =====
  { id:'p181', name:'穆萨·塔马里',   nameEn:'Musa Al-Taamari', fifaCode:'JOR', position:'FW', age:29, club:'蒙彼利埃',     rating:89 },
  { id:'p182', name:'亚赞·奈马特',   nameEn:'Yazan Al-Naimat', fifaCode:'JOR', position:'FW', age:27, club:'多哈阿拉伯人', rating:88 },
  { id:'p315', name:'拉瓦比德',      nameEn:'Nizar Al-Rashdan',fifaCode:'JOR', position:'MF', age:27, club:'伊拉克警察',   rating:84 },
  { id:'p316', name:'阿布哈夏什',    nameEn:'Yazid Abu Laila',  fifaCode:'JOR', position:'GK', age:33, club:'费萨里',       rating:83 },
  { id:'p317', name:'阿拉布',        nameEn:'Yousef Al-Arab',    fifaCode:'JOR', position:'DF', age:30, club:'阿尔侯赛因',   rating:83 },

  // ================================================================
  // 美洲小国 / 大洋洲 / 非洲小国
  // ================================================================
  // ===== 库拉索 CUW (5人) =====
  { id:'p189', name:'塔希斯·钟',   nameEn:'Tahith Chong',       fifaCode:'CUW', position:'FW', age:26, club:'谢菲尔德联', rating:87 },
  { id:'p190', name:'巴库纳',       nameEn:'Leandro Bacuna',    fifaCode:'CUW', position:'MF', age:34, club:'格罗宁根',   rating:86 },
  { id:'p318', name:'安东内',       nameEn:'Juninho Bacuna',    fifaCode:'CUW', position:'MF', age:28, club:'伯明翰',     rating:85 },
  { id:'p319', name:'范埃因马',     nameEn:'Rangelo Janga',     fifaCode:'CUW', position:'FW', age:34, club:'内梅亨',     rating:83 },
  { id:'p320', name:'鲁姆',         nameEn:'Eloy Room',         fifaCode:'CUW', position:'GK', age:37, club:'维特斯',     rating:82 },

  // ===== 海地 HAI (5人) =====
  { id:'p191', name:'弗兰茨·皮埃罗', nameEn:'Frantzdy Pierrot',fifaCode:'HAI', position:'FW', age:31, club:'海法马卡比', rating:86 },
  { id:'p192', name:'莱弗林',         nameEn:'Duckens Nazon',   fifaCode:'HAI', position:'FW', age:32, club:'凯塞利体育', rating:85 },
  { id:'p321', name:'普吕多姆',       nameEn:'Carlens Prudhomme',fifaCode:'HAI',position:'FW', age:24, club:'沃尔夫斯堡', rating:85 },
  { id:'p322', name:'克里斯蒂安',     nameEn:'Alex Junior Christian',fifaCode:'HAI',position:'DF', age:27, club:'里泽体育', rating:82 },
  { id:'p323', name:'普拉西德',       nameEn:'Johnny Placide',   fifaCode:'HAI', position:'GK', age:38, club:'巴斯蒂亚',   rating:81 },

  // ===== 佛得角 CPV (5人) =====
  { id:'p193', name:'洛根·科斯塔',   nameEn:'Logan Costa',      fifaCode:'CPV', position:'DF', age:25, club:'比利亚雷亚尔', rating:88 },
  { id:'p194', name:'瑞安·门德斯',   nameEn:'Ryan Mendes',      fifaCode:'CPV', position:'FW', age:36, club:'卡拉古姆鲁克', rating:85 },
  { id:'p324', name:'罗伯托·洛佩斯', nameEn:'Roberto Lopes',    fifaCode:'CPV', position:'DF', age:34, club:'沙姆洛克流浪', rating:84 },
  { id:'p325', name:'塔瓦雷斯',       nameEn:'Júlio Tavares',    fifaCode:'CPV', position:'FW', age:37, club:'阿尔拉伊德',   rating:84 },
  { id:'p326', name:'拜亚',           nameEn:'Marcio Rosa',      fifaCode:'CPV', position:'GK', age:29, club:'阿鲁卡',       rating:83 },

  // ===== 新西兰 NZL (6人) =====
  { id:'p72',  name:'克里斯·伍德', nameEn:'Chris Wood',      fifaCode:'NZL', position:'FW', age:34, club:'诺丁汉森林', rating:90 },
  { id:'p195', name:'萨普里特·辛格',nameEn:'Sarpreet Singh', fifaCode:'NZL', position:'MF', age:27, club:'罗斯托克',    rating:84 },
  { id:'p327', name:'卡卡塞',       nameEn:'Liberato Cacace',  fifaCode:'NZL', position:'DF', age:25, club:'恩波利',      rating:82 },
  { id:'p328', name:'鲁菲',         nameEn:'Marco Rojas',     fifaCode:'NZL', position:'MF', age:34, club:'惠灵顿凤凰',   rating:83 },
  { id:'p329', name:'贝尔',         nameEn:'Joe Bell',        fifaCode:'NZL', position:'MF', age:27, club:'布勒斯特',      rating:82 },
  { id:'p330', name:'马里诺维奇',   nameEn:'Stefan Marinovic', fifaCode:'NZL',position:'GK', age:35, club:'哈波埃尔特拉维夫', rating:81 },
];
