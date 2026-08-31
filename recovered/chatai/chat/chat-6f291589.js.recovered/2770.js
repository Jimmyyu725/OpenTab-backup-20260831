var i = require("./5981.js");
let s;
let r;
const a = new WeakMap();
const o = new WeakMap();
const u = new WeakMap();
const g = new WeakMap();
const h = new WeakMap();
let c = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") {
        return o.get(e);
      }
      if (t === "objectStoreNames") {
        return e.objectStoreNames || u.get(e);
      }
      if (t === "store") {
        if (n.objectStoreNames[1]) {
          return undefined;
        } else {
          return n.objectStore(n.objectStoreNames[0]);
        }
      }
    }
    return F(e[t]);
  },
  set: (e, t, n) => {
    e[t] = n;
    return true;
  },
  has: (e, t) => e instanceof IDBTransaction && (t === "done" || t === "store") || t in e
};
function l(e) {
  if (e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype) {
    if ((r ||= [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]).includes(e)) {
      return function (...t) {
        e.apply(f(this), t);
        return F(a.get(this));
      };
    } else {
      return function (...t) {
        return F(e.apply(f(this), t));
      };
    }
  } else {
    return function (t, ...n) {
      const i = e.call(f(this), t, ...n);
      u.set(i, t.sort ? t.sort() : [t]);
      return F(i);
    };
  }
}
function d(e) {
  if (typeof e == "function") {
    return l(e);
  } else {
    if (e instanceof IDBTransaction) {
      (function (e) {
        if (o.has(e)) {
          return;
        }
        const t = new Promise((t, n) => {
          const i = () => {
            e.removeEventListener("complete", s);
            e.removeEventListener("error", r);
            e.removeEventListener("abort", r);
          };
          const s = () => {
            t();
            i();
          };
          const r = () => {
            n(e.error || new DOMException("AbortError", "AbortError"));
            i();
          };
          e.addEventListener("complete", s);
          e.addEventListener("error", r);
          e.addEventListener("abort", r);
        });
        o.set(e, t);
      })(e);
    }
    t = e;
    if ((s ||= [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]).some(e => t instanceof e)) {
      return new Proxy(e, c);
    } else {
      return e;
    }
  }
  var t;
}
function F(e) {
  if (e instanceof IDBRequest) {
    return function (e) {
      const t = new Promise((t, n) => {
        const i = () => {
          e.removeEventListener("success", s);
          e.removeEventListener("error", r);
        };
        const s = () => {
          t(F(e.result));
          i();
        };
        const r = () => {
          n(e.error);
          i();
        };
        e.addEventListener("success", s);
        e.addEventListener("error", r);
      });
      t.then(t => {
        if (t instanceof IDBCursor) {
          a.set(t, e);
        }
      }).catch(() => {});
      h.set(t, e);
      return t;
    }(e);
  }
  if (g.has(e)) {
    return g.get(e);
  }
  const t = d(e);
  if (t !== e) {
    g.set(e, t);
    h.set(t, e);
  }
  return t;
}
const f = e => h.get(e);
const C = ["get", "getKey", "getAll", "getAllKeys", "count"];
const p = ["put", "add", "delete", "clear"];
const y = new Map();
function A(e, t) {
  if (!(e instanceof IDBDatabase) || t in e || typeof t != "string") {
    return;
  }
  if (y.get(t)) {
    return y.get(t);
  }
  const n = t.replace(/FromIndex$/, "");
  const i = t !== n;
  const s = p.includes(n);
  if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || !s && !C.includes(n)) {
    return;
  }
  const r = async function (e, ...t) {
    const r = this.transaction(e, s ? "readwrite" : "readonly");
    let a = r.store;
    if (i) {
      a = a.index(t.shift());
    }
    return (await Promise.all([a[n](...t), s && r.done]))[0];
  };
  y.set(t, r);
  return r;
}
c = (e => ({
  ...e,
  get: (t, n, i) => A(t, n) || e.get(t, n, i),
  has: (t, n) => !!A(t, n) || e.has(t, n)
}))(c);
class E {
  static DBName = "hitab";
  static storeNames = [];
  static ensureDB = async () => {
    let e;
    if (this.dbPromise) {
      const t = await this.dbPromise;
      e = t.version + 1;
      t.close();
    }
    this.dbPromise = function (e, t, {
      blocked: n,
      upgrade: i,
      blocking: s,
      terminated: r
    } = {}) {
      const a = indexedDB.open(e, t);
      const o = F(a);
      if (i) {
        a.addEventListener("upgradeneeded", e => {
          i(F(a.result), e.oldVersion, e.newVersion, F(a.transaction));
        });
      }
      if (n) {
        a.addEventListener("blocked", () => n());
      }
      o.then(e => {
        if (r) {
          e.addEventListener("close", () => r());
        }
        if (s) {
          e.addEventListener("versionchange", () => s());
        }
      }).catch(() => {});
      return o;
    }(this.DBName, e, {
      upgrade: e => {
        const t = this.storeNames.filter(t => !e.objectStoreNames.contains(t));
        if (t.length > 0) {
          t.forEach(t => {
            e.createObjectStore(t);
          });
        }
      }
    });
    return this.dbPromise;
  };
  static checkStorage = async () => {
    if (navigator.storage && navigator.storage.estimate) {
      const e = await navigator.storage.estimate();
      if (!e.usage || !e.quota) {
        return;
      }
      if (e.quota - e.usage < 104857600) {
        i.R.warn({
          message: i18n("存储空间不足，请及时清理")
        });
      }
    }
  };
  objStoreName = "";
  driver = "idb";
  constructor(e, t) {
    if (!e) {
      throw new Error("empty object store name");
    }
    this.driver = t ?? this.driver;
    this.objStoreName = e;
    E.storeNames.push(this.objStoreName);
  }
  async getItem(e, t = this.driver) {
    try {
      switch (t) {
        case "idb":
          try {
            const t = await E.dbPromise;
            return await t.get(this.objStoreName, e);
          } catch (t) {
            const n = await E.ensureDB();
            return await n.get(this.objStoreName, e);
          }
        case "storage.local":
          return await new Promise(t => chrome.storage.local.get(e, n => t(n[e])));
      }
    } catch (e) {
      throw e;
    }
  }
  async setItem(e, t, n = this.driver) {
    try {
      switch (n) {
        case "idb":
          try {
            const n = await E.dbPromise;
            return await n.put(this.objStoreName, t, e);
          } catch (n) {
            const i = await E.ensureDB();
            return await i.put(this.objStoreName, t, e);
          }
        case "storage.local":
          return await new Promise(n => chrome.storage.local.set({
            [e]: t
          }, n));
      }
    } catch (e) {
      throw e;
    }
  }
  async removeItem(e, t = this.driver) {
    try {
      switch (t) {
        case "idb":
          try {
            const t = await E.dbPromise;
            return await t.delete(this.objStoreName, e);
          } catch (t) {
            const n = await E.ensureDB();
            return await n.delete(this.objStoreName, e);
          }
        case "storage.local":
          return await new Promise(t => chrome.storage.local.remove(e, t));
      }
    } catch (e) {
      throw e;
    }
  }
  async keys(e = this.driver) {
    try {
      switch (e) {
        case "idb":
          try {
            const e = await E.dbPromise;
            return await e.getAllKeys(this.objStoreName);
          } catch (e) {
            const t = await E.ensureDB();
            return await t.getAllKeys(this.objStoreName);
          }
        case "storage.local":
          return await new Promise(e => chrome.storage.local.get(null, t => e(Object.keys(t))));
      }
    } catch (e) {
      throw e;
    }
  }
}
export const H_ = new E("store");
export const U5 = new E("resource");
export const db = new E("lang", "idb");
E.ensureDB();
E.checkStorage();