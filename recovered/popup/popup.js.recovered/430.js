require("./19.js");
require("./7.js");
var r = require("./2.js");
var i = require("./309.js");
var o = require("./24.js");
var s = require("./85.js");
var _a = require("./109.js");
var c = require("./313.js");
var u = require("./0.js");
var l = require("./383.js");
var h = require("./398.js");
var p = require("./311.js");
var d = require("./13.js");
function f(t, e, n, r) {
  var i;
  var o = arguments.length;
  var s = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (i = t[a]) {
        s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s;
      }
    }
  }
  if (o > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
class g extends i.a {
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
  init(t = {}) {
    return {
      notice: Object.assign({}, _a.b.notice),
      link: Object.assign({}, _a.b.link),
      view: Object.assign({}, _a.b.view),
      layout: Object.assign({}, _a.b.layout),
      animation: Object.assign({}, _a.b.animation),
      icon: Object.assign({}, _a.b.icon),
      search: Object.assign({}, _a.b.search),
      font: Object.assign({}, _a.b.font),
      _v1Setting: t
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
    const t = [];
    const {
      view: e,
      notice: n,
      search: r
    } = this.setting;
    const {
      topUseful: i,
      topBookmark: o,
      searchSuggest: s,
      gmailNotice: a,
      gmailCount: c,
      todoNotice: h
    } = this.permission;
    if (u.m && r.searchSuggest && s !== 1) {
      t.push({
        key: "searchSuggest",
        title: i18n("permission_serch_suggest_title"),
        content: i18n("permission_serch_suggest_content")
      });
    }
    if (u.m && n.gmail && a !== 1) {
      t.push({
        key: "gmailNotice",
        title: i18n("permission_gmail_notice_title"),
        content: i18n("permission_gmail_notice_content")
      });
    }
    if (u.m && n.gmailNumber && c !== 1) {
      t.push({
        key: "gmailCount",
        title: i18n("permission_gmail_num_title"),
        content: i18n("permission_gmail_num_content")
      });
    }
    if (!u.s && !u.r && !!e.topBookmark && o !== 1) {
      t.push({
        key: "topBookmark",
        title: i18n("permission_top_bookmark_title"),
        content: i18n("permission_top_bookmark_content")
      });
    }
    if (!u.s && !u.r && !!e.topUseful && i !== 1) {
      t.push({
        key: "topUseful",
        title: i18n("permission_top_useful_title"),
        content: i18n("permission_top_useful_content")
      });
    }
    if (l.a.needNotificationPermission && h !== 1) {
      if (!u.s && !u.r || Notification.permission !== "denied") {
        t.push({
          key: "todoNotice",
          title: i18n("permission_todo_notice_title"),
          content: i18n("permission_todo_notice_content")
        });
      }
    }
    return t;
  }
  get sideRatio() {
    return this.setting.view.scaleSide;
  }
  reset() {
    this.setting = this.init(this.setting._v1Setting);
    this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
  }
  diffRemote(t) {
    return !r.d.structural(t.setting || {}, this.setting);
  }
  sendSettingValue() {
    if (Object.keys(this.localSettings).length) {
      p.a.sendEvent({
        settingValue: this.localSettings
      });
      this.localSettings = {};
    }
  }
  async mergeRemote(t) {
    const e = t.setting;
    if (!t.setting) {
      return;
    }
    const n = this.setting;
    this.setting = {
      notice: Object.assign(Object.assign({}, n.notice), e.notice),
      link: Object.assign(Object.assign({}, n.link), e.link),
      view: Object.assign(Object.assign({}, n.view), e.view),
      layout: Object.assign(Object.assign({}, n.layout), e.layout),
      animation: Object.assign(Object.assign({}, n.animation), e.animation),
      icon: Object.assign(Object.assign({}, n.icon), e.icon),
      search: Object.assign(Object.assign({}, n.search), e.search),
      font: Object.assign(Object.assign({}, n.font), e.font),
      _v1Setting: e._v1Setting
    };
    const i = await o.a.getTimestamp();
    Object(r.i)(() => {
      this.updatetime = i;
    });
  }
  sendSettingLog(t, e) {
    if (this.logs.has(t)) {
      clearTimeout(this.logs.get(t));
    }
    this.logs.set(t, setTimeout(() => {
      p.a.sendEvent({
        settingAction: {
          [t]: e
        }
      });
      this.logs.delete(t);
    }, 2000));
  }
  async changeSetting(t, e, n) {
    if (this.setting[t][e] === n) {
      return;
    }
    this.setting[t][e] = n;
    if (t === "layout" && (e === "custom" && n === true || e === "customItem")) {
      this.setting.layout.row = this.setting.layout.customItem[0];
      this.setting.layout.col = this.setting.layout.customItem[1];
      this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
    }
    let i = `${t}_${e}`;
    let s = n;
    if (t === "layout" && (e === "col" || e === "row")) {
      this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
      i = "layout";
      s = this.setting.layout.row + "*" + this.setting.layout.col;
    }
    this.sendSettingLog(i, s);
    this.localSettings[i] = s;
    const a = await o.a.getTimestamp();
    Object(r.i)(() => {
      this.updatetime = a;
    });
    this.changeSettingEffect(t, e, n);
  }
  changeLayoutCb(t, e) {
    console.log("col, row", t, e);
    console.log("changeLayoutCb 未注册");
  }
  changeLayout(t) {
    this.changeLayoutCb = t;
  }
  changeSettingEffect(t, e, n) {
    switch (true) {
      case e === "topBookmark":
        if (n) {
          this.requestPermission("topBookmark", true);
        }
        break;
      case e === "topUseful":
        if (n) {
          this.requestPermission("topUseful", true);
        }
        break;
      case t === "notice" && e === "gmail":
        if (n) {
          this.requestPermission("gmailNotice", true);
        }
        break;
      case t === "notice" && e === "gmailNumber":
        if (n) {
          this.requestPermission("gmailCount", true);
        }
        break;
      case e === "searchSuggest":
        if (n) {
          this.requestPermission("searchSuggest", true);
        }
    }
  }
  async checkPermission(t) {
    if (u.s || u.r) {
      switch (t) {
        case "todoNotice":
        case "gmailNotice":
          if (Notification.permission === "granted") {
            this.permission[t] = 1;
          } else if (Notification.permission === "default") {
            this.permission[t] = -1;
          } else {
            this.permission[t] = 0;
          }
          return;
      }
      if (u.s) {
        return;
      }
    }
    if (this.permission[t] === 1) {
      const e = this.permissionMapper[t];
      try {
        if (await s.a.has(e[0], e[1])) {
          return;
        }
      } catch (t) {
        console.log(t);
      }
      Object(r.i)(() => {
        this.permission[t] = -1;
      });
    }
    const e = this.permissionMapper[t];
    try {
      if (await s.a.has(e[0], e[1])) {
        Object(r.i)(() => {
          this.permission[t] = 1;
        });
      }
    } catch (t) {}
  }
  async requestPermission(t, e = false) {
    if ((u.s || u.r) && ["todoNotice", "gmailNotice"].includes(t)) {
      await Object(h.a)();
      Object(r.i)(() => {
        this.permission.todoNotice = 1;
        this.permission.gmailNotice = 1;
      });
      return;
    }
    const n = this.permissionMapper[t];
    if (e || this.permission[t] !== 0 && this.permission[t] !== 1) {
      try {
        await s.a.request(n[0], n[1]);
        Object(r.i)(() => {
          this.permission[t] = 1;
        });
        if (t === "gmailNotice") {
          this.checkPermission("todoNotice");
        }
      } catch (e) {
        if (e && e.message === "REJECT") {
          Object(r.i)(() => {
            this.permission[t] = 0;
          });
        }
      }
    }
  }
  async requestAllPermission() {
    if (u.s || u.r) {
      await Object(h.a)();
      Object(r.i)(() => {
        this.permission.todoNotice = 1;
        this.permission.gmailNotice = 1;
      });
      return;
    }
    const t = [[], []];
    this.needPermissionList.forEach(e => {
      const n = this.permissionMapper[e.key];
      t[0].push(...n[0]);
      if (n) {
        t[1].push(...n[1]);
      }
    });
    try {
      await s.a.request(t[0], t[1]);
      Object(r.i)(() => {
        this.needPermissionList.forEach(t => {
          this.permission[t.key] = 1;
        });
      });
    } catch (t) {
      Object(r.i)(() => {
        this.needPermissionList.forEach(t => {
          this.permission[t.key] = 0;
        });
      });
    }
  }
  resetPermission(t) {
    this.permission[t] = -1;
  }
  setIconSpace(t) {
    this.setting.icon.scale = t.iconScale;
    this.setting.layout.colGap = t.colGap;
    this.setting.layout.rowGap = t.rowGap;
    this.setting.search.scale = t.searchScale;
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
  toggleShowSettingHome(t) {
    this.setting.view.isShowHomepageBtn = !t;
  }
  toggleSettingHomeModal() {
    this.webClickName = "";
    this.showSettingHomeModal = !this.showSettingHomeModal;
  }
  closeSettingHomeModal() {
    this.showSettingHomeModal = false;
  }
  setWebClickName(t) {
    this.webClickName = t;
  }
}
f([r.g], g.prototype, "innerWidth", undefined);
f([r.g], g.prototype, "innerHeight", undefined);
f([r.g], g.prototype, "iconSpaceWidth", undefined);
f([r.g], g.prototype, "iconSpaceHeight", undefined);
f([r.g], g.prototype, "setting", undefined);
f([r.g], g.prototype, "updatetime", undefined);
f([r.g], g.prototype, "permission", undefined);
f([r.e], g.prototype, "withPermissionTopUseful", null);
f([r.e], g.prototype, "withPermissionTopBookmark", null);
f([r.e], g.prototype, "withPermissionSearchSuggest", null);
f([r.e], g.prototype, "needPermissionList", null);
f([r.e], g.prototype, "sideRatio", null);
f([r.b], g.prototype, "reset", null);
f([r.b], g.prototype, "mergeRemote", null);
f([r.b], g.prototype, "changeSetting", null);
f([r.b], g.prototype, "checkPermission", null);
f([r.b], g.prototype, "requestPermission", null);
f([r.b], g.prototype, "requestAllPermission", null);
f([r.b], g.prototype, "resetPermission", null);
f([r.b], g.prototype, "setIconSpace", null);
f([r.b], g.prototype, "openSearchSuggest", null);
f([r.e], g.prototype, "sideScaleRatio", null);
f([r.b], g.prototype, "toggleShowSettingHome", null);
f([r.g], g.prototype, "showSettingHomeModal", undefined);
f([r.b], g.prototype, "toggleSettingHomeModal", null);
f([r.b], g.prototype, "closeSettingHomeModal", null);
f([r.g], g.prototype, "webClickName", undefined);
f([r.b], g.prototype, "setWebClickName", null);
export const b = new g();
b.initSyncStore(d.h, ["setting", "permission", "updatetime"], _a.b);
b.initAutoBackup("setting", ["setting"]);
Object(r.c)(() => {
  if (b.firstSync && b.setting.view.topBookmark) {
    b.checkPermission("topBookmark");
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (b.firstSync && b.setting.view.topUseful) {
    b.checkPermission("topUseful");
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (b.firstSync && b.setting.notice.gmail) {
    b.checkPermission("gmailNotice");
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (l.a.firstSync && l.a.needNotificationPermission) {
    b.checkPermission("todoNotice");
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (b.firstSync && b.setting.notice.gmailNumber) {
    b.checkPermission("gmailCount");
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (b.firstSync && b.setting.search.searchSuggest) {
    b.checkPermission("searchSuggest");
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (b.firstSync && b.permission.gmailNotice === 1) {
    o.a.send({
      key: "bg-notice-gmail-permission",
      data: true
    });
  }
});
Object(r.c)(() => {
  if (b.firstSync) {
    const {
      gmail: t,
      gmailVoice: e,
      gmailNumber: n
    } = b.setting.notice;
    const {
      gmailCount: r,
      gmailNotice: i
    } = b.permission;
    o.a.send({
      key: "bg-notice-gmail-updated",
      data: {
        gmail: t && i === 1,
        gmailVoice: e,
        gmailNumber: n && (i === 1 || r === 1)
      }
    });
  }
}, {
  delay: 100
});
Object(r.c)(() => {
  if (b.firstSync) {
    const t = {
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
    o.a.setStyle(t);
  }
}, {
  delay: 50
});
Object(r.c)(() => {
  if (b.firstSync) {
    let t = 0;
    let e = 20;
    if (b.withPermissionTopBookmark) {
      t += 36;
    }
    if (b.withPermissionTopUseful) {
      e += 26;
    }
    const n = {
      "--top-bar-height": t + "px",
      "--settings-icon-top-offset": e + "px"
    };
    o.a.setStyle(n);
  }
});
const m = t => {
  const e = {
    "--search-height": t.searchHeight,
    "--search-width": t.searchWidth,
    "--search-margin-top": t.searchMarginTop,
    "--search-margin-bottom": t.searchMarginBottom,
    "--search-ratio": t.searchRatio,
    "--icon-box-width": t.iconBoxWidth,
    "--icon-box-height": t.iconBoxHeight,
    "--icon-one-height": t.iconOneHeight,
    "--icon-width": t.iconWidth,
    "--mini-icon-padding": t.miniIconPadding,
    "--icon-ratio": t.iconRatio,
    "--icon-row": b.setting.layout.row,
    "--icon-col": b.setting.layout.col,
    "--main-icons-margin": t.iconsMargin
  };
  o.a.setStyle(e);
};
export const a = (t = true) => {
  const e = {
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
  if (t) {
    requestIdleCallback(() => {
      const t = Object(c.a)(e);
      m(t);
    });
  } else {
    const t = Object(c.a)(e);
    m(t);
  }
};
Object(r.c)(() => {
  if (b.firstSync) {
    a(false);
  }
}, {
  delay: 40
});
window.addEventListener("resize", o.a.throttle(() => {
  a(false);
}, 56));