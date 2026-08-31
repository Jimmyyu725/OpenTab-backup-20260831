require(/*webcrack:missing*/"./7.js");
var o = require(/*webcrack:missing*/"./2.js");
var s = require("./161.js");
function n(e, t, i, o) {
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
const r = {};
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
    this.convertBackupEquals = e => e;
  }
  async initSyncStore(e, t, i = {}, n = 20) {
    const a = e.key;
    if (r[a]) {
      throw new Error("storage key 重复");
    }
    r[a] = this;
    if (t.length !== 0) {
      this.rollbackFromStorage = async () => {
        let s = false;
        const r = Object.create(null);
        Object.keys(i).forEach(e => {
          if (t.includes(e)) {
            r[e] = i[e];
          }
        });
        try {
          const {
            data: i,
            error: o
          } = await e.read();
          if (o) {
            throw o;
          }
          const n = i ? Object.keys(i) : [];
          if (i) {
            n.forEach(e => {
              if (t.includes(e)) {
                r[e] = i[e];
              }
            });
          }
          if (!this.firstSync && (!i || !!t.some(e => !n.includes(e)))) {
            s = true;
          }
        } catch (e) {
          console.error("storageSync", e);
        }
        this.isRollbackFromStorage = true;
        this.stopToStorageReaction();
        this.stopAutoBackupReaction();
        Object(o.i)(() => {
          for (const e in r) {
            this[e] = r[e];
          }
          this.firstSync ||= true;
        });
        this.restartAutoBackupReaction();
        this.stopToStorageReaction = Object(o.h)(() => {
          const e = {};
          t.forEach(t => {
            e[t] = Object(o.j)(this[t]);
          });
          return e;
        }, t => {
          this.isRollbackFromStorage = false;
          e.create(t).then(() => {
            Object(o.i)(() => {
              this.syncTabTime = Date.now();
            });
          });
        }, {
          equals: o.d.structural,
          delay: n,
          fireImmediately: s
        });
      };
      await this.rollbackFromStorage();
      Object(o.h)(() => this.syncTabTime, e => {
        if (e) {
          s.slave.sendMessage("tabs-sync", a);
        }
      }, {
        delay: 60
      });
    }
  }
  restartAutoBackupReaction(e = false) {
    this.stopAutoBackupReaction();
    this.stopAutoBackupReaction = Object(o.h)(() => {
      const e = {};
      this.backupValueKeys.forEach(t => {
        e[t] = Object(o.j)(this[t]);
      });
      return e;
    }, e => {
      (async (e, t) => {
        try {
          const {
            syncStore: o
          } = await Promise.all([require.e(8), require.e(7)]).then(require.bind(null, 602));
          o.pushAutoBackupPipe({
            [e]: t
          });
        } catch (e) {}
      })(this.backupFileKey, e).catch();
    }, {
      fireImmediately: e,
      equals: (e, t) => {
        const i = this.convertBackupEquals(e);
        const s = this.convertBackupEquals(t);
        return o.d.structural(i, s);
      },
      delay: 40
    });
  }
  initAutoBackup(e, t) {
    if (_a.has(e)) {
      throw new Error("file key 重复");
    }
    _a.add(e);
    if (t.length !== 0) {
      this.backupFileKey = e;
      this.backupValueKeys = [...t];
    }
  }
  async getBackupData() {
    const e = {};
    this.backupValueKeys.forEach(t => {
      e[t] = Object(o.j)(this[t]);
    });
    return e;
  }
}
n([o.g], a.prototype, "firstSync", undefined);
n([o.g], a.prototype, "syncTabTime", undefined);
n([o.b], a.prototype, "initSyncStore", null);
export const b = e => {
  const t = r[e];
  if (!(t == null ? undefined : t._lockRollback)) {
    t.rollbackFromStorage();
  }
};