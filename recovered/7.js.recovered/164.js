var n = require(/*webcrack:missing*/"./5.js");
var s = n;
require(/*webcrack:missing*/"./7.js");
var _a = require(/*webcrack:missing*/"./23.js");
var o = _a;
var _c = require(/*webcrack:missing*/"./36.js");
var r = require(/*webcrack:missing*/"./165.js");
export async function a(e) {
  let t;
  t = await fetch(e).then(e => e.blob());
  return t;
}
export const f = (e, t = 0) => new s(i => {
  let n = document.createElement("img");
  n.onload = () => i(true);
  n.onerror = () => i(false);
  n.src = e;
  if (t > 0) {
    setTimeout(() => {
      n.src = "";
      n = null;
      i(false);
    }, t);
  }
});
export const g = e => o.setItem(_c.e, e);
export function c() {
  return o.getItem(_c.e);
}
export function e(e) {
  return !["image/gif"].includes(e.type) && e.size > window.__INFINITY__.maxLocalFileSize;
}
export function b(e, t = "cloud") {
  return e.map(e => ({
    type: t,
    id: e._id,
    url: e.url,
    content: e.thumbnail,
    like: e.like,
    source: e.source,
    rawUrl: e.rawUrl
  }));
}
export function d(e) {
  return e.map(e => {
    const {
      content: t,
      url: i,
      rawUrl: n
    } = Object(r.convertURL)(e.url);
    e.type = "user-library";
    e.content = t;
    e.url = i;
    e.rawUrl = n;
    return e;
  });
}