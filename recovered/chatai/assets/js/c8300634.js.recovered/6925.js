var t = require(/*webcrack:missing*/"./3056.js");
var u = require(/*webcrack:missing*/"./6918.js");
var o = require(/*webcrack:missing*/"./4040.js");
var i = require("./6626.js");
export function U(n, r = {}) {
  var e = r.selector;
  var c = (0, t._T)(r, ["selector"]);
  return new o.y(function (r) {
    var o = new AbortController();
    var f = o.signal;
    var a = true;
    var l = c.signal;
    if (l) {
      if (l.aborted) {
        o.abort();
      } else {
        function s() {
          if (!f.aborted) {
            o.abort();
          }
        }
        l.addEventListener("abort", s);
        r.add(function () {
          return l.removeEventListener("abort", s);
        });
      }
    }
    var v = (0, t.pi)((0, t.pi)({}, c), {
      signal: f
    });
    function d(n) {
      a = false;
      r.error(n);
    }
    fetch(n, v).then(function (n) {
      if (e) {
        (0, i.Xf)(e(n)).subscribe((0, u.x)(r, undefined, function () {
          a = false;
          r.complete();
        }, d));
      } else {
        a = false;
        r.next(n);
        r.complete();
      }
    }).catch(d);
    return function () {
      if (a) {
        o.abort();
      }
    };
  });
}