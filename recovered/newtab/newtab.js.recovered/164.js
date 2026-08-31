var r = require("./5.js");
var i = r;
require("./7.js");
var o = require("./23.js");
var _a = o;
var s = require("./36.js");
var _c = require("./165.js");
export async function a(t) {
  let e;
  e = await fetch(t).then(t => t.blob());
  return e;
}
export const f = (t, e = 0) => new i(n => {
  let r = document.createElement("img");
  r.onload = () => n(true);
  r.onerror = () => n(false);
  r.src = t;
  if (e > 0) {
    setTimeout(() => {
      r.src = "";
      r = null;
      n(false);
    }, e);
  }
});
export const g = t => _a.setItem(s.e, t);
export function c() {
  return _a.getItem(s.e);
}
export function e(t) {
  return !["image/gif"].includes(t.type) && t.size > window.__INFINITY__.maxLocalFileSize;
}
export function b(t, e = "cloud") {
  return t.map(t => ({
    type: e,
    id: t._id,
    url: t.url,
    content: t.thumbnail,
    like: t.like,
    source: t.source,
    rawUrl: t.rawUrl
  }));
}
export function d(t) {
  return t.map(t => {
    const {
      content: e,
      url: n,
      rawUrl: r
    } = Object(_c.convertURL)(t.url);
    t.type = "user-library";
    t.content = e;
    t.url = n;
    t.rawUrl = r;
    return t;
  });
}