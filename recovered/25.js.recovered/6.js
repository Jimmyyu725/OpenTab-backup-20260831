require("./19.js");
require("./64.js");
require(/*webcrack:missing*/"./7.js");
import * as r from "./0.js";
import * as o from "./107.js";
var i = o;
import * as s from "./23.js";
var a = s;
let c = {};
export const i18n = function (t, e) {
  if (r.l && !r.r) {
    return chrome.i18n.getMessage(t, e) || t;
  }
  if (r.s || r.r) {
    if (r.r && e === undefined) {
      return chrome.i18n.getMessage(t, e) || t;
    }
    const o = c[t]?.message;
    const i = [];
    if (typeof e == "string") {
      i.push(e);
    } else if (Array.isArray(e)) {
      i.push(...e);
    }
    const s = /(\$.+?\$)/g;
    let a = s.exec(o);
    let u = o;
    while (a) {
      let [t] = i.splice(0, 1);
      if (t === undefined) {
        t = "";
      }
      u = u.replace(a[1], t);
      a = s.exec(o);
    }
    return u || t;
  }
  return t;
};
function l() {
  return r.C.lang || "";
}
if (r.t) {
  globalThis.i18n = i18n;
} else {
  window.i18n = i18n;
}
export const IS_ZH = l() === "zh-CN";
export const IS_EN = l().startsWith("en");
export async function initMasterI18n() {
  const t = await getLangFromLocal();
  c = t;
}
export async function initI18n() {
  if (!r.s && !r.r) {
    return;
  }
  const {
    slave: t
  } = await Promise.all([require.e(27), require.e(33)]).then(require.bind(null, 161));
  const e = r.C.lang;
  try {
    const n = await getLangFromLocal();
    const r = localStorage.getItem("setLangCode");
    const o = localStorage.getItem("langCode");
    if (r !== null && n !== null || o === e && n !== null) {
      c = n;
      g(r ? o : e);
    } else {
      await g(r ? o : e);
    }
    t.postTask("slave:master-init-i18n", c);
  } catch (t) {}
}
async function g(t) {
  const e = t.replace("-", "_");
  const n = (await i.get(`${r.B}/_locales/${Object(r.F)(e)}/messages.json?v=1727661706484`)).data;
  if (Object.keys(n).length > 50) {
    c = n;
    localStorage.setItem("langCode", t);
    setLangToLocal(n);
  }
}
export function setLangToLocal(t) {
  return a.setItem("current-language", t);
}
export function getLangFromLocal() {
  return a.getItem("current-language");
}