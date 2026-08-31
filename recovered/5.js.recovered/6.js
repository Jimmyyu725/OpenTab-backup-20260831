require(/*webcrack:missing*/"./19.js");
require(/*webcrack:missing*/"./64.js");
require(/*webcrack:missing*/"./7.js");
import * as r from "./0.js";
import * as o from /*webcrack:missing*/"./107.js";
var i = o;
import * as a from /*webcrack:missing*/"./23.js";
var u = a;
let c = {};
export const i18n = function (n, t) {
  if (r.l && !r.r) {
    return chrome.i18n.getMessage(n, t) || n;
  }
  if (r.s || r.r) {
    if (r.r && t === undefined) {
      return chrome.i18n.getMessage(n, t) || n;
    }
    const o = c[n]?.message;
    const i = [];
    if (typeof t == "string") {
      i.push(t);
    } else if (Array.isArray(t)) {
      i.push(...t);
    }
    const a = /(\$.+?\$)/g;
    let u = a.exec(o);
    let s = o;
    while (u) {
      let [n] = i.splice(0, 1);
      if (n === undefined) {
        n = "";
      }
      s = s.replace(u[1], n);
      u = a.exec(o);
    }
    return s || n;
  }
  return n;
};
function f() {
  return r.C.lang || "";
}
if (r.t) {
  globalThis.i18n = i18n;
} else {
  window.i18n = i18n;
}
export const IS_ZH = f() === "zh-CN";
export const IS_EN = f().startsWith("en");
export async function initMasterI18n() {
  const n = await getLangFromLocal();
  c = n;
}
export async function initI18n() {
  if (!r.s && !r.r) {
    return;
  }
  const {
    slave: n
  } = await Promise.all([require.e(27), require.e(33)]).then(require.bind(null, 161));
  const t = r.C.lang;
  try {
    const e = await getLangFromLocal();
    const r = localStorage.getItem("setLangCode");
    const o = localStorage.getItem("langCode");
    if (r !== null && e !== null || o === t && e !== null) {
      c = e;
      h(r ? o : t);
    } else {
      await h(r ? o : t);
    }
    n.postTask("slave:master-init-i18n", c);
  } catch (n) {}
}
async function h(n) {
  const t = n.replace("-", "_");
  const e = (await i.get(`${r.B}/_locales/${Object(r.F)(t)}/messages.json?v=1727661706484`)).data;
  if (Object.keys(e).length > 50) {
    c = e;
    localStorage.setItem("langCode", n);
    setLangToLocal(e);
  }
}
export function setLangToLocal(n) {
  return u.setItem("current-language", n);
}
export function getLangFromLocal() {
  return u.getItem("current-language");
}