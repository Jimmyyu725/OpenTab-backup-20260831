import * as n from "./8793.js";
import * as o from /*webcrack:missing*/"./4522.js";
import * as a from /*webcrack:missing*/"./3131.js";
import * as i from "./344.js";
import * as c from /*webcrack:missing*/"./7268.js";
import * as s from "./4208.js";
import * as l from "./2098.js";
import * as u from /*webcrack:missing*/"./4003.js";
import * as f from "./6141.js";
import * as d from "./4470.js";
import * as h from "./8287.js";
import * as p from "./4365.js";
const g = function (e) {
  return function (t, r, n) {
    var o = -1;
    var a = Object(t);
    var i = n(t);
    for (var c = i.length; c--;) {
      var s = i[e ? c : ++o];
      if (r(a[s], s, a) === false) {
        break;
      }
    }
    return t;
  };
}();
import * as y from "./4348.js";
const v = function (e, t) {
  return e && g(e, t, y.Z);
};
import * as b from "./4275.js";
const m = function (e, t) {
  var r = {};
  t = (0, b.Z)(t, 3);
  v(e, function (e, n, o) {
    (0, p.Z)(r, n, t(e, n, o));
  });
  return r;
};
import * as w from "./5844.js";
import * as _ from "./5911.js";
const k = {
  loading: i18n("正在同步"),
  success: i18n("同步完成"),
  fail: i18n("同步失败"),
  undo: i18n("更新成功")
};
const A = {
  loading: i18n("加载中"),
  fail: i18n("加载失败")
};
const E = (0, a.Q_)("tips", {
  share: ["tipsList"],
  state: () => ({
    undoHideTimer: null,
    tipsList: []
  }),
  getters: {
    hasUndo() {
      return !!this.tipsList.some(e => e.type === "undo");
    }
  },
  actions: {
    addTips(e) {
      const t = {
        ...e
      };
      if (t.message === undefined) {
        let e = "";
        if (t.category === "syncOrMerge") {
          e = k[t.type];
          if (typeof this.undoHideTimer == "number") {
            clearTimeout(this.undoHideTimer);
          }
          if (t.type === "undo") {
            this.undoHideTimer = window.setTimeout(() => {
              t.status = "hidden";
              this.tipsList = [...this.tipsList];
            }, 6000);
          } else if (typeof this.undoHideTimer == "number") {
            this.undoHideTimer = null;
          }
        } else if (t.category === "wallpaperLoad") {
          e = A[t.type];
        }
        Object.assign(t, {
          message: e
        });
      }
      const r = this.tipsList.findIndex(e => e.category === t.category);
      if (r > -1) {
        const [e] = this.tipsList.splice(r, 1, t);
        if (e.timer) {
          clearTimeout(e.timer);
        }
      } else {
        this.tipsList.push(t);
      }
      this.tipsList = [...this.tipsList];
      if (t.type === "success" || e.type === "fail") {
        t.timer = window.setTimeout(() => {
          this.removeTips({
            category: e.category
          });
        }, 5000);
      }
    },
    removeTips(e) {
      let {
        category: t
      } = e;
      if (t === "syncOrMerge" && this.undoHideTimer) {
        clearTimeout(this.undoHideTimer);
      }
      const r = this.tipsList.findIndex(e => e.category === t);
      if (r > -1) {
        const e = this.tipsList[r].timer;
        if (e) {
          clearTimeout(e);
        }
        this.tipsList.splice(r, 1);
        this.tipsList = [...this.tipsList];
      }
    }
  }
});
import * as C from "./143.js";
let x = null;
const S = (0, a.Q_)(o.BU.sync, {
  syncStorage: {
    watch: ["mergeModal", "isImport", "mergeType", "waitMergeData", "undoModal", "undoModalTime", "undoLocalData", "firstRestoreSuccess", "lastBackupTime", "autoBackupPipe"]
  },
  state: () => ({
    isImport: false,
    mergeModal: false,
    mergeType: null,
    waitMergeData: null,
    undoModal: false,
    undoModalTime: 0,
    undoLocalData: {},
    autoSyncStatus: null,
    autoSyncProcess: null,
    autoSyncFailMsg: "",
    lastBackupTime: 0,
    firstRestoreSuccess: false,
    autoBackupPipe: {
      datas: {},
      time: 0
    }
  }),
  actions: {
    getDiffKeys(e = {}) {
      const t = s.F.getLocalRecord();
      if ((this.firstRestoreSuccess ? "auto" : "login") === "auto") {
        return Object.keys(e).filter(r => e[r] && e[r] > (t[r] || 0));
      }
      return Object.keys(e).filter(r => e[r] && e[r] !== t[r]);
    },
    setAutoSyncStatus(e) {
      let {
        status: t,
        errMsg: r
      } = e;
      clearTimeout(x);
      if (t === "restore" || t === "backup") {
        this.autoSyncProcess = t;
        this.autoSyncStatus = "loading";
      } else if (t === "fail" || t === "success") {
        if (this.autoSyncStatus !== "loading") {
          return;
        }
        x = setTimeout(() => {
          this.setAutoSyncStatus({
            status: null
          });
        }, 5000);
        this.autoSyncStatus = t;
        this.autoSyncFailMsg = r || "";
      } else {
        this.autoSyncStatus = null;
        this.autoSyncProcess = null;
        this.autoSyncFailMsg = "";
      }
      if (this.autoSyncStatus) {
        E().addTips({
          category: "syncOrMerge",
          type: this.autoSyncStatus
        });
      }
    },
    setBackupPipe(e, t) {
      const r = {
        ...this.autoBackupPipe.datas,
        [e]: t
      };
      this.autoBackupPipe = {
        datas: r,
        time: t
      };
    },
    updateBackupPipeTime() {
      if (Object.keys(this.autoBackupPipe.datas).length > 0) {
        this.autoBackupPipe = {
          datas: this.autoBackupPipe.datas,
          time: this.autoBackupPipe.time + 1
        };
      }
    },
    clearBackupPipe(e) {
      if (arguments.length > 1 && arguments[1] !== undefined && arguments[1] || this.autoBackupPipe.time === e) {
        this.autoBackupPipe = {
          datas: {},
          time: 0
        };
      }
    },
    setSyncSucess(e) {
      this.lastBackupTime = e;
      this.setAutoSyncStatus({
        status: "success"
      });
    },
    async autoBackup(e, t) {
      if (this.autoSyncStatus === "loading") {
        this.updateBackupPipeTime();
        return;
      }
      this.setAutoSyncStatus({
        status: "backup"
      });
      const [r, n] = await (async (e, t) => {
        try {
          const r = await h.hj.post(`${u.H}user-sync/backup`, {
            ...(0, d.Z)(e, f.S),
            force: t
          }, {
            _auth: true
          });
          if (r.code === 0) {
            return [null, r.data];
          }
          throw r;
        } catch (e) {
          return [i18n("网络请求错误")];
        }
      })(e, t);
      if (r !== null) {
        this.setAutoSyncStatus({
          status: "fail",
          errMsg: r
        });
        return;
      }
      this.isImport = false;
      const {
        lastBackupTime: o,
        backupKeys: a,
        backupRecord: i
      } = n;
      const c = {
        ...i
      };
      a.forEach(e => {
        delete c[e];
      });
      const [s, l] = await this.getAutoRestoreData(c);
      if (s === null) {
        await this.useRestore(l, "cloud-auto");
        this.setSyncSucess(o);
      } else {
        this.setAutoSyncStatus({
          status: "fail",
          errMsg: s
        });
      }
    },
    async useRestore(e, t) {
      const r = {
        ...e
      };
      const {
        datas: n
      } = this.autoBackupPipe;
      if (t === "cloud-auto") {
        Object.keys(n).forEach(t => {
          var o;
          if ((o = e[t]) !== null && o !== undefined && o.updateCloudTime) {
            if (e[t].updateCloudTime > n[t]) {
              delete n[t];
            } else {
              delete r[t];
            }
          }
        });
      } else {
        this.clearBackupPipe(undefined, true);
      }
      Object.keys(r).forEach(async e => {
        const n = new CustomEvent("sync-cloud:restore", {
          detail: {
            key: e,
            payload: r[e],
            type: t
          }
        });
        await C.Gl.loadStore(e);
        window.dispatchEvent(n);
      });
      if (t === "import-import") {
        const e = s.F.getLocalRecord();
        for (const t in e) {
          var o;
          var a;
          if (!r[t]) {
            if ((o = s.F.getStore(t)) !== null && o !== undefined && (a = o.reset) !== null && a !== undefined) {
              a.call(o);
            }
          }
        }
      }
      if (t.startsWith("import-")) {
        this.isImport = true;
      }
    },
    async getAutoRestoreData(e) {
      const t = this.getDiffKeys(e);
      if (t.length > 0) {
        this.setAutoSyncStatus({
          status: "restore"
        });
        const [e, r] = await (async e => {
          try {
            const t = await h.hj.get(`${u.H}user-sync/restore`, {
              keys: e
            }, {
              _auth: true
            });
            if (t.code === 0) {
              return [null, {
                lastBackupTime: t.data.lastBackupTime,
                data: (0, d.Z)(t.data, f.S)
              }];
            }
            throw t;
          } catch (e) {
            return [i18n("网络请求错误")];
          }
        })(t);
        if (e !== null) {
          return [e];
        } else {
          return [null, r.data];
        }
      }
      return [null, {}];
    },
    async getCloudLatest(e = 0, t) {
      if (!this.mergeModal || this.firstRestoreSuccess) {
        if (this.lastBackupTime < e) {
          if (this.autoSyncStatus === "loading") {
            setTimeout(() => {
              this.getCloudLatest(e, t);
            }, 3000);
            return;
          }
          const [r, n] = await this.getAutoRestoreData(t);
          if (r !== null) {
            this.setAutoSyncStatus({
              status: "fail",
              errMsg: r
            });
            return;
          }
          if (Object.keys(n).length === 0) {
            this.setAutoSyncStatus({
              status: null
            });
            this.firstRestoreSuccess = true;
            return;
          }
          if (!this.firstRestoreSuccess) {
            if (this.checkRecordForMerge(n)) {
              this.showMergeModal(n, "sync", e);
              return;
            }
            this.firstRestoreSuccess = true;
          }
          await this.useRestore(n, this.firstRestoreSuccess || this.undoModal ? "cloud-auto" : "cloud-cloud");
          this.setSyncSucess(e);
        } else if (e === 0) {
          this.firstRestoreSuccess = true;
          this.toBackupLocalAllData();
        }
        return {};
      }
      this.setAutoSyncStatus({
        status: "restore"
      });
    },
    toBackupLocalAllData() {
      f.S.forEach(async e => {
        const t = await s.F.getSyncData(e);
        if (t != null && t.updateCloudTime) {
          this.setBackupPipe(e, t.updateCloudTime);
        }
      });
    },
    checkRecordForMerge(e) {
      const t = m(e, e => e == null ? undefined : e.updateCloudTime);
      const r = s.F.getLocalRecord();
      for (const e in t) {
        if (Object.prototype.hasOwnProperty.call(t, e)) {
          const n = t[e];
          const o = r[e];
          C.Gl.loadStore(e);
          if (o && o !== n) {
            return true;
          }
          delete r[e];
        }
      }
      return Object.keys(r).length !== 0;
    },
    async showMergeModal(e, t, r) {
      this.mergeModal = true;
      this.mergeType = t;
      this.waitMergeData = {
        lastBackupTime: r,
        restoreData: e
      };
      const n = {};
      await Promise.all(f.S.map(async e => {
        const t = await s.F.getSyncData(e);
        if (t) {
          n[e] = t;
        }
      }));
      this.undoLocalData = n;
    },
    hideMergeModalAndShowUndo() {
      this.mergeModal = false;
      this.firstRestoreSuccess = false;
      setTimeout(() => {
        this.undoModal = true;
        this.undoModalTime = Date.now();
        E().addTips({
          category: "syncOrMerge",
          type: "undo"
        });
      }, 100);
    },
    hideUndoModal() {
      if (this.undoModal) {
        this.undoModal = false;
        this.undoModalTime = 0;
        E().removeTips({
          category: "syncOrMerge"
        });
        this.waitMergeData = null;
        this.undoLocalData = {};
        this.firstRestoreSuccess = true;
      }
    },
    undoRestore() {
      this.mergeModal = true;
      this.undoModal = false;
      this.undoModalTime = 0;
      E().removeTips({
        category: "syncOrMerge"
      });
      this.useRestore(this.undoLocalData, "undo");
    },
    async login(e) {
      this.clearBackupPipe();
      await this.getCloudLatest(e.lastBackupTime, e["backup-record"]);
    },
    logout() {
      this.clearBackupPipe();
      this.autoSyncStatus = null;
      this.autoSyncProcess = null;
      this.autoSyncFailMsg = "";
      this.lastBackupTime = 0;
      this.firstRestoreSuccess = false;
      this.mergeModal = false;
      this.mergeType = null;
      this.undoModal = false;
      this.waitMergeData = null;
      this.undoLocalData = {};
      O.stopSync();
      E().removeTips({
        category: "syncOrMerge"
      });
    },
    importData(e) {
      const {
        data: t
      } = e;
      if (this.checkRecordForMerge(t)) {
        this.showMergeModal(t, "import");
      } else {
        this.useRestore(t, "import-import");
      }
    },
    async exportData() {
      const e = {};
      await Promise.all(f.S.map(async t => {
        const r = await s.F.getSyncData(t);
        if (r && r.updateCloudTime) {
          e[t] = r;
        }
      }));
      return {
        version: u.Ji,
        branch: u.tI,
        timestamp: Date.now(),
        platform: u.Lt,
        data: (0, w.Z)(e)
      };
    }
  }
});
const O = new class {
  enableCollectBackupPipe = false;
  constructor() {
    window.addEventListener("watch:sync-cloud-backup", e => {
      const {
        key: t,
        updateCloudTime: r
      } = e.detail;
      S().setBackupPipe(t, r);
    });
  }
  stopWatchUndoModel = null;
  hideUndoTimer = null;
  startWatchUndoModel = async () => {
    if (this.stopWatchUndoModel) {
      return;
    }
    const e = S();
    if (!e.firstRestoreSuccess) {
      this.stopWatchUndoModel = (0, c.YP)(() => e.undoModalTime, async t => {
        clearTimeout(this.hideUndoTimer);
        if (t) {
          const r = t + 40000 - Date.now();
          if (r > 5000) {
            let n;
            if (Date.now() - t > 6000) {
              n = "hidden";
            }
            E().addTips({
              category: "syncOrMerge",
              type: "undo",
              status: n
            });
            this.hideUndoTimer = window.setTimeout(() => {
              e.hideUndoModal();
              this.startWatchBackupPipe();
              e.updateBackupPipeTime();
            }, r);
          } else {
            e.hideUndoModal();
            this.startWatchBackupPipe();
            e.updateBackupPipeTime();
          }
        }
      }, {
        immediate: true
      });
    }
  };
  stopWatchManual = () => {};
  startWatchFirstManualBackupPipe = async () => {};
  startWatchBackupPipe = async () => {
    const e = S();
    if (e.firstRestoreSuccess) {
      this.stopWatch();
      this.stopWatch = (0, c.YP)(() => e.autoBackupPipe, async t => {
        if (!!t.time && !e.undoModal && !e.mergeModal) {
          this.throttleBackup({
            ...t
          });
        }
      }, {
        immediate: true,
        deep: true
      });
    }
  };
  backup = async e => {
    if (!(await (0, l.n)())) {
      return;
    }
    const t = {};
    await Promise.all(Object.keys(e.datas).map(async e => {
      const r = e;
      const n = await s.F.getSyncData(r);
      if (n) {
        t[r] = n;
      }
    }));
    const r = S();
    if (r.undoModal || r.mergeModal) {
      r.updateBackupPipeTime();
    } else {
      if (Object.keys(t).length > 0) {
        await r.autoBackup(t, r.isImport);
      }
      r.clearBackupPipe(e.time);
    }
  };
  throttleBackup = (0, _.Z)(this.backup, 3000, {
    leading: false
  });
  stopWatch = () => {};
  stopSync = () => {
    this.enableCollectBackupPipe = false;
    this.stopWatch();
  };
}();
import * as B from "./3889.js";
import * as j from /*webcrack:missing*/"./1475.js";
function D(e) {
  return [{
    message: "Unknown Error",
    error: new Error(),
    type: "response",
    payload: e
  }];
}
function F(e) {
  return [{
    message: "Network Error",
    error: e,
    type: "network"
  }];
}
import * as P from /*webcrack:missing*/"./5981.js";
const M = (0, a.Q_)(o.BU.payment, {
  syncStorage: {
    watch: ["inviteListCount", "prices", "inviteOff"]
  },
  state: () => ({
    showPayManual: "",
    activeCard: "intro",
    prices: [],
    inviteOff: 0,
    inviteListList: [],
    inviteListCount: 0,
    inviteListMeta: {
      pageNo: 0,
      pageSize: 50,
      totalPages: 1,
      loading: false,
      error: false,
      finished: false
    },
    subListMeta: {
      loading: false,
      error: false,
      finished: false
    },
    billingList: []
  }),
  getters: {
    showPayAuto() {
      const e = useUserStore();
      return this.activeCard === "success" || !e.isLogin || !e.user.vip;
    }
  },
  actions: {
    clear() {
      this.inviteListMeta = {
        pageNo: 0,
        pageSize: 50,
        totalPages: 1,
        loading: false,
        error: false,
        finished: false
      };
      this.subListMeta = {
        loading: false,
        error: false,
        finished: false
      };
      this.inviteListCount = 0;
      this.inviteListList = [];
      this.billingList = [];
    },
    setShowPayManual(e) {
      if (e === "modifyPlan") {
        this.activeCard = "buy";
      }
      this.showPayManual = e;
    },
    async getPrices() {
      const [e, t] = await (async () => {
        try {
          const e = await h.hj.get(`${u.H}sub/prices`, {}, {
            _auth: true,
            _delay: 0
          });
          if (e.code === 0) {
            return [null, e.data];
          } else {
            return D(e);
          }
        } catch (e) {
          return F(e);
        }
      })();
      if (e) {
        P.R.fail({
          message: e.message
        });
      } else {
        this.prices = t.list;
        this.inviteOff = t.inviteOff;
      }
    },
    async getInviteList(e) {
      if (e > 0 && this.inviteListMeta.pageNo >= this.inviteListMeta.totalPages) {
        return;
      }
      this.inviteListMeta.loading = true;
      this.inviteListMeta.error = false;
      const [t, r] = await (async e => {
        try {
          const t = await h.hj.get(`${u.H}sub/invite-list`, {
            pageNo: e
          }, {
            _auth: true,
            _delay: 0
          });
          if (t.code === 0) {
            t.data.list = t.data.list.map(e => {
              e._time = (0, j.F8)(e.createdAt);
              return e;
            });
            return [null, t.data];
          } else {
            return D(t);
          }
        } catch (e) {
          return F(e);
        }
      })(e);
      this.inviteListMeta.loading = false;
      if (t) {
        this.inviteListMeta.error = true;
      } else {
        this.inviteListCount = r.count;
        this.inviteListList = e <= 1 ? [...r.list] : [...this.inviteListList, ...r.list];
        this.inviteListMeta = {
          ...this.inviteListMeta,
          pageNo: r.pageNo,
          pageSize: r.pageSize,
          totalPages: r.totalPages,
          finished: r.pageNo >= r.totalPages
        };
      }
    },
    async getSubRecord() {
      this.subListMeta.loading = true;
      this.subListMeta.error = false;
      const e = this.billingList.length > 0 ? this.billingList.slice(-1)[0].id : "";
      const [t, r] = await (async e => {
        try {
          const t = await h.hj.get(`${u.H}sub/billing`, {
            begin: e
          }, {
            _auth: true,
            _delay: 0
          });
          if (t.code === 0) {
            t.data.list = t.data.list.map(e => {
              e._time = (0, j.F8)(e.created);
              return e;
            });
            return [null, t.data];
          } else {
            return D(t);
          }
        } catch (e) {
          return F(e);
        }
      })(e);
      this.subListMeta.loading = false;
      if (t) {
        this.subListMeta.error = true;
      } else {
        this.subListMeta.finished = !r.hasMore;
        this.billingList = [...this.billingList, ...r.list];
      }
    },
    setActiveCard(e) {
      this.activeCard = e;
    },
    async createOrder(e, t) {
      const [r, n] = await (async (e, t) => {
        try {
          const r = await h.hj.post(`${u.H}sub/checkout-create`, {
            price_id: e,
            invite_code: t
          }, {
            _auth: true,
            _delay: 0
          });
          if (r.code === 0) {
            return [null, r.data];
          } else {
            return D(r);
          }
        } catch (e) {
          return F(e);
        }
      })(e, t);
      if (r !== null) {
        if (r.type === "response" && r.payload.code === 4017) {
          P.R.fail({
            message: "Invite code error."
          });
        }
        return "";
      } else {
        return n;
      }
    },
    async modifyPayMethod() {
      const [e, t] = await (async () => {
        try {
          const e = await h.hj.post(`${u.H}sub/checkout-modify`, {}, {
            _auth: true,
            _delay: 0
          });
          if (e.code === 0) {
            return [null, e.data];
          } else {
            return D(e);
          }
        } catch (e) {
          return F(e);
        }
      })();
      if (e !== null) {
        return "";
      } else {
        return t;
      }
    },
    async modifyPlan(e, t) {
      const [r] = await (async (e, t) => {
        try {
          const r = await h.hj.post(`${u.H}sub/modify`, {
            price_id: e,
            invite_code: t
          }, {
            _auth: true,
            _delay: 0
          });
          if (r.code === 0) {
            return [null, r.data];
          } else {
            return D(r);
          }
        } catch (e) {
          return F(e);
        }
      })(e, t);
      if (r !== null) {
        P.R.fail({
          message: "Update failed."
        });
        return false;
      } else {
        this.setShowPayManual("");
        P.R.success({
          message: "Success, the next cycle will use the new plan"
        });
        return true;
      }
    }
  }
});
require(/*webcrack:missing*/"./1585.js");
import * as T from "./5424.js";
import * as I from "./8039.js";
var L = Math.floor;
var Z = Math.random;
const U = function (e, t) {
  return e + L(Z() * (t - e + 1));
};
const R = function (e, t) {
  var r = -1;
  var n = e.length;
  var o = n - 1;
  for (t = t === undefined ? n : t; ++r < t;) {
    var a = U(r, o);
    var i = e[a];
    e[a] = e[r];
    e[r] = i;
  }
  e.length = t;
  return e;
};
const z = function (e) {
  return R((0, I.Z)(e));
};
import * as H from /*webcrack:missing*/"./2743.js";
const N = function (e, t) {
  return (0, H.Z)(t, function (t) {
    return e[t];
  });
};
const W = function (e) {
  if (e == null) {
    return [];
  } else {
    return N(e, (0, y.Z)(e));
  }
};
const $ = function (e) {
  return R(W(e));
};
import * as q from /*webcrack:missing*/"./3829.js";
const Y = function (e) {
  return ((0, q.Z)(e) ? z : $)(e);
};
import * as Q from "./8509.js";
var V = Q;
import * as G from "./9543.js";
var K = G;
function J(e, t, r, n, o) {
  return (o - n) / (r - t) * (e - r) + o;
}
function X(e) {
  const t = function (e) {
    const t = e.colors;
    const r = e.pigment;
    const n = e.lighting;
    const o = J(n, 0, 100, 137, 204);
    const a = J(n, 0, 100, 18, 153);
    const i = `rgb(255, ${String(Math.ceil(o))}, ${String(Math.ceil(a))})`;
    return t.map(e => n === 50 && r === 50 ? e : V(e).mix(V(i), J(n, 0, 100, -0.2, 0.2)).saturate(J(n, 0, 100, -0.1, 0.1)).darken(J(n, 0, 100, -0.05, 0.05)).saturate(J(r, 0, 100, -0.5, 0.5)).darken(J(r, 0, 100, -0.1, 0.1)).hex());
  }({
    colors: e.colors,
    pigment: e.pigment !== undefined ? e.pigment : Math.random() * 50,
    lighting: e.lighting !== undefined ? e.lighting : Math.random() * 50
  });
  const r = t[0];
  const n = t[1];
  const o = K(r).luminance() < K(n).luminance();
  const a = o ? r : n;
  const i = o ? n : r;
  const c = K.bezier([a, i]).scale().colors(4);
  return {
    id: c.join(""),
    category: e.category,
    primary: a,
    secondary: i,
    colors: c
  };
}
const ee = [{
  category: "red",
  colors: ["#FF0000", "#333333"]
}, {
  category: "red",
  colors: ["#C9253D", "#FC7244"]
}, {
  category: "red",
  colors: ["#ED403B", "#FBB587"]
}, {
  category: "red",
  colors: ["#FC0100", "#C5BFB6"]
}, {
  category: "red",
  colors: ["#DC3022", "#9D2932"]
}, {
  category: "red",
  colors: ["#FD5944", "#ACA285"]
}, {
  category: "red",
  colors: ["#F55361", "#FFEA82"]
}, {
  category: "red",
  colors: ["#940812", "#F33B89"]
}, {
  category: "red",
  colors: ["#C42729", "#19B5FF"]
}, {
  category: "red",
  colors: ["#E5806E", "#2FCFBA"]
}, {
  category: "red",
  colors: ["#CF376E", "#E16C55"]
}, {
  category: "red",
  colors: ["#CF376E", "#511959"]
}, {
  category: "red",
  colors: ["#C34538", "#E2E0DF"]
}, {
  category: "red",
  colors: ["#CF0110", "#901C22"]
}, {
  category: "red",
  colors: ["#E77876", "#18D0D8"]
}, {
  category: "red",
  colors: ["#E77576", "#D5B837"]
}, {
  category: "red",
  colors: ["#E77576", "#44254F"]
}, {
  category: "red",
  colors: ["#DA3047", "#E7E7EE"]
}, {
  category: "red",
  colors: ["#D34445", "#DD7456"]
}, {
  category: "red",
  colors: ["#DF4B58", "#95DC28"]
}, {
  category: "red",
  colors: ["#DB343E", "#881E30"]
}, {
  category: "red",
  colors: ["#510E0E", "#DB343E"]
}, {
  category: "red",
  colors: ["#F90043", "#F56A9E"]
}, {
  category: "red",
  colors: ["#FE2E16", "#00B5B5"]
}, {
  category: "red",
  colors: ["#D23656", "#E3D5B6"]
}, {
  category: "red",
  colors: ["#B20024", "#EE6242"]
}, {
  category: "red",
  colors: ["#FF315B", "#3DEE6D"]
}, {
  category: "red",
  colors: ["#EB2967", "#CDFFBA"]
}, {
  category: "red",
  colors: ["#FF0000", "#0077FF"]
}, {
  category: "red",
  colors: ["#DC3022", "#FEB3A7"]
}, {
  category: "red",
  colors: ["#FF0000", "#C7BFB6"]
}, {
  category: "red",
  colors: ["#FF225E", "#520430"]
}, {
  category: "red",
  colors: ["#FF0026", "#7A004E"]
}, {
  category: "red",
  colors: ["#FF0618", "#FBF6D2"]
}, {
  category: "red",
  colors: ["#FF4843", "#8791D5"]
}, {
  category: "red",
  colors: ["#FF3634", "#F6F5F8"]
}, {
  category: "red",
  colors: ["#EF857E", "#161839"]
}, {
  category: "red",
  colors: ["#E74242", "#414242"]
}, {
  category: "red",
  colors: ["#E03C2D", "#FFB813"]
}, {
  category: "red",
  colors: ["#813C24", "#DB3239"]
}, {
  category: "red",
  colors: ["#D45A64", "#FFB099"]
}, {
  category: "red",
  colors: ["#E87179", "#615757"]
}, {
  category: "red",
  colors: ["#E5194C", "#F7CD00"]
}, {
  category: "red",
  colors: ["#D7483E", "#AED3CC"]
}, {
  category: "red",
  colors: ["#EE104D", "#002F58"]
}, {
  category: "red",
  colors: ["#F10000", "#FFCF00"]
}, {
  category: "red",
  colors: ["#ED1615", "#5F198D"]
}, {
  category: "orange",
  colors: ["#FE8611", "#261301"]
}, {
  category: "orange",
  colors: ["#FF3A00", "#FFE100"]
}, {
  category: "orange",
  colors: ["#F86A0D", "#FFB51F"]
}, {
  category: "orange",
  colors: ["#FFA402", "#CA6922"]
}, {
  category: "orange",
  colors: ["#F59300", "#F23700"]
}, {
  category: "orange",
  colors: ["#FB8500", "#FA6000"]
}, {
  category: "orange",
  colors: ["#DB8231", "#E1E85D"]
}, {
  category: "orange",
  colors: ["#FB8700", "#244A7E"]
}, {
  category: "orange",
  colors: ["#EA7100", "#F9B11D"]
}, {
  category: "orange",
  colors: ["#FFCC05", "#B52888"]
}, {
  category: "orange",
  colors: ["#FEB44A", "#D6F522"]
}, {
  category: "orange",
  colors: ["#FF4200", "#3E2E3B"]
}, {
  category: "orange",
  colors: ["#FF9300", "#6FCFF6"]
}, {
  category: "orange",
  colors: ["#FFBE00", "#FF9300"]
}, {
  category: "orange",
  colors: ["#FE984C", "#00AE6B"]
}, {
  category: "orange",
  colors: ["#FF7700", "#812800"]
}, {
  category: "orange",
  colors: ["#FFB500", "#3B2526"]
}, {
  category: "orange",
  colors: ["#FFBD00", "#1BAAE4"]
}, {
  category: "orange",
  colors: ["#FFA770", "#FF5666"]
}, {
  category: "orange",
  colors: ["#D9482D", "#E79046"]
}, {
  category: "orange",
  colors: ["#E79046", "#624137"]
}, {
  category: "orange",
  colors: ["#F9601C", "#D2F973"]
}, {
  category: "orange",
  colors: ["#F5704C", "#034941"]
}, {
  category: "orange",
  colors: ["#E87800", "#3B2527"]
}, {
  category: "orange",
  colors: ["#FCB315", "#414242"]
}, {
  category: "orange",
  colors: ["#E84E22", "#414242"]
}, {
  category: "orange",
  colors: ["#E04331", "#73B7BE"]
}, {
  category: "orange",
  colors: ["#E84E22", "#F37821"]
}, {
  category: "orange",
  colors: ["#F04223", "#27337F"]
}, {
  category: "orange",
  colors: ["#FFAE00", "#F35B0A"]
}, {
  category: "orange",
  colors: ["#FE8656", "#FF5F12"]
}, {
  category: "orange",
  colors: ["#FB5400", "#20CFC5"]
}, {
  category: "orange",
  colors: ["#FFB813", "#E03C2D"]
}, {
  category: "orange",
  colors: ["#EC7024", "#C4D527"]
}, {
  category: "orange",
  colors: ["#FFD341", "#04F0DE"]
}, {
  category: "orange",
  colors: ["#ED9C00", "#FEAD00"]
}, {
  category: "orange",
  colors: ["#FEA15F", "#FFB65F"]
}, {
  category: "orange",
  colors: ["#FF6701", "#9A141B"]
}, {
  category: "orange",
  colors: ["#F86A0D", "#FFFFFF"]
}, {
  category: "orange",
  colors: ["#F17400", "#F5C0D8"]
}, {
  category: "orange",
  colors: ["#ED5F18", "#57228B"]
}, {
  category: "orange",
  colors: ["#DF513B", "#20CFC5"]
}, {
  category: "orange",
  colors: ["#F99F25", "#BD3109"]
}, {
  category: "yellow",
  colors: ["#DDFB00", "#F94270"]
}, {
  category: "yellow",
  colors: ["#FFFD91", "#941D39"]
}, {
  category: "yellow",
  colors: ["#FFF900", "#004D73"]
}, {
  category: "yellow",
  colors: ["#F5F460", "#CFE655"]
}, {
  category: "yellow",
  colors: ["#D5B837", "#E77576"]
}, {
  category: "yellow",
  colors: ["#CCA30B", "#D8D8DB"]
}, {
  category: "yellow",
  colors: ["#ECED6C", "#C2C5AE"]
}, {
  category: "yellow",
  colors: ["#FFEA82", "#FBB099"]
}, {
  category: "yellow",
  colors: ["#E1B63C", "#FDD1D3"]
}, {
  category: "yellow",
  colors: ["#FFEA82", "#F55361"]
}, {
  category: "yellow",
  colors: ["#E9DF4B", "#2AAAF0"]
}, {
  category: "yellow",
  colors: ["#EDC72E", "#C01300"]
}, {
  category: "yellow",
  colors: ["#DFB800", "#FED400"]
}, {
  category: "yellow",
  colors: ["#EDFC1F", "#1491C5"]
}, {
  category: "yellow",
  colors: ["#F6CD04", "#589F3D"]
}, {
  category: "yellow",
  colors: ["#F0F438", "#6ABEEA"]
}, {
  category: "yellow",
  colors: ["#FEF6B9", "#E67EB3"]
}, {
  category: "yellow",
  colors: ["#FAEA00", "#312282"]
}, {
  category: "yellow",
  colors: ["#FFC927", "#F33800"]
}, {
  category: "yellow",
  colors: ["#FFDA00", "#C38437"]
}, {
  category: "yellow",
  colors: ["#D7B124", "#D1FB99"]
}, {
  category: "yellow",
  colors: ["#F2D500", "#FC0000"]
}, {
  category: "yellow",
  colors: ["#FBDD00", "#FBE781"]
}, {
  category: "yellow",
  colors: ["#F8FB20", "#FAFAFA"]
}, {
  category: "yellow",
  colors: ["#FAF9CD", "#F3D7A5"]
}, {
  category: "yellow",
  colors: ["#E9D06D", "#119781"]
}, {
  category: "yellow",
  colors: ["#F5BB00", "#F44130"]
}, {
  category: "yellow",
  colors: ["#F5BB00", "#9E50A4"]
}, {
  category: "yellow",
  colors: ["#EBE70E", "#ED2C2D"]
}, {
  category: "yellow",
  colors: ["#FFCC05", "#B52888"]
}, {
  category: "yellow",
  colors: ["#FDD734", "#40D7AB"]
}, {
  category: "yellow",
  colors: ["#FFE3A4", "#FF294E"]
}, {
  category: "yellow",
  colors: ["#FFD44E", "#F3F0E9"]
}, {
  category: "yellow",
  colors: ["#FED45B", "#F6A648"]
}, {
  category: "yellow",
  colors: ["#F2D03A", "#F7E59C"]
}, {
  category: "yellow",
  colors: ["#FFD617", "#FFC200"]
}, {
  category: "green",
  colors: ["#95DC28", "#DF4B58"]
}, {
  category: "green",
  colors: ["#2D351F", "#95DC28"]
}, {
  category: "green",
  colors: ["#484F39", "#95DC28"]
}, {
  category: "green",
  colors: ["#12CD7F", "#163E41"]
}, {
  category: "green",
  colors: ["#12CB43", "#0B5925"]
}, {
  category: "green",
  colors: ["#12CB43", "#0E4261"]
}, {
  category: "green",
  colors: ["#16493F", "#11BC21"]
}, {
  category: "green",
  colors: ["#072A2D", "#89DD8E"]
}, {
  category: "green",
  colors: ["#3F5A43", "#B0D0C5"]
}, {
  category: "green",
  colors: ["#A1BE99", "#0A3E49"]
}, {
  category: "green",
  colors: ["#65CB05", "#34482F"]
}, {
  category: "green",
  colors: ["#609C39", "#3A5435"]
}, {
  category: "green",
  colors: ["#34482F", "#609C39"]
}, {
  category: "green",
  colors: ["#465822", "#EED3D6"]
}, {
  category: "green",
  colors: ["#26341C", "#D6BCC0"]
}, {
  category: "green",
  colors: ["#3E4F20", "#6AC3C7"]
}, {
  category: "green",
  colors: ["#A3C75E", "#F33B89"]
}, {
  category: "green",
  colors: ["#55674F", "#D62D94"]
}, {
  category: "green",
  colors: ["#A3C75E", "#2D5251"]
}, {
  category: "green",
  colors: ["#006442", "#78962E"]
}, {
  category: "green",
  colors: ["#00D800", "#006442"]
}, {
  category: "green",
  colors: ["#8ACBA6", "#FF498A"]
}, {
  category: "green",
  colors: ["#00E75D", "#BAA098"]
}, {
  category: "green",
  colors: ["#00FD6C", "#5A0089"]
}, {
  category: "green",
  colors: ["#3DEE6D", "#FF315B"]
}, {
  category: "green",
  colors: ["#56863E", "#74AE53"]
}, {
  category: "green",
  colors: ["#9ECC2C", "#4CB145"]
}, {
  category: "green",
  colors: ["#99AA89", "#686868"]
}, {
  category: "green",
  colors: ["#77C07D", "#555759"]
}, {
  category: "green",
  colors: ["#62BD45", "#2B70A9"]
}, {
  category: "green",
  colors: ["#589F3D", "#F5CC00"]
}, {
  category: "green",
  colors: ["#3EC14F", "#94EF85"]
}, {
  category: "green",
  colors: ["#004D28", "#3EC14F"]
}, {
  category: "teal",
  colors: ["#2FCFBA", "#E5806E"]
}, {
  category: "teal",
  colors: ["#2A6568", "#2FCFBA"]
}, {
  category: "teal",
  colors: ["#094A49", "#E5806E"]
}, {
  category: "teal",
  colors: ["#26C1B3", "#2678DA"]
}, {
  category: "teal",
  colors: ["#11D2AC", "#F0EFF5"]
}, {
  category: "teal",
  colors: ["#11D2AC", "#444451"]
}, {
  category: "teal",
  colors: ["#00765B", "#9BB4D9"]
}, {
  category: "teal",
  colors: ["#00A58A", "#FED7C6"]
}, {
  category: "teal",
  colors: ["#00F99E", "#042418"]
}, {
  category: "teal",
  colors: ["#26C58C", "#174F5E"]
}, {
  category: "teal",
  colors: ["#549BA7", "#274B4E"]
}, {
  category: "blue",
  colors: ["#0069B4", "#F55361"]
}, {
  category: "blue",
  colors: ["#18D0D8", "#E77876"]
}, {
  category: "blue",
  colors: ["#19B5FF", "#8A38DE"]
}, {
  category: "blue",
  colors: ["#1E7CCC", "#19CAD8"]
}, {
  category: "blue",
  colors: ["#19B5FF", "#FE2E16"]
}, {
  category: "blue",
  colors: ["#5DA1EF", "#FDC299"]
}, {
  category: "blue",
  colors: ["#006E8F", "#E1C3D8"]
}, {
  category: "blue",
  colors: ["#0092D7", "#3D3737"]
}, {
  category: "blue",
  colors: ["#3B7086", "#E1DAC9"]
}, {
  category: "blue",
  colors: ["#72D5D3", "#8E5BB2"]
}, {
  category: "blue",
  colors: ["#4FA6F9", "#084FA1"]
}, {
  category: "blue",
  colors: ["#00ABEE", "#EC2389"]
}, {
  category: "blue",
  colors: ["#1C8EC7", "#EDFC1A"]
}, {
  category: "blue",
  colors: ["#00BAFA", "#FBBC00"]
}, {
  category: "blue",
  colors: ["#67F2EC", "#FC0000"]
}, {
  category: "blue",
  colors: ["#30BECE", "#1A7EA3"]
}, {
  category: "blue",
  colors: ["#51B8F1", "#7F64B5"]
}, {
  category: "blue",
  colors: ["#6CB9FF", "#04AC28"]
}, {
  category: "blue",
  colors: ["#2678DA", "#26C1B3"]
}, {
  category: "indigo",
  colors: ["#003D7E", "#00A1AE"]
}, {
  category: "indigo",
  colors: ["#182252", "#18D0D8"]
}, {
  category: "indigo",
  colors: ["#161A62", "#1CC0D9"]
}, {
  category: "indigo",
  colors: ["#4154DE", "#212D7F"]
}, {
  category: "indigo",
  colors: ["#293050", "#19A0CA"]
}, {
  category: "indigo",
  colors: ["#15446C", "#10CA9B"]
}, {
  category: "indigo",
  colors: ["#0E4261", "#12CB43"]
}, {
  category: "indigo",
  colors: ["#15588A", "#0F385D"]
}, {
  category: "indigo",
  colors: ["#054E68", "#22A7F3"]
}, {
  category: "indigo",
  colors: ["#004D73", "#FFF900"]
}, {
  category: "indigo",
  colors: ["#0042B8", "#3FA1DD"]
}, {
  category: "indigo",
  colors: ["#0F385D", "#1AC9D8"]
}, {
  category: "indigo",
  colors: ["#0B2943", "#28A55B"]
}, {
  category: "indigo",
  colors: ["#1C518C", "#00B8F0"]
}, {
  category: "indigo",
  colors: ["#0658F3", "#252123"]
}, {
  category: "indigo",
  colors: ["#0D3764", "#FF6446"]
}, {
  category: "indigo",
  colors: ["#1F477D", "#75B1ED"]
}, {
  category: "indigo",
  colors: ["#11415C", "#F04B53"]
}, {
  category: "indigo",
  colors: ["#4154DE", "#212D7F"]
}, {
  category: "indigo",
  colors: ["#3A419C", "#2F91CF"]
}, {
  category: "indigo",
  colors: ["#201452", "#EE4D59"]
}, {
  category: "indigo",
  colors: ["#204787", "#D2D7D3"]
}, {
  category: "indigo",
  colors: ["#182252", "#18D0D8"]
}, {
  category: "indigo",
  colors: ["#212D75", "#B91BDA"]
}, {
  category: "indigo",
  colors: ["#2A1B6E", "#19CAD8"]
}, {
  category: "indigo",
  colors: ["#4A61E0", "#0FC5B0"]
}, {
  category: "indigo",
  colors: ["#1D2A9D", "#4A61E0"]
}, {
  category: "indigo",
  colors: ["#3B5AFE", "#FFFFFF"]
}, {
  category: "indigo",
  colors: ["#302756", "#746AAF"]
}, {
  category: "indigo",
  colors: ["#393294", "#DB1D1F"]
}, {
  category: "indigo",
  colors: ["#292782", "#237ADA"]
}, {
  category: "indigo",
  colors: ["#210F6F", "#994685"]
}, {
  category: "indigo",
  colors: ["#10133B", "#0DC2C0"]
}, {
  category: "indigo",
  colors: ["#3C5BC8", "#EBE9F9"]
}, {
  category: "brown",
  colors: ["#3B243A", "#EE3047"]
}, {
  category: "brown",
  colors: ["#B8A26C", "#FFFFFF"]
}, {
  category: "brown",
  colors: ["#493F48", "#E8E6EB"]
}, {
  category: "brown",
  colors: ["#B65817", "#DEDACD"]
}, {
  category: "brown",
  colors: ["#D7C488", "#C592A5"]
}, {
  category: "brown",
  colors: ["#B25D34", "#0E1D22"]
}, {
  category: "brown",
  colors: ["#3C2214", "#F89900"]
}, {
  category: "brown",
  colors: ["#3A312D", "#7D6A55"]
}, {
  category: "brown",
  colors: ["#CBA379", "#E4EA48"]
}, {
  category: "brown",
  colors: ["#CBA379", "#F05517"]
}, {
  category: "brown",
  colors: ["#C07B6C", "#3E2114"]
}, {
  category: "brown",
  colors: ["#513430", "#EB7A19"]
}, {
  category: "brown",
  colors: ["#593B36", "#9D8F65"]
}, {
  category: "brown",
  colors: ["#937052", "#5A3A36"]
}, {
  category: "brown",
  colors: ["#3E3B3F", "#A89260"]
}, {
  category: "brown",
  colors: ["#B07D43", "#4E4235"]
}, {
  category: "brown",
  colors: ["#A57534", "#B82513"]
}, {
  category: "brown",
  colors: ["#C38437", "#FFDA00"]
}, {
  category: "brown",
  colors: ["#B57029", "#FBA914"]
}, {
  category: "brown",
  colors: ["#825D5B", "#E38F71"]
}, {
  category: "brown",
  colors: ["#A26B62", "#F0B270"]
}, {
  category: "brown",
  colors: ["#AE7E62", "#EFBCD9"]
}, {
  category: "brown",
  colors: ["#7F563B", "#E28B4E"]
}, {
  category: "brown",
  colors: ["#BC4D00", "#390C0C"]
}, {
  category: "brown",
  colors: ["#9E5032", "#FBD054"]
}, {
  category: "brown",
  colors: ["#3B322E", "#E26D21"]
}, {
  category: "brown",
  colors: ["#7A3328", "#E2A689"]
}, {
  category: "brown",
  colors: ["#503C32", "#6F826D"]
}, {
  category: "brown",
  colors: ["#504645", "#B89A70"]
}, {
  category: "brown",
  colors: ["#987863", "#3C4650"]
}, {
  category: "brown",
  colors: ["#49453C", "#D44B3C"]
}, {
  category: "brown",
  colors: ["#84685C", "#EFDCB8"]
}, {
  category: "grey",
  colors: ["#BAA098", "#00E75D"]
}, {
  category: "grey",
  colors: ["#E3D5B6", "#93D1C5"]
}, {
  category: "grey",
  colors: ["#E3D5B6", "#D23656"]
}, {
  category: "grey",
  colors: ["#E9E0BA", "#D85B42"]
}, {
  category: "grey",
  colors: ["#D1C2AD", "#803909"]
}, {
  category: "grey",
  colors: ["#E2D3BD", "#6C6255"]
}, {
  category: "grey",
  colors: ["#E8E3DD", "#BFB6AB"]
}, {
  category: "grey",
  colors: ["#F7EBD2", "#B1938E"]
}, {
  category: "grey",
  colors: ["#E8E3DD", "#FF4E38"]
}, {
  category: "grey",
  colors: ["#E8E3DD", "#00B3B4"]
}, {
  category: "grey",
  colors: ["#FFF2BA", "#6A2715"]
}, {
  category: "violet",
  colors: ["#43168E", "#16D7D8"]
}, {
  category: "violet",
  colors: ["#3C1F88", "#5566E2"]
}, {
  category: "violet",
  colors: ["#4A15AF", "#8A38DE"]
}, {
  category: "violet",
  colors: ["#360D66", "#731DDB"]
}, {
  category: "violet",
  colors: ["#4116A3", "#E485DE"]
}, {
  category: "violet",
  colors: ["#3D0947", "#CF376E"]
}, {
  category: "violet",
  colors: ["#44254F", "#E77576"]
}, {
  category: "violet",
  colors: ["#4F0D28", "#DA3047"]
}, {
  category: "violet",
  colors: ["#431A41", "#DC5659"]
}, {
  category: "violet",
  colors: ["#2F0839", "#DD7456"]
}, {
  category: "violet",
  colors: ["#541E3E", "#D34445"]
}, {
  category: "violet",
  colors: ["#673A56", "#CF6580"]
}, {
  category: "violet",
  colors: ["#8A76BF", "#EB8D8E"]
}, {
  category: "violet",
  colors: ["#3C0932", "#D92A69"]
}, {
  category: "violet",
  colors: ["#48175A", "#CF4070"]
}, {
  category: "violet",
  colors: ["#43168E", "#16D7D8"]
}, {
  category: "violet",
  colors: ["#B91BDA", "#4A1087"]
}, {
  category: "violet",
  colors: ["#4E24AF", "#2678DA"]
}, {
  category: "violet",
  colors: ["#7D66E6", "#26C1B3"]
}, {
  category: "violet",
  colors: ["#96008C", "#9FF6CA"]
}, {
  category: "violet",
  colors: ["#5F0147", "#5AA3A5"]
}, {
  category: "violet",
  colors: ["#99A2FF", "#F0FB89"]
}, {
  category: "violet",
  colors: ["#4A1372", "#5DB6AE"]
}, {
  category: "violet",
  colors: ["#B0C6E7", "#F7CFCB"]
}, {
  category: "violet",
  colors: ["#870073", "#FC2173"]
}, {
  category: "violet",
  colors: ["#7100FE", "#47EBBA"]
}, {
  category: "violet",
  colors: ["#945BFA", "#00E2D6"]
}, {
  category: "violet",
  colors: ["#5B1446", "#D28FB6"]
}, {
  category: "violet",
  colors: ["#714DFE", "#FBB4FA"]
}, {
  category: "violet",
  colors: ["#6900AA", "#F5B069"]
}, {
  category: "violet",
  colors: ["#612698", "#00A39A"]
}, {
  category: "violet",
  colors: ["#20055D", "#DC96E2"]
}, {
  category: "violet",
  colors: ["#4116A3", "#E485DE"]
}, {
  category: "violet",
  colors: ["#C080FF", "#FFDB83"]
}, {
  category: "violet",
  colors: ["#5B3458", "#2DA8BA"]
}, {
  category: "violet",
  colors: ["#F0C6FC", "#C080FF"]
}, {
  category: "violet",
  colors: ["#302756", "#746AAF"]
}, {
  category: "violet",
  colors: ["#521D82", "#FAB500"]
}, {
  category: "violet",
  colors: ["#41244C", "#44CAE5"]
}, {
  category: "violet",
  colors: ["#5D52D7", "#1CDFAC"]
}, {
  category: "violet",
  colors: ["#793FD9", "#43BCEE"]
}, {
  category: "violet",
  colors: ["#7664B7", "#AD9EEA"]
}, {
  category: "violet",
  colors: ["#7F5AF0", "#E0D7FB"]
}, {
  category: "violet",
  colors: ["#393294", "#DB1D1F"]
}, {
  category: "violet",
  colors: ["#4D276F", "#00DAFF"]
}, {
  category: "violet",
  colors: ["#A47EFE", "#4D276F"]
}, {
  category: "red",
  colors: ["#ea0b38", "#f175a5"]
}, {
  category: "red",
  colors: ["#be0e3a", "#fea3bc"]
}, {
  category: "red",
  colors: ["#f75d58", "#751d00"]
}, {
  category: "red",
  colors: ["#c31c1c", "#cca592"]
}, {
  category: "red",
  colors: ["#b30e24", "#fb91b4"]
}, {
  category: "red",
  colors: ["#d9244b", "#f98cb1"]
}, {
  category: "red",
  colors: ["#db050a", "#770c38"]
}, {
  category: "red",
  colors: ["#da1550", "#4c0237"]
}, {
  category: "red",
  colors: ["#c20626", "#b68ea5"]
}, {
  category: "red",
  colors: ["#fe5c33", "#f3c264"]
}, {
  category: "red",
  colors: ["#f01444", "#eba4c9"]
}, {
  category: "red",
  colors: ["#af153a", "#042848"]
}, {
  category: "red",
  colors: ["#d9422f", "#9017b1"]
}, {
  category: "red",
  colors: ["#ef1d52", "#0c67bc"]
}, {
  category: "red",
  colors: ["#b53352", "#8da3d9"]
}, {
  category: "red",
  colors: ["#cd0e43", "#eae83b"]
}, {
  category: "red",
  colors: ["#fe0824", "#7bd9a9"]
}, {
  category: "red",
  colors: ["#d7335b", "#feefad"]
}, {
  category: "red",
  colors: ["#d01c37", "#468ce7"]
}, {
  category: "red",
  colors: ["#c50216", "#30082e"]
}, {
  category: "red",
  colors: ["#f50e07", "#4b38f1"]
}, {
  category: "red",
  colors: ["#c20d09", "#65417b"]
}, {
  category: "red",
  colors: ["#fd8970", "#440675"]
}, {
  category: "red",
  colors: ["#ec1e82", "#1b4b5f"]
}, {
  category: "red",
  colors: ["#fd614a", "#c5d779"]
}, {
  category: "red",
  colors: ["#e66977", "#3caeed"]
}, {
  category: "red",
  colors: ["#ea3e59", "#74d76f"]
}, {
  category: "red",
  colors: ["#e91b68", "#edf27e"]
}, {
  category: "red",
  colors: ["#eb0d2c", "#d4dac9"]
}, {
  category: "red",
  colors: ["#f04008", "#e1fc1b"]
}, {
  category: "red",
  colors: ["#d90d7a", "#238eda"]
}, {
  category: "red",
  colors: ["#ec040a", "#a58f71"]
}, {
  category: "red",
  colors: ["#e2358f", "#d3d345"]
}, {
  category: "red",
  colors: ["#f5465b", "#14e579"]
}, {
  category: "red",
  colors: ["#d00705", "#054b5c"]
}, {
  category: "red",
  colors: ["#bc1e0c", "#ca32e6"]
}, {
  category: "red",
  colors: ["#f13d4c", "#710735"]
}, {
  category: "orange",
  colors: ["#f9c11b", "#e65116"]
}, {
  category: "orange",
  colors: ["#fb9e3e", "#424ad6"]
}, {
  category: "orange",
  colors: ["#fcbb35", "#cf233e"]
}, {
  category: "orange",
  colors: ["#e0643f", "#a786dc"]
}, {
  category: "orange",
  colors: ["#cd905f", "#211893"]
}, {
  category: "orange",
  colors: ["#f76615", "#e349a8"]
}, {
  category: "orange",
  colors: ["#c46e26", "#e0d634"]
}, {
  category: "orange",
  colors: ["#cb6813", "#fffbc6"]
}, {
  category: "orange",
  colors: ["#e36f11", "#982310"]
}, {
  category: "orange",
  colors: ["#e46e0d", "#e6b92a"]
}, {
  category: "orange",
  colors: ["#fda512", "#1016da"]
}, {
  category: "orange",
  colors: ["#e13c02", "#bf8b47"]
}, {
  category: "orange",
  colors: ["#ef4d24", "#39bbd8"]
}, {
  category: "orange",
  colors: ["#f85f06", "#99eb2e"]
}, {
  category: "orange",
  colors: ["#e6a861", "#f90c80"]
}, {
  category: "orange",
  colors: ["#ef703c", "#f9c0c4"]
}, {
  category: "orange",
  colors: ["#be6015", "#b4245f"]
}, {
  category: "orange",
  colors: ["#f7cb4b", "#e40adb"]
}, {
  category: "orange",
  colors: ["#ed5801", "#bceb78"]
}, {
  category: "orange",
  colors: ["#fe885b", "#e50c5d"]
}, {
  category: "orange",
  colors: ["#d95908", "#1f1fe8"]
}, {
  category: "orange",
  colors: ["#eea260", "#5c0802"]
}, {
  category: "orange",
  colors: ["#d69349", "#6d5af3"]
}, {
  category: "orange",
  colors: ["#d38233", "#334184"]
}, {
  category: "orange",
  colors: ["#f7b440", "#2e9d1c"]
}, {
  category: "orange",
  colors: ["#fe4c21", "#a9f34b"]
}, {
  category: "orange",
  colors: ["#eb4f2a", "#29b4df"]
}, {
  category: "orange",
  colors: ["#c34320", "#641494"]
}, {
  category: "orange",
  colors: ["#b95910", "#c0579e"]
}, {
  category: "orange",
  colors: ["#ebb420", "#ac4377"]
}, {
  category: "orange",
  colors: ["#fc8048", "#091eef"]
}, {
  category: "orange",
  colors: ["#f17e4f", "#6b3da1"]
}, {
  category: "orange",
  colors: ["#da4420", "#755dba"]
}, {
  category: "yellow",
  colors: ["#e6e705", "#7729e8"]
}, {
  category: "yellow",
  colors: ["#fada26", "#690d8b"]
}, {
  category: "yellow",
  colors: ["#dde845", "#de28f9"]
}, {
  category: "yellow",
  colors: ["#e6f465", "#842e2f"]
}, {
  category: "yellow",
  colors: ["#f7b416", "#be5021"]
}, {
  category: "yellow",
  colors: ["#efd808", "#c38228"]
}, {
  category: "yellow",
  colors: ["#fec339", "#6d510a"]
}, {
  category: "yellow",
  colors: ["#ecd736", "#994911"]
}, {
  category: "yellow",
  colors: ["#feca1d", "#351706"]
}, {
  category: "yellow",
  colors: ["#d8e622", "#e59116"]
}, {
  category: "yellow",
  colors: ["#d3d812", "#929e87"]
}, {
  category: "yellow",
  colors: ["#efda1f", "#ae7b47"]
}, {
  category: "yellow",
  colors: ["#d0b126", "#58483c"]
}, {
  category: "yellow",
  colors: ["#e4f032", "#aa8f59"]
}, {
  category: "yellow",
  colors: ["#dec72d", "#0b9cb5"]
}, {
  category: "yellow",
  colors: ["#fabe33", "#5465c7"]
}, {
  category: "yellow",
  colors: ["#d9d050", "#fb2416"]
}, {
  category: "yellow",
  colors: ["#d0f03c", "#f54340"]
}, {
  category: "yellow",
  colors: ["#f3e956", "#bb5e29"]
}, {
  category: "yellow",
  colors: ["#d5bd0c", "#5924ee"]
}, {
  category: "green",
  colors: ["#15f50c", "#b7c2af"]
}, {
  category: "green",
  colors: ["#61fc5d", "#800272"]
}, {
  category: "green",
  colors: ["#43cc60", "#dc5457"]
}, {
  category: "green",
  colors: ["#92ca29", "#3c7207"]
}, {
  category: "green",
  colors: ["#b5ed11", "#ae3d6f"]
}, {
  category: "green",
  colors: ["#52f257", "#db9a5a"]
}, {
  category: "green",
  colors: ["#48d330", "#185048"]
}, {
  category: "green",
  colors: ["#6ec82e", "#34f0d1"]
}, {
  category: "green",
  colors: ["#90cb57", "#686593"]
}, {
  category: "green",
  colors: ["#3df227", "#5e2de4"]
}, {
  category: "green",
  colors: ["#48fe5c", "#2a45ca"]
}, {
  category: "green",
  colors: ["#03c94d", "#d97abb"]
}, {
  category: "green",
  colors: ["#1fb549", "#36666d"]
}, {
  category: "green",
  colors: ["#86f533", "#54a2df"]
}, {
  category: "green",
  colors: ["#1bce48", "#1d6905"]
}, {
  category: "green",
  colors: ["#04b21a", "#112a50"]
}, {
  category: "green",
  colors: ["#c3f877", "#428634"]
}, {
  category: "green",
  colors: ["#19d94d", "#4238c5"]
}, {
  category: "green",
  colors: ["#18eb15", "#6e6520"]
}, {
  category: "green",
  colors: ["#0ee676", "#412aae"]
}, {
  category: "green",
  colors: ["#58c113", "#6ab7a3"]
}, {
  category: "green",
  colors: ["#8ebf38", "#44573f"]
}, {
  category: "green",
  colors: ["#46b016", "#2e551b"]
}, {
  category: "green",
  colors: ["#6eeb18", "#6a712c"]
}, {
  category: "green",
  colors: ["#58fe15", "#ba06d4"]
}, {
  category: "green",
  colors: ["#7fd635", "#a64456"]
}, {
  category: "green",
  colors: ["#82fd4d", "#3959c0"]
}, {
  category: "green",
  colors: ["#38d332", "#0152a7"]
}, {
  category: "green",
  colors: ["#01c302", "#353880"]
}, {
  category: "green",
  colors: ["#baf323", "#9a9e92"]
}, {
  category: "green",
  colors: ["#75fe4e", "#501c72"]
}, {
  category: "green",
  colors: ["#72f34b", "#1b71bf"]
}, {
  category: "teal",
  colors: ["#59ffa5", "#35d9e7"]
}, {
  category: "teal",
  colors: ["#5fdabc", "#102705"]
}, {
  category: "teal",
  colors: ["#70e670", "#3946c5"]
}, {
  category: "teal",
  colors: ["#47edb3", "#1e69fe"]
}, {
  category: "teal",
  colors: ["#68c495", "#4d6298"]
}, {
  category: "teal",
  colors: ["#25e1b6", "#04214e"]
}, {
  category: "teal",
  colors: ["#06f286", "#ee2b33"]
}, {
  category: "teal",
  colors: ["#95d8a1", "#ecf05d"]
}, {
  category: "teal",
  colors: ["#46f684", "#57cabc"]
}, {
  category: "teal",
  colors: ["#49f691", "#74448b"]
}, {
  category: "teal",
  colors: ["#4be197", "#1f2c60"]
}, {
  category: "teal",
  colors: ["#5fe9b0", "#261a22"]
}, {
  category: "teal",
  colors: ["#49e964", "#374a1d"]
}, {
  category: "teal",
  colors: ["#46eb91", "#4c2856"]
}, {
  category: "teal",
  colors: ["#2fc159", "#e88ad5"]
}, {
  category: "teal",
  colors: ["#2cf788", "#771287"]
}, {
  category: "teal",
  colors: ["#47e5a4", "#0d6844"]
}, {
  category: "teal",
  colors: ["#44d173", "#124634"]
}, {
  category: "teal",
  colors: ["#46e17c", "#10651b"]
}, {
  category: "teal",
  colors: ["#56be95", "#085444"]
}, {
  category: "teal",
  colors: ["#82fab3", "#1a8478"]
}, {
  category: "teal",
  colors: ["#4ed8c5", "#073543"]
}, {
  category: "teal",
  colors: ["#46fe91", "#c6aafa"]
}, {
  category: "teal",
  colors: ["#09f9bf", "#4d2198"]
}, {
  category: "teal",
  colors: ["#2bec79", "#dfeda6"]
}, {
  category: "teal",
  colors: ["#6cc790", "#07687b"]
}, {
  category: "teal",
  colors: ["#05d49c", "#2a1f7f"]
}, {
  category: "teal",
  colors: ["#0dda96", "#485788"]
}, {
  category: "teal",
  colors: ["#2ec97a", "#5804e3"]
}, {
  category: "teal",
  colors: ["#20dbb6", "#0d8574"]
}, {
  category: "teal",
  colors: ["#2ecfb3", "#dde3a1"]
}, {
  category: "teal",
  colors: ["#3ef8e1", "#45853b"]
}, {
  category: "teal",
  colors: ["#8df183", "#2d0cef"]
}, {
  category: "teal",
  colors: ["#26c69f", "#3d7c86"]
}, {
  category: "teal",
  colors: ["#92deab", "#07a1ad"]
}, {
  category: "teal",
  colors: ["#10ead6", "#1b687e"]
}, {
  category: "teal",
  colors: ["#4bd075", "#8b7cb9"]
}, {
  category: "teal",
  colors: ["#52ed74", "#cd31d0"]
}, {
  category: "teal",
  colors: ["#02c562", "#0c6d89"]
}, {
  category: "blue",
  colors: ["#89a7ec", "#f866ea"]
}, {
  category: "blue",
  colors: ["#1995e1", "#83028d"]
}, {
  category: "blue",
  colors: ["#08bef4", "#b2d46f"]
}, {
  category: "blue",
  colors: ["#46a3c8", "#7f9d18"]
}, {
  category: "blue",
  colors: ["#9fc1fc", "#92e037"]
}, {
  category: "blue",
  colors: ["#98b3f2", "#19cb57"]
}, {
  category: "blue",
  colors: ["#84a1e4", "#7a336f"]
}, {
  category: "blue",
  colors: ["#1e95c9", "#5b1993"]
}, {
  category: "blue",
  colors: ["#2a9cce", "#32a560"]
}, {
  category: "blue",
  colors: ["#5a8fd8", "#70dc09"]
}, {
  category: "blue",
  colors: ["#0c9dd1", "#3c8824"]
}, {
  category: "blue",
  colors: ["#2695ea", "#290ba8"]
}, {
  category: "blue",
  colors: ["#15aad4", "#4a1b68"]
}, {
  category: "blue",
  colors: ["#7bc3fc", "#ca7001"]
}, {
  category: "blue",
  colors: ["#8192f8", "#2f3272"]
}, {
  category: "blue",
  colors: ["#0bc9f2", "#0205e5"]
}, {
  category: "blue",
  colors: ["#539cfb", "#5718da"]
}, {
  category: "blue",
  colors: ["#2876b4", "#e5d109"]
}, {
  category: "blue",
  colors: ["#a4b5cf", "#4e1cd7"]
}, {
  category: "blue",
  colors: ["#4b79ed", "#a8a176"]
}, {
  category: "blue",
  colors: ["#6b87c3", "#88d8a6"]
}, {
  category: "blue",
  colors: ["#5a6d95", "#73c163"]
}, {
  category: "blue",
  colors: ["#8894b4", "#75efdd"]
}, {
  category: "blue",
  colors: ["#0775be", "#f29361"]
}, {
  category: "blue",
  colors: ["#50abdd", "#dbf046"]
}, {
  category: "blue",
  colors: ["#5f61b0", "#d15868"]
}, {
  category: "blue",
  colors: ["#92a6d7", "#1cfbe8"]
}, {
  category: "blue",
  colors: ["#02a9d6", "#fde81f"]
}, {
  category: "blue",
  colors: ["#75b2ed", "#05697b"]
}, {
  category: "blue",
  colors: ["#0d8afe", "#304f79"]
}, {
  category: "blue",
  colors: ["#4a7cce", "#321af0"]
}, {
  category: "blue",
  colors: ["#0184eb", "#00356d"]
}, {
  category: "blue",
  colors: ["#2eb1e6", "#1d4abf"]
}, {
  category: "blue",
  colors: ["#9ca8f0", "#1d05f0"]
}, {
  category: "blue",
  colors: ["#5bbcf0", "#0a37cd"]
}, {
  category: "blue",
  colors: ["#1196f5", "#88cdc9"]
}, {
  category: "blue",
  colors: ["#0c85be", "#11d0cf"]
}, {
  category: "blue",
  colors: ["#1080dd", "#acc1ce"]
}, {
  category: "blue",
  colors: ["#5382ac", "#102981"]
}, {
  category: "blue",
  colors: ["#7780d2", "#2505f9"]
}, {
  category: "indigo",
  colors: ["#0c0cdf", "#7261e9"]
}, {
  category: "indigo",
  colors: ["#143efe", "#77d96b"]
}, {
  category: "indigo",
  colors: ["#8a2df9", "#34d6ff"]
}, {
  category: "indigo",
  colors: ["#1f07c8", "#0c609b"]
}, {
  category: "indigo",
  colors: ["#805bf7", "#c2a58f"]
}, {
  category: "indigo",
  colors: ["#8237ed", "#86b37b"]
}, {
  category: "indigo",
  colors: ["#002beb", "#d5cfda"]
}, {
  category: "indigo",
  colors: ["#2f0aeb", "#f2ba89"]
}, {
  category: "indigo",
  colors: ["#073def", "#14a481"]
}, {
  category: "indigo",
  colors: ["#2a3af4", "#988d5c"]
}, {
  category: "indigo",
  colors: ["#163dc8", "#8bfd7f"]
}, {
  category: "indigo",
  colors: ["#1b04c3", "#b5ef82"]
}, {
  category: "indigo",
  colors: ["#6210ef", "#e09071"]
}, {
  category: "indigo",
  colors: ["#282dc8", "#4ffce4"]
}, {
  category: "indigo",
  colors: ["#3740f8", "#d1dba6"]
}, {
  category: "indigo",
  colors: ["#1359e6", "#f53f9b"]
}, {
  category: "indigo",
  colors: ["#2031f6", "#2887f0"]
}, {
  category: "indigo",
  colors: ["#2e25ee", "#202b71"]
}, {
  category: "indigo",
  colors: ["#0e3cd1", "#aebdf4"]
}, {
  category: "indigo",
  colors: ["#4d3afa", "#ab8ae5"]
}, {
  category: "indigo",
  colors: ["#0c23c3", "#2e8adb"]
}, {
  category: "indigo",
  colors: ["#065ae0", "#0c197f"]
}, {
  category: "indigo",
  colors: ["#242cbd", "#6b7ae1"]
}, {
  category: "indigo",
  colors: ["#2463df", "#739cc1"]
}, {
  category: "indigo",
  colors: ["#6e27d8", "#82c2d0"]
}, {
  category: "indigo",
  colors: ["#114df4", "#d3a5d7"]
}, {
  category: "indigo",
  colors: ["#3e03d3", "#fcb83d"]
}, {
  category: "indigo",
  colors: ["#6e51ef", "#1cc4ff"]
}, {
  category: "indigo",
  colors: ["#1f42ec", "#30f453"]
}, {
  category: "indigo",
  colors: ["#1352f5", "#0d5148"]
}, {
  category: "indigo",
  colors: ["#2659fb", "#15aae5"]
}, {
  category: "indigo",
  colors: ["#0435e4", "#0ce8bd"]
}, {
  category: "indigo",
  colors: ["#0d01e1", "#67f39b"]
}, {
  category: "indigo",
  colors: ["#0408d6", "#3664ac"]
}, {
  category: "indigo",
  colors: ["#3354e9", "#4ce1a5"]
}, {
  category: "indigo",
  colors: ["#7733e4", "#60e1cb"]
}, {
  category: "indigo",
  colors: ["#0a6cf6", "#23c1dc"]
}, {
  category: "violet",
  colors: ["#531ac1", "#5de4d6"]
}, {
  category: "violet",
  colors: ["#9503f0", "#11037b"]
}, {
  category: "violet",
  colors: ["#840fcc", "#c94285"]
}, {
  category: "violet",
  colors: ["#1538ef", "#2ac288"]
}, {
  category: "violet",
  colors: ["#ca43f9", "#47b2dc"]
}, {
  category: "violet",
  colors: ["#8631f0", "#5d3a57"]
}, {
  category: "violet",
  colors: ["#4e1ebb", "#bc30b9"]
}, {
  category: "violet",
  colors: ["#3f1ace", "#d203f0"]
}, {
  category: "violet",
  colors: ["#281ebc", "#5fb166"]
}, {
  category: "violet",
  colors: ["#3b11a4", "#efa473"]
}, {
  category: "violet",
  colors: ["#5d42ef", "#369fa0"]
}, {
  category: "violet",
  colors: ["#4309b5", "#847234"]
}, {
  category: "violet",
  colors: ["#5742ef", "#82e15e"]
}, {
  category: "violet",
  colors: ["#2915ed", "#c04c44"]
}, {
  category: "violet",
  colors: ["#2f28c6", "#bbc0a3"]
}, {
  category: "violet",
  colors: ["#b848d2", "#fffa50"]
}, {
  category: "violet",
  colors: ["#201edd", "#80f4dc"]
}, {
  category: "violet",
  colors: ["#8513d7", "#ec6e8a"]
}, {
  category: "violet",
  colors: ["#8c0de8", "#f24d1c"]
}, {
  category: "violet",
  colors: ["#413bf9", "#80f76a"]
}, {
  category: "violet",
  colors: ["#3a11dc", "#b76757"]
}, {
  category: "violet",
  colors: ["#8b0499", "#03d6ff"]
}, {
  category: "violet",
  colors: ["#9032d4", "#de5961"]
}, {
  category: "violet",
  colors: ["#6c1ed8", "#96b48f"]
}, {
  category: "violet",
  colors: ["#9301fe", "#fda3ff"]
}, {
  category: "violet",
  colors: ["#cd56e9", "#110d82"]
}, {
  category: "violet",
  colors: ["#8128d4", "#ca2a68"]
}, {
  category: "violet",
  colors: ["#2024f9", "#dc9cc3"]
}, {
  category: "violet",
  colors: ["#bd1ed4", "#c22326"]
}, {
  category: "grey",
  colors: ["#e1c2bf", "#d05415"]
}, {
  category: "grey",
  colors: ["#beb1cc", "#e93c9c"]
}, {
  category: "grey",
  colors: ["#ae9dab", "#f13951"]
}, {
  category: "grey",
  colors: ["#b9b8a6", "#174f73"]
}, {
  category: "grey",
  colors: ["#ba9b80", "#680119"]
}, {
  category: "grey",
  colors: ["#8c8ea5", "#d7fb92"]
}, {
  category: "grey",
  colors: ["#b5c1d2", "#d6880e"]
}, {
  category: "grey",
  colors: ["#b3c1ce", "#296e91"]
}, {
  category: "grey",
  colors: ["#d4c1cc", "#d6d812"]
}, {
  category: "grey",
  colors: ["#cfb0ac", "#824951"]
}, {
  category: "grey",
  colors: ["#a0a0a1", "#5c3d2c"]
}, {
  category: "grey",
  colors: ["#bcc2ae", "#c8f6ae"]
}, {
  category: "grey",
  colors: ["#d5c8ba", "#350554"]
}, {
  category: "grey",
  colors: ["#98a098", "#d70495"]
}, {
  category: "grey",
  colors: ["#bcc7c7", "#7aad1f"]
}, {
  category: "grey",
  colors: ["#cac9d7", "#590488"]
}, {
  category: "grey",
  colors: ["#ceb79b", "#8d1125"]
}, {
  category: "grey",
  colors: ["#95b49d", "#b0500f"]
}, {
  category: "grey",
  colors: ["#c6abbc", "#ddca2e"]
}, {
  category: "grey",
  colors: ["#b2ccc0", "#3dafdd"]
}, {
  category: "grey",
  colors: ["#938e91", "#8eeac7"]
}, {
  category: "grey",
  colors: ["#b2ac9b", "#ab0e5f"]
}, {
  category: "grey",
  colors: ["#a0aaab", "#664f51"]
}, {
  category: "grey",
  colors: ["#b39f9c", "#7e0463"]
}, {
  category: "grey",
  colors: ["#b8a89a", "#7cc225"]
}, {
  category: "grey",
  colors: ["#c2b1a5", "#318028"]
}, {
  category: "grey",
  colors: ["#b09c9b", "#b1b5d6"]
}, {
  category: "grey",
  colors: ["#b8a7b3", "#5a4dff"]
}, {
  category: "grey",
  colors: ["#aeaead", "#58efe7"]
}, {
  category: "grey",
  colors: ["#c5aaae", "#af60fd"]
}, {
  category: "grey",
  colors: ["#9fa4ad", "#c44316"]
}, {
  category: "grey",
  colors: ["#a1a4a4", "#eb60ff"]
}, {
  category: "grey",
  colors: ["#b9a9a3", "#5dc9d6"]
}, {
  category: "grey",
  colors: ["#959f9c", "#2f18b1"]
}, {
  category: "grey",
  colors: ["#a0a4a5", "#5c5eca"]
}, {
  category: "grey",
  colors: ["#c1b0ab", "#a610e2"]
}, {
  category: "grey",
  colors: ["#968f8f", "#4cb9e3"]
}, {
  category: "grey",
  colors: ["#8d9492", "#f401a0"]
}, {
  category: "grey",
  colors: ["#afa0a4", "#f0646f"]
}, {
  category: "grey",
  colors: ["#bda1a4", "#bcc689"]
}, {
  category: "brown",
  colors: ["#865661", "#f33b48"]
}, {
  category: "brown",
  colors: ["#554643", "#22cdfb"]
}, {
  category: "brown",
  colors: ["#392c1a", "#74bbfd"]
}, {
  category: "brown",
  colors: ["#434f34", "#dffa4d"]
}, {
  category: "brown",
  colors: ["#734d1f", "#8483d7"]
}, {
  category: "brown",
  colors: ["#663153", "#63ff16"]
}, {
  category: "brown",
  colors: ["#7d301a", "#d3d044"]
}, {
  category: "brown",
  colors: ["#6d2444", "#717e20"]
}, {
  category: "brown",
  colors: ["#943a41", "#c5a943"]
}, {
  category: "brown",
  colors: ["#434628", "#b40de9"]
}, {
  category: "brown",
  colors: ["#60281c", "#937c55"]
}, {
  category: "brown",
  colors: ["#7c3145", "#4708ee"]
}, {
  category: "brown",
  colors: ["#724d1e", "#815e92"]
}, {
  category: "brown",
  colors: ["#561620", "#899451"]
}, {
  category: "brown",
  colors: ["#5e1d14", "#87c362"]
}, {
  category: "brown",
  colors: ["#672636", "#1ccb7d"]
}, {
  category: "brown",
  colors: ["#595249", "#abd55e"]
}, {
  category: "brown",
  colors: ["#55241b", "#378af4"]
}, {
  category: "brown",
  colors: ["#6e4b4a", "#ff7f27"]
}, {
  category: "brown",
  colors: ["#683d31", "#b257b6"]
}, {
  category: "brown",
  colors: ["#5c3c40", "#e5bfe3"]
}, {
  category: "brown",
  colors: ["#533b29", "#e8654b"]
}, {
  category: "brown",
  colors: ["#614944", "#beb48a"]
}, {
  category: "brown",
  colors: ["#764b42", "#907242"]
}, {
  category: "brown",
  colors: ["#5c372e", "#af3d4d"]
}, {
  category: "brown",
  colors: ["#6b423a", "#64ab54"]
}, {
  category: "brown",
  colors: ["#6c402e", "#ce0e20"]
}, {
  category: "brown",
  colors: ["#5f3c3f", "#62b798"]
}, {
  category: "brown",
  colors: ["#685144", "#acc9fa"]
}, {
  category: "brown",
  colors: ["#693d2f", "#c5f67f"]
}, {
  category: "brown",
  colors: ["#513632", "#fe520f"]
}, {
  category: "brown",
  colors: ["#6b423a", "#09c8b3"]
}, {
  category: "brown",
  colors: ["#5a3d37", "#f1ecdc"]
}, {
  category: "brown",
  colors: ["#5c3e40", "#e79e78"]
}];
const te = Y(ee);
const re = (0, a.Q_)("wallpaper-gradient", {
  state: () => ({
    colorSystems: [{
      type: "red",
      bg: "rgba(255, 12, 62, 1)"
    }, {
      type: "orange",
      bg: "rgba(255, 136, 0, 1)"
    }, {
      type: "yellow",
      bg: "rgba(255, 227, 0, 1)"
    }, {
      type: "green",
      bg: "rgba(121, 230, 43, 1)"
    }, {
      type: "teal",
      bg: "rgba(0, 226, 170, 1)"
    }, {
      type: "indigo",
      bg: "rgba(0, 174, 255, 1)"
    }, {
      type: "blue",
      bg: "rgba(58, 83, 255, 1)"
    }, {
      type: "violet",
      bg: "rgba(112, 0, 221, 1)"
    }, {
      type: "grey",
      bg: "rgba(169, 162, 160, 1)"
    }, {
      type: "brown",
      bg: "rgba(94, 64, 54, 1)"
    }],
    activeColorType: "all",
    colorConf: {
      lighting: 60,
      pigment: 80
    }
  }),
  getters: {
    linerColors() {
      const e = this.colorConf;
      if (this.activeColorType === "all") {
        return te.map(t => X({
          ...t,
          ...e
        }));
      } else {
        return ee.filter(e => e.category === this.activeColorType).map(t => X({
          ...t,
          ...e
        }));
      }
    }
  },
  actions: {
    setActiveColorType(e) {
      this.activeColorType = e;
    },
    setColorConf(e) {
      this.colorConf = e;
    },
    getRandomGradient: () => X(te[Math.floor(Math.random() * te.length)])
  }
});
import * as ne from /*webcrack:missing*/"./2770.js";
const oe = async e => {
  try {
    return await ne.U5.getItem(e);
  } catch (e) {
    return e;
  }
};
const ae = "https://infinitypro-img.infinitynewtab.com/wallpaper/nature/pad_nature_6.jpg";
const ie = "622ab89188198bcf987aa012";
const ce = (0, a.Q_)(o.BU.wallpaper, {
  syncStorage: {
    watch: ["trigger", "src", "imgId", "lightMask", "blur", "bgType", "gradientConf", "videoBgConf", "autoReplacement", "customWallpaperUrl"]
  },
  syncCloud: {
    watch: ["trigger", "src", "imgId", "lightMask", "blur", "bgType", "gradientConf", "videoBgConf", "autoReplacement", "customWallpaperUrl"]
  },
  state: () => ({
    trigger: [],
    lightMask: 10,
    blur: 0,
    imgId: ie,
    src: ae,
    showCtr: false,
    bgType: "image",
    autoReplacement: {
      enable: false,
      time: "daily",
      bgType: "image",
      categroy: "all",
      lastReplaceTime: -1
    },
    gradientConf: {
      deg: 25,
      colors: []
    },
    videoBgConf: {
      id: "",
      poster: "",
      src: "",
      origin: "gallery"
    },
    loading: false,
    customWallpaperUrl: ""
  }),
  getters: {
    currentMask() {
      let e = this.lightMask;
      if ((0, T.V)().currentTheme === "dark") {
        e = this.lightMask + 10;
      }
      if (e > 100) {
        return 100;
      } else if (e < 0) {
        return 0;
      } else {
        return e;
      }
    },
    currentBlur() {
      const e = this.blur;
      if (e > 100) {
        return 100;
      } else if (e < 0) {
        return 0;
      } else {
        return e;
      }
    }
  },
  actions: {
    async randomOne(e) {
      if (!e || (await (0, l.n)())) {
        switch (e ? this.autoReplacement.bgType : this.bgType) {
          case "image":
            this.randomOneImage(e);
            break;
          case "dynamic":
            this.randomOneDynamic();
            break;
          case "gradient":
            this.randomOneGradient();
        }
      }
    },
    downloadCurrent() {
      var e;
      switch (this.bgType) {
        case "image":
          (0, j.tg)(this.src);
          break;
        case "dynamic":
          if ((e = this.videoBgConf) !== null && e !== undefined && e.src) {
            (0, j.gS)(this.videoBgConf?.src);
          } else {
            this.handleCustomVideoDownload();
          }
          break;
        case "gradient":
          this.downLoadGradientSvg();
      }
    },
    downLoadGradientSvg() {
      const {
        deg: e,
        colors: t
      } = this.gradientConf;
      const r = (0, j.YL)(e || 0);
      const n = `\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" \n        viewBox="0 0 100 100" preserveAspectRatio="none">\n         <linearGradient id="gradient" gradientUnits="objectBoundingBox" \n          x1="${r.x1}" y1="${r.y1}" x2="${r.x2}" y2="${r.y2}">\n          <stop offset="0%" stop-color="${t[0]}" stop-opacity="1"/>,<stop offset="33.33333333333333%" stop-color="${t[1]}" stop-opacity="1"/>,<stop offset="66.66666666666666%" stop-color="${t[2]}" stop-opacity="1"/>,<stop offset="100%" stop-color="${t[3]}" stop-opacity="1"/>\n         </linearGradient>\n         <rect x="0" y="0" width="100" height="100" fill="url(#gradient)" />\n       </svg>`;
      const o = `infinity-${Math.ceil(Date.now() * Math.random())}.svg`;
      (0, j.tf)(n, o, "image/svg+xml");
    },
    changeMask(e) {
      const t = e > 100 ? 100 : e < 0 ? 0 : Math.round(e);
      if ((0, T.V)().currentTheme === "dark") {
        this.lightMask = t - 10;
      } else {
        this.lightMask = t;
      }
    },
    changeBlur(e) {
      const t = e > 100 ? 100 : e < 0 ? 0 : Math.round(e);
      this.blur = t;
    },
    setImageBg(e, t) {
      this.src = e;
      this.imgId = t;
      this.bgType = "image";
    },
    setGradientBg(e) {
      this.gradientConf = {
        colors: e,
        deg: this.gradientConf?.deg || 25
      };
      this.bgType = "gradient";
    },
    setGradientDeg(e) {
      this.gradientConf = {
        colors: this.gradientConf?.colors || [],
        deg: e
      };
    },
    setVideoBg(e) {
      if (this.bgType !== "dynamic" || !e.src || e.src !== this.videoBgConf?.src) {
        this.videoBgConf = e;
        this.bgType = "dynamic";
      }
    },
    setAutoReplacement(e) {
      this.autoReplacement = e;
    },
    setCustomWallpaper(e) {
      this.customWallpaperUrl = e;
    },
    async randomOneImage(e) {
      E().addTips({
        category: "wallpaperLoad",
        type: "loading"
      });
      let t = this.autoReplacement.categroy;
      t = t === "all" ? "" : t.join(",");
      const [r, n] = await (async e => {
        try {
          const t = await h.hj.get(`${u.H}wallpaper/next`, {
            type: "random",
            tag: e
          }, {
            _delay: 200,
            _single: true
          });
          if (t.code === 0) {
            return [null, t.data];
          } else {
            return ["业务报错"];
          }
        } catch (e) {
          return [`接口报错：${e}`];
        }
      })(e ? t : undefined);
      if (r === null) {
        const [e] = await (0, j.pt)((0, j.Em)(n.rawSrc, "wallpaper"), false, 30000);
        if (e) {
          E().addTips({
            category: "wallpaperLoad",
            type: "fail"
          });
        } else {
          this.setImageBg(n.rawSrc, n.id);
          E().removeTips({
            category: "wallpaperLoad"
          });
        }
      } else {
        E().addTips({
          category: "wallpaperLoad",
          type: "fail"
        });
      }
      this.updateAutoTimestamp();
    },
    async randomOneDynamic() {
      E().addTips({
        category: "wallpaperLoad",
        type: "loading"
      });
      const t = this.videoBgConf.origin === "custom-local";
      const [r, n] = await (async e => {
        try {
          const t = await h.hj.get(`${u.H}wallpaper/video-random`, {
            id: e
          }, {
            _delay: 200
          });
          if (t.code === 0) {
            return [null, t.data];
          } else {
            return ["业务报错"];
          }
        } catch (e) {
          return [`接口报错：${e}`];
        }
      })(t ? "" : this.videoBgConf?.id);
      if (!r && n) {
        this.setVideoBg({
          poster: `${n.src}?x-oss-process=video/snapshot,t_0,f_jpg,w_0,h_0,m_fast`,
          id: n.id,
          src: n.src,
          origin: "gallery"
        });
        E().removeTips({
          category: "wallpaperLoad"
        });
      } else {
        E().addTips({
          category: "wallpaperLoad",
          type: "fail"
        });
      }
      this.updateAutoTimestamp();
    },
    randomOneGradient() {
      const e = re().getRandomGradient();
      this.setGradientBg(e.colors);
      this.updateAutoTimestamp();
    },
    updateAutoTimestamp() {
      this.setAutoReplacement({
        ...this.autoReplacement,
        lastReplaceTime: new Date().getTime()
      });
      this.loading = false;
    },
    async autoReplaceWallpaper() {
      const e = this.autoReplacement;
      if (!e.enable) {
        return;
      }
      if (this.loading) {
        return;
      }
      const t = new Date();
      const r = new Date(e.lastReplaceTime);
      if (e.time === "hourly") {
        const e = r.getHours();
        const n = t.getHours();
        const o = t.getMinutes();
        if (e !== n && o < 50) {
          this.loading = true;
          this.randomOne(true);
        }
      } else if (e.time === "daily" && t.getDate() !== r.getDate()) {
        this.randomOne(true);
      }
    },
    async handleCustomVideoDownload() {
      if (this.videoBgConf.origin !== "custom-local") {
        return;
      }
      if (await oe("custom-local-video")) {
        P.R.warn({
          message: i18n("当前壁纸为本地视频")
        });
      } else {
        (0, j.tg)(ae);
      }
    },
    onClearData() {
      this.src = ae;
      this.imgId = ie;
      this.bgType = "image";
    }
  }
});
import * as se from "./8418.js";
import * as le from "./8699.js";
import * as ue from "./9112.js";
export const useUserStore = (0, a.Q_)(o.BU.user, {
  syncStorage: {
    watch: ["isLogin", "user", "refreshToken", "token", "chatStatus"]
  },
  state: () => ({
    loginShow: false,
    userDialogType: "login",
    isLogin: false,
    user: {
      email: "",
      nickname: "",
      id: "",
      avatar: "",
      vip: false,
      vipEndTime: 0,
      vipPlan: "",
      vipPlanId: "",
      nextVipPlanId: "",
      nextVipPlanTime: 0,
      vipEndTimeStr: "",
      inviteCode: "",
      isInvited: false
    },
    chatStatus: {},
    refreshToken: "",
    token: "",
    tiggerTimer: Date.now()
  }),
  getters: {
    chatVipRest() {
      if (this.isLogin && this.user.chatVipEndTime) {
        return Math.max(this.user.chatVipEndTime - this.tiggerTimer, 0);
      } else {
        return 0;
      }
    }
  },
  actions: {
    async setLoginSuccess(e) {
      this.setUserData(e.user);
      this.refreshToken = e.refreshToken;
      this.token = e.token;
      this.isLogin = true;
      this.loginShow = false;
      this.getProfile();
      if (u.AN && !this.user.vip) {
        const e = M();
        e.getPrices();
        e.setActiveCard("buy");
      }
      await S().login(e.user);
    },
    async delete(e) {
      const [t] = await (0, n.tm)();
      if (t === null) {
        this.loginOut(e);
      }
    },
    loginOut(e) {
      if (e) {
        this.removeUserHistory(this.user.email);
        o.Ar.deleteAllForLogout().then(() => {
          ce().onClearData();
          B.y.post("client:tabs-reload", null);
          location.reload();
        });
      } else {
        this.isLogin = false;
        this.user = {
          email: "",
          nickname: "",
          id: "",
          avatar: "",
          vip: false,
          vipEndTime: 0,
          vipPlan: "",
          vipPlanId: "",
          nextVipPlanId: "",
          nextVipPlanTime: 0,
          vipEndTimeStr: "",
          inviteCode: "",
          isInvited: false
        };
        this.refreshToken = "";
        this.token = "";
        this.setChatStatus({});
        S().logout();
      }
    },
    changeLoginShow(e) {
      this.loginShow = e;
      if (e) {
        this.userDialogType = "login";
      }
    },
    showLogin(e) {
      this.isLogin = false;
      this.user = {
        email: "",
        nickname: "",
        id: "",
        avatar: "",
        vip: false,
        vipEndTime: 0,
        vipPlan: "",
        vipPlanId: "",
        nextVipPlanId: "",
        nextVipPlanTime: 0,
        vipEndTimeStr: "",
        inviteCode: "",
        isInvited: false,
        email: e ? "" : this.user.email
      };
      this.setChatStatus({});
      this.refreshToken = "";
      this.token = "";
      S().logout();
      this.changeLoginShow(true);
    },
    setUserData(e) {
      this.user = {
        ...this.user,
        ...(0, i.pick)(e, ["id", "email", "nickname", "avatar", "vip", "vipEndTime", "inviteCode", "vipPlan", "vipPlanId", "nextVipPlanId", "nextVipPlanTime", "isInvited", "chatVipEndTime", "userType"]),
        vipEndTimeStr: (0, j.F8)(e.vipEndTime)
      };
    },
    setChatStatus(e) {
      this.chatStatus = e;
    },
    async getProfile() {
      const [e, t] = await (0, n.et)();
      const r = t == null ? undefined : t.user;
      const o = (t == null ? undefined : t.chatai) || {};
      if (e === null) {
        this.setChatStatus(o);
        this.setUserData(r);
        await S().getCloudLatest(r.lastBackupTime, r["backup-record"]);
        this.setUserHistory();
      }
    },
    async updateTokens(e) {
      let {
        token: t,
        refreshToken: r
      } = e;
      this.token = t;
      this.refreshToken = r;
    },
    modifyUserInfo(e) {
      this.user = {
        ...this.user,
        ...e
      };
    },
    setUserHistory() {
      if (this.isLogin) {
        try {
          let e = [];
          const t = localStorage.getItem("login-users");
          if (t) {
            e = JSON.parse(t);
            e = e.filter(e => e.email !== this.user.email);
            if (e.length > 3) {
              e.length = 3;
            }
          }
          e.unshift({
            email: this.user.email,
            aiPro: this.user.chatVipEndTime && this.user.chatVipEndTime > Date.now() || false
          });
          localStorage.setItem("login-users", JSON.stringify(e));
        } catch (e) {}
      }
    },
    getUserHistory() {
      if (!this.isLogin) {
        try {
          const e = localStorage.getItem("login-users");
          if (e) {
            const t = JSON.parse(e);
            if (t.length > 4) {
              t.length = 4;
            }
            return t;
          }
        } catch (e) {}
      }
      return [];
    },
    removeUserHistory(e) {
      try {
        const t = localStorage.getItem("login-users");
        if (t) {
          let r = JSON.parse(t);
          r = r.filter(t => t.email !== e);
          localStorage.setItem("login-users", JSON.stringify(r));
        }
      } catch (e) {}
    },
    async refreshUserHistory() {
      try {
        const e = localStorage.getItem("login-users");
        if (e) {
          let t = JSON.parse(e);
          if (t && t.length > 0) {
            const [e, r] = await (0, n.Co)(t.map(e => e.email));
            if (e === null) {
              t = t.map(e => {
                e.aiPro = r.includes(e.email);
                return e;
              });
              localStorage.setItem("login-users", JSON.stringify(t));
              return t;
            }
          }
        }
      } catch (e) {}
      return [];
    }
  }
});
var de;
var he;
(de = 30000, de === undefined && (de = 0), he === undefined && (he = se.z), de < 0 && (de = 0), (0, le.H)(de, de, he)).pipe((0, ue.h)(() => useUserStore().isLogin)).subscribe(() => {
  useUserStore().tiggerTimer = Date.now();
});