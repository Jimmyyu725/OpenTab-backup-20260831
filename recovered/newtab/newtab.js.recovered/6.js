require("./19.js");
require("./64.js");
require("./7.js");
import * as r from "./0.js";
import * as i from "./107.js";
var o = i;
import * as a from "./23.js";
var s = a;
let c = {};
export const i18n = function (t, e) {
  if (r.l && !r.r) {
    return chrome.i18n.getMessage(t, e) || t;
  }
  if (r.s || r.r) {
    if (r.r && e === undefined) {
      return chrome.i18n.getMessage(t, e) || t;
    }
    const i = c[t]?.message;
    const o = [];
    if (typeof e == "string") {
      o.push(e);
    } else if (Array.isArray(e)) {
      o.push(...e);
    }
    const a = /(\$.+?\$)/g;
    let s = a.exec(i);
    let u = i;
    while (s) {
      let [t] = o.splice(0, 1);
      if (t === undefined) {
        t = "";
      }
      u = u.replace(s[1], t);
      s = a.exec(i);
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
    const i = localStorage.getItem("langCode");
    if (r !== null && n !== null || i === e && n !== null) {
      c = n;
      m(r ? i : e);
    } else {
      await m(r ? i : e);
    }
    t.postTask("slave:master-init-i18n", c);
  } catch (t) {}
}
async function m(t) {
  const e = t.replace("-", "_");
  const n = (await o.get(`${r.B}/_locales/${Object(r.F)(e)}/messages.json?v=1727661706484`)).data;
  if (Object.keys(n).length > 50) {
    c = n;
    localStorage.setItem("langCode", t);
    setLangToLocal(n);
  }
}
export function setLangToLocal(t) {
  return s.setItem("current-language", t);
}
export function getLangFromLocal() {
  return s.getItem("current-language");
}