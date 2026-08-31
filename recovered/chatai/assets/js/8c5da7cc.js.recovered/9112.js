var n = require("./3234.js");
var o = require("./6918.js");
export function h(e, t) {
  return (0, n.e)(function (r, n) {
    var a = 0;
    r.subscribe((0, o.x)(n, function (r) {
      return e.call(t, r, a++) && n.next(r);
    }));
  });
}