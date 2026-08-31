require(/*webcrack:missing*/"./19.js");
require(/*webcrack:missing*/"./7.js");
var o = require(/*webcrack:missing*/"./2.js");
var s = require("./309.js");
var n = require(/*webcrack:missing*/"./24.js");
var r = require(/*webcrack:missing*/"./85.js");
var _a = require(/*webcrack:missing*/"./109.js");
var c = require(/*webcrack:missing*/"./313.js");
var l = require(/*webcrack:missing*/"./0.js");
var p = require("./383.js");
var h = require("./398.js");
var d = require("./311.js");
var u = require(/*webcrack:missing*/"./13.js");
function g(e, t, i, o) {
  var s;
  var n = arguments.length;
  var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    r = Reflect.decorate(e, t, i, o);
  } else {
    for (var a = e.length - 1; a >= 0; a--) {
      if (s = e[a]) {
        r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
      }
    }
  }
  if (n > 3 && r) {
    Object.defineProperty(t, i, r);
  }
  return r;
}
class _b extends s.a {
  constructor() {
    super(...arguments);
    this.localSettings = {};
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.iconSpaceWidth = 0;
    this.iconSpaceHeight = 0;
    this.setting = this.init();
    this.updatetime = 0;
    this.permission = {
      topUseful: -1,
      topBookmark: -1,
      searchSuggest: -1,
      gmailNotice: -1,
      gmailCount: -1,
      todoNotice: -1
    };
    this.logs = new Map();
    this.permissionMapper = {
      topBookmark: [["bookmarks", "favicon"], []],
      topUseful: [["topSites", "favicon"], []],
      searchSuggest: [[], ["https://suggestion.baidu.com/", "https://google.com/"]],
      gmailNotice: [["notifications"], ["https://mail.google.com/"]],
      gmailCount: [[], ["https://mail.google.com/"]],
      todoNotice: [["notifications"], []]
    };
    this.showSettingHomeModal = false;
    this.webClickName = "";
  }
  init(e = {}) {
    return {
      notice: Object.assign({}, _a.b.notice),
      link: Object.assign({}, _a.b.link),
      view: Object.assign({}, _a.b.view),
      layout: Object.assign({}, _a.b.layout),
      animation: Object.assign({}, _a.b.animation),
      icon: Object.assign({}, _a.b.icon),
      search: Object.assign({}, _a.b.search),
      font: Object.assign({}, _a.b.font),
      _v1Setting: e
    };
  }
  get withPermissionTopUseful() {
    return this.setting.view.topUseful && this.permission.topUseful === 1;
  }
  get withPermissionTopBookmark() {
    return this.setting.view.topBookmark && this.permission.topBookmark === 1;
  }
  get withPermissionSearchSuggest() {
    return this.setting.search.searchSuggest && this.permission.searchSuggest === 1;
  }
  get needPermissionList() {
    const e = [];
    const {
      view: t,
      notice: i,
      search: o
    } = this.setting;
    const {
      topUseful: s,
      topBookmark: n,
      searchSuggest: r,
      gmailNotice: a,
      gmailCount: c,
      todoNotice: h
    } = this.permission;
    if (l.m && o.searchSuggest && r !== 1) {
      e.push({
        key: "searchSuggest",
        title: i18n("permission_serch_suggest_title"),
        content: i18n("permission_serch_suggest_content")
      });
    }
    if (l.m && i.gmail && a !== 1) {
      e.push({
        key: "gmailNotice",
        title: i18n("permission_gmail_notice_title"),
        content: i18n("permission_gmail_notice_content")
      });
    }
    if (l.m && i.gmailNumber && c !== 1) {
      e.push({
        key: "gmailCount",
        title: i18n("permission_gmail_num_title"),
        content: i18n("permission_gmail_num_content")
      });
    }
    if (!l.s && !l.r && !!t.topBookmark && n !== 1) {
      e.push({
        key: "topBookmark",
        title: i18n("permission_top_bookmark_title"),
        content: i18n("permission_top_bookmark_content")
      });
    }
    if (!l.s && !l.r && !!t.topUseful && s !== 1) {
      e.push({
        key: "topUseful",
        title: i18n("permission_top_useful_title"),
        content: i18n("permission_top_useful_content")
      });
    }
    if (p.a.needNotificationPermission && h !== 1) {
      if (!l.s && !l.r || Notification.permission !== "denied") {
        e.push({
          key: "todoNotice",
          title: i18n("permission_todo_notice_title"),
          content: i18n("permission_todo_notice_content")
        });
      }
    }
    return e;
  }
  get sideRatio() {
    return this.setting.view.scaleSide;
  }
  reset() {
    this.setting = this.init(this.setting._v1Setting);
    this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
  }
  diffRemote(e) {
    return !o.d.structural(e.setting || {}, this.setting);
  }
  sendSettingValue() {
    if (Object.keys(this.localSettings).length) {
      d.a.sendEvent({
        settingValue: this.localSettings
      });
      this.localSettings = {};
    }
  }
  async mergeRemote(e) {
    const t = e.setting;
    if (!e.setting) {
      return;
    }
    const i = this.setting;
    this.setting = {
      notice: Object.assign(Object.assign({}, i.notice), t.notice),
      link: Object.assign(Object.assign({}, i.link), t.link),
      view: Object.assign(Object.assign({}, i.view), t.view),
      layout: Object.assign(Object.assign({}, i.layout), t.layout),
      animation: Object.assign(Object.assign({}, i.animation), t.animation),
      icon: Object.assign(Object.assign({}, i.icon), t.icon),
      search: Object.assign(Object.assign({}, i.search), t.search),
      font: Object.assign(Object.assign({}, i.font), t.font),
      _v1Setting: t._v1Setting
    };
    const s = await n.a.getTimestamp();
    Object(o.i)(() => {
      this.updatetime = s;
    });
  }
  sendSettingLog(e, t) {
    if (this.logs.has(e)) {
      clearTimeout(this.logs.get(e));
    }
    this.logs.set(e, setTimeout(() => {
      d.a.sendEvent({
        settingAction: {
          [e]: t
        }
      });
      this.logs.delete(e);
    }, 2000));
  }
  async changeSetting(e, t, i) {
    if (this.setting[e][t] === i) {
      return;
    }
    this.setting[e][t] = i;
    if (e === "layout" && (t === "custom" && i === true || t === "customItem")) {
      this.setting.layout.row = this.setting.layout.customItem[0];
      this.setting.layout.col = this.setting.layout.customItem[1];
      this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
    }
    let s = `${e}_${t}`;
    let r = i;
    if (e === "layout" && (t === "col" || t === "row")) {
      this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
      s = "layout";
      r = this.setting.layout.row + "*" + this.setting.layout.col;
    }
    this.sendSettingLog(s, r);
    this.localSettings[s] = r;
    const a = await n.a.getTimestamp();
    Object(o.i)(() => {
      this.updatetime = a;
    });
    this.changeSettingEffect(e, t, i);
  }
  changeLayoutCb(e, t) {
    console.log("col, row", e, t);
    console.log("changeLayoutCb 未注册");
  }
  changeLayout(e) {
    this.changeLayoutCb = e;
  }
  changeSettingEffect(e, t, i) {
    switch (true) {
      case t === "topBookmark":
        if (i) {
          this.requestPermission("topBookmark", true);
        }
        break;
      case t === "topUseful":
        if (i) {
          this.requestPermission("topUseful", true);
        }
        break;
      case e === "notice" && t === "gmail":
        if (i) {
          this.requestPermission("gmailNotice", true);
        }
        break;
      case e === "notice" && t === "gmailNumber":
        if (i) {
          this.requestPermission("gmailCount", true);
        }
        break;
      case t === "searchSuggest":
        if (i) {
          this.requestPermission("searchSuggest", true);
        }
    }
  }
  async checkPermission(e) {
    if (l.s || l.r) {
      switch (e) {
        case "todoNotice":
        case "gmailNotice":
          if (Notification.permission === "granted") {
            this.permission[e] = 1;
          } else if (Notification.permission === "default") {
            this.permission[e] = -1;
          } else {
            this.permission[e] = 0;
          }
          return;
      }
      if (l.s) {
        return;
      }
    }
    if (this.permission[e] === 1) {
      const t = this.permissionMapper[e];
      try {
        if (await r.a.has(t[0], t[1])) {
          return;
        }
      } catch (e) {
        console.log(e);
      }
      Object(o.i)(() => {
        this.permission[e] = -1;
      });
    }
    const t = this.permissionMapper[e];
    try {
      if (await r.a.has(t[0], t[1])) {
        Object(o.i)(() => {
          this.permission[e] = 1;
        });
      }
    } catch (e) {}
  }
  async requestPermission(e, t = false) {
    if ((l.s || l.r) && ["todoNotice", "gmailNotice"].includes(e)) {
      await Object(h.a)();
      Object(o.i)(() => {
        this.permission.todoNotice = 1;
        this.permission.gmailNotice = 1;
      });
      return;
    }
    const i = this.permissionMapper[e];
    if (t || this.permission[e] !== 0 && this.permission[e] !== 1) {
      try {
        await r.a.request(i[0], i[1]);
        Object(o.i)(() => {
          this.permission[e] = 1;
        });
        if (e === "gmailNotice") {
          this.checkPermission("todoNotice");
        }
      } catch (t) {
        if (t && t.message === "REJECT") {
          Object(o.i)(() => {
            this.permission[e] = 0;
          });
        }
      }
    }
  }
  async requestAllPermission() {
    if (l.s || l.r) {
      await Object(h.a)();
      Object(o.i)(() => {
        this.permission.todoNotice = 1;
        this.permission.gmailNotice = 1;
      });
      return;
    }
    const e = [[], []];
    this.needPermissionList.forEach(t => {
      const i = this.permissionMapper[t.key];
      e[0].push(...i[0]);
      if (i) {
        e[1].push(...i[1]);
      }
    });
    try {
      await r.a.request(e[0], e[1]);
      Object(o.i)(() => {
        this.needPermissionList.forEach(e => {
          this.permission[e.key] = 1;
        });
      });
    } catch (e) {
      Object(o.i)(() => {
        this.needPermissionList.forEach(e => {
          this.permission[e.key] = 0;
        });
      });
    }
  }
  resetPermission(e) {
    this.permission[e] = -1;
  }
  setIconSpace(e) {
    this.setting.icon.scale = e.iconScale;
    this.setting.layout.colGap = e.colGap;
    this.setting.layout.rowGap = e.rowGap;
    this.setting.search.scale = e.searchScale;
  }
  openSearchSuggest() {
    if (this.setting.search.searchSuggest) {
      this.requestPermission("searchSuggest", true);
    } else {
      this.setting.search.searchSuggest = true;
    }
  }
  get sideScaleRatio() {
    return this.setting.view.scaleSide;
  }
  toggleShowSettingHome(e) {
    this.setting.view.isShowHomepageBtn = !e;
  }
  toggleSettingHomeModal() {
    this.webClickName = "";
    this.showSettingHomeModal = !this.showSettingHomeModal;
  }
  closeSettingHomeModal() {
    this.showSettingHomeModal = false;
  }
  setWebClickName(e) {
    this.webClickName = e;
  }
}
g([o.g], _b.prototype, "innerWidth", undefined);
g([o.g], _b.prototype, "innerHeight", undefined);
g([o.g], _b.prototype, "iconSpaceWidth", undefined);
g([o.g], _b.prototype, "iconSpaceHeight", undefined);
g([o.g], _b.prototype, "setting", undefined);
g([o.g], _b.prototype, "updatetime", undefined);
g([o.g], _b.prototype, "permission", undefined);
g([o.e], _b.prototype, "withPermissionTopUseful", null);
g([o.e], _b.prototype, "withPermissionTopBookmark", null);
g([o.e], _b.prototype, "withPermissionSearchSuggest", null);
g([o.e], _b.prototype, "needPermissionList", null);
g([o.e], _b.prototype, "sideRatio", null);
g([o.b], _b.prototype, "reset", null);
g([o.b], _b.prototype, "mergeRemote", null);
g([o.b], _b.prototype, "changeSetting", null);
g([o.b], _b.prototype, "checkPermission", null);
g([o.b], _b.prototype, "requestPermission", null);
g([o.b], _b.prototype, "requestAllPermission", null);
g([o.b], _b.prototype, "resetPermission", null);
g([o.b], _b.prototype, "setIconSpace", null);
g([o.b], _b.prototype, "openSearchSuggest", null);
g([o.e], _b.prototype, "sideScaleRatio", null);
g([o.b], _b.prototype, "toggleShowSettingHome", null);
g([o.g], _b.prototype, "showSettingHomeModal", undefined);
g([o.b], _b.prototype, "toggleSettingHomeModal", null);
g([o.b], _b.prototype, "closeSettingHomeModal", null);
g([o.g], _b.prototype, "webClickName", undefined);
g([o.b], _b.prototype, "setWebClickName", null);
export const b = new _b();
b.initSyncStore(u.h, ["setting", "permission", "updatetime"], _a.b);
b.initAutoBackup("setting", ["setting"]);
Object(o.c)(() => {
  if (b.firstSync && b.setting.view.topBookmark) {
    b.checkPermission("topBookmark");
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (b.firstSync && b.setting.view.topUseful) {
    b.checkPermission("topUseful");
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (b.firstSync && b.setting.notice.gmail) {
    b.checkPermission("gmailNotice");
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (p.a.firstSync && p.a.needNotificationPermission) {
    b.checkPermission("todoNotice");
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (b.firstSync && b.setting.notice.gmailNumber) {
    b.checkPermission("gmailCount");
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (b.firstSync && b.setting.search.searchSuggest) {
    b.checkPermission("searchSuggest");
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (b.firstSync && b.permission.gmailNotice === 1) {
    n.a.send({
      key: "bg-notice-gmail-permission",
      data: true
    });
  }
});
Object(o.c)(() => {
  if (b.firstSync) {
    const {
      gmail: e,
      gmailVoice: t,
      gmailNumber: i
    } = b.setting.notice;
    const {
      gmailCount: o,
      gmailNotice: s
    } = b.permission;
    n.a.send({
      key: "bg-notice-gmail-updated",
      data: {
        gmail: e && s === 1,
        gmailVoice: t,
        gmailNumber: i && (s === 1 || o === 1)
      }
    });
  }
}, {
  delay: 100
});
Object(o.c)(() => {
  if (b.firstSync) {
    const e = {
      "--side-ratio": b.sideRatio,
      "--main-ratio": b.setting.view.scaleMain,
      "--icon-radius": Math.round(b.setting.icon.radius * 100) + "%",
      "--icon-font-color": b.setting.font.color,
      "--icon-font-size": Math.ceil(Math.max(b.setting.font.size * b.setting.view.scaleMain, 12)) + "px",
      "--icon-opacity": b.setting.icon.opacity,
      "--icon-visible": b.setting.icon.isHideIconName ? "hidden" : "visible",
      "--search-radius": "" + b.setting.search.radius,
      "--search-opacity": b.setting.search.opacity
    };
    n.a.setStyle(e);
  }
}, {
  delay: 50
});
Object(o.c)(() => {
  if (b.firstSync) {
    let e = 0;
    let t = 20;
    if (b.withPermissionTopBookmark) {
      e += 36;
    }
    if (b.withPermissionTopUseful) {
      t += 26;
    }
    const i = {
      "--top-bar-height": e + "px",
      "--settings-icon-top-offset": t + "px"
    };
    n.a.setStyle(i);
  }
});
const f = e => {
  const t = {
    "--search-height": e.searchHeight,
    "--search-width": e.searchWidth,
    "--search-margin-top": e.searchMarginTop,
    "--search-margin-bottom": e.searchMarginBottom,
    "--search-ratio": e.searchRatio,
    "--icon-box-width": e.iconBoxWidth,
    "--icon-box-height": e.iconBoxHeight,
    "--icon-one-height": e.iconOneHeight,
    "--icon-width": e.iconWidth,
    "--mini-icon-padding": e.miniIconPadding,
    "--icon-ratio": e.iconRatio,
    "--icon-row": b.setting.layout.row,
    "--icon-col": b.setting.layout.col,
    "--main-icons-margin": e.iconsMargin
  };
  n.a.setStyle(t);
};
export const a = (e = true) => {
  const t = {
    row: b.setting.layout.row,
    col: b.setting.layout.col,
    rowGap: b.setting.layout.rowGap,
    colGap: b.setting.layout.colGap,
    iconScale: b.setting.icon.scale,
    searchScale: b.setting.search.scale,
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    miniMode: b.setting.icon.miniMode,
    fontSize: b.setting.font.size,
    topUseful: b.withPermissionTopUseful,
    topBookmark: b.withPermissionTopBookmark,
    mainRatio: b.setting.view.scaleMain
  };
  if (e) {
    requestIdleCallback(() => {
      const e = Object(c.a)(t);
      f(e);
    });
  } else {
    const e = Object(c.a)(t);
    f(e);
  }
};
Object(o.c)(() => {
  if (b.firstSync) {
    a(false);
  }
}, {
  delay: 40
});
window.addEventListener("resize", n.a.throttle(() => {
  a(false);
}, 56));