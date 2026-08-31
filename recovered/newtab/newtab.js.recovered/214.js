var r = require("./5.js");
var i = r;
require("./257.js");
require("./19.js");
require("./64.js");
var o = require("./0.js");
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
export function a(t, e = o.C.lang) {
  const n = this;
  const r = /(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;
  let i;
  let a;
  let s;
  if (r.test(t)) {
    t.replace(r, (t, r, o, c) => {
      if (r.length === 4) {
        i = r;
        a = o;
        s = c;
      } else if (n.isFirstDate(e)) {
        s = r;
        a = o;
        i = c;
      } else {
        s = o;
        a = r;
        i = c;
      }
      if (e === "th") {
        i = Number(i) - 543;
      }
    });
    return new Date(`${i}/${a}/${s}`);
  } else {
    return null;
  }
}
export function d(t) {
  return t.slice(0, 1).toUpperCase() + t.slice(1);
}
export function b(t, e, n) {
  return new i((r, i) => {
    const o = new Image(e, n);
    o.onload = () => r(o);
    o.onerror = i;
    o.crossOrigin = "anonymous";
    o.src = t;
  });
}