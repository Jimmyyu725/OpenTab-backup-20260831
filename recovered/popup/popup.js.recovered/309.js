require("./7.js");
var r = require("./2.js");
var i = require("./161.js");
function o(t, e, n, r) {
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
const s = {};
const _a = new Set();
export class a {
  constructor() {
    this.firstSync = false;
    this.syncTabTime = 0;
    this._lockRollback = false;
    this.isRollbackFromStorage = false;
    this.backupFileKey = "";
    this.backupValueKeys = [];
    this.rollbackFromStorage = () => null;
    this.stopToStorageReaction = () => {};
    this.stopAutoBackupReaction = () => {};
    this.convertBackupEquals = t => t;
  }
  async initSyncStore(t, e, n = {}, o = 20) {
    const a = t.key;
    if (s[a]) {
      throw new Error("storage key 重复");
    }
    s[a] = this;
    if (e.length !== 0) {
      this.rollbackFromStorage = async () => {
        let i = false;
        const s = Object.create(null);
        Object.keys(n).forEach(t => {
          if (e.includes(t)) {
            s[t] = n[t];
          }
        });
        try {
          const {
            data: n,
            error: r
          } = await t.read();
          if (r) {
            throw r;
          }
          const o = n ? Object.keys(n) : [];
          if (n) {
            o.forEach(t => {
              if (e.includes(t)) {
                s[t] = n[t];
              }
            });
          }
          if (!this.firstSync && (!n || !!e.some(t => !o.includes(t)))) {
            i = true;
          }
        } catch (t) {
          console.error("storageSync", t);
        }
        this.isRollbackFromStorage = true;
        this.stopToStorageReaction();
        this.stopAutoBackupReaction();
        Object(r.i)(() => {
          for (const t in s) {
            this[t] = s[t];
          }
          this.firstSync ||= true;
        });
        this.restartAutoBackupReaction();
        this.stopToStorageReaction = Object(r.h)(() => {
          const t = {};
          e.forEach(e => {
            t[e] = Object(r.j)(this[e]);
          });
          return t;
        }, e => {
          this.isRollbackFromStorage = false;
          t.create(e).then(() => {
            Object(r.i)(() => {
              this.syncTabTime = Date.now();
            });
          });
        }, {
          equals: r.d.structural,
          delay: o,
          fireImmediately: i
        });
      };
      await this.rollbackFromStorage();
      Object(r.h)(() => this.syncTabTime, t => {
        if (t) {
          i.slave.sendMessage("tabs-sync", a);
        }
      }, {
        delay: 60
      });
    }
  }
  restartAutoBackupReaction(t = false) {
    this.stopAutoBackupReaction();
    this.stopAutoBackupReaction = Object(r.h)(() => {
      const t = {};
      this.backupValueKeys.forEach(e => {
        t[e] = Object(r.j)(this[e]);
      });
      return t;
    }, t => {
      (async (t, e) => {
        try {
          const {
            syncStore: r
          } = await Promise.all([require.e(8), require.e(7)]).then(require.bind(null, 602));
          r.pushAutoBackupPipe({
            [t]: e
          });
        } catch (t) {}
      })(this.backupFileKey, t).catch();
    }, {
      fireImmediately: t,
      equals: (t, e) => {
        const n = this.convertBackupEquals(t);
        const i = this.convertBackupEquals(e);
        return r.d.structural(n, i);
      },
      delay: 40
    });
  }
  initAutoBackup(t, e) {
    if (_a.has(t)) {
      throw new Error("file key 重复");
    }
    _a.add(t);
    if (e.length !== 0) {
      this.backupFileKey = t;
      this.backupValueKeys = [...e];
    }
  }
  async getBackupData() {
    const t = {};
    this.backupValueKeys.forEach(e => {
      t[e] = Object(r.j)(this[e]);
    });
    return t;
  }
}
o([r.g], a.prototype, "firstSync", undefined);
o([r.g], a.prototype, "syncTabTime", undefined);
o([r.b], a.prototype, "initSyncStore", null);
export const b = t => {
  const e = s[t];
  if (!(e == null ? undefined : e._lockRollback)) {
    e.rollbackFromStorage();
  }
};