/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "ACTION": "行动",
    "Brown Elementary": "布朗小学",
    "CLOSE DOWN": "倒闭",
    "DEAD": "死亡",
    "DIAGNOSE": "诊断",
    "DIAGNOSE HOUSEHOLD": "诊断家庭",
    "Difficulty Settings": "难度设置",
    "Easy": "简单",
    "Hard": "困难",
    "HEALTHY": "健康",
    "Let's Go": "让我们开始吧",
    "Medium": "中等的",
    "More than 75% of the population is dead. So much for saving them.": "超过 75% 的人口死亡。 这么多拯救他们。",
    "NEXT DAY": "下一天",
    "NOT QUARANTINED": "未隔离",
    "OK": "好的",
    "Oops, everyone died.": "糟糕，所有人都死了。",
    "OPEN": "打开",
    "POINTS": "分数",
    "QUARANTINE": "隔离",
    "QUARANTINE HOUSEHOLD": "隔离家庭",
    "SCHOOL": "学校",
    "SICK": "生病",
    "Skip": "跳过",
    "STATUS UNKNOWN": "状态未知",
    "This is the tutorial. If you've already gone through the tutorial, skip ahead.": "这是教程。 如果您已经完成了本教程，请跳过。",
    "Try again?": "再试一次？",
    "Very Hard": "很难",
    "Welcome to Patient Zero": "欢迎来到零号病人",
    "Actions": "行动",
    "Closing": "结束",
    "Diagnosis": "诊断",
    "Disease Spreading": "疾病传播",
    "Every turn, a certain number of people are guaranteed to be infected, based on the current number of sick people. After two days, they will pass away, and will no longer infect others.": "每回合，根据目前的患病人数，保证一定数量的人会被感染。两天后，他们就会去世，不会再传染给别人。",
    "Household Actions": "家庭行动",
    "If you manage to quarantine all infected individuals before 75% of the population is dead, you win the game. Otherwise, you lose the game, and have to live with the guilt of negligently killing an entire neighbourhood.": "如果您设法在 75% 的人口死亡之前隔离所有受感染的人，那么您就赢了。否则，您将输掉这场比赛，并且不得不忍受因疏忽而杀死整个社区的罪恶感。",
    "Introduction": "介绍",
    "Meet The Neighbours": "认识邻居",
    "Neighbourhood Web": "邻里网",
    "Over to the left is the neighbourhood web. It shows all the relationships between members in the neighbourhood. Try hovering over one of the white circles to view all of that person's connections more clearly.": "左边是社区网络。它显示了邻里成员之间的所有关系。尝试将鼠标悬停在其中一个白色圆圈上，以更清楚地查看该人的所有联系。",
    "Patient Zero is a game about fake epidemiology. A fatal, incurable disease has struck this neighbourhood, and your job is to stop its spread before it kills more than 75% of the population.": "零号病人是一款关于假流行病学的游戏。一种致命的、无法治愈的疾病袭击了这个社区，你的工作是在它杀死超过 75% 的人口之前阻止它的传播。",
    "Quarantine": "隔离",
    "The circles now are all white because you don't know anything about the status of each individual. You must perform diagnoses to determine if people are healthy or sick. You'll find out when a person dies, however.": "现在的圆圈都是白色的，因为你对每个人的状态一无所知。您必须进行诊断以确定人们是健康还是生病。但是，您会发现一个人何时死亡。",
    "The Log": "日志",
    "This is the log, which will contain a history of all the actions you've taken. Note that you can click on any names that appear here to select the person.": "这是日志，其中将包含您已采取的所有操作的历史记录。请注意，您可以单击此处显示的任何名称来选择此人。",
    "Winning and Losing": "输赢",
    "You'll also see some household actions that can be performed. These may be cheaper to perform on larger households, so they may be useful.": "您还将看到一些可以执行的家庭操作。在较大的家庭中执行这些可能更便宜，因此它们可能很有用。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Each turn, you are given a certain number of action points to spend, as can be seen on the right. Actions cost different amounts of action points. You can perform an action by clicking on either a person or communal space, and then clicking one of the actions to the right.": "每转一圈，你都会得到一定数量的动作点数，如右图所示。行动花费不同数量的行动点。您可以通过单击个人或公共空间，然后单击右侧的一个操作来执行操作。",
    "Each of the small white circles are people of this neighbourhood. They are members of households, represented by the blue arcs. Each of the large white circles in the centre is a communal space. People can transmit diseases if they are in the same household, visit the same communal spaces or are friends.": "每个白色小圈子都是这个街区的人。他们是家庭成员，由蓝色弧线表示。中心的每个白色大圆圈都是一个公共空间。如果人们在同一个家庭、访问同一个公共空间或是朋友，他们可能会传播疾病。",
    "If you try clicking on an individual, you'll see the Quarantine action appear on the right. Quarantining an individual who is sick makes him unable to spread the disease, while quarantining a healthy individual makes him unable to catch the disease. Quarantining lasts for three days.": "如果您尝试单击某个个体，您将看到右侧显示“隔离”操作。隔离一个生病的人会使他无法传播疾病，而隔离一个健康的人会让他无法感染疾病。隔离持续三天。",
    "If you try clicking on a communal space, you'll see the Close Down action appear. Closing down a communal space means people can no longer spread the disease to another person just because they share that communal space. This lasts for two days.": "如果您尝试单击公共空间，您将看到“关闭”操作出现。关闭公共空间意味着人们不能仅仅因为共享公共空间而将疾病传播给他人。这持续两天。",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+), ([\d\.]+)$/, '$1，$2 岁'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);