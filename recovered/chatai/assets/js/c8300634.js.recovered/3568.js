var t = require("./6626.js");
var u = require(/*webcrack:missing*/"./6918.js");
var o = require(/*webcrack:missing*/"./3234.js");
export function K(n) {
  return (0, o.e)(function (r, e) {
    var o;
    var c = null;
    var f = false;
    c = r.subscribe((0, u.x)(e, undefined, undefined, function (u) {
      o = (0, t.Xf)(n(u, K(n)(r)));
      if (c) {
        c.unsubscribe();
        c = null;
        o.subscribe(e);
      } else {
        f = true;
      }
    }));
    if (f) {
      c.unsubscribe();
      c = null;
      o.subscribe(e);
    }
  });
}