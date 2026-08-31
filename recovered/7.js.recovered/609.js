require(/*webcrack:missing*/"./19.js");
require(/*webcrack:missing*/"./64.js");
require(/*webcrack:missing*/"./7.js");
var n = require(/*webcrack:missing*/"./2.js");
var s = require(/*webcrack:missing*/"./36.js");
var _a = require(/*webcrack:missing*/"./309.js");
var o = require(/*webcrack:missing*/"./106.js");
var c = require(/*webcrack:missing*/"./0.js");
var r = require(/*webcrack:missing*/"./13.js");
var l = require(/*webcrack:missing*/"./161.js");
var d = require("./254.js");
var u = require("./384.js");
function p() {
  l.slave.postTask("slave:bg-run-clear-wallpaper-timer-task");
}
var h = require("./164.js");
var g = require(/*webcrack:missing*/"./429.js");
var b = require(/*webcrack:missing*/"./165.js");
var y = require(/*webcrack:missing*/"./623.js");
var m = y;
var f = require(/*webcrack:missing*/"./24.js");
var w = require(/*webcrack:missing*/"./620.js");
var v = require(/*webcrack:missing*/"./395.js");
var O = require("./624.js");
function j(e, t, i, n) {
  var s;
  var a = arguments.length;
  var o = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    o = Reflect.decorate(e, t, i, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (s = e[c]) {
        o = (a < 3 ? s(o) : a > 3 ? s(t, i, o) : s(t, i)) || o;
      }
    }
  }
  if (a > 3 && o) {
    Object.defineProperty(t, i, o);
  }
  return o;
}
const k = require("./474.js");
class I extends _a.a {
  constructor() {
    super();
    this.url = k;
    this.urlInUI = k;
    this.rawUrl = k;
    this.setWpSouceCount = e => this.wpSourceCount = e;
    this.type = "default";
    this.switchType = "disabled";
    this.setSwitchType = e => {
      this.switchType = e;
      this._updateTimer(true);
    };
    this.setWpSourceCount = e => this.wpSourceCount = e;
    this.wpExt = "png";
    this.list = [];
    this.index = -1;
    this.timeEnd = 0;
    this.remoteData = [];
    this.opacity = 40;
    this.blur = 0;
    this.setOpacity = e => this.opacity = e;
    this.setBlur = e => this.blur = e;
    this.liked = [];
    this.setLiked = e => {
      this.liked = e;
    };
    this.customColorItems = [];
    this.setCustomColorItems = e => this.customColorItems = e;
    this._rgbaToHex = e => {
      const t = e.replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(",");
      const i = parseFloat(t[3] || "1");
      const n = Math.floor(i * parseInt(t[0]) + (1 - i) * 255);
      const s = Math.floor(i * parseInt(t[1]) + (1 - i) * 255);
      const a = Math.floor(i * parseInt(t[2]) + (1 - i) * 255);
      return ("0" + n.toString(16)).slice(-2) + ("0" + s.toString(16)).slice(-2) + ("0" + a.toString(16)).slice(-2);
    };
    this._maxCollectionlen = 100;
    this.cloudCollection = [];
    this.appendCloudCollection = e => this.cloudCollection.push(e);
    this.setCloudCollection = e => this.cloudCollection = e;
    this._maxRecentUsedLen = 100;
    this.cloudRecentUsedOrder = {};
    this.setCloudRecentUsedOrder = e => {
      const {
        cloudRecentUsedOrder: t,
        cloudRecentUsed: i
      } = this;
      const n = {};
      Object.keys(t).forEach(e => {
        if (i.includes(e)) {
          n[e] = t[e];
        }
      });
      n[e] = Date.now();
      this.cloudRecentUsedOrder = n;
    };
    this.cloudRecentUsed = [];
    this.setCloudRecentUsed = e => {
      const t = Object.keys(this.cloudRecentUsedOrder);
      e.forEach(e => {
        const i = t.indexOf(e);
        if (i !== -1) {
          t.splice(i, 1);
        }
      });
      if (t.length > 0) {
        t.forEach(e => {
          delete this.localRecentUsedOrder[e];
        });
      }
      this.cloudRecentUsed = e;
    };
    this.appendCloudRecentUsed = e => {
      this.cloudRecentUsed.push(e);
      this.cloudRecentUsed = Array.from(new Set(this.cloudRecentUsed));
    };
    this.localRecentUsedOrder = {};
    this.setLocalRecentUsedOrder = e => {
      this.localRecentUsedOrder[e] = Date.now();
    };
    this.localRecentUsed = [];
    this.setLocalRecentUsed = e => {
      const t = Object.keys(this.localRecentUsedOrder);
      e.forEach(e => {
        const i = t.indexOf(e);
        if (i !== -1) {
          t.splice(i, 1);
        }
      });
      if (t.length > 0) {
        t.forEach(e => {
          delete this.localRecentUsedOrder[e];
        });
      }
      this.localRecentUsed = e;
    };
    this.appendLocalRecentUsed = e => {
      this.localRecentUsed.push(e);
      this.localRecentUsed = Array.from(new Set(this.localRecentUsed));
    };
    this.isLibraryItem = e => e.includes(window.__INFINITY__.wpLibraryItemId);
    this.isLocal = e => e.includes(window.__INFINITY__.wpId);
    this.isColorItem = e => e.includes(window.__INFINITY__.wpColorId);
    this.isCurrentWp = e => this.id === e;
    this.diffRemote = e => {
      const t = ["type", "switchType", "timeEnd", "id", "wpSource", "opacity", "blur", "customColorItems"];
      const i = Object.keys(e).every(i => !t.includes(i) || n.d.structural(this[i], e[i]));
      let s = false;
      if (e.type !== "local" && e.url) {
        s = this.urlInUI !== e.url;
      }
      return !i || s;
    };
    this.nextPage = 0;
    this.totalPage = -1;
    this.delay = -1;
    this._whenLocalSynced = async () => {
      (function (e) {
        Object(n.c)(() => {
          const {
            opacity: t,
            blur: i
          } = e;
          const n = {
            "--wallpaper-alpha": t / 100,
            "--wallpaper-filter": i / 5 + "px"
          };
          Object.keys(n).forEach(e => {
            document.body.style.setProperty(e, n[e]);
          });
        });
        Object(n.h)(() => e.type, t => {
          if (!t.includes("Auto")) {
            if (t !== "bing") {
              e.wpSource &&= undefined;
            } else {
              e.wpSource = t;
            }
            e.switchType = "disabled";
            p();
          }
        });
        Object(n.c)(() => {
          const {
            id: t
          } = e;
          if (t) {
            e.addRecentUsedP(t);
          }
        });
        const t = document.querySelector(".wallpaper");
        Object(n.h)(() => [e.urlInUI, e.color], ([i, n]) => {
          if (e.type !== "color") {
            if (t.style.backgroundColor) {
              Object(d.a)("#999");
              setTimeout(() => {
                Object(d.b)(i);
              }, 200);
            } else {
              Object(d.b)(i);
            }
          } else {
            Object(d.a)(n);
          }
        });
      })(this);
      await O.a.initStore();
      if (this.isAuto) {
        this._setCloudAutoAfterInit();
      }
      switch (this.type) {
        case "bing":
          this._setBingAfterInit();
          break;
        case "userLibraryAuto":
          this._checkLibraryExists();
      }
    };
    this._syncLock = false;
    this.mergeRemote = async (e, t) => {
      try {
        if (this._syncLock) {
          return;
        }
        this._syncLock = true;
        if (!("type" in e)) {
          return;
        }
        if (c.n) {
          delete e.blur;
        }
        if ("cloudRecentUsed" in e) {
          if (t) {
            this.setCloudRecentUsed(e.cloudRecentUsed);
          } else {
            const t = Array.from(new Set(e.cloudRecentUsed.concat(this.cloudRecentUsed)));
            this.setCloudRecentUsed(t);
          }
          delete e.cloudRecentUsed;
        }
        if ("customColorItems" in e) {
          this.mergeCustomColor(this.customColorItems, e.customColorItems, t ? 2 : 0);
          delete e.customColorItems;
        }
        if (e.type === "local") {
          await this._mergeLocal(e);
          return;
        }
        e.urlInUI = e.url;
        this._merge(e);
        this._afterSynced();
      } catch (e) {
        console.log(e);
      } finally {
        this._syncLock = false;
      }
    };
    this.windmillRotating = false;
    this._windmillPrevRotateSpeed = 0;
    this._windmillPrevRotateDegree = 0;
    this._windmillPrevRotateTime = -1;
    this.performWindmillRotate = e => {
      if (this._windmillPrevRotateTime === -1) {
        this._windmillPrevRotateTime = e;
        requestAnimationFrame(this.performWindmillRotate);
        return;
      }
      const t = e - this._windmillPrevRotateTime;
      let i = this._windmillPrevRotateDegree;
      const {
        _windmillPrevRotateSpeed: n
      } = this;
      let s = n;
      let a = 0;
      if (this.windmillRotating) {
        if (n < 0.46) {
          let e;
          let i;
          s += t * 0.00036;
          if (s > 0.46) {
            i = (s - 0.46) / 0.00036;
            e = t - i;
            s = 0.46;
          } else {
            e = t;
            i = 0;
          }
          a = i * 0.46 + n * e + e * 0.00018 * e;
        } else {
          a = t * 0.46;
        }
      } else {
        let i;
        s -= t * 0.00036;
        if (s < 0) {
          i = n / 0.00036;
          s = 0;
        } else {
          i = t;
        }
        if (s === 0) {
          e = -1;
        }
        a = n * i - i * 0.00018 * i;
      }
      i -= a;
      i %= 360;
      if (i < 0) {
        i = 360 + i;
      }
      if (this.windmillParent) {
        this.windmillParent.rotateWindMill(i);
      }
      this._windmillPrevRotateDegree = i;
      this._windmillPrevRotateTime = e;
      this._windmillPrevRotateSpeed = s;
      if (s !== 0) {
        requestAnimationFrame(this.performWindmillRotate);
      }
    };
    this._lockLoadRandomP = false;
    this.needSwitchWallpaper = false;
    this._afterWpAutoSwitched = () => {
      this._updateTimer(true);
      if (!O.a.onlyOneItem) {
        return this._prepareNextWp();
      }
    };
    this._lockSwitchWallpaper = false;
    this.timeToSwitchWallpaper = async () => {
      if (!O.a.onlyOneItem && !this._lockSwitchWallpaper) {
        this._lockSwitchWallpaper = true;
        try {
          await this.switchWallpaper();
          await this._afterWpAutoSwitched();
        } finally {
          this._lockSwitchWallpaper = false;
        }
      }
    };
    this.switchToNextWallpaper = async () => {
      try {
        await this.timeToSwitchWallpaper();
      } catch (e) {
        o.message.top(i18n("wallpaper_switch_failure"));
      }
    };
    this.initAutoBackup("wallpaper", ["id", "url", "rawUrl", "wpSource", "wpSourceName", "type", "switchType", "color", "timeEnd", "index", "opacity", "blur", "cloudRecentUsed", "cloudRecentUsedOrder", "customColorItems", "nextPage", "totalPage", "wpExt"]);
    (function (e) {
      return e.initSyncStore(r.n, ["id", "urlInUI", "rawUrl", "wpSource", "wpSourceCount", "wpSourceName", "type", "switchType", "imageName", "imageSource", "imageType", "color", "index", "timeEnd", "remoteData", "opacity", "blur", "cloudRecentUsed", "localRecentUsed", "cloudRecentUsedOrder", "localRecentUsedOrder", "nextPage", "totalPage", "wpExt", "customColorItems", "delay"], undefined);
    })(this).then(this._whenLocalSynced);
    setTimeout(() => {
      this.windmillParent = document.querySelector("newtab-main");
    });
  }
  _updateTimer(e = false) {
    const {
      switchType: t
    } = this;
    if (["disabled", "when-newtab"].includes(t)) {
      p();
      this.setTimeEnd(0);
    } else {
      if (e) {
        const e = Date.now();
        this.setTimeEnd(e + Object(u.a)(t));
      }
      (function (e, t) {
        const i = Date.now();
        const n = Object(u.a)(t);
        const s = e.timeEnd;
        let a;
        if (s > i) {
          a = s - i;
        } else {
          a = n;
          e.setTimeEnd(i + n);
        }
        l.slave.postTask("slave:bg-run-timer-to-switch-wallpaper", a);
      })(this, t);
    }
  }
  setWpSourceName(e) {
    this.wpSourceName = e;
  }
  setWallpaper(e) {
    const {
      url: t,
      urlInUI: i,
      rawUrl: n,
      id: s,
      name: a,
      source: o
    } = e;
    if (a) {
      this.imageName = a;
    }
    this.id = s;
    this.url = t;
    this.urlInUI = i;
    this.rawUrl = n;
    this.imageSource = o;
    this.setBase64Wallpaper();
  }
  async setBase64Wallpaper() {
    const {
      type: e,
      url: t
    } = this;
    if (["local", "color"].includes(e)) {
      return;
    }
    const i = await Object(u.d)(t);
    await Object(h.g)(i);
  }
  setColor(e) {
    this.type = "color";
    this.id = e.id;
    this.color = e.content;
    this.urlInUI = undefined;
  }
  setCloudWallpaper(e) {
    this.type = "cloud";
    this.setCloudWallpaperRaw(e);
  }
  setCloudWallpaperRaw(e) {
    this.setWallpaper({
      type: e.type,
      id: e.id,
      url: e.url,
      urlInUI: e.url,
      rawUrl: e.rawUrl,
      source: e.source
    });
  }
  setAutoWallpaperRaw(e) {
    this.setWallpaper({
      type: e.type,
      id: e.id,
      url: e.url,
      urlInUI: e.url,
      rawUrl: e.rawUrl,
      source: e.source
    });
  }
  setWpExt(e) {
    this.wpExt = e;
  }
  async setLocalWallpaper(e) {
    const {
      file: t
    } = e;
    this.setWpExt(m.getExtension(t.type));
    const i = await Object(u.d)(t);
    await Object(h.g)(i);
    this.setType("local");
    this.setWallpaper({
      type: e.type,
      url: null,
      urlInUI: e.url,
      rawUrl: e.url,
      id: e.id
    });
  }
  async enableBingWallpaper(e) {
    this.type = "bing";
    this.wpSource = "bing";
    this.setBingWallpaper(e);
  }
  setBingWallpaper(e) {
    this.setCloudWallpaperRaw(e);
  }
  setList(e) {
    this.list = e;
  }
  pushList(e) {
    this.list.push(...e);
  }
  setIndex(e) {
    this.index = e;
  }
  setTimeEnd(e) {
    this.timeEnd = e;
  }
  setRemoteData(e) {
    this.remoteData = e;
  }
  pushRemoteData(e) {
    this.remoteData.push(...e);
  }
  spliceRemoteData(e, t = 0) {
    this.remoteData.splice(t, e);
  }
  get isAuto() {
    return this.type.includes("Auto");
  }
  removeLiked(e) {
    const t = this.liked.indexOf(e);
    if (t !== -1) {
      this.liked.splice(t, 1);
    }
  }
  addLiked(e) {
    const t = Object(n.j)(this.liked);
    t.push(e);
    const i = Array.from(new Set(t));
    this.setLiked(i);
  }
  includeLiked(e) {
    return this.liked.includes(e);
  }
  async loadCollectionP() {
    const e = await Object(b.getCollectionWallpaper)();
    if (!e.error) {
      this.setCloudCollection(e.data);
    }
  }
  async loadLikedP() {
    const e = await Object(b.getLikedWallpaper)();
    if (!e.error) {
      this.setLiked(e.data);
    }
  }
  pushCustomColor(e) {
    this.customColorItems.push(...e);
  }
  includesColorItem(e) {
    return this.customColorItems.findIndex(({
      content: t
    }) => e === t) !== -1;
  }
  appendCustomColor(e) {
    if (this.customColorItems.findIndex(({
      content: t
    }) => t === e.content) === -1) {
      const t = Object(n.j)(this.customColorItems);
      this.setCustomColorItems([e].concat(t));
    }
  }
  removeCustomColor(e) {
    const t = this.customColorItems.findIndex(({
      id: t
    }) => t === e);
    if (t !== -1) {
      this.customColorItems.splice(t, 1);
    }
  }
  _rgbToHex(e) {
    return e.map(e => e.toString(16).padStart(0)).reduce((e, t) => e + t);
  }
  async addCustomColorItem(e) {
    if (this.includesColorItem(e)) {
      return;
    }
    const t = this._rgbaToHex(e);
    const i = window.__INFINITY__.color_list;
    const n = i.map(e => f.a.hexColorDelta(t, e));
    const s = i[n.indexOf(Math.max.apply(null, n))];
    const a = {
      id: `${window.__INFINITY__.wpColorId}${Object(w.a)()}`,
      content: e,
      similarColor: s
    };
    try {
      if (g.userStore.isLogin) {
        await Object(b.addCustomColor)(a);
      }
      this.appendCustomColor(Object.assign({
        type: "color"
      }, a));
      v.default.success(i18n("add_success"));
    } catch (e) {
      v.default.error(i18n("network_error"));
    }
  }
  addCloudCollectionP(e) {
    if (this.cloudCollection.includes(e)) {
      return;
    }
    this.appendCloudCollection(e);
    const t = this._maxCollectionlen - this.collectionLen;
    if (t < 0) {
      const e = Object(n.j)(this.cloudCollection).reverse();
      e.length += t;
      this.setCloudCollection(e.reverse());
    }
  }
  removeCloudCollectionP(e) {
    const t = this.cloudCollection.indexOf(e);
    if (t !== -1) {
      this.cloudCollection.splice(t, 1);
    }
  }
  get collectionLen() {
    return this.cloudCollection.length;
  }
  removeCollectionP(e) {
    this.removeCloudCollectionP(e);
  }
  addCollectionP(e) {
    this.addCloudCollectionP(e);
  }
  includeCollection(e) {
    return this.cloudCollection.includes(e);
  }
  dropCloudRecentUsed(e) {
    const t = this.cloudRecentUsed.indexOf(e);
    if (t !== -1) {
      this.cloudRecentUsed.splice(t, 1);
    }
  }
  get recentUsedLen() {
    return this.cloudRecentUsed.length + this.localRecentUsed.length;
  }
  addLocalRecentP(e) {
    this.setLocalRecentUsedOrder(e);
    if (this.localRecentUsed.includes(e)) {
      return;
    }
    this.appendLocalRecentUsed(e);
    const t = this._maxRecentUsedLen - this.recentUsedLen;
    if (t < 0) {
      const e = Object(n.j)(this.localRecentUsed).reverse();
      e.length += t;
      this.setLocalRecentUsed(e.reverse());
    }
  }
  addCloudRecentP(e) {
    this.setCloudRecentUsedOrder(e);
    if (this.cloudRecentUsed.includes(e)) {
      return;
    }
    this.appendCloudRecentUsed(e);
    const t = this._maxRecentUsedLen - this.recentUsedLen;
    if (t < 0) {
      const e = Object(n.j)(this.cloudRecentUsed).reverse();
      e.length += t;
      this.setCloudRecentUsed(e.reverse());
    }
  }
  removeCloudRecentUsedP(e) {
    const t = Object(n.j)(this.cloudRecentUsed);
    e.forEach(e => {
      const i = t.indexOf(e);
      if (i !== -1) {
        t.splice(i, 1);
      }
    });
    this.setCloudRecentUsed(t);
  }
  addRecentUsedP(e) {
    this.addCloudRecentP(e);
  }
  async getBackupData() {
    const e = {};
    this.backupValueKeys.forEach(t => {
      e[t] = Object(n.j)(this[t]);
    });
    try {
      if (this.type === "local") {
        const t = await Object(h.c)();
        e.url = t;
      } else {
        e.url = this.urlInUI;
      }
    } catch (t) {
      e.type = "default";
    }
    return e;
  }
  async _setBingAfterInit() {
    const e = await Object(u.b)();
    if (this.id !== e.id) {
      this.setCloudWallpaperRaw(e);
    }
  }
  setDefaultWallpaper() {
    this.id = null;
    this.type = "default";
    this.urlInUI = this.url = Object(s.c)();
    this.rawUrl = s.b;
  }
  async _checkLibraryExists() {
    try {
      const e = await Object(b.hasWallpaperLibrary)(this.wpSource);
      if (e.error) {
        throw e.error;
      }
      if (e.data !== 1) {
        this.setDefaultWallpaper();
      }
    } catch (e) {}
  }
  _setCloudAutoAfterInit() {
    if (O.a.ready) {
      this._updateTimer(true);
    } else {
      this._afterWpAutoSwitched();
    }
  }
  setType(e) {
    this.type = e;
  }
  _merge(e) {
    Object.keys(e).forEach(t => {
      if (this[t] !== e[t]) {
        this[t] = e[t];
      }
    });
  }
  async _mergeLocal(e) {
    if (this.type === "local" && this.urlInUI.startsWith("blob:")) {
      if ((await Object(h.c)()) !== e.url) {
        const t = await Object(h.a)(e.url);
        e.urlInUI = e.rawUrl = window.URL.createObjectURL(t);
        await Object(h.g)(e.url);
      } else {
        delete e.urlInUI;
        delete e.rawUrl;
      }
    } else {
      const t = await Object(h.a)(e.url);
      e.urlInUI = e.rawUrl = window.URL.createObjectURL(t);
      await Object(h.g)(e.url);
    }
    delete e.url;
    const t = e.wpExt;
    delete e.wpExt;
    this._merge(e);
    if (e.id) {
      this.setWpExt(t);
    } else {
      this.setWpExt("");
    }
    this._afterSynced();
  }
  async mergeCustomColor(e, t, i, n = false) {
    switch (i) {
      case 1:
        if (e.length === 0) {
          return;
        }
        await Object(b.setCustomColorItems)(e.map(e => {
          delete e.type;
          return e;
        }));
        break;
      case 2:
        a.setCustomColorItems(t.map(e => {
          e.type = "color";
          return e;
        }));
        break;
      case 0:
        {
          const i = [];
          const s = [];
          for (let t = 0, n = e.length; t < n; ++t) {
            const n = e[t];
            if (!s.includes(n.id)) {
              i.push(n);
              s.push(n.id);
            }
          }
          for (let e = 0, n = t.length; e < n; ++e) {
            const n = t[e];
            if (!s.includes(n.id)) {
              i.push(n);
              s.push(n.id);
            }
          }
          if (n) {
            await Object(b.setCustomColorItems)(i.map(e => {
              delete e.type;
              return e;
            }));
          }
          a.setCustomColorItems(i.map(e => {
            if (!("type" in e)) {
              e.type = "color";
            }
            return e;
          }));
        }
    }
  }
  _afterSynced() {
    if (s.f) {
      Object(n.i)(() => {
        this.url = this.url.replace(s.g, "");
        this.urlInUI = this.urlInUI.replace(s.g, "");
      });
    }
    this.setBase64Wallpaper();
    if (this.isAuto) {
      this._updateTimer();
      this._prepareNextWp();
    }
  }
  startRotateWindmill() {
    this.windmillRotating = true;
    if (this._windmillPrevRotateSpeed === 0) {
      requestAnimationFrame(this.performWindmillRotate);
    }
  }
  endRotateWindmill() {
    this.windmillRotating = false;
  }
  async randomWallpaper() {
    if (!this._lockLoadRandomP) {
      this._lockLoadRandomP = true;
      this.startRotateWindmill();
      try {
        const {
          data: e,
          error: t
        } = await Object(b.getRandomWallpaper)();
        if (t) {
          throw new Error(JSON.stringify(t));
        }
        const i = await Object(h.f)(e.url);
        if (!i) {
          throw new Error("fetch res to check :" + i);
        }
        this.setCloudWallpaper(Object.assign({
          type: "cloud"
        }, e));
        o.message.top(i18n("wallpaper_switch_success"));
      } catch (e) {
        o.message.top(i18n("wallpaper_switch_failure"));
      } finally {
        this._lockLoadRandomP = false;
        this.endRotateWindmill();
      }
    }
  }
  async getNextWp(...e) {
    const {
      data: t
    } = await Object(b.getNextWallpaper)(...e);
    const [i] = Object(h.b)([t]);
    return i;
  }
  async _prepareNextWp() {
    try {
      const e = this.type !== "userLibraryAuto" ? "library" : "userLibrary";
      const t = await this.getNextWp(this.wpSource, this.id, e);
      if (t.id === this.id) {
        O.a.setOnlyOneItem(true);
      } else {
        O.a.setOnlyOneItem(false);
      }
      await Object(h.f)(t.url);
      O.a.setNextId(t.id);
      O.a.setNextRawURL(t.rawUrl);
      O.a.setNextURL(t.url);
      O.a.setNextItem(t);
      O.a.setReady(true);
    } catch (e) {
      if (!e.__CANCEL__) {
        throw e;
      }
    }
  }
  enableUserLibraryAuto({
    libraryId: e,
    libraryName: t
  }, i, n) {
    this.type = "userLibraryAuto";
    this.switchType = i;
    this.wpSource = e;
    this.wpSourceName = t;
    this._afterEnableWpAuto(n);
  }
  enableCloudAuto(e, t, i) {
    this.type = "cloudAuto";
    this.wpSource = e;
    this.switchType = t;
    this._afterEnableWpAuto(i);
  }
  _afterEnableWpAuto(e) {
    this.setAutoWallpaperRaw(e);
    O.a.setOnlyOneItem(false);
    this._afterWpAutoSwitched();
  }
  async switchWallpaper() {
    if (!O.a.onlyOneItem && !O.a.ready) {
      await this._prepareNextWp();
    }
    this.setAutoWallpaperRaw(O.a.nextItem);
    O.a.setReady(false);
    O.a.clearNextData();
  }
}
j([n.g], I.prototype, "id", undefined);
j([n.g], I.prototype, "url", undefined);
j([n.g], I.prototype, "urlInUI", undefined);
j([n.g], I.prototype, "rawUrl", undefined);
j([n.g], I.prototype, "wpSource", undefined);
j([n.g], I.prototype, "wpSourceCount", undefined);
j([n.b], I.prototype, "setWpSouceCount", undefined);
j([n.g], I.prototype, "type", undefined);
j([n.g], I.prototype, "switchType", undefined);
j([n.b], I.prototype, "setSwitchType", undefined);
j([n.b], I.prototype, "setWpSourceCount", undefined);
j([n.g], I.prototype, "wpSourceName", undefined);
j([n.b], I.prototype, "setWpSourceName", null);
j([n.g], I.prototype, "imageName", undefined);
j([n.g], I.prototype, "imageSource", undefined);
j([n.g], I.prototype, "imageType", undefined);
j([n.b], I.prototype, "setWallpaper", null);
j([n.g], I.prototype, "color", undefined);
j([n.b], I.prototype, "setColor", null);
j([n.b], I.prototype, "setCloudWallpaper", null);
j([n.b], I.prototype, "setCloudWallpaperRaw", null);
j([n.b], I.prototype, "setAutoWallpaperRaw", null);
j([n.g], I.prototype, "wpExt", undefined);
j([n.b], I.prototype, "setWpExt", null);
j([n.b], I.prototype, "enableBingWallpaper", null);
j([n.b], I.prototype, "setBingWallpaper", null);
j([n.g], I.prototype, "list", undefined);
j([n.b], I.prototype, "setList", null);
j([n.b], I.prototype, "pushList", null);
j([n.g], I.prototype, "index", undefined);
j([n.b], I.prototype, "setIndex", null);
j([n.g], I.prototype, "timeEnd", undefined);
j([n.b], I.prototype, "setTimeEnd", null);
j([n.g], I.prototype, "remoteData", undefined);
j([n.b], I.prototype, "setRemoteData", null);
j([n.b], I.prototype, "pushRemoteData", null);
j([n.b], I.prototype, "spliceRemoteData", null);
j([n.g], I.prototype, "opacity", undefined);
j([n.g], I.prototype, "blur", undefined);
j([n.b], I.prototype, "setOpacity", undefined);
j([n.b], I.prototype, "setBlur", undefined);
j([n.e], I.prototype, "isAuto", null);
j([n.g], I.prototype, "liked", undefined);
j([n.b], I.prototype, "setLiked", undefined);
j([n.b], I.prototype, "removeLiked", null);
j([n.b], I.prototype, "addLiked", null);
j([n.g], I.prototype, "customColorItems", undefined);
j([n.b], I.prototype, "setCustomColorItems", undefined);
j([n.b], I.prototype, "pushCustomColor", null);
j([n.b], I.prototype, "removeCustomColor", null);
j([n.b], I.prototype, "addCustomColorItem", null);
j([n.g], I.prototype, "cloudCollection", undefined);
j([n.b], I.prototype, "appendCloudCollection", undefined);
j([n.b], I.prototype, "setCloudCollection", undefined);
j([n.b], I.prototype, "addCloudCollectionP", null);
j([n.b], I.prototype, "removeCloudCollectionP", null);
j([n.e], I.prototype, "collectionLen", null);
j([n.g], I.prototype, "cloudRecentUsed", undefined);
j([n.b], I.prototype, "dropCloudRecentUsed", null);
j([n.b], I.prototype, "setCloudRecentUsed", undefined);
j([n.b], I.prototype, "appendCloudRecentUsed", undefined);
j([n.g], I.prototype, "localRecentUsed", undefined);
j([n.b], I.prototype, "setLocalRecentUsed", undefined);
j([n.b], I.prototype, "appendLocalRecentUsed", undefined);
j([n.e], I.prototype, "recentUsedLen", null);
j([n.b], I.prototype, "addLocalRecentP", null);
j([n.b], I.prototype, "addCloudRecentP", null);
j([n.b], I.prototype, "removeCloudRecentUsedP", null);
j([n.g], I.prototype, "delay", undefined);
j([n.b], I.prototype, "setDefaultWallpaper", null);
j([n.b], I.prototype, "_setCloudAutoAfterInit", null);
j([n.b], I.prototype, "setType", null);
j([n.b], I.prototype, "_merge", null);
j([n.b], I.prototype, "mergeRemote", undefined);
j([n.b], I.prototype, "randomWallpaper", null);
j([n.b], I.prototype, "enableUserLibraryAuto", null);
j([n.b], I.prototype, "enableCloudAuto", null);
j([n.b], I.prototype, "switchWallpaper", null);
export const a = new I();