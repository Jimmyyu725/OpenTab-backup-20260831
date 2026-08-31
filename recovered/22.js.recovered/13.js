var r;
var _i = require("./5.js");
var _o = _i;
require(/*webcrack:missing*/"./7.js");
var s = require("./0.js");
var _a = require("./50.js");
var _c = require("./23.js");
var u = _c;
var _l = require("./166.js");
async function _h(t, e, n, r = false) {
  try {
    if (n === "idb") {
      await u.setItem(t, e);
    } else if (n === "localstorage") {
      let n = e;
      if (!r) {
        n = JSON.stringify(e);
      }
      if (s.l && _a.a) {
        await Object(_l.d)(t, n);
      } else {
        localStorage.setItem(t, n);
      }
    } else if (n === "storage.local") {
      await new _o((n, r) => chrome.storage.local.set({
        [t]: e
      }, () => {
        const t = chrome.runtime.lastError;
        if (t) {
          r(t);
        }
        n(true);
      }));
    }
    return {
      data: true
    };
  } catch (t) {
    console.error("setStorage -> error", t);
    return {
      error: t
    };
  }
}
async function p(t, e) {
  try {
    if (e === "idb") {
      await u.removeItem(t);
    } else if (e === "localstorage") {
      if (s.l && _a.a) {
        await Object(_l.c)(t);
      } else {
        localStorage.removeItem(t);
      }
    } else if (e === "storage.local") {
      await new _o((e, n) => chrome.storage.local.remove(t, () => {
        const t = chrome.runtime.lastError;
        if (t) {
          n(t);
        }
        e(null);
      }));
    }
    return {
      data: true
    };
  } catch (t) {
    console.error("clearStorage -> error", t);
    return {
      error: t
    };
  }
}
(function (t) {
  t.storeNote = "store-notes";
  t.storeSearch = "store-search";
  t.storeSetting = "store-setting";
  t.storeSite = "store-site";
  t.storeSync = "store-sync";
  t.storeTodo = "store-todo";
  t.storeUser = "store-user";
  t.storeWallpaper = "store-wallpaper";
  t.storeWeather = "store-weather";
  t.storeBookmarks = "store-bookmarks";
  t.storeGmail = "store-gmail";
  t.storePrivacy = "store-privacy";
  t.storeWallpaperAutoData = "store-wallpaper-auto-data";
  t.storeNotification = "store-notification";
})(r ||= {});
export class a {
  constructor(t, e, n) {
    this.options = {
      ensureStringValue: false,
      keepWithLogout: false
    };
    this.key = t;
    this.type = e;
    this.options = Object.assign(Object.assign({}, this.options), n);
    this.setInstanceMapper();
  }
  static getInstanceFromKey(t) {
    if (this.instanceKeyMapper.has(t)) {
      return this.instanceKeyMapper.get(t);
    } else {
      return null;
    }
  }
  static async deleteAllForLogout() {
    const t = Array.from(this.instanceKeyMapper.values());
    let e;
    if ((await _o.all(t.map(async t => await t.deleteForLogout()))).some(t => !!t.error && (e = t.error, true))) {
      return {
        error: e
      };
    } else {
      return {
        data: true
      };
    }
  }
  setInstanceMapper() {
    a.instanceKeyMapper.set(this.key, this);
  }
  async create(t) {
    return await _h(this.key, t, this.type);
  }
  async read(t) {
    return await async function (t, e, n = false) {
      try {
        if (e === "idb") {
          return {
            data: await u.getItem(t)
          };
        }
        if (e === "localstorage") {
          let e;
          e = s.l && _a.a ? await Object(_l.a)(t) : localStorage.getItem(t);
          if (!n && e) {
            if (e === "undefined") {
              return {
                data: undefined
              };
            } else {
              return {
                data: JSON.parse(e)
              };
            }
          } else {
            return {
              data: e
            };
          }
        }
        if (e === "storage.local") {
          return {
            data: await new _o((e, n) => chrome.storage.local.get(t, r => {
              const i = chrome.runtime.lastError;
              if (i) {
                n(i);
              }
              e(r == null ? undefined : r[t]);
            }))
          };
        }
      } catch (t) {
        console.error("getStorage -> error", t);
        return {
          error: t
        };
      }
    }(this.key, t || this.type);
  }
  async update(t) {
    const {
      data: e,
      error: n
    } = await this.read();
    if (n) {
      return {
        error: n
      };
    }
    if (e && typeof e == "object") {
      const n = Object.assign(Object.assign({}, e), t);
      return await this.create(n);
    }
    return {
      error: {
        data: e
      }
    };
  }
  async delete(t) {
    return await p(this.key, t || this.type);
  }
  async deleteWithRetain(...t) {
    if (t.length === 0) {
      return {
        error: {
          keys: t
        }
      };
    }
    const {
      data: e,
      error: n
    } = await this.read();
    if (n) {
      return {
        error: n
      };
    }
    if (e && typeof e == "object") {
      const n = {};
      t.forEach(t => {
        n[t] = e[t];
      });
      return await this.create(n);
    }
    return {
      error: {
        data: e
      }
    };
  }
  async deleteForLogout() {
    if (this.options.keepWithLogout) {
      return {
        data: true
      };
    } else {
      return await this.delete();
    }
  }
}
a.instanceKeyMapper = new Map();
export const d = new a(r.storeNote, "idb");
export const g = new class extends a {
  async create(t) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        _h(this.key, t, "localstorage");
      }, 0);
    }
    return super.create(t);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        p(this.key, "localstorage");
      });
    }
    return super.delete();
  }
  async deleteForLogout() {
    return await super.deleteWithRetain("ignoreSuggest");
  }
}(r.storeSearch, s.i ? "localstorage" : "idb");
export const h = new class extends a {
  async create(t) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        _h(this.key, t, "localstorage");
      }, 0);
    }
    return super.create(t);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        p(this.key, "localstorage");
      });
    }
    return super.delete();
  }
  async deleteForLogout() {
    return await super.deleteWithRetain("permission");
  }
}(r.storeSetting, s.i ? "localstorage" : "idb");
export const i = new class extends a {
  async create(t) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        _h(this.key, t, "localstorage");
      }, 0);
    }
    return super.create(t);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        p(this.key, "localstorage");
      });
    }
    return super.delete();
  }
}(r.storeSite, s.i ? "localstorage" : "idb");
export const j = new class extends a {
  constructor() {
    super(...arguments);
    this.userStore = null;
    this.sendTabsSync = t => {
      console.warn("SyncStorageManager ~ sync: need inject sendTabsSync", t);
    };
  }
  injectUserStore(t) {
    this.userStore = t;
  }
  injectSendTabsSync(t) {
    this.sendTabsSync = t;
  }
  async updateSyncPipe(t, e) {
    if (!this.userStore?.isLogin) {
      return {
        error: "isLogin false"
      };
    }
    const {
      data: r,
      error: i
    } = await this.read();
    if (i || !r) {
      return {
        error: "read error"
      };
    }
    if (!r.isOpenSync) {
      return {
        error: "isOpenSync false"
      };
    }
    const {
      autoBackupPipe: o
    } = r;
    o.data[t] = e;
    o.timestamp = Date.now();
    if (!o.websocketKeys.includes(t)) {
      o.websocketKeys.push(t);
    }
    const s = await this.update({
      autoBackupPipe: o
    });
    this.sendTabsSync(this.key);
    return s;
  }
}(r.storeSync, "idb");
export const k = new a(r.storeTodo, "idb");
export const l = new a(r.storeUser, s.i ? "localstorage" : "idb");
export const n = new a(r.storeWallpaper, "idb");
export const o = new a(r.storeWeather, "idb");
export const m = new a(r.storeWallpaperAutoData, "idb");
export const b = new a(r.storeBookmarks, "localstorage", {
  keepWithLogout: true
});
export const c = new a(r.storeGmail, "localstorage", {
  keepWithLogout: true
});
export const f = new a(r.storePrivacy, "localstorage", {
  keepWithLogout: true
});
export const e = new a(r.storeNotification, "idb");