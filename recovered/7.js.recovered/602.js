import * as n from /*webcrack:missing*/"./5.js";
var s = n;
require(/*webcrack:missing*/"./7.js");
import * as a from /*webcrack:missing*/"./2.js";
import * as o from /*webcrack:missing*/"./22.js";
import * as c from /*webcrack:missing*/"./309.js";
import * as r from "./612.js";
import * as l from /*webcrack:missing*/"./430.js";
import * as d from "./613.js";
import * as u from "./609.js";
import * as p from /*webcrack:missing*/"./383.js";
import * as h from "./614.js";
import * as g from /*webcrack:missing*/"./429.js";
import * as b from "./610.js";
import * as y from /*webcrack:missing*/"./1.js";
import * as m from /*webcrack:missing*/"./225.js";
var f = y.b`.container {
  width: 410px;
  box-sizing: border-box;
  padding: 40px 40px 34px 40px;
  background: #ffffff;
  border-radius: 6px;
}
.header {
  text-align: center;
  line-height: 30px;
  height: 28px;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.main {
  margin: 24px auto 40px;
}
.tips {
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #656565;
  line-height: 20px;
}
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.checkbox .input-box {
  display: flex;
  align-items: center;
  position: relative;
}
.checkbox label {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 2px solid #333;
  border-radius: 8px;
  cursor: pointer;
}
.checkbox label::after {
  content: '';
  width: 9px;
  height: 5px;
  position: absolute;
  top: 1px;
  left: 1px;
  border: 2px solid #333;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}
.checkbox input {
  visibility: hidden;
}
.checkbox input:checked + label::after {
  opacity: 1;
}
.checkbox:last-of-type {
  margin-bottom: 0;
}
.btn {
  width: 330px;
  height: 52px;
}
.footer-import {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-import {
  width: 155px;
  height: 52px;
}
`;
function w(e, t, i, n) {
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
let v = class extends m.a {
  constructor() {
    super(...arguments);
    this.onChecked = e => {};
    this.show = false;
    this.checked = 0;
    this.handleCheck = e => {
      this.show = false;
      if (typeof this.onChecked == "function") {
        this.onChecked(e);
      }
      this.checked = 0;
      this.onChecked = () => {};
    };
  }
  static create(e) {
    const t = document.body.querySelector("#modal-first-sync");
    if (t) {
      if (!this.instance) {
        const e = document.createElement("modal-first-sync");
        t.appendChild(e);
        this.instance = e;
      }
      this.instance.show = true;
      this.instance.onChecked = e;
      return this.instance;
    }
  }
  static hide() {
    if (this.instance && this.instance.show) {
      this.instance.handleCheck(null);
    }
  }
  firstUpdated() {}
  checkOne(e) {
    this.checked = e;
  }
  updated() {
    this.radios[this.checked].checked = true;
  }
  render() {
    return y.e`<infinito-modal style="--modal-padding:0;" .closeable="${false}" .open=${this.show}>
      <div slot="body">
        <div class="container">
          <div class="header">${i18n("choose_sync_type")}</div>
          <div class="main">
            <div class="tips">${i18n("sync_type_tips")}</div>
            <div class="checkbox-box">
              <div class="checkbox" @click="${() => this.checkOne(0)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="0" id="first_sync_0" />
                  <label for="first_sync_0"></label>
                </div>
                <span>${i18n("merge_cloud_local")}</span>
              </div>
              <div class="checkbox" @click="${() => this.checkOne(1)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="1" id="first_sync_1" />
                  <label for="first_sync_1"></label>
                </div>
                <span>${i18n("use_local")}</span>
              </div>
              <div class="checkbox" @click="${() => this.checkOne(2)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="2" id="first_sync_2" />
                  <label for="first_sync_2"></label>
                </div>
                <span>${i18n("use_cloud")}</span>
              </div>
            </div>
          </div>
          <div class="footer">
            <infinito-button
              primary
              class="btn"
              @click="${() => {
      this.handleCheck(this.checked);
    }}"
              >${i18n("confirm")}</infinito-button
            >
          </div>
        </div>
      </div>
    </infinito-modal> `;
  }
};
v.styles = f;
v.instance = null;
w([Object(y.g)()], v.prototype, "onChecked", undefined);
w([Object(y.g)({
  type: Boolean
})], v.prototype, "show", undefined);
w([Object(y.g)({
  type: Number
})], v.prototype, "checked", undefined);
w([Object(y.i)("[name=\"first_sync\"]")], v.prototype, "radios", undefined);
v = w([Object(y.c)("modal-first-sync")], v);
function O(e, t, i, n) {
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
let j = class extends m.a {
  constructor() {
    super(...arguments);
    this.onChecked = e => {};
    this.show = false;
    this.checked = 0;
    this.handleCheck = e => {
      this.show = false;
      if (typeof this.onChecked == "function") {
        this.onChecked(e);
      }
      this.checked = 0;
      this.onChecked = () => {};
    };
  }
  static create(e) {
    const t = document.body.querySelector("#modal-import-type");
    if (t) {
      if (!this.instance) {
        const e = document.createElement("modal-import-type");
        t.appendChild(e);
        this.instance = e;
      }
      this.instance.show = true;
      this.instance.onChecked = e;
      return this.instance;
    }
  }
  static hide() {
    if (this.instance && this.instance.show) {
      this.instance.handleCheck(null);
    }
  }
  firstUpdated() {}
  checkOne(e) {
    this.checked = e;
  }
  updated() {
    this.radios[this.checked].checked = true;
  }
  render() {
    return y.e`<infinito-modal style="--modal-padding:0;" .closeable="${false}" .open=${this.show}>
      <div slot="body">
        <div class="container">
          <div class="header">${i18n("import_select_tile")}</div>
          <div class="main">
            <div class="tips">${i18n("inportdata_desc")}</div>
            <div class="checkbox-box">
              <div class="checkbox" @click="${() => this.checkOne(0)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="0" id="first_sync_0" />
                  <label for="first_sync_0"></label>
                </div>
                <span>${i18n("merge_data")}</span>
              </div>
              <div class="checkbox" @click="${() => this.checkOne(1)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="1" id="first_sync_1" />
                  <label for="first_sync_1"></label>
                </div>
                <span>${i18n("overwrite_data")}</span>
              </div>
            </div>
          </div>
          <div class="footer-import">
            <infinito-button
              class="btn-import"
              @click="${() => {
      this.handleCheck(null);
    }}"
              >${i18n("cancel")}</infinito-button
            >
            <infinito-button
              primary
              class="btn-import"
              @click="${() => {
      this.handleCheck(this.checked);
    }}"
              >${i18n("confirm")}</infinito-button
            >
          </div>
        </div>
      </div>
    </infinito-modal> `;
  }
};
j.styles = f;
j.instance = null;
O([Object(y.g)()], j.prototype, "onChecked", undefined);
O([Object(y.g)({
  type: Boolean
})], j.prototype, "show", undefined);
O([Object(y.g)({
  type: Number
})], j.prototype, "checked", undefined);
O([Object(y.i)("[name=\"first_sync\"]")], j.prototype, "radios", undefined);
j = O([Object(y.c)("modal-import-type")], j);
import * as k from /*webcrack:missing*/"./161.js";
import * as I from "./384.js";
import * as _ from /*webcrack:missing*/"./311.js";
import * as S from /*webcrack:missing*/"./13.js";
function x(e, t, i, n) {
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
const C = [r.a, l.b, u.a, d.a, p.a, h.a, b.weatherStore];
class R extends c.a {
  constructor() {
    super(...arguments);
    this.timmer = null;
    this.downloading = false;
    this.backuping = false;
    this.isBackup = false;
    this.isOpenSync = true;
    this.syncId = "";
    this.lastSyncTime = 0;
    this.syncSucsess = false;
    this.syncFail = false;
    this.syncFailMsg = "";
    this.autosSyncList = [];
    this.waitMergeData = null;
    this.waitMergeId = null;
    this.manualSyncList = {};
    this.isRecovered = false;
    this.recoverErrorTimes = 0;
    this.master = false;
    this.prerender = [];
    this.autoBackupPipe = {
      data: {},
      websocketKeys: [],
      timestamp: 0
    };
    this.getAllBackupData = async () => {
      const e = {};
      await s.all(C.map(async t => {
        const i = await t.getBackupData();
        e[t.backupFileKey] = i;
      }));
      return e;
    };
    this.getAutoLatest = async (e = "all") => {
      const t = localStorage.getItem("lock-auto-recover");
      if (t && Date.now() - Number(t) < 3000) {
        return;
      }
      localStorage.setItem("lock-auto-recover", "" + Date.now());
      await this.getSyncList();
      if (this.autosSyncList.length === 0) {
        const e = g.userStore.userInfo["backup-version-v2"];
        if (g.userStore.userInfo["auto-backup"] && !e) {
          const e = g.userStore.userInfo.email ? "basic" : "pro";
          await this.getV1RemoteData(e);
        } else {
          this.tiggerBackup();
        }
        return;
      }
      const i = this.autosSyncList[0];
      if ((i == null ? undefined : i.id) === this.syncId || this.waitMergeId === (i == null ? undefined : i.id)) {
        return;
      }
      const n = localStorage.getItem("pre-sync-id");
      if (!n || (i == null ? undefined : i.id) !== n) {
        await this.getDetail(i.id, "auto", e, false, true);
        localStorage.removeItem("lock-auto-recover");
      }
    };
    this.changeSyncStatus = e => {
      this.master = false;
      this.downloading = e.downloading;
      this.backuping = e.backuping;
      this.isBackup = e.isBackup;
      this.syncFail = e.syncFail;
      this.syncFailMsg = e.syncFailMsg;
      this.syncSucsess = e.syncSucsess;
      if (this.syncSucsess || this.syncFail) {
        this.syncEnd();
      }
    };
  }
  get autoSyncing() {
    return this.downloading || this.backuping;
  }
  async changeSyncSwitch(e) {
    this.isOpenSync = e;
  }
  async autoBackup(e, t = "") {
    const i = await this.toSync(true, e, t);
    if (!i.error) {
      Object(a.i)(() => {
        this.autosSyncList = i.data;
      });
    }
    return i;
  }
  async manualBackup() {
    const {
      default: e
    } = await Promise.resolve().then(require.bind(null, 395));
    const t = e.loading(i18n("backing_up"));
    const {
      error: n,
      data: s
    } = await this.toSync();
    t();
    if (n) {
      e.error(i18n("backup_failed"));
    } else {
      Object(a.i)(() => {
        this.manualSyncList = s;
      });
    }
  }
  async toSync(e = false, t = {}, i = "") {
    let c;
    this.master = true;
    if (e) {
      this.isBackup = true;
      this.backuping = true;
      c = await o.d.autoBackup(t, i);
    } else {
      const e = {};
      await s.all(C.map(async t => {
        const i = await t.getBackupData();
        e[t.backupFileKey] = i;
      }));
      c = await o.d.manualBackup(e);
    }
    const {
      error: r,
      data: l = []
    } = c;
    if (e) {
      if (!r) {
        k.slave.postTask("slave:sync-to-server", i);
      }
      if (r) {
        this.backupEnd(r.message || "auto-backup error", l[0]?.id);
      } else {
        this.backupEnd(null, l[0]?.id);
      }
    }
    return c;
  }
  backupEnd(e, t = "") {
    Object(a.i)(() => {
      this.master = true;
      this.backuping = false;
      if (e) {
        this.syncFail = true;
      } else {
        this.syncSucsess = true;
        if (t) {
          this.syncId = t;
          this.lastSyncTime = Date.now();
        }
      }
    });
    this.syncEnd();
  }
  downloadEnd(e, t = "") {
    Object(a.i)(() => {
      this.master = true;
      this.downloading = false;
      this.backuping = false;
      if (e) {
        this.syncFail = true;
      } else {
        this.syncSucsess = true;
        if (t) {
          this.syncId = t;
          this.lastSyncTime = Date.now();
        }
      }
    });
    this.syncEnd();
  }
  syncEnd() {
    clearTimeout(this.timmer);
    this.timmer = setTimeout(() => {
      Object(a.i)(() => {
        this.syncFail = false;
        this.syncFailMsg = "";
        this.syncSucsess = false;
        this.isBackup = false;
      });
    }, 3000);
  }
  async getSyncList() {
    const {
      data: e,
      error: t
    } = await o.d.getSyncList();
    if (t) {
      throw t;
    }
    Object(a.i)(() => {
      this.autosSyncList = e.auto;
      this.manualSyncList = e.manual;
    });
  }
  async getDetail(e, t, n = "all", s = false, a = false) {
    let c;
    let r;
    this.master = true;
    if (s) {
      const {
        default: e
      } = await Promise.resolve().then(require.bind(null, 395));
      c = e;
      r = c.loading(i18n("syncing"));
    } else {
      this.downloading = true;
      this.isBackup = false;
    }
    const {
      data: l,
      error: d
    } = await o.d.getSyncDetail(a ? "latest" : e, t, n);
    if (s) {
      if (r != null) {
        r();
      }
    }
    if (d) {
      if (s) {
        if (c != null) {
          c.error(i18n("sync_fail"));
        }
      } else {
        this.downloadEnd(d.message || "download error");
      }
    } else {
      await this.useRemote(l, s);
      this.downloadEnd(null, e);
      this.tiggerBackup();
    }
  }
  tiggerBackup() {
    this.changeRecoveredStatus(true);
    if (this.autoBackupPipe.websocketKeys?.length) {
      this.autoBackupPipe.timestamp = Date.now();
    }
  }
  async getV1RemoteData(e, t = false) {
    let n;
    let s;
    this.master = true;
    if (t) {
      const {
        default: e
      } = await Promise.resolve().then(require.bind(null, 395));
      n = e;
      s = n.loading(i18n("syncing"));
    } else {
      this.downloading = true;
      this.isBackup = false;
    }
    const {
      error: c,
      data: r
    } = await o.d.getV2DataFromV1(e);
    if (t) {
      if (s != null) {
        s();
      }
    }
    if (c) {
      if (t) {
        if (n != null) {
          n.error(i18n("sync_fail"));
        }
      } else {
        this.downloadEnd(c.message || "download v1 error");
      }
      Object(a.i)(() => {
        this.recoverErrorTimes += 1;
      });
    } else {
      this.downloadEnd(null);
      await this.useRemote(r, t, true);
      this.tiggerBackup();
    }
  }
  changeRecoveredStatus(e) {
    this.isRecovered = e;
  }
  autoRunGetAutoLatest() {
    setTimeout(() => {
      this.getAutoLatest();
    }, 0);
  }
  showModalAndCheckType(e = false) {
    return new s((t, i) => {
      if (e) {
        v.hide();
      }
      if (v.instance?.show) {
        t(null);
        return;
      }
      const o = Object(a.j)(this.waitMergeData);
      v.create(async n => {
        this.mergeType = n;
        this.diffColorItems();
        try {
          localStorage.setItem("restoring", "1");
          await s.all(C.map(async e => {
            if (o && o[e.backupFileKey]) {
              if (n === 1) {
                e.restartAutoBackupReaction(true);
              } else if (n === 2) {
                try {
                  await e.mergeRemote(o[e.backupFileKey], true);
                  if (e.backupFileKey === "site") {
                    r.a.setRedirectVersion("");
                  }
                } catch (e) {}
              } else {
                if (n !== 0) {
                  throw new Error("not check");
                }
                try {
                  await e.mergeRemote(o[e.backupFileKey], false);
                  if (e.backupFileKey === "site") {
                    r.a.setRedirectVersion("");
                  }
                } catch (e) {}
                e.restartAutoBackupReaction(true);
              }
            }
          }));
          this.downloadEnd(null, this.waitMergeId);
          this.tiggerBackup();
          Object(a.i)(() => {
            this.waitMergeData = null;
            this.waitMergeId = null;
          });
        } catch (t) {
          if (e) {
            i(t);
          }
        }
        localStorage.removeItem("restoring");
        t(null);
      });
    });
  }
  useLocalData(e) {
    C.map(async t => {
      if (e == null ? undefined : e[t.backupFileKey]) {
        try {
          await t.mergeRemote(e[t.backupFileKey], true);
        } catch (e) {
          console.error("Store ~ syncStores.map ~ error", e);
        }
      }
    });
  }
  async useLocalDataWithCheck(e) {
    if (C.some(t => {
      if (e && e[t.backupFileKey]) {
        console.log("diffData ~ st.backupFileKey", t.backupFileKey);
        return t.diffRemote(e[t.backupFileKey]);
      }
      return false;
    })) {
      await this.showModalAndCheckImportType(e);
    } else {
      this.useLocalData(e);
    }
  }
  showModalAndCheckImportType(e) {
    return new s(t => {
      j.create(async i => {
        try {
          await s.all(C.map(async t => {
            if (e && e[t.backupFileKey]) {
              if (i === 1) {
                try {
                  await t.mergeRemote(e[t.backupFileKey], true);
                  if (t.backupFileKey === "site") {
                    r.a.setRedirectVersion("");
                  }
                } catch (e) {}
              } else {
                if (i !== 0) {
                  throw new Error("not check");
                }
                try {
                  await t.mergeRemote(e[t.backupFileKey], false);
                  if (t.backupFileKey === "site") {
                    r.a.setRedirectVersion("");
                  }
                } catch (e) {}
              }
            }
          }));
        } catch (e) {
          console.log("ModalImportType.create ~ error", e);
        }
        t(null);
      });
    });
  }
  useRemote(e, t, i = false) {
    return new s(async n => {
      Object(a.i)(() => {
        this.waitMergeData = null;
        this.waitMergeId = null;
      });
      if (t) {
        await s.all(C.map(async t => {
          if (e == null ? undefined : e[t.backupFileKey]) {
            try {
              await t.mergeRemote(e[t.backupFileKey], true);
              if (t.backupFileKey === "site") {
                r.a.setRedirectVersion("");
              }
            } catch (e) {}
          }
        }));
        this.mergeType = 2;
        this.diffColorItems();
        n(null);
      } else if (this.isRecovered) {
        await s.all(C.map(async t => {
          if (e == null ? undefined : e[t.backupFileKey]) {
            if (i) {
              try {
                await t.mergeRemote(e[t.backupFileKey], true);
              } catch (e) {}
            } else {
              t.stopAutoBackupReaction();
              try {
                await t.mergeRemote(e[t.backupFileKey], true);
              } catch (e) {}
              t.restartAutoBackupReaction();
            }
          }
        }));
        n(null);
      } else if (C.some(t => {
        if (e && e[t.backupFileKey]) {
          console.log("diffData ~ st.backupFileKey", t.backupFileKey);
          return t.diffRemote(e[t.backupFileKey]);
        }
        return false;
      })) {
        Object(a.i)(() => {
          this.waitMergeData = e;
          this.waitMergeId = this.autosSyncList[0]?.id;
        });
        await this.showModalAndCheckType(true);
        n(null);
      } else {
        this.mergeType = 2;
        this.diffColorItems();
        await s.all(C.map(async t => {
          if (e == null ? undefined : e[t.backupFileKey]) {
            try {
              await t.mergeRemote(e[t.backupFileKey], true);
            } catch (e) {}
          }
        }));
        n(null);
      }
    });
  }
  pushAutoBackupPipe(e) {
    if (g.userStore.isLogin && this.isOpenSync) {
      Object.keys(e).forEach(t => {
        this.autoBackupPipe.data[t] = e[t];
        if (!this.autoBackupPipe.websocketKeys.includes(t)) {
          this.autoBackupPipe.websocketKeys.push(t);
        }
      });
      this.autoBackupPipe.timestamp = Date.now();
    }
  }
  cleanupPipe(e) {
    if (e === this.autoBackupPipe.timestamp) {
      this.autoBackupPipe = {
        data: {},
        websocketKeys: [],
        timestamp: 0
      };
    }
  }
  clearList() {
    this.autosSyncList = [];
    this.manualSyncList = [];
  }
  async diffColorItems() {
    await g.userStore.userProfilePromise;
    const e = g.userStore.userInfo["wp-color-update"];
    if (e === g.userStore.wpColorUpdate) {
      return;
    }
    const {
      mergeType: t
    } = this;
    const i = await Object(I.c)();
    const n = Object(a.j)(u.a.customColorItems);
    await u.a.mergeCustomColor(n, i, Number(t), true);
    g.userStore.setWpColorUpdate(e);
  }
}
x([a.g], R.prototype, "downloading", undefined);
x([a.g], R.prototype, "backuping", undefined);
x([a.g], R.prototype, "isBackup", undefined);
x([a.g], R.prototype, "isOpenSync", undefined);
x([a.g], R.prototype, "syncId", undefined);
x([a.g], R.prototype, "lastSyncTime", undefined);
x([a.g], R.prototype, "syncSucsess", undefined);
x([a.g], R.prototype, "syncFail", undefined);
x([a.g], R.prototype, "syncFailMsg", undefined);
x([a.g], R.prototype, "autosSyncList", undefined);
x([a.g], R.prototype, "waitMergeData", undefined);
x([a.g], R.prototype, "waitMergeId", undefined);
x([a.g], R.prototype, "manualSyncList", undefined);
x([a.g], R.prototype, "isRecovered", undefined);
x([a.g], R.prototype, "recoverErrorTimes", undefined);
x([a.g], R.prototype, "master", undefined);
x([a.g], R.prototype, "prerender", undefined);
x([a.g], R.prototype, "autoBackupPipe", undefined);
x([a.e], R.prototype, "autoSyncing", null);
x([a.b], R.prototype, "changeSyncSwitch", null);
x([a.b], R.prototype, "autoBackup", null);
x([a.b], R.prototype, "manualBackup", null);
x([a.b], R.prototype, "toSync", null);
x([a.b], R.prototype, "backupEnd", null);
x([a.b], R.prototype, "downloadEnd", null);
x([a.b], R.prototype, "syncEnd", null);
x([a.b], R.prototype, "getSyncList", null);
x([a.b], R.prototype, "getDetail", null);
x([a.b], R.prototype, "tiggerBackup", null);
x([a.b], R.prototype, "getV1RemoteData", null);
x([a.b], R.prototype, "changeRecoveredStatus", null);
x([a.b], R.prototype, "getAutoLatest", undefined);
x([a.b], R.prototype, "pushAutoBackupPipe", null);
x([a.b], R.prototype, "cleanupPipe", null);
x([a.b], R.prototype, "clearList", null);
x([a.b], R.prototype, "changeSyncStatus", undefined);
export const syncStore = new R();
syncStore.initSyncStore(S.j, ["autoBackupPipe", "syncId", "lastSyncTime", "isOpenSync", "isRecovered", "recoverErrorTimes", "prerender", "waitMergeData", "waitMergeId", "manualSyncList", "autosSyncList"], undefined, 50);
Object(a.c)(() => {
  if (syncStore.firstSync) {
    const {
      isOpenSync: t,
      isRecovered: i,
      downloading: n
    } = syncStore;
    if (g.userStore.isLogin && t && i && !n && !v.instance?.show) {
      const {
        data: e,
        websocketKeys: t,
        timestamp: i
      } = syncStore.autoBackupPipe;
      (async e => {
        const {
          data: t,
          websocketKeys: i,
          timestamp: n
        } = e;
        const o = Object.assign({}, t);
        if (Object.keys(o).length) {
          try {
            const e = localStorage.getItem("lock-auto-backup");
            if (e && Date.now() - Number(e) < 4000) {
              return;
            }
            localStorage.setItem("lock-auto-backup", "" + Date.now());
            if (syncStore.autosSyncList.length === 0) {
              await s.all(C.map(async e => {
                const t = await e.getBackupData();
                o[e.backupFileKey] = t;
              }));
            } else {
              await s.all(C.map(async e => {
                if (i.includes(e.backupFileKey)) {
                  const t = await e.getBackupData();
                  o[e.backupFileKey] = t;
                }
              }));
            }
            const {
              error: t
            } = await syncStore.autoBackup(Object(a.j)(o), i.join(","));
            if (t) {
              return;
            }
            syncStore.cleanupPipe(n);
            localStorage.removeItem("lock-auto-backup");
          } catch (e) {}
        }
      })({
        data: e,
        websocketKeys: t,
        timestamp: i
      });
    }
  }
}, {
  delay: 4000
});
Object(a.c)(() => {
  if (syncStore.firstSync) {
    const e = syncStore.isOpenSync && g.userStore.isLogin;
    k.slave.postTask("slave:change-sync", {
      status: e,
      userInfo: {
        uid: g.userStore.userInfo.uid,
        secret: g.userStore.userInfo.secret
      }
    });
    if (e) {
      syncStore.autoRunGetAutoLatest();
    } else if (g.userStore.isLogin && syncStore.autosSyncList.length === 0 && syncStore.manualSyncList.length === 0) {
      syncStore.getSyncList();
    } else if (!g.userStore.isLogin) {
      syncStore.clearList();
    }
  }
}, {
  delay: 100
});
Object(a.c)(() => {
  if (syncStore.firstSync) {
    if (!syncStore.isOpenSync || !g.userStore.isLogin) {
      syncStore.changeRecoveredStatus(false);
      Object(a.i)(() => {
        syncStore.syncId = "";
        syncStore.waitMergeId = null;
        syncStore.waitMergeData = null;
      });
      localStorage.removeItem("pre-sync-id");
    }
  }
});
Object(a.c)(() => {
  if (syncStore.firstSync && g.userStore.isLogin && g.userStore.userInfo["auto-backup"] === 0 && syncStore.autosSyncList.length === 0) {
    r.a.restartAutoBackupReaction(true);
  }
});
Object(a.c)(() => {
  if (syncStore.firstSync && syncStore.master) {
    const e = {
      downloading: syncStore.downloading,
      backuping: syncStore.backuping,
      syncSucsess: syncStore.syncSucsess,
      syncFail: syncStore.syncFail,
      syncFailMsg: syncStore.syncFailMsg,
      isBackup: syncStore.isBackup
    };
    k.slave.sendMessage("tabs-sync-status", e);
  }
}, {
  delay: 20
});
Object(a.c)(() => {
  if (syncStore.firstSync && syncStore.autosSyncList.length) {
    if (syncStore.waitMergeId === syncStore.autosSyncList[0]?.id) {
      syncStore.showModalAndCheckType();
    } else {
      v.hide();
    }
  }
}, {
  delay: 1
});
window.addEventListener("beforeunload", () => {
  if (syncStore.master) {
    k.slave.sendMessage("tabs-sync-status", {
      downloading: false,
      backuping: false,
      syncSucsess: false,
      syncFail: false,
      syncFailMsg: "",
      isBackup: false
    });
  }
});
Object(a.h)(() => syncStore.firstSync, async e => {}, {
  delay: 1000
});
_.a.sendPageView({
  page: "newtab"
});