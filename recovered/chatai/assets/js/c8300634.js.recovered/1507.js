var t = require("./2728.js");
var u = require("./6626.js");
var o = require(/*webcrack:missing*/"./3234.js");
var i = require("./1058.js");
var c = require(/*webcrack:missing*/"./6918.js");
var f = require(/*webcrack:missing*/"./6559.js");
export function z(n, r, e = Infinity) {
  if ((0, f.m)(r)) {
    return z(function (e, o) {
      return (0, t.U)(function (n, t) {
        return r(e, n, o, t);
      })((0, u.Xf)(n(e, o)));
    }, e);
  } else {
    if (typeof r == "number") {
      e = r;
    }
    return (0, o.e)(function (r, t) {
      return function (n, r, e, t, o, f, a, l) {
        var s = [];
        var v = 0;
        var d = 0;
        var b = false;
        function h() {
          if (!!b && !s.length && !v) {
            r.complete();
          }
        }
        function p(n) {
          if (v < t) {
            return m(n);
          } else {
            return s.push(n);
          }
        }
        function m(n) {
          if (f) {
            r.next(n);
          }
          v++;
          var l = false;
          (0, u.Xf)(e(n, d++)).subscribe((0, c.x)(r, function (n) {
            if (o != null) {
              o(n);
            }
            if (f) {
              p(n);
            } else {
              r.next(n);
            }
          }, function () {
            l = true;
          }, undefined, function () {
            if (l) {
              try {
                v--;
                var n = function () {
                  var n = s.shift();
                  if (a) {
                    (0, i.f)(r, a, function () {
                      return m(n);
                    });
                  } else {
                    m(n);
                  }
                };
                while (s.length && v < t) {
                  n();
                }
                h();
              } catch (n) {
                r.error(n);
              }
            }
          }));
        }
        n.subscribe((0, c.x)(r, p, function () {
          b = true;
          h();
        }));
        return function () {
          if (l != null) {
            l();
          }
        };
      }(r, t, n, e);
    });
  }
}