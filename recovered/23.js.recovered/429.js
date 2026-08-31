require(/*webcrack:missing*/"./7.js");
require("./19.js");
import * as r from "./5.js";
var o = r;
import * as i from /*webcrack:missing*/"./2.js";
import * as s from "./309.js";
import * as a from "./22.js";
import * as c from "./0.js";
import * as u from "./106.js";
import * as l from "./23.js";
var h = l;
import * as p from "./162.js";
import * as f from "./161.js";
import * as d from "./431.js";
import * as g from "./430.js";
import * as y from "./13.js";
import * as m from "./36.js";
import * as b from "./334.js";
import * as w from "./6.js";
function v(t, e, n, r) {
  var o;
  var i = arguments.length;
  var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (o = t[a]) {
        s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
      }
    }
  }
  if (i > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
class _ extends s.a {
  constructor() {
    super();
    this.isExpired = false;
    this.isLogin = false;
    this.token = "";
    this.userInfo = {};
    this.refreshToken = "";
    this.mobileloginExpire = 0;
    this.mobileloginUrl = "";
    this.areaCodeList = [];
    this.thirdList = [{
      type: a.f.ThirdLoginType.wechat,
      title: i18n("wechat"),
      bindStatus: false,
      nick_name: ""
    }, {
      type: a.f.ThirdLoginType.qq,
      title: "QQ",
      bindStatus: false,
      nick_name: ""
    }, {
      type: a.f.ThirdLoginType.google,
      title: "Google",
      bindStatus: false,
      nick_name: ""
    }, {
      type: a.f.ThirdLoginType.facebook,
      title: "Facebook",
      bindStatus: false,
      abondon: true,
      nick_name: ""
    }, {
      type: a.f.ThirdLoginType.weibo,
      title: i18n("xin_lang_weibo"),
      bindStatus: false,
      abondon: true,
      nick_name: ""
    }];
    this.userProfilePromise = o.resolve();
    this.wpColorUpdate = 0;
    this.logining = false;
    this.modalOpen = false;
    this.removeAccountDisableSec = 10;
    this.removeAccountDisableTimer = null;
    this.showLoginTipModal = false;
    this.profileModal = false;
    this.syncListModal = false;
    this.isModify = false;
    this.openMiniWindow = t => {
      const e = Math.floor(window.screenY + 200);
      const n = Math.floor(window.screenX + window.innerWidth / 3);
      return window.open(t, "_blank", `top=${e},left=${n},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);
    };
    this.binding = false;
    this.bindListener = t => {
      let e;
      const n = () => {
        e = setTimeout(() => {
          t.postMessage({
            from: "origin_login"
          }, "*");
          if (t.closed) {
            window.removeEventListener("message", r);
            this.binding = false;
          } else {
            n();
          }
        }, 500);
      };
      n();
      const r = async t => {
        try {
          if (!t.data || !t.data.key || t.data.key !== "bind") {
            return;
          }
          clearTimeout(e);
          window.removeEventListener("message", r, false);
          const {
            message: n
          } = t.data;
          let o;
          switch (n.type) {
            case a.f.ThirdLoginType.weibo:
            case a.f.ThirdLoginType.google:
            case a.f.ThirdLoginType.facebook:
            case a.f.ThirdLoginType.wechat:
            case a.f.ThirdLoginType.qq:
              o = await a.f.bindThird(n.type, n.code);
          }
          if (o.error) {
            u.message.error(o.error.message);
            return;
          }
          this.bindSuccess("third", o.data);
          u.message.success(i18n("bind_success"));
        } catch (t) {
          u.message.error(i18n("network_error"));
        } finally {
          this.binding = false;
        }
      };
      window.addEventListener("message", r, false);
    };
    this.countdownTimer = null;
    this.checkMobileUrlTimer = null;
    this.isShowLogoutConfirm = false;
    this.showConfirmOpt = "";
    this.isShowSecondProfileModal = false;
    this.isModalFromAi = false;
    this.secondProfileModalType = null;
    this.clearAllData = false;
    this.loading = false;
    this.URL = c.y;
  }
  get renderAI() {
    return !m.a || this.isLogin && this.userInfo.renderAI;
  }
  get thirdAccountList() {
    const t = {};
    if (this.userInfo.third_account) {
      this.userInfo.third_account.forEach(e => {
        t[e.platform] = e;
      });
    }
    return this.thirdList.map(e => t[e.type] ? Object.assign(Object.assign({}, e), {
      bindStatus: true,
      nick_name: t[e.type].nick_name
    }) : e);
  }
  setWpColorUpdate(t) {
    this.wpColorUpdate = t;
  }
  closeModal() {
    this.modalOpen = false;
  }
  openModal() {
    this.modalOpen = true;
  }
  toggleLoginTipModal() {
    this.showLoginTipModal = !this.showLoginTipModal;
  }
  closeLoginTipModal() {
    this.showLoginTipModal = false;
  }
  closeProfileModal() {
    this.profileModal = false;
  }
  openProfileModal() {
    this.profileModal = true;
    this.openModify();
  }
  closeSyncListModal() {
    this.syncListModal = false;
  }
  openSyncListModal() {
    this.syncListModal = true;
  }
  openModify() {
    this.isModify = true;
  }
  async modifyProfile(t) {
    try {
      const e = await a.f.updateProfile(t);
      Object(i.i)(() => {
        if (e && e.code === 0) {
          const {
            user: {
              name: t,
              gender: n,
              avatar: r
            }
          } = e.data;
          this.userInfo.name = t;
          this.userInfo.gender = n;
          this.userInfo.avatar = r;
        } else {
          u.message.error(i18n("update_data_failure"));
        }
      });
    } catch (t) {
      u.message.error(t.message);
    }
  }
  async getUserProfile() {
    const t = await a.f.getUserProfile();
    Object(i.i)(() => {
      if (t) {
        if (t.code === 0 && this.isLogin) {
          const {
            gender: e,
            name: n,
            avatar: r
          } = t.data;
          this.userInfo.name = n;
          this.userInfo.gender = e;
          this.userInfo.avatar = r;
          this.userInfo["auto-backup"] = t.data["auto-backup"];
          this.userInfo["wp-color-update"] = t.data["wp-color-update"];
          this.userInfo["backup-version-v2"] = t.data["backup-version-v2"];
          this.userInfo.email = t.data.email;
          this.userInfo.phone_number = t.data.phone_number;
          this.userInfo.third_account = t.data.third_account;
          this.userInfo.renderAI = t.data.renderAI;
        } else if (t.code === 3012) {
          u.message.error(t.message);
          this.exitAccount();
        }
      }
    });
  }
  async getAreaCodeList() {
    const {
      data: t,
      error: e
    } = await a.f.getAreaCodeList();
    if (!e) {
      if (t == null ? undefined : t.length) {
        Object(i.i)(() => {
          this.areaCodeList = t;
        });
      }
    }
  }
  async updateAvatar(t) {
    try {
      return await a.f.uploadAvatar(t);
    } catch (t) {
      u.message.error(i18n("upload_avatar_failure"));
    }
  }
  closeModify() {
    this.isModify = false;
  }
  thirdPartyLogin(t) {
    let e;
    this.logining = true;
    switch (t) {
      case "facebook":
        e = this.URL + "/login/facebook";
        break;
      case "google":
        e = this.URL + "/login/google";
        break;
      case "qq":
        e = this.URL + "/login/qq";
        break;
      case "sina":
        e = this.URL + "/login/weibo";
        break;
      case "wechat":
        e = this.URL + "/login/wechat";
    }
    setTimeout(async () => {
      const t = this.openMiniWindow(e);
      this.opener = t;
      if (c.n) {
        return;
      }
      const n = setInterval(() => {
        t.postMessage({
          from: "origin_login"
        }, "*");
      }, 300);
      const r = t => {
        if (!t.data || !t.data.key || t.data.key !== "login") {
          return;
        }
        clearInterval(n);
        window.removeEventListener("message", r, false);
        const {
          message: e
        } = t.data;
        this.login3rdSuccess(e);
      };
      window.addEventListener("message", r, false);
    }, 300);
  }
  get isLastId() {
    const t = this.userInfo || {};
    const e = t.third_account || [];
    let n = 0;
    if (t.email) {
      ++n;
    }
    if (t.phone_number) {
      ++n;
    }
    n += e.length;
    return n <= 1;
  }
  thirdPartyBind(t) {
    if (this.binding) {
      return;
    }
    let e;
    this.binding = true;
    switch (t) {
      case a.f.ThirdLoginType.weibo:
      case a.f.ThirdLoginType.google:
      case a.f.ThirdLoginType.facebook:
      case a.f.ThirdLoginType.wechat:
      case a.f.ThirdLoginType.qq:
        e = this.openMiniWindow(`${c.y}/bind/to?type=${t}`);
        this.bindListener(e);
    }
  }
  async thirdPartyUnbind(t) {
    let e;
    switch (t) {
      case a.f.ThirdLoginType.weibo:
      case a.f.ThirdLoginType.google:
      case a.f.ThirdLoginType.facebook:
      case a.f.ThirdLoginType.qq:
      case a.f.ThirdLoginType.wechat:
        e = await a.f.unbindThird(t);
    }
    return e;
  }
  bindSuccess(t, e) {
    if (t === "email") {
      this.userInfo.email = e;
    } else if (t === "phone") {
      this.userInfo.phone_number = e;
    } else if (t === "third") {
      const t = this.userInfo.third_account || [];
      t.push(e);
      this.userInfo.third_account = t;
    }
  }
  unbindSuccess(t, e) {
    if (t === "email") {
      this.userInfo.email = null;
    } else if (t === "phone") {
      this.userInfo.phone_number = null;
    } else if (t === "third") {
      const t = this.userInfo.third_account || [];
      const n = t.findIndex(t => t.platform === e);
      if (n === -1) {
        return;
      }
      t.splice(n, 1);
      this.userInfo.third_account = t;
    }
  }
  async login(t) {
    const e = {
      password: t.password
    };
    if (t.type === "email") {
      e.email = t.account;
    } else {
      if (t.type !== "phone") {
        return;
      }
      e.phone_number = t.account;
    }
    const n = await a.f.login(e);
    Object(i.i)(() => {
      if (!n || n.code !== 0) {
        u.message.error(n.message);
        throw new Error(n.code);
      }
      this.loginEmailSuccess(n.data.user);
      this.setToken(n.data);
      this.setRefreshToken(n.data.refreshToken);
    });
  }
  async getMobileloginUrl(t = false) {
    if (t) {
      this.mobileloginUrl = "";
      this.mobileloginExpire = 0;
    }
    if (p.f) {
      const {
        data: t,
        error: e
      } = await a.f.getMobileloginUrl();
      if (e) {
        Object(i.i)(() => {
          this.mobileloginExpire = 0;
        });
        return;
      }
      Object(i.i)(() => {
        this.mobileloginUrl = t.url;
        this.mobileloginExpire = Math.floor(t.expire / 1000);
      });
      this.checkMobileloginUrl(t.code, t.type);
      if (this.mobileloginExpire !== 0) {
        this.countdownTimer = setInterval(() => {
          Object(i.i)(() => {
            this.mobileloginExpire -= 1;
          });
          if (this.mobileloginExpire <= 0) {
            clearInterval(this.countdownTimer);
          }
        }, 1000);
      }
    }
  }
  async checkMobileloginUrl(t, e, n = 5000) {
    if (p.f && this.mobileloginExpire > 3) {
      clearTimeout(this.checkMobileUrlTimer);
      this.checkMobileUrlTimer = setTimeout(async () => {
        const {
          data: r
        } = await a.f.checkMobileloginUrl(t, e);
        if (r && r.expired) {
          clearInterval(this.countdownTimer);
          Object(i.i)(() => {
            this.mobileloginExpire = 0;
          });
          return;
        }
        this.checkMobileloginUrl(t, e, n);
      }, n);
    }
  }
  async loginEmailSuccess(t) {
    this.logining = false;
    this.closeModal();
    this.isLogin = true;
    this.userInfo = t;
    this.isExpired = false;
    this.settingLoginSuccess();
  }
  setUserData(t) {
    this.logining = false;
    this.closeModal();
    this.isLogin = t.isLogin;
    this.userInfo = t;
    this.isExpired = false;
    ["token", "refreshToken", "isLogin"].forEach(t => delete this.userInfo[t]);
  }
  async login3rdSuccess(t) {
    if (!t || !Object.keys(t).length) {
      this.cancelLogin();
      return;
    }
    const e = t["login-type"];
    if (["qq", "wechat"].includes(e)) {
      const e = await a.f.loginWithUid(t);
      if (e.code === 0) {
        Object(i.i)(() => {
          this.setUserData(t);
          this.setToken(e.data);
          this.setRefreshToken(e.data.refreshToken);
        });
      } else if (e.code === 3006) {
        u.message.error("获取token失败");
      }
    } else {
      this.setUserData(t);
      this.setToken(t);
      this.setRefreshToken(t.refreshToken);
    }
    this.settingLoginSuccess();
  }
  settingLoginSuccess() {
    if (w.IS_ZH) {
      g.b.changeSetting("view", "isHideIcp", true);
    }
  }
  cancelLogin() {
    var t;
    this.logining = false;
    if ((t = this.opener) !== null && t !== undefined) {
      t.close();
    }
  }
  toggleClear(t) {
    this.clearAllData = t;
  }
  logout(t) {
    this.isShowLogoutConfirm = true;
    this.showConfirmOpt = t;
    if (t === "remove") {
      this.removeAccountDisableSec = 10;
      clearInterval(this.removeAccountDisableTimer);
      this.removeAccountDisableTimer = setInterval(() => {
        Object(i.i)(() => {
          this.removeAccountDisableSec -= 1;
          if (this.removeAccountDisableSec === 0) {
            clearInterval(this.removeAccountDisableTimer);
            this.removeAccountDisableTimer = null;
          }
        });
      }, 1000);
    }
  }
  showSecondProfileModal(t, e = false) {
    this.isModalFromAi = e;
    this.isShowSecondProfileModal = true;
    this.secondProfileModalType = t;
  }
  closeSecondProfileModal() {
    this.isShowSecondProfileModal = false;
    this.secondProfileModalType = null;
  }
  async exitAccount() {
    this.loading = true;
    b.b.postIframeMessage({
      type: b.a.logout,
      logoutWithClear: this.clearAllData
    });
    await new o(t => {
      setTimeout(() => {
        if (this.clearAllData) {
          this.clearAllStore().then(t);
        } else {
          t(null);
        }
      }, 200);
    });
    Object(i.i)(() => {
      this.isLogin = false;
      this.userInfo = {};
      this.clearToken();
    });
    if (this.clearAllData) {
      window.location.reload();
    } else {
      Object(i.i)(() => this.loading = false);
      this.closeLogoutConfirm();
      this.closeProfileModal();
      if (c.s) {
        d.pluginStore.hideLast();
      }
    }
  }
  async deleteAccount() {
    this.loading = true;
    const t = await a.f.deleteAccount();
    Object(i.i)(() => {
      if (t && t.code === 0) {
        this.exitAccount();
      } else {
        if (t.code === 3012) {
          this.exitAccount();
        }
        u.message.error(t.message);
      }
      this.loading = false;
    });
  }
  restoreKeysToStorage(t) {
    t.forEach(({
      data: t,
      key: e
    }) => localStorage.setItem(e, t));
  }
  async clearAllStore() {
    this.stopAutoBackupReaction();
    this.stopToStorageReaction();
    await y.a.deleteAllForLogout();
    const t = [m.d, m.e];
    await this._deleteIdb(t);
    f.slave.sendMessage("tabs-reload");
  }
  async _deleteIdb(t) {
    const e = await new o(t => h.keys((e, n) => t(n)));
    await o.all(t.map(t => new o(n => {
      const r = t.split("->");
      if (r.length === 1) {
        if (e.includes(t)) {
          h.removeItem(t, n);
          return;
        } else {
          n(null);
          return;
        }
      }
      n(null);
      if (e.includes(r[0])) {
        h.getItem(r[0], t => {
          r.reduce((t, e, n) => {
            if (n === r.length - 1) {
              Reflect.deleteProperty(t, e);
            }
            return t[e];
          }, t);
          h.setItem(r[0], n);
        });
      }
    })));
  }
  _clearLocalStorage(t) {
    const e = new Map();
    t.filter(Boolean).forEach(t => {
      const n = t.split("->");
      if (n.length === 1) {
        e.set(t, localStorage.getItem(t));
        return;
      }
      const r = JSON.parse(localStorage.getItem(n[0]));
      n.slice(1).forEach((t, e) => {
        const o = e === 0 ? r : r[n[e]];
        for (const e in o) {
          if (t !== e) {
            Reflect.deleteProperty(o, e);
          }
        }
      });
      e.set(n[0], JSON.stringify(r));
    });
    localStorage.clear();
    for (const t of e.keys()) {
      localStorage.setItem(t, e.get(t));
    }
  }
  closeLogoutConfirm() {
    this.isShowLogoutConfirm = false;
  }
  setToken(t) {
    this.token = t.token;
    b.b.postIframeMessage({
      type: b.a.authToken,
      authToken: userStore.token
    });
  }
  setRefreshToken(t) {
    this.refreshToken = t;
  }
  clearToken() {
    this.token = "";
    this.refreshToken = "";
  }
  setOutdated() {
    this.isExpired = true;
    this.isLogin = false;
  }
  toggleReLogin() {
    this.isExpired = false;
  }
  getPhoneNumber() {
    if (this.userInfo.phone_number) {
      const t = this.userInfo.phone_number + "";
      return `${t.slice(0, 3)}****${t.slice(-4)}`;
    }
    return "";
  }
}
v([i.g], _.prototype, "isExpired", undefined);
v([i.g], _.prototype, "isLogin", undefined);
v([i.g], _.prototype, "token", undefined);
v([i.g], _.prototype, "userInfo", undefined);
v([i.g], _.prototype, "refreshToken", undefined);
v([i.g], _.prototype, "mobileloginExpire", undefined);
v([i.g], _.prototype, "mobileloginUrl", undefined);
v([i.g], _.prototype, "areaCodeList", undefined);
v([i.e], _.prototype, "renderAI", null);
v([i.e], _.prototype, "thirdAccountList", null);
v([i.g], _.prototype, "wpColorUpdate", undefined);
v([i.b], _.prototype, "setWpColorUpdate", null);
v([i.g], _.prototype, "opener", undefined);
v([i.g], _.prototype, "logining", undefined);
v([i.g], _.prototype, "modalOpen", undefined);
v([i.g], _.prototype, "removeAccountDisableSec", undefined);
v([i.g], _.prototype, "removeAccountDisableTimer", undefined);
v([i.b], _.prototype, "closeModal", null);
v([i.b], _.prototype, "openModal", null);
v([i.g], _.prototype, "showLoginTipModal", undefined);
v([i.b], _.prototype, "toggleLoginTipModal", null);
v([i.b], _.prototype, "closeLoginTipModal", null);
v([i.g], _.prototype, "profileModal", undefined);
v([i.g], _.prototype, "syncListModal", undefined);
v([i.b], _.prototype, "closeProfileModal", null);
v([i.b], _.prototype, "openProfileModal", null);
v([i.b], _.prototype, "closeSyncListModal", null);
v([i.b], _.prototype, "openSyncListModal", null);
v([i.g], _.prototype, "isModify", undefined);
v([i.b], _.prototype, "openModify", null);
v([i.b], _.prototype, "modifyProfile", null);
v([i.b], _.prototype, "getUserProfile", null);
v([i.b], _.prototype, "getAreaCodeList", null);
v([i.b], _.prototype, "updateAvatar", null);
v([i.b], _.prototype, "closeModify", null);
v([i.b], _.prototype, "thirdPartyLogin", null);
v([i.g], _.prototype, "binding", undefined);
v([i.e], _.prototype, "isLastId", null);
v([i.b], _.prototype, "thirdPartyBind", null);
v([i.b], _.prototype, "thirdPartyUnbind", null);
v([i.b], _.prototype, "bindSuccess", null);
v([i.b], _.prototype, "unbindSuccess", null);
v([i.b], _.prototype, "login", null);
v([i.b], _.prototype, "getMobileloginUrl", null);
v([i.b], _.prototype, "checkMobileloginUrl", null);
v([i.b], _.prototype, "loginEmailSuccess", null);
v([i.b], _.prototype, "setUserData", null);
v([i.b], _.prototype, "login3rdSuccess", null);
v([i.b], _.prototype, "cancelLogin", null);
v([i.g], _.prototype, "isShowLogoutConfirm", undefined);
v([i.g], _.prototype, "showConfirmOpt", undefined);
v([i.g], _.prototype, "isShowSecondProfileModal", undefined);
v([i.g], _.prototype, "isModalFromAi", undefined);
v([i.g], _.prototype, "secondProfileModalType", undefined);
v([i.g], _.prototype, "clearAllData", undefined);
v([i.b], _.prototype, "toggleClear", null);
v([i.b], _.prototype, "logout", null);
v([i.b], _.prototype, "showSecondProfileModal", null);
v([i.b], _.prototype, "closeSecondProfileModal", null);
v([i.g], _.prototype, "loading", undefined);
v([i.b], _.prototype, "exitAccount", null);
v([i.b], _.prototype, "deleteAccount", null);
v([i.b], _.prototype, "clearAllStore", null);
v([i.b], _.prototype, "closeLogoutConfirm", null);
v([i.b], _.prototype, "setToken", null);
v([i.b], _.prototype, "setRefreshToken", null);
v([i.b], _.prototype, "clearToken", null);
v([i.b], _.prototype, "setOutdated", null);
v([i.b], _.prototype, "toggleReLogin", null);
export const userStore = new _();
Object(i.c)(() => {
  if (userStore.firstSync) {
    if (userStore.isLogin) {
      userStore.closeModal();
      userStore.toggleReLogin();
      userStore.userProfilePromise = userStore.getUserProfile();
    } else {
      userStore.closeProfileModal();
      userStore.closeSecondProfileModal();
    }
  }
});
userStore.initSyncStore(y.l, ["userInfo", "isLogin", "token", "refreshToken", "wpColorUpdate"]);
y.j.injectUserStore(userStore);
y.j.injectSendTabsSync(t => {
  f.slave.sendMessage("tabs-sync", t);
});