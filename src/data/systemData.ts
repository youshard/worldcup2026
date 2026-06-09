import type { TacticalSystem, TeamInjury } from '../types';

// ===== 48 队战术体系 =====
export const TACTICS: Record<string, TacticalSystem> = {
  ESP: { formation:'4-3-3', style:'传控', strengths:['中场控制力世界顶级','高位逼抢+快速反击','边路爆破能力强'], weaknesses:['缺少顶级中锋','防线偶尔被打身后'], keyPrinciple:'通过传控控制比赛节奏，利用边路速度撕开防线', coach:'德拉富恩特', coachNationality:'西班牙' },
  ARG: { formation:'4-4-2/4-3-3', style:'灵活控球', strengths:['梅西为核心的攻击体系','大赛经验丰富','中前场创造力顶级'], weaknesses:['后防线年龄偏大','梅西体能无法支撑90分钟'], keyPrinciple:'以梅西为战术核心，通过中前场快速配合制造威胁', coach:'斯卡洛尼', coachNationality:'阿根廷' },
  FRA: { formation:'4-2-3-1', style:'防守反击', strengths:['姆巴佩个人能力超群','防线稳固(萨利巴+于帕)','阵容深度雄厚'], weaknesses:['中场创造力不足','过于依赖球星个人发挥'], keyPrinciple:'稳固防守+姆巴佩/登贝莱边路冲击，高效反击', coach:'德尚', coachNationality:'法国' },
  ENG: { formation:'4-2-3-1', style:'务实攻守均衡', strengths:['贝林厄姆前场自由人','凯恩支点作用顶级','萨卡边路突破'], weaknesses:['大赛心态问题','教练大赛经验有限'], keyPrinciple:'以贝林厄姆为攻防转换核心，凯恩做支点，萨卡拉边', coach:'图赫尔', coachNationality:'德国' },
  BRA: { formation:'4-3-3', style:'欧化纪律+桑巴天赋', strengths:['维尼修斯+拉菲尼亚双翼齐飞','中场绞杀能力强','门将双保险'], weaknesses:['内马尔状态存疑','平均年龄偏大(29.2岁)'], keyPrinciple:'安切洛蒂的欧化战术纪律与巴西个人天赋深度融合', coach:'安切洛蒂', coachNationality:'意大利' },
  POR: { formation:'4-3-3', style:'传控+快速转换', strengths:['世界最强中场配置(B席+B费+维蒂尼亚)','C罗禁区终结能力','防线核心鲁本·迪亚斯'], weaknesses:['C罗年龄偏大体能有限','后防深度不足'], keyPrinciple:'中场控制+边路冲击+禁区C罗终结，立体化进攻', coach:'马丁内斯', coachNationality:'西班牙' },
  NED: { formation:'4-3-3/3-4-3', style:'高位逼抢+控球', strengths:['范迪克领衔的防线','加克波边路突破','中场绞杀能力'], weaknesses:['缺少顶级射手','伤病影响(德利赫特/西蒙斯缺阵)'], keyPrinciple:'高位防守+快速攻防转换，利用宽度拉开空间', coach:'科曼', coachNationality:'荷兰' },
  BEL: { formation:'3-4-2-1', style:'控球进攻', strengths:['德布劳内组织核心','库尔图瓦世界级门将','多库边路爆破'], weaknesses:['防线老化','卢卡库状态不稳定'], keyPrinciple:'依靠德布劳内的创造力串联进攻，利用多库的速度和卢卡库的支点', coach:'特德斯科', coachNationality:'意大利' },
  GER: { formation:'4-2-3-1', style:'高位压迫+快速转换', strengths:['吕迪格+基米希防守核心','哈弗茨前场全能','诺伊尔经验'], weaknesses:['进球效率不高','诺伊尔伤病隐患','缺少顶级前锋'], keyPrinciple:'高强度压迫+快速攻防转换，利用哈弗茨的前插制造威胁', coach:'纳格尔斯曼', coachNationality:'德国' },
  CRO: { formation:'4-3-3', style:'技术流控球', strengths:['莫德里奇大师级中场调度','格瓦迪奥尔世界级中卫','大赛韧性极强'], weaknesses:['锋线终结能力有限','主力年龄偏大'], keyPrinciple:'依靠莫德里奇的中场组织和格瓦迪奥尔的防守，控制比赛节奏', coach:'达利奇', coachNationality:'克罗地亚' },
  MAR: { formation:'4-2-3-1', style:'铁血防守反击', strengths:['阿什拉夫右路攻防一体','防守组织极其严密','定位球威胁大'], weaknesses:['进攻创造力有限','过于依赖反击'], keyPrinciple:'稳固防守+快速反击，利用阿什拉夫的边路插上和恩内西里的支点', coach:'雷格拉吉', coachNationality:'摩洛哥' },
  COL: { formation:'4-2-3-1', style:'快速转换+边路冲击', strengths:['路易斯·迪亚斯左路爆破','J罗定位球','杜兰替补冲击'], weaknesses:['防守稳定性不足','中场控制力有限'], keyPrinciple:'依靠迪亚斯的个人突破和J罗的精确传球创造机会', coach:'洛伦索', coachNationality:'阿根廷' },
  SEN: { formation:'4-3-3', style:'高位逼抢+快速反击', strengths:['马内领衔锋线','中场拦截能力强','身体对抗占优'], weaknesses:['缺少组织核心','阵地战办法不多'], keyPrinciple:'高强度逼抢断球后快速反击，依靠锋线速度', coach:'西塞', coachNationality:'塞内加尔' },
  NOR: { formation:'4-3-3/4-2-3-1', style:'快速进攻', strengths:['世界最强中锋哈兰德','厄德高创造性中场','反击速度极快'], weaknesses:['防守能力一般','大赛经验缺乏','阵容深度不足'], keyPrinciple:'快速找到哈兰德，利用他的终结能力和厄德高的创造力', coach:'索尔巴肯', coachNationality:'挪威' },
  USA: { formation:'4-2-3-1', style:'高位压迫+快速转换', strengths:['普利西奇核心攻击力','年轻体能充沛','主场优势'], weaknesses:['大赛经验不足','防线偶尔失误'], keyPrinciple:'高强度压迫+快速攻防转换，利用体能和主场优势', coach:'波切蒂诺', coachNationality:'阿根廷' },
  MEX: { formation:'4-3-3/4-2-3-1', style:'均衡控球', strengths:['主场高原优势','桑地亚戈·希门尼斯终结能力强','经验丰富'], weaknesses:['进攻创造力有限','防守回追速度慢'], keyPrinciple:'利用主场优势通过中场控制比赛，寻找边路突破机会', coach:'阿吉雷', coachNationality:'墨西哥' },
  CAN: { formation:'4-4-2', style:'高位逼抢+快速反击', strengths:['阿方索·戴维斯左路发动机','乔纳森·戴维终结能力','年轻体能充沛'], weaknesses:['阿方索·戴维斯伤病隐患','防线经验不足'], keyPrinciple:'高位逼抢(枫叶压迫)，快速转换，利用戴维斯的边路冲击力', coach:'马什', coachNationality:'美国' },
  URU: { formation:'4-3-3/4-4-2', style:'高强度压迫+直接进攻', strengths:['巴尔韦德全能中场','阿劳霍防守核心','努涅斯冲击力'], weaknesses:['控球能力一般','过于依赖转换'], keyPrinciple:'贝尔萨的高强度压迫让对手无法从容组织，通过转换快速进攻', coach:'贝尔萨', coachNationality:'阿根廷' },
  SUI: { formation:'3-4-2-1/4-2-3-1', style:'稳健防守+转换', strengths:['阿坎吉防守核心','扎卡中场组织','索默经验丰富'], weaknesses:['进攻火力不足','依赖个别球员发挥'], keyPrinciple:'稳固的防守体系+高效的攻防转换，定位球威胁大', coach:'雅金', coachNationality:'瑞士' },
  JPN: { formation:'4-2-3-1', style:'传控+快速转换', strengths:['三笘薰左路爆破','久保建英组织核心','战术纪律极强'], weaknesses:['身体对抗不足','缺少顶级中锋','三笘薰伤病'], keyPrinciple:'技术流传控+边路突破+整体防守，日本足球战术纪律', coach:'森保一', coachNationality:'日本' },
  AUT: { formation:'4-2-3-1', style:'高压+快速转换', strengths:['阿拉巴防守核心','萨比策中场','鲍姆加特纳前插'], weaknesses:['缺少顶级球星','阵容深度不足'], keyPrinciple:'高位压迫制造失误，快速通过中场制造威胁', coach:'朗尼克', coachNationality:'德国' },
  TUR: { formation:'4-2-3-1', style:'技术流进攻', strengths:['居莱尔天才创造力','恰尔汗奥卢定位球','伊尔迪兹突破'], weaknesses:['防守组织不够严密','大赛经验不足'], keyPrinciple:'依靠居莱尔的创造力+恰尔汗奥卢的定位球能力', coach:'蒙特拉', coachNationality:'意大利' },
  KOR: { formation:'4-4-2/4-2-3-1', style:'快速转换+边路冲击', strengths:['孙兴慜顶级终结者','李刚仁组织核心','金玟哉防守铁闸'], weaknesses:['过于依赖孙兴慜发挥','中场控制力有限'], keyPrinciple:'低姿态让出控球率，利用孙兴慜和李刚仁的快速转换杀死比赛', coach:'洪明甫', coachNationality:'韩国' },
  ECU: { formation:'4-2-3-1', style:'高强度压迫', strengths:['凯塞多中场铁闸','因卡皮耶防守','体能充沛'], weaknesses:['缺少顶级射手','阵地进攻乏力'], keyPrinciple:'高强度压迫+快速攻防转换，依靠凯塞多的中场扫荡', coach:'贝卡切切', coachNationality:'阿根廷' },
  AUS: { formation:'4-4-2/4-2-3-1', style:'身体对抗+直接进攻', strengths:['苏塔尔身高优势(定位球)','伊兰昆达速度','团队纪律性'], weaknesses:['技术能力有限','对阵强队办法不多'], keyPrinciple:'利用身体素质优势，通过定位球和快速反击制造威胁', coach:'阿诺德', coachNationality:'澳大利亚' },
  EGY: { formation:'4-3-3', style:'依赖核心+防守反击', strengths:['萨拉赫世界级终结者','马尔穆什速度','防线组织好'], weaknesses:['过度依赖萨拉赫','缺乏第二个进攻点'], keyPrinciple:'一切围绕萨拉赫，防守反击为主', coach:'哈桑', coachNationality:'埃及' },
  ALG: { formation:'4-3-3/4-2-3-1', style:'技术流传控', strengths:['马赫雷斯经验丰富','古伊里前锋天赋','边路技术好'], weaknesses:['防守不够稳固','缺少顶级组织者'], keyPrinciple:'依赖马赫雷斯的经验和技术+年轻球员的速度和创造力', coach:'佩特科维奇', coachNationality:'瑞士' },
  IRN: { formation:'4-4-2/4-2-3-1', style:'身体对抗+直接进攻', strengths:['塔雷米门前嗅觉','阿兹蒙冲击力','整体纪律性强'], weaknesses:['中场控制能力弱','技术粗糙'], keyPrinciple:'依靠身体对抗+直接进攻，利用前锋双塔组合', coach:'加莱诺伊', coachNationality:'伊朗' },
  KSA: { formation:'4-2-3-1', style:'高位逼抢+直接进攻', strengths:['达瓦萨里核心攻击力','阿卜杜勒哈米德边路','士气高昂'], weaknesses:['防守漏洞大','技术能力有限'], keyPrinciple:'高强度压迫+直接快速进攻，利用队长达瓦萨里的经验', coach:'勒纳尔', coachNationality:'法国' },
  QAT: { formation:'4-3-3/4-2-3-1', style:'控球传控', strengths:['阿菲夫+阿里双核','团队配合默契','亚洲杯经验'], weaknesses:['面对强队难有作为','连败影响信心'], keyPrinciple:'以传控为主，依靠阿菲夫的创造力和阿里的终结能力', coach:'桑切斯', coachNationality:'西班牙' },
  UZB: { formation:'4-3-3/4-2-3-1', style:'组织有序', strengths:['肖穆罗多夫经验','法伊祖拉耶夫新星','体能好'], weaknesses:['首次参赛经验不足','个人能力有限'], keyPrinciple:'组织有序的整体足球，集体防守+快速反击', coach:'卡塔内茨', coachNationality:'斯洛文尼亚' },
  SWE: { formation:'4-4-2/4-2-3-1', style:'直接高效', strengths:['哲凯赖什+伊萨克世界级锋线','库卢塞夫斯基创造力','整体战术纪律强'], weaknesses:['中场控制力有限','防线偶尔不稳'], keyPrinciple:'依靠双前锋的终结能力，利用库卢的创造力直接高效进攻', coach:'托马森', coachNationality:'丹麦' },
  CZE: { formation:'3-4-3/3-5-2', style:'身体对抗+高空轰炸', strengths:['希克头球能力强','绍切克中场拦截','定位球威胁大'], weaknesses:['地面技术不足','边路防守漏洞'], keyPrinciple:'依靠身体素质和定位球优势，边翼卫传中找希克', coach:'哈谢克', coachNationality:'捷克' },
  SCO: { formation:'4-2-3-1/3-4-3', style:'铁血防守+快速转换', strengths:['麦克托米奈后插上远射','罗伯逊左路助攻','麦金大局观'], weaknesses:['缺少顶级前锋','技术能力有限'], keyPrinciple:'稳固防守+快速转换，利用定位球和远射制造威胁', coach:'克拉克', coachNationality:'苏格兰' },
  BIH: { formation:'4-4-2/4-3-3', style:'直接进攻', strengths:['哲科支点作用','科拉希纳茨防守','整体身高优势'], weaknesses:['技术能力一般','大赛经验不足'], keyPrinciple:'依靠哲科的支点作用和整体身高优势，直接威胁球门', coach:'巴尔巴雷兹', coachNationality:'波黑' },
  TUN: { formation:'4-3-3/4-2-3-1', style:'稳健防守', strengths:['斯希里中场拦截','团队执行力强','反击有威胁'], weaknesses:['进攻创造力不足','缺少明星球员'], keyPrinciple:'稳固防守的基础上寻求反击机会', coach:'卡德里', coachNationality:'突尼斯' },
  CIV: { formation:'4-3-3/4-2-3-1', style:'技术流+速度', strengths:['阿马德·迪亚洛突破','阿丁格拉速度','福法纳经验'], weaknesses:['防守不够稳固','中场控制力弱'], keyPrinciple:'依靠前场球员的速度和个人能力，快速进攻', coach:'法埃', coachNationality:'科特迪瓦' },
  GHA: { formation:'4-3-3/4-2-3-1', style:'务实防守', strengths:['托马斯中场拦截','库杜斯突破','防守组织好'], weaknesses:['锋线火力不足','核心球员伤病'], keyPrinciple:'稳健防守+快速反击，依靠托马斯的中场控制和库杜斯的突破', coach:'奎罗斯', coachNationality:'葡萄牙' },
  RSA: { formation:'4-4-2/4-3-3', style:'高位逼抢+直接', strengths:['福斯特锋线支点','体能充沛','逼抢强度高'], weaknesses:['技术粗糙','大赛经验不足'], keyPrinciple:'利用非洲球队的身体优势高位逼抢，快速转换', coach:'布罗斯', coachNationality:'比利时' },
  COD: { formation:'4-4-2/4-2-3-1', style:'防守反击', strengths:['姆本巴防守核心','身体素质强','团队精神好'], weaknesses:['进攻创造力不足','客场经验少'], keyPrinciple:'稳固防守+快速反击，依靠前锋的个人能力', coach:'德萨布雷', coachNationality:'法国' },
  PAR: { formation:'4-4-2/4-2-3-1', style:'务实防守反击', strengths:['阿尔米隆边路速度','恩西索技术','整体组织好'], weaknesses:['进攻火力不足','核心球员影响力有限'], keyPrinciple:'防守优先，通过阿尔米隆的速度和恩西索的技术进行反击', coach:'阿尔法罗', coachNationality:'阿根廷' },
  PAN: { formation:'4-4-2/4-2-3-1', style:'防守反击', strengths:['整体团队精神','卡拉斯奎拉组织','防守硬度'], weaknesses:['技术能力一般','缺少明星球员'], keyPrinciple:'防守优先+快速反击，利用有限的进攻机会', coach:'克里斯蒂安森', coachNationality:'西班牙' },
  CUW: { formation:'4-4-2/4-3-3', style:'务实防守', strengths:['塔希斯·钟突破','巴库纳经验','团队精神'], weaknesses:['整体实力有限','首次参赛'], keyPrinciple:'务实防守为主，争取身体对抗优势', coach:'阿德沃卡特', coachNationality:'荷兰' },
  HAI: { formation:'4-4-2/4-3-3', style:'身体对抗', strengths:['皮埃罗支点','整体体能','拼抢积极'], weaknesses:['技术能力有限','52年未参赛'], keyPrinciple:'利用身体对抗优势+拼抢积极性制造机会', coach:'安托万', coachNationality:'法国' },
  CPV: { formation:'4-4-2', style:'紧凑防守反击', strengths:['洛根·科斯塔防守','整体组织严密','门德斯经验'], weaknesses:['攻击力薄弱','个人能力有限'], keyPrinciple:'紧凑的4-4-2防守阵型，寻找零星的定位球或反击机会', coach:'布比斯塔', coachNationality:'佛得角' },
  NZL: { formation:'4-4-2/4-3-3', style:'长传冲吊', strengths:['克里斯·伍德头球能力','定位球威胁大','防守拼抢积极'], weaknesses:['技术粗糙','整体实力有限'], keyPrinciple:'依靠克里斯·伍德的空中优势和定位球战术', coach:'巴泽利', coachNationality:'新西兰' },
  IRQ: { formation:'4-4-2/4-2-3-1', style:'防守反击', strengths:['贾西姆年轻有活力','整体体能好','团队精神'], weaknesses:['技术能力有限','大赛经验缺乏'], keyPrinciple:'防守反击为主，依靠年轻球员的速度和拼劲', coach:'卡萨斯', coachNationality:'西班牙' },
  JOR: { formation:'4-4-2/4-3-3', style:'防守反击', strengths:['塔马里突破能力','奈马特锋线搭档','团队执行力强'], weaknesses:['整体实力弱','缺少五大联赛球员'], keyPrinciple:'后卫线稳固+快速反击，利用塔马里的个人能力', coach:'塞拉米', coachNationality:'摩洛哥' },
};

// ===== 各队伤病情况（截至开赛前） =====
export const TEAM_INJURIES: TeamInjury[] = [
  { fifaCode:'BRA', outPlayers:[{name:'罗德里戈(Rodrygo)',reason:'十字韧带撕裂'},{name:'埃斯特万(Estevao)',reason:'腿筋撕裂'},{name:'米利唐(Éder Militão)',reason:'膝盖重伤'}], doubtfulPlayers:[{name:'内马尔(Neymar)',reason:'刚伤愈，状态存疑'},{name:'韦斯利·利马(Wesley Lima)',reason:'热身赛伤退，观察中'}] },
  { fifaCode:'GER', outPlayers:[{name:'格纳布里(Serge Gnabry)',reason:'大腿内收肌受伤'},{name:'特尔施特根(ter Stegen)',reason:'腿筋问题'},{name:'伦纳特·卡尔(Lennart Karl)',reason:'大腿肌肉撕裂'}], doubtfulPlayers:[{name:'诺伊尔(Manuel Neuer)',reason:'伤愈复出，状态存疑'}] },
  { fifaCode:'ARG', outPlayers:[{name:'巴莱尔迪(Leonardo Balerdi)',reason:'比目鱼肌撕裂，至少缺席两周'},{name:'莫利纳(Nahuel Molina)',reason:'大腿肌肉伤势，仍在康复'}], doubtfulPlayers:[{name:'梅西(Lionel Messi)',reason:'肌肉疲劳，对阵洪都拉斯未出场'},{name:'蒙铁尔(Gonzalo Montiel)',reason:'大腿肌肉伤势'}] },
  { fifaCode:'NED', outPlayers:[{name:'哈维·西蒙斯(Xavi Simons)',reason:'十字韧带撕裂'},{name:'德利赫特(De Ligt)',reason:'背部手术'},{name:'斯豪滕(Jerdy Schouten)',reason:'十字韧带撕裂'},{name:'廷伯(Jurrien Timber)',reason:'伤病未康复，正式无缘世界杯'}], doubtfulPlayers:[] },
  { fifaCode:'FRA', outPlayers:[{name:'埃基蒂克(Hugo Ekitike)',reason:'跟腱撕裂'},{name:'卡马拉(Boubacar Kamara)',reason:'十字韧带撕裂'},{name:'费兰·门迪(Ferland Mendy)',reason:'大腿肌肉'}], doubtfulPlayers:[{name:'萨利巴(William Saliba)',reason:'轻伤但可出战'}] },
  { fifaCode:'ENG', outPlayers:[{name:'本·怀特(Ben White)',reason:'膝盖受伤'}], doubtfulPlayers:[] },
  { fifaCode:'ARG', outPlayers:[{name:'帕尼切利(Panichelli)',reason:'十字韧带撕裂'},{name:'福伊特(Juan Foyth)',reason:'跟腱问题'}], doubtfulPlayers:[] },
  { fifaCode:'ESP', outPlayers:[{name:'费尔明·洛佩斯(Fermín)',reason:'脚部受伤'},{name:'萨穆·阿格霍瓦(Samu)',reason:'十字韧带撕裂'}], doubtfulPlayers:[] },
  { fifaCode:'GHA', outPlayers:[{name:'穆罕默德·库杜斯(Kudus)',reason:'腿筋受伤'},{name:'萨利苏(Mohammed Salisu)',reason:'十字韧带撕裂'},{name:'吉库(Alexander Djiku)',reason:'肌肉受伤'}], doubtfulPlayers:[] },
  { fifaCode:'SCO', outPlayers:[{name:'吉尔莫(Billy Gilmour)',reason:'膝盖受伤'}], doubtfulPlayers:[] },
  { fifaCode:'JPN', outPlayers:[{name:'三笘薰(Kaoru Mitoma)',reason:'腿筋受伤'},{name:'南野拓实(Minamino)',reason:'十字韧带撕裂'}], doubtfulPlayers:[] },
  { fifaCode:'USA', outPlayers:[{name:'卡特-维克斯(Carter-Vickers)',reason:'跟腱受伤'},{name:'阿吉曼(Patrick Agyemang)',reason:'跟腱受伤'},{name:'卡多索(Johnny Cardoso)',reason:'脚踝手术'}], doubtfulPlayers:[{name:'克里斯·理查兹(Chris Richards)',reason:'脚踝受伤，出战成疑'}] },
  { fifaCode:'MEX', outPlayers:[{name:'马拉贡(Luis Malagon)',reason:'十字韧带撕裂'},{name:'阿劳霍(Julian Araujo)',reason:'腿筋问题'}], doubtfulPlayers:[] },
  { fifaCode:'CAN', outPlayers:[{name:'弗洛雷斯(Marcelo Flores)',reason:'十字韧带撕裂'}], doubtfulPlayers:[{name:'阿方索·戴维斯(Alphonso Davies)',reason:'腿筋拉伤，恢复中'}] },
  { fifaCode:'CIV', outPlayers:[{name:'阿克帕(Clement Akpa)',reason:'内收肌受伤'}], doubtfulPlayers:[] },
];

// ===== 48 队主教练评分（10分制，基于执教履历/大赛成绩/战术能力） =====
export const COACH_RATINGS: Record<string, number> = {
  ESP: 9.5,  // 德拉富恩特：欧洲杯冠军
  ARG: 9.0,  // 斯卡洛尼：世界杯冠军+美洲杯冠军
  FRA: 9.0,  // 德尚：世界杯一冠一亚
  BRA: 9.5,  // 安切洛蒂：欧冠之王
  ENG: 8.5,  // 图赫尔：欧冠冠军，战术大师
  POR: 8.0,  // 马丁内斯：欧国联冠军+比利时时期出色
  NED: 7.5,  // 科曼
  BEL: 7.0,  // 特德斯科
  GER: 8.5,  // 纳格尔斯曼：战术创新者
  CRO: 7.5,  // 达利奇：世界杯亚军+季军
  MAR: 8.0,  // 雷格拉吉：世界杯四强创造者
  COL: 6.5,  // 洛伦索
  SEN: 7.0,  // 西塞：非洲杯冠军
  NOR: 6.0,  // 索尔巴肯
  USA: 8.0,  // 波切蒂诺：欧冠亚军经验
  MEX: 7.0,  // 阿吉雷：经验丰富
  CAN: 7.0,  // 马什：红牛体系
  URU: 8.5,  // 贝尔萨：战术狂人
  SUI: 6.5,  // 雅金
  JPN: 7.0,  // 森保一：世界杯16强
  AUT: 7.5,  // 朗尼克：德国战术大师
  TUR: 7.0,  // 蒙特拉
  KOR: 6.5,  // 洪明甫
  ECU: 6.0,  // 贝卡切切
  AUS: 6.0,  // 阿诺德
  EGY: 6.0,  // 哈桑
  ALG: 6.5,  // 佩特科维奇
  IRN: 6.0,  // 加莱诺伊
  KSA: 7.0,  // 勒纳尔：传奇教练
  QAT: 6.5,  // 桑切斯
  UZB: 5.5,  // 卡塔内茨
  SWE: 6.5,  // 托马森
  CZE: 6.0,  // 哈谢克
  SCO: 6.5,  // 克拉克
  BIH: 5.5,  // 巴尔巴雷兹
  TUN: 5.5,  // 卡德里
  CIV: 6.0,  // 法埃
  GHA: 7.0,  // 奎罗斯：执教多国经验
  RSA: 6.0,  // 布罗斯
  COD: 6.0,  // 德萨布雷
  PAR: 6.0,  // 阿尔法罗
  PAN: 5.5,  // 克里斯蒂安森
  CUW: 5.5,  // 阿德沃卡特
  HAI: 5.0,  // 安托万
  CPV: 5.0,  // 布比斯塔
  NZL: 5.5,  // 巴泽利
  IRQ: 5.5,  // 卡萨斯
  JOR: 5.0,  // 塞拉米
};
