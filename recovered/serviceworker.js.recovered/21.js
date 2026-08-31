require("./27.js");
require("./107.js");
require("./3.js");
var r = require("./0.js");
require("./241.js");
var o = require("./22.js");
var i = o;
let s = {};
export const a = function (t, e) {
  if (r.f && !r.h) {
    return chrome.i18n.getMessage(t, e) || t;
  }
  if (r.i || r.h) {
    if (r.h && e === undefined) {
      return chrome.i18n.getMessage(t, e) || t;
    }
    const o = s[t]?.message;
    const i = [];
    if (typeof e == "string") {
      i.push(e);
    } else if (Array.isArray(e)) {
      i.push(...e);
    }
    const a = /(\$.+?\$)/g;
    let c = a.exec(o);
    let u = o;
    while (c) {
      let [t] = i.splice(0, 1);
      if (t === undefined) {
        t = "";
      }
      u = u.replace(c[1], t);
      c = a.exec(o);
    }
    return u || t;
  }
  return t;
};
function c() {
  return r.o.lang || "";
}
if (r.j) {
  globalThis.i18n = a;
} else {
  window.i18n = a;
}
c();
c().startsWith("en");
export async function b() {
  const t = await f();
  s = t;
}
function f() {
  return i.getItem("current-language");
}