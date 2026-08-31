var r;
var _a = require(/*webcrack:missing*/"./5.js");
var _o = _a;
require(/*webcrack:missing*/"./7.js");
var _i = require(/*webcrack:missing*/"./0.js");
var s = require(/*webcrack:missing*/"./50.js");
var _c = require(/*webcrack:missing*/"./23.js");
var u = _c;
var _l = require(/*webcrack:missing*/"./166.js");
async function _d(e, t, n, r = false) {
  try {
    if (n === "idb") {
      await u.setItem(e, t);
    } else if (n === "localstorage") {
      let n = t;
      if (!r) {
        n = JSON.stringify(t);
      }
      if (_i.l && s.a) {
        await Object(_l.d)(e, n);
      } else {
        localStorage.setItem(e, n);
      }
    } else if (n === "storage.local") {
      await new _o((n, r) => chrome.storage.local.set({
        [e]: t
      }, () => {
        const e = chrome.runtime.lastError;
        if (e) {
          r(e);
        }
        n(true);
      }));
    }
    return {
      data: true
    };
  } catch (e) {
    console.error("setStorage -> error", e);
    return {
      error: e
    };
  }
}
async function _g(e, t) {
  try {
    if (t === "idb") {
      await u.removeItem(e);
    } else if (t === "localstorage") {
      if (_i.l && s.a) {
        await Object(_l.c)(e);
      } else {
        localStorage.removeItem(e);
      }
    } else if (t === "storage.local") {
      await new _o((t, n) => chrome.storage.local.remove(e, () => {
        const e = chrome.runtime.lastError;
        if (e) {
          n(e);
        }
        t(null);
      }));
    }
    return {
      data: true
    };
  } catch (e) {
    console.error("clearStorage -> error", e);
    return {
      error: e
    };
  }
}
(function (e) {
  e.storeNote = "store-notes";
  e.storeSearch = "store-search";
  e.storeSetting = "store-setting";
  e.storeSite = "store-site";
  e.storeSync = "store-sync";
  e.storeTodo = "store-todo";
  e.storeUser = "store-user";
  e.storeWallpaper = "store-wallpaper";
  e.storeWeather = "store-weather";
  e.storeBookmarks = "store-bookmarks";
  e.storeGmail = "store-gmail";
  e.storePrivacy = "store-privacy";
  e.storeWallpaperAutoData = "store-wallpaper-auto-data";
  e.storeNotification = "store-notification";
})(r ||= {});
export class a {
  constructor(e, t, n) {
    this.options = {
      ensureStringValue: false,
      keepWithLogout: false
    };
    this.key = e;
    this.type = t;
    this.options = Object.assign(Object.assign({}, this.options), n);
    this.setInstanceMapper();
  }
  static getInstanceFromKey(e) {
    if (this.instanceKeyMapper.has(e)) {
      return this.instanceKeyMapper.get(e);
    } else {
      return null;
    }
  }
  static async deleteAllForLogout() {
    const e = Array.from(this.instanceKeyMapper.values());
    let t;
    if ((await _o.all(e.map(async e => await e.deleteForLogout()))).some(e => !!e.error && (t = e.error, true))) {
      return {
        error: t
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
  async create(e) {
    return await _d(this.key, e, this.type);
  }
  async read(e) {
    return await async function (e, t, n = false) {
      try {
        if (t === "idb") {
          return {
            data: await u.getItem(e)
          };
        }
        if (t === "localstorage") {
          let t;
          t = _i.l && s.a ? await Object(_l.a)(e) : localStorage.getItem(e);
          if (!n && t) {
            if (t === "undefined") {
              return {
                data: undefined
              };
            } else {
              return {
                data: JSON.parse(t)
              };
            }
          } else {
            return {
              data: t
            };
          }
        }
        if (t === "storage.local") {
          return {
            data: await new _o((t, n) => chrome.storage.local.get(e, r => {
              const a = chrome.runtime.lastError;
              if (a) {
                n(a);
              }
              t(r == null ? undefined : r[e]);
            }))
          };
        }
      } catch (e) {
        console.error("getStorage -> error", e);
        return {
          error: e
        };
      }
    }(this.key, e || this.type);
  }
  async update(e) {
    const {
      data: t,
      error: n
    } = await this.read();
    if (n) {
      return {
        error: n
      };
    }
    if (t && typeof t == "object") {
      const n = Object.assign(Object.assign({}, t), e);
      return await this.create(n);
    }
    return {
      error: {
        data: t
      }
    };
  }
  async delete(e) {
    return await _g(this.key, e || this.type);
  }
  async deleteWithRetain(...e) {
    if (e.length === 0) {
      return {
        error: {
          keys: e
        }
      };
    }
    const {
      data: t,
      error: n
    } = await this.read();
    if (n) {
      return {
        error: n
      };
    }
    if (t && typeof t == "object") {
      const n = {};
      e.forEach(e => {
        n[e] = t[e];
      });
      return await this.create(n);
    }
    return {
      error: {
        data: t
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
  async create(e) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        _d(this.key, e, "localstorage");
      }, 0);
    }
    return super.create(e);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        _g(this.key, "localstorage");
      });
    }
    return super.delete();
  }
  async deleteForLogout() {
    return await super.deleteWithRetain("ignoreSuggest");
  }
}(r.storeSearch, _i.i ? "localstorage" : "idb");
export const h = new class extends a {
  async create(e) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        _d(this.key, e, "localstorage");
      }, 0);
    }
    return super.create(e);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        _g(this.key, "localstorage");
      });
    }
    return super.delete();
  }
  async deleteForLogout() {
    return await super.deleteWithRetain("permission");
  }
}(r.storeSetting, _i.i ? "localstorage" : "idb");
export const i = new class extends a {
  async create(e) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        _d(this.key, e, "localstorage");
      }, 0);
    }
    return super.create(e);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        _g(this.key, "localstorage");
      });
    }
    return super.delete();
  }
}(r.storeSite, _i.i ? "localstorage" : "idb");
export const j = new class extends a {
  constructor() {
    super(...arguments);
    this.userStore = null;
    this.sendTabsSync = e => {
      console.warn("SyncStorageManager ~ sync: need inject sendTabsSync", e);
    };
  }
  injectUserStore(e) {
    this.userStore = e;
  }
  injectSendTabsSync(e) {
    this.sendTabsSync = e;
  }
  async updateSyncPipe(e, t) {
    if (!this.userStore?.isLogin) {
      return {
        error: "isLogin false"
      };
    }
    const {
      data: r,
      error: a
    } = await this.read();
    if (a || !r) {
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
    o.data[e] = t;
    o.timestamp = Date.now();
    if (!o.websocketKeys.includes(e)) {
      o.websocketKeys.push(e);
    }
    const i = await this.update({
      autoBackupPipe: o
    });
    this.sendTabsSync(this.key);
    return i;
  }
}(r.storeSync, "idb");
export const k = new a(r.storeTodo, "idb");
export const l = new a(r.storeUser, _i.i ? "localstorage" : "idb");
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