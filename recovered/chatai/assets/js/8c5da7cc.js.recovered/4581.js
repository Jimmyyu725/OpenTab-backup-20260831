var n = require(/*webcrack:missing*/"./4003.js");
var o = require(/*webcrack:missing*/"./4522.js");
var a = require("./7712.js");
var i = require("./2731.js");
export let Rm;
(function (e) {
  e.todo = "widget-todo";
  e.note = "widget-note";
  e.timerBirthday = "widget-timer-birthday";
  e.timerFestival = "widget-timer-festival";
  e.timerCountdown = "widget-timer-countdown";
  e.timerMark = "widget-timer-mark";
  e.timerYear = "widget-timer-year";
  e.hotsearch = "widget-hotsearch";
  e.weather = "widget-weather";
  e.calculator = "widget-calculator";
  e.calendar = "widget-calendar";
  e.celebrity = "widget-celebrity";
  e.worldcup = "widget-worldcup";
  e.habit = "widget-habit";
  e.system = "widget-system";
  e.exchangeRate = "widget-exchange-rate";
  e.news = "widget-news";
  e.stock = "widget-stock";
  e.history = "widget-history";
  e.game = "widget-game";
  e.movie = "widget-movie";
  e.book = "widget-book";
  e.play = "widget-play";
  e.clock = "widget-clock";
  e.worldClock = "widget-world-clock";
  e.hotapp = "widget-hotapp";
  e.nba = "widget-nba";
  e.chatgpt = "widget-chatgpt";
  e.bookmarks = "widget-bookmarks";
  e.haohuola = "widget-haohuola";
  e.football = "widget-football";
  e.historyRecord = "widget-history-record";
  e.aippt = "widget-aippt";
  e.aipaper = "widget-aipaper";
})(Rm ||= {});
const s = (0, a.Z)([!n.Pl && {
  name: Rm.chatgpt,
  title: "WeTab AI",
  desc: "WeTab AI是一个聊天机器人，你可以和它聊天，也可以用它辅助你完成日常工作。",
  sizes: ["s", "m"],
  tags: ["information", "recreation"]
}, {
  name: Rm.aippt,
  title: "AiPPT",
  desc: "AI PPT结合最新AI技术，提供一键生成高质量PPT的解决方案。快速生成符合需求的专业PPT，简化设计流程，提升工作效率。",
  sizes: ["s", "m"],
  tags: ["util", "information"]
}, {
  name: Rm.aipaper,
  title: "Ai论文生成",
  desc: "AI论文工具，具备选题、文献检索、写作助手等多项实用功能，极大地提高了研究者的论文写作效率和质量。",
  sizes: ["s", "m"],
  tags: ["util", "information"]
}, {
  name: Rm.weather,
  title: i18n("天气"),
  desc: i18n("24小时预报、未来7天预报、城市查询，只需一个天气小组件，随时关注天气变化状况。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.todo,
  title: i18n("待办"),
  desc: i18n("通过待办事项来列出需要处理的事物，包括生活、工作或其他事项，让你轻松记住待办事项。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.timerBirthday,
  title: i18n("生日"),
  desc: i18n("添加生日小组件，能够帮助你记住家人、朋友的生日，时间顺序列表提醒，一目了然。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.note,
  title: i18n("笔记"),
  desc: i18n("通过丰富的编辑功能，记录你的见闻、灵感与思考，支持快捷指令键入格式和markdown格式。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, n.sM && {
  name: Rm.hotsearch,
  title: i18n("热搜"),
  desc: i18n("摸鱼神器，收录各大平台热搜、热榜或热文，热门事件热门话题跟踪，一个也不落下。"),
  sizes: ["m", "l"],
  tags: ["information"]
}, {
  name: Rm.timerFestival,
  title: i18n("节日"),
  desc: i18n("下一个节日将会是什么呢？节日小组件将重要节日按照顺序列表展示，帮助你做好节日规划安排。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.timerCountdown,
  title: i18n("倒计时"),
  desc: i18n("使用倒计时小组件，定义你的事件和活动，随时提醒你剩余时间节点。"),
  sizes: ["s", "m", "l"],
  tags: ["util"],
  previewData: i.VU
}, {
  name: Rm.timerMark,
  title: i18n("纪念日"),
  desc: i18n("与TA相识、在一起多少天记录下来，数字的跳动，是一件浪漫的事情……"),
  sizes: ["s", "m", "l"],
  tags: ["util"],
  previewData: i.gs
}, {
  name: Rm.timerYear,
  title: i18n("今年余额"),
  desc: i18n("时间如沙般难以握住，一年又一年，一日又一日，今年过去了多少还剩余多少？"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.calculator,
  title: i18n("换算器"),
  desc: i18n("一款集计算器、房贷计算、个税计算、日期计算、进制转换和单位换算于一体的全能计算工具。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.calendar,
  title: i18n("日历"),
  desc: i18n("使用日历来跟踪倒数日、节假日、法定节假日、纪念日，不错过每一个重要的日子。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.celebrity,
  title: i18n("每日一言"),
  desc: i18n("每日一言，与更有趣的灵魂对话，为你的心灵注入光芒。"),
  sizes: ["m", "l"],
  tags: ["information"]
}, n.sM && {
  name: Rm.news,
  title: i18n("新闻"),
  desc: i18n("一览热点时事。"),
  sizes: ["s", "m", "l"],
  tags: ["information"]
}, {
  name: Rm.habit,
  title: i18n("习惯养成"),
  desc: i18n("习惯养成，从今天开始。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, n.FH && !n.s$ && {
  name: Rm.system,
  title: i18n("系统状态"),
  desc: i18n("实时监测电脑当前的CPU、电池、内存的使用情况，一目了然。"),
  sizes: ["m", "l"],
  tags: ["util"]
}, {
  name: Rm.exchangeRate,
  title: i18n("汇率"),
  desc: i18n("通过汇率小组件实时查看汇率牌价与趋势，当然，也能帮你根据当前汇率进行兑换计算。"),
  sizes: ["s", "m", "l"],
  tags: ["information"]
}, {
  name: Rm.stock,
  title: i18n("股票"),
  desc: i18n("让您轻松关注股票和股市的动态，沪深、港股、美股全球市场实时行情。"),
  sizes: ["s", "m", "l"],
  tags: ["information"]
}, n.sM && {
  name: Rm.history,
  title: i18n("历史上的今日"),
  desc: "看似寻常的每天，在历史上有着怎样的精彩故事呢？每天一条精选推送。",
  sizes: ["m", "l"],
  tags: ["information"]
}, n.sM && {
  name: Rm.movie,
  title: i18n("电影日历"),
  desc: i18n("此刻电影日历，每天一部优秀电影。"),
  sizes: ["m", "l"],
  tags: ["information", "recreation"]
}, {
  name: Rm.play,
  title: i18n("休闲小游戏"),
  desc: "轻松有趣的小游戏，摸鱼必备，切勿贪念被老板发现哦！",
  sizes: ["m", "l"],
  tags: ["recreation"],
  containerClass: "shadow-color-none overflow-visible"
}, {
  name: Rm.clock,
  title: i18n("全屏时钟"),
  desc: i18n("可以替代屏保的时钟小组件，卡片式和数码两种时钟选择，即点即用。"),
  sizes: ["s", "m", "l"],
  tags: ["util"]
}, {
  name: Rm.worldClock,
  title: i18n("世界时钟"),
  desc: i18n("世界时钟，查询世界各地当前时间。"),
  sizes: ["m", "l"],
  tags: ["util"]
}, {
  name: Rm.hotapp,
  title: "精品应用",
  desc: "分享最新鲜优秀的正版软件",
  sizes: ["m", "l"],
  tags: ["information"]
}, {
  name: Rm.nba,
  title: "NBA赛事",
  desc: "NBA赛程、比分、排名",
  sizes: ["s", "m", "l"],
  tags: ["information"]
}, n.FH && !n.s$ && {
  name: Rm.bookmarks,
  title: i18n("书签管理"),
  desc: i18n("更高效、美观的书签管理"),
  sizes: ["s"],
  tags: ["util"]
}, n.FH && !n.s$ && {
  name: Rm.historyRecord,
  title: i18n("历史记录"),
  desc: i18n("更高效、美观的历史记录管理"),
  sizes: ["s"],
  tags: ["util"]
}, {
  name: Rm.football,
  title: i18n("足球赛事"),
  desc: i18n("足球赛事数据分析，涵盖足球直播、专家分析、赛事数据、AI预测、独家情报等服务"),
  sizes: ["s", "m", "l"],
  tags: ["information"]
}]);
s.map(e => e.name);
export const tD = {
  [o.BU.hotsearch]: Rm.hotsearch,
  [o.BU.note]: Rm.note,
  [o.BU.timerBirthday]: Rm.timerBirthday,
  [o.BU.timerFestival]: Rm.timerFestival,
  [o.BU.timerYear]: Rm.timerYear,
  [o.BU.todo]: Rm.todo,
  [o.BU.weather]: Rm.weather,
  [o.BU.calculator]: Rm.calculator,
  [o.BU.exchangeRate]: Rm.exchangeRate,
  [o.BU.habit]: Rm.habit,
  [o.BU.stock]: Rm.stock,
  [o.BU.game]: Rm.game,
  [o.BU.movie]: Rm.movie,
  [o.BU.book]: Rm.book,
  [o.BU.play]: Rm.play,
  [o.BU.clock]: Rm.clock,
  [o.BU.worldClock]: Rm.worldClock,
  [o.BU.hotApp]: Rm.hotapp,
  [o.BU.nba]: Rm.nba,
  [o.BU.chatgpt]: Rm.chatgpt,
  [o.BU.bookmarks]: Rm.bookmarks,
  [o.BU.haohuola]: Rm.haohuola,
  [o.BU.historyRecord]: Rm.historyRecord,
  [o.BU.aippt]: Rm.aippt,
  [o.BU.aipaper]: Rm.aipaper
};
export const E0 = e => s.find(t => t.name === e);
s.filter(e => !!e.containerClass).reduce((e, t) => {
  e.set(t.name, t.containerClass);
  return e;
}, new Map());