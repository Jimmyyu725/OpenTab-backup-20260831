require("./6.js");
require("./357.js");
require("./27.js");
require("./107.js");
var r = require("./0.js");
export function b(t) {
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
export function a(t, e = r.o.lang) {
  const n = this;
  const o = /(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;
  let i;
  let s;
  let a;
  if (o.test(t)) {
    t.replace(o, (t, r, o, c) => {
      if (r.length === 4) {
        i = r;
        s = o;
        a = c;
      } else if (n.isFirstDate(e)) {
        a = r;
        s = o;
        i = c;
      } else {
        a = o;
        s = r;
        i = c;
      }
      if (e === "th") {
        i = Number(i) - 543;
      }
    });
    return new Date(`${i}/${s}/${a}`);
  } else {
    return null;
  }
}