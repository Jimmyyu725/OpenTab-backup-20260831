var i = require("./2770.js");
export let B;
(function (e) {
  e.wallpaper = "store-wallpaper";
  e.search = "store-search";
  e.icon = "store-icon";
  e.setting = "store-setting";
  e.user = "store-user";
  e.sync = "store-sync";
  e.notice = "store-notice";
  e.note = "store-note";
  e.todo = "store-todo";
  e.timerBirthday = "store-timer-birthday";
  e.timerFestival = "store-timer-festival";
  e.timerYear = "store-timer-year";
  e.weather = "store-weather";
  e.hotsearch = "store-hotsearch";
  e.calculator = "store-calculator";
  e.payment = "store-payment";
  e.calendar = "store-calendar";
  e.celebrity = "store-celebrity";
  e.worldcup = "store-worldcup";
  e.habit = "store-habit";
  e.exchangeRate = "store-exchange-rate";
  e.news = "store-news";
  e.stock = "store-stock";
  e.game = "store-game";
  e.history = "store-history";
  e.movie = "store-movie";
  e.book = "store-book";
  e.play = "store-play";
  e.clock = "store-clock";
  e.worldClock = "store-world-clock";
  e.hotApp = "store-hotapp";
  e.nba = "store-nba";
  e.chatgpt = "store-chatgpt";
  e.bookmarks = "store-bookmarks";
  e.pageTurning = "store-pageTurning";
  e.haohuola = "store-haohuola";
  e.football = "store-football";
  e.historyRecord = "store-history-record";
  e.activity = "store-activity";
  e.aippt = "store-aippt";
  e.aipaper = "store-aipaper";
  e.compliance = "store-compliance";
})(B ||= {});
export class A {
  static instanceKeyMapper = new Map();
  static getInstanceFromKey(e) {
    if (this.instanceKeyMapper.has(e)) {
      return this.instanceKeyMapper.get(e);
    } else {
      return null;
    }
  }
  static hasInstanceFromKey(e) {
    return this.instanceKeyMapper.has(e);
  }
  static async getAllInitdata() {
    const e = Array.from(this.instanceKeyMapper.values());
    return await Promise.all(e.map(e => e.getInitdata()));
  }
  static async deleteAllForLogout() {
    const e = Array.from(this.instanceKeyMapper.values());
    let t;
    if ((await Promise.all(e.map(e => e.deleteForLogout()))).some(e => {
      let [n] = e;
      return !!n && (t = n, true);
    })) {
      return [t];
    } else {
      return [null, null];
    }
  }
  constructor(e, t = "idb") {
    this.key = e;
    this.type = t;
    this.setInstanceMapper();
  }
  setInstanceMapper() {
    if (A.instanceKeyMapper.has(this.key)) {
      throw new Error("重复的 storage key");
    }
    A.instanceKeyMapper.set(this.key, this);
  }
  write = async e => {
    if (!e) {
      return [{
        message: "空数据"
      }];
    }
    e._writeStorageAt = Date.now();
    try {
      return [null, await i.H_.setItem(this.key, e, this.type)];
    } catch (e) {
      return [e];
    }
  };
  async read() {
    try {
      return [null, await i.H_.getItem(this.key, this.type)];
    } catch (e) {
      return [e];
    }
  }
  async getInitdata() {
    const [e, t] = await this.read();
    if (!e) {
      this.initData = t;
    }
    return this.initData;
  }
  async update(e) {
    const [t, n] = await this.read();
    if (t) {
      return [t];
    }
    if (n && typeof n == "object") {
      const t = {
        ...n,
        ...e
      };
      return await this.write(t);
    }
    return [{
      data: n
    }];
  }
  async delete() {
    try {
      return [null, await i.H_.removeItem(this.key, this.type)];
    } catch (e) {
      return [e];
    }
  }
  async deleteWithKeep() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    if (t.length === 0) {
      return [{
        keys: t
      }];
    }
    const [i, s] = await this.read();
    if (i) {
      return [i];
    }
    if (s && typeof s == "object") {
      const e = {};
      t.forEach(t => {
        e[t] = s[t];
      });
      return await this.write(e);
    }
    return [{
      data: s
    }];
  }
  async deleteForLogout() {
    return await this.delete();
  }
}