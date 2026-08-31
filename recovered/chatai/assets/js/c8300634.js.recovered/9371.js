var t = require(/*webcrack:missing*/"./3234.js");
var u = require(/*webcrack:missing*/"./6918.js");
export function d(n) {
  return (0, t.e)(function (r, e) {
    var t = false;
    r.subscribe((0, u.x)(e, function (n) {
      t = true;
      e.next(n);
    }, function () {
      if (!t) {
        e.next(n);
      }
      e.complete();
    }));
  });
}