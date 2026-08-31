var t = require("./6883.js");
var u = require(/*webcrack:missing*/"./3234.js");
var o = require(/*webcrack:missing*/"./6918.js");
export function q(n) {
  if (n <= 0) {
    return function () {
      return t.E;
    };
  } else {
    return (0, u.e)(function (r, e) {
      var t = 0;
      r.subscribe((0, o.x)(e, function (r) {
        if (++t <= n) {
          e.next(r);
          if (n <= t) {
            e.complete();
          }
        }
      }));
    });
  }
}