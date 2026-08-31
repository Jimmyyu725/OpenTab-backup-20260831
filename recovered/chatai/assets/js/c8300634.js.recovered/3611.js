var t = require("./6626.js");
var u = require(/*webcrack:missing*/"./3234.js");
var o = require(/*webcrack:missing*/"./6918.js");
export function w(n, r) {
  return (0, u.e)(function (e, u) {
    var i = null;
    var c = 0;
    var f = false;
    function a() {
      return f && !i && u.complete();
    }
    e.subscribe((0, o.x)(u, function (e) {
      if (i != null) {
        i.unsubscribe();
      }
      var f = 0;
      var l = c++;
      (0, t.Xf)(n(e, l)).subscribe(i = (0, o.x)(u, function (n) {
        return u.next(r ? r(e, n, l, f++) : n);
      }, function () {
        i = null;
        a();
      }));
    }, function () {
      f = true;
      a();
    }));
  });
}