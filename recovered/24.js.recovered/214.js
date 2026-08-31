var r = require("./5.js");
var o = r;
require("./257.js");
require("./19.js");
require("./64.js");
var i = require("./0.js");
export function c(t) {
  return function (e) {
    const n = new Uint8Array((e || 40) / 2);
    window.crypto.getRandomValues(n);
    return t + new Date().getTime().toString(32) + function (t) {
      let e = "";
      const n = "abcdefghijklmnopqrstuvwxyz0123456789";
      for (let r = 0; r < t; r++) {
        e += n.charAt(Math.floor(Math.random() * n.length));
      }
      return e;
    }(18);
  }();
}
export function a(t, e = i.C.lang) {
  const n = this;
  const r = /(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;
  let o;
  let s;
  let a;
  if (r.test(t)) {
    t.replace(r, (t, r, i, c) => {
      if (r.length === 4) {
        o = r;
        s = i;
        a = c;
      } else if (n.isFirstDate(e)) {
        a = r;
        s = i;
        o = c;
      } else {
        a = i;
        s = r;
        o = c;
      }
      if (e === "th") {
        o = Number(o) - 543;
      }
    });
    return new Date(`${o}/${s}/${a}`);
  } else {
    return null;
  }
}
export function d(t) {
  return t.slice(0, 1).toUpperCase() + t.slice(1);
}
export function b(t, e, n) {
  return new o((r, o) => {
    const i = new Image(e, n);
    i.onload = () => r(i);
    i.onerror = o;
    i.crossOrigin = "anonymous";
    i.src = t;
  });
}