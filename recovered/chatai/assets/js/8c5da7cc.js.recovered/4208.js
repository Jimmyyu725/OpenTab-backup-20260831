var n = require(/*webcrack:missing*/"./7268.js");
var o = require("./4470.js");
var a = require("./5911.js");
var i = require("./5844.js");
var c = require(/*webcrack:missing*/"./4522.js");
var s = require("./3889.js");
var l = require("./6141.js");
var u = require("./143.js");
export const F = new class {
  storeMapper = new Map();
  optionMapper = new Map();
  setStore(e, t) {
    this.storeMapper.set(e, t);
  }
  setOption(e, t) {
    this.optionMapper.set(e, t);
  }
  async getSyncData(e) {
    const t = this.storeMapper.get(e);
    if (!t) {
      return null;
    }
    const r = this.optionMapper.get(e);
    if (!r) {
      return null;
    }
    let n = (0, o.Z)(t.$state, [...r.syncCloud.watch, "updateCloudTime"]);
    if (r.syncCloud.transformBackup) {
      n = await r.syncCloud.transformBackup(n);
    }
    return n;
  }
  getLocalRecord() {
    const e = {};
    l.S.forEach(t => {
      const r = this.storeMapper.get(t);
      if (!r) {
        return null;
      }
      if (r.$state.updateCloudTime) {
        e[t] = r.$state.updateCloudTime;
      }
    });
    return e;
  }
  getStore(e) {
    return this.storeMapper.get(e);
  }
}();
s.y.listen("all:tabs-restore-storage", async e => {
  let t = d.getStorageOption(e);
  if (!t) {
    try {
      await u.Gl.loadStore(e);
      t = d.getStorageOption(e);
    } catch (e) {}
  }
  if (!t) {
    return;
  }
  const r = c.Ar.getInstanceFromKey(e);
  if (!r) {
    return;
  }
  let [n, o] = await r.read();
  if (n) {
    return;
  }
  const {
    syncStorage: a,
    patchStoreState: i
  } = t;
  if (a.transformRestore) {
    o = await a.transformRestore(o);
  }
  i(o, {
    cause: "storage"
  });
});
s.y.listen("client:tabs-restore-state", async e => {
  let {
    id: t,
    data: r
  } = e;
  let n = d.getStateOption(t);
  if (!n) {
    try {
      await u.Gl.loadStore(t);
      n = d.getStateOption(t);
    } catch (e) {}
  }
  if (!n) {
    return;
  }
  const {
    patchStoreState: o
  } = n;
  o(r, {
    cause: "share"
  });
});
const d = new class {
  syncStorageMapper = new Map();
  syncStateMapper = new Map();
  setStorageOption(e, t) {
    this.syncStorageMapper.set(e, t);
  }
  getStorageOption(e) {
    return this.syncStorageMapper.get(e);
  }
  setStateOption(e, t) {
    this.syncStateMapper.set(e, t);
  }
  getStateOption(e) {
    return this.syncStateMapper.get(e);
  }
}();
export const Z = e => {
  let {
    options: t,
    store: r
  } = e;
  const {
    syncCloud: u,
    syncStorage: h,
    share: p
  } = t;
  const y = u && l.S.includes(r.$id);
  const v = h && c.Ar.hasInstanceFromKey(r.$id);
  if (y || v || p) {
    if (Array.isArray(p)) {
      if (h && p.some(e => h.watch.includes(e))) {
        throw new Error("share 与 syncStorage 字段重复");
      }
      d.setStateOption(r.$id, {
        ...t,
        patchStoreState: b
      });
      const e = (0, a.Z)(async e => {
        s.y.post("client:tabs-restore-state", {
          id: r.$id,
          data: (0, i.Z)(e)
        });
      }, 50, {
        leading: false
      });
      r.restartShare = t => {
        var o;
        if ((o = r.stopShare) !== null && o !== undefined) {
          o.call(r);
        }
        r.stopShare = (0, n.YP)(() => {
          const e = {};
          p.forEach(t => {
            e[t] = r.$state[t];
          });
          return e;
        }, async t => {
          e(t);
        }, t);
      };
      r.restartShare();
    }
    if (v) {
      if (y) {
        h.watch.push("updateCloudTime");
      }
      const e = c.Ar.getInstanceFromKey(r.$id);
      if (!e) {
        throw new Error("未定义Storage");
      }
      if (e.initData) {
        r.$patch((0, o.Z)(e.initData, h.watch));
      }
      d.setStorageOption(r.$id, {
        ...t,
        patchStoreState: b
      });
      const l = (0, a.Z)(async t => {
        const [n] = await e.write((0, i.Z)(t));
        if (!n) {
          s.y.post("all:tabs-restore-storage", r.$id);
        }
      }, 50, {
        leading: false
      });
      r.reset = () => {
        var e;
        var t;
        var n;
        var o;
        var a;
        if ((e = r.stopBackupCloud) !== null && e !== undefined) {
          e.call(r);
        }
        if ((t = r.stopBackupStorage) !== null && t !== undefined) {
          t.call(r);
        }
        r.$reset();
        r.$state.updateCloudTime = 0;
        if ((n = r.restartBackupCloud) !== null && n !== undefined) {
          n.call(r);
        }
        if ((o = r.restartBackupStorage) !== null && o !== undefined) {
          o.call(r);
        }
        const i = c.Ar.getInstanceFromKey(r.$id);
        if (i != null && (a = i.delete) !== null && a !== undefined) {
          a.call(i);
        }
      };
      r.restartBackupStorage = e => {
        var t;
        if ((t = r.stopBackupStorage) !== null && t !== undefined) {
          t.call(r);
        }
        r.stopBackupStorage = (0, n.YP)(() => {
          const e = {};
          h.watch.forEach(t => {
            e[t] = r.$state[t];
          });
          return e;
        }, async e => {
          let t = e;
          if (h.transformBackup) {
            t = await h.transformBackup(e);
          }
          if (t) {
            l(t);
          }
        }, e);
      };
      r.restartBackupStorage();
    }
    if (y) {
      window.addEventListener("sync-cloud:restore", async e => {
        const {
          key: t,
          payload: n,
          type: a
        } = e.detail;
        if (t !== r.$id) {
          return;
        }
        if (n.updateCloudTime === r.updateCloudTime) {
          return;
        }
        let i = n;
        if (u.transformRestore) {
          i = await u.transformRestore(i, a);
          if (!i) {
            return;
          }
        } else if (a === "cloud-merge" || a === "import-merge") {
          i = (0, l.b)((0, o.Z)(r.$state, [...u.watch, "updateCloudTime"]), i);
        }
        if (a === "undo" || a === "cloud-auto" || a === "cloud-cloud") {
          b(i, {
            cause: "cloud"
          });
        } else if (a === "cloud-merge") {
          b(i, {
            cause: "cloud",
            needBackup: true
          });
        } else if (a === "import-import" || a === "import-merge") {
          b(i, {
            cause: "cloud",
            needBackup: true,
            notAutoCloudTime: true
          });
        }
      });
      r.restartBackupCloud = function (e) {
        var t;
        let o = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if ((t = r.stopBackupCloud) !== null && t !== undefined) {
          t.call(r);
        }
        r.stopBackupCloud = (0, n.YP)(() => {
          const e = {};
          u.watch.forEach(t => {
            e[t] = r.$state[t];
          });
          return e;
        }, async e => {
          let t = e;
          if (u.transformBackup) {
            t = await u.transformBackup(e);
          }
          if (t) {
            let e;
            if (o && r.$state.updateCloudTime) {
              e = r.$state.updateCloudTime;
              o = false;
            } else {
              e = g();
              r.$patch({
                updateCloudTime: e
              });
            }
            const t = new CustomEvent("watch:sync-cloud-backup", {
              detail: {
                key: r.$id,
                updateCloudTime: e
              }
            });
            window.dispatchEvent(t);
          }
        }, e);
      };
      r.restartBackupCloud();
      F.setStore(r.$id, r);
      F.setOption(r.$id, t);
    }
  }
  function b(e, t) {
    if (t.cause === "share") {
      r.stopShare();
      r.$patch(e);
      r.restartShare();
    } else if (t.cause === "storage") {
      var n;
      var a;
      r.stopBackupStorage();
      if ((n = r.stopBackupCloud) !== null && n !== undefined) {
        n.call(r);
      }
      r.$patch((0, o.Z)(e, h.watch));
      r.restartBackupStorage();
      if ((a = r.restartBackupCloud) !== null && a !== undefined) {
        a.call(r);
      }
    } else if (t.cause === "cloud") {
      const n = [...u.watch, "updateCloudTime"];
      if (t.needBackup && t.notAutoCloudTime) {
        r.restartBackupCloud(undefined, true);
        r.$patch((0, o.Z)(e, n));
      } else {
        if (!t.needBackup) {
          r.stopBackupCloud();
        }
        r.$patch((0, o.Z)(e, n));
        if (!t.needBackup) {
          r.restartBackupCloud();
        }
      }
    }
  }
};
let p = 0;
function g() {
  const {
    lastBackupTime: t = 0
  } = F.getStore(c.BU.sync)?.$state || {};
  const r = Date.now();
  if (r < t) {
    p += 1;
    return t + p;
  } else {
    return r;
  }
}