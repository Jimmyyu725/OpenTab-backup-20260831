export let LocalSync = o.a;
export let syncTabsStore = o.b;
export let pluginStore = a.pluginStore;
export let userStore = u.userStore;
export let settingStore = c.b;
export let requestCalcSize = c.a;
export let siteStore = l.a;
export let searchStore = s.a;
export let wallpaperStore = i.a;
export let todoStore = f.a;
export let noteStore = p.a;
export let weatherStore = d.weatherStore;
export let syncStore = h.syncStore;
import * as n from /*webcrack:missing*/"./2.js";
import * as o from /*webcrack:missing*/"./309.js";
import * as a from /*webcrack:missing*/"./431.js";
import * as u from /*webcrack:missing*/"./429.js";
import * as c from /*webcrack:missing*/"./430.js";
import * as l from /*webcrack:missing*/"./612.js";
import * as s from /*webcrack:missing*/"./613.js";
import * as i from /*webcrack:missing*/"./609.js";
import * as f from /*webcrack:missing*/"./383.js";
import * as p from /*webcrack:missing*/"./614.js";
import * as d from /*webcrack:missing*/"./610.js";
import * as y from /*webcrack:missing*/"./13.js";
function D(e, t, r, n) {
  var o;
  var a = arguments.length;
  var u = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    u = Reflect.decorate(e, t, r, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (o = e[c]) {
        u = (a < 3 ? o(u) : a > 3 ? o(t, r, u) : o(t, r)) || u;
      }
    }
  }
  if (a > 3 && u) {
    Object.defineProperty(t, r, u);
  }
  return u;
}
class S extends o.a {
  constructor() {
    super(...arguments);
    this.unreadEmailCount = null;
  }
  update(e) {
    if (this.unreadEmailCount !== e) {
      this.unreadEmailCount = e;
    }
  }
}
D([n.g], S.prototype, "unreadEmailCount", undefined);
D([n.b], S.prototype, "update", null);
export const gmailStore = new S();
gmailStore.initSyncStore(y.c, ["unreadEmailCount"]);
import * as h from /*webcrack:missing*/"./602.js";
function g(e, t, r, n) {
  var o;
  var a = arguments.length;
  var u = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    u = Reflect.decorate(e, t, r, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (o = e[c]) {
        u = (a < 3 ? o(u) : a > 3 ? o(t, r, u) : o(t, r)) || u;
      }
    }
  }
  if (a > 3 && u) {
    Object.defineProperty(t, r, u);
  }
  return u;
}
class w extends o.a {
  constructor() {
    super(...arguments);
    this.userDate = 0;
    this.collectData = 0;
  }
  agreeUserData() {
    this.userDate = 1;
  }
  refuseUserData() {
    this.userDate = -1;
  }
  resetUserData() {
    this.userDate = 0;
  }
  agreeCollectData() {
    this.collectData = 1;
  }
  refuseCollectData() {
    this.collectData = -1;
  }
}
g([n.g], w.prototype, "userDate", undefined);
g([n.g], w.prototype, "collectData", undefined);
g([n.b], w.prototype, "agreeUserData", null);
g([n.b], w.prototype, "refuseUserData", null);
g([n.b], w.prototype, "resetUserData", null);
g([n.b], w.prototype, "agreeCollectData", null);
g([n.b], w.prototype, "refuseCollectData", null);
export const privacyStore = new w();
privacyStore.initSyncStore(y.f, ["userDate", "collectData"]);
Object(n.f)({
  enforceActions: "observed"
});