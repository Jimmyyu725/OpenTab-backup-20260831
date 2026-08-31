require(/*webcrack:missing*/"./7.js");
require(/*webcrack:missing*/"./19.js");
import * as o from /*webcrack:missing*/"./5.js";
var s = o;
import * as n from /*webcrack:missing*/"./2.js";
import * as r from "./309.js";
import * as a from /*webcrack:missing*/"./22.js";
import * as c from /*webcrack:missing*/"./0.js";
import * as l from "./106.js";
import * as p from /*webcrack:missing*/"./23.js";
var h = p;
import * as d from /*webcrack:missing*/"./162.js";
import * as u from "./161.js";
import * as g from "./431.js";
import * as b from "./430.js";
import * as m from /*webcrack:missing*/"./13.js";
import * as f from /*webcrack:missing*/"./36.js";
import * as y from "./334.js";
import * as w from /*webcrack:missing*/"./6.js";
function k(e, t, i, o) {
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
class v extends r.a {
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
    this.userProfilePromise = s.resolve();
    this.wpColorUpdate = 0;
    this.logining = false;
    this.modalOpen = false;
    this.removeAccountDisableSec = 10;
    this.removeAccountDisableTimer = null;
    this.showLoginTipModal = false;
    this.profileModal = false;
    this.syncListModal = false;
    this.isModify = false;
    this.openMiniWindow = e => {
      const t = Math.floor(window.screenY + 200);
      const i = Math.floor(window.screenX + window.innerWidth / 3);
      return window.open(e, "_blank", `top=${t},left=${i},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);
    };
    this.binding = false;
    this.bindListener = e => {
      let t;
      const i = () => {
        t = setTimeout(() => {
          e.postMessage({
            from: "origin_login"
          }, "*");
          if (e.closed) {
            window.removeEventListener("message", o);
            this.binding = false;
          } else {
            i();
          }
        }, 500);
      };
      i();
      const o = async e => {
        try {
          if (!e.data || !e.data.key || e.data.key !== "bind") {
            return;
          }
          clearTimeout(t);
          window.removeEventListener("message", o, false);
          const {
            message: i
          } = e.data;
          let s;
          switch (i.type) {
            case a.f.ThirdLoginType.weibo:
            case a.f.ThirdLoginType.google:
            case a.f.ThirdLoginType.facebook:
            case a.f.ThirdLoginType.wechat:
            case a.f.ThirdLoginType.qq:
              s = await a.f.bindThird(i.type, i.code);
          }
          if (s.error) {
            l.message.error(s.error.message);
            return;
          }
          this.bindSuccess("third", s.data);
          l.message.success(i18n("bind_success"));
        } catch (e) {
          l.message.error(i18n("network_error"));
        } finally {
          this.binding = false;
        }
      };
      window.addEventListener("message", o, false);
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
    return !f.a || this.isLogin && this.userInfo.renderAI;
  }
  get thirdAccountList() {
    const e = {};
    if (this.userInfo.third_account) {
      this.userInfo.third_account.forEach(t => {
        e[t.platform] = t;
      });
    }
    return this.thirdList.map(t => e[t.type] ? Object.assign(Object.assign({}, t), {
      bindStatus: true,
      nick_name: e[t.type].nick_name
    }) : t);
  }
  setWpColorUpdate(e) {
    this.wpColorUpdate = e;
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
  async modifyProfile(e) {
    try {
      const t = await a.f.updateProfile(e);
      Object(n.i)(() => {
        if (t && t.code === 0) {
          const {
            user: {
              name: e,
              gender: i,
              avatar: o
            }
          } = t.data;
          this.userInfo.name = e;
          this.userInfo.gender = i;
          this.userInfo.avatar = o;
        } else {
          l.message.error(i18n("update_data_failure"));
        }
      });
    } catch (e) {
      l.message.error(e.message);
    }
  }
  async getUserProfile() {
    const e = await a.f.getUserProfile();
    Object(n.i)(() => {
      if (e) {
        if (e.code === 0 && this.isLogin) {
          const {
            gender: t,
            name: i,
            avatar: o
          } = e.data;
          this.userInfo.name = i;
          this.userInfo.gender = t;
          this.userInfo.avatar = o;
          this.userInfo["auto-backup"] = e.data["auto-backup"];
          this.userInfo["wp-color-update"] = e.data["wp-color-update"];
          this.userInfo["backup-version-v2"] = e.data["backup-version-v2"];
          this.userInfo.email = e.data.email;
          this.userInfo.phone_number = e.data.phone_number;
          this.userInfo.third_account = e.data.third_account;
          this.userInfo.renderAI = e.data.renderAI;
        } else if (e.code === 3012) {
          l.message.error(e.message);
          this.exitAccount();
        }
      }
    });
  }
  async getAreaCodeList() {
    const {
      data: e,
      error: t
    } = await a.f.getAreaCodeList();
    if (!t) {
      if (e == null ? undefined : e.length) {
        Object(n.i)(() => {
          this.areaCodeList = e;
        });
      }
    }
  }
  async updateAvatar(e) {
    try {
      return await a.f.uploadAvatar(e);
    } catch (e) {
      l.message.error(i18n("upload_avatar_failure"));
    }
  }
  closeModify() {
    this.isModify = false;
  }
  thirdPartyLogin(e) {
    let t;
    this.logining = true;
    switch (e) {
      case "facebook":
        t = this.URL + "/login/facebook";
        break;
      case "google":
        t = this.URL + "/login/google";
        break;
      case "qq":
        t = this.URL + "/login/qq";
        break;
      case "sina":
        t = this.URL + "/login/weibo";
        break;
      case "wechat":
        t = this.URL + "/login/wechat";
    }
    setTimeout(async () => {
      const e = this.openMiniWindow(t);
      this.opener = e;
      if (c.n) {
        return;
      }
      const i = setInterval(() => {
        e.postMessage({
          from: "origin_login"
        }, "*");
      }, 300);
      const o = e => {
        if (!e.data || !e.data.key || e.data.key !== "login") {
          return;
        }
        clearInterval(i);
        window.removeEventListener("message", o, false);
        const {
          message: t
        } = e.data;
        this.login3rdSuccess(t);
      };
      window.addEventListener("message", o, false);
    }, 300);
  }
  get isLastId() {
    const e = this.userInfo || {};
    const t = e.third_account || [];
    let i = 0;
    if (e.email) {
      ++i;
    }
    if (e.phone_number) {
      ++i;
    }
    i += t.length;
    return i <= 1;
  }
  thirdPartyBind(e) {
    if (this.binding) {
      return;
    }
    let t;
    this.binding = true;
    switch (e) {
      case a.f.ThirdLoginType.weibo:
      case a.f.ThirdLoginType.google:
      case a.f.ThirdLoginType.facebook:
      case a.f.ThirdLoginType.wechat:
      case a.f.ThirdLoginType.qq:
        t = this.openMiniWindow(`${c.y}/bind/to?type=${e}`);
        this.bindListener(t);
    }
  }
  async thirdPartyUnbind(e) {
    let t;
    switch (e) {
      case a.f.ThirdLoginType.weibo:
      case a.f.ThirdLoginType.google:
      case a.f.ThirdLoginType.facebook:
      case a.f.ThirdLoginType.qq:
      case a.f.ThirdLoginType.wechat:
        t = await a.f.unbindThird(e);
    }
    return t;
  }
  bindSuccess(e, t) {
    if (e === "email") {
      this.userInfo.email = t;
    } else if (e === "phone") {
      this.userInfo.phone_number = t;
    } else if (e === "third") {
      const e = this.userInfo.third_account || [];
      e.push(t);
      this.userInfo.third_account = e;
    }
  }
  unbindSuccess(e, t) {
    if (e === "email") {
      this.userInfo.email = null;
    } else if (e === "phone") {
      this.userInfo.phone_number = null;
    } else if (e === "third") {
      const e = this.userInfo.third_account || [];
      const i = e.findIndex(e => e.platform === t);
      if (i === -1) {
        return;
      }
      e.splice(i, 1);
      this.userInfo.third_account = e;
    }
  }
  async login(e) {
    const t = {
      password: e.password
    };
    if (e.type === "email") {
      t.email = e.account;
    } else {
      if (e.type !== "phone") {
        return;
      }
      t.phone_number = e.account;
    }
    const i = await a.f.login(t);
    Object(n.i)(() => {
      if (!i || i.code !== 0) {
        l.message.error(i.message);
        throw new Error(i.code);
      }
      this.loginEmailSuccess(i.data.user);
      this.setToken(i.data);
      this.setRefreshToken(i.data.refreshToken);
    });
  }
  async getMobileloginUrl(e = false) {
    if (e) {
      this.mobileloginUrl = "";
      this.mobileloginExpire = 0;
    }
    if (d.f) {
      const {
        data: e,
        error: t
      } = await a.f.getMobileloginUrl();
      if (t) {
        Object(n.i)(() => {
          this.mobileloginExpire = 0;
        });
        return;
      }
      Object(n.i)(() => {
        this.mobileloginUrl = e.url;
        this.mobileloginExpire = Math.floor(e.expire / 1000);
      });
      this.checkMobileloginUrl(e.code, e.type);
      if (this.mobileloginExpire !== 0) {
        this.countdownTimer = setInterval(() => {
          Object(n.i)(() => {
            this.mobileloginExpire -= 1;
          });
          if (this.mobileloginExpire <= 0) {
            clearInterval(this.countdownTimer);
          }
        }, 1000);
      }
    }
  }
  async checkMobileloginUrl(e, t, i = 5000) {
    if (d.f && this.mobileloginExpire > 3) {
      clearTimeout(this.checkMobileUrlTimer);
      this.checkMobileUrlTimer = setTimeout(async () => {
        const {
          data: o
        } = await a.f.checkMobileloginUrl(e, t);
        if (o && o.expired) {
          clearInterval(this.countdownTimer);
          Object(n.i)(() => {
            this.mobileloginExpire = 0;
          });
          return;
        }
        this.checkMobileloginUrl(e, t, i);
      }, i);
    }
  }
  async loginEmailSuccess(e) {
    this.logining = false;
    this.closeModal();
    this.isLogin = true;
    this.userInfo = e;
    this.isExpired = false;
    this.settingLoginSuccess();
  }
  setUserData(e) {
    this.logining = false;
    this.closeModal();
    this.isLogin = e.isLogin;
    this.userInfo = e;
    this.isExpired = false;
    ["token", "refreshToken", "isLogin"].forEach(e => delete this.userInfo[e]);
  }
  async login3rdSuccess(e) {
    if (!e || !Object.keys(e).length) {
      this.cancelLogin();
      return;
    }
    const t = e["login-type"];
    if (["qq", "wechat"].includes(t)) {
      const t = await a.f.loginWithUid(e);
      if (t.code === 0) {
        Object(n.i)(() => {
          this.setUserData(e);
          this.setToken(t.data);
          this.setRefreshToken(t.data.refreshToken);
        });
      } else if (t.code === 3006) {
        l.message.error("获取token失败");
      }
    } else {
      this.setUserData(e);
      this.setToken(e);
      this.setRefreshToken(e.refreshToken);
    }
    this.settingLoginSuccess();
  }
  settingLoginSuccess() {
    if (w.IS_ZH) {
      b.b.changeSetting("view", "isHideIcp", true);
    }
  }
  cancelLogin() {
    var e;
    this.logining = false;
    if ((e = this.opener) !== null && e !== undefined) {
      e.close();
    }
  }
  toggleClear(e) {
    this.clearAllData = e;
  }
  logout(e) {
    this.isShowLogoutConfirm = true;
    this.showConfirmOpt = e;
    if (e === "remove") {
      this.removeAccountDisableSec = 10;
      clearInterval(this.removeAccountDisableTimer);
      this.removeAccountDisableTimer = setInterval(() => {
        Object(n.i)(() => {
          this.removeAccountDisableSec -= 1;
          if (this.removeAccountDisableSec === 0) {
            clearInterval(this.removeAccountDisableTimer);
            this.removeAccountDisableTimer = null;
          }
        });
      }, 1000);
    }
  }
  showSecondProfileModal(e, t = false) {
    this.isModalFromAi = t;
    this.isShowSecondProfileModal = true;
    this.secondProfileModalType = e;
  }
  closeSecondProfileModal() {
    this.isShowSecondProfileModal = false;
    this.secondProfileModalType = null;
  }
  async exitAccount() {
    this.loading = true;
    y.b.postIframeMessage({
      type: y.a.logout,
      logoutWithClear: this.clearAllData
    });
    await new s(e => {
      setTimeout(() => {
        if (this.clearAllData) {
          this.clearAllStore().then(e);
        } else {
          e(null);
        }
      }, 200);
    });
    Object(n.i)(() => {
      this.isLogin = false;
      this.userInfo = {};
      this.clearToken();
    });
    if (this.clearAllData) {
      window.location.reload();
    } else {
      Object(n.i)(() => this.loading = false);
      this.closeLogoutConfirm();
      this.closeProfileModal();
      if (c.s) {
        g.pluginStore.hideLast();
      }
    }
  }
  async deleteAccount() {
    this.loading = true;
    const e = await a.f.deleteAccount();
    Object(n.i)(() => {
      if (e && e.code === 0) {
        this.exitAccount();
      } else {
        if (e.code === 3012) {
          this.exitAccount();
        }
        l.message.error(e.message);
      }
      this.loading = false;
    });
  }
  restoreKeysToStorage(e) {
    e.forEach(({
      data: e,
      key: t
    }) => localStorage.setItem(t, e));
  }
  async clearAllStore() {
    this.stopAutoBackupReaction();
    this.stopToStorageReaction();
    await m.a.deleteAllForLogout();
    const e = [f.d, f.e];
    await this._deleteIdb(e);
    u.slave.sendMessage("tabs-reload");
  }
  async _deleteIdb(e) {
    const t = await new s(e => h.keys((t, i) => e(i)));
    await s.all(e.map(e => new s(i => {
      const o = e.split("->");
      if (o.length === 1) {
        if (t.includes(e)) {
          h.removeItem(e, i);
          return;
        } else {
          i(null);
          return;
        }
      }
      i(null);
      if (t.includes(o[0])) {
        h.getItem(o[0], e => {
          o.reduce((e, t, i) => {
            if (i === o.length - 1) {
              Reflect.deleteProperty(e, t);
            }
            return e[t];
          }, e);
          h.setItem(o[0], i);
        });
      }
    })));
  }
  _clearLocalStorage(e) {
    const t = new Map();
    e.filter(Boolean).forEach(e => {
      const i = e.split("->");
      if (i.length === 1) {
        t.set(e, localStorage.getItem(e));
        return;
      }
      const o = JSON.parse(localStorage.getItem(i[0]));
      i.slice(1).forEach((e, t) => {
        const s = t === 0 ? o : o[i[t]];
        for (const t in s) {
          if (e !== t) {
            Reflect.deleteProperty(s, t);
          }
        }
      });
      t.set(i[0], JSON.stringify(o));
    });
    localStorage.clear();
    for (const e of t.keys()) {
      localStorage.setItem(e, t.get(e));
    }
  }
  closeLogoutConfirm() {
    this.isShowLogoutConfirm = false;
  }
  setToken(e) {
    this.token = e.token;
    y.b.postIframeMessage({
      type: y.a.authToken,
      authToken: userStore.token
    });
  }
  setRefreshToken(e) {
    this.refreshToken = e;
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
      const e = this.userInfo.phone_number + "";
      return `${e.slice(0, 3)}****${e.slice(-4)}`;
    }
    return "";
  }
}
k([n.g], v.prototype, "isExpired", undefined);
k([n.g], v.prototype, "isLogin", undefined);
k([n.g], v.prototype, "token", undefined);
k([n.g], v.prototype, "userInfo", undefined);
k([n.g], v.prototype, "refreshToken", undefined);
k([n.g], v.prototype, "mobileloginExpire", undefined);
k([n.g], v.prototype, "mobileloginUrl", undefined);
k([n.g], v.prototype, "areaCodeList", undefined);
k([n.e], v.prototype, "renderAI", null);
k([n.e], v.prototype, "thirdAccountList", null);
k([n.g], v.prototype, "wpColorUpdate", undefined);
k([n.b], v.prototype, "setWpColorUpdate", null);
k([n.g], v.prototype, "opener", undefined);
k([n.g], v.prototype, "logining", undefined);
k([n.g], v.prototype, "modalOpen", undefined);
k([n.g], v.prototype, "removeAccountDisableSec", undefined);
k([n.g], v.prototype, "removeAccountDisableTimer", undefined);
k([n.b], v.prototype, "closeModal", null);
k([n.b], v.prototype, "openModal", null);
k([n.g], v.prototype, "showLoginTipModal", undefined);
k([n.b], v.prototype, "toggleLoginTipModal", null);
k([n.b], v.prototype, "closeLoginTipModal", null);
k([n.g], v.prototype, "profileModal", undefined);
k([n.g], v.prototype, "syncListModal", undefined);
k([n.b], v.prototype, "closeProfileModal", null);
k([n.b], v.prototype, "openProfileModal", null);
k([n.b], v.prototype, "closeSyncListModal", null);
k([n.b], v.prototype, "openSyncListModal", null);
k([n.g], v.prototype, "isModify", undefined);
k([n.b], v.prototype, "openModify", null);
k([n.b], v.prototype, "modifyProfile", null);
k([n.b], v.prototype, "getUserProfile", null);
k([n.b], v.prototype, "getAreaCodeList", null);
k([n.b], v.prototype, "updateAvatar", null);
k([n.b], v.prototype, "closeModify", null);
k([n.b], v.prototype, "thirdPartyLogin", null);
k([n.g], v.prototype, "binding", undefined);
k([n.e], v.prototype, "isLastId", null);
k([n.b], v.prototype, "thirdPartyBind", null);
k([n.b], v.prototype, "thirdPartyUnbind", null);
k([n.b], v.prototype, "bindSuccess", null);
k([n.b], v.prototype, "unbindSuccess", null);
k([n.b], v.prototype, "login", null);
k([n.b], v.prototype, "getMobileloginUrl", null);
k([n.b], v.prototype, "checkMobileloginUrl", null);
k([n.b], v.prototype, "loginEmailSuccess", null);
k([n.b], v.prototype, "setUserData", null);
k([n.b], v.prototype, "login3rdSuccess", null);
k([n.b], v.prototype, "cancelLogin", null);
k([n.g], v.prototype, "isShowLogoutConfirm", undefined);
k([n.g], v.prototype, "showConfirmOpt", undefined);
k([n.g], v.prototype, "isShowSecondProfileModal", undefined);
k([n.g], v.prototype, "isModalFromAi", undefined);
k([n.g], v.prototype, "secondProfileModalType", undefined);
k([n.g], v.prototype, "clearAllData", undefined);
k([n.b], v.prototype, "toggleClear", null);
k([n.b], v.prototype, "logout", null);
k([n.b], v.prototype, "showSecondProfileModal", null);
k([n.b], v.prototype, "closeSecondProfileModal", null);
k([n.g], v.prototype, "loading", undefined);
k([n.b], v.prototype, "exitAccount", null);
k([n.b], v.prototype, "deleteAccount", null);
k([n.b], v.prototype, "clearAllStore", null);
k([n.b], v.prototype, "closeLogoutConfirm", null);
k([n.b], v.prototype, "setToken", null);
k([n.b], v.prototype, "setRefreshToken", null);
k([n.b], v.prototype, "clearToken", null);
k([n.b], v.prototype, "setOutdated", null);
k([n.b], v.prototype, "toggleReLogin", null);
export const userStore = new v();
Object(n.c)(() => {
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
userStore.initSyncStore(m.l, ["userInfo", "isLogin", "token", "refreshToken", "wpColorUpdate"]);
m.j.injectUserStore(userStore);
m.j.injectSendTabsSync(e => {
  u.slave.sendMessage("tabs-sync", e);
});