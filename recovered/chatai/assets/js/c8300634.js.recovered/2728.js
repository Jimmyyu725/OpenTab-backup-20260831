var t = require(/*webcrack:missing*/"./3234.js");
var u = require(/*webcrack:missing*/"./6918.js");
export function U(n, r) {
  return (0, t.e)(function (e, t) {
    var o = 0;
    e.subscribe((0, u.x)(t, function (e) {
      t.next(n.call(r, e, o++));
    }));
  });
}